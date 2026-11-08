<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 21 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/20-campaign-priority-and-the-alpha-beta-logic.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/22-where-sources-disagree.md

### Approval, Activation and Timing

#### Before Launch

- Create Google Shopping campaigns only after all products are fully approved in Google Merchant Center. If product approval is pending or Google has requested changes, fix those issues and get full approval before proceeding. [L0186, undated]
- Before enabling the campaigns, most products should be approved in Google Merchant Center. Not every product needs to be approved. Products that are not approved simply do not show. [L0742, 2021-22] **
- The Google Ads account and the Merchant Center account are already linked, so the product feed loads automatically. If several feeds exist, for example one per country, select the correct one. The country of sale defaults to the country of the Google Ads account. [L0742, 2021-22] **
- The Merchant Center holds the product feed that Shopping campaigns use. It must be linked to the Google Ads account, and the correct Merchant Center account must be selected when creating each Shopping campaign. [L0746, 2020-26]
- Only one funnel should run at a time. Pause older or duplicate Shopping campaigns before running the new structure. Two funnels competing in the same account confuse Google. ** [L0744, 2021-22]

#### Pausing and Enabling

1. Pause all funnel campaigns while settings, bids and negative keyword lists are being applied. This keeps ads from running with incomplete settings. [L0742, 2021-22] **
2. Once products are approved in Google Merchant Center, enable the paused campaigns. Ads begin delivering over the next few hours. [L0742, 2021-22] **
3. Enable the campaigns only once the funnel is fully configured. [L0742, 2021-22] **

#### Copying a Campaign

** [L0742, 2021-22]

1. Use Edit, then Copy, then Paste to duplicate a campaign. The copy keeps its ad groups, product groups, bids, priority and negative keyword assignments. [L0742, 2021-22]
2. The copy's name gets a `#2` suffix. [L0742, 2021-22]
3. The paste dialog can pause the new campaigns. [L0742, 2021-22]
4. Copying a large campaign can take several minutes, so wait for the progress bar to finish. [L0742, 2021-22]

#### Approval Timing

- Campaigns may show ads under review. Approval typically takes around 30 minutes but can take up to a few days. Once approved, impressions and clicks should start, followed by purchases as optimization continues. [L0186, undated]
- Wait about one day for approval, then open Ads and extensions to check the approval status. Impressions and clicks can take a few days to start arriving. [L0746, 2020-26]
- Wait for the campaigns to be approved before continuing. [L0743, 2026+]
- Ads begin delivering within a few hours of enabling. ** [L0742, 2021-22]

### Optimization and Judging Performance

- Judge Alpha and Beta together by conversion rate and ROAS, not ROAS alone. Beta can show a higher ROAS from very cheap clicks while converting far less often. Example: beta at $0.45 CPC and a 0.64% conversion rate versus alpha at $1.93 CPC and a 2.39% conversion rate, with ROAS of 4.96 in beta and 3.48 in alpha. Converting search terms should be moved into alpha. [L0745, 2020-26]
- Alpha and beta are reviewed and optimized together during the weekly audit. [L0715, 2020-26]
- Compare cost per click and conversion rate in the alpha and beta campaigns, then run the negative keyword push above. [L0745, 2020-26]
- Analyze the data every two weeks, and segment further by brand, category, bestsellers or price tier as the data supports. ** [L0466, 2018]
- Do not manually move keywords between campaigns. Adjust bid amounts upward in the beta campaign instead. ** [L0276, 2024]
- Impressions, clicks and sales should be read per product once the Item ID subdivision is in place. [L0746, 2020-26; L0671, 2021]

### The Google Shopping Funnel: Overview

#### What the Funnel Is

