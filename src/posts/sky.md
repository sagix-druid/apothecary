---
title: "Sky: what MakerDAO became"
date: "2026-07-25T19:10:06.000Z"
updated: "2026-07-26T21:18:40.000Z"
excerpt: "Sky, formerly MakerDAO, explained: USDS backing and peg mechanics, the 4% Sky Savings Rate behind sUSDS, the Agent Network deploying $14.5B in collateral, SKY buybacks and governance concentration, the S&P B- rating, and how it compares to Frankencoin. Risks and portfolio considerations."
feature_image: "/content/images/2026/07/sky-makerdao-.jpg"
topics: ["sky"]
internal_tags: ["#sky"]
---

*The largest decentralized stablecoin issuer, ten years and one identity change later*

---

## What is Sky?

Sky is the protocol formerly known as MakerDAO, the oldest large-scale credit system in decentralized finance and the issuer of USDS, the successor to DAI. The core mechanism has not changed since 2017: users lock collateral into smart contracts and mint a dollar-pegged stablecoin against it as overcollateralized debt \[1\]. What has changed is almost everything around that mechanism, the name, the tokens, the collateral, and the business model.

**As of July 2026, combined USDS and DAI supply stands at roughly $10 billion, backed by approximately $14.5 billion in protocol collateral** \[2\]. That makes Sky the largest decentralized stablecoin issuer by a wide margin and places USDS among the largest dollar stablecoins overall, behind only the centralized giants USDT and USDC \[3\]. The protocol generated **$435 million in annualized revenue and $168 million in annualized profit in 2025** \[4\], figures that most licensed banks of comparable balance sheet size would recognize as a respectable year.

Sky is also, in a sense we will examine closely, no longer primarily a stablecoin project. Its own materials now describe it as a global capital allocation network \[2\]. Whether that reframing is substance or marketing is one of the questions this analysis tries to answer.

**Official website:**

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://sky.money"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Sky.money | Put Stablecoins to Work with sUSDS, Vaults &amp; SKY</div><div class="kg-bookmark-description">Put stablecoins to work on Sky.money: earn yield via the Sky Savings Rate (sUSDS), curated Vaults, and SKY staking. Swap USDC↔USDS 1:1, zero fees.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/69c3bd05e2b3f564426feb87_favicon-4a86a57e-cfa1-4904-8cbd-b8af098fa255.png" alt=""><span class="kg-bookmark-author">Sky.money logo</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/69c17395aa497ef1736be279_sky-money-home-og-20-1--69865117-cdc7-4354-a1c2-170a2c62439d.png" alt=""></div></a></figure>

For readers who want the condensed version, our [Sky scorecard](/sky/) covers the tokenomics at a glance. This post goes deeper.

---

## From Maker to Sky: the rebrand and the token migration

MakerDAO launched single-collateral DAI in December 2017 and migrated to multi-collateral DAI in November 2019 \[5\]. In August 2024, following years of internal debate over founder Rune Christensen's "Endgame" restructuring plan, the protocol rebranded to Sky and launched two new tokens the following month: USDS, convertible 1:1 from DAI, and SKY, convertible from the old MKR governance token at a fixed rate of **1 MKR = 24,000 SKY** \[6\].

Neither old token was killed immediately. DAI still circulates, around **$4 to 5 billion of it** \[3\], and remains convertible at par through an official contract. MKR, however, is being retired with increasing firmness. SKY became the sole governance token in 2025, and a Delayed Upgrade Penalty took effect on September 22, 2025: holdouts converting MKR now receive 1% less SKY, with the penalty rising one percentage point every three months \[7\]. **The penalty reached 4% in June 2026** \[8\]. At the time the penalty was announced, roughly 81% of MKR had already converted, leaving about 176,000 MKR worth over $300 million on the old token \[7\]. Coinbase force-converted its users' MKR in January 2026 at the then-current 2% penalty \[9\].

This matters beyond housekeeping. A conversion ratio that decays on a schedule is a governance decision to confiscate value from passive holders in order to finish a migration. It worked, and it was voted through openly, but it is worth remembering when evaluating what Sky governance is willing to do.

---

## The USDS stablecoin: backing and peg

### How USDS maintains its peg

USDS inherits DAI's architecture. The peg rests on four mechanisms working together.

The first is overcollateralization. Every USDS is backed by collateral held in protocol vaults, currently around **$14.5 billion of collateral against roughly $10 billion of stablecoin liabilities** \[2\]. The collateral mix has drifted far from the ETH-only origins: USDC held in the Peg Stability Module, tokenized Treasury bills and real-world credit routed through allocators, crypto-collateralized loans against ETH and staked ETH derivatives, and deployments into Sky's own lending markets \[10\].

