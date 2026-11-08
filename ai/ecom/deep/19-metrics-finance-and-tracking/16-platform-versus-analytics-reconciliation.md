<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 16 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/15-utm-tracking-and-attribution.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/17-validating-and-troubleshooting-tracking.md

### Platform versus analytics reconciliation

Three data layers and their jobs:

- Three data layers answer three different questions. The store platform or accounting software (e.g. Shopify, Xero, QuickBooks) shows total ad spend against total revenue. Google Ads shows campaign-level return on ad spend (ROAS). Google Analytics compares traffic channels with each other. Each layer has its own job and should not be used for the others. [L1406, 2020-26]
- Use the accounting or store platform to judge overall advertising efficiency, meaning total ad spend compared with total revenue. [L1406, 2020-26]
- Use Google Analytics to compare traffic sources with each other, and use Google Ads to optimize Google Ads campaigns. Treat the revenue number of a single source as a comparison figure, not as its exact true value. [L1406, 2020-26]

Worked gap example:

- In the example store, for the same period, Google Analytics reported 376,593 USD in revenue and Google Ads reported 552,255 USD. The gap was about 175,000 USD, or almost 46 percent of the Analytics figure. A difference like this is normal because each tool tracks conversions differently. [L1406, 2020-26]
- When reconciling revenue between Google Analytics and Google Ads, compare the same store over the exact same date range. Different periods alone can create a large gap before any tracking difference is considered. [L1406, 2020-26]
- A shopper may click one ad on one day and buy days later through another ad or channel, and the earlier interaction often is not recorded correctly. This missing credit is the most likely reason for differences between platforms in active campaigns. When comparing data levels, always consider assisted conversions first. [L1406, 2020-26]

Multi-Channel Funnels and conversion paths:

- Google Analytics Multi-Channel Funnels and attribution reports show the different sequences of touchpoints that lead to a conversion. They try to close some data gaps, but information is still lost. [L1406, 2020-26]
- In the 30-day example, the store generated 1,670,000 USD in revenue and 361 conversions. In the Multi-Channel Funnels view used, 209 of these conversions (about 60 percent) were multi-step, multi-click conversions. The Multi-Channel Funnels report only showed conversions with more than two steps. [L1406, 2020-26]
- The speaker estimated, without data to back it up, that the true share of multi-click conversions in that store was probably closer to 70 percent. Treat this as an unverified guess. [L1406, 2020-26]
- Conversion paths labeled "unavailable" mean the data is missing. In the example, "unavailable" was the top conversion source and the seventh, appearing 142 times in the list. Do not read these entries as a real traffic channel. [L1406, 2020-26]
- To count "unavailable" entries in the Multi-Channel Funnels conversion path list, set the list to show 250 rows and search for "unavailable". The number of matches shows how much data is missing in that list. [L1406, 2020-26]
- Google Analytics is typically more accurate than Google Ads for conversion reporting because it uses a different tracking mechanism and better recognizes when a single purchase results from multiple earlier visits. ** [L0256, 2021-22]

Google Ads revenue and Analytics choice:

- Google & YouTube analytics integration attributes sales to their source, such as Meta, organic Google, alpha campaign or beta campaign. Use these attributions to judge whether each channel is profitable. [L0972, 2025]
- Google Analytics compares traffic channels; Google Ads reports campaign ROAS. Use the two only for their own job, as set out above. [L1406, 2020-26]

Meta reporting checks:

- Meta's Purchase ROAS = attributed purchase revenue divided by amount spent. Meta's value is approximate because it is based on purchases attributed to the ads, including sales through Shops, Marketplace, Pages or Messenger, and some values may be estimated by third-party technologies. [L1030, 2026]
- Meta shows a notice about changed attribution reporting for clicks and engagement results. Check the "About this update" notice before comparing results across time periods. [L1030, 2026]
- Default Meta ad-set attribution and reconciliation: use the account's own store data as the reference, as set out in the iOS and tool sections above. [L0694, 2024; L0688, 2021+]

### Offline sales, phone calls and keyed responses

Google Ads call tracking:

- Implement call tracking in Google Ads when you receive more than 30 calls per month to understand their source and performance. [L0234, 2020-26]
- Calls shorter than 20 seconds do not count as conversions. This filters out very brief or incomplete calls. [L0234, 2020-26]
- Each website visitor is assigned a unique tracking phone number. When the same person returns to the site, they see the same number, which allows their actions to be attributed to their original traffic source. [L0234, 2020-26]
- Google displays a forwarding number to each visitor in place of your actual phone number. When a visitor dials the forwarding number, Google immediately routes the call to your real number and records it as a conversion. [L0234, 2020-26]
- Google Ads can import offline conversions, such as sales made by phone, so that phone-based sales are counted alongside online conversions in campaign results. [L1033, 2019]

Phone sale attribution procedure (Google Ads):

1. Store each customer's contact details in a CRM tool such as Klaviyo or Wicked Reports, so the customer is linked to their web activity when they call.
2. Look up the caller in the CRM to see their click history.
3. Confirm from the tagged links that the customer came from a Google ad.
4. Upload the offline sale with its click data in the offline conversions section of Google Ads so the sale is attributed to the campaign.

The process is cumbersome but gives Google the data it needs. [L0454, 2019]

Keyed and coupon-based response tracking:

- Advertisers without tracking often pay two to thirty-five times what their sales should cost, because they never see which ads produce the cheapest results. Keyed comparison can reveal cost gaps of several times between ads for the same product. [L1261, undated]
- Changing ad size, pictures or type without a traced comparison often raises cost per reply while adding no extra sales. A bigger or more decorative ad must be proven to bring proportionally more sales. [L1261, undated]
- Reply cost depends on how a coupon is redeemed. In one test, mailed sample requests cost about 70 cents each, while the same ads with coupons presented at a local store produced inquiries for 18 to 22 cents each. [L1261, undated]

Store display test procedure:

1. Choose two comparable towns.
2. Run the window or store display in one town only.
3. Compare total product sales in both towns, not only the sales of the display store.
4. Keep the display spend only if total sales rise.

[L1261, undated]

### Platform reporting quirks and delays

- TikTok's displayed spend in the ad manager is lower than the true spend and updates a minute or two late. A campaign showing $50 spent may have actually spent $60 to $80, so payment should be controlled manually. [L1382, undated]
- Pinterest results take six to seven days to appear, slower than TikTok or Facebook. UTM parameters on the destination URL are the main way to track sales by campaign, and sales can appear with a delay because the platform records them slowly. [L1134, undated]
- Pinterest's tracking delay is a platform recording issue, not a loss of sales. UTM parameters show the source of each sale. [L1135, undated; L1134, undated]

### Campaign-level UTM use for budget decisions

- Use UTM parameters to decide which ad set or campaign deserves more budget within a country, rather than relying on country-level data. [L1316, 2024+]
- Sellers can compare campaigns across several accounts by reading UTM data, without linking the pixel to each account. [L0638, 2023]


Part 16 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/15-utm-tracking-and-attribution.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/17-validating-and-troubleshooting-tracking.md
