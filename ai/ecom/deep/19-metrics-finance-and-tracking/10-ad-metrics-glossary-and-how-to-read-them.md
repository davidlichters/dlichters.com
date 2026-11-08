<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 10 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/09-traffic-conversion-and-funnel-math-for-planning.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/11-benchmarks-meta.md

## Ad metrics glossary and how to read them

### Delivery: impressions, reach, frequency and CPM

- **Reach** is the total number of unique people who have seen the ad. **Impressions** is the total number of times the ad was shown, so one person seeing it twice counts as two impressions. [L0290, 2025-26]
- Impressions count every display, including several to the same person across placements such as Facebook and Instagram. Reach counts only unique Meta accounts, so four impressions to one person equal one reach. [L1024, undated]
- **Frequency = Impressions ÷ Reach**, showing how many times the average person saw the ad. A value of 1.2 means each person saw the ad about 1.2 times on average. [L0290, 2025-26; L0950, 2023]
  - Example: 2,017,463 ÷ 862,845 = 2.34. [L0797, 2025-26]
- Frequency checks:
  - A frequency above 2 means the same ad is shown too often and may tire. Watch it closely, especially with image ads that are cheap per click and served repeatedly. [L0950, 2023]
  - In longer-running campaigns, frequency normally rises from about 2.5 to about 4. The expected range depends on how long the ad has been live. [L1030, 2026]
  - Top-of-funnel frequency is about 1.03 to 1.2. Low frequency does not rule out fatigue. [L0398, 2023+]
  - Reading the two figures together: treat 2 as the point to check the ad. In a campaign that has run for a while, a frequency of 2.5 to 4 is normal drift, so judge it against campaign age. [L0950, 2023; L1030, 2026]
- **CPM (cost per thousand impressions)** is what you pay for 1,000 ad impressions across all placements. It is your cost of advertising. [L0290, 2025-26; L1024, undated]
  - Formula: CPM = (ad spend ÷ impressions) × 1,000. [L0874, 2026; L1021, 2026; L1259, undated]
  - Example: $50 spent over 1,500 impressions gives a CPM of about $33.33. [L0874, 2026]
  - Facebook formula: CPM = amount spent ÷ impressions × 1,000, the cost paid for 1,000 impressions across Meta placements. [L1024, undated]
  - Cost of impressions = (impressions ÷ 1,000) × CPM. Example: 500,000 impressions at a $15 CPM cost $7,500. The lesson's figure of about $33,000 for the same case is an arithmetic error. [L0871, 2021+]
  - CPM means cost per mille, the cost to show the ad to 1,000 people. It counts impressions, not clicks or engagement. It appears as a column in Meta Business Manager. [L1407, 2023+]
  - CPM is set by the auction. Better ad rankings can lower it, so the creative is the main lever for cost. [L0638, 2023]

### Clicks: CTR and CPC

#### CTR (click-through rate)

- **Formula:** CTR = clicks ÷ impressions × 100, as a percentage. [L0327, 2020-26; L0874, 2026; L0968, 2021; L0808, 2026; L1021, 2026; L1024, undated; L1271, 2020-26]
  - Examples: 5 clicks from 100 impressions = 5% CTR. [L0327, 2020-26]
  - 100 link clicks over 1,000 impressions = 10%. [L0874, 2026]
  - 2 clicks from 100 viewers = 2%, meaning 2 people out of 100 impressions clicked through to the website. [L1021, 2026; L1024, undated]
  - 100 clicks from 1,000 impressions = 10%, and raising it to 12% is the optimisation goal. [L0968, 2021]
