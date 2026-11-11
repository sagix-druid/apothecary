---
title: "Sagix Club Edelweiss ($ixEDEL) heads into its first rebalance with a Treasury token on the ballot"
date: "2026-07-12T19:31:08.000Z"
updated: "2026-07-25T18:40:05.000Z"
excerpt: "Sagix files its first ixEDEL rebalance proposal on Reserve: a fixed January and July cadence, Ondo's USDY at 10% for direct Treasury backing, and a request to route Frankencoin's savings vault. The basket absorbed a 36% Bitcoin drop as a 9% loss."
feature_image: "/content/images/2026/07/Gemini_Generated_Image_8x9u1s8x9u1s8x9u.png"
topics: ["Research","ixedel"]
internal_tags: ["#sagix-apothecary","#ixedel"]
---

Sagix has filed a governance proposal on Reserve Protocol to lock its defensive index token, Sagix Club Edelweiss (ixEDEL), into a fixed rebalancing calendar of January 5 and July 5, execute the first rebalance this month, and add Ondo's Treasury-backed USDY at 10% of the basket. A second ask sits underneath: routing support for Frankencoin's savings vault token, svZCHF, which would finally put yield on the Swiss franc sleeve that currently earns nothing.

<figure class="kg-card kg-bookmark-card kg-card-hascaption"><a class="kg-bookmark-container" href="https://app.reserve.org/ethereum/index-dtf/0xe4a10951f962e6cb93cb843a4ef05d2f99db1f94/governance/proposal/79991421114151750512588226962924023798777476574073668851454079027852520472499"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Reserve app | DTFs</div><div class="kg-bookmark-description">Reserve is the leading platform for permissionless DTFs and asset-backed currencies. Create, manage &amp; trade tokenized indexes with 24/7 transparency.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/favicon-d0e01b14-c909-441a-83ae-b7758e9c8793.ico" alt=""><span class="kg-bookmark-author">DTFs</span><span class="kg-bookmark-publisher">Reserve Protocol</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/og_image-cda48690-a970-4f49-a7b3-ec880cde0be9.webp" alt=""></div></a><figcaption><p>On chain balance proposal</p></figcaption></figure>

The rebalance itself is overdue drift correction. ixEDEL launched on Ethereum mainnet on January 14, 2026 with fixed targets of 40% yield-bearing dollar stablecoins, 20% tokenized gold, 20% Swiss franc, and 20% Bitcoin. Bitcoin then fell roughly 36% and gold nearly 11%. The index lost about 9%. The franc and the stablecoins held, so they now sit fat above target while the two assets that fell sit thin below it.

<div class="html-card">
<table>
<thead>
<tr>
<th>Component</th>
<th>Move since launch</th>
<th>Weight now</th>
<th>Target</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bitcoin (cbBTC)</td>
<td>−35.99%</td>
<td>12.68%</td>
<td>20%</td>
</tr>
<tr>
<td>Gold (xAUt)</td>
<td>−10.65%</td>
<td>17.86%</td>
<td>20%</td>
</tr>
<tr>
<td>Swiss franc (ZCHF)</td>
<td>−0.65%</td>
<td>24.76%</td>
<td>20%</td>
</tr>
<tr>
<td>USD stablecoins (3 tokens)</td>
<td>+1.9% avg</td>
<td>44.70%</td>
<td>40%</td>
</tr>
<tr>
<td>ixEDEL</td>
<td>−9.1%</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div>

The trade sells the survivors and buys the casualties. No discretion is involved, the targets are fixed and the schedule, if the proposal passes, will be too. Sagix cites research from 512M showing longer rebalancing cycles preserve more value than frequent trading, and settled on twice a year.

<div class="html-card">
<table>
<thead>
<tr>
<th>Action</th>
<th>Token</th>
<th>Points</th>
</tr>
</thead>
<tbody>
<tr>
<td>Trim</td>
<td>ZCHF</td>
<td>4.76</td>
</tr>
<tr>
<td>Trim</td>
<td>sUSDS, steakUSDC, syrupUSDC</td>
<td>14.70</td>
</tr>
<tr>
<td>Buy</td>
<td>USDY</td>
<td>10.00</td>
</tr>
<tr>
<td>Buy</td>
<td>xAUt</td>
<td>2.14</td>
</tr>
<tr>
<td>Buy</td>
<td>cbBTC</td>
<td>7.32</td>
</tr>
</tbody>
</table>
</div>

