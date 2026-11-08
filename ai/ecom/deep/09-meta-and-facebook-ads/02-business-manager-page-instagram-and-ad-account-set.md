<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 2 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/01-why-meta-platform-basics-and-when-to-start.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/03-domain-verification.md

## Business Manager, Page, Instagram and Ad Account Setup

### Prerequisites and account structure

Five things must be in place before you run Meta ads:

1. A warmed-up personal Facebook profile, so Meta sees a real user and not a bot. [L1021, 2026]
2. A Business Manager, which is the control centre for your ads. [L1021, 2026]
3. An ad account inside the Business Manager, where the ads run. [L1021, 2026]
4. A finished Shopify store with its own domain, because the ads send people there. [L1021, 2026]
5. A warmed-up Facebook Page, which is the face of the brand and makes people trust it more. [L1021, 2026]

Most failed launches come from an incomplete setup, not from the ad itself. Beginners who skip the prerequisites and backend setup often see an ad that does not spend, no data in reports, or errors in the account. [L1021, 2026]

Meta's ad algorithm can consistently find suitable buyers once a pixel feeds it purchase data. The whole account structure must therefore be set up cleanly from the start to avoid problems later. [L1024, undated]

Meta's setup order: [L1288, undated]

1. Create the Facebook ad account. [L1288, undated]
2. Create the Facebook page. [L1288, undated]
3. Set up the pixel: connect the domain, verify the domain, integrate the Shopify conversion API and turn on the data switches for tracking. [L1288, undated]
4. Connect Facebook to Shopify. [L1288, undated]
5. Connect Instagram and populate it with images. [L1288, undated]

A 2024 procedure for the store's account starts with the same core: [L0806, 2024]

1. Create the Business Manager account separately from your personal Facebook account. [L0806, 2024; L1025, 2020-26]
2. Create the ad account inside Business Manager. [L0806, 2024]
3. Create the store's Facebook page inside Business Manager, with you as admin. [L0806, 2024]
4. If the account gets restricted, contact support through facebook.com/business/help and choose Get support. [L0806, 2024]

**Account hierarchy**

| Level | What it is | Source |
|---|---|---|
| Business Manager | Top-level hub under which all business assets sit: Facebook page, Instagram account, ad accounts, pixels and people access. It is where the business account is managed. | [L1024, undated] |
| Ad accounts | Ads Manager manages all ad accounts. An ad account is where campaigns, ad sets and ads are created and analysed. A fresh Business Manager should start with one ad account. | [L1024, undated] |
| Pages and Instagram | Linked to the Business Manager so ads can run on them. | [L1024, undated] |

Use a separate Business Manager for each business you run, rather than reusing one from another business. [L1025, 2020-26; L0638, 2023]

Run ads through a separate Meta Business Manager instead of a personal ad account. The extra layer of separation helps protect the ad account and lowers the chance it gets flagged or restricted. [L1025, 2020-26]

Keep ad accounts and Business Managers separate: one Business Manager for ads and another for each business if needed. Avoid combining multiple stores in a single ad account, because it becomes hard to organise. [L0638, 2023]

Add multiple Facebook pages, Instagram accounts and ad accounts to one admin only when you need to share data between them, such as pixel data for cross-promotion. Unrelated stores should get their own admin. [L0965, 2024]

Add a second trusted person as an admin on Meta Business Manager accounts. This keeps access if the personal profile is restricted or lost. A personal profile is needed to create a new Business Manager, so losing it can block recovery. [L1287, 2025]

### Business Manager: creation

#### Creating the Business Manager

A Business Manager is free to create at business.facebook.com. [L0551, 2020; L0962, 2021; L1025, 2020-26] **

Meta's Business Manager is needed to run ads. [L0962, 2021] **

Creating a Business Manager for a new store : [L1024, undated]

1. Go to business.facebook.com while logged in with your personal Facebook account. [L1024, undated]
2. Click Create an account. [L1024, undated]
3. Enter the business name: use your registered business name, or if you have none, your Shopify store name. [L1024, undated]
4. Enter your name and a business email address. A regular email you check often is acceptable. Avoid using only the Shopify email. [L1024, undated]
5. Click Submit to create the Business Manager. [L1024, undated]

