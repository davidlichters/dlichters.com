<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 14 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/13-product-identifiers.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/15-feed-optimization-titles-images-descriptions-and-p.md

### Verification and Approval

- Verify products are correctly submitted to Google Merchant Center: go to Merchant Center, navigate to Settings > Data Sources, and confirm products appear under "Provided by you" with the feed source showing as "Content API" (created automatically by Symprosis). No products should appear under "Found by Google". [L0182, 2026+]
- In Google Merchant Center, go to Settings > Data sources and look at the section "Provided by you". It shows a Content API source with the store's products, instead of the "Found by Google" products that appear with the built-in app. [L1168, 2026+]
- For a US-based store, the Content API source under Settings > Data sources > Provided by you usually has the feed label US. The app sets this label automatically when it creates the feed during setup. [L1168, 2026+]
- Wait 2 to 4 days, up to about four, until every product changes from Pending to approved with a green check. Only after approval, move on to setting up Google Ads. [L1168, 2026+]
- Google Merchant Center's product section shows "no data" for up to 10 hours after the first sync for Google, and up to 4 hours for Facebook. Wait until active items appear before setting up campaigns. [L0731, 2021-22]
- Once the feed app is connected, Merchant Center checks the domain and shipping setup automatically, and both should show as verified. Run the product sync only after these checks pass. [L0731, 2021-22]

### Feed Mistakes to Avoid

- Do not run two feeds at once without a deliberate plan, such as the Shopify Google channel and the Feed for Google Shopping app. [L0801, 2021]
- Do not submit demo or test products to a live Merchant Center account, because they create product warnings. [L1168, 2026+]
- Do not activate Shopify's built-in Google sales channel for Shopping. It duplicates the product feed if set live after the feed setup. [L0731, 2021-22]
- Do not check the box that submits products to Merchant Center through the Google sales channel. [L0835, 2023]
- Do not connect the Google & YouTube app to Merchant Center alongside the feed app. [L1116, 2025]
- Do not list products you do not have in stock. [L0502, 2020+]
- Do not change product IDs after approval or once ads are running. [L0731, 2021-22; L0747, 2021-22]
- Do not mark a product as custom to avoid competition, and do not mark a product as custom when a barcode exists. [L1170, 2021-22]
- Do not invent SKUs or use the Shopify SKU field expecting it to reach Google. [L0934, 2023; L1456, 2021-22]
- Do not rely on manual Excel or spreadsheet uploads for a growing store. [L0801, 2021; L0732, 2020-26]
- Do not use the same GTIN for several products. [L0964, 2023]
- Do not use negative keywords to remove categories from Shopping campaigns; remove them from the feed or the campaign product selection. [L0268, 2020]

#### Further details

- To remove a brand entirely from Google Product Listing Ads, use your Shopify-to-Google feed app (e.g., EasyTabs or similar), sort products by brand, uncheck all products from that brand, save settings, and Google Merchant Center will exclude them on next feed pull. [L0245, 2020]


Part 14 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/13-product-identifiers.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/15-feed-optimization-titles-images-descriptions-and-p.md
