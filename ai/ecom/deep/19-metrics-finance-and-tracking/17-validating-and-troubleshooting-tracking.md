<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 17 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/16-platform-versus-analytics-reconciliation.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/18-daily-and-weekly-ad-analysis-workflow.md

## Validating and troubleshooting tracking

### Checking that pixels and tags fire

- Google Tag Assistant is a free tool for verifying that your call conversion tracking code is installed and works on your website. [L0234, 2020-26]
- To validate Google Analytics e-commerce tracking:
  1. Enable e-commerce tracking in Google Analytics.
  2. Let it run for 7 to 14 days, until about 20 orders are recorded.
  3. Open the transaction report (Conversions > E-commerce > Transactions).
  4. Compare the individual order numbers with the orders in your CMS.
  5. Confirm that they match. [L0575, 2014]
- If Google Ads shows a conversion tag as inactive, or reports 0% conversions while orders arrive, fix the tag through the feed app that set up the store's tags:
  1. Open the Google Shopping feed app in the Shopify App Store.
  2. Click Help inside that app.
  3. Send a screenshot of the Google Ads warning, such as "conversion tracking inactive".
  4. Ask the app to check that the tag sits in the correct place and is configured correctly, or to set it up again. [L0470, 2023]
- To confirm that a Google Ads conversion tag works, check whether conversions have been recorded since the tag was installed. The "no conversions" warning can appear simply because no sale has happened yet. If sales happen and the warning persists, contact the tracking app's support. [L1115, 2024]
- If the conversion tag can fire on a page that testers reach during setup, such as a thank-you or checkout page, Google Ads can record a conversion with no Shopify sale. Check which page triggers the conversion and correct the tag setup before trusting the conversion data. [L0960, 2019] **
- The Facebook Events Manager test view works as follows:
  - It shows incoming activity only while its page stays open in Events Manager during testing.
  - Test-mode results can differ from what live visitors generate.
  - Your personal ad preferences have no bearing on the test data. [L1027, 2026]
- Events sent by the Shopify partner integration show the setup method "Partner integration" in the test view. Their event IDs start with "sh-". Typical events include PageView, and View content with the status "Processed" after a product page is viewed. [L1027, 2026]
- The Meta pixel dataset ID and the ad account ID are both long numeric IDs of 16 digits. Check both on the Events Manager dataset page and in Ads Manager to confirm that the pixel is linked to the correct ad account. [L1027, 2026]
- To check the whole Facebook funnel:
  1. Open Facebook Events Manager and go through the funnel from page view to checkout.
  2. Confirm that each event fires at each step.
  3. If needed, check the store side with platform support.
  4. Create the custom metrics (hook rate, click-through rate, conversion rate) in Ads Manager.
  5. Find the weakest stage and fix it. [L0950, 2023]
- If audiences stay empty despite real website traffic, the pixel is usually installed incorrectly. Check every pixel's implementation before changing audiences or ads. [L1390, 2021-22] **
- Facebook does not always record every event. Content views and some add-to-cart counts can be undercounted. Treat these numbers as directional signals and judge sales against the store's own order records. [L1426, undated]
- If the CPA column for a product stays empty, conversion tracking is probably not set up in the ad account. The per-product cost per conversion column, which CPA-based bidding needs, fills in only when tracking exists. Without it, the target CPA calculation has no current CPA to work from. [L1328, 2015]

### Duplicate and inflated counting

- If conversions show at double their real number in Google Ads, the purchase is probably tracked twice, for example with a Shopify app plus a manual Google code, or a Google Analytics goal plus an app. Keep one tracking method and disable or delete the other. [L0356, 2019] **
- The repeat rate in Google Ads conversion settings shows how many conversions are counted per conversion event. Interpret it as follows:

  | Repeat rate | Meaning | Source |
  |---|---|---|
  | Near 1 | Normal | [L0391, 2020-26] |
  | Slightly above 1 | Can happen when the pixel fires twice, for example after a page refresh on the confirmation page | [L0391, 2020-26] |
  | About 1.5 to 3 | Nearly every conversion is double counted; a serious tracking problem | [L0391, 2020-26] |

- A repeat rate well above 1 (roughly 1.5 to 3) means that nearly all purchases are double counted in Google Ads. This inflates conversions and ROAS. It is a known Shopify issue. Check whether the confirmation page fires the pixel more than once, and do not optimise campaigns on inflated numbers until the problem is resolved. [L0391, 2020-26]
- A campaign that appears to fail with a CBO scaling setup may have a correct setup. Verify the ad set's results with UTMs, because the ad manager can show more sales than were actually recorded. [L0349, 2024]

