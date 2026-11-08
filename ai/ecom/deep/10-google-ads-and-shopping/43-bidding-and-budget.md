<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 43 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/42-search-text-ads-and-keyword-strategy.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/44-when-search-text-ads-add-value.md

### Bidding and Budget

- Select the "Manual CPC" bidding strategy when creating the search campaign. [L0262, 2021-22] **
- Set the default bid at ad group level to a minimum of $0.50 CPC for search text ads. Google will warn you if your bid is too low to appear on the first page of results. [L0262, 2021-22] **
- After launching a search ad campaign, check back within 1-2 days to review bids. If Google displays a warning that your bid is below the first-page threshold, increase it. Starting bids of $0.50 may need to increase to $1.00 or higher depending on the auction. [L0262, 2021-22] **
- Case bids: a single-brand ad group in the low-priority Shopping campaign ran at a max CPC of US$1.20 (enhanced); a brand-level Shopping ad group ran at a max CPC of US$0.80 (enhanced). Use these as reference points for the cost per click you can expect. [L0880, 2021-22] **
- one source's new-store target is a cost per click below $1 with low competition. [L0788, undated]
- Daily budget: start with a minimum of $20 per day for search text ads. Budgets below $5 will not generate enough data to optimize effectively. [L0262, 2021-22] **
- Test new search text ads with a small budget, for example around US$10 per day, and let them run for a while before judging them. The result to measure is whether the ad's conversion rate supports its cost. [L0880, 2021-22] **
- A search text campaign is a new experiment with its own budget, separate from Shopping (Alpha/Beta) budgets. Start with about $5 per day and use tight phrase match keywords, for example the store name only. [L0971, 2024] *(2024)*
- Target CPA is used only for lead generation campaigns, such as buyer guide sign-ups, where a maximum cost per lead can be set (for example 4 USD per lead). [L1092, 2022] **
- Low search volume on specific product keyword match types is normal for high-ticket items. This does not mean the keywords will not deliver. Confirm that searches exist by checking your Google Shopping campaign data. [L0262, 2021-22] **

### Campaign and Ad Group Structure

**Networks**
- For Search campaigns, uncheck "Search network" and "Display network" in campaign settings to restrict ads to Google search only and avoid wasting budget on search partners. [L0210, 2022]
- Uncheck both "Include Google search partners" and "Include Google Display Network". Text-only search ads do not perform well on the Display Network, which uses image-based ads. [L0262, 2021-22] **

**Campaign per product**
- Create one separate Search campaign for each top product instead of grouping multiple products in one campaign. This gives better budget control and prevents high-performing products from being overshadowed. Do not group multiple products in one Search campaign with multiple ad groups, so each product keeps an independent budget and bid control. [L0210, 2022]
- Conflicting structure: one source organizes each product as a separate ad group within one campaign. [L0262, 2021-22] **
- Campaign structure: a campaign contains multiple ad groups, and each ad group can contain multiple ads and keywords. Naming conventions should clearly identify the product type or targeting strategy. [L0262, 2021-22] **

**Ad group size and ad count**
- Structure each ad group with approximately 10 keywords in Google Ads. [L0080, undated]
- Always run two text ads simultaneously in each ad group to enable continuous performance comparison and testing. [L0085, undated]
- Ad groups should have at least three ads that closely match the theme of their keywords, so Google can test which headlines and descriptions perform better. This applies to lead-generation ad groups. [L0922, 2021-22] **

**Procedure: standard search text campaign build** [L0262, 2021-22] **
1. Click "New Campaign" in Google Ads.
2. Select "Create a campaign without a goal's guidance".
3. Choose "Search" as campaign type.
4. Enter campaign name (identify product type and targeting clearly, e.g., "Product IDs - Search Text - US").
5. Under Networks, uncheck "Include Google search partners" and "Include Google Display Network".
6. Select target location (e.g., United States).
7. Set language (default English).
8. Enter daily budget (minimum $20).
9. Select "Manual CPC" bidding strategy.
10. Expand "Show more settings" and find Ad rotation.
11. Change from "Optimise: Prefer best performing ads" to "Do not optimise: Rotate ads indefinitely".
12. Add ad extensions: callout extensions (minimum 2) for offers like "Free Shipping" or "Price Match Guarantee", and call extension with business phone number.
13. Skip sitelink extensions for product-specific ads.
14. Click "Save and continue" to create ad groups.
15. Name the ad group after the product or product ID (e.g., "Sunray Cayenne Sauna hl400d").
16. Set default bid to $0.50 minimum.
17. Enter keywords with match type: for specific product searches, use broad match modifier format (+keyword +keyword).
18. Enter final URL (product page URL).
19. Write Headline 1 (30 chars max) with product name and key identifier.
20. Write Headline 2 (30 chars max) emphasizing product's best unique feature.
21. Write Headline 3 (30 chars max) with main offer element (e.g., "Free Shipping US Wide").
22. Create display path including keywords (e.g., "bathvault.com/sunray/cayenne-hl400d").
23. Write Description 1 (90 chars max) creating curiosity about the product benefit.
24. Write Description 2 (90 chars max) introducing a secondary benefit or special offer.
25. Save ad and continue.
26. Review campaign and publish.

