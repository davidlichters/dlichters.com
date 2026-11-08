<!-- part of ecom/deep/18-legal-tax-banking-and-payments.md -->
Part 28 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/27-terms-of-service-template.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/29-ad-platform-compliance-and-account-setup.md

## Privacy, Cookies, GDPR and Marketing Consent

### Start With the Regions You Sell To

- If you sell to customers in the EU, cookie consent and GDPR apply. Check the requirements for each target market before you decide anything else. [L0775, 2020-26; L1309, 2020-26; L0421, 2020-26]
- Regional compliance varies widely. For subscriptions and data collection, check US state by state, the EU, Australia and other markets, because lawsuits target this area. [L0041, 2025-26]
- For each country you sell to, check the legal requirement with a qualified professional. The lessons are not legal advice. [L0358, 2020; L0775, 2020-26]
- Apps such as Recart, SMSBump and Klaviyo give country-specific guidance for legal text. One account with a common privacy policy section that includes each country's requirements is usually enough, rather than separate accounts per country. [L1213, 2023]
- GDPR is a real requirement for stores that handle personal data of EU visitors. Shopify and Google Ads terms cover part of this, but the store must still meet the remaining obligations in its own policies. [L0421, 2020-26]
- GDPR covers stores that serve European customers. [L0358, 2020]
- CCPA applies to California customers. Check whether it applies to your business. [L1145, 2021-22]

### Shopify Customer Privacy Settings

- Shopify's Preferences page has a Customer privacy section with two options. [L0726, 2021-22]
  - **Limit tracking for customers in Europe:** requires consent under GDPR before tracking. [L0726, 2021-22]
  - **Limit the third-party sale of California customers' data:** applies under CCPA. [L0726, 2021-22]
