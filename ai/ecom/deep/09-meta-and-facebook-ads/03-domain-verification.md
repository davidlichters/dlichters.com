<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 3 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/02-business-manager-page-instagram-and-ad-account-set.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/04-account-trust-warm-up-and-ban-prevention.md

### Domain verification

#### Why verify

Domain verification shows Meta that you own the website sending traffic and conversion data. Because data is shared between the site and Meta, this ownership check is what allows the data to be passed through. [L1025, 2020-26]

A domain only needs to be verified once. The example account had several verified because it ran ads through several domains. An agency model would add domains differently. [L1025, 2020-26]

Of the three domain verification options Meta offers, DNS verification was used. It provides a TXT record value that must be added to the domain's DNS configuration. [L1025, 2020-26]

#### Procedure
1. Expand Brand safety in Business settings and click Domains. [L1025, 2020-26]
2. Click Add, choose Create a new domain, type the store URL starting with https and click Add. [L1025, 2020-26]
3. Choose the DNS verification option and copy the text value shown. [L1025, 2020-26]
4. Open the domain settings of your store. For a domain bought through Shopify, go to Sales channels > Online store > Domains. Otherwise, go to the site where the domain is hosted. Select the main domain, not the myshopify.com address, then click Manage and open DNS settings. [L1025, 2020-26]
5. Click Add custom record, choose TXT, leave the Name as @, paste the copied value into the text value field and click Confirm. [L1025, 2020-26]
6. Return to Business Manager, make sure you are still in the DNS verification section, and click Verify. If it shows a mismatch, wait a few minutes and try again. [L1025, 2020-26]
7. After it verifies, refresh the page to confirm the domain shows as verified. [L1025, 2020-26]

#### Common errors and timing

- Adding the DNS TXT record in the wrong place is a common error. Enter the main domain, not the myshopify.com address, or the record will not be found. [L1025, 2020-26]
- After adding the record, go back to the DNS verification option before clicking Verify. Verifying from the meta tag section fails. [L1025, 2020-26]
- After adding a DNS TXT record, Meta may report a mismatch on the first Verify attempt. [L1025, 2020-26]
- Documentation says DNS changes can take up to 72 hours to spread. In practice, it can take only a few minutes. In one setup, verification went through after about 2 minutes. [L1025, 2020-26]

### Business Manager security and recovery

Turn on two-factor authentication when finishing the Business Manager basics. [L1024, undated]

Add a second trusted person as an admin, so the business keeps access if the personal profile is restricted or lost. [L1287, 2025]

If the account gets restricted, contact support through facebook.com/business/help and choose Get support. [L806.060]

### Tax on advertising

Meta applies a tax to advertising when the ad account is registered in the UK or in EU countries. The rate depends on each country. Ad account country settings were discussed as a way to avoid this. The speaker warned that this should be verified with a tax professional, as the rules are legal and tax questions. [L552.019]
A "business limit reached" message when creating a new ad account can come from many pages linked to one business. Removing pages from the Business Manager is one option to avoid deleting them, though the speaker had not tested it. [L1213, 2023]

#### Further details

Facebook traffic setup, in order:
1. Sign up for Facebook Business Manager.
2. Create your first Facebook remarketing campaign.
[L0393, undated]

- Facebook Business Manager is the account hub for Facebook and Instagram ads, and it must exist before the first Facebook remarketing campaign is created. Facebook and Instagram business pages are created during store setup. [L0393, undated]

Traffic setup on Facebook:
1. Sign up for Facebook Business Manager.
2. Create the first Facebook remarketing campaign.
[L0532, undated]

- Facebook Business Manager is the account hub for managing Facebook and Instagram pages, ad accounts and campaigns. [L0532, undated]

1. Open Facebook Business Manager at business.facebook.com.
2. To create a new page, use the search box at the top right, search for create a page, and create it inside Business Manager.
3. To use a page you already own, search for the page inside Business Manager so Facebook confirms ownership.
4. Assign the page to your Business Manager account, then log in to Business Manager to run ads on it.
5. Do not delete an existing page to fix setup problems.
[L0551, 2020]

- Meta applies a tax to advertising when the ad account is registered in the UK or in EU countries, depending on the rate in each country. Ad account country settings were discussed as a way to avoid this; the speaker warned this should be verified with a tax professional, as the rules are legal and tax questions. [L0552, 2023]

- Set up a Meta Business Manager account in this order: 1) Wait about 6 hours after receiving the business portfolio invitation link before joining. 2) Open the invitation link through the proxy assigned to the account, log in with Facebook, and enter the verification code from the email if asked. 3) Enter your name as it should appear in the business portfolio, continue, and accept the invitation. 4) Open Business settings and check the ad accounts listed; the example portfolio had three. 5) Open one ad account, add yourself under Add people, and assign permissions. 6) In Business info, replace the business email with your own email address. 7) Create a public Facebook Page through the profile switcher by choosing See all profiles and then Create Page. 8) Upload a profile picture and banner, add a short store description and a website link. 9) Confirm the Page is connected under Business settings > Pages. 10) Confirm the ad account shows as active in Meta Business Suite. 11) Add a payment method under Billing & payments with currency and country matching the business. [L0651, 2026]

