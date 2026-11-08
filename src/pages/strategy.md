---
title: "Sagix Strategies"
date: "2026-03-20T16:36:46.000Z"
updated: "2026-03-20T20:20:36.000Z"
excerpt: ""
feature_image: "/content/images/2026/03/Gemini_Generated_Image_8ctyua8ctyua8cty-1.png"
topics: []
---

  Miliarium Aureum — Liquidity Deployment Calculator <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;500&display=swap'); *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; } html, body { background: #0A0A0A; color: #E5E5E5; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; line-height: 1.6; min-height: 100vh; -webkit-font-smoothing: antialiased; } /* ── VARS ── */ :root { --bg: #0A0A0A; --bg-card: #131313; --border: #1F1F1F; --gold: #C9A84C; --gold-dim: #8B7535; --gold-glow: rgba(201,168,76,0.12); --text: #E5E5E5; --text-dim: #999; --text-muted: #666; --red: #E53935; --green: #4CAF50; --yellow: #FFB300; --blue: #42A5F5; --cow-green: #43B67F; } /* ── HEADER ── */ .header { position: sticky; top: 0; z-index: 100; background: #0A0A0A; border-bottom: 1px solid var(--border); padding: 14px 0; } .header-inner { max-width: 920px; margin: 0 auto; padding: 0 20px; display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; } .header-brand { flex: 1; min-width: 0; } .header-title { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 700; font-size: 20px; color: var(--gold); letter-spacing: -0.01em; } .header-tagline { font-size: 11px; color: var(--text-muted); font-style: italic; max-width: 500px; } .header-summary { display: flex; gap: 20px; flex-shrink: 0; } .header-stat { display: flex; flex-direction: column; align-items: flex-end; } .header-stat-label { font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; } .header-stat-value { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--gold); font-weight: 500; } /* ── MAIN ── */ .main { max-width: 920px; margin: 0 auto; padding: 32px 20px 60px; } /* ── SECTIONS ── */ .section { margin-bottom: 40px; } .section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; } .section-number { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 700; font-size: 24px; color: var(--gold-dim); opacity: 0.4; letter-spacing: -0.01em; } .section-title { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-weight: 700; font-size: 18px; color: var(--text); letter-spacing: -0.01em; } .section-desc { font-size: 13px; color: var(--text-dim); margin-bottom: 14px; } .section-divider { height: 1px; margin-bottom: 40px; background: linear-gradient(90deg, var(--gold-dim) 0%, transparent 70%); opacity: 0.2; } /* ── INPUTS ── */ .input-group { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; } .input-label { font-size: 13px; color: var(--text-dim); min-width: 120px; } .input-field { background: var(--bg-card); border: 1px solid var(--border); color: var(--text); font-family: 'JetBrains Mono', monospace; font-size: 15px; padding: 8px 12px; border-radius: 5px; width: 150px; } .input-field:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 2px var(--gold-glow); } .input-field-sm { width: 70px; font-size: 14px; padding: 7px 8px; text-align: right; } .input-suffix { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--text-muted); } /* ── STRATEGY SPLIT ── */ .strategy-row { display: flex; gap: 14px; margin-bottom: 14px; } .strategy-card { flex: 1; background: var(--bg-card); border: none; border-radius: 7px; padding: 16px; } .strategy-card-label { font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; } .strategy-card-usd { font-family: 'JetBrains Mono', monospace; font-size: 18px; color: var(--gold); margin-top: 6px; } /* ── TOTALS BAR ── */ .totals-bar { display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: var(--bg-card); border: none; border-radius: 5px; font-family: 'JetBrains Mono', monospace; font-size: 12px; } .totals-bar-track { flex: 1; height: 3px; background: var(--border); border-radius: 2px; overflow: hidden; } .totals-bar-fill { height: 100%; border-radius: 2px; transition: width 0.3s, background 0.3s; } .fill-ok { background: var(--green); } .fill-under { background: var(--yellow); } .fill-over { background: var(--red); } .totals-label { color: var(--text-muted); } /* ── TABLES — FOG PURGE ── */ table { width: 100%; border-collapse: collapse; table-layout: auto; background: transparent !important; border: none; outline: none; } th, td { background: transparent !important; border: none; outline: none; } th { font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; font-weight: 500; text-align: left; padding: 7px 8px; border-bottom: 1px solid var(--border); } td { padding: 10px 8px; font-size: 13px; vertical-align: top; word-wrap: break-word; } tr:hover td { background: rgba(255,255,255,0.02) !important; } /* Token table column hints */ .col-token { width: 120px; } .col-usd { width: 110px; } .col-acquire { width: 180px; } .section { overflow: visible !important; } .col-right { text-align: right; } .mono { font-family: 'JetBrains Mono', monospace; } .gold { color: var(--gold); } .pool-name { font-weight: 700; letter-spacing: -0.01em; } .pool-type { font-size: 11px; color: var(--text-muted); } .pool-link { color: var(--gold-dim); text-decoration: none; font-size: 12px; } .pool-link:hover { color: var(--gold); } .token-ticker { font-weight: 700; letter-spacing: -0.01em; } .token-tag { font-size: 9px; padding: 1px 5px; border-radius: 3px; margin-left: 5px; vertical-align: middle; } .tag-vault { background: rgba(66,165,245,0.12); color: var(--blue); } .tag-dtf { background: var(--gold-glow); color: var(--gold); } .token-breakdown { font-size: 11px; color: var(--text-muted); line-height: 1.4; white-space: normal; } .two-step-note { font-size: 10px; color: var(--yellow); margin-top: 4px; } /* ── BUTTONS — BLACK BOLD TEXT, ALWAYS ── */ .btn { display: inline-block; padding: 6px 12px; border-radius: 4px; font-size: 11px; font-weight: 900; text-decoration: none; color: #000000 !important; margin-right: 5px; margin-bottom: 4px; white-space: nowrap; transition: opacity 0.15s; border: none; } .btn:hover { opacity: 0.85; } .btn-cow { background: #8FD6F9; } .btn-bal { background: linear-gradient(90deg, #B8A0E8, #E8B89C); } .btn-special { background: var(--gold); } .btn-primary-lg { display: inline-block; padding: 10px 20px; border-radius: 5px; font-size: 13px; font-weight: 900; text-decoration: none; color: #000000 !important; background: var(--gold); transition: opacity 0.15s; border: none; } .btn-primary-lg:hover { opacity: 0.85; } .btn-secondary { display: inline-block; padding: 8px 16px; border-radius: 5px; font-size: 12px; font-weight: 600; text-decoration: none; color: var(--text-dim); background: transparent; border: 1px solid var(--border); transition: border-color 0.15s; } .btn-secondary:hover { border-color: var(--text-dim); color: var(--text); } .btn-reset { background: transparent; border: 1px solid var(--border); color: var(--text-dim); padding: 5px 12px; border-radius: 4px; font-size: 11px; cursor: pointer; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; transition: border-color 0.15s; } .btn-reset:hover { border-color: var(--gold-dim); color: var(--text); } /* ── ACTION CARDS — NO BORDERS ── */ .action-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; } .action-card { background: var(--bg-card); border: none; border-radius: 7px; padding: 14px; } .action-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; } .action-card-name { font-weight: 700; font-size: 14px; letter-spacing: -0.01em; } .action-card-usd { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--gold); } .action-card-detail { font-size: 11px; color: var(--text-dim); margin-bottom: 10px; } /* ── FLYWHEEL ── */ .flywheel-step { display: flex; gap: 14px; align-items: flex-start; background: var(--bg-card); border: none; border-radius: 7px; padding: 14px; margin-bottom: 10px; } .flywheel-num { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 22px; font-weight: 700; color: var(--gold-dim); opacity: 0.5; min-width: 24px; line-height: 1; padding-top: 2px; letter-spacing: -0.01em; } .flywheel-content { flex: 1; } .flywheel-title { font-weight: 700; font-size: 14px; margin-bottom: 3px; letter-spacing: -0.01em; } .flywheel-desc { font-size: 12px; color: var(--text-dim); margin-bottom: 8px; } .addr-copy { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #000000; font-weight: 700; background: var(--gold); padding: 6px 10px; border-radius: 4px; cursor: pointer; display: inline-block; border: none; word-break: break-all; transition: opacity 0.15s; } .addr-copy:hover { opacity: 0.85; } .copy-hint { font-size: 9px; color: var(--text-muted); margin-left: 6px; } .empty-state { text-align: center; padding: 24px; color: var(--text-muted); font-size: 13px; font-style: italic; } /* ── FOOTER ── */ .footer { max-width: 920px; margin: 0 auto; padding: 20px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); } .footer a { color: var(--gold-dim); text-decoration: none; } .footer a:hover { color: var(--gold); } /* ── RESPONSIVE — KILL SCROLL & FOG ── */ @media (max-width: 640px) { .strategy-row { flex-direction: column; } .header-inner { flex-direction: column; align-items: flex-start; } .action-grid { grid-template-columns: 1fr; } td, th { padding: 8px 6px; font-size: 12px; } .btn { font-size: 10px; padding: 4px 8px; } table { display: table !important; overflow-x: visible !important; } .section { overflow: visible !important; } }</style>

