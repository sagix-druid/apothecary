---
title: "Ethereum DeFi"
date: "2025-09-27T15:08:34.000Z"
updated: "2026-01-31T18:28:55.000Z"
excerpt: "Ethereum DeFi protocols: Uniswap, Curve, Hyperliquid, Aave, Morpho, Lido, GMX, Synthetix, dYdX, Aerodrome, Balancer, SushiSwap, Stargate, Across, Hop, Synapse, Orbiter, Sky/MakerDAO, Compound, Spark, Rocket Pool, Frax, Convex, Yearn, Beefy, EigenLayer, Renzo, Gains Network. Live TVL."
feature_image: "/content/images/2025/09/ethdefi.jpg"
feature_image_caption: "<em>Ethereum's Layered Brilliance: Unleashing DeFi Through Smart Contracts</em>"
topics: ["eth","ethereum","defi"]
internal_tags: ["#defi"]
---

Smart contracts have transformed finance by enabling permissionless, transparent protocols that operate without intermediaries. Ethereum hosts the most mature DeFi ecosystem with billions in TVL across lending, trading, and yield generation.

Most protocols below are available on both Ethereum mainnet and Layer 2 networks (Arbitrum, Optimism, Base) for cheaper transactions, while some operate their own dedicated L2s for optimal performance. Always verify you're on the correct network for your tokens before interacting to avoid failed transactions.

## 💱 Trading Protocols

Decentralized exchanges for spot and leveraged trading. From simple token swaps via AMM pools to advanced perpetual futures with high leverage—all without centralized intermediaries.

Protocol

Key Feature

TVL\*

**Uniswap**

Spot AMM with concentrated liquidity pools

Loading...

**Curve Finance**

Stablecoin-optimized spot AMM with low slippage

Loading...

**Hyperliquid**

High-performance perpetuals orderbook with spot markets

Loading...

**Aerodrome**

ve(3,3) spot DEX with optimized liquidity incentives

Loading...

**Balancer**

Customizable spot AMM with multi-asset pools

Loading...

**GMX**

Zero-slippage perpetuals with spot swaps via GLP pools

Loading...

**Synthetix**

Synthetic assets and perpetuals with debt pool model

Loading...

**SushiSwap**

Multi-chain spot AMM with governance rewards

Loading...

**dYdX**

Orderbook perpetuals with high leverage on dedicated L1

Loading...

**Gains Network**

Leveraged trading with oracle-based synthetic perps

Loading...

---

## 🏦 Lending & Borrowing

Overcollateralized lending protocols enabling users to earn yield on deposits or borrow against crypto collateral without credit checks.

Protocol

Key Feature

TVL\*

**[Aave](/aave)**

Leading money market with flash loans

Loading...

**[Sky (formerly MakerDAO)](/makerdao-scorecard)**

USDS stablecoin minting through collateral vaults

Loading...

**Morpho**

Optimized lending with peer-to-peer matching

Loading...

**Compound**

Autonomous interest rate protocol

Loading...

**[Spark Protocol](/spark)**

Sky's lending arm with USDS integration

Loading...

---

## 💧 Liquid Staking

Stake ETH while maintaining liquidity through derivative tokens. These protocols unlock staked capital for use across DeFi.

Protocol

Key Feature

TVL\*

**[Lido](/lido)**

Dominant liquid staking with stETH derivative

Loading...

**Rocket Pool**

Decentralized node operator network

Loading...

**Frax Ether**

Dual-token model with frxETH and sfrxETH

Loading...

---

## 🌾 Yield Aggregators

Automated vault strategies that optimize yields across multiple DeFi protocols. These platforms handle complex rebalancing and compounding.

Protocol

Key Feature

TVL\*

**Convex Finance**

Curve yield booster with locked CRV

Loading...

**Yearn Finance**

Pioneer yield optimizer with battle-tested vaults

Loading...

**Beefy Finance**

Multi-chain auto-compounding vaults

Loading...

---

## 🌉 Cross-Layer Bridges

Move assets seamlessly between Ethereum mainnet and Layer 2 networks, or directly between L2s. These protocols power the cross-chain swaps you see in wallets like Rainbow.

Protocol

Key Feature

TVL\*

**Stargate (LayerZero)**

Unified liquidity pools across chains

Loading...

**Across Protocol**

Optimistic bridge with fast transfers

Loading...

**Hop Protocol**

Purpose-built for L2 to L2 transfers

Loading...

**Synapse**

