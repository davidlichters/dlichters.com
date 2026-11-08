<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 33 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/32-automated-and-enhanced-bidding.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/34-splitting-by-brand-and-supplier.md

## Campaign Segmentation, Tiers and Scaling Structure

### Scope and Sequencing of Segmentation

- Start with one Alpha and one Beta campaign that hold all products. Split them only as data shows margin, supplier, shipping-region or brand differences. [L0856, 2024; L0278, 2025]
- Split on what the data shows, not on a fixed template. [L0466, 2018]
- Segment by performance, because products and search terms have different CTRs and conversion rates. Bid more on the segments that convert well and less on the weaker ones. [L0510, 2018]
- Segment at campaign level only when products have very different performance profiles or margins. Keep related variations in the same campaign pair and divide them further with product groups by brand and SKU. [L0225, 2015+]
- Products with different categories get separate Alpha-Beta pairs. Related variations, such as gas and electric lawnmowers, stay in the same pair. [L0225, 2015+]
- Use a waterfall structure for product groups: all products → product type → brand → individual SKU. Segment down to SKU for best optimisation, but do not create so many campaigns that performance cannot be managed. [L0225, 2015+]
- Google does not reward campaign count directly. A structure that is easy to manage gets managed more often and to a higher standard, which tends to improve profitability. [L0747, 2021-22]
- A store with 500 or more products needs organisation inside Shopping campaigns. Without it, finding one product to change its bid or add negatives takes too long, and slow management leads to less management. [L0747, 2021-22]
- The profitable limit of Shopping traffic is reached when extra clicks can no longer be bought at a cost that meets the target cost per sale and target ROAS, not when the search pool runs out. Narrow niches and small markets reach this limit at lower revenue. [L0744, 2021-22]
- Advanced strategies beyond Shopping Ads apply to stores doing $50,000-$100,000+ per month that have reached the scaling ceiling at a 10× return on ad spend with Shopping campaigns. [L0194, 2026+]
- Keep priority products in a separate campaign from secondary products so campaigns do not bid against each other for the same searches. Check for overlapping products whenever campaigns are restructured. [L0807, 2025]
- Do not place one product in more than one segment. Overlap splits budget and distorts data. [L0224, 2024+]

### Campaign Types and Core Structure Rules

- **Campaign type:** When creating segmented Shopping campaigns in Google Ads, select Standard Shopping, not Performance Max. Standard gives manual control over product groups and segmentation exclusions. [L0224, 2024+]
- **Core bidding setup:** Keep profitable manual Shopping campaigns as the core. When they produce data and profit, raise budgets step by step rather than switching to Smart campaigns. [L0963, 2022]
- **Tier structure:** Campaigns can be split into tiers (for example beta, alpha 1 and alpha 2). Universal negative keywords sit at campaign level. Brand or product negatives funnel traffic toward the tightest tier. [L0247, 2021]
- **Alpha 2 and Beta 2:** A typical Shopping structure has a main Alpha and a Beta campaign holding product groups. Duplicating them creates Alpha 2 and Beta 2, which separate lower-priced products from the main campaigns. [L0852, 2020]
- **Separate budgets per pair:** Create separate Alpha and Beta campaigns, each with its own budget and negative keyword lists. [L0251, 2023]
- **Isolating a product:** To test one product on its own, create a new Alpha and Beta pair exclusively for that product. [L0251, 2023]
- **No shared overlap:** Do not share one budget across three campaigns (all-products Alpha, all-products Beta, single-product Alpha/Beta). This prevents proper bid optimisation. [L0251, 2023]
- **Shared budget per tier:** Several campaigns can run on one shared daily budget. Assign shared budgets to each tier based on profitability goals. Do not let the same products sit in overlapping campaigns. [L0278, 2025; L0360, 2024]
- **Campaign per category:** Split product categories into separate campaigns, not only separate ad groups. This lets you set budgets per product or product type and put more money behind products with high ROAS, for example $1 in and $20 back. [L0575, 2014]
- **Subcategories:** When the niche widens to several product types, create separate Alpha-Beta pairs for each subcategory, for example one paddle board pair and one skateboard pair. Keep the existing structure if it already meets your return target; splitting is better practice, not urgent. [L0854, 2022]
- **Add-on products:** Add-on products with different keywords run in separate campaigns, for example an Alpha add-on and a Beta add-on, so main campaign data is not distorted. [L0835, 2023]
- **Staged build-up:** Start with all products in one Alpha and one Beta campaign. Optimise with negative keywords and product-level CPC. When a few products perform very well, create Alpha 2 and Beta 2 containing only those products, exclude them from the original campaign, and raise the budget on the new campaign. [L0665, 2022; L0856, 2024]
- **Exclude losers:** A product is a loser when it gets no sales or customers are unhappy with it, for example because it comes from a bronze-level supplier. Exclude such products from all campaigns. Excluded products cannot appear or spend budget anywhere, so the budget moves to winning brands. [L0715, 2020-26]