Sagix Miliarium Aureum

The Milliarium Aureum (Latin for "Golden Milestone") was a monument erected by Emperor Augustus in 20 BC in the Roman Forum to serve as the symbolic "point zero" of the Roman Empire's road system. "Mille viae ducunt homines per saecula Romam" (A thousand roads lead men forever to Rome).

Deploying $0

Liquidity $0

Aura $0

I Total Deployment

Total USD 

II Strategy Split

Set liquidity %. Remainder goes to the Aura governance flywheel.

Liquidity Pools

 %

$0

Aura Flywheel

20 %

$0

III Pool Allocation

Percentage of the liquidity portion. Balancer V3 · Ethereum Mainnet. Reset to Recommended

Pool

Alloc

USD

Pool total

0%

IV Token Shopping List

Consolidated across all pools. Acquire at execution-time prices.

Token

USD Needed

From Pools

Acquire

Set pool allocations above.

V Add Liquidity

Deposit tokens proportionally into each pool on Balancer.

No pools allocated.

VI Stake BPT on Aura

Stake your Balancer Pool Tokens on Aura for boosted BAL + AURA rewards.

No pools allocated.

VII Aura Flywheel

Buy AURA → Lock → Delegate → Claim. Compound governance power.

1

Buy AURA

Swap USDC → AURA on CoW. Amount: $0

