<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 14 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/13-google-ads-conversion-tracking.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/15-utm-tracking-and-attribution.md

## Setting up Meta, TikTok, Pinterest and other pixels

### Pixel basics and how Meta uses them

- A Facebook pixel is code on the website that records events such as page views, add to carts and purchases. The data goes back to Meta, where the algorithm uses it to optimise delivery and find similar buyers, and it also shows sales in Ads Manager. [L1024, undated]
- Standard Meta conversion events for an online store are Add to Cart (ATC), Initiate Checkout (IC) and Purchase. They mark the steps a visitor takes toward buying, and Meta uses them to measure performance. [L1021, 2026]
- The pixel only records events that have already happened on the site. At launch it contributes nothing, so early results depend on creative and initial targeting. [L0639, 2023]
- After purchases, the pixel learns who bought and searches for similar users, so early sales from a pocket improve later delivery. A competitor with more pixel data can outperform an identical setup early on. [L0639, 2023]
- In Events Manager, check which events the pixel tracks: website visits, add to cart, initiate checkout and purchases. [L0645, 2023]
- The pixel appears as an audience source. Select it and confirm it shows green, which means it is installed and active. [L1023, 2020-26]
- Purchase events sent from the store to Meta put buyers into the purchase audiences. [L1023, 2020-26]
- Facebook retargeting runs on the Facebook pixel. Once the pixel is installed in the store, the ad setup loads it automatically, so no separate tracking setup is needed in the ad. [L1342, 2021-22]
- Before you judge results such as ROAS or purchases, confirm the Meta pixel is connected to the Shopify store through the Facebook and Instagram channel app. Sales only reach Ads Manager through that connection, so without it the reported numbers are unreliable. [L1024, undated]

### Pixel installation methods

- A tracking pixel is a small script on every page that records visitor activity and actions. Google calls the same thing a tag. All major ad networks use this cookie-based system to fill retargeting lists. [L1390, 2021-22]
- A pixel can be installed by placing the code directly in the site or through Google Tag Manager. Google Tag Manager is not mandatory. It suits extra tags such as Twitter or Taboola. [L1390, 2021-22]

### Shopify-Meta connection, data sharing and Conversions API

- Since Apple's iOS 14.5 update, data sharing from third-party sites such as Shopify to Facebook is heavily restricted on Apple devices. Maximum data sharing is used to recover part of that tracking. [L1318, 2022+]
- In the Facebook shop setup:
  1. Switch on data sharing.
  2. Choose one of three levels: Standard, Enhanced or Maximum.
  3. Select Maximum. [L1318, 2022+]
- Turn on Automatic Advanced Matching during the connection summary before you continue, because the tracking setup needs it. [L1318, 2022+]
- Maximum data sharing combines all data sharing options and uses the Conversions API (CAPI), which sends data directly from Shopify servers to Facebook. Because this path is server-side, ad blockers cannot block the data. [L1318, 2022+]
- Shopify's native Facebook/Meta integration with maximum data sharing enables CAPI alongside the pixel. CAPI sends extra data with each conversion: IP address, email, name and phone number. Shopify reportedly attributes 90% or more of conversions correctly with this setup. [L0666, 2024]
- Enable Shopify's Facebook/Meta integration with maximum data sharing to activate CAPI alongside the pixel. The pixel alone is the least reliable option because it is the most blocked or anonymised. [L0666, 2024]

### Domain verification and Facebook setup order

one source procedure:
1. Verify your domain in Meta, so that data Shopify sends back is recognised as coming from a domain you own. [L1158, 2023]
2. Connect the Meta pixel through the Shopify Meta app. [L1158, 2023]
3. In Events Manager, set up the top aggregated events in this priority: Purchase, Initiate Checkout, Add to Cart, Search, View Content. [L1158, 2023]
4. Add UTM parameters at ad level (campaign name, ad set name, ad name) to every ad URL, so Shopify can record which ad each sale came from. [L1158, 2023]

The sources disagree on the number of events. One says the top **8** aggregated events [L1158, 2023], the other says **5** [L1158, 2023]. Both give the same five events in the same order. The units name only these five, so the other three are not specified here.

### Per-product pixels and pixel strategy

| Situation | Action | Source |
|---|---|---|
| Testing a new product | Create a separate pixel for each product you test | [L1193, 2026] |
| New product, same niche, pixel already has buyer data | Keep the same pixel | [L1476, 2026] |
| Several products in the same niche, one email list | Share one pixel and one list across launches | [L0307, 2023+] |
| Niche changes | Change the pixel | [L1476, 2026] |
| Changing the pixel after every test | Another practitioner advised this; a personal choice | [L1476, 2026] |