### Custom Labels: What They Are and How to Plan Them

- Google Shopping supports five custom labels: Custom Label 0, 1, 2, 3 and 4. Each is a separate column in the Shopify product CSV and appears as "Google Shopping / Custom Label 0" through "Custom Label 4". Numbering starts at zero, giving five slots. [L0402, 2021-22; L0747, 2021-22]
- Labels act like tags on each product, and campaigns filter on them. Each product can carry up to five. [L0747, 2021-22]
- Custom labels are the more reliable segmentation method. Google's built-in segmentation options in Google Ads are glitchy, hard to understand and often miss products in the feed. [L0747, 2021-22] **
- Custom labels are a flexible way to split Shopping campaigns by brand, product title, product type or price. A product type label goes into any free custom label column the same way. [L0402, 2021-22] **
- Common setup: brand in one label, product title in another, and price or product type in the remaining labels if needed. [L0747, 2021-22] **
- Decide the attributes before exporting. Put each chosen attribute in its own custom label column, for example vendor in Custom Label 0 and product title in Custom Label 1. [L0402, 2021-22] **
- **Label 0 for margin vs. brand:** Use Custom Label 0 for initial profit-margin segmentation. More advanced segmentation with additional label slots exists but is rarely necessary for typical dropshipping stores. [L0224, 2024+] Where brand is the main split, one source places vendor in Custom Label 0 instead. [L0402, 2021-22; L0747, 2021-22] ** Use the margin approach when profit tiers are the first split; use the brand approach when brand is. Both can be combined by using different label slots.
- Putting the product title into a label lets you find individual products quickly within a Shopping campaign. Brand or vendor in one label and title in another gives both a campaign-level and a product-level view. [L0402, 2021-22] **
- Once a title label exists, product group lists can show product titles instead of raw IDs such as "shopify_us_" followed by two long numbers. A filter then finds one product quickly. Without it, IDs are hard to read and the hover tooltip with the title is truncated. [L0747, 2021-22] **
- Product names in the Item ID subdivision come from feed titles. Clean up unclear or code-like titles so per-product results are easier to read and act on. [L0746, 2020-26]

### Timing: Pre-Labelling and Publication Delays

- Apply custom labels to all products in the profitability tiers you plan to use before creating segmented campaigns. Google needs about four hours or longer to publish labels to Ads after bulk edits. Pre-labelling avoids waiting mid-workflow. [L0224, 2024+]
- Merchant Center usually needs about two to three hours to show new custom labels, and up to eight hours for large feeds. [L0402, 2021-22] **
- Custom labels cannot be used in Google Ads campaign subdivisions until Merchant Center has recognised them. Creating or editing subdivisions before that shows old or no labels. [L0747, 2021-22; L0402, 2021-22] **
- After the app sync shows as finished, wait a few hours or until the next day before editing subdivisions or creating new campaigns with custom labels. Labels not yet in Merchant Center will not appear in the Google Ads interface. [L0402, 2021-22] **

### Custom Labels: CSV Procedure (Shopify Export and Import)

**Procedure A: Adding custom labels to all Shopify products via CSV** [L0402, 2021-22] **

1. In the Shopify admin, go to Products > All products.
2. Click Export, select all products and click Export products.
3. Shopify sends a download link by email when the file has 100 or more products (smaller files may download directly). Download the CSV once ready.
4. Open the CSV in a spreadsheet program (Numbers, Excel or similar).
5. Scroll to the Google Shopping custom label columns (Google Shopping / Custom Label 0 to 4).
6. Copy the source column (e.g. Vendor for Custom Label 0) and paste it into the matching custom label column for every product.
7. Copy the Title column and paste it into Custom Label 1 (or other chosen label).
8. Rename each pasted column header back exactly to 'Google Shopping / Custom Label 0' (or the matching label). Without the exact header the upload fails.
9. Save/export the spreadsheet as CSV.
10. In Shopify, go to Products > Import, choose the CSV, tick 'Overwrite any current products that have the same handle', and click Upload and continue.
11. Review the preview and click Import products. Large files can take a few minutes up to about half an hour; Shopify sends an email when the import is complete.
12. In the Feed for Google Shopping app, go to Settings > Sync Settings From Shopify.
13. Select 'Manually sync meta fields' (Re-sync meta fields), tick Custom Labels, and click Yes, sync from Shopify.
14. Keep the window open until the app reports that syncing has finished.
15. Wait for Google Merchant Center to pick up the values, then check the campaign settings in Google Ads.