**Procedure: product search campaign setup** [L0210, 2022]
URL to product page > keywords sourced from your Shopping campaign keyword report (phrases that already convert) entered as phrase match > pin product name as first headline > add benefits (in stock, free shipping) in second headline > include price in description > optionally add image extensions (50% approval rate) > uncheck Search network and Display network.

**Naming**
- Search - COLD - [Top Shopping Product] aims to double the visibility of the best-selling products. Its keyword list should be built from search terms that already convert in Google Shopping campaigns. [L1121, 2022]

### Product-Specific Search Campaigns

**Procedure: building a product-specific search campaign** [L0373, 2024+]
This is a long-term step and not for the first days.
1. Run test campaigns until you can name your five best sellers that sell consistently with good profit.
2. In the Shopping campaigns, find the keywords that drive sales for those products.
3. Create a very small budget search campaign that uses phrase match only for those proven keywords.
4. Write search ads without an image, with the brand name, product name, SKU number and price in the description lines, plus selling points such as fast shipping, free shipping, a price match policy and a one-year warranty.

- Keywords worth a product-specific search campaign are usually long, specific phrases that combine color, pattern and model number for one product, such as a rug described by color, pattern and model number. They are chosen because they already drove sales in Shopping campaigns. [L0373, 2024+]
- Start with one best-selling product: build one Google search text campaign named after that product, with a single ad group containing only a few phrase-match keywords in quotation marks. Set a small budget and use an ad that includes the brand name, product name and SKU. [L1112, 2021] **
- Start Google search text campaigns only after Shopping has identified your best sellers, and build them one product at a time. Keep the keyword list minimal and phrase match, so each campaign stays specific. [L1112, 2021] **
- Setting up search text ads for the best Shopping products: [L0971, 2024] *(2024)*
  1. Pull the best-performing products from Google Shopping.
  2. Create a search text campaign for each product.
  3. Start each at about $5 per day.
  4. Keep keywords very tight and targeted.
- Exact-match campaign for a proven keyword: [L0837, 2025] *(2025)*
  1. Find a keyword in your Google Shopping search terms that brings clicks which turn into sales.
  2. Create a separate Search campaign with text ads that runs alongside Shopping, not in place of it.
  3. Give it a very small budget.
  4. Target that keyword as an exact match and add no negative keywords in this campaign, so it only appears for that exact phrase.
  5. Write the ad with the keyword as the headline and the description following the pattern in the matching unit.
  6. Optimize the matching product page with product page SEO so that it can rank organically.
- A keyword that wins both a Shopping listing and a text ad can reach three positions on the first page of Google: two paid positions and one organic position from product page SEO. Use this when the keyword's clicks turn into sales. [L0837, 2025] *(2025)*
- Once one product sells consistently, add a search text ad for it so that it holds three spots on page one: the Shopping ad, the search text ad above organic results, and the organic listing from product page SEO. Add search text ads for best sellers only after the product is selling profitably. [L1086, 2019] **
- For a non-branded search term with no matching product page, build a collection page for that exact term and add real copy and content to it. The page should be specific enough that the ad's landing page matches the search intent, which also supports SEO. [L0880, 2021-22] **
- If Google Shopping is not available in your country, set up Google Search text ads instead: [L0471, 2024] *(2024)*
  1. List the brand names you are authorized to sell.
  2. Search each brand on Google.
  3. Check which competitors run text ads at the top of the results.
  4. Test search text ads for those brands.

### Ad Copy and Formats

**Responsive Search Ads (current format)**
- Responsive Search Ads consist of up to 15 headlines (30 characters each) and up to 4 descriptions (90 characters each). Google assembles live combinations of these assets based on audience and context. [L0220, 2025-26] **

**Older formats (2021-22)**
- New Google search campaigns used responsive search ads by default, which take five headlines and five descriptions. The expanded text ad option was hidden in the interface, and the advice was to avoid responsive ads for this business model. [L0719, 2021-22] **
- Steps to create expanded text ads in the Google Ads interface of the time: [L0719, 2021-22] **
  1. Create the search campaign.
  2. Create the ad group without any ads.
  3. Go back into that ad group.
  4. Create the ad and choose the option labeled to use expanded text ads.
