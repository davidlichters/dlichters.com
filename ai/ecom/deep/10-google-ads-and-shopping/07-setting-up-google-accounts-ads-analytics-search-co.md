<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 7 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/06-pre-launch-compliance-and-store-readiness.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/08-shopify-without-the-feed-app-conversion-pixel-rout.md

## Setting Up Google Accounts: Ads, Analytics, Search Console, Tag Tracking

### Setup Order and Measurement First

- Build the measurement infrastructure before spending on Google Ads. Sales can only be attributed to specific campaigns, and performance can only be optimised, if that infrastructure exists [L0032, undated].
- Complete this setup before spending on Google Ads [L0032, undated]:
  1. Link your Google Ads account to Google Analytics.
  2. Configure basic retargeting audiences and verify they are capturing visitor data.
  3. Activate conversion tracking and confirm it is recording purchase transactions. [L0032, undated]
- Set up Google Ads, Google Shopping, Google Analytics and Google Merchant Center together from the first day of the store [L0715, 2020-26].
- Three components are required before running Google Ads in this approach. All three accounts are free to set up [L0714, 2020-26]:
  1. Google Analytics, to track website activity and build audiences of visitors who interacted in certain ways, for remarketing.
  2. Google Merchant Center, where all products are submitted to Google.
  3. Google Ads account, where the actual ad campaigns are created. [L0714, 2020-26]
- The same Google Analytics, Merchant Center and Google Ads accounts that enable paid campaigns also provide free Google traffic, so correct setup supports both paid and free Google visibility [L0714, 2020-26].
- Google traffic setup, in order [L0393, undated]:
  1. Sign up for Google Ads, Google Search Console and Google Merchant Center.
  2. Create your first Google Shopping campaign and your first Google remarketing campaign. [L0393, undated]
- Google Search Console and Google Merchant Center are set up alongside Google Ads. Merchant Center supplies the product feed that Google Shopping campaigns use [L0393, undated]. Merchant Center feeds product data to Google Shopping campaigns, while Search Console covers search visibility of the store site [L0532, undated].
- Traffic setup on Google and Bing, in order (Bing steps are not covered in these units) [L0532, undated]:
  1. Sign up for Google Ads, Google Search Console and Google Merchant Center.
  2. Create the first Google Shopping and remarketing campaigns.
  3. Sign up for Bing Ads, Bing Webmaster Tools and Microsoft Merchant Center.
  4. Create the first Bing Shopping campaign. [L0532, undated]
- Account count, with a conflict in the sources:
  - A new store typically needs four Google accounts: Google Ads, Google Merchant Center, Google Search Console and Google Analytics [L0857, 2025].
  - A Shopify store launched with Google Shopping is described as needing four accounts or connections, but the unit lists three: Shopify with Google Analytics, Google Merchant Center and Google Ads. The Google Ads account is the first marketing channel and is focused on Google Shopping [L1065, 2021-22].
- Use the build-phase module on Google Ads setup even for an established business if existing campaigns are not performing as expected, so the account setup can be checked and corrected [L1495, 2021-22].

### One Google Identity and One Email

- Create a dedicated business Google account email, not your personal primary Gmail [L0358, 2020].
- Use that same email for Gmail, Google Analytics, Google Search Console (formerly Webmaster Tools), Google Merchant Center and Google Ads, so the properties can link and share data [L0358, 2020].
- Using the same email for Google Ads, Google Analytics and Google Merchant Center lets the accounts detect each other, which removes manual permissions and reduces setup errors [L0184, undated].
- Google links the accounts with one click only when they share one owner email [L0714, 2020-26].
- Use the same email for all three accounts (Analytics, Merchant Center, Google Ads) when setting them up in this order [L0714, 2020-26]:
  1. Create a Google Analytics account to track website activity and to build visitor audiences for remarketing.
  2. Create a Google Merchant Center account and submit all store products to it.
  3. Create a Google Ads account to build the ad campaigns.
  Use the same email address for all three accounts so Google can link them with one click and let data pass between them. [L0714, 2020-26]