- For high-ticket products, the only Google Shopping structure described as consistently effective is search query level bidding, also called the shopping funnel. Other Shopping approaches are generally built for lower-ticket products. ** [L0740, 2021-22]
- Search query level bidding also goes by the names alpha beta and inverted funnel. These are informal labels for the same strategy. Use the official name when searching for or comparing sources. ** [L0740, 2021-22]
- Standard Google Shopping ads promote one product at a time, so broad top-of-funnel searches are rarely ready to consider a single product. Standard Shopping ads suit middle- and bottom-of-funnel searches only. ** [L0740, 2021-22]
- The alpha-beta campaign structure is the answer to Shopping's main limitation. You cannot pick keywords or set keyword-level bids. By splitting campaigns and using negatives to funnel, you effectively create high-bid and low-bid keyword groups, even though Google picks which searches trigger your ads. [L0225, 2015+]
- Use two Shopping campaigns. An Alpha campaign for high-converting terms (brand names, product names, SKU numbers) and a Beta campaign for broad, generic, lower-converting terms, so that bids can be set differently for each group of keywords. [L0743, 2026+; L0186, undated]
- Use two Shopping campaigns that both contain the full product set: an Alpha campaign for the highest-converting searches (brand names, product names, SKU numbers) and a Beta campaign for broader, lower-converting searches. Products are not split between them. Only the search terms each campaign catches differ, and negative keywords enforce that split. [L0746, 2020-26]
- Create two campaigns (Alpha and Beta). Google Shopping ads use product feed data, titles, descriptions and site content, not positive keywords. Google decides what searches show your ads. The two-campaign structure lets you control bidding indirectly with negative keywords. High-intent searches go into Alpha (higher bids) and broad searches into Beta (lower bids). [L0186, undated]
- Shopping campaigns are split into two parts to separate high and low bids. This is the core of the funnel. [L0225, 2015+]

#### The Funnel in Sequence

1. Google reads the product feed submitted through Merchant Center. [L0746, 2020-26; L0714, 2020-26]
2. Beta (High priority) is checked first and blocks searches that match its negatives. [L0746, 2020-26]
3. Searches blocked by Beta fall through to Alpha (Low priority), where the higher bid applies. [L0243, 2019; L0746, 2020-26]
4. Searches that match neither negative stay in Beta at the lower bid. [L0243, 2019]
5. Converting search terms are moved into Alpha by negative exact keywords. [L0745, 2020-26]
6. Each campaign is judged on conversion rate and ROAS together. [L0745, 2020-26]

#### Alpha-Beta Example

- Alpha example: high-intent searches (brand names, product names, SKU/MPN numbers) produce ROAS around 15x, so start with a CPC bid of $0.40. Beta example: broader, lower-intent searches (general niche terms such as `surfboards`) produce ROAS around 8x, so start with a CPC bid of $0.20, about half of Alpha. [L0186, undated]
- Beta negatives push high-intent terms to Alpha. Example: a store that sells several brands lists each brand name, SKU number and bestselling product name as Beta negatives. [L0746, 2020-26; L0186, undated]

### How Shopping Ads Work

- Shopping campaigns offer no direct keyword targeting, so you cannot give Google a list of search terms your ads should show for. Your only direct control over which searches trigger your ads is excluding terms with negative keywords. [L1074, 2021-22]
- Google matches Shopping ads to searches by reading the product data you supply. This is usually accurate but not always. Google does not judge search intent or value the way a merchant does, so the merchant has to steer it with negative keywords. [L1074, 2021-22]
- Google picks the search terms to show for from the product titles and descriptions in the submitted feed, so those fields matter most. [L1165, 2020-26]
- Feed quality, especially titles and attributes, controls which searches your products appear for. [L1328, 2015]
- The keywords used for matching come from the product pages in Merchant Center. The only keywords to add are negative keywords for searches you do not want. [L1097, 2025]
- Shopping does not use keywords the way search ads do, so relevance depends on product titles, data and category. [L1114, 2023]
- To change which search terms trigger a product, edit its product page content so it includes those keywords, then let the feed update. [L1277, 2020]
- Shopping listings are ranked by search term and product data. A niche with few brand searches is not a problem by itself. Focus on the generic product keyword and keep the same alpha/beta structure. [L1090, 2021]
- Product listing ads mostly target long-tail keywords. Ranking in Shopping is a different challenge from organic search and is generally easier. *Older advice (2018).* [L1274, 2018]
- Shopping ads need no copywriting. Once the store is connected to Google Ads, the ads are generated automatically from the product name, price and store name. *Older advice (2019).* [L1069, 2019]
- Alpha and beta Shopping campaigns need no manually entered keywords, because keywords are pulled from the product feed. Brand and search text campaigns are the only places where keywords are entered by hand. *Older advice (2023).* [L0855, 2023]
- Within Google Ads, Shopping is typically the largest and most frequently used campaign type for dropshipping stores, so it deserves the most attention when optimizing. *Older advice (2021-22).* [L1494, 2021-22]

