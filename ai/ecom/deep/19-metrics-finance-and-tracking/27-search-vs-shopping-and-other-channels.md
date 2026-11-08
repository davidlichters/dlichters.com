<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 27 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/26-google-ads-and-shopping-reporting-and-optimization.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/28-email-retargeting-and-owned-channel-metrics.md

### Search vs Shopping and other channels

**Comparison**

| Channel | Cost per click | Notes | Ids |
|---|---|---|---|
| Search text ads | usually higher than Shopping (in at least 80% of cases) | needs a solid conversion rate to pay back spend | [L0751, 2021-22] |
| Shopping | usually lower | Shopping Actions provide no click data, see below | [L0751, 2021-22] |
| Brand name Search | not stated | highest ROAS, smallest budget | [L0210, 2022] |

- Shopping Actions provide no click data and no detailed reporting. Merchant Center shows only order-based information, which can be imported into Shopify, and the ads do not appear in Google Analytics. [L0738, 2021-22]
- Shopify's built-in analytics is useful for sales and product reporting, especially on higher plans, but it does not contain paid traffic data such as cost per click or ad spend. It cannot judge paid campaign performance. [L0721, 2021-22]
- Google Ads results cannot be compared between markets because many factors differ, including competition, demand and product type. A store should measure its performance against its own goals and history, not against other markets. [L0713, 2021-22]

**YouTube campaigns**

- Google Ads Audience Manager is used to build audiences. Affinity audiences (interests), in-market segments (active purchase research) and life-event audiences are available. For retargeting, the core audience is one's own website visitors and customer list. [L1510, 2020-26]
- Procedure for optimizing YouTube campaigns in Google Ads:
  1. Check each campaign's cost per view and spend. [L1510, 2020-26]
  2. Pause ads that are not working and keep the ones that do. [L1510, 2020-26]
  3. Review demographics and exclude age groups that underperform. The 65+ group was excluded in the example. [L1510, 2020-26]
  4. Review Topics and exclude irrelevant ones. [L1510, 2020-26]
  5. Review placements, which is where most time goes. Find expensive placements (for example ones with 20-cent views) and exclude them. [L1510, 2020-26]
  6. Use bid adjustments for devices only where cost per view differs meaningfully. [L1510, 2020-26]
- Example small YouTube campaign: about $300 spent with an average cost per view of $0.03. The campaign was an audience-based pre-roll for an audit video, with no keywords because audience-based targeting was used. Placement review revealed some 20-cent views that were excluded to lower average cost per view. [L1510, 2020-26]
- Cutting expensive placements is the fastest optimization. Exclude placements with high cost per view (for example 20 cents) to push average cost per view down, and keep the cheaper traffic. [L1510, 2020-26]

### Google Analytics custom report for ROAS

**Why GA**

- Google Ads does not provide ROAS as a field, so a custom report in Google Analytics is needed to measure it. The report must be set up manually, is not a standard report, and is built around the attribution and conversion tracking setup. [L0719, 2021-22]
- Google Analytics can calculate ROAS and cost per transaction for paid traffic, which Google Ads does not provide as a field. GA is therefore preferred for reporting paid campaign performance. [L0721, 2021-22]
- Standard tracking via the Google Ads conversion tag is usually under-reporting compared with GA, so the GA report is often more reliable for conversion counts. [L0721, 2021-22]
- The GA custom report is considered slightly more accurate than the Google Ads interface. It counts sales that came from Google ads and excludes draft orders. [L0719, 2021-22]

**Structure**

- The report breaks performance down by campaign, then ad group, then individual product. [L0719, 2021-22]
- The custom report pulls in Google Ads data only for campaigns in the Google Ads account linked to the GA property. It can be drilled down from campaign to ad group, then to individual products (for Shopping) or keywords, and finally to search terms. This shows cost, ROAS and cost per transaction at each level without manual calculation. [L0721, 2021-22]

**Build steps**

1. Go to Customisation, click **build a report** or **New custom report**, and give it a title, for example Google Ads Performance. [L0721, 2021-22]
2. Add metrics via **+ add metric**: Clicks, Impressions, CPC, Cost, CTR, E-commerce Conversion Rate, Transactions, Cost per Transaction, Revenue and ROAS. [L0721, 2021-22]
3. Add dimensions via **+ add dimension** in this order: Campaign, Google Ads: Ad Group, Keyword, Search Query. [L0721, 2021-22]
4. Add filters: Traffic Type exactly matches `paid` (include), and Source/Medium exactly matches `google / cpc` (include). [L0721, 2021-22]
5. Save the report and set the date range to the period you need. [L0721, 2021-22]

**Metric names and tabs**

- In the GA custom report metric list, use the plain metric names: Clicks, Impressions (not the variants offered in the drop-down), CPC, Cost, CTR, E-commerce Conversion Rate, Transactions, Cost per Transaction, Revenue and ROAS. [L0721, 2021-22]
- Metrics like Clicks and Impressions are incompatible with Map Overlay report tabs, so use Explorer or Flat Table tabs. [L0721, 2021-22]
- The conversion metric is labelled Transactions, the conversion rate is labelled E-commerce Conversion Rate, and revenue should be the plain Revenue metric. [L0721, 2021-22]
- The same custom report layout can be reused for other traffic sources by changing the traffic filter, for example organic search or email marketing. Build a separate report for each source so that paid, organic and email results are not mixed together. [L0721, 2021-22]

**Compare option**

