---
title: "Five tokens, one AI trade: inside Reserve's new AI DTF suite"
date: "2026-07-30T20:50:14.000Z"
updated: "2026-07-30T21:03:35.000Z"
excerpt: "Reserve’s five AI Index DTFs (BUILDOUT, POWER, PHOTON, NEOCLOUD, ROBOTS) launched July 2026 on BNB Chain. Tokenized US equities via Ondo, 0.3% mint + 0.6% TVL. What’s inside the baskets, how the wrapper works, and the risks the tear sheets leave open."
feature_image: "/content/images/2026/07/Reserve-DTFs-XbDQ3ImqKnySN11mUmctufjkknkGLJ.jpg"
topics: ["ai","Research","dtf","reserve"]
internal_tags: ["#ai","#sagix-apothecary","#dtf"]
---

*What BUILDOUT, POWER, NEOCLOUD, PHOTON and ROBOTS hold, how the wrapper works, and the question the tear sheets do not answer*

Reserve launched five thematic Index DTFs on July 9, 2026, each a single ERC-20 token on BNB Smart Chain holding a market-capitalization-weighted basket of tokenized US-listed equities issued by Ondo Global Markets \[1\]\[2\]. The broadest of them, BUILDOUT, packages **25 companies with an aggregate market capitalization of roughly $16.7 trillion** into one transferable token \[3\]. All five carry identical fees, **a 0.3% mint fee and a 0.6% annual TVL fee** \[4\], rebalance quarterly through onchain Dutch auctions \[5\], and are closed to buyers in the United States and Canada while reaching roughly 145 other jurisdictions \[6\]\[7\].

## The wrapper, stated plainly

An Index DTF is a fully asset-backed ERC-20 token representing a basket of underlying tokens held onchain \[5\]. Anyone can mint by depositing the basket, or redeem by burning the token to receive the basket back, at net asset value, without an authorized-participant gate \[4\]. Rebalancing runs through declining-price Dutch auctions that surplus tokens into deficit tokens, with the CoW Swap solver network integrated as a filler and permissionless bidding enabled \[4\]. Index DTFs require no price oracles and no collateral plugins, which is the structural distinction from Reserve's Yield DTFs \[5\].

None of this makes them funds in the legal sense. Reserve states in its own documentation that these are not ETFs and are not regulated as ETFs, and that ABC Labs, which operates reserve.org and the app, is not a bank, broker-dealer or investment adviser and is not registered with the SEC, the CFTC or any other financial regulator \[4\]. The comparison to an ETF is a description of shape, not of legal protection.

What sits underneath is the part worth slowing down on. None of these five DTFs holds a share of Nvidia or Intuitive Surgical. Each holds an Ondo Global Markets token representing that share, backed one-to-one by an actual share held in a regulated US brokerage account \[8\]. Ondo, not Reserve, sets who may buy and redeem \[6\]. Ondo's tokenized stocks are structured as total return trackers, so dividends are reinvested into the underlying position rather than paid to a wallet, and holders do not receive the corporate voting rights of the underlying shares \[4\].

## The five baskets

<div class="html-card">
<table>
<thead>
<tr>
<th>DTF</th>
<th>Theme</th>
<th>Names</th>
<th>Per-name cap</th>
<th>Minimum market cap</th>
<th>Aggregate</th>
</tr>
</thead>
<tbody>
<tr>
<td>BUILDOUT</td>
<td>AI hardware across chips, memory, equipment, networking, power</td>
<td>25</td>
<td>10%</td>
<td>none, top 25 by size</td>
<td>~$16.7T</td>
</tr>
<tr>
<td>POWER</td>
<td>Generation, grid, electrical gear and power chips for data centres</td>
<td>13</td>
<td>20%</td>
<td>~$10B</td>
<td>~$1.02T</td>
</tr>
<tr>
<td>PHOTON</td>
<td>Fiber, lasers, transceivers, optical chips</td>
<td>9</td>
<td>20%</td>
<td>~$5B</td>
<td>~$456B</td>
</tr>
<tr>
<td>ROBOTS</td>
<td>Surgical, factory and warehouse automation, autonomy, lidar, vision</td>
<td>9</td>
<td>20%</td>
<td>~$2B</td>
<td>~$272B</td>
</tr>
<tr>
<td>NEOCLOUD</td>
<td>GPU-cloud operators and power-rich hosts renting AI compute</td>
<td>8</td>
<td>20%</td>
<td>~$5B</td>
<td>~$206B</td>
</tr>
</tbody>
</table>
</div>