### Choosing the Campaign Type

| Option | Status and use | Source |
|---|---|---|
| Standard Shopping | Core structure for product campaigns. Per-product reporting is possible. | [L0854, 2022; L1092, 2022] |
| Smart Shopping | Phased out by Google. Do not use. | [L0854, 2022] |
| Smart campaigns (goal-based) | Suit beginners who will not spend time optimizing and want to launch in a few minutes. Trade advertiser control for visibility and fast launch. | [L1336, 2020-26] |
| Custom campaigns | For advanced advertisers who want full customization and maximum profitability. Every setting stays under the advertiser's control. | [L1336, 2020-26] |
| Performance Max | Does not show product-level data. | [L1092, 2022] |

- Google Ads shows predefined smart goals every time a new campaign is created, not only during the first account setup. Advertisers must go through this selection step each time. [L1336, 2020-26]
- The campaign goal screen offers Sales, Leads and Website traffic as smart goal options. A fourth option, create a campaign without a goal, is at the bottom of the screen. [L1336, 2020-26]
- Google Shopping ad types for product campaigns are Normal, Dynamic Ads, and YouTube Shopping and Gmail Shopping. Choose by goal: standard product ads, retargeting, or placements on video and email. [L1033, 2019]
- Per-product bid control is not the default in Google Ads. It requires building the Shopping campaigns in the specific structure described in the Google Shopping setup lesson, so existing campaigns may need to be rebuilt. *Older advice (2023).* [L0855, 2023]
- Interface changes in Google Ads do not change the campaign structure or the bid strategies. *Older advice (2025).* [L1116, 2025]

### Campaign Creation and Settings

- When Google Ads or Shopping shows Continue instead of Enabled during setup, click Continue and check the status again. Ads that are already running may show Enabled afterward. *Older advice (2023).* [L1094, 2023]
- Search partners are non-Google websites that belong to the search network and display Google ads. To keep Shopping ads running only on google.com, exclude search partners along with YouTube, Gmail and Discover. [L0746, 2020-26]
- The language setting in a Google Ads campaign controls which user language preferences see the ads, not the language of the website. For a non-English market, select that language and write the ad text and keywords in it. *Older advice (2021-22).* [L1342, 2021-22]
- Google Shopping ads must be either already live or still pending approval before the launch date. Once approved, they start generating impressions and sales. [L1393, 2020-26]

### Choosing the Structure: Alpha and Beta

- The two-tier principle: the Alpha campaign targets strong search terms with higher bids. The Beta campaign picks up weaker, more general terms with low bids, accepting a lower CTR and lower conversion rate on it. [L0805, 2024]
- Shopping campaigns are split into Alpha and Beta campaigns, each with its own Return on Ad Spend (ROAS) target. Alpha is the core product-level campaign and Beta is the testing campaign. [L0867, 2020-26]
- Split the Shopping setup into separate alpha and beta campaigns, each with its own bid and budget, so you can compare them. [L0808, 2026]
- A high-priority Alpha campaign captures brand, product name and SKU searches. A Beta campaign captures general terms. Negative keywords in Beta keep specific searches out of it. [L0966, 2025]
- Alpha and beta both receive impressions and clicks. They split keywords by quality, and each campaign has its own report. *Older advice (2019).* [L1002, 2019]
- Alpha and beta keep the same structure even when alpha has few keywords. Use a shared budget rather than changing the structure. *Older advice (2021).* [L1090, 2021]
- Use the Alpha Beta campaign structure for Google Shopping. *Older advice (2025).* [L1116, 2025]
- Use an alpha and beta structure in Google Ads. Keep alpha for targeted searches and beta for broader searches, and add negative keywords to both. *Older advice (2020).* [L0961, 2020]
- A simplified single Google Ads campaign that lets Google decide where to spend the budget is not the best approach. Turn it off and rebuild the account using the alpha and beta structure. *Older advice (2020).* [L0961, 2020]
- A standard Shopping setup in Google Ads uses three campaign types: Generic, Brand and SKU. Alpha and Beta Shopping campaigns should follow this structure as the default. [L1033, 2019]
- A basic starting setup has four campaigns: Google Shopping alpha, Google Shopping beta, Google remarketing and Meta remarketing. Avoid testing many other formats, such as cold display or cold Meta ads, at the start. *Older advice (2025).* [L0972, 2025]

