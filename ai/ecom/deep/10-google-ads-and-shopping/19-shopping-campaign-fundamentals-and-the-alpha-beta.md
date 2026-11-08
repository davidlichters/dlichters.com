<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 19 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/18-feed-sync-and-update-timing.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/20-campaign-priority-and-the-alpha-beta-logic.md

## Shopping Campaign Fundamentals and the Alpha-Beta Structure

### How Shopping Ads Work

- Shopping ads are paid ads that show the product image, price and store name. They appear on Google's front page and at the top of Shopping results. [L0163, undated]
- Shopping ads give more control over traffic volume and scaling than any other Google traffic method. [L0163, undated]
- Once created and approved, Shopping ads show product listings at the top of Google Search results. [L0168, undated]
- Paid Shopping ads appear in two places: [L0186, undated]
  - The top carousel on the main results page, labelled Sponsored [L0186, undated]
  - The top section of the Google Shopping tab, labelled Sponsored [L0186, undated]
- Anything with a Sponsored label is a paid ad. Below the paid ads are non-sponsored free listings from Google Merchant Center. [L0186, undated]
- Shopping campaigns contain no keyword bidding. Optimization happens in the Google Merchant Center product feed, which has one row per product. The only text-level control in Google Ads is negative keywords. Titles, attributes and images belong in Merchant Center. [L0220, 2025-26]
- Shopping ads show for product names, SKU numbers and brand names taken from the feed, together with the product image, store name and price. Because searchers already know what they want, these clicks carry strong buying intent, provided negative keywords are set up correctly. [L0373, 2024+]

#### Feed-Driven Matching

- The advertiser does not choose keywords. All products are submitted to Google Merchant Center, and Google reads the product data (titles, descriptions, brand, product names, SKUs) to decide which searches show the ad. [L0714, 2020-26; L0743, 2026+; L0186, undated]
- Accurate product page data therefore drives matching. [L0714, 2020-26]
- Google does not allow manually chosen keywords. Matching search terms are derived automatically from the product feed, so bid control has to come from campaign structure and negative keywords. [L0746, 2020-26]
- Google matches products to searches using feed data and its own algorithms. The levers the advertiser controls are the product data and the exclusions. [L0739, 2021-22]
- Google decides the triggering searches automatically from the supplied product data. This saves writing ads and choosing keywords. However, Google often shows products for weakly relevant searches and does not reliably judge search intent, so the advertiser has to manage this. [L0741, 2021-22]
- ** Google Shopping has no direct keyword targeting. The only controls are the search terms that trigger ads and the negative keywords you add. Searches that are too vague or broad usually produce few clicks. [L0357, 2019]
- Shopping campaigns do not use advertiser-chosen keywords the way Search campaigns do. Titles, descriptions, brand, product names and SKUs from the Shopify store are matched through Merchant Center. [L0743, 2026+]
- Google auto-selects search terms rather than letting the advertiser choose them. A single campaign therefore cannot bid higher on high-converting terms and lower on low-converting terms. [L0055, undated]

#### Why Product Listing Ads Work

- Product Listing Ads (PLAs) occupy an overwhelming percentage of the search engine results page for commercial search terms, which gives them dominant visibility. [L0046, undated]
- PLAs display products visually, with images, prices and seller information, directly in the results. [L0046, undated]
- PLAs are effective because they reach users who are searching to buy a specific product, meaning users in buy mode rather than in research or browsing. [L0046, undated]
- PLA campaigns need no manual keyword research. Google's Product Feed system matches products to relevant commercial queries based on the product data. [L0046, undated]
- Google encourages PLAs for commercial searches because they give a good user experience: relevant products with transparent pricing and visuals. [L0046, undated]

### Campaign Type: Standard, Smart and Performance Max

| Campaign type | Use | Source |
|---|---|---|
| Standard Shopping | Default for the Alpha-Beta structure; full keyword-free control via negatives and priority | [L0186, undated; L0742, 2021-22; L0746, 2020-26] |
| Smart Shopping | Not suitable for the funnel; no control over keywords or negatives; unsuitable for high-ticket | [L0742, 2021-22; L0746, 2020-26] |
| Performance Max | Not used; many clicks but very low conversions | [L0743, 2026+] |
| Goal-optimized | Not used; removes customization and runs across Search, Display, YouTube and Gmail | [L0225, 2015+] |

