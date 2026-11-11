---
title: "Aureum: a protocol that becomes capital"
date: "2026-09-26T11:32:48.000Z"
updated: "2026-09-30T19:59:51.000Z"
excerpt: "Aureum's specification states its aim in two sentences: the protocol should not own capital, it should become capital. A protocol analysis of the 21M AuMM cap, the Continuous Central Bank, der Bodensee reserve, LP-weighted governance and the path to launch."
feature_image: "/content/images/2026/09/bodensee.jpeg"
topics: ["Sagix Apothecary","aumm","tokenomics","aureum"]
internal_tags: ["#sagix-apothecary","#tokenomics"]
featured: true
---

*The rulebook fixed before launch: how emissions, allocation, revenue and governance are written down in advance.*

Aureum has published a complete specification for a capital market in which no vote decides where emissions go. Its token, AuMM, is capped at **21,000,000 units, halves every 10,512,000 Ethereum blocks and has no premine, team allocation or treasury** \[1\]. Every unit of protocol revenue is routed by contract to a single reserve pool, der Bodensee, that no signer can spend or redirect \[2\]. An emergency pause role for the launch period expires at a fixed block \[3\]. The contracts are in final pre-release development, and security work is running in stages: an evaluation of the governance and authority code \[3\].

This is the companion to our essay on [capital allocation under immutable laws](/capital-allocation-under-immutable-laws/), which set out the general case. The Genesis Address Publishing LLC, which publishes Sagix, is also Aureum's founding team \[4\]. What follows is drawn from the canonical specification at [https://aumm.fi/](https://aumm.fi/)

The specification states the idea in two sentences: "The protocol should not own capital. The protocol should become capital." \[5\]. Everything below, from the emission schedule and the Continuous Central Bank to the quality gate, the Miliarium pools and der Bodensee, is the machinery built to make those two sentences true.

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/capital-allocation-under-immutable-laws/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Capital allocation under immutable laws</div><div class="kg-bookmark-description">Bitcoin put monetary policy beyond the reach of its governors. DeFi still allocates capital by committee. An essay on treasuries, reserves and why capital allocation will follow incentives and clear immutable rules, from Compound to Frankencoin.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-a7ab3c9a-9487-4505-a7bd-616c8bbab4aa.jpg" alt=""><span class="kg-bookmark-author">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/image_54299faa-dc8259a6-a413-4e92-8b18-180afcf9d1f1.jpg" alt=""></div></a></figure>

## What is fixed at block zero

The supply rules copy Bitcoin's shape at Ethereum's cadence. The emission rate starts at one AuMM per block, and at roughly 12-second blocks the first four-year era releases 10,512,000 tokens, just over half the eventual supply \[1\]. Bitcoin halves every 210,000 blocks of about ten minutes \[6\]; Aureum halves every 10,512,000 blocks of about twelve seconds. Both land near four years.

Emissions stream per block to liquidity providers in proportion to their share of eligible, weighted pool value. There is no lock, no vesting and no snapshot. An LP earns from the block of deposit to the block of withdrawal \[1\]. The founding team receives AuMM the same way, by providing liquidity early, and the documentation lists no allocation for it \[4\].

The market itself is permissionless. Anyone can deploy a pool through the factory from genesis, and any address can activate a pool's gauge once it passes criteria the contract checks, paying an anti-spam fee of 100 svZCHF or 125 sUSDS into der Bodensee \[7\]. The central criterion is a quality gate: at least 52% of a pool's weight must sit in ERC-4626 yield-bearing tokens from an admitted vault class.

The 28 Miliarium Aureum pools are the founding set, spread across five sectors: yield, bonds, crypto-native protocols, stocks and metals \[8\]. The specification calls them a genesis market rather than a closed one \[9\].

## How emissions are allocated

Allocation runs in three regimes. Through the end of month 10, a decaying share of each block's emission goes one-sided into der Bodensee, starting at 80% and falling linearly to 50% by month 6 and to zero by month 10. The rest is split equally across the Miliarium pools and all gauged pools\[10\] \[9\]. Months 11 and 12 blend that equal split linearly into the formula that governs everything after year one \[10\].

