---
title: "Bitcoin"
date: "2025-09-22T20:58:43.000Z"
updated: "2025-09-25T21:37:44.000Z"
excerpt: "Bitcoin (BTC) scorecard with live price, tokenomics analysis, and portfolio insights. Research Bitcoin's fixed supply, institutional adoption, and role as digital gold. Includes market data, investment considerations, and links to CoinGecko and DeFiLlama for further analysis."
feature_image: "https://images.unsplash.com/photo-1623227413711-25ee4388dae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGJpdGNvaW58ZW58MHx8fHwxNzU4NTc0NjI0fDA&ixlib=rb-4.1.0&q=80&w=2000"
feature_image_caption: "Photo by <a href=\"https://unsplash.com/@kanchanara?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\">Kanchanara</a> / <a href=\"https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit\">Unsplash</a>"
topics: ["tokenomics"]
internal_tags: ["#tokenomics"]
---

The world's first cryptocurrency and digital store of value. Launched in 2009, Bitcoin introduced the concept of decentralized money with a fixed supply of 21 million coins. Our analysis covers tokenomics, institutional adoption, and portfolio considerations for this foundational digital asset.

₿

# BTC Bitcoin

Loading...

![Bitcoin 7D Chart](https://www.coingecko.com/coins/1/sparkline.svg)

Loading...

[CoinGecko ↗](https://www.coingecko.com/en/coins/bitcoin) [DeFiLlama ↗](https://defillama.com/chain/Bitcoin)

First cryptocurrency with true digital scarcity. Hard cap of 21 million coins with deflationary issuance.

### 🔍 Tokenomics:

**Hard Cap:** YES

**Mintable:** NO

**Burn:** NO

**Fees:** YES

**Stakeable:** NO

**Type:** Deflationary

**Market Cap:** Loading...

**Lightning Network:** Loading...

### 📚 The Scholar's Assessment

Bitcoin represents the foundational layer of digital value storage. Its fixed supply of 21 million coins, energy-secured Proof of Work consensus, and universal institutional recognition make it the ultimate store of value for long-term wealth preservation. Consider it the "digital gold" anchor of any diversified crypto portfolio.

### 📊 Portfolio Perspective

#### ✅ Strengths

*   Unmatched monetary policy
*   Universal institutional adoption
*   Strongest network security

#### ⚠️ Considerations

*   Limited smart contract functionality
*   Higher transaction fees during congestion
*   Energy-intensive mining

**Allocation Tier:**  
Core Foundation

**Risk Profile:**  
Low-Medium

**Time Horizon:**  
Long-term (10+ years)

### About Bitcoin

Bitcoin, launched in 2009 by Satoshi Nakamoto, is the world's first successful cryptocurrency and foundation of digital assets. Operating as peer-to-peer electronic cash, it introduced decentralized money without central authority. With its 21 million coin cap and Proof of Work security, Bitcoin has evolved into "digital gold" - a store of value and hedge against monetary debasement.

#### 🔬 Research Starting Point

This scorecard provides a research foundation. We encourage readers to conduct further research at **CoinGecko**, **DeFiLlama**, and other authoritative web resources before making investment decisions. Historical performance does not guarantee future results. Cryptocurrency investments carry significant risks including total loss of capital.

async function updateBitcoinData() { const loadingElements = document.querySelectorAll('.loading'); loadingElements.forEach(el => el.style.display = 'inline'); try { const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market\_data=true&community\_data=false&developer\_data=false&sparkline=false'); const data = await response.json(); // Update price const price = data.market\_data.current\_price.usd; document.getElementById('btc-price').textContent = '$' + price.toLocaleString(); // Update 7D change const change7d = data.market\_data.price\_change\_percentage\_7d; const changeElement = document.getElementById('btc-change'); changeElement.textContent = (change7d > 0 ? '+' : '') + change7d.toFixed(1) + '% (7D)'; changeElement.style.color = change7d > 0 ? '#22c55e' : '#ef4444'; // Update market cap const marketCap = data.market\_data.market\_cap.usd; const marketCapFormatted = marketCap > 1e12 ? '$' + (marketCap / 1e12).toFixed(1) + 'T' : '$' + (marketCap / 1e9).toFixed(0) + 'B'; document.getElementById('btc-marketcap').textContent = marketCapFormatted; // Fetch Lightning Network capacity try { const lightningResponse = await fetch('https://mempool.space/api/v1/lightning/statistics/latest'); const lightningData = await lightningResponse.json(); const capacityBTC = lightningData.total\_capacity / 100000000; const capacityFormatted = capacityBTC > 1000 ? (capacityBTC / 1000).toFixed(0) + 'K BTC' : capacityBTC.toFixed(0) + ' BTC'; document.getElementById('btc-lightning').textContent = capacityFormatted + ' Capacity'; } catch (lightningError) { document.getElementById('btc-lightning').textContent = 'Data unavailable'; } loadingElements.forEach(el => el.style.display = 'none'); } catch (error) { console.error('Could not fetch live Bitcoin data:', error); document.getElementById('btc-price').textContent = 'Price data unavailable'; document.getElementById('btc-change').textContent = 'Change data unavailable'; document.getElementById('btc-marketcap').textContent = 'Market cap unavailable'; document.getElementById('btc-lightning').textContent = 'Lightning data unavailable'; } } document.addEventListener('DOMContentLoaded', updateBitcoinData);