- Google promotes Smart Campaigns to increase advertiser spending quickly, not to optimize performance, because platform revenue depends on ad volume rather than on the ROI of each campaign. [L0052, undated]
- To outperform competitors, use manual campaigns. They give the control over strategy, targeting and bids that simplified automated campaigns do not allow. [L0052, undated]
- For a new store that is not yet receiving many orders, choose Standard Shopping rather than Smart. The course team was still testing the Smart option when this was recorded. [L0746, 2020-26]
- Smart Shopping gives no control over keywords or negative keywords and cannot build the funnel. Its spend can overshoot or undershoot, which makes it unsuitable for high-ticket products. ** [L0742, 2021-22]
- ** Google's automated campaign types, such as Smart Shopping, are reported to rarely work for high-ticket dropshipping, although they can work for other physical products. Reserve high-ticket Shopping budgets for the shopping funnel structure. [L0740, 2021-22]
- Do not use "smart" or "smart bidding" settings that remove control over individual campaign parameters. These modes stop you from separating high- and low-converting terms into campaigns with different bid strategies. [L0225, 2015+]
- When creating the campaign, select Standard, not goal-optimized, to keep control over individual settings. [L0225, 2015+]
- Do not use Performance Max. Choose Standard Shopping campaign at the subtype step, because the subtype cannot be changed later. [L0743, 2026+; L0186, undated]

### Campaign Creation Without Guidance

#### Choosing the Setup Path

- About 90% or more of campaigns are created without goals guidance, because this gives more bid strategy options and manual control than guided setup. [L0210, 2022]
- Google's guided setup pushes a single campaign type. To build an Alpha-Beta structure, choose the option to create a campaign without goals guidance. [L0454, 2019]
- Choose Create a campaign without goals guidance for a new campaign. Campaign goals only become useful once the store and Google account have enough sales data, which the course puts at six figures or more per month, or several hundred thousand dollars in sales. [L0746, 2020-26]
- In Google Ads, find campaigns via Campaigns, then All campaigns, and filter to Shopping campaigns. The "Go to" button at the top can be used to type "campaign" and jump to creation or viewing. [L0225, 2015+]

#### Conversion Goals

- Keep all conversion goals listed under "Use these conversion goals for campaign performance optimization" switched on. The conversions must already be set up in Google Ads beforehand. [L0743, 2026+]
- Leave all conversion goals enabled. [L0186, undated]

#### Alpha Campaign Build (Standard Shopping)

1. In Google Ads, click Campaigns. [L0186, undated]
2. Click New Campaign. [L0186, undated]
3. Choose Create a campaign without guidance. [L0186, undated]
4. Select campaign type: Shopping. [L0186, undated]
5. Leave all conversion goals enabled. [L0186, undated]
6. Select your connected Google Merchant Center account. [L0186, undated]
7. Choose Standard Shopping, not Performance Max. [L0186, undated]
8. Name it `Alpha, [Store Name]`. [L0186, undated]
9. Set an initial daily budget. The recommended starting point is $5-$10/day total across both campaigns, with maximum recommended early-stage spend around $30/day. [L0186, undated]
10. Set bid strategy: Manual CPC. [L0186, undated]
11. Leave Customer acquisition on default, which bids equally for new and existing customers. [L0186, undated]
12. Set Alpha campaign priority: Low. [L0186, undated]
13. Find the Networks setting (very important; may be under "More settings") and turn OFF Include Google Search Partners. Conversion rates on Google Shopping are best on Google itself, not on Search Partners. [L0186, undated]
14. Create one ad group named `Alpha`. [L0186, undated]
15. Set the CPC bid to $0.40 (starting point). [L0186, undated]
16. Keep Products set to All products included. [L0186, undated]
17. Click Publish campaign. [L0186, undated]
18. After publishing, subdivide products by Item ID inside the Alpha ad group for future per-product bid control. This step is optional but recommended. [L0186, undated]

#### Beta Campaign Build (Standard Shopping)

1. Repeat the campaign creation steps: Create without guidance, select Shopping, select your Google Merchant Center account, and choose Standard Shopping. [L0186, undated]
2. Name it `Beta, [Store Name]`. [L0186, undated]
3. Set bid strategy: Manual CPC. [L0186, undated]
4. Set the CPC bid to $0.20 (starting point; about half of Alpha). [L0186, undated]
5. Set Beta campaign priority: High. [L0186, undated]
6. Find the Networks setting and turn OFF Include Google Search Partners. [L0186, undated]
7. Create one ad group named `Beta`. [L0186, undated]
8. Keep Products set to All products included. [L0186, undated]
9. Click Publish campaign. [L0186, undated]

#### Alternative Campaign Builds

*(No year given)* Alpha build with a starting product shopping bid:

1. Go to Campaigns and click add new campaign. [L0225, 2015+]
2. Select Shopping and your Merchant Center account. [L0225, 2015+]
3. Select Standard (not goal-optimized). [L0225, 2015+]
4. Name it `Alpha Shopping [Category] [TargetROAS]`. [L0225, 2015+]
5. Set bidding strategy to Manual CPC. [L0225, 2015+]
6. Set daily budget (e.g., $25). [L0225, 2015+]
7. Set campaign priority to Low. [L0225, 2015+]
8. Leave Google search partners ON. [L0225, 2015+]
9. Select country (e.g., United States). [L0225, 2015+]
10. Set devices to All devices. [L0225, 2015+]
11. Create a Product Shopping ad group with starting bid ($0.50). [L0225, 2015+]
12. Add universal negative keywords. [L0225, 2015+]
13. Save the campaign. [L0225, 2015+]

*(No year given)* Beta build:

1. Repeat steps 1-3 from the alpha campaign creation. [L0225, 2015+]
2. Name it `Beta Shopping [Category] [LowerROAS]`. [L0225, 2015+]
3. Set bidding strategy to Manual CPC. [L0225, 2015+]
4. Set campaign priority to High (opposite of alpha). [L0225, 2015+]
5. Set starting bid to $0.20 (lower than alpha). [L0225, 2015+]
6. Set target ROAS lower than alpha (e.g., 2.5x vs 3.3x). [L0225, 2015+]
7. Add negative keywords for branded terms (e.g., "lifestyles" as phrase match) to block them from beta and funnel them to alpha. [L0225, 2015+]
8. Add universal negative keywords. [L0225, 2015+]
9. Save the campaign. [L0225, 2015+]

** Full build in the course's Alpha and Beta order:

1. In Google Ads, go to Campaigns and click the blue New campaign button. [L0746, 2020-26]
2. Select Create a campaign without goals guidance, then select Shopping. [L0746, 2020-26]
3. Select the linked Merchant Center account and the one country you sell to (for a US store, United States). [L0746, 2020-26]
4. Select Standard Shopping campaign and click Continue. [L0746, 2020-26]
5. Name the Beta campaign (for example `beta all products shopping`) and leave Additional settings at their defaults. [L0746, 2020-26]
6. Under Bidding and budget, select Manual CPC and uncheck Enhanced CPC. [L0746, 2020-26]
7. Enter the daily budget (the same for both campaigns, for example $15 or about $20). [L0746, 2020-26]
8. Set Campaign priority to High for Beta. [L0746, 2020-26]
9. Under Targeting, keep the Google search network, uncheck Include search partners, YouTube, Gmail and Discover, and set the location to the single country. [L0746, 2020-26]
10. Set the start date to as soon as possible and leave the end date empty, then click Save and continue. [L0746, 2020-26]
11. Keep the ad group type on Product shopping and name the ad group `beta all products`. [L0746, 2020-26]
12. Enter the bid per click for Beta, for example $0.20. [L0746, 2020-26]
13. Click Save. On the ad group page, click the plus next to Add subdivision, choose Item ID, tick the box to select all products, click Continue to edit bids, then Save. [L0746, 2020-26]
14. Create the Alpha campaign the same way: name it `alpha all products shopping`, use Manual CPC with Enhanced CPC unchecked, use the same daily budget, set Campaign priority to Low, and use the same targeting, location and dates. [L0746, 2020-26]
15. For the Alpha ad group, name it `alpha all products`, enter a bid of $0.40 per click (double Beta's bid), click Save, and subdivide by Item ID the same way. [L0746, 2020-26]
16. In the Alpha campaign, open Keywords in the sidebar, click the plus next to Negative keywords, and add only universal negatives (terms that should never match, for example course and videos for a merchandise store). Then save. [L0746, 2020-26]
17. In the Beta campaign, open Keywords, click the plus next to Negative keywords, and add brand names, SKU numbers, popular product names, the strong product-name variants and the same universal negatives. Then save. [L0746, 2020-26]
18. Wait about one day for approval, then open Ads and extensions to check the approval status. Impressions and clicks can take a few days to start arriving. [L0746, 2020-26]

#### Setup Order Summary

1. Create the Alpha campaign (campaign without guidance, Shopping, Standard Shopping, a name in the style `alpha... one source merch`, Low priority, Manual CPC, $0.40 CPC, Search Partners off, Item ID subdivision on). [L0743, 2026+]
2. Create the Beta campaign the same way: same conversion goals, Standard Shopping, High priority, Manual CPC, $0.20 CPC, Search Partners off, country and locations as needed. [L0743, 2026+]
3. Create a shared budget under Tools > Budgets and bidding > Shared budgets, add both campaigns, set the daily budget ($5 to $10), and save. [L0743, 2026+]
4. Add negative keywords to the Beta campaign. [L0743, 2026+]
5. Wait for the campaigns to be approved. [L0743, 2026+]

### Bidding Strategy and Starting Bids

#### Bid Strategy

- Manual CPC is the bid strategy in the Alpha and Beta build procedures. [L0186, undated; L0746, 2020-26]
- Alpha is described with the Maximize Revenue bid strategy, aggressive bids, Low priority, and negative keywords that block low-converting terms and universal negatives. This differs from the Manual CPC build steps above. [L0055, undated]
- Do not use Enhanced CPC. Uncheck it under Bidding and budget. [L0746, 2020-26]

#### Starting Bids

| Campaign | Starting bid | Source |
|---|---|---|
| Alpha | $0.40 per click | [L0186, undated; L0743, 2026+; L0746, 2020-26] |
| Alpha (product shopping ad group) | $0.50 | [L0225, 2015+] |
| Beta | $0.20 per click (about half of Alpha) | [L0186, undated; L0743, 2026+; L0746, 2020-26] |
| Beta (lower than alpha) | $0.20 | [L0225, 2015+] |

- The starting manual CPC for Alpha is $0.40 (40 cents), to be adjusted over time. The starting CPC for Beta is half of the Alpha bid, $0.20 (20 cents). [L0743, 2026+]
- The Beta bid is the lower of the two in every case. [L0746, 2020-26]
- The Alpha campaign gets the higher CPC bid and Beta the lower, because Alpha traffic is worth more and it is acceptable to pay more for it. [L0746, 2020-26]
- Give every product group the same starting bid, and adjust bids only once performance data has built up. Bids set on guesses before data exists tend to be wrong. [L0503, 2020-26]
- The ad group bid starts at the campaign's starting CPC. [L0743, 2026+]

#### Target ROAS

- Alpha example: typically produces ROAS around 15x, so start with a CPC bid of $0.40. Beta example: typically produces ROAS around 8x, so start with a CPC bid of $0.20. [L0186, undated]
- Target ROAS examples in alternative builds: Alpha 3.3x, Beta 2.5x (lower than alpha). [L0225, 2015+]
- Target ROAS example in naming: 3.6 for a shopping campaign for cold traffic in the USA. [L0327, 2020-26]

#### Customer Acquisition and Local Settings

- Leave Customer acquisition on the default, which bids equally for new and existing customers. [L0186, undated]
- Keep the default "bid equally for new and existing customers" setting, so returning customers who search for products are bid on equally. [L0743, 2026+]
- Leave local products off unless the business has a physical retail location. Leave EU political ads off when they do not apply. [L0743, 2026+]

#### Why Two Bid Levels

- Using one budget and one campaign for all keywords sets equal bids for low- and high-converting terms and reduces profitability. Splitting into two campaigns lets most of the budget go to the higher-converting terms. [L0743, 2026+]
- With a limited budget, spend should go first to the campaign with the highest return per dollar, which is Alpha. Beta should still be profitable but receives less money because its traffic is less valuable. [L0746, 2020-26]
- The alpha-beta campaign structure solves Shopping's main limitation: you cannot pick keywords or set keyword-level bids. By splitting campaigns and using negatives to funnel, you effectively create high-bid and low-bid keyword groups, even though Google picks which searches trigger your ads. [L0225, 2015+]

### Budgets and Shared Budgets

#### Shared Budget Procedure

To unify spending across the Alpha and Beta campaigns: [L0186, undated]

1. Go to Tools, open Budgets & bidding options, and select Shared budgets. [L0186, undated]
2. Set up a new shared budget by adding both campaigns to it. [L0186, undated]
3. Establish your daily cap. Start with $5-$10/day, as recommended. [L0186, undated]
4. One budget limit then manages spending across both campaigns. [L0186, undated]

#### Daily Budget Values

| Source | Daily budget | When it applies | Source ID |
|---|---|---|---|
| Starting point for both campaigns together | $5-$10 per day total, maximum early spend about $30 per day | First launch, shared budget | [L0186, undated; L0743, 2026+] |
| Shared budget example | $5-$10 per day | Shared budget across both campaigns | [L0743, 2026+; L0186, undated] |
| Alpha, example | $25 per day | Standard setup example | [L0225, 2015+] |
| Same for both campaigns | $15 or about $20 per day each | Course build with Alpha and Beta at equal budget | [L0746, 2020-26] |
| Alpha and beta, each | $20 per day each | Narrow starter feed of about 20 products | [L0470, 2023] |
| Each campaign | $10-$30 per day | New store with 500+ products, two-week data window | [L0270, 2021] |
| Alpha, 2019 | $30 per day | Older setup | [L0243, 2019] |
| Beta, 2019 | $17 per day | Older setup | [L0243, 2019] |
| Example of imbalanced spend | Alpha $100/day, Beta $8/day | Shared budget with proper priority to allocate spend | [L0274, 2023] |

- ** Set Alpha to a higher daily budget (e.g., $30) and Beta to a lower one (e.g., $17). [L0243, 2019]
- ** Alpha: set the budget higher. Beta: set it lower. [L0243, 2019]
- ** Let all campaigns run with $10-$30 per day. [L0270, 2021]
- ** With a daily budget of 20 USD for each alpha and beta campaign, start with a narrow feed of about 20 products rather than a large catalog of around 1,000. [L0470, 2023]
- ** If Alpha spends $100 a day and Beta spends $8 a day, set up a shared budget with the correct priority (Alpha high, Beta low). Note that this example reverses the priority of the standard alpha-beta setup. [L0274, 2023]

#### Shared Budget Pairs

- ** One shared budget is associated with two campaigns, such as alpha and beta bestsellers. A second shared budget is associated with the alpha and beta everything-else campaigns. [L0360, 2024]
- ** Shopping campaigns are built as pairs of an alpha and beta campaign for each product group, such as alpha bestsellers and beta bestsellers. Each pair is attached to one shared budget. Separate pairs are set up for each country or region served. [L0360, 2024]

### Networks, Location and Dates

#### Networks

| Setting | Recommendation | Source |
|---|---|---|
| Google Search Partners | Off. Conversion rates are better on Google itself. Networks field should read "no networks targeted". | [L0186, undated; L0743, 2026+; L0746, 2020-26] |
| Google Search Partners | On by default in one course unit; this conflicts with the rest of the course (no date given) | [L0225, 2015+] |
| YouTube, Gmail, Discover | Include | [L0742, 2021-22] |
| YouTube, Gmail, Discover | Uncheck; ads run only on google.com, which is where the campaign is meant to show | [L0746, 2020-26] |

- Turn off Google Search Partners under the Networks setting. It is on by default, and its placements convert much worse. The Networks field should then read "no networks targeted". [L0743, 2026+]
- Find the Networks setting (very important; may be under "More settings") and turn Include Google Search Partners off. Conversion rates on Google Shopping are best on Google itself, not on Search Partners. [L0186, undated]
- Leave Google search partners on by default. These include Google Maps and websites with search boxes. You can analyze their performance separately later, but they generally perform similarly to Google Search. *(No year given; this conflicts with the advice to turn search partners off.)* [L0225, 2015+]
- ** Keep the Search Network. Do not include Google search partners, because their performance cannot be tracked, sites cannot be excluded and search terms are not visible. Include YouTube, Gmail and Discover, because Shopping ads perform well there with strong evidence. [L0742, 2021-22]
- For Shopping campaigns, keep the Google search network and uncheck Include search partners, as well as YouTube, Gmail and Discover. With these unchecked, ads run only on google.com. Set the location to one country per campaign. [L0746, 2020-26]

#### Location

- Location targeting defaults to the country of the Merchant Center feed and the Google Ads account. For multi-country selling, use separate feeds per country. Prices must be shown in the local currency as a Merchant Center requirement. ** [L0742, 2021-22]
- The location step asks for each country where ads should show. Europe-wide ads require selecting every EU country in the list. Countries can also be chosen individually, such as only Spain and Italy. The same location settings appear when setting up Meta campaigns. ** [L0360, 2024]
- For the broad Beta campaign, leave the location on the country where the business sells. In this setup that was the United States. [L0743, 2026+]
- Select the country (e.g., United States) and set devices to All devices. [L0225, 2015+]
- Set the location to one country per campaign. [L0746, 2020-26]

#### Dates and Ad Group Type

- Start date: the date the campaign is created. No end date is set. ** [L0742, 2021-22]
- Set the start date to as soon as possible and leave the end date empty, so the campaign runs indefinitely. [L0746, 2020-26]
- Keep the ad group type on Product shopping, which is the default. Do not use Showcase shopping. [L0746, 2020-26]
- For the first ad group, choose the ad group type Product Shopping with Create single product ads rather than Showcase Shopping. Product Shopping ads show the product image and send the shopper straight to the product to buy it. ** [L0742, 2021-22]


Part 19 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/18-feed-sync-and-update-timing.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/20-campaign-priority-and-the-alpha-beta-logic.md
