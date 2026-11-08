// One-time import: turns ghost-export/export.json into Markdown posts and pages in src/, and copies the images they use.
// Also saves Ghost's code injection to theme/ and prints the settings to copy into src/_data/site.json.
// Run it once with: npm run import   (put the unzipped Ghost export in ghost-export/ first)
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";
import * as cheerio from "cheerio";
import TurndownService from "turndown";

const root = new URL("..", import.meta.url).pathname;
const exportDir = join(root, "ghost-export");
const raw = JSON.parse(readFileSync(join(exportDir, "export.json"), "utf8"));
const db = raw.db ? raw.db[0].data : raw.data;

const tagsById = Object.fromEntries(db.tags.map((t) => [t.id, t]));
const metaByPost = Object.fromEntries(db.posts_meta.map((m) => [m.post_id, m]));
const tagLinks = [...db.posts_tags].sort((a, b) => a.sort_order - b.sort_order);

const turndown = new TurndownService({ headingStyle: "atx", hr: "---", codeBlockStyle: "fenced", emDelimiter: "*" });
turndown.keep(["figure", "iframe", "style"]);
turndown.addRule("marker", {
  filter: (node) => node.nodeName === "DIV" && node.getAttribute("data-marker"),
  replacement: (_, node) => `\n\n<!-- ${node.getAttribute("data-marker")} -->\n\n`,
});
turndown.addRule("keepHtmlCards", {
  filter: (node) => node.nodeName === "DIV" && /kg-/.test(node.getAttribute("class") || ""),
  replacement: (_, node) => `\n\n${node.outerHTML}\n\n`,
});
turndown.addRule("keepFiguresOnOneBlock", {
  filter: ["figure", "iframe"],
  replacement: (_, node) => `\n\n${node.outerHTML}\n\n`,
});

function clean(html) {
  const $ = cheerio.load(`<body>${html.replaceAll("__GHOST_URL__", "")}</body>`, null, false);
  $(".kg-signup-card").replaceWith('<div data-marker="signup">marker</div>');
  $('figure.kg-bookmark-card:has(a[href*="#/portal/support"])').replaceWith('<div data-marker="tip-card">marker</div>');
  $("[style]").each((_, el) => {
    const style = ($(el).attr("style") || "").replace(/white-space:\s*pre-wrap;?/g, "").trim();
    if (style) $(el).attr("style", style);
    else $(el).removeAttr("style");
  });
  $("[dir]").removeAttr("dir");
  $("em.italic").removeAttr("class");
  $("strong.bold, b.bold").removeAttr("class");
  $("i:has(> em:only-child)").each((_, el) => $(el).replaceWith($(el).html()));
  $("b:has(> strong:only-child)").each((_, el) => $(el).replaceWith($(el).html()));
  $("span").each((_, el) => {
    if (Object.keys(el.attribs).length === 0) $(el).replaceWith($(el).html());
  });
  $("img[onerror]").removeAttr("onerror");
  return $("body").html() ?? $.html();
}

const yaml = (value) => JSON.stringify(value);
const usedImages = new Set();
const noteImage = (path) => {
  if (path) usedImages.add(path.replace(/\/size\/w\d+(?:h\d+)?/, ""));
};

const published = db.posts.filter((post) => post.status === "published");
const skipped = db.posts.length - published.length;
if (skipped) console.log(`Skipping ${skipped} draft or scheduled post(s). Only published posts are imported.`);

