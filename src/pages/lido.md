---
title: "LIDO"
date: "2025-11-10T22:03:36.000Z"
updated: "2025-11-10T22:06:13.000Z"
excerpt: "Explore Lido (LDO): Dominant Ethereum liquid staking with $30B+ TVL, 30%+ of staked ETH. Unlock liquidity via stETH rebasing token for DeFi integrations (Aave, Curve). $40-60M annual revenue to DAO treasury. Fixed 1B supply governance token. "
feature_image: "/content/images/2025/11/lido_fi.png"
topics: ["lido","defi"]
internal_tags: ["#lido","#defi"]
---

Lido (LDO) is transforming Ethereum staking through its innovative liquid staking protocol, allowing users to stake ETH while maintaining liquidity via stETH—a rebasing token that accrues rewards and integrates seamlessly across DeFi platforms like Aave, Curve, and Uniswap. Launched in 2020, Lido commands over $30 billion in TVL and controls more than 30% of all staked ETH, generating $40-60 million annually in protocol revenue directed to a DAO-managed treasury for growth initiatives. With a fixed 1 billion LDO governance token supply, the protocol empowers holders to influence node operations, fees, and multi-chain expansions (including Polygon and Solana), positioning Lido as a cornerstone of decentralized finance infrastructure amid rising competition and regulatory landscapes.

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://lido.fi/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Lido Liquid Staking</div><div class="kg-bookmark-description">Empowering and securing Ethereum since 2020</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/favicon.svg" alt=""></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/lido_fi.png" alt=""></div></a></figure>

# 💧 LDO Lido

Loading...

Loading...

