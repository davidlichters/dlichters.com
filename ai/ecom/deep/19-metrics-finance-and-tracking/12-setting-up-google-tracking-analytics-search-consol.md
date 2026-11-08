<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 12 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/11-benchmarks-meta.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/13-google-ads-conversion-tracking.md

## Setting up Google tracking: Analytics, Search Console, Merchant Center, Ads

### Same Google login for every service

- Use the store's Google Workspace (business) email for Google Analytics, Search Console, Merchant Center and Google Ads, never a personal address. Log in with it before starting any Google service setup. It prevents permission problems, makes linking far easier, and lets the properties share access. [L0169, undated; L0667, 2025; L0722, 2020-26; L0723, 2020-26]
- with the same email for Analytics, Ads and Search Console, site ownership verifies immediately. [L0962, 2021]
- A personal-email account and a business-email account for the same service are a common reason data and audiences go missing. Check that every linked account number is the intended one. [L1204, 2022]
- The store build team usually creates these accounts and links them. Link Google Analytics, Google Ads and Merchant Center to the store, and when the setup offers GA4 alongside the pixel, connect both platforms. [L0667, 2025]

### What Google Analytics reports and why to set it up early

- Google Analytics is free. It reports visitor numbers, traffic sources and countries, pages viewed, time spent on each page, general behaviour patterns, which products and traffic sources produce revenue, and where buyers were referred from. [L0032, undated; L0169, undated; L0722, 2020-26; L0723, 2020-26; L0964, 2023]
- It measures the return on Google Ads spending. [L0032, undated]
- Analytics records visits, sales and user behaviour. It can only analyse what is fed into it, so every connected source should send data to it. [L0726, 2021-22]
- Set up analytics before traffic arrives, even if you do not analyse the data yet. Data then accumulates for future use and for integration with Google Ads, Search Console and Merchant Center. From the first visitors you can see which sources, pages and products work and which need improvement. [L0169, undated; L0722, 2020-26; L0723, 2020-26]
- Analytics attributes each sale to the product, the order amount and the traffic source. Example: a $1,000 sale shows what was bought, the $1,000 spent and where the buyer came from. Review revenue by source and by product over time to decide which traffic to increase and which pages to improve. [L0723, 2020-26]
- Connecting Analytics to Shopify attributes every sale to its traffic source, so you can see which channels are profitable and which are not. [L0597, 2020-26]
- Google Tag Manager manages tracking tags. It is set up together with Google Analytics and GA4 so that all tracking runs from one place. It does not replace analytics. [L1288, undated; L1213, 2023]

### Account, property and data stream

- The hierarchy is account, then property, then data stream. One account can hold several properties, and one property is enough for one store. [L0723, 2020-26]
- An account represents the business and a property represents one website. Use one property per store unless the business runs several websites under one parent company. [L0726, 2021-22]
- one Google account can manage several stores, each added as a separate property, and you switch between them with the drop-down menu at the top left. [L0466, 2018]
- A data stream is the source that sends information to Analytics. For a store without an app, select the Web stream type and enter the store URL. [L0722, 2020-26]
- Account, property and data stream names are internal labels that nobody else sees. They can match the store name but do not need to match the URL. [L0723, 2020-26]
- Enter the URL of the live store, not a development or test version. Google must be able to reach the site to collect data. [L0722, 2020-26]
- Time zone and currency should match the business location. Example in the course: United States, Eastern time, US dollar. [L0723, 2020-26]
- The Analytics currency must match the currency the store takes payments in. Otherwise e-commerce sales are reported in another currency and will not match the store's own figures. [L0726, 2021-22]
- If the store already has a Google Analytics account, skip sign-up and account creation. Connect the existing GA4 property to Shopify and choose the property that belongs to this store from the drop-down. [L0723, 2020-26]

### Procedure A: GA4 account and Shopify connection through the Google & YouTube app (24 steps)

**Procedure A: create the GA4 account and connect it to Shopify. Source: one source, undated.** [L0169, undated]

1. Go to analytics.google.com
2. Click Start Measuring
3. For Account name, enter your store name (for your reference only)
4. Leave all sharing settings checked
5. Click Next
6. For Property name, enter your domain name (e.g., yourstore.com)
7. Select your correct time zone
8. Confirm the currency is correct
9. Click Next
10. For Industry category, select Shopping
11. For Business size, select Small (1-10 employees)
12. For Business objectives, select Drive sales and Understand web traffic (you can select multiple)
13. Click Create and accept Google's terms
14. Choose Web as the data source
15. Enter your website URL
16. Name the data stream (internal reference only)
17. Leave Enhanced Measurement turned ON
18. Click Create and Continue
19. When Google detects your Shopify site, click Next to install the Shopify integration
20. In Shopify Admin, search for the Google & YouTube app
21. Install the app on the free plan
22. Copy your Measurement ID / Tag ID from your Google Analytics account
23. Paste it into the Google & YouTube app when prompted
24. Use the Shopify/Google video tutorial (Option 1) to complete the connection

