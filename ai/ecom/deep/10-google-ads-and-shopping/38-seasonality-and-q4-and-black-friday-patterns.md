<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 38 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/37-audit-routines-and-cadence.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/39-troubleshooting-shopping-campaigns.md

### Seasonality and Q4 and Black Friday Patterns

#### Planning Around the Buying Window

- Google Ads optimisation for seasonal niches should be planned around the buying window of the season, because spend and bids that work in peak weeks can waste budget in off-season weeks. ** [L0430, 2023]
- Seasonality adjustment for a planned peak such as Black Friday or Cyber Monday: set an expected conversion rate increase, for example 25% higher, for the period. The strategy then bids as if the conversion rate will rise during that time. Use it for promotions with a defined start and end. [L0454, 2019]

#### Q4 Pattern

- A sharp drop in click-through rate in Q4 is often caused by higher ad prices when big advertisers spend their budgets, which pushes your position down. Check first which products and keywords lost clicks, then compare competitors' prices, main images and shipping badges. ** [L0356, 2019]
- Ad costs typically rise during Black Friday and Cyber Monday. From mid-December to the end of December, ad costs often drop significantly as many advertisers pause, a window called Q5. Stores launched by Black Friday can use this period to buy traffic more cheaply. ** [L1097, 2025]
- For non-seasonal products, expect a sales spike around Black Friday and Cyber Monday, a weaker stretch in December, and a recovery in early January. Ad costs have historically dropped in that period, which makes it a good time to win extra sales. ** [L0470, 2023]
- Ad costs often drop in the last two weeks of December and through January, after large advertisers cut budgets following Cyber Monday. This can be a cheaper window to reach buyers. ** [L0471, 2024]

#### Year-on-Year Comparison

- Seasonal comparison for Black Friday and Cyber Monday: in Google Ads, use the date range selector to compare the same week (Thanksgiving through Cyber Monday) across two years, checking clicks, CPC and which products sold in each year. ** [L0472, 2025]
- Google can shift budget to different products over time, so a year-on-year review should check whether last year's best sellers still get clicks and page visits. Bids and CPC should be refined to send budget to products that convert. ** [L0472, 2025]

#### Competitor Supplementary Campaigns

- Holiday sales drops are often caused by competitors running additional short supplementary campaigns on top of their main campaigns. These extra campaigns raise auction prices for everyone, so the fix is not to change main bids alone. Plan promotional campaigns of your own, such as email to abandoned checkouts. ** [L0472, 2025]

#### Holiday Timing

- Do not draw conclusions from the holiday shopping season until about two weeks into January. ** [L0551, 2020]
- Schedule holiday campaigns weeks in advance and leave a buffer of at least a couple of days for edits. ** [L1113, 2022]

### Learning Phase

#### Learning Phase Durations

The sources give different durations. Each applies to a different situation, so use the one that matches your campaign.

| Situation | Duration or threshold | Ids |
|---|---|---|
| New Google campaigns, general average | 2 to 4 weeks | [L1393, 2020-26] |
| New Google campaign, one source guidance | 2 to 3 weeks, may get almost no clicks | [L1508, 2022+] |
| Enough data to start optimizing | 2 to 3 weeks | [L1285, 2024] |
| New store, about 1,000 products, $20 daily budget | About 4 weeks, some products may get almost no impressions | [L1287, 2025] |
| Low conversion rate, such as untargeted traffic at 0.25% instead of 1% | 10 days can stretch to 40 days | [L1341, 2020-26] |

- New Google campaigns go through a learning phase that averages 2 to 4 weeks, during which Google optimizes them. Results from this period are not representative of final performance. [L1393, 2020-26]
- A new Google campaign can take 2 to 3 weeks to learn and may get almost no clicks in that period. Do not judge a new campaign before that learning window has passed. [L1508, 2022+]
- Two to three weeks of data is enough to start optimizing a Google campaign. If there are no sales and no checkouts for a week after that, change the campaign setup. [L1285, 2024]
- A new store with about 1,000 products on a $20 daily budget may need around four weeks for Google's learning phase, and some products may get almost no impressions during that time. [L1287, 2025]
- The daily budget and cost per click together set how fast data arrives. Conversion rate uncertainty can stretch the learning time from 10 days to 40 days, for example when untargeted traffic converts at 0.25% instead of 1%. The timing of the first conversion therefore depends on the actual conversion rate of each campaign. [L1341, 2020-26]

#### Checking New Products

- After uploading new products, Google Ads goes through a learning phase. Check new product performance at least weekly, sometimes every few days, and adjust budgets and negative keywords accordingly. ** [L1279, 2021]

