<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 20 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/19-shopping-campaign-fundamentals-and-the-alpha-beta.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/21-approval-activation-and-timing.md

### Campaign Priority and the Alpha-Beta Logic

#### Priority Rules

- Campaign priorities (high, medium, low) apply only between your own campaigns, not against competitors. Google checks high priority first, then medium, then low, for each search query across your account. [L0225, 2015+]
- Google checks higher-priority campaigns first. Beta is set to High so that broad searches are checked first. Alpha is set to Low so that searches not blocked by Beta fall through to it. This is counterintuitive, because Beta is the less valuable campaign. [L0746, 2020-26]
- Set the Beta campaign to High priority and keep Alpha on Low (the default). [L0743, 2026+]
- In a new Shopping campaign, the Campaign priority field defaults to Low. Beta must be changed to High, while Alpha stays at Low, so the intended order of checking takes effect. [L0746, 2020-26]
- Set the alpha campaign to low priority so Google checks it second, and the beta campaign to high priority so Google checks it first. When a search matches negatives in the high-priority beta campaign, it funnels to the low-priority alpha campaign. [L0225, 2015+]
- Set your alpha campaign priority to low and your beta campaign priority to high. This counterintuitive setting ensures beta (low-converting) terms are checked first. When blocked by negatives, traffic funnels to alpha (high-converting) terms at the correct priority level. [L0225, 2015+]
- ** Set the campaign priority to Low for Alpha and High for Beta. Google checks the High-priority campaign first for matching searches. [L0243, 2019]

#### Alpha-Beta Logic

- ** When a search query matches both campaigns, Google checks Beta first, because it has higher priority. If the query is blocked as a negative in Beta, Google moves to Alpha. If the query matches Alpha and is not blocked there, the ad shows with Alpha's higher bid. This prevents budget waste on weak keywords by reserving high-bid spend for strong keywords. [L0243, 2019]
- Negative keywords in Beta push searches for high-converting terms into Alpha. Beta is checked first as high priority and blocks the negatives. Alpha, on low priority, picks up the same searches at its higher bid. [L0743, 2026+]
- Negative keywords in the Beta campaign act as a filter. When a search matches one of them, Google skips Beta and passes the search to the lower-priority Alpha campaign. Beta negatives should be the terms most relevant to the store's own products: brand names, SKU numbers and popular product names, which are the searches Alpha should win. [L0746, 2020-26]
- The inverted priority structure forces budget toward high-converting searches. This blocks those searches in the high-priority Beta campaign, so Google routes them to Alpha, where you bid higher. [L0186, undated]
- Priority of the alpha-beta structure: Beta, High, checked first; Alpha, Low, checked second. [L0225, 2015+; L0746, 2020-26]
- Alpha holds the high-traffic campaigns and blocks weak search terms with negative keywords. Beta holds the keywords that still convert but are weaker. [L0671, 2021]
- Always keep a separate alpha and beta split in Shopping campaigns. If only an "all brands" beta campaign exists with no alpha campaign, the setup is incorrect and must be configured properly. [L0745, 2020-26]
- Every product not explicitly filtered is caught by a catch-all product group at each level. Check your product group inheritance structure carefully so products you intended to separate are not grouped together by accident. [L0225, 2015+]

### Campaign Roles: Alpha and Beta

#### Alpha

- Alpha campaigns target high-converting, branded or commercial terms, with aggressive bidding to maximize revenue and visibility. Use negative keywords to block weak or generic terms from appearing in alpha campaigns. [L0225, 2015+]
- Alpha targets high-intent searches: brand names, product names, and SKU/MPN numbers. [L0186, undated]
- Alpha campaigns hold the high-traffic campaigns. [L0671, 2021]
- For Campaign Alpha, targeting high-converting terms: set bid strategy to Maximize Revenue, apply high bids, set Shopping Campaign Priority to Low, and add negative keywords to block low-converting terms and universal negatives. [L0055, undated]
- Alpha's Shopping campaign contains the full product set. [L0746, 2020-26]
- Alpha campaign setup, 2019 version: [L0243, 2019]
  1. Set campaign priority to Low. [L0243, 2019]
  2. Set daily budget to a higher amount (e.g., $30). [L0243, 2019]
  3. Set cost-per-click bids to a higher amount. [L0243, 2019]
  4. Populate the campaign with only high-converting, long-tail keywords (e.g., specific product model numbers, brand plus descriptor keywords). [L0243, 2019]
  5. Add weak and generic terms as negative keywords to prevent budget waste. [L0243, 2019]

