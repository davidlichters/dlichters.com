<!-- part of ecom/deep/15-email-and-sms.md -->
Part 2 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/01-email-and-sms-strategy-economics-and-program-plann.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/03-deliverability-foundations-authentication-reputati.md

## Platform Choice, Account Setup and Sender Identity

### Platform Choice, Account Setup and Sender Identity

#### Choosing an Email Platform

- The customer sees only the email itself, plain text or HTML, and every email provider delivers it the same way. The software choice therefore does not change what the customer receives or how they respond. [L0608, 2021-22]
- No import tool moves flows, lists and automations from one platform to another, so switching requires manual setup. Factor this rebuild time into any decision to change. [L0608, 2021-22]
- Drip and Klaviyo both connect to Shopify and sync customer data for automated email. Choose either one; the choice comes down to preference. [L1298, 2021-22]
- Drip is an e-commerce autoresponder that sends automated sequences, such as abandoned cart emails, and syncs customer and order data from Shopify. It is one of two recommended options. [L1298, 2021-22]
- Klaviyo is an autoresponder that also covers SMS and forms. It connects to Shopify in the same way as Drip and is a valid alternative. [L1298, 2021-22]
- Klaviyo is the most widely used email marketing app for Shopify and is recommended for its strong built-in automations. [L0573, undated]
- Klaviyo is the tool used to build the automated flows. An active Klaviyo account is the only requirement to start. [L0606, undated]
- Klaviyo is installed on Shopify to send automated emails for bounced visits and abandoned carts. Set it up before the store takes traffic. [L0393, undated]
- Send promotions and abandoned cart flows straight from Klaviyo. Add contacts to Shopify only when they buy, become abandoned carts, or sign up through a Shopify-native opt-in form. [L0359, 2020]
- Clavio is the email and SMS marketing app used in the one source material for sign-up forms and pop-ups, automated flows (welcome series, abandoned carts, thank-you emails), and email campaigns to the collected list. [L0476, undated]
- The Clavio setup is written as the Klaviyo-type setup in the video, so the same steps apply to both. [L0635, undated]
- Shopify Email is recommended over Klaviyo mainly because it is much more cost-effective. [L1307, 2020-26]
- A store already using Klaviyo with a healthy return on ad spend has no reason to switch immediately. A store that wants to save money should switch. [L1307, 2020-26]
- The source claims that, at the time of publication, Shopify Email covered about 99% of what Klaviyo can do. This is a vendor-comparison claim; verify it against current features before relying on it. [L1307, 2020-26]
- Shopify Email can replace older email platforms without paid add-ons. It includes AI-assisted features for writing campaigns and images. [L1283, 2023]
- Ontraport is a marketing automation platform that is expensive but offers many controls and triggers for high volumes, similar to Infusionsoft. [L0923, 2015]
- Mailchimp is a cheaper option that works well for a standard Shopify autoresponder. Clavio can produce designed email templates. [L0923, 2015]
- For a pure affiliate site, use GetResponse as the autoresponder. Its free first month lets one affiliate sale pay for the service, and it covers the features needed for affiliate marketing without extra cost. [L0514, 2015]
- Older advice (2021-22) recommended Drip for all e-commerce emails, including post-purchase, browse abandonment and flows, especially with Shopify integration. Klaviyo remained a decent alternative. Switching was only advisable for new setups, since recreating existing flows is a lot of work. [L0682, 2021-22] **
- Older advice (2020) described Klaviyo as an email marketing app used for email marketing and autoresponders for the stores. [L0852, 2020] **
- Older advice (2021) stated that the newest version of the email setup uses Klaviyo for email capture and does not require Privy. Keeping Privy is fine if it is already installed. [L0853, 2021] **

#### Costs

