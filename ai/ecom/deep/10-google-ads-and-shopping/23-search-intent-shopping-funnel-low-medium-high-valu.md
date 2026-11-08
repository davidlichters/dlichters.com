<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 23 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/22-where-sources-disagree.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/24-brand-names-and-the-two-campaign-alternative.md

## Search-Intent Shopping Funnel (Low/Medium/High Value Campaigns)

### Search intent and value tiers

- **** Search intent is the purchase intent behind a search term. It must be judged for every term from keyword research, whether for paid ads or SEO, and it decides how much a click from that term is worth to the business. [L0739, 2021-22]
- **** The same product can match searches with very different purchase intent. A broad category search shows little buying intent, a search with size and feature descriptors shows more, and a search with brand and model name shows the strongest buying intent for the exact product. [L0741, 2021-22]
- **** Search intent differs between high-ticket and low-ticket products, so the customer journey and the bidding approach must differ too. A method that works for cheap products can overspend badly on expensive ones. [L0740, 2021-22]
- **** Google does not sort search terms into value levels by buying intent and cares about this less than the advertiser does. The advertiser must therefore tell Google when to show ads and when not to. [L1074, 2021-22]
- **** Google Shopping suits middle- and bottom-of-funnel search terms. Branded and product-specific queries bring largely relevant traffic, while generic top-of-funnel terms, such as a broad category phrase sent to one product page, usually do not convert. Exclude such terms from Shopping and address them through another channel such as content. [L1456, 2021-22]
- Tag each search term by buying journey stage: research (top of funnel), comparing (middle of funnel) or ready to buy (bottom of funnel). Top-of-funnel terms can be valuable for awareness, but they usually convert less and should be judged against that. [L0876, 2025-26]

#### Value tier table

**** Three value tiers classify every search term.

| Value tier | Intent | Typical length | What the term identifies | Example (own) | Bid priority |
|---|---|---|---|---|---|
| Low | Ambiguous; the searcher may want images, repairs, used items, rentals or information | 1 to 2 words | Only a product type | coffee grinder | Lowest |
| Medium | Specific; the searcher has narrowed the choice | 3 to 5 words, sometimes more | A group of products defined by type plus attributes such as size, capacity, zones or features | burr coffee grinder with 300 g hopper | Middle |
| High | Clear; the searcher wants one product | Brand plus model name, part number, SKU or another unique identifier | A single product | Acme Pro 500 burr grinder | Highest |

[L0739, 2021-22]

#### Low value terms

- **** Low value terms usually have a generic one- or two-word wording, so the searcher may only be browsing or may need service for a product bought elsewhere. Clicks on them cost the bid but rarely lead to a sale, so the chance of conversion is unknown. [L0739, 2021-22]
- **** Low value terms have ambiguous intent and are usually one or two words, so it is unclear what the searcher wants. They can still convert, but at a lower rate. [L0740, 2021-22]
- **** Shoppers sometimes click a store's ad for a product they bought from someone else, expecting help with service or a wider range, so a click does not mean a buyer. Some clicks from broad terms will bring contacts you cannot serve, which raises the real cost per sale. Include these unrelated contacts when judging whether a search term is profitable. [L0741, 2021-22]

#### Medium value terms

- **** Medium value terms add attributes such as size, capacity, zone count or feature, which shows real buying intent and points to a group of matching products. The retailer can reasonably expect that a visitor from such a term will buy something similar from its range. [L0739, 2021-22]
- **** Medium value terms show clearer intent, such as a product type combined with a size or feature. They still fit several products in the catalogue, so their conversion chance is higher than for low value terms but lower than for high value terms. [L0740, 2021-22]

#### High value terms