That formula is what the documentation calls the Continuous Central Bank. Each eligible pool is scored on a 60-day exponential moving average of its on-chain TVL, sampled daily from a one-hour time-weighted average to blunt block-timing games \[11\]. The 28 Miliarium pools carry an additional multiplier, adjusted every two weeks in steps of 0.05 inside a band of 0.75 to 1.25, which leans against pools growing faster than the Miliarium average and toward those lagging it \[11\] \[5\]. No vote touches either input.

The rationale draws on central bank research. BIS economists have documented how leverage and collateral make DeFi activity procyclical, expanding in booms and contracting in busts \[12\] \[13\]. The specification presents the moving average as the counterweight, a low-pass filter that passes sustained liquidity commitment and suppresses one-day noise, so a sudden whale deposit or a panic withdrawal moves emissions only gradually \[5\].

From month 13, a second filter applies. Gauged pools above $10,000 in TVL are ranked by fees and yield revenue generated per unit of emission received, averaged over six weeks. The bottom 15% face hard caps of 1%, 0.5% or 0.1% of total emissions depending on how far down they sit, and the excess goes to uncapped pools \[7\]. A pool with large TVL and little trading loses most of its claim regardless of size. Incendiary Boost lets anyone accelerate emissions to a specific gauged pool, and it works by sacrifice: the booster deposits svZCHF or sUSDS into der Bodensee, non-refundable, and the target pool receives a priority stream capped at 15% of each epoch's emission across all boosts \[7\].

## Where the revenue goes

Two streams feed der Bodensee. Every non-Bodensee gauged pool registers with the Vault's maximum protocol fee setting, so half of each swap fee is routed as svZCHF into der Bodensee and half stays with that pool's LPs. Separately, 10% of the yield earned by ERC-4626 tokens in those pools is skimmed and also routed to der Bodensee, at most once per epoch for each pool \[2\]. Der Bodensee itself is a three-token weighted pool fixed at 40% AuMM, 30% sUSDS and 30% svZCHF. Its own 0.75% swap fee stays in the pool, and the yield on its stablecoin side compounds in place through rate providers \[2\].

<figure class="kg-card kg-image-card"><img src="/content/images/2026/09/aumm.png" class="kg-image" alt="" loading="lazy" width="1280" height="720" srcset="/content/images/size/w600/2026/09/aumm.png 600w, /content/images/size/w1000/2026/09/aumm.png 1000w, /content/images/2026/09/aumm.png 1280w" sizes="(min-width: 720px) 720px"></figure>

The documentation's worked example assumes $100 million of Miliarium TVL and $20 million of daily volume at the 0.03% genesis fee. That yields **about $1.1 million a year from swap fees and $150,000 from the yield skim, roughly $1.25 million of annual stablecoin inflow** \[2\]. We reproduced the arithmetic and it holds. Revenue scales with TVL and volume, while new supply halves every four years \[2\].

**There is no buyback and no burn subject to votes.**

As stablecoins accumulate against a fixed 40% AuMM weight, the weighted-pool math moves the implied exchange rate \[2\]. The bootstrap is the only channel that adds AuMM to the pool, and on our calculation from the published decay schedule it delivers **about 1,073,000 AuMM over ten months, 49% of all tokens emitted in that window and about 5.1% of maximum supply** \[10\]. After month 10 the AuMM side can grow only through traders swapping in.

## What governance decides

Governance survives in four places. LPs can change swap fees within fixed bands of 0.01% to 0.30% for ordinary pools and 0.10% to 1.00% for der Bodensee, no more than once per epoch. They can challenge the gauge of a non-Miliarium pool, with a deposit that is larger for larger pools that goes to der Bodensee win or lose. By a two-thirds supermajority, they can retire a Miliarium pool whose asset has failed and point its slot to an already-deployed pool carrying a like-for-like substitute. And they can veto the admission of new ERC-4626 vault classes, which otherwise finalize automatically after a bounded window \[11\] \[7\]. Every proposal needs 20% turnout of qualified voting power, and must reference on-chain data only \[11\].

Emission schedule, supply, allocation formula, eligibility criteria, fee split and der Bodensee's composition sit outside all four \[1\].

The voting unit is the LP position, not the token. AuMM carries no governance weight at all. Voting power comes from AuMT, the pool token of any gauged, emission-qualified pool, scaled by the fourth root of the pool's smoothed TVL in the first era and the cube root thereafter. Voting power is zero for the first 14 days, ramps linearly to full weight at six months, and resets to zero on any withdrawal \[1\].

