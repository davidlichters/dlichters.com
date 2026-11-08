<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 35 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/34-splitting-by-brand-and-supplier.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/36-learning-phase-reporting-and-weekly-optimization-r.md

### Relaunching, Rebuilding and Migrating Stalled Accounts

**Principle: new campaigns, not reactivated ones**

- If relaunching a store that was paused for years, create entirely new campaigns instead of reactivating old ones from the previous period. New campaigns learn with recent market data and follow current platform best practices. [L0208, 2024+]
- Repair before rebuilding: long-running campaigns with steady, high spend can carry some weaknesses in setup, because Google gives account history and spend volume weight. Repair the existing campaign first and rebuild or pause only if nothing moves after repairs. Rebuilding is generally slower to recover than fixing an account with history. [L0510, 2018]
- Create a new campaign only when the existing one is not moving after repair attempts. Pausing is rare. In roughly 1% of cases, abandoning the whole account and starting fresh may be the better choice, typically in penalised niches. [L0510, 2018]

**Relaunch procedure for a stalled or failed store** [L0853, 2021] **

1. Rebuild paid ad campaigns from scratch instead of turning the old ones back on.
2. Submit products to free Google product listings if they have not been submitted yet.
3. Send a timely promotion to the existing email list to re-engage past subscribers.
4. Follow up with the remarketing audience.
5. Restart a regular social media schedule, for example one post per week.

**Rebuilding Google Shopping spend on an older account with sales history** [L0804, 2023] **

1. In Shopify, list every product sold in the past one to two years together with its profit.
2. Build a new product feed that contains only the products that sold profitably in that period.
3. Remove the old product feed from Google Merchant Center.
4. Upload the new feed to Merchant Center.
5. Spend the reduced daily budget only on these products, and add more products after they start to sell.

**Changing to a new store URL** [L0247, 2021] **

1. Turn off all Google Ads, without deleting the ad accounts.
2. In Merchant Center, disconnect the product feed and delete the existing products.
3. Create a new Merchant Center account for the new store and upload the feed there.
4. Reuse the same Google Ads account pointed at the new store.
5. Do not turn the old redirect ads back on, because tracking will break.

**Rebuilding for best-sellers** [L0472, 2025] **

- See the bestseller section above for the procedure and case. The rebuild uses only proven sellers and pauses the old non-converting Alpha and Beta campaigns.

### Campaign Structure: Start Simple, Segment on Evidence

- Start with at least one Alpha and one Beta Shopping campaign, then segment further into brand campaigns and best-seller campaigns, giving the highest budgets to the most productive ones. ** [L1274, 2018]
- Keep the structure simple in the first stage. Segmenting too early splits the budget and slows learning, so segment later as the data supports it. ** [L1281, 2022]
- Use a two-tier structure at launch, with one Alpha and one Beta campaign holding all products. ** [L1113, 2022]
- In the early phase, the goal is to buy data on search terms and products that show around a 1% conversion rate. Spreading a small budget across hundreds or thousands of products leaves each product with too few clicks to show its own conversion rate, so concentrate budget on fewer products. [L1341, 2020-26]
- When many products have only one or two clicks each (for example, 500 products with two clicks each), reduce the number of products by turning off weaker brands or products. Concentrate spending on the highest-margin or best cost-per-click items to gather data sooner. [L1341, 2020-26]
- Campaigns can be split by supplier or product category, for example separate Alpha and Beta campaigns per supplier or category, to see which segments perform best. ** [L1088, 2020]
- When adding a second niche, use a separate Alpha/Beta pair with its own budget and no overlapping products. Mixing unrelated products into an existing campaign resets its learning phase and can hurt performance for weeks. [L1285, 2024]

### Splitting by Brand and Supplier

**Brand split procedure** **:
1. Start with all products in one Alpha and one Beta campaign.
2. Once one brand is driving most sales, duplicate both campaigns.
3. In the originals, remove brands two through seven.
4. In the duplicates, remove brand one.
5. Set budgets separately: keep the proven brand at its historical daily spend, test the others at a lower level, then optimise. [L1111, 2020]

**Example budget split** **: the proven brand keeps its $100 per day, and the other brands start at about $50 per day. Budgets are adjusted based on how each campaign performs. [L1111, 2020]

- Use the Alpha/Beta structure to isolate brands. Put a brand that outperforms into its own Alpha and Beta campaigns, then exclude that brand's products from the main Alpha and Beta. The main campaign's budget then goes only to the rest of the catalogue. ** [L1112, 2021]
- Suppliers with low search volume can still be listed. Put them in their own Alpha and Beta, or keep them in the main campaign with a lower max cost per click for their brand so they do not overspend. ** [L1112, 2021]
- There is no fixed golden ratio for the budget between Alpha and Beta campaigns. The right split depends on the niche, the suppliers and how many products each has. ** [L1112, 2021]

**Feed per brand** **: Create separate product feeds per brand in the Google Shopping app for Shopify (for example, a Nike feed and a Reebok feed). Link each feed to its own campaign instead of putting all brands into one campaign with many ad groups. This prevents a product from appearing in the wrong ad group. [L0969, 2022]