### Procedure B: GA4 account and web data stream (19 steps)

**Procedure B: create a GA4 account and web data stream for a Shopify store. Source: one source, undated.** [L0722, 2020-26]

1. Open analytics.google.com while signed in with the Google Workspace account of the store.
2. Click Start Measuring.
3. Enter an account name. It is only for your reference.
4. Under the sharing settings, keep all four options checked.
5. Click Next.
6. Enter a property name (required). Naming it after the website domain is a sensible choice.
7. Set the time zone to the time zone where you operate.
8. Check that the currency matches the currency your shop uses, and change it if the default differs.
9. Click Next.
10. Under business details, choose Shopping as the industry.
11. Choose small, one to 10 employees as the business size.
12. Click Next.
13. Under business objectives, tick Drive sales and Understand web and/or app traffic. Ticking more options does not change the account.
14. Click Create.
15. Read the Google Terms of Service, accept them, and accept the policies.
16. On the data collection screen, choose Web, because no app is involved.
17. Enter the store URL and name the data stream. Only you will see the name.
18. Keep Enhanced measurements switched on with all default items enabled.
19. Click Create and Continue.

Notes to Procedure B:
- Keep all four sharing options checked. [L0722, 2020-26]
- Keep Enhanced measurements on with all default tracking items enabled. [L0722, 2020-26]

### Procedure C: GA4 account and link to Shopify (12 steps)

**Procedure C: create a GA4 account and link it to Shopify, in this order. Source: one source, undated.** [L0723, 2020-26]

1. Open the Google Analytics sign-up page and click Get started today. Only do this if the store does not already have a Google Analytics account.
2. Sign in with the business email address.
3. Enter the account name. It is internal only, so the store name is fine.
4. Leave data sharing enabled and click Next.
5. Enter the property name, for example the store name.
6. Set the reporting time zone to the place where the business is based and set the currency (the example uses US Eastern time and US dollar).
7. Do not select the Universal Analytics option under advanced options. Skip the advanced options and continue.
8. Fill in the business information: Industry category Shopping, business size usually 1 to 10 employees for a small store, and any intended-use options that apply. These answers only inform Google and do not change the account.
9. Leave App installs unchecked if the store has no app.
10. Click Create, check both boxes for the Google terms of service and click I accept.
11. Choose the platform Web, enter the store URL (with www, for example www.example.com), enter an internal stream name, keep Enhanced measurement on, and click Create stream.
12. Do not use the manual installation code shown in the pop-up. Connect the stream to Shopify through the Google channel instead.

Notes to Procedure C:
- Keep data sharing enabled so that Google platforms added later can exchange data with each other. [L0723, 2020-26]
- Industry category Shopping and business size 1 to 10 employees for a small store. Leave App installs off when there is no mobile app. [L0723, 2020-26]
- Keep Enhanced measurement on. It tracks events such as page views and other interactions automatically. [L0723, 2020-26]
- Do not install Analytics on Shopify with the manual code from the pop-up. [L0723, 2020-26]
- Do not create a Universal Analytics property from the advanced options. Create only the GA4 property. [L0723, 2020-26]

### Business size and objectives: two versions

- For a small store, use Small (1-10 employees). Source: Procedures A, B and C. [L0169, undated; L0722, 2020-26; L0723, 2020-26]
- The course set business size to Small to medium and selected these intended uses: measure customer engagement, optimize site, optimize advertising cost, increase conversions and analyze online sales. [L0726, 2021-22]
- Business objectives in the current procedures: Drive sales and Understand web traffic (A), or Drive sales and Understand web and/or app traffic (B). Ticking more options does not change the account. [L0169, undated; L0722, 2020-26]

### Older method: Universal Analytics plus GA4 (2021-22)

Do not use this method now. Universal Analytics stopped processing data in July 2023. The steps are kept for reference.

**Older procedure, 2021-22: create a GA4 and a Universal Analytics property at once.** [L0726, 2021-22]

1. Open Google Analytics, click Start measuring and enter the business name as the account name.
2. Leave the default account data-sharing options unchanged.
3. Name the property after the website. One account can hold several properties, but a single store needs only one.
4. Set the reporting time zone to the location of the business.
5. Set the currency to the currency of the country you sell in.
6. Click Show advanced options.
7. Select Create both a Google Analytics 4 property and a Universal Analytics property. This was the recommended method in the 2021 setup.
8. Enter the base website URL.
9. Click Next. Set the business size to Small to medium and select the intended uses: measure customer engagement, optimize site, optimize advertising cost, increase conversions and analyze online sales.
10. Select your country, tick the terms of service box and accept.
11. Close the data stream setup screen without selecting any options. They are not needed at this stage.

