<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 3 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/02-finding-apps-that-competitors-use.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/04-security-and-gemini-in-google-workspace.md

## Domain, Business Email and Phone Setup

### Domain: Choosing and Buying the Domain

- Use a ChatGPT thinking model with deep research enabled to generate brand names. Deep research browses the live internet and checks which domains are actually free. Without it, most suggested.com domains turn out to be taken. [L0989, 2025-26]
- Namecheap is the domain registrar used in this approach. It handles the purchase, domain privacy and DNS records. Any other domain provider can be used instead. [L0989, 2025-26]
- buy the domain through Shopify if you want everything linked from the start. It costs a few dollars more than an outside registrar such as Namecheap, which is cheaper. [L0357, 2019; older]
- If the domain still does not link after the DNS records are updated, take a screenshot of the DNS records together with the exact error message. Paste both into a ChatGPT thinking model to get troubleshooting help. [L0989, 2025-26]

### Google Workspace: Prices and Plans

Prices in the sources differ by year, currency and purchase route. Use the live pricing page before you sign up, because prices change. [L1197, 2020-26; L1049, 2025+]

| Source | Price per user per month | Note | Ids |
|---|---|---|---|
| one source (current) | $7 on the annual plan | Recommended starting plan, Business Starter | [L0119, undated; L1196, 2020-26; L1197, 2020-26] |
| one source (current) | $8.40 on the flexible plan | Same plan, no long-term commitment. Difference to annual: $1.40 per month | [L1196, 2020-26; L1197, 2020-26] |
| one source (2024) | $6 | Price shown through the course link | [L0360, 2024; L0806, 2024] |
| one source (2026, Singapore list) | Starter S$9.40 on annual billing | Save 16% with a one-year commitment. Standard S$18.80, Plus S$29.40, Enterprise on contact | [L1327, 2026] |
| one source | About $12 | Varies with currency and region | [L0566, 2021-22] |
| one source | About $6 to $7 for a single-user mailbox | Quoted at the time of recording. Check current pricing before budgeting | [L0574, 2021-22] |

- Business Starter on the annual plan costs $7 per user per month and is billed monthly. It requires a 12-month commitment. Choose it only if the account will be kept for at least one year. [L1197, 2020-26; L1196, 2020-26]
- Business Starter on the flexible plan has no long-term commitment and can be cancelled or downgraded at any time. [L1197, 2020-26]
- Buy through the pricing page link, not the general signup page. The general signup page shows no pricing and defaults to a higher-priced tier. [L1196, 2020-26; L1197, 2020-26]
- Start the trial only from the pricing page link. Choose Business Starter at $7 per month and click Start a trial. [L1197, 2020-26]
- Business Starter includes 30 GB pooled storage per user, custom business email, and Gemini in Gmail, with a 14-day free trial at no cost (Singapore list). [L1327, 2026]
- Check the plan name carefully. Higher-priced plans appear as the default. [L0806, 2024]

### Google Workspace: Free Trial, Billing and Seats

- Google Workspace starts with a free trial of at least 14 days. [L0119, undated; L1145, 2021-22]
- Billing can be added during the trial or after it. No charge is made before the trial ends, and Google sends a notice before the trial expires, so billing can be left until then. [L0566, 2021-22]
- Billing begins 14 days after signup on both the annual and flexible plans. The annual plan is still billed monthly, so the monthly charge stays at $7 and is not paid up front. Users can be added or removed as needed. [L1196, 2020-26; L1197, 2020-26]
- If billing is never activated, the mailbox stops receiving mail when the trial ends, and existing messages cannot be retrieved afterward. [L1145, 2021-22]
- Billing setup asks for the billing address and a credit card on file. [L1197, 2020-26; L1196, 2020-26]
- Create a payment profile with the address and add a credit card on file. Click Agree and continue. [L1196, 2020-26]
- Each additional paid user license costs $7 per month. Aliases are not paid users and do not add to the monthly price. [L1196, 2020-26]
- A Google Workspace account includes up to 30 alternate email addresses (aliases) at no extra cost. The user still signs in only with the primary address, and aliases are used to send and receive mail. [L1196, 2020-26; L1197, 2020-26]
- Do not click "buy more licenses" in the admin panel when you only need extra email addresses. Every added license costs $7 per month. Aliases on the existing account cover multiple addresses without this cost. Add paid users only when an employee needs their own separate inbox. [L1196, 2020-26]
- When only the first account is needed during setup, click Cancel on the prompt to buy more licenses. [L1197, 2020-26]
- Creating extra user accounts is not needed during initial setup and can be skipped. Additional team members can be added later from the admin console. [L0566, 2021-22]

