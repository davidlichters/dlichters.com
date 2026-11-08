<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 11 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/10-discounts-and-coupon-codes.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/12-checking-supplier-rules-before-discounting.md

### Pop-up, SMS and email codes

- Klaviyo pop-up code, created in Shopify:
  1. Go to Discounts in the left menu and create a new discount.
  2. Enter a name, for example "save five".
  3. Choose fixed amount instead of percentage and enter $5.
  4. Optionally limit the code to one use per customer or set a minimum purchase, for example $50.
  5. Save the discount and give the code to the pop-up success step.

  [L1297, 2023]
- Clavio pop-up coupon, created in Shopify:
  1. In Shopify, go to Discounts and click Create discount.
  2. Choose Amount off order.
  3. Enter a code name such as SAVE5.
  4. Select a fixed amount of 5 dollars.
  5. Set the usage limit to one use per customer.
  6. Click Save discount, then enter the same code in the Clavio pop-up coupon field.

  [L0634, undated]
- SMS discount link: build it as your store domain followed by /discount/ and the code name, for example storedomain.com/discount/CODE. The discount must be set to auto-apply at checkout, so the customer does not need to type the code. [L1470, 2025-26]
- Before going live, test both the SMS code and the email code at checkout with a real item in the cart. Confirm the discount is applied automatically and the amount matches the offer shown in the message. [L1470, 2025-26]
- Test a customer who has both an email code and an SMS code, and confirm at checkout that the 15% code replaces the 10% code instead of stacking. Run this test with a cart of realistic value, such as about $110 in the example, so the discounted total is visible before payment. [L1470, 2025-26]
- Use a benefit-selection popup that asks what the visitor wants (for example focus and memory, reduce inflammation, boost immunity, improve gut health) and reveals a mystery discount. Include an exit option that says no thanks and pay full price. [L1164, 2026]

### Shopping, ad and Merchant Center promotions

- Discount codes shown in Google Shopping ads appear as promotions. Advertising a discount on lower-margin products can cost margin without adding sales, so offer discounts only where the margin allows. *2025.* [L0472, 2025]
- Merchant Center promotions appear inside Shopping ads and are created in Google Merchant Center, not in Google Ads. They only become visible after the products have synced and the account is serving ads, so they will not show when the Merchant Center account is first created. [L0712, 2020-26]
- Create a Merchant Center promotion as follows:
  1. Open the promotions section in the left column of Merchant Center.
  2. Enter an ID name for the promotion.
  3. Select the country in which the promotion should be served.
  4. Enter the promotion details.
  5. Enter the redemption code the customer will use.
  6. Apply the promotion to specific products or to all products.

  [L0712, 2020-26]
- Promotions must be clear and testable: the coupon code must work on the store because Google bots try to enter it. Submit promotions in advance so they can be re-submitted if not approved. *Older (2022).* [L0665, 2022]
- Set up promotions in Google Merchant Center; percent-off promotions on products can be configured there. *Older (2022).* [L0665, 2022]
- Do not offer free shipping in Google Merchant Center promotions without a coupon code if the policy has changed. Instead, use a different promotion type such as a fixed-amount discount on a large order. [L1115, 2024]

### Offer strength by traffic source and product type