**There is no vote to buy without deploying capital.**

The documentation welcomes vaults that hold AuMT on behalf of depositors \[7\]. Because any withdrawal resets weight to zero, a wrapper keeps its vote only by keeping its capital deployed, which narrows the separation of votes from capital at risk that Buterin identified as the weakness of coin voting \[14\].

## Security and the path to launch

Aureum's end state has no admin keys, no multisig and no upgradeability \[11\]. The path to it is bounded. At the one-time migration to on-chain governance, a multisig keeps an emergency-only role for 2,628,000 blocks, about twelve months, after which the clause lapses permanently \[11\]. The security chapter documents how that limit is enforced in code, gated by block number rather than timestamp, and records that hypotheses about block-time drift extending or restarting the window were tested and refuted \[3\].

The AMM substrate is inherited rather than rewritten. Aureum runs its own Vault instance whose core contracts are built from Balancer V3's core contract source without modification, pinned to a named upstream commit and checked against the verified on-chain source \[15\] \[3\], so pool mathematics rests on audited and formally verified code. Aureum's own layer, from the emission engine to the eligibility checker to the fee router, is where the security work concentrates \[15\]. The published record includes the evaluation scope, run metadata, a threat-model seed and the invariants settled at the pinned commit, with the remediation log to follow once the patch cycle closes \[3\].

Some figures in the appendices describe the assets Aureum pools will hold rather than Aureum activity: native ERC-4626 yields of 2.0% to 2.8% and more than $898 million of daily trading volume across eight of the constituent tokens \[15\]. Aureum is not yet live on mainnet, so there is no protocol activity to report.

## Every pool gets its fair share

Emissions are fixed by the block schedule, not by TVL. Each block releases the same amount of AuMM however much capital is deposited \[1\], and once the Continuous Central Bank is in force each pool receives a share proportional to its smoothed TVL \[11\]. A $10,000 pool in a protocol holding $10 million receives 0.1% of emissions, and the emission yield on each dollar is the same whether it sits in a small pool or a large one, before the CCB multiplier and efficiency caps are applied. Size buys a larger share of the stream, not a better rate on it.

What changes with total TVL is how many dollars share the fixed stream. The team page describes the founders' own position in those terms: early LPs earn the highest emission rate before others arrive, and per-LP emissions decline as more capital joins \[4\]. Under the emission sits native vault yield from the first block, since at least 52% of every gauged pool is held in yield-bearing tokens \[7\].

The next milestones are the external security engagement and publication of the remediation record \[3\].

The underlying proposition is the one Meisser described for firms, capital that issues and accumulates under fixed rules instead of board decisions \[16\], applied to the allocation of emissions across an open set of markets. A protocol that becomes capital leaves nobody to decide where that capital should go. The rules that make that possible are already written down.

---

**Educational purpose only**: This content is provided exclusively for educational and historical research purposes. It should not be construed as investment advice, financial planning guidance, policy recommendations, or official economic analysis. Any contemporary parallels or policy discussions are presented as academic analysis, not recommendations for action. Historical patterns provide context for learning but do not predict future financial system outcomes or investment performance.

**AI-assisted research disclosure**: This analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all statistical claims, citations, and institutional analysis against authoritative sources, readers should independently verify any information before relying on it for academic, professional, investment, or policy purposes.

**Accuracy and liability limitations**: While extensive effort has been made to ensure historical accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. Historical interpretation involves scholarly judgment and academic debate. Economic data may contain revisions, measurement inconsistencies, or reporting variations across time periods and institutional sources. The authors and publisher assume no responsibility for errors, omissions, or consequences arising from the use of this information, including any errors resulting from AI assistance. Users assume full responsibility for decisions or actions taken based on this content.

**Investment risk warning**: Historical financial analysis does not constitute investment advice or recommendations. Past performance, whether historical or hypothetical, does not guarantee future results. All investments carry risk of loss. Readers should conduct their own research and consult qualified financial advisors before making investment decisions.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and The Genesis Address Publishing LLC, its authors, or affiliated entities. Readers seeking financial, investment, legal, regulatory, or policy guidance should consult qualified professionals licensed in their jurisdiction.

**Methodological note**: This analysis draws on central bank research, academic working papers, protocol documentation and contemporaneous news reporting. The numbered citation system allows readers to verify specific claims against original sources rather than relying on secondary interpretations.

