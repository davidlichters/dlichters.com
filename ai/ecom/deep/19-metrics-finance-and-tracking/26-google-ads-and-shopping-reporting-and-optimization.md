<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 26 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/25-traffic-source-country-and-product-breakdowns.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/27-search-vs-shopping-and-other-channels.md

## Google Ads and Shopping reporting and optimization

### Core metrics and definitions

- Three core metrics measure Google Ads performance: ROAS (Return On Ad Spend), CPC (Cost Per Click) and conversion rate. [L0013, undated]
- ROAS = conversion value ÷ cost, so $15 in sales from $1 of ad spend is a 15x ROAS. [L0750, 2020-26; L0746, 2020-26]
- ROAS = revenue generated from ads ÷ ad spend. [L0665, 2022]
- ROAS = conversion value ÷ ad cost. Use this formula in the Google Ads keyword report to rank products and keywords by return. [L0856, 2024]
- Google Analytics displays ROAS as a percentage: 10x shows as 1000%, and 8.25x shows as 825%. [L0721, 2021-22]
- Revenue per click = conversion value ÷ clicks. [L0745, 2020-26]
- Cost per transaction = ad cost ÷ number of transactions. Example: $50 spent on 100 clicks that produce one conversion gives a cost per transaction of $50. [L0721, 2021-22]
- Cost per sale for a keyword group = ad spend on that group ÷ number of sales it produced. Example: $300 spent on quality keywords that produced one sale gives $300 per sale, which signals that those keywords and their landing product page need review. [L0626, 2025+]
- Of all paid traffic metrics, cost per transaction and ROAS are the two most important, because together they show whether a sale is actually profitable. [L0721, 2021-22]
- A target cost per transaction can be set from break-even or from a desired profit margin per sale, and a target ROAS can then be derived from it. [L0721, 2021-22]
- Cost = sum of all clicks multiplied by their cost per click. Example: 454 clicks at an average CPC of $0.32 equal a total cost of $144.72. [L1341, 2020-26]
- Cost per all conversions = spend ÷ number of conversions. Average CPC = average amount paid per click. [L1341, 2020-26]
- Impressions = how often the Shopping ad was shown. Clicks = visits to the website. [L1341, 2020-26]
- Judge a platform's profitability by checking its ROAS, not just cost per click, although CPC should still be kept under control. [L0665, 2022]
- Judge a store's Google Ads health from profit and ROAS rather than the optimization score, since some stores with poor scores are very profitable. [L1090, 2021]

**ROAS and conversion reference values**

| Context | Value | Ids |
|---|---|---|
| Google Shopping minimum ROAS for a winning product | at least 10x | [L0856, 2024] (2024); [L0665, 2022] |
| Alpha campaign target | about 15x, never below 10x (at least $10 sales per $1 spent) | [L0746, 2020-26] |
| Beta campaign target | runs profitably at about 8x | [L0746, 2020-26] |
| Example threshold for a profitability alarm | 9x, but derive it from your own target cost per transaction | [L0721, 2021-22] |
| Example target ROAS and actual | target 6.6, actual 4.2: room to reduce bids | [L0745, 2020-26] |
| Shopping campaign target conversion rate | 2.5% or better, measured separately from the store-wide rate | [L0626, 2025+] |
| Mature Shopping campaign example | $12,000 spend, $31,000 revenue, 4.9% conversion rate | [L0745, 2020-26] |
| Store average conversion rate used as baseline in a search text ad example | around 2% | [L0923, 2015] |

### Reporting setup in Google Ads

**ROAS columns in the product group view**

1. Click **Columns**, then **Modify columns**. [L0750, 2020-26]
2. Under Conversions, select **Conversion value** and **Conversion value / Cost**. [L0750, 2020-26]
3. Move **Conversion value** directly below **Cost**, and move **Conversion value / Cost** below it. [L0750, 2020-26]
4. Remove **Benchmarks max CPC**. Keep **Search impression share**. [L0750, 2020-26]
5. Click **Save your column set**, give it a clear name such as ROAS, then click **Save and apply**. [L0750, 2020-26]
6. The product group view now shows Cost, Conversion value and Conversion value / Cost (ROAS) in one table. [L0750, 2020-26]

