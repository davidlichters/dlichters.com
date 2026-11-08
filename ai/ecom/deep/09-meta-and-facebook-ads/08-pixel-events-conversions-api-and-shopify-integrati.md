<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 8 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/07-ban-recovery-appeals-and-meta-support.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/09-product-catalog-and-commerce-manager-feed.md

## Pixel, Events, Conversions API and Shopify Integration

### iOS 14 Limits and Why Server-Side Tracking Matters

- Since iOS 14, cookie-based tracking is limited. The Conversions API lets a store send data server to server to Facebook and Google, so connect the store with maximum data sharing to keep tracking accurate. [L0247, 2021]
- Connecting Shopify directly to Facebook through Shopify's built-in integration uses the Conversions API, which keeps conversion tracking reliable after the iOS 14 privacy changes. [L0853, 2021]
- Linking Facebook and Shopify with the correct pixel setup from the start still recovers some data through Safari blocking, but nothing fully restores pre-iOS 14 tracking. [L1112, 2021]
- Maximum data sharing with the Conversions API recovers only part of the tracking lost after Apple's iOS 14.5 changes. Do not assume it brings back all lost conversions. [L1318, 2022+]
- After the iOS update, many conversions are not tracked, so the pixel needs larger audiences to find results. Audiences of around 40 to 50 million or more give the pixel more data than tightly restricted ones. [L0648, undated]
- Remarketing audiences shrank after iOS 14, so the minimum usable remarketing window is now about seven days. Make windows as large as the traffic allows instead of very narrow ones. [L1112, 2021]
- Before iOS 14, a site with a few hundred daily visitors could split Facebook remarketing into windows of 2, 4 and 7 days, then wider windows beyond 7 days. These narrow windows no longer work well because audiences shrank after the update. [L1112, 2021]
- Device-based audience changes for Facebook and iOS are not required at small ad budgets. They matter more as spend and audience size grow. [L0969, 2022]
- The Facebook ad training was updated after the iOS privacy changes. Current practice differs mostly in how Shopify connects the store to Facebook ads. [L0803, 2022]
- Set Shopify's Facebook data sharing to maximum so Meta can capture more users for remarketing. [L1113, 2022]

### Prerequisites and Account Structure

- Meta Pixel: a tracking code on the store that reports visitor actions such as add to cart, checkout and purchase to Meta. Meta uses this data to learn which people are likely to buy and to optimise ads. [L1021, 2026]
- Events must be configured. In Events Manager, set up Add to Cart, Initiate Checkout and Purchase so Meta knows which actions count as success. Events that are not configured give Meta no signal to optimise towards. [L1021, 2026]
- Backend setup order between Facebook and Shopify:
  1. Connect your Facebook Page to Shopify, so Facebook knows which store to send people to. [L1021, 2026]
  2. Verify your domain, which proves that you own the website. [L1021, 2026]
  3. Create your Meta Pixel and connect it to the store. [L1021, 2026]
  4. Configure events in Events Manager for Add to Cart, Initiate Checkout and Purchase. [L1021, 2026]
  5. Add a payment card, because Meta needs a way to charge ad spend. [L1021, 2026]
- Connect a Meta Pixel to your existing Business Manager (business portfolio) rather than creating a new Business Manager. The pixel is a dataset that lives under the Business Manager and is linked to the ad account from there. [L1027, 2026]
- Domain verification: when Meta and Shopify are linked through the Meta sales channel, the integration handles domain verification. A separate meta tag in theme.liquid is not needed. (2025) [L0667, 2025]
- Connecting the online store to the Business Manager is a separate step after domain verification. It is required before running dynamic remarketing ads. [L1025, 2020-26]
- Requirements for complete conversion data: a connected and verified domain, the Shopify Conversions API integration, and the tracking data switches turned on. Without all three, conversion data is incomplete. [L1288, undated]
- A Meta Commerce account must be created inside the Meta Business Manager so the Shopify products can be placed in the Business Manager. This is a prerequisite for dynamic remarketing with product catalogs. [L1318, 2022+]
- A pixel created by yourself, outside the Business Manager and the Shopify integration, may not connect properly. Always create the pixel from the business portfolio that owns the ad account and connect it through the partner setup. [L1027, 2026]
- Setting up the connection and the Commerce account does not spend any ad budget. Ads are created in later steps. [L1318, 2022+]

