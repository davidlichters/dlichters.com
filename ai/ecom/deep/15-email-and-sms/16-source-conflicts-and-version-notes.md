<!-- part of ecom/deep/15-email-and-sms.md -->
Part 16 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/15-upsell-and-cross-sell-sequences-per-product.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/17-sms-marketing-compliance-opt-in-and-flows.md

### Source Conflicts and Version Notes

- **Second survey or review timing:** The survey timing differs by what it measures. A survey on the product itself is sent about 14 days after purchase, after delivery [L1052, 2021]. A survey on the on-site experience or customer service can be sent closer to purchase, at about 3 to 4 days [L0682, 2021-22; L1052, 2021]. The one source sequence places its feedback survey at 10+ days [L0203, 2021]. Use the rule that matches what the survey measures.
- **Review request timing:** Judge.me's default is 14 days after purchase [L1245, 2020-26]. A Klaviyo review flow is set from the actual average delivery time plus a buffer, such as 10 days when shipping takes about 7 days [L0417, 2020-26]. Use the Klaviyo delay for flows you build, and the Judge.me default only if you keep Judge.me's request.
- **Review sending channel:** The 2022 advice is to send review requests through Klaviyo, not Judge.me's emails [L0429, 2022]. The Judge.me email is not a deal breaker if the store is already satisfied with it [L0429, 2022]. Keeping the request in Klaviyo keeps the whole sequence in one place [L0429, 2022].
- **Referral timing:** The one source sequence sends the referral email at 8+ days, after the post-purchase calls are confirmed [L0203, 2021]. The later advice is to promote the referral program in an email shortly after the first purchase, and to repeat it [L1234, 2021]. Both apply: the first mention shortly after purchase, and a later introduction once the customer has had a positive experience.
- **Thank-you discount level:** The Clavio flow uses $15 off or 15% off [L0476, undated; L0634, undated]. The thank-you template uses a 15% discount [L0634, undated]. The post-purchase storewide offer uses 15% [L0606, undated]. Choose the amount you can afford, and check the margin on a typical repeat order before setting 15% [L0606, undated].
- **Second thank-you email timing:** The structure gives the second email roughly two days after the first [L0573, undated]. The step-by-step procedure sends it 2 days after the order [L0607, undated]. Both describe a second email about two days later, so measure the gap from the event your flow uses.
- **Open rates:** Average open rates are about 20 to 30 percent [L1408, 2021] and about 30 percent [L0682, 2021-22]. Either figure justifies repeating offers and reminders.
- **Upsell timing:** The first-day sequence sends upsells at 1 hour, 25 hours, 48 hours and 60 hours after purchase [L0203, 2021]. The long campaign repeats 3 to 4 emails immediately after purchase, then at 15 to 30 days, 60 days and 120 days [L1408, 2021]. Both apply: the first runs in the first days, the second repeats the offer over months.
- **Version notes:** The following units come from sources dated 2020 to 2022 and should be treated as older: [L0203, 2021; L0406, 2021; L0429, 2022; L0493, 2021-22; L0568, 2021-22; L0602, 2021-22; L0682, 2021-22; L0956, 2021; L1052, 2021; L1111, 2020; L1234, 2021; L1408, 2021; L1409, 2021]

### Flow structure per core product

- Do not build one email flow for all core products. Each core product needs its own flow with its own purchase trigger, otherwise the emails will not match the product the customer bought. [L1409, 2021]

### Post-purchase upsell email

- Pattern:
  1. Thank the buyer for the core product just purchased.
  2. Name a related product that pairs well with it.
  3. Include a button that adds the product to the cart in one click. [L1409, 2021]
- Example templates:

```
Thanks for your order of the [core product]. The [related product] pairs well with it, so add it here in one click.
```

```
Your [core product] is on its way. Many buyers also add the [related product] at the same time. Tap here to add it to your order.
```
[L1409, 2021]

### Repeat buyers

- Customers who have already bought once should not receive the same offer again straight away. [L1456, 2021-22]
- If a repeat-purchase email does not convert, the offer is probably wrong for them, or they need useful content for a while before the next sales email. [L1456, 2021-22]

### Complementary products for past buyers

- Past buyers can be contacted by email to offer complementary products later, which turns a first purchase into a second and third sale. [L1486, 2021-22]
- This only works when the niche has a product range that suits the same customer. [L1486, 2021-22]

### Personalized recommendations with AI

- Automated, AI-powered email flows send personalized product recommendations. [L1459, 2026]
- They are used to keep customer retention high. [L1459, 2026]


Part 16 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/15-upsell-and-cross-sell-sequences-per-product.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/17-sms-marketing-compliance-opt-in-and-flows.md