**Procedure B: Detailed version of the same CSV method** [L0747, 2021-22] **

1. In the Shopify admin, go to Products and open All products.
2. Click Export, select all products and choose Export products.
3. Wait for the file. Stores with 100 or more products usually get an email with a download link when it is ready, while very small catalogues may download straight away.
4. Open the CSV in a spreadsheet program such as Excel.
5. Scroll right to the Google Shopping / Custom Label 0 to Custom Label 4 columns.
6. Decide what each label will hold, for example brand in Custom Label 0 and product title in Custom Label 1.
7. Copy the source column (for example Vendor for brand, Title for product title) and paste it into the chosen label column for all products.
8. Rename the pasted column header back to exactly Google Shopping / Custom Label 0 (or 1, 2, 3, 4 as applicable). If the header is not restored, the file will not upload properly.
9. Repeat steps 6 to 8 for every label you use.
10. Export the spreadsheet as CSV. The file name can be anything.
11. In Shopify, go to Products and click Import, then add the CSV file.
12. Tick the option to overwrite existing products that have the same handle, then click Upload and continue.
13. Check the preview and click Import products. Large files can take several minutes to about half an hour, and Shopify sends an email when the import is complete.
14. Open the Feed for Google Shopping app and go to Settings, then Sync Settings From Shopify.
15. Press RE-SYNC META FIELDS (Manually Sync Meta Fields), confirm that Custom Labels is ticked, and choose to sync from Shopify. Keep the window open until the app reports that syncing has finished, because closing it can leave the sync incomplete.
16. Wait for Google Merchant Center to pick up the labels. This usually takes about 2 to 3 hours and can take up to 8 hours depending on feed size.
17. Only after that, check the labels in Google Ads and build campaign subdivisions. Waiting a few hours or until the next day before editing segmentation is recommended.

**App menu path (Feed for Google Shopping)** [L0402, 2021-22] **
- Settings > Sync Settings From Shopify > Manually Sync Meta Fields > RE-SYNC META FIELDS.
- In the pop-up "Please choose fields which needs to resync", tick Custom Labels (Select All is possible), then click YES, SYNC FROM SHOPIFY.
- Keep the page open until the status shows finished.

### Custom Labels: Common Mistakes

- **Wrong source column:** Pasting the wrong source column, such as product title where the brand belongs, sends wrong values to Google. Check the first rows of each custom label column before exporting the CSV. [L0747, 2021-22] **
- **Header check before pasting:** Check the copied header before pasting. A wrong column (for example vendor instead of product title) must be removed and copied again. Afterwards, set the header back to the exact custom label name, or the upload fails. [L0402, 2021-22] **
- **Header left as copied name:** If the header is left as the copied column name, the CSV upload will not work properly. The header must be changed back to the exact custom label name, for example 'Google Shopping / Custom Label 0'. [L0402, 2021-22] **
- **Overwrite option:** A CSV import overwrites every existing product with the same handle. Tick the overwrite option deliberately and understand it before uploading. [L0747, 2021-22] **

### Example: Brand Group with Product Types

- For a brand with three product types, the ad group is named after the brand and holds three product groups, one for each type. Opening the group for one type shows only the products of that type, instead of filtering one long list of all brand products. [L0747, 2021-22] **
- Ad groups are the first level of segmentation. For high-ticket stores they are usually split by brand, because each brand has different product margins and bids should reflect margin. [L0742, 2021-22] **
- Product type is the second most common split after brand. Ad groups can be split by product type instead of brand. Choose the split that separates products with different margins and bid needs. [L0742, 2021-22] **

### Demo Account Example (Shopping Campaign Split by Search Value)

- In the demo account, three Shopping campaigns were split by low, medium and high value search terms. Two campaigns showed a budget of US$300 each, and one was limited by budget. Within a brand product group, the group level showed max CPC US$0.30 (enhanced), individual products were bid at US$0.20 per click, and the benchmark max CPC shown was US$0.74. [L0747, 2021-22] **

### Splitting by Margin and Profit

**Principle**

- Allocate ad spend and adjust CPC bids based on individual product profit margins, not order volume. Increase spend on products with higher margins and lower CPC bids on products with lower margins or high COGS. [L0208, 2024+]
- Segment by intent and margin. Uniform settings produce worse targets than group-specific ones. [L0454, 2019]

**Three-tier margin setup**

1. Identify high-margin, mid-margin, and low-margin product groups across all suppliers. [L0278, 2025]
2. Create Alpha High Margin (HM), Beta HM, Alpha Mid Margin (MM), Beta MM, Alpha Low Margin (LM), Beta LM campaigns. [L0278, 2025]
3. Assign shared budgets to each tier based on profitability goals. Example: $100 daily budget split as $60 HM, $30 MM, $10 LM. [L0278, 2025]
4. This allows budget control per margin tier rather than one budget across all products. [L0278, 2025]