- **** High value terms name one product, either by brand plus model name or by part number, SKU or another unique identifier. If a brand sells several near-identical products, a brand-plus-description term is worth less than one containing the exact model identifier. [L0739, 2021-22]
- **** High value terms match exactly one product in the catalogue, typically a brand name combined with a specific model name. Because the intent is certain, they have the highest conversion chance and the highest value to the business. [L0740, 2021-22]
- **** A high-value search term is one that matches a single product, typically brand plus model number, part number, SKU or another unique identifier. If a brand has several products matching a brand-plus-description search, that term is worth somewhat less than one containing the unique identifier. [L0741, 2021-22]
- **** A search that combines a brand name with a product description is high value only if that brand sells just one product matching the description. If the brand has several near-identical models, treat that term as slightly lower value than a term containing the exact model number, part number or SKU. [L0739, 2021-22]
- **** A brand name plus a descriptive term without the model number counts as high value only if that brand has a single product matching the description. If the brand has several matching products, treat the term as somewhat lower value and check the brand's range before assigning value. [L0741, 2021-22]

#### Classifying a search term

- **** To classify a Shopping search term, count how many products in the catalogue it would fit. A term that matches only one product is high value, a product type narrowed by size or feature is medium value, and a broad generic word that could serve many unrelated purposes is low value. [L0740, 2021-22]
- **** Classify each search term by how many products it could match: many products means low value, one product group defined by attributes means medium value, and one exact product means high value. Examples from the same source: *walking shoes* is low, *waterproof trail walking shoes women size 10* is medium, and *Trailmax X3 women trail shoe size 10* is high. [L0739, 2021-22]
- **** Search terms are valued by how precisely they identify what the buyer wants. Low value terms are ambiguous and typically one or two words. Medium value terms identify a group of products and usually have three to five or more words. High value terms match exactly one product through brand plus model name, part number or SKU. Use this three-tier classification to decide how much each search term is worth to bid on. [L0741, 2021-22]
- **** Example ladder for a surfboard store: *surfboard* is a low-value term because the intent is unclear. *6 foot performance short board* is a medium-value term that narrows the product type and size. A brand plus model name such as *Channel Islands OG Flyer surfboard* is a high-value term that points to one specific product. [L0740, 2021-22]
- **** Example with one product, an inflatable paddleboard. A one-word term like *paddleboard* is low value. A term with size and type like *inflatable paddleboard 12 ft solo* is medium value. A term with brand plus model number is high value. Each step narrows the match to fewer products and shows stronger buying intent. [L0741, 2021-22]
- **procedure:**
  1. Export the search terms from your keyword research.
  2. For each term, decide whether it names only a product type, a product group defined by attributes, or one specific product through brand plus model or part number.
  3. Label each term low, medium or high value.
  4. Set the highest bids for high value terms, moderate bids for medium value terms, and limit bids on low value terms.
  5. Add negative keywords for terms with no buying intent for your products, and review the terms that trigger your ads.

  [L0739, 2021-22]

#### Share of traffic

- **** In any single market, only about 10% of search traffic is high value at a given time. Medium value traffic is slightly larger than high value traffic, and about 75% of traffic is low value. Expect most search traffic to be low value and budget accordingly. [L0739, 2021-22; L0741, 2021-22]
- **** At any given time, the bottom of the funnel usually represents only about 10% of most markets, while the majority of potential buyers sit at the top of the funnel. [L0740, 2021-22]
- **** For high-ticket dropshipping, keywords are usually sorted into three value levels: low, medium and high. Three or four levels are most common. More are possible but rarely needed. [L0740, 2021-22]
- **** Competitors and the market are not the only variable: the same tiers apply to any product, and a term's value comes from what it identifies, not from its brand alone. [L0742, 2021-22]

  *Note: [L0742, 2021-22] states that the funnel segments search intent, not brand ownership; branding is one way to see the difference in specificity, and unbranded product lines can use the same three-level split.*

### Bidding by value

