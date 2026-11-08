<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 42 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/41-year-on-year-seasonality-and-saturation.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/43-staffing-agency-and-outsourcing-economics.md

## Market and competitor estimation

### Start with market size and expectations

- Market size predictions are usually wrong. Some products grow far beyond expectations, going from 5k to 10k daily and beyond, while others plateau despite large potential, so focus on actual inputs and outputs rather than trying to predict a ceiling [L0041, 2025-26].
- Know your total spend per year per customer, total market consumption, and the share of the market the product appeals to before committing a large budget. Without these figures, the cost of acquiring a customer cannot be judged [L1261, undated].
- Roughly 3 million people in the US have hallux valgus (bunion). Use this as a rough upper bound when judging the market for a bunion-related product, and compare it with the sales a product claims before accepting the claim [L1385, undated].
- If an ad's response rate is measured in a town or segment, the cost of waste circulation depends on the share of readers who are real prospects. An offer appealing to one in five readers can have a far lower cost per prospect than an offer appealing to one in a hundred [L1261, undated].
- Request volume scales with how broad a product's appeal is. One newspaper run of a widely used canned food drew 1,460,000 sample requests, while a narrower product drew only a fraction of that. Forecast sample demand from the product's breadth of appeal before printing [L1261, undated].
- Product research and ad metrics use guidelines, not fixed rules. A benchmark such as 300 orders is a starting filter, and products or ads just below it can still have real potential [L1426, undated].
- Use viewer and analytics data to decide what to add to the store. When a segment of viewers is large, such as around 30 percent men, add products for that segment [L1469, 2023+].

### Validate demand with Google Trends and seasonality

- Google Trends interest over time between 25 and 100 is a good range for demand validation of a product or niche. Consistent zero interest on a broad keyword over one to two months signals low demand and is a red flag [L1183, undated].
- Google Trends can show a niche's search interest over several years. Look for a dip that repeats in the same period each year, not one-off swings. ** [L1279, 2021]
- Check seasonality before choosing products, because sales can drop when weather changes. Slides sell poorly in cold weather, while sneakers sell all year. A cold-weather season can be framed as clearing summer stock [L1212, undated].
- Brand and product name searches show organic demand. Rising brand searches show that customers look for the brand directly. The case had about 8,000 monthly brand searches and about 14,000 for the product name [L0871, 2021+].

### Keyword demand and CPC

**Keyword Planner metrics**

- Keyword Planner shows average monthly searches (how many people search the term on Google per month), a competition rank set by Google, and a top-of-page bid range with a low and a high value. The CPC in the tracking sheet is the high-range top-of-page bid, which is the current price advertisers pay per click [L1120, 2024+].
- Track keywords using the high-range CPC and never treat it as a budget. Keywords are researched for content, not bought as ads. The low range can be far below the high range, for example 99 cents against $6.08 for standing desk [L1120, 2024+].
- A high CPC is treated as a signal that the keyword probably converts, which makes it worth creating content for. The lower bid range is not used for decisions because it varies more strongly [L1120, 2024+].
- CPC varies because of match type and ad quality. A long-tail search such as a product name plus a city costs less than a broad term, and better ads that get more clicks and keep visitors longer lower the cost per click. These differences explain why two similar keywords can have very different bids [L1120, 2024+].
- A keyword with much lower search volume can have a higher CPC, which suggests advertisers earn more from it and it likely converts better. Example: stand up desk had 33,100 monthly searches at $7.48 CPC, while standing desk had 201,000 at $6.08 [L1120, 2024+].

**Keyword research worksheet**

| Keyword | Related keywords | Monthly searches | Competition | CPC (high range) | Content type |
|---|---|---|---|---|---|
| standing desk | not recorded in lesson | 201,000 | high | $6.08 | not yet decided |
| stand up desk | not recorded in lesson | 33,100 | high | $7.48 | not yet decided |
| L-shaped standing desk | L-shaped standing desk adjustable height; L-shaped standing desks electric; L-shaped standing desk with storage; best L-shaped standing desk | 12,100 | high | $7.49 | Collection |
| electric standing desk | electric standing desk (related search) | 8,100 | high (niche-wide) | $4.51 | Collection (tag-based) |
| laptop stand for desk | laptop stands for desk adjustable; ergonomic laptop stand for desk | 14,800 | high | $2.16 | Blog post |
| standing desk height calculator | standing desk height calculator | 260 | low | $5.17 | Page |

[L1120, 2024+]