- **Google Search organic CTR:** Impressions are how often the store appeared in organic search results, and clicks are how often people then clicked through. Both are shown in Google Search Console > Performance. [L1271, 2020-26]
- **Link clicks vs. all clicks:** Use link clicks, not all clicks, when calculating Facebook CTR and CPC, because link clicks show people who went through to the store. [L1220, undated] Ads Manager can also show a CTR (all) figure that counts all clicks. Confirm you are reading the link-click version before comparing against the 3% to 7% benchmark. [L0874, 2026]
- **Unique metrics:** Unique metrics count each person once. Repeated clicks by one person count as one unique click. Non-unique clicks count every click. Use unique CTR and unique clicks for analysis. [L0640, 2023]
- **Facebook CTR variants:**
  - CTR (all) measures attention, meaning how many people noticed the ad. Unique Outbound CTR measures interest, meaning how many different people clicked. [L0258, undated]
  - Outbound Unique CTR is the main CTR metric, since it counts unique clicks that send users to the website through the call-to-action. [L0639, 2023]
  - Use the unique link click-through rate, not the standard CTR, when judging Facebook ads. [L0502, 2020+]
- **Scope in Google Ads:** CTR can be measured at account, campaign, ad group, ad, keyword, PLA (Product Listing Ads) or search term level, and across different time periods. [L0327, 2020-26]
- **Data sufficiency:** CTR analysis needs enough data. If an ad has run for one day with minimal impressions, extend the analysis period. [L0327, 2020-26]
- **Variation:** CTR varies by ad type and keyword position. Top-of-funnel keywords have different CTRs from bottom-of-funnel keywords. Search ads have different CTRs from PLAs, display ads or YouTube ads. [L0327, 2020-26]
- **Cold traffic:** Link clicks, CTR and CPC are top-of-funnel metrics, measured before the click. They show how cold prospects who have never seen the product react to the ad. [L1024, undated]
- **Early test signal:** A CTR of 2% to 3% held over 7 to 10 days shows the hook is working. It does not prove the offer converts. [L0524, 2023]
- **Lead generation ads:** Lead generation ads are expected to reach very high CTRs compared with competitor product ads on the same term, because the unusual angle makes them stand out. [L0922, 2021-22]

#### CPC (cost per click)

- **Formula:** CPC = ad spend ÷ link clicks. [L0874, 2026; L1021, 2026; L1220, undated; L0808, 2026]
  - Examples: $50 spent with 100 clicks = $0.50. $50 with 25 clicks = $2.00. [L0874, 2026]
  - $8.92 for six clicks = about $1.49 per click. [L0874, 2026]
  - $50 spent with 25 link clicks = $2.00, above the 1 USD target, meaning the CTR is too low and the ads need to change. [L1220, undated]
  - Average CPC = total ad spend ÷ total clicks. Example: $330 over 430 clicks = about $0.77. [L0808, 2026]
- **Formula through CPM and CTR:** CPC = CPM ÷ (1,000 × CTR as a fraction). [L0774, 2023; L1024, undated; L1259, undated; L1260, undated; L1375, undated]
  - CPC = CPM ÷ (1,000 × CTR). Example: CPM of $20 and CTR of 1.5% gives about $1.33. A low CPM does not guarantee a low CPC when the CTR is low, so use this formula to find the source of a high CPC. [L0774, 2023]
  - CPM of $10 and CTR of 2% gives 20 clicks per 1,000 impressions, so each click costs $0.50. [L1024, undated]
  - CPM of $30 and CTR of 2% gives 1,000 impressions, 20 clicks and a CPC of $1.50. [L1259, undated; L1260, undated]
  - CPM of $10 and CTR of 1.5% gives a CPC of about $0.67. A CPC below $1 alone does not guarantee the 1.5% CTR target. [L1375, undated]
- **Worked check:** At a CPM of $10, $50 of spend gives about 5,000 impressions. If 25 link clicks come from them, the CTR is 0.5%, below the 1.5% target, and the CPC is $2, above the 1 USD limit. [L1220, undated]
- **CPC is an outcome of CPM and CTR.** A rising CPC can come from a higher CPM (costlier placements) or a lower CTR (a weaker ad). Diagnose which one drives it. [L1024, undated; L0502, 2020+]
  - A high CPM means fewer impressions and fewer people reached. A low CTR makes the CPC high because few people click. Judge them together. [L0502, 2020+]
  - A high CTR with a high CPM can still produce a high CPC. [L0773, 2023]
  - A high CPM can still produce a low CPC when CTR is strong. [L1259, undated]
