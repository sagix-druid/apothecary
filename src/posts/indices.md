---
title: "Introducing the Sagix indices: a personal framework for multi-asset investing"
date: "2025-12-16T15:21:43.000Z"
updated: "2025-12-22T12:14:58.000Z"
excerpt: "Documenting how we allocate capital across traditional markets and DeFi infrastructure"
feature_image: "/content/images/2025/12/image.jpg-1.jpg"
topics: ["Sagix Apothecary","video","videos"]
internal_tags: ["#sagix-apothecary","#video","#videos"]
featured: true
---

After 25 years of investing, the lessons that stick aren't about finding the next big winner. They're about avoiding the catastrophic losses that reset the clock on compounding. The Sagix indices represent our attempt to codify these lessons into a transparent, trackable framework.

This isn't a product launch. We're not selling anything. What follows is documentation of how we personally allocate capital—published openly so others can learn from both our successes and our mistakes.

<figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/Ie5Oag06e-c?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="18 December 2025"></iframe></figure>

## The problem with most portfolios

Concentration risk destroys wealth regardless of skill level. We've watched brilliant investors blow up because their "best idea" turned out to be wrong. Kodak employees held company stock. Enron employees held company stock. Smart people, concentrated bets, catastrophic outcomes.

The uncomfortable truth: you cannot predict which of your positions will go to zero. You can only ensure that when it happens—and it will happen—the damage isn't fatal.

## Three indices, one philosophy

The Sagix indices are built on a simple foundation: **survival over optimization**. We'd rather compound at 8% for 30 years than chase 30% returns and blow up in year 5.

The indices nest inside each other like matryoshka dolls:

**🐢 Sagix Tortoise** — Conservative multi-asset allocation with 9% indirect crypto exposure. Global dividend equities, commodities, real estate, gold, and sector ETFs. This is the "sleep at night" portfolio. If crypto goes to zero tomorrow, Tortoise loses 9%. Painful, but not fatal.

**🤖 Sagix Tech** — AI and technology growth blend with 30% crypto exposure. Combines institutional-grade AI/Tech ETFs with our DeFi allocation. For those who believe in the AI revolution but want exposure across both equity markets and on-chain protocols.

**🧪 Sagix Elixir** — Pure DeFi infrastructure. 36 tokens across 8 categories: ETH liquid staking, DeFi governance, Chainlink, yield-bearing stablecoins, Bitcoin, Bittensor AI network, and gold-backed tokens. This is the crypto-native allocation—100% on-chain, zero leverage, maximum diversification within the asset class.

The nesting works like this: Tortoise holds 30% in Tech. Tech holds 30% in Elixir. So Tortoise's 9% crypto exposure comes from 30% × 30% = 9%. One framework, three risk profiles.

## The Sagix Compound: buying what's down

Beyond the static allocations, we employ a monthly contribution strategy we call the Sagix Compound.

Every month on the 1st, we add $1,000 to the worst-performing category within each index. If ETH liquid staking is lagging in Elixir, that's where the money goes. If the AI ETF is down more than the others in Tech, we buy more of it.

This isn't market timing. It's enforced discipline. The strategy automates "buy low" and prevents the behavioral trap of chasing whatever performed best last month.

The math is simple but powerful: **time appears in the exponent of compound interest formulas, rates do not**. A mediocre return sustained over decades beats spectacular returns interrupted by catastrophic losses.

## What we're tracking

Starting December 15, 2025, we're publishing performance data for all three indices against their benchmarks:

*   Tortoise vs. S&P 500 (SPY)
*   Tech vs. Nasdaq 100 (QQQ)
*   Elixir vs. Bitcoin (BTC) and CMC Top 20

We'll update monthly with full transparency on allocations, rebalancing decisions, and performance attribution. When we underperform, you'll see it. When we make mistakes, we'll document them.

## Read the full methodology

The complete breakdown—every holding, every weight, every benchmark—is available on our below. We've also published the technical infrastructure, risk comparisons, and the thinking behind each allocation decision.

This is year one. Check back in a decade to see if the tortoise beats the hare.

---