[Buy AURA on CoW ↗](https://swap.cow.fi/#/1/swap/USDC/AURA)

2

Lock as vlAURA

Lock your AURA to receive vlAURA voting power.

[Lock on Aura ↗](https://app.aura.finance/#/1/lock)

3

Delegate

Delegate vlAURA voting power to:

0x9Cc66daA49C54050c2b392bd5228e7d24514a274 click to copy

4

Claim Rewards

Claim and re-lock for compounding.

[Claim on Aura ↗](https://app.aura.finance/#/1/claim)

Disclosure: Sagix and its affiliates hold positions in ixEDEL, veBAL, vlAURA, and all tokens and pools referenced in this tool. This is not financial advice. Do your own research.

[sagix.io](/)

// ═══════════════════════════════════════ // DATA // ═══════════════════════════════════════ const POOLS = \[ { id:'zchf\_svzchf', name:'ZCHF / svZCHF', type:'Stable · 50/50 · AMP 1000', fee:'0.01%', depositNote:'Deposit at 50 / 50', defaultAlloc: 10, url:'https://balancer.fi/pools/ethereum/v3/0x849d43118c2e3c4856af26ee96f1a9d72bc2774f', gauge:null, auraUrl:'https://app.aura.finance/#/1/pool/279', tokens:\[ {t:'ZCHF',w:0.50}, {t:'svZCHF',w:0.50} \] }, { id:'ixedel\_usdc', name:'ixEDEL / USDC', type:'Weighted · 80/20', fee:'0.01%', depositNote:'Deposit at 80 / 20', defaultAlloc: 15, url:'https://balancer.fi/pools/ethereum/v3/0x37081447540b194d8e9aa2df95309dc830da8f11', gauge:null, auraUrl:'https://app.aura.finance/#/1/pool/278', tokens:\[ {t:'ixEDEL',w:0.80}, {t:'USDC',w:0.20} \] }, { id:'ixaqua', name:'ixAQUA', type:'Boosted · 26/26/16/16/16', fee:'0.02%', depositNote:'Deposit at 26 / 26 / 16 / 16 / 16', defaultAlloc: 25, url:'https://balancer.fi/pools/ethereum/v3/0x1967a1db66872356601f3fa5dd632a8240fbb87a', gauge:'0xc77Fc22917501D7D299F27be9847077B6FCbdE53', auraUrl:null, tokens:\[ {t:'waEthUSDT',w:0.26},{t:'svZCHF',w:0.26},{t:'cbBTC',w:0.16},{t:'XAUt',w:0.16},{t:'ixEDEL',w:0.16} \] }, { id:'ixstrata', name:'ixSTRATA', type:'Boosted · 26/26/16/16/16', fee:'0.02%', depositNote:'Deposit at 26 / 26 / 16 / 16 / 16', defaultAlloc: 25, url:'https://balancer.fi/pools/ethereum/v3/0xe408b69ff6e7036c095449ab458e61219b5d8ae4', gauge:'0xd3a3848C5d445D9aB4bD78346EC674031D0713Fa', auraUrl:null, tokens:\[ {t:'Aave Prime GHO',w:0.26},{t:'svZCHF',w:0.26},{t:'LINK',w:0.16},{t:'AAVE',w:0.16},{t:'ixEDEL',w:0.16} \] }, { id:'ixforum', name:'ixFORUM', type:'Boosted · 26/26/16/16/16', fee:'0.02%', depositNote:'Deposit at 26 / 26 / 16 / 16 / 16', defaultAlloc: 25, url:'https://balancer.fi/pools/ethereum/v3/0xd10d96730cbe56b7dc22cd69b1b8f325f929c8fe', gauge:'0x6bAeD4Cd5833b47095B9A8BA65d4529Ea37d32E2', auraUrl:null, tokens:\[ {t:'sUSDS',w:0.26},{t:'svZCHF',w:0.26},{t:'SKY',w:0.16},{t:'LDO',w:0.16},{t:'ixEDEL',w:0.16} \] }, \]; const LINKS = { 'ZCHF': { steps:\[ {label:'CoW: USDC → ZCHF', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/ZCHF'} \]}, 'svZCHF': { tag:'vault', tagLabel:'ERC-4626', twoStep:true, note:'Two-step: buy ZCHF on CoW, then swap to svZCHF in the stable pool', steps:\[ {label:'① CoW: USDC → ZCHF', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/ZCHF'}, {label:'② Bal: ZCHF → svZCHF', cls:'btn-bal', url:'https://balancer.fi/pools/ethereum/v3/0x849d43118c2e3c4856af26ee96f1a9d72bc2774f'}, \]}, 'ixEDEL': { tag:'dtf', tagLabel:'DTF', steps:\[ {label:'Mint at NAV', cls:'btn-special', url:'https://app.reserve.org/ethereum/index-dtf/0xe4a10951f962e6cb93cb843a4ef05d2f99db1f94/overview'}, \]}, 'USDC': { steps:\[\] }, 'waEthUSDT': { tag:'vault', tagLabel:'ERC-4626', steps:\[ {label:'CoW: USDC → waEthUSDT', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/0x7bc3485026ac48b6cf9baf0a377477fff5703af8'}, \]}, 'cbBTC': { steps:\[ {label:'CoW: USDC → cbBTC', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/cbBTC'}, \]}, 'XAUt': { steps:\[ {label:'CoW: USDC → XAUt', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/XAUt'}, \]}, 'Aave Prime GHO': { tag:'vault', tagLabel:'ERC-4626', steps:\[ {label:'CoW: USDC → GHO Prime', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/0xc71ea051a5f82c67adcf634c36ffe6334793d24c'}, \]}, 'LINK': { steps:\[ {label:'CoW: USDC → LINK', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/LINK'}, \]}, 'AAVE': { steps:\[ {label:'CoW: USDC → AAVE', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/AAVE'}, \]}, 'sUSDS': { tag:'vault', tagLabel:'ERC-4626', steps:\[ {label:'CoW: USDC → sUSDS', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/sUSDS'}, \]}, 'SKY': { steps:\[ {label:'CoW: USDC → SKY', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/SKY'}, \]}, 'LDO': { steps:\[ {label:'CoW: USDC → LDO', cls:'btn-cow', cow:true, url:'https://swap.cow.fi/#/1/swap/USDC/LDO'}, \]}, }; // State const poolAllocs = POOLS.map(p => p.defaultAlloc); // ═══════════════════════════════════════ // HELPERS // ═══════════════════════════════════════ function fmtUsd(n) { if (n < 0.5) return '$0'; return '$' + Math.round(n).toLocaleString('en-US'); } function parseNum(s) { return parseFloat(String(s).replace(/\[^0-9.\]/g,'')) || 0; } function updateBar(fillId, labelId, pct) { const fill = document.getElementById(fillId); const label = document.getElementById(labelId); fill.style.width = Math.min(pct, 100) + '%'; label.textContent = pct.toFixed(1) + '%'; fill.className = 'totals-bar-fill ' + (pct > 100 ? 'fill-over' : pct >= 99.95 ? 'fill-ok' : 'fill-under'); label.style.color = pct > 100 ? 'var(--red)' : pct >= 99.95 ? 'var(--green)' : 'var(--yellow)'; } function copyAddr(el, addr) { navigator.clipboard.writeText(addr).then(() => { const o = el.textContent; el.textContent = 'Copied!'; setTimeout(() => el.textContent = o, 1200); }); } // ═══════════════════════════════════════ // RENDER POOL TABLE // ═══════════════════════════════════════ function renderPoolTable() { document.getElementById('poolBody').innerHTML = POOLS.map((p, i) => \` <tr> <td><div class="pool-name">${p.name}</div><div class="pool-type">${p.type} · ${p.fee}</div></td> <td class="col-right"> <input type="text" class="input-field input-field-sm pa" data-i="${i}" value="${poolAllocs\[i\]}"> <span class="input-suffix">%</span> </td> <td class="col-right mono gold" id="pu${i}">$0</td> <td><a href="${p.url}" target="\_blank" rel="noopener noreferrer" class="pool-link">Pool ↗</a></td> </tr> \`).join(''); document.querySelectorAll('.pa').forEach(el => { el.addEventListener('input', () => { poolAllocs\[parseInt(el.dataset.i)\] = parseNum(el.value); recalc(); }); }); } function resetPools() { POOLS.forEach((p, i) => { poolAllocs\[i\] = p.defaultAlloc; }); document.querySelectorAll('.pa').forEach(el => { el.value = poolAllocs\[parseInt(el.dataset.i)\]; }); recalc(); } // ═══════════════════════════════════════ // RECALCULATE // ═══════════════════════════════════════ function recalc() { const total = parseNum(document.getElementById('totalUsd').value); const liqPct = Math.min(parseNum(document.getElementById('liqPct').value), 100) / 100; const auraPct = 1 - liqPct; const liqUsd = total \* liqPct; const auraUsd = total \* auraPct; document.getElementById('liqUsd').textContent = fmtUsd(liqUsd); document.getElementById('auraUsd').textContent = fmtUsd(auraUsd); document.getElementById('auraPctDisplay').textContent = (auraPct \* 100).toFixed(0); document.getElementById('hdrTotal').textContent = fmtUsd(total); document.getElementById('hdrLiq').textContent = fmtUsd(liqUsd); document.getElementById('hdrAura').textContent = fmtUsd(auraUsd); document.getElementById('auraAmt').textContent = fmtUsd(auraUsd); document.getElementById('auraBuyLink').href = 'https://swap.cow.fi/#/1/swap/USDC/AURA?sellAmount=' + Math.round(auraUsd); // Pool USD let poolPctSum = 0; const poolUsd = \[\]; for (let i = 0; i < POOLS.length; i++) { poolPctSum += poolAllocs\[i\]; const u = liqUsd \* (poolAllocs\[i\] / 100); poolUsd.push(u); document.getElementById('pu' + i).textContent = fmtUsd(u); } updateBar('poolBarFill', 'poolTotalLabel', poolPctSum); // Consolidate tokens const tMap = {}; for (let i = 0; i < POOLS.length; i++) { if (poolUsd\[i\] < 0.01) continue; for (const tk of POOLS\[i\].tokens) { if (!tMap\[tk.t\]) tMap\[tk.t\] = { ticker: tk.t, usd: 0, pools: \[\] }; const amt = poolUsd\[i\] \* tk.w; tMap\[tk.t\].usd += amt; tMap\[tk.t\].pools.push({ name: POOLS\[i\].name, usd: amt }); } } // Sort: ZCHF first, svZCHF second, then USD desc const PRIO = { 'ZCHF': -2, 'svZCHF': -1 }; const tokens = Object.values(tMap).filter(t => t.usd > 0.005) .sort((a, b) => { const pa = PRIO\[a.ticker\] ?? 0, pb = PRIO\[b.ticker\] ?? 0; if (pa !== pb) return pa - pb; return b.usd - a.usd; }); renderTokens(tokens); renderDeposit(poolUsd); renderStake(poolUsd); document.getElementById('auraSection').style.display = auraUsd > 0.01 ? 'block' : 'none'; } // ═══════════════════════════════════════ // RENDER TOKENS // ═══════════════════════════════════════ function renderTokens(tokens) { const tbody = document.getElementById('tokenBody'); const empty = document.getElementById('tokenEmpty'); if (!tokens.length) { tbody.innerHTML = ''; empty.style.display = 'block'; return; } empty.style.display = 'none'; tbody.innerHTML = tokens.map(tk => { const L = LINKS\[tk.ticker\] || { steps:\[\] }; const tagHtml = L.tag ? \`<span class="token-tag tag-${L.tag}">${L.tagLabel}</span>\` : ''; const bkdn = tk.pools.map(p => \`${p.name} ${fmtUsd(p.usd)}\`).join(' · '); const amt = Math.round(tk.usd); let linksHtml = ''; if (L.steps.length) { linksHtml = L.steps.map(s => { const href = s.cow ? \`${s.url}?sellAmount=${amt}\` : s.url; return \`<a href="${href}" target="\_blank" rel="noopener noreferrer" class="btn ${s.cls}">${s.label} ↗</a>\`; }).join(''); } else if (tk.ticker === 'USDC') { linksHtml = '<span style="font-size:11px;color:var(--text-muted);">Existing balance / CEX</span>'; } const noteHtml = L.twoStep ? \`<div class="two-step-note">⚠ ${L.note}</div>\` : ''; return \`<tr> <td><span class="token-ticker">${tk.ticker}</span>${tagHtml}</td> <td class="col-right mono gold" style="font-size:14px;">${fmtUsd(tk.usd)}</td> <td><div class="token-breakdown">${bkdn}</div></td> <td>${linksHtml}${noteHtml}</td> </tr>\`; }).join(''); } // ═══════════════════════════════════════ // RENDER DEPOSIT // ═══════════════════════════════════════ function renderDeposit(poolUsd) { const grid = document.getElementById('depositGrid'); const empty = document.getElementById('depositEmpty'); const active = POOLS.map((p, i) => ({...p, usd: poolUsd\[i\]})).filter(p => p.usd > 0.01); if (!active.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; } empty.style.display = 'none'; grid.innerHTML = active.map(p => { return \`<div class="action-card"> <div class="action-card-header"> <span class="action-card-name">${p.name}</span> <span class="action-card-usd">${fmtUsd(p.usd)}</span> </div> <div class="action-card-detail">${p.depositNote} · ${p.fee} fee</div> <a href="${p.url}" target="\_blank" rel="noopener noreferrer" class="btn-primary-lg">Add Liquidity ↗</a> </div>\`; }).join(''); } // ═══════════════════════════════════════ // RENDER STAKE BPT // ═══════════════════════════════════════ function renderStake(poolUsd) { const grid = document.getElementById('stakeGrid'); const empty = document.getElementById('stakeEmpty'); const active = POOLS.map((p, i) => ({...p, usd: poolUsd\[i\]})).filter(p => p.usd > 0.01); if (!active.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; } empty.style.display = 'none'; grid.innerHTML = active.map(p => { const btnHtml = p.auraUrl ? \`<a href="${p.auraUrl}" target="\_blank" rel="noopener noreferrer" class="btn-primary-lg">Stake on Aura ↗</a>\` : \`<span class="btn-primary-lg" style="opacity:0.4;cursor:default;">Gauge pending — coming soon</span>\`; return \`<div class="action-card"> <div class="action-card-header"> <span class="action-card-name">${p.name}</span> <span class="action-card-usd">${fmtUsd(p.usd)}</span> </div> <div class="action-card-detail">Stake BPT to earn boosted BAL + AURA</div> ${btnHtml} </div>\`; }).join(''); } // ═══════════════════════════════════════ // INIT // ═══════════════════════════════════════ document.getElementById('totalUsd').addEventListener('input', recalc); document.getElementById('liqPct').addEventListener('input', recalc); document.getElementById('totalUsd').addEventListener('blur', function() { const v = parseNum(this.value); if (v > 0) this.value = v.toLocaleString('en-US', {maximumFractionDigits:0}); }); renderPoolTable(); recalc();

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/sagix-miliarium-aureum/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Sagix Miliarium Aureum</div><div class="kg-bookmark-description">Discover dual-anchor AMMs on Balancer V3: Inspired by Eurodollar hubs, they form small-world networks for resilient DeFi routing. Unlock three arbitrage layers—yield drift, NAV, cross-anchor—for deeper liquidity and volume, beyond single-hub designs.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-141.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/Gemini_Generated_Image_g5arbug5arbug5ar-3.png" alt=""></div></a></figure>

---

## Legal disclaimers and disclosures

**Educational purpose only**: This content is provided exclusively for educational and historical research purposes. It should not be construed as investment advice, financial planning guidance, policy recommendations, or official economic analysis. Any contemporary parallels or policy discussions are presented as academic analysis, not recommendations for action. Historical patterns provide context for learning but do not predict future financial system outcomes or investment performance.

**AI-assisted research disclosure**: This historical analysis was researched and written with substantial assistance from artificial intelligence technology (Claude, Anthropic). While extensive efforts were made to verify all statistical claims, citations, and institutional analysis against authoritative sources, readers should independently verify any information before relying on it for academic, professional, investment, or policy purposes.

**Accuracy and liability limitations**: While extensive effort has been made to ensure historical accuracy through authoritative sources, the authors make no warranties about completeness, accuracy, or currency of information. Historical interpretation involves scholarly judgment and academic debate. Economic data may contain revisions, measurement inconsistencies, or reporting variations across different time periods and institutional sources.

**Liability protections**: The authors, publishers, and Sagix Apothecary assume no responsibility for errors, omissions, or consequences arising from the use of this information. This includes any errors that may result from AI assistance in research, writing, or data analysis. Users assume full responsibility for any decisions or actions taken based on this content.

**Investment risk warning**: Historical financial analysis does not constitute investment advice or recommendations. Past performance, whether historical or hypothetical, does not guarantee future results. All investments carry risk of loss, and readers should conduct their own research and consult qualified financial advisors before making investment decisions.

**No professional relationship**: This content does not create any professional, advisory, fiduciary, or client relationship between the reader and Sagix Apothecary, its authors, or affiliated entities. Readers seeking financial, investment, legal, regulatory, or policy guidance should consult qualified professionals licensed in their jurisdiction.

**Methodological note**: This analysis synthesizes findings from multiple Federal Reserve Bank research departments, National Bureau of Economic Research publications, peer-reviewed academic journals, and authoritative government historical records. The numbered citation system allows readers to verify specific claims against original sources rather than relying on secondary interpretations. All quantitative data and statistical analyses are drawn from the referenced academic literature rather than independent calculation.

**Contemporary financial systems**: References to modern financial systems, cryptocurrency protocols, or DeFi mechanisms are made for educational comparison purposes only. These comparisons do not constitute endorsements, recommendations, or predictions about the performance or suitability of any current financial products or services.

**Publication information**: Last Updated: March 2026 | Series: The Druid Deep Dive | Publisher: The Genesis Address LLC
