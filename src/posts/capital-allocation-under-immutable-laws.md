---
title: "Capital allocation under immutable laws"
date: "2026-09-26T10:38:47.000Z"
updated: "2026-09-26T11:42:08.000Z"
excerpt: "Bitcoin put monetary policy beyond the reach of its governors. DeFi still allocates capital by committee. An essay on treasuries, reserves and why capital allocation will follow incentives and clear immutable rules, from Compound to Frankencoin."
feature_image: "/content/images/2026/09/image_54299faa.jpg"
topics: ["tokenomics","governance","aureum","aumm","Sagix Apothecary"]
internal_tags: ["#tokenomics","#sagix-apothecary"]
featured: true
---

*Bitcoin put monetary policy out of reach of its governors. Seventeen years later, much of decentralized finance still allocates capital by committee.*

Bitcoin's issuance schedule has not been renegotiated since 2009. The block subsidy halves every 210,000 blocks, a constant written into the consensus code \[1\], and the whitepaper described a predetermined number of coins entering circulation before transaction fees take over the incentive \[2\]. No committee reviews the schedule. Nobody's budget depends on the outcome of a vote about it.

Decentralized finance copied the settlement layer and kept the committee. Exchanges, lending markets and stablecoins run on code, but the question of where emissions, incentives and treasury assets go is still, in most protocols, settled by a vote of token holders. Researchers at the Bank for International Settlements named this the decentralisation illusion in 2021: the need for governance makes some centralisation unavoidable, and the structure of token ownership concentrates it further \[3\].

This essay argues that the second layer, the allocation of capital, can be written down in advance the way Bitcoin wrote down monetary policy. Its publisher has a stake in the answer. The Genesis Address Publishing LLC, which publishes Sagix, is the founding team of Aureum, a protocol built on this premise, and Aureum's canonical specification at [aureum.fi](https://aureum.fi) states its purpose in nearly these terms \[4\]. This essay is the thesis; the specification sets out how it is built.

## What Bitcoin actually settled

The popular account of Bitcoin's contribution is scarcity. The more durable one is procedural. Issuance was specified before anyone held a coin, applied identically to every participant, and placed beyond amendment by anyone who later acquired a reason to amend it. Scarcity is a consequence of that rule. It is not the source of its credibility.

Monetary economics made the argument for rules over discretion long before. Milton Friedman's k-percent rule proposed that a central bank grow the money stock at a fixed rate regardless of conditions, and Federal Reserve research presents it as the simplest example of a policy rule, one that needs almost no information to run and holds up across competing models of the economy \[5\]. Bitcoin carries the same argument further: a schedule fixed in advance, with the central bank removed.

What Bitcoin never attempted is allocation. It issues money. It does not decide who receives capital to build what. That was never its job, and the omission is precisely where DeFi's governance problem lives.

## Institutional gravity

The pattern can be described without a villain. A protocol launches, earns fees and accumulates a treasury. The treasury needs a process, the process needs proposals, proposals need voters, and voters form coalitions around what the treasury could pay for. Emissions that began as a bootstrapping tool become a budget line. Nobody has to act in bad faith for the protocol to spend most of its governance attention on itself.

When someone does act in bad faith, the road is already paved. In July 2024 Compound's Proposal 289 passed by **682,191 votes to 633,636, directing 499,000 COMP, about 5% of the treasury and roughly $24 million, to a yield vehicle controlled by the group that sponsored it** \[6\]. Community members alleged the winning votes had been assembled by buying COMP on the open market, and The Block reported that the same actor had spent much of 2022 controlling more than half of Balancer's vote share across several wallets \[6\]. Two days after the vote the group agreed to cancel the proposal in exchange for a staking product that would route 30% of existing and upcoming market reserves to COMP stakers \[7\]. The treasury survived through a negotiation, not through anything the voting process provided.

SushiSwap supplies the other failure, the one that needed no vote at all. In September 2020 its pseudonymous founder sold the developer fund for about $14 million in ether, the SUSHI price collapsed, and six days later he returned all 38,000 ETH to the fund \[8\]. The money came back. The fact that one key could move it did not change.

Vitalik Buterin's 2021 analysis identifies the mechanism underneath both episodes. A governance token bundles an economic claim with a vote, the two separate easily through lending markets, wrappers and exchange custody, and so voting power can be acquired by parties who bear little of the cost of the decisions they force. The first mitigation he listed was limiting what governance is permitted to decide at all \[9\].

## Treasury versus reserve

The distinction that matters is between capital awaiting a decision and capital whose destination has already been decided. A treasury is the first kind. It exists to be spent, and every question about it is political by construction: who proposes, who approves, for what, under whose authority.

A reserve, in the sense used here, is the second kind. Assets accumulate by rule toward a fixed destination and cannot be redistributed, because no one holds the authority to redistribute them. The reserve is not waiting for a decision. The rule that fills it was the decision.