- Default product group columns in the Shopping ad group view are: product group, max CPC (default $0.40), impressions, clicks, cost, average CPC, benchmarks max CPC and search impression share. [L0750, 2020-26]
- Keyword report columns for decision making are Cost, CPC, conversion value (revenue) and a calculated ROAS column (conversion value ÷ cost). [L0856, 2024]
- Product group reports show impressions, clicks, cost, cost per all conversions, conversion rate, average CPC, benchmark max CPC, click share and search impression share per product. These columns help decide which individual product bids to raise or lower. [L0747, 2021-22]

**Where to find the numbers**

- Go to **Goals > Summary** in the left navigation. It lists every conversion action set up on the store and how many conversions each one has recorded. [L0470, 2023]
- To view cost per click over time, change the date range and set one of the graph lines to CPC. No spreadsheet export is needed. [L0470, 2023] (2023)
- Google Ads reports which individual ad produces conversions and how much revenue each ad brings in, so you can compare ads directly and cut the ones that spend without returning money. Conversion tracking must be set up on the site for these per-ad numbers to be reliable. [L1455, 2018+]
- Once ads are approved, the account shows how many people see the ads, click them and buy. All optimization decisions should be based on these numbers. [L0715, 2020-26]
- Google Shopping performance is judged by a store's own traffic and sales data. Reporting in Google Ads usually shows the same reports over and over, and Google Ads optimization is driven by these reports rather than by separate tools. [L1114, 2023] (2023)

**Time zones and reporting delay**

- Google Ads reporting is not real time. Its dates use the account's time zone, which was GMT-04:00 Eastern Time in one example. Allow for this delay and time zone before comparing daily figures. [L0719, 2021-22]
- Google Ads reporting is not updated in real time. All dates and times follow the account's time zone, which was GMT-05:00 Eastern Time in another example. Set date ranges and compare results with this time zone in mind, not with the local time of the operator. [L0744, 2021-22]

**Spreadsheet and multi-channel views**

- Use a spreadsheet outside the ad platform to compare product-level profitability before deciding budget allocation in Google Shopping campaigns. [L0575, 2014]
- Multi-channel feed dashboards combine performance across channels in one view, so revenue can be compared per channel. Google Shopping was expected to remain the largest channel, followed by Bing. Use this to decide where to direct budget. [L0454, 2019]

### Campaign structure and budgets (Alpha and Beta)

**Principles**

- Allocate the largest share of daily budget to high-profit products in dedicated Alpha and Beta campaigns. Allocate a significant but lower share to mid-profit segments in separate campaigns. Keep low-profit products in the product feed but expose them only to free Google Shopping traffic with zero paid budget. [L0224, 2024+]
- Set campaign budgets and default cost-per-click bids based on historical performance data from existing campaigns. Match these values as closely as possible to current Alpha and Beta campaigns to ensure comparable data during the learning phase. [L0224, 2024+] (2024 and undated sources, not older)
- Review keyword and CPC performance from historic ad data to see which products get acceptable impressions, cost per click and conversions. Scale the parts of the account that produce profitable results. [L1283, 2023]
- Ad spend must match results. If a product gets clicks or sales, keep spending. If it gets no impressions or clicks, check the product feed, keywords and bids before increasing spend. [L0806, 2024] (2024)
- Before relaunching ads, review historical analytics and Google Ads data for what brought the first sales. Put most of the budget into the ads, products and devices that already proved to work. [L0806, 2024] (2024)

**Setting up Alpha and Beta**

1. In Google Ads, create two separate Alpha and Beta campaigns. [L0274, 2023] (2023)
2. Set a shared budget across both (for example $30 per day). [L0274, 2023] (2023)
3. Set Alpha to High Priority and Beta to Low Priority. [L0274, 2023] (2023)
4. Create Alpha 2 and Beta 2 for a different product group. [L0274, 2023] (2023)
5. Set a separate shared budget for Alpha 2 and Beta 2. This allows flexible budget allocation across product groups. [L0274, 2023] (2023)

**Default CPC and Beta control**

- The default CPC of the Alpha campaign can be raised to increase its traffic. If the Beta campaign converts profitably, leave its CPC unchanged. If it takes most traffic without converting well, lower its default CPC. [L0971, 2024] (2024)

**Launch expectations**

