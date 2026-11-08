<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 19 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/18-daily-and-weekly-ad-analysis-workflow.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/20-test-budgets-kill-rules-and-scale-decisions.md

### Data windows

**Time frames by purpose**

| Window | Use | Condition | Source |
|---|---|---|---|
| 3 days minimum | Test of a single-change ad (evaluate lift after) | Standard test | [L0067, 2023] |
| 4-5 days | Check where ad spend goes (country breakdown) | Country review | [L0691, 2024] |
| 4 or 7 days | CBO campaigns | Not day by day | [L1107, 2023] |
| 5-day total | Before changing a campaign | Single days can mislead | [L0693, 2024] |
| 7 days | Judging ad profitability | Preferred over one day | [L1315, 2023] |
| Few weeks | Testing a recent change or new campaign | Depends on traffic | [L0721, 2021-22] |
| About 90 days | Identifying broader business trends | Common starting point | [L0721, 2021-22] |
| Rolling 30 days vs the 30 days before | Period-over-period decisions | Compare two windows | [L1236, 2015+] |
| Monthly, last month vs month before | Spotting shifts | Daily swings are normal | [L0719, 2021-22] |
| Three-month view | Long-running stable business | Stable business | [L0719, 2021-22] |
| Month-to-month | New business | New business | [L0719, 2021-22] |

Source of older advice: one source 2021-22 ([L0719, 2021-22; L0721, 2021-22]).

- Judge performance over a seven-day window rather than a single day. In one case an ad switched off after three days was still profitable at about 4 to 5 ROAS across seven days. [L1315, 2023]
- Daily Facebook ROAS and profit can swing widely, so a single day or a few days can show a loss on a product that is profitable overall. Judge performance on a multi-day total, such as a 5-day report, before changing a campaign. [L0693, 2024]
- Daily results swing up and down, so do not judge performance by single days. Review at a monthly level, and when comparing periods look at the last month against the month before to spot shifts. [L0719, 2021-22]
- Judging performance from a single day's raw numbers is misleading, because daily conversion rates can swing far apart (for example 10.71% one day and 0.72% the next). Compare rolling windows such as the last 30 days against the 30 days before. [L1236, 2015+]
- Review window depends on business age. A new business should use month-to-month comparisons. A long-running stable business can use a three-month view. Longer data from a new business is skewed by weak early results and can give false conclusions. [L0719, 2021-22]
- For analysis, a time frame of about 90 days is a common starting point for identifying broader business trends. For testing a recent change or a new campaign, a few weeks of data can be enough. The required period depends on traffic volume: high-spend accounts (around $1,000 per day) reach meaningful data faster than low-spend accounts (around $30 per day). [L0721, 2021-22]
- A business that acquires a high level of traffic gets more meaningful data sets from shorter periods than a low-traffic business, so time-frame choices depend on traffic volume. [L0721, 2021-22]
- Check CBO campaigns over a 4-day or 7-day window instead of day by day. Daily results at low budgets swing widely, so judging each day leads to wrong decisions. [L1107, 2023]
- Google Ads reporting is not real time, and dates and times follow the account's time zone (GMT-05:00 Eastern Time in the example). Compare daily numbers using that time zone so the days line up. [L1391, 2021-22]
- Sales come in bursts and can pause for a week or more without a clear cause. Do not panic over a slow stretch; check traffic and ad data first. [L1111, 2020]
- Check whether certain weekdays consistently convert worse for the store before judging a test by one day. [L1315, 2023]
- Account totals can hide weak parts. An account can meet its overall ROAS target while one ad group sits far below target. Break results down by campaign, ad group and ad to find the underperformers. [L1236, 2015+]
- When analysing a change in results, also check what changed in the business during that period, such as website design, new or removed products, or email marketing campaigns. These can explain the difference. [L0721, 2021-22]
- Digging into every number in detail takes hours that may be needed elsewhere. Only do a deep dive when the headline ROAS is below target, and skip it if the account is profitable and on target. [L0719, 2021-22]
- When reading early-stage data with low spend, be cautious about small differences (1-3%) in metrics like hook rate or CTR. They can easily shift with a few more impressions. Judge such differences only with enough data. [L0067, 2023; L0640, 2023]
- The first-day number does not decide the outcome; the trend does. In the example, CPA across the first days fell from about $104 on day one to about $26 on day two, about $15 on day three and about $4 at the start of day four. [L1124, 2026]
- Track Meta ad numbers from the first day of launch, because data guides every decision after launch. [L0491, 2026]

