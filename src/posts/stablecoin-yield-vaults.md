---
title: "Stablecoin yield vaults: sUSDS, syrupUSDC, and steakUSDC"
date: "2026-01-30T14:25:15.000Z"
updated: "2026-01-30T14:36:21.000Z"
excerpt: "Discover the booming stablecoin yield vaults: sUSDS (APY from protocol revenue & RWAs), syrupUSDC (via institutional lending), and steakUSDC (through curated DeFi markets). Compare yields, risks, and strategies in our detailed guide. Grow your USD holdings "
feature_image: "/content/images/2026/01/f17f9f39-a997-4e94-a731-a984cd57668d.jpg"
topics: ["stablecoins","stable","Sagix Apothecary"]
internal_tags: ["#stablecoins","#stable","#sagix-apothecary"]
---

*Three approaches to earning yield on dollar stablecoins through protocol-native savings, institutional lending, and curated DeFi markets*

The yield-bearing stablecoin sector has grown 235% over the past year, reaching over $11 billion in total value. Among the leading products, three distinct approaches have emerged for generating returns on dollar-denominated assets: Sky Protocol's sUSDS leverages protocol revenue and real-world asset allocations, Maple Finance's syrupUSDC channels deposits into institutional overcollateralized lending, and Steakhouse Financial's steakUSDC curates lending markets across Morpho's permissionless infrastructure. Each product offers materially different yield sources, risk profiles, and custody arrangements that warrant careful examination.

---

## Comparative Analysis

<div class="html-card">
<table style="width:100%; table-layout:fixed; word-wrap:break-word; word-break:break-word;">
<thead>
<tr>
<th>Factor</th>
<th>sUSDS</th>
<th>syrupUSDC</th>
<th>steakUSDC</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Current APY</strong></td>
<td>4.0%</td>
<td>5.2%</td>
<td>3.5%</td>
</tr>
<tr>
<td><strong>Yield source</strong></td>
<td>Protocol revenue,<br>RWA investments,<br>lending fees</td>
<td>Institutional<br>overcollateralized<br>lending</td>
<td>Curated DeFi<br>lending markets</td>
</tr>
<tr>
<td><strong>Underlying stable</strong></td>
<td>USDS (crypto +<br>RWA collateralized)</td>
<td>USDC<br>(fiat-backed)</td>
<td>USDC<br>(fiat-backed)</td>
</tr>
<tr>
<td><strong>Custody model</strong></td>
<td>Non-custodial<br>smart contracts</td>
<td>Hybrid: permissionless<br>deposits, custodied<br>borrower collateral</td>
<td>Non-custodial<br>throughout</td>
</tr>
<tr>
<td><strong>TVL/AUM</strong></td>
<td>~$18.19B</td>
<td>~$4.01B</td>
<td>~$0.42B</td>
</tr>
<tr>
<td><strong>Withdrawal</strong></td>
<td>Instant,<br>no lockup</td>
<td>&lt;5 minutes<br>average</td>
<td>Subject to<br>market liquidity</td>
</tr>
<tr>
<td><strong>Track record</strong></td>
<td>MakerDAO heritage<br>since 2017</td>
<td>$8.4B+ originated,<br>zero losses</td>
<td>1.5 years,<br>no losses</td>
</tr>
<tr>
<td><strong>Primary risk</strong></td>
<td>Governance,<br>RWA counterparty</td>
<td>Borrower credit,<br>operational</td>
<td>Collateral,<br>curator judgment</td>
</tr>
</tbody>
</table>
</div>

---

## sUSDS: protocol-native yield from the MakerDAO successor

### Yield mechanism

sUSDS represents the savings-focused derivative of USDS, the native stablecoin of Sky Protocol (formerly MakerDAO). When users deposit USDS into the Sky Savings Rate (SSR) module, they receive sUSDS tokens that automatically accumulate value as yield accrues. The token follows an accumulating model rather than rebasing, meaning the redemption value of each sUSDS gradually increases relative to USDS while the token balance remains constant.

The Sky Savings Rate currently offers approximately 4-5% APY, funded by three primary revenue sources \[1\]:

**Crypto-collateralized loan fees**: Interest payments from borrowers who mint USDS against ETH, stETH, and other approved collateral through the protocol's vault system generate the foundational yield stream. This mechanism directly inherits MakerDAO's decade-long operational history.