| Option | Cost as stated | Notes | Units |
|---|---|---|---|
| Shopify Email | Free up to 10,000 emails per month, included in the Shopify subscription | Above 10,000 emails, $1 per additional 1,000 emails. Stated at time of publication; check before relying on it. | [L1283, 2023; L1307, 2020-26] |
| Shopify Messaging | 10,000 emails per month free | Each additional 1,000 emails costs 1 USD. | [L1317, 2020-26] |
| Klaviyo | Free for the first 500 email addresses/contacts, then paid | Billing starts after the first 500 contacts. (Older, 2020, and undated one source lesson.) | [L0268, 2020; L1076, 2019] |
| Drip | Costs start at $19 per month | Rises with the number of active people in the account. The account owner decides which people count as active. | [L1298, 2021-22] |
| Drip (Shopify approval screen) | Recurring subscription of $0.00 USD during the 14-day free trial, recurring every 30 days, with a maximum of $7,500.00 USD in possible additional fees | The cap is a buffer so the list can grow without interruption, not a typical cost. | [L1298, 2021-22] |

- Email platforms bill per subscriber, so a new store with zero or few subscribers pays little. Costs rise as the list grows. [L1298, 2021-22]
- The post-purchase email flow takes about 5 to 10 hours to create. [L1076, 2019]

Formula for Shopify Email cost above the free allowance:

```
Cost per month = ((emails sent in the month − 10,000) ÷ 1,000) × $1
Below 10,000 emails per month: $0
Example: 15,000 emails → (15,000 − 10,000) ÷ 1,000 × $1 = $5
```
[L1307, 2020-26]

#### Shopify Messaging: Installation and Branding

- Shopify Messaging is Shopify's free app for sending marketing emails and SMS messages from the store. It is used for email campaigns and automations that are set up in later steps. [L1317, 2020-26]

Procedure: Install Shopify Messaging [L1317, 2020-26]
1. Open the Shopify admin and click Apps.
2. Search for "Shopify Messaging" in the Shopify App Store and pick the best match at the top.
3. Click Install.
4. Accept the access permissions Shopify asks for and click Install again.
5. Once installed, open the app's settings and complete the configuration.

Procedure: Configure Template Branding in Shopify Messaging settings [L1317, 2020-26]
1. Open Settings > Template Branding and click Customize.
2. Upload the store logo.
3. Choose the font. The instructor keeps Sans Serif, but any font used on the store can be selected.
4. Set text and background colors. The instructor keeps them black and white.
5. Set the button fill to the store's brand color.
6. Leave the address and store name fields as they are.
7. Click Save.

Checklist after installing Shopify Messaging [L1317, 2020-26]
1. Install the app from the Shopify App Store.
2. Set Template Branding (logo, font, colors, button fill brand color) and save.
3. Check the sender email is sales@yourdomain.com and enter the same address under Notification Sections.
4. Keep Double opt-in inactive.
5. Keep Optimize Open Tracking active.
6. Leave UTM defaults unchanged.

#### Klaviyo: Account and Signup Form Setup

Procedure: Install and create the account [L1297, 2023]
1. Search for Klaviyo in the Shopify App Store, click Add app, then Install app.
2. Enter your sender name and sender email address and click Continue.
3. Select your business goal, here to earn more revenue.
4. Select email only as the channel.
5. Open the dashboard and start with a signup form.

Procedure: Install and connect, as taught in the one source material [L0573, undated]
1. Install Klaviyo from the Shopify App Store. It is registered with the same email address used for the Shopify account. [L0573, undated]
2. Connect Klaviyo to the Shopify store. [L0573, undated]
3. Turn on website tracking. [L0573, undated]
4. Import existing contacts, starting with email contacts and newsletter subscribers. This step can be skipped if none exist. [L0573, undated]
5. Optionally build the brand library by uploading logo and brand colors, which Klaviyo then applies to all email templates. [L0573, undated]
6. Optionally invite team members. [L0573, undated]

