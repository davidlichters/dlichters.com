<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 34 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/33-feed-optimization-for-ctr-and-competitor-monitorin.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/35-utm-tracking-for-partners-and-banners.md

## Advertising Platforms, Tracking and Attribution

### Ad Accounts, Ownership and Risk

- A personal ad account has no dedicated support, and once it is banned it is gone. An agency account is the safer choice for scaling, because the agency handles support and replacement accounts. [L0351, 2026]
- The Kuro Network client portal menu lists: Ad Accounts, Request Top-Up, Funds Transfer, Request BM Transfer, Request Unban, Request BM Verification and Support Chat. [L0351, 2026]
- Meta Business Manager (business.facebook.com) is free and holds the Facebook page, Instagram page, pixel and audiences. Audiences are created there under the menu Audiences. [L0649, 2019]
- A Meta Ads account and a Google Ads account, each with remarketing audiences built, are required before a holiday promotion starts. [L1221, 2024+]
- to link Instagram to a Facebook Business account without mixing personal profiles, log in to Facebook Business Manager > Settings > Assets > Add Instagram Account, and select only your business Instagram account. [L0245, 2020]
- Microsoft Advertising is Bing's paid advertising platform and needs its own account. It is separate from Bing Webmaster Tools, which is free and only reports on organic search performance. [L0303, 2020-26]
- Bing offered a start credit of about 75 to 100 USD for new advertisers. Search for the Bing credit offer and sign up through the Microsoft link to claim it. [L1277, 2020]

### Google Ads Tools and Setup

- Google Ads management tools: Keyword Planner for keyword research, Google Ads Settings for campaign configuration, Google Shopping for product listing ads, and AdWords Express for simplified ad creation. [L0020, undated]
- The native Google Ads dashboard is free and needs no add-on. Supermetrics is an add-on that should be treated as paid, so check current pricing before budgeting for it. Start with the native dashboard and add Supermetrics when a combined multi-platform sheet is needed. [L1236, 2015+]
- To create a native Google Ads dashboard:
  1. Open the native Dashboards feature in Google Ads and create a new dashboard, which starts blank. [L1236, 2015+]
  2. Add a widget, for example a chart of conversions by device. [L1236, 2015+]
  3. Resize the widget as needed. [L1236, 2015+]
  4. Add further widgets, such as conversion rate by device, geographic performance by state or a campaign view. [L1236, 2015+]
  5. Click Save. [L1236, 2015+]
  6. Return to the saved dashboard at any time to check metrics and bid adjustments without navigating through campaigns. [L1236, 2015+]
- Google Shopping competitor check: open the Google Analytics Content report (left sidebar) to see the store pages that get the most traffic. Search those top product pages in Google Shopping to check what competitors charge. [L1090, 2021]
- Microsoft Advertising (Bing) can import Google Ads campaigns. Bing does not group multiple sellers of the same product in one listing, so the price comparison that Google shows does not happen there. [L1090, 2021]

### Google Analytics, GA4 and Tracking Foundations

- Google Analytics is a tracking tool that monitors which pages visitors view, which pages they exit from, and how long they stay on the website. [L0293, 2020-26]
- Google Analytics 4 (GA4) tracks website traffic, conversions, user behavior, and creates remarketing audiences. It replaced Universal Analytics. [L0274, 2023]
- Universal Analytics has been phased out in many accounts, so stores should use GA4. Migration from Universal Analytics to GA4 is done through the GA4 migration lesson in the analytics module, and analytics setups should be updated to GA4. [L1114, 2023] (2023)
- Shopify requires GA4 to be connected through the Google channel app. Google removes the old Universal Analytics connection on July 1. Do not rely on the old Universal Analytics entry for tracking. [L0723, 2020-26]
- Conversion Pixel App: a Shopify app that manages the conversion tracking pixel required to link customer purchases to Google Ads campaigns for attribution. [L0032, undated]
- Google and YouTube app: a free Shopify app for connecting Google Analytics to the store. Its free plan is enough for this purpose, and it is now owned by Google LLC. [L0722, 2020-26]
- To link Google Analytics to a Shopify store:
  1. Enter the store URL in the Google Analytics setup. If Google recognizes a Shopify store, it offers Install with Shopify. Click Next to see the instructions. [L0722, 2020-26]
  2. In the Shopify admin, search the Shopify App Store for the Google and YouTube app and choose the free plan. [L0722, 2020-26]
  3. Click Install. [L0722, 2020-26]
  4. After installation, the app appears under Sales Channels in the Shopify admin. [L0722, 2020-26]
  5. In Google Analytics, copy the Tag ID of the data stream. [L0722, 2020-26]
  6. In the Google and YouTube app, follow the Google Analytics connection option one, which uses the guided Shopify video. Do not use option two, because it is more complex. [L0722, 2020-26]
  7. Paste the Tag ID where the setup asks for it. [L0722, 2020-26]
  8. Open the app's Settings and confirm that only one Google Analytics property is connected. [L0722, 2020-26]
