<!-- part of ecom/deep/25-full-audit-details.md -->
Part 19 of 22 of "25. Full audit details: every course specific missing from chapters 01 to 24, by chapter". Map of all parts: https://dlichters.com/ai/ecom/deep/25-full-audit-details.md · Previous: https://dlichters.com/ai/ecom/deep/25-full-audit-details/18-legal-tax-banking-and-payments.md · Next: https://dlichters.com/ai/ecom/deep/25-full-audit-details/20-scaling-team-and-processes.md

## 19. Metrics Finance and Tracking

Main chapter: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md

### 3 Optionen zum Start und die Frage "Wie viel ist genug?" (Course B) [L0107, 2021-22]

- [10:50] Next-step mapping by need: if you need your numbers: get bookkeeping (you need the three financial reports, no way around it); if you need cash management: start Profit First; if you need scale: do strategic planning.
- [01:48] Scaling with Profit First/strategic planning is safer because staff pay is pre-funded by cash already in the bank, not by numbers on a spreadsheet; teams built without such a framework crash when times get tough.
- [02:19-04:17] "How much is enough?" is called the wrong question: focus on meaningful actions and habits, not a revenue result. Recommended book: "The Slight Edge" by Jeff Olson (small actions compound over time; meaningful action repeated = growth, no action = decline).
- [06:01] Example: after six months of running every day you will be a stronger runner; habits change who you are (e.g. ending up running a marathon).
- [07:56-08:49] Most fulfilment comes from work higher up the accountability chart; getting there requires building a team; team growth and revenue growth then form a self-reinforcing cycle. Scale is a byproduct of doing meaningful work. Scaling is not more work than running everything yourself (customer service, orders, product uploads, marketing).
- [11:27] The teacher's firm Summit eCommerce Advisors: done-for-you bookkeeping working only with e-commerce businesses, many drop shippers; claims to be the only bookkeeping firm built for e-commerce by an e-commerce business owner (teacher's own claim, sales pitch).
- [14:23] Teacher's own first hired bookkeeper produced books that were expensive and time-consuming to fix; "disaster books" sometimes must be scrapped and redone from scratch.
- [16:12] Assignment: decide on your next step (bookkeeping, Profit First or strategic planning) and take action now.

### AI-CFO für Finanzen mit Claude Cowork und VS Code (Course E) [L0218, 2025-26]

- [00:28] A business under 1 million dollars that is "really, really simple" probably does not need the complicated Stage 2 setup; it should still do Stage 1 (AI-built P&L from actuals). (2026)
- [06:07] The teacher's first Cowork run used only two months of transactions ("because I was scared") before extending to six months. (2026)
- [09:04] In the first Cowork stage Claude asks for classifications, may pick up things the accountant is booking wrongly, and splits Meta ads from Google ads automatically. If forecast/variance columns look too complicated, tell Cowork "delete the forecast line, delete the variance line". (2026)
- [09:50] Asking Cowork to forecast 2026 (another 12 months, hiring plans, every line filled) is too much for Cowork; that is the reason to move to Claude Code. (2026)
- [10:00-10:50] Do not use the "Code" section inside the Claude desktop app for this: files get confusing, sessions sometimes do not save; use Claude Code inside VS Code instead. (2026)
- [15:36] Claude Code asks for permission before every file write (e.g. writing CFO_DECISION_LOG.md); keep these permission prompts on at the start to see what it does; turn them off later only once it is sandboxed. (2026)
- [16:23] In VS Code the Explorer just shows the project folder: add files by dragging them into the folder you created (e.g. in Documents), then reference them in chat. (2026)
- [13:49 screen] CFO MD prompt mission: "protect gross margin, track every ad dollar, and make sure cash never runs out, especially across inventory cycles". Onboarding: introduce itself in one sentence, ask all questions in one message, create CFO_DECISION_LOG.md and MEMORY.md, scan folder into DATA_INVENTORY.md with a one-line description per file, then say what to drop in first. Trigger: onboarding runs if CFO_DECISION_LOG.md does not exist. (2026)
- [18:00 screen] After onboarding the AI CFO asks for the Xero P&L export as .xlsx or .csv, "last 12 months if you have it", and on arrival flags formatting issues, surfaces top insights and uses it as baseline for the 12-month forecast. (2026)
- [18:07] Example questions for the AI CFO: compensation structures, "am I paying too much in marketing?", what happens if MER changes / ROAS efficiency increases. (2026)

### AI Report Card - Einführung und Ausfüllung (Course E) [L0222, 2025-26]