Creating a Business Manager for a new store : [L1025, 2020-26]

1. Open business.facebook.com in a new tab or browser. [L1025, 2020-26]
2. If you have no Business Manager yet, click Create a new account. If you already have one, open the account dropdown in the left navigation and click Create at the top of the list to make a new one for this business. [L1025, 2020-26]
3. Name the Business Manager after your store and enter your business email, preferably the same email as your Google account. [L1025, 2020-26]
4. Log in. The top shows your business name, and the middle section is empty until you add assets. [L1025, 2020-26]

Naming and email rules: [L1025, 2020-26]

- Name the Business Manager after the store.
- Enter a business email address when creating it.
- Use the same email you use for your Google account, so access stays consistent across platforms.

Do not submit a second Business Manager for the same business. If Meta reports that your business may already have a Business Manager, continue with the existing account, because each business should have only one. [L1025, 2020-26]

#### Business Manager limits

The number of ad accounts a Business Manager allows increases with successful payment transactions. The sequence is 1, then 2, then 5, 7, 8 and finally 12 accounts. [L1213, 2023]


If the Business Manager limit blocks creating another ad account, open a new Business Manager at business.facebook.com/create. [L1213, 2023]

Before creating a new ad account, check the current ad account limit in Business Settings: [L1213, 2023]

- If the limit is not reached, create the new ad account there and add payment details. [L1213, 2023]
- If the limit is reached, open a new Business Manager at business.facebook.com/create. [L1213, 2023]

By default, Facebook allows only one Business Manager per personal account. To create a Business Manager, use business.facebook.com/create. If it is blocked, check the business details in Business settings and complete them so the account looks like a real business. [L0638, 2023]

Business info also contains an Ad account creation limit field, which caps how many ad accounts the portfolio can create. Check this value before planning to add more ad accounts under the same business. [L651.022]

#### Navigating Business settings

Meta has renamed Facebook Business Manager to Meta Business Manager. The tools and interface remain largely the same, but menu and screen labels may differ from older guides or recordings. The setup steps stay the same. [L1020, 2020-26; L1025, 2020-26]

Navigation in Business Manager: [L1025, 2020-26]

- The hamburger menu (three lines, top left) expands all tools. Business settings is listed at the top under Shortcuts.
- In Business settings, the sidebar sections such as Accounts and Brand safety are collapsed by default. Expand them before their sub-items appear: Pages, Instagram accounts, Ad accounts and Domains.

Meta Business Suite is used to check the status of ad accounts. Its Home screen shows Ad account performance, alerts and a prompt to go to Business settings if you lack permission to an ad account. [L651.015]

### Business info and contact details

#### Finishing the business basics

Finish the Business Manager basics in this order: [L1024, undated]

1. Open Settings and go to Business settings. [L1024, undated]
2. Open Business info and fill in the business details: legal name, address, phone, website, tax ID if available. [L1024, undated]
3. Start verification via View details. [L1024, undated]
4. Scroll down and turn on two-factor authentication. [L1024, undated]
5. Submit the business information. [L1024, undated]

Enter the legal business name, address, business phone number, website and, if available, the tax ID in Business info. Then use View details to start business verification. [L1024, undated]

Enter the business address in your Facebook business account settings. [L0696, 2020-26]

Business email: open Business info, scroll down to the Business email field and replace it with your own email address. Notifications about the business portfolio are sent to this address. [L651.007]

Business info also contains a Primary business location field that can be edited. [L651.007]

#### Business notifications

In Business settings > Business options, the Pages and notifications toggle decides whether people in the portfolio see Page notifications on Facebook as well as in business tools. When it is off, notifications appear only in business tools. [L651.021]

A separate Business notifications on Facebook toggle controls notifications about the portfolio's Pages on Facebook. [L651.021]

### Facebook Page setup

#### Why a Page is required

Before publishing a warm-up or test ad in a new Meta ad account, make sure a Facebook Page exists. If there is none, create one, then select it along with the matching Instagram account. The ad cannot run without a page. [L0348, 2026]