- **** Bid more for search terms with a higher chance of converting. Low value terms need many more clicks per sale, which raises the cost per sale. Bidding the same amount on every tier means spending far more for fewer conversions and wastes budget on low value terms. [L0739, 2021-22; L0741, 2021-22]
- **** In the shopping funnel, bid the most on high value terms, a middle amount on medium value terms, and the least on low value terms. Low value terms are not dropped, but they are bid cheaply because they convert at a lower rate. [L0740, 2021-22]
- **** Bids are set by value to the business. High value terms get high bids to win the auction. Low value terms get low bids to limit cost, because they have a low chance of conversion. [L0742, 2021-22]
- **** On high value search terms, bid high enough to win the first position in the Shopping results, but only when the store is well optimized for conversions and outperforms competitors. Without that, the high bid will not turn into profitable sales. [L0740, 2021-22]
- **** When one bid applies to all relevant search terms, raising the bid to win high value traffic also raises the cost of low value traffic. This coupling is why each keyword value level needs its own bid. [L0740, 2021-22]
- **** A standard Shopping ad structure charges the same bid for every keyword level, so the same cost per click is paid for low value and high value searches. This overpays on low value traffic and erodes profitability. [L0740, 2021-22]
- **mistake:** Targeting large amounts of low value traffic makes Shopping campaigns unprofitable, because spend grows faster than sales. Aim to capture as much high value traffic as possible, an acceptable share of medium value traffic, and limit exposure to low value traffic. [L0739, 2021-22]
- **** Competitors running a basic Shopping setup pay similar amounts for every keyword and must spend heavily on high value terms to stay competitive, which leaves them less profit per sale. A store that bids by keyword value and keeps more margin per sale can therefore outbid them for longer. [L0740, 2021-22]
- **** Most competitors pay the same average bid for branded and generic queries, so they lose money on the generic ones. Segmenting and bidding low on generic terms lets you keep those clicks at a positive ROI while they do not. [L1328, 2015]
- Searches that trigger the same Shopping campaign do not convert equally. Specific branded queries can convert around 5-10%, while generic queries may convert near 0.5%. Because of this spread, each search group needs a different bid. [L1328, 2015]
- Example: the specific branded term *Oakley Holbrook men's sunglasses* with high intent. A 0.50 USD bid won only about 300 clicks because competitors outbid it. Winning every click for this term could lift revenue from about 1,000 USD to about 3,000 USD for the same effort. [L1328, 2015]
- Bid high on specific, high-intent branded terms so you capture every impression, as long as the product stays inside your profitable ROI range. Bid low on generic, low-intent terms so they bring traffic without large losses. [L1328, 2015]
- Bid less on generic queries, such as a search for a generic product type, and more on branded queries, because branded searchers show stronger purchase intent. Example in the same pattern: bid less on a generic query for a standard kitchen knife set and more on the brand name of the same seller. The same logic applies to every account structure. [L0454, 2019]
- Searches for an exact product name, model number or SKU convert much better than searches for a general category term. Budget should therefore move toward brand names, product names and SKU numbers, and generic or irrelevant terms should be excluded. [L0626, 2025+]
- Broad generic searches convert poorly because the shopper may not want the specific item shown. Searches for product names, brand names or SKU numbers convert much better and should receive the budget. [L0857, 2025]
- Broad keywords usually have a low click-through rate because the ad does not match what was searched. Google Shopping shows the exact product, so specific product or niche keyword matches tend to have a higher CTR. [L0857, 2025]
- Decide which keywords to expand based on whether their clicks turn into sales, not on click count alone. If clicks do not convert, add the terms as negatives or lower their CPC. [L0837, 2025]
- Brand, product-name and SKU searches convert well because the shopper already knows what they want. These searches are the main source of sales for lesser-known brands. [L0966, 2025]
- **** High-intent keywords such as brand names, product names and SKUs get fewer searches but convert better, so it is acceptable to spend more on them. Generic terms should receive the smaller share of the budget. [L1002, 2019]

### Campaign priority and bid inversion

- Campaign priority tells Google the order in which to evaluate identical campaigns during auction entry. Google checks the High priority campaign first, then Medium, then Low, and enters the first campaign where the search term is not blocked by negative keywords. **** [L0742, 2021-22]
- **mistake:** Campaign priority settings are inverted relative to search value. The low-value campaign gets High priority, the medium-value campaign gets Medium priority, and the high-value campaign gets Low priority. Getting this wrong breaks the whole funnel. [L0742, 2021-22]
- **** Without a funnel, a single Shopping campaign pays the same for weak and strong keywords, and Google tends to route search terms into the campaign with the highest bid. The funnel's priority and negative keyword setup prevents this. [L0742, 2021-22]
- **setting:** New standard Shopping campaigns default to *Campaign priority: Low (default)*, so every copy must be changed by hand. Open the campaign's Settings, set Campaign priority to High, Medium or Low, and click Save. [L0742, 2021-22]