Older notes (2021-22):
- Creating both properties at once creates two properties with connected site tags, so the website is tagged only once. Universal Analytics measures websites only, not apps. [L0726, 2021-22]
- In 2021 GA4 was new and integrated poorly with Shopify, which is why both properties were created. [L0726, 2021-22]
- Older e-commerce path (2021-22): Admin, then the View column, then Ecommerce Settings. Turn on Enable Ecommerce and enhanced e-commerce reporting, then save. Without this, Analytics does not record sales data. [L0726, 2021-22]

### Connecting Analytics to Shopify (Google & YouTube app)

- The Google & YouTube app is used only to connect Google Analytics. Do not use it to connect Merchant Center or Google Ads through its basic setup, because those need different setup with more control. If either is connected automatically, disconnect it in the app Settings. [L0169, undated]
- Newer course (2024): the app can also be used for Google Ads conversion tracking, and it tracks all sales in GA4. The 2023 rule above is therefore a stricter version of the same setup. [L0856, 2024]
- Do not use the advanced manual setup option when connecting Analytics through the app. Always use the Shopify/Google video tutorial (Option 1 only) so the Measurement ID / Tag ID is configured properly. [L0169, undated]
- Paste the Measurement ID into the Analytics field of the store and save. Shopify then adds the tracking code, so no theme or Liquid edits are needed for basic Analytics tracking. [L0391, 2020-26]
- The YouTube option is not needed. Only the Google option needs to be on if you do not use YouTube. [L0835, 2023]
- A Google sales channel can show a calendar icon in Shopify. This is normal and only means the app is installed. [L0835, 2023]
- GA4 is connected through the Google & YouTube app, so no extra tagging is needed to track sales. If test sales do not appear, check the GA4 connection. [L1287, 2025]

**Check the connection: Shopify Admin, Sales Channels, Google & YouTube.** [L0169, undated]

1. In Shopify Admin, go to Sales Channels > Google & YouTube
2. Verify that Google Analytics shows as Active
3. Verify that Google Ads shows as Inactive
4. Verify that Merchant Center shows as Not connected
5. If Google Ads or Merchant Center are connected, open app Settings and disconnect them

A correct connection shows Google and YouTube under Sales Channels, with Google Analytics active, Google Ads inactive and Merchant Center not connected. [L0722, 2020-26]

### Enhanced ecommerce and data sharing

**Enhanced ecommerce through Shopify (newer method).** [L0391, 2020-26]

1. In Shopify, go to Online Store > Preferences and open the Google Analytics section.
2. Click to create a new Google Analytics account and enter the store URL and a category.
3. Under data sharing, keep all options checked: early access to data, new features, Google Analytics specialist debug access and Google Ads linking.
4. Accept the terms of service and copy the generated Google Analytics measurement ID.
5. Paste it into the Google Analytics field in Shopify and save.
6. Mark the Enhanced Ecommerce option in Shopify and save again.
7. In Google Analytics, link the property to the Google Ads account using the same email; name the link after the store and share all views.
8. Enable demographics and interests reporting, enable remarketing and advanced reporting features, and turn on individual user ID tracking under tracking info data collection; save each change.

- Keep all data-sharing checkboxes active: early data access, new features, Analytics specialist access for debugging, and sharing with Google Ads. Beta features and debugging support then stay available. [L0391, 2020-26]
- With Enhanced Ecommerce switched on in the Shopify integration, sessions, product views, add-to-cart events, checkout steps and transactions are tracked automatically, with no custom code. [L0391, 2020-26]
- Confirm that Use Enhanced Ecommerce is ticked in the Shopify Analytics field and that the connection records ecommerce data. [L1145, 2021-22]
- Older method (2020): in Analytics, open the gear icon for Admin, then under your website's data open E-commerce settings. Toggle on Enable e-commerce and Enable enhanced e-commerce reporting, then Save. In the Shopify back end, open the Google Analytics settings and check Use enhanced e-commerce. [L0852, 2020]
- Conflict to know: the older method (2020, 2021-22) uses the Universal Analytics path, while the newer method switches on Enhanced Ecommerce in Shopify and tracks automatically in GA4. Use the newer method for a new store. [L0852, 2020; L0726, 2021-22; L0391, 2020-26]
- Enhanced Ecommerce is only available after upgrading to the latest version of Google Analytics. [L0370, 2021-22]
- Do not use an ID that starts with UA-. It belongs to Universal Analytics, which stopped processing data in July 2023, so it no longer records sales. Connect a GA4 property and verify that it captures purchases. (Older advice in the 2021-22 source, still valid.) [L1145, 2021-22]
- Before launch, Analytics must be connected to Shopify and ecommerce tracking must be active. The traffic-value and ad-performance decisions depend on this data. [L1145, 2021-22]