- A standard text ad in the Google Ads campaign builder has three headline fields (Headline 1 to 3, max 30 characters each), two description fields (max 90 characters each), and two display path fields after the domain (max 15 characters each). Each field shows a live character counter, so check the text against the limit before saving. [L0922, 2021-22] **
- Responsive search ads test multiple combinations of the headlines and descriptions you provide, for example all possible combinations of 5 headlines with 5 descriptions. Google selects which combinations to show, which makes true split testing impossible. Use standard text ads to control which ad wins a split test yourself. [L0262, 2021-22] **
- Avoid responsive search ads for manual split testing. They test multiple headline and description combinations automatically, so you cannot isolate which change drove an improvement. [L0262, 2021-22] **

**Headline, path and copy rules**
- Google's ad preview warns that ad text may be shortened or not fully shown in some formats, and that specific text can be set to always appear. Put the main hook and the core promise at the start of the headline and the first description so they survive truncation. [L0922, 2021-22] **
- Include keywords in the display path (the URL shown under the ad headline) as another relevance signal. Use the format "domain.com/product/keyword-keyword" to reinforce the product match. [L0262, 2021-22] **
- Dynamic headline insertion is set up by putting short codes into the headlines of an ad, so the headline changes to match the customer's search while the landing page stays the same. It is optional and only worth testing where a generic headline underperforms. [L0719, 2021-22] **
- Unlike Shopping ads, search text ads require you to choose the keywords you bid on and to write the complete ad yourself, because Google does not generate the copy. [L0751, 2021-22] **
- A standard search text ad consists of a landing page URL or display URL, an ad headline and a limited amount of ad copy. You enter these elements yourself for every ad you create. [L0751, 2021-22] **
- In a paid search text ad, swapping the top line or the bottom line can change click-through rate sharply, and a doubling is possible. Test one line at a time and compare CTR, because more clicks at the same cost lift sales directly. [L0575, 2014]
- Product-page copy pattern: pin the product name as the first headline and put the price in the description, as in the product search campaign setup. [L0210, 2022]

### Ad Extensions and Site Links

**Principles**
- Ad extensions are one of the simplest ways to raise Quality Score, click-through rate and the volume of relevant traffic to a site, and they can also lower cost per click. Switch on any extension the platform offers, because it gives the ad more space on the results page and a more distinct look than competitors who do not use it. [L0712, 2020-26]
- Callouts and site links take up more space on the results page, which helps even when they do not directly generate clicks. Run an extension whenever the option is available. [L0712, 2020-26]
- Ad extensions make the ad more unique, since competitors who skip them look plainer. Using all available extensions together increases click-through rate and Quality Score, lowers cost per click and sends more of the intended traffic to the website. [L0712, 2020-26]
- Ad extensions (callout, call, price, structured snippets) can increase click-through rate by up to 15%. Use at least 2 callout extensions to highlight offers. Phone extensions enable mobile users to call directly. [L0262, 2021-22] **
- Ad extensions can add business information such as a physical location, phone number, product details and reviews. Google only pulls extensions into the ad some of the time, so the layout varies between searches. [L0751, 2021-22] **

**Site links**
- Site links add four additional separate links below the main search ad within a campaign, so the searcher can jump directly to the page they want. For brand searches, useful site links point to new releases, a specific popular product, another popular product type, or a custom-build option. [L0712, 2020-26]
- Choose site link targets from the most visited pages on the site, such as contact, shipping, reviews, or the best-selling product, rather than writing generic links. Site links should match what searchers of the brand or product are most likely to want. [L0712, 2020-26]
- Procedure to create site links in Google Ads: [L0712, 2020-26]
  1. Open the search campaign you want to extend.
  2. Click Ads and extensions.
  3. Open the Extensions tab on the ads page.
  4. Click Add a new site link.
  5. Create each site link one by one inside Google Ads.
- Conflicting guidance on product-specific ads: the 2021-22 build skips sitelink extensions for product-specific ads. [L0262, 2021-22] ** The other sources say to switch on every available extension and use site links for brand searches. [L0712, 2020-26]

**Callouts and other extensions**
- Callout extensions are short extra lines of text shown under the main ad, alongside site links. They state additional facts about the brand that customers should know. For e-commerce stores the lesson ranks them as the third most important extension. [L0712, 2020-26]
- All search-campaign extension types, including site links, callouts and promotions, are added from one place: open the search campaign, go to Ads and extensions, then the Extensions tab on the ads page. Site links are created one at a time there, and the same tab offers the other extension types available for search text campaigns. [L0712, 2020-26]
- Use call extensions or call-only ads for local service businesses (plumbers, locksmiths) where customers click to call directly from the ad. Use "Calls on website" to track calls from a phone number displayed on your website. [L0234, 2020-26]
- Image extensions have a 50% approval rate and can be added optionally. [L0210, 2022]

