---
title: "The Druid Deep Dive episode 4: Private currency competition and Gresham's law"
date: "2025-12-21T21:59:34.000Z"
updated: "2025-12-22T17:26:54.000Z"
excerpt: "Gresham's Law says bad money drives out good—but only under one condition. The Iron Finance collapse and Free Banking Era reveal when quality wins. Essential lessons for stablecoins"
feature_image: "/content/images/2025/12/image.jpg-5-.jpg"
topics: ["The Druid Deep Dive","video","videos"]
internal_tags: ["#the-druid-deep-dive","#video","#videos"]
---

*Season 1, Episode 4 | The Great Experiment - Free Banking Era (1837-1863)*

<figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/6tG5dnEvQ24?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="Gresham s Law &amp; Iron Finance"></iframe></figure>

---

**Bad money only drives out good money under one critical condition—and the Iron Finance death spiral proved what happens when that condition breaks down.** The principle that debased currency displaces quality money has echoed through economics for five centuries, yet its application to algorithmic stablecoins reveals both its validity and its limits. Understanding this distinction separates investors who panic during depegs from those who profit from them.

Gresham's Law emerged from observations of metallic currency debasement in Tudor England, but its modern relevance extends to the trillion-dollar stablecoin market reshaping DeFi liquidity. The American Free Banking Era (1837-1863) provides an essential historical laboratory, while **Iron Finance's June 2021 collapse—documented in a Federal Reserve research paper—offers a precise contemporary test** \[1\]. For Sagix Compound portfolio construction, these lessons inform when to hold quality assets versus when liquidity advantages outweigh backing concerns.

---

## Historical setting: when 8,000 currencies competed for trust

The Free Banking Era began after President Andrew Jackson's destruction of the Second Bank of the United States in 1836, creating an extraordinary experiment in private currency competition. By 1863, **eighteen states had adopted free banking laws**, with hundreds of privately-owned banks issuing their own distinct notes \[2\]. Unlike today's dollar monopoly, merchants encountered thousands of different bank notes daily, each trading at different values based on issuer reputation and backing quality.

These notes did not trade at par. Markets priced currency quality through discount rates reflecting distance from the issuing bank, perceived default risk, and the bonds backing each note. **Michigan bank notes traded at 30-60% discounts**, while well-regulated New York banks maintained notes at only **1-2% below par** \[3\]. This price discovery mechanism fundamentally altered how Gresham's Law operated—when currencies could float against each other, quality differentials became visible and tradeable.

The infrastructure supporting this competitive system was remarkably sophisticated. **At least 72 different bank note reporters were published during this era**, with John Thompson's *Bank Note and Commercial Reporter* claiming **100,000 subscribers** \[4\]. These periodicals helped merchants identify counterfeits and determine appropriate discounts for distant banks' notes. Note brokers—disparagingly called "note shavers"—provided exchange services, profiting from bid-ask spreads in the currency market.

The Suffolk Banking System (1825-1858) demonstrated that quality could triumph over quantity when markets were allowed to discriminate. This private clearing consortium required member banks to deposit collateral and submit to audits. During the 1839-1842 banking crisis, when Philadelphia banks suspended specie payments, **Suffolk System notes traded at a premium rather than discount** \[5\]. Quality money didn't merely survive—it commanded higher prices when legal tender laws didn't force artificial parity.

---

## Key players: economists who challenged monetary orthodoxy

The intellectual history of Gresham's Law reveals persistent disagreement about when and whether it actually operates. **Sir Thomas Gresham** advised Queen Elizabeth I in 1558 about England's debased currency, though Scottish economist **Henry Dunning Macleod** coined the term "Gresham's Law" only in 1858 \[6\]. The principle's roots extend far earlier—Aristophanes observed similar dynamics in 405 BC Athens, noting that citizens hoarded good silver coins while spending debased bronze.

Minneapolis Fed economists **Arthur Rolnick and Warren Weber** launched a provocative challenge in 1986, arguing that Gresham's Law constitutes a "fallacy" with "no convincing explanations and many overlooked exceptions" \[7\]. They documented cases like the Spanish milled dollar (1792-1853), which despite being heavier than the U.S. silver dollar, was not driven from circulation. Their research prompted a productive scholarly debate that reshaped how economists understand monetary competition.

**George Selgin** provided the definitive modern interpretation in his 1996 paper "Salvaging Gresham's Law" in the *Journal of Money, Credit and Banking*. His key insight: **"Bad money drives out good if they exchange for the same price"**—meaning legal tender laws or fixed exchange rates are prerequisite conditions \[8\]. Gresham's Law operates through a Prisoner's Dilemma: when the law forces acceptance of both good and bad money at identical values, rational actors spend the bad and hoard the good.

