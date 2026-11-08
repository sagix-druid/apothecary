---
title: "Reserve Protocol: permissionless infrastructure for asset-backed currencies, decentralized token folios (DTF)"
date: "2026-01-31T18:27:28.000Z"
updated: "2026-01-31T20:22:20.000Z"
excerpt: "Reserve Protocol builds stable, non-inflating money by bundling assets like stocks, bonds, gold, and crypto into on-chain stablecoins (Yield DTFs) and ETF-like indices (Index DTFs). Founded in 2017, it operates on Ethereum, Base, and Bnb."
feature_image: "/content/images/2026/01/WhatsApp-Image-2026-01-31-at-13.57.17.jpeg"
feature_image_caption: "Credit: <a href=\"https://x.com/postoripriori\">https://x.com/postoripriori</a>"
topics: ["rsr","reserve","defi"]
internal_tags: ["#defi"]
---

*Building money that doesn't inflate like USD but isn't volatile like Bitcoin*

---

## The mission

Reserve Protocol was founded on a simple thesis: **"We want money that doesn't inflate like USD, but isn't volatile like Bitcoin."**

The solution? Bundle stocks, bonds, gold, real estate, and other assets into an index, and use that as money. Reserve built the protocol infrastructure to make this possible—a permissionless platform where anyone can deploy asset-backed currencies and diversified index products without intermediaries.

Founded in 2017 by Nevin Freeman and Matt Elder, Reserve launched on Ethereum mainnet in October 2022. The protocol now operates across Ethereum, Base, and Bnb, with backing from Peter Thiel, Sam Altman, Coinbase Ventures, and Digital Currency Group.

