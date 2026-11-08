<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 10 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/09-price-testing-and-price-changes.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/11-pop-up-sms-and-email-codes.md

## Discounts and coupon codes

### Discount types

- Percentage off is the default offer type for most stores. [L1404, 2025-26]
- Percentage and dollar-off are close to equivalent in effect; the one source test found little difference. Some people use the rule "dollar-off when the discount is over $100, percentage-off below that"; the speaker says he does not necessarily agree with that rule and simply mixes both. [L1404 "Umsatz verdoppeln mit Angeboten" / "2X Your Revenue With Offers", 2025-26, transcript 10:50 and 11:13] (Older wording, replaced on 2026-11-07: "A common rule of thumb is dollar-off when the discount is over $100 and percentage-off below that, and mixing both is acceptable." It presented the $100 rule as accepted and hid that the speaker disagrees.)
- Percentage is the usual choice in Shopify. A code such as save 10 would be set to 10%. [L1322, 2020-26]
- Fixed-dollar discounts are easier for shoppers to picture than percentages. Use a dollar amount for pop-up and email codes where possible, and compare it against a percentage offer if conversion stalls. [L0476, undated]
- Dollar-off offers such as "Save $20," "Save $30 on first orders," or "Save up to $80 sitewide" work best for higher-AOV products or when bundling multiple items. [L0232, 2026]
- Discount scopes to choose from:
  - Site-wide: one percentage on all products. [L1404, 2025-26]
  - Specific SKUs: a set percentage or dollar amount on selected products. [L1404, 2025-26]
  - Tiered: for example, spend $100, then get 20% off the amount after that. [L1404, 2025-26]
- Spend-threshold discount: spend 1,000 USD and save 100 USD on any order over 1,000 USD. This is simpler to understand than a percentage discount with a dollar cap. [L1090, 2021]
- Spend-and-save example for a homebrew equipment store in January: during the first week, orders over $500 save $50, and orders over $1,000 save $75. Spend thresholds can be varied freely to match the store's average order size. [L1205, 2020-26]
- Tiered discounts, such as 5% on orders of $250 or more and 10% on orders of $500 or more, are built by creating separate Shopify discount codes and setting a minimum order amount on each. *Older (2021).* [L0671, 2021]
- Tiered spend discount used for Black Friday promotions **:

| Order spend | Discount |
|---|---|
| 400 dollars or more | 15% off |
| 800 dollars or more | 20% off |
| 1,200 dollars or more | 25% off |

  [L0801, 2021]
- Low-value tiered coupons reward larger orders, for example $10 off at $500 spend and $20 off at $1,000 spend. Choose tier values based on what competitors offer in your niche. [L1357, 2018]
- Use a discount code rather than an automatic discount when the offer should be targeted. A code requires the shopper to enter it at checkout, while an automatic discount applies to every cart. [L1322, 2020-26]
- An automatic site-wide discount of 10% was active on the example product page. Compare an automatic discount against a coupon code with a deadline when setting up your own offer. [L0655, undated]
- A monetary percentage promotion is a fixed percent off (for example 5% or 10%) for a set time, applied when the customer enters a coupon code. It can be shown store-wide, but it should be sent specifically to the audience that has engaged but not bought. [L1205, 2020-26]
- Time-limited discount codes create urgency. They can be offered as a reward for joining the email list, shown in an exit-intent popup when a visitor is about to leave, or displayed with a countdown timer for new customers. [L1400, undated]
- Limited-time discount or coupon codes use urgency to push buyers to purchase sooner. They can be given to new email subscribers or shown in an exit-intent popup as the visitor is about to leave. [L1399, undated]

### Discount sizes