<div class="html-card">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sagix Indices | Methodology & Allocations</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8f7f4;
            color: #2d2d2d;
            line-height: 1.7;
            font-size: 17px;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 32px;
        }
        /* Header */
        .header {
            margin-bottom: 64px;
            padding-bottom: 40px;
            border-bottom: 1px solid #e0ded8;
        }
        .logo-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
        }
        .logo-mark {
            font-size: 24px;
        }
        .brand-name {
            font-size: 15px;
            font-weight: 500;
            color: #6b6b6b;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }
        .main-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }
        .subtitle {
            font-size: 1.2rem;
            color: #666;
            max-width: 600px;
            font-weight: 400;
        }
        /* Index Overview */
        .indices-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 64px;
        }
        @media (max-width: 768px) {
            .indices-grid {
                grid-template-columns: 1fr;
            }
        }
        .index-card {
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 8px;
            padding: 28px 24px;
        }
        .index-card-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
        }
        .index-icon {
            font-size: 1.5rem;
        }
        .index-name {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
        }
        .index-tagline {
            font-size: 1.2rem;
            color: #888;
            margin-bottom: 20px;
        }
        .crypto-badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 1.2rem;
            font-weight: 600;
        }
        .badge-conservative {
            background: #e8f5e9;
            color: #2e7d32;
        }
        .badge-moderate {
            background: #e3f2fd;
            color: #1565c0;
        }
        .badge-aggressive {
            background: #f3e5f5;
            color: #7b1fa2;
        }
        /* Sections */
        .section {
            margin-bottom: 56px;
        }
        .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 2px solid #1a1a1a;
            display: inline-block;
        }
        .section-intro {
            color: #555;
            margin-bottom: 28px;
            max-width: 700px;
        }
        /* Philosophy */
        .philosophy-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        @media (max-width: 600px) {
            .philosophy-grid {
                grid-template-columns: 1fr;
            }
        }
        .philosophy-item {
            display: flex;
            gap: 16px;
        }
        .philosophy-icon {
            font-size: 1.4rem;
            flex-shrink: 0;
        }
        .philosophy-content h4 {
            font-size: 1.15rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 4px;
        }
        .philosophy-content p {
            font-size: 1.2rem;
            color: #666;
        }
        /* Nesting Diagram */
        .nesting-box {
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 8px;
            padding: 32px;
            margin-bottom: 32px;
        }
        .nest-row {
            display: flex;
            align-items: center;
            padding: 14px 20px;
            margin-bottom: 8px;
            border-radius: 6px;
            font-size: 1.15rem;
        }
        .nest-row:last-child {
            margin-bottom: 0;
        }
        .nest-1 {
            background: #f1f8e9;
            border-left: 3px solid #7cb342;
        }
        .nest-2 {
            background: #e3f2fd;
            border-left: 3px solid #42a5f5;
            margin-left: 28px;
        }
        .nest-3 {
            background: #f3e5f5;
            border-left: 3px solid #ab47bc;
            margin-left: 56px;
        }
        .nest-icon {
            margin-right: 12px;
        }
        .nest-name {
            font-weight: 600;
            color: #1a1a1a;
            flex: 1;
        }
        .nest-detail {
            color: #666;
            font-size: 1.15rem;
        }
        .nesting-note {
            text-align: center;
            color: #888;
            font-size: 1.15rem;
            margin-top: 20px;
        }
        /* Index Detail */
        .index-detail {
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 8px;
            padding: 32px;
            margin-bottom: 32px;
        }
        .index-detail-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        .detail-icon {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        .icon-Tortoise { background: #e8f5e9; }
        .icon-tech { background: #e3f2fd; }
        .icon-elixir { background: #f3e5f5; }
        .detail-title h3 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 2px;
        }
        .detail-title p {
            font-size: 1.2rem;
            color: #888;
        }
        .index-description {
            color: #555;
            margin-bottom: 24px;
        }
        /* Allocation Bar */
        .alloc-bar {
            display: flex;
            height: 12px;
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 24px;
        }
        .alloc-segment {
            transition: opacity 0.2s;
        }
        .alloc-segment:hover {
            opacity: 0.8;
        }
        /* Tables */
        .data-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 1.2rem;
        }
        .data-table th {
            text-align: left;
            padding: 12px 16px;
            font-weight: 500;
            color: #888;
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #eee;
        }
        .data-table td {
            padding: 14px 16px;
            border-bottom: 1px solid #f5f5f5;
            color: #444;
        }
        .data-table tr:last-child td {
            border-bottom: none;
        }
        .data-table tr:hover {
            background: #fafaf8;
        }
        .weight-value {
            font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
            font-weight: 600;
            color: #1a1a1a;
        }
        .color-dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .ticker-label {
            font-family: 'SF Mono', 'Monaco', monospace;
            font-size: 1.2rem;
            color: #888;
        }
        /* Holdings Accordion */
        .holdings-section {
            margin-top: 28px;
            padding-top: 24px;
            border-top: 1px solid #eee;
        }
        .holdings-title {
            font-size: 1.15rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 20px;
        }
        .holdings-category {
            margin-bottom: 16px;
        }
        .category-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 14px;
            background: #fafaf8;
            border-radius: 6px;
            margin-bottom: 8px;
        }
        .category-header h5 {
            font-size: 1.15rem;
            font-weight: 500;
            color: #444;
            display: flex;
            align-items: center;
        }
        .category-weight {
            font-family: 'SF Mono', monospace;
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
        }
        .holdings-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 6px;
            padding: 0 8px;
        }
        .holding-chip {
            display: flex;
            justify-content: space-between;
            padding: 6px 10px;
            font-size: 1.2rem;
            background: #fff;
            border: 1px solid #f0f0f0;
            border-radius: 4px;
        }
        .holding-chip .name {
            color: #555;
        }
        .holding-chip .weight {
            color: #999;
            font-family: 'SF Mono', monospace;
        }
        /* Benchmarks */
        .benchmark-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
        }
        @media (max-width: 768px) {
            .benchmark-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        .benchmark-item {
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 6px;
            padding: 20px;
        }
        .benchmark-item.primary {
            border-color: #1a1a1a;
        }
        .benchmark-item h4 {
            font-size: 1.15rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 2px;
        }
        .benchmark-item .ticker {
            font-family: 'SF Mono', monospace;
            font-size: 1.2rem;
            color: #888;
            margin-bottom: 8px;
        }
        .benchmark-item p {
            font-size: 1.2rem;
            color: #666;
        }
        /* Compound Strategy */
        .compound-box {
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 8px;
            padding: 32px;
            margin-bottom: 32px;
        }
        .compound-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }
        .compound-header h3 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
        }
        .compound-badge {
            background: #e8f5e9;
            color: #2e7d32;
            font-size: 1.2rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 4px;
        }
        .compound-description {
            color: #555;
            margin-bottom: 24px;
        }
        .compound-steps {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
        @media (max-width: 700px) {
            .compound-steps {
                grid-template-columns: 1fr;
            }
        }
        .compound-step {
            text-align: center;
            padding: 20px;
            background: #fafaf8;
            border-radius: 8px;
        }
        .step-number {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 8px;
        }
        .step-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 4px;
        }
        .step-detail {
            font-size: 1.2rem;
            color: #666;
        }
        .compound-note {
            margin-top: 20px;
            padding: 16px;
            background: #f8f7f4;
            border-radius: 6px;
            font-size: 1.15rem;
            color: #666;
        }
        /* About Sagix */
        .about-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
        }
        @media (max-width: 700px) {
            .about-grid {
                grid-template-columns: 1fr;
            }
        }
        .about-card {
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 8px;
            padding: 28px;
        }
        .about-card h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .about-card p {
            font-size: 1.2rem;
            color: #555;
            line-height: 1.6;
        }
        /* Risk Comparison */
        .risk-table {
            width: 100%;
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 8px;
            overflow: hidden;
        }
        .risk-table th {
            padding: 16px;
            font-size: 1.2rem;
            font-weight: 600;
            text-align: center;
            border-bottom: 1px solid #eee;
        }
        .risk-table th:first-child {
            text-align: left;
        }
        .risk-table td {
            padding: 12px 16px;
            font-size: 1.15rem;
            border-bottom: 1px solid #f5f5f5;
            overflow: hidden;
            text-align: center;
        }
        .risk-table td:first-child {
            text-align: left;
            color: #555;
        }
        .risk-table tr:last-child td {
            border-bottom: none;
        }
        .risk-low { color: #2e7d32; }
        .risk-med { color: #f9a825; }
        .risk-high { color: #c62828; }
        /* Infrastructure */
        .infra-table {
            width: 100%;
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 8px;
            overflow: hidden;
        }
        .infra-table th,
        .infra-table td {
            padding: 14px 16px;
            font-size: 1.15rem;
            text-align: left;
            border-bottom: 1px solid #f0f0f0;
        }
        .infra-table th {
            font-weight: 500;
            color: #888;
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            background: #fafaf8;
        }
        .infra-table tr:last-child td {
            border-bottom: none;
        }
        .infra-note {
            margin-top: 16px;
            font-size: 1.15rem;
            color: #888;
        }
        /* Disclaimer */
        .disclaimer {
            background: #fff;
            border: 1px solid #e8e6e1;
            border-radius: 8px;
            padding: 28px;
            margin-top: 48px;
        }
        .disclaimer h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 16px;
        }
        .disclaimer p {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 12px;
        }
        .disclaimer p:last-child {
            margin-bottom: 0;
        }
        /* Footer */
        .footer {
            text-align: center;
            padding: 40px 0;
            color: #999;
            font-size: 1.15rem;
        }
        .footer a {
            color: #666;
            text-decoration: none;
        }
        .footer a:hover {
            color: #1a1a1a;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="logo-row">
                <span class="logo-mark">🧪</span>
                <span class="brand-name">Sagix Apothecary</span>
            </div>
            <h1 class="main-title">Sagix Indices</h1>
            <p class="subtitle">Three nested indices spanning conservative diversification to pure DeFi conviction—each built on the Sagix Compound philosophy.</p>
        </header>
        <!-- Index Overview -->
        <div class="indices-grid">
            <div class="index-card">
                <div class="index-card-header">
                    <span class="index-icon">🐢</span>
                    <span class="index-name">Sagix Tortoise</span>
                </div>
                <p class="index-tagline">Conservative multi-asset allocation</p>
                <span class="crypto-badge badge-conservative">9% Crypto</span>
            </div>
            <div class="index-card">
                <div class="index-card-header">
                    <span class="index-icon">🤖</span>
                    <span class="index-name">Sagix Tech</span>
                </div>
                <p class="index-tagline">AI/Tech growth blend</p>
                <span class="crypto-badge badge-moderate">30% Crypto</span>
            </div>
            <div class="index-card">
                <div class="index-card-header">
                    <span class="index-icon">🧪</span>
                    <span class="index-name">Sagix Elixir</span>
                </div>
                <p class="index-tagline">Pure DeFi infrastructure</p>
                <span class="crypto-badge badge-aggressive">100% Crypto</span>
            </div>
        </div>
        <!-- About Sagix -->
        <section class="section">
            <h2 class="section-title">What is Sagix?</h2>
            <p class="section-intro">Sagix Apothecary is an educational platform documenting one investor's approach to long-term wealth building. These indices represent a personal investment framework—publicly tracked for transparency and educational discussion.</p>
            <div class="about-grid">
                <div class="about-card">
                    <h4>📚 Educational documentation</h4>
                    <p>The Sagix indices are not investment products or recommendations. They document how we personally allocate capital, providing a real-world case study for those interested in multi-asset portfolio construction with crypto exposure.</p>
                </div>
                <div class="about-card">
                    <h4>🔍 Transparent tracking</h4>
                    <p>We publish performance data, allocation changes, and methodology updates publicly. This transparency serves educational purposes—showing both successes and failures in real-time portfolio management.</p>
                </div>
                <div class="about-card">
                    <h4>⏳ 25-year perspective</h4>
                    <p>Our approach prioritizes survival over optimization, drawing from 25 years of investing experience. The tortoise philosophy emphasizes what won't change: compound interest rewards patience, and catastrophic losses reset the clock.</p>
                </div>
                <div class="about-card">
                    <h4>🧪 Research-driven</h4>
                    <p>Through "The Druid Deep Dive" series, we explore historical financial parallels to modern DeFi. Understanding how past monetary experiments succeeded or failed informs our current allocation decisions.</p>
                </div>
            </div>
        </section>
        <!-- Philosophy -->
        <section class="section">
            <h2 class="section-title">Investment philosophy</h2>
            <p class="section-intro">All three indices share the same foundation: catastrophic risk avoidance through true diversification. The tortoise beats the hare by surviving the journey.</p>
            <div class="philosophy-grid">
                <div class="philosophy-item">
                    <span class="philosophy-icon">🛡️</span>
                    <div class="philosophy-content">
                        <h4>Survival over optimization</h4>
                        <p>No single position can materially damage the portfolio. Sized for resilience, not maximum returns.</p>
                    </div>
                </div>
                <div class="philosophy-item">
                    <span class="philosophy-icon">⚖️</span>
                    <div class="philosophy-content">
                        <h4>Zero leverage</h4>
                        <p>No margin, no borrowing, no liquidation risk. Cannot be forced to sell at the worst moment.</p>
                    </div>
                </div>
                <div class="philosophy-item">
                    <span class="philosophy-icon">🌐</span>
                    <div class="philosophy-content">
                        <h4>True diversification</h4>
                        <p>Diversified across asset classes, sectors, geographies—not just position count.</p>
                    </div>
                </div>
                <div class="philosophy-item">
                    <span class="philosophy-icon">⏳</span>
                    <div class="philosophy-content">
                        <h4>Time as multiplier</h4>
                        <p>Positioned for decade-long compounding. Boring yields outperform speculation over time.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Compound Strategy -->
        <section class="section">
            <h2 class="section-title">The Sagix Compound</h2>
            <p class="section-intro">Beyond the static index allocations, we employ a monthly contribution strategy that systematically adds capital to lagging assets—automating the "buy low" discipline.</p>
            <div class="compound-box">
                <div class="compound-header">
                    <h3>Monthly laggard rebalancing</h3>
                    <span class="compound-badge">$1,000/month</span>
                </div>
                <p class="compound-description">Each month on the 1st, we add $1,000 to the worst-performing category within each index. This counter-cyclical approach forces disciplined accumulation during drawdowns and prevents emotional buying of recent winners.</p>
                <div class="compound-steps">
                    <div class="compound-step">
                        <div class="step-number">🧪</div>
                        <div class="step-title">Elixir Compound</div>
                        <div class="step-detail">$1,000 to laggard category. If Bittensor subnets lag, split across all 13 tokens.</div>
                    </div>
                    <div class="compound-step">
                        <div class="step-number">🤖</div>
                        <div class="step-title">Tech Compound</div>
                        <div class="step-detail">$300 flows from Elixir (30%). $700 to laggard component (ETF or more Elixir).</div>
                    </div>
                    <div class="compound-step">
                        <div class="step-number">🐢</div>
                        <div class="step-title">Tortoise Compound</div>
                        <div class="step-detail">$300 flows from Tech (30%). $700 to laggard component among the 9 ETFs.</div>
                    </div>
                </div>
                <div class="compound-note">
                    <strong>Why laggard rebalancing?</strong> Concentration risk destroys wealth regardless of skill level. By systematically buying what's down, we enforce diversification discipline and avoid the behavioral trap of chasing performance. Time appears in the exponent of compound interest—the Sagix Compound strategy is designed for decades, not quarters.
                </div>
            </div>
        </section>
        <!-- Nested Structure -->
        <section class="section">
            <h2 class="section-title">Nested structure</h2>
            <p class="section-intro">Each index builds on the next, creating a matryoshka-style architecture. Tortoise contains Tech, which contains Elixir.</p>
            <div class="nesting-box">
                <div class="nest-row nest-1">
                    <span class="nest-icon">🐢</span>
                    <span class="nest-name">Sagix Tortoise</span>
                    <span class="nest-detail">100% → 9% effective crypto exposure</span>
                </div>
                <div class="nest-row nest-2">
                    <span class="nest-icon">🤖</span>
                    <span class="nest-name">Sagix Tech</span>
                    <span class="nest-detail">30% of Tortoise → 30% crypto within Tech</span>
                </div>
                <div class="nest-row nest-3">
                    <span class="nest-icon">🧪</span>
                    <span class="nest-name">Sagix Elixir</span>
                    <span class="nest-detail">30% of Tech → 36 tokens, 100% crypto</span>
                </div>
                <p class="nesting-note">Tortoise's 9% crypto = 30% Tech × 30% Elixir</p>
            </div>
        </section>
        <!-- Tortoise -->
        <section class="section">
            <h2 class="section-title">Sagix Tortoise</h2>
            <div class="index-detail">
                <div class="index-detail-header">
                    <div class="detail-icon icon-Tortoise">🐢</div>
                    <div class="detail-title">
                        <h3>Conservative multi-asset</h3>
                        <p>9% indirect crypto exposure through nested allocation</p>
                    </div>
                </div>
                <p class="index-description">Combines global dividend equities, commodities, real estate, gold, and sector ETFs with a measured allocation to Sagix Tech—providing crypto upside while maintaining portfolio resilience.</p>
                <div class="alloc-bar">
                    <div class="alloc-segment" style="width: 30%; background: #42a5f5;" title="Tech 30%"></div>
                    <div class="alloc-segment" style="width: 30%; background: #7e57c2;" title="Dividend 30%"></div>
                    <div class="alloc-segment" style="width: 10%; background: #ff7043;" title="Commodities 10%"></div>
                    <div class="alloc-segment" style="width: 5%; background: #ec407a;" title="UK Property 5%"></div>
                    <div class="alloc-segment" style="width: 5%; background: #9ccc65;" title="Energy 5%"></div>
                    <div class="alloc-segment" style="width: 5%; background: #26a69a;" title="US Property 5%"></div>
                    <div class="alloc-segment" style="width: 5%; background: #ef5350;" title="Healthcare 5%"></div>
                    <div class="alloc-segment" style="width: 5%; background: #ffca28;" title="Gold 5%"></div>
                    <div class="alloc-segment" style="width: 5%; background: #29b6f6;" title="Financials 5%"></div>
                </div>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Ticker</th>
                            <th>Weight</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="color-dot" style="background: #42a5f5;"></span>Sagix Tech</td>
                            <td class="ticker-label">INDEX</td>
                            <td class="weight-value">30%</td>
                            <td>Growth + crypto exposure</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #7e57c2;"></span>iShares Global Dividend</td>
                            <td class="ticker-label">GLDV</td>
                            <td class="weight-value">30%</td>
                            <td>Income + stability</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #ff7043;"></span>iShares USD Treasury Bond</td>
                            <td class="ticker-label">SXRC</td>
                            <td class="weight-value">10%</td>
                            <td>Commodities exposure</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #ec407a;"></span>iShares UK Property</td>
                            <td class="ticker-label">IUKP</td>
                            <td class="weight-value">5%</td>
                            <td>Real estate—UK</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #9ccc65;"></span>iShares MSCI World Energy</td>
                            <td class="ticker-label">WENE</td>
                            <td class="weight-value">5%</td>
                            <td>Energy sector</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #26a69a;"></span>iShares US Property</td>
                            <td class="ticker-label">IUSP</td>
                            <td class="weight-value">5%</td>
                            <td>Real estate—US</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #ef5350;"></span>iShares US Healthcare</td>
                            <td class="ticker-label">IUHC</td>
                            <td class="weight-value">5%</td>
                            <td>Healthcare sector</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #ffca28;"></span>iShares Physical Gold</td>
                            <td class="ticker-label">SGLN</td>
                            <td class="weight-value">5%</td>
                            <td>Inflation hedge</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #29b6f6;"></span>iShares US Financials</td>
                            <td class="ticker-label">IUFS</td>
                            <td class="weight-value">5%</td>
                            <td>Financial sector</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <!-- Tech -->
        <section class="section">
            <h2 class="section-title">Sagix Tech</h2>
            <div class="index-detail">
                <div class="index-detail-header">
                    <div class="detail-icon icon-tech">🤖</div>
                    <div class="detail-title">
                        <h3>AI/Tech growth blend</h3>
                        <p>30% crypto exposure through Sagix Elixir allocation</p>
                    </div>
                </div>
                <p class="index-description">Captures the AI revolution across both traditional equity markets and on-chain protocols. Blends institutional-grade AI/Tech ETFs with the pure DeFi infrastructure of Sagix Elixir.</p>
                <div class="alloc-bar">
                    <div class="alloc-segment" style="width: 30%; background: #ab47bc;" title="Elixir 30%"></div>
                    <div class="alloc-segment" style="width: 25%; background: #5c6bc0;" title="AI ETF 25%"></div>
                    <div class="alloc-segment" style="width: 25%; background: #42a5f5;" title="Communications 25%"></div>
                    <div class="alloc-segment" style="width: 20%; background: #26c6da;" title="Data Centers 20%"></div>
                </div>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Ticker</th>
                            <th>Weight</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="color-dot" style="background: #ab47bc;"></span>Sagix Elixir</td>
                            <td class="ticker-label">INDEX</td>
                            <td class="weight-value">30%</td>
                            <td>Pure DeFi infrastructure</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #5c6bc0;"></span>WisdomTree Artificial Intelligence</td>
                            <td class="ticker-label">WTAI</td>
                            <td class="weight-value">25%</td>
                            <td>AI sector exposure</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #42a5f5;"></span>iShares US Communications</td>
                            <td class="ticker-label">IUCM</td>
                            <td class="weight-value">25%</td>
                            <td>Big Tech exposure</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #26c6da;"></span>Global X Data Center REITs</td>
                            <td class="ticker-label">VPN</td>
                            <td class="weight-value">20%</td>
                            <td>AI infrastructure real estate</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <!-- Elixir -->
        <section class="section">
            <h2 class="section-title">Sagix Elixir</h2>
            <div class="index-detail">
                <div class="index-detail-header">
                    <div class="detail-icon icon-elixir">🧪</div>
                    <div class="detail-title">
                        <h3>Pure DeFi infrastructure</h3>
                        <p>36 tokens across 8 categories on Base</p>
                    </div>
                </div>
                <p class="index-description">A diversified basket of yield-generating stablecoins, liquid staking derivatives, DeFi governance tokens, oracle infrastructure, and Bittensor AI network exposure—designed as institutional-grade DeFi infrastructure.</p>
                <div class="alloc-bar">
                    <div class="alloc-segment" style="width: 20%; background: #5c6bc0;" title="ETH Staking 20%"></div>
                    <div class="alloc-segment" style="width: 20%; background: #7e57c2;" title="DeFi Gov 20%"></div>
                    <div class="alloc-segment" style="width: 15%; background: #26a69a;" title="Chainlink 15%"></div>
                    <div class="alloc-segment" style="width: 15%; background: #42a5f5;" title="Stablecoins 15%"></div>
                    <div class="alloc-segment" style="width: 10%; background: #ff7043;" title="Bitcoin 10%"></div>
                    <div class="alloc-segment" style="width: 8.5%; background: #ec407a;" title="Bittensor 8.5%"></div>
                    <div class="alloc-segment" style="width: 6.5%; background: #ab47bc;" title="Subnets 6.5%"></div>
                    <div class="alloc-segment" style="width: 5%; background: #ffca28;" title="Gold 5%"></div>
                </div>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Weight</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span class="color-dot" style="background: #5c6bc0;"></span>ETH liquid staking</td>
                            <td class="weight-value">20%</td>
                            <td>Yield-bearing ETH exposure</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #7e57c2;"></span>DeFi governance</td>
                            <td class="weight-value">20%</td>
                            <td>Protocol ownership</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #26a69a;"></span>Infrastructure (Chainlink)</td>
                            <td class="weight-value">15%</td>
                            <td>Oracle network backbone</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #42a5f5;"></span>Yield stablecoins</td>
                            <td class="weight-value">15%</td>
                            <td>Risk-off yield generation</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #ff7043;"></span>Bitcoin (cbBTC)</td>
                            <td class="weight-value">10%</td>
                            <td>Digital gold anchor</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #ec407a;"></span>Bittensor (stTAO + xTAO)</td>
                            <td class="weight-value">8.5%</td>
                            <td>AI network staking</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #ab47bc;"></span>Bittensor subnets</td>
                            <td class="weight-value">6.5%</td>
                            <td>AI compute markets</td>
                        </tr>
                        <tr>
                            <td><span class="color-dot" style="background: #ffca28;"></span>Gold-backed tokens</td>
                            <td class="weight-value">5%</td>
                            <td>Precious metal hedge</td>
                        </tr>
                    </tbody>
                </table>
                <div class="holdings-section">
                    <h4 class="holdings-title">Complete holdings (36 tokens)</h4>
                    <div class="holdings-category">
                        <div class="category-header">
                            <h5><span class="color-dot" style="background: #5c6bc0;"></span>ETH liquid staking</h5>
                            <span class="category-weight">20.0%</span>
                        </div>
                        <div class="holdings-grid">
                            <div class="holding-chip"><span class="name">wstETH (Lido)</span><span class="weight">5.0%</span></div>
                            <div class="holding-chip"><span class="name">weETH (ether.fi)</span><span class="weight">5.0%</span></div>
                            <div class="holding-chip"><span class="name">rETH (Rocket Pool)</span><span class="weight">5.0%</span></div>
                            <div class="holding-chip"><span class="name">cbETH (Coinbase)</span><span class="weight">5.0%</span></div>
                        </div>
                    </div>
                    <div class="holdings-category">
                        <div class="category-header">
                            <h5><span class="color-dot" style="background: #7e57c2;"></span>DeFi governance</h5>
                            <span class="category-weight">20.0%</span>
                        </div>
                        <div class="holdings-grid">
                            <div class="holding-chip"><span class="name">ETHFI</span><span class="weight">3.0%</span></div>
                            <div class="holding-chip"><span class="name">AAVE</span><span class="weight">2.0%</span></div>
                            <div class="holding-chip"><span class="name">AERO</span><span class="weight">2.0%</span></div>
                            <div class="holding-chip"><span class="name">PENDLE</span><span class="weight">2.0%</span></div>
                            <div class="holding-chip"><span class="name">COW</span><span class="weight">2.0%</span></div>
                            <div class="holding-chip"><span class="name">MORPHO</span><span class="weight">2.0%</span></div>
                            <div class="holding-chip"><span class="name">HYPE</span><span class="weight">2.0%</span></div>
                            <div class="holding-chip"><span class="name">UNI</span><span class="weight">2.0%</span></div>
                            <div class="holding-chip"><span class="name">SYRUP</span><span class="weight">2.0%</span></div>
                            <div class="holding-chip"><span class="name">SPK</span><span class="weight">1.0%</span></div>
                        </div>
                    </div>
                    <div class="holdings-category">
                        <div class="category-header">
                            <h5><span class="color-dot" style="background: #26a69a;"></span>Infrastructure</h5>
                            <span class="category-weight">15.0%</span>
                        </div>
                        <div class="holdings-grid">
                            <div class="holding-chip"><span class="name">LINK (Chainlink)</span><span class="weight">15.0%</span></div>
                        </div>
                    </div>
                    <div class="holdings-category">
                        <div class="category-header">
                            <h5><span class="color-dot" style="background: #42a5f5;"></span>Yield stablecoins</h5>
                            <span class="category-weight">15.0%</span>
                        </div>
                        <div class="holdings-grid">
                            <div class="holding-chip"><span class="name">sUSDS (Sky)</span><span class="weight">5.0%</span></div>
                            <div class="holding-chip"><span class="name">syrupUSDC</span><span class="weight">5.0%</span></div>
                            <div class="holding-chip"><span class="name">USDY (Ondo)</span><span class="weight">5.0%</span></div>
                        </div>
                    </div>
                    <div class="holdings-category">
                        <div class="category-header">
                            <h5><span class="color-dot" style="background: #ff7043;"></span>Bitcoin</h5>
                            <span class="category-weight">10.0%</span>
                        </div>
                        <div class="holdings-grid">
                            <div class="holding-chip"><span class="name">cbBTC</span><span class="weight">10.0%</span></div>
                        </div>
                    </div>
                    <div class="holdings-category">
                        <div class="category-header">
                            <h5><span class="color-dot" style="background: #ec407a;"></span>Bittensor staking</h5>
                            <span class="category-weight">8.5%</span>
                        </div>
                        <div class="holdings-grid">
                            <div class="holding-chip"><span class="name">stTAO</span><span class="weight">4.5%</span></div>
                            <div class="holding-chip"><span class="name">xTAO</span><span class="weight">4.0%</span></div>
                        </div>
                    </div>
                    <div class="holdings-category">
                        <div class="category-header">
                            <h5><span class="color-dot" style="background: #ab47bc;"></span>Bittensor subnets (13)</h5>
                            <span class="category-weight">6.5%</span>
                        </div>
                        <div class="holdings-grid">
                            <div class="holding-chip"><span class="name">xSN51 Lium</span><span class="weight">0.75%</span></div>
                            <div class="holding-chip"><span class="name">xSN64 Chutes</span><span class="weight">0.75%</span></div>
                            <div class="holding-chip"><span class="name">xSN62 Ridges</span><span class="weight">0.75%</span></div>
                            <div class="holding-chip"><span class="name">xSN50 Synth</span><span class="weight">0.75%</span></div>
                            <div class="holding-chip"><span class="name">xSN56 Gradients</span><span class="weight">0.50%</span></div>
                            <div class="holding-chip"><span class="name">xSN44 Score</span><span class="weight">0.50%</span></div>
                            <div class="holding-chip"><span class="name">xSN41 Sports</span><span class="weight">0.50%</span></div>
                            <div class="holding-chip"><span class="name">xSN4 Targon</span><span class="weight">0.50%</span></div>
                            <div class="holding-chip"><span class="name">xSN8 PTN</span><span class="weight">0.50%</span></div>
                            <div class="holding-chip"><span class="name">xSN9 Iota</span><span class="weight">0.25%</span></div>
                            <div class="holding-chip"><span class="name">xSN34 Bitmind</span><span class="weight">0.25%</span></div>
                            <div class="holding-chip"><span class="name">xSN35 Cartha</span><span class="weight">0.25%</span></div>
                            <div class="holding-chip"><span class="name">xSN71 Leadpoet</span><span class="weight">0.25%</span></div>
                        </div>
                    </div>
                    <div class="holdings-category">
                        <div class="category-header">
                            <h5><span class="color-dot" style="background: #ffca28;"></span>Gold-backed tokens</h5>
                            <span class="category-weight">5.0%</span>
                        </div>
                        <div class="holdings-grid">
                            <div class="holding-chip"><span class="name">PAXG</span><span class="weight">2.5%</span></div>
                            <div class="holding-chip"><span class="name">VNXAU</span><span class="weight">2.5%</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Benchmarks -->
        <section class="section">
            <h2 class="section-title">Benchmarks</h2>
            <div class="benchmark-grid">
                <div class="benchmark-item primary">
                    <h4>S&P 500</h4>
                    <div class="ticker">SPY</div>
                    <p>Tortoise benchmark</p>
                </div>
                <div class="benchmark-item primary">
                    <h4>Nasdaq 100</h4>
                    <div class="ticker">QQQ</div>
                    <p>Tech benchmark</p>
                </div>
                <div class="benchmark-item primary">
                    <h4>Bitcoin</h4>
                    <div class="ticker">BTC</div>
                    <p>Elixir benchmark</p>
                </div>
                <div class="benchmark-item primary">
                    <h4>CMC Top 20</h4>
                    <div class="ticker">CMC20</div>
                    <p>Broad crypto beta</p>
                </div>
            </div>
        </section>
        <!-- Risk Comparison -->
        <section class="section">
            <h2 class="section-title">Risk comparison</h2>   
          <th> </th>
            <p> </p>
            <table class="risk-table">
                <thead>
                    <tr>
                        <th>Risk factor</th>
                        <th>🐢 Tortoise</th>
                        <th>🤖 Tech</th>
                        <th>🧪 Elixir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Market volatility</td>
                        <td class="risk-low">Low</td>
                        <td class="risk-med">Medium</td>
                        <td class="risk-high">High</td>
                    </tr>
                    <tr>
                        <td>Smart contract risk</td>
                        <td class="risk-low">Minimal</td>
                        <td class="risk-med">Moderate</td>
                        <td class="risk-high">Significant</td>
                    </tr>
                    <tr>
                        <td>Regulatory exposure</td>
                        <td class="risk-low">Low</td>
                        <td class="risk-med">Moderate</td>
                        <td class="risk-high">High</td>
                    </tr>
                    <tr>
                        <td>Liquidity risk</td>
                        <td class="risk-low">Low</td>
                        <td class="risk-low">Low</td>
                        <td class="risk-med">Moderate</td>
                    </tr>
                    <tr>
                        <td>Crypto tail risk</td>
                        <td>9%</td>
                        <td>30%</td>
                        <td>100%</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <!-- Infrastructure -->
        <section class="section">
            <h2 class="section-title">Technical infrastructure</h2>
            <table class="infra-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Underlying</th>
                        <th>Chain</th>
                        <th>Data sources</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>🐢 Tortoise</td>
                        <td>Irish-domiciled ETFs + Sagix Tech</td>
                        <td>TradFi (LSE)</td>
                        <td>TwelveData, CoinGecko</td>
                    </tr>
                    <tr>
                        <td>🤖 Tech</td>
                        <td>AI/Tech ETFs + Sagix Elixir</td>
                        <td>TradFi + Base</td>
                        <td>TwelveData, DexScreener</td>
                    </tr>
                    <tr>
                        <td>🧪 Elixir</td>
                        <td>36 tokens (Reserve Protocol DTF)</td>
                        <td>Base (Coinbase L2)</td>
                        <td>DexScreener, CoinGecko</td>
                    </tr>
                </tbody>
            </table>
            <p class="infra-note"><strong>Baseline:</strong> December 15, 2025 (2 PM EST) · <strong>Rebalancing:</strong> Periodic with documented rationale · <strong>Leverage:</strong> Zero</p>
        </section>
        <!-- Disclaimer -->
        <div class="disclaimer">
            <h4>Important disclosures</h4>
            <p><strong>Educational purpose only:</strong> This document is provided exclusively for educational and informational purposes. It should not be construed as investment advice, financial planning guidance, or a solicitation to buy or sell any securities or cryptocurrency tokens.</p>
            <p><strong>Personal portfolio documentation:</strong> The Sagix indices represent documentation of personal investment decisions. They are not investment products, funds, or managed accounts. Readers should not interpret this as a recommendation to replicate these allocations.</p>
            <p><strong>No professional relationship:</strong> This content does not create any professional, advisory, fiduciary, or client relationship between the reader and Sagix Apothecary, its authors, or affiliated entities.</p>
            <p><strong>Risk warning:</strong> All investments carry risk of loss. Cryptocurrency investments are particularly volatile. Past performance does not guarantee future results. You may lose some or all of your invested capital.</p>
            <p><strong>AI-assisted research:</strong> This document was prepared with artificial intelligence assistance. Readers should independently verify any information before making investment decisions.</p>
        </div>
        <!-- Footer -->
        <footer class="footer">
            <p>Sagix Apothecary · <a href="/" target="_blank">www.sagix.io</a></p>
            <p>December 2025</p>
        </footer>
    </div>
</body>
</html>
</div>

---

## What this is not

Let's be explicit about what we're not doing:

**This is not investment advice.** We're documenting our personal approach, not recommending you copy it. Your circumstances, risk tolerance, and time horizon are different from ours.

**This is not a fund or product.** You can't invest in the Sagix indices. They're a framework we use for our own capital, published for educational purposes.

**This is not a get-rich-quick scheme.** The tortoise philosophy is boring by design. We're optimizing for survival across decades, not returns across quarters.

## Why publish this?

Two reasons.

First, accountability. Publishing forces rigor. When your decisions are public, you think harder before making them. The Sagix indices exist because writing them down made us confront our own assumptions.

Second, education. The DeFi space is full of noise—leverage, yield farming, algorithmic stablecoins that implode. We think there's value in documenting a different approach: boring, diversified, long-term. If that resonates with even a few readers, the transparency is worth it.

---

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/the-druid-deep-dive-episode-5-the-panic-of-1837-portfolio-strategies-that-survived/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">The Druid Deep Dive episode 5: The panic of 1837: Portfolio strategies that survived and thrived</div><div class="kg-bookmark-description">When Jackson’s Specie Circular delegitimized paper money overnight, 40% of American banks failed. But investors in New England’s Suffolk Banking System survived. The parallels to SEC enforcement shocks and China crypto bans reveal timeless portfolio strategies for policy-induced volatility.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-51.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/752afe13-c3d4-4966-b84a-58d55bf12951.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/the-sagix-compound-in-practice-december-2025-portfolio-review/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">The Sagix Compound in practice: December 2025 portfolio review</div><div class="kg-bookmark-description">December 2025 portfolio review: real positions, zero sales, only sacred buying. Six-layer barbell structure designed for 2036, 2046, 2056—not getting rich quick in 2026. See exactly how we practice what we preach.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-44.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/tortoise1-1.jpg" alt=""></div></a></figure>

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="/modern-portfolio-construction-a-multi-asset-approach-for-the-digital-age/"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Modern portfolio construction: A multi-asset approach for the digital age</div><div class="kg-bookmark-description">Integrating Traditional Wisdom with Contemporary Realities</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="/content/images/icon/IMG_6106-7-45.JPG" alt=""><span class="kg-bookmark-author">Sagix Apothecary</span><span class="kg-bookmark-publisher">Sagix</span></div></div><div class="kg-bookmark-thumbnail"><img src="/content/images/thumbnail/71382bd5-a661-45db-b93f-af8593157505-3.jpg" alt=""></div></a></figure>

---

## Disclaimers

**Educational purpose only:** This content is provided exclusively for educational and informational purposes. It should not be construed as investment advice, financial planning guidance, or a solicitation to buy or sell any securities or cryptocurrency tokens.

**Personal portfolio documentation:** The Sagix indices represent documentation of personal investment decisions. They are not investment products, funds, or managed accounts. Readers should not interpret this as a recommendation to replicate these allocations.

**No professional relationship:** This content does not create any professional, advisory, fiduciary, or client relationship between the reader and Sagix Apothecary, its authors, or affiliated entities.

**Risk warning:** All investments carry risk of loss. Cryptocurrency investments are particularly volatile. Past performance does not guarantee future results. You may lose some or all of your invested capital.

**AI-assisted content:** This document was prepared with artificial intelligence assistance. Readers should independently verify any information before making investment decisions.

---