[CoinGecko ↗](https://www.coingecko.com/en/coins/lido-dao) | [DeFiLlama ↗](https://defillama.com/protocol/lido)

---

### 🔍 Tokenomics:

**Hard Cap:** YES

**Mintable:** NO

**Burn:** NO

**Fees:** YES

**Stakeable:** NO

**Type:** Governance

**Market Cap:** Loading...

**Protocol TVL:** Loading...

---

## 📚 The Scholar's Assessment

> Lido dominates Ethereum liquid staking with over $30B in TVL and 30% of all staked ETH. By tokenizing staked ETH as stETH (a rebasing token that accrues staking rewards), Lido unlocked billions in staking capital for DeFi use. The protocol's decentralized node operator network and integration across major DeFi protocols (Aave, Curve, Uniswap) created a network effect that competitors struggle to match. LDO holders govern critical protocol parameters including fee splits and node operator additions. However, unlike fee-burning models, Lido's 5% protocol revenue flows to a DAO-controlled treasury for ecosystem development rather than directly accruing to token holders - a pure governance token model.

---

## 📊 Portfolio Perspective

### ✅ Strengths

*   Dominant market position (30%+ of staked ETH)
*   Massive protocol TVL ($30B+)
*   Significant revenue (~$40-60M annually to treasury)
*   Active treasury deployment (liquidity incentives, grants)
*   Deep DeFi integrations (stETH widely accepted)
*   Fixed supply (1B LDO tokens)
*   Multi-chain expansion (Polygon, Solana)

### ⚠️ Considerations

*   Centralization concerns (large validators)
*   Competition from decentralized alternatives
*   Regulatory scrutiny on liquid staking
*   Token unlocks from early investors
*   Revenue flows to DAO treasury, not token holders directly
*   Treasury heavily spent on liquidity incentives (not accumulating cash)
*   No buyback or burn mechanism (pure governance token)
*   Token value depends on protocol success, not direct cash flows

**Allocation Tier:**

Blue-Chip DeFi Infrastructure

**Risk Profile:**

Medium

**Time Horizon:**

Medium-long term (3-7 years)

---

## About Lido

Lido, launched in 2020, revolutionized Ethereum staking by introducing liquid staking through stETH tokens. Before Lido, staking ETH meant locking capital with no liquidity - Lido solved this by issuing stETH (a rebasing token representing staked ETH + rewards) that can be used across DeFi. With over $30 billion in TVL and controlling 30%+ of all staked ETH, Lido became the largest DeFi protocol by TVL. LDO tokens (capped at 1B supply) govern the protocol, controlling critical decisions like node operator selection, fee parameters, and treasury management. The protocol generates ~$40-60M annually (5% of staking rewards), which the DAO actively deploys through massive liquidity mining programs (Curve, Balancer), ecosystem grants, protocol development, audits, and partnerships. This "growth reinvestment" model prioritizes protocol expansion over direct token holder distributions - LDO governance controls when and how to deploy capital, but doesn't receive dividends or benefit from burns.

---

## 🌐 Related Protocols

*   [💰 Ethereum DeFi Protocols](/ethereum-defi) - Explore other liquid staking and DeFi protocols
*   [◈ Ethereum Scorecard](/ethereum-scorecard) - Understand Lido's base layer
*   [🏗️ Ethereum Infrastructure](/ethereum-infrastructure) - Staking and validator infrastructure

---

> ### 🔬 Research Starting Point
> 
> This scorecard provides a research foundation. We encourage readers to conduct further research at **CoinGecko**, **DeFiLlama**, and the **Lido Research Forum** before making investment decisions. Liquid staking carries smart contract risks, validator slashing risks, and regulatory uncertainty. Always understand protocol mechanics and associated risks before participating. Historical performance does not guarantee future results.

function generateSparklineSVG(prices, width, height, strokeColor) { if (!prices || prices.length < 2) { return '<svg width="' + width + '" height="' + height + '"></svg>'; } var minPrice = Math.min.apply(Math, prices); var maxPrice = Math.max.apply(Math, prices); var priceRange = maxPrice - minPrice || 1; var points = prices.map(function(price, i) { var x = (i / (prices.length - 1)) \* width; var y = height - ((price - minPrice) / priceRange) \* height; return x + ',' + y; }).join(' '); return '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="' + strokeColor + '" stroke-width="2" points="' + points + '" /></svg>'; } async function updateLidoData() { try { var response = await fetch('https://api.coingecko.com/api/v3/coins/lido-dao?localization=false&tickers=false&market\_data=true&community\_data=false&developer\_data=false&sparkline=true'); var data = await response.json(); if (data && data.market\_data) { var price = data.market\_data.current\_price.usd; document.getElementById('lido-price').textContent = '$' + price.toLocaleString(); var change7d = data.market\_data.price\_change\_percentage\_7d; var changeElement = document.getElementById('lido-change'); if (change7d !== undefined && change7d !== null) { changeElement.textContent = (change7d > 0 ? '+' : '') + change7d.toFixed(1) + '% (7D)'; changeElement.style.color = change7d > 0 ? '#22c55e' : '#ef4444'; } else { changeElement.textContent = 'Change unavailable'; } var marketCap = data.market\_data.market\_cap.usd; var marketCapFormatted = marketCap > 1e12 ? '$' + (marketCap / 1e12).toFixed(1) + 'T' : '$' + (marketCap / 1e9).toFixed(0) + 'B'; document.getElementById('lido-marketcap').textContent = marketCapFormatted; if (data.market\_data.sparkline\_in\_7d && data.market\_data.sparkline\_in\_7d.price) { var sparklinePrices = data.market\_data.sparkline\_in\_7d.price; var sparklineColor = change7d > 0 ? '#22c55e' : '#ef4444'; var svg = generateSparklineSVG(sparklinePrices, 200, 60, sparklineColor); document.getElementById('lido-sparkline').innerHTML = svg; } else { document.getElementById('lido-sparkline').innerHTML = '<img src="https://www.coingecko.com/coins/13573/sparkline.svg" style="width: 100%; height: 60px; object-fit: cover;" alt="Lido 7D Chart">'; } } try { var tvlResponse = await fetch('https://api.llama.fi/tvl/lido'); var tvlData = await tvlResponse.json(); var tvlFormatted = tvlData > 1e12 ? '$' + (tvlData / 1e12).toFixed(1) + 'T' : '$' + (tvlData / 1e9).toFixed(0) + 'B'; document.getElementById('lido-tvl').textContent = tvlFormatted; } catch (e) { document.getElementById('lido-tvl').textContent = 'Data unavailable'; } } catch (error) { console.error('Error:', error); document.getElementById('lido-price').textContent = 'Data unavailable'; document.getElementById('lido-change').textContent = 'Data unavailable'; } } document.addEventListener('DOMContentLoaded', updateLidoData);