#### Beta

- Beta campaigns target low-converting, generic or informational search terms, with low bidding to capture the remaining relevant traffic economically. Use negative keywords to block high-converting branded terms so they funnel to the alpha campaign instead. [L0225, 2015+]
- Beta targets broader, lower-intent searches, for example general niche terms such as `surfboards`. [L0186, undated]
- Beta holds the keywords that still convert but are weaker. [L0671, 2021]
- For Campaign Beta, targeting low-converting terms: apply low bids (lower than Campaign Alpha), set Shopping Campaign Priority to High, and add negative keywords to block high-converting terms from Campaign Alpha and universal negatives. [L0055, undated]
- Beta setup, 2019 version: [L0243, 2019]
  1. Set campaign priority to High (Google checks this campaign first for matching searches). [L0243, 2019]
  2. Set daily budget to a lower amount (e.g., $17). [L0243, 2019]
  3. Set cost-per-click bids to lower amounts. [L0243, 2019]
  4. Include weak but still relevant keywords that might convert (e.g., broader product category keywords, variations). [L0243, 2019]
  5. Add strong and high-converting keywords as negative keywords so they are captured by the Alpha campaign instead. [L0243, 2019]

#### Worked Example (2019)

- ** For standup desks, `Hampton blue umbrella SKU 123` is a strong keyword (Alpha). The generic `umbrella` is blocked in Alpha as a negative keyword. In Beta, the generic term is allowed with a low bid. If someone searches `umbrella`, Beta captures it at low cost-per-click. If they search the exact `Hampton blue umbrella SKU 123`, it is blocked in Beta and goes to Alpha with the high bid. [L0243, 2019]

#### Alpha-Beta Procedure (2020)

** [L0245, 2020]

1. In Google Ads, create an alpha campaign with your broad product feed. [L0245, 2020]
2. Create a separate beta campaign with high-priority, high-intent keywords. [L0245, 2020]
3. Set negative keywords at the ad group level (not the campaign level) to eliminate irrelevant searches from the alpha. [L0245, 2020]
4. Beta is checked first by Google before alpha routes traffic. [L0245, 2020]
5. This structure allows you to progressively refine the alpha as you identify underperforming keywords. [L0245, 2020]

#### Splitting Proven and Untested Products (2020)

- ** Use alpha campaigns for products that already sell and beta campaigns for testing. Exclude the proven products from beta so new products get their own budget. [L0468, 2020]
- Split Shopping campaigns into an alpha campaign for proven products and search terms that convert well, and a beta campaign for weaker or untested segments. Bid higher in the alpha campaign and lower in the beta campaign. [L0510, 2018]

### Negative Keywords and Routing

#### Routing Rules

- Do not manually move keywords between alpha and beta campaigns. Instead, adjust bid amounts upward in the beta campaign. Keyword routing happens automatically, based on your negative keyword setup and campaign priority settings. ** [L0276, 2024]
- Bidding control in Shopping works by adding negative keywords. High-converting terms are added as negatives to the Beta campaign so they are blocked there and fall through to Alpha, where bids are higher. [L0743, 2026+]
- For a multi-brand store, the Beta campaign's negative list contains each brand name, each SKU number and each bestselling product name, so that those searches go to Alpha. Broad, unbranded searches such as a generic product description are then left for Beta. [L0746, 2020-26]
- Do not skip the Item ID subdivision step in either ad group. [L0746, 2020-26]

#### Negatives in Each Campaign

| Campaign | Negatives | Source |
|---|---|---|
| Alpha | Block low-converting terms and universal negatives | [L0055, undated; L0225, 2015+] |
| Alpha | Universal negatives only | [L0746, 2020-26] |
| Alpha | Weak and generic terms | [L0243, 2019] |
| Beta | High-intent terms: brand names you sell, product names you sell, SKU/MPN numbers | [L0186, undated] |
| Beta | Brand names, SKU numbers, popular product names, strong product-name variants, and universal negatives | [L0746, 2020-26] |
| Beta | Branded terms as phrase match, for example `lifestyles`, plus universal negatives | [L0225, 2015+] |
| Beta | Strong and high-converting keywords | [L0243, 2019] |