### Google Workspace: Before You Sign Up

- Sign up for the $7 per month plan first, before creating any other Google Workspace account for the same domain. [L0667, 2025]
- If a Google Workspace account was created for the domain before signing up through the $7 per month link, cancel that account and sign up again with the $7 plan. Google will otherwise report that the domain is already in use. [L0667, 2025]
- Create the business email address before signing up for Quo, because Quo asks for a business email and uses it to create the account. The same address is then used to log in to the app. [L0338, 2020-26]
- Google changes the signup steps often. When creating a new business email account, follow the current signup screens rather than older guides. Existing Google Workspace business email accounts keep working and do not need to be changed after such an update. [L1049, 2025+]
- Signing up with a domain you already own leaves that domain and any existing website unchanged. Only the mail routing of the domain is connected to Google. [L0566, 2021-22]

### Google Workspace: Signup Procedures

**Signup via the pricing link:**

1. Open the Google Workspace pricing page through the course link, not the general signup page. [L1196, 2020-26]
2. Under Business Starter ($7 per month), click Start a trial. [L1196, 2020-26]
3. Enter the business name, choose 1 for number of employees, and select the region where the business operates, then click Next. [L1196, 2020-26]
4. Enter the contact first and last name and a personal email address as a backup login, then click Next. [L1196, 2020-26]
5. Answer yes to having a domain name, enter the domain without https:// or www (for example yourbrand.com), confirm it, and click Next. [L1196, 2020-26]
6. Set the sign-in address to sales@yourdomain.com, choose a password, and click Agree and continue. [L1196, 2020-26]
7. Select the annual plan (or flexible if you want no commitment), then click Try free for 14 days. [L1196, 2020-26]
8. Create a payment profile by entering the address and adding a credit card on file, then click Agree and continue. [L1196, 2020-26]
9. Click Get started. [L1196, 2020-26]
10. At the domain host question, keep Shopify if the domain was bought through Shopify, then click Continue. [L1196, 2020-26]

**Signup for a business email domain :**

1. Open the pricing page through the link, choose Business Starter ($7 per user per month), and click Start a trial. [L1197, 2020-26]
2. Enter the business name, the number of employees (select just you for a one-person account), and the region where the business operates, then click Next. [L1197, 2020-26]
3. Enter the name of the person setting up the account and a personal email address as a backup for account recovery, then click Next. [L1197, 2020-26]
4. When asked whether the business has a domain name, answer yes, enter the domain without https:// or www (for example domain.com), confirm it, and click Next. [L1197, 2020-26]
5. Set the primary sign-in address to sales@yourdomain.com, choose a password, and click Agree and continue. [L1197, 2020-26]
6. Select the Annual plan ($7 per month, 12-month commitment) or the Flexible plan ($8.40 per month), then click Try free for 14 days. [L1197, 2020-26]
7. Create a payment profile with the billing address and add a credit card on file, then click Agree and continue. [L1197, 2020-26]
8. Click Get started to begin the domain verification steps. [L1197, 2020-26]

**Signup with the domain question and admin steps:**