**Real-world asset investments**: Sky has allocated over $2.5 billion to tokenized real-world assets, including substantial positions in US Treasury bills through providers like BlackRock-Securitize (BUIDL), Superstate (USTB), and Centrifuge (JTRSY) \[2\]. A March 2025 governance vote approved up to $1 billion in new RWA allocations across these three providers.

**SparkLend liquidity provisioning**: The Spark Protocol, operating as an independent "Star" within the Sky ecosystem, generates additional revenue through its lending markets. Spark recently allocated $100 million to Superstate's crypto carry fund (USCC) to diversify beyond Treasury yields as rates compressed below 4% \[3\].

### Underlying stablecoin

USDS maintains a soft peg to the US dollar through overcollateralization with crypto assets and a Peg Stability Module (PSM) enabling direct 1:1 conversion with USDC. The stablecoin represents a 1:1 upgrade path from DAI, with both tokens coexisting during the transition period. As of late 2025, USDS supply exceeded $9.8 billion with 86% year-over-year growth \[4\].

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/makerdao-scorecard/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Sky</div><div class="kg-bookmark-description">Discover Sky: Evolved MakerDAO with $6.8B TVL &amp; $6.5B+ stablecoin reserves. Pioneer DeFi bridging TradFi via USDS, Sky Savings, staking &amp; RWAs. Deflationary SKY token for governance. Dive into multi-chain insights on Sagix.io.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-69.JPG" alt=""><span class="kg-bookmark-author">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/sky.jpeg" alt=""></div></a></figure>

### Custody and technical implementation

The SSR operates through non-custodial, permissionless smart contracts. Users maintain full control of deposited funds, with instant withdrawal available at any time without lockup periods or penalties. The sUSDS token is ERC-4626 compliant, enabling standardized vault interactions across DeFi protocols.

sUSDS has expanded beyond Ethereum to Base and Solana through Wormhole's Native Token Transfer (NTT) system, maintaining unified liquidity without wrapped token fragmentation \[5\].

### Risk considerations

**Governance risk**: The SSR rate is determined by SKY token holders through decentralized voting. Rate changes can occur in response to market conditions or protocol sustainability concerns, affecting expected returns.

**Collateral volatility**: While USDS benefits from diversification across crypto and RWA collateral, extreme market conditions could stress the overcollateralization ratios underpinning the system.

**Smart contract exposure**: Despite inheriting MakerDAO's extensively audited codebase, the protocol's complexity across multiple modules presents ongoing smart contract risk.

**RWA counterparty risk**: Allocations to tokenized Treasury products introduce dependencies on traditional financial infrastructure and custodians like BlackRock and Securitize.

---

## syrupUSDC: institutional lending meets permissionless DeFi

### Yield mechanism

syrupUSDC is Maple Finance's yield-bearing stablecoin, generating returns through fixed-rate, overcollateralized loans extended to institutional borrowers. Unlike protocol-native savings products, Maple operates as an onchain asset manager connecting permissionless DeFi capital with professionally underwritten credit.

When users deposit USDC into Syrup, they receive syrupUSDC tokens representing their proportional share of the lending pool. Yield currently ranges from 6.5-8% APY, sourced entirely from interest payments on institutional loans \[6\]. The product has scaled to over $2.66 billion in deposits as of late 2025, representing 63% of Maple's $4+ billion total assets under management \[7\].

**Borrower profile**: Maple extends loans to market makers, trading firms, and crypto-native funds who require liquidity for arbitrage, delta-neutral strategies, or operational purposes. All borrowers undergo multi-step credit underwriting including financial diligence, qualitative assessment, and operational evaluation \[8\].

**Collateralization requirements**: Loans are overcollateralized at 120-170%, primarily backed by BTC, ETH, and stablecoins. Collateral is held in custody with institutional partners including Anchorage, BitGo, and Copper through tri-party agreements.

**Active margin management**: Maple's credit team monitors collateral values in real-time and issues automatic margin calls as positions approach liquidation thresholds. During the October 10, 2025 volatility event (the largest liquidation event in crypto history, with $19 billion unwound across exchanges), Maple processed nine margin calls with zero liquidations and zero losses \[9\].

### Underlying stablecoin