- A new Shopping campaign on about 1,000 products with a $20 daily budget may need roughly four weeks for Google's learning phase, and some products can get almost no impressions during that time. Check impressions per product, not only clicks. [L1287, 2025] (2025)
- For a new high-ticket store, results from Google Ads may be weaker in the first two to five months. As the conversion rate and the store's track record improve, ad profitability tends to rise over time. [L1228, 2021-22]
- Google Ads profitability improves only when ad changes, website changes and other parts of the business are fine-tuned together. Improving the ads alone while the store stays weak will not produce the expected return. [L1228, 2021-22]

**Budget-limited campaigns**

- A campaign at ROAS 9.3 that is limited by budget should get more budget, since a well-performing campaign should almost never be budget-limited. [L0745, 2020-26]

### Product group and product-level analysis

**Per-product data**

- After the item ID subdivision, each product gets its own row, so impressions, clicks and sales are visible per product. Based on that data you can exclude weak products or raise and lower individual product bids. [L0746, 2020-26]
- Track ad spend and returns at the product level so you can see profit per product in Google Ads. This is set up inside the Google Shopping campaign structure. [L1277, 2020]
- Track search performance, cost per click and clicks by product in Google Ads. Use those numbers to decide product-level bids and to spot which products need attention. [L0801, 2021]
- Use click-through rate, conversion rate and return on ad spend per product to decide bid changes. Products with good click-through and conversion rates justify higher bids. [L1094, 2023] (2023)
- Use the spreadsheet method from [L0575, 2014] to compare product profitability before deciding budget allocation. [L0575, 2014]

**Ordering the work**

- Sort product groups or campaigns by cost first, to focus on the biggest spenders ("big fish") and work down the list. Compare each campaign's ROAS against its own target ROAS, since the target is not always labelled in the report. [L0745, 2020-26]
- Usually only one or two of many ad groups drag results down. Focus effort there rather than reviewing every ad group or thousands of products line by line, which costs a lot of time for little return. [L0719, 2021-22]

**Zero-conversion products**

- A product with a conversion rate of zero that spends a large share of the ad budget pulls the overall rate down. Identify it at product level and either lower its cost per click or pause it. [L1092, 2022]
- Example: a $300 non-converting product removed from a campaign changes spend from $1,050 to $750. The same $4,500 revenue then gives a ROAS of 6.0 instead of about 4.29. [L0745, 2020-26]
- A product that consumed about $500 in ad spend with no sales is the kind of heavy-traffic, non-converting product that compare-period reporting can expose. [L0721, 2021-22]

**Worked product examples**

- Top product example: $300 spend, ROAS 15.0, 9.6 conversions. Its CTR of 3.1% beat the competitor benchmark of 1.18%, while its CPC of $1.99 was above the competitor average of $1.68. Paying more was acceptable to capture more coverage. This product was the only converting product of its brand. [L0745, 2020-26]
- Mature campaign example: the campaign still had room to improve by segmenting weak products and reducing bids slightly to raise CTR and ROAS. [L0745, 2020-26]
- Early-stage bootstrapped example: $2,800 spend over one month generated $14,708 revenue, roughly a month or two after launch. The budget was raised from $1,000 to $2,800 once profitable. Across all Shopping campaigns the total ROAS was about 5.2. [L0745, 2020-26]

**Product-level actions**

- Action items in order:
  1. Shopping boost: compare your CPC against the benchmark and aim for a 20% CPC discount. [L1031, 2018]
  2. Shopping boost: add customer search terms to Shopping ad titles. [L1031, 2018]
  3. Conversion rate boost: aim for a 26% lift by running DPAs and optimizing for CTR. [L1031, 2018]
  4. LTV boost: aim for a 10% lift by making sure the opt-in and email marketing work properly. [L1031, 2018]
- Optimized titles and descriptions help Google Shopping results and do not hurt them, because Google Shopping pulls product data from product pages. [L0963, 2022]
- Changes that raise click-through rate or traffic without moving rankings still reach the bottom line, because the same visitors arrive more often. A 5% CTR increase is permanent and compounds over time. [L0575, 2014]

**Sample size before decisions**

- Google Shopping example math: 250 clicks at $1 CPC give $250 spend. Three sales of $1,000 each give $3,000 revenue, which is 12x ROAS and above target. But 120 clicks is still too small a sample to decide. [L0969, 2022]

### Search term and negative keyword analysis

