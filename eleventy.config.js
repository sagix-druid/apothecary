import { existsSync, readFileSync } from "node:fs";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

const site = JSON.parse(readFileSync(new URL("./src/_data/site.json", import.meta.url)));
const imageSizes = JSON.parse(readFileSync(new URL("./src/_data/imageSizes.json", import.meta.url)));

// The site's look: one folder per theme in src/_includes/themes/. `theme` in site.json picks the live one;
// THEME=<name> npm start previews another without changing it.
const theme = process.env.THEME || site.theme || "casper";
if (!existsSync(new URL(`./src/_includes/themes/${theme}/base.njk`, import.meta.url))) throw new Error(`No theme called "${theme}" in src/_includes/themes/`);

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: site.timezone });
const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// The import script leaves <!-- signup --> and <!-- tip-card --> where Ghost had its signup and tip boxes.
function signupCard() {
  if (!site.subscribeUrl) return "";
  return `<div class="kg-card custom-signup">
  <h2>Sign up for ${site.title}</h2>
  <p>${site.description}</p>
  <a class="gh-btn custom-signup-button" href="${site.subscribeUrl}">${site.subscribeLabel || "Subscribe"}</a>
</div>`;
}

function tipCard() {
  if (!site.tipUrl) return "";
  return `<p class="custom-tip"><a class="gh-btn custom-signup-button" href="${site.tipUrl}">Support ${site.title} with a tip</a></p>`;
}

const absolute = (url) => (url.startsWith("/") ? site.url + url : url);
const stripTags = (html) => html.replace(/<\/?[a-z][a-z0-9-]*(\s[^>]*)?\/?>/gi, "");
const decodeEntities = (text) =>
  text
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const captionOf = (figure) => {
  const match = figure.match(/<figcaption>([\s\S]*?)<\/figcaption>/);
  return match ? decodeEntities(stripTags(match[1])).trim() : "";
};