1. Open workspace.google.com (or search for Google Workspace) and click Start free trial. [L0566, 2021-22]
2. Enter the business name as you want it to appear; spaces are allowed. [L0566, 2021-22]
3. Select 'Just you' as the number of employees if you work alone. [L0566, 2021-22]
4. Select the country where the business will operate, not necessarily where you live. The country cannot be changed after signup. A warning that your IP address points to another country can be ignored if the selected country is correct. [L0566, 2021-22]
5. Enter your own first and last name. You become the account admin. [L0566, 2021-22]
6. Enter a current personal email address. Google sends the welcome message there and uses it for account recovery. [L0566, 2021-22]
7. When asked whether the business has a domain, choose 'I have a domain' and click Next. [L0566, 2021-22]
8. Type the domain name without https:// or slashes (for example example.com), confirm it is the domain to use, and click Next. [L0566, 2021-22]
9. Answer the optional Google marketing questions as you prefer and continue. [L0566, 2021-22]
10. Choose the username prefix (support, sales, hello or info). The full address becomes prefix@yourdomain. [L0566, 2021-22]
11. Create a password of at least 8 characters and store it somewhere secure. Complete the robot check and click Agree and continue. [L0566, 2021-22]
12. Click the blue button to continue into setup, then sign in again with the new address and password. [L0566, 2021-22]
13. If Google asks you to verify the account, enter your country and phone number, choose Text message (SMS) or Automated voice call, click Get code, enter the code and click Verify. [L0566, 2021-22]
14. Accept the terms of service and privacy policy. [L0566, 2021-22]
15. In the Google Admin console (admin.google.com), click ACTIVATE under Activate Gmail. This step can take up to 60 minutes. [L0566, 2021-22]
16. Click 'Sign in to activate'. Google detects GoDaddy as your domain host. Sign in to GoDaddy if asked, then click Connect. [L0566, 2021-22]
17. Wait while Google verifies the domain and updates the mail settings. The screen shows 'Less than a minute remaining' near the end. [L0566, 2021-22]
18. If you see 'There was a problem updating settings in GoDaddy.com', click 'Sign in to activate' again. If it fails repeatedly, click 'Switch verification method' and try another method. [L0566, 2021-22]
19. When Gmail is activated, skip 'Create new users' for now. [L0566, 2021-22]
20. Either click 'Set up billing' now or later. Google emails you before the 14-day trial ends. Billing requires your name, address and payment method details. [L0566, 2021-22]
21. Click 'Send test email' to confirm that mail works. [L0566, 2021-22]
22. Log in to gmail.com with the new business address to access the inbox. [L0566, 2021-22]

**Signup for a Singapore-based store:**

1. Search for Google Workspace and open the sign-up page with the free trial. [L1327, 2026]
2. Start the free trial and choose the Business Starter plan. [L1327, 2026]
3. Enter the business name (the store or brand name) and the domain name. [L1327, 2026]
4. Enter the number of employees (Just you for a solo operator) and the region (Singapore in the example). [L1327, 2026]
5. Enter the first and last name of the admin. The person who creates the account becomes the Google Workspace account admin. [L1327, 2026]
6. Finish creating the account, then use the business email in the Shopify store contact details. [L1327, 2026]

**Signup field notes:**

- The Google Workspace sign-up asks for the number of employees, with the options Just you, 2-9, 10-99, 100-299 and 300+. A solo store owner picks Just you, and the answer does not block the setup of a single business email address. [L0566, 2021-22]
- Entering https:// or www in the domain field creates a wrong domain setup. Enter only the bare domain, such as domain.com. [L1197, 2020-26]
- The domain step appears as 'Does your business have a domain?'. Select 'I have a domain' when you already own a domain. Select the buy-a-domain or free page-domain options only if you have no domain yet. [L0566, 2021-22]

### Google Workspace: Connecting the Domain's Mail (Activation)

- Activation routes the domain's email to Gmail. In the Google Admin console, go to Getting started, then click ACTIVATE under 'Activate Gmail for [yourdomain]'. The step is estimated at 5 minutes, with a possible wait of up to 60 minutes. [L0566, 2021-22]
- If your domain is registered with GoDaddy, Google detects it automatically during Gmail activation and offers an automated connection. For a larger domain provider the automated option usually works too. Smaller providers may not be detected and need an alternative verification method. [L0566, 2021-22]
- Connection with GoDaddy is confirmed automatically. Google updates the domain's mail settings and then verifies they are in place. The check can take a few minutes, so wait on the screen rather than closing it. [L0566, 2021-22]
- The error 'There was a problem updating settings in GoDaddy.com' is common and usually means the two systems did not sync. It is not a sign of a setup mistake. Retry 'Sign in to activate' before changing the verification method. [L0566, 2021-22]
- Google may ask for phone verification when it detects unusual activity on a new account. The code can be sent by text message (SMS) or automated voice call. The phone number is used only for security. [L0566, 2021-22]
- Once the MX record for your domain points to Google (smtp.google.com with priority 1), all incoming mail for that domain is delivered to Gmail. Any older mailbox or forwarding setup for the same domain stops receiving new mail. Check what is still in use before switching the record. [L1196, 2020-26]
- Send a test email in the Google Admin console after verification. This confirms that the domain's mail routes correctly before you use the address with suppliers and customers. [L0566, 2021-22]