- Starting point for testing: a 5% order discount. You can create as many discount codes with different values as you need. [L1192, 2020-26]
- Coupon codes: offer 5-10%. 10% is competitive because most competitors either do not promote discounts or offer less than 10%. [L0137, undated]
- Expiring coupon percentages: the typical levels used are 5%, 7% or 10% off, and this depends on the store. [L0531, 2020-26]
- Competitor first-order discount: about 10% in exchange for an email signup. *Competitor example, not dated.* [L0600, 2026]
- Welcome kit for newsletter sign-ups: usually 5-10%, which customers see as the usual reward. [L0605, undated]
- Typical sign-up incentives are a 5% or 10% discount, or a fixed $5 discount. A 10% first-order discount is the standard used in this setup. [L0607, undated]
- Volume offers: typically 20 to 50 percent. Discounts of 10 percent or 5 percent are seen as weak by the audience. [L1259, undated]
- Bundles: 15% is a reasonable starting point, but it must fit the margin. [L1259, undated]
- Ceiling for strong offers: a maximum discount of 70 percent off, with 50 percent off as the usual standard. [L1436, undated; L1382, undated]
- Launch discount: 50% off to generate rapid sales. [L0227, 2014]

### Sizing discounts to margin

- Calculate margin after coupons, not before them. If net margin after discounts is only 12 to 15 percent, the current discount structure should be changed. [L1097, 2025]
- Only offer discounts on your site if you can afford them. [L0966, 2025]
- Before offering a first-order discount such as 5% or 10% off, check on the pricing sheet that gross profit stays positive at that discount. A small percentage can turn a product with thin margin into a loss. *Older (2021-22).* [L1148, 2021-22]
- Effect of discounts on Product A (list price $1,000, supplier cost $600, supplier shipping $150, free customer shipping; gross figures before processor and insurance fees):

| Discount on list price | Price charged | Gross profit | Gross margin |
|---|---|---|---|
| 0% | $1,000 | $250 | 25.00% |
| 5% | $950 | $200 | 21.05% |
| 10% | $900 | $150 | 16.67% |
| 15% | $850 | $100 | 11.76% |

  *Older (2021-22).* [L1148, 2021-22]
- A 5% discount on a product with $1,000 net profit (for example, a $50 discount) remains profitable and is worth offering if it increases conversion rate. [L0253, 2024]
- A coupon such as 100 USD off orders over 1,000 USD can be offset by raising prices slightly, but if competitors undercut you, a smaller incentive such as 50 USD off orders over 1,000 USD is the safer option. [L0966, 2025]
- When margins are too thin, a sitewide discount of 10 percent off all orders can be lowered to 5 percent off all orders. This keeps a discount on the site while protecting margin on each order. [L1097, 2025]
- Replace a percentage-off code with a minimum-spend code, such as $50 off orders over $1,000, or $100 off orders over $2,000 for higher-priced stores. Create the rule in Shopify's discount codes so it applies automatically. This raises average order value while giving less discount per order. [L1097, 2025]
- Set eligibility by profit, not by a blanket rule. Example: 20 percent off orders over 250 dollars requires any starter kit, while free expedited shipping requires a premium kit. [L1204, 2022]
- Bundle headline math: a bundle is advertised as access to its listed tools at one tenth of their list price, and its title frames this as 95% off. If the extra 10% code applies to the bundle price, the total discount is about 91% off list, not 95%. Compare the final checkout total with the list prices of the tools you would actually buy, not with the headline percentage. [L1387, 2026]
- Discounts go straight to lost profit. Limit discounts or stop offering them entirely. Some stores have kept sales volume while refusing negotiated discounts, so the effect on orders can be tested. *Older (2021-22).* [L1046, 2021-22]
- Do not hand out irresistible deals without a reason. Offering a discount too early gives away margin to people who would have bought anyway, and it can also weaken the urgency of future deals. *Older (2021-22).* [L0799, 2021-22]
- Do not run a standing discount on product pages as a permanent sales tactic, especially when margins are thin. A permanent 5% discount erodes margin without making the offer more convincing. *Older (2021-22).* [L0409, 2021-22]
- Promotions such as discount codes or sitewide sales should be created with a set start and end date and tested against margin before launch, so that they do not erode profit unintentionally. [L0430, 2023]
- Price the store at MAP and apply all discounts off MAP, which is the compare-at price. Never raise the price first and then discount it. *Older (2021).* [L1090, 2021]
- Average order value in the examples ranged from about $300 to about $1,000, and a minimum of about $200 was recommended as a starting threshold. *Older (2020).* [L1111, 2020]
- Minimum order values can be set so a code only applies above a threshold, for example 2000 dollars, which means 10% off orders above 2000 dollars. [L1322, 2020-26]

