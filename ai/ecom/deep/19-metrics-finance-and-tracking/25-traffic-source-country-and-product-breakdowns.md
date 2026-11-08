<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 25 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/24-diagnosing-the-store-funnel-conversion-bounce-and.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/26-google-ads-and-shopping-reporting-and-optimization.md

### Traffic source, country and product breakdowns

**Traffic source**

- Measure conversion rate by traffic source separately (Google Shopping, Facebook Remarketing and organic) rather than using blended figures. [L0249, 2022]
- Each paid channel should reach 2.5% or more conversion. These channels are Google Shopping, Facebook Dynamic Remarketing and Google Remarketing. [L0272, 2022]
- If one traffic source converts well and another does not, leave the working source alone and focus the investigation on the weak one. Compare conversion rate by traffic source in Google Analytics to see which is which. [L1456, 2021-22]
- Measure conversion rate and return on ad spend per traffic source, especially Google Ads, to see what is working. [L1109, 2018]
- Track ROAS, conversion rate, bounce rate, cost per sale and spend per product group together. A high bounce rate can be normal for product-page traffic that already knows what it wants. [L0804, 2023] (2023)
- Judge the bounce rate by paid traffic segments when a new store launches, and do not change the store before paid traffic starts. [L1281, 2022]

**Country**

- Google Analytics shows the country distribution of visitors, which tells you which currency and pricing defaults to use. [L0838, 2020-26]
- Procedure: check conversion rate per country in Shopify.
  1. Go to Analytics. [L1316, 2024+]
  2. Open Reports and then Online store sessions. [L1316, 2024+]
  3. Click View report. [L1316, 2024+]
  4. Set the columns to Sessions, Conversions (converted sessions) and Conversion rate. [L1316, 2024+]
  5. Set the time grouping to None so the data is not split by hour or day. [L1316, 2024+]
  6. Choose the Country grouping and compare the rows. [L1316, 2024+]
  7. Filter or drill down to Region and City to see which area converts best. [L1316, 2024+]
- For market analysis, the usable columns in the Online store sessions report are Sessions, Conversions, Conversion rate, Country, Region and City. Filter these to see which country, region or city performs best. [L1316, 2024+]
- After you find a strong country, drill down to region and city. Put more ad budget into the best-performing city, for example Melbourne in Australia, rather than spreading spend evenly across the country. [L1316, 2024+]
- The Markets overview shows each market's share of total sales, sales and conversion rate for the last 30 days. It also counts how many countries are not in any market (209 in the example). [L1167, 2026]
- Check funnel ratios per product and per country, not only in total. [L1185, 2023]

**Product**

- When two or more products run on one store, give each product its own campaign and UTM tag. Compare add-to-cart and initiate-checkout counts per product alongside purchases. This shows at which funnel step each product loses buyers, which a shared campaign cannot show because it can credit the same purchase to several products. [L1347, undated]
- When running several product pages or stores from the same TikTok account, track each page separately to see which product converts. [L0561, 2023+]
- Focus price and page optimization on the top 20% of product pages by traffic, since they drive most of the results. [L1090, 2021]
- Google Analytics > Engagement > Pages and screens shows which pages already get the most traffic. Use it to decide which product descriptions to rewrite first. [L1190, 2020-26]

### Bounce rate and time on page

**Definitions**

- Bounce rate is the percentage of visitors who leave after visiting only that single page without further interaction. [L0293, 2020-26]
- Average Time on Page shows per URL how long visitors remain on each product page in your store. [L0293, 2020-26]
- Bounce rate is the share of visitors who leave without further interaction. An average time on site well below 10 seconds together with a very high bounce rate indicates that the visitors are the wrong audience for the offer. [L1254, 2020-26]
- Google Analytics is used to check the bounce rate of the store, which is the share of visitors who leave the site without any action. [L1085, 2018]

**Thresholds (note the different sources and years)**

