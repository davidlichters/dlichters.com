<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 34 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/33-campaign-segmentation-tiers-and-scaling-structure.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/35-relaunching-rebuilding-and-migrating-stalled-accou.md

### Splitting by Brand and Supplier

**Segmentation options for high-ticket stores**

- Shopping campaigns can be segmented by brand, product type, price or a combination, depending on how the owner wants to organise products. For most high-ticket stores, segment by brand and then by individual product, because brands usually have different margins and justify different bids even at the same price. Profit calculations per brand show which brands make more or less money. [L0747, 2021-22] **
- Segment by what the data shows: brand, category, bestseller or price range, chosen by performance rather than by default. [L0466, 2018] **
- Segment by brand when a brand covers many categories and search terms show the other categories leaking into the wrong campaign: split the Alpha and Beta campaigns further by category for that supplier, but only if those campaigns bring in results. [L0470, 2023] **

**Winning brand with most of the revenue**

- When one brand produces most of the revenue, for example about 80% of the revenue from a store with around 20 brands, it should get its own campaign so its performance is easy to read. [L0715, 2020-26]
- Do not decide that a brand is a winner after a few days of data. Let campaigns run for about a month or longer before splitting out a brand that drives most of the revenue. [L0715, 2020-26]
- When one brand takes most of a campaign's budget, move it into its own Alpha and Beta campaigns and exclude its products from the all-products campaigns. Give each strong brand its own budget so other brands can grow separately. [L0853, 2021] **

**Step-by-step: moving a winning brand into its own campaign** [L0715, 2020-26]

1. Create a new Alpha campaign and name it after the brand and the target country, for example alpha, brand name, US.
2. Include only the products of that brand in the new campaign.
3. Exclude the same products from the main Alpha campaign so they are not duplicated.
4. Give the new campaign its own daily budget, a higher cost per click and Enhanced CPC.

- Do not keep a winning brand's products in both the main Alpha campaign and its own campaign, because they compete with themselves and the results become unclear. [L0715, 2020-26]
- Raising the bid on a winning brand inside the main Alpha campaign also works, but a separate campaign is clearer to track and gives its own budget. [L0715, 2020-26]

**Brands getting no impressions** [L0468, 2020] **

1. Identify the brands that get no impressions while others get all the traffic.
2. Either raise the maximum cost per click for the products of those brands, or
3. Create a second Alpha and Beta set and move only the brands with no traffic into it, excluding them from the first set.
4. Review again after a few days.

- Per-brand Alpha and Beta campaigns make it easier to see which brands are winning. Keep the brand names visible in the campaign so the split is easy to read. [L0468, 2020] **

**Rebalancing budget when one brand dominates** [L0470, 2023] **

1. Look at last month's spend in the current Alpha and Beta campaigns to see how much of the budget the winning brand takes.
2. Duplicate the Alpha and Beta campaigns.
3. In the original Alpha 1 and Beta 1, keep only the winning brand, which already has the conversions, and keep its budget at 40 USD per day.
4. In Alpha 2 and Beta 2, put all remaining brands and add 10 USD per day, split 5 USD between Alpha 2 and Beta 2, so the other products can get data.
5. Alternatively, lower Alpha 1 and Beta 1 to 30 USD per day and put 10 USD per day into Alpha 2 and Beta 2.

**Supplier-based campaign sets** [L0253, 2024] **

1. Create two separate campaign sets (Alpha/Beta) per supplier instead of one unified Alpha/Beta.
2. Example: Supplier A (alpha-A, beta-A), Supplier B (alpha-B, beta-B), Supplier C (alpha-C, beta-C).
3. In unified campaigns, exclude the supplier you want to focus on (e.g., exclude Supplier C from main Alpha/Beta).
4. In supplier-specific campaigns, include only that supplier's products.
5. This distributes daily budget proportionally to each supplier rather than exhausting budget on high-volume suppliers first.

**Brand lifecycle in Google Shopping** [L0879, 2021-22] **