### Kill timing and cutting waste

- When a campaign is unprofitable, check the ad set and ad level first. One audience or creative can drag down the whole campaign, so kill that ad set or creative. [L0376, undated]
- Cut losers early when soft metrics stay weak. Keep an ad running only if its signals improve from day to day. [L1195, 2026]
- Ad age and fatigue: use the age buckets as the trigger for review (see Diagnosing the primary constraint). [L0613, 2026]
- Video retention drop-offs show where to fix or cut. [L0613, 2026]
- After auditing two weeks of ad spend, about 35 percent of spend was bloat that did not lead to sales. Cutting it and reinvesting into the remaining 65 percent that performed is a practical way to reduce waste. [L0803, 2022]
- Remove a country from targeting only after it has spent enough without results, and test the interests that produced sales. [L0349, 2024]
- Look for places that waste money to cut, and for places that work to spend more. [L0801, 2021]

### Review cadence

| Source | Cadence | Condition |
|---|---|---|
| one source 2021 | Weekly, or every two weeks for new stores | Audit ad accounts to catch problems early [L0247, 2021] |
| one source 2021 | Weekly, or every two weeks if spend is lower | Audit for waste to cut and winners to scale [L0801, 2021] |
| one source | Weekly, instead of every two weeks in the standard MAP approach | Without MAP, track paid advertising KPIs weekly; weekly checks catch competitor price cuts, lost sales and ads that stop spending because they are no longer competitive [L1146, 2020-26] |
| one source 2021 | Weekly store audit | Review revenue, ROAS per campaign, weekly trend direction, support response speed, reviews against sales volume [L0962, 2021] |
| one source | Monthly | Review ROAS and profit relative to ad spend even when current ROAS looks acceptable [L1049, 2025+] |
| one source 2021-22 | Monthly | Daily results swing; review monthly [L0719, 2021-22] |
| one source | Every morning | Review P&L and ad performance before the task list [L1181, 2023] |
| one source 2026 | Daily | Daily review of cost per add to cart, CTR, CPC, CPM and engagement rate ranking [L1195, 2026] |
| one source 2026 | Daily report | First report due within 24 hours of store launch; alongside the rule that competitor research must be approved before the site is built [L0897, 2026] |

- Before changing anything, compare actual cost per sale, ROAS and CPC with the target values. [L0686, 2021-22]
- Do not force reviews into daily decisions on a single day's numbers; compare multi-day totals (see Data windows). [L0693, 2024]
- Track the Meta ad numbers from the first day of launch. [L0491, 2026]
- Keep a clear record of every change to the account, so a drop can be traced to the market, the offer, the ad or the algorithm. If an AI or automation makes silent changes, the cause of a decline cannot be told apart. [L0876, 2025-26]
- Weekly store audit: 1) Review revenue. 2) Review return on ad spend per campaign. 3) Check weekly trend direction for each metric. 4) Check how fast customer support tickets, phone calls and live chats are answered. 5) Count reviews against sales volume to confirm customers are happy and reviews are being requested. [L0962, 2021]

### Country, age and gender breakdowns

**Breakdown procedure after changing the store and pausing ads**