- Traffic from TikTok expects strong deals: buy-two-get-10-percent-off or buy-two-get-5-percent-off offers are weak. Audiences look for discounts of roughly 20, 30, 40 or 50 percent. [L1260, undated]
- Traffic from TikTok expects strong deals, typically 20%, 30%, 40%, or 50% off. Small discounts such as 5% or 10% off usually do not work for this audience. [L1345, 2021+]
- Strong offers that work on the store include buy one get one free, buy this and get this item free with the product, and a maximum discount of 70 percent off; 50 percent off is the usual baseline. Electronics may not suit buy one get one free, while items like jewelry often suit it. [L1382, undated]
- Bundle offer: buy two items and receive a fixed discount of 14 dollars. A separate code of 5 dollars was offered for customers who wanted to buy only one item, and both codes were used a lot. [L1439, 2024+]
- Fluffy brand case study (wearable blanket, Switzerland, store offers): about 30 off the blanket (spoken as "like 30 off" right after saying the Swiss franc is about equal to the US dollar, so read as about 30 CHF or $30 off; the transcript has no percent sign, some summaries read it as 30%), free shipping within Switzerland, stock held in Switzerland so delivery in 2 to 3 days, buy two and save 14 (CHF, about $14), or buy one with a code and save $5 [06:08]-[06:15]. [L0492, 2023+]
- *Older wording, replaced on 2026-11-07 (it lost the brand name and turned "30 off" into "30 unit"):* Blanket example: the store offered a 30 unit discount on the blanket, with free shipping within Switzerland and delivery in 2 to 3 days from local stock. A buy-two offer saved 14, and a single-item code saved 5. [L0492, 2023+]
- Partner and backlink coupon strategy:
  1. Create exclusive coupon codes for affiliate partners (e.g., `PARTNER5OFF`).
  2. List coupons on coupon aggregator websites in your niche.
  3. Use free shipping coupons, percentage discounts (5% off), or holiday-specific codes.
  4. Monitor which coupons drive conversions and repeat best performers.
  5. Some aggregator sites provide backlinks; prioritize those.

  [L0226, 2017]
- Launch discount strategy: offer a 50% off coupon to generate rapid sales. Example: a 50% off coupon resulted in 402 sales in 2 weeks at break-even price. Benefits: drives rankings, generates reviews, creates repeat customers (especially for consumables like supplements). [L0227, 2014]
- Asking a supplier to include custom coupon cards in shipments is allowed. Some suppliers agree and others do not have the resources, so the request is worth making. *Older (2018).* [L1085, 2018]

### Where sources disagree

- **Expiry cadence.** Wednesday and Sunday midnight is the twice-weekly cycle in the one source material [L0137, undated; L0531, 2020-26; L1085, 2018]. The Tuesday/Thursday or Saturday rhythm is an alternative, with the same rule of at least one expiry per week and never daily [L1293, 2014]. Use the Wednesday and Sunday cycle when running a banner that refreshes twice weekly; use the alternative when a store wants a different rhythm.
- **Expiry on every offer.** Expiration dates create urgency [L0040, 2020-26]. Strict expiry is not required on every offer, because always-on offers still work for buyers who use them now [L1293, 2014]. Use strict expiry for time-limited campaigns and dated promotions; use always-on offers for standing benefits.
- **Coupon-page deadlines.** A coupon page only needs to feel time-limited, and the codes need not expire in reality [L1357, 2018]. Where the page or code states a specific end time, the code must stop at that time [L1322, 2020-26; L0857, 2025].
- **Percentage versus dollar-off.** Percentage is the default [L1404, 2025-26] and the usual Shopify choice [L1322, 2020-26]. Dollar-off suits pop-ups and emails and higher-AOV or bundle offers [L0476, undated; L0232, 2026]. Both are roughly equivalent in effect [L1404, 2025-26].
- **Size of discount.** The starting test size is 5% [L1192, 2020-26]. Coupons are commonly 5-10% [L0137, undated]. Volume and traffic offers need 20-50% [L1259, undated; L1260, undated]. Each figure depends on context: test size, competitor baseline, or audience expectation. Margin decides whether any of them is affordable [L1097, 2025; L1148, 2021-22].
- **Standing sitewide discounts.** A standing discount erodes margin [L0409, 2021-22]. A sitewide 10% reduced to 5% keeps a site-wide discount while protecting margin [L1097, 2025]. An expiring sitewide code is an accepted format [L1085, 2018].
- **Minimum order values.** Alex's example recommended a starting threshold of about $200 at AOVs of $300-$1,000 ** [L1111, 2020]. The Shopify example sets $2,000 as the threshold [L1322, 2020-26]. Choose the threshold to match your own AOV.
- **Free shipping in promotions.** Free shipping is an option on coupons [L0226, 2017]. Under Merchant Center policy changes, free shipping is not offered without a coupon code [L1115, 2024].


Part 11 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/10-discounts-and-coupon-codes.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/12-checking-supplier-rules-before-discounting.md