- Connect neither Google Ads nor Google Merchant Center through the Google and YouTube app. That app is meant solely for linking Google Analytics. If either Google Ads or Merchant Center appears as connected under that app's Settings, remove the connection. [L0722, 2020-26]
- The person who links Google Analytics to a Shopify store through the Google and YouTube app needs administrator rights on that Google Analytics account. Without them, the guided connection cannot be completed. [L0722, 2020-26]
- The Google channel setup offers to turn on Google emails and to manage Merchant Center from there. Do not activate these during the Google Analytics connection. Set up Merchant Center in its own later step. [L0723, 2020-26]
- Use the feed app's integration for the Google tracking tag. If tracking fails after moving from Universal Analytics to GA4, contact that app's support through its help button with a screenshot. [L1094, 2023] (2023)
- Keep GA4's default user engagement event settings when integrated directly with Shopify, since changing them could affect Shopify analytics. Default user engagement events count visitors after about 10 seconds on the site. [L1094, 2023] (2023)
- Google Analytics real-time view shows how many people are on the site at a given moment. Open it during a large influencer post to see the traffic it generates. [L0790, 2017]
- Check traffic platform by platform in Google Analytics (for example Pinterest traffic under Traffic sources) to see whether traffic and sales come from that platform before judging its cost per click. [L0665, 2022] (2022)
- The Facebook Pixel should be installed on the store before running paid traffic, so that analytics data accumulates in advance. Business Manager at business.facebook.com is free to set up and is where the pixel and analytics are managed. [L1243, 2017]
- Meta Pixel Helper is a browser extension used to check whether the Meta pixel is installed and firing correctly on a store's pages. [L0984, 2024]
- Facebook Pixel Helper is a free Chrome extension that stays in the top-right area of the browser. It shows which Facebook Pixel events fire on any website you open, which lets you examine competitor tracking. [L1243, 2017]
- Before enabling Microsoft UET tracking through the feed app, check the Shopify store for any existing conversion tracking or UET scripts. If you are unsure about an existing script or tag, contact the app's support first. The support link is at the bottom of the setup page under "Get support". [L1036, 2020-26]

### Meta Ads: Creation, Bulk Building and Testing

- Facebook Power Editor is a tool for building and editing many ads in bulk. The lesson places it after the audience and message work, which should be finished first. [L0643, 2015]
- AdEspresso or Qwaya (also called Choir) generates split test variations of text, image and color, and can set up 240 or more variations in about two minutes. Use them for split testing, especially when the monthly ad spend is around $2,000 or more. [L0643, 2015]

### Ad Manage.ai: Media Buying Automation

- Ad Manage.ai automates media buying through batch ad launching, integrated Meta Ads Manager, AI-assisted creative generation, and cross-platform automation rules. It integrates with Dropbox, Google Drive, Frame.io, SharePoint, AIR, Focal, Shade, Iconik, Brandfolder, Canva, Figma, YouTube, and TikTok asset libraries. The platform saves 20-40 hours per month on media management tasks. [L0207, 2025-26]
- Pricing: a 40% discount on the first month is available through partnership. The Essential plan is recommended for starting. The In-House Plus plan offers advanced automation features including cross-platform scaling. [L0207, 2025-26]
- Launch procedure:
  1. Navigate to the Launcher section and select your ad account. [L0207, 2025-26]
  2. Click the blue launch button and select "Select media to use". [L0207, 2025-26]
  3. Choose a content source: Dropbox, Google Drive, Frame.io, YouTube, TikTok asset library, or other integration. [L0207, 2025-26]
  4. Paste a shareable link or browse folders, then select specific files or videos to import. [L0207, 2025-26]
  5. Either add creatives to an existing ad set (if 20 or fewer new ads) or duplicate an existing ad set and rename it. [L0207, 2025-26]
  6. Select launch status: Active (starts spending immediately) or Paused (delays launch). [L0207, 2025-26]
  7. Load a saved copy template or create new copy with primary text, headlines, description, call-to-action, and URL parameters including UTM tracking. [L0207, 2025-26]
  8. Review all settings and click "Launch Ads". [L0207, 2025-26]
  9. Wait approximately one minute for the launch to complete. [L0207, 2025-26]