- Once the worksheet is complete, remove extra information that is not needed, so only the tracked fields remain. Give each keyword row a clear planned content type [L1120, 2024+].
- The last example row in the worksheet (about 90 monthly searches, high competition) has a CPC value that is garbled in the transcript and reads as 282. Verify this CPC directly in Keyword Planner before using it in any decision [L1120, 2024+].
- At the price-point stage, the average profit column is calculated for information only and is not yet used to choose a niche. The final niche decision combines it with the other filled-in columns, such as seasonality, demand and average price [L1150, 2020-26].
- Average price in Google Shopping research should exclude clearly irrelevant listings, such as auctions or products unrelated to what you would sell. Use judgment for each outlier [L1283, 2023].

**Keyword CPC from other tools**

These values come from other tools and older years, so they are not comparable with the Keyword Planner high-range CPC above. Use them only as a rough early check.

- In the 2021 US example, Ubersuggest showed an average cost per click of 1.01 USD for the keyword 'generator'. Use a keyword's CPC as a rough early check of what paid traffic may cost before you plan a budget. ** [L0771, 2021-22]
- For the informational keyword 'how to cook while camping' in the United States, Ahrefs showed a search volume of about 200, a keyword difficulty of 26 (labelled Medium), a CPC of $1.30, and an estimate of about 30 linking websites needed to rank in the top 10. ** [L0878, 2021-22]
- In a keyword spreadsheet, selecting the volume cells of one category (Content, Collection or Product Page) shows SUM, AVERAGE, MIN, MAX and COUNTA in the status bar. Use these totals to compare how much search volume each page type holds and how many terms it contains. Check them after sorting and after adding new CSV exports. ** [L0758, 2021-22]

### Read the Kalodata product and shop metrics

**Date windows**

| Source | Available windows |
|---|---|
| Shop metrics (shop filter) | Yesterday, Last 7 days, Last 30 days; plus Last 90, Last 180 and Last 365 days [L0333, 2026] |
| Date filter (general) | Yesterday, Last 7 Days, Last 30 Days, Last 90 days, Last 180 days, Last 365 days; Enterprise data reaches 365 days [L1188, 2026] |

- The example product check used the 30-day window from 08/14 to 09/12 [L0333, 2026].
- Enterprise data reaches 365 days, which allows a full-year trend check before testing a product [L1188, 2026].

**Revenue splits and shop panel**

- Kalodata splits a product's revenue by source, both by content type (Creator, Product Video and Ad, Livestream) and by channel. This shows whether sales come from short videos, ads, live shopping or creators [L0333, 2026].
- Kalodata's Core Metrics panel for a shop shows revenue for the selected period and revenue per day, along with video revenue, sales per day, live revenue, average unit price and conversion ratio. The shop type, such as Local Shop, is listed in the shop information [L0333, 2026].
- Kalodata splits product revenue into video, product card and live revenue. A live revenue of 0 USD combined with most revenue coming from video and product card supports a test built on organic video sales without live selling [L0354, 2026].
- Revenue share by channel equals channel revenue divided by total revenue for the same date window. For example, $31.54k of video revenue out of $33.89k total gives a video share of 93.07%, and the remaining share comes from live and product card revenue [L1188, 2026].

**Reference product (Kalodata, last 30 days)**

- Main Revenue about 1.52 million, Item Sold about 68,250, Avg. Unit Price about 22.27 dollars and Live Revenue about 155,460 dollars. Use these figures as a reference to judge whether a product sells at scale before testing ads [L0707, 2026].
- Average per day equals the 30-day total divided by 30. For the reference product, 1.52 million revenue divided by 30 is about 50.7k per day, and 68,250 items sold divided by 30 is about 2.27k items per day. Use this to check a product's daily scale against the Per Day figures before testing ads [L0707, 2026].
- Revenue per day for a product in Kalodata is the 30-day revenue divided by 30, which gives a quick daily average to compare products. For the liver detox example, 46.09k revenue over 30 days equals about 1.54k per day, matching the tool's display [L1187, 2026].
- Per-day numbers in Kalodata are the 30-day total divided by 30. For example, $33.89k divided by 30 gives about $1.13k per day, and 28.3 items per day corresponds to roughly 849 items in 30 days [L1188, 2026].

**Product card checks before a test**

- Check the following on the Kalodata product card before testing a product: price range, commission rate, shipping fee, rating, number of creators, creator conversion ratio, revenue and units sold. These metrics show whether the margin, competition and sales pace are workable for a test [L1187, 2026].

**Top products, growth and ROAS**

- In Kalodata's last-30-day view for the US (July 5 to August 3, 2025), the top products reached about $849K to $872K in revenue each, and the top video list started around $200K. One video was cited at about 500K in revenue and 11 million views [L1479, 2026].
- In Kalodata product lists, the Revenue Growth column shows the percentage change in revenue over the selected period. Negative values mean revenue is falling, so filter for positive growth when you look for rising products [L1479, 2026].
- In Kalodata, Ad ROAS is the return on ad spend for a product's ads (revenue divided by ad spend). Read it together with Ad Spend, because a high ROAS on a small budget may not hold when the budget grows [L1479, 2026].