The idea has an academic source. Luzius Meisser's continuous capital corporation describes a firm that issues and redeems its own equity autonomously under fixed rules, which moves financing decisions from management to the market \[10\]. Frankencoin implements a version of it. Its share token carries the system's income and losses directly, new capital enters through a pricing curve rather than a board resolution, and governance works by veto rather than majority approval, with voting power accruing to holding duration rather than to balance alone \[11\]. We examined that design in our [Frankencoin analysis](/frankencoin/). Nothing in it waits for a budget.

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/frankencoin/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Frankencoin: A Swiss-made approach to decentralized stablecoins</div><div class="kg-bookmark-description">Frankencoin (ZCHF): Swiss franc stablecoin with oracle-free design from University of Zurich PhD research. Vs MakerDAO/Terra comparisons, risk analysis, FPS governance, yield mechanics, and DeFi portfolio considerations.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-b1d9d70f-a083-4bcb-9308-b0e2572b9031.jpg" alt=""><span class="kg-bookmark-author">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/e035ba60-b982-4e92-9928-ac069e456a91-1b4e79e6-b62b-4436-8903-bbf2dea05f22.jpg" alt=""></div></a></figure>

## Rules, then allocation

A governance market passes rules through a vote to reach an allocation. A constitutional market runs rules straight to an allocation and keeps the vote for the narrow set of questions the rules could not anticipate. The difference is not the absence of governance. It is the number of questions that reach it.

<figure class="kg-card kg-image-card"><img src="/content/images/2026/09/image_e1cff40f.jpg" class="kg-image" alt="" loading="lazy" width="1376" height="768" srcset="/content/images/size/w600/2026/09/image_e1cff40f.jpg 600w, /content/images/size/w1000/2026/09/image_e1cff40f.jpg 1000w, /content/images/2026/09/image_e1cff40f.jpg 1376w" sizes="(min-width: 720px) 720px"></figure>

Applied to emissions, the design follows almost mechanically. Anyone may create a market. Qualification is set by criteria a contract can check. Allocation follows a formula over on-chain measures, published before launch. Revenue flows to a reserve by a routing rule nobody votes on. Success depends on what capital does, not on who can be persuaded to direct it.

None of these components is new. Fixed issuance is Bitcoin's. Veto-based minimal governance is Frankencoin's. The ambition to strip governance of its parameters one at a time belongs to Reflexer, whose un-governance roadmap Buterin cited as a model \[9\]. What is new is the combination, applied to the allocation of emissions across an open set of markets.

## Rigid by design

The standard objection comes from the same BIS paper. Firms exist partly because contracts cannot anticipate every contingency, and the authors argue that DeFi faces the equivalent problem, which they call algorithm incompleteness: no code can specify the right action for every state of the world \[3\]. The observation is correct. It is an argument for choosing carefully what goes into the code, not for leaving allocation open to a vote.

A constitution does not try to anticipate every state of the world. It fixes the things that must never move and writes down, in advance, the narrow channels through which the rest may change. Supply, issuance and revenue routing are fixed because each of them has been a target for capture where it was left flexible. Which assets qualify, how a market that stops working loses its emissions, how a failed asset is replaced: those are operating rules, specified before launch and exercised without reopening the core.

Emergencies belong to a different category. An exploited vault, a stablecoin that loses its peg, an issuer that shuts down: none of these is a question about how capital should be allocated, and none of them requires a treasury vote. Liquidity providers can leave at any block. A market that fails the qualification rules stops receiving emissions. The response to events outside the protocol happens at its edges, through capital moving and rules disqualifying, rather than through a governor with discretion over the whole. A constitution can still carry a narrow emergency role for its launch period: the power to pause and to let liquidity exit, with no authority over fees, parameters or where revenue goes, set to expire at a fixed block.

The Compound episode of October 2021 is often cited as the case for keeping an off switch. An update distributed about $90 million in rewards in error, and no administrative control existed to stop it \[3\]. The lesson there is about engineering discipline before code ships. A vote is not a code review, and a governance key capable of reversing the error would have been a key capable of much else.

Buterin describes decentralized governance as "both necessary and dangerous" \[9\]. The constitutional answer takes both halves seriously. It keeps governance where it is necessary and makes that area as small as the design allows.

## What we believe

We believe capital allocation will follow incentives and clear immutable rules. Capital does not need a committee to find productive markets. It needs to know, before it arrives, what it will be paid, for what, and that nobody can change the terms once it has committed. Bitcoin gave savers that certainty about money.

A reserve extends the same certainty to the protocol's own balance sheet. Revenue accumulates where the rules send it, every block, whether or not anyone is paying attention. Nobody has to win an argument for the system to grow stronger, and nobody can win one to make it weaker.

Since DeFi summer, the industry has built governance to manage treasuries. The next step is protocols that do not need treasuries to manage.

