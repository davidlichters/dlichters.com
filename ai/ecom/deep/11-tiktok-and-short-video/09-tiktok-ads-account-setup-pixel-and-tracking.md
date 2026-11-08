<!-- part of ecom/deep/11-tiktok-and-short-video.md -->
Part 9 of 14 of "11. TikTok and Short Video: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video.md · Previous: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/08-engagement-comments-and-driving-traffic-to-the-sto.md · Next: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/10-coins-spark-ads-and-paid-boosting-of-organic-video.md

## TikTok Ads Account Setup, Pixel and Tracking

### Account Types and Target Countries

- Personal ad accounts showed higher CPMs than agency accounts running the same ad setup. The course attributes this likely to trust factors. [L0296, 2021+]
- Each target country generally needs its own TikTok ad account registered in that market, because an account from one country usually cannot target audiences in another. Plan separate accounts for Australia, New Zealand, the UK or European markets before launching tests there. [L1377, 2022+]
- TikTok Ads Manager only lets advertisers target their own country. A UK advertiser who wants US ads has to use a VPN on a computer to access a US-region ads account. This setup was described as unreliable and prone to issues, so use it only for ads and not for organic accounts. [L1186, 2022]
- Run ads activity from a desktop computer rather than the phone, because the phone version of Ads Manager does not work for this setup. Keeping ad activity on desktop also keeps the phone separate from the ad account. [L1186, 2022]

### Browser, Email and Payment Settings

- Create and run new TikTok ad accounts in Safari or another privacy-focused browser rather than Google Chrome, because the course operator saw more account suspensions when using Chrome with extensions. Use a different browser for each new account you set up. [L1377, 2022+]
- Use a new email address for each new TikTok ad account rather than one that has already run ads on TikTok. In the course's experience, TikTok sent verification codes to the email address and not by text message. [L1377, 2022+]
- Browser advice differs by source and case:

| Source | Browser | When it applies | Ids |
|---|---|---|---|
| Safari or another privacy-focused browser, not Chrome with extensions | Each new account in its own browser | General account creation | [L1377, 2022+] |
| Brave instead of Google Chrome | Different from your usual browser | Self-created account after the old one is blocked | [L0562, undated] |
| Google Chrome, fully quit and reopened | Chrome, with any TikTok sales channel removed first | US targeting from a blocked location such as India | [L1440, 2021+] |

### Creating an Account Yourself

- Use this procedure to create a new TikTok ad account yourself when the old one is blocked:
  1. Connect a VPN set to the target country, such as the United States.
  2. Log in with a different browser from your usual one, such as Brave instead of Google Chrome.
  3. Create a new TikTok ad account from that browser session.

  [L0562, undated]

- Use TikTok sales channel in the US by:
  1. Delete the sales channel integration.
  2. Clear browser cache or use incognito mode.
  3. Open NordVPN and connect to a US server.
  4. Download and add TikTok sales channel again.
  5. Create a new ad account.

  This workaround allows non-US users to run ads to US audiences. [L0309, 2024+]

- Creating a TikTok ads account for US targeting when the business is based in India or another blocked location: Add TikTok as a sales channel in Shopify, creating a new advertising account, enter a US phone number, and connect a PayPal account for payment. The VPN must be set to the US and Chrome must be fully quit and reopened, with any TikTok sales channel removed first. [L1440, 2021+]

### Creating an Account Through a Provider

- Litfix.com is a provider that creates TikTok ad accounts in a chosen country with your email and payment details, then sends you the login. It is used to get an ad account in a target market, such as the United States, Europe or Australia, without setting one up yourself. [L0562, undated]
- A TikTok ad account created by a provider in a chosen country, such as the US, can be logged into from the seller's own location without a VPN, because the country is fixed when the account is created. Providers usually sell separate accounts per market, such as US, Europe or Australia, so each new target market needs its own account. A self-created account instead requires logging in through a VPN set to the target country. [L0562, undated]
- For TikTok ads from a country where you cannot create ad accounts, a third-party service can create a TikTok ad account for a chosen country (US, Australia, or EU, where the whole of Europe can be targeted). Choose ad account currency US dollars and pay via automatic payment. [L1184, 2023+]
- Third-party account creation steps:
  1. Open the third-party TikTok ad account service.
  2. Choose the ad account type: US, Australia, or EU.
  3. Enter a new email address (a new Gmail account per ad account is recommended, since a password is required).
  4. Enter the store URL.
  5. Enter a phone number to receive an SMS.
  6. Select the currency (US dollars) and the payment method.
  7. Pay; the account is confirmed by email within two days.

  [L1184, 2023+]