Weights and market caps are illustrative, dated June 17, 2026, and change with the market and at each rebalance \[3\]\[4\]\[9\]\[10\]\[11\].

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2026/07/AI-DTFs-ETFs-H6pRNZLP9lSwQcx6DpL0udFVs1J1Gq.png" class="kg-image" alt="" loading="lazy" width="1086" height="1448" srcset="/content/images/size/w600/2026/07/AI-DTFs-ETFs-H6pRNZLP9lSwQcx6DpL0udFVs1J1Gq.png 600w, /content/images/size/w1000/2026/07/AI-DTFs-ETFs-H6pRNZLP9lSwQcx6DpL0udFVs1J1Gq.png 1000w, /content/images/2026/07/AI-DTFs-ETFs-H6pRNZLP9lSwQcx6DpL0udFVs1J1Gq.png 1086w" sizes="(min-width: 720px) 720px"><figcaption>Image courtesy of <a href="https://www.reservenews.app/post/reserve-launches-five-ai-dtfs-bringing-the-ai-supply-chain-on-chain">https://www.reservenews.app/post/reserve-launches-five-ai-dtfs-bringing-the-ai-supply-chain-on-chain</a></figcaption></figure>

**BUILDOUT** holds the 25 largest qualifying US-listed AI-hardware companies, with Nvidia, Taiwan Semiconductor, Broadcom and Micron each pinned at the 10% cap, **so the top four are roughly 40% of the basket** \[3\]. Below them sit AMD, ASML, Intel, the wafer-fab equipment names, Arm, and a tail running through Dell, IBM, Arista, Corning and the optical and power names at one to three percent each \[3\]. It is the only member of the suite using a 10% cap, and the only one selected by rank rather than by a size floor.

**POWER** takes the electricity slice and concentrates it. GE Vernova sits at the 20% cap, and **the top four, GE Vernova, Eaton, Vertiv and Quanta Services, come to about 55.6%** \[9\]. The rest spans nuclear and merchant generation through Constellation, Vistra and Talen, behind-the-meter fuel cells through Bloom Energy, and power semiconductors through onsemi and Vicor, down to Powell Industries at a one percent breadth position \[9\].

**PHOTON** is the narrowest by design. Corning, Coherent, Lumentum and Ciena together account for **roughly three-quarters of the basket** \[10\]. The remainder reaches into the silicon-photonics foundry layer through Tower Semiconductor, driver and receiver silicon through MACOM, contract manufacturing through Fabrinet, module assembly through Applied Optoelectronics, and indium-phosphide substrate through AXT at 1.6% \[10\].

**ROBOTS** is the most maturity-diverse. Intuitive Surgical, Rockwell Automation and Symbotic all sit at the 20% cap, **fixing the top three at exactly 60%** \[11\]. Behind them, Lattice Semiconductor at 16.4%, Aurora Innovation at 10.15% and Mobileye at 6.29%, then Himax, Hesai and Ouster as sensing satellites near two percent \[11\]. The basket's $2B floor, the lowest in the suite, is what admits the lidar and autonomy names at all \[11\].

**NEOCLOUD** is the youngest category and the most interdependent. Nebius and CoreWeave both sit at the 20% cap, **and the top four reach roughly 65.6%** \[4\]. The host side is populated largely by former bitcoin miners that pivoted their secured megawatts to AI tenants, IREN, TeraWulf, Hut 8, Applied Digital, Cipher Mining and Core Scientific \[4\]. Reserve's own document notes the entanglement without softening it: Core Scientific hosts CoreWeave, CoreWeave tried and failed to acquire Core Scientific, Applied Digital builds campuses leased to CoreWeave, and one Google-backed tenant anchors leases at three separate hosts \[4\].

## Where the overlap sits