1. Start with all brands included in the campaigns to see what sells.
2. Over time, identify brands that perform poorly on Google Shopping or have a margin that is not viable.
3. Pause those brands inside the campaigns instead of deleting them, and keep them on the site.
4. Reactivate a paused brand when conditions change, for example new pricing, a new owner, or a limited-time deal to clear excess stock.

- Pause a brand's Shopping products instead of deleting them. The campaign structure and data stay intact, so the brand can be reactivated later without rebuilding the setup, for example after new pricing, a change of owner, or a limited-time deal to clear excess stock. [L0879, 2021-22] **
- **Mistake: bestseller brands competing:** Splitting bestseller brands into their own high-priority campaign causes them to compete with the remaining high-priority campaign for generic terms such as "infrared sauna". Medium and low priority campaigns do not compete with each other when targeted to different brands. [L0879, 2021-22] **
- **Tool for brand competition:** To handle competition between split high-priority campaigns, bid more on one campaign than the other, or use negative keywords to focus each campaign on a different group of generic terms. Without this, a split can lower the performance of the campaign that was converting. [L0879, 2021-22] **
- **Example:** A store selling infrared saunas from ten brands, with three bestsellers. The three bestsellers get their own high-priority campaign, while the other seven stay in the original one. Both campaigns keep generic infrared sauna searches, so they compete for that term unless bids or negative keywords separate them. [L0879, 2021-22] **

**Ranking brands for priority** [L0941, 2022]

- To prioritise products in Google Shopping, sort the brand list by best-selling brands first on competitor sites, such as the top brands shown by a large retailer. Focus CPC and product page work on those brands first, since they drive most of the revenue.

### Bidding per Group and Target ROAS

- **Three-tier ROAS example:** A client had a three-tier Shopping setup with a different target ROAS per tier. The branded tier had a very high target because the client wanted strong margins on branded traffic, reasoning that those shoppers would find them anyway. It reached 29x ROAS within two months. The beta shopping tier reached 3x against a target of 4x, and the bottom tier reached 2x. [L0454, 2019]
- **Cluster products for data:** Automated bidding needs more data per group, so cluster similar products into larger product groups. For example, put best-sellers in one group and the rest in another. Aim for at least 20 conversions per month per cluster. [L0454, 2019]
- **Group-specific targets:** Avoid applying one blanket optimisation to all products. Ask what each ad group is about and set bids and targets per group. [L0454, 2019]
- **One target ROAS per group:** One product group cannot use different target ROAS values. For items with higher margins, move them into their own ad group and set a separate target ROAS there. [L0454, 2019]
- **Bidding type:** When creating segmented campaigns, choose manual CPC or Enhanced CPC. Use Enhanced CPC for the winning-brand campaign. [L0224, 2024+; L0715, 2020-26]
- **Default CPC:** Set default cost per click based on historical data from existing campaigns, not estimates. [L0224, 2024+]
- **Raising bids on proven products:** Raise bids on products that already convert in the low-priority campaign. [L0429, 2022] **
- **Shared budgets with test campaigns:** Run several Google Shopping campaigns on one shared daily budget: a campaign for proven MAP products, a test campaign for new products with bids near the minimum (about one cent), and a low-priority campaign for product-level bidding. Google's repeated suggestions to raise a shared budget can be ignored until performance justifies it. [L0429, 2022] **
- **Winning products get more traffic:** A Shopping campaign that beats its target ROAS should get more traffic by raising bids, as long as its ROAS stays at or above the target. Its budget should be raised too, because a well-performing campaign should almost never be limited by budget. [L0745, 2020-26]

### Bestseller Campaigns

**Principle**

- Use Google Shopping campaigns on products with proven sales history first, then expand. Keep long-tail products on organic traffic until performance is established. [L0934, 2023]
- Feeding Google only proven sellers lets the algorithm learn what converts instead of spending budget on products with no buyer demand. Once bestseller campaigns are profitable, untested products can go into separate testing Alpha and Beta campaigns. [L0472, 2025]
- Products can be listed as free Shopping listings while only the bestseller group receives paid budget. Free listings reveal which non-featured products get impressions and sales over time. [L0471, 2024]

**Budget**