- Sharing one pixel across several product tests combines their conversions, so you cannot tell which product sold. [L1193, 2026]
- Keep one central email list of all previous customers and leads. Each new launch uses the same warm audience and pixel data, so campaigns can be profitable immediately without weeks of pixel warm-up. Example: a supplement brand with a shared pixel and a 180K email list generated $250K revenue from $9K ad spend across 4 product launches. [L0307, 2023+]
- A pixel with buying data from the same niche gives Facebook more to work with, which can lower CPMs and make targeting more accurate. [L1476, 2026]
- Old pixels can be deleted to keep the account clean. [L1476, 2026]

#### Creating a test pixel for one product

1. In Shopify, search for the Meta app and open it.
2. Go to the app's Settings page.
3. Click Create new to make a new pixel.
4. Check that the new pixel appears at the top of the list and double-check its ID.
5. Assign people to manage the pixel and give them access to all your profiles.
6. Assign assets: select all your ad accounts.
7. Open Events Manager from the assets view.
8. Rename the pixel to today's date plus the product name.
9. Close Events Manager, refresh the Shopify page, and check that the same pixel is shown. [L1193, 2026]

- Name each test pixel with today's date plus the product name, in the format DDMM plus product name, for example 2404 SleepMask, so you can match it to its test later. [L1193, 2026]
- Meta has moved pixel data assets. To find a Meta Pixel, go to Data Sources and select Datasets, not the older location. [L1193, 2026]
- After creating a pixel, finish installing it on the store, including adding events, before expecting tracking to start. The Events Manager overview shows whether the installation is still open. [L1193, 2026]
- Website events no longer need a domain selected in the ad account. The website events dataset connected to the ad account is tracked by default. URL parameters stay optional. [L1193, 2026]

### Lead-generation pixel

- For a lead pixel, create a pixel with the Leads conversion event and give it a name. Paste the generated code into the head section of the thank-you page, where people land after signing up on the squeeze page. Do not place the pixel on the squeeze page itself. [L0641, 2014]

### TikTok pixel and optimisation

- TikTok's native tracking is unreliable and tracks approximately 50% of actual sales. Use tracking apps or UTM parameters for accurate performance measurement. [L0298, 2023]
- Website conversions require a TikTok pixel. Install it on the Shopify store through the TikTok pixel integration, then log in through TikTok Ads Manager so the pixel connects automatically. You never need to link your TikTok account to get the pixel. [L1383, 2022]
- Set the optimisation event to Complete Payment, not Add to Cart. Add to Cart optimisation reports cheap add-to-cart conversions that look like sales but are not, which misleads you about profitability. Complete Payment usually costs slightly more per result. [L1383, 2022]
- Use Complete Payment as the optimisation event, so TikTok optimises toward completed purchases rather than cheaper actions. [L1378, undated]
- Create multiple pixels and do not connect them to the store. TikTok treats an ad account as new when its pixel shows no recent activity, which can lead to stronger results. [L1378, undated]
- Unlike Facebook, where pixel history and data volume matter most, TikTok handles pixels differently, so creating a new pixel from time to time is recommended. [L1378, undated]

The sources conflict on connection. One says to install the pixel through the store integration for website conversions [L1383, 2022]. Another says to create extra pixels and not connect them to the store [L1378, undated]. The units do not explain how the two fit together.

- Do not run Facebook and TikTok ads for the same product at the same time. The traffic behaves differently and mixes the data in the Shopify and Meta pixel. TikTok traffic often adds to cart and reaches checkout without buying, which makes decisions harder. [L1017, undated]

### Pinterest conversion tracking

- The Pinterest tag, installed through the Shopify marketing section, is the essential tracking step. It records the visits and purchases that Pinterest uses to optimise ads. [L1135, undated]
- Pinterest does not allow conversion campaigns until the account has conversion events. The error appears as a message asking you to increase your conversion events. [L1135, undated]

### Tracking apps and integrations

| Tool | Use | Cost or threshold | Source |
|---|---|---|---|
| UTM tracking | Starting point for smaller stores | None stated | [L1345, 2021+] |
| Trackify | Sales tracking for smaller stores | None stated | [L1345, 2021+] |
| Zapier | Automations that send sales data back to Facebook | About $20-$29 per month | [L1345, 2021+] |
| Cometly | Tracking data and sending it back to Meta | Recommended once monthly revenue is above about $20K-$30K | [L1345, 2021+] |
| Triple Whale | Option for tracking | About $200-$300 per month | [L1345, 2021+] |
| Tixel | TikTok pixel app | Not stated | [L0298, 2023] |
| Triple Whale, Converge, Cometly | Other TikTok pixel tracking apps | Most require paid subscriptions | [L0298, 2023] |
| OptiMonk | Google Analytics integration for popup performance; email notification on each subscription | Not stated | [L1138, 2025-26] |
| Shopify Facebook channel app | Shows how many purchases the server sent compared with what the pixel tracked | Not stated | [L0645, 2023] |


Part 14 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/13-google-ads-conversion-tracking.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/15-utm-tracking-and-attribution.md
