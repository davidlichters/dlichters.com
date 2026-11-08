<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 18 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/17-validating-and-troubleshooting-tracking.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/19-data-windows.md

## Daily and weekly ad analysis workflow

### Reporting layers: snapshot and funnel

- Split the ad view into two column categories. Snapshot metrics show current performance at one point in time. Funnel metrics show how performance changes as viewers move from awareness to action. [L0008, 2023; L0640, 2023]
- Snapshot columns: ad set name, last significant edit, daily budget, amount spent, result for the chosen objective, cost per result. [L0640, 2023]
- Funnel columns: impressions, CPM, 3-second video plays, hook rate, hold rate, unique CTR, unique clicks, cost per click, adds to cart, purchases, conversion rate, ROAS. Together they show where the funnel wins or loses. [L0640, 2023]
- Ad analysis builds a picture from inference, not from hard rules. Combine several metrics and reason from the evidence instead of judging by one number. Low spend and early data make single metrics especially unreliable. [L0640, 2023]
- ROAS is not a core north-star metric for ad analysis on its own. It summarises return across all user actions and is a major driver of overall profitability. [L0640, 2023]
- Purchases and ROAS matter most. Compare ROAS with break-even ROAS: above break-even is profitable, below is not. Soft metrics (hook rate, hold rate, CTR) are improved only when bottom-of-funnel sales are already profitable, or when weak sales need their cause diagnosed. [L0652, 2023]

### Ads Manager column setup

**Customise the column set**

1. In Ads Manager, open the column menu, scroll down and choose Customize columns. Click Customize columns to add or remove metrics. [L1024, undated]
2. Type the metric name into the search field. If it does not appear, search again with the exact metric name. [L1024, undated]
3. Drag the chosen metrics into funnel order. [L1024, undated]
4. Save the layout as a named preset, named for the store, then click Apply. [L1024, undated]
5. Optional extras: engagement rate ranking, quality ranking, and conversion rate ranking (the last is relevant when the purchase objective is used). [L1024, undated]

**Column order in the reporting view (top of funnel to bottom)**

1. Campaign, Delivery, Asset name, Budget. [L1024, undated]
2. CPM. [L1024, undated]
3. Impressions. [L1024, undated]
4. Reach. [L1024, undated]
5. Hook rate (custom metric). [L1024, undated]
6. Hold rate (custom metric). [L1024, undated]
7. Link clicks. [L1024, undated]
8. CTR (link click-through rate), placed after Hold rate. [L1024, undated]
9. CPC (cost per link click). [L1024, undated]
10. Total content views and Cost per content view. [L1024, undated]
11. Total add to cart and Cost per add to cart. [L1024, undated]
12. Total initiated checkout and Cost per initiated checkout. [L1024, undated]
13. Total purchases and Cost per purchase. [L1024, undated]
14. Purchase conversion value. [L1024, undated]
15. Amount spent. [L1024, undated]
16. Total purchase ROAS. [L1024, undated]

- Columns run from top of funnel to bottom: first ad delivery metrics, then on-site metrics, then checkout and purchase metrics. This order shows where prospects drop out. [L1024, undated]
- Track the higher-intent on-site actions (add to cart, initiate checkout, purchases), each with its total and cost per action. These show where buyers drop out between first click and purchase. [L1024, undated]

**Custom metrics**

- Hook rate: click Create custom metric, name it Hook rate, select format Percentage, use the formula 3-second video plays / impressions. Click Create metric and drag it to the desired column position. [L1024, undated]
- Video Attention (same formula, other name): Columns > Customize columns, click Create custom metric, name it Video Attention, set the format to percentage, and define it as 3-second video plays divided by impressions. [L0644, undated]
- Hold rate: click Create custom metric, name it Hold rate, select format Percentage, use the formula Through-plays / impressions. Place it next to Hook rate. [L1024, undated]

**Columns for reading a test (phone view)**