The second is the Peg Stability Module itself, which allows 1:1 swaps between USDC and USDS. This is the workhorse of the peg and also its most criticized component, since it ties USDS directly to a centralized, freezable asset. During the March 2023 USDC depeg, DAI traded at a discount for the same reason \[5\].

The third is the interest rate lever. Governance sets stability fees on borrowing and the savings rate on deposits, expanding or contracting supply as needed.

The fourth is liquidation. Unlike [Frankencoin](/frankencoin/), which prices collateral through internal auctions and needs no external price feeds, Sky depends on oracles to know when a vault is undercollateralized, then sells the collateral through Dutch auctions. The oracle dependency is a genuine attack surface, and the liquidation machinery has failed before: during the March 2020 "Black Thursday" crash, network congestion let liquidations clear at zero bids, leaving the system with several million dollars of unbacked DAI that had to be covered by auctioning newly minted MKR \[11\]. The system was rebuilt afterward and has absorbed subsequent crashes, including the October 2025 market-wide liquidation cascade, without new bad debt \[4\].

### What actually backs the yield

Holders can deposit USDS into the Sky Savings Rate module and receive sUSDS, an ERC-4626 vault token whose redemption value grows continuously. **The rate stands at 4.0% as of July 2026** \[2\], but the number is a governance parameter, not a market price. It launched at 9% in September 2024 as a growth subsidy and has been stepped down repeatedly since, tracking Federal Reserve cuts and, in May 2026, an explicit governance decision to prioritize surplus accumulation over yield competition \[9\].

**sUSDS is now the largest yield-bearing stablecoin in the market, with supply around $6.5 billion** and roughly a quarter of all yield distributed in the category \[12\]. In the second quarter of 2026 alone it paid out $84.9 million to holders, more than the next two competitors combined \[13\]. It sits, for disclosure and for context, at 18% of our own ixEDEL basket, where we analyzed it alongside syrupUSDC and steakUSDC in our [stablecoin yield vaults post](/stablecoin-yield-vaults/).

The honest description of where the yield comes from: Sky charges borrowers stability fees, earns Treasury yield on its reserve assets, and collects returns from capital deployed through its allocator network, then passes a governance-chosen fraction of that revenue to sUSDS holders. It is bank economics, a spread business, executed through smart contracts.

---

## The Agent Network: outsourcing the balance sheet

The most significant structural change since the rebrand is not the token migration. It is the transformation of how Sky deploys capital.

Under the old model, MakerDAO governance directly approved every collateral type and every real-world asset deal, a process that produced multi-month forum debates over individual credit facilities. The Endgame plan proposed spinning deployment out to semi-independent units, originally called SubDAOs, then Stars, and now Sky Agents \[14\]. **Five governance-funded agents are live as of mid-2026: Spark, Grove, Keel, Obex, and Osero**, alongside external allocators including Securitize, Maple Finance, and Centrifuge \[15\]. Agents borrow USDS from the protocol under governance-set risk parameters and deploy it into strategies spanning fixed income, structured credit, tokenized mortgages, energy financing, and AI infrastructure, returning revenue that funds the savings rate \[14\].

The two largest agents illustrate the range. Spark, the first Star, runs lending, savings, and liquidity infrastructure managing over **$3 billion** \[16\], and in 2026 launched a stablecoin FX layer on Uniswap v4 aimed at the growing crowd of bank and fintech stablecoins \[13\]. Grove, the credit specialist, crossed **roughly $2.6 billion in TVL** and directed **$1 billion into tokenized AAA-rated collateralized loan obligations**, on-chain exposure to corporate credit that has nothing to do with crypto lending demand \[17\]. Each agent has its own token, its own governance, and its own loss-absorbing junior capital that stands in front of Sky's balance sheet in a defined waterfall \[18\].

The pitch is diversification: stablecoin yield that survives bear markets because it is not hostage to crypto borrowing demand. The tradeoff is equally clear. Real-world credit cannot be liquidated in a block. An agent's CLO position or mortgage book carries default risk, duration risk, and legal enforcement risk that no oracle can price in real time \[14\]. Sky has effectively traded oracle risk and crypto volatility for counterparty and credit risk, the oldest risks in banking. Readers of our Druid Deep Dive series will recognize the shape of that trade.

---

## SKY: the governance token

SKY carries the governance rights MKR once held, plus a more aggressive value-return program.