#### Launch Structure

- At launch, put all products into both the Alpha and Beta Shopping campaigns. Alpha and Beta form a two-tier structure. A three-tier structure also works, but two tiers is the default setup. [L0971, 2024]
- Start Shopping with two campaigns, alpha and beta, that both include all products. Do not split Shopping campaigns by product category at the start. *Older advice (2025).* [L0972, 2025]
- Start with one alpha and one beta campaign covering all products in one feed. Optimize them over time rather than splitting products one per campaign. *Older advice (2022).* [L0969, 2022]

### Shared Budgets and Priority

| Setting | Alpha | Beta |
|---|---|---|
| Role | Strong terms, brand, product name, SKU | General terms, testing |
| Priority | High | Lower |
| Bid | Higher | Low |
| Negative keywords | Blocks lower-converting terms | Receives blocked terms; specific searches excluded |
| Source | [L0966, 2025; L0805, 2024; L0808, 2026] | [L0966, 2025; L0805, 2024; L0808, 2026] |

- Alpha and beta should share one budget, so one campaign cannot consume the whole budget. Set campaign priority correctly during setup, since mismatched priorities let one campaign eat the budget. *Older advice (2023).* [L0804, 2023]
- Keep alpha and beta from competing and driving up cost per click by using negative keywords and campaign priority levels. Without them, the campaigns bid against each other. *Older advice (2022).* [L0854, 2022]
- No fixed minimum budget is required to start a Shopping campaign, but a larger budget produces data faster. Each new campaign must be tested under its own conditions and product set, even for advertisers who already run other accounts. [L1341, 2020-26]
- A small share of search terms, around 5%, appearing in the alpha campaign when they should be in beta under a shared budget is not a reason to restructure. A leak that small is not enough data to pin down a cause, and budget differences would usually produce a much larger share. Keep the structure, keep adding negative keywords, and reassess later. *Older advice (2021).* [L1090, 2021]

### Negative Keywords

- Use negative keywords in both alpha and beta campaigns to block searches that belong elsewhere. *Older advice (2020).* [L0961, 2020]
- Blocking many cheaper or lower-value searches with negative keywords can hurt more than help, because it may block searches that would have converted. [L0805, 2024]
- Add negative keywords and ad group bid adjustments after the store has data, not at the start. *Older advice (2020).* [L1111, 2020]
- Negative keywords are the only keywords to add to Shopping campaigns, and only for searches you do not want. [L1097, 2025]

### Bids and Starting CPC

- Example starting bids are $1.00 for alpha and $0.50 for beta, with a starting point of about $0.50 to $1.00 CPC. [L0808, 2026]
- The launch phase is about buying data, not expecting profit. Keyword and product research cannot predict the actual cost per click or the real conversion rate, so the account has to be launched and tested to learn these values. [L1341, 2020-26]
- High bids that produce no clicks signal that competitors are bidding more aggressively. Market data reveals both bid competitiveness and conversion rate competitiveness, so the campaign must be tested to find out. [L1341, 2020-26]
- For standard Shopping, keep ad rotation set to optimize for best performing ads. *Older advice (2024).* [L1115, 2024]
- Lower the cost per click for a product group when it takes too much of the budget. *Older advice (2020).* [L0852, 2020]
- Set bids per product. For example, raise a cost per click from 0.20 USD to 0.25 USD on a product that needs more impressions. *Older advice (2020).* [L1277, 2020]
- To change bids per product, split the catalog into product groups so each product or brand can get its own cost per click. Raise the bid only on products that get impressions but too few clicks or that have low visibility. *Older advice (2021).* [L1112, 2021]
- A product with no impressions should be checked for search demand, relevance and competition before its bid is raised. [L1114, 2023]

