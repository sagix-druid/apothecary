---
title: "Raydium"
date: "2025-11-12T15:59:36.000Z"
updated: "2025-11-12T15:59:36.000Z"
excerpt: "Raydium (RAY) scorecard with live price, tokenomics analysis, and portfolio insights. Research Solana's leading AMM with Serum orderbook integration, 555M hard cap, and fee-sharing staking. Includes TVL data and links to CoinGecko and DeFiLlama."
feature_image: "/content/images/2025/11/ray.jpg"
topics: ["defi","solana","ray","raydium"]
internal_tags: ["#defi","#solana","#ray","#raydium"]
---

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://raydium.io/swap/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Swap | Raydium</div><div class="kg-bookmark-description">An on-chain order book AMM powering the evolution of DeFi</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/favicon.ico" alt=""><span class="kg-bookmark-author">Raydium</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/7be7ee6c-56b2-451e-a010-6c21e0db2ee5.png" alt=""></div></a></figure>

Solana's leading AMM with Serum orderbook integration. Hard cap of 555 million tokens with fee-sharing for stakers and protocol buybacks.

# ☀️ RAY Raydium

Loading...

Loading...

[CoinGecko ↗](https://www.coingecko.com/en/coins/raydium) | [DeFiLlama ↗](https://defillama.com/protocol/raydium)

---

### 📋 Tokenomics:

**Hard Cap:** YES

**Mintable:** NO

**Burn:** NO

**Fees:** YES

**Stakeable:** YES

**Type:** Governance

**Market Cap:** Loading...

**Protocol TVL:** Loading...

---

## 📚 The Scholar's Assessment

> Raydium represents Solana's answer to Ethereum's Uniswap—a high-performance AMM leveraging Solana's speed and Serum's central limit order book. With ~$1B+ in TVL and integration across the Solana ecosystem, it's the dominant DEX for the network. The RAY token captures 0.03% of all trading fees through staking, creating direct value accrual from the protocol's $500M+ daily volume. Unlike inflationary farm tokens, RAY has a hard cap of 555M tokens with 12% of fees used for buybacks.

---

## 📊 Portfolio Perspective

### ✅ Strengths

*   Dominant Solana DEX (~$1B+ TVL)
*   Hard cap with buyback mechanism
*   Direct fee revenue sharing via staking
*   Serum orderbook integration

### ⚠️ Considerations

*   Solana network dependency risk
*   Heavy competition from Jupiter
*   Token unlock schedule ongoing

**Allocation Tier:**

Ecosystem Infrastructure

**Risk Profile:**

Medium-High

**Time Horizon:**

Medium-term (2-5 years)

---

## About Raydium

Raydium, launched in February 2021, is an automated market maker (AMM) and liquidity provider built on the Solana blockchain. Unlike traditional AMMs, Raydium provides on-chain liquidity to Serum's central limit order book, giving liquidity providers access to the entire order flow. The protocol charges a 0.25% trading fee: 0.22% goes to liquidity providers, while 0.03% rewards RAY stakers. With 555 million RAY tokens hard-capped and fully minted at genesis, the protocol uses 12% of fees for RAY buybacks rather than token burns. Raydium has become Solana's infrastructure backbone, hosting the majority of the network's DeFi trading volume.

---

## 🔬 Further Research

*   [Solana Scorecard](/solana-scorecard) - Understand the base layer
*   [Solana DeFi Protocols](/solana-defi) - Explore other Solana protocols
*   [Raydium Documentation ↗](https://docs.raydium.io) - Official protocol docs

---

> ### 🔬 Research Starting Point
> 
> This scorecard provides a research foundation. We encourage readers to conduct further research at **CoinGecko**, **DeFiLlama**, and other authoritative web resources before making investment decisions. Historical performance does not guarantee future results. Cryptocurrency investments carry significant risks including total loss of capital.

function generateSparklineSVG(prices, width, height, strokeColor) { if (!prices || prices.length < 2) { return '<svg width="' + width + '" height="' + height + '"></svg>'; } var minPrice = Math.min.apply(Math, prices); var maxPrice = Math.max.apply(Math, prices); var priceRange = maxPrice - minPrice || 1; var points = prices.map(function(price, i) { var x = (i / (prices.length - 1)) \* width; var y = height - ((price - minPrice) / priceRange) \* height; return x + ',' + y; }).join(' '); return '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="' + strokeColor + '" stroke-width="2" points="' + points + '" /></svg>'; } async function updateRaydiumData() { try { var response = await fetch('https://api.coingecko.com/api/v3/coins/raydium?localization=false&tickers=false&market\_data=true&community\_data=false&developer\_data=false&sparkline=true'); var data = await response.json(); if (data && data.market\_data) { // Update price var price = data.market\_data.current\_price.usd; document.getElementById('ray-price').textContent = '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // Update 7D change var change7d = data.market\_data.price\_change\_percentage\_7d; var changeElement = document.getElementById('ray-change'); if (change7d !== undefined && change7d !== null) { changeElement.textContent = (change7d > 0 ? '+' : '') + change7d.toFixed(1) + '% (7D)'; changeElement.style.color = change7d > 0 ? '#22c55e' : '#ef4444'; } else { changeElement.textContent = 'Change unavailable'; } // Update market cap var marketCap = data.market\_data.market\_cap.usd; var marketCapFormatted = marketCap > 1e12 ? '$' + (marketCap / 1e12).toFixed(1) + 'T' : '$' + (marketCap / 1e9).toFixed(2) + 'B'; document.getElementById('ray-marketcap').textContent = marketCapFormatted; // Generate sparkline if (data.market\_data.sparkline\_in\_7d && data.market\_data.sparkline\_in\_7d.price) { var sparklinePrices = data.market\_data.sparkline\_in\_7d.price; var sparklineColor = change7d > 0 ? '#22c55e' : '#ef4444'; var svg = generateSparklineSVG(sparklinePrices, 200, 60, sparklineColor); document.getElementById('ray-sparkline').innerHTML = svg; } } // Fetch TVL from DeFiLlama try { var tvlResponse = await fetch('https://api.llama.fi/protocol/raydium'); var tvlData = await tvlResponse.json(); if (tvlData && tvlData.tvl) { var tvl = tvlData.tvl\[tvlData.tvl.length - 1\].totalLiquidityUSD; var tvlFormatted = tvl > 1e12 ? '$' + (tvl / 1e12).toFixed(1) + 'T' : '$' + (tvl / 1e9).toFixed(2) + 'B'; document.getElementById('ray-tvl').textContent = tvlFormatted; } } catch (e) { document.getElementById('ray-tvl').textContent = 'Data unavailable'; } } catch (error) { console.error('Error:', error); document.getElementById('ray-price').textContent = 'Data unavailable'; document.getElementById('ray-change').textContent = 'Data unavailable'; } } document.addEventListener('DOMContentLoaded', updateRaydiumData);