syrupUSDC is backed 1:1 by USDC deposits plus accrued yield. Circle's USDC provides the underlying dollar stability, with syrupUSDC functioning as a receipt token for Maple's lending pools rather than an independent stablecoin.

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/stablecoins-review/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Sagix: Complete stablecoin market analysis 2025</div><div class="kg-bookmark-description">Complete stablecoin analysis: USDC, USDT, BUIDL, BENJI, sUSDC, PYUSD, OUSG, USDY, aUSDC, USDe comparison. GENIUS Act compliance, yield protocols, institutional Treasury tokens, regulatory classification, risk assessment. Educational market guide from Sagix.”</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-70.JPG" alt=""><span class="kg-bookmark-author">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/digital2-1.jpg" alt=""></div></a></figure>

### Custody and technical implementation

The architecture separates capital formation from credit underwriting. Depositors interact permissionlessly with Maple's smart contracts, while borrowers must complete KYC and pass institutional onboarding. This hybrid structure maintains DeFi's open access for lenders while preserving traditional credit standards for borrowers.

syrupUSDC operates across Ethereum, Solana (via Chainlink CCIP), and Arbitrum. Maple seeded a $10 million Uniswap pool enabling instant USDC/syrupUSDC swaps, and April 2025 improvements reduced average withdrawal times to under five minutes through a dynamic instant liquidity buffer \[10\].

### Risk considerations

**Borrower credit risk**: Despite overcollateralization, counterparty defaults could occur if collateral values decline faster than margin calls can be processed. Maple's track record shows zero losses across $8.4+ billion in originated loans, but past performance doesn't guarantee future results.

**Concentration risk**: The institutional borrower pool, while diversified across 28+ counterparties, remains concentrated in crypto trading firms whose fortunes correlate with market conditions.

**Operational risk**: Maple's underwriting and margin call processes involve human judgment and operational execution outside pure smart contract automation.

**Regulatory uncertainty**: Institutional crypto lending operates in evolving regulatory environments. A November 2025 Cayman Islands court injunction related to Maple's Bitcoin yield products highlights ongoing legal complexity \[11\].

---

## steakUSDC: curated lending through Morpho's permissionless markets

### Yield mechanism

steakUSDC represents Steakhouse Financial's USDC vault on Morpho, generating yield by lending deposits against blue-chip crypto and real-world asset collateral. Unlike Maple's centralized underwriting, Steakhouse operates as a "curator": an independent risk expert who allocates deposits across Morpho's permissionless lending markets without taking custody of funds.

The vault employs what Steakhouse calls a "dual engine" approach, dynamically allocating between crypto-backed markets (lending against BTC, ETH, liquid staking tokens) and RWA-backed markets (lending against tokenized Treasury bills and private credit) depending on market conditions \[12\]. Current yields range from 4-10.8% APY based on borrowing demand and market allocation.

**Morpho's infrastructure**: Morpho operates as a permissionless lending protocol where anyone can create isolated markets with specific collateral, loan assets, liquidation thresholds, and interest rate models. Each market operates independently, containing risks within its boundaries rather than pooling across a shared liquidity layer like Aave or Compound \[13\].

**Curator role**: Steakhouse selects which Morpho markets to include in the vault, sets allocation weights, and manages rebalancing. They earn fees (typically 0-10% of yield) for this curation service. Critically, curators cannot withdraw user funds. Their control is limited to capital allocation decisions within predetermined parameters \[14\].

### Underlying stablecoin

Like syrupUSDC, steakUSDC is backed by USDC deposits plus accrued yield. The token represents a proportional share of the vault's USDC holdings deployed across Morpho markets.

### Custody and technical implementation

Steakhouse vaults are non-custodial throughout the stack. User deposits flow directly into Morpho smart contracts, with Steakhouse controlling only allocation parameters. The vault includes protective features: a 7-day timelock for major changes and an Aragon DAO guardian enabling depositors to veto parameter modifications \[15\].

Steakhouse has scaled to over $1.45 billion in total deposits across 48 vaults on Ethereum, Base, Polygon, Arbitrum, and other chains, representing 600% growth in 2025 \[16\]. The firm has established itself as the largest stablecoin risk curator on Morpho and powers yield products for Coinbase (USDC lending up to 10.8% APY), Trust Wallet, Bitget, and other major platforms \[17\].