- Ads launch in approximately one minute on average in Ad Manage.ai, compared to longer sequential steps and upload times in Meta's native Ads Manager. [L0207, 2025-26]
- Click 'Edit in Table Mode' to assign different settings to individual ads within the same batch launch. Card view applies identical settings to all ads. Table Mode lets you customize targeting, budget, or other fields per ad. [L0207, 2025-26]
- The Existing Ads tab in Media Library displays all ads currently in your connected Meta ad account, whether active, paused, or inactive. View their total spend, ad count, and launch status to prevent duplicate creatives and track performance. [L0207, 2025-26]
- When duplicating an ad set, a "Copy ads to new ad set" checkbox appears. Leave it unchecked if you only want to replicate the ad set structure and settings. Check it only if you also want to copy the original ads into the new ad set. [L0207, 2025-26]
- After launching ads in Ad Manage.ai, click "View in Meta" or "View Launch" to open that ad directly in Meta's native Ads Manager. [L0207, 2025-26]
- Ad Manage.ai includes a free Google Sheets plugin for bulk ad launches. Connect your spreadsheet to trigger automatic ad launches directly from Sheets without using the platform interface. [L0207, 2025-26]
- The Inspiration tab's Clone Ad feature operates on a 1,000-credit monthly cycle, resetting every 3 days. Each cloned ad consumes credits. Once depleted, the feature is unavailable until the next cycle resets. [L0207, 2025-26]
- Ad Manage.ai's API reports take 20-30 minutes to refresh with current data from Meta. While loading, the platform displays the most recent available data for Top Creatives, Fatigued Ads, Landing Pages, and custom reports. [L0207, 2025-26]

### TikTok Ads

- TikTok pixel setup: in TikTok Ads Manager, create the pixel under Tools > Events > Manage Web Events, then Create Pixel > Partner Setup > Next > Shopify. Set Data Sharing for the pixel to Maximum. [L1373, undated]
- TikTok Pixel Helper is a Shopify app used to connect the TikTok pixel to a Shopify store. [L1376, undated]
- A new TikTok Ads account is under review after setup and can take up to 24 hours to be activated before campaigns can run. The account is active once TikTok Marketing shows as Active. [L1373, undated]
- TikTok Ads Manager is used to run Spark Ads through a generated authorization code or to upload traditional ads. A separate Ads Manager with its own email is recommended for paid work. [L1381, 2022]
- TikTok UTM procedure, to track ads after iOS tracking limits:
  1. Open a UTM builder for TikTok, for example the one offered by PP Ads. [L1377, 2022+]
  2. Paste the product page URL into the builder. [L1377, 2022+]
  3. Copy the generated URL. [L1377, 2022+]
  4. Paste the generated URL into the website URL field of the TikTok ad. The UTM parameters pass campaign, ad group and ad names to Shopify so you can track ads after iOS tracking limits. [L1377, 2022+]

### Pinterest Ads: Account, Profile and Verification

- Pinterest traffic: Pinterest performs better in some niches than others. It is worth connecting when the store already gets Pinterest traffic or it fits the marketing plan. Connecting it through Shopify is simple and carries little cost, so there is rarely a reason not to try. [L0666, 2024] (2024)
- Pinterest can be connected to a store, and small-budget Pinterest ads can be tested. [L0671, 2021]
- Pinterest business account setup, option A (convert an existing personal account via settings, or create one directly at ads.pinterest.com):
  1. Either convert a normal Pinterest account to a business account via Settings, or go directly to ads.pinterest.com. [L1133, undated]
  2. Fill in the basic business details. [L1133, undated]
  3. Wait until the account shows as ready. [L1133, undated]
- Pinterest business account setup, option B (full checklist):
  1. Either convert your existing personal account to a business account in the account settings, or create a new account at ads.pinterest.com. [L1135, undated]
  2. Enter the profile name as your store name. For a general store, use the general store name. [L1135, undated]
  3. Enter your website link. [L1135, undated]
  4. Select a country: your home country or the US, since Pinterest allows targeting of any country. [L1135, undated]
  5. Select the brand focus. If unsure, choose Other or Home. [L1135, undated]
  6. Select up to three options from the focus list, such as sell more products. [L1135, undated]
  7. Describe the business as online retail or marketplace and select Shopify as the platform. [L1135, undated]
  8. Answer yes to being interested in advertising. [L1135, undated]
  9. Enter your phone number if you want to use Pinterest support, or skip it. [L1135, undated]