**Weak supplier separation procedure** **:
1. Duplicate your main Alpha and Beta Shopping campaigns.
2. In the new set, include only the weak supplier's products.
3. Exclude that supplier from the main Alpha and Beta campaigns.
4. Keep the budgets as they are, and raise the CPC for the new set only if traction stays low. [L0968, 2021]

- Do not raise bids on a weak supplier inside the main campaign. That can pull traffic away from products that already convert. A separate campaign lets you measure that supplier's performance on its own. ** [L0968, 2021]

### Splitting by Price, Margin and Product Tier

**Price bands** **: When the Shopping campaign brings cheap add-on sales instead of high-ticket items, split it into price-band campaigns, for example one for products of $500 or more and one for products under $500. Give each campaign its own budget and bids, so expensive items get the budget and cheap items get cheaper clicks. [L1086, 2019]

**Accessories** **: Put low-priced accessories in a collection linked from the product pages as add-ons, and exclude that collection from Google Shopping campaigns, since advertising cheap accessories is rarely profitable. Accessories priced around 400 to 500 USD may be worth ads. [L1110, 2019]

**Print on demand** *(2025)*: If print on demand products are added to a store, include only the high-ticket products in the Shopping campaigns and exclude the print on demand products. Otherwise most ad spend can go to items that earn about $10 per sale. [L1097, 2025]

**Product tiers** *(2024)*:
- Alpha and Beta campaigns can be segmented by product tier, such as a bestseller group, a mid-seller group, or groups split by high, mid and low profit. [L1115, 2024]
- Add new SKUs to an existing Alpha or Beta group only if that group contains the same tier of products, such as bestsellers. Do not mix new, untested products into a bestseller-only group. Create a separate testing group instead. [L1115, 2024]

### Bestsellers, Alpha 2 and Beta 2

**Concentrated sales procedure** *(2023)*: Use this when a few products dominate sales.
1. Keep the current CPC changes first as the main step.
2. When about 20 of 100 products make almost all the sales, duplicate the Alpha and Beta campaigns into Alpha 1, Beta 1, Alpha 2 and Beta 2.
3. Keep only the top products in Alpha 1 and Beta 1.
4. Move the remaining products into Alpha 2 and Beta 2 with their own budget, so they can start to spend without affecting the top products. [L1114, 2023]

**Source difference:** The 2022 source keeps the structure at two tiers. It says to split later into Alpha 2 and Beta 2 by best sellers, a single brand or a price range, instead of adding a third tier. ** [L1113, 2022] The 2023 source names the four campaigns and uses the trigger of about 20 of 100 products. [L1114, 2023] Use the 2022 criteria to decide what goes into Alpha 2 and Beta 2, and the 2023 trigger to decide when to create them.

- Traffic volume is driven by competition, search volume and budget, not by the number of brands sold. To increase clicks, raise bids or budget on the products already listed rather than adding a fixed number of brands. [L1114, 2023]
- For products with more than about 10 competing stores on Google Shopping, paid traffic is likely to become too expensive. Keep those products on the store for organic traffic, and focus the paid budget on products with fewer competitors. [L1114, 2023]

### Custom Labels and Product Groups

- Custom labels are optional at launch. Use them later to manage products more finely as sales grow, for example when moving from about 20,000 to 50,000 per month toward 100,000 or more per month. [L1168, 2026+]
- Segment Shopping campaigns down to the product ID level, because only then can you set bids per product. Exclude the "everything else" catch-all subgroup at each level, since it duplicates products already assigned above it. [L1328, 2015]

### Geo-Targeting and Costly-Shipping Suppliers

**Default position:** Geo-targeting is off for almost all campaigns. Use it only for the special supplier case with heavy goods and a warehouse. *(2023.)* [L0964, 2023]

**Narrow case:** For a supplier with heavy or costly shipping, target only the low-shipping region for that supplier's products. This applies to a very small share of products. *(2022.)* [L0963, 2022]

**Heavy items:** Restrict ad targeting to regions close to the supplier's warehouse to keep shipping costs manageable. The margin must still cover shipping when the customer is further away. *(2022.)* [L0969, 2022]

**Supplier far from customers procedure** **:
1. Create a new campaign named after the region.
2. Exclude that supplier from the main campaign.
3. Include the supplier only in the regional campaign.
4. In Google Ads, open the campaign, then the ad set, then the Locations field, and select the supplier's state and nearby states. [L0967, 2020]

**General principle** **: If you are unsure whether to adjust geographic targeting, increase spend in regions with clearly good results and cut spend where it only wastes money. Decide with data, not guesses. [L1277, 2020]

### Multi-Country Campaigns

| Approach | When it applies | Source |
|---|---|---|
| Separate campaigns per country, for example alpha and beta US plus alpha and beta Canada | Current standard for multi-country stores | [L1092, 2022] |
| One website, duplicated ad sets with a smaller budget for the second country | Older advice (2018); do not build a separate website per country | [L1274, 2018] |