| Context | Threshold | Meaning | Source ids |
|---|---|---|---|
| General store | 60% or lower | Healthy | [L1085, 2018] |
| General store | 80% to 90% | Most visitors leave right away; the landing page needs a fix | [L1085, 2018] |
| Organic landing pages | 50% or below | Good | [L1099, 2021-22] |
| Organic landing pages | 80% to 90% | Page problem or mismatch between page and search terms it ranks for | [L1099, 2021-22] |
| New store with paid traffic not yet started | 78% to 82% with average session of 53 seconds | Not a reason to change the store before paid traffic starts | [L1281, 2022] |

- Use the 2021-2022 organic thresholds when you evaluate landing pages from organic search. Use the 2018 general thresholds only as an older reference. [L1085, 2018; L1099, 2021-22]
- Judge user interaction only on organic traffic. Paid traffic, especially from Google Shopping, usually has a higher bounce rate and different time on page, so filter it out by Source/Medium before evaluating a page. [L1099, 2021-22]
- Time on page under 30 seconds is not good for organic landing pages. Above 30 seconds is acceptable, and longer is better. [L1099, 2021-22]
- A very high bounce rate on a high-traffic page, with many visitors leaving within about 10 seconds, points to a problem with the offer or to a gap between expectations and what the page shows. Behavior data does not always reveal a problem, so use it to guide the investigation, not as proof. [L0473, 2021-22]
- Before judging a high bounce rate on a new store, check which search terms and countries Google Search Console shows for the store. Traffic from unrelated search terms or distant countries often explains a poor bounce rate better than the bounce figure alone. [L1281, 2022]

**Procedure: diagnosing a high bounce rate in Google Analytics**

1. Open Behavior. [L0247, 2021]
2. Open Content. [L0247, 2021]
3. Find the pages with the highest bounce rates. [L0247, 2021]
4. Check which traffic sources send visitors to those pages. [L0247, 2021]

**Procedure: checking user interaction on landing pages**

1. Open Google Analytics in the default browser. [L1099, 2021-22]
2. Load the custom report and open it under Custom reports in the left menu. [L1099, 2021-22]
3. Filter by secondary dimension Source/Medium and keep only organic traffic. [L1099, 2021-22]
4. Compare bounce rate and time on page per landing page against the thresholds of 50% bounce rate and 30 seconds time on page. [L1099, 2021-22]
5. For pages above 80% bounce rate or under 30 seconds, check search intent match, above-the-fold content, overlays, readability and interaction points. Adjust the search terms if the keywords themselves are mismatched. [L1099, 2021-22]
6. Re-measure after changes. [L1099, 2021-22]

- The custom report supplied with the course shows bounce rate and time on page for all landing pages. Filter it by the secondary dimension Source/Medium to isolate organic traffic. [L1099, 2021-22]
- A high bounce rate on a product page can be normal for traffic that already knows what it wants. [L0804, 2023] (2023)

### Device: mobile versus desktop

- Track conversion and return on ad spend by device. Desktop often converts best, but mobile carries most traffic and sales, and many mobile visitors buy later on desktop, so mobile should not be switched off. [L1085, 2018]
- Check Google Analytics bounce rate and session duration, separated by mobile and desktop, before changing the store or ads, since device differences often explain most of the problem. [L1090, 2021]
- Relative mobile conversion rate = mobile conversion rate / desktop conversion rate x 100. It shows how well the mobile site converts compared with desktop, so it can be read without being distorted by differences in campaign sources. [L0390, 2019]

**Example**

| Metric | Mobile | Desktop |
|---|---|---|
| Traffic share | 58% | 42% |
| Conversion rate | 1.79% | 4.44% |
| Relative mobile CR | 40% (1.79% / 4.44%) | - |

- Relative mobile conversion rate equals the mobile conversion rate divided by the desktop conversion rate. In the example, 1.79% divided by 4.44% gives 40%. [L0423, 2019]

### Page speed and reliability