**Conflict disclosure**: The Genesis Address Publishing LLC, publisher of this analysis, is the founding team of the Aureum protocol described here and expects to receive AuMM as a liquidity provider under the same rules as any other participant. Nothing in this analysis is an offer or solicitation to acquire any token or to provide liquidity.

References to modern financial systems, cryptocurrency protocols, or DeFi mechanisms are made for educational comparison purposes only. These comparisons do not constitute endorsements, recommendations, or predictions about the performance or suitability of any current financial products or services.

## Sources and references

\[1\] Aureum. "Tokenomics," section ix, token design, emission schedule and governance. Canonical protocol specification. [https://aumm.fi/04\_tokenomics.md](https://aumm.fi/04_tokenomics.md)

\[2\] Aureum. "Tokenomics," sections x and x-a, value capture and der Bodensee pool. Canonical protocol specification. [https://aumm.fi/04\_tokenomics.md](https://aumm.fi/04_tokenomics.md)

\[3\] Aureum. "Security and audits," Seam 1 evaluation, snapshot of August 19, 2026. Canonical protocol specification. [https://aumm.fi/16a\_security\_audits.md](https://aumm.fi/16a_security_audits.md)

\[4\] Aureum. "Team," sections xl and xli. Canonical protocol specification. [https://aumm.fi/16\_team.md](https://aumm.fi/16_team.md)

\[5\] Aureum. "Theoretical foundations," sections v to vii. Canonical protocol specification. [https://aumm.fi/03\_theoretical\_foundation.md](https://aumm.fi/03_theoretical_foundation.md)

\[6\] Bitcoin Core developers. "src/kernel/chainparams.cpp," mainnet parameter nSubsidyHalvingInterval = 210000. Bitcoin Core source code. Accessed September 24, 2026. [https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp](https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp)

\[7\] Aureum. "Bootstrap rules," sections xxi to xxiv-a. Canonical protocol specification. [https://aumm.fi/08\_bootstrap.md](https://aumm.fi/08_bootstrap.md)

\[8\] Aureum. "Miliarium Aureum sectors." Canonical protocol specification. [https://aumm.fi/07\_miliarium\_sectors.md](https://aumm.fi/07_miliarium_sectors.md)

\[9\] Aureum. "Overview," including protocol character and risk factors. Canonical protocol specification. [https://aumm.fi/15\_overview.md](https://aumm.fi/15_overview.md)

\[10\] Aureum. "Protocol formulas," F-0 and F-3. Canonical protocol specification. [https://aumm.fi/11\_formulas.md](https://aumm.fi/11_formulas.md)

\[11\] Aureum. "Constitution," sections xxvii to xxx, including immutable parameters. Canonical protocol specification. [https://aumm.fi/10\_constitution.md](https://aumm.fi/10_constitution.md)

\[12\] Aramonte, Sirio, Wenqian Huang and Andreas Schrimpf. "DeFi risks and the decentralisation illusion." *BIS Quarterly Review* (December 2021): 21–36. [https://www.bis.org/publ/qtrpdf/r\_qt2112b.htm](https://www.bis.org/publ/qtrpdf/r_qt2112b.htm)

\[13\] Aramonte, Sirio, Sebastian Doerr, Wenqian Huang and Andreas Schrimpf. "DeFi lending: intermediation without information?" *BIS Bulletin* 57. June 14, 2022. [https://www.bis.org/publ/bisbull57.pdf](https://www.bis.org/publ/bisbull57.pdf)

\[14\] Buterin, Vitalik. "Moving beyond coin voting governance." August 16, 2021. [https://vitalik.eth.limo/general/2021/08/16/voting3.html](https://vitalik.eth.limo/general/2021/08/16/voting3.html)

\[15\] Aureum. "Appendices," sections xxxvi to xxxix. Canonical protocol specification. [https://aumm.fi/13\_appendices.md](https://aumm.fi/13_appendices.md)

\[16\] Meisser, Luzius. "The continuous capital corporation." SSRN working paper 4189472. June 2022. [https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=4189472](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4189472)

**Publication information**: Last updated: September 24, 2026 | Series: Protocol Analysis | Publisher: The Genesis Address Publishing LLC

Publisher: The Genesis Address Publishing LLC
