<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 32 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/31-product-feeds-google-merchant-center-and-shopping.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/33-feed-optimization-for-ctr-and-competitor-monitorin.md

### Merchant Center: Errors, Reviews and Support

**Account basics**

- Google Merchant Center is required to list products on Google Shopping. It is separate from Google Ads, which is the account used to run the paid ads. ** [L1111, 2020]
- Google Merchant Center is a free account that holds the product feed for Google Shopping and ads. [L1251, 2024+]
- Google Merchant Center holds the product feed used for free product listings and paid Google Shopping ads. Products that are approved there can appear in free listings, which start giving data within days. ** [L968.050]
- Google Merchant Center holds product data for Google Shopping. Custom labels in the feed can be used to group products so that a campaign can be bulk edited. [L966.069]
- Google Merchant Center is required to upload a product feed to Google Shopping. Check for warnings, errors, and GTIN/product identifier issues. *(2023)* [L274.034]
- Google Shopping (formerly Product Listing Ads) is described as the highest-quality, cheapest traffic for e-commerce, and every store should run it. Its main threats are the product feed going offline, prices being disapproved, or poor data quality. [L575.004]
- Promotion setting: the Feed for Google Shopping promotion setting applies only to Google Shopping campaigns. It does not carry promotions over to Facebook or other connected accounts, so those must be set up separately. ** [L962.151]

**Error panel and checks**

- The Feed for Google Shopping product list has tabs for Submitted, Submitted with Warnings and Excluded. Above them is a panel titled Errors from Merchant Center with a Refresh Product Errors button, and it shows when the error data was last refreshed, so refresh it before acting on an older error list. [L747.021]
- The dashboard's Google Status panel lists errors from Merchant Center, with a "Refresh Product Errors" button and a timestamp showing when the list was last refreshed. Before acting on the list, check that timestamp, because an old refresh can show errors that no longer exist. [L1170, 2021-22]
- Check Google Merchant Center for product feed errors (corrupt data or products not being sent) when Google Ads shows no clicks; the product feed is the source of all Shopping ads. ** [L357.055]
- Some Process shows product status (red/green), errors, and allows contacting support for issue resolution. *(2023)* [L274.033]
- The app's shipping and store checks are a further source of errors. Check the warnings the app shows, especially a missing default shipping rate for the country. [L732.008]
- Symprosis is the app used to correct product feed errors that Google flags in Merchant Center. It is not the place to diagnose the error first. [L1015, 2020-26]
- GMCDoctors is a service for fixing Google Merchant Center product feed and account issues, such as disapprovals. *(2024)* [L1105, 2024]

**Review times**

- Google Merchant Center product review usually takes 1 to 3 days from pending to approved, and the first review after a product submission is short. Products can show as needs review while the check is running. *(2023)* [L1114, 2023]

**Contacting Google Merchant Center support (live chat)** *(2023)* [L1114, 2023]

1. Scroll to the bottom of Google's Merchant Center help page.
2. Click Contact us, marked with the headset icon.
3. Choose live chat rather than phone.
4. Let the agent review the store while you explain the error.

**Publishing and linking**

- Products are published to Merchant Center when the product availability box is checked. ** [L664.075]
- The Google Shopping Feed app is used to submit product identifiers, with settings for brand, MPN, SKU and GTIN handling. *(2023)* [L855.112]
- Use the feed app's submission path, not the Google sales channel's Merchant Center listing option. [L835.133]

### Custom Labels

- Google Shopping allows five custom label slots per product. These labels are invisible to customers and exist only in the product feed data submitted to Google. [L224.003]
- Custom labels added in Shopify require approximately four hours or longer to appear in Google Ads after applying bulk edits. [L224.004]
- Custom labels can be added either in the Feed for Google Shopping app or through the Shopify CSV bulk upload. The CSV method is the quicker option for many products, because the Shopify CSV template already includes the Google custom label fields. ** [L747.016]
- The product detail page has a Product Labels section with Custom Label 0 to Custom Label 4, Ads Label, Ads Grouping, Shipping Label and Tax Category. Custom Labels are used to group products for campaign structure, and Shipping Label links a product to a shipping rate created in Merchant Center. Ads Label and Ads Grouping have no real function in current Google Ads. ** [L1170, 2021-22]
- Custom labels in the feed can be used to group products so that a campaign can be bulk edited. [L966.069]