- Account setup details: fill in store name, website, country (your own country is fine, there is no need to choose United States only), brand focus (top three options, e.g. "sell more products"), business type "Online retail or marketplace" with Shopify selected, and answer yes to being interested in advertising. [L1134, undated]
- Check the business account: the profile should show the label "Business", and the menu should show an "Ads" section. Profile > Settings is where these details are verified. [L1135, undated]
- The business profile checklist: a business account shows "Business" on the profile and an "Ads" section. [L1134, undated]
- Profile preparation procedure:
  1. Change the username to match the brand or product. [L1133, undated]
  2. Change the profile image. [L1133, undated]
  3. Add a short About Us section. [L1133, undated]
  4. Add a cover image. [L1133, undated]
  5. Claim the website by adding a TXT record to the domain DNS or by adding the HTML tag. [L1133, undated]
- Profile detail: set the username to the store name (or product name), upload the store or brand logo as profile image, write a short "about" section of about five to six lines (this can be generated with ChatGPT), and add a cover image such as a store banner. [L1134, undated]
- Entering a phone number is optional and is not used for verification. Add it only if you want access to Pinterest support for banned accounts or ad insights. Do not rely on their guidance, because their agents are not focused on direct response marketing. [L1135, undated]
- Website verification (HTML tag option):
  1. In Pinterest settings, go to Claimed account, then Claim website, and choose the HTML tag option. [L1134, undated]
  2. Copy the meta tag. [L1134, undated]
  3. Paste it into the Shopify theme file theme.liquid just below the canonical URL line, then save. [L1134, undated]
  4. Return to Pinterest, click Continue, enter the store name and click Verify. [L1134, undated]

### Pinterest Ads: Shopify Connection, Payment and Conversions

- Install the Pinterest app in Shopify:
  1. In Shopify, go to Apps, then App settings, then the Shopify App Store. [L1135, undated]
  2. Search for Pinterest and install the Pinterest app. [L1135, undated]
  3. Connect your Pinterest account through the sales channel. [L1135, undated]
  4. Go to the Marketing section and confirm that the Pinterest tag is installed. This is the key step for tracking. [L1135, undated]
  5. Continue the setup in the app and proceed to billing. [L1135, undated]
- Pinterest setup in Shopify, in order:
  1. Install the Pinterest app from the Shopify App Store and connect the Pinterest account. [L1134, undated]
  2. Add the Sales channel. [L1134, undated]
  3. Go to the Marketing section and confirm the Pinterest tag is installed. This is the key step for tracking. [L1134, undated]
  4. Click continuous setup. [L1134, undated]
  5. Go to ads, then billing, and enter business details. [L1134, undated]
  6. Add a payment method: a credit or debit card or a virtual card. PayPal is not accepted. [L1134, undated]
- Pinterest does not allow listing a product without merchant approval. Merchant approval is a non-essential extra. Rejections often come from weak product descriptions, so a rejected shopping merchant account should not stop the ad setup. [L1134, undated]
- Shopping merchant approval can stay pending or be rejected, often because of product description issues. This blocks product listings but is not required to run Pinterest ads, so it is not a reason to stop. [L1135, undated]
- Enabling conversion campaigns when the error "increase your conversion events" appears:
  1. Open a product page of the store. [L1134, undated]
  2. Open the browser developer tools (right-click > Inspect, or More tools > Developer tools if inspect is disabled). [L1134, undated]
  3. Go to the Console. [L1134, undated]
  4. Paste the provided conversion-trigger code (the code is not reproduced in this unit) and run it 10 to 20 times. [L1134, undated]
  5. Wait 5 to 10 minutes until the conversion event is active and the conversion campaign option appears. [L1134, undated]

### Microsoft Ads (Bing)

- Import from Google Ads: Microsoft Ads can import Google Ads campaigns. Make changes in Google Ads first, where most data and sales are, and sync to Microsoft once a batch of changes is approved. Optionally sync only new updates. [L0968, 2021] (2021)
- Import procedure (2025):
  1. Import your Google Ads campaigns into Microsoft Ads. [L0837, 2025]
  2. Immediately lower the budgets of the imported campaigns, since imports carry over the Google budgets. For example, a $20 per day Google budget should be reduced to $5 per day in Microsoft. [L0837, 2025]
  3. Scale the Microsoft budgets gradually over time. [L0837, 2025]