### Product Groups and Item ID Subdivision

#### Subdivision Options

- When adding a subdivision to a Shopping ad group, the options are product type, category, brand and Item ID. Choose Item ID to break the ad group down by individual product, so each product gets its own reporting row and its own bid. [L0746, 2020-26]
- In Google Shopping campaigns, each product group corresponds to one product. *Older advice (2020).* [L0852, 2020]
- In standard Shopping campaigns, place each product in its own product group so impressions, clicks and sales are visible per product. Performance Max does not show product-level data. *Older advice (2022).* [L1092, 2022]
- Split product groups by individual product so spend and return are visible per product in Google Ads. *Older advice (2020).* [L1277, 2020]

#### The Everything Else Node

- When a Shopping product group is subdivided, Google Ads adds an Everything else node. It is set to Excluded and carries no bid. Products that match none of the named subdivisions fall into this node and do not serve, so every product should be placed in a labelled group. *Older advice (2021-22).* [L0747, 2021-22]
- Check the product count in the Everything Else in All Products group. If all products are split out at product level, that group should be empty. *Older advice (2024).* [L0836, 2024]
- Check whether an All products product group sits alongside individually listed products in the same ad group. If it does, pause the All products group so products are not counted twice. *Older advice (2020).* [L0852, 2020]

### Launch

- Launch campaigns with the full product catalog in one alpha and one beta campaign. Then remove products based on data as clicks and conversions come in. Do not pre-select products before there is data. [L0941, 2022]
- Start Google Shopping campaigns with the full product catalog as soon as the products are uploaded and the feed is set up. Driving traffic to the homepage with broad keywords is expensive and brings the least qualified buyers. *Older advice (2020).* [L1277, 2020]
- Keep ad structure simple at the start, with all products in the Alpha and Beta campaigns. Negative keywords and ad group bid adjustments can be added after the store has data. *Older advice (2020).* [L1111, 2020]
- Launch three core campaigns on Google Ads first, before any social traffic: product listing ads (PLAs), search text ads on profitable terms, and search audience campaigns with retargeting. Once they work on Google, copy them over to Bing Ads. *Older advice (2019 onward, undated source).* [L1203, 2016]

### Google Shopping Funnel and Process Overview

1. Connect the store to Google Ads. Shopping ads are then generated automatically from product name, price and store name, with no copywriting needed. [L1069, 2019]
2. Submit the feed. Google reads product titles, descriptions and attributes to decide which searches your products match, and it uses the Merchant Center product pages for matching keywords. [L1165, 2020-26; L1097, 2025]
3. Launch the full catalog in one alpha and one beta campaign, with the shared budget and priority set correctly. [L0941, 2022; L0804, 2023]
4. Build the PLA alpha/beta pattern. Run two campaigns per product listing ad setup. The alpha campaign uses negative keywords to block lower-converting search terms, and the beta campaign receives those terms. Every PLA campaign is typically duplicated this way. [L1203, 2016]
5. Compare channels. In the owner's Google campaigns, Shopping converted much better than Search, with a strong conversion rate. For a store running both, Google Shopping is the channel to scale first. [L1077, undated]
6. Optimize with data. Remove products that do not perform, split product groups by Item ID, adjust bids on products that need impressions, and add negative keywords for unwanted searches. [L0941, 2022; L0746, 2020-26; L1112, 2021; L1097, 2025]
7. Copy proven campaigns to Bing Ads after they work on Google. [L1203, 2016]

Each PLA setup also follows the long-tail principle: product listing ads mostly target long-tail keywords, and the alpha and beta structure applies. [L1274, 2018; L1203, 2016]


Part 21 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/20-campaign-priority-and-the-alpha-beta-logic.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/22-where-sources-disagree.md