- Use the same email for Google Ads, Merchant Center and Google Analytics, because Data Manager then lists the matching accounts automatically when you connect products [L0718, 2020-26].
- Use the same Google Workspace email for Merchant Center, Google Analytics and Google Search Console so the platforms can connect. Domain verification is then completed through Search Console automatically [L0729, 2020-26].
- Log in to Google Ads with the same Google email used for Search Console and Analytics, so all Google properties stay under one identity [L0717, 2020-26]. Using a different address splits the properties across separate identities and makes the setup inconsistent [L0717, 2020-26].
- The Google Ads Linked accounts screen and the Analytics Google Ad Links screen only list Google Ads accounts tied to the same Google email as the Analytics account. Use one email for Google Analytics, Search Console and Google Ads [L1520, 2020-26].
- Create the Google Ads account by logging in with your Google Workspace email address [L0184, undated].
- Create the Merchant Center and Google Ads accounts with the owner's company email as admin, while customer-facing contact details use the store's customer service email [L1088, 2020].
- If the Google Ads account is created with a different email than Google Analytics, either create a new Google Analytics account or create a new Google Ads account using the Analytics email, depending on how much setup is already done [L0358, 2020].
- The main email of an existing Google Ads account cannot be changed. You can add another user as admin with full access [L0358, 2020].

### Creating the Google Ads Account in Expert Mode

- Create the account at ads.google.com [L0027, undated].
- Create the Google Ads account first, without building any campaign. Campaign creation comes later, after the account is configured [L0717, 2020-26].
- Enter the business name and website, click Next, select Skip wherever possible, and choose Leave campaign creation to avoid Google's forced campaign setup attempt [L0184, undated].
- Use the standard sign-up, not AdWords Express, if you plan to optimise campaigns. Express removes most manual control features [L0716, 2020-26].
- Google has renamed AdWords to Google Ads and changes its sign-up flow often, so screens may differ. Follow the logic (standard sign-up, control over settings, billing setup) rather than exact button positions [L0716, 2020-26]. Both names refer to the same product today [L0726, 2021-22].
- Avoid the automated goal-based options offered during sign-up, because they reduce manual control over targeting and websites [L0716, 2020-26].
- Do not let the wizard generate AI ads or accept automated AI features during setup. Generated ads are low quality and the automation tends to consume budget quickly [L0718, 2020-26].
- Skip the AI-generated ad questions, skip linking additional accounts, skip the goal selection, and choose the option to leave campaign creation [L0718, 2020-26].
- Do not build any campaign at account creation. Google will keep prompting you to create a campaign after the account exists. Ignore these prompts until your planning, research and campaign setup are ready [L0716, 2020-26].
- Do not use the simple guided Google Ads setup for a high-ticket dropshipping business. Google earns most of its money from ads, so its recommendations may favour Google over your margins. Goals such as getting more calls do not reflect a sound business objective [L0726, 2021-22].
- Enter the business address in the Google account used for Google Ads [L0696, 2020-26].
- Create a separate Google Ads account for each business. If the login already shows an existing account, choose Create new Google Ads account [L0717, 2020-26].
- A new business needs a new Google Ads account. An old account can be left alone or have its campaigns deleted, and the historical data stays [L1092, 2022].
- If you already have a working Google Ads account, do not repeat the account setup. The account only needs to be created once per business [L0716, 2020-26].
- After submitting business information, Google shows a completion message and opens an account with no campaigns. This empty state is expected, and campaigns are added later [L0717, 2020-26].
- Once the account is created, leave it without a campaign and mark the setup as complete [L0717, 2020-26].
- Log in and start from the Expert Mode wizard. Click Switch to expert mode instead of continuing in easy mode, which asks about the main advertising goal. Then click Create an account without a campaign [L0717, 2020-26].
- Standard account creation, step by step [L0716, 2020-26]:
  1. Search for Google Ads (or AdWords) and open the sign-up page.
  2. Select the standard sign-up, not AdWords Express.
  3. Skip the first campaign by choosing the option to create a campaign later.
  4. Enter the billing information and select the currency, which cannot be changed later.
  5. Enter the customer info: Individual or Business, and for a business the business name and address.
  6. Choose automatic payments and enter the credit card details.
  7. Submit the payment details.
  8. If the page is stuck on start reaching people, refresh the page and continue the billing setup.
  9. Open the billing settings and confirm that the account, the payment method and the billing details are saved. [L0716, 2020-26]