### Tracking gaps and acceptable variance

- Two sources give different thresholds for an acceptable gap. Apply them to different comparisons:

  | Comparison | Acceptable value | Source |
  |---|---|---|
  | Analytics or tracking against the invoicing system | Gap of up to about 5% is normal, because no single tool captures every route a customer takes to buy | [L0359, 2020] |
  | Facebook-tracked purchases against actual sales | Tracking rate of about 80 to 90%; 80% or more is acceptable | [L1158, 2023] |

- Sales not tracked by Facebook can be checked in Shopify Reports under Sessions by marketing, grouped by campaign, ad set and ad. [L1158, 2023]
- A gap of 50 or more daily Google Ads clicks against only 10 to 15 analytics visitors is a tracking fault. Fix analytics on the affected product pages before increasing ad spend. [L0934, 2023]
- Google Analytics usually records more sales than Google Ads for the same period, so the two platforms rarely show matching conversion numbers. [L0721, 2021-22]
- Google Ads and Google Analytics under-report conversions even when set up correctly. Causes include cookie blockers, privacy features, payment gateway redirects and draft orders. [L0256, 2021-22]
- Standard conversion tags under-track but do not over-track when installed correctly. Over-tracking points to a faulty installation or to multiple counting of one transaction. [L0721, 2021-22]
- Compare Facebook's purchase count in Ads Manager with real orders before deciding that a test has failed. Facebook can record fewer purchases than came through the store. [L1124, 2026]
- A conversion gap between Google Analytics and Google Ads has two possible paths:
  1. Compare purchase counts in Google Analytics and Google Ads for the same period.
  2. If purchases show in Analytics but not in Google Ads, check the attribution settings and increase the conversion window for the purchase conversion in Google Ads.
  3. If purchases show in neither, suspect a tagging or installation problem with the tracking code.

  Some gap is normal because of cross-device purchases and traffic from outside Google. [L1281, 2022] **
- Example: Google Ads showed 26 conversions and Google Analytics showed 53 for the same period. A gap of that size usually points to attribution settings, not to missing sales. [L1281, 2022] **
- Standard tracking relies on cookies, which are increasingly unreliable. iOS devices with restricted tracking, ad blockers and cookie blockers can stop conversion tags from firing. Apple's iOS 15 privacy changes limit email open tracking. Google has announced moving away from cookie-based tracking, but no replacement was available at the time of the lesson. [L0721, 2021-22] **
- Reconcile Google Analytics, Shopify Analytics and individual app dashboards before drawing conclusions. They often show different values for the same metric, and the data is easy to misread. [L0390, 2019]

### Shopify vs ad platform order mismatches

- To correct for under-tracked conversions:
  1. Compare the total orders in Shopify with the conversions tracked in the ad platform for the same period.
  2. Calculate the number of untracked orders.
  3. Check the Source/Medium report in GA to see what share of traffic each source contributes.
  4. Allocate the untracked orders and their revenue to the sources in proportion to their traffic share. Example: if 90% of traffic is Google Ads, assign 90% of 15 untracked orders to Google Ads.
  5. Recalculate cost per transaction and ROAS with the adjusted figures. [L0721, 2021-22] **
- Example discrepancy: Shopify shows 57 orders in a month and Google Ads tracks 40. If 17 of the untracked orders were draft orders, the difference is explained. Remaining untracked orders are typically caused by cookie or browser limits. [L0721, 2021-22] **
- Example of a large gap: one high-ticket dropshipping store, November 1-15, 2020. Google Analytics reported $68,000 revenue from 21 transactions. Google Ads reported 14.26 conversions. Actual Shopify revenue was $79,000. The gap came from draft orders and payment gateway redirects that broke the tracking chain. [L0256, 2021-22] **
- A conversion without a matching Shopify order can be a customer who paid a PayPal invoice sent manually instead of through checkout. Check PayPal for the payment before concluding that tracking is broken. [L0960, 2019] **
- After PayPal Express buttons are removed, the abandoned cart count can rise, because those shoppers were previously untracked. This is expected and does not signal a new problem. Judge the change by completed orders and conversion rate, not by abandoned cart numbers alone. [L0575, 2014]

### Draft and phone orders

- Draft orders created in Shopify, for phone sales, discounts or custom orders with extra shipping, are not tracked by Google Ads or GA conversion tags. Shopify's draft order checkout cannot have tracking codes installed. A store can therefore show more Shopify orders than the ad platforms report. [L0721, 2021-22] **
- Track draft order revenue separately each month, outside your tracked conversion data. Then you know how much additional revenue to reallocate to your traffic sources when calculating actual return on ad spend, based on each source's share of new users. [L0256, 2021-22] **

