<!-- part of ops/playbook-full.md -->
Part 3 of 3 of "Porchnap Playbook (complete, with every rule ID and course source)". Map of all parts: https://dlichters.com/ai/ops/playbook-full.md · Previous: https://dlichters.com/ai/ops/playbook-full/02-7-part-d-fixed-number-rules.md

## 10. Part F: product test and kill rules (rules 1 to 21)

Every rule cites an Course D 2026 lesson (L-number = lesson in the course transcript). Numbers in these rules are course benchmarks, not our measurements. Where two lessons contradict, the contradiction is stated rather than an invented middle.

### F.A Setting up the test

1. **One product, one campaign, one own pixel.** Create the pixel in the Shopify "Meta" app, name = date + product; check in Shopify that exactly this pixel is connected. Source L077 [00:00 to 02:36], L080 [00:28].
2. **Campaign: manual Sales campaign, CBO, objective Purchase, broad.** Course countries: USA, UK, Australia, New Zealand, Canada; do not narrow the audience; name = date + product + "cbo". L077 [03:31 to 05:18]. **For Porchnap USA only** (30 Sep, course checklist 09): Markets and shipping only United States; the other four countries would buy clicks that cannot order.
3. **Test budget: at least 50 USD per day, better 100 to 150.** L077 says 50 minimum and 150 for faster confirmation; L079 shows a winner at 100 USD CBO with three ad sets; L080 recommends 50. For us: 50 standard, 100 only with a strong prior signal. Porchnap launch budget (David 3 Oct 19:35, per course): warm up day 1 and 2, from day 3 up to 3 campaigns at 50 USD each, one concept each; the 200 USD/day from 15:10 is struck.
4. **10 to 15 creatives per test, minimum.** Plus 2 primary texts and 2 headlines (best 2 of 5 AI suggestions), CTA "Shop now", format "flexible". L077 [06:48 to 09:02].
5. **Target margin before testing: about 20 USD gross profit per unit.** Rule of thumb: buy at 10 USD, sell at least at 30 USD; break-even CPA then about 20 USD. L079 [03:02 to 03:30].

### F.B Reading and kill rules

6. **Do not switch off after day 1.** Judge after 3 days of spend without touching anything. Course example: day 1 CPA 104 USD, day 2 a quarter of that, day 3 CPA 15 USD at break-even 20 to 21 USD. L079 [01:40 to 03:56], L080 [00:28 to 01:00]. Caution: that is a single case, not a denominator.
7. **Metric limits after 24 hours (course values):** CPC around 1 USD good, from 2 USD bad. Link CTR target 3 to 7 %; 2.2 to 2.4 % means run one more day. CPM: lower is better; about 50 USD counted as "decent" and rises over time. L080 [01:00 to 04:14].
8. **Remedy per metric:** bad CPC or CPM: broader countries (top 5) and better hooks. Bad CTR: only better hooks. L080 [01:34 to 04:14].
9. **Add-to-cart saves a bad day.** CPC, CPM and CTR bad but there are add-to-carts: run one more day. Add-to-cart without purchases: first test the checkout yourself (course case: broken button), then compare the offer to competitors. L080 [04:14 to 05:18].
   - Numbers for rule 9 (Perplexity triple answer 8 Oct 2026): for our exact cohort (Shopify, one product around 70 USD, cold Meta traffic, first 14 days) no proven industry value exists, only planning targets. Working corridor from the first ad day: add-to-cart rate (cart sessions / product-page sessions) 5 to 8 %, checkout-start rate 2.5 to 4 %, conversion rate 0.5 to 1.5 % as cautious budget assumption, 1 to 2 % as a positive signal (not validation). Below the corridor check tracking and checkout first, do not condemn the product immediately. Daily log columns: date, campaign, ad set, ad, device, country, product sessions, cart sessions, checkout sessions, purchase sessions, orders, ad cost, contribution before ads, tracking status. [RATE]