**When to act on search terms**

- After about three weeks of Google Ads with several thousand impressions and hundreds of clicks, there is usually enough search term data to decide which terms to exclude as negatives. Make the negative keyword changes first and hold off on bid and budget changes until their effect shows. [L0807, 2025] (2025)
- Use pivot tables and filters in Google Sheets on the audited search terms:
  1. Filter Brand or non-brand to see how much spend goes to branded searches in prospecting campaigns. [L0876, 2025-26]
  2. Filter Intent stage to see which terms sit at top, middle or bottom of funnel. [L0876, 2025-26]
  3. Filter Relevant? = no and Recommended action = add as negative to build the negative list. [L0876, 2025-26]
  4. Filter Recommended action = promote to own ad group to find strong terms that deserve their own ad group or campaign. [L0876, 2025-26]
- Do not raise prices just because conversion is low. First analyze the campaign data, such as impressions, clicks and sales per search term and product, to find the real cause. [L0671, 2021]

**Brand search terms**

- Brand name Search campaigns typically have the highest return on ad spend (ROAS) but the smallest budget, because they capture high-intent searches. Use this as proof that the strategy works even though overall spend may be low. [L0210, 2022]
- Do not rule out brand-level search terms because of an assumption about their conversion rate. In the lesson's example, a brand-level ad group reached a 1.79% conversion rate and a US$65.46 cost per conversion, against 1.01% and US$91.36 for a model-level ad group. The test result should decide. Compare cost per conversion and conversion rate together, and check them against the cost per click. [L0880, 2021-22]

### Impression share, click share and lost impression share

**Definitions**

- Click share = the percentage of eligible clicks the account actually receives compared with competitors. [L1341, 2020-26]
- Search impression share = the percentage of eligible impressions where the ad appeared, for example for the search term "infrared saunas" when the store sells infrared saunas. [L1341, 2020-26]
- Click share of 16.19% means you win only about 16% of the clicks available in the auctions where you appear. Search impression share of 34% means you appear in only about 34% of the auctions you are eligible for. A very low search absolute top impression share means you almost never show in the top position. [L0745, 2020-26]
- Search absolute top impression share shows how often the ad appears in the first position. [L1341, 2020-26]
- Search impression share shows what percentage of the potential search traffic for a product the ads are actually reaching. Raising bids increases it, for example from 50% toward 60% or 70%. [L0750, 2020-26]
- Search Impression Share is called Search Impression Share in Google Ads and has an equivalent term in Microsoft Ads. It is used to judge bid levels. [L0836, 2024] (2024)

**Reading the levels**

- A Search Impression Share in the mid to high 90s means the ad group is effectively maxed out, and 100% is rarely seen. A share as low as 26% on high-value terms means bids are too low compared with competitors. [L0744, 2021-22]
- Impression share is the key scaling metric for a Google Ads campaign. A campaign with strong revenue but low Impression Share, for example 32% against a possible 66%, has room to grow and can be pushed by improving the campaign. Review it alongside revenue each month. [L0463, 2020-26]
- Search impression share below 10 percent, with no change after doubling the budget, means the bids or ads are not the main problem. Look at irrelevant search terms and negative keywords first. [L0806, 2024] (2024)
- Impression share after removing negative keywords shows how far the budget falls short of full coverage. [L0357, 2019]

**Procedure for campaigns above target**

1. In the custom report, find the campaigns, ad groups or products whose ROAS is above your target. [L0719, 2021-22]
2. Open them in Google Ads and check the search impression share. [L0719, 2021-22]
3. If impression share is well below 100%, there is room to raise bids, since more impressions will bring more clicks and sales. [L0719, 2021-22]
4. Expect cost per sale to rise and ROAS to fall when bids go up, and accept that as long as ROAS stays above target. [L0719, 2021-22]
5. If impression share is close to 100%, no more traffic is available on that product, so look at other areas. [L0719, 2021-22]
6. Use profit from strong products to fund bids on other products to test more exposure, while keeping the healthy ones where they are. [L0719, 2021-22]

**Worked example**

- An ad group sits at 20x ROAS against a 10x target, and its search impression share is 40%. This leaves a buffer to raise bids and get more traffic, accepting a lower ROAS while total profit rises. [L0719, 2021-22]

**Lost impression share**