### Shopify setup

- Create the discount code in the Shopify admin before it is shown on any product page, because it has to work at checkout for shoppers who enter it in the cart. [L1192, 2020-26]
- Create any discount code in Shopify's discount section before you show it in the announcement bar or an exit-intent overlay. A code that does not exist in Shopify will not apply at checkout. *Older (2020).* [L1088, 2020]
- Procedure for a 5% order discount:
  1. Log in to the Shopify admin.
  2. Click Discounts in the left navigation.
  3. Click Create discount at the top.
  4. Select the discount type Amount off order (a discount on the total order amount).
  5. Name the code in the format save plus the number, for a 5% code the name is save five.
  6. Set the discount value to Percentage and enter 5%.
  7. Under customer eligibility leave the setting on All customers.
  8. Leave the minimum purchase at none and the usage limit unlimited.
  9. Leave the start date at the default, which is the day the code is created.
  10. Leave the end date empty unless the code is for a timed promotion such as Black Friday or Cyber Monday.
  11. Click Save and confirm the code shows as active in the Discounts list.

  [L1192, 2020-26]
- When a shopper enters the code in the cart at checkout, the percentage is deducted from the entire order total. [L1192, 2020-26]
- Customer eligibility can be limited to specific customer segments, such as a segment of past buyers, which allows a code for returning customers only. Specific customers can also be selected by their email address. [L1322, 2020-26]
- The combination option for other promotions controls whether several discounts can stack on one order. Keep it turned off unless stacking is intended, because the default start date is the current date and time. [L1322, 2020-26]
- The start date defaults to the date and time when the discount is created, so leaving it unchanged makes the code active immediately. An end date can be added to limit the code to a set window. [L1322, 2020-26]
- Set an end date for limited promotions such as Black Friday, Cyber Monday, or 4th of July, after which the code stops working. Without an end date, a time-limited promotion stays valid indefinitely. [L1322, 2020-26]
- Regular Shopify plans do not automatically end a sale price. Set the discount code to stop working at the sale's end time, for example midnight on the last day, or use an app. *2025.* [L0857, 2025]
- When creating a discount code in Shopify, choose the collections it is eligible for. Leave out collections containing products the discount may not apply to, such as products from vendors whose MAP policy forbids discounts. [L0837, 2025]

### Code naming

- Discount code names should reflect their value using the format save plus the number written out, so a 5% code is named `save five`. [L1192, 2020-26]
- Give every discount a named reason, such as a seasonal event or a Black Friday offer, so it looks realistic. A fixed-amount discount can also be named, for example as an $11 discount. [L1194, undated]
- Name a discount code with a short word tied to the product or brand plus the percentage, so the shopper sees the saving in the code itself. The code in use was a 15% code with that format, and it was linked so the discount applies at checkout. [L0567, 2025-26]
- Code names used in the examples: `WELCOME10` for a 10% welcome code [L0607, undated], `SAVE5` for a $5 pop-up code [L0634, undated], `save five` for a $5 Klaviyo pop-up code [L1297, 2023], and `PARTNER5OFF` for an affiliate partner code [L0226, 2017].

### Limits and eligibility

