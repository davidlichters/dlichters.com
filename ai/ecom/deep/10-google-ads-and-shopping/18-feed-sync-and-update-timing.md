<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 18 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/17-merchant-center-diagnostics-disapprovals-and-free.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/19-shopping-campaign-fundamentals-and-the-alpha-beta.md

### Feed Sync and Update Timing

- Once a corrected feed is submitted, Google Ads and Merchant Center resubmit about every 24 hours. Let the corrected feed resubmit to Merchant Center, which happens about every 24 hours [L1015, 2020-26].
- The feed is the source of Google Shopping listings. Keep it free of errors and warnings in Merchant Center, because a suspended or disapproved product stops appearing and traffic falls [L0934, 2023].
- Check the last upload date in the Feeds section to confirm the feed is refreshing [L0732, 2020-26].
- Fix the errors in the store or feed app, then let the feed update [L0732, 2020-26].
- Product data changes in Merchant Center can take up to 30 minutes to appear [L1170, 2021-22].
- Resubmit the existing product feed so the products are pulled in again. Do not create a new feed [L0855, 2023].
- Feed diagnosis: diagnose the problem in this order:
  1. Log into Google Merchant Center and open 'Feed diagnostics', which is on the first page shown after login [L1015, 2020-26].
  2. Hover over the small circled-i icon next to each listed error to read its description [L1015, 2020-26].
  3. Fix the errors in Symprosis based on those descriptions [L1015, 2020-26].
  4. Let the corrected feed resubmit to Merchant Center, which happens about every 24 hours [L1015, 2020-26].
- Do not start feed troubleshooting in Symprosis, even though it can display errors, because the source of truth for feed errors is Merchant Center's Feed diagnostics. Check Merchant Center first, then correct the flagged items in Symprosis [L1015, 2020-26].
- A feed that is offline for a day or two loses those searches [L0575, 2014].
- Raising the ad budget does not fix a limited feed. If Google limits products because of missing data, the budget goes unspent and extra money adds no impressions [L1088, 2020; older].
- Free listing placement is based on the product feed, such as product name, SKU and description, matched to the search term. Optimizing product page content and feed data improves both paid and free placement [L1088, 2020; older].

### Free Listings and Surfaces Across Google

#### What Free Listings Are

- Google Product Listings are free product listings displayed visually in Google Shopping results, separate from text-based organic search, requiring no ad spend [L0163, undated].
- Google Merchant Center, once approved with products correctly submitted, makes them visible in the free Google Shopping section and Google Product Listings without advertising spend [L0168, undated].
- Google product listings are free product placements that appear in the Google Shopping section, separate from the normal text results of organic search [L0586, 2020-26].
- Google Product Listings (free) let a store show its products in Google Shopping results without paid ads. They require a connected Google Merchant Center account with correct product data [L1087, 2020; older].
- Free product listings appear on the Shopping tab of a Google search, below the sponsored ads, at no cost per click. They require a product feed set up in Google Merchant Center [L0807, 2025].
- Free Google Shopping product listings cost nothing, so every product can be listed there whether or not it receives paid ad spend [L0970, 2023].
- Free listings in Google Shopping appear without ad spend, so low-margin products can still earn sales from them [L0966, 2025].
- Google Merchant Center lets products appear for free in the free section of Google Shopping and in product listings. This adds qualified traffic and sales alongside paid campaigns [L1393, 2020-26].
- Free Google product listings give traffic without ad spend and should be used for products with thin margins. Organic traffic from Google and Bing can also reach those products [L1111, 2020; older].
- Free listings give no per-click cost, so they suit products that paid traffic cannot profit from [L0807, 2025].

#### Setup

Get free product listings on Google:
1. Link your Shopify products to your Google Merchant Center account [L0852, 2020].
2. In the Merchant Center settings, enable the option called surfaces across Google [L0852, 2020].
3. Products will then appear in the free Google product listings section, even without a Google Ads campaign [L0852, 2020].
4. Create a Google Shopping campaign and select only the products you want to pay for. Products not in the campaign remain free in the listings [L0852, 2020].

- Enable Surfaces across Google in the Google Merchant Center account to show products in the free listings section of Google Shopping. It can be turned on during setup or changed later in the account settings [L1088, 2020; older].
- The same setting appears in other sources as Enable Google Product Listings in Merchant Center, so products can also appear in the free results below the paid Shopping carousel [L0963, 2022; older].
- Google Shopping free listings should be set up through the feed app, not through the Google sales channel's Merchant Center listing option. The Google sales channel is only used to connect the Google account and for the GA4 link [L0835, 2023].
- Google Shopping remains the main source of free listings. Set up the shopping feed so products appear in the free product listings as well as the paid ones [L0854, 2022; older].
- Merchant Center's free listings also require basic policy compliance. See Limited Discoverability above [L0731, 2021-22].
- In Merchant Center, the Products section shows the full product list and marks items that are not approved for Shopping ads. The Feeds section shows the last upload date, which confirms whether each feed is still refreshing [L0732, 2020-26].

#### Where Free Listings Appear

