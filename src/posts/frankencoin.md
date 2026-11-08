---
title: "Frankencoin: A Swiss-made approach to decentralized stablecoins"
date: "2026-01-16T19:12:44.000Z"
updated: "2026-03-02T03:28:17.000Z"
excerpt: "Frankencoin (ZCHF): Swiss franc stablecoin with oracle-free design from University of Zurich PhD research. Vs MakerDAO/Terra comparisons, risk analysis, FPS governance, yield mechanics, and DeFi portfolio considerations.\n"
feature_image: "/content/images/2026/01/e035ba60-b982-4e92-9928-ac069e456a91.jpg"
topics: ["frankencoin","Sagix Apothecary","stablecoins","stable"]
internal_tags: ["#frankencoin","#sagix-apothecary","#stable","#stablecoins"]
---

*The oracle-free stablecoin that emerged from a PhD thesis*

---

## What is Frankencoin?

Frankencoin (ZCHF) is a decentralized, collateralized stablecoin designed to track the Swiss franc, arguably one of the world's most stable fiat currencies. Over the past 50 years, the Swiss franc has appreciated more than 240% against the US dollar, making it an attractive reference currency for crypto investors seeking stability beyond dollar-denominated assets.

What sets Frankencoin apart from other collateralized stablecoins is its **oracle-free design**. While protocols like MakerDAO (now Sky) rely on external price feeds (oracles) to determine when liquidations should occur, Frankencoin uses an internal auction-based mechanism for both price discovery and liquidation. This eliminates a critical attack vector that has plagued other DeFi protocols.

The system operates on Ethereum mainnet and is available across multiple Layer 2 networks including Polygon, Arbitrum, Optimism, Base, Avalanche, Gnosis, and Sonic.

**Current statistics:**

*   Total Value Locked: ~24.3 million ZCHF
*   Total Supply: ~16 million ZCHF
*   Collateralization: ~200% (overcollateralized with wrapped Bitcoin and Ether)