- One second of speed improvement can add about 7,000 USD in daily revenue for a store with 100,000 USD daily revenue. [L0390, 2019]
- The target First Contentful Paint (FCP) is under 3 seconds. It is the main speed metric to watch because it reflects the first view a customer sees. [L1410, 2023]
- Page speed scores in the Shopify admin are less accurate than GTmetrics. Use an outside tool to check page speed before making design decisions. [L0468, 2020]
- PageSpeed Insights shows field data only when the Chrome User Experience Report has enough real-user data for that exact URL. Otherwise it shows an origin summary for the whole domain, so check individual page URLs to see page-specific results. [L1266, 2021-22]
- Run WebPageTest at least three times and compare the first view runs. Treat a slow metric as a real problem only if it appears consistently across the runs, not only in a single outlier run. [L1266, 2021-22]
- Treat uptime monitoring as business insurance, not an expense. A store that is down for days loses sales unnoticed, and Shopify outages can happen even on a cloud platform. [L0575, 2014]

### Google Analytics and Shopify page reports

- Google Analytics > left sidebar > Behavior > Site Content shows which URLs visitors view, which helps decide which product pages to optimize first. [L1275, 2019]
- In Google Analytics, go to Sidebar > Behavior > Site Content > All Pages to view detailed page-level performance metrics displayed in red columns. [L0293, 2020-26]
- Menu names differ between versions of Google Analytics, so use the path your account shows. [L0293, 2020-26; L1190, 2020-26]
- Google Analytics shows which pages get views and a basic conversion rate per page. [L0561, 2023+]
- Google Analytics is used to compare page versions at the end of a test. Relevant page metrics are bounce rate, time on page, exit rate, conversion rate and page value. [L1364, 2021-22]
- Procedure: compare results after a test.
  1. Open the two page versions in Google Analytics. [L1364, 2021-22]
  2. Compare bounce rate, time on page, exit rate, conversion rate and page value for each version over the test period. [L1364, 2021-22]
  3. Check whether the difference is statistically significant before making a decision. [L1364, 2021-22]

### On-page behavior: heatmaps and recordings

- A heatmap shows how far visitors scroll and where they click. It tells you whether key content, such as reviews or the add-to-cart button, is actually being seen. [L0409, 2021-22]
- Deep orange areas in Lucky Orange heatmaps show where most visitors click on your pages. If a non-clickable section receives heavy clicks (deep orange), visitors probably expect it to be interactive, or the design confuses their intentions. [L0293, 2020-26]
- Use Lucky Orange screen recordings to see how shoppers move through the page and checkout when sales are missing. [L0950, 2023]

### Advertorials and landing-page routes

- Advertorial decision logic when it underperforms:
  1. Check how many visitors move from the advertorial to the offer page. [L1131, 2018+]
  2. If that number is low, rewrite the advertorial copy to strengthen the argument. [L1131, 2018+]
  3. Alternatively, split test sending ad traffic directly to the offer page against the advertorial route, and keep the stronger one. [L1131, 2018+]
- Google Optimize could run headline tests on advertorial and sales pages to find the headline that grabs the most attention. It was installed as a snippet placed after the page builder (PageFly) loader in Shopify. [L0995, 2023]
- Google Optimize was discontinued in 2023, so the A/B testing described in that lesson needs another current testing tool, such as a Shopify app or a native testing platform. [L0916, 2022+]

### Upsell, cross-sell and bundle analytics

**Upsell metrics**

- Track the dollar value each upsell adds, not just its conversion rate. An offer that converts less often can still produce more revenue if its price is much higher. [L0378, 2019+]
- AOV is the key metric for upsells and cross-sells, because they raise revenue per existing customer rather than acquiring new ones. Track AOV to judge whether an offer works. [L1411, undated]
- Track AOV to measure the effect of bundles, cross-sells and upsells. In the example, AOV rose from $40 to $70 with a two-unit bundle, and from $39 to $49 with a three-tier bundle ladder. [L0434, undated]
- Example with a single-product store: average order value of 40 USD. After switching to a bundle offer of buy two and get an extra 20% off, two items cost about 70 USD, and AOV rises from 40 USD to about 70 USD. Shipping per unit also falls with two units, which raises average profit further. [L0435, undated]
- The lesson estimates that about 80% of buyers do not uncheck pre-selected cart extras. About 60% of orders then add 3 to 5 USD, so each order can gain 5 to 10 USD in total from extras. [L1412, 2023]
- The lesson estimates that a cart upsell app such as Monster Cart Upsell can lift AOV by about 5 to 10 USD, and by 20 to 30 USD with extensive customization. These are the lesson's own estimates, not verified results. [L1412, 2023]
- Conversion rate is not the only measure for upsells. Track AOV and profit per order together. [L1231, 2025-26; L0378, 2019+]