1. Return to Ads Manager and use Breakdown on each ad. [L0773, 2023]
2. Break down by gender. [L0773, 2023]
3. Break down by age; compare ranges such as 18-34, 45+ and 65+, and track results in a spreadsheet. [L0773, 2023]
4. Break down by country when targeting several countries. [L0773, 2023]
5. Break down by placement. [L0773, 2023]
6. Focus budget on the best-performing gender, age and countries, and relaunch new ad sets with those settings. [L0773, 2023]

**Country checks**

- Verify that targeted countries actually receive spend. If one country gets no visits despite being set up, reduce or test the countries separately. [L0349, 2024]
- When targeting several countries, a country with high spend and low CTR or high CPM is a sign to drop or pause it. The US in Q4 is an example where CPM can be high. Countries with cheap sales (for example one sale on a 3 USD spend) can be prioritised. [L0773, 2023]
- If a store's reported CPC is high but CPM is low and CTR is high, one country is usually driving the cost. A per-country breakdown reveals which one is inflating the CPC. [L0773, 2023]
- Checking where spend goes after 4 to 5 days: (1) Open the ad account. (2) Use the breakdown button at the top right to see spend by country. (3) If a country has high spend, high CPM and no sales, exclude it from future testing and move budget to the other markets. [L0691, 2024]
- Find the best-converting country: (1) Open the sessions report in your Shopify account. (2) Add filters for country. (3) Compare the conversion rate per country. (4) Move budget to the countries that perform best and start a new campaign that targets only the strongest country. [L1176, 2023]
- Case: a product test with a 200 USD ad budget produced only 2 sales. The country report showed both sales came from Australia on only 7 USD spend, while the rest of the budget went to the US and UK. The recommendation was to start a new campaign targeting only Australia, because its conversion rate was good. [L1176, 2023]
- To compare countries after launching ads, break down store sessions by country in the Shopify analytics report and add the needed columns. Then compare the conversion rate for each market to decide where to scale. [L1185, 2023]
- Budget followed the wrong market: most spend went to Australia while the UK had better sales. In a test case 20 spent on UK ads produced six sales, so the UK deserved the larger share of budget. Compare sales and conversion rate per market before deciding where to spend. [L1316, 2024+]

**Age, gender and buyer data**

- Gender and age breakdowns reveal where to shift budget. In the example, women aged 45 to 54 performed very strongly, women aged 25 to 34 had lower revenue and a weaker ROAS, and men aged 45 to 54 reached a ROAS of 11.68, above target, which justified bidding more aggressively on that segment. [L1236, 2015+]
- Of 20 sales from a jewellery test, 18 came from the UK and all buyers were 35 or older, with slightly more women than men. Look at the country, age and gender of buyers to refine the next interest and audience choices. [L1439, 2024+]
- Check sales data, including the customer's country, age and gender, after each spike to decide the next target audience. Sales by country can reveal an unexpected market. [L1439, 2024+]

### Automated and scheduled reports

**Report principles**

- A useful paid-traffic report works in two ways: the data needed for a decision should appear within a few seconds, and the insight should stand out without scrolling through raw lists. Reports that need manual effort to pull and format cost time every month and slow down decisions. [L1236, 2015+]
- Getting a report should take about one second. If building it means downloading data, pasting it into a spreadsheet and formatting it by hand, the setup is wrong. For example, a one-hour manual report done four times a month costs four hours, or up to eight hours if it takes two hours each time. [L1236, 2015+]
- Build reports from high level to low level: account, then campaign, then ad group or ad, then device and other dimensions. Each step narrows the problem so the optimiser knows where to act without digging through the account. [L1236, 2015+]
- A good dashboard shows what to manage and the overall health of campaigns, keywords and ads without requiring a login to the ad platform. Both native platform dashboards and spreadsheet dashboards can refresh daily, weekly or even every hour. [L1236, 2015+]
- AI can analyse ad data, predict trends and suggest adjustments. Using this data is meant to replace decisions based on gut feeling when scaling profitably. [L1459, 2026]

**Automated daily reporting (example)**