- [08:45] Business operating expenses section counts only fixed expenses: costs that stay stationary while revenue fluctuates and are not directly correlated with revenue going up or down (salaries, rent, warehouse, subscriptions such as Shopify, Klaviyo). Enter them per month (30-day basis); the sheet multiplies by 3 for the 90-day total. (2026)
- [08:41 screen] Example OPEX block in the template: employees Owner $10,000, Ops Manager $6,000, Customer Service $500, Creative Strategist (total salaries $17,000); agencies/freelancers retainers $1,500 (email) + $3,000 (Google) = $4,500; software (Klaviyo $1,200, Shopify $300, Gorgias $100, Superfiliate, Slack, QuickBooks $60 ..., total $2,560); general bills rent $800, phone $120, insurance $240 = $1,160; MONTH TOTAL $25,220, 90 DAY TOTAL $75,660 (about $25,000 monthly OPEX to match the demo revenue). Delete or add rows to match your own monthly OPEX. (2026)
- [07:42] Tax obligation equals taxes collected and is treated as a negative: the money is collected for the government and not counted as revenue. (2026)
- [09:39] Questions go to the forum; DMA Plus members can book a one-on-one to get the report card filled in together. (2026)
- [05:33-05:39] Demo ad spend inputs: Facebook spend about $300,000 and Google spend $100,000 for the 90-day window. (2026)

### Attribution und Tracking-Probleme im E-Commerce (Course A) [L0257, 2020-26]

- [04:02] In an aged Shopify store, about 3% of revenue (source number nine) was attributed to "Shopify" as a traffic source, because the link broke during checkout.
- [04:48] Last-click attribution credits whatever the visitor did within roughly the last five minutes on the site before converting. Example: an ad click or YouTube view on Monday, then an email conversion on Wednesday, shows up as email.

### Deckungsbeitrag-Rechner für neue Kunden (Course E) [L0433, 2025-26]

- [11:01]/[12:07] On-screen discrepancy: the sheet cell for the 15% contribution-margin target shows a required ROAS of 2.48 (formula =E3/(E19-(E5*D29))), and the speaker first says "I need to hit a 2.48", then corrects the formula (E5 should be E3) and arrives at 2.52. The 2.48 vs 2.52 difference comes from referencing the post-tax AOV cell (E5) instead of the tax-inclusive AOV (E3) in the "amount to keep" part.
- [13:40] If you are below benchmark on profitability at $5,000 a month, it gets much harder at $100,000 a month because everything becomes more expensive.

### Deine Kennzahlen verstehen: KPIs und Rentabilität (Course C) [L0445, undated]

- [02:34] The teacher names the free tool as "[Course C website] slash dropshipping calculator" (inputs: COGS = product + shipping, and selling price; output: breakeven ROAS).
- [10:34] Teacher's rule: recommends 3x margins so there is room for ads, apps, hired people and processing fees; therefore "ideally a break-even ROAS of 1.6 or less", because at scale with Facebook/TikTok ads you typically hit ROAS 2-2.5.
- [14:47] Profitability tracker columns: revenue, refunds, COGS (cost of goods + shipping), cost of ads, processing fees, Shopify fees; "if you are not using Shopify Payments, extra 1% fees".
- [07:35-08:31] CPA/AOV use: a high CPA means improve the funnel (ads, higher average order value) even when above break-even ROAS; AOV should be raised for better margins; add-to-cart % shows how well the landing page and the offer work.

### Deine Zahlen kennen: Warum es kritisch ist (Course B) [L0449, 2021-22]

- [04:55-05:18] Instructor B1's own firm: mission "to double the profits of 1,000 e-commerce companies"; offers bookkeeping/financial services, a coaching program for teams and systems, and virtual summits.
- [03:42-04:35] Background numbers: high-ticket dropshipping since 2014; first store (Super RC Shop, remote-controlled cars/trucks/drones) failed; second store Aria Chairs sold in 2019; sale first suggested by John.
- [10:51] Story ending: listed on Empire Flippers, the store "took off like a rocket the month" it was listed (while the revenue decline had been a false alarm).

### Die drei Berichte, die du brauchst (Course B) [L0484, 2021-22]

- [18:29] The speaker contrasts the "negative cashflow pattern" of service businesses (pay the team first, get paid on 30-day terms) with the dropshipping "positive cashflow pattern": order, charge card, payout, then order from the supplier, who is usually paid at shipment, often on a credit card with 30 days before payoff.
- [22:46] Anecdote with numbers: the speaker's first $25,000 in the bank was $10,000 a week later (cash-wave lesson: keep a level head).

Part 19 of 22 of "25. Full audit details: every course specific missing from chapters 01 to 24, by chapter". Map of all parts: https://dlichters.com/ai/ecom/deep/25-full-audit-details.md · Previous: https://dlichters.com/ai/ecom/deep/25-full-audit-details/18-legal-tax-banking-and-payments.md · Next: https://dlichters.com/ai/ecom/deep/25-full-audit-details/20-scaling-team-and-processes.md