- **CPC on its own:** Treat a CPC above 1 USD alone as no clear sign, since sales and return on ad spend matter more. [L0502, 2020+]
- **Google Ads CPC:** Quality Score work is not about the lowest CPC. Relevance raises Quality Score, which can lower CPC. See the Google Ads section. [L0220, 2025-26; L0510, 2018]

### Video attention: hook rate, hold rate and retention

#### Definitions

- **Hook rate (3-second version)** = 3-second video plays ÷ impressions × 100. It is the share of impressions that watched past the first three seconds. [L0398, 2023+; L1024, undated]
  - It measures how well the first 3 to 5 seconds stop the scroll and grab attention. [L1024, undated]
  - Video attention rate is the same calculation: (3-second video plays ÷ impressions) × 100. It shows what share of impressions watched the first three seconds of a video ad. [L0644, undated; L1426, undated]
  - Hook rate applies to video ads only, not to static images. [L0640, 2023]
- **Hold rate** = ThruPlays ÷ impressions × 100. ThruPlays are plays of at least 15 seconds or plays that reached the end. [L0398, 2023+]
  - Through-plays are views beyond 15 seconds, so the metric shows how well the video keeps viewers after the hook. [L1024, undated]
  - Use hook rate and hold rate together to judge the hook and the body of a video. [L0398, 2023+]
  - **Conflicting definition:** Hold rate is also described as the share of people who watch the video up to 50% of its length. [L0640, 2023] Check which definition your report uses.
  - Hold rate is only meaningful with large traffic. Longer videos naturally show lower hold rates than short ones, for example 15 seconds against one minute. [L0640, 2023]
- **Hook and hold together:** Hook rate measures how well the first seconds stop viewers. Hold rate measures how long they keep watching. Read them with CTR and CPM. [L1213, 2023]
- **Main test metric:** Hook rate is the main metric for hook performance in a creative test. Compare it across the hook variations to find the winner, then check hold rate for how long viewers keep watching. [L0902, undated]
- **Retention in steps (analysis framework):**
  - Hook rate (25% version) = 25% plays ÷ impressions. [L0613, 2026]
  - Retention 25 to 50% = 50% plays ÷ 25% plays. [L0613, 2026]
  - Retention 50 to 75% = 75% plays ÷ 50% plays. [L0613, 2026]
  - Retention 75 to 100% = 100% plays ÷ 75% plays. [L0613, 2026]
  - Completion rate = 100% plays ÷ impressions. [L0613, 2026]
  - **Conflicting hook definition:** The framework defines hook as 25% plays, while the other units use the 3-second version. Name the definition you use. [L0613, 2026; L0398, 2023+]
- **Drop-off points:** Video ad analytics show viewer completion at 75% watched (three-quarters through) and 95% watched (nearly finished), along with where viewers most commonly drop off. This shows which hooks and problem-solution formulas hold attention. [L0280, undated]
  - Drop-off can be analysed at 25%, 50% and 75% views to see exactly where viewers leave. This deeper analysis is only worth it when the account has a lot of traffic. [L1426, undated]

#### Benchmarks for hook rate

The sources disagree on hook benchmarks. Give one set, state which set you used, and apply it to every ad so scores stay comparable. [L0613, 2026]

| Source reading | Benchmark | Ids |
|---|---|---|
| one source scorecard | average about 40%; above 50% is great | [L0398, 2023+] |
| Attention table | poor <15%, average 15-25%, good 25-40%, excellent >40% | [L0613, 2026] |
| Funnel reference | poor <10%, below average 10-20%, average 20-30%, good 30-40%, excellent >40% | [L0613, 2026] |
| Attention rate (hook retention) | 40% or more is very good | [L0639, 2023] |
| Facebook video ads | above 30% good, above 40% excellent, above 50% outstanding | [L0640, 2023] |
| Diagnosis (mainly when sales are weak) | 25% or below not good; above 30% the target; 40-49% very good; above 50% excellent | [L0652, 2023] |
| 3-second video attention | 25% or more acceptable, 30% or more good, 40% or more very good | [L0644, undated] |
| 3-second video attention | about 25% acceptable, 30% and above good, 40% and above excellent, around 20% low | [L1426, undated] |
| Custom metric in Facebook | above 30% good, 40% to 50% very strong, 50% means half the audience watched, below 20% bad, 15% weak | [L0950, 2023] |