#### When Not to Change

- Do not edit campaigns or account settings during the Google learning phase, because each change restarts or disrupts optimization. Let the campaigns run as configured until the learning phase is over. [L1393, 2020-26]
- The exception is a campaign with no sales and no checkouts after two to three weeks, which calls for a setup change. [L1285, 2024]

#### Restarting After a Pause

- Ads that were turned off and turned back on enter the learning phase again. Results can drop only if the campaigns had very strong historical performance before being paused. [L1283, 2023]

### Reporting: Columns, Dimensions and Metrics

#### Columns to Add for Google

- The same funnel logic can be applied to Google Ads: unit economics, cost per click, cost per purchase against target, and ROAS against break-even. The tracker itself is built around Meta metrics, so Google metrics need their own columns. [L1354, 2025-26]

#### Ad-Level Check

- At ad level, check spend, rank, clicks, click-through rate and quality score together, because a weak ad can be spotted before it drains budget. In the example, a quality score of 4 against a target of 7 was a reason to pause that ad and introduce a new one. [L1236, 2015+]

#### Dimensions to Split In a Dashboard

- Additional dimensions worth splitting in a dashboard include desktop bid modifiers, gender, product IDs, search terms (to find converting queries) and headlines. [L1236, 2015+]
- Comparing headlines by click-through rate reveals which messages attract clicks. [L1236, 2015+]

#### Combined Sample Size

- When judging a campaign, add the clicks from all ad platforms you run, such as Google Ads and Microsoft Ads, to reach the total sample size. Optimize based on that combined sample rather than on each small platform total alone. [L1254, 2020-26]

### Analytics Custom Reports and Attribution

#### Search Terms in Two Places

- Review paid traffic for a product by checking search terms in two places: the search term report of each campaign and ad group in Google Ads (shows terms that produced impressions and clicks), and a custom Google Analytics report that breaks search terms down to individual product level. Use both where possible, or at least one. ** [L1456, 2021-22]

#### Decision Data for ROAS

- Decide which products, ads or campaigns to pause, scale or highlight based on Google Ads data, not on Analytics or accounting totals. Use Google Ads metrics when the goal is to improve ROAS. [L1406, 2020-26]

### Audit Routines and Cadence

#### Spend and Search-Term Audit

1. Look at how much ad spend goes to each product. [L1448, 2020-26]
2. Break spend down by dimensions such as search terms, age ranges, devices and products. [L1448, 2020-26]
3. Identify search terms that produced zero revenue. [L1448, 2020-26]
4. Remove wasted areas: age ranges that do not fit the target customer, devices that do not convert, and products that should not appear for a given query. [L1448, 2020-26]
5. Proactively block the wasteful search terms as negative keywords. [L1448, 2020-26]

#### Campaign Hierarchy Audit

- Review the campaign hierarchy and confirm all relevant targeting types are active: audiences, YouTube ads, display ads, Bing ads, Facebook ads and Gmail ads. Missing targeting types are unused reach, and checking them is part of a campaign audit. [L1448, 2020-26]

#### Impression Share Check

- Check impression share: if it is low, the account is missing potential impressions. Frequent ad testing can raise click-through rate, which improves quality score and lowers cost per click, so the same budget reaches more buyers. [L1448, 2020-26]

#### Ongoing Optimization

- Ongoing Google Ads optimization includes keyword expansion, bid monitoring and bid strategy adjustment with a ROAS target, adding negative keywords to block unprofitable spend, improving CTR, lowering cost per click through quality score, and reviewing costly keywords. Cutting non-productive spend is part of the same routine. [L1448, 2020-26]

#### Weekly Product Audit

1. Look at cost trends per product: note which costs are rising or falling. [L1277, 2020]
2. Look at conversions per product: note which conversions are rising or falling. [L1277, 2020]
3. Work out what caused the change, whether good or bad. [L1277, 2020]
4. Adjust bids, budgets or product groups accordingly; cut spend on products that have spend but no sales. [L1277, 2020]
5. Add negative keywords for terms that trigger ads without sales. [L1277, 2020]
6. Repeat weekly, or at least every two weeks for small budgets. ** [L1277, 2020]

#### Cadence Summary

| Routine | Cadence | Ids |
|---|---|---|
| Weekly product audit | Weekly, or every two weeks for small budgets ** | [L1277, 2020] |
| New product check | At least weekly, sometimes every few days ** | [L1279, 2021] |
| Learning-phase watch | Until the learning window has passed | [L1393, 2020-26; L1508, 2022+] |