- Add all high-intent search terms (brand names you sell, product names you sell, SKU/MPN numbers) as negative keywords in Beta. [L0186, undated]
- In the Alpha campaign, add only universal negatives: terms that should never match, for example course and videos for a merchandise store. [L0746, 2020-26]
- *(No year given)* Add universal negative keywords in both campaigns. [L0225, 2015+]
- *(No year given)* Negative keyword for branded terms in beta, for example "lifestyles" as phrase match, to block them from beta and funnel to alpha. [L0225, 2015+]
- *(No year given)* Negative keywords in the alpha campaign block weak or generic terms. [L0225, 2015+]
- ** Negative keywords are added to the Alpha campaign to block weak and generic terms. [L0243, 2019]
- ** Negative keywords belong at the ad group level, not the campaign level. [L0245, 2020]
- Campaign-level negatives: Alpha and Beta negatives are set at campaign level in the build procedures. [L0746, 2020-26]

#### Negative Keyword Push (Sculpting)

1. Compare cost per click and conversion rate in the alpha and beta campaigns. Example figures: beta CPC $0.45 with a conversion rate of 0.64%, alpha CPC $1.93 with a conversion rate of 2.39%. ROAS (conversion value over cost) was 3.48 in alpha and 4.96 in beta. [L0745, 2020-26]
2. Open the beta campaign, go to Keywords, then Search terms, and show the terms that converted. [L0745, 2020-26]
3. Add every converting search term to the beta campaign as a negative exact keyword. [L0745, 2020-26]
4. Optionally move terms with strong click-through rate from beta to alpha as well. [L0745, 2020-26]
5. Result: converting terms are funneled into alpha, where bids are more aggressive for high-converting terms. [L0745, 2020-26]

### Campaign and Ad Group Naming

#### Naming Formats

| Format | Example | Source |
|---|---|---|
| Alpha, [Store Name] / Beta, [Store Name] | Standard campaign names | [L0186, undated] |
| Campaign type, product category, target ROAS | `Alpha Shopping Infrared Sauna 3.3x` | [L0225, 2015+] |
| Alpha Shopping [Category] [TargetROAS] | Alpha campaign template | [L0225, 2015+] |
| Beta Shopping [Category] [LowerROAS] | Beta campaign template | [L0225, 2015+] |
| Product name, campaign type, traffic source, country, target ROAS | `infrared saunas, shopping campaigns, cold traffic, USA, 3.6` | [L0327, 2020-26] |
| Priority and bid level | `Shopping - All Products - US - High Priority` | [L0742, 2021-22] |
| Course style | `alpha... one source merch` | [L0743, 2026+] |
| Course build | `alpha all products shopping`, `beta all products shopping` | [L0746, 2020-26] |

- Name each shopping campaign with three elements: campaign type (Alpha Shopping or Beta Shopping), product category (e.g., Infrared Sauna), and target ROAS (e.g., 3.3x). Example: `Alpha Shopping Infrared Sauna 3.3x`. This makes the campaign's purpose immediately clear when you review performance. [L0225, 2015+]
- Include target ROAS in campaign names for quick reference and decision-making. Format: [Product name], [Campaign type], [Traffic source], [Country], [Target ROAS number]. This allows instant verification when reviewing performance. [L0327, 2020-26]
- ** Give each funnel campaign a name that shows its priority and bid level, for example `Shopping - All Products - US - High Priority` for the lowest-bid campaign. Identical copies are otherwise hard to tell apart. The name has no effect on how ads are served. [L0742, 2021-22]
- Name each ad group after its campaign, for example `alpha` for the Alpha campaign and `beta` for the Beta campaign. Keep one ad group per Shopping campaign at the start. [L0743, 2026+]
- Ad group names in the course build: `alpha all products` and `beta all products`. [L0746, 2020-26]
- Campaign naming for the Standard build: `Alpha, [Store Name]` and `Beta, [Store Name]`. [L0186, undated]
- ** When you copy a campaign, the copy's name gets a `#2` suffix. [L0742, 2021-22]

### Product Groups and Item ID Subdivision

#### The Waterfall Structure