[L0398, 2023+; L0613, 2026; L0639, 2023; L0640, 2023; L0652, 2023; L0644, undated; L1426, undated; L0950, 2023]

- Use the 30% line as the target for Facebook hook rate. The sources treat high attention as a rule of thumb only. [L0652, 2023; L0640, 2023]
- High attention alone does not guarantee sales. The audience must still be relevant. [L0640, 2023]
- A low-attention ad can still sell when the traffic is relevant. Treat the thresholds as rules of thumb. [L0644, undated]
- Benchmarks vary by industry. Compare against your own historical metrics in your ad account first, and improve those before judging against general figures. [L0652, 2023]

#### Benchmark table: video attention

| Metric | Poor | Average | Good | Excellent |
|---|---|---|---|---|
| Hook rate | <15% | 15-25% | 25-40% | >40% |
| 25% to 50% retention | <50% | 50-65% | 65-80% | >80% |
| 50% to 75% retention | <40% | 40-55% | 55-70% | >70% |
| 75% to 100% retention | <30% | 30-45% | 45-60% | >60% |

[L0613, 2026]

#### Funnel benchmark reference

| Metric | Poor | Below average | Average | Good | Excellent |
|---|---|---|---|---|---|
| Hook rate | <10% | 10-20% | 20-30% | 30-40% | >40% |
| CTR | <0.5% | 0.5-1% | 1-1.5% | 1.5-2.5% | >2.5% |
| LPV per click | <60% | 60-70% | 70-80% | 80-90% | >90% |
| ATC per LPV | <3% | 3-5% | 5-8% | 8-12% | >12% |
| Purchase per checkout | <30% | 30-45% | 45-60% | 60-75% | >75% |

[L0613, 2026]

#### Hold rate benchmarks (scorecard)

- Hold rate average is about 6% to 8%. 8% is good, above 10% is very good, and 10% to 15% is excellent. [L0398, 2023+]

### Sales and funnel: CVR, add-to-cart, CPA, ROAS and purchases

#### Conversion rates

- **Ad conversion rate (CVR)** = purchases ÷ link clicks, as a percentage. [L0290, 2025-26]
  - For Facebook analysis, use purchases ÷ unique outbound clicks, shown as a percentage. Facebook tracks page views poorly, while outbound clicks reliably reach the website. [L0640, 2023]
- **Store conversion rate** = (purchases ÷ visitors) × 100. Example: 10 visitors with 1 purchase = 1%. [L1021, 2026]
  - **Conflicting definition:** Ad CVR divides by clicks, and store conversion rate divides by visitors. Use the ad version when judging the ad and the store version when judging the site.
  - A website conversion rate of about 2% is treated as a good benchmark. [L0639, 2023]
- **Store check:** A strong CTR with a weak site conversion rate points to the landing page or offer, not the ad. [L1315, 2023]

#### Add-to-cart and checkout

- **ATC%** = add to carts ÷ link clicks, as a percentage. [L0290, 2025-26]
- **IC%** = initiate checkout ÷ link clicks, as a percentage. [L0290, 2025-26]
- Read add-to-cart ratios in the Shopify backend:

| Channel | Add-to-cart ratio | Notes |
|---|---|---|
| Facebook ads | Minimum 5% | Read in the Shopify backend |
| TikTok ads | Minimum 3% | Read in the Shopify backend |
| Google Ads | Around 7% | Higher because search is intent-based |

[L1194, undated]