- Results set to "Website purchases", Cost per result, Amount spent, Budget (shown as "Using ad set budget" or "Daily"), Impressions and CPM (cost per 1,000 impressions), under the "Performance and clicks" column group. [L1124, 2026]
- Columns used for reading a test on a phone view, in the lesson's order: CPC (cost per link click), Link clicks, Adds to cart, Checkouts, Purchases, Cost per add to cart, ROAS (return on ad spend), Frequency, Delivery. [L0348, 2026]

**Required metrics per Meta video ad**

| Metric | Definition |
|---|---|
| Ad name | Identifier |
| Amount spent | Total spend on the ad |
| Amount spent % | Share of total campaign spend |
| Budget | Budget allocated to the ad or ad set |
| Current delivery | Active, Learning, Learning Limited or Off |
| Start date | When the ad began running |
| Impressions | Total impressions |
| Reach | Unique people reached |
| CPM | Cost per 1,000 impressions |
| Link clicks | Total link clicks |
| Cost per unique outbound click | Cost per unique click off-platform |
| Landing page views | Total landing page views |
| Cost per landing page view | Cost per LPV |
| Add to carts | Total add-to-cart events |
| Cost per add to cart | Cost per ATC |
| Checkouts initiated | Total checkout events |
| Cost per checkout | Cost per checkout initiated |
| Purchases | Total purchases |
| Cost per purchase | CPA |
| Purchase value | Total revenue for ROAS |
| ROAS | Return on ad spend |
| Video plays at 25%, 50%, 75%, 100% | Counts of video views at each mark |
| Page | Facebook or Instagram page running the ad |
| Destination link | Landing page URL |

Optional but useful: frequency, CTR, 3-second video views, ThruPlays, and breakdowns by age, gender and placement (Feed, Stories, Reels). [L0613, 2026]

**Visual flags**

- Format the ROAS column with conditional colours (green, yellow or red) by ROAS value. This shows at a glance which campaigns are profitable against break-even. [L1476, 2026]
- Conditional formatting for ROAS targets: add a column for the ROAS target, highlight rows that beat it (raise bids) and rows under the 2.75 threshold (clear dead weight or lower bids). Revenue target cells can turn red when missed and green when hit. [L1236, 2015+]
- Cost per view: with a KPI of 0.05 USD (5 cents) per video view, format cells green at or below 0.05 and yellow at or above 0.05 as a warning. In the example, a cost per view around 3 cents was a good result, and cells above the threshold were flagged for review. [L1236, 2015+]

**Auction data**

- Ads Manager shows auction overlap, audience saturation and auction competition for an audience. These show how much your own ad sets compete for the same people. [L0648, undated]

### Daily snapshot check

- Review profit and loss and ad performance first thing each morning, before working through the task list. Knowing spend and profit before creative work starts keeps daily decisions tied to real numbers. [L1181, 2023]
- Keep a reference document with ad metric guidance and annotated example images for the regular ad review. Turn any review action from that document directly into a task so it is not lost. [L1181, 2023]
- Each day, review cost per add to cart, CTR, CPC, CPM and the engagement rate ranking for each ad. Cut losers early when soft metrics stay weak. Keep an ad running only if its signals improve from day to day. [L1195, 2026]
- Amount spent is the strongest signal of where the platform sees opportunity, so read it before judging. Do not force budget into ads the algorithm is not funding; diagnose why they are not getting spend. Efficiency without scale is a vanity result (for example 10x ROAS on $5 of spend), so look for ads that are both efficient and funded. [L0613, 2026]
- Meta video KPI hierarchy, in priority order:

| Tier | Metrics | Purpose |
|---|---|---|
| 1 Spend signals | Amount spent; amount spent %; budget vs spend; delivery status (Active, Learning, Learning Limited, Inactive); start date | Read the algorithm's allocation |
| 2 Efficiency | ROAS; cost per purchase | Profitability |
| 3 Funnel diagnostics | CPM; cost per unique outbound click; cost per landing page view; cost per add to cart; cost per checkout; conversion rates between stages | Locate where the funnel breaks |
| 4 Creative performance | Video plays at 25%, 50%, 75%, 100%; hook rate, hold rate and drop-off | Attention and engagement |
| 5 Context | Page running the ad; destination link | Background |