Anyone reading these as five distinct exposures will double-count. Six POWER constituents, GE Vernova, Eaton, Vertiv, Quanta Services, Constellation and Bloom Energy, also appear in BUILDOUT \[3\]\[9\]. PHOTON's three largest holdings, Corning, Coherent and Lumentum, are also BUILDOUT constituents \[3\]\[10\]. BUILDOUT holds them at small weight as the power and optical layers of a broad build-out; the specialist DTFs hold a subset at multiples of that weight. Holding BUILDOUT alongside POWER or PHOTON stacks exposure to the same companies rather than diversifying across them, and Reserve says so in both documents \[3\]\[9\].

## Who actually rebalances these

Governance belongs to RSR vote-lockers rather than DTF holders, and all five share a single vlRSR vault on BNB Chain \[4\]. On these five, **33% of fees fund an RSR buy-and-burn and roughly 67% routes to vote-locked governance, with a 0% deployer share**, against a 50/50 split on Reserve's Ethereum-mainnet DTFs \[4\].

The mechanism that matters day to day is narrower than a full vote. All five run optimistic governance, under which a two-of-five multisig designated as optimistic proposer can start a rebalance that executes automatically unless holders of **1% of vote-locked RSR veto it inside a roughly one-day window** \[4\]\[12\]. Standard proposals, covering fees, basket composition and roles, run the full cycle at a 10% quorum over about seven days \[4\]. Rebalancing is the one action on the fast path.

That machinery has already been exercised, and already misfired. A mandate update for NEOCLOUD passed in late July and, as submitted, switched off optimistic rebalancing as an unintended side effect. A Reserve contributor filed a corrective proposal on July 25 to restore it, noting it had to execute after the original \[12\]. The four other AI DTFs were unaffected. The episode is minor in consequence and useful as evidence: three weeks in, governance over these baskets is live, active, and capable of shipping a mistake.

Contract addresses on BNB Chain are BUILDOUT `0xd7ce7a841310982acd976d1a6fe7bb6063c5689d`, POWER `0x290bcc0fd5096cc3261ae2021841c7bc67cb0f51`, PHOTON `0xa0fe4e0aeca5479705ce996615b2eacb6b6a10fb`, NEOCLOUD `0xf571fe3f0d74521bc7310b111faea931c748f27b` and ROBOTS `0x75617e7653f86f074cc30b9fd4ebf52ba9b62247` \[7\]\[4\].

## Are these solid AI bets

The honest answer is that the tear sheets do not claim to know, and neither does anything published here. Reserve's own reference documents quote no performance, return or yield figures for any of the five, and state explicitly that projected market growth does not predict token returns \[3\]\[4\].

The forecast underneath each theme is a third-party estimate of industry size, and the spread between them is instructive. WSTS frames global semiconductor sales moving from **roughly $796 billion in 2025 toward about $1.5 trillion in 2026**, memory-led \[3\]. Goldman Sachs Research has put US data-centre power demand at **about 32 GW in 2025 rising toward 95 GW by 2030** \[9\], and AI data-centre optical component spending at **roughly $15 billion a year in 2026 growing toward about $154 billion a year by 2028** \[10\]. Independent researchers size the neocloud market at **about $35 billion in 2026 heading toward $180 billion or more by 2030** \[4\].

Then there is ROBOTS, where the two most-cited Wall Street estimates sit two orders of magnitude apart. Morgan Stanley has put the humanoid robot market at **roughly $5 trillion by 2050** with about a billion units in service; Goldman Sachs Research puts the humanoid total addressable market at **about $38 billion by 2035** \[11\]. Reserve's document does not pick between them and instructs readers to treat the pair as bookends of a deeply uncertain forecast rather than as targets \[11\]. That is a more candid framing than most thematic product literature offers, and it is also the clearest statement in the whole suite of what these baskets are: a directional position on a build-out whose timing nobody has pinned down.

Four structural questions follow from the baskets themselves rather than from the forecasts.

The first is whether the diversification is real. Each of these is a single-theme basket in which the constituents share one demand driver, which means the basket hedges the question of which company wins and does nothing about the question of whether the theme holds up. Reserve states this directly for each DTF \[3\]\[4\]\[9\]\[10\]\[11\].