- A new Google Shopping campaign starts with all products in one group at the same bid. This is a problem once the catalog holds many products, so the group should be split. [L0503, 2020-26]
- The waterfall keeps the structure in layers: all products, then brand, then item ID. Each lower layer can receive its own bid once enough data exists for that product, so bidding can be tuned down to the individual SKU. [L0503, 2020-26]

#### Waterfall Procedure

1. Open the shopping campaign, where all products sit in one group with the same bid. [L0503, 2020-26]
2. Click the plus sign to add a subdivision. [L0503, 2020-26]
3. Choose the split dimension: product category, brand, item ID or custom label. [L0503, 2020-26]
4. Split by brand first, selecting the brands you want, and then split further by item ID if needed. [L0503, 2020-26]
5. Set the same starting bid for every group. [L0503, 2020-26]
6. Open each brand group, add a subdivision, and drag in all of its item IDs, so every SKU becomes its own group. [L0503, 2020-26]
7. As data arrives for each product, adjust the bid per SKU. [L0503, 2020-26]

#### Split Options and Store Types

- In the Google Ads shopping campaign, the subdivision is added with the plus sign on the product group. The available split options are Product category, Brand, Item ID and Custom label. The Item ID option lists every individual product. [L0503, 2020-26]
- Custom labels can be left out when a shopping campaign is first launched, because they are rarely needed at that stage. Brand and item ID splits cover most early segmentation. [L0503, 2020-26]
- In a multi-brand store, select several brands in the brand split and then subdivide the selection by item ID. This narrows the groups down to individual products while keeping the brand structure. [L0503, 2020-26]
- For a store that sells only one brand, bids can be edited directly for each product group after the split. There is no need for a brand level. [L0503, 2020-26]
- Example: a multi-brand store started with 318 products in one group. After splitting by brand, each brand received its own bid, with $1 per brand used as the starting bid in the demo. [L0503, 2020-26]

#### Brand-to-SKU Procedure

1. Open a brand group. [L0503, 2020-26]
2. Add a subdivision. [L0503, 2020-26]
3. Drag in all item IDs for that brand. [L0503, 2020-26]
4. Repeat for every brand so each product ID can be bid separately. [L0503, 2020-26]

#### Item ID Subdivision (Alpha and Beta)

1. Inside the Alpha campaign, find the product group labelled All products. [L0186, undated]
2. Click + (Add subdivision). [L0186, undated]
3. Select Item ID. [L0186, undated]
4. Select all items and save without editing any individual product bids at this stage. This gives you the future ability to adjust bids at the product level. [L0186, undated]

- Enable the Item ID subdivision in the ad group. Click the plus icon next to All products, choose Add subdivision, set the dimension to Item ID, select all items, and click Save without editing bids so each product can receive its own CPC. Do this in the Alpha campaign as early as possible. [L0743, 2026+]
- Subdivide by Item ID on the ad group page: click the plus next to Add subdivision, choose Item ID, tick the box to select all products, click Continue to edit bids, then Save. This gives per-product reporting and lets you adjust bids individually. [L0746, 2020-26]
- Do not skip the Item ID subdivision step in either ad group. It is easy to miss, but without it you cannot see or control results per product. [L0746, 2020-26]
- In a Google Shopping campaign, set product groups to individual products so that spend, clicks and sales can be tracked and bid per product. [L0671, 2021]
- Every product group should be checked for the catch-all "Everything else in" group. After each subdivision, make sure it contains no products (exclude it). Otherwise those products cannot receive individual bids and their performance cannot be seen. ** [L0742, 2021-22]
- For products added to Shopify after alpha-beta setup: they appear in the everything-else or all-products section. Go to the Google Shopping setup lesson (module 6), create individual product campaigns for the newly added products, and they will no longer be grouped under everything-else. ** [L0255, 2025]
- Product group filter: in the ad group step, the product group can be filtered to show only selected products. As a starting point, leave it on All products in both campaigns, so every product is eligible in each. [L0743, 2026+]
- Start with one ad group that includes all products in both the Alpha and Beta campaigns, with the ad group bid set to the campaign's starting CPC. [L0743, 2026+]

### Launch with All Products

#### Single Campaign at Launch