- Every morning, pull the previous day's metrics from the ad account (ad spend, impressions, conversions, ROAS), summarise them in plain language, post the summary to a Slack channel, simultaneously append the raw numbers to a master Google Sheet, and automatically update the creative testing spreadsheet. This generates a live executive dashboard that updates itself without you reviewing data. [L0287, 2025-26]
- Zapier connects apps and can automate tasks between them, for example pushing new Shopify orders into a spreadsheet every day. It can potentially move TikTok data into a spreadsheet, but this has to be verified. [L0561, 2023+]

**Google Sheets with Supermetrics**

- Supermetrics is an add-on for Google Sheets that pulls ad platform data (such as Google Ads and Bing Ads, and Facebook Ads) into a spreadsheet. A dashboard can combine several platforms, for example summing Google and Bing spend in one top-level cell. It is the recommended tool for building reporting dashboards in Google Sheets. [L1236, 2015+]
- Account-level Supermetrics setup:
  1. Open Google Sheets and start the Supermetrics add-on. [L1236, 2015+]
  2. Select the AdWords (Google Ads) account and sync it. [L1236, 2015+]
  3. Start at the highest level and work downward. [L1236, 2015+]
  4. Set the date range to the last four months, including the current month. [L1236, 2015+]
  5. Add the key metrics: costs, clicks, conversions, conversion rate and revenue. [L1236, 2015+]
  6. Break the data down by month and show all-time values. [L1236, 2015+]
  7. Sort the output and insert it into the sheet. [L1236, 2015+]
  8. Add a custom metric, cost per view (cost divided by video views), when video campaigns run. [L1236, 2015+]
- Recommended Google Sheets dashboard structure, from top level down:

| Section | Contents |
|---|---|
| Top level | Total spend summed across platforms (e.g. Google Ads + Bing Ads), revenue, ROAS, and targets with hit/miss status |
| Funnel | Top-of-funnel, middle-of-funnel and bottom-of-funnel ad groups or campaigns |
| Device split | Mobile, desktop, tablet |
| Time | Day parting, day of week, hour of day |
| Targeting and content | Top keywords, search terms, audience analysis, ad analysis |

[L1236, 2015+]

- Top-level health check layout, one row per period, with a red/green status for each target:

| Metric | Example value (past 30 days) |
|---|---|
| Spend | 456 |
| Clicks | 828 |
| Revenue | 14,580 |
| ROAS | 31 |
| ROAS target | 20x |
| ROAS target hit? | Yes |
| Revenue target | 20,000 |
| Revenue target hit? | No (turns red) |

The same layout is repeated for the 30 days before, so the two periods can be compared directly. [L1236, 2015+]

- Example of a period-over-period drop: ROAS fell from 87 in the prior 30 days to 31 in the current 30 days, and revenue fell from above a 20,000 target to about 14,000. The top-level diagnosis is a ROAS and revenue drop that calls for a campaign-level review of efficiency and volume. [L1236, 2015+]

**Ad-level drill-down for video campaigns**

1. Choose the last 30 days. [L1236, 2015+]
2. Add cost and video views. [L1236, 2015+]
3. Split the rows by video title (or ad ID) to see each ad. [L1236, 2015+]
4. Add a cost-per-view column, convert it to dollars and apply conditional formatting that flags values greater than 0.05. [L1236, 2015+]
5. Add device as a further dimension to see which devices overpay, for example where computers show a higher cost per view than mobile. [L1236, 2015+]

#### Further details

- Diagnosing a store with no sales but clicks: send the Facebook ads account screenshot with CTR and CPC, the number of days the ads have run, the store link, and a screenshot of the Shopify analytics showing add to cart rate, add to cart percentage, initiate checkout percentage and visitor count. [L1177, 2023]


Part 19 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/18-daily-and-weekly-ad-analysis-workflow.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/20-test-budgets-kill-rules-and-scale-decisions.md