- Start with most spend on the bestseller group, for example 100 percent in the first month or a 90/10 split with 10 percent for testing other products. Introduce the testing budget for the remaining products after about a month. [L0471, 2024]
- Bestseller split example:

| Campaign | Products | Shared budget (per day) |
|---|---|---|
| Alpha bestsellers + Beta bestsellers | Products identified as bestsellers | Shared budget 1: $15 |
| Alpha everything else + Beta everything else | All other products | Shared budget 2: $5 |

Each shared budget is attached to its two campaigns. Meta remarketing is separate, at $5 per day. [L0360, 2024] **

**Building bestseller campaigns without sales data** [L0360, 2024] **

1. Ask suppliers which of their products sell best.
2. Or check future competitor stores for the products shown on their home page, at the top of their collections, and in collections sorted by best sellers.
3. Put those products into the Alpha and Beta bestseller campaigns.
4. Exclude those same products from the Alpha and Beta everything-else campaigns.

**Rebuilding around a few proven sellers** [L0472, 2025] **

- When a store has a few hundred products but only a small share generates sales, rebuild the Google Shopping structure as new campaigns named "Alpha Best Sellers" and "Beta Best Sellers". Only add product groups for products that already sell, and pause the old Alpha and Beta campaigns that were not converting.

**Case:** A store with about 300 products had over 100 sales on Microsoft Ads in one year, but 3,000 clicks on Google Ads over two months produced only one conversion. Only about 30 products made up the Microsoft sales. The recommendation was to pause the existing Google Alpha and Beta campaigns and build new Best Sellers campaigns containing just those 30 products, adding the remaining products later in separate testing campaigns once the first ones were profitable. [L0472, 2025] **

**Discount codes**

- When a store uses discount codes as Shopping promotions, exclude low-margin products from the new Alpha and Beta Best Sellers campaigns. Promotions do not appear in the free organic Shopping section, so low-margin products can stay there without a discount attached. [L0472, 2025] **

**Hypothetical example:** A store with 500 products sells only 20 of them repeatedly, and about 80% of the Google budget goes to those 20. If the next year the same 80% goes to 20 different products that convert worse, check per-product sales and refine CPCs to send the budget back to proven sellers. [L0472, 2025] **

### Region, Country and Geo-Targeting

**Geo-targeting options and principles**

- Geo-targeting in Google Ads can target zip codes, whole states, or a radius around a city instead of an entire country. This lets you limit ads to customers near a supplier's warehouse. [L0942, 2022] **
- Geo-targeting in Google Ads lets you limit ads to specific states or areas, useful when shipping costs from a supplier make some regions more profitable than others. [L0834, 2021] **
- Use geo-targeting in Google Ads campaigns to match shipping region profiles in Shopify, so ads only show to regions where products can be shipped. [L0278, 2025] **
- If you only want to spend on customers in the United States, set the location targeting of the campaigns to the US only. Traffic from other countries can still arrive through organic Google search without any spend. [L0837, 2025] **
- Ads for surfboards shown to people living far inland, such as in the middle of Texas, will struggle to convert because the audience has no use for the product. Check whether the location and audience match the product before scaling spend. [L0489, 2020-26]
- Geotargeting for Shopping ads is only useful when you want deliveries close to a supplier warehouse. Its effect on performance is not proven. [L0962, 2021] **
- Geotargeting is worth using only when supplier shipping costs differ sharply by region. Example: 500 USD to the far coast versus 150 to 250 USD across the nearby region, with thin margins. [L0963, 2022] **
- For products whose shipping from a supplier is costly to some regions, run ads only in states close to the supplier and exclude distant states. This stops shipping costs from wiping out the profit on each sale. [L0466, 2018] **
- Seasonal geo-targeting is done inside Google and Facebook by choosing the warmer states during the months when sales are low. [L0468, 2020] **

**Supplier radius targeting** [L0470, 2023] **

- When shipping costs are high for a supplier, set up a separate Alpha and Beta for that supplier and use geotargeting to show ads only within a radius around the supplier's warehouse, for example 100 miles. Only do this if the orders stay profitable at that distance.

**Step-by-step: geo-targeting for a supplier whose shipping has made the margin too thin** [L0942, 2022] **