10. **Daily report every 24 hours, day 1 to 3 mandatory.** Per the course leader, students who do not show daily numbers regularly lose over 100 USD that an early kill would have saved. After every test day one row: spend, clicks, CPC, CTR, add-to-carts, purchases, CPA vs break-even. L081 [00:00 to 01:29].
11. **Before the test check the Meta Ad Library; skip if 2 to 3 competitors run the same creatives.** Identical creatives on many accounts drive CPC and CPM up and bring DMCA reports up to account bans. Structure: one ad set = one concept (one promise, one audience), 3 to 5 creatives inside; at most 2 CBO campaigns at once (ripped creatives and own creatives). ABO only from about 80 to 100 website purchases. Fits rule 4: 10 to 15 creatives = 3 concepts x 3 to 5. L098 [02:14 to 03:12], [03:37 to 04:27], [06:23 to 07:40], [19:09 to 19:34].
12. **Decide on day 3, not before.** Report daily (rule 10) but cut only after at least 3 days: read website purchases and ROAS, then continue or cut. Cut when CPA is above the limit AND the ad library is saturated. Course CPA limit: at a 40 USD sale price at most 15 to 18 USD, i.e. about 40 to 45 % of price. Own creatives only once a ripped creative carries 75 to 100 USD/day stably for 3 to 5 days. L098 [26:16 to 26:39] ("do not cut so fast ... test at least three days"), [27:27 to 27:51], [24:36 to 25:00], [08:08 to 08:38].
   - Denominator for rule 12 (Perplexity 29 Sep): Meta names no minimum; the "50 results per week" concern the ad set learning phase. With 3 purchases the true CPA lies (95 % Poisson model) between 0.34x and 4.85x the measured value; with 10 purchases 0.54x to 2.09x. Consequence: on day 3 only cut if the CPA is above break-even even at the favourable edge of the interval; scale only from 25 purchases per variant. [WAHRSCHEINLICH, model calculation, not Meta]
   - Q4 cap per single ad (Perplexity triple deep, 29 Sep): money cap before calendar. At target CPA = break-even 47.01: a single ad with no attributed purchase is paused at **94.02 USD** spend (2 x CPA, source Zentric); with a pre-noted exception (outbound CTR and cart/checkout cost plausible, tracking checked) at most up to **141.03 USD** (3 x CPA, sources Spark/GrowwithBA). At 1 x CPA (47.01) without purchase only check checkout and pixel, do not stop. Rising CPM alone is no reason to pause or raise the target CPA (Meta help 1364841787225722). After a pause no automatic restart; first read lagging attribution (7-day click). The 173.41 USD limit stays for the whole main ad set (product verdict); 94.02/141.03 apply to a single ad inside it. [WAHRSCHEINLICH]
   - Cross-check 8 Oct 2026 (independent new research, 75 sources, without knowledge of our values): same range, 2 to 3 x target CPA = 94 to 141 USD per single ad as published practitioner rule (LeadEnforce 17 Dec 2025, AdManage 21 Jan 2026, Coinis 16 Mar 2026, True Margin 12 Mar 2026); 1 x CPA only as check point. Confirmed unchanged.
   - Where 173.41 comes from: with 0 purchases, a product verdict needs spend = break-even CPA x 3.689 (Poisson 95 %: probability of 0 purchases at true CPA = break-even falls below 2.5 %), at 47.01 that is 173.41 USD in the main ad set. Ad sets with 6.25 USD/day never reach it.
   - Two further statistical traps (30 Sep): "2 x target CPA without purchase" switches off a usable ad set with true CPA = target in 13.5 % of cases; "kill above 47.01 on day 3" at 50 USD/day cuts an ad set with true CPA 33 after 150 USD spend in 33.5 % of cases. Always switch off by spend threshold per purchase count, never by a CPA from few purchases. Always compute the false-kill rate before setting a cut line.

### F.C Scaling: see Part G (the course judge's binding version).

### Resolved contradiction (via L098)

Rule 6 (3 days hands off) vs rule 10 (early kill saves money): L098 [26:16] sides with rule 6. The daily report from rule 10 is for finding faults (broken checkout, wrong pixel, rule 9), not for killing. The only exception before day 3 is a technical fault: add-to-cart without purchases means test the checkout yourself (L080 [04:14 to 05:18]). The earlier interim rule (kill at 2x break-even CPA without add-to-cart) is struck.

Still open number difference: rule 5 puts break-even CPA at a 30 USD price at about 20 USD (67 %); L098 puts the limit at a 40 USD price at 15 to 18 USD (40 to 45 %). For kill decisions the stricter L098 limit is the target, rule 5's break-even the hard floor of loss.

