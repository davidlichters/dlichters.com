<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 5 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/04-connecting-an-external-domain-to-shopify-dns-txt-a.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/06-core-admin-settings-general-checkout-payments-and.md

## Business email, phone number and contact identity

### Which addresses and roles you need

- Set up three business addresses on your domain: sales@yourdomain for supplier outreach, support@yourdomain or returns@yourdomain for customer inquiries, and yourfirstname@yourdomain for personal business use. [L0119, undated]
- Alternatively, set up sales@yourstore.com for customer inquiries, returns@yourstore.com for managing returns, and yourname@yourstore.com for personal business use. The two sources differ on the inquiry address: [L0119, undated] suggests support@ or returns@, and [L0125, undated] uses sales@. [L0125, undated; L0119, undated]
- Set up business addresses such as info, support and sales at your domain, and use them for customer service and supplier contact. [L0962, 2021]
- Use the same role address (info@ or sales@ on your domain) for Shopify, apps and social profiles so logins stay consistent. Do not use a no-reply address for newsletters, because replies from customers are valuable. [L0665, 2022]
- Use the store domain for customer-facing emails, such as orders@yourstore.com, because customers expect order confirmations from the store. Use the company domain for corporate communication, bank links and similar business accounts. [L1090, 2021]
- Enter a store email on the store's own domain (for example info@yourdomain) under Settings > General > Store contact details. Do not use a Gmail address as the store email, because a domain-based address looks more professional and is more trusted. [L1327, 2026]
- Use a separate business email address, not a personal one, across all Google platforms: Gmail, Google Analytics, Search Console, Google Ads and Merchant Center. This keeps data in one place and makes handing over the business easier later. [L1277, 2020]
- A new Shopify store defaults its store email and phone number to the ones used at sign-up. You can swap these for dedicated business email and phone later, once they exist. [L1306, 2020-26]

### Company name and store domain

- The owning entity can use a generic company name, such as an LLC or S corporation, that owns several stores in related niches. The entity name does not need to match a store domain, and changing an existing store domain is unnecessary. [L0807, 2025] (2025)
- An older rule (2021) says the store domain and company name should not match. Name the company something generic (e.g. LJ Stores LLC) so that additional stores can be opened under it without confusion. [L0834, 2021]
- Enter your business information rather than your personal name in the Shopify store information and settings. Your personal name can stay as well, but the business information should be the primary entry. [L0835, 2023] (2023)

### Business address

- Do not put a home address on the website. The options are no address, or a UPS Store address, which costs about $200 to $250 per year and works as a business address. [L1068, 2019]
- A UPS Store address shows a suite number instead of a PO box, which looks more professional in an email signature and on a website. A post office PO box is a cheaper alternative but looks less professional. [L1068, 2019]
- Use a professional business address (UPS Store with suite number) rather than a USPS PO Box on business documents and supplier agreements. It conveys greater professionalism and legitimacy. [L0251, 2023] (2023)
- Use a business address such as a UPS Store mailbox instead of your home address on the website. [L0852, 2020]
- Use a commercial address such as a UPS Store address rather than a home address or a PO box. This is the practice used across the owner's businesses, though the reason for the policy is not confirmed. [L1111, 2020]
- Enter the business address in the Shopify store settings alongside your other business details. [L0696, 2020-26]
- Adding a physical business address to the contact page is optional, but it adds a level of trust for shoppers who want to send mail. [L0696, 2020-26]
- The business address on the Contact Us page is another contact method. It is useful for Google and not required, but it must be a business address, not your home address. [L0835, 2023] (2023)
- Some competitor stores list a private home address on their website, which exposes the owner's personal information. Do not copy that practice. If you list an address at all, use a business address on the contact page. [L0696, 2020-26]

### Personal details and second phone line

- Entering your personal phone number in a Shopify store or SMS sign-up can lead customers to call you directly. A second, dedicated number is safer for store contact fields. [L0820, undated]

### Google Workspace sign-up

1. Go to the Google Workspace sign-up page. [L0125, undated]
2. Scroll down to locate the Business Starter Plan ($7/month). [L0125, undated]
3. Click 'Get Started' under the $7/month option. [L0125, undated]
4. Complete account setup. [L0125, undated]
- Google Workspace can be set up through a meta tag or through DNS records to verify the domain. The meta tag method is the first choice. [L1094, 2023] (2023)
- Enter the domain without https:// and without www, only the name and extension such as yourbrand.com. If the domain was bought through Shopify, keep Shopify as domain host so the DNS can be edited there. For a domain bought elsewhere, choose that registrar from the list and edit its DNS there instead. [L1196, 2020-26]
- Domain verification may not be required if Shopify automatically recognises the domain. [L0125, undated]