[L0613, 2026]

- Build a daily dashboard that combines ad metrics with product margin to show when to scale a winning ad or test new creatives. Mentors can use the same view to find where a brand's bottleneck sits. [L1225, 2025]

### Metrics and targets

- ROAS = Revenue / Ad spend. Example: 14,580 / 456 = 31.97, while the report showed a ROAS of 31. Confirm your sheet uses the same definition and rounding before setting targets. A ROAS target of 20x means revenue should be 20 times the ad spend. [L1236, 2015+]
- Blended ROAS is the right level for judging a campaign, together with product profitability. Low ROAS on a product with few clicks is a sample-size problem, not a verdict. [L0969, 2022]
- Track ROAS and revenue against separate targets, because each can be missed independently. If ROAS is above target but revenue is below, the account is efficient but lacks volume: bid more aggressively and accept lower ROAS to gain sales. If ROAS falls, find the cause by checking which campaigns or ad sets lost efficiency. [L1236, 2015+]
- Compare each campaign's actual cost per sale, ROAS and cost per click with the calculated target values before changing anything. If the campaign performs below target, revise the bid, the price or the conversion rate. If it has room below target, you may be too cautious and can bid more aggressively. [L0686, 2021-22]
- A campaign can be above breakeven and still have room to improve. If CPA is too high relative to the target, work on the funnel: ad creative, average order value and landing page. [L0445, undated]
- When CAC looks poor, the ad with the highest spend is still the main signal of what works, and it should guide the next step. Do not judge the whole account by one weak metric. [L1038, 2026]
- For an awareness campaign without conversion tracking yet, judge performance on video views and cost per view instead of ROAS or revenue, which cannot be measured yet. Set a cost-per-view KPI, such as 0.05 USD, to check whether the cost of views stays in line. [L1236, 2015+]

### Analysis workflow

**Ad analysis workflow, in order**

1. Review snapshot metrics first (daily budget, total spend, results, cost per result) to see if the ad is profitable. [L0067, 2023]
2. Use funnel metrics to pinpoint where the problem is (attention, interest, desire or action stage). [L0067, 2023]
3. Use the ADA framework (named AIDA in [L0640, 2023]): check hook rate (attention), CTR (interest), conversion rate (desire), ROAS (action). [L0067, 2023; L0640, 2023]
4. If a weak area is identified, do a creative review against the checklist. [L0067, 2023]
5. Form a hypothesis about improvement. [L0067, 2023]
6. Create a test ad with a single change, keeping the control. [L0067, 2023]
7. Run it for 3 days minimum. [L0067, 2023]
8. Evaluate lift. [L0067, 2023]

**Protocol for comparing ad sets**

1. Compare interests against each other using funnel metrics, starting at the top of the funnel (hook rate / attention). [L0640, 2023]
2. Move down to interest (CTR), then desire (add to cart, conversion rate) and action (ROAS). [L0640, 2023]
3. Note where each ad set falls behind and focus improvement effort on the weakest stage. [L0640, 2023]

**Meta video analysis, in order**

1. Spend distribution: rank ads by amount spent, compute each share of total, utilisation against budget, spend per day and delivery status. Measure how concentrated spend is in the top 3 ads. Check whether new ads are ramping or starved. [L0613, 2026]
2. Delivery status: count ads by status, the share of spend on Active ads, and why Learning Limited ads are stuck (audience too small, budget too low, or creative underperforming). [L0613, 2026]
3. Ad age: bucket ads and compare performance by bucket. [L0613, 2026]
4. Efficiency: compare ROAS and CPA against targets and segment them. [L0613, 2026]
5. Funnel: build the cost cascade from CPM to cost per purchase and the stage conversion rates, and find the weakest stage per ad. [L0613, 2026]
6. Landing pages: group performance by destination link to see whether a weak page drags down good creative. [L0613, 2026]
7. Creative: compute hook rate, retention between marks and completion; find drop-off points. [L0613, 2026]
8. Identify the one primary constraint. [L0613, 2026]
9. Give next-best-dollar and next-best-week recommendations. [L0613, 2026]
10. Write the executive summary and an ad-by-ad scorecard. [L0613, 2026]