Before an ad account can publish ads, Ads Manager asks for a verified phone number and a confirmed Facebook Page. [L1027, 2026]

Create at least a basic Facebook page from the beginning, even though it is not required for the first sales. One post per week is enough to show customers that the store is real. ** [L0551, 2020]

A test page can use a placeholder name while the brand is still being tested. [L487.069]

Use a placeholder name for a test page: [L0487, 2018]

- A Facebook business page can be created in about five minutes. [L0487, 2018]
- Set up a matching Instagram account alongside it before posting content for early engagement. [L0487, 2018]

#### Creating the page

There are three routes, and the right one depends on the situation:

| Route | When it applies | Source |
|---|---|---|
| Profile switcher, personal profile | Public page created from your personal profile through the profile switcher. | L651.001 (steps 7 to 8), [L1024, undated] |
| Inside Business Manager | When you create the page from inside Business Manager with you as admin. *(Older method, 2020.)* | L551.034, L806.060 |
| Personal account fallback | When the page category Brand blocks creation from Business Manager. | [L1347, undated] |

Route 1, creating a public Facebook Page from your personal profile: [L1024, undated]

1. Open your Facebook account and click See all profiles. [L1024, undated]
2. Click See all pages. [L1024, undated]
3. Click Create new page. [L1024, undated]
4. Name the page after the store. [L1024, undated]
5. Choose a category that fits the niche, for example Beauty shop or Clothing brand. If no fitting option exists, use Discount shop. [L1024, undated]
6. Write a one- to two-line bio that describes the brand, since it shows under the page name. [L1024, undated]
7. Click Create page, then fill in the rest of the details: Shopify store or website link, phone number, store email, business address. [L1024, undated]
8. Upload a profile picture and a background image. [L1024, undated]

Route 1, one source method: [L651.001]

- Create a public Facebook Page through the profile switcher by choosing See all profiles and then Create Page. [L651.001]
- Upload a profile picture and banner, add a short store description and a website link. [L651.001]

Route 2, creating inside Business Manager (2020 method): [L551.034]

1. Open Facebook Business Manager at business.facebook.com. [L551.034]
2. To create a new page, use the search box at the top right, search for create a page, and create it inside Business Manager. [L551.034]
3. To use a page you already own, search for the page inside Business Manager so Facebook confirms ownership. [L551.034]
4. Assign the page to your Business Manager account, then log in to Business Manager to run ads on it. [L551.034]
5. Do not delete an existing page to fix setup problems. [L551.034]

Route 3, personal account fallback: if the page category Brand blocks creation from Business Manager, create the page from your personal Facebook account instead. The category has little impact, so an unrelated one can be used, as long as the page is connected to your Business Manager and appears when campaigns are created. [L1347, undated]

#### Connecting the page to Business Manager

A Facebook page created from a personal profile is initially owned by that profile, so it must be claimed into the Business Manager. Once linked, the page appears in the left navigation and ads run from that page. [L1025, 2020-26]

Linking an existing page: [L1025, 2020-26; L1024, undated]

1. In Business settings, expand Accounts and click Pages. [L1025, 2020-26]
2. Click Add at the top and choose Add a page. Choose this option when your business already owns the page. The other two options are for requesting access or creating a new page. [L1025, 2020-26]
3. Paste the link or ID of the page, select the page when it appears, and click Add page. [L1024, undated]

Check that the new Page appears under Business settings > Pages, owned by the business portfolio, with your own user assigned at Full control. A Page that is not connected to the portfolio cannot be managed from it. [L651.013]

#### Page health

Filling in the full page information (website link, phone, email, address) raises the page health status from fair to good. A healthier page supports smoother ad delivery. [L1024, undated]

Finish setting up the page with the checklist shown on a new Facebook Page. It lists Category, Personal details, Details, Links, Services, Bio, About you, Pinned details, Book, Offers, Work and Education. Filling these in makes the page look complete to visitors. Start with Category and Links, since those were required or are used most in the setup. [L651.026]

### Instagram account

#### When to connect Instagram

The timing depends on the stage of the brand: [L1171, 2024+; L0487, 2018]