### Creating the Pixel (Dataset) in Meta

- The pixel must already exist in Meta Events Manager before you link it in Shopify. If no pixel exists, Shopify's dataset step offers a Create new option instead of listing an ID. [L1028, 2026]
- Create the pixel in Meta Business settings:
  1. Go to Business settings and open Data sources. [L1024, undated]
  2. Open Data sets. The pixel was moved from its former location to data sets. [L1024, undated]
  3. Click Add, then Create new data set. [L1024, undated]
  4. Name the data set after the store and click Create. [L1024, undated]
- Ad set > Conversion > Dataset is the Meta pixel and should already be selected by default. If no pixel exists, create one, add it to the website and grant the needed permissions to the user and the Business Manager. [L0865, 2025-26]
- Create a new Meta pixel for each new product test. You create it yourself inside the account, so it does not need to be bought. [L1171, 2024+]
- Alternative to Shopify: install the Facebook pixel directly through Facebook and the Google pixel directly through Google to keep full control over tracking and retargeting. For a beginner who wants to start immediately, Perfect Audience can track both Facebook and Google visitors with one line of code on the site. [L0923, 2015]
- Three ways to set up the pixel on the Set up Meta pixel screen:
  - Add the pixel code to the website yourself (marked Recommended). [L1027, 2026]
  - Send instructions to a developer. [L1027, 2026]
  - Set up with a partner such as Shopify or WordPress. For a Shopify store, the partner route connects the pixel through the Shopify integration. [L1027, 2026]
- Traffic route: send Facebook traffic to your Shopify store rather than using Facebook's built-in direct-sell option. This was the practice as of early 2023 and may change. [L0934, 2023]
- Facebook Commerce Center: the new Facebook sales channel uses it. It needs fewer apps and no extra fees, which makes setup easier than the older process. [L0247, 2021]

### Connecting Shopify to Facebook and Instagram

Two procedures reach the same Facebook & Instagram channel. Use procedure A for the current Shopify flow. Procedure B is the order used in a separate setup.

- Shopify app: install the Facebook & Instagram app from the Shopify App Store (developer: Meta, free to install, additional charges may apply), then click Get started and log in to Facebook. [L1027, 2026]
- The personal Facebook profile is used only as the access route to the business accounts. It is not the owner of the pixel or catalog. [L1027, 2026]
- Shopify asks for a business portfolio. A portfolio that does not meet Meta's requirements for shops cannot be selected, and the Connect button stays unavailable for it. In that case choose Create new business portfolio or pick a portfolio that qualifies before connecting. [L1027, 2026]

**Procedure A**

1. In the Shopify admin, install the Facebook & Instagram app and click Get started, then connect your Facebook account. [L1027, 2026]
2. Under Set up Ads on Facebook and Instagram, connect the business portfolio (Business Manager) that owns the product catalog, choose or create a catalog, and accept Meta's Product Catalog Terms. [L1027, 2026]
3. Under Manage Facebook & Instagram data sharing preference, select Maximum and save. Maximum shares the most data with Facebook and uses the Meta Pixel, advanced matching and Conversions API. [L1027, 2026]
4. Submit for review and wait while the channel setup finalizes. This takes several minutes. Do not refresh. [L1027, 2026; L1028, 2026]
5. In Ads Manager, open the ad account, then open Events Manager from the left column. [L1027, 2026]
6. Choose Connect data, select Web, then Create a new dataset (pixel). Leave the name field empty if you wish, and agree to the Meta Business Tools Terms. [L1027, 2026]
7. Choose the option to set up the pixel with a partner (Shopify), go to Shopify, and confirm the connection. [L1027, 2026]
8. In Shopify, make sure the Facebook and Instagram sales channel is installed, and set the data sharing to Maximum. [L1027, 2026]
9. Return to Events Manager and click Next. The status stays inactive until test traffic is sent. [L1027, 2026]
10. Click Send Test Traffic, then Finish. [L1027, 2026]

**Procedure B**