### Kill check, one row per test day

Break-even CPA = sale price minus purchase cost minus shipping minus fees. Target CPA = 40 to 45 % of price (L098). Course comparison values: CPC around 1 USD good, from 2 bad; link CTR 3 to 7 %, below 2.2 % bad.

| Day | Spend | CPC | Link CTR | ATC | Purchases | CPA | vs break-even / target | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | | | check faults only (pixel, checkout), touch nothing |
| 2 | | | | | | | | check faults only; ATC without purchase: test checkout yourself |
| 3 | | | | | | | | continue, new hooks, or cut (rule 12) |

Numbers per row from the ad account with date, next to the Shopify orders of the same period.

### F.D Account protection and measurement (course checklist 09, 30 Sep 2026)

14. **One device, one connection for Meta.** Log in to Meta only from one PC, always the same IP, no VPN, no second login from phone or another computer. Do not re-add payment methods repeatedly; if something fails, wait an hour, do not retry at once. Course: "always use the same device and ip address", "logging with a vpn logging in with multiple devices do not add your payment methods repeatedly", "if it doesn't work just wait like an hour before trying again" [00:00], [00:40], CD26 Regeln. Fits our rule: never press the same button twice in a row in Meta (David, 29 Sep: Meta bans ad accounts when the same thing is pressed twice in a row).
15. **After changing business settings wait 1 to 2 hours before an ad starts; on launch day change only what must change.** Course: "don't edit your business settings too much too early", "when you edit something in your business profile you gotta wait like one to two hours" [00:40], [01:15].
16. **Attribution 7-day click + 1-day engage-through, no view-through, set before publishing.** Afterwards only via duplicate. CE26 Attribution [04:51], [08:35].
17. **New pixel when changing niche.** "You should never change a pixel unless you're changing niche." [28:31] and "But if you're doing a different niche, then 100% you need to change it." [30:39], CD26 Whitelist. Children's books to dog bed is a niche change. Afterwards keep the pixel as long as the niche stays dog (also for a second dog product). If 3 to 5 products in a row fail on the same pixel, make a new one anyway ("every three to five tests You create new pixel" [15:32], CD26 CBO).
18. **Read frequency; from 2.5 to 4 an ad fatigues.** "normally you go from 2.5 onwards to four" [01:50], CD26 Spalten. Frequency = impressions / reach. From 2.5 in the main ad set the next concept from the test lane comes forward, not more budget.

### F.E Payment risk (decided 9 Oct 2026 from Perplexity triple research 8 Oct)

19. **Treat no published ban rate as protection.** Shopify Payments and Stripe publish no general chargeback rate that triggers an automatic block; they also assess risk below any card-network threshold. Scale only after proven adherence to the promised total delivery time (6 to 10 business days), and use own stricter warning thresholds.
20. **Own warning thresholds (planning values, no provider promise):** measure pure chargeback rate and Shopify dispute rate separately; from 0.30 % start a cause analysis; from 0.40 % no further volume scaling; from 0.50 % also check pausing affected products, suppliers and campaigns; keep Visa VAMP separately below 0.50 %. Basis: own planning from the Shopify, Stripe, Visa VAMP and Mastercard ECP programs.
21. **Keep communication honest.** Product page, shipping page and checkout show the same total delivery time; shipping origin (China) is not hidden; delays at the supplier are proactively reported to customers. That lowers disputes more directly than any account-protection trick.

**Contradictions between courses, decided:** link CTR: rule 7 says 3 to 7 % target (L080), the research-prompts lesson calls 1.5 to 2.5 % "good" and above 2.5 % "excellent". We keep 2.2 % as warning threshold; 3 % is a wish, not the yardstick. Scaling: old rule 13 doubled up to 500 USD (Course C); course 09 says "15 20 would be perfect" [44:19] CE26 Office and "$75 bump $150 -> 300 -> 500" [02:49] CD26 Meta101. For the main CBO the rule "+20 % after 20 purchases and 72 h" applied; rule 13 applies in the course judge's version (Part G).

## 11. Part G: scaling, binding version (course judge, 3 Oct 2026 23:27)