| Stage | Action | Source |
|---|---|---|
| Testing products | Do not connect an Instagram account. Ads still appear on Instagram, and clicking the profile sends the user straight to the website. | [L1171, 2024+] |
| Building a brand | Connect an Instagram account. Buyers check recent posts, follower count and active stories, and a weak profile makes the store look unserious. | [L1171, 2024+] |
| Early engagement | Set up a matching Instagram account alongside the page before posting content. | [L0487, 2018] |

#### Connecting the account

Connecting it to the Business Manager lets ads run on Instagram as well as Facebook. [L1024, undated]

Instagram linking, one source method: [L1025, 2020-26]

1. In Business settings, expand Accounts, click Instagram accounts, click Add and then Connect to Instagram account. [L1025, 2020-26]
2. Log in with the business Instagram account, not a personal one. [L1025, 2020-26]
3. Meta then asks for permission to create content, see messages and comments, create ads and see insights. [L1025, 2020-26]

Instagram linking, one source method: [L1024, undated]

1. In Business settings > Accounts > Instagram accounts, click Add and then Connect your Instagram account. [L1024, undated]
2. Log in to the business Instagram account in the login window that opens. The username should ideally match the store name. [L1024, undated]

one source procedure, short form: [L1025, 2020-26]

1. Expand Accounts and click Instagram accounts, click Add, then click Connect to Instagram account and log in with the business Instagram login. [L1025, 2020-26]

Do not link your personal Instagram account to the Business Manager. Connect only the business Instagram account that was set up for the store. [L1025, 2020-26]

### Ad account

#### Creating the ad account

Create the ad account in Business settings, under Accounts, then Ad accounts, then Add, then Create a new ad account. [L1024, undated; L1025, 2020-26]

one source procedure: [L1024, undated]

1. Enter the ad account name. [L1024, undated]
2. Select the time zone and currency. [L1024, undated]
3. Click Next. [L1024, undated]
4. Choose the business (your own business) and click Create. [L1024, undated]

one source form fields: [L1025, 2020-26]

- Advertising on behalf of (your business name). [L1025, 2020-26]
- Payment method, which is how you will pay Meta once ads run. [L1025, 2020-26]
- Currency. [L1025, 2020-26]
- Ad account name. [L1025, 2020-26]
- Time zone. [L1025, 2020-26]

Then click Create ad account. [L1025, 2020-26]

one source 2020 field summary, for reference: fill in Advertising on behalf of (business name), Payment method, Currency, Ad account name (your store name) and Time zone (the zone you operate in), then click Create ad account. [L1025, 2020-26]

Create a new ad account for each new store, even if an existing ad account is available, so the store gets fresh data and a unique account. When adding an ad account you can claim an existing one, request access to someone else's, or create a new one. [L1025, 2020-26]

#### Naming and time zone

Name the ad account after your store so it is easy to identify. [L1025, 2020-26]

Set the time zone to the zone where you are based and do business, because it is used later when creating promotions. [L1025, 2020-26]

#### Assigning yourself access

After creating the ad account, assign yourself: select your own name in the people list and grant the Manage ad account permission, so you have full access to the account. [L1024, undated]

To give yourself access to an ad account, open Business settings, go to the Ad accounts section in the left sidebar, open the ad account, choose Add people, select your own name and set permissions. [L651.006]

In Business settings > People > Add people, enter the email address of a partner or team member and assign access. The person who created the account is added automatically by default. [L1024, undated]

#### Verifying the account before launch

Before launching, check the ad account name shown after opening Ads Manager from Business settings > All tools. If the name is different, you may be advertising from a personal ad account. Always confirm that it is the business ad account. [L1024, undated]

Check the ad account in Meta Business Suite and confirm it is active, with you assigned to it. [L651.014]

In Business settings > Ad accounts, each ad account row offers Assign people, Create ad, Assign partner and Open in Ads Manager. The ad account ID and owning business appear when you select it. Connected assets on that screen lists the Pages and other assets linked to the ad account. [L651.023]

Before creating ads in Ads Manager, a notice asks you to review Meta's non-discrimination policy and click I accept. The policy prohibits ads that deny opportunities to individuals or groups based on protected characteristics such as race, religion, age, sex or disability. [L651.018]