- Enable the setup like this :
  1. Go to Online Store > Preferences and find Customer privacy. [L1145, 2021-22]
  2. Enable the EU option (Limit tracking for customers in Europe) if you sell to Europe. GDPR requires consent before tracking. [L1145, 2021-22] **
  3. Enable the California option (Limit the third-party sale of your California customers' data) if you sell to California. CCPA requires an opt-out. [L1145, 2021-22] **
- Under Settings > Customer privacy, the current Shopify settings include:

| Setting | What it does | Example | Source |
|---|---|---|---|
| Cookie banner | Published on the online store, can be shown by region | Austria, Belgium and 14 other regions | [L1250, 2026] |
| Data sales opt-out page | Active for certain states | California, Colorado and 6 other states | [L1250, 2026] |
| Data storage hosting location | Set here | United States | [L1250, 2026] |
| Marketing settings | E-mail and SMS marketing in checkout, asks for marketing preferences, double opt-in | Customers confirm their contact details | [L1250, 2026] |

- Shopify calls its default privacy settings recommended. These settings are a starting point, not legal advice. The store owner stays responsible for complying with the privacy and marketing laws that apply to customers' countries. [L1250, 2026]

### Cookie Consent Banners

- A cookie consent banner is a pop-up at the bottom of the page where visitors accept cookie tracking. It matters most when you sell into the EU, where cookie opt-in is required. For other markets, check the requirement with a lawyer. [L0775, 2020-26]
- Banners are mainly required under EU law. [L0934, 2023]
- Cookie consent pop-ups and tracking disclosures come from privacy regulations such as GDPR. [L0358, 2020]
- Enable cookie consent in the Shopify theme settings if you sell outside the US, especially in the EU. It is optional for a US-only demo store. [L0102, undated]
- The cookie consent toggle is in the footer settings. It switches the consent banner on or off. Switch it on when the business operates out of the United States. [L1018, 2020-26]
- A cookie consent app was not used for a US-based store. Cookie consent tools are usually required by laws in other countries, so check your jurisdiction before you skip them. [L0835, 2023]
- Do not switch off the banner before you check the requirement for each target market. [L1309, 2020-26]
- For an older theme that has no banner option, ask Shopify support how to add one. Do not build it yourself. [L0934, 2023]

**When each rule applies:**

| Situation | What to do | Source |
|---|---|---|
| Selling into the EU | Enable cookie consent. Opt-in is required. | [L0775, 2020-26; L1309, 2020-26; L0102, undated] |
| Selling outside the US, not only the EU | Enable cookie consent. | [L0102, undated] |
| US-only demo store | Optional. | [L0102, undated] |
| Business operates out of the US | Switch the footer toggle on. | [L1018, 2020-26] |
| US-based store without a consent app (2023 case) | Check your jurisdiction before you skip the tool. | [L0835, 2023] |

### Privacy Policy Content

- The privacy policy must explain:
  - what customer data is collected,
  - how it is used and stored,
  - cookies and third-party services,
  - how customers can request access to or deletion of their data. [L1233, undated]
- The privacy policy must be fully compliant. [L0041, 2025-26]
- Monitor Robert Frude, a lawyer on Twitter, for subscription lawsuit patterns. This shows which compliance failures lead to litigation. [L0041, 2025-26]
- Do not publish the generated Shopify privacy policy as it is. [L0377, 2020-26]
  1. Compare the generated text with the store's real tools: remarketing, Google Analytics and cookies. [L0377, 2020-26]
  2. Add any missing sentences that describe these tools. [L0377, 2020-26]
- If you run remarketing campaigns, the privacy policy must disclose that you:
  - use cookies,
  - work with third-party vendors that gather data from cookies,
  - use cookies to personalize ad experiences. [L0014, undated]
- If the store runs remarketing ads, the personal data paragraph must end with a sentence saying that personal data may be used for remarketing. The default template may not include it, so check the generated text before you publish. [L0377, 2020-26]
- Place privacy text about cookies or consent under the section that describes information collected or how it is used. Check the template Shopify provides, because the wording changes over time. [L0835, 2023]
- The privacy policy must include the behavioral advertising section when Google requires it, or when the compliance lesson in module six says so. [L0964, 2023]
- Use this security statement as a template. Insert it as written. [L1250, 2026]

```
Our systems apply industry-standard encryption and safeguards so personal data stays away from unauthorized access, changes or disclosure. Card and payment details are kept safe and can be reached only by approved staff.
```
[L1250, 2026]

### Meta, Facebook Pixel and Data Sharing

- Customers can stop their website activity from being shared with Meta. They do this in the Off-Facebook Activity settings of their own Facebook account. The store cannot switch this off for them, so pixel data is limited for those customers. [L1027, 2026]
- Choose the dataset category that matches your business most accurately. The category decides what data may be shared with Meta. Depending on the category and location, data sharing can be limited or blocked. Never send sensitive user data in events. [L1027, 2026]
- use the customer privacy setting that allows the highest level of data sharing, so that Facebook tracking captures the most data. The Shopify Facebook pixel must be enabled under Online Store preferences. [L1281, 2022] **
- **Conflict:** the 2022 advice maximizes data capture. The 2026 advice limits sharing by category and location and forbids sensitive data in events. Follow the 2026 advice where the two conflict. The 2022 setting is only the older route to the pixel. [L1281, 2022; L1027, 2026]

### Email and SMS Consent

**SMS**

- SMS sales messages need consent. Show the consent in two places:
  - in checkout, next to the phone number field, with a short note on how the number will be used,
  - in the privacy policy and terms. [L1114, 2023]
- Keep SMS abandoned cart messages disabled until SMS consent is set up correctly. Sending SMS without consent can lead to fines. [L1114, 2023]
- A pre-ticked SMS consent checkbox is not valid consent under GDPR. Leave the phone marketing opt-in unticked so the customer must actively agree. [L1213, 2023]

**Email**

- The pre-chat form can include a checkbox that opts visitors in to marketing emails. Checking it adds them as email subscribers. In one 2023 setup, the default setting for this opt-in was left unchanged. Review that default before you go live. [L1311, 2020-26]
- Never add purchased or rented email lists to a store's marketing. They hurt email deliverability and sender reputation, and they make it harder for legitimate opt-in subscribers to receive messages. [L0836, 2024]

### Anti-Spam Requirements

- Automated marketing emails must show a valid business address. Anti-spam law in the US, Australia and the EU requires it. Drip or Klaviyo insert the address from the Shopify account. [L1298, 2021-22] **
- Removing the tawk.to app triggers a request that erases customers' personal data held by tawk.to after 48 hours. [L1298, 2021-22] **

### Subscription Compliance

- Subscription compliance is critical. If subscriptions are a substantial part of revenue and non-compliant (unclear billing terms, difficult cancellation, poor disclosure), one lawsuit can destroy the business. [L0041, 2025-26]
- Check your billing terms, cancellation path and disclosures against the rules of each region you sell to. [L0041, 2025-26]

### User-Generated Content

- Add a user-generated content clause to the terms and conditions. [L1012, 2021-22] **
- The clause states that any content a customer provides becomes the business's property once they buy. This covers:
  - reviews,
  - images,
  - video,
  - survey responses,
  - social comments. [L1012, 2021-22] **
- The clause also protects the business if a customer later disputes the use of their content. [L1012, 2021-22] **

### AI Tools and Customer Data

- Assume that any data you put into an LLM carries some risk, because AI data handling is ambiguous. Claude is currently among the safest options because of Anthropic's commitment to data protection. Understand and accept this risk before you proceed. [L0218, 2025-26]
- Before you paste any data into an AI tool:
  1. Anonymise the brand name if needed. [L0876, 2025-26]
  2. Remove confidential information. [L0876, 2025-26]
  3. Know your own data handling rules first. Data sent to an AI tool leaves your account. [L0876, 2025-26]

### Call Recording

- Recording customer calls without informing the caller can be illegal in many places. Check local law before you record calls. [L0910, 2015]
- The lesson describes a recording service with unreliable quality and does not recommend it. [L0910, 2015]

### ADA Accessibility

- ADA lawsuits target websites that cannot be read. Companies may receive compliance letters, which force expensive responses, or they may be sued directly. [L0041, 2025-26]
- Invest in website accessibility and in terms of service that people can read. [L0041, 2025-26]


Part 28 of 34 of "18. Legal Tax Banking and Payments: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments.md · Previous: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/27-terms-of-service-template.md · Next: https://dlichters.com/ai/ecom/deep/18-legal-tax-banking-and-payments/29-ad-platform-compliance-and-account-setup.md