Procedure: Initial setup including the signup form [L0477, undated]
1. Enter sender name and sender email (for example, a name from the brand and a contact@ address on the store domain).
2. Select business goal (earn more revenue) and channel (email only).
3. Create a signup form via Signup forms in the left menu.
4. Choose a pop-up design, name it and add it to a subscriber list (newsletter).
5. Replace the percentage offer with a fixed dollar offer (for example, save $5 with the first order).
6. Replace the picture with a product or gift image. Free images are available, for example from unsplash.com.
7. On the success step, communicate the discount code created in Shopify.
8. Publish the form.

Procedure: Clavio setup as taught in the video [L0635, undated]
1. Go to Apps > All recommended apps, open the Shopify App Store, search Clavio, and click Install.
2. Create the Clavio account and enter a sender name (for example, a support representative's name) and a sender email address on the store's domain (for example, a contact address).
3. Choose email only.
4. Set up core flows: welcome series, abandoned checkout, and order confirmation series. Then use campaigns for one-off sends.

Integration and interface checks
- In Klaviyo's integrations area, check that the store integration is listed as connected. Turning on the site option adds the JavaScript that the sign-up box needs to the storefront. ** [L1092, 2022]
- When Klaviyo updates its interface, check the current account layout before recording or following lessons. The interface may differ for new accounts even if existing accounts remain unchanged. ** [L0665, 2022]
- Check that promotional and evergreen sequences are live in the account before relying on them. ** [L1112, 2021]

#### Drip: Setup Procedure

Procedure: Drip Email Marketing setup [L1298, 2021-22] **
1. In the Shopify App Store, search for drip and click Drip Email Marketing (Klaviyo can be searched the same way).
2. Click Install app. You are taken to the Drip sign-up page.
3. Create a Drip account with first name, last name, email, password and a goal, complete the human check and click Start free trial.
4. Return to Shopify and approve the subscription. The trial starts at $0.00 USD, and then click Start free trial.
5. Check the sender business address that loads from your Shopify account. Edit it in the box if needed, then click Continue.
6. Wait for the account to sync in the background. Confirm that Drip shows the store as connected and that its tracking snippet is installed on the site.
7. Leave the detailed email setup (sequences and flows) for later, when it becomes relevant.

#### Sender Name

- Use a person's name as the sender name, such as a founder, yourself, a customer service rep, or a fictional persona, combined with the brand. For example, "John from ABC Lawnmowers" works better than the brand name alone. [L0572, 2014]
- In a welcome or flow email, the sender name works better as a named person from the store plus the store name, such as a customer representative, than as a bare brand name. A personal sender name makes the message feel like a reply from a human. [L0476, undated]
- Use a named customer representative as the sender name, combined with the store name, and send from the store's own email address. This makes automated emails feel personal and recognisable. [L0634, undated]
- The Klaviyo sender name and sender email are requested at account setup and appear on every email. Use a real person's first name as the sender name, so the email reads as a personal message rather than a company broadcast. [L0607, undated]
- Set the Klaviyo sender name to a person's first name plus the brand, for example "First name from Brand", with a sender email address on the store's own domain. This gives customers a personal sender they recognise that matches the store. [L1297, 2023]

#### Sender Address

| Platform or purpose | Address to use | Where it is set | Units |
|---|---|---|---|
| Shopify Messaging | sales@yourdomain.com (sales@ followed by the store's own domain) | Messaging settings, and the same address under Settings > Notification Sections, which is the sender for all Messaging emails | [L0147, undated; L1317, 2020-26] |
| Shopify Email | General address on own domain, such as support@, sales@ or info@ | Settings > Sender email, taken from the store details settings | [L1307, 2020-26] |
| Klaviyo | Address on the store domain, for example contact@ | Sender email at account setup | [L0477, undated; L1297, 2023] |
| Clavio | Address on the store domain, for example a contact address | Sender email at account setup | [L0635, undated] |
| Store contact and customer service | Shopify support email for store contact and customer service questions; the store's support address for supplier contact fields | Contact and supplier fields | [L0964, 2023] |

- The sender address must be on the store's own domain and never a personal address. [L0147, undated]
- Do not leave a personal address such as name@agency-domain as the sender of store emails. Use a sales address on the store's own domain instead. [L1317, 2020-26]
- The sender address field in Shopify Messaging can show the email used to create the store, which may be a personal inbox. Replace it with a sales address on the store's own domain before sending any emails. [L1317, 2020-26]
- Make sure replies go to an inbox that you or your team can manage. [L1307, 2020-26]
- Under Settings > Notifications, the sender email addresses are configured. This is left for later, when email marketing is set up. [L1306, 2020-26]

#### Business Domain Email

- Use a business email address on your own domain (name@yourdomain) for suppliers and customers, not a free address such as Gmail, Hotmail or Yahoo. Free addresses make a store look like a small hobby operation, which lowers trust. ** [L0566, 2021-22]
- Keep business email separate from your personal inbox and accounts. Mixing the two makes supplier and customer correspondence hard to find and manage. ** [L0566, 2021-22]
- Create one core business address first, such as support@, sales@, hello@ or info@, and use it on the website and for customer contact. Add addresses for specific purposes later. ** [L0566, 2021-22]
- Do not put a personal or free email address on the website or in supplier outreach. Customers and suppliers expect a domain-based address. ** [L0566, 2021-22]
- The business address is the one customers use to contact you at launch and the one shown on the website. Set it up before the site goes live. ** [L0566, 2021-22]
- The personal email address entered during Google Workspace sign-up receives the welcome message and serves as the account recovery address. Use an address you can reliably access. ** [L0566, 2021-22]
- Google may ask for a phone-number check on a newly created account as a security measure. Creating many accounts in a short time can make this check appear more often. ** [L0566, 2021-22]
- The verification screen during Gmail activation says the page can be closed and reopened later. Closing the window is not a failed setup. Check the admin console to confirm the activation status. ** [L0566, 2021-22]
- Pricing differs by source:
  - A Google Workspace search-result snippet at recording time showed plans from $8.40 per user per month. ** [L0566, 2021-22]
  - The standard cost quoted was about $12 per month. ** [L0566, 2021-22]
  - Check the live pricing page for currency and region before budgeting, because prices change. [L0566, 2021-22]

#### Physical Address and Footer

- Klaviyo asks for a physical postal address to comply with anti-spam rules. Use a registered business address, such as a low-cost London office space or a virtual office, rather than a personal home address. Update the company registration address and the website when the new address is in place. [L0552, 2023]
- The footer module in the example email library carries the sender's business identity: an ABN (Australian Business Number), a street address and an unsubscribe link. Outside Australia, use the equivalent company registration number and the business's postal address in the same footer block, so every email includes them automatically. [L0610, 2025-26]
- Include the business address in the footer of business emails, such as marketing emails. [L0696, 2020-26]
- In Klaviyo emails, remove the organization name or full address from the email footer if you do not want it shown. The two sources differ on whether the address is optional: the rule above applies to business emails in general, and this option applies to stores that choose not to display it. [L1297, 2023]

#### Opt-In Settings

- Choose unconfirmed opt-in when the autoresponder allows it, because subscribers are added immediately with no extra step. Confirmed opt-in sends a confirmation email that many subscribers never see or click, which loses a share of your list. [L0514, 2015]
- Use a single opt-in with a welcome discount instead of double opt-in, because fewer than 5 percent of subscribers confirm a double opt-in email. [L0857, 2025]
- Shopify Email: Settings > double opt-in. A double opt-in sends a confirmation email after the customer subscribes and asks them to confirm. Leave the option at its default, "not required", because it adds friction to sign-ups. [L1307, 2020-26]
- Shopify Messaging: set Double opt-in to inactive. [L1317, 2020-26]
- Configuration for the Messaging app: disable double opt-in, enable optimize open tracking, and leave UTM settings at default values. [L0147, undated]

#### Tracking, UTM and Smart Sending

Settings summary

| Setting | Required value | Where | Units |
|---|---|---|---|
| Smart sending | Off, for every flow email (Clavio and Klaviyo) | Email settings before switching to Live | [L0476, undated; L0477, undated; L0573, undated; L0634, undated; L1297, 2023] |
| UTM tracking | On, for every flow email | Email settings before switching to Live | [L0476, undated; L0477, undated; L0573, undated; L0634, undated; L1297, 2023] |
| Optimize open tracking | On | Shopify Messaging settings | [L0147, undated; L1317, 2020-26] |
| Open tracking (Shopify Email) | Default: track all email opens | Settings > open tracking | [L1307, 2020-26] |
| UTM parameters (Shopify Messaging) | Defaults: source Shopify email, medium email, campaign UTM campaign, content email name, term activity ID | Messaging settings | [L0147, undated; L1317, 2020-26] |

- In every Clavio email, set Smart sending to off and UTM tracking to on before you switch the email from Draft to Live. The setting window opens when you click the email in the flow. [L0476, undated]
- Before a Clavio email goes live, set Smart sending to off and UTM tracking to on in the email settings panel. Then set the email from Draft to Live. [L0634, undated]
- For every flow email, make sure Smart sending is off and UTM tracking is on before setting the email to Live. UTM tracking lets you measure the revenue from each email efficiently, which Smart sending would otherwise interfere with. [L0573, undated]
- In Klaviyo, set Smart sending to off and UTM tracking to on in each flow email. [L0477, undated]
- In Klaviyo emails, Smart sending should be off and UTM tracking on. The flow then sends each message on schedule and the traffic can be tracked. [L1297, 2023]
- The UTM parameters in Shopify Messaging are appended to links in emails. This lets sales from emails be tracked in Google Analytics and in the Messaging app. Keep them at their defaults. [L1317, 2020-26]
- Do not modify the UTM campaign structure or advanced tracking settings in Shopify Messaging. [L0147, undated]
- Keep the default option to track all email opens in Shopify Email. This gives the most accurate open-rate reporting for emails sent through Shopify Email. [L1307, 2020-26]
- Optimize Open Tracking in Shopify Messaging should be switched on, so email opens are tracked. [L1317, 2020-26]

#### Going Live and Final Checks

- An email that stays in Draft is never sent. Each flow email must be switched from Draft to Live after it is edited. [L0476, undated]
- Branding and settings changes are not applied unless they are saved. Confirm that all Shopify Email settings are saved before moving on. Otherwise, new automations and campaigns may not carry the intended configuration. [L1307, 2020-26]
- Before relying on the Shopify Messaging setup, run the checklist in the Shopify Messaging section above. [L1317, 2020-26]

#### Migration Between Platforms

- When moving from Klaviyo to Shopify Email, check your Shopify customer list first. Klaviyo sign-ups usually come through Shopify opt-ins, so many contacts may already be in Shopify and may not need an export. [L0470, 2023]
- Contacts are added to Shopify only when they buy, become abandoned carts, or sign up through a Shopify-native opt-in form, so a Klaviyo-to-Shopify move should be checked against those routes. [L0359, 2020]
- Switching platforms requires manual rebuilding of flows and automations. Factor this rebuild time into the decision. [L0608, 2021-22]
- Older advice (2021-22) said switching is only advisable for new setups, since recreating existing flows is a lot of work. [L0682, 2021-22] **
- A store that wants to save money should switch to Shopify Email. A store already using Klaviyo with a healthy return on ad spend has no reason to switch immediately. [L1307, 2020-26]


Part 2 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/01-email-and-sms-strategy-economics-and-program-plann.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/03-deliverability-foundations-authentication-reputati.md