Rule 13, verdict CHANGE (David 21:20: yes/no is decided by the course judge). Where older text says otherwise, this box applies. Timo's bump ladder (section 2, 4 Oct) was added later and is stricter on ROAS; when both apply, use the stricter condition of each.

1. **Start by data, not calendar:** raise only when the campaign has at least 6 purchases in the step, P&L green on 2 days in a row, and 48 h since the last change (D11).
2. **Release from CPA at most 37.61 USD.** 47.01 is the break-even and only a brake: CPA above 47.01 on 2 days in a row means one step back and hold 48 h (D14).
3. **Fixed steps:** 50 > 75 > 150 > 300 > 500 USD/day, after that +15 to 20 % every 48 to 72 h, never daily (D12). Double only when CPA is far below 37.61 (about below 30) and the profit test D13 rises; otherwise +15 to 20 %.
4. **Brakes stay:** cash at least 6.3 x next daily budget; under 6 purchases in the step extend 48 h; after the order cutoff no raise. The main-CBO rule (+20 % after 20 purchases and 72 h) still applies where it is stricter.
5. **Money limit:** released were at most 3 x 50 = 150 USD/day (David 19:35). Any step above 150 USD/day needs a yes from David. Every raise is pressed by Timo (money).
6. **Effective only from the first measured number** (from day 3 with data).
- Course sources in the verdict: CD26 CBO [06:58], [07:36]; CE26 Office (Mentor Office Hours Jan 8th) [44:19]. 37.61, 6 purchases and 6.3x are playbook rules (D11), not lessons.

**Older proposal (30 Sep), kept only as derivation:** double up to 500 USD/day, then +20 % every 48 h; course quote "i basically uh double the budget for cbo campaigns till the budget is 500 and after that i increase the budget by 20 percent only" [06:06] (CC23 BFCM); "if you have three winning cbo campaigns test it only inside like one" and "20 increment is a safe" [06:06]; "you can increase it by 20 after every 48 hours ... if it's consistently profitable ... above your break-even roas" [09:15] (Course C, scaling level 2 and 3). The 48-h pace also for doubling was our setting [RATE]. Brakes checked in this order at each 48-h reading: (a) CPA above 47.01: one step back, hold 48 h; (b) CPA above 40 after a doubling: no more doubling, only +20 %; (c) cash below 6.3 x next daily budget: do not raise however good the CPA (formula: payout delay about 4 days [RATE]); (d) fewer than 6 purchases in the step: not readable, extend 48 h; (e) after the order cutoff no raise for the bed.

**Worked ladder from launch day 4, CPA constant at 33 USD [inputs RATE, computed with Python on 30 Sep], profit 14.01 USD per bed:**

| Day | Budget USD/day | Purchases/day | Profit/day USD | Cash needed USD (6.3 x budget) |
| --- | --- | --- | --- | --- |
| 4 | 100 | 3.0 | 42 | 630 |
| 6 | 200 | 6.1 | 85 | 1,260 |
| 8 | 400 | 12.1 | 170 | 2,520 |
| 10 | 500 | 15.2 | 212 | 3,150 |
| 12 | 600 | 18.2 | 255 | 3,780 |
| 14 | 720 | 21.8 | 306 | 4,536 |
| 16 | 864 | 26.2 | 367 | 5,443 |
| 18 | 1,037 | 31.4 | 440 | 6,532 |
| 20 | 1,244 | 37.7 | 528 | 7,838 |
| 22 | 1,493 | 45.2 | 634 | 9,406 |
| 24 | 1,792 | 54.3 | 761 | 11,287 |
| 28 | 2,580 | 78.2 | 1,095 | 16,253 |
| 32 | 3,715 | 112.6 | 1,577 | 23,405 |
| 34 | 4,458 | 135.1 | 1,893 | 28,086 |
| from 36 | cap 5,115 | 155 | 2,172 | 32,225 |

Two honest limits: with about 10,000 USD of cash the ladder ends at brake (c) around 1,587 USD/day (day 22). And CPA does not stay flat while scaling: at +8.7 % CPA per doubling [RATE] the ladder only gets to 400 to 750 USD/day before brake (a) fires. The ladder squeezes the maximum out of a winner; it does not turn one bed into 200,000 USD.