- Expert-mode account creation with the coupon, as one run [L0717, 2020-26]:
  1. Go to ads.google.com and open the coupon page for your country.
  2. Enter your email and click Get the offer code. Wait for the code by email (up to one minute).
  3. Sign in to Google Ads with the same email used for Google Search Console and Google Analytics.
  4. Click Switch to expert mode in the setup wizard.
  5. Click Create an account without a campaign.
  6. Enter the billing country, time zone (keep it consistent with other Google properties) and currency.
  7. Click Submit and confirm the account setup is complete.
  8. Later, to redeem the coupon: click the wrench icon (Tools and settings), open Billing and payments, add a payment method, then open Manage promotional codes and enter the code. [L0717, 2020-26]
- Full wizard run for a new store before Google Shopping ads [L0718, 2020-26]:
  1. Open the account sign-up page via the link provided with the lesson and check which promotional offer is shown, as offers change over time.
  2. Pick the offer that requires the smallest spend (offer A, which gives $500 credit after $500 spend in 60 days) and claim it. If the spend threshold is not reached, nothing is lost apart from the missing credit.
  3. Sign in with the Google Workspace account that will be used for the whole setup.
  4. Enter the business name and the store URL in the wizard and continue.
  5. Skip the AI-generated ad questions, skip linking additional accounts, skip the goal selection, and choose the option to leave campaign creation so no campaign is created.
  6. Confirm billing country, time zone and currency and continue.
  7. Set up the payments profile: choose Individual (or Organization if a company exists, or a proprietor name for sole traders) and add a payment method. A temporary $50 authorisation appears on the card and is usually released within a week or sooner.
  8. Answer no to the offer of personalised guidance from a Google Ads account strategist, then submit to create the account. [L0718, 2020-26]
- Account sign-up forces a first campaign. Do not use it. Skipping through the wizard and leaving campaign creation avoids an unwanted campaign that would otherwise have to be switched off [L0718, 2020-26].
- After payment, the new interface may stay stuck on a start reaching people screen with an error. Refresh the page and open billing settings to check whether the account and payment method were created, because the account can exist despite the error [L0716, 2020-26].
- Verify in billing settings that the account, payment method and billing details are saved [L0716, 2020-26].

### Campaign Prompt During Sign-Up: Three Routes

| Route | What you do | When it applies | Source |
|---|---|---|---|
| A. Skip the campaign (current recommendation in these units) | Leave campaign creation, use Expert Mode, and choose Create an account without a campaign | Default for a new store; avoids an unwanted campaign | [L0717, 2020-26; L0184, undated; L0718, 2020-26] |
| B. Enter a keyword and pause immediately | On first opening, enter any keyword, then pause that campaign at once | Described as the first-open prompt; the unit does not give a date | [L0027, undated] |
| C. Set up a campaign, pause it, and activate after approval | Create the first campaign with a budget, pause it, wait for approval, then activate it when ready to spend | Older approach; also used to read the Google Keyword Tool | [L1068, 2019; L0243, 2019] |

- Route C, the older 2019 approach, in full [L1068, 2019]:
  1. Create the first campaign, which requires setting a budget.
  2. Pause the campaign immediately.
  3. Wait for approval while the account is pending.
  4. Once approved, the paused campaign can be activated when ready to spend. [L1068, 2019]
- Older 2019 advice on early-stage stores: create the account before the first supplier approval (timing is flexible), set up at least one campaign, turn it off immediately to prevent spending, and use the live account to read keyword search volume and cost-per-click estimates in the Google Keyword Tool without ad spend [L0243, 2019].
- Do not opt into the personalised guidance from a Google Ads account strategist offered during payment setup. These reps are sales staff who push automated features and higher spend, so answer no [L0718, 2020-26].

### Time Zone, Currency and Billing Country

| Setting | Can it be changed later? | Guidance | Source |
|---|---|---|---|
| Billing country | No | Must be the country the business operates in. The coupon page is chosen for the country where the billing address is located. | [L0726, 2021-22; L0717, 2020-26] |
| Time zone | No | Two guidelines apply together: (a) it determines when your ads run, so choose it based on the hours and region where you want campaigns active; (b) keep it consistent with Search Console and Analytics (for example Eastern), because mismatched time zones make cross-tool reporting harder | [L0027, undated; L0717, 2020-26] |
| Currency | No | Pick the currency you will pay in. Confirm it is the currency the Shopify store takes payments in | [L0027, undated; L0717, 2020-26; L0726, 2021-22] |