Cross-chain bridge with native liquidity

Loading...

**Orbiter Finance**

Specialized for fast L2 bridging

Loading...

---

## 🔄 Restaking & Shared Security

Restake staked ETH to secure additional protocols and earn layered rewards. This emerging category extends Ethereum's security model.

Protocol

Key Feature

TVL\*

**EigenLayer**

Pioneer restaking protocol for shared security

Loading...

**Renzo Protocol**

Liquid restaking with ezETH derivative token

Loading...

**[Ether.fi](/ether-fi/)**

Non-custodial liquid restaking with weETH, eBTC, eUSD

Loading...

---

## 💵 Stablecoins

> 🚧 **Comprehensive Stablecoin Analysis Coming Soon**
> 
> We're building a dedicated page covering decentralized stablecoins including DAI, USDS, FRAX, LUSD, and more.
> 
> [Visit Stablecoins Page →](/stablecoins)

---

### Explore More Ethereum Analysis:

[← Ethereum Scorecard](/ethereum-scorecard) | [Infrastructure Protocols →](/ethereum-infrastructure) | [Layer 2 Solutions →](/ethereum-layer2)

---

**\*TVL Data:** Total Value Locked figures are fetched live from [DeFiLlama](https://defillama.com). Data updates automatically on page load.

**Research Disclaimer:** These protocol listings serve as educational starting points for DeFi research. Always conduct thorough due diligence, verify smart contract audits, and understand protocol risks before interacting with any DeFi application. Past performance does not guarantee future results.

// Fetch TVL from DeFiLlama API async function fetchTVL(protocol, elementId) { try { const response = await fetch(\`https://api.llama.fi/tvl/${protocol}\`); const tvlData = await response.json(); const tvlFormatted = tvlData > 1e12 ? '$' + (tvlData / 1e12).toFixed(1) + 'T' : tvlData > 1e9 ? '$' + (tvlData / 1e9).toFixed(1) + 'B' : '$' + (tvlData / 1e6).toFixed(1) + 'M'; document.getElementById(elementId).textContent = tvlFormatted; } catch (e) { document.getElementById(elementId).textContent = 'N/A'; } } // Protocol mappings: \[defillama-slug, element-id\] const protocols = \[ // Trading Protocols \['uniswap', 'tvl-uniswap'\], \['curve-dex', 'tvl-curve'\], \['hyperliquid', 'tvl-hyperliquid'\], \['aerodrome', 'tvl-aerodrome'\], \['balancer', 'tvl-balancer'\], \['gmx', 'tvl-gmx'\], \['synthetix', 'tvl-synthetix'\], \['sushiswap', 'tvl-sushiswap'\], \['dydx', 'tvl-dydx'\], \['gains-network', 'tvl-gains'\], // Bridges \['stargate', 'tvl-stargate'\], \['across', 'tvl-across'\], \['hop-protocol', 'tvl-hop'\], \['synapse', 'tvl-synapse'\], \['orbiter-finance', 'tvl-orbiter'\], // Lending & Borrowing \['aave', 'tvl-aave'\], \['makerdao', 'tvl-makerdao'\], \['morpho', 'tvl-morpho'\], \['compound-finance', 'tvl-compound'\], \['spark', 'tvl-spark'\], // Liquid Staking \['lido', 'tvl-lido'\], \['rocket-pool', 'tvl-rocketpool'\], \['frax-ether', 'tvl-fraxether'\], // Yield Aggregators \['convex-finance', 'tvl-convex'\], \['yearn-finance', 'tvl-yearn'\], \['beefy', 'tvl-beefy'\], // Restaking \['eigenlayer', 'tvl-eigenlayer'\], \['renzo', 'tvl-renzo'\] \]; // Fetch all TVLs on page load window.addEventListener('DOMContentLoaded', () => { protocols.forEach((\[protocol, elementId\]) => { fetchTVL(protocol, elementId); }); });

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/reserve/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Reserve Protocol: permissionless infrastructure for asset-backed currencies, decentralized token folios (DTF)</div><div class="kg-bookmark-description">Reserve Protocol builds stable, non-inflating money by bundling assets like stocks, bonds, gold, and crypto into on-chain stablecoins (Yield DTFs) and ETF-like indices (Index DTFs). Founded in 2017, it operates on Ethereum, Base, and Bnb.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-85.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/WhatsApp-Image-2026-01-31-at-13.57.17-1.jpeg" alt=""></div></a></figure>