On the emission side, the protocol distributes **600 million SKY per year** to USDS holders through the Sky Token Rewards program \[19\]. On the destruction side, the Smart Burn Engine, launched in February 2025, buys SKY on the open market with protocol surplus and burns it. **The engine deployed $102 million in its first year at a pace of roughly $1 million per day** \[19\], though governance temporarily throttled purchases in March 2026 when market conditions argued for conserving surplus \[9\]. Holders can also stake SKY through the Staking Engine to earn USDS rewards and borrow against their position \[1\].

The token's ownership structure deserves more attention than it usually gets. S&P noted that **founder Rune Christensen controls about 9% of governance tokens**, and that chronically low voter turnout gives that stake decisive practical influence \[20\]. In March 2026, a publicly traded company, Stablecoin Development Corporation, formerly a pharmaceutical firm called NovaBay, bought approximately **$147 million of SKY, close to 9% of circulating supply**, in a private placement the Sky Frontier Foundation itself participated in \[9\]. Two parties holding nearly a fifth of the governance supply of a $10 billion monetary system is a concentration profile closer to a founder-led company than to the credibly neutral infrastructure the protocol's marketing describes.

---

## The S&P rating: a milestone with fine print

In August 2025, **S&P Global assigned Sky a B- issuer credit rating with a stable outlook, the first credit rating ever given to a DeFi protocol** \[20\]. Sky's communications lean on the "first ever" heavily, and fairly, since persuading a major agency to evaluate a stack of smart contracts under nonbank financial institution methodology is a genuine achievement in institutional legibility \[21\].

The rating itself is less flattering than the milestone. B- is deep in speculative territory. S&P cited high depositor concentration, meaning a few large holders could trigger a liquidity run, highly centralized governance, and weak risk-adjusted capitalization, only partially offset by the protocol's track record of minimal credit losses since 2020 \[20\]. The agency separately scores USDS/DAI in its Stablecoin Stability Assessments, published on-chain since October 2025 through Chainlink, a protocol we covered in our [oracle infrastructure analysis](/chainlink-dominates-oracle-infrastructure-as-institutional-finance-goes-onchain/) \[22\].

The regulatory picture adds another open question. The GENIUS Act, signed in July 2025, created the first US federal stablecoin framework, and it requires covered issuers to maintain the technical capacity to freeze tokens and prohibits them from paying yield on payment stablecoins \[23\]. USDS has no protocol-level freeze function on its core contract, and its savings yield is central to its value proposition \[5\]. Sky is not a legal entity and may sit outside the covered-issuer perimeter entirely, but that is an unresolved position, not a safe harbor.

---

## Sky vs. Frankencoin: two answers to the same question

Our Frankencoin analysis compared the Swiss protocol to Sky from the smaller project's perspective. The comparison reads differently from this side of the table.

<div class="html-card">
<table>
<thead>
<tr>
<th>Feature</th>
<th>Sky (USDS/DAI)</th>
<th>Frankencoin (ZCHF)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Peg target</td>
<td>US dollar</td>
<td>Swiss franc</td>
</tr>
<tr>
<td>Scale</td>
<td>~$10 billion supply</td>
<td>~16 million ZCHF supply</td>
</tr>
<tr>
<td>Oracle dependency</td>
<td>Yes (price feeds)</td>
<td>None (auction-based)</td>
</tr>
<tr>
<td>Collateral</td>
<td>Crypto, USDC, Treasuries, private credit</td>
<td>Crypto only</td>
</tr>
<tr>
<td>Liquidation speed</td>
<td>Minutes</td>
<td>Days</td>
</tr>
<tr>
<td>Governance</td>
<td>Majority voting, low turnout</td>
<td>Veto-based, 2% threshold</td>
</tr>
<tr>
<td>Yield source</td>
<td>Spread on diversified allocations</td>
<td>Borrower interest and fees</td>
</tr>
<tr>
<td>Credit rating</td>
<td>S&amp;P B-</td>
<td>None</td>
</tr>
<tr>
<td>Censorship surface</td>
<td>USDC in PSM freezable</td>
<td>None at protocol level</td>
</tr>
</tbody>
</table>
</div>

The two protocols started from the same idea, overcollateralized stablecoins governed by an equity-like token, and made opposite bets at every fork in the road. Frankencoin chose mechanism purity: no oracles, no fiat reserves, no real-world assets, accepting smallness as the price. Sky chose scale: it absorbed centralized collateral, off-chain credit, and institutional process, accepting that its decentralization is now a matter of degree rather than kind. Neither choice is obviously wrong. They are different products for different threat models, which is precisely why a diversified basket can hold exposure to both philosophies without contradiction.

---

## Risk analysis

