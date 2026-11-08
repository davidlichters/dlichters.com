<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 8 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/07-setting-up-google-accounts-ads-analytics-search-co.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/09-google-merchant-center-setup-and-verification.md

### Shopify Without the Feed App: Conversion Pixel Route

Two routes exist in the sources. Use the pixel app route only when no feed app handles the tags. [L0964, 2023] (2023) advises against installing a separate pixel app when the feed app is used.

- Conversion tracking on Shopify no longer requires editing theme code. A conversion-pixel app from the Shopify App Store installs the latest Google Ads pixel automatically. Coding the pixel manually by editing Liquid files is an advanced, optional route that is harder to maintain [L0391, 2020-26].
- Install Google Ads conversion tracking on Shopify without code [L0391, 2020-26]:
  1. Open the Shopify App Store and search for Google Ads conversion pixel (listed under apps.shopify.com).
  2. Install the app and log in to it.
  3. Link your Google Ads account inside the app. This takes a minute or two.
  4. Confirm in Google Ads under Settings, Measurement, Conversions that a conversion action for the store (purchases) has been created automatically.
  5. Expect the status unverified until the first real conversion arrives. The status then changes to active. [L0391, 2020-26]
- In Google Ads, under Settings, Measurement, Conversions, the automatically created Shopify conversion action shows status unverified until the first real purchase is tracked. After that it becomes active and tracks each conversion with a 30-day click-through conversion window [L0391, 2020-26].
- The default conversion window is 30 days. A click on day 1 still counts if the purchase happens within the following 30 days, and the conversion is attributed to the original click date [L0391, 2020-26].
- A Shopify store without a developer can get Google Ads conversion tracking, the Google Analytics link, enhanced ecommerce and remarketing tags working in roughly 10 minutes using the app and Shopify integration instead of manual code [L0391, 2020-26].

### Verifying Tags

- Verify Google Ads and Google Analytics tracking on a Shopify store with Google Tag Assistant [L0391, 2020-26]:
  1. Install the Google Tag Assistant browser tool.
  2. Open the live Shopify store in the browser.
  3. Check that the Google Ads remarketing tag is active on the site.
  4. Check that the global site tag is live.
  5. Refresh the page and confirm that the Google Analytics code loads.
  6. If any tag is missing, go back to the app or Shopify Google Analytics settings and recheck the linked IDs before relying on the data. [L0391, 2020-26]
- Check tracking status in Google Ads and optionally use Google Tag Assistant to confirm tracking is working [L0234, 2020-26].

### Purchase-Only Conversion Signal

- Keep only Purchases as the conversion signal in Google Ads. Remove page views, lead form submissions and all other actions, so Google optimises for buying, not browsing [L0210, 2022].

### Search Console and Indexing

- Google Search Console is free to set up. It shows impressions, clicks and keywords for your store, so add the store there to see detailed search data [L0801, 2021].
- Google Search Central (formerly Google Webmaster Tools) gives detailed reporting on impressions, clicks and keywords. Link your store there to see which search terms bring traffic [L0801, 2021].
- Search Console shows whether your website and product pages are indexed in Google organic results, and flags errors that stop Google from reading the site [L0852, 2020].
- After setup and verification, Search Console lets products rank organically in Google Search results and brings buyer-intent traffic that grows over time [L0168, undated].
- Google Webmaster Tools instructs Google to crawl the website regularly and detect new content, including star reviews. Configure this so rich snippets (star ratings) appear in search results once products receive reviews [L0245, 2020].
- Request indexing of new product pages and blog pages in Search Console for faster crawling and indexing [L0249, 2022].
- Indexing check, with two numbers in the source [L0274, 2023]:
  - If Merchant Center shows 2,000+ non-indexed pages with odd URLs while about 250 indexed pages are normal, the non-indexed pages are variants or images.
  - If 250 normal URLs are indexed, the store is fine. No action is needed.
- Use the same Google Workspace email for Search Console, Merchant Center and Google Analytics. Domain verification is then completed through Search Console automatically [L0729, 2020-26].

### Call Tracking

- Google Ads provides free call tracking limited to AdWords traffic. Paid solutions (CallRail, PhoneWagon, Call Tracking Metrics) track calls from all traffic sources, integrate with Google Analytics and offer more complete attribution at a cost [L0234, 2020-26].
- The global site tag (Google's universal tracking code) must be installed on your website for call conversion tracking to work. If Google Analytics or other Google conversion tracking is already set up, the tag is present and no new code is needed [L0234, 2020-26].
- If you enter your actual website phone number during setup, Google scans your website and replaces all instances with the forwarding number. If you skip this step, you must update the HTML code manually [L0234, 2020-26].
- Set up call conversion tracking [L0234, 2020-26]:
  1. In Google Ads, navigate to Conversions (search for conversions in the top menu).
  2. Click New Conversion.
  3. Select Track phone calls, then choose Calls on website (not call extensions or call-only ads).
  4. Enter a conversion name such as Lead.
  5. Optionally set a revenue value. Leaving this blank is acceptable.
  6. Choose whether multiple calls from the same person count as 1 conversion or multiple conversions (typically 1 total).
  7. Set the minimum call duration to count as a conversion. 20 seconds is standard.
  8. Confirm the lookback window is set to 30 days.
  9. Confirm the attribution model is set to Last click.
  10. For the conversion tracking tag, confirm or select Global site tag if Google Analytics or other conversions are already set up.
  11. Enter your current website phone number in the phone number field.
  12. Google will automatically find and replace this number with a forwarding number on your website.
  13. Click Next to complete setup.
  14. Verify tracking is working by checking the tracking status and optionally using Google Tag Assistant. [L0234, 2020-26]

### Account Separation per Store

- Each store should have its own separate Google accounts and its own email address on all Google properties. This makes it easier to sell one store later, because its data and ad history are not mixed with the others [L0358, 2020].
- Use a separate Google Ads account for each business [L0717, 2020-26].
- Each business needs its own separate set of Google accounts. Do not send product feeds from multiple businesses into one Merchant Center account, and do not run ads for multiple businesses from one Google Ads account [L0727, 2021-22].
- Each unrelated store needs its own Google Ads account. Stores in the same network that can cross-promote to each other's customers, such as a bounce house store, a trampoline store and a swing set store, can share one account [L0837, 2025].
- Do not run two separate Google Ads accounts for the same store, because they compete with each other. Splitting the data across accounts also slows the learning of each account [L0962, 2021].
- Ads for the same store from two accounts are only less harmful if one account runs video ads and the other runs Shopping ads on non-overlapping products. Even then this setup is not recommended, because both accounts learn slowly [L0962, 2021].
- Google and Facebook ad systems learn from data concentrated in a single account. Spreading data across several accounts makes each one learn more slowly [L0962, 2021].
- Two stores in the same market selling the same products can compete against each other in Google Ads. If you run two stores in one market, keep their product ranges different [L0905, 2021-22].
- Multiple Google Ads accounts under different business entities, with different email addresses and billing information, are allowed. Each account is managed separately, and issues with one do not typically affect the others [L0278, 2025].
- For a new business, create a new Google Ads account [L1092, 2022].


Part 8 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/07-setting-up-google-accounts-ads-analytics-search-co.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/09-google-merchant-center-setup-and-verification.md