### Risk considerations

**Collateral risk**: Each Morpho market accepts specific collateral with unique risk profiles. RWA-backed markets depend on tokenized asset quality and liquidity, while crypto-backed markets face volatility risk during market stress.

**Curator judgment**: Allocation decisions reflect Steakhouse's risk assessment methodology. While transparent and constrained by timelocks, these decisions introduce human judgment into yield optimization.

**Market fragmentation**: Morpho's isolated market structure prevents contagion but can create liquidity fragmentation. Withdrawals depend on available liquidity in active markets, though overcollateralized structure provides structural protection.

**Smart contract risk**: Users are exposed to both Morpho's core protocol contracts and Steakhouse's MetaMorpho vault implementation. Multiple audit cycles have occurred, but complexity remains.

---

### Yield source transparency

sUSDS benefits from Sky's established revenue model but introduces RWA counterparty dependencies that add layers between depositors and yield generation. syrupUSDC offers the clearest yield attribution: interest from identifiable institutional borrowers with on-chain collateral verification. steakUSDC provides transparency into market allocations but abstracts yield across multiple Morpho markets with varying risk profiles.

### Risk-return positioning

The products occupy distinct positions on the risk spectrum. sUSDS represents the most conservative option with lower yields but battle-tested infrastructure and deep liquidity. syrupUSDC targets higher returns through institutional credit exposure with active risk management but concentrated borrower profiles. steakUSDC offers the widest yield range, allowing users to select vaults matching their risk tolerance from conservative RWA-focused to higher-yield crypto collateral strategies.

### Institutional adoption

All three products have attracted significant institutional interest. Sky's $2.5B RWA allocations demonstrate traditional finance integration. Maple secured partnerships with Spark ($50M allocation), Bitwise, and major exchanges. Steakhouse powers Coinbase's consumer-facing USDC lending product and serves as the default yield infrastructure for multiple exchanges and wallets.

---

## Conclusion

The stablecoin yield vault sector has matured beyond simple lending protocols into sophisticated financial infrastructure. sUSDS extends MakerDAO's proven model with expanded RWA exposure, offering institutional-grade yield through decentralized governance. syrupUSDC bridges DeFi capital formation with traditional credit underwriting, delivering premium yields through professional risk management. steakUSDC democratizes access to curated lending strategies through Morpho's permissionless infrastructure.

Each product makes distinct tradeoffs between yield, complexity, and risk exposure. Institutional allocators may prefer syrupUSDC's familiar credit structure and active management. Users prioritizing decentralization and governance participation may favor sUSDS and its Sky ecosystem integration. Those seeking flexible, non-custodial yield optimization across market conditions may find steakUSDC's curated approach compelling.

The competitive dynamics between these products (and their interaction with traditional Treasury yields) will likely shape the next phase of onchain fixed income development. As institutional adoption accelerates and regulatory frameworks clarify, yield-bearing stablecoins are positioning to capture meaningful share of the multi-trillion dollar money market fund industry.

---

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/frankencoin/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Frankencoin: A Swiss-made approach to decentralized stablecoins</div><div class="kg-bookmark-description">Frankencoin (ZCHF): Swiss franc stablecoin with oracle-free design from University of Zurich PhD research. Vs MakerDAO/Terra comparisons, risk analysis, FPS governance, yield mechanics, and DeFi portfolio considerations.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-71.JPG" alt=""><span class="kg-bookmark-author">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/e035ba60-b982-4e92-9928-ac069e456a91-5.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/gold/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Tokenized gold reaches $4 billion as xAUt, PAXG, and VNXAU chart different paths</div><div class="kg-bookmark-description">Unlock the Blockchain Gold Rush: xAUt conquers chains, PAXG reigns with ironclad regs, VNXAU opens doors for everyday investors. Dive into digital gold ownership, vault security, and DeFi thrills!</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-72.JPG" alt=""><span class="kg-bookmark-author">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/faaa38c4-266f-4318-b541-cbe8c8aae276.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/episode-8-brazilian-hyperinflation-the-ultimate-portfolio-stress-test-1980-1994/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">The Druid Deep Dive episode 8: Brazilian hyperinflation: The ultimate portfolio stress test (1980-1994)</div><div class="kg-bookmark-description">Brazil’s hyperinflation (1980-1994) stemmed from decentralized money creation - state banks could print currency. Terra LUNA’s collapse shows how DeFi protocols can trigger similar spirals when multiple mechanism can trigger token creation simultaneously.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-73.JPG" alt=""><span class="kg-bookmark-author">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/IMG_6419-7.PNG" alt=""></div></a></figure>