- Limit sign-up coupon codes to one use per customer. Without this limit, a reusable code can be spread widely and erode your margin. [L0476, undated]
- Discount codes that SMS apps generate automatically may be reusable by any customer by default, unlike the one-use-per-customer limit set in Shopify. Before launching an SMS discount flow, check the usage limit of each generated code so the offer does not spread beyond its intended audience and cost the store margin. [L0476, undated]
- Maximum discount uses can be set to 5 uses in total, 10 uses in total, or once per customer. A code limited to one use in total can be redeemed by only one person. [L1322, 2020-26]
- Exclude customers who made recent purchases from discount promotions, specifically the most recent purchasers, to reduce complaints and buyer's remorse. [L0238, 2019]
- If the buyer's email address is not known, a personal code can be limited by a short end date instead of by naming the customer. Adding a single total use means only one person can redeem it. The short window also creates urgency for the buyer. [L1322, 2020-26]
- During peak sales, a discount code input can serve different customer segments with different codes, for example one code per customer tier. Each code entered in the cart shows its effect on the subtotal before checkout. [L1231, 2025-26]
- Keep a list of coupon codes the assistant may offer on its own, so standard discounts never need approval. Anything outside that list still requires the owner's approval. [L1000, 2017]
- Sample coupons: mark them for products that children could misuse as adults only, since children rarely mail coupons in. Pair this with a one-sample-per-household rule. [L1261, undated]
- Do not announce coupon redemption dates in advance, because advance knowledge lets resellers buy up newspapers. Run such coupons in Sunday editions, which are harder to buy in bulk. [L1261, undated]
- Military or first responder discount with low volume:
  1. Create a content page explaining the discount policy.
  2. Ask customers to email proof of service.
  3. Send a discount code after the proof is checked.

  No app is needed at this volume. *Older (2022).* [L1281, 2022]

### Expiry rules

- Coupon codes should include expiration dates to create urgency and motivate immediate purchase decisions. [L0040, 2020-26]
- A short validity window, such as 24 hours, creates urgency because the buyer must order before the code expires. Pairing the window with a personal code makes the offer feel specific to that buyer. [L1322, 2020-26]
- An end date is a fixed point in time. When a buyer is told when a code expires, state the date, the clock time and the time zone, for example midnight Eastern time. Saying only a relative word such as tomorrow leaves the deadline unclear. [L1322, 2020-26]
- Use one discount code with a fixed percentage that expires at a clear time on the same day, and link the button so the discount applies automatically at checkout. The offer in use was 15% off with a code that expires at midnight. [L0567, 2025-26]
- Strict expiry is not required on every offer. Coupons that look permanent lose their urgency, but a discount that is always "on sale" still works for buyers who use it now. [L1293, 2014]
- Example: a 15% code for first-time buyers that expires in 24 hours, shown in an exit popup. [L1400, undated]
- Recurring expiring coupon codes, for example 5% or 10% off, rarely lead customers to see the discount as permanent. Returning customers are happy to use the code and save money. *Older (2019).* [L0960, 2019]
- Upfront expiring coupons and a bonus gift can be used to compete with a supplier's own website when you can match its pricing. *Older (2020).* [L0664, 2020]

### Expiring-code cycles

- Expire the promoted coupon code twice a week, typically at midnight on Wednesday and Sunday, and show a new code and offer for the next cycle. These specific days convert best; the source sets the times at midnight EST. [L0137, undated; L0531, 2020-26]
- Update the code and the expiry text in the bar together each time. [L0531, 2020-26]
- In each expiring-code cycle the coupon code changes every time, but the discount percentage is only changed occasionally. A store that keeps the same percentage still has to refresh the code and the bar text on schedule. [L0531, 2020-26]
- Standard promotion: 10% off with an expiring coupon code, where the offer itself stays evergreen and only the coupon code and expiry date change. When one promotion ends, the next one starts with the same offer and a new code. *Older (2018).* [L1085, 2018]
- Expiring coupon promotions can run as a banner at the top of the store that ends on fixed weekdays, for example every Wednesday and Sunday. When one promotion ends, the next one starts right away with the same offer and a new coupon code, so the banner never goes empty. *Older (2018).* [L1085, 2018]
- Alternative rhythm: change coupons on a regular rhythm, such as every Tuesday and Thursday or every Saturday, and let them expire at least once a week. Do not make them expire every single day. [L1293, 2014]
- Expiring coupon block: it shows a coupon text such as 10% off and free shipping, followed by a coupon code field. The coupon code must already exist in Shopify before you enter it in the block, or it will not work for visitors. [L0976, 2024+]
- Expiring coupon block settings: you can change the word before the date (default ends), set the number of days until the offer expires, and change the date format. The default date format can be switched to day-month-year for stores outside the US. [L0976, 2024+]
- Dynamic Day Cart Coupon block: it requires a discount code that must be created in Shopify before it is configured. The block then takes three inputs: the discount code, the percentage off, and a custom text that describes the day-based deadline. [L1450, 2020-26]
- The block uses a day slot in its custom text, so the merchant writes the surrounding wording and the offer deadline day is shown dynamically in the cart. The merchant does not need to type a fixed weekday into the text each time. [L1450, 2020-26]
- A dynamic day coupon is not needed on a store without traffic. Hide or delete it at launch and add it once there is traffic, so its effect on conversion rates can be compared. [L1450, 2020-26]
- Meta ads: a promo code highlighted in the Meta ad setup appears to shoppers in the store and is applied automatically at checkout. Only use a code that will remain active permanently, such as an evergreen Shopify code, because an expired code breaks the running ads. [L1029, 2020-26]