### Estimate competitor sales from order numbers

**Test-order method**

Use a test purchase to read a store's order number and estimate its order volume.

1. Place a test order on the competitor's store (cost e.g. 20-30 USD) [L0501, 2022].
2. Note the order number. Shopify order numbers start at 1,000, so orders placed = order number minus 1,000 [L0501, 2022].
3. Revenue in that window = (order number minus 1,000) multiplied by the product price. Example: order 1,500 for a 20 USD product gives 500 orders, about 10,000 USD [L0501, 2022].
4. Place a second test order 24 hours later and subtract the first order number from the second to get orders in the last 24 hours. Multiply by average product price for daily revenue [L0501, 2022].
5. Use the total to compare with the views of the account. Factors such as older viral videos are not visible in this method [L0501, 2022].

- Estimate a competitor's order count by placing a test purchase and reading the order number. Subtract the store's starting number, about 1,000 in the example, then use the result as an approximate order count. Multiply that by the average order value to estimate revenue [L0352, 2022].
- To estimate total orders from a store's order numbers, take the latest order number you see, subtract the lowest number seen earlier as a baseline, then subtract one for your own test order. In the example, 3,493 minus 1,000 minus 1 gave about 2,492 orders in roughly one month [L0655, undated].
- Revenue estimates from order-number sequences should use the highest likely unit price (for example $13) as a conservative upper-bound when average order value is unknown [L0655, undated].
- Some stores show only a confirmation number at checkout and send the real order number by email later. Wait for that email before deciding a test purchase failed, and check the spam folder if it does not arrive [L0655, undated].
- Revenue from a viral product can only be estimated from public signals such as follower counts, view counts and posting frequency. Exact sales cannot be read from the outside [L0656, undated].

**Worked cases**

- Infinity Pencil case: a corn-themed video using a trending sound reached about 6.8 million views in two days. The store sold at $13 with a cost of $2 to $3 from AliExpress, had about 10 reviews, and recorded 2,492 orders in about one month, roughly $32,000 in revenue (estimated with the maximum price of $13 per order). Key points: the trending sound drove reach, the cheap price lowered the purchase barrier, and the broken product link was a missed-sales problem that likely reduced results [L0655, undated].
- Competitor check on a viral toy product (monkey product): the account had about 200-300 million views over a year of uploading, but the order numbers showed about 600 orders at about 40 USD, which is roughly 24,000 USD total revenue. That is about 120 USD per million views, below the author's average of about 180 USD per million, which confirmed the product was low-converting. Another product tested with a dummy order had only two orders in 24 hours, so it was dropped [L0501, 2022].

### Check tracker accuracy and limits

**Accuracy**

- Cross-check store sales with at least two tools, because no sales tool is 100 percent accurate. Estimates for stores around $1,000 per day are roughly 50 to 70 percent accurate, and accuracy drops as stores scale up [L0335, 2023].
- Tracker estimates from Peekster are about 50 to 70 percent accurate, so use them as a directional signal rather than exact revenue [L1177, 2023].
- Peak Star tends to underestimate sales. A store showing $800 there is likely doing at least that much. Shop Hunter and AfterLive store tracking gave the most consistent numbers in the mentor's comparisons [L0335, 2023].
- Do not treat tracker revenue, spend or traffic figures as exact. Use them to rank stores and products, then cross-check before committing budget [L1164, 2026].
- Revenue from tracker estimates is only a hypothesis until confirmed. Sales tools typically track a store for a limited window of one to two hours and extrapolate to a full day, so any single estimate is only a hypothesis. For important decisions, compare two or three tools before you act [L0335, 2023].

**New stores and large stores**

- Sales trackers need about 24 hours before they show reliable figures for a newly opened store. Judge a new store's sales only after that window, not from the first hours of data [L0335, 2023].
- Stores reporting $1 million or more per day in sales tools are usually established brands with big launches, multi-channel promotion or celebrity support, not new stores. Use such figures only as a sign of what is possible, not as a benchmark for a beginner [L0335, 2023].
- Winning Hunter's Sales Tracker only estimates revenue for stores doing $10k to $100m per month, because the old tracker capped at $1m per month. Each estimate falls between two revenue brackets, such as $9,750,000 to $13,000,000 per month, so read it as a range [L1164, 2026].
- In Winning Hunter's store list, the Est. Revenue column can be switched between 1d and 30d views and shows MIN and MAX estimates. Compare the 30d figure with its MIN and MAX range rather than a single number, because the revenue is a bracket estimate and not a tracked figure [L1164, 2026].

**Trend tracking**