### Business Documents

- For a US TikTok ad account, the operator reported that few strict business documents were needed, and the store name could be entered as the business name. Requirements for Australian accounts were not confirmed, so check which business fields are mandatory before creating the account. [L1377, 2022+]

### Ads Manager Setup with Shopify

- Creating a TikTok Ads account and connecting it to a Shopify store with a pixel, in order:
  1. Go to ads.tiktok.com and click Create.
  2. Fill in the personal information and accept the policy.
  3. Choose the payment method: Manual Payment (top up the ads account with a budget) or Automatic Payment (card is charged automatically when a threshold is reached); Automatic Payment is the recommended choice.
  4. Click Go to Ads Manager.
  5. Optionally use the Dashboard to review settings and the business overview.
  6. Change the business or user settings via the account icon at the top right (User Settings: email, username, password, notifications).
  7. Open Tools > Events > Manage Web Events.
  8. Click Create Pixel and choose Partner Setup, then Next.
  9. Select Shopify as platform, open the Shopify app and install the TikTok app in the store.
  10. Scroll down, check that everything is done and click Add Sales Channel.
  11. Click Setup Now and connect the business account via Connect Business Manager.
  12. Set Data Sharing to Maximum, check that the pixel is shown as created, then click Confirm.
  13. Click Finish Setup.
  14. Wait for the review, which takes up to 24 hours.
  15. When activated, the status shows 'TikTok Marketing' as Active.

  [L1373, undated]

- In TikTok Ads Manager, the account icon at the top right opens User Settings, where you can edit the email address, username, password and notifications. If the account holds several business accounts, the business can be switched from the same top-right area. [L1373, undated]

### Shopify and Pixel Connection

- Install the TikTok Pixel Helper Shopify app and set up TikTok as a sales channel, which connects the pixel automatically; then connect the pixel to the store and to the TikTok Business Manager ad account. [L1376, undated]
- Sources disagree on linking the ads account to the Shopify store:

| Position | Advice | When it applies | Ids |
|---|---|---|---|
| Link the account | Add TikTok as a sales channel and connect the pixel, as in the setup steps | Standard path for connecting the pixel to Shopify | [L1373, undated; L1376, undated; L1440, 2021+] |
| Do not link the account | One seller saw a sudden decline in views after linking and then kept accounts unlinked, creating a second account when a link was needed | Experience of one seller; weigh it against the standard path | [L1381, 2022] |

### Pixel Creation and Renewal

- When testing TikTok ads with a new product, create a new pixel for each product. Even for running products, change the pixel every three to seven days, because TikTok pixels wear out after a few days. [L1440, 2021+]
- The connection of pixels to a store is not reliable any longer: a strategy of not connecting the pixel is considered outdated and not working as well as it used to. [L1440, 2021+]
- A new pixel gets a grace period in which early traffic is cheaper, so performance can look better briefly. Renewing pixels every day is not a sustainable approach. [L1440, 2021+]

### Backup and Multiple Accounts

- For TikTok ads, several ad accounts can be run from the same registered company setup by creating a new account with a different email address. The Shopify connection is changed in the same way, and the business entity itself does not need to change. [L1440, 2021+]

### Ban Risks

- TikTok ad accounts created from a foreign location via a new device and VPN can get flagged. The lesson's phone-verification workaround with random US numbers or US number services at 2-3 USD per month also carries a risk of account restriction. [L0363, 2022+]
- Logging into a TikTok ad account from a country different from the one it was set up in can cause shadow bans and suspensions again. Use a VPN in the target country or a provider-set account, matching the login location as closely as possible. [L0562, undated]
- A prepaid card from the target country can be used to pay for ads from a country where the store is located; the presenter mentions this as a workaround but notes it is not recommended. [L1184, 2023+]


Part 9 of 14 of "11. TikTok and Short Video: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video.md · Previous: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/08-engagement-comments-and-driving-traffic-to-the-sto.md · Next: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/10-coins-spark-ads-and-paid-boosting-of-organic-video.md