---

## Sources and references

\[1\] Spark Protocol Documentation. "Savings USDS." https://docs.spark.fi/user-guides/earning-savings/susds

\[2\] CoinDesk. "BlackRock's BUIDL, Superstate and Centrifuge Win Spark's $1B Tokenized Asset Windfall." March 18, 2025.

\[3\] Blockworks. "Sky pivots beyond treasuries as yields dip." October 24, 2025.

\[4\] Messari. "Sky Protocol Annual State Report 2025."

\[5\] pp.one. "sUSDS: the interest-accruing USDS derivative." June 11, 2025.

\[6\] Maple Finance. "syrupUSDC and syrupUSDT: Built for Scale." December 2025.

\[7\] Messari. "SyrupUSDC Price Research." December 23, 2025.

\[8\] Modular Capital. "Maple: On-Chain Lending Powerhouse." May 19, 2025.

\[9\] Maple Finance. "Maple Risk Management: October 10th, 2025 Volatility Event."

\[10\] Maple Finance. "syrupUSDC and syrupUSDT: Built for Scale." December 2025.

\[11\] Yahoo Finance / CoinMarketCap. "Core Foundation Secures Injunction Against Maple Finance." November 20, 2025.

\[12\] Coinbase. "Steakhouse USDC Morpho Vault." https://www.coinbase.com/price/steakhouse-usdc-morpho-vault

\[13\] Morpho Protocol. "The Morpho Effect: 2025." December 2025.

\[14\] Steakhouse Financial. "Morpho Vaults Documentation." https://www.steakhouse.financial/docs/products/morpho-vaults

\[15\] Steakhouse Financial. "Morpho Vaults Documentation." https://www.steakhouse.financial/docs/products/morpho-vaults

\[16\] Morpho Protocol. "Steakhouse Financial Case Study." https://morpho.org/stories/steakhouse/

\[17\] Coinbase Blog. "Earn competitive yields by lending your USDC." September 18, 2025.

---

## Legal disclaimers and disclosures

**Educational purpose only**: This content is provided exclusively for educational and research purposes. It should not be construed as investment advice, financial planning guidance, or recommendations to buy, sell, or hold any cryptocurrency or token. Historical patterns and comparative analysis provide context for learning but do not predict future performance or outcomes.

**AI-assisted research disclosure**: This analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all claims and data against authoritative sources including official protocol documentation, security audits, and third-party data providers, readers should independently verify any information before relying on it for investment or other decisions.

**Accuracy and liability limitations**: While extensive effort has been made to ensure accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. DeFi protocols evolve rapidly, and information may become outdated. Statistics, yields, and system parameters referenced may change without notice.

**Liability protections**: The authors and The Genesis Address Publishing LLC assume no responsibility for errors, omissions, or consequences arising from the use of this information. Users assume full responsibility for any decisions or actions taken based on this content.

**Investment risk warning**: Cryptocurrency investments carry substantial risk of loss. Stablecoins, despite their name, can lose their peg and experience significant value fluctuations. DeFi protocols face smart contract risks, economic attack risks, and regulatory risks. Past stability does not guarantee future stability. You could lose your entire investment.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and The Genesis Address Publishing LLC. Readers seeking financial, investment, or legal guidance should consult qualified professionals licensed in their jurisdiction.

**Conflict disclosure**: The Genesis Address Publishing LLC and its affiliates may hold positions in cryptocurrencies and tokens discussed in this analysis. This potential conflict should be considered when evaluating the information presented.

**Source verification**: Data and claims in this article draw from official protocol documentation (Sky Protocol, Maple Finance, Morpho, Steakhouse Financial), security audit reports, and third-party data sources including DeFiLlama, CoinGecko, and Messari.

**Publication information**:

*   Last updated: January 2026
*   Publisher: The Genesis Address Publishing LLC
*   Series: Protocol Analysis