### Cookie blockers and payment redirects

- Visitors with a cookie blocker, or a browser that does not support cookies, do not have their conversion recorded in Google Analytics or Google Ads. [L0256, 2021-22] **
- Payment providers such as Bread, Klarna and Zip Money redirect buyers away from your site during checkout and return them to your thank-you page afterwards. Google cannot link the final visit to earlier visits. The sale is therefore attributed to the payment provider as referral traffic, not to your original traffic source. [L0256, 2021-22] **

### Bot traffic

- Sessions from an unknown location that cannot be linked to any channel in the Shopify sessions report may be bot traffic. These sessions can often be ignored when they do not lead to add-to-carts or purchases. [L0363, 2022+]
- Bot or internal traffic that spikes right after an ad launch distorts conversion rates. Publish ads about six to seven hours before the planned start, so that launch traffic can be identified and excluded from funnel calculations. [L1259, undated]
- If a launch spike of bot traffic cannot be separated cleanly, estimate it by subtracting the normal daily visitor count from the spike day. Use the cleaned visitor number when calculating funnel rates. [L1260, undated]
- Traffic spikes that come from a single cloud server provider, often with one product page viewed per visit, are usually automated crawlers from platforms such as Shopify, Facebook or Google. They are not real customers, so do not react to them as sales opportunities. [L1088, 2020] **

### Realtime tests

- To test GA4 Realtime:
  1. Open the GA4 property, not the Universal Analytics property.
  2. Open the Realtime report.
  3. Visit a random product page on your store.
  4. Confirm that your visit appears with the page and location on the map. If it does not, recheck the GA4 setup from the GA4 lesson. [L0835, 2023]
- To use Google Analytics real-time reports:
  1. Open the real-time report several times a day to confirm that traffic has not dropped.
  2. Check where visitors come from and which pages they are on.
  3. Use conversion tracking and reports to see which pages and products make the most money.
  4. Review pages with high bounce rates, where visitors leave almost immediately, and fix them. [L1088, 2020] **

### Test orders

- To test purchase tracking with a $1 product:
  1. Create a temporary product priced at $1 in the store.
  2. Buy it as a test purchase.
  3. Check that the order appears in Shopify and in analytics, and that the test does not need to be fulfilled before Google sees it.
  4. Delete the temporary product afterwards. [L1287, 2025]
- A test order placed only to measure how many orders a store receives can be refunded afterwards, according to the method described, so the measurement cost stays limited. Confirm the platform's refund rules for such orders before relying on this. [L1219, undated]
- Dummy test orders estimate sales but are not fully reliable. The lesson suggests they work about nine times in ten. Treat one dummy order result as a hypothesis, and confirm it with a second order or a second source. [L1385, undated]

### Diagnosing traffic and conversion anomalies

#### Normal variation and first checks

- Small daily fluctuations in traffic and sales are normal even when nothing is broken, especially with low traffic volumes. Use date-range analysis in Google Analytics to detect patterns over weeks rather than reacting to daily variations. [L0243, 2019] **
- To analyse a traffic decline in Google Analytics by source:
  1. Log into the Google Analytics account.
  2. Navigate to the left column menu > Traffic Sources.
  3. Select a specific date range, for example March 1 through April 3.
  4. Uncheck "All Sources".
  5. Check one source, for example Google, to view the traffic graph for that source only.
  6. Repeat for each traffic source (Facebook, Instagram, Pinterest, etc.) to identify which source lost traffic.
  7. Investigate specific source changes separately. [L0243, 2019] **
- When traffic jumps sharply, first check whether the jump is spread across all campaigns or limited to one section. Then break the data down by day to see whether it was a short spike or a sustained increase. [L0853, 2021] **
- To find the cause of a traffic spike you want to repeat:
  1. Check whether the spike happened across all campaigns or in one section.
  2. Break the data down by day and see whether it was a short peak or steady growth.
  3. Check whether the spike was a tracking glitch or a real change.
  4. Identify what started it and whether it lasted, then repeat the conditions that worked. [L0853, 2021] **
- If the conversion rate looks abnormally high or low, check that sales tracking is set up correctly before optimising. Support from the Google Shopping feed app can verify the configuration. [L1092, 2022] **

#### Conversion rate