- **Advantage+ Shopping:** only from 400 website purchases on the pixel, as a third stage next to the CBO, never as a replacement (Course C scaling level 2/3 [41:23], 2023 video; re-check the click path before use). Old store purchases (books) do not count.
- **Measuring a step:** CPA per step from Ads Manager (column "cost per result", period exactly the 48 h of the step), next to Shopify orders of the same period; readable from the 200 USD step (about 12 purchases per 48 h).
- **Meta account spending limit is a lifetime cap from the moment it is set, not a daily limit** (Meta help 141820733085330): 600 USD at 200 USD/day is gone after about 3 days, then everything pauses while Ads Manager still shows it active. Before setting any limit, state when and by whom it is reset.
- **Meta may spend up to 1.75x the daily budget on a single day** (lesson example: 500 USD budget, "Your maximum daily spend is $875" [07:30], CE26 Kampagnen); budgets run in the ad account's time zone [15:18].

## 12. Course abbreviations and lesson titles

- **CD26** = Course D, 2026 (main course). **CE26** = Course E, 2026 (Q4 is a live call from December 2025). **CC23, WF22** = Course C, recorded 2023 or 2022 per file name.
- CD26 titles: Angebote = Creating and testing offers for higher AOV; Apps = Shopify apps for basic store equipment; BM = Setting up Facebook Business Manager and Meta ad account; BOF = Bottom-of-funnel ads (test cheaply, scale with videos); CBO = CBO and ABO campaign setup; Chargeback = Avoiding chargebacks and reserve payouts; Checkliste = Shopify store checklist before launch; Fehler = 10 beginner mistakes in e-commerce; Form = The daily accountability form; Kennzahlen = Metrics deep dive; Konzepte = Analysing competitor ads; Lieferant = Using private suppliers for fulfilment; Marge70 = Product price calculation for 70 % margin; Messaging = Messaging, testing and scaling; Meta101 = Meta ads for beginners; Paper = Paper-handing in Facebook ads; PixelBM = Connecting Meta pixel with Business Manager; PixelShop = Connecting Meta pixel and ad account with Shopify; PL = P&L sheet for profit tracking; Preis = Pricing strategy and bundle structures; Produkttest = Product testing: messaging before demand; Regeln = Important rules for Meta ads setup; Report = Daily reporting; Roadmap = 90-day roadmap for dropshipping; Setup = Setting up a Shopify store from scratch; Skalieren = Why you are not scaling; Socks = Case study Cozy Socks; Spalten = Setting up Meta columns; Upsell = Post-purchase upsell; Validierung = Product validation with brand tracker; Warmup = Engagement ad for warm-up; Whitelist = Whitelist pages; Woche1 = The first week: 7-day checklist; Calo = a case-study lesson on scaling; L077 = Product test setup (Meta pixel, campaign and creatives); L079, L080, L081 = product test reading and daily report lessons; L098 = Product testing: messaging before demand (long version).
- CE26 titles: Angebote = Double revenue with offers; Attribution = Meta attribution updates March 2026; CSAT = Measuring and improving CSAT; Disputes = Resolving chargebacks and disputes via Shopify, PayPal and others; Funnel = Daily D2C funnel tracker; Kampagnen = Building campaigns from scratch (complete guide); Office = Mentor office hours; Oodie = 7 quick CRO wins from the Oodie; Q4 = Q4 scaling (offers, landing pages, live coaching); Shrine = Shrine theme product pages and policies; Spalten = Custom columns in Ads Manager.
- CC23 titles: BF = Black Friday (lead gen, emails and aggressive budget scaling); BFCM = BFCM Q&A (Facebook scaling, supplier management, holiday strategy); George = George Q&A; StoreConv = Analysing and fixing store conversion (27 Jan 2023); Experten = expert scaling call. WF22: TikTokBF = Black Friday and Christmas sales with TikTok ads.
- The full course transcripts are summarised under [ecom/](https://dlichters.com/ai/ecom/index.md) on this site.


Part 3 of 3 of "Porchnap Playbook (complete, with every rule ID and course source)". Map of all parts: https://dlichters.com/ai/ops/playbook-full.md · Previous: https://dlichters.com/ai/ops/playbook-full/02-7-part-d-fixed-number-rules.md
