---
title: "Sky"
date: "2025-11-12T16:37:46.000Z"
updated: "2025-11-12T16:37:46.000Z"
excerpt: "Discover Sky: Evolved MakerDAO with $6.8B TVL & $6.5B+ stablecoin reserves. Pioneer DeFi bridging TradFi via USDS, Sky Savings, staking & RWAs. Deflationary SKY token for governance. Dive into multi-chain insights on Sagix.io."
feature_image: "/content/images/2025/11/sky.jpeg"
topics: ["defi","sky","makerdao"]
internal_tags: ["#defi","#eth","#sky","#makerDAO"]
---

[https://sky.money/](https://sky.money/)

# 🌌 SKY Sky

Loading...

![Sky 7D Chart](https://www.coingecko.com/coins/sky/sparkline.svg)

Loading...

[CoinGecko ↗](https://www.coingecko.com/en/coins/sky-governance-token) | [DeFiLlama ↗](https://defillama.com/protocol/sky) | [sky.money ↗](https://sky.money)

### 🔍 Tokenomics:

**Hard Cap:** YES

**Mintable:** NO

**Burn:** YES

**Fees:** YES

**Stakeable:** YES

**Type:** Deflationary Governance

**Market Cap:** Loading...

**Total TVL:** Loading...

**Max Supply:** 23.4B SKY

## 📚 The Scholar's Assessment

> Sky, the evolved MakerDAO, pioneers DeFi with $6.8B TVL and $6.5B+ in stablecoin reserves, generating over $400M in annualized fees. The protocol's deflationary SKY governance token facilitates staking and decision-making in a multi-chain ecosystem bridging TradFi and DeFi through RWAs and lending. Despite strong fundamentals and recent upgrades, the token trades significantly below potential, highlighting both resilience and market volatility risks.

## 📊 Portfolio Perspective

### ✅ Strengths

*   Leading stablecoin issuer with $6.5B+ reserves
*   High TVL ($6.8B) across multiple chains
*   Deflationary tokenomics with burn mechanisms
*   Multi-chain deployment (Ethereum, Base, Arbitrum)
*   Integration with real-world assets and TradFi

### ⚠️ Considerations

*   Recent rebrand and token upgrade (2024)
*   Governance-dependent rate setting
*   Regulatory uncertainties for stablecoins
*   Competition in DeFi lending and stables
*   Dependency on Ethereum ecosystem

**Allocation Tier:**

DeFi Infrastructure

**Risk Profile:**

Medium

**Time Horizon:**

Medium-term (3-5 years)

## About Sky

Sky launched in 2024 as the rebranded evolution of MakerDAO, founded by Rune Christensen. The SKY governance token was introduced via an upgrade from MKR at a 1:24,000 ratio, enabling enhanced accessibility and participation. Sky offers the USDS stablecoin (upgraded from DAI), Sky Savings Rate for yields, staking for rewards, and modules like Spark for lending. Operating on Ethereum mainnet, Base, and Arbitrum, Sky serves as an onchain capital allocator managing billions across DeFi, CeFi, and real-world assets. The protocol generates substantial revenue through fees and supports governance via SKY holders, positioning it as a bridge between traditional and decentralized finance.

## 🔬 Further Research

*   [Ethereum DeFi Protocols](/ethereum-defi) - Explore other protocols in the Ethereum ecosystem
*   [Ethereum Scorecard](/ethereum-scorecard) - Understand the underlying blockchain
*   [Sky Forum](https://forum.sky.money) - Official documentation and discussions

> ### 🔬 Research Starting Point
> 
> This scorecard provides a research foundation. We encourage readers to conduct further research at **CoinGecko**, **DeFiLlama**, **sky.money**, and other authoritative web resources before making investment decisions. Historical performance does not guarantee future results. Cryptocurrency investments carry significant risks including total loss of capital.

async function updateSkyData() { try { var response = await fetch('https://api.coingecko.com/api/v3/coins/sky-governance-token?localization=false&tickers=false&market\_data=true&community\_data=false&developer\_data=false&sparkline=true'); var data = await response.json(); if (data && data.market\_data) { // Update price var price = data.market\_data.current\_price.usd; document.getElementById('sky-price').textContent = '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 }); // Update 7D change var change7d = data.market\_data.price\_change\_percentage\_7d; var changeElement = document.getElementById('sky-change'); if (change7d !== undefined && change7d !== null) { changeElement.textContent = (change7d > 0 ? '+' : '') + change7d.toFixed(1) + '% (7D)'; changeElement.style.color = change7d > 0 ? '#22c55e' : '#ef4444'; } else { changeElement.textContent = 'Change unavailable'; } // Update market cap var marketCap = data.market\_data.market\_cap.usd; var marketCapFormatted = marketCap > 1e12 ? '$' + (marketCap / 1e12).toFixed(1) + 'T' : '$' + (marketCap / 1e9).toFixed(2) + 'B'; document.getElementById('sky-marketcap').textContent = marketCapFormatted; } // Fetch TVL from DeFiLlama try { var tvlResponse = await fetch('https://api.llama.fi/tvl/sky'); var tvlData = await tvlResponse.json(); var tvlFormatted = tvlData > 1e12 ? '$' + (tvlData / 1e12).toFixed(1) + 'T' : '$' + (tvlData / 1e9).toFixed(1) + 'B'; document.getElementById('sky-tvl').textContent = tvlFormatted; } catch (e) { document.getElementById('sky-tvl').textContent = '~$6.8B'; } } catch (error) { console.error('Error:', error); document.getElementById('sky-price').textContent = 'Data unavailable'; document.getElementById('sky-change').textContent = 'Data unavailable'; document.getElementById('sky-marketcap').textContent = 'Data unavailable'; document.getElementById('sky-tvl').textContent = '~$6.8B'; } } document.addEventListener('DOMContentLoaded', updateSkyData);