- Time zone and currency are set at account creation and cannot be modified later [L0027, undated].
- In the business information step, set the billing country, time zone and currency, then click Submit [L0717, 2020-26].
- Billing country, time zone and currency in a new account cannot be changed later. Confirm them carefully before submitting [L0726, 2021-22].
- Billing country, time zone and currency must be checked for correctness before continuing, because they are set at account creation [L0718, 2020-26].

### Coupons and Promotional Offers

- Use the official coupon page Google publishes for promotional offers. Select the coupon page for the country where the billing address is located [L0717, 2020-26].
- Outside the US, search google.com for Google Ads Voucher plus the country name, then open the link that leads to the Google Ads page for that country [L0717, 2020-26].
- The coupon page shows offers for the country the visitor is located in. A US visitor sees the US offer. Visitors outside the US should search for Google Ads Voucher plus their country name [L0717, 2020-26].
- Enter an email address on the coupon page and click Get the offer code. The code is sent by email within one minute. You can apply it after the account has started [L0717, 2020-26].
- To redeem a coupon, click the wrench icon at the top (Tools and settings), then Billing and payments. Set up a payment method first, because the promotional code can only be entered after that. Manage promotional codes appears under the payment setup [L0717, 2020-26].
- The coupon can only be applied to the Google Ads account that is linked to the payment method [L0717, 2020-26].
- Do not add billing information to an account you will never use, because it only creates unnecessary setup [L0717, 2020-26].
- Pick the smallest-spend offer when several are shown (offer A in the source gives $500 credit after $500 spend in 60 days). Offers change, so check the sign-up page each time [L0718, 2020-26].

### Payment Method and First Charges

- No money is spent during account setup. The account is created and connected so Google Shopping ads can start once products are approved in free listings. The payment method is only charged after ads run [L0718, 2020-26].
- Choose automatic payments and enter the card details [L0716, 2020-26].
- A temporary $50 authorisation appears on the card during payment setup and is usually released within a week or sooner [L0718, 2020-26].
- In a new Google Ads account, Data Manager only becomes available after a payment method has been entered. Until then the connected-products list is empty, which is normal for a brand-new account [L0718, 2020-26].

### Account Approval and Billing Threshold

- Google Ads usually bills once the account reaches its billing threshold, which is set in the Google Ads settings and was stated as $500 by default in 2019. Accounts can differ, so check the threshold [L1068, 2019].
- Approval for a new account usually takes 1 to 3 days. It can sometimes take 24 hours, and occasionally longer [L1068, 2019].
- Google's sign-up and the first campaign build are described in the Route C steps above, which were written in 2019 [L1068, 2019].

### Linking Google Analytics (GA4) to Google Ads

- Linking Google Ads to a GA4 property lets the two platforms share data, including audiences. Once linked, audiences built in Google Analytics can be used for Google Ads campaigns [L1520, 2020-26].
- Link Google Ads to Google Analytics (GA4) [L1520, 2020-26]:
  1. Log in to Google Analytics.
  2. Click the gear icon in the bottom left corner to open Admin.
  3. In the right-hand column, scroll down to Product links and click Google Ad Links.
  4. Click Link.
  5. Select the Google Ads account that is listed (it must use the same email address).
  6. Click Link again.
  7. Check the new link: it shows the Google Ads account name, the account ID, whether personalised advertising is enabled, and who created the link. [L1520, 2020-26]
- Older Universal Analytics route (2021-22 source, labelled UA): in Google Ads, open Tools and settings, go to Linked accounts, click Google Analytics (UA), turn Auto-tagging on by clicking Enable, check the Analytics property shown, click Link and switch the toggles to green, then click Save [L0726, 2021-22].
- Before linking, make sure the login email in Analytics matches the login email in Google Ads, and that user has Edit access to the property. Otherwise no Analytics property appears for linking [L0726, 2021-22].
- An audience built in Google Analytics does not reach Google Ads unless the Google Ads account is selected as an audience destination before saving [L1390, 2021-22].
- After linking, data only flows between the two platforms once ads have actually been running. A newly linked account shows little or no shared data until the first campaigns go live [L0726, 2021-22].