1. Identify the supplier whose margin no longer covers shipping to far-away customers, for example a warehouse in New Jersey with buyers in California.
2. Set up a separate campaign for that supplier only, using a product feed that contains only that supplier's products. You can duplicate an existing campaign and rename it after the supplier.
3. Set the targeting to a radius around the warehouse, specific zip codes, or states where shipping is still profitable.
4. Remove those products from your main campaigns so they are not shown to distant customers.
5. Repeat for other suppliers as needed.

- Geo-targeting lets you keep selling products whose margin no longer covers shipping to far regions, instead of dropping them or raising prices until nobody buys. Ad spend is focused on customers close enough to the warehouse for shipping to stay profitable. [L0942, 2022]

**Note on conflicting advice:** Geo-targeting for supplier radius is recommended in 2018, 2022 and 2023 sources where shipping costs differ sharply [L0466, 2018; L0963, 2022; L0470, 2023]. A 2021 source says its effect on performance is not proven [L0962, 2021]. Use it when the shipping-cost gap is large and the orders stay profitable at that distance; otherwise it is an unproven lever.

### Multi-Country and Multi-Region Campaigns

**Principle: one country per campaign (most recent advice)**

- Run one country per campaign. If you later want ads in a second country, build a separate Alpha and Beta pair for that country rather than adding it to the existing campaigns. [L0746, 2020-26] **
- Keep a separate Google Shopping campaign for each country a product is sold in. If Canada is added, do not mix it into a US campaign. Use an Alpha 2 and Beta 2 that targets only Canada so budgets are not commingled. [L0665, 2022] **
- Google Shopping campaigns for different countries should not share one campaign. Keep the US Alpha and Beta campaigns separate from the UK campaigns. [L0834, 2021] **
- When selling in two countries, do not add the second country to an existing Alpha or Beta campaign. Create separate campaigns per country, for example keep the Canada campaigns and build new US Alpha and Beta campaigns with the same products but US locations. [L0805, 2024] **
- Run separate campaigns per country, such as the US, Canada, Australia and the UK. [L0788, undated] **
- For a store selling in several regions, run separate Alpha and Beta campaigns for each region, plus separate Meta retargeting campaigns for each region. This keeps targeting, budget and results separated per market. [L0360, 2024] **

**Older option: one campaign with several countries**

- To target several countries, either create one campaign and select all target countries, letting Google distribute spend, or duplicate the campaign per country to control spend by country. [L0247, 2021] **
- Do not mix two countries in one campaign. [L0469, 2021] **

**Note on conflicting advice:** The 2021 advice allows one campaign with several countries when you want Google to distribute spend [L0247, 2021]. Later advice from 2021 to 2024 requires one country per campaign [L0746, 2020-26; L0834, 2021; L0665, 2022; L0805, 2024; L0469, 2021; L0788, undated]. Use one campaign for several countries only if you accept Google's spend distribution across them. Use one campaign per country whenever you need to control budget by country.

**Step-by-step: adding Canada to a US store** [L0469, 2021] **

1. Keep the existing US campaigns unchanged.
2. Duplicate each US campaign.
3. In the settings of the copy, edit the location targeting, remove United States and add Canada.
4. Lower the budget of the Canadian campaign. Do not mix two countries in one campaign.

**Step-by-step: two countries with one currency each** [L0854, 2022] **

1. Duplicate every Alpha and Beta campaign so the settings are identical.
2. Set the country targeting of the first copy to Canada (and US if applicable).
3. Set the country targeting of the duplicate to the US only.
4. Compare results per campaign to see which country performs.

### Out-of-Stock Products

**Principle**

- Keep running paid ads for products that are in stock, even during the 2020 COVID-19 period. If a supplier runs out of a product, remove that item from Google Merchant Center so you do not spend money advertising products you cannot ship. [L0358, 2020] **
- During inventory shortages, run only a small, tight Google Shopping campaign with the products that have the best margins and are in stock, and stop promoting backordered products. [L0359, 2020] **

**Lead-time rules**

