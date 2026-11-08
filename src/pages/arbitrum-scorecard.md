---
title: "Arbitrum One (ARB)"
date: "2025-09-24T17:06:38.000Z"
updated: "2025-09-27T15:38:59.000Z"
excerpt: "Arbitrum (ARB) scorecard with live price, Layer 2 analysis, and portfolio insights. Research Arbitrum's Optimistic Rollups and DeFi ecosystem scaling. Includes market data, governance tokenomics, and CoinGecko/DeFiLlama links."
feature_image: "/content/images/2025/09/arb_one.png"
feature_image_caption: "<em>Arbitrum One: Ethereum's top Layer 2 solution hosting $3B+ in DeFi protocols with ARB governance.</em>"
topics: ["layer2","ethereum","arb","arbitrum","tokenomics"]
internal_tags: ["#tokenomics"]
---

# 🅰 ARB Arbitrum

Loading...

![Arbitrum 7D Chart](https://www.coingecko.com/coins/16547/sparkline.svg)

Loading...

[CoinGecko ↗](https://www.coingecko.com/en/coins/arbitrum) | [DeFiLlama ↗](https://defillama.com/chain/Arbitrum)

### 🔍 Tokenomics:

**Hard Cap:** YES

**Mintable:** NO

**Burn:** NO

**Fees:** YES

**Stakeable:** NO

**Type:** Governance

**Market Cap:** Loading...

**DeFi TVL:** Loading...

## 📚 The Scholar's Assessment

> Arbitrum One is a leading Ethereum Layer 2 solution using Optimistic Rollups, offering ~4,000-7,000 TPS and low transaction fees (~$0.01–0.1 USD, paid in ETH). With ~$3B in TVL, it powers a thriving DeFi ecosystem including GMX and SushiSwap. The ARB token enables decentralized governance via the Arbitrum DAO, positioning it as a scalable, cost-effective platform for dApps and a key component of Ethereum's scaling infrastructure.

## 📊 Portfolio Perspective

### ✅ Strengths

*   High scalability (~4,000-7,000 TPS)
*   Ultra-low fees (~$0.01–0.1 USD in ETH)
*   Robust DeFi ecosystem (~$3B TVL)
*   Full EVM compatibility

### ⚠️ Considerations

*   7-day withdrawal delay to Ethereum L1
*   Competition from Optimism, zkSync
*   Ongoing sequencer decentralization

**Allocation Tier:**

Ecosystem Enabler

**Risk Profile:**

Medium

**Time Horizon:**

Medium-term (3-5 years)

## About Arbitrum

Arbitrum, developed by Offchain Labs and launched in 2021, is a leading Ethereum Layer 2 scaling solution using Optimistic Rollups. It processes transactions off-chain with Ethereum mainnet security, achieving ~4,000-7,000 TPS and fees of ~$0.01–0.1 USD (paid in ETH). Arbitrum One, its primary chain, hosts ~$3B in TVL across DeFi protocols like GMX and SushiSwap. The ARB token, launched in 2023 with a 10B token cap, powers decentralized governance via the Arbitrum DAO, enabling holders to vote on protocol upgrades and ecosystem funding.

## 🔬 Further Research

*   [Ethereum DeFi Protocols](/ethereum-defi) - Explore DeFi protocols on Ethereum and Layer 2s
*   [Ethereum Layer 2 Solutions](/ethereum-layer2) - Compare Arbitrum with other L2s
*   [Ethereum Scorecard](/ethereum-scorecard) - Understand the base layer

> ### 🔬 Research Starting Point
> 
> This scorecard provides a research foundation. We encourage readers to conduct further research at **CoinGecko**, **DeFiLlama**, and other authoritative web resources before making investment decisions. Historical performance does not guarantee future results. Cryptocurrency investments carry significant risks including total loss of capital.

async function updateArbitrumData() { try { var response = await fetch('https://api.coingecko.com/api/v3/coins/arbitrum?localization=false&tickers=false&market\_data=true&community\_data=false&developer\_data=false&sparkline=true'); var data = await response.json(); if (data && data.market\_data) { // Update price var price = data.market\_data.current\_price.usd; document.getElementById('arb-price').textContent = '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // Update 7D change var change7d = data.market\_data.price\_change\_percentage\_7d; var changeElement = document.getElementById('arb-change'); if (change7d !== undefined && change7d !== null) { changeElement.textContent = (change7d > 0 ? '+' : '') + change7d.toFixed(1) + '% (7D)'; changeElement.style.color = change7d > 0 ? '#22c55e' : '#ef4444'; } else { changeElement.textContent = 'Change unavailable'; } // Update market cap var marketCap = data.market\_data.market\_cap.usd; var marketCapFormatted = marketCap > 1e12 ? '$' + (marketCap / 1e12).toFixed(1) + 'T' : '$' + (marketCap / 1e9).toFixed(0) + 'B'; document.getElementById('arb-marketcap').textContent = marketCapFormatted; } // Fetch TVL try { var tvlResponse = await fetch('https://api.llama.fi/tvl/arbitrum'); var tvlData = await tvlResponse.json(); var tvlFormatted = tvlData > 1e12 ? '$' + (tvlData / 1e12).toFixed(1) + 'T' : '$' + (tvlData / 1e9).toFixed(1) + 'B'; document.getElementById('arb-tvl').textContent = tvlFormatted; } catch (e) { document.getElementById('arb-tvl').textContent = 'Data unavailable'; } } catch (error) { console.error('Error:', error); document.getElementById('arb-price').textContent = 'Data unavailable'; document.getElementById('arb-change').textContent = 'Data unavailable'; } } document.addEventListener('DOMContentLoaded', updateArbitrumData);