**Credit and counterparty risk.** The shift to real-world assets means USDS backing now includes instruments that cannot be liquidated on-chain. A default in an agent's credit book flows through junior capital first, but a large enough loss reaches the surplus buffer and, ultimately, SKY holders through dilution \[14\].

**Depositor concentration.** S&P's central concern. A small number of large holders account for a disproportionate share of USDS, and their coordinated exit would stress liquidity faster than the collateral could be unwound \[20\].

**Governance concentration.** Two identifiable parties hold close to 20% of governance supply against a backdrop of low turnout \[9\]\[20\]. The delayed-upgrade penalty demonstrated that governance will impose costs on passive holders when it considers the cause justified.

**Oracle and liquidation risk.** The 2020 failure was repaired, not abolished. Extreme volatility combined with network congestion remains the stress scenario, and the growing share of non-crypto collateral reduces but does not eliminate it \[11\].

**Regulatory risk.** GENIUS Act freeze and yield provisions cut against USDS's current design. Sky's non-entity structure is untested against a determined regulator \[23\].

**Centralized collateral.** USDC in the PSM is freezable by Circle. This transmitted the March 2023 depeg to DAI and remains the most direct censorship vector \[5\].

Against all of this stands the strongest fact in Sky's favor: **nine years of continuous operation through every market cycle without a core protocol exploit** \[12\]. In a sector that lost over $750 million to exploits in the first half of 2026 alone, that operating history is not a slogan, it is the moat.

---

## Practical considerations

USDS suits DeFi users who want a dollar stablecoin with on-chain verifiable backing and are comfortable with the RWA and governance profile described above. sUSDS suits holders who want passive dollar yield in ERC-4626 form without lockups, currently around 4%, with the understanding that the rate is set by vote and will move \[2\]. SKY is an equity-like claim on the spread business, with buyback support on one side and 600 million tokens of annual emissions plus concentrated ownership on the other \[19\].

Both USDS and sUSDS are permissionless at the contract level, available on Ethereum mainnet with bridged deployments on Base, Solana, Arbitrum, and other networks \[3\]. Deep liquidity exists on major DEX aggregators, and DAI converts to USDS at par through the official converter.

---

## Summary

Sky is the rare DeFi protocol old enough to have a history worth studying. It survived its own near-death in 2020, its founder's governance wars, a depeg imported from Circle, and a rebrand that many observers expected to fail. What emerged is not the credibly neutral world currency the early Maker community imagined. It is something more familiar: a large, profitable, thinly capitalized, founder-influenced credit institution that happens to settle on Ethereum, now rated by S&P and expanding into corporate credit and mortgages through a franchise network.

That description is not a criticism. Banks are useful, and a transparent one with $14.5 billion in verifiable collateral and no exploit in nine years is more legible than most. But investors should evaluate Sky as what it has become, a spread business with credit risk and concentrated governance, rather than what its name change suggests it left behind. Position sizing should follow from that reading.

---

## Sources and references

\[1\] Sky Protocol documentation. "Sky Money: USDS, sUSDS, SKY and the Staking Engine." Available: https://sky.money/

\[2\] Sky Ecosystem. Official protocol statistics: stablecoin supply, collateral value, and Sky Savings Rate. Available: https://www.skyeco.com/

\[3\] DeFiLlama. Sky protocol and stablecoin supply dashboards. Available: https://defillama.com/protocol/sky

\[4\] Sky Frontier Foundation. "Annual State of Sky Ecosystem 2025." December 2025.

\[5\] Eco. "What Is DAI? Decentralized Stablecoin Explained 2026." Available: https://eco.com/support/en/articles/15210329-what-is-dai-decentralized-stablecoin-explained-2026

\[6\] Sky Ecosystem. "MKR to SKY Upgrade." Official upgrade documentation. Available: https://upgrademkrtosky.skyeco.com/

\[7\] The Block. "Sky opens vote to penalize stragglers delaying MKR-to-SKY token conversion." September 2025. Available: https://www.theblock.co/post/371401/sky-opens-vote-to-penalize-stragglers-delaying-mkr-to-sky-token-conversion

\[8\] CoinMarketCap. "Sky to raise delayed MKR-to-SKY upgrade penalty to 4% on June 4." June 2026.

\[9\] Messari. "Sky Protocol." Project intelligence page: SDEV investment, buyback adjustments, governance timeline. Available: https://messari.io/project/sky-protocol

\[10\] Eco. "Sky Savings Rate Deep Dive 2026: SSR, sUSDS, USDS Mechanics." May 2026. Available: https://eco.com/support/en/articles/15254003-sky-savings-rate-deep-dive-2026-ssr-susds-usds-mechanics