### Data collection, retention and demographics

- Set Data settings > Data collection: turn on every data collection option and accept the user data collection acknowledgement. This passes Analytics data to Google Ads at the highest sharing level. [L1520, 2020-26]
- Set Data settings > Data retention: change Event data retention from the default of 2 months to 14 months, then click Save. The longer period lets audiences draw on a longer user history. [L1520, 2020-26]
- Mistake: leaving Event data retention at 2 months limits how far back user data is kept, so audiences built on it are smaller. Raise it to 14 months before creating remarketing audiences. [L1520, 2020-26]
- Demographics and interests reporting can be enabled under data collection. It shows age, gender and interest groups, which can be used as audience ideas in Google Ads. [L0391, 2020-26]
- Older path (2021-22): Admin > Property Settings > Tracking Info > Data Collection. Turn on the option that collects additional data, which enables demographics and interest reporting for other ads, such as Google search text ads. Click Save. [L1390, 2021-22]
- Individual user ID tracking is switched on under tracking info data collection settings, then saved. It lists the behaviour of individual users on the site, not only aggregated sessions. [L0391, 2020-26]
- Enhanced measurement is on by default and tracks events such as page views automatically. Keep it on with all default items enabled. [L0723, 2020-26; L0722, 2020-26; L0169, undated]
- Older caution (2021-22): enhanced measurement automatically records interactions such as link clicks and embedded video plays. Make sure no personally identifiable information is sent to Google through these page elements. The setting can be left on or switched off in the property details. [L0726, 2021-22]

### Universal Analytics sunset and migration

- Universal Analytics stopped processing data in July 2023. A new store needs a GA4 property connected through Shopify's GA4 option. [L0726, 2021-22; L0934, 2023; L0964, 2023; L1092, 2022; L1213, 2023]
- Google Analytics 4 replaces Universal Analytics. New tracking must be set up in GA4.  [L1092, 2022]
- The GA4 setup in Shopify should use Shopify's native setting, not custom code. The course described this as the expected approach from March 2023 onward. [L0934, 2023]
- Earlier, the course expected the Shopify update for the direct integration in March 2023, after which the setup would be a few clicks. [L0964, 2023]
- Migration time differs by source: about 33 minutes for Shopify accounts (2023) [L0855, 2023], and about 45 minutes to an hour when you follow a step-by-step process alongside your own setup (2023) [L0970, 2023]. Both are course estimates.
- Mistake: do not plan around an older timeline. The speaker expected removal around mid-2023, but Universal Analytics stopped processing data in July 2023, and GA4 is the current property. [L1213, 2023]
- Mistake: do not create a Universal Analytics property from advanced options. [L0723, 2020-26]

### Linking Analytics and Google Ads

- Link the property to Google Ads with the same email, name the link after the store and share all views. [L0391, 2020-26]
- Linking shares data in both directions and shares remarketing lists between the platforms, so audiences do not need to be built separately in each one. [L0391, 2020-26]
- Linking Google Ads and Analytics before launch gives Analytics the Google Ads data it needs to value traffic and measure ad performance. [L1145, 2021-22]

**Link Google Ads and Google Analytics so audiences can be shared. Source: one source.** [L1390, 2021-22]

1. Open Admin in Google Analytics.
2. In the property column, go to Product Linking and open Google Ads Linking.
3. Check whether the accounts are already linked; if not, link them.
4. Turn on auto-tagging as part of the link.

**Checking audiences that are missing from Google Ads. Source: one source.** [L0934, 2023]

1. Open the Analytics account and click the gear icon (Admin) at the bottom left.
2. Under Audience definitions, choose Audiences.
3. Confirm the audience is listed.
4. Check that the Google Ads account is linked to Analytics.
5. Under audience destinations, click Edit and select the correct Google Ads account.
6. In Google Ads, under shared audiences, remove any filters.
7. If it still does not appear, create a couple more audiences to check whether the issue is specific to one audience.

### Linking Search Console

**Link Search Console to Google Analytics. Source: one source, undated.** [L0736, 2020-26]

1. Log in to Google Analytics with the same email used for Search Console.
2. Click the gear icon (Admin) at the bottom left.
3. Scroll down to the Product links column in the middle.
4. Click Search Console links.
5. Click Link.
6. Click Choose accounts and select the correct Search Console property.
7. Click Next, Next, Next, then Review and submit (Confirm).
8. Click Save.

- After linking, organic search data flows into Analytics reports, including which search keywords led to sales. [L0736, 2020-26]
- Search Console reports only organic search results. Paid search traffic appears in Analytics when you filter by traffic source.  [L1113, 2022]


Part 12 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/11-benchmarks-meta.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/13-google-ads-conversion-tracking.md