- Add-to-cart and sales checks: cheap clicks that produce no add-to-carts and no sales are a warning sign, not a success. Judge campaigns on downstream funnel metrics, not on click metrics alone. [L0361, 2024]

#### Cost per acquisition (CPA)

- **Formula:** CPA = total ad spend ÷ number of conversions. Example: $500 ÷ 18 conversions = $27.78. [L0327, 2020-26]
- CPA is also called CPP or cost per purchase. It is the ad cost of one sale: ad spend ÷ number of purchases. [L1021, 2026]
- Cost per result (purchase objective) = amount spent ÷ website purchases. [L0797, 2025-26]
- Cost per purchase shows the spend per purchase. [L1024, undated]
- CPA should not be your primary profitability metric. ROAS is more important. [L0327, 2020-26]

#### Return on ad spend (ROAS)

- **Formula:** ROAS = revenue from ads ÷ ad spend. A spend of $1 returning $3 gives a ROAS of 3. [L1021, 2026]
- ROAS equals the revenue from an ad set divided by the ad spend over the same period. A ROAS of 4 to 5 means about $4 to $5 of revenue for every $1 spent on that ad set. [L0524, 2023]
- **Purchase ROAS** = purchase conversion value ÷ amount spent. A ROAS of 2 means $2 is returned for every $1 spent. A ROAS of 1.7 means $1.70 is returned for every $1 spent. [L1024, undated]
- Decide on scaling only by comparing ROAS and cost per purchase against the breakeven and desired values, not by delivery numbers. [L0445, undated]

#### Purchases and revenue

- Purchases shows the number of purchases. Cost per purchase shows the spend per purchase. Purchase conversion value shows the revenue from those purchases. Together they show whether the sales are worth the ad spend. [L1024, undated]
- Platform revenue = website purchases × AOV (average order value). Example: 306 × $129.20 = $39,535.20. [L0797, 2025-26]
- **Content views** fire when a visitor lands on the product page the ad links to. Cost per content view shows what each landed visitor costs. [L1024, undated]

### Google Ads: Quality Score, Ad Rank, impression share and YouTube

#### Ad Rank and Quality Score

- **Formula:** Ad Rank = Quality Score × Bid Amount. Your position in Google Ads auctions is determined by this product, not by bid alone. A high Quality Score on a smaller bid outperforms a low Quality Score on a large bid. [L0220, 2025-26]
- **Ad relevance** is the match between your copy and the search intent, and it makes up a large part of Quality Score. When headlines and descriptions directly address the search query, Quality Score rises, impressions increase, cost per click decreases, and you can outrank competitors who bid significantly more. [L0220, 2025-26]
- The goal of optimising Quality Score is not the lowest possible CPC. It is the ability to bid more than competitors while staying profitable at the target ROAS. Advertisers who can afford higher bids dominate auctions in the niche. [L0510, 2018]
- Lowering bids as far as possible is not the goal of paid traffic. Cheaper clicks should come from better ad quality, not from underbidding. [L1031, 2018]

#### Search impression share

- Search Impression Share is the percentage of relevant search queries your ads show for, given current bids and negative keyword lists. It is the main measure of how competitive your bids are. [L0744, 2021-22]

#### YouTube in-stream pricing

- Example: about 3,500 views for about 4 cents each, which is about $0.0011 per view. [L1510, 2020-26]

### Decision thresholds: when a campaign is a winner

- **Clear winner:** at least 3 sales with positive ROAS. One sale may be an exception. [L0398, 2023+]
- **Scaling signal:** a creative used in 8 or more ads means Meta is scaling it. [L0398, 2023+]
- **Profitable sales before scaling an interest:** 6 or more. [L0639, 2023]
- **Expansion threshold** to push a new ad to the next audience tier: 3% CTR or 5% engagement. [L0639, 2023]
- **Data before judging:** 3 to 5 days. Avoid judging on one day. [L0639, 2023]
- **Chargeback rate:** about 1.5%. Above this, fines and processor problems follow. [L0639, 2023]
- **Scorecard table** (from the one source scorecard):