**Post-activation checklist (Google Admin console, Getting started page, in this order):**

1. Set up billing (5 min) [L0566, 2021-22]
2. Send test email (after Gmail is activated and the domain is verified) [L0566, 2021-22]
3. Create new users (5 min) [L0566, 2021-22]
4. Try out Gmail and other apps (1 min) [L0566, 2021-22]
5. Set up your mobile devices (10 min) [L0566, 2021-22]
6. Migrate your email and documents, importing existing email, contacts and data (1 hr) [L0566, 2021-22]
7. Enhance your mail security, adding protection against spam and phishing (5 min) [L0566, 2021-22]

### Email Addresses and Aliases

- Use professional addresses on your own store domain instead of a personal inbox when contacting suppliers, and keep using them for customers. A simple setup uses three addresses on one account: sales@, returns@, and firstname@ on the store domain. [L1197, 2020-26]
- Email aliases deliver all messages to a single inbox. You select which address to send from for each message, with no need to monitor separate accounts. [L0119, undated]
- Alternate email addresses (aliases) cannot be used to sign in to Google Workspace. Always sign in with the primary address (for example sales@yourdomain.com) and its password. Aliases receive and send mail through that primary account. [L1196, 2020-26]
- Use the same Google Workspace email account for Google Search Console, Google Analytics, Google Merchant Center, and Google Ads so that all Google tools connect and share data cleanly. [L0171, undated]

**Add alias addresses :**

1. In the Google Workspace admin panel, click the blue underlined name of the sales@ user. [L1196, 2020-26]
2. In the left navigation, click Add alternate emails. [L1196, 2020-26]
3. Enter returns as the first alias, which becomes returns@yourdomain.com. [L1196, 2020-26]
4. Enter a personal alias using your first name (adding your last name is also recommended), for example firstname@yourdomain.com. [L1196, 2020-26]
5. Click Save and check that all addresses are listed as alternate emails under the main account. [L1196, 2020-26]

**Add alias addresses :**

1. After the welcome screen for the new account, click I understand, then click Cancel on the prompt asking to buy more licenses. [L1197, 2020-26]
2. Open the Google Workspace admin panel and click the name of the primary account. [L1197, 2020-26]
3. In the left navigation, click Add alternate emails. [L1197, 2020-26]
4. Add the alternate emails returns and firstname (for example, the first name of the operator), each created on the store domain. Include the last name in the alias name if it is used for supplier contact. [L1197, 2020-26]
5. Check that the list shows sales@, returns@, and firstname@ on the store domain, then click Save. [L1197, 2020-26]

**Add alias addresses :**

1. Open Google Workspace Admin. [L0119, undated]
2. Click your primary user (sales@yourdomain.com). [L0119, undated]
3. Select Add alternate emails. [L0119, undated]
4. Add support@yourdomain.com or returns@yourdomain.com. [L0119, undated]
5. Add yourfirstname@yourdomain.com. [L0119, undated]
6. Save changes. [L0119, undated]
7. Open Gmail and log in as sales@yourdomain.com. [L0119, undated]
8. Click the gear icon and select See all settings. [L0119, undated]
9. Go to Accounts tab. [L0119, undated]
10. Edit display name to your store name. [L0119, undated]
11. Add additional "Send mail as" addresses for support/returns email. [L0119, undated]
12. Add your personal email as another "Send mail as" option. [L0119, undated]
13. Set replies to send from the same address the original email was sent to. [L0119, undated]

**Set up sending from the aliases in Gmail :**

1. Click the gear icon in Gmail, then click See all settings. [L1196, 2020-26]
2. Open the Accounts tab. Under Send mail as, click Edit next to the sales address. [L1196, 2020-26]
3. Change the name from the generic account name to the brand name (for example the store name), then click Save changes. [L1196, 2020-26]
4. Click Add another email address, enter the name and the alias returns@yourdomain.com, then click Next step. [L1196, 2020-26]
5. Under When replying to a message, change the default from Always reply from the default address to Reply from the same address the message was sent to. [L1196, 2020-26]
6. Repeat steps 4 and 5 for the personal alias firstname@yourdomain.com. [L1196, 2020-26]
7. Click Compose, then choose the From address (sales, returns or personal) to send from it. [L1196, 2020-26]