- Products in the 'Sponsored' section of Google Shopping are paid listings, while the 'Most popular' section shows free listings. Only products included in a paid Shopping campaign spend money [L0852, 2020; older].
- Free listings appear below the sponsored area of Google Shopping. Use them as free listings when a store has no paid ad budget; a free listing shows the store's price and description [L0964, 2023].
- Google Shopping now shows free product listings below paid ads, while prominent product listing ads stay paid. Campaigns that already work should not be changed [L0967, 2020; older].
- Paid results sit above the gray line, while free listings appear below it [L0853, 2021; older].
- Google Shopping product listings appear in free listings and paid shopping. Products excluded from feeds do not appear in those placements, which is why add-on products must be left out of feeds [L1283, 2023].
- Some free listings on Google Shopping come from third-party marketplaces that list other sellers' products, so a competitor product link may not be sold by that store. Check the seller before assuming a competitor is a direct retailer [L1094, 2023].

#### Free Listings Without Paid Campaigns

- When a product is taken out of a paid Google Shopping campaign because it does not convert, it can stay in the free Google product listings. Stopping spend on a product therefore does not remove its organic Shopping visibility [L1113, 2022; older].
- Check Google Merchant Center for the reason a product is partially approved when free listings show zero impressions while paid ads work. If no reason is shown, contact Google support [L0968, 2021; older].

### Sequencing: Free Listings Before Paid Ads

1. Stage your Google integration in two phases:
   1. First, ensure all products are approved in free Google Shopping listings (2-4 days) [L0182, 2026+].
   2. Only then set up Google Ads campaigns [L0182, 2026+].
   3. This prevents wasting ad spend on unapproved or pending inventory and ensures a stable feed before paid traffic drives to your store [L0182, 2026+].
2. Do not connect Google Ads to your Merchant Center account until free listings approval is fully complete. Premature Ads setup will spend budget on products still in Pending status [L0182, 2026+].
3. Approved products first appear in the Free listings section of Google Shopping, not in paid ads. Google Ads is intentionally not linked until all products are approved in the free section [L1168, 2026+].
4. Google Shopping products must be approved in the free Shopping listings in Google Merchant Center before a paid Shopping campaign is launched. Approval status shows there as approved, and any pending, limited, or Google-requested changes must be fixed first [L0743, 2026+].
5. In Merchant Center, free product listings are set up first, Shopping ads (the paid program) are the main program, and Dynamic remarketing is used later. The settings carry over from free listings to paid listings [L0731, 2021-22].
6. Google ads, and products generally, start earning once approved. Nothing spends until approval [L0941, 2022].
7. If you do not want to start with paid ads, submit products to Google Merchant Center for free listings and build organic SEO. Move to paid ads once organic sales have built up a budget [L0671, 2021; older].
8. A new store can start with the free listings while it builds a bankroll [L0360, 2024].
9. Free traffic sources that can be used long term are the free Google product listings (not paid Product Listing Ads) and optimized organic results on Google. Both should be in place before relying on short-term tactics [L0429, 2022; older].
10. Products can be submitted to Google Merchant Center as free Google product listings, which give free traffic to product pages, or as paid Google Shopping ads [L0360, 2024].

Note on the two approaches: the staged approach above, which holds off linking Google Ads until free listings are approved, is the recommended path to avoid wasted spend [L0182, 2026+; L1168, 2026+]. Campaigns can be set up while products are still pending, but nothing spends until approval [L0941, 2022].

### Product Selection for Free and Paid Placement

- Products with thin margins can be pushed through free traffic, while products with healthy margins are the ones to fund with paid ad spend [L0807, 2025].
- Products with too little margin for ad spend should stay active in Google Merchant Center but should not be included in paid campaigns. Their free listings can still earn clicks from the lower Shopping section [L0967, 2020; older].
- Non-MAP products with thin margins can be left out of paid ads and still reach shoppers through free Google Shopping listings. This avoids competing against sellers pricing at break even [L0941, 2022].
- If a product still earns margin after ad costs but shipping is too high to run paid ads, keep it on the site for organic traffic. Add it to Google Merchant Center but leave it out of the Google Shopping campaign, so it can appear in free listings [L0852, 2020; older].
- Show free Google product listings right away, but skip paid Shopping ads for products if competitors advertise them 50 to 100 dollars cheaper above the gray line [L0853, 2021; older].
- Set a one-cent cost per click for products you want to keep in free Shopping listings without funding them with ad money. Use higher cost per click bids for the few products with the biggest opportunity [L0934, 2023].
- To run Shopping ads with a mixed catalog:
  1. Submit the full product feed to Google Merchant Center, including accessories [L0803, 2022].
  2. Run paid Product Listing Ads only for products in your target price range [L0803, 2022].
  3. List the lower-priced add-on products as free Google product listings, which are organic, so they get traffic without ad spend [L0803, 2022].
- Free listing placement and paid placement both benefit from clean product data. Products with missing data stop listing well [L1088, 2020; older].

#### Further details

1. Open the Merchant Center account and find the rejection reason for each product.
2. Take a screenshot showing the rejection reasons.
3. Send the screenshot and the store link to support so the cause can be pinpointed.
[L0966, 2025]


Part 18 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/17-merchant-center-diagnostics-disapprovals-and-free.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/19-shopping-campaign-fundamentals-and-the-alpha-beta.md
