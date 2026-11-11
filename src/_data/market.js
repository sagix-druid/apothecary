// Live market figures for the tokenomics scorecards, fetched once per build and written into the pages.
// Which tokens, and where their figures come from, is set in tokens.json (coingecko id, defillama chain or protocol).
// The GitHub workflow rebuilds the site on a schedule, so the figures stay fresh without any script in the reader's browser.
//
// A source that fails leaves that figure out, and the page shows "not available". With MARKET_REQUIRED=1 (the scheduled
// build sets it) a failed CoinGecko call stops the build instead, so the live site keeps its last good figures.
// Set COINGECKO_API_KEY to a free CoinGecko demo key if their public rate limit starts refusing the build.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

const tokens = JSON.parse(readFileSync(new URL("./tokens.json", import.meta.url)));
const cacheFile = new URL("../../.cache/market.json", import.meta.url);
const cacheMinutes = 30; // `npm start` rebuilds on every save; this keeps it from calling the APIs each time

async function getJson(url, headers = {}) {
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(url, { headers: { accept: "application/json", ...headers }, signal: AbortSignal.timeout(20000) });
    if (response.ok) return response.json();
    if (response.status !== 429 || attempt === 3) throw new Error(`${url} answered ${response.status}`);
    await new Promise((resolve) => setTimeout(resolve, 15000 * attempt)); // rate limited: wait and try again
  }
}

async function fetchAll() {
  const result = { updated: new Date().toISOString(), tokens: {}, protocolTvl: {}, failed: [] };
  const entry = (slug) => (result.tokens[slug] ??= {});

  const ids = Object.values(tokens).map((t) => t.coingecko).filter(Boolean);
  try {
    const key = process.env.COINGECKO_API_KEY;
    const coins = await getJson(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(",")}&sparkline=true&price_change_percentage=7d`,
      key ? { "x-cg-demo-api-key": key } : {},
    );
    for (const [slug, token] of Object.entries(tokens)) {
      const coin = coins.find((c) => c.id === token.coingecko);
      if (!coin) continue;
      Object.assign(entry(slug), {
        price: coin.current_price,
        change7d: coin.price_change_percentage_7d_in_currency,
        marketCap: coin.market_cap,
        sparkline: (coin.sparkline_in_7d?.price || []).filter((_, i, all) => i % 4 === 0 || i === all.length - 1), // every 4th hour is plenty for a 7-day line
      });
    }
  } catch (error) {
    result.failed.push(`CoinGecko: ${error.message}`);
  }

  try {
    const chains = await getJson("https://api.llama.fi/v2/chains");
    for (const [slug, token] of Object.entries(tokens)) {
      const chain = token.defillama?.chain && chains.find((c) => c.name === token.defillama.chain);
      if (chain) entry(slug).tvl = chain.tvl;
    }
  } catch (error) {
    result.failed.push(`DeFiLlama chains: ${error.message}`);
  }

  // Protocol TVL: every scorecard protocol, plus every <td data-tvl="slug"> on a page (the DeFi landing pages use these).
  const pageSlugs = ["pages", "posts"].flatMap((dir) =>
    readdirSync(new URL(`../${dir}/`, import.meta.url))
      .filter((file) => file.endsWith(".md"))
      .flatMap((file) => [...readFileSync(new URL(`../${dir}/${file}`, import.meta.url), "utf8").matchAll(/data-tvl="([^"]+)"/g)].map((m) => m[1])),
  );
  const protocolSlugs = [...new Set([...Object.values(tokens).map((t) => t.defillama?.protocol).filter(Boolean), ...pageSlugs])];
  const queue = [...protocolSlugs];
  const worker = async () => {
    for (let slug; (slug = queue.shift()); ) {
      try {
        const tvl = await getJson(`https://api.llama.fi/tvl/${slug}`);
        if (typeof tvl === "number") result.protocolTvl[slug] = tvl;
      } catch (error) {
        result.failed.push(`DeFiLlama ${slug}: ${error.message}`);
      }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker)); // six at a time, to stay polite to the free API
  for (const [slug, token] of Object.entries(tokens)) {
    const tvl = result.protocolTvl[token.defillama?.protocol];
    if (tvl != null) entry(slug).tvl = tvl;
  }

  for (const [slug, token] of Object.entries(tokens).filter(([, t]) => t.lightning)) {
    try {
      const stats = await getJson("https://mempool.space/api/v1/lightning/statistics/latest");
      entry(slug).lightningBtc = stats.latest.total_capacity / 1e8;
    } catch (error) {
      result.failed.push(`mempool.space: ${error.message}`);
    }
  }
  return result;
}

export default async function () {
  if (existsSync(cacheFile)) {
    const cached = JSON.parse(readFileSync(cacheFile, "utf8"));
    if (Date.now() - Date.parse(cached.updated) < cacheMinutes * 60000 && cached.protocolTvl && !cached.failed.some((p) => p.startsWith("CoinGecko"))) return cached;
  }
  const result = await fetchAll();
  for (const problem of result.failed) console.warn(`[market] ${problem}`);
  if (process.env.MARKET_REQUIRED && result.failed.some((p) => p.startsWith("CoinGecko"))) {
    throw new Error("Market data is required for this build and CoinGecko failed.");
  }
  mkdirSync(new URL("../../.cache/", import.meta.url), { recursive: true });
  writeFileSync(cacheFile, JSON.stringify(result));
  return result;
}