| Stock situation | Action | Source |
|---|---|---|
| Back in stock within about two to three weeks | Keep ads running and show an ETA note | [L0856, 2024] |
| Out of stock for about four weeks and will not return (2021 rule) | Stop taking orders, remove from ad campaigns, add back when close to restocking | [L0853, 2021] ** |
| Back order six to eight weeks or longer, or no ETA | Set Google Shopping CPC to 1 cent, or stop spending until back in stock | [L0856, 2024] |
| Back order eight weeks or longer with no ETA | Lower Google Shopping CPC to about 1 cent, or pause until back in stock; the product page still shows the back-order status and an ETA | [L0856, 2024] |
| Supplier runs out of product (2020) | Remove from Google Merchant Center | [L0358, 2020] ** |

**Note on conflicting thresholds:** The 2021 rule removes products after about four weeks without return [L0853, 2021; older]. The 2024 rules keep ads running for two to three weeks and move to a 1-cent CPC or pause at six to eight weeks or longer [L0856, 2024]. Use the 2024 thresholds for current planning. Use the four-week rule only if a product has no ETA and no restock date.

**Full procedure: handling out-of-stock by lead time** [L0856, 2024] **

1. For stock returning within two to three weeks, keep ads running and show an ETA note.
2. For back orders of six to eight weeks or longer, or with no ETA, set the Google Shopping CPC to 1 cent or stop spending until back in stock.
3. Add a back-order note with the shipping ETA by the add-to-cart button on the product page.
4. On popular product pages, add a "need something sooner" section that links in-stock similar products.

**Back-order note and paused products** [L0856, 2024] **
- See the table above. Product pages keep the back-order status and ETA while the Shopping CPC is lowered or the product is paused.

### MAP (Minimum Advertised Price) Violations

- If a supplier keeps violating MAP after you follow up, lower the cost per click on that product to one cent. This keeps the product visible without overspending on it. [L0469, 2021] **
- Move products or suppliers with recurring problems, such as MAP violations, into their own campaign with lower bids or a very small budget. [L0806, 2024] **
- If a supplier enforces MAP but big-box retailers sell below your wholesale cost, do not advertise the product in paid channels at double the price of other stores. Work with the supplier to address the MAP violation first. [L0856, 2024] **
- Keep the products with proven MAP compliance in a separate campaign with a shared budget, as described in the bidding section above. [L0429, 2022] **

### Budget Allocation and Scaling

**Scaling a profitable campaign** [L0963, 2022] **

1. Raise the budget by 10, 20 or 30 percent.
2. Let the campaign run until the actual return on ad spend shows.
3. Raise the budget again by a similar step and repeat.

- A very large one-time budget increase can distort return on ad spend for a full month. In one example, ROAS fell from about 6.5x average to 1.5x after a sharp scale-up, so raise budgets in small increments. [L0963, 2022] **
- A new campaign with only 15 dollars per day where 20 out of 100 products get all clicks: use a higher CPC and higher daily budget only if the campaign is profitable. Otherwise move the clicking products into their own Alpha campaign and scale that one. [L0665, 2022] **

**Budget splits used in examples**

| Source | Budget split | Context |
|---|---|---|
| [L0278, 2025] (2025) | $100 daily: $60 HM, $30 MM, $10 LM | Margin tiers |
| [L0360, 2024] (2024) | Bestseller $15, everything else $5, Meta remarketing $5 per day | Bestseller split |
| [L0471, 2024] (2024) | 100% to bestsellers in month one, or 90/10 with 10% for testing | Bestseller launch |
| [L0856, 2024] (2024) | 80% to high-profit tier, 20% to middle tier, 0% to lowest | Net-profit tiers |
| [L0470, 2023] | Winning brand 40 USD/day; remaining brands 10 USD/day split 5/5 | Brand rebalancing |

**Campaign-level budget logic**

- Budget control per margin tier, not one budget across all products. [L0278, 2025]
- Shared budget attached to each pair of campaigns. [L0360, 2024]
- Keep the budget of the winning brand fixed while other brands get testing budget. [L0470, 2023]


Part 34 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/33-campaign-segmentation-tiers-and-scaling-structure.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/35-relaunching-rebuilding-and-migrating-stalled-accou.md