### Coupon pages and promotion copy

- Create a coupon page on your store that lists current expiring coupons. Shoppers who are still comparing often search for these pages, so it can catch people who need one last push to buy. [L0920, 2018]
- Build a coupon page that lists your codes with a sense of urgency. The codes do not have to expire in reality; the page only needs to make the deal feel time-limited. Customers find it by searching your store name plus the word coupon, so an internal link is optional, and you can add a countdown timer. [L1357, 2018]
- Where the page states a specific end time to the buyer, the code must actually stop at that time. [L1322, 2020-26; L0857, 2025]
- Coupon pages can carry several offers, including product-specific codes. Savvy shoppers who search for coupons do not want to miss a deal, so an expiring offer is the final push to convert them. Test different versions to see which one works in your niche. [L1357, 2018]
- Coupon page copy pairs a light, friendly welcome with a deadline line. The welcome makes the visitor feel they found something exclusive, and the countdown line creates urgency to buy now.
  - *Example A:* You found our hidden savings page, so take 15 percent off before this code closes in 3 days.
  - *Example B:* Welcome to our insider deals list, and this bundle discount ends in 48 hours.

  [L1357, 2018]
- Discovery check: find discounts to use in this order:
  1. Review the discounts your top competitors run.
  2. Use low-value, tiered coupons rather than deep one-off discounts.

  [L0920, 2018]

### Welcome and first-order discounts

- Competitor stores offer a first-order discount of about 10 percent in exchange for an email signup. Use a signup popup or banner with this offer to build an email list at the same time. [L0600, 2026]
- The welcome kit discount for newsletter sign-ups is usually 5-10%, which customers see as the usual reward. Offer a collection link right after the coupon code. [L0605, undated]
- Customer VIP sign-up discount example: 30% off an $80 product for customers who sign up for the launch list before it goes live. [L0605, undated]
- Create the matching welcome discount in Shopify before building the sign-up form:
  1. In the Shopify store, open Discounts and click Create discount.
  2. Select Amount off order.
  3. Enter the discount code, for example WELCOME10.
  4. Set the value to 10 percent off.
  5. Set minimum requirements to no minimum.
  6. Limit the code to one use per customer.
  7. Click Save.
  8. Before creating a new code, check whether a suitable code already exists and reuse it.

  [L0607, undated]
- Welcome series coupon: select a static coupon, enter the existing code (for example WELCOME10) and set it to 10 percent off. [L0607, undated]
- Formula for a first-order offer: [discount amount] + [which order it applies to] + [time limit]. Naming all three makes the discount concrete and creates a deadline without vague promises. *Older (2021-22).* [L0571, 2021-22]
  - Example 1: *Take 10% off your first order, valid for the next 48 hours after you join the list.*
  - Example 2: *Get 15% off your first order, valid for 36 hours after you subscribe.*
- Do not offer a discount in the first two to three abandoned cart emails. Upfront discounts train customers to abandon carts and wait for rewards. Introduce the discount offer only after multiple high-value touchpoints (desire, pain, risk mitigation emails). [L0261, 2025-26]
- Use a two-tier welcome offer: email subscribers get 10% off sitewide, and SMS subscribers get an upgraded 15% code as a VIP reward. The higher tier for SMS rewards the channel that also needs consent. [L1470, 2025-26]


Part 10 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/09-price-testing-and-price-changes.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/11-pop-up-sms-and-email-codes.md