\[11\] Eco. "sUSDS Explained: Sky's Savings Rate Token." Black Thursday loss figures and collateral composition. Available: https://eco.com/support/en/articles/14798655-susds-explained-sky-s-savings-rate-token

\[12\] Block Magnates. "The Yield-Bearing Stablecoin Landscape in 2026: A Map by Yield Source, Not by APY." July 2026.

\[13\] Sky Ecosystem. Official communications on Q2 2026 yield distribution and the Spark Stablecoin FX Layer. Available: https://x.com/SkyEcosystem

\[14\] Alea Research. "Sky: Stablecoins as Capital Allocators." April 2026. Available: https://alearesearch.io/newsletters/sky-stablecoins-as-capital-allocators

\[15\] Crypto Reporter. "Sky Frontier Foundation Appoints Greg Feibus as Global Head of Capital Markets." May 2026.

\[16\] Sky.money. "Ecosystem Rewards: Deposit USDS, Earn Sky Agent Tokens." Available: https://sky.money/sky-ecosystem-rewards

\[17\] Phemex Academy. "What Is Grove (GROVE): Sky Ecosystem Credit Protocol 2026." July 2026.

\[18\] Block Analitica Research. "Sky Dashboard Update: Star Monitoring and Required Risk Capital." Available: https://blockanalitica.substack.com/p/sky-dashboard-update-0c3

\[19\] Tokenomics.com. "Sky Tokenomics: How the Smart Burn Engine Destroys $102M in SKY Per Year." February 2026.

\[20\] The Block. "S&P Global gives Sky Protocol 'B-' credit rating, citing centralization and liquidity risks." August 2025. Available: https://www.theblock.co/post/366106/sp-global-sky-protocol

\[21\] Steakhouse Financial. "Credit Ratings: Making Stablecoins Legible to Institutions." August 2025. Available: https://kitchen.steakhouse.financial/p/credit-ratings-making-stablecoins

\[22\] S&P Global. "S&P Global Ratings and Chainlink Collaboration Brings S&P's Stablecoin Stability Assessments On-Chain." October 2025. Available: https://press.spglobal.com/2025-10-14-S-P-Global-Ratings-and-Chainlink-Collaboration-Brings-S-Ps-Stablecoin-Stability-Assessments-On-Chain

\[23\] Wolters Kluwer. "The GENIUS Act Era." Analysis of the Guiding and Establishing National Innovation for U.S. Stablecoins Act. Available: https://www.wolterskluwer.com/en/expert-insights/the-genius-act-era

---

## Legal disclaimers and disclosures

**Educational purpose only**: This content is provided exclusively for educational and research purposes. It should not be construed as investment advice, financial planning guidance, or recommendations to buy, sell, or hold any cryptocurrency or token. Historical patterns and comparative analysis provide context for learning but do not predict future performance or outcomes.

**AI-assisted research disclosure**: This analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all claims and data against authoritative sources including official Sky Protocol documentation, S&P Global publications, and independent research, readers should independently verify any information before relying on it for investment or other decisions.

**Accuracy and liability limitations**: While extensive effort has been made to ensure accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. DeFi protocols evolve rapidly, and information may become outdated. Statistics, yields, and system parameters referenced may change without notice. The Sky Savings Rate in particular is a governance-set parameter subject to change at any time.

**Liability protections**: The authors, publishers, and Sagix Apothecary assume no responsibility for errors, omissions, or consequences arising from the use of this information. Users assume full responsibility for any decisions or actions taken based on this content.

**Investment risk warning**: Cryptocurrency investments carry substantial risk of loss. Stablecoins, despite their name, can lose their peg and experience significant value fluctuations. DeFi protocols face smart contract risks, economic attack risks, credit risks from real-world asset exposure, and regulatory risks. Past stability does not guarantee future stability. You could lose your entire investment.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and Sagix Apothecary. Readers seeking financial, investment, or legal guidance should consult qualified professionals licensed in their jurisdiction.

**Conflict disclosure**: Sagix Apothecary and its affiliates may hold positions in cryptocurrencies and tokens discussed in this analysis, including sUSDS held within the ixEDEL portfolio. This potential conflict should be considered when evaluating the information presented.

**Source verification**: Data and claims in this article draw from official Sky Protocol documentation (sky.money, skyeco.com, developers.sky.money), S&P Global Ratings publications, The Block, Messari, DeFiLlama, and independent protocol research as cited above.

**Publication information**:

*   Last updated: July 2026
*   Series: Protocol Analysis

Publisher: The Genesis Address LLC

---