The second is customer concentration upstream. Demand across all five traces back to a small set of hyperscalers and AI labs. NEOCLOUD is the sharpest case, where several constituents derive the majority of contracted backlog from a single counterparty, and where backlog is signed revenue that still depends on energising power and delivering capacity years out \[4\].

The third is what the US-listed-only constraint does to the thesis. Constituents must be tokenizable through Ondo, which in practice means US-listed \[3\]. Relevant Asian memory makers, equipment suppliers, turbine manufacturers and robotics companies that trade only on non-US exchanges cannot be included, so each basket is a US-listed cut of a global supply chain rather than the supply chain itself \[3\]\[11\].

The fourth is valuation, and it is the one no basket construction can address. Enthusiasm for AI infrastructure has already re-rated most of these names, and an elevated starting valuation increases downside sensitivity to any disappointment \[3\].

<!-- signup -->

## What the wrapper adds, and what it costs

The simplicity is genuine. One transaction replaces 25, weighting and quarterly reconstitution happen without intervention, and the position trades around the clock with no minimum or maximum size \[4\]. Reserve's own comparison is that assembling and re-trading the basket quarterly in a brokerage account is not free either, so whether 0.6% a year is worth paying depends on how cheaply the reader could replicate it \[4\].

The costs are structural rather than headline. The Ondo layer introduces issuer and custodian dependency, including the possibility of transfer restrictions, freezes or redemption limits imposed for regulatory or commercial reasons \[4\]. Ondo's documentation does not specify what happens to a tokenized stock if its underlying company is delisted, which Reserve flags as an unquantified risk \[4\]. Because the underlying equities trade only during US market hours while the tokens trade continuously, minting, redeeming and trading can be constrained, paused or conservatively priced overnight, at weekends and on US holidays \[4\]. And because the underlying Ondo tokens are primarily liquid offchain, mint and redeem route through approved RFQ and intent minters rather than deep decentralized-exchange liquidity, so execution quality depends on those minters \[4\].

Liquidity was seeded and market makers engaged at launch, but the suite is weeks old and depth is thinner than in a mature market \[4\]. It was also bought. Bitget ran an $80,000 prize-pool trading campaign around the launch that closed on July 20 \[13\]. Whatever volume the five carry now is the first reading uncontaminated by that incentive, and it is a better test of demand than anything in the first fortnight.

Constituent selection is also discretionary. None of the five tracks a third-party index. The rules are published and consistent, but deciding which companies count as AI power or AI hardware is a judgment call made by the parties operating the DTF, and Reserve lists that discretion among its own disclosed conflicts of interest \[10\].

## Who can actually buy

Eligibility is set by Ondo, not Reserve \[6\]. The United States and its territories, Canada, and sanctioned jurisdictions are prohibited outright. Brazil, the United Kingdom, the EEA, Switzerland, Singapore, Hong Kong and Malaysia are restricted, meaning purchase requires approval as a professional or accredited investor through a request-and-verification process. Elsewhere, a wallet connection suffices, subject to local law \[6\].

For Brazilian readers, that places the suite squarely in professional-investor territory rather than retail. Reserve also notes that buying the DTF on a decentralized exchange is not a reliable route around the gate, because the underlying Ondo tokens carry transfer permissioning that can block the wrapper from moving to non-eligible wallets \[6\].

One asymmetry is worth naming. The purchase gate does not extend to governance. Vote-locking RSR to govern these five carries no geographic restriction at all, so a US person barred from owning a single unit of BUILDOUT can still vote on its basket, its fees and its rebalance parameters \[4\].

## The read

What Reserve has shipped is a packaging achievement rather than an investment thesis. Five tokens now express five slices of the AI build-out with mechanics that are transparent, fees that are legible, and an exit path that does not depend on a front end. That is the interesting part, and it is worth saying without decoration.

The scale question sits underneath it. Reserve's fee-funded RSR burn has removed **more than 110 million RSR since May 2025, worth roughly $178,000 in total** \[14\]. Co-founder Nevin Freeman put annualized net revenue at negative seven-point-something million dollars as of April 2026, and the first proposed unlock milestone, $2.5 million in annualized net revenue, is estimated to require **$300 million to $400 million in largely non-incentivized TVL** \[15\]. The AI suite is the bid to close that gap. If it works, the same architecture extends to defence, biotech or regional equity baskets with nothing new to build \[16\]. If it does not, five thinly traded thematic tokens is what remains.

