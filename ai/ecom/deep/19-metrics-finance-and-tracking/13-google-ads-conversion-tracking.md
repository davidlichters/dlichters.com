<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 13 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/12-setting-up-google-tracking-analytics-search-consol.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/14-setting-up-meta-tiktok-pinterest-and-other-pixels.md

### Google Ads conversion tracking

**Principles**

- Proper conversion and remarketing tracking enables accurate purchase attribution, ad-level profitability reporting, remarketing audiences of past visitors, and full visibility across Analytics and Google Ads. [L0184, undated]
- Conversion tracking connects website purchases to Google Ads campaigns, so ad spend is linked to real returns. [L0731, 2021-22]
- Conversion tracking tells you which ads are profitable. Without it, ad optimisation is guesswork. [L0852, 2020]
- Conversion tags let Google Ads see visits, add-to-cart events and purchases from ads. Linking Analytics to Google Ads also shows in Analytics which sources generate sales. [L0718, 2020-26]
- Once conversion tracking is active, Google Ads reports which sales came from Shopping ads. [L1165, 2020-26]

**What counts as a conversion**

- A conversion in Google Ads can be defined as anything: product view, add-to-cart click, page views, time spent on site or repeat visitor. Check what the account actually tracks. Google's smart goals and automated conversions may not represent actual sales. [L0327, 2020-26]
- Google Ads counts every action marked as a conversion, including page views, add-to-cart and initiate checkout. This can distort cost per conversion. Review all conversion actions and count only the intended ones, such as purchase. [L0470, 2023]
- create one purchase conversion action, because only purchases need to be tracked. Conversions appear under Tools and settings > Conversions. [L0731, 2021-22]
- The conversion tag on the thank you page records a conversion each time a visitor reaches it. It uses cookies to associate the purchase with the original traffic source and campaign. [L0256, 2021-22]

**Simprosys app for Shopify**

**Procedure: set up conversion tracking for Google Ads with the Simprosys app.** [L0718, 2020-26]

1. In the Shopify store open the Simprosys app and log in.
2. Hover over Tracking Tags and click Google dynamic remarketing and conversion tracking.
3. Run the app's wizard, first connecting the newly created Google Ads account by selecting it from the list of accounts.
4. Confirm the connected account details shown from Google Ads.
5. Answer yes when asked whether to set up the Google Ads tracking tags; the app then creates them in the Google accounts automatically.
6. Check that the tags show as unverified at first and change to active once traffic reaches the site.

- The Google Ads account must already exist before the wizard runs, because the first step connects an existing account. Creating it later would require repeating the tag setup. [L0718, 2020-26]
- After the wizard is completed with the tag option set to yes, the app creates the tags itself. The merchant does not need to build them manually or revisit this setup. [L0718, 2020-26]
- Newly created tags stay unverified until real traffic arrives; an unverified status right after setup is normal. [L0718, 2020-26]
- Conflict on verification: in the 2021-22 course the tag stays unverified until the first sale is made on the website, and that sale verifies it. [L0731, 2021-22] In the Simprosys procedure above, the tags become active once traffic reaches the site. [L0718, 2020-26]

**Feed app for Google Shopping**

**Procedure: set up conversion tracking in Feed for Google Shopping.** [L1165, 2020-26]

1. Open the feed app and hover over the tracking tags link at the top.
2. Choose Google dynamic remarketing and conversion tracking.
3. If no Google Ads account is linked yet, click the button to link one. If the wrong account is linked, click change and choose the correct one.
4. On the permissions screen, click allow so the app can manage Google Ads campaigns, product listings and accounts, and the domains you control.
5. In the drop-down, select the Google Ads account for this store and click link your account.
6. Under what needs to be included in the script, make sure dynamic remarketing, conversion tracking, add to cart tracking and begin checkout tracking are all selected.
7. Click update conversion tags. If the account is new, the button may say create conversion tags; click it and the tags will be created.