### Change History and Tracking Discrepancies

- Not covered by the source units. [no source unit]

### Seasonality and Q4

- Compare Q4 results with the previous year's Q4, since Q4 is the largest sales period for online and retail brands. Year-over-year comparison in the same period gives a fair read of a change. [L1508, 2022+]
- Black Friday patterns are not covered by the source units. [no source unit]

### Benchmarks

#### Click-Through Rate

- A sub-1% CTR is a normal starting point for a broad Google Shopping campaign that includes every product and has no negative keywords. CTR depends on how targeted the campaign is. ** [L1274, 2018]

#### Conversion Rate

- Target a conversion rate of 2.5 percent from targeted Google Shopping traffic. With 500 targeted clicks, about 10 sales should follow, so a shortfall means checking the keywords and product pages first. [L1287, 2025]
- Untargeted traffic converting at 0.25% compared with 1% is an example of how a low conversion rate stretches the learning time. [L1341, 2020-26]

#### Impression Share

- Low impression share means the account is missing potential impressions. The source gives no numeric threshold for "low." [L1448, 2020-26]

#### Competitor Counts In Shopping

- In Google Shopping, ignore sponsored items: use the popular products listed below the sponsored carousel and exclude the search text ads. Organic product listings are the ones to count and compare. [L1285, 2024]
- Google shows a count with a plus sign, such as 10+, instead of compare-at prices. This count is the number of stores selling that product, so use it for competitor comparison. [L1285, 2024]

#### Benchmark Summary

| Metric | Benchmark | Condition | Ids |
|---|---|---|---|
| CTR | Sub-1% | Broad campaign, all products, no negative keywords ** | [L1274, 2018] |
| Conversion rate | 2.5% | Targeted Google Shopping traffic | [L1287, 2025] |
| Clicks to sales | 500 clicks, about 10 sales | Same 2.5% rate | [L1287, 2025] |
| Impression share | Low is a warning | No numeric threshold given | [L1448, 2020-26] |

### Diagnosing Impressions Without Clicks and Low CTR

#### Starting Point

- A sub-1% CTR can be normal for a broad campaign, so judge CTR against how targeted the campaign is before acting. ** [L1274, 2018]

#### Five-Step Procedure to Raise CTR

**

1. Segment your campaigns into alpha and beta first, then add brand campaigns and best-seller campaigns. [L1274, 2018]
2. Add negative keywords at campaign level, based on the search terms that show your ads but do not match your ideal buyer, such as free, guide or in-store purchases. The data is in your Google Ads account. [L1274, 2018]
3. Check your bid: search your product in an incognito Google window and see where your listing appears. If you sit at a low position, such as 12th, raise your bid. [L1274, 2018]
4. Check the keywords that give you impressions without sales, then search them in an incognito window to see whether competitors are breaking MAP. [L1274, 2018]
5. Compare competitor ads for promo text such as free shipping, and for product images that look better than yours, then improve yours to match or beat them. [L1274, 2018]

#### Ad-Level and Headline Tests

- At ad level, check spend, rank, clicks, click-through rate and quality score together, because a weak ad can be spotted before it drains budget. A quality score of 4 against a target of 7 was a reason to pause that ad and introduce a new one. [L1236, 2015+]
- Comparing headlines by click-through rate reveals which messages attract clicks. [L1236, 2015+]
- Frequent ad testing can raise click-through rate, which improves quality score and lowers cost per click. [L1448, 2020-26]

#### Low Impression Volume

- For high-ticket products with no impressions, raise the bid in their ad group, for example from a default CPC of $0.40 to $0.45. *(Older advice, 2025 source; new-store context.)* [L1287, 2025]

#### Further details

- Analyzing inconsistent monthly Google Ads spend (same budget, different sales): 1. Review data from best-performing month. 2. Check which products received impressions and clicks in that month. 3. Identify which products have higher conversion rates. 4. Adjust bids to direct budget to those high-performing products. 5. Remove unrelated keywords that attracted clicks with no conversions. [L0268, 2020]

- With 270 products and $50/day budget, expect 6-12 months for full campaign optimization. Google's 2-week learning phase is just the beginning; ongoing optimization through bid adjustment, negative keywords, and product exclusion takes months. [L0276, 2024]

- After a Google Ads account has been paused for a long period, such as 18 months, create new campaigns instead of reactivating old ones, because the old ones would re-enter the learning phase. [L0836, 2024]


Part 38 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/37-audit-routines-and-cadence.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/39-troubleshooting-shopping-campaigns.md