- Keep all products in one Google Shopping campaign. A separate campaign for bestsellers only is usually not recommended. [L0359, 2020]
- Start with all products in the Shopping campaign so every product gets impressions. [L0551, 2020]
- Do not add manual keywords at the start of a Shopping campaign. Google reads the catalog and decides which searches to show products for. ** [L0551, 2020]
- ** A new store with about 200 products from approved suppliers should begin with one single Google Shopping campaign. Its goal is data on impressions, clicks, sales, and clicks without sales. Segmentation by brand or category should wait until that data is available. [L0466, 2018]
- ** Procedure for the single launch campaign: [L0466, 2018]
  1. Launch a single Google Shopping campaign that includes all products. [L0466, 2018]
  2. Review the dashboards for impressions, clicks, sales, search terms, and which products get clicks but no sales. [L0466, 2018]
  3. Remove negative keywords that bring irrelevant traffic. [L0466, 2018]
  4. Split the campaign into two campaigns, Alpha and Beta, using the data. [L0466, 2018]
  5. Analyze the data every two weeks, and segment further by brand, category, bestsellers or price tier as the data supports. [L0466, 2018]
- ** Procedure for initial Shopping data: [L0551, 2020]
  1. Start with all products in the Shopping campaign so every product gets impressions. [L0551, 2020]
  2. Review the search terms that trigger clicks and sales after the ads start running. [L0551, 2020]
  3. Add irrelevant search terms as negative keywords. [L0551, 2020]
  4. Increase budget on the products and keywords that produce clicks and sales. [L0551, 2020]
  5. Check the numbers in Google Ads so that growth stays profitable. [L0551, 2020]

#### Large Catalog Launch

- ** Upload the full available product catalog before increasing ad spend. A larger catalog gives Google more products to test and optimize. [L0247, 2021]
- ** Launch procedure for a new store with 500+ products: [L0270, 2021]
  1. Create an alpha campaign with all products. [L0270, 2021]
  2. Create a beta campaign with all products. [L0270, 2021]
  3. Create a shopping campaign with all products. [L0270, 2021]
  4. Let all campaigns run with $10-30 per day budget. [L0270, 2021]
  5. Use performance data over 2 weeks to identify which specific products perform well. [L0270, 2021]
  6. Optimize by lowering cost-per-click on underperformers and raising it on strong products. [L0270, 2021]
  7. Never exclude products initially; let data guide allocation. [L0270, 2021]
- ** Launch a large catalog this way: [L0471, 2024]
  1. Create one ad group named `All Products` that contains every product. [L0471, 2024]
  2. Track performance by product. [L0471, 2024]
  3. Raise bids on products with a strong return on ad spend and lower bids on weak ones. [L0471, 2024]
- ** Start with a narrow feed of about the top 20 products instead of a large catalog of around 1,000, with a daily budget of 20 USD for each alpha and beta campaign. Choose the products by potential profit or by the best-selling products on future competitor stores. [L0470, 2023]
- ** Creating hundreds of ad groups with one product each, to get very granular analytics, limits what Google's algorithm can learn, unless the budget is very large. Single-keyword ad groups per product are outdated and should not be used for small budgets. [L0470, 2023]

#### Structure by Catalog Type

- The alpha-beta structure with all products is the standard launch for a store that sells several brands. The two campaigns both contain the full product set. Products are not split between them. Only the search terms each campaign catches differ, and negative keywords enforce that split. [L0746, 2020-26]
- A store that sells only its own brand does not really need the Alpha and Beta split, because all searches are for the same brand. The structure is still worth learning, and the same negative keyword logic applies to any store that sells several brands. [L0746, 2020-26]
- Alpha and beta product structuring is an advanced Google Shopping setup. Learn it after basic Shopping campaigns are running. [L0359, 2020]
- A typical setup with a split by sub-niche: ** structure Google Shopping campaigns as Alpha (testing) and Beta (optimized). Start with one of each, then break them up by sub-niche, product type or supplier, based on incoming data and not assumptions. [L0249, 2022]
- A typical e-commerce Google Shopping funnel runs from the Shopify product feed into Google Merchant Center, then into Alpha and Beta shopping campaigns, then to product pages. A two- or three-campaign structure separates branded, generic and specific SKU-level keywords. [L0454, 2019]


Part 20 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/19-shopping-campaign-fundamentals-and-the-alpha-beta.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/21-approval-activation-and-timing.md