// Turns a post's Markdown into plain Markdown for AI readers: no HTML cards, full URLs.
function markdownForLlms(markdown) {
  const text = markdown
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<!-- (signup|tip-card) -->/g, "")
    .replace(/<figure class="kg-card kg-bookmark-card[\s\S]*?<\/figure>/g, (figure) => {
      const href = figure.match(/href="([^"]+)"/)?.[1] || "";
      const title = decodeEntities(stripTags(figure.match(/kg-bookmark-title">([\s\S]*?)<\/div>/)?.[1] || ""))
        .trim()
        .replace(/^#\s*/, "");
      const caption = captionOf(figure);
      return `Related: [${title}](${absolute(href)})${caption ? `. ${caption}` : ""}`;
    })
    .replace(/<figure[\s\S]*?<\/figure>/g, (figure) => {
      const video = figure.match(/<iframe[^>]*src="([^"]+)"/)?.[1];
      const caption = captionOf(figure);
      if (video) return `[Video: ${video}]${caption ? ` ${caption}` : ""}`;
      return caption ? `[Image: ${caption}]` : "";
    })
    .replace(/<iframe[^>]*src="([^"]+)"[\s\S]*?<\/iframe>/g, "[Video: $1]")
    .replace(/\]\(\//g, `](${site.url}/`);
  return decodeEntities(stripTags(text))
    .replace(/\\([\\`*_{}\[\]()#+\-.!<>~|])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Ghost served smaller copies at /content/images/size/wNNN/. `npm run images` makes them and lists them in imageSizes.json.
const srcsetOf = (image) => {
  const info = imageSizes[image];
  if (!info) return "";
  const entries = info.sizes.map((w) => `${image.replace("/content/images/", `/content/images/size/w${w}/`)} ${w}w`);
  return [...entries, `${image} ${info.width}w`].join(", ");
};

export default function (eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/content": "content" });

  eleventyConfig.addGlobalData("theme", theme);
  // Theme previews are not real visits, so they leave out the analytics script.
  eleventyConfig.addGlobalData("themePreview", Boolean(process.env.THEME));
  for (const layout of ["base", "post", "page", "listing"]) {
    eleventyConfig.addLayoutAlias(`${layout}.njk`, `themes/${theme}/${layout}.njk`);
  }

  const byNewest = (a, b) => b.date - a.date;
  eleventyConfig.addCollection("posts", (api) => api.getFilteredByGlob("src/posts/*.md").sort(byNewest));
  eleventyConfig.addCollection("pages", (api) => api.getFilteredByGlob("src/pages/*.md"));
  // One topic page per Ghost tag, at /tag/<slug>/, busiest first.
  eleventyConfig.addCollection("topics", (api) => {
    const topics = new Map();
    for (const post of api.getFilteredByGlob("src/posts/*.md").sort(byNewest)) {
      for (const name of post.data.topics || []) {
        const slug = slugify(name);
        if (!topics.has(slug)) topics.set(slug, { name, slug, posts: [] });
        topics.get(slug).posts.push(post);
      }
    }
    return [...topics.values()].sort((a, b) => b.posts.length - a.posts.length);
  });

  eleventyConfig.addFilter("plainTitle", (title) => title.replace(/^#\s*/, ""));
  eleventyConfig.addFilter("forLlms", markdownForLlms);
  eleventyConfig.addFilter("displayDate", (date) => dateFormat.format(date));
  eleventyConfig.addFilter("isoDay", (date) => date.toISOString().slice(0, 10));
  eleventyConfig.addFilter("iso", (date) => new Date(date).toISOString());
  eleventyConfig.addFilter("rfc822", (date) => new Date(date).toUTCString());
  eleventyConfig.addFilter("topicSlug", slugify);
  eleventyConfig.addFilter("topicName", (name) => name);
  eleventyConfig.addFilter("trimText", (text) => (text || "").trim());
  // A channel is a custom listing page such as /episodes/ (Ghost's routes.yaml made these). site.json lists them under "channels".
  eleventyConfig.addFilter("channelPosts", (posts, channel) => {
    const topic = slugify(channel.topic || channel.slug);
    // "tag" picks posts by a Ghost internal tag such as "#videos", which the import keeps in internal_tags.
    const found = channel.tag
      ? posts.filter((post) => (post.data.internal_tags || []).includes(channel.tag))
      : posts.filter((post) => (post.data.topics || []).some((t) => slugify(t) === topic));
    return channel.oldestFirst ? [...found].sort((a, b) => a.date - b.date) : found;
  });
  // The three newest other posts that share a topic with this one, for the "read more" strip under a post.
  eleventyConfig.addFilter("readNext", (posts, current) => {
    const mine = new Set((current.topics || []).map(slugify));
    return posts.filter((post) => post.url !== current.page.url && (post.data.topics || []).some((t) => mine.has(slugify(t)))).slice(0, 3);
  });
  // Market figures on the tokenomics scorecards (see src/_data/market.js).
  const compactUsd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 });
  eleventyConfig.addFilter("usd", (n) =>
    n >= 1 ? "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "$" + n.toPrecision(4),
  );
  eleventyConfig.addFilter("compactUsd", (n) => compactUsd.format(n));
  eleventyConfig.addFilter("compactNumber", (n) => Math.round(n).toLocaleString("en-US"));
  eleventyConfig.addFilter("pct", (n) => (n > 0 ? "+" : "") + n.toFixed(1) + "%");
  eleventyConfig.addFilter("utcTime", (iso) => new Date(iso).toISOString().slice(0, 16).replace("T", " ") + " UTC");
  // Fills each <td data-tvl="defillama-slug">–</td> with that protocol's TVL from market.js.
  eleventyConfig.addFilter("fillTvl", (html, protocolTvl = {}) =>
    html.replace(/data-tvl="([^"]+)">–</g, (match, slug) => (protocolTvl[slug] != null ? `data-tvl="${slug}">${compactUsd.format(protocolTvl[slug])}<` : match)),
  );
  // Writes live figures into a scorecard's own text where it says [[tvl]] or [[market cap]].
  eleventyConfig.addFilter("fillFigures", (html, figures = {}) =>
    html
      .replaceAll("[[tvl]]", figures.tvl != null ? compactUsd.format(figures.tvl) : "n/a")
      .replaceAll("[[market cap]]", figures.marketCap != null ? compactUsd.format(figures.marketCap) : "n/a"),
  );
  eleventyConfig.addFilter("sparklinePoints", (prices, width, height) => {
    const min = Math.min(...prices);
    const range = Math.max(...prices) - min || 1;
    return prices
      .map((p, i) => `${((i / (prices.length - 1)) * width).toFixed(1)},${(height - 2 - ((p - min) / range) * (height - 4)).toFixed(1)}`)
      .join(" ");
  });
  eleventyConfig.addFilter("srcset", srcsetOf);
  // Taller-than-wide pictures, so cards can treat portraits differently.
  eleventyConfig.addFilter("isPortrait", (image) => Boolean(imageSizes[image] && imageSizes[image].height > imageSizes[image].width));
  eleventyConfig.addFilter("sizedImage", (image, width) => {
    const info = imageSizes[image];
    return info && info.sizes.includes(width) ? image.replace("/content/images/", `/content/images/size/w${width}/`) : image;
  });
  eleventyConfig.addFilter("readingTime", (html) => {
    const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    const images = (html.match(/<img/g) || []).length;
    let seconds = (words / 275) * 60;
    for (let i = 0; i < images; i++) seconds += Math.max(12 - i, 3);
    return Math.max(1, Math.round(seconds / 60));
  });
  eleventyConfig.addFilter("forFeed", (html) =>
    html
      .replace(/<!-- (signup|tip-card) -->/g, "")
      .replace(/(src|href)="\/(?!\/)/g, `$1="${site.url}/`)
      .replace(/\s(srcset|sizes)="[^"]*"/g, ""),
  );

  eleventyConfig.addTransform("cards", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    return content.replaceAll("<!-- signup -->", signupCard()).replaceAll("<!-- tip-card -->", tipCard());
  });

  return {
    // The GitHub workflow sets PATH_PREFIX to /<repo>/ while the site lives at <account>.github.io/<repo>/,
    // and to / once a custom domain is set. HtmlBasePlugin then adds it to every link and picture.
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