**Required inputs before analysis**

1. Brand name, product, price points, average order value, mechanism, primary audience, problem solved. [L0613, 2026]
2. Campaign objective, bid strategy, cost or bid cap value, optimisation event, total budget and start date. [L0613, 2026]
3. Target ROAS, target CPA, other efficiency targets, break-even ROAS and the current priority (scale, efficiency or both). [L0613, 2026]
4. For each ad: hook in the first 3 seconds, main message or angle, format, talent, offer and CTA, and video length. [L0613, 2026]
5. The metrics table for each ad. [L0613, 2026]

**Final deliverable order**

1. Brand and campaign summary. [L0613, 2026]
2. Spend distribution. [L0613, 2026]
3. Efficiency. [L0613, 2026]
4. Funnel diagnostic. [L0613, 2026]
5. Creative performance. [L0613, 2026]
6. Primary constraint. [L0613, 2026]
7. Next-best-dollar. [L0613, 2026]
8. Next-best-week. [L0613, 2026]
9. One-page executive summary covering performance snapshot against target spend, ROAS and CPA, primary constraint, next-best-dollar with ads and amounts, top 3 priorities, and a 30-day outlook. [L0613, 2026]
10. Ad-by-ad scorecards. Each shows a score out of 100 split into spend signal, efficiency, funnel health and creative performance, a 2-3 sentence diagnosis, a recommendation of SCALE, OPTIMIZE, MONITOR or KILL, and specific actions. [L0613, 2026]

### Reading the funnel

**Stages**

- Read the funnel in three stages: attention (hook rate on the first three seconds), interest (click-through rate), and desire (conversion rate). A weak stage points to where the funnel breaks down. [L0950, 2023]
- Use the AIDA framework to map the funnel: Attention = hook rate, Interest = click-through rate, Desire and Action = conversion rate (add to cart and purchase), and overall result = ROAS. Check the stages in order to find the weakest point. [L0640, 2023]
- A high hook rate only shows that viewers pay attention. It does not prove that the traffic will buy. A lower hook rate can still convert well if the audience is the right one, so always read hook rate together with CTR and conversion rate. [L0950, 2023]
- Judge a product first by hook rate (look rate) and CTR on ads. If both are low, change the creatives or accept that the product does not attract interest. [L1108, 2023]
- Ad performance is judged first by CTR, CPM and CPC. Only if these look healthy should the store and funnel be analysed for weak points. [L1131, 2018+]

**Metric combinations**

- Strong attention + interest + desire = strong ROAS. [L0258, undated]
- Strong attention + interest + weak desire = normal ROAS. Suspect an ad-landing-page mismatch, technical problems, high shipping costs, low trust or high price. [L0258, undated]
- Weak attention + good interest + good desire = test new hooks, because the problem is not painful enough. [L0258, undated]
- Strong attention + weak interest + good desire = test messaging in the ad middle section or refine targeting. [L0258, undated]
- CTR and CPC good, but people rarely add to cart or conversion rate is very low: the ad is working, and the store or landing page is the problem. The fix is store messaging, offer or a more educational page, not a new ad. [L1131, 2018+]
- Hook rate and CTR good but sales missing: the problem is usually the store. Keep working on the store before dropping the product. [L1108, 2023]
- CTR and CPC look good but sales are missing: the problem is usually the store, not the ad. Fix the website and offer first, then judge the product by ROAS. [L1173, undated]
- Strong CTR but no sales: the offer is usually the problem and should be changed before the ads are changed. [L1469, 2023+]
- On TikTok, a CPM of about $5 to $7 is acceptable. If CPM is fine but CTR is low, the problem sits at the creative level. Use CPM, CPC and CTR together to find which part of the funnel fails. [L1377, 2022+]