1. In Shopify admin, go to Sales channels and search for Facebook (the Facebook & Instagram app), then click Get started. [L1028, 2026]
2. Click Connect account. [L1028, 2026]
3. Log in with the Facebook profile you want to use. Shopify uses this personal profile only to access your business accounts. Review the requested access (name and profile picture, view access) and continue. [L1028, 2026]
4. Choose the business profile that owns the ad account you want to use (the one you created in your ad account). [L1028, 2026]
5. Choose the data sharing preference (see the data sharing section). [L1028, 2026]
6. In the dataset step, select the existing pixel. If no pixel exists yet, click Create new. [L1028, 2026]
7. Click Confirm, then wait while Shopify shows Finalizing channel setup. [L1028, 2026]
8. Continue to the catalog step and sync products. [L1028, 2026]

Procedure B also notes that if you have a product catalog, connect the business portfolio that owns it during setup. You can manage how your products are advertised later. [L1028, 2026]

- The Set up Meta pixel screen for Shopify is handled through the partner route. The pixel connects through the Shopify integration. [L1027, 2026]
- Changing the connected Business Manager: remove the existing Facebook channel or business manager connection in the Shopify Facebook app, then connect the new Business Manager there. [L1218, undated]
- Older Shopify procedure (2022): enable the Facebook pixel under Online Store > Preferences, choose the highest level of data sharing in the customer privacy settings, and connect Shopify directly to Facebook, since this is used for the product feed. [L1281, 2022]
- Orders bought through Meta still appear in Shopify if the purchase runs through your Shopify store. The checkout option you choose in Meta does not change this. [L0965, 2024]

### Data Sharing Levels in Shopify

Shopify's Facebook & Instagram data sharing preference has three choices: Conservative, Enhanced and Maximum. Shopify shows the choice as "Manage Facebook & Instagram data sharing preference" and "Choose your data sharing preference." [L1027, 2026; L1028, 2026]

| Level | What it means | Source | When it applies |
|---|---|---|---|
| Conservative | Listed as a choice; the sources give no further detail. | [L1027, 2026] | Not used in the sources' setups. |
| Enhanced | Customer activity is sent through the Meta Pixel, advanced matching and the Conversions API. Customers can stop this from their own Facebook account settings. | [L1028, 2026] | Used in one setup. Maximum is also a valid choice. |
| Maximum | Shares the most data with Facebook. Uses the Meta Pixel, advanced matching and Conversions API. Continually updated with Meta's latest ad technology. | [L1027, 2026] | Recommended by most sources for the best possible results. |

- Shopify's setup guidance cites a 17.8% lower average cost per result for advertisers who used the Conversions API alongside the Meta Pixel. [L1027, 2026]
- Meta reports that sending customer data through both the Meta Pixel and the Conversions API together lowers cost per action (CPA) compared with the Pixel alone. This is why Enhanced combines both channels. [L1028, 2026]
- Data sharing is a single setting. If it is correct, the audience sizes in Meta should be correct. [L0965, 2024]
- Maximum sends customer personal data to Meta. Before saving the setting, the store's privacy policy must describe how personal data is used and shared with third parties such as Facebook. Shopify's share data settings are where this preference is chosen. [L1027, 2026]
- Maximum data sharing is also needed for purchase conversions to appear in campaigns. Without it, the Purchase event may not reach Meta, and the Purchase option will not appear in the Meta campaign event drop-down. [L0837, 2025]

### Dataset Settings and Verification

- Website settings in the dataset (Events Manager > Settings):
  - Turn on Automatic website matching. It uses hashed customer data such as email or phone to match customers to Meta accounts, which helps attribute more conversions and supports remarketing. [L1027, 2026]
  - Turn on Automatic advanced matching. [L1027, 2026]
  - The course recommends keeping website matching on and tracking events without code. The dataset feature turns off after 90 days of inactivity. [L1027, 2026]