### Auto-Tagging

- Turn on auto-tagging in Google Ads before linking to Analytics. It makes click data flow into Google Analytics with better detail about ad performance [L0726, 2021-22].
- Auto-tagging is switched on with the Enable button in the Google Analytics linked-accounts section of Google Ads (2021-22 Universal Analytics route) [L0726, 2021-22].

### Data Manager and Merchant Center Link

- Connect Google Analytics and Merchant Center in Google Ads [L0184, undated]:
  1. In Google Ads, navigate to Tools, then Data Manager.
  2. Click Connect product.
  3. Select your existing Google Analytics account and Google Merchant Center account.
  4. Confirm both display as Linked when complete.
- Navigation path: Google Ads, Tools (left navigation), Data Manager, Connect product (blue button), then select Google Analytics and Google Merchant Center. Both must show as linked before moving on [L0718, 2020-26].
- Before the Google Ads setup counts as finished, Data Manager must list Google Analytics and Merchant Center as connected, both showing linked. Accounts signed in with the same email appear as selectable options [L0718, 2020-26].
- Data Manager is empty in a new account until a payment method is entered [L0718, 2020-26].
- Three-step foundation summary before running Google Shopping ads [L0718, 2020-26]:
  1. Create the Google Ads account.
  2. Connect Google Analytics and Google Merchant Center to Google Ads via Data Manager, both showing as linked.
  3. In the Shopping feed app, open Tracking Tags, choose Google dynamic remarketing and conversion tracking, link the Google Ads account, and let the app create all tags. [L0718, 2020-26]

### Conversion Tracking and Tags via the Google Shopping Feed App

- The app named Symprosis in [L0184, undated] and [L0187, undated] is spelled Simprosys in [L0718, 2020-26]. The same app is meant in each case.
- Set up Google tracking for Shopping via the feed app [L0184, undated]:
  1. Open the Symprosis Google Shopping Feed app in Shopify.
  2. Hover over Tracking Tags.
  3. Click Google Dynamic Remarketing and Conversion Tracking.
  4. Connect your newly created Google Ads account and approve permissions.
  5. Enable Conversion tracking and Dynamic remarketing.
  6. The app automatically creates, installs and configures tracking tags and Google Ads events. [L0184, undated]
- In the Shopify product feed app, open tracking tags, hover over it, then click Google dynamic remarketing and conversion tracking. If the setup was made years ago, an update is probably needed because tracking has changed [L0472, 2025].
- A Merchant Center message about a conversion measurement problem usually means conversion tracking is missing or outdated. Check the tracking tags in the product feed app and re-run the Google setup before changing campaigns [L0472, 2025].
- Tracking events (Add to cart, Begin checkout, Purchase) must be pre-installed via the feed app. The Purchase event may appear as Purchase or Purchase in category. Duplicate tags from reinstalling are normal, so select the correct one instead of excluding them [L0187, undated].
- Use the Google Shopping feed app (the one used to set up the Google integration) to create conversion tracking events automatically. Do not install a separate Google Ads pixel app [L0964, 2023].
- Conversion tags are created through the feed app. Disconnect any tags added by someone else through Google Tag Manager before creating new campaigns [L1116, 2025].
- If a previous third party paused old campaigns, re-enable them after the correct tags are reinstalled. If they were deleted, rebuild from scratch [L1116, 2025].
- Only one purchase conversion tag should be primary, and the rest should be secondary. If the purchase tag set up by the feed app is in use, keep it primary, set the others secondary, and avoid running two conflicting tag sets from different apps [L1287, 2025].
- Conversion tracking for Google is set up through the store's Google sales channel process. A separate tracking tag is not needed if that process already sends conversions [L0855, 2023].
- Feed-app tracking tags may initially display as Unverified after setup. This is normal, and they become active once traffic and purchases occur [L0184, undated].
- Google's removal of third-party cookies and iOS tracking limits changes how tracking is set up, not whether Google Ads works. Expect the setup to change but Google Ads to keep working [L1090, 2021].


Part 7 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/06-pre-launch-compliance-and-store-readiness.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/08-shopify-without-the-feed-app-conversion-pixel-rout.md