When currencies float freely, the opposite occurs. Selgin termed this "Thiers' Law" after French economist Adolphe Thiers: **good money drives out bad when market choice prevails** \[8\]. The distinction is crucial for understanding stablecoin dynamics. Algorithmic stablecoins that enforce fixed 1:1 redemption ratios create Gresham conditions—and potential death spirals. Collateralized stablecoins trading at market-determined prices operate under Thiers' Law dynamics.

Scottish Free Banking (1716-1845) serves as the critical historical counter-example to Gresham pessimism. Despite banks holding **specie reserves as low as 0.5% of demand liabilities**, the system experienced remarkable stability over 130 years \[9\]. Market discipline through convertibility, unlimited shareholder liability, and active note clearing created quality incentives that government regulation couldn't match.

---

## Modern parallel: Iron Finance and the $2 billion death spiral

The Iron Finance collapse of June 16, 2021 provides a textbook demonstration of Gresham dynamics under stress—and the Federal Reserve documented it with high-frequency transaction data. **IRON was a partially collateralized algorithmic stablecoin on the Polygon blockchain, backed 75% by USDC and 25% by TITAN**, a governance token created by the protocol itself \[1\].

The mechanism seemed elegant: IRON maintained its $1 peg through arbitrage. If IRON traded above $1, users could mint new IRON by depositing USDC and TITAN worth $1, then sell at a profit. If IRON traded below $1, users could redeem IRON for $0.75 in USDC plus $0.25 worth of TITAN, profiting from the discount. The system required the **ten-minute weighted-average price of TITAN** for redemption calculations—a design flaw that proved fatal \[1\].

**Total value locked in Iron Finance exploded from $30 million to $2 billion in just three weeks**, fueled by extraordinary yield farming rewards—500% APR on stablecoin pairs, 1,700% APR on volatile pairs \[10\]. The TITAN token price surged over 600% in the week before the crash, driven partly by billionaire investor Mark Cuban mentioning the protocol on his blog \[1\]. Cuban would later tweet that he "got hit like everyone else" \[11\].

The death spiral began when large holders—"whales"—started liquidating TITAN positions at the peak. As TITAN's spot price collapsed, **the ten-minute weighted-average price used for redemptions lagged significantly behind** \[1\]. This created a devastating arbitrage: users could redeem IRON at an inflated TITAN valuation, receive TITAN worth far less than the protocol calculated, and immediately sell. Each redemption minted more TITAN, accelerating the price collapse.

**Within hours, TITAN fell from $65 to effectively zero. The IRON peg broke below $0.75—the level of its USDC backing alone** \[1\]. Federal Reserve researchers Adams and Ibert documented that the protocol's peg-defense mechanism "exacerbated its unravelling," transforming what should have been stabilizing arbitrage into a self-reinforcing panic \[1\].

The Fed paper revealed a crucial pattern: **larger accounts ran first**. Sophisticated users with the biggest positions liquidated everything during the run, while smaller accounts were actually net buyers—"catching the falling knife" \[1\]. The largest decile of accounts reduced their IRON holdings by nearly 100% from start to finish, while retail investors accumulated losses. This mirrors Free Banking Era dynamics where note brokers with superior market intelligence exploited information advantages over ordinary merchants.

Critically, **IRON on the Binance blockchain—using identical code but a separate token called STEEL—did not experience a bank run** \[1\]. The bubble had formed specifically in TITAN on Polygon. This natural experiment suggests the collapse stemmed from speculative dynamics around TITAN rather than fundamental distrust in the stablecoin mechanism. The design flaws were necessary but not sufficient; extreme speculation provided the trigger.

---

## Portfolio lessons: navigating the quality-convenience tradeoff

The historical and modern evidence yields actionable principles for Sagix Compound portfolio construction.

**Recognize the fixed-rate trigger.** Gresham's Law operates when exchange rates are fixed; Thiers' Law operates when they float. DeFi protocols enforcing 1:1 redemption ratios without adequate reserves create the conditions for Gresham dynamics—and potential death spirals. The Iron Finance collapse demonstrated that **algorithmic peg mechanisms can transform stabilizing arbitrage into destabilizing feedback loops** when price oracles lag market reality \[1\]. Protocols allowing market pricing of stablecoin quality provide more sustainable equilibria.