**Creative and iteration**

- When iterating ads: if an ad runs acceptably with one or two improvable elements, replace only those specific elements. If it performs poorly overall, test a completely new concept. [L0258, undated]
- In video retention, a large drop before the 25% mark points to a hook problem. A large drop between 25% and 50% points to weak middle content. A large drop between 50% and 75% points to a problem in the pitch or offer. Strong retention through 75% combined with low completion points to a weak call to action. [L0613, 2026]

**Sessions and sales**

- Read sessions and sales for the same date range together. If sessions rise sharply (for example from about 50 to 100-120 per day) while sales fall to zero, the traffic or the page has a problem. The rise in sessions is not a success signal. [L0950, 2023]
- Check whether certain weekdays consistently convert worse for the store before judging a test by one day. One operator found Wednesdays were weak for revenue, so tests should run across several days. [L1315, 2023]

### Diagnosing the primary constraint

**Mindset**

- Identify the one primary constraint. More budget does not fix a creative constraint, and more creative does not fix a funnel constraint. [L0613, 2026]
- Treat creative as the main lever after Andromeda, and let the platform handle targeting, bidding and budget allocation. [L0613, 2026]
- Diagnose the one constraint that blocks scale and focus there; the others are secondary. [L0613, 2026]
- More creative does not fix a funnel constraint, and more budget does not fix a creative constraint. Choose the constraint from the symptoms below. [L0613, 2026]

**Constraint table**

| Constraint | Symptoms | Next best dollar | Next best week |
|---|---|---|---|
| 1 Creative | More than 60% of spend in top 2 ads; new ads get no spend; fatigue on winners (rising frequency, falling ROAS); low hook rates; several Learning Limited ads | Invest in creative development, not budget | Make new variations of winners |
| 2 Efficiency (funnel leak) | Spend available; ROAS below or CPA above target; clear drop at one stage; good attention but poor conversion | Fix the broken stage, not more ads | Landing page, checkout flow or offer restructuring |
| 3 Scale ceiling | Ads hit targets but spend is capped; frequency above 3.0; small reach; Learning Limited from small audience | Expand the audience, not more of the same | Broaden targeting, test placements, build angles for adjacent audiences |
| 4 Budget pacing | Ads underspend; delivery issues; bid or cost caps limit delivery | Do not add budget; fix delivery | Review bid strategy, loosen cost caps, check audience overlap |
| 5 Offer or market | Several concepts tested with none performing; good engagement but poor conversion; funnel rates reasonable but CPA high; high CPM everywhere | Test different offers, not more creative | Offer development, pricing strategy, product positioning |

[L0613, 2026]

**Next-best-week output**

1. A priority table with focus area, expected impact, effort in hours and timeline (immediate, this week). [L0613, 2026]
2. Next 24-48 hours: a kill list with rationale, a scale list with percentage increases, and a monitor list with triggers. [L0613, 2026]
3. This week's focus by constraint. For creative: winning patterns, tests and number of new concepts. For efficiency: the funnel stage to fix, changes and test approach. For scale: audience expansions, placement tests and new angles. [L0613, 2026]
4. If creative is the constraint, a brief with winning patterns, elements to keep, elements to avoid, and tests with hypotheses. [L0613, 2026]

**Ad age buckets**

| Age | Stage |
|---|---|
| 0-7 days | Learning |
| 8-14 days | Should be optimised |
| 15-30 days | Watch for fatigue |
| 31-60 days | Fatigue likely |
| 60+ days | Fatigue certain |

[L0613, 2026]

**Scaling and priority**

- Apply the 80/20 principle: roughly 80 percent of results come from 20 percent of efforts. Use ad data to find the products and pages that matter, then focus optimisation there. [L0968, 2021]


Part 18 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/17-validating-and-troubleshooting-tracking.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/19-data-windows.md