- Compare two date ranges side by side to see how ROAS, conversion rate and other metrics changed, for example month against month. This helps spot products that receive heavy traffic but do not convert. [L0721, 2021-22]

### Audit and troubleshooting procedures

**Management approach**

- Check the overall account ROAS first against the profitability target. If the account is above target, no further action is needed. [L0721, 2021-22]
- If the account is not above target, drill into the campaigns below target, then their ad groups, then individual products. Fix only the specific underperformers instead of changing the whole account. [L0721, 2021-22]
- Example from the lesson: with a target of 9x ROAS, a campaign running at 16x and another at 12x are fine. An ad group at about 3x shows ad spend that is not profitable. The action is to find which products sit in that ad group and improve their conversion rate, instead of changing the whole campaign. [L0721, 2021-22]
- Example: an account with a 10x ROAS target shows 15x overall, but one of three Shopping campaigns runs at 3x while the other two run at 14x and 14x. The 3x campaign is pulling the account result down, so that campaign is the one to examine first. [L0719, 2021-22]

**Drill-down procedure for an account below target**

1. In the custom report, start at the account or campaign level and compare total ROAS to your target. [L0719, 2021-22]
2. If the total is at or above target, leave it unless you have time for a deeper review. [L0719, 2021-22]
3. If it is below target, find the campaign with ROAS below target, since one weak campaign can drag the whole account down. [L0719, 2021-22]
4. Open that campaign and find the ad groups below target. [L0719, 2021-22]
5. Within those ad groups, list products that get clicks but do not convert. [L0719, 2021-22]
6. For each product, check whether the margin is good enough to sell it. If not, stop advertising it. [L0719, 2021-22]
7. If the margin works, research who else sells the product and compare price and offer, then improve your offer until ROAS is above target. [L0719, 2021-22]
8. If that is not worth the time, lower bids so cost per click falls while conversion holds, or pause the product. [L0719, 2021-22]

**Checking the numbers**

- Verify cost per sale against spend ÷ sales before making decisions. Example: $152 spend with 2 sales gives $76 and $54 with 1 sale gives $54. These do not match the reported $74 and $52, so the account figures should be checked. [L0748, 2020-26]
- Spend check: over three months the Alpha campaign spent $152 and the Beta campaign spent $54, a total of $206, or about $69 per month. A $10 daily budget would allow about $300 per month, so the campaigns were heavily underspending. [L0748, 2020-26]
- Keyword and CPC performance should be reviewed from historic ad data before changes. [L1283, 2023]
- A store's traffic and sales should be reviewed over about seven days before making bid changes. Changes made after less than a week of data can be based on noise and lead to poor decisions. [L1114, 2023] (2023)

**Change history and recent drops**

1. Open Google Ads. [L0272, 2022]
2. Click **Campaigns** in the left sidebar. [L0272, 2022]
3. Click **Change History** to view all account modifications by date. [L0272, 2022]
4. Scan recent changes (bid adjustments, negative keywords added, budget changes). [L0272, 2022]
5. If you see a change that correlates with the performance drop, click the revert button to undo it. [L0272, 2022]
6. Run for a few days and see if performance recovers. [L0272, 2022]
7. This method identifies whether your own changes caused the issue. [L0272, 2022]

**Tracing a sale**

1. Open each ad account (usually Google Ads and possibly Meta) and see which one sent the traffic. [L0429, 2022]
2. Open the keyword breakdown in the campaign and find which keywords brought visitors who bought the same product. [L0429, 2022]
3. If one product sold repeatedly through a Google Shopping campaign, put that product in its own product group to monitor it. [L0429, 2022]
4. Keep the traffic level consistent over the next weeks. A drop from 100 visitors to 20 is a warning sign. [L0429, 2022]

**Review order for a Google Shopping account**

1. Impressions: how often the Shopping ad was shown. [L1341, 2020-26]
2. Clicks: how many visitors reached the website. [L1341, 2020-26]
3. Cost: total clicks multiplied by their cost per click. [L1341, 2020-26]
4. Cost per all conversions: spend divided by the number of conversions. [L1341, 2020-26]
5. Average CPC: the average amount paid per click. [L1341, 2020-26]
6. Benchmark max CPC: the bid competitors place for the same products. [L1341, 2020-26]
7. Click share: the share of eligible clicks the account receives compared with competitors. [L1341, 2020-26]
8. Search impression share: the share of eligible searches where the ad appeared. [L1341, 2020-26]
9. Search absolute top impression share: how often the ad appears in the top position. [L1341, 2020-26]
10. Search impression share lost due to rank: impressions lost because bids or quality score are too low. [L1341, 2020-26]
11. Benchmark CTR: the competitors' click-through rate for comparison. [L1341, 2020-26]

**Monitoring cadence**

- KPI monitoring for non-MAP products:
  1. Check Google Ads KPIs more often than for MAP products, on a fixed schedule such as every Monday, Wednesday and Friday, or at least twice a week, scaled to traffic volume. [L1051, 2020-26]
  2. Focus on the Google Shopping campaigns and watch for sharp drops in clicks or sales, which can signal that a competitor has undercut you. [L1051, 2020-26]

**Targets for conversion and cost per sale**

- Target conversion rate for Google Shopping campaigns is 2.5% or better. Measure this campaign rate separately from the store-wide conversion rate. [L0626, 2025+]
- Cost per sale for a keyword group that spends $300 for one sale signals a review of those keywords and their landing product page. [L0626, 2025+]


Part 27 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/26-google-ads-and-shopping-reporting-and-optimization.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/28-email-retargeting-and-owned-channel-metrics.md