### Ad Testing and Optimization

**Metrics**
- Text ad optimization focuses on improving both click-through rate (CTR) and conversions. CTR indicates whether the ad reaches the right audience and appeals enough to click. Conversion rate measures whether the landing page persuades visitors to complete the purchase. [L0085, undated]
- When split testing search ads, base the winner selection primarily on click-through rate, which signals relevance to Google. A higher CTR can lower your average CPC through improved quality score. Secondary metrics are conversions and cost per click. [L0262, 2021-22] **
- Note the conflict: one source treats CTR and conversion rate together [L0085, undated], while the 2021-22 course selects winners on CTR first [L0262, 2021-22].

**Rotation and duration**
- Select "Do not optimise: Rotate ads indefinitely" instead of the default "Optimise: Prefer best performing ads". This lets you control when split tests end and which ad wins, rather than letting Google decide too quickly. [L0262, 2021-22] **
- Run split tests for approximately 2 weeks. After 2 weeks, review metrics to determine the winning ad. [L0262, 2021-22] **
- After launching, all ads enter a mandatory approval period before they can generate impressions. Approval typically takes 1-2 days but may complete within hours. Monitor the campaign dashboard; ads will not run until approved. [L0262, 2021-22] **

**Test design**
- Keep a written log of all text ad variations tested, their performance results, and whether each succeeded or failed. Use this record to avoid retesting ineffective variations and to build a reference library of proven winning approaches. [L0085, undated]
- Iterative testing modifies only one element, such as the call-to-action phrase, while keeping all other headline, body copy and display URL constant. This isolates the impact of that single change, so any performance shift reveals what drove it. [L0085, undated]
- Evolutionary testing contrasts two substantially different ad variations, with different headlines, angles or overall messaging approaches, to discover which fundamental frame or emotional angle your audience responds to most. [L0085, undated]
- After a split test win, pause (do not delete) the losing ad so you can reference it later. Create a new ad variation attempting to beat the previous winner, then run a new 2-week split test. Repeat continuously. [L0262, 2021-22] **
- Stacking and extensions are tested on the same basis: change one thing at a time. [L0575, 2014]

**Monitoring**
- Check back within 1-2 days to review bids and respond to first-page warnings. [L0262, 2021-22] **
- Low search volume on a specific product keyword is not a sign of failure. Check Shopping data before deciding. [L0262, 2021-22] **
- Check the account at least once a day and add irrelevant search terms to the negative keyword list. [L1086, 2019] **
- Use the search term report to keep and scale converting terms and to remove or refine terms that spend without paying off. [L1077, undated]

### Lead-Generation Search Ads

- Search text ad lead generation is an advanced strategy. Start it only once standard search text ads are already profitable and the store is producing valuable content. It costs more and takes longer to show results than normal product-focused search ads. [L0922, 2021-22] **
- Lead generation works best for product-specific or product-type-specific search terms that are tightly relevant to one product or a small group of products. Broad or low-value terms are the target for this approach. [L0922, 2021-22] **
- Sending top-of-funnel search traffic to a product page or collection page usually fails, because the visitor is not ready to choose a product and the page cannot show which product fits their needs. A content page that explains how to choose the right product works better. [L0922, 2021-22] **
- Sending a broad or top-of-funnel search to a single best-selling product page, or to a collection page with many near-identical models, makes the visitor compare the options alone. Without a clear fit, the visitor leaves quickly, so the paid click is wasted. [L0922, 2021-22] **
- Procedure for top-of-funnel lead generation: [L0922, 2021-22] **
  1. Make sure standard product search text ads are already profitable and that a content marketing piece, such as an ultimate buying guide, exists on the store.
  2. Choose the top-of-funnel search term you want to target and set up a standard search text ad campaign for it.
  3. Write several ads that use a headline designed to grab attention and a description that hints at what the reader will learn.
  4. Set a bid and start the campaign.
  5. Send the ad's final URL to the content page, not to a product or collection page.
  6. Make sure retargeting audiences exist for visitors of that content page, for example on Google Display Network or Facebook.
  7. Place an email opt-in form on the content page so visitors can join the email list.
  8. After the visit, run retargeting ads and an email sequence to move the visitor toward a purchase.
- Lead-generation ads use the standard search text ad campaign setup. Google Ads reports and the campaign builder are used to create the ads, with the Final URL set to the content page or quiz page. [L0922, 2021-22] **
- Target CPA is used only for lead generation campaigns, such as buyer guide sign-ups, with a maximum cost per lead (for example 4 USD per lead). [L1092, 2022] **


Part 43 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/42-search-text-ads-and-keyword-strategy.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/44-when-search-text-ads-add-value.md