### Connecting Google Workspace to a Shopify domain

The procedure below combines three versions of the same connection. Each step keeps the details of all sources that describe it.

1. On the Google Workspace domain host screen, keep Shopify as the domain host if the domain was bought through Shopify; otherwise select the actual registrar from the list. Click Continue. [L1197, 2020-26; L1196, 2020-26]
2. In Google Workspace, hover over the clipboard icon next to the Text value field and click it to copy the unique verification code. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
3. In Shopify Admin, click the Settings icon in the bottom left corner, then click Domains. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
4. Click the primary domain of the online store. It must be the same domain added to Google Workspace. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
5. Scroll down past Email forwarding, which should not be used, to the section Third-party email hosting, and click Switch to email hosting. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
6. Leave the email hosting provider as G Suite. This is the old name for Google Workspace, which Shopify still shows. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
7. Paste the copied code into the Text value field and click Save. The provider now shows G Suite. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
8. At the top of the page, click Domain settings, then click Edit DNS settings. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
9. Click Add custom record and select MX record. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
10. Set Name to @ (the at symbol), set Points to to smtp.google.com, and set Priority to 1. Click Confirm. [L1197, 2020-26; L1196, 2020-26; L0119, undated]
11. Scroll down and check that the MX record list shows smtp.google.com with priority 1. [L1197, 2020-26; L1196, 2020-26]
12. Back in Google Workspace, tick the box to confirm the code was updated on the domain host, click Confirm, and leave the page open while DNS verification runs. Verification can complete almost instantly. [L1197, 2020-26; L1196, 2020-26]
13. When verification finishes, Gmail is ready for the domain. Confirm it under Confirm verification in Google Workspace and wait for confirmation. [L0119, undated; L1197, 2020-26]

- The MX record for Google Workspace must be Type MX, Name @, Points to smtp.google.com, Priority 1. Without this record, incoming email is not routed to Gmail. [L1197, 2020-26]
- Short version: open the DNS settings of the domain, add the MX records that Google Workspace provides for the domain, and wait for the change to take effect before expecting email to work. [L1281, 2022]

### Mistake to avoid: forwarding instead of email hosting

- Choosing Email forwarding instead of Third-party email hosting in Shopify does not connect Google Workspace. Use the Switch to email hosting option for the Google connection. [L1197, 2020-26; L1196, 2020-26]
- The "Create a forwarding email" option under Email forwarding only forwards to an existing inbox. Use the Third-party email hosting section so Google receives and sends mail for the domain, and paste the verification code into its Text value field. [L1196, 2020-26]
- Shopify's free forwarding can still serve as a receiving address. A contact address on the store's domain can be forwarded to your private inbox, so customers see a branded address while you read mail in your usual account. [L0520, undated]
- Example: a contact address such as contact@yourstorename.com can be forwarded to a private inbox with Shopify's free forwarding. [L0520, undated]

### one source procedure: test the domain email

The one source procedure uses the menu Settings > Domains > Email forwarding and hosting.

1. Choose Third-party email hosting. [L1327, 2026]
2. Connect a Google Workspace account. [L1327, 2026]
3. Follow the Google Workspace steps to add the DNS records to the domain. [L1327, 2026]
4. Check that the domain's email works by sending a test email from it. Shopify's domain settings page shows the DNS records and nameservers used for this. [L1327, 2026]

### Authentication: DMARC, DKIM and TXT records

- Shopify requires DMARC authentication so that outgoing emails do not go to spam. You must authenticate the domain and add a DMARC record. [L0255, 2025] (2025)
- To add DMARC on Namecheap:
  1. Go to Namecheap DNS records. [L0255, 2025]
  2. Get the DMARC code from Shopify: log into your account and go to settings. [L0255, 2025]
  3. If the code is not visible, contact Shopify support via live chat for the DNS record code. [L0255, 2025]
  4. Add the code as a DNS record in Namecheap. [L0255, 2025]
  5. Shopify will verify, and emails will no longer show the Shopify domain in the 'from' line. [L0255, 2025]
- When transferring a Google Domain to Shopify, configure the TXT records properly, including a DKIM record in the DNS settings. Without this, order confirmation emails fail to send to customers even though they are triggered in Shopify. [L0298, 2023]

### Switching the store to business email

- After the professional addresses are working, replace older personal email addresses in the Shopify store settings and anywhere else they appear with the new business addresses. This keeps store notifications and customer contact consistent with the domain. Do this once the Google Workspace setup is complete. [L1196, 2020-26; L1197, 2020-26]
- Set up the mailbox before the store goes live. A support email in the footer only works once a real mailbox for that address exists. [L1018, 2020-26]
- Shopify contact form messages are delivered by email to the address set in the store's Shopify account. Check that address in the Shopify settings to make sure inquiries reach you. [L0470, 2023] (2023)