**Upsell options and tactics**

| Upsell Tactic | Tool/Method | Cost | Setup Time |
|---|---|---|---|
| Comparison charts | Create in Shopify or design app | $0 | 1-3 hours per chart |
| Product upgrade (Bold Upsell app) | Bold Upsell | $9.99-$89.99/month* | 15-30 minutes per upsell |
| Extended warranty | Bold Upsell (included) | Included in app | 5 minutes |
| Priority shipping | Shopify checkout setting | $0 | 5 minutes |
| Post-purchase phone call | Staff time | $0 | 10-20 minutes per call |

*14-day free trial available. [L0240, 2019]

**Bundle tests**

- When testing a bundle structure, track average order value and profit per customer alongside ad performance. Judge bundle changes by profit per customer, not by the front-end price alone. [L0347, 2026]
- After adding bundles and the ebook bonus, track average order value and conversion rate, and compare them with the period before the change. This shows whether the offer change actually improved results. [L0860, 2026]

**Kaching Bundles and Upsell reports**

- Kaching Bundles overview shows Added revenue and Orders with bundles for 24 hours, 7 days, 30 days or all time, plus per-deal columns for Visitors and AOV. Use these to compare the performance of each bundle. [L0862, 2026]
- Track AOV and orders with bundles per deal in Kaching Bundles analytics. Compare each deal's AOV and visitor count to decide which bundle to keep, change or archive. [L0861, 2026]
- The Kaching Bundles overview shows Added revenue and Orders with bundles for a selected period. A Performance metrics section lists Revenue per visitor and Total revenue. Use Revenue per visitor alongside AOV to compare how much each bundle earns per shopper who lands on the store. [L0861, 2026]
- Kaching Upsell analytics report AOV, Add. rev (revenue added by upsells), Total rev and Rev/visitor for the chosen period. These figures show how much the upsell and cart changes add to each order and to each visitor. [L0560, 2026]
- The funnel dashboard shows Views, Conversion, Revenue and Rev./Visit for each offer, with a Last 30 Days filter. Compare these per funnel to decide which funnels to keep, improve or remove. [L1141, 2026]
- The Store Performance panel shows Total OCU revenue, Today's upsell revenue, Today's AOV with OCU upsells, Today's AOV without OCU upsells and Today's avg. upsell value. Compare the two AOV figures to measure the real lift from upsells. [L1141, 2026]
- Post-purchase funnels in the lesson example pushed AOV to about 300 USD, and into the 380 USD range in the best case. Use these as upside targets and measure against your own store's AOV without upsells, not as a guarantee. [L1141, 2026]

**Rebuy and cross-sell dashboards**

- The Rebuy dashboard shows widget analytics and Rebuy sales as a percentage of total sales. In the example, the figure was 4.23%, but no benchmark was given because results depend on many variables. [L1231, 2025-26]
- After launching cross-sells, review the app's dashboard to see which options customers click and where they leave the funnel. If buyers do not follow through, change the offers, the order of steps or the products shown. [L1076, 2019]

### Post-purchase offers