- Shopify changes currency and payment options by visitor location, but not the domain. For separate US and Canada stores, run separate campaigns per country, named for example "US Alpha All Products" and "CA Alpha All Products". *(2025.)* [L1116, 2025]
- A store can be ready to expand to Canada only after the US campaigns perform well, so the US should be the focus until then. *(2023.)* [L1094, 2023]
- Pricing and keyword volume in a smaller country like Australia are lower. A niche may need to move up one level to meet the same thresholds. Once it meets the criteria, the smaller market is still viable. ** [L1090, 2021]
- A single English-language store was tested across five markets at once: the United States, Australia, Canada, New Zealand and the United Kingdom. Multi-country testing helps find the market where the same product gets the best click-through and sales results. [L1212, undated]

### Handling Out-of-Stock Products

| Stock situation | Current action (2024) | Older advice (2021) |
|---|---|---|
| Zero inventory | Exclude the product from Shopping campaigns so it triggers no impressions or clicks [L1285, 2024] | Not covered [L1279, 2021] |
| ETA two to three weeks | Keep it running in Shopping ads and add a backorder note with the ETA on the product page [L1285, 2024] | Keep running for about two weeks with a note on the product page [L1279, 2021] |
| ETA one to three months, or unknown | Pause the product or reduce its bid to one cent [L1285, 2024] | If the outage gets much longer, pause the ads, since customers are far less likely to wait a month or more [L1279, 2021] |

### Controlling Products and Bids

- Setting CPC to 0 cents only stops spending on those products, but they can still be present in the campaign. To remove them from Shopping campaigns completely, use the product include and exclude options in the campaign settings. [L1015, 2020-26]
- When a Google Shopping campaign has no winning product yet, exclude the products that do not perform and keep testing the remaining pool in batches. In one example, 20 products had been excluded and about 200 were still left to test before a winner was expected to emerge. [L1083, 2024+]
- When Google Ads cost per click for a broad category rises, for example furniture, split the account into more granular sub-categories with separate campaigns or ad groups and separate bids for each. Remove traffic that brings in general or unrelated clicks. *(2023.)* [L1283, 2023]

### Scaling Budgets

**Profitable scaling procedure** **:
1. Start from the current daily budget only if it is profitable, for example 15 per day.
2. Raise the budget in steps, for example to 25 per day, and hold it there while checking results.
3. At each level, check whether ads are still as profitable, which ads are more or less profitable, and which broad keywords appear that need negative keywords.
4. Move to the next level only when profitable scaling holds. [L1088, 2020]

- Jumping from 15 to 200 per day in one step is too abrupt. Google then spends on broader keywords with lower conversion, so raise budgets gradually instead. ** [L1088, 2020]
- Every Google Ads account has a ceiling on profitable traffic, and the ceiling differs by product, niche and market. Total search demand can be researched in advance, but the actual cost per click and the share of that traffic you can win against competitors cannot be predicted accurately. The only reliable way to find the ceiling is to test in the live account. ** [L1228, 2021-22]
- When Google Ads reaches its profitable ceiling, keep the campaigns at that level rather than pushing spend higher. Build other traffic sources to add volume alongside them. ** [L1228, 2021-22]

**Moving winners to CPC** *(undated)*:
1. Get sales and fulfil orders on time, since delivery is part of the customer experience.
2. Identify the products that perform better than others.
3. Move from Google Shopping or Performance Max to CPC campaigns for those products, bidding per click to buy more traffic.
4. Assess the results. Expect the return on ad spend to fall as you scale, and make sure there is enough margin left to remain profitable. [L1508, 2022+]

### Stalled Accounts: Relaunch and Rebuild

**Stalled campaign case** **: A Google Shopping campaign was profitable at about 20 return on ad spend, with roughly 75 percent impression share on a low-priority keyword. To gain more impressions, the owner raised the keyword bids. This triggered a flood of generic keywords that never converted and consumed the budget. After about a month of lowering bids and rechecking settings, the campaign was still not profitable. The recommendation was to pause the old campaign, build a fresh one with the same rules, and let it run for about a week, because restoring old settings rarely fixes this. [L1275, 2019]

**Relaunch with a smaller budget after no sales** *(2024)*:
1. Use historical data to list products that actually sold at a profit.
2. Create an Alpha/Beta campaign named Bestsellers that includes only those products.
3. Start with a smaller budget and scale within that campaign as it proves itself.
4. Keep the other products in separate Alpha testing and Beta testing campaigns with their own budgets.
5. Move new winners into the Bestsellers campaign.
6. Keep all products in the free Google product listings, and control spend through budget instead. [L1285, 2024]

Both sources recommend rebuilding rather than repairing a stalled account. The 2019 advice rebuilds the whole campaign with the same rules. The 2024 advice rebuilds around proven products. [L1275, 2019; L1285, 2024]

#### Further details

- Custom labels for Google Shopping can be added to all products at once through a Shopify CSV export and re-import, which is the fastest method for large catalogues. The alternative is entering the data per product in the Feed for Google Shopping app. Shopify's product CSV template already contains the Custom Label 0 to 4 columns. [L0402, 2021-22]


Part 35 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/34-splitting-by-brand-and-supplier.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/36-learning-phase-reporting-and-weekly-optimization-r.md
