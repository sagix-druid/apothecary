---
title: "USDY: Treasury yield in a token you can actually transfer"
date: "2026-07-12T19:09:44.000Z"
updated: "2026-07-12T19:09:44.000Z"
excerpt: "\nUSDY explained: Ondo's tokenized note backed by short-term US Treasuries, now past $2 billion. How the rising redemption value works, the Reg S structure behind permissionless transfers, risks vs USDC and BUIDL, and why it fits DeFi portfolios where whitelisted Treasury tokens cannot."
feature_image: "/content/images/2026/07/Gemini_Generated_Image_1sgj6h1sgj6h1sgj.png"
topics: ["usdy","Research"]
internal_tags: ["#sagix-apothecary"]
featured: true
---

*Ondo's tokenized note passes the two-billion-dollar mark while most of its competitors remain locked behind whitelists*

---

## What is USDY?

USDY (Ondo US Dollar Yield) is a tokenized note issued by Ondo Finance, secured by a portfolio of short-term US Treasuries and bank demand deposits. It is not a stablecoin in the conventional sense. The token launched at $1.00 in August 2023 and its redemption value has climbed ever since, currently trading around $1.13. Yield is not paid out. It accumulates in the price.

That accrual mechanism is the first thing to understand. The second is the legal one. Most tokenized Treasury products, BlackRock's BUIDL included, restrict transfers to whitelisted addresses because US securities law treats them as registered offerings to qualified purchasers. USDY takes a different route: it is offered under a Regulation S exemption to non-US persons only, which allows permissionless secondary transfers on-chain once an initial lockup expires. For DeFi integrations, that difference is everything. A token that can only move between pre-approved wallets cannot sit in an AMM pool or an index vault. USDY can.

**Current statistics:**

<div class="html-card">
<table>
<thead>
<tr>
<th>Metric</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Total asset value</td>
<td>~$2.16 billion</td>
</tr>
<tr>
<td>Token supply</td>
<td>~1.87 billion USDY</td>
</tr>
<tr>
<td>Redemption value (NAV)</td>
<td>~$1.14</td>
</tr>
<tr>
<td>7-day APY</td>
<td>~3.55% (RWA.xyz)</td>
</tr>
<tr>
<td>Holders</td>
<td>~16,600</td>
</tr>
<tr>
<td>Launch</td>
<td>August 2023</td>
</tr>
</tbody>
</table>
</div>