**Net-profit tiering**

- For net-profit tiers, use separate Alpha and Beta campaigns per profit band. Keep products below the minimum profit out of all campaigns. [L0856, 2024]
- Example: Alpha 1 and Beta 1 contain products above a set net profit per sale. Products between two thresholds go into Alpha 2 and Beta 2. Products below the lower threshold are excluded from all campaigns. Budget can be split, for example, 80 percent to the high-profit tier and 20 percent to the middle tier, with nothing to the lowest tier. [L0856, 2024]

**Step-by-step: building the first profit-tier campaign** [L0224, 2024+]

1. In Google Ads, create a new Shopping Campaign.
2. Select conversion actions for tracking.
3. Select your product feed (connected via Some Process).
4. Choose Standard shopping campaign (not Performance Max).
5. Click Continue.
6. Name the campaign (e.g., "alpha high profit").
7. Select bidding strategy: manual CPC or enhanced CPC.
8. Set daily budget amount.
9. Set campaign priority (alpha or beta).
10. Turn off Search Network.
11. Keep All Devices selected (if this has worked in past campaigns).
12. Select country where you do business.
13. Name the ad group.
14. Set default cost per click based on historical data from existing campaigns, not estimates.
15. Click Create Campaign.
16. In the product groups section, click the plus icon to subdivide.
17. Select Custom Label from the dropdown.
18. Select Custom Label Zero.
19. Enter or select the label value (e.g., "high profit").
20. Verify the product count displayed matches expectations.
21. Save without editing bids.
22. For the remaining "All Products" group, click the green button.
23. Select Exclude to remove all non-labeled products from this campaign.
24. The campaign now contains only the labeled product segment.

**Example:** one source Merch Store had 22 products in the product feed. After analysing sales data, three t-shirts were identified as the highest-profit products and moved into a separate Alpha campaign with dedicated budget. The same process would be repeated for mid-profit and low-profit segments, creating separate Alpha and Beta campaigns for each profitability tier. [L0224, 2024+]

**Before launching profit-tier campaigns**

- Pause the original all-products Alpha and Beta campaigns in Google Ads before launching the new profit-tier campaigns. If both old and new remain active, the same products receive budget from multiple campaigns, wasting budget and corrupting performance data. The new segmented campaigns must be the only active campaigns for their products. [L0224, 2024+]

### Splitting by Price Tier

**Principle**

- Tiered campaigns by price follow the same logic as Alpha and Beta: the highest-priced products get top priority, and each lower price tier is separated out by priority. This is used when scaling beyond the initial two-campaign structure. [L0466, 2018] **

**Threshold values by source and context**

| Source | Threshold | When it applies |
|---|---|---|
| one source [L0467, 2019] | Minimum price of $200 or $500 for paid Google ads | Premium-only Google Shopping campaign |
| one source [L0852, 2020] | Threshold X, for example $300 or $400 | Duplicating campaigns when cheap items use up the budget |
| one source [L0469, 2021] | $1,500 | Comparing ROAS between price ranges |
| one source [L0466, 2018] | High, mid and low tiers, no fixed figure | Scaling beyond the initial two campaigns |

**Premium-only campaign** [L0467, 2019] **

1. Set a minimum price point for paid Google ads, for example $200 or $500.
2. Segment products in Google Merchant Center so that only products above that price are advertised on Google Shopping.
3. Keep the lower-priced products out of those ads, since they are hard to keep profitable through them.
- Lower-priced products that already make money can stay on the same website, but they should be kept out of the high-price Google Shopping campaigns. Keep the paid ads focused on the higher-value items.

**Splitting when cheap items use up the budget** [L0852, 2020] **

1. Duplicate each main campaign to create a second one.
2. In the original campaigns, exclude products under your chosen price threshold X, for example $300 or $400.
3. In the duplicated campaigns, exclude products over the threshold X so they only show lower-priced products.
4. Lower the daily budget and the cost per click in the duplicated campaigns, and let the main campaigns spend on the higher-priced products that earn the most.

**Comparing ROAS by price range** [L0469, 2021] **

1. Build Alpha and Beta campaigns that include all products.
2. Duplicate them into Alpha 2 and Beta 2 filtered to products above a price threshold, such as $1,500.
3. Modify the original Alpha and Beta campaigns to include only products below that threshold.
4. Compare ROAS for each price range and move budget toward the better range.


Part 33 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/32-automated-and-enhanced-bidding.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/34-splitting-by-brand-and-supplier.md