**Sophisticated money moves first.** Federal Reserve data showed the largest Iron Finance accounts liquidated completely while small accounts bought the collapse \[1\]. This pattern—documented across centuries from Free Banking note brokers to modern whale wallets—means retail investors consistently absorb losses that informed capital avoids. For Sagix Compound purposes, monitor on-chain flows for unusual whale activity before committing significant capital to yield-generating protocols.

**Collateralization structure matters more than yield.** Iron Finance offered 500-1,700% APY but was only 75% backed by hard collateral \[10\]. When the 25% algorithmic portion vaporized, holders recovered approximately $0.75 per dollar—exactly the USDC backing \[1\]. **High yields funded by governance token emissions rather than productive investment require perpetual growth**; when growth stops, the mechanism reverses. Prioritize protocols where yield derives from actual economic activity (lending spreads, trading fees) rather than token inflation.

**Distinguish systemic fragility from isolated failure.** The Binance blockchain IRON/STEEL system survived while Polygon IRON/TITAN collapsed, despite identical code \[1\]. This suggests that **speculative concentration—not mechanism design alone—triggered the bank run**. For portfolio construction, diversify across chains and protocols even when underlying mechanisms are similar. Correlation during normal times doesn't predict correlation during stress.

**Quality prevails when markets can discriminate.** The Suffolk Banking System proved that private money competition can produce stability when participants can distinguish and price quality differences \[5\]. Modern stablecoin markets are developing similar mechanisms: USDC trades at persistent small premiums during uncertainty precisely because its backing transparency enables quality assessment \[12\]. Allocate primary stablecoin holdings to issuers providing regular attestations and transparent reserve composition.

**Maintain dry powder for depeg arbitrage.** Free Banking Era note brokers profited by buying discounted notes from panicked merchants and redeeming at face value from solvent banks \[3\]. Modern equivalents exist: during the March 2023 Silicon Valley Bank crisis, **USDC fell to $0.87 before recovering within days** after FDIC intervention \[13\]. Maintaining undeployed stablecoin reserves enables purchasing during temporary dislocations rather than selling into panic.

The $2 billion Iron Finance collapse and the Free Banking Era's thousands of competing currencies both illuminate the same fundamental truth: **monetary competition rewards quality only when markets have the freedom to discriminate**. When fixed exchange rates or legal tender laws force acceptance at artificial parity, bad money drives out good. When currencies float freely, sophisticated actors flee to quality and good money prevails. For DeFi investors, understanding which regime governs a particular protocol determines whether yield farming represents opportunity or impending loss.

---

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/the-sagix-compound-in-practice-december-2025-portfolio-review/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">The Sagix Compound in practice: December 2025 portfolio review</div><div class="kg-bookmark-description">December 2025 portfolio review: real positions, zero sales, only sacred buying. Six-layer barbell structure designed for 2036, 2046, 2056—not getting rich quick in 2026. See exactly how we practice what we preach.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-46.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/tortoise1-2.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/episode-8-brazilian-hyperinflation-the-ultimate-portfolio-stress-test-1980-1994/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">The Druid Deep Dive episode 8: Brazilian hyperinflation: The ultimate portfolio stress test (1980-1994)</div><div class="kg-bookmark-description">Brazil’s hyperinflation (1980-1994) stemmed from decentralized money creation - state banks could print currency. Terra LUNA’s collapse shows how DeFi protocols can trigger similar spirals when multiple mechanism can trigger token creation simultaneously.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-47.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/IMG_6419-5.PNG" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/new-video-the-free-banking-era/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">New Video: The Druid Deep Dive Episode 1: The Free Banking Era: When Anyone could print money</div><div class="kg-bookmark-description">The Free Banking Era’s Revolutionary Experiment in Permissionless Finance (1837–1863)</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-48.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/druid-1.JPG" alt=""></div></a></figure>

---

<!-- signup -->

## Sources and references

\[1\] Adams, Austin and Ibert, Markus. "Runs on Algorithmic Stablecoins: Evidence from Iron, Titan, and Steel." *FEDS Notes*, Board of Governors of the Federal Reserve System, June 2, 2022. https://www.federalreserve.gov/econres/notes/feds-notes/runs-on-algorithmic-stablecoins-evidence-from-iron-titan-and-steel-20220602.html

\[2\] Federal Reserve Bank of Richmond. "When Banking Was 'Free.'" *Econ Focus*, Q1 2018. https://www.richmondfed.org/publications/research/econ\_focus/2018/q1/economic\_history