- Wait about 6 hours after receiving the Meta business portfolio invitation link before trying to join it. [L0651, 2026]

- Open the invitation link through the proxy assigned to the account and log in with Facebook. If a verification code is requested, it is sent to the email address, so retrieve it there. [L0651, 2026]

- Before accepting a business portfolio invitation, check the business name, country, website and business verification status on the review screen. Decline the invitation if you do not know the business, because accepting adds you to its portfolio. [L0651, 2026]

- Once you accept a business portfolio invitation, your name, email, profile picture and actions taken for the business are visible to other people managing that portfolio. Actions taken on behalf of the business are not shared to your personal profile. [L0651, 2026]

- To give yourself access to an ad account, open Business settings, go to the Ad accounts section in the left sidebar, open the ad account, choose Add people, select your own name, and set permissions. Partial access offers Manage campaigns (ads), View performance and Manage Creative Hub mockups, while Full control offers Manage ad accounts, which covers ad account settings, finances and permissions. [L0651, 2026]

- In Business settings, open Business info, scroll down to the Business email field and replace it with your own email address. Notifications about the business portfolio are sent to this address. Business info also contains a Primary business location field that can be edited. [L0651, 2026]

- Check that the new Page appears under Business settings > Pages, owned by the business portfolio, with your own user assigned at Full control. A Page that is not connected to the portfolio cannot be managed from it. [L0651, 2026]

- Check the ad account in Meta Business Suite and confirm it is active, with you assigned to it. [L0651, 2026]

- Meta Business Suite is used to check the status of ad accounts. Its Home screen shows Ad account performance, alerts and a prompt to go to Business settings if you lack permission to an ad account. [L0651, 2026]

- In Billing & payments for the ad account, open Payment methods and choose Add payment method. Billing details include business name, address and currency, and the example showed US Dollars (USD) by default. Set the currency and country to match the business. [L0651, 2026]

- Before creating ads in Ads Manager, a notice asks you to review Meta's non-discrimination policy and click I accept. The policy prohibits ads that deny opportunities to individuals or groups based on protected characteristics such as race, religion, age, sex or disability. [L0651, 2026]

- Ads Manager is where campaigns, ad sets and ads are created and reviewed. A new ad account shows no campaigns and the message that no ads have been created yet, with a Create button to start. [L0651, 2026]

- When an invitation link is opened while logged out, the Meta business login page offers Log in with Facebook, Log in with Instagram, Create new account, and Log in with a managed Meta account. Use the Facebook option to join a business portfolio with a personal Facebook profile. [L0651, 2026]

- In Business settings > Business options, the Pages and notifications toggle decides whether people in the portfolio see Page notifications on Facebook as well as in business tools. When it is off, notifications appear only in business tools. A separate Business notifications on Facebook toggle controls notifications about the portfolio's Pages on Facebook. [L0651, 2026]

- In Business settings > Business info, the Account section has an Ad account creation limit field that caps how many ad accounts the portfolio can create. Check this value before planning to add more ad accounts under the same business. [L0651, 2026]

- In Business settings > Ad accounts, each ad account row offers Assign people, Create ad, Assign partner and Open in Ads Manager, and the ad account ID and owning business appear when you select it. Connected assets on that screen lists the Pages and other assets linked to the ad account. [L0651, 2026]

- Full control on a Facebook Page means everything except sensitive actions, so a person with Full control can manage the Page but not perform the restricted sensitive actions. Full control on an ad account is broader and includes ad account settings, finances and permissions. Assign ad account access with this difference in mind. [L0651, 2026]

- The Finish setting up your Page checklist on a new Facebook Page lists Category, Personal details, Details, Links, Services, Bio, About you, Pinned details, Book, Offers, Work and Education. Filling in these sections makes the Page look complete to visitors. Start with Category and Links, since those were required or are used most in the setup. [L0651, 2026]

- Use ad accounts in USD if possible; Meta charges at the same rate for each currency, but USD is the cheapest of USD, EUR and GBP, and Meta prefers spending in USD. Set the ad account currency to USD in Business Manager or the ad account settings, not via the credit card. [L0690, 2022+]

- Changing an ad account's currency after creating it does not lose the Meta pixel; the pixel can be attached to any ad account regardless of currency. [L0690, 2022+]

- Settings for Meta ad account currency: Business Manager or ad account settings > currency > USD. The card can remain in another currency, but the bank may charge a foreign conversion fee. [L0690, 2022+]


Part 3 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/02-business-manager-page-instagram-and-ad-account-set.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/04-account-trust-warm-up-and-ban-prevention.md