- Tags installed through the app keep working even if the Shopify theme is changed. The app route is considered the more reliable and simpler option. [L1165, 2020-26]
- Manual setup is also possible by adding the Google remarketing tag to the Shopify theme yourself, following Google Ads support instructions. It works but is more work and more error-prone. [L1165, 2020-26]
- Mistake: if the site already has a Google dynamic remarketing tag, remove it before using the app's tracking. Keeping both tracks every sale twice. [L1165, 2020-26]
- If conversion tracking was set up through a tracking app, do not add the tag to the site manually. A warning about no conversions can appear simply because no conversion has been recorded since the tag was added. [L1115, 2024]

**Older feed-app methods**

- install the Feed for Google Shopping app from the Shopify App Store, open the app settings, scroll to Google remarketing and conversion tracking, click in to link your Google account, which adds the conversion tracking pixel. Use the reported data to see where sales come from inside Google. [L0852, 2020]
- in the feed app, click Google dynamic remarketing and conversion tracking, enable only Dynamic remarketing and Conversion tracking, not the other two options. Log in to Google Ads, allow access and link the account so the app inserts the tags into the site. [L0731, 2021-22]
- add the Google Ads conversion tag through the Feeds for Google Shopping app so Google Ads can record the sales and conversions from your traffic. [L1145, 2021-22]

**Remarketing tag code**

```html
<!-- Google Ads global site tag: replace AW-XXXXXXXXX with your Google Ads ID -->
<script async src='https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX'></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag{dataLayer.push(arguments);}
  gtag('js', new Date);
  gtag('config', 'AW-XXXXXXXXX');
</script>

<!-- Remarketing page_view event: replace value and item id per page -->
<script>
  gtag('event', 'page_view', {
    'send_to': 'AW-XXXXXXXXX',
    'value': 'replace with value',
    'items': [{
      'id': 'replace with value',
      'google_business_vertical': 'retail'
    }]
  });
</script>
```

[L1390, 2021-22]

### Checking tags with Tag Assistant

- Google Tag Assistant is a Chrome extension that shows which Google tags and conversions fire on each page. Use it to confirm conversion tracking is set up correctly. [L0247, 2021]
- It is used to check that the Google Ads remarketing tag, the global site tag and the Analytics code are live on the store. Refresh the store page after activation to confirm all tags load. [L0391, 2020-26]
- Tag Assistant is a tool for debugging and verifying that Google tracking tags are installed correctly on the store and fire on customer actions. [L0032, undated]

### Merchant Center: linking, reports and rules

**Linking and performance**

- Link Merchant Center and Google Ads to Analytics so data is shared, and check that the linked account numbers are the correct ones. [L1204, 2022]
- Google's Top Seller rating appears to be achieved by meeting the score thresholds shown in Merchant Center. Applying to the program is recommended to check eligibility. A 50-review threshold was mentioned for one Google form.  [L0666, 2024]

**Shopping Actions reports** [L0738, 2021-22]

| Report | Fields |
|---|---|
| Today's Snapshot | Pending shipment, Missing tracking information, Wrong tracking information, Unshipped orders, Item fill rate, Ordered item sales, Orders, AOV, Returns (last 24 hours) |
| Sales & Orders | Ordered item sales, Orders, AOV, segmented by product, brand or category |
| Returns | Returns, Returned items |
| Operations | Shipped orders, Days to ship, Shipped items sales, Shipped items, Item fill rate, Unshipped orders, Unshipped items, Rejected items |

- Example: diagnostics showed 549 active items (88%), 0 expiring items and 77 disapproved items (12%) out of 626 submitted items. Disapproval rates like this show how much of the feed is still eligible. [L0738, 2021-22]

**Compliance, feed and shipping rules**