How Aureum implements the idea is set out in the companion piece: [Aureum: a protocol that becomes capital](/aureum-a-protocol-that-becomes-capital/).

---

**Educational purpose only**: This content is provided exclusively for educational and historical research purposes. It should not be construed as investment advice, financial planning guidance, policy recommendations, or official economic analysis. Any contemporary parallels or policy discussions are presented as academic analysis, not recommendations for action. Historical patterns provide context for learning but do not predict future financial system outcomes or investment performance.

**AI-assisted research disclosure**: This analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all statistical claims, citations, and institutional analysis against authoritative sources, readers should independently verify any information before relying on it for academic, professional, investment, or policy purposes.

**Accuracy and liability limitations**: While extensive effort has been made to ensure historical accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. Historical interpretation involves scholarly judgment and academic debate. Economic data may contain revisions, measurement inconsistencies, or reporting variations across time periods and institutional sources. The authors and publisher assume no responsibility for errors, omissions, or consequences arising from the use of this information, including any errors resulting from AI assistance. Users assume full responsibility for decisions or actions taken based on this content.

**Investment risk warning**: Historical financial analysis does not constitute investment advice or recommendations. Past performance, whether historical or hypothetical, does not guarantee future results. All investments carry risk of loss. Readers should conduct their own research and consult qualified financial advisors before making investment decisions.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and The Genesis Address Publishing LLC, its authors, or affiliated entities. Readers seeking financial, investment, legal, regulatory, or policy guidance should consult qualified professionals licensed in their jurisdiction.

**Methodological note**: This analysis draws on central bank research, academic working papers, protocol documentation and contemporaneous news reporting. The numbered citation system allows readers to verify specific claims against original sources rather than relying on secondary interpretations.

**Conflict disclosure**: The Genesis Address Publishing LLC, publisher of this essay, is the founding team of the Aureum protocol, whose design rests on the thesis discussed here. Nothing in this essay is an offer or solicitation to acquire any token or to provide liquidity.

References to modern financial systems, cryptocurrency protocols, or DeFi mechanisms are made for educational comparison purposes only. These comparisons do not constitute endorsements, recommendations, or predictions about the performance or suitability of any current financial products or services.

## Sources and references

\[1\] Bitcoin Core developers. "src/kernel/chainparams.cpp," mainnet parameter nSubsidyHalvingInterval = 210000. Bitcoin Core source code. Accessed September 24, 2026. https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp

\[2\] Nakamoto, Satoshi. "Bitcoin: a peer-to-peer electronic cash system," section 6. White paper. 2008. https://bitcoin.org/bitcoin.pdf

\[3\] Aramonte, Sirio, Wenqian Huang and Andreas Schrimpf. "DeFi risks and the decentralisation illusion." *BIS Quarterly Review* (December 2021): 21–36, including footnote 10. https://www.bis.org/publ/qtrpdf/r\_qt2112b.htm

\[4\] Aureum. "Theoretical foundations," section v-a, "Why Aureum exists." Canonical protocol specification. https://www.aureum.fi/03\_theoretical\_foundation.md

\[5\] Orphanides, Athanasios. "Taylor rules." *Finance and Economics Discussion Series* 2007-18. Board of Governors of the Federal Reserve System. January 2007, section 2. https://www.federalreserve.gov/pubs/feds/2007/200718/index.html

\[6\] Abrams, Zack. "$24 million Compound Finance proposal passed by whale over DAO objections." *The Block*. July 28, 2024. https://www.theblock.co/post/307943/24-million-compound-finance-proposal-passed-by-whale-over-dao-objections

\[7\] Sriram, Samyuktha. "Compound 'governance attackers' agree to cancel proposal in exchange for staking product." *Unchained*. July 30, 2024. https://unchainedcrypto.com/compound-governance-attackers-agree-to-cancel-proposal-in-exchange-for-staking-product/

\[8\] CoinDesk. "'I f\*\*ked up': SushiSwap creator Chef Nomi returns $14M dev fund." *CoinDesk*. September 11, 2020. https://www.coindesk.com/tech/2020/09/11/i-fked-up-sushiswap-creator-chef-nomi-returns-14m-dev-fund

\[9\] Buterin, Vitalik. "Moving beyond coin voting governance." August 16, 2021. https://vitalik.eth.limo/general/2021/08/16/voting3.html

\[10\] Meisser, Luzius. "The continuous capital corporation." SSRN working paper 4189472. June 2022. https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=4189472

\[11\] Frankencoin. "FCS: investing and pool shares." Protocol documentation; FCS is the current share token and wraps the original FPS pool share one to one. Accessed September 24, 2026. https://docs.frankencoin.com/pool-shares

**Publication information**: Last updated: September 24, 2026 | Series: Protocol Analysis | Publisher: The Genesis Address Publishing LLC

Publisher: The Genesis Address Publishing LLC