- Auto-tracking in dataset settings: turn it on only when you want campaigns to draw on offline events from this dataset for ad tracking and attribution. Once enabled for an ad account, every new campaign there uses this dataset for offline event tracking by default. Keeping it off is a valid choice if you have no plans to use it. [L1027, 2026]
- Extend attribution uploads (Events Manager > Settings) can extend the offline event upload window from 7 days to 90 days. Use it only if your business cannot upload events within at least seven days after they occur. Extensions apply only to offline events from a physical shop. [L1027, 2026]
- Sharing a dataset: open the dataset's Settings in Events Manager, go to Sharing, and choose Share With an Ad Account. To give another business portfolio access instead, use the option Give another business portfolio access to this dataset. [L1027, 2026]
- Verify the connection by checking that the pixel ID is linked to the ad account ID in Events Manager and the Business Manager, and that the pixel status shows connected to the ad account. The course checks the pixel ID and ad account ID on both screens. [L1027, 2026]
- In Events Manager under Integrations, the Shopify (online) entry should show the status Connected and the number of pixels connected to it. The dataset page should show it as connected to one ad account. [L1027, 2026]
- Events Manager pixel tabs: Overview, Test events, Diagnostics, History and Settings. The Overview's event table shows Total events and the Last received time for each event, such as Add to Cart, Initiate Checkout and Purchase, to confirm data is flowing. [L1028, 2026]

**Find and verify the two IDs before linking**

1. Ad account ID: open Ads Manager and check the ad account selector. The numeric Ad account ID is shown under the account name. [L1028, 2026]
2. Pixel ID: open Events Manager and select the pixel, which Meta now lists as a dataset. The numeric ID is shown on its overview and in the page URL. [L1028, 2026]
3. In Shopify, confirm that the selected business profile and ad account match the ad account ID from step 1, and that the dataset matches the pixel ID from step 2. [L1028, 2026]
4. Confirm the link only when both IDs match. [L1028, 2026]

- If the pixel ID selected in Shopify is wrong, the whole ad optimization process does not work. Always compare the selected ID with the pixel ID shown in Meta Events Manager before confirming. [L1028, 2026]

### Auto Advanced Matching

- Auto advanced matching lets Meta collect more customer data from the website, such as phone number and address, which makes remarketing more precise. Turn it on in the Meta ad account. [L0649, 2019]
- The Shopify course places the same setting in Events Manager > Settings, next to Automatic website matching. Use Events Manager, and keep website matching on. [L1027, 2026]
- A new Meta pixel knows nothing about who buys. It learns from view, cart, checkout and purchase events, so more events on the store mean faster and better audience learning. [L0649, 2019]

### Conversion Event for Optimization