for (const post of published) {
  const meta = metaByPost[post.id] || {};
  const topics = tagLinks
    .filter((l) => l.post_id === post.id)
    .map((l) => tagsById[l.tag_id])
    .filter((t) => t.visibility === "public")
    .map((t) => t.name);
  const featureImage = (post.feature_image || "").replace("__GHOST_URL__", "");
  noteImage(featureImage);

  const html = clean(post.html || "");
  for (const m of html.matchAll(/\/content\/images\/[^"'\s,)]+/g)) noteImage(m[0]);

  const front = [
    "---",
    `title: ${yaml(post.title)}`,
    `date: ${yaml(post.published_at)}`,
    `updated: ${yaml(post.updated_at)}`,
    `excerpt: ${yaml(post.custom_excerpt || "")}`,
    `feature_image: ${yaml(featureImage)}`,
  ];
  if (meta.feature_image_caption) front.push(`feature_image_caption: ${yaml(clean(meta.feature_image_caption))}`);
  if (meta.feature_image_alt) front.push(`feature_image_alt: ${yaml(meta.feature_image_alt)}`);
  front.push(`topics: ${yaml(topics)}`);
  if (post.featured) front.push("featured: true");
  front.push("---", "", "");

  const body = turndown.turndown(html).replace(/<(https?:\/\/)/g, "\\<$1");
  const dir = post.type === "page" ? "pages" : "posts";
  const out = join(root, "src", dir, `${post.slug}.md`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, front.join("\n") + body + "\n");
}

const settings = Object.fromEntries(db.settings.map((s) => [s.key, s.value]));
const author = db.users[0];
for (const extra of [settings.icon, settings.logo, settings.cover_image, settings.og_image, settings.twitter_image, author.profile_image, author.cover_image]) {
  const local = (extra || "").replace("__GHOST_URL__", "");
  if (local.startsWith("/content/")) noteImage(local); // Ghost's own placeholder pictures are web addresses, not files
}

const dimensions = {};
let missing = 0;
for (const path of usedImages) {
  const from = join(exportDir, decodeURI(path));
  const to = join(root, "src", decodeURI(path));
  if (!existsSync(from)) {
    console.log("MISSING", path);
    missing++;
    continue;
  }
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
}
console.log(`posts and pages: ${published.length}, images copied: ${usedImages.size - missing}, missing: ${missing}`);

// Ghost kept the site's custom code in Settings, Code injection. Keep a copy as a record of colors and scripts to carry over.
const injections = [
  ["codeinjection_head", "ghost-code-injection-head.html"],
  ["codeinjection_foot", "ghost-code-injection-foot.html"],
];
for (const [key, file] of injections) {
  if (!settings[key]) continue;
  mkdirSync(join(root, "theme"), { recursive: true });
  writeFileSync(join(root, "theme", file), settings[key] + "\n");
  console.log(`Saved theme/${file} (look in it for colors, fonts and scripts)`);
}

const strip = (value) => {
  const path = (value || "").replace("__GHOST_URL__", "");
  return path.startsWith("/content/") ? path : ""; // a picture that is not in the export, such as Ghost's placeholder cover, is left out
};
console.log("\nCopy these into src/_data/site.json:");
console.log(
  JSON.stringify(
    {
      title: settings.title,
      description: settings.description,
      author: author.name,
      authorSlug: author.slug,
      authorImage: strip(author.profile_image),
      twitter: (settings.twitter || "").replace(/^@/, ""),
      timezone: settings.timezone,
      icon: strip(settings.icon),
      defaultImage: strip(settings.og_image || settings.twitter_image || settings.cover_image),
      coverImage: strip(settings.cover_image),
    },
    null,
    2,
  ),
);
console.log("\nGhost's accent color was " + (settings.accent_color || "not set") + ". Put it in src/assets/css/colors.css.");
// Ghost's custom listing pages, such as /episodes/, live in routes.yaml, not in the posts. Each becomes a "channel" in site.json.
const routesFile = join(exportDir, "content", "settings", "routes.yaml");
if (existsSync(routesFile)) {
  let current = null;
  const found = [];
  for (const line of readFileSync(routesFile, "utf8").split("\n")) {
    const route = line.match(/^\s{2}(\/[^\s:]+\/):\s*$/);
    if (route) current = route[1];
    const filter = line.match(/^\s+filter:\s*(.+?)\s*$/);
    if (filter && current) found.push({ slug: current.replaceAll("/", ""), filter: filter[1] });
  }
  if (found.length) {
    console.log("\nGhost custom pages (routes.yaml). Add each to \"channels\" in site.json, as { \"name\": \"...\", \"slug\": \"...\", \"topic\": \"the tag's name\" }:");
    for (const { slug, filter } of found) console.log(`  /${slug}/ listed ${filter}`);
  }
}
try {
  const nav = JSON.parse(settings.navigation || "[]").map((item) => ({ label: item.label, url: strip(item.url) }));
  console.log("Ghost's main menu, for \"nav\" in site.json:\n" + JSON.stringify(nav, null, 2));
} catch {}