\[3\] Rolnick, Arthur J. and Weber, Warren E. "The Free Banking Era: New Evidence on Laissez-Faire Banking." *American Economic Review*, Vol. 73, No. 5, December 1983.

\[4\] Mihm, Stephen. *A Nation of Counterfeiters: Capitalists, Con Men, and the Making of the United States*. Harvard University Press, 2009.

\[5\] Rolnick, Arthur J., Smith, Bruce D., and Weber, Warren E. "Lessons From a Laissez-Faire Payments System: The Suffolk Banking System." *Federal Reserve Bank of Minneapolis Quarterly Review*, Summer 1998.

\[6\] Macleod, Henry Dunning. *Elements of Political Economy*, 1858.

\[7\] Rolnick, Arthur J. and Weber, Warren E. "Gresham's Law or Gresham's Fallacy?" *Journal of Political Economy*, Vol. 94, No. 1, February 1986.

\[8\] Selgin, George A. "Salvaging Gresham's Law: The Good, the Bad, and the Illegal." *Journal of Money, Credit and Banking*, Vol. 28, No. 4, November 1996, pp. 637-649.

\[9\] White, Lawrence H. *Free Banking in Britain: Theory, Experience, and Debate 1800-1845*. Cambridge University Press, 1984.

\[10\] Finematics. "Bank Run in DeFi – Iron Finance Fiasco Explained." June 24, 2021. https://finematics.com/bank-run-in-defi-iron-finance-explained/

\[11\] CoinDesk. "In Token Crash Postmortem, Iron Finance Says It Suffered Crypto's 'First Large-Scale Bank Run.'" June 17, 2021. https://www.coindesk.com/markets/2021/06/17/in-token-crash-postmortem-iron-finance-says-it-suffered-cryptos-first-large-scale-bank-run

\[12\] Saengchote, Kanis. "A DeFi Bank Run: Iron Finance, IRON Stablecoin, and the Fall of TITAN." *SSRN Working Paper*, July 2021.

\[13\] Federal Reserve Board. "Primary and Secondary Markets for Stablecoins." *FEDS Notes*, February 2024.

\[14\] Gorton, Gary B. and Zhang, Jeffery. "Taming Wildcat Stablecoins." *SSRN Working Paper*, October 2021.

\[15\] Wake Forest Law Review. "Built to Fail: The Inherent Fragility of Algorithmic Stablecoins." October 2021. https://www.wakeforestlawreview.com/2021/10/built-to-fail-the-inherent-fragility-of-algorithmic-stablecoins/

---

## Legal disclaimers and disclosures

**Educational purpose only**: This content is provided exclusively for educational and historical research purposes. It should not be construed as investment advice, financial planning guidance, policy recommendations, or official economic analysis. Any contemporary parallels or policy discussions are presented as academic analysis, not recommendations for action. Historical patterns provide context for learning but do not predict future financial system outcomes or investment performance.

**AI-assisted research disclosure**: This historical analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all statistical claims, citations, and institutional analysis against authoritative sources, readers should independently verify any information before relying on it for academic, professional, investment, or policy purposes.

**Accuracy and liability limitations**: While extensive effort has been made to ensure historical accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. Historical interpretation involves scholarly judgment and academic debate. Economic data may contain revisions, measurement inconsistencies, or reporting variations across different time periods and institutional sources.

**Liability protections**: The authors, publishers, and Sagix Apothecary assume no responsibility for errors, omissions, or consequences arising from the use of this information. This includes any errors that may result from AI assistance in research, writing, or data analysis. Users assume full responsibility for any decisions or actions taken based on this content.

**Investment risk warning**: Historical financial analysis does not constitute investment advice or recommendations. Past performance, whether historical or hypothetical, does not guarantee future results. All investments carry risk of loss, and readers should conduct their own research and consult qualified financial advisors before making investment decisions.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and Sagix Apothecary, its authors, or affiliated entities. Readers seeking financial, investment, legal, regulatory, or policy guidance should consult qualified professionals licensed in their jurisdiction.

**Methodological note**: This analysis synthesizes findings from multiple Federal Reserve Bank research departments, peer-reviewed academic journals, and authoritative government historical records. The numbered citation system allows readers to verify specific claims against original sources rather than relying on secondary interpretations. All quantitative data and statistical analyses are drawn from the referenced academic literature rather than independent calculation.

**Publication information**: Last Updated: December 2025 | Series: The Druid Deep Dive | Publisher: The Genesis Address LLC

---

*The Druid Deep Dive series positions Sagix Apothecary as the premier destination for sophisticated DeFi participants seeking wisdom over speculation.*