What the packaging does not answer is whether the AI capital-expenditure cycle driving all five continues at its current pace, whether the companies capturing it hold their margins, or whether prices already reflect the growth the forecasts describe. Each of the five is described by its own issuer as an experimental, concentrated, single-theme basket of tokenized assets that may lose value entirely \[1\].

These DTFs package diversified AI exposure into a single token that is easy and convenient to buy or dollar-cost average. That convenience is genuine, but the underlying risks remain, and the appropriate size of any allocation still depends on the reader's risk tolerance and investment horizon.

---

## Disclosures

The Genesis Address LLC operates ixEDEL, an Index DTF deployed on Reserve Protocol on Ethereum mainnet. It holds no asset described in this article and has no affiliation with, nor governance relationship to, the five DTFs discussed here. The author holds no position in BUILDOUT, POWER, NEOCLOUD, PHOTON or ROBOTS, and may acquire one in future. The author holds RSR, vote-locked to the ixEDEL and ETHplus governance vaults on Ethereum mainnet rather than to the BNB Chain vault that governs the five products reviewed here, and therefore holds no vote over them. The burn portion of their fees nonetheless reduces RSR supply, which is a material economic interest. The author also holds ETHplus, an RToken on Reserve Protocol unrelated to the AI suite. Reserve's published reference documents for these products were generated with the assistance of a large language model and are described by Reserve as pending human and legal review; all figures drawn from them are illustrative and dated June 2026.

---

**Educational purpose only**: This content is provided exclusively for educational and research purposes. It should not be construed as investment advice, financial planning guidance, policy recommendations, or official economic analysis. Any contemporary parallels or policy discussions are presented as academic analysis, not recommendations for action.

**AI-assisted research disclosure**: This protocol analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all statistical claims, citations, and institutional analysis against authoritative sources, readers should independently verify any information before relying on it for academic, professional, investment, or policy purposes.

**Accuracy and liability limitations**: While extensive effort has been made to ensure accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. Protocol parameters, basket compositions, fee structures, and eligibility rules change through governance and issuer action. The authors and publisher assume no responsibility for errors, omissions, or consequences arising from the use of this information, including any errors resulting from AI assistance. Users assume full responsibility for decisions or actions taken based on this content.

**Investment risk warning**: This analysis does not constitute investment advice or recommendations. Past performance, whether historical or hypothetical, does not guarantee future results. All investments carry risk of loss. Readers should conduct their own research and consult qualified financial advisors before making investment decisions.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and The Genesis Address Publishing LLC, its authors, or affiliated entities. Readers seeking financial, investment, legal, regulatory, or policy guidance should consult qualified professionals licensed in their jurisdiction.

**Methodological note**: This analysis synthesizes findings from primary protocol documentation, issuer reference materials, onchain governance records, and third-party industry estimates as attributed. The numbered citation system allows readers to verify specific claims against original sources rather than relying on secondary interpretations.

**Modern financial parallels**: References to cryptocurrency protocols, tokenized securities, or DeFi mechanisms are made for educational comparison purposes only. These comparisons do not constitute endorsements, recommendations, or predictions about the performance or suitability of any current financial products or services.

**International examples**: Analysis of tokenized-asset access rules and eligibility frameworks is presented for educational purposes. Different jurisdictions have varying regulatory frameworks, and this content should not be interpreted as applicable to any specific jurisdiction's current legal or regulatory environment.

**Publication information**: Last updated: July 30, 2026 | Series: Protocol Analysis | Publisher: The Genesis Address Publishing LLC

Publisher: The Genesis Address Publishing LLC

---

## Sources and references

\[1\] Reserve. "The entire AI supply chain is now tradable onchain." Reserve blog. July 2026. https://blog.reserve.org/the-entire-ai-supply-chain-is-now-tradable-onchain-027f5c4f8207