USDY is the interesting addition. Every stablecoin in the current sleeve earns its yield from DeFi lending, Sky's savings rate, Morpho markets, Maple's loan book. None of it touches a Treasury bill. USDY is Ondo's tokenized note backed by short-term US Treasuries and bank deposits, and it is nearly alone in that category in having no transfer whitelist: minting is KYC-gated and closed to US persons under Reg S, but the token itself moves permissionlessly, which is why a $1 million swap quote fills on mainnet aggregators with price improvement rather than slippage. Reserve's Index DTFs use no oracles or collateral plugins, so the addition needs a governance vote and nothing else. The trade-offs are stated in the proposal: USDY is issuer paper from Ondo USDY LLC, not a fund share, and Ondo keeps a sanctions blocklist and a transfer pause switch.

<figure class="kg-card kg-image-card"><img src="/content/images/2026/07/Gemini_Generated_Image_du0vfkdu0vfkdu0v-1.png" class="kg-image" alt="" loading="lazy" width="1584" height="672" srcset="/content/images/size/w600/2026/07/Gemini_Generated_Image_du0vfkdu0vfkdu0v-1.png 600w, /content/images/size/w1000/2026/07/Gemini_Generated_Image_du0vfkdu0vfkdu0v-1.png 1000w, /content/images/2026/07/Gemini_Generated_Image_du0vfkdu0vfkdu0v-1.png 1584w" sizes="(min-width: 720px) 720px"></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/usdy/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">USDY: Treasury yield in a token you can actually transfer</div><div class="kg-bookmark-description">USDY explained: Ondo’s tokenized note backed by short-term US Treasuries, now past $2 billion. How the rising redemption value works, the Reg S structure behind permissionless transfers, risks vs USDC and BUIDL, and why it fits DeFi portfolios where whitelisted Treasury tokens cannot.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-29485e19-ec0a-469b-91e6-1e2bf608992b.JPG" alt=""><span class="kg-bookmark-author">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/Gemini_Generated_Image_1sgj6h1sgj6h1sgj-593e913b-1bbd-4363-a7e4-7b26ab91ef4a.png" alt=""></div></a></figure>

---

The svZCHF request is smaller and harder. The franc sleeve holds plain ZCHF, which pays zero. Frankencoin's savings vault token earns the protocol's savings rate and is atomically mintable through OpenOcean, but Reserve's tooling does not yet route that mint path, and that is development work on Reserve's side, not a governance vote. If the routing ships before July 5 the swap happens this cycle. If not, ZCHF stays and the migration waits.

The proposal is live on the Reserve governance forum.

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://forum.reserve.org/t/rfc-ixedel-governance-proposal-semi-annual-rebalancing-a-treasury-backed-addition-and-the-july-2026-rebalance/1576"><div class="kg-bookmark-content"><div class="kg-bookmark-title">[RFC] ixEDEL governance proposal: semi-annual rebalancing, a Treasury-backed addition, and the July 2026 rebalance</div><div class="kg-bookmark-description">ixEDEL governance proposal: semi-annual rebalancing, a Treasury-backed addition, and the July 2026 rebalance Sagix Club Edelweiss (ixEDEL), Ethereum mainnet, 0xe4a10951f962e6cb93cb843a4ef05d2f99db1f94 Summary This proposal asks RSR governance to adopt a semi-annual rebalancing cadence on January 5 and July 5, to execute the July 2026 rebalance back to target weights, to add Ondo’s Treasury-backed USDY at 10% inside the existing 40% stablecoin sleeve, and to migrate the Swiss franc sleeve from i…</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/2d321bdfff1b7535530fe09899eb9f9c7ca7c0ee_2_32x32-8c4a53bf-52fd-4d0d-b2c7-887a4248fa81.png" alt=""><span class="kg-bookmark-author">Reserve Protocol Forum</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/07ea779cce82e944c01184abe8f28f0b61eea9e5-4b5d31a3-e3fe-403c-9f03-c0ea71458951.png" alt=""></div></a></figure>

## Legal disclaimers and disclosures

**Educational purpose only**: This content is provided exclusively for educational and research purposes. It should not be construed as investment advice, financial planning guidance, policy recommendations, or official economic analysis. Nothing here is a solicitation to buy, sell, or mint any token.

**AI-assisted research disclosure**: This article was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While efforts were made to verify all statistical claims against on-chain data and primary sources, readers should independently verify any information before relying on it.

**Accuracy and liability limitations**: The authors make no warranties about completeness, accuracy, or currency of information. On-chain data reflects a point in time and changes continuously. The authors and The Genesis Address Publishing LLC assume no responsibility for errors, omissions, or consequences arising from the use of this information.

**Investment risk warning**: Past performance, whether historical or hypothetical, does not guarantee future results. All digital assets carry risk of total loss. Readers should conduct their own research and consult qualified financial advisors before making investment decisions.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and the authors or affiliated entities.

**Contemporary financial systems**: References to cryptocurrency protocols or DeFi mechanisms are made for educational purposes only. These comparisons do not constitute endorsements, recommendations, or predictions about the performance or suitability of any current financial products or services.

Publisher: The Genesis Address Publishing LLC