**Official website:** [https://reserve.org](https://reserve.org)

<figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/cEVwR17Rplo?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="Introducing Reserve: a platform for creating &amp; using stablecoins for countries with high inflation"></iframe></figure>

---

## What Reserve Protocol does

Reserve provides two core products through factory smart contracts that anyone can use:

**Yield DTFs** (formerly RTokens): Asset-backed stablecoins where users deposit collateral baskets and receive tokens redeemable 1:1 for the underlying assets. These generate yield from DeFi protocols like Aave, Compound, and Lido.

**Index DTFs**: Diversified token portfolios that function like on-chain ETFs, supporting 10+ assets on Ethereum and 100+ on Base. These launched in February 2025.

The "DTF" stands for Decentralized Token Folio—a single ERC-20 token representing a basket of underlying assets with transparent, on-chain reserves.

---

# Why DTFs now?

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2026/01/image.png" class="kg-image" alt="" loading="lazy" width="1080" height="800" srcset="/content/images/size/w600/2026/01/image.png 600w, /content/images/size/w1000/2026/01/image.png 1000w, /content/images/2026/01/image.png 1080w" sizes="(min-width: 720px) 720px"><figcaption>Art from Reserve webiste <a href="https://reserve.org/dtf/">https://reserve.org/dtf/</a></figcaption></figure>

---

## Yield DTFs: asset-backed stablecoins

### How the collateral system works

Unlike MakerDAO's debt-based model where users borrow against locked collateral, Reserve uses direct 1:1 backing. Deposit the collateral basket, receive tokens. Redeem tokens, receive the underlying assets. Every Yield DTF is fully backed by on-chain assets that anyone can verify.

Each Yield DTF defines a **Prime Basket** (governance-set targets like "33% Aave USDC, 33% Compound USDT, 33% sDAI"), a **Reference Basket** (current exchange rates), and a **Collateral Basket** (exact token quantities for minting and redemption).

When collateral fails—such as during the March 2023 USDC depeg triggered by Silicon Valley Bank's collapse—the protocol automatically transitions to pre-defined emergency collateral without requiring governance votes.

### RSR staking provides overcollateralization

Reserve Rights (RSR) token holders can stake on specific DTFs, earning yield while providing "first-loss capital." If collateral in a DTF's basket defaults, staked RSR is mechanistically seized and sold to recapitalize the system—no governance delay required.

<figure class="kg-card kg-image-card"><img src="/content/images/2026/01/image-11.png" class="kg-image" alt="" loading="lazy" width="64" height="64"></figure>

Revenue flows to stakers through auctions: when yield-bearing collateral generates returns, the protocol mints excess DTF tokens, auctions them for RSR, and distributes proceeds to stakers.

### Notable Yield DTFs

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2026/01/image-2.png" class="kg-image" alt="" loading="lazy" width="64" height="64"><figcaption>eUSD</figcaption></figure>

**eUSD (Electronic Dollar)**: Combines Compound USDT, Aave USDC, and MakerDAO's sDAI. All yield flows to RSR stakers. Survived the March 2023 USDC crisis through automatic recollateralization.

<figure class="kg-card kg-image-card"><img src="/content/images/2026/01/image-10.png" class="kg-image" alt="" loading="lazy" width="64" height="64"></figure>

**ETH+ (Ethereum Plus)**: Diversified liquid staking tokens—Lido's wstETH, Rocket Pool's rETH, Stader's ETHx, and Frax's sfrxETH. Contributes to Ethereum staking decentralization while offering holder yield.

---

## Index DTFs: on-chain index funds

### A lightweight architecture

The Index Protocol achieves its functionality in just **1,053 lines of Solidity code**. Unlike Yield DTFs, Index DTFs require no price oracles—they simply hold underlying tokens proportionally and rely on arbitrageurs to maintain price parity through minting and redemption.

Index DTFs enable diversified exposure previously impossible on-chain. Anyone can mint or redeem at real-time net asset value without intermediaries.

### Dutch auctions for rebalancing

When an Index DTF needs to rebalance, the protocol uses Dutch auctions that start at high prices and decay over time. This mechanism sources liquidity from DEXs and solver networks like CoW Swap, minimizing MEV extraction and slippage.

### Notable Index DTFs

<figure class="kg-card kg-image-card"><img src="/content/images/2026/01/image-9.png" class="kg-image" alt="" loading="lazy" width="64" height="64"></figure>

**LCAP (Large Cap Index)**: Launched September 2025 with CF Benchmarks (UK FCA-regulated), tracking approximately 95% of investable crypto market cap through 10 diversified cryptocurrencies. Listed on Kraken with USD and EUR pairs.

<figure class="kg-card kg-image-card"><img src="/content/images/2026/01/image-8.png" class="kg-image" alt="" loading="lazy" width="64" height="64"></figure>

**CMC20 (CoinMarketCap 20 Index)**: Launched November 2025 on BNB Chain, tracking the top 20 cryptocurrencies by market cap with monthly rebalancing.

<figure class="kg-card kg-image-card"><img src="/content/images/2026/01/image-7.png" class="kg-image" alt="" loading="lazy" width="64" height="64"></figure>

**The Open Stablecoin Networks Index:** is a value-weighted DTF that tracks DeFi’s ten strongest open stablecoin networks in one $OPEN token.

---

<!-- signup -->

---

## RSR: the governance token

### Three roles

Reserve Rights (RSR) serves multiple functions in the ecosystem:

1.  **Staking on Yield DTFs**: Stakers provide governance and first-loss capital in exchange for yield
2.  **Vote-locking on Index DTFs**: RSR is the default governance token, controlling basket changes and parameters
3.  **Fee burning**: Index DTF fees automatically buy and burn RSR

### Tokenomics

RSR has a fixed maximum supply of **100 billion tokens** with approximately 60% currently circulating. The remaining tokens are held in company-controlled wallets for ecosystem development. There are governance discussions centered on introducing vote-escrowed governance, burning excees tokens to improve valuation, and improve tokenomics.

---

## The team and backers

### Founders

**Nevin Freeman (CEO)** studied transportation engineering at Portland State University before co-founding RIABiz (financial advisor publication), MetaMed Research, and Paradigm Academy. He describes Reserve's goal as creating "a currency that would outlast empires rising and falling."

**Matt Elder (CTO)** holds a BS in Mathematics and Computer Science from University of South Carolina and MS in Computer Science from UW-Madison. He previously worked at Google building machine-learning-based anomaly detection.

**Miguel Morel** served as COO before departing to found Arkham Intelligence.

### Investors

The seed round in 2018 raised $5 million, followed by a May 2019 Huobi Prime IEO. Key backers include Peter Thiel (PayPal co-founder), Sam Altman (OpenAI CEO), Coinbase Ventures, Digital Currency Group, and Fenbushi Capital.

### Notable advisors

Paul Atkins, who served as SEC Commissioner under George W. Bush (2002-2008), advised Reserve in its early stages. Atkins was confirmed as SEC Chair in December 2024, though Freeman clarified he "is not currently actively involved" with the project.

---

## Security

Reserve has invested over **$2.8 million in security audits** across both protocol implementations.

### Audit history

**Yield DTFs**: Audited by CertiK, Code4rena ($210,500 contest with 76 wardens), Trail of Bits, Solidified, Ackee, and Halborn.

**Index DTFs**: Audited by Trust Security, Cantina, and Trail of Bits.

### Bug bounty

The Immunefi program offers up to **$10 million** for critical vulnerabilities.

### Track record

No security exploits have affected Reserve Protocol since its October 2022 mainnet launch. The March 2023 USDC depeg stress-tested the recollateralization mechanism, which performed as designed.

---

## Risk analysis

### Technical risks

**Smart contract risk** remains inherent despite extensive auditing. Composability with external protocols (Aave, Compound, Lido) creates dependencies on third-party code.

**Oracle dependencies** for Yield DTFs introduce manipulation vectors, though Index DTFs eliminate this by requiring no price feeds.

### Economic risks

**Collateral volatility** can trigger recollateralization events where RSR is seized and sold. If RSR price declines correlate with collateral stress, this could create adverse feedback loops.

**Liquidity fragmentation** across multiple DTFs means no single product achieves the depth of DAI or USDC.

### Governance risks

**Voter apathy** represents the most immediate governance risk—participation averages just 5 voters per proposal on major DTFs. RFC-1269 directly addresses this through the veRSR model designed to incentivize engagement.

---

## Comparative analysis

### Reserve vs. MakerDAO/Sky

Feature

Reserve DTFs

MakerDAO/Sky

Creation model

Permissionless factory

Single unified system

Collateral structure

1:1 diversified baskets

Overcollateralized debt positions

Backing approach

RSR staking pool

MKR dilution auctions

Oracle dependency

Yes (Yield DTFs) / No (Index DTFs)

Yes

Reserve's key advantage lies in permissionless basket customization—anyone can create specialized products for different risk profiles. MakerDAO offers deeper liquidity and longer track record.

### Reserve vs. Frankencoin

Feature

Reserve DTFs

Frankencoin

Oracle dependency

Yes (Yield) / No (Index)

No (auction-based)

Liquidation speed

Minutes (automated)

Days

Governance model

RSR staking/voting

FPS veto-based (2% threshold)

Reserve offers faster liquidations and broader product variety. Frankencoin provides oracle manipulation resistance through its auction-based valuation system.

### Index DTFs vs. traditional ETFs

Feature

Reserve Index DTFs

Traditional ETFs

Trading hours

24/7/365

Market hours only

Basket capacity

50-100+ tokens

Varies

Custody

Smart contracts

Traditional custodian

Redemption

Instant, permissionless

T+2, authorized participants

DeFi composability

Full

None

---

## Summary

Reserve Protocol occupies a distinctive position in DeFi infrastructure—a factory for creating customized, fully-collateralized digital currencies and index products. The long-term vision of enabling "inflation-resistant money" backed by diversified real-world assets remains aspirational, but the current products demonstrate the technical foundation works.

For an educational audience, Reserve illustrates both DeFi's promise—transparent, programmable, permissionless financial infrastructure—and its challenges: governance participation remains elusive, liquidity fragments across products, and the gap between current DeFi-native products and the ultimate vision of real-world asset backing remains wide.

---

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/stablecoins/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Stablecoins</div><div class="kg-bookmark-description">Complete stablecoin analysis: USDC, USDT, BUIDL, BENJI, sUSDC, PYUSD, OUSG, USDY, aUSDC, USDe comparison. GENIUS Act compliance, yield protocols, institutional Treasury tokens, regulatory classification, risk assessment. Educational market guide from Sagix Apothecary.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-79.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/xroads.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/minestrone-soup-for-the-soul/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Minestrone soup for the soul</div><div class="kg-bookmark-description">Just like thyme and Parmesan are magical together but terrible alone, successful investing is about blending quality assets in the right proportions—buying laggards, avoiding hype, and trusting the recipe over timing the market.”</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-82.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/WhatsApp-Image-2025-09-15-at-16.12.09-5.jpeg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/modern-portfolio-construction-a-multi-asset-approach-for-the-digital-age/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Modern portfolio construction: A multi-asset approach for the digital age</div><div class="kg-bookmark-description">Integrating Traditional Wisdom with Contemporary Realities</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-83.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/71382bd5-a661-45db-b93f-af8593157505-6.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/ethereum-defi/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Ethereum DeFi</div><div class="kg-bookmark-description">Ethereum DeFi protocols: Uniswap, Curve, Hyperliquid, Aave, Morpho, Lido, GMX, Synthetix, dYdX, Aerodrome, Balancer, SushiSwap, Stargate, Across, Hop, Synapse, Orbiter, Sky/MakerDAO, Compound, Spark, Rocket Pool, Frax, Convex, Yearn, Beefy, EigenLayer, Renzo, Gains Network. Live TVL.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-80.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/ethdefi-1.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/defi/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">DeFi</div><div class="kg-bookmark-description">Learn DeFi fundamentals with Sagix’s deliberately boring, educational approach. Understand wallets, onramping, swapping, lending, and staking without casino-style manipulation designed to rush your financial decisions.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-81.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/nook-2-1.jpg" alt=""></div></a></figure>

---

## Legal disclaimers and disclosures

**Educational purpose only**: This content is provided exclusively for educational and research purposes. It should not be construed as investment advice, financial planning guidance, or recommendations to buy, sell, or hold any cryptocurrency or token. Historical patterns and comparative analysis provide context for learning but do not predict future performance or outcomes.

**AI-assisted research disclosure**: This analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all claims and data against authoritative sources including Reserve Protocol documentation, readers should independently verify any information before relying on it for investment or other decisions.

**Accuracy and liability limitations**: While extensive effort has been made to ensure accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. DeFi protocols evolve rapidly, and information may become outdated. Statistics and system parameters referenced may change without notice.

**Liability protections**: The authors, publishers, and Sagix Apothecary assume no responsibility for errors, omissions, or consequences arising from the use of this information. Users assume full responsibility for any decisions or actions taken based on this content.

**Investment risk warning**: Cryptocurrency investments carry substantial risk of loss. DeFi protocols face smart contract risks, economic attack risks, and regulatory risks. Past stability does not guarantee future stability. You could lose your entire investment.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and Sagix Apothecary. Readers seeking financial, investment, or legal guidance should consult qualified professionals licensed in their jurisdiction.

**Conflict disclosure**: Sagix Apothecary and its affiliates may hold positions in cryptocurrencies and tokens discussed in this analysis. This potential conflict should be considered when evaluating the information presented.

**Source verification**: Data and claims in this article draw from official Reserve Protocol documentation ([reserve.org](https://reserve.org)), Code4rena audit reports, Immunefi bug bounty program details, and third-party sources including CoinMarketCap and DeFiLlama.

**Publication information**:

*   Last updated: January 2026
*   Publisher: Sagix Apothecary - The Genesis Address LLC
*   Series: Protocol Analysis

---

*For more protocol analysis and historical financial insights, explore our* [*Druid Deep Dive*](https://sagix.io/the-druid-deep-dive/) *series and* [*Tokenomics scorecards*](https://sagix.io/tokenomics/)*.*