### Retargeting: ROI Hunter

- ROI Hunter is a Shopify app that sets up dynamic retargeting without coding. Search for the exact name "ROI Hunter" in the Shopify App Store, because a generic search for Shopify dynamic retargeting returns other apps. [L0558, 2020-26]
- ROI Hunter is a free Shopify app, so dynamic retargeting on Google Display Network can be set up without paying for a separate developer or code work. Installing it and syncing it with the store is all that is needed to create the audiences and campaigns. [L0558, 2020-26]
- Do not manage ROI Hunter campaigns from inside Shopify. Make all campaign and budget changes directly in Google Ads, since the app's Shopify side is only for setup and sync. [L0558, 2020-26]

### Break-Even and Pre-Launch Checks

- Dropship Toolkit is a website with a break-even ROAS calculator for dropshipping stores. Enter the selling price, the cost of goods and fulfillment to get the break-even ROAS before setting scaling thresholds. Use it before running ads to check whether a product can be profitable at a given price. [L0642, undated; L0661, undated]

### Attribution and Profit Tracking

Conflict note: sources disagree on when to adopt Triple Whale. One source says to use it for early-stage testing when accuracy matters for budget decisions. Two others say to consider it only once the store is consistently profitable and to compare it with a cheaper option first. Apply the first when verifying metrics before scaling. Apply the second when deciding whether to pay for a tool.

| Tool | Cost | Accuracy (as stated) | Use when | Source ids |
|---|---|---|---|---|
| Triple Whale | $300/month | 80% for sales, ROAS and ad performance | Early-stage testing and verifying metrics before scaling; or, once the store is consistently profitable | [L0309, 2024+; L0694, 2024] |
| Northbeam | $900/month | 100% | Only if the business generates enough profit margin to justify the cost | [L0309, 2024+] |
| Cometly | Not stated | Not reliable | Do not use | [L0309, 2024+] |
| Converge | Possibly lower than Triple Whale | Not stated | Compare with Triple Whale before paying | [L0694, 2024] |
| Free UTM tracking app | Free option | Not stated; UTM data is not perfect either | Cross-check Facebook data against actual sales | [L0694, 2024] |

- Triple Whale is attribution software used to capture precise ad performance metrics when analyzing and iterating creatives. [L0258, undated]
- Triple Whale is a tracking and analytics platform costing $300/month. It is 80% accurate in measuring sales, ROAS, and ad performance. Use it to verify your metrics before scaling ads, as inaccurate tracking wastes budget. [L0309, 2024+]
- Triple Whale is used to track sales and ROAS for winning products. It replaces manual tracking of other ad metrics once a product is clearly profitable. [L1173, undated]
- Cometly is a tracking platform that does not work reliably and wastes money. Do not use it. Choose Triple Whale or Northbeam instead. [L0309, 2024+]
- Northbeam is a tracking platform costing $900/month and providing 100% accuracy. Use it only if your business generates sufficient profit margin to justify the cost. Otherwise, use Triple Whale ($300/month, 80% accuracy) for early-stage testing. [L0309, 2024+]
- Triple Whale is a paid attribution tool that reconciles Facebook-reported sales with real orders. Attribution alternatives such as Converge exist at possibly lower prices. Because the tool costs money, consider it only once the store is consistently profitable, and compare it with a cheaper option first. [L0694, 2024]
- A UTM tracking app with a free option can be used to cross-check Facebook data against actual sales, because UTM data is not perfect either but is a useful second source. A paid attribution tool such as Triple Whale is worth considering once the store is consistently profitable, and cheaper alternatives exist. [L0694, 2024]
- True Profit shows profit per campaign and can be used on its highest plan, reported at about $150 per month. It helps make more calculated scaling decisions but is not essential at the beginning. [L1476, 2026]
- Conversios GA4 app connects Google Analytics 4 and supports Google SEO tracking. It is needed when scaling, not at the foundation stage. Microsoft Clarity is an additional analytics tool shown in Customer events. [L1327, 2026]
- Unique coupons, dedicated phone numbers or separate addresses for each ad allow every response to be traced to its source. Use them to compare headlines, publications and offers on a cost-per-customer basis. [L1261, undated]
- Telephone response lines are more convenient for many people than mailing a coupon, and they can be measured as a separate response channel. Include a phone option in offers and track it separately. [L1261, undated]


Part 34 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/33-feed-optimization-for-ctr-and-competitor-monitorin.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/35-utm-tracking-for-partners-and-banners.md