**Priority and campaign roles (three-campaign funnel, older 2021-22):**

| Campaign priority | Search intent served | Bid level | Bid given in the source | Negative lists applied (per [L0742, 2021-22]) |
|---|---|---|---|---|
| High | Low value, generic terms | Low | Not stated | Master Generic, Brand Names, Product Ids |
| Medium | Medium value, branded medium-value terms | Medium | 60 cents | Master Generic, Product Ids |
| Low | High value, terms with a product-specific identifier | High | About $1.20 | Master Generic |

*Conflict:* Procedure step 9 of the build sequence also applies Brand Names to the Medium campaign, while the setting and mistake units say Brand Names belongs on the High priority campaign only. The table follows the setting and mistake units. [L0744, 2021-22; L0742, 2021-22]

- **** In a three-campaign Shopping funnel, the high priority campaign with low bids targets low-value generic terms. The medium priority campaign with medium bids targets branded medium-value terms. The low priority campaign with high bids targets high-value terms that contain a product-specific identifier. [L0744, 2021-22]
- **** The store's own brand name is a valuable search term, because shoppers already know the store and have a high chance of converting. Such terms belong in the high-value campaign. [L0744, 2021-22]

  *Conflict:* [L0744, 2021-22] places branded medium-value terms in the Medium campaign, while [L0744, 2021-22] places the store's own brand name in the high-value campaign. Both apply: the store's own brand name goes to the high-value campaign, and branded medium-value terms go to the Medium campaign.

### Building the three-campaign funnel

- **** For a high-ticket dropshipping store, build a Google Shopping funnel of at least three campaigns. Three is the standard starting point, and four to six are rarely needed, since most accounts need only three. [L0742, 2021-22]
- **** Each campaign in the funnel targets one search intent level: low value (generic terms, lowest bids), medium value (more specific or brand-plus-category terms, middle bids) and high value (terms naming one exact product, highest bids). Separate campaigns make it possible to bid differently per value level instead of paying the same for weak and strong keywords. [L0742, 2021-22]
- **** Campaigns must be identical (same ad groups, product groups and products) except for priority, bids and negative keyword lists. Duplicating a campaign is the fastest way to build the other two. [L0742, 2021-22]
- **** Some Google Shopping funnels have been built with up to nine campaigns, but for about 90% of high-ticket dropshipping cases three campaigns are enough. Add a fourth or fifth campaign only when the account clearly needs it. [L0742, 2021-22]
- **** The shopping funnel requires a very precise campaign setup. If it is not configured exactly as described, it will not work and will not produce the intended results. [L0740, 2021-22]
- **** The shopping funnel gives control over two things: which search terms the ads show for, and how much is paid per click based on search intent. This control is the reason the structure exists. [L0740, 2021-22]
- **** Set up the Google Shopping campaigns in a three-tier structure and add a trademark search text ad campaign for the brand name. [L1145, 2021-22]
- **** A three-campaign setup keeps paid traffic in separate campaigns, such as branded search, Shopping and display remarketing. Each stage can then be measured and budgeted on its own. [L0719, 2021-22]

#### Build procedure

**procedure:** Build the three-campaign Google Shopping funnel in this order:

1. Create the first Shopping campaign in the Google Ads account, choose Standard Shopping (not Smart Shopping) and select the Merchant Center account and the country of sale.
2. Enter the campaign name, choose Manual CPC bidding, apply the shared budget from the shared library, and set campaign priority.
3. Set Targeting: keep Search Network, optionally with YouTube, Gmail and Discover; do not include Google search partners.
4. Create the first ad group (product shopping type, named by brand), enter a starting CPC bid, and save.
5. In product groups, subdivide by the Custom label 1 brand label, then save without editing bids; exclude "Everything else in All products".
6. Subdivide further by the Custom label holding product titles, select all products, and save without editing bids.
7. Duplicate the campaign with Edit > Copy and Paste, rename each copy (High, Medium, Low), and set its campaign priority.
8. Set bids per campaign: Medium campaign at 60 cents, Low priority campaign at about $1.20, and apply negative keyword lists.
9. Apply Master Generic negatives to all three campaigns, Brand Names negatives to the High priority campaign only (and to the Medium campaign, see below), and Product Ids negatives to the High and Medium priority campaigns.
10. Enable all paused campaigns once products are approved in Merchant Center.

[L0742, 2021-22]

- **procedure:** Subdivide product groups as follows: first subdivide by the custom label holding the brand name, then subdivide by the custom label holding the product title. Do not use the default item ID because it shows an unreadable string. Select all products, click Save without editing bids, then change bids on individual products as needed. [L0742, 2021-22]
- **** Two custom labels are needed in Merchant Center or the product feed: one holding the brand name and one holding the product title as shown on the store. Subdividing product groups by these labels gives readable names, which the default item ID grouping does not. [L0742, 2021-22]
- **** Every new product added to the store needs its custom labels added manually in the product feed. Without them, the product does not populate into the ad group and product group segmentations. [L0744, 2021-22]
- **** When new products or brands are added, the product ID list or brand name list used for negative keyword and campaign separation must be updated. Otherwise their search terms land in the high priority campaign at a low bid and lose out on high-value terms. [L0744, 2021-22]

### Negative keyword lists

- **** Negative keywords are central to the Shopping funnel because they let you shape campaigns around search terms of different value. Creating the lists is part of setup, and using them to manage campaigns is an ongoing task after launch. [L1074, 2021-22]
- **mistake:** Using negative keywords incorrectly stops the Shopping funnel from working effectively. List setup and later changes to them need care. [L1074, 2021-22]
- **** Negative keyword lists are the mechanism that tells Google which search terms to push between the three campaigns. Each term must be blocked from the campaigns that should not serve it. [L0742, 2021-22]
- **** Negative keyword lists tell Google which campaign a search term may appear in. This keeps each term in its correct campaign and keeps the priority structure working. Without them, low-value terms leak into high-bid campaigns. [L0744, 2021-22]
- **rule:** The three lists have distinct roles:
  - *Master Generic Negatives* holds search terms that the products should never match in any campaign.
  - *Brand Names* holds the names of the brands the store sells, so branded searches are pushed past the lowest-bid campaign.
  - *Product Ids* holds the product identifiers, so exact product searches are pushed to the highest-bid campaign.

  [L0742, 2021-22]
- **setting:** Negative keyword list assignment for the funnel: Master Generic Negatives applied to all three campaigns. Brand Names applied to the High priority campaign only, because search terms with brand names move past the lowest-bid campaign. Product Ids applied to the High and Medium priority campaigns, because very specific product terms move to the Low priority, highest-bid campaign. [L0742, 2021-22]
- **mistake:** The Brand Names negative list was wrongly applied to two campaigns. It must be applied only to the High priority campaign, so check each negative list's campaign assignments after applying. [L0742, 2021-22]
- Google Shopping chooses the search terms unless you exclude them, so traffic is shaped with negative keywords rather than long-tail targeting. On search text ads, more specific long-tail terms usually raise CTR and lower traffic. [L0879, 2021-22]
- **** Google does not reliably judge search intent and often shows ads for loosely related searches. Leaving these matches unreviewed burns budget. Review which search terms trigger the ads and exclude the poor ones with negative keywords. [L0739, 2021-22]
- **** The beta campaign also needs strong negative terms such as brand names and SKU numbers, while the alpha campaign only needs the universal negatives. [L1113, 2022]
- Block descriptive search terms that convert well but are not brand-specific as negatives in both Alpha and Beta. Then raise CPC in Beta and check whether higher-quality traffic comes in. Do not create a third campaign for this at the start. [L0472, 2025]


Part 23 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/22-where-sources-disagree.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/24-brand-names-and-the-two-campaign-alternative.md