- Following the compliance steps greatly reduces suspension risk. Still, a Merchant Center account can be suspended at any time, for example after a site change, a hack, or a crawler misclassifying a page. [L0963, 2022]
- If an initial batch of feed products is approved and no suspension appears, the rest can be uploaded. Keep running the business normally while uploading. [L0963, 2022]
- Do not run the Shopify Google sales channel alongside Feed for Google Shopping or another feed app that submits to Merchant Center, because they conflict. If you try the Google channel, disconnect Feed for Google Shopping first. [L0963, 2022]
- The Google channel asks for fields such as GTIN. The same fields are in the feed settings of Feed for Google Shopping, which may leave less to chance. [L0963, 2022]
- Made-to-order products with long lead times, such as 17 weeks, can be listed as custom products. The estimated shipping time can be set in days directly in Merchant Center. [L0963, 2022]
- Final-sale products should be set up as an exception in Merchant Center. State on the product page and on the shipping and returns policy page that these products are not eligible for return. [L0963, 2022]
- Shipping settings in Merchant Center must match the store's shipping exactly. Mismatches cause rejected products and suspension errors. [L0963, 2022]
- For a postcode-based shipping setup, for example an Australian free-shipping rule for remote areas, ask Shopify live chat how to mirror it in Merchant Center. Do not guess the configuration. [L0963, 2022]

**Merchant Center resets**

**Procedure: reset a stuck Merchant Center account, only after the compliance issues are fully fixed.** [L0963, 2022]

1. Remove the feed and all store information linked to the account.
2. Delete the Merchant Center account.
3. Create a new Merchant Center account.
4. Upload the feed again and see whether it passes the filters. Do not apply this reset to the Google Ads account.

- If Google Ads is fine but Merchant Center stays stuck for a long time without help, another Merchant Center account can be linked to the Google Ads account. [L0963, 2022]

### Microsoft Advertising UET tag and conversions

**Procedure: set up the Microsoft UET tag and conversion tracking via the Shopify feed app, in this order. Source: one source, undated.** [L1036, 2020-26]

1. In the feed app header menu, open Microsoft UET tag and conversion goal setup.
2. Click Let's get started.
3. Confirm that you want conversion tracking for Microsoft Advertising.
4. Before continuing, remove any previously added conversion tracking scripts (UET or other) from the Shopify Additional scripts section, since duplicates can conflict.
5. Leave all tracking options checked on a new account.
6. Click Continue.
7. Under the Microsoft Advertising account, choose Create a new tag rather than an existing tag so the app creates the tags automatically.
8. Verify the status shows conversion tracking as active for Dynamic Remarketing, Add to Cart and Begin Checkout.

- The UET tag inserted by the app runs through Shopify scripts, so it keeps working when the theme is changed or replaced. Remove existing UET or other conversion scripts first to avoid duplicate tracking. [L1036, 2020-26]
- The automatically created Microsoft conversion types are Dynamic Remarketing, Add to Cart and Begin Checkout. The app generates the tags and their names when Create new tag is chosen. [L1036, 2020-26]
- Mistake: choosing an existing UET tag instead of creating a new one can be an error in a new setup, because the app can create and configure the full set of tags automatically. [L1036, 2020-26]

### Troubleshooting and verification

- Duplicate accounts, such as one made with a personal email and one with a business email, often cause audiences and product feeds to be missing. Check that each linked account number matches the intended account. [L1204, 2022]
- Google Analytics shows conversion rate for each product page in its dashboard. This is hard to see directly in Shopify when running ads for four or five products. [L1213, 2023]
- Duplicate tracking: if a Google dynamic remarketing tag already exists on the site, remove it before using the app. Keeping both counts every sale twice. [L1165, 2020-26]
- A "no conversions" warning is not proof of a fault if the tag was added recently and no conversion has been recorded yet. [L1115, 2024]
- If the GA4 test sales do not appear, check the GA4 connection through the Google & YouTube app. [L1287, 2025]


Part 13 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/12-setting-up-google-tracking-analytics-search-consol.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/14-setting-up-meta-tiktok-pinterest-and-other-pixels.md