\[2\] Reserve Protocol (@reserveprotocol). Launch announcement post. X. July 9, 2026. https://x.com/reserveprotocol/status/2075248888903041142

\[3\] Reserve. "Reserve AI Infrastructure DTF ($BUILDOUT), Complete Reference." Version 0.6, July 8, 2026. https://app.reserve.org/dtf-llm/buildout-dtf.md

\[4\] Reserve. "Reserve AI Capacity & Neocloud DTF ($NEOCLOUD), Complete Reference." Version 0.6, July 8, 2026. https://app.reserve.org/dtf-llm/neocloud-dtf.md

\[5\] Reserve. "Index DTFs: protocol overview, rebalancing and Dutch auctions." Protocol documentation. https://docs.reserve.org

\[6\] Ondo Finance. "Ondo Global Markets eligibility." Issuer documentation. https://docs.ondo.finance/ondo-global-markets/eligibility

\[7\] Reserve News. "Reserve launches five AI DTFs, bringing the AI supply chain on-chain." July 16, 2026. https://www.reservenews.app/post/reserve-launches-five-ai-dtfs-bringing-the-ai-supply-chain-on-chain

\[8\] Reserve. "Reserve AI Photonics DTF ($PHOTON) Tear Sheet." July 2026. https://storage.reserve.org/PHOTON\_DTF\_Tearsheet\_en.pdf

\[9\] Reserve. "Reserve AI Power DTF ($POWER), Complete Reference." Version 0.6, July 8, 2026. https://app.reserve.org/dtf-llm/power-dtf.md

\[10\] Reserve. "Reserve AI Photonics DTF ($PHOTON), Complete Reference." Version 0.6, July 8, 2026. https://app.reserve.org/dtf-llm/photon-dtf.md

\[11\] Reserve. "Reserve Robotics DTF ($ROBOTS), Complete Reference." Version 0.6, July 8, 2026. https://app.reserve.org/dtf-llm/robots-dtf.md

\[12\] tbrent. "\[RFC\] Re-enable optimistic rebalancing on NEOCLOUD." Reserve Protocol Forum, Governance & Delegates. July 25, 2026. https://forum.reserve.org/t/rfc-re-enable-optimistic-rebalancing-on-neocloud/1592

\[13\] Crypto Briefing. "Reserve launches five AI supply-chain DTFs for global users." July 2026. https://cryptobriefing.com/reserve-ai-supply-chain-dtfs-launch/

\[14\] Reserve News. "July 2026: Reserve Protocol RSR burn is 9.7M RSR." July 27, 2026. https://www.reservenews.app/post/july-2026-reserve-protocol-rsr-burn-is-97m-rsr

\[15\] Reserve News. "12 key factual statements about Reserve Protocol's proposed milestone unlocks for RSR." May 6, 2026. https://www.reservenews.app/post/12-key-factual-statements-about-reserve-protocols-proposed-milestone-unlocks-for-rsr

\[16\] Reserve Protocol (@reserveprotocol). Post on DTF structure and governance. X. July 9, 2026. https://x.com/reserveprotocol/status/2075250971987337329

\[17\] Reserve. "Reserve AI Power DTF ($POWER) Tear Sheet." July 2026. https://storage.reserve.org/POWER\_DTF\_Tearsheet\_en.pdf

\[18\] Reserve. "Reserve AI Infrastructure DTF ($BUILDOUT) Tear Sheet." July 2026. https://storage.reserve.org/BUILDOUT\_DTF\_Tearsheet\_en.pdf

\[19\] Reserve. "Reserve AI Capacity & Neocloud DTF ($NEOCLOUD) Tear Sheet." July 2026. https://storage.reserve.org/NEOCLOUD\_DTF\_Tearsheet\_en.pdf

\[20\] Reserve. "Reserve Robotics DTF ($ROBOTS) Tear Sheet." July 2026. https://storage.reserve.org/ROBOTS\_DTF\_Tearsheet\_en.pdf

\[21\] Reserve. "Risks." Protocol documentation. https://docs.reserve.org/risks

\[22\] Reserve. "Terms and conditions." https://reserve.org/terms\_and\_conditions

Publisher: The Genesis Address Publishing LLC