| Metric | Benchmark | Reading |
|---|---|---|
| Outbound CTR | above 2% | good; 1.5-2% borderline in some cases; below 1% means the creative is not working |
| CPC | below $1.5 | good (reference for 2023) |
| CPM | above $30, sometimes $35+ | competitive audience or weak creative that forces views |
| Hook rate (3-second plays / impressions) | average about 40% | above 50% is great |
| Hold rate (ThruPlays / impressions) | average about 6-8% | 8% is good; above 10% is very good; 10-15% is excellent |
| Frequency (top-of-funnel) | about 1.03-1.2 | low frequency does not rule out fatigue |
| Clear winner | at least 3 sales with positive ROAS | one sale may be an exception |
| Scaling signal | creative used in 8 or more ads | Meta is scaling it |

[L0398, 2023+]

### Reading the metrics together

- Judge CTR, CPM and CPC together, and always check CPC, conversion rate and margin before deciding. [L0773, 2023; L0502, 2020+]
- **Healthy baseline for Meta:** CTR above 1.5%, CPC below 1 USD and CPM below 25 USD together. If all three hold but sales are missing, the work moves from the ads to the store. [L0774, 2023]
- **Store problem:** If the CTR is above roughly 3% to 5% and the ads still produce no results, the problem is almost always the store, not the ad. [L0774, 2023]
- **Traffic is cheap, audience right:** Benchmark link-click metrics over a few days included a CPM of $23.28, a cost per link click of $0.93, a CTR of 2.49% and 313 link clicks. Such top-of-funnel numbers signal that traffic is cheap and the audience is right. [L1225, 2025]
- **Brand-specific targets:** Top-of-funnel metrics such as CPM, CPC and CTR are common benchmarks. Cost per purchase and ROAS targets are unique to each brand, so compare each brand against its own margins. [L1225, 2025]
- **Own history first:** Compare against your own past numbers in your own ad account before judging against general figures. [L0652, 2023; L0640, 2023]
- **Low CTR is not automatically a failure** if the product converts well for its qualified buyers. Look for improvements relative to your own past numbers. [L0640, 2023]
- **Relevance and attention:** A creative with low video attention but good CTR or sales still needs review. Low attention with sales may mean the traffic is relevant but small. [L1426, undated]
- **Hook and sales:** A high CTR does not prove a good ad when no purchases follow. A high attention rate with irrelevant traffic gives misleading signals. Check whether audience and message are aligned, not only the percentage. [L1426, undated]
- **Platform comparison:** Compare platforms by CPM and CTR together, not by CTR alone. Snapchat can deliver more clicks that do not necessarily bring quality traffic. [L0562, undated]
- **Post-test check:** After the first test spend, check CPM, CTR and CPC. A CTR above about 3% is a strong signal, but it must be read together with conversion rate and store data. [L1161, 2024+]

#### Diagnosis sequence for video ads

1. Check the video attention rate (3-second plays divided by impressions) first, to judge whether the hook works. [L1426, undated]
2. Check the click-through rate, to judge whether the middle of the video and the offer hold attention. [L1426, undated]
3. Check add-to-cart and purchase data, to judge whether the page and sale convert. [L1426, undated]
4. Use the combined picture of these metrics to decide what to improve. [L1426, undated]

[L1426, undated]

Hook benchmarks are rules of thumb, applied mainly when sales are weak. [L0652, 2023]

#### Build a new creative from hook and hold data

1. Add the Hook Rate and Hold Rate columns to the dashboard. [L0398, 2023+]
2. Find the video with a strong hook rate and the video with a strong hold rate. [L0398, 2023+]
3. Take the first three to five seconds from the strong-hook video. [L0398, 2023+]
4. Take the rest of the video from the strong-hold video. [L0398, 2023+]
5. Combine them into one new video and test it as a new creative. [L0398, 2023+]

[L0398, 2023+]


Part 10 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/09-traffic-conversion-and-funnel-math-for-planning.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/11-benchmarks-meta.md