**Set up send-as aliases in Gmail :**

1. In Gmail, click the gear icon, then click See all settings. [L1197, 2020-26]
2. Open the Accounts tab. [L1197, 2020-26]
3. Under Send mail as, click edit on the primary address, change the name to the store name (for example, the store's name as customers should see it), and click Save changes. [L1197, 2020-26]
4. Click Add another email address, enter the name (for example, Returns - Store Name) and the returns@ address, then click Next step. [L1197, 2020-26]
5. In the settings for returns@, set When replying to a message to Reply from the same address the message was sent to, then click Next step. [L1197, 2020-26]
6. Add the firstname@ address with the first and last name, then click Next step. [L1197, 2020-26]
7. Open Compose and select the From address (sales@, returns@, or firstname@) before sending. [L1197, 2020-26]
8. Leave Check mail from other accounts empty, because the aliases were already added in Google Workspace. [L1197, 2020-26]

**Reply and sending mistakes:**

- Gmail's default is to reply from the primary sales address even when a message arrived at the returns or personal alias. Change the reply setting to reply from the same address the message was sent to, so customers see a consistent sender. [L1196, 2020-26; L1197, 2020-26]
- Do not add anything under Check mail from other accounts, because the aliases already receive mail through Google Workspace. [L1196, 2020-26; L1197, 2020-26]

**Use the account on a phone:**

- To use all addresses on a phone, add the account to the phone's email app using the primary sales@yourdomain.com address and its password. Once added, the app can send and receive from all aliases on the account. No separate setup is needed for each alias on the phone. [L1196, 2020-26]
- In any email app on the phone, add an account using the primary address (sales@yourdomain.com) and its password. Send and receive mail from all three addresses, because the aliases are linked to the same account. [L1197, 2020-26]
- After activation, the business address can be used at gmail.com or in desktop and mobile mail apps such as Apple Mail or Outlook, by adding the Gmail account to the app. This lets you send and receive on a phone or computer. [L0566, 2021-22]

### Google Workspace: Branding, Apps and Overview

- Google Workspace provides professional email using your custom domain with the standard Gmail interface and admin dashboard. [L0119, undated]
- Google Workspace hosts business email on your own domain and is managed through the Gmail interface. The Business Starter plan is the recommended starting plan. [L1197, 2020-26]
- Google Workspace provides a custom-domain business email, Gmail, Calendar, Meet, Drive and Docs under one paid account. It is used to run the business email address for the store. [L0566, 2021-22]
- Google Workspace provides business email on your own domain plus tools such as Drive and Calendar. It is the usual way to set up a professional business email address for a store. [L1095, 2024]
- Send a test email in the Google Admin console after verification to confirm that the domain's mail routes correctly before using the address with suppliers and customers. [L0566, 2021-22]
- Upload a custom logo in the Google Workspace admin settings so the account shows the store's logo in Gmail instead of the standard Google logo. Download the logo from your store, upload it under Custom logo under the profile settings of the main account, and click Save. [L1196, 2020-26; L1197, 2020-26]
- Older advice (2020s, course link): the Business Starter plan is recommended for a new store. Buy it through the pricing page link, because the general signup page does not show prices. [L1196, 2020-26]

### Email Tools: Filters and Scheduling

- Gmail filters and rules can apply labels and sort incoming emails automatically, so the assistant can action messages without sorting them by hand. Combine these rules with colour-coded priority labels so urgent messages surface first. [L1000, 2017]
- Boomerang for Gmail schedules emails to send later and can send a reminder back to you if a recipient has not replied within a set number of days. The reminder is used to track supplier actions that would otherwise be forgotten. [L0910, 2015]
- Boomerang's scheduled sending is optional for business email. In the store described, suppliers and customers did not object to emails sent late at night or early in the morning. The reminder feature is the more useful part for tracking supplier follow-ups. [L0910, 2015]
- Boomerang for Gmail, a browser plugin linked to Gmail, lets you write emails at night and schedule their delivery for a set time in the recipient's time zone, such as 9 a.m. US time. Use it to show suppliers your email arrives during their business hours, for example by scheduling for 9:03 a.m. [L1441, 2018]


Part 3 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/02-finding-apps-that-competitors-use.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/04-security-and-gemini-in-google-workspace.md