- For a new store, set the Meta ads conversion event to Purchase from the start, because the goal is sales. This is the presenter's experience. Some advertisers start with Add to Cart. [L0642, undated]
- Set up the new Facebook pixel site-wide on the store. The optimization event options include Checkouts, Registrations, Leads, Key page views, Adds to cart, and other website conversions. Adds to Cart was reported as the strongest option. [L0643, 2015]
- Optimizing for Adds to Cart gave a better actual purchase conversion rate than optimizing for purchases. It only pays off if you also have a follow-up sequence for people who added to cart. Even if you already run ads, switch the optimization event to Adds to Cart. [L0643, 2015]
- Choose between the two: Purchase from the start (for a new store, per the presenter's experience) or Adds to Cart (when you have a follow-up sequence for cart abandoners). [L0642, undated; L0643, 2015]

### One Pixel per Product or per Niche

Sources differ on when to split pixels. The split points are given below, each with its own condition.

| Situation | Pixel rule | Source |
|---|---|---|
| Two valid strategies | (1) One pixel per product, which is stricter and gives clean data per product. (2) Several products under one pixel, with a new pixel after 3 to 5 failed tests. Both are accepted; the choice depends on how strict you want the test to be. | [L0348, 2026] |
| Testing 3 to 5 failed products of different niches | Create a new pixel and start a new data set for the next products. | [L0348, 2026] |
| Same niche, all product tests | Run all product tests on the same pixel. | [L0349, 2024; L0639, 2023] |
| Winner found and a new product in a different niche | Use a different pixel. | [L0349, 2024] |
| Switching to a completely different niche | Install a new pixel. The same ad account can usually stay. | [L1172, 2023+] |
| Five products in one niche test | Use one pixel for all five, so the pixel does not change each time a product is added. | [L1194, undated] |
| Product takes off profitably at about 100 conversions | Create a new pixel for that product. Below about 100 conversions, the pixel has too little data for a change to make a difference. | [L0639, 2023] |
| Fewer than about 5 sales per day | Sharing one pixel between products is acceptable while testing. | [L0645, 2023] |
| About 10 to 15 total sales | Sharing one pixel across different niches is acceptable. With more data, keep one pixel per niche. | [L1217, 2023+] |
| Purchase volume about 100 or more | Share one pixel until the store reaches about 100 or more purchases. | [L1177, 2023] |
| 20 purchases | Too little data to need a second pixel. | [L1177, 2023] |

- Keep one pixel per niche so its data stays focused on that niche. Keep purchase data from one niche separate from another. Products within the same niche can share one pixel while testing. [L0639, 2023; L0645, 2023]
- Keep one pixel while testing. The pixel only starts to optimize well after roughly 10 sales for a product. Until then, Facebook's own targeting does most of the work, so the pixel matters less during early tests. [L0639, 2023; L0645, 2023]
- In the first test phase, the pixel mainly collects data and does not drive sales. Pixel data becomes important once a product has real sales. [L1217, 2023+]
- In the early stage, with only a few sales, several products can share one ad account and one pixel. The pixel is still gathering data at this point rather than driving sales. [L1217, 2023+]
- A pixel becomes tied to the niche it has been used for over months. When switching to a completely different niche, install a new pixel. [L1172, 2023+]
- A new pixel gives Meta's algorithm a clean data record, so it learns faster than from a pixel with many failed tests attached. Creating a new pixel after failures restarts the learning process. [L0348, 2026]
- Keep the same pixel when testing products in the same niche. Consider a new pixel when switching to a different niche. Both approaches can work. A new pixel gives more separate data to compare. [L1316, 2024+]
- Each new ad account needs its own new pixel. [L1194, undated]
- Sharing a dataset with another ad account is possible through Share With an Ad Account. [L1027, 2026]

### Testing the Pixel: Test Events and Pixel Helper

**Meta Pixel Helper**

- Meta Pixel Helper is a free Google Chrome extension. It shows which Meta pixel is installed on the current page, the pixel ID, and the events it fires along with the page URL. (2025) [L0837, 2025]
- Use it to debug pixel tracking before relying on the data. It shows whether the Meta Pixel is installed on a page and whether it is firing correctly. (2025) [L0844, 2025]
- Purchase test with Pixel Helper:
  1. Install Meta Pixel Helper in Google Chrome. [L0837, 2025]
  2. Create a temporary product priced at about $1 in your Shopify store and buy it. [L0837, 2025]
  3. On the order confirmation page, open the extension and check that a Purchase event was triggered. [L0837, 2025]
  4. If no Purchase event appears, the integration between Shopify and Meta is at fault. Check the Facebook & Instagram sales channel settings in Shopify. [L0837, 2025]

**Test events in Events Manager**

- Test events procedure:
  1. Open the dataset, go to Test events, enter the website URL and click Test events. [L1027, 2026]
  2. Take actions on the site, such as View content, Add to cart, Initiate checkout or a simulated purchase. [L1027, 2026]
  3. The events should appear in the test view, typically within a few seconds. A status of Active confirms the pixel works. [L1027, 2026]
  4. Events can take up to 30 minutes to show in the normal overview. [L1027, 2026]
- Test events procedure with test_event_code:
  1. Open the pixel in Events Manager and go to Test events. [L1028, 2026]
  2. Copy the unique test_event_code shown on the page. [L1028, 2026]
  3. For server-side events, open the Graph API Explorer, make sure all parameters match the payload shown on the page, submit the request and return to the Test events page. [L1028, 2026]
  4. For website events, enter your website URL in the field and click Test events. [L1028, 2026]
  5. Keep the Test events page open in Events Manager during the whole test. [L1028, 2026]
  6. Open your store and perform the actions you want to verify, such as viewing a product, adding to cart and starting checkout. [L1028, 2026]
  7. Check the events list: each action should appear as its event (for example Add to Cart or Initiate Checkout). Expect delays of up to 30 minutes before events show in the chart. [L1028, 2026]
- Do not treat the setup as finished until the test events appear in Events Manager. A connection that looks linked in Shopify can still send no usable events if the pixel or test steps were skipped. [L1028, 2026]
- Test events show how the site and server events are set up, but test behaviour can differ from live traffic. Personal ad settings do not affect test data, so a passing test does not show that the ads are optimized. [L1028, 2026]


Part 8 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/07-ban-recovery-appeals-and-meta-support.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/09-product-catalog-and-commerce-manager-feed.md