**Official website:** [https://frankencoin.com](https://frankencoin.com/)

---

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/ixedel/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Sagix Club Edelweiss: a risk parity strategy for all economic regimes</div><div class="kg-bookmark-description">Club Edelweiss (ixEDEL) is a defensive DTF on Reserve Protocol implementing risk parity principles on-chain. The portfolio balances yield-bearing stablecoins, tokenized gold, overcollateralized Swiss Franc, and Bitcoin to weather any economic regime, delivering crypto upside while cutting drawdowns.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-100.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/ixEdel-1.JPG" alt=""></div></a></figure>

---

## The ZCHF stablecoin: Backing and yield

### How ZCHF maintains its peg

Unlike algorithmic stablecoins that rely on market psychology and arbitrage alone, ZCHF employs a **soft peg** maintained through multiple mechanisms:

1.  **Overcollateralization**: Every ZCHF in circulation is backed by collateral worth at least one Swiss franc. The system currently maintains approximately 200% collateralization, primarily in wrapped Bitcoin and Ether tokens.
2.  **Interest rate policy**: FPS holders can influence the system's interest rate to make minting more or less attractive, effectively controlling supply expansion.
3.  **Reserve hierarchy**: The system maintains multiple layers of reserves to absorb potential losses during market downturns:
    *   Individual position reserves (set by each borrower)
    *   The FPS equity reserve pool
    *   Reserves from all other collateral positions
4.  **Auction-based liquidations**: When positions become undercollateralized, the system initiates auctions that simultaneously discover fair prices and liquidate positions, all without external price feeds.

### Earning yield on ZCHF

The **Frankencoin Savings Module** allows ZCHF holders to deposit their stablecoins and earn interest. Current yields are approximately **3% annually**, funded by:

*   Interest paid by borrowers who mint ZCHF against collateral
*   Fees collected from minting operations
*   Liquidation proceeds

Importantly, ZCHF deposited in the savings module remains **fully segregated** and attributable to its owner at all times. There is no lending or rehypothecation happening in the background. Unlike minter reserves, saved ZCHF cannot be accessed to save the system during a depeg event, providing an additional layer of protection for savers.

The savings module is implemented as an **ERC-4626 vault**, making it compatible with standard DeFi integrations.

---

## FPS: The governance token

### Tokenomics and mechanics

Frankencoin Pool Shares (FPS) represent equity ownership in the Frankencoin system, functioning similarly to shares in a bank. Key characteristics:

**Supply mechanism:**

*   FPS has no fixed supply. New tokens can be minted by anyone who contributes capital to the equity reserve pool.
*   The amount of FPS received follows a **bonding curve** with the invariant: *Market Cap = FPS Supply × FPS Price = 3 × Equity Reserve Pool*
*   0.3% issuance fee applies when minting new FPS
*   0.3% redemption fee applies when returning FPS to the system

**Redemption rules:**

*   FPS can be redeemed (burned) for their proportional share of the equity pool
*   **Minimum 90-day holding period** required before redemption
*   FPS can be freely transferred or sold on secondary markets at any time

**Current FPS market cap:** ~10.5 million ZCHF

### Governance: Veto-based system

Frankencoin employs a unique **veto-based governance** model rather than majority voting:

*   Anyone can propose new collateral types or system modifications
*   Holders with at least **2% of voting power** can veto proposals
*   Voting power = Number of FPS × Holding duration
*   Smaller holders can pool their votes through delegation to reach the 2% threshold
*   A "kamikaze" function allows participants to sacrifice their own votes to cancel equal votes from other addresses, preventing griefing attacks

This low threshold (2%) ensures that even small, committed participants can prevent harmful changes, making governance highly decentralized.

### WFPS: Wrapped FPS for DeFi

Wrapped Frankencoin Pool Shares (WFPS) is an ERC-20 wrapper for FPS that enables trading on decentralized exchanges like Uniswap. Key differences from FPS:

*   **No voting rights** (voting power remains with the original FPS)
*   **Equivalent economic value** to FPS
*   Available on Polygon for lower gas fees
*   Can be unwrapped back to FPS at any time

This wrapper allows FPS holders to access liquidity without waiting for the 90-day redemption period, while preserving the governance stability provided by the holding duration requirement.

---

## Academic foundation

Frankencoin was conceived as part of a **doctoral dissertation** titled "Essays in Decentralized Finance" completed by Luzius Meisser at the Department of Finance, University of Zurich in 2024. The thesis was presented at the SNB-CIF Conference on Cryptoassets and Financial Innovation in June 2022.

The dissertation provides formal analysis of:

*   The game theory behind the oracle-free liquidation mechanism
*   Quantitative risk assessment of Bitcoin as collateral
*   The veto-based governance system
*   The concept of "Continuous Capital Corporations" – companies that issue and redeem shares autonomously according to fixed rules

<figure class="kg-card kg-image-card"><img src="/content/images/2026/01/e834a20c-faca-45f7-abb1-349359b2c4ba.jpg" class="kg-image" alt="" loading="lazy" width="1280" height="720" srcset="/content/images/size/w600/2026/01/e834a20c-faca-45f7-abb1-349359b2c4ba.jpg 600w, /content/images/size/w1000/2026/01/e834a20c-faca-45f7-abb1-349359b2c4ba.jpg 1000w, /content/images/2026/01/e834a20c-faca-45f7-abb1-349359b2c4ba.jpg 1280w" sizes="(min-width: 720px) 720px"></figure>

**Full thesis available at:** [https://www.zora.uzh.ch/id/eprint/259657/1/259657.pdf](https://www.zora.uzh.ch/id/eprint/259657/1/259657.pdf)

The academic rigor behind Frankencoin provides a level of theoretical validation uncommon in DeFi protocols, though it does not eliminate all risks.

---

## Comparative analysis

### Frankencoin vs. Sky (formerly MakerDAO)

For readers familiar with Sky/MakerDAO, which we cover on our [Sky protocol page](https://claude.ai/sky), here is how the two systems compare:

Feature

Frankencoin (ZCHF)

Sky/MakerDAO (DAI/USDS)

**Peg target**

Swiss franc (CHF)

US dollar (USD)

**Oracle dependency**

None (auction-based)

Yes (Chainlink, custom oracles)

**Liquidation speed**

Slower (days)

Faster (minutes)

**Collateral flexibility**

Higher (any liquid asset)

Lower (whitelist required)

**Governance model**

Veto-based (2% threshold)

Majority voting

**Market maturity**

Younger, smaller

Established, larger TVL

**Regulatory status**

Payment token (Swiss law)

Security concerns in some jurisdictions

**Key similarity:** Both are overcollateralized systems where users deposit crypto assets to mint stablecoins. Both have governance tokens (FPS/MKR) that absorb residual risk and earn system fees.

**Key difference:** Frankencoin's oracle-free design provides resilience against oracle manipulation attacks but comes at the cost of slower liquidation cycles. During the March 2020 "Black Thursday" event, MakerDAO's oracle-dependent system nearly collapsed when network congestion prevented timely liquidations. Frankencoin's auction mechanism would have faced similar challenges, as noted in security audits.

### Frankencoin vs. Terra/Luna (UST)

For those who followed the catastrophic Terra collapse in May 2022, which we analyze in our Druid Deep Dive series, the comparison to Frankencoin is instructive:

Feature

Frankencoin (ZCHF)

Terra (UST)

**Collateral backing**

~200% crypto-collateralized

None (algorithmic)

**Stabilization mechanism**

Overcollateralization + reserves

Burn/mint equilibrium with LUNA

**Death spiral risk**

Limited (backed by external assets)

Extreme (circular dependency)

**Governance token role**

Provides equity capital cushion

Absorbed all volatility

**Yield source**

Borrowing activity and fees

Anchor Protocol (unsustainable 20% APY)

**The fundamental difference:** Terra's UST was backed by LUNA, but LUNA's value derived from its ability to mint UST. This circular dependency created a reflexive death spiral when confidence broke. When UST lost its peg, everyone rushed to redeem, flooding the market with LUNA, which crashed LUNA's price, which made UST even more unbacked, creating a feedback loop that destroyed $45 billion in value within days.

Frankencoin avoids this design flaw entirely. ZCHF is backed by **external assets** (BTC, ETH) that have value independent of the Frankencoin system. FPS holders provide equity capital that acts as a buffer, but even if FPS went to zero, the collateral backing ZCHF would still exist.

The Terra lesson: **Algorithmic stablecoins without external collateral are inherently fragile.** Frankencoin is collateralized, not algorithmic.

---

## Risk analysis and mitigation measures

### Technical risks

**Smart contract vulnerabilities:** The Frankencoin contracts have been audited by:

*   Code4rena
*   ChainSecurity (three separate audits)
*   Decurity
*   Blockbite

While audits reduce risk, they cannot eliminate it. A novel bug could still exist.

**Frontend attacks:** Users interact through web interfaces that could be compromised. The mitigation is direct contract interaction for high-value transactions.

### Economic risks

**Collateral crash:** If BTC and ETH prices collapse faster than liquidations can process, the system could become undercollateralized. Mitigations include:

*   ~200% overcollateralization provides substantial buffer
*   Multi-layered reserve system (individual → FPS pool → all positions)
*   Governance can adjust reserve requirements

**Depeg risk:** ZCHF could trade below par if:

*   Liquidation auctions fail to attract bidders during extreme volatility
*   Market loses confidence in the system
*   Governance fails to respond appropriately to changing conditions

**Auction mechanism limitations:** The oracle-free design means liquidations happen over days rather than minutes. During extreme volatility (like March 2020), this could allow significant bad debt accumulation.

### Governance risks

**Voter apathy:** If FPS holders don't actively monitor proposals, harmful changes could pass without veto.

**Kamikaze attack costs:** While the system allows vote cancellation, doing so is costly and may not prevent all griefing scenarios.

**Concentration:** Large FPS holders could coordinate to prevent beneficial changes or force harmful ones.

### Mitigation summary

The Frankencoin system employs multiple layers of defense:

1.  **No external oracle dependency** – eliminates manipulation vectors
2.  **Overcollateralization** – provides buffer against price declines
3.  **Multi-layered reserves** – losses absorbed in priority order
4.  **Low governance threshold** – 2% can veto harmful proposals
5.  **Holding duration requirements** – prevents flash loan governance attacks
6.  **Multiple security audits** – reduces smart contract risk
7.  **Swiss legal classification** – payment token status provides regulatory clarity

---

## Practical considerations

### Who might use Frankencoin?

*   **Swiss residents** wanting to hold CHF on-chain without counterparty risk
*   **Non-USD diversification** seekers wanting exposure to Swiss franc stability
*   **DeFi users** who want to borrow against crypto at fixed rates
*   **Yield seekers** comfortable with ~3% APY and the system's risk profile
*   **Governance participants** interested in the FPS token's profit/risk sharing

### How to acquire ZCHF

**On-ramps:**

*   DFX.swiss (bank wire, credit card)
*   Mt Pelerin (Swiss-based exchange)

**DEX swaps:**

*   CoW Swap (Ethereum)
*   Uniswap (various networks)

### Investment considerations

FPS represents a bet on:

1.  Growth of the Frankencoin ecosystem
2.  Continued stability of the peg
3.  Fees exceeding liquidation losses over time

Holding FPS means accepting residual liquidation risk in exchange for potential fee income and appreciation.

---

## Summary

Frankencoin represents a thoughtfully designed alternative to both centralized stablecoins and the failed algorithmic experiments like Terra. Its oracle-free architecture, academic foundations, and Swiss regulatory clarity make it a noteworthy project in the decentralized stablecoin space.

However, it remains a relatively small protocol (~16M supply) compared to giants like USDC or even DAI. Its slower liquidation mechanism, while providing decentralization benefits, introduces risks during extreme volatility. The system's long-term success depends on continued growth of TVL, active governance participation, and the overall stability of crypto collateral assets.

For portfolio construction purposes, Frankencoin offers non-USD stablecoin diversification with DeFi-native yield, backed by transparent on-chain reserves that anyone can verify. As always, position sizing should reflect the protocol's risk profile and your personal risk tolerance.

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/stablecoin-yield-vaults/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Stablecoin yield vaults: sUSDS, syrupUSDC, and steakUSDC</div><div class="kg-bookmark-description">Discover the booming stablecoin yield vaults: sUSDS (APY from protocol revenue &amp; RWAs), syrupUSDC (via institutional lending), and steakUSDC (through curated DeFi markets). Compare yields, risks, and strategies in our detailed guide. Grow your USD holdings</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-75.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/f17f9f39-a997-4e94-a731-a984cd57668d-1.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/gold/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Tokenized gold reaches $4 billion as xAUt, PAXG, and VNXAU chart different paths</div><div class="kg-bookmark-description">Unlock the Blockchain Gold Rush: xAUt conquers chains, PAXG reigns with ironclad regs, VNXAU opens doors for everyday investors. Dive into digital gold ownership, vault security, and DeFi thrills!</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-76.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/faaa38c4-266f-4318-b541-cbe8c8aae276-1.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/episode-8-brazilian-hyperinflation-the-ultimate-portfolio-stress-test-1980-1994/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">The Druid Deep Dive episode 8: Brazilian hyperinflation: The ultimate portfolio stress test (1980-1994)</div><div class="kg-bookmark-description">Brazil’s hyperinflation (1980-1994) stemmed from decentralized money creation - state banks could print currency. Terra LUNA’s collapse shows how DeFi protocols can trigger similar spirals when multiple mechanism can trigger token creation simultaneously.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-58.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/IMG_6419-6.PNG" alt=""></div></a></figure>

---

## Legal disclaimers and disclosures

**Educational purpose only**: This content is provided exclusively for educational and research purposes. It should not be construed as investment advice, financial planning guidance, or recommendations to buy, sell, or hold any cryptocurrency or token. Historical patterns and comparative analysis provide context for learning but do not predict future performance or outcomes.

**AI-assisted research disclosure**: This analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all claims and data against authoritative sources including the Frankencoin documentation, academic papers, and security audits, readers should independently verify any information before relying on it for investment or other decisions.

**Accuracy and liability limitations**: While extensive effort has been made to ensure accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. DeFi protocols evolve rapidly, and information may become outdated. Statistics, yields, and system parameters referenced may change without notice.

**Liability protections**: The authors, publishers, and Sagix Apothecary assume no responsibility for errors, omissions, or consequences arising from the use of this information. Users assume full responsibility for any decisions or actions taken based on this content.

**Investment risk warning**: Cryptocurrency investments carry substantial risk of loss. Stablecoins, despite their name, can lose their peg and experience significant value fluctuations. DeFi protocols face smart contract risks, economic attack risks, and regulatory risks. Past stability does not guarantee future stability. You could lose your entire investment.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and Sagix Apothecary. Readers seeking financial, investment, or legal guidance should consult qualified professionals licensed in their jurisdiction.

**Conflict disclosure**: Sagix Apothecary and its affiliates may hold positions in cryptocurrencies and tokens discussed in this analysis. This potential conflict should be considered when evaluating the information presented.

**Source verification**: Data and claims in this article draw from official Frankencoin documentation ([docs.frankencoin.com](https://docs.frankencoin.com/)), the University of Zurich dissertation repository, security audit reports from Code4rena and ChainSecurity, and third-party data sources including DeFiLlama and CoinGecko.

**Publication information**:

*   Last updated: January 2026
*   Publisher: Sagix Apothecary - The Genesis Address LLC
*   Series: Protocol Analysis

---

*For more protocol analysis and historical financial insights, explore our* [*Druid Deep Dive*](https://sagix.io/druid-deep-dive) *series and* [*Tokenomics scorecards*](https://sagix.io/tokenomics)*.*
