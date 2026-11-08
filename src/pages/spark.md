---
title: "Spark"
date: "2025-11-12T16:25:20.000Z"
updated: "2025-11-12T16:26:10.000Z"
excerpt: "Discover Spark Protocol: Sky's multi-chain lending powerhouse with $3.8B+ TVL. Earn transparent yields on stablecoins via SparkLend, Savings, and Liquidity Layer. Backed by $6.5B reserves. Explore SPK governance token & DeFi insights on Sagix.io."
feature_image: "/content/images/2025/11/spk.png"
topics: ["defi","eth","ethereum","spk"]
internal_tags: ["#defi","#eth","#ethereum","#spk","#spark"]
---

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://spark.fi/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Spark: Earn on your stablecoins</div><div class="kg-bookmark-description">Maximize your DeFi experience with transparent rates</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/favicon.png" alt=""><span class="kg-bookmark-author">spark</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/OpenGraph.png" alt=""></div></a></figure>

Sky's lending infrastructure with $3.8B+ TVL across Ethereum, Base, and Arbitrum. Governance-defined rates backed by $6.5B+ in stablecoin reserves.

# ⚡ SPK Spark Protocol

Loading...

Loading...

[CoinGecko ↗](https://www.coingecko.com/en/coins/spark) | [DeFiLlama ↗](https://defillama.com/protocol/spark)

### 🔍 Tokenomics:

**Hard Cap:** YES

**Mintable:** NO

**Burn:** NO

**Fees:** YES

**Stakeable:** YES

**Type:** Governance

**Market Cap:** Loading...

**Protocol TVL:** Loading...

## 📚 The Scholar's Assessment

> Spark Protocol represents Sky's strategic expansion into lending infrastructure, building on Aave v3 technology with governance-defined interest rates. With $3.8B+ in total value locked across SparkLend, Spark Savings, and the Spark Liquidity Layer, it serves as the lending and capital allocation engine for Sky's $6.5B+ stablecoin reserves. The SPK token enables governance participation and staking rewards, positioning holders at the center of DeFi's largest capital allocator bridging traditional and decentralized finance.

## 📊 Portfolio Perspective

### ✅ Strengths

*   Backed by Sky's $6.5B+ reserves
*   Governance-defined stable rates
*   Multi-chain capital deployment
*   Integration with USDS ecosystem

### ⚠️ Considerations

*   Centralized rate setting via governance
*   Heavy dependency on Sky/MakerDAO
*   Recent token launch (June 2025)

**Allocation Tier:**

DeFi Infrastructure

**Risk Profile:**

Medium

**Time Horizon:**

Medium-term (3-5 years)

## About Spark Protocol

Spark Protocol, launched as part of the MakerDAO/Sky ecosystem, is an onchain capital allocator managing $3.8B+ across DeFi, CeFi, and real-world assets. The protocol features three core products: SparkLend (lending with governance-defined rates), Spark Savings (yield-bearing stablecoins like sUSDS and sUSDC), and the Spark Liquidity Layer (automated capital deployment across protocols like Aave, Morpho, and BlackRock's BUIDL). The SPK token, launched in June 2025 with a 10B hard cap, enables governance participation and staking for Spark Points rewards. Operating on Ethereum mainnet, Base, and Arbitrum, Spark serves as the liquidity and yield infrastructure powering Sky's vision of bridging traditional and decentralized finance.

## 🔬 Further Research

*   [Ethereum DeFi Protocols](/ethereum-defi) - Explore other lending protocols
*   [Ethereum Scorecard](/ethereum-scorecard) - Understand the base layer
*   [Sky (MakerDAO) Scorecard](/makerdao-scorecard) - Learn about the parent ecosystem

> ### 🔬 Research Starting Point
> 
> This scorecard provides a research foundation. We encourage readers to conduct further research at **CoinGecko**, **DeFiLlama**, and **Spark Protocol's official documentation** before making investment decisions. SPK is a recently launched token (June 2025) with limited price history. Historical performance does not guarantee future results. Cryptocurrency investments carry significant risks including total loss of capital.

function generateSparklineSVG(prices, width, height, strokeColor) { if (!prices || prices.length < 2) { return '<svg width="' + width + '" height="' + height + '"></svg>'; } var minPrice = Math.min.apply(Math, prices); var maxPrice = Math.max.apply(Math, prices); var priceRange = maxPrice - minPrice || 1; var points = prices.map(function(price, i) { var x = (i / (prices.length - 1)) \* width; var y = height - ((price - minPrice) / priceRange) \* height; return x + ',' + y; }).join(' '); return '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="' + strokeColor + '" stroke-width="2" points="' + points + '" /></svg>'; } async function updateSparkData() { try { var response = await fetch('https://api.coingecko.com/api/v3/coins/spark?localization=false&tickers=false&market\_data=true&community\_data=false&developer\_data=false&sparkline=true'); var data = await response.json(); if (data && data.market\_data) { // Update price var price = data.market\_data.current\_price.usd; document.getElementById('spk-price').textContent = '$' + price.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 4 }); // Update 7D change var change7d = data.market\_data.price\_change\_percentage\_7d; var changeElement = document.getElementById('spk-change'); if (change7d !== undefined && change7d !== null) { changeElement.textContent = (change7d > 0 ? '+' : '') + change7d.toFixed(1) + '% (7D)'; changeElement.style.color = change7d > 0 ? '#22c55e' : '#ef4444'; } else { changeElement.textContent = 'Change unavailable'; } // Update market cap var marketCap = data.market\_data.market\_cap.usd; var marketCapFormatted = marketCap > 1e9 ? '$' + (marketCap / 1e9).toFixed(0) + 'B' : '$' + (marketCap / 1e6).toFixed(0) + 'M'; document.getElementById('spk-marketcap').textContent = marketCapFormatted; // Generate sparkline if (data.market\_data.sparkline\_in\_7d && data.market\_data.sparkline\_in\_7d.price) { var sparklinePrices = data.market\_data.sparkline\_in\_7d.price; var sparklineColor = change7d > 0 ? '#22c55e' : '#ef4444'; var svg = generateSparklineSVG(sparklinePrices, 200, 60, sparklineColor); document.getElementById('spk-sparkline').innerHTML = svg; } else { // Fallback to static placeholder if sparkline data unavailable document.getElementById('spk-sparkline').innerHTML = '<div style="width: 200px; height: 60px; background: #f1f5f9; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 0.8em;">Chart unavailable</div>'; } } // Fetch protocol TVL try { var tvlResponse = await fetch('https://api.llama.fi/tvl/spark'); var tvlData = await tvlResponse.json(); var tvlFormatted = tvlData > 1e12 ? '$' + (tvlData / 1e12).toFixed(1) + 'T' : '$' + (tvlData / 1e9).toFixed(1) + 'B'; document.getElementById('spk-tvl').textContent = tvlFormatted; } catch (e) { document.getElementById('spk-tvl').textContent = '~$3.8B'; } } catch (error) { console.error('Error:', error); document.getElementById('spk-price').textContent = 'Data unavailable'; document.getElementById('spk-change').textContent = 'Data unavailable'; } } document.addEventListener('DOMContentLoaded', updateSparkData);