### Google & YouTube App and Merchant Center Connection

- In the Google & YouTube app on Shopify, connect only your Google Analytics 4 property. If the feed app already manages the Merchant Center connection, the Merchant Center connection should not be linked inside the Google & YouTube app. *(2023)* [L470.049]
- The Google & YouTube app should be used only to connect the Shopify store to Google Analytics. Product feed management is handled separately through a dedicated feed app. *(2025)* [L972.028]
- Symprosis is a manual control tool for Google Shopping feed management used alongside the Google & YouTube app. *(2024)* [L856.073] (Note: this describes Symprosis as used alongside the app, while L972.028 says the app is only for Google Analytics.)
- A product feed management app connected to Shopify is used to submit products to Google Merchant Center and to manage the tracking tags. *(2025)* [L472.040]
- To disconnect Merchant Center from the Google & YouTube app *(2025)* [L972.027]:
  1. Open the app in Shopify.
  2. Find Merchant Center under Connected services.
  3. Click the three dots, then click Manage settings.
  4. Disconnect it. Keep the Google Analytics connection active, since it is used for sales tracking.
- A dedicated product feed app gives more control over the feed, such as including or excluding certain products, than the default Google feed. [L972.029]

### Bing, Microsoft and Facebook Feeds

**Bing Shopping**

- Shopify apps can generate and sync a Bing shopping feed from inside the store. The workflow matches the Google feed setup, so the same app and steps can be reused. [L866.008]
- Bing Shopping Settings is a separate page in the feed app's Settings menu. [L747.022]

**Microsoft Advertising import**

1. Install and confirm the Microsoft connection in the Shopify feed app. [L1036, 2020-26]
2. Check that the connected state shows the Microsoft Advertising email, the Merchant Center account, the product catalog name, and the primary domain. [L1036, 2020-26]
3. The connection status should read connected and turned on, and the charge should read free. [L1036, 2020-26]
4. Verify the store's domain for Microsoft Merchant Center with Bing Webmaster Tools. Set it up with the store's destination URL before the validation step can be completed. [L1037, 2020-26]

**Facebook and Instagram**

- Feed tools can export one product feed to Google Shopping, Facebook Shop, Instagram product posts, Pinterest buyable pins, eBay, Bing, Amazon and affiliate networks such as ShareASale. They also handle currency conversion and multi-country export. Amazon is only an option where the supplier allows dropshipping there. [L454.030]
- Feed tools can use one feed for several channels, including Instagram product posts that show products inside the post, Pinterest buyable pins, and feeds for other countries, Google Shopping, Bing and eBay. They can also support product and seller ratings. [L1033, 2019]
- Shopping feed workflow: send the same optimized feed to Facebook for dynamic product ads. [L510.032]
- The Facebook Catalog Settings page is in the feed app's Settings menu. [L747.022]
- Variant ID as Product ID is needed for the Facebook product catalog feed. [L731.025]
- If a Facebook feed rejects a product for exceeding character limits, shorten what is submitted through the feed app. ** [L963.049]
- Separate apps exist for Google, Bing and Facebook because each platform has slightly different feed requirements. [L762.010]

**TikTok**

- A built-in TikTok shop feed was offered as a theme feature to replace a paid tool. The speaker claimed that the paid tool costs $10,000 a year, a figure that was not verified during the lesson. [L709.042]


Part 32 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/31-product-feeds-google-merchant-center-and-shopping.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/33-feed-optimization-for-ctr-and-competitor-monitorin.md