**Official website:** [https://ondo.finance/usdy](https://ondo.finance/usdy)

**Ethereum contract:** `0x96F6eF951840721AdBF46Ac996b59E0235CB985C`

---

## How the yield works

USDY holds Treasuries with maturities of roughly six months or less, plus a slice of demand deposits at insured US banks that provides redemption-day liquidity. The portfolio composition sits around 92% Treasuries and 8% deposits. Interest earned by the portfolio, minus Ondo's management fee, flows to holders through a daily-rising redemption value.

The yield tracks the front end of the Treasury curve, nothing more exotic than that. When the Fed cuts, USDY's APY compresses within weeks as the portfolio rolls into lower-yielding bills. Ondo announced 4.65% in April 2026; RWA.xyz currently shows a 7-day APY of 3.55%. Neither number is a promise. Whatever three-month bills pay, minus fees, is what USDY pays.

For holders who prefer a token that stays at $1.00, Ondo issues **rUSDY**, a rebasing variant of the same claim. Instead of the price rising, the balance grows. Same portfolio, same rights, different accounting. rUSDY suits payment use cases; the accumulating USDY suits vaults and index products where a drifting balance would break integrations.

---

## The legal structure

This is where USDY differs most from a stablecoin, and it deserves careful reading.

USDY is a debt instrument. Each token represents a senior claim on **Ondo USDY LLC**, a Delaware special purpose vehicle structured to be bankruptcy-remote from Ondo Finance itself. If Ondo the company failed, the LLC's assets would not be part of its estate. The portfolio is held with a third-party collateral agent whose job is to act on behalf of tokenholders, and independent monthly reports verify that assets exceed liabilities.

Three restrictions follow from the Regulation S structure. First, USDY cannot be sold to US persons, full stop. Second, newly minted tokens are locked for 40 to 50 days before they become transferable on-chain. Third, secondary transfers, once unlocked, must not be directed back to US persons, though the token itself does not enforce a whitelist at the contract level after the lockup.

Minting happens directly with Ondo using USDC or wire transfer, with no accreditation requirement. Redemptions settle against the deposit buffer, typically on a T+1 basis for ordinary size.

<figure class="kg-card kg-image-card"><img src="/content/images/2026/07/Gemini_Generated_Image_du0vfkdu0vfkdu0v.png" class="kg-image" alt="" loading="lazy" width="1584" height="672" srcset="/content/images/size/w600/2026/07/Gemini_Generated_Image_du0vfkdu0vfkdu0v.png 600w, /content/images/size/w1000/2026/07/Gemini_Generated_Image_du0vfkdu0vfkdu0v.png 1000w, /content/images/2026/07/Gemini_Generated_Image_du0vfkdu0vfkdu0v.png 1584w" sizes="(min-width: 720px) 720px"></figure>

---

## Comparative analysis

### USDY vs. conventional stablecoins

<div class="html-card">
<table>
<thead>
<tr>
<th>Feature</th>
<th>USDY</th>
<th>USDC / USDT</th>
</tr>
</thead>
<tbody>
<tr>
<td>Yield to holder</td>
<td>Yes, accrues in price</td>
<td>No, issuer keeps float income</td>
</tr>
<tr>
<td>Peg</td>
<td>None (rising redemption value)</td>
<td>$1.00 target</td>
</tr>
<tr>
<td>Backing</td>
<td>Short-term Treasuries + bank deposits</td>
<td>Treasuries, repo, cash equivalents</td>
</tr>
<tr>
<td>US persons</td>
<td>Prohibited</td>
<td>Permitted</td>
</tr>
<tr>
<td>Legal claim</td>
<td>Senior debt of bankruptcy-remote SPV</td>
<td>Varies by issuer terms</td>
</tr>
<tr>
<td>Transfer restrictions</td>
<td>40-50 day lockup post-mint, then open</td>
<td>None</td>
</tr>
</tbody>
</table>
</div>

The core trade is straightforward. Circle and Tether keep the interest earned on their reserves. Ondo passes it through, in exchange for excluding the US market and imposing a lockup on primary mints. For a non-US holder parking dollars for months rather than minutes, the float income Circle retains is money left on the table.

### USDY vs. other tokenized Treasuries

Against BUIDL, Franklin Templeton's BENJI, and OpenEden's TBILL, USDY's distinguishing features are the permissionless secondary market and the breadth of chain deployments, which now span Ethereum, Solana, Mantle, Sui, Aptos, Stellar, and Sei among others. BUIDL is larger and carries the BlackRock name, but every transfer requires a whitelisted counterparty. That makes BUIDL suitable for institutional bilateral settlement and unsuitable for open DeFi. USDY inverts the trade: less institutional polish, far more composability.

This is the reason USDY appears inside DeFi index products and vaults where other Treasury tokens structurally cannot. Our own [ixEDEL](/ixedel/) portfolio uses it for exactly this property.

<figure class="kg-card kg-image-card"><img src="/content/images/2026/07/Gemini_Generated_Image_bxmli3bxmli3bxml.png" class="kg-image" alt="" loading="lazy" width="1584" height="672" srcset="/content/images/size/w600/2026/07/Gemini_Generated_Image_bxmli3bxmli3bxml.png 600w, /content/images/size/w1000/2026/07/Gemini_Generated_Image_bxmli3bxmli3bxml.png 1000w, /content/images/2026/07/Gemini_Generated_Image_bxmli3bxmli3bxml.png 1584w" sizes="(min-width: 720px) 720px"></figure>

---

## Risk analysis

**Issuer and structure risk.** USDY is a debt claim, not a deposit. The bankruptcy-remote structure and collateral agent are mitigants, not guarantees. A legal structure of this kind has not been tested through an actual Ondo insolvency, and no such structure has.

**Duration and rate risk.** Minimal by design, since maturities stay under six months, but the yield will keep falling if the Fed keeps cutting. Holders in 2023 earned above 5%. Holders today earn meaningfully less.

**Banking risk.** The deposit sleeve sits at US insured banks, but balances of this size exceed FDIC limits. The March 2023 regional banking stress is the relevant precedent; Ondo spreads deposits across multiple institutions.

**Regulatory risk.** The Regulation S structure depends on keeping US persons out. Enforcement action against Ondo or a change in SEC posture toward Reg S tokens could force structural changes. Non-US holders also face their own local securities rules, which vary widely.

**Liquidity risk.** Secondary DEX liquidity is thin relative to the token's $2 billion size. Daily on-chain volume runs under $1 million on most days. Large exits go through Ondo's redemption process, not the open market. Anyone treating USDY as instantly liquid at size is mistaken.

**Smart contract risk.** Standard for any token, compounded across each additional chain deployment and bridge.

---

## Practical considerations

USDY makes sense for non-US holders who want dollar-denominated yield without a bank account, treasuries desks at non-US crypto firms parking working capital, and DeFi portfolio builders who need a Treasury component that can actually move on-chain. It makes no sense for US persons, who are excluded, or for anyone who needs same-day liquidity in size.

Acquisition routes: mint directly with Ondo (USDC or wire, subject to onboarding and the 40-50 day lockup), or buy unlocked tokens on secondary markets including Orca on Solana and several centralized venues, where the lockup does not apply because those tokens have already seasoned.

One accounting note. Because USDY has no peg, its price in a portfolio tracker will show steady appreciation plus small market noise. Deviations of a fraction of a percent from NAV are normal secondary-market friction, not depegs.

---

## Summary

USDY solved a narrow problem well: how to get Treasury yield into a token that DeFi protocols can hold without permission. The Regulation S structure that enables this also defines its limits, no US persons and a lockup on fresh mints. At $2.16 billion it is among the largest tokenized Treasury products, and the largest with a genuinely open secondary market.

It is not risk-free and it is not a stablecoin. It is short-term US government debt wrapped in a Delaware SPV and a token contract, with the risks of all three layers. For portfolio construction, it fills a specific slot: the yield-bearing dollar component that composability requirements rule everything else out of.

---

## Legal disclaimers and disclosures

**Educational purpose only**: This content is provided exclusively for educational and research purposes. It should not be construed as investment advice, financial planning guidance, or recommendations to buy, sell, or hold any cryptocurrency or token. Historical patterns and comparative analysis provide context for learning but do not predict future performance or outcomes.

**AI-assisted research disclosure**: This analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all claims and data against authoritative sources including Ondo Finance documentation and third-party data providers, readers should independently verify any information before relying on it for investment or other decisions.

**Accuracy and liability limitations**: While extensive effort has been made to ensure accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. Tokenized asset products evolve rapidly, and information may become outdated. Statistics, yields, and structural parameters referenced may change without notice.

**Liability protections**: The authors and The Genesis Address Publishing LLC assume no responsibility for errors, omissions, or consequences arising from the use of this information. Users assume full responsibility for any decisions or actions taken based on this content.

**Investment risk warning**: Cryptocurrency and tokenized asset investments carry substantial risk of loss. Yield-bearing tokens face issuer risk, structural risk, regulatory risk, and liquidity risk. Past yields do not guarantee future yields. You could lose your entire investment.

**Jurisdictional restriction notice**: USDY is not available for sale or distribution to US persons and is not registered under the US Securities Act of 1933. Nothing in this article constitutes an offer or solicitation of USDY in any jurisdiction. Readers are responsible for compliance with the securities laws of their own jurisdiction.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and The Genesis Address Publishing LLC. Readers seeking financial, investment, or legal guidance should consult qualified professionals licensed in their jurisdiction.

**Conflict disclosure**: The Genesis Address Publishing LLC and its affiliates may hold positions in cryptocurrencies and tokens discussed in this analysis, including USDY held within the ixEDEL portfolio. This potential conflict should be considered when evaluating the information presented.

**Source verification**: Data and claims in this article draw from official Ondo Finance documentation (ondo.finance), RWA.xyz analytics, DeFiLlama, CoinGecko, and Messari.

**Publication information**:

*   Last updated: July 2026
*   Series: Protocol Analysis

Publisher: The Genesis Address Publishing LLC