- Lost impression share due to rank moves opposite to search impression share, but the two figures do not add up exactly to 100%. Lost impression share is therefore a useful signal rather than a precise complement. [L0879, 2021-22]
- Search impression share lost due to rank shows impressions lost because of quality score or cost per click. Cost per click is the main lever the advertiser controls. In the example, 65% of impressions were lost due to rank, meaning bids were too low relative to competitors. [L1341, 2020-26]
- Diagnosis example: with a CPC around $0.30 against a competitor benchmark of $0.91, but only 16% click share and 34% search impression share, the bids are likely too low and should be raised. [L1341, 2020-26]
- Benchmark max CPC shows the bid competitors are placing for the same products. If the account pays around $0.32 while the benchmark is $0.91, the account is getting clicks more cheaply than competitors. [L1341, 2020-26]

**Acting on click and impression metrics**

- If the cost per click looks too high to raise bids, the problem is likely conversion rate. The ads may be showing for the wrong keywords, bad search terms should be cleared out, or the website should be optimized. Benchmark CTR shows competitors' click-through rate for comparison. [L1341, 2020-26]

### CPC and CTR trends

**Benchmarks**

- Benchmark max CPC in Google Shopping is the average CPC the competition is bidding. Any benchmark value means the average of competitors. Compare your own CPC and CTR against these competitor averages before changing bids. [L0745, 2020-26]
- Benchmark CTR of competitors in the example was 1.18%, while the own CTR was 0.76%. This signals an issue to investigate. [L0745, 2020-26]
- Benchmark CPC is based on the product category, not on the specific brand. A brand can therefore see its CPC rise sharply even when its CPC is close to the category benchmark. [L0879, 2021-22]
- Google may show no benchmark data for a product with too little information. In that case the benchmark columns appear empty. Add the CTR column in the report to compare your own CTR with the competitor benchmark. [L0745, 2020-26]

**Rising CPC case**

- A top-selling brand was on back order, while a major retailer listed it as in stock and sold below the MAP price by about $100. The manufacturer did not enforce MAP despite repeated requests over several months. The CPC of that brand's campaign rose from $0.75 to over $2.00, and about two months later sales for the brand had almost stopped. [L0879, 2021-22]
- If a product's return on ad spend drops sharply from week to week, for example from 15x to 5x, check Google Shopping for competitors selling it below MAP. A sudden drop often traces back to a price violation. [L0968, 2021]
- Audit all ad accounts every week or every two weeks. When sales stop, check whether traffic dropped and look for causes such as a competitor breaking MAP by around 10%. [L0429, 2022]

**Bid moves on CPC**

- Procedure example: with a $0.50 CPC and ROAS of 15X, there is room to increase the bid to 60 to 70 cents to get more impressions. Monitor ROAS continuously to ensure profitability. [L0274, 2023] (2023)
  1. Go to Google Ads. [L0274, 2023]
  2. Look at historical campaign data over a 30-day period. [L0274, 2023]
  3. Calculate ROAS: revenue ÷ ad spend. [L0274, 2023]
  4. If spending $0.50 CPC and ROAS is 15X, have room to increase bid to 60-70 cents to get more impressions. [L0274, 2023]
  5. Monitor ROAS continuously to ensure profitability. [L0274, 2023]
- Example campaign with target ROAS 6.6 and actual ROAS 4.2 indicates room to reduce bids to improve ROAS. [L0745, 2020-26]
- Products with good click-through and conversion rates justify higher bids. [L1094, 2023] (2023)

**Search text ads**

- In a search text ad example, a max bid of $5 produced an average cost per click of about $3 in second place. Store average conversion rates of around 2 percent were used as the baseline for these calculations. [L0923, 2015]
- Search text ads usually have a higher cost per click than Shopping ads, and in at least 80% of cases this holds true. [L0751, 2021-22]
- Because the cost per click is higher, search text ads need a solid conversion rate to pay back the spend. Calculate the conversion rate needed to support the cost per click before scaling spend. [L0751, 2021-22]

**Cost trends over time**

- In 2020, online sales rose during the pandemic while ad costs first fell to multi-year lows before rising again. Monitor cost trends monthly rather than assuming a fixed level. [L1277, 2020]


Part 26 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/25-traffic-source-country-and-product-breakdowns.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/27-search-vs-shopping-and-other-channels.md