Ads Manager is where campaigns, ad sets and ads are created and reviewed. A new ad account shows no campaigns and the message that no ads have been created yet, with a Create button to start. [L651.019]

### Currency

Use ad accounts in USD if possible. Meta charges at the same rate for each currency, but USD is the cheapest of USD, EUR and GBP, and Meta prefers spending in USD. Set the ad account currency to USD in Business Manager or the ad account settings, not via the credit card. [L690.019]

The currency setting in the ad account: [L690.021]

- Business Manager or ad account settings > currency > USD. [L690.021]
- The card can remain in another currency, but the bank may charge a foreign conversion fee. [L690.021]

Changing an ad account's currency after creating it does not lose the Meta pixel. The pixel can be attached to any ad account regardless of currency. [L690.020]

In Billing & payments for the ad account, the example showed US Dollars (USD) by default. Set the currency and country to match the business. [L651.016]

### Payment methods

Add a payment method under Billing & payments with the currency and country matching the business. [L651.001]

To add one: open Billing & payments for the ad account, open Payment methods and choose Add payment method. Billing details include business name, address and currency. [L651.016]

A payment method can be skipped at first, but Meta may ask for it when the first ad is published. [L1027, 2026]

A card that is declined or missing blocks all ad spend, because if the payment card fails, ads stop running. Check the card before launch, since an inactive card is a common reason ads do not spend. [L1021, 2026]

### Portfolio invitations and people access

#### Joining a business portfolio

Set up access to a Meta business portfolio in this order: [L651.001]

1. Wait about 6 hours after receiving the business portfolio invitation link before joining. [L651.001, L651.002]
2. Open the invitation link through the proxy assigned to the account, log in with Facebook and enter the verification code from the email if asked. [L651.001, L651.003]
3. Enter your name as it should appear in the business portfolio, continue and accept the invitation. [L651.001]
4. Open Business settings and check the ad accounts listed. The example portfolio had three. [L651.001]
5. Open one ad account, add yourself under Add people and assign permissions. [L651.001]
6. In Business info, replace the business email with your own email address. [L651.001, L651.007]
7. Create a public Facebook Page through the profile switcher. [L651.001]
8. Upload a profile picture and banner, add a short store description and a website link. [L651.001]
9. Confirm the Page is connected under Business settings > Pages. [L651.001]
10. Confirm the ad account shows as active in Meta Business Suite. [L651.001]
11. Add a payment method under Billing & payments with currency and country matching the business. [L651.001]

Wait about 6 hours after receiving the Meta business portfolio invitation link before trying to join it. [L651.002]

Open the invitation link through the proxy assigned to the account and log in with Facebook. If a verification code is requested, it is sent to the email address, so retrieve it there. [L651.003]

When an invitation link is opened while logged out, the Meta business login page offers Log in with Facebook, Log in with Instagram, Create new account and Log in with a managed Meta account. Use the Facebook option to join a business portfolio with a personal Facebook profile. [L651.020]

#### Checking an invitation before accepting

Before accepting a business portfolio invitation, check the business name, country, website and business verification status on the review screen. Decline the invitation if you do not know the business, because accepting adds you to its portfolio. [L651.004]

Once you accept an invitation, your name, email, profile picture and actions taken for the business are visible to other people managing that portfolio. Actions taken on behalf of the business are not shared to your personal profile. [L651.005]

#### Permission levels

For an ad account, the two levels differ as follows: [L651.006, L651.025]

| Level | What it offers |
|---|---|
| Partial access | Manage campaigns (ads), View performance and Manage Creative Hub mockups. [L651.006] |
| Full control | Manage ad accounts, which covers ad account settings, finances and permissions. [L651.006] |

Full control on an ad account is broader and includes ad account settings, finances and permissions. [L651.025]

Full control on a Facebook Page means everything except sensitive actions. A person with Full control can manage the Page but cannot perform the restricted sensitive actions. [L651.025]

Assign ad account access with this difference in mind. [L651.025]


Part 2 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/01-why-meta-platform-basics-and-when-to-start.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/03-domain-verification.md