- Track the same store's daily sales across several days to see the direction of the trend. A sharp rise or fall is a reason to recheck the numbers in a second tool before acting on them [L0335, 2023].
- A store that moved from 2.6k to 5.2k in sales over two days can be monitored for trend changes, and comparing those numbers with a second tool gives a more reliable figure [L0335, 2023].

**Tool list**

- PPSpy (Chrome extension), Shop Hunter and Dropship.io estimate the sales of other stores, and PeakStar also tracks store sales. Use them to check whether a competitor's ads are producing real sales before you copy the product [L1436, undated].
- PP Ads is a Chrome extension that estimates a Shopify store's sales. The presenter says the data can be inaccurate, and a Shopify snippet that checks best-selling collections is used for more accurate results [L1184, 2023+].

### Confirm ad activity and brand signals

**Ad counts**

- An AI chat cannot query the Meta Ad Library live, so any ad count it gives is unverified. Count the paid Meta ads for each competitor yourself in the Meta Ad Library, which takes about five minutes per niche [L0354, 2026].
- Use the 'Active' filter and recheck it regularly to see whether competitors keep running ads for a product. Continued spending signals demand [L1173, undated].
- Competitor active ads for one product indicate its stage: 20 or more means the competitor has moved from testing into scaling, 30 or more is solid proof of concept, and 50 or more suggests roughly $1,000 to $2,000 or more in revenue from the product (time period not specified) [L1174, undated].
- High engagement on competitor ads is a positive signal for a test product, while the competition level (low, medium or high) should be recorded to inform the decision [L1162, undated].
- The Ads Launched figure on a brand overview counts the ads a brand started within the selected period, and it is separate from total and active ad counts. Compare it with active ads to judge how quickly a competitor is adding new creative [L0374, 2026].

**Brand tracking setup**

- A brand added to the tracker needs at least 48 hours before its data is complete. During the first hours, the top hooks, personas, angles, concepts, desires, emotions, awareness stages and USPs are still being filled in, and the totals do not add up [L0374, 2026].
- For EU and UK ads, Winning Hunter models spend from reach at a CPM of $11, and some ads show no EU or UK data. Treat those spend figures as estimates [L1164, 2026].
- Check the installed pixels and tracking tools. The list shows which ad platforms and analytics tools a brand uses: Meta Pixel, TikTok, Google Analytics (GA4 / UA / GT), AppLovin / Axon, Klaviyo, Shopify Analytics, Triple Whale, Microsoft Clarity and Web Pixels Manager [L1164, 2026].

**Proof of offer**

- A store that has consistent sales for a long time is proof that the offer works. Its ads and landing page can be used as a baseline for testing your own, with changes to offer and branding [L1184, 2023+].

### Check traffic sources

- Traffic sources can be estimated with Similarweb, and the mix shows where the brand's growth is coming from. In the case, roughly 53% of traffic was direct, 29% social, and 66% organic in total [L0871, 2021+].
- Traffic estimates from third-party tools can differ widely between country sites and are not exact. Example: one brand showed about 20,000 monthly visits on its UK site but 183,000 to 193,000 on its US site, so check each market separately [L0524, 2023].
- When SimilarWeb hides a competitor's traffic, Ubersuggest gives an estimated monthly visit count for each country site. Pull several months of data and check the trend, because a steady rise points to a growing store [L0524, 2023].
- A competitor site without a country rank has too little traffic in that country to be ranked. This does not indicate a problem with the site itself [L0856, 2024].
- Competitors visiting your site can usually only be identified at the IP and city level through standard tracking. Few businesses analyze individual visitors this deeply, so repeat visits from rivals are not a practical concern [L0837, 2025].

### Cross-check before you act

- Judging a product only by its viral view count led to wrong conclusions when a competitor's account with 10 million views made just 12 sales. Always verify sales with a tracking tool before copying a product that looks like a winner [L0372, 2022].
- A bunion-corrector product appeared to be going viral on many accounts, and one store was estimated at about 800,000 dollars in sales within one to two months of its first upload. Across several accounts the product had over 100 million views, which seemed to explain the sales. A brand-new account with 10 million views for the same product had only 12 sales, and PPAds later showed that the best-selling store earned most of its money from a different product, most likely through paid ads that were not visible on TikTok [L0372, 2022].
- Use an AI assistant with web browsing to find a quick market figure, such as how much of a product people use per year. Confirm that figure with a second source before putting it into a profit model, because an AI answer is a starting point, not verified data [L0524, 2023].
- For important decisions, compare two or three tools before you act [L0335, 2023].

### Turn estimates into profit

- Estimated minimum profit = revenue x profit margin. Example: $134,000 x 30% is about $40,000. Typical margins range from 15 to 30 percent, so use the lower end unless organic traffic supports a higher figure [L0352, 2022].


Part 42 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/41-year-on-year-seasonality-and-saturation.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/43-staffing-agency-and-outsourcing-economics.md