- Conversion rate = completed orders ÷ visitors. Example: 1 sale from 2,444 visits gives 0.04%. If half of those visits were bot traffic, the same sale gives 0.08% on the real visitors. [L0626, 2025+]
- Before judging a store's conversion rate, check in Shopify analytics where the visits come from and how many are bot traffic, organic or paid. Bot traffic inflates the visit count and makes the conversion rate look lower than it really is. [L0626, 2025+]

#### Sudden drops in ad traffic

- To diagnose a sudden traffic drop in Google Ads:
  1. Open Google Ads and go to Change history.
  2. Choose All campaigns.
  3. Set the date range from the last normal traffic period until today.
  4. Compare the performance graph with the logged changes.
  5. If a change lines up with the drop, click Undo on it. [L0934, 2023]
- A sudden drop in Google Ads traffic with no logged account change can come from a Merchant Center product feed issue, such as products that are no longer approved. Check Merchant Center for errors and warnings before assuming seasonality. [L0934, 2023]
- To review sudden drops in daily traffic:
  1. Open Google Analytics and review the daily traffic since the start of the month.
  2. Look for sharp drops and note the date.
  3. Check whether Google Ads spend stopped on that date.
  4. Check whether a product was suspended on that date.
  5. Reverse-engineer the cause from those records. [L1111, 2020] **
- Troubleshoot a sudden drop in ad performance in this order:
  1. Confirm that the store works functionally: checkout, page loading, product images and shipping coverage.
  2. Check what changed between the working and failing periods.
  3. Test ad creatives by process of elimination. Cut the newest ad set or creative for a few days to see whether the old ones recover. [L0950, 2023]
- Audit your ad accounts after a seasonal dip in sales, for example after the November to December peak, to confirm that tracking and campaign settings still work as expected. [L0665, 2022] **

#### Zero sales and declining bestsellers

- To investigate a zero-sales month:
  1. Compare Google Analytics traffic for the zero-sales month with earlier months to see whether traffic dropped.
  2. Identify which bestselling products lost traffic and which source stopped sending it to them.
  3. Confirm that your ads still get impressions and clicks.
  4. Search your bestsellers on Google Shopping and check whether competitors started undercutting prices or using other tactics. [L1279, 2021] **
- When an ad campaign shows zero add-to-carts, also check the store's own analytics, for example Shopify reports. If the store analytics also show zero, the pixel alone is probably not the cause. Treat the product, offer or landing experience as the likely problem. [L0361, 2024]

#### Sales pace and paid traffic

- PPAds shows live sales for a store's products, but per the lesson it shows sales only while the store is open and active in the tool. It does not show sales from a week ago or lifetime totals, so it gives a partial, current view. Use it as one data point, not as a complete sales history. [L1385, undated]
- Sales that arrive in short bursts with long gaps can suggest paid traffic running in the background. Compare the sales pace with the view pace. If views are high but sales are small and irregular, look for paid promotion before trusting the organic numbers. [L1385, undated]

#### Video traffic and shadowban check

- To check for a shadowban in the video analysis:
  1. Wait a few days after posting, because the video analysis takes time to appear.
  2. Open the video analysis of the video.
  3. Scroll down to the Traffic source section.
  4. Compare the percentage from "For You" with the percentage from "Personal profile".
  5. If Personal profile is under about 3% and most views come from For You, the account is probably not restricted and the video was simply weak.
  6. If the share from followers is higher than the share from For You, the video is only shown to followers and is unlikely to go viral. [L1381, 2022]

#### Abandoned carts and feed changes

- After PayPal Express buttons are removed, judge the change by completed orders and conversion rate, not by abandoned cart numbers. [L0575, 2014]

### Offline conversion uploads

- When pixel purchase data is missing, for example after an iOS update:
  1. Export all purchases from the store as a CSV file.
  2. Upload the purchase file to Facebook, so the platform learns which purchases happened on the store.
  3. Wait about 1 to 2 hours, then check the actual ROAS in Ads Manager.
  4. If tracking is still missing after a longer period, contact Facebook support and ask for the data to be restored. [L0645, 2023] **
- To upload offline conversions for consistent sales:
  1. Export all orders as a CSV file from the store.
  2. Open Meta Business Manager and find the offline conversions or offline upload option.
  3. Import the CSV file.
  4. Wait about 30 minutes for the conversions to appear in the Facebook dashboard. [L1345, 2021+]
- Manual CSV offline conversion upload is a practical fallback when sales are steady, for example two to five orders a day, and no automated tracking tool is in place. [L1345, 2021+]


Part 17 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/16-platform-versus-analytics-reconciliation.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/18-daily-and-weekly-ad-analysis-workflow.md