- The Rebuy post-purchase report shows these columns per offer: Views, Conversion (%), Revenue ($), Rev/User ($), and status (ACCEPTED, DECLINED or A/B TESTING). Each widget in a flow carries its own row with these figures. [L1413, 2025-26]
- In the example merchant's flow, about 84% of customers declined the initial offer, and only about 15% of the 14,000 customers who reached the final downsell converted. Low acceptance rates are normal for post-purchase offers and can still produce meaningful revenue at scale. [L1413, 2025-26]
- Additional analytic event delay is a setting on post-purchase widgets. It is left at 0 seconds in the example flows. [L1413, 2025-26]
- The Post Purchase Flows list shows these columns per flow. The flow-level figures summarize all offers in the flow, while the per-offer report breaks the same measures down by widget. [L1413, 2025-26]

| Flow (name and ID) | Status (LIVE / NOT LIVE) | Total Visitors | Conversion | Revenue | Revenue Per Visitor | Last Viewed | Created Date |
|---|---|---|---|---|---|---|---|

[L1413, 2025-26]

- Give each flow and widget a name that states its test purpose, such as Gift Card offer test, so the report shows which variant is which. Clear names make it easier to compare conversion and revenue per visitor across tests. [L1413, 2025-26]

### A/B test metrics and significance

**Core metrics and reading the report**

- Measure all A/B tests against revenue-per-session improvement to judge profitability accurately. [L0197, 2025-26]
- Visually's test report shows status, start date, last edit, pages, audience, device and allocation at the top. It lists sessions, transactions, conversion rate, AOV, PSV, revenue, profit and odds to win for control and each variation, with the primary goal marked. Metrics not selected at setup can be added later to the report. [L0389, 2025-26]
- For product recommendations and product upsells, Visually splits revenue into assisted revenue (a shopper clicked an upsell item and bought something later) and direct revenue (the upsell item was bought directly). Best-selling items for control and each variation are listed further down the report. [L0389, 2025-26]
- When setting up a Visually A/B test, the goal menu offers many options, including revenue, conversion rate, profit, AOV, subscriptions and returns. You can select several goals, but one must be marked as the primary goal. Events can also be sent to Google Analytics with a checkbox. [L0389, 2025-26]

**Significance**

- Wait for a statistically significant result before choosing a winner in Visually. Keep the test running while the report shows no statistically significant results yet. A variation with a high chance to win, such as 80% odds to win, is not enough on its own. [L0389, 2025-26]
- Do not claim double-digit conversion gains after only a few days of test data. [L0389, 2025-26]
- In the matching snapshot, conversion rate was around 2.0% vs 2.05% and not statistically significant, so the reported gain was not visible there. [L0389, 2025-26]

**Case: mobile cart upsell test on a watch-band Shopify store**

- The test ran from 1 Nov 2024 (last edit 10 Nov 2024, version 1-14 Nov 2024) with an even 50% split, All Pages, All Visitors and Mobile targeting. [L0389, 2025-26]
- Control: 50,970 sessions, 1,019 transactions, AOV $56.22, PSV $1.12, revenue $57,286 and profit $42,105. [L0389, 2025-26]
- Variation: 50,753 sessions, 1,039 transactions, AOV $57.15 (+1.7%), PSV $1.17, revenue $59,375 (+3.6%) and profit $43,804 (+4.0%). [L0389, 2025-26]
- Visually still showed no statistically significant result and 80% odds to win for the variation, so the test needed more days before a decision. [L0389, 2025-26]

**Lift calculation**

- Relative conversion lift = (new conversion rate − old conversion rate) ÷ old conversion rate × 100. [L0916, 2022+]
- Example: a rise from 1.85% to 4.25% equals (4.25 − 1.85) ÷ 1.85 × 100 ≈ 129.7%, which is an increase of about 130%. [L0916, 2022+]

**Older headline testing note**

- Headline tests on advertorial and sales pages, installed as a snippet after the PageFly loader, belonged to the Google Optimize setup described in older material. Google Optimize was discontinued in 2023, so use a current testing tool instead. [L0995, 2023; L0916, 2022+]

#### Further details

- If the conversion rate is too low, improve it first (conversion rate optimization) so that the business can afford to spend more on traffic. [L1495, 2021-22]


Part 25 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/24-diagnosing-the-store-funnel-conversion-bounce-and.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/26-google-ads-and-shopping-reporting-and-optimization.md