### Replacing placeholders in policies and admin

1. In Shopify Admin, replace all placeholder emails with your professional business email addresses. [L0119, undated]
2. Update your store footer to display your professional email. [L0119, undated]
3. Update the privacy policy, terms of service and returns policy pages with your business email. [L0119, undated]
4. Update your contact page with your professional email address. [L0119, undated]
- Terms of service and demo store placeholder details (such as phone numbers) are not required before supplier contact. Placeholder data such as '555' numbers looks unprofessional and should be replaced with a real phone number or an email address. [L0971, 2024] (2024)
- Use the same store and business contact details everywhere: the Shopify account, Google Merchant Center and the website's contact page. Mismatched details can cause account reviews or suspensions. [L1111, 2020]

### Getting a business phone number

- Secure a business phone number before building the website, so the number can be placed on the site from the start. Setting it up early keeps the contact details consistent across the store and supplier communication. [L1198, 2021-22]
- Add the business phone number to the store only after the phone app signup is finished, because the number is issued at the end of that signup. Before that, there is no number to enter in the Shopify header, footer or contact page. [L0700, 2020-26]
- The phone number can come from Google Voice or OpenPhone. [L0700, 2020-26]
- Use a dedicated business phone number, such as a toll-free 800 number in the US or a 1300 number in Australia. [L1371, 2021-22]

### Voicemail

1. Set up a phone number on the store. [L1111, 2020]
2. Route calls to voicemail after two rings. [L1111, 2020]
3. Record a voicemail greeting that asks for name, phone number, email address and the reason for the call. [L1111, 2020]
4. Review the voicemails to learn what customers are asking. [L1111, 2020]

### Adding the phone number to the header

Locations: Online Store > Edit theme > Header, in the field phone number / email address. [L0122, undated; L0338, 2020-26]

1. In the Shopify admin, click Online Store. Click Edit theme (in the theme customizer, click Customize). [L0338, 2020-26; L0700, 2020-26]
2. Click Header. In the left navigation, or click the header in the preview, then zoom out so the settings panel on the right is visible. [L0338, 2020-26; L0700, 2020-26]
3. In the field labelled phone number / email address, which initially holds an email address, delete the email address and type the business phone number. The preview updates in real time. [L0338, 2020-26; L0700, 2020-26]
4. Click Save. [L0338, 2020-26; L0700, 2020-26]
- Replace the email address in the header with your business phone number. [L0122, undated]
- The header contact details (contact text, hours of operation, phone and email) are set under Header > Contact details. Set the hours to the times you can actually answer customer service, and leave the phone field blank until you have a number. [L0775, 2020-26]
- Promo header: set the small promo header element to a heading "Call us today", enter the business phone number, link it to the contact page if wanted, and set the icon to a black cell phone icon. [L1371, 2021-22]

### Adding the phone number to the footer

Locations: Online Store > Edit theme > Footer menu > Contact us section. The phone field sits directly above the email address. Save after changes. [L0338, 2020-26; L0122, undated]

1. Scroll down in the theme editor to the footer menu. [L0338, 2020-26; L0700, 2020-26]
2. Open the Contact us section. It may show an email address and a filler phone number. [L0700, 2020-26]
3. Click the section so the WYSIWYG editor opens on the right. [L0700, 2020-26]
4. Type the business phone number directly above the email address, so the footer shows two contact methods. [L0338, 2020-26; L0700, 2020-26; L0122, undated]
5. Click Save. [L0338, 2020-26; L0700, 2020-26]
- Replace the filler phone number with the real business number rather than leaving filler text visible to customers. [L0700, 2020-26]

### Adding the phone number to the contact page

1. In the Shopify backend, go to Online Store and then Pages. [L0700, 2020-26]
2. Open the Contact us page. [L0700, 2020-26]
3. In the WYSIWYG editor, add a section that reads "call us at", followed by the business phone number. [L0700, 2020-26]
4. Click Save. [L0700, 2020-26]

### Contact methods on the site

- A contact page should offer at least two ways to reach the business, such as a business email and a contact form. A phone number or a virtual address can be added as extra methods. [L0970, 2023] (2023)
- Include multiple ways to contact the business: a contact page with email, phone and contact form, plus email and phone in the footer. A single email address is not enough. [L1111, 2020]
- Show a phone number in the homepage contact area when one is available. An email address alone is acceptable, but a phone number adds more trust. [L0971, 2024] (2024)
- If no dedicated contact exists for a supplier form, use 'support' or a store email address in the contact fields. [L0964, 2023] (2023)


Part 5 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/04-connecting-an-external-domain-to-shopify-dns-txt-a.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/06-core-admin-settings-general-checkout-payments-and.md
