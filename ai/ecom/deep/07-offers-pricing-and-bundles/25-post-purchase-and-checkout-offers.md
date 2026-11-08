<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 25 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/24-cart-upsells-and-cart-drawer.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/26-value-ladders-subscriptions-and-repeat-purchase.md

## Post-purchase and checkout offers

### Core principles of post-purchase offers

- A post-purchase upsell is shown after checkout is complete, so the extra offer adds no friction to the original purchase. ReBuy presents it as a risk-free way to lift revenue from orders that are already placed. [L0593, 2025-26]
- Post-purchase upsells raise average order value. This matters most when margin per order is low, for example around 25 USD, because even a 5 USD increase per order adds up over many orders. [L0693, 2024]
- Customer acquisition cost is already paid on the first purchase, so it can be removed from the margin calculation for upsells and cross-sells. [L1404, 2025-26]
- Lead Value Optimization (LVO) raises the value of every visitor by offering related products and services right after a purchase. These offers can come from your own catalog or from other companies promoted as affiliate products. [L0676, 2020-26]
- Configure LVO offers before building the post-purchase funnel, because the upsell and related-product sequences depend on them. Treat LVO as the prerequisite for the post-purchase layer, not as an optional add-on. [L0676, 2020-26]
- A modern sales funnel keeps selling to a buyer while they are still in the cart, before they leave the site. Each accepted upsell can be followed by another upsell, so every purchase builds on the previous one. [L0676, 2020-26]
- One-time offers and limited-time buy-now offers are a supporting tactic, not the main focus of a store's funnel strategy. [L0676, 2020-26]
- Always have an upsell ready. Show one or two upsells immediately after a purchase, on the same page before the buyer leaves; this is the simplest way to capture extra revenue from buyers who have already decided to pay. [L0523, 2015+]
- Upsell and downsell products must relate to the main product or belong to the same niche, so customers perceive them as natural complements to what they just bought. [L0291, undated]
- For a low-priced product, plan a pipeline on your own website where customers are upsold to higher-priced items. Plan the upsell path before traffic arrives. [L0768, 2021-22]

### Offer count and structure

- Each product should have at least one upsell. Two to three upsells are standard for typical conversion; up to four can be added for more aggressive offers. [L0291, undated]
- Structure the first upsell as the same product the customer bought, offered at a lower price point. [L0291, undated]
- Show the first upsell immediately after checkout as a one-click addition. Buyers accept congruent add-ons more readily while they are still deciding to buy. [L0378, 2019+]
- Shopify allows at most two levels of post-purchase upsells on checkout. [L1410, 2023]
- Conflict on the number of levels: the general structure allows up to four upsells [L0291, undated], but the Shopify checkout limit is two levels [L1410, 2023]. Use the two-level pattern where the Shopify checkout is the delivery point; longer chains apply where the setup allows them. [L0291, undated; L1410, 2023]

### Choosing the upsell product

- Make the first upsell your highest-value product that fits the buyer. Judge upsells by the dollars they bring per offer shown, not by conversion rate alone. [L0378, 2019+]
- Compare two upsells by revenue per offer shown:

```
Revenue per offer shown = price × conversion rate
```

A $100 upsell must convert about five times as often as a $500 upsell to bring in the same revenue per offer shown. [L0378, 2019+]

- Offer upsells that are highly congruent with the first purchase. They should enhance the product, deliver the result faster, or provide a done-for-you or automated version of it. [L0378, 2019+]
- The best first upsell is often more of the item the buyer already bought, especially a consumable they cannot use without. Buyers who need that item to continue an activity are the most likely to accept. [L0378, 2019+]
- Miniature versions of the existing product, or re-offering the same product, work well because customers already know it. [L1404, 2025-26]
- Keep upsell price at or below 14 dollars. The seller reports about 40 percent of buyers accept the upsell when it is combined with SMS, email and retargeting. [L0789, 2022]
- Conflict on price level: the 14-dollar ceiling applies to the reported setup with SMS, email and retargeting [L0789, 2022]. Higher-ticket upsells that fit the buyer closely also convert, as the case below shows, so judge price by revenue per offer shown [L0378, 2019+].
- Upsell price check: before publishing an upsell, compare the total the customer would pay after accepting with the bundle price on the product page for the same quantity. [L1141, 2026]

### Upsell and downsell sequences

#### Standard sequence

1. Present the first upsell.
2. If declined, present the first downsell (a lower-priced product from the same category).
3. If the first downsell is declined, either present the second downsell or direct the customer to the Thank You page.
4. If the customer accepts the first upsell, present the second upsell.
5. If the second upsell is purchased, present the third upsell or direct the customer to the Thank You page.
6. If the second upsell is declined, present the first downsell again, then direct the customer to the Thank You page.

[L0291, undated]

- A downsell is a cheaper alternative offered after a customer declines an upsell. It keeps part of the sale and adds revenue at a lower price point, and is used together with upsells to raise average order value. Older (2021-2022). [L0511, 2021-22]

#### Two-level pattern (Monster funnel)

- Pattern: on accept, the first upsell goes to the second upsell; on decline, the flow goes to the first downsell, then to the thank-you page, so every path ends at the thank-you page. [L1410, 2023]
- Build sequence in ReconvertUpsell:
  1. Set a trigger condition, for example product purchase data: a specific product (at least one item, or the entire order) with unit/item count equal to 1.
  2. First upsell: the same product at 15% off with a timer. On decline: the same product at 30% off (last chance).
  3. Second upsell on accept: a different product in the same niche (chosen via Shopify product recommendation or a selected item), with a discount.
  4. Thank-you page with recommended products, a share button and a collection section.
  5. Enable the funnel under Settings > Checkout > Post-purchase page > select ReconvertUpsell.

  [L1410, 2023]

#### Chained flow

1. Initial offer: BOGO 25% off.
2. If accepted, upsell a gift card worth 10% off.
3. If declined, downsell to BOGO 50% off.
4. If the gift card upsell is declined, show the same gift card offer at a higher discount.
5. Each accepted or declined step can start a new upsell or downsell, so the flow keeps going as long as the customer accepts or declines.

[L1413, 2025-26]

- Upsell after an accepted 25% BOGO offer: show a gift card worth 10% off. Gift cards raise average order value and also encourage a second purchase, because the buyer has to spend the credit. [L1413, 2025-26]
- Downsell pattern: after a shopper declines the first offer, show the same type of deal at a deeper discount, framed as a final chance. Examples: after a declined 15% bundle offer, show the same bundle at 30% off with the line *Final offer, this price ends at checkout.*; after a declined free-shipping offer, show a 20% off code with the line *One more chance before you leave.* [L1413, 2025-26]
- Test sequence for a same-item offer:
  1. Make the first post-purchase offer the same product at a strong discount.
  2. If the customer accepts, offer the same product again at an even better price, or a different product, and split test those two options.
  3. If the customer declines, offer the same product again at a bigger discount.
  4. Add a small app sell on the thank-you page.

  [L0693, 2024]

### Discounts and price checks

- Highest conversion among post-purchase discounts came from offering the same product at 15-30% off. The speaker started with 15% for the first offer and 30% for the final decline offer. [L1410, 2023]
- Setting range: after checkout, show a post-purchase upsell with a discount on the same or a complementary product, for example 20 to 40 percent off. Add scarcity and use an upsell app to implement it. [L0645, 2023]
- Conflict on depth: the 15-30% range [L1410, 2023] is the measured best in one store; the 20-40% range [L0645, 2023] is the general setting. Start at 15% and go to 30% for the final decline, as measured; widen toward 40% only with a tested reason. [L1410, 2023; L0645, 2023]
- Example: right after payment, show the same product or a complementary product at 50% off. The buyer's payment details are already stored, so one click completes the purchase. [L0871, 2021+]
- Discount ladder: second unit of the same product about 25% off, a three-unit bundle offer about 35% off, and a final downsell about 40% off. Later steps can carry higher discounts, but each must still pass the price check against its matching bundle price. [L1141, 2026]
- Upsell price formula and check:

```
Upsell price = unit price × (1 − discount)
Upsell total = price already paid + upsell price
```

Example with illustrative figures: a 40 USD unit at 25% off costs 30 USD; 40 USD + 30 USD = 70 USD, which must not exceed the 2-unit price on the product page. [L1141, 2026]

- Worked example for a 50 USD product in a post-purchase offer: 25% off gives 37.50 USD, 35% off gives 32.50 USD and 40% off gives 30.00 USD. Each deeper step must still be checked against the matching bundle price on the product page before the offer goes live. [L1141, 2026]
- Mistake: offers with unclear math confuse customers. They see a price that does not match the product page bundle and then complain by email, ask for refunds or open bank disputes. Each unchecked upsell price is a potential chargeback source. [L1141, 2026]
- After checkout, the buyer has already committed, so an add-on is an easy yes when its price is clearly better than the bundle price for the same quantity. Multi-unit add-ons are the strongest offers at this point. [L1141, 2026]

### Same-item repurchase offers

- Always test selling the same item at a discounted price in a post-purchase upsell first. Same-item offers showed the highest conversion even for expensive or heavy items; one store averaged around $150 per order. [L1410, 2023]
- A same-item repurchase offer was reported to work even for a store with an average order value near 150 USD and a heavy product. Test a discounted second unit before assuming an expensive or heavy product will not be bought again. [L1412, 2023]
- Add a low-cost add-on around 5-10 USD, or a post-purchase offer. After a customer has bought, offer the same item again at 20-30% off because the customer is already acquired. [L0363, 2022+]
- Post-purchase offer with a countdown: a countdown of about 10 minutes, with a second unit framed as a gift for someone else, a discount such as 15% off and a decline option shown as a small text link. [L1410, 2023]
- Pairing a discount with a time limit, such as 30% off for 10 minutes, creates urgency. Adding a countdown or time window to the offer page supports the discount. [L1411, undated]

### Case: a $7 ebook with a chain of offers

The project started with a $7 ebook, The 4 Foot Farm, which was being pushed with $15,000 to $20,000 of daily spend on Google Display Network. At a $7 sale price, covering $15,000 a day would have required 2,143 sales every day, a number that was out of reach. After checkout, the seller added a chain of one-click offers: a $9 print edition, a $27 monthly seed subscription, a $20 monthly newsletter, and a $497 physical growing kit that produces up to 100 pounds of food in a 4 by 4 foot space, with an optional $100 lifetime warranty. Around 2% of ebook buyers bought the $497 kit, which raised average order value to $40 to $44. At that order value, the daily break-even volume fell to 375 sales. A similar ebook with equally strong front-end conversion but less closely related upsells never reached the spend level needed to scale. [L0378, 2019+]

| Order | Offer | Price | Purpose |
|---|---|---|---|
| Front end | The 4 Foot Farm ebook | $7 | Entry purchase |
| One-click upsell after purchase | Printed version of the book | $9 | Congruent add-on |
| Upsell | Seed subscription for vegetables | $27 per month | Recurring value |
| Upsell | Newsletter subscription | $20 per month | Recurring value |
| Main upsell | Physical growing system for up to 100 pounds of food in a 4 by 4 foot space | $497 | About 2% of ebook buyers took it |
| Add-on to the $497 product | Lifetime warranty | $100 | Protects the main purchase |

[L0378, 2019+]

### Timing and channel

- An upsell does not have to happen at checkout. It can be offered straight after the first purchase or later, when the customer returns, so planning should cover both timings. Older (2021-2022). [L0448, 2021]
- If the checkout must stay short, place upsells and cross-sells in post-purchase email or SMS instead of inside the checkout flow. This keeps the path to payment to one or two steps while still offering additional products. [L0387, 2022]
- Before capturing payment for an upsell that ships from your own location:
  1. Email the customer and state the expected delivery time of 10 to 14 days.
  2. Ask the customer to confirm that they still want the order.
  3. Once the customer confirms, capture the payment.

  [L0966, 2025]

- Full upsell sequence on a store:
  1. The product page shows a comparison chart where a higher-end version fits.
  2. After Add to Cart, the replace-item pop-up offers the upgrade.
  3. The cart shows either the original or the replaced item.
  4. At checkout, the customer is offered an extended warranty and intangible products.
  5. The shipping upgrade is offered before the purchase is completed.
  6. After purchase, a phone call or message thanks the buyer and offers a relevant upgrade if it fits.

  [L1076, 2019]

### Free-plus-shipping and trial offers

- Free-plus-shipping is the favorite offer for qualifying buyers. Give a valuable product for free and charge only shipping. This gets it into a new customer's hands and reveals which subscribers are also buyers. It is the simplest entry offer for most physical or digital products. [L0523, 2015+]
- Pattern: a free-plus-shipping offer charges the customer only the shipping cost for the main product, so paid ads aim for near-zero net acquisition cost per buyer. The brand recovers its margin later through upsells and add-on products sold to that customer. Older (2021-2022). [L0511, 2021-22]
- Example: a $2 product with $2 in marketing cost sold as free plus $6.95 shipping. The $4 cost is covered by the shipping fee, so the campaign is cash-flow positive. [L0643, 2015]
- Setup: a common Zipify OCU setup makes the main product free and sets shipping to whatever cost covers your CAC or profit target. [L1299, 2026]
- Example from a Zipify OCU setup: the main product was free with $13 shipping, which produced +$7 revenue per visitor at a conversion rate of about 30%. [L1299, 2026]
- Conflict on shipping fee: the $6.95 example [L0643, 2015] and the $13 example [L1299, 2026] both use free product with shipping fees; the right fee is the one that covers your CAC or profit target for your own product. [L0643, 2015; L1299, 2026]
- About 30 percent of the people who took a free-plus-shipping offer bought something else immediately, so the next offer is the easiest sale. Present a related product on the post-purchase page or send buyers to the store. [L0643, 2015]
- Trial offer: charge a very low amount, most often 1 USD, and bill the full price a few days later unless the buyer cancels. It forces the visitor to enter a credit card and so proves they are a buyer. It works best for digital downloads, software and membership sites, which need no shipping. [L0523, 2015+]
- Post-purchase upsells in Zipify OCU may not display in multi-country setups unless the markets are configured correctly. In the US, the upsell works well without this extra step. [L1299, 2026]

### Checkout add-ons

#### Bumps

- Bumps are small add-on offers placed on the order form before checkout. They work like impulse items at a supermarket checkout and can change the transaction profitably. Bumps are used to identify and sell to hyperactive buyers at the point of sale. [L0523, 2015+]

#### Tips

- Customers may be willing to add a tip at checkout when they are happy with the store. A tip field can be added as a default in the Shopify checkout to test this. [L0774, 2023]

#### Shipping protection

- Shipping protection is priced at 3 dollars per order in this Kaching Cart setup. Its cart description reads as protection against the order being lost or damaged. [L0560, 2026]
- While testing a product, leave out shipping protection and the footer. When scaling, you may offer shipping protection as an opt-in choice, since customers should be able to decide whether to add it. [L0560, 2026]

#### Warranties

- Use a warranty as the upsell on expensive items. When the warranty is offered as a single checkbox at checkout and the customer does not tick it, send an automatic email shortly after the purchase with the warranty offer and a discount. This works best when the item costs enough that the customer is likely to want protection. [L0334, 2017]
- At checkout, offer an extended warranty as an add-on the customer can select during the process. [L1076, 2019]
- Put the upsell offer with the highest chance of acceptance, such as an extended warranty or expedited shipping on expensive items, into the Shopify product upsell app as the post-cart offer. Place other lower-priority add-ons on the product page as selectable options. [L0923, 2015]

#### Shipping upgrades and priority options

- Offer a shipping upgrade as a single radio button, such as priority domestic shipping in 2 to 3 days, while the standard free shipping shows its average delivery time. [L1076, 2019]
- A post-purchase priority shipping or priority processing option can add extra margin. Charge about 10 percent of the product price as a small fee, for example $2.95 to $3.95 depending on the price point. [L1382, undated]

#### Testing three upsell types

- Test three post-purchase upsell options, depending on the product, offer and entry point:
  1. Direct upsell to the high-ticket item with a discount or warranty.
  2. Quantity increase, for example try 3 or 6 bottles instead of 1.
  3. Full-store discount for the first order, sent immediately after the purchase with a short time limit (in the example, within the next hour).

  In the example, the full-store discount performed best at the time. [L0334, 2017]

### Apps and setup

- Upsell app setup: after checkout, add an upsell page that offers additional products at a discount, using the app AfterSell, so that average order value increases. [L1131, 2018+]
- Zipify OCU is a post-purchase upsell app. [L1299, 2026]
- Offer editor settings for upsells in one source setup:
  - Set Free Shipping as the default. In the offer editor, enable the Free Shipping option and the setting Hide shipping line if the shipping amount is 0.00, so no shipping line appears. [L1141, 2026]
  - Upsell Product block: Recommendation Type can be Recommended Products (OCU) or a set product; Autoselect variant chooses the variant automatically; the purchase option can be One-time purchase or Subscribe and save. [L1141, 2026]
  - Subscription section: you can hide the offer whenever the order includes subscription products, turn on the subscription option, or show a subscription offer only when the customer first bought the product as a one-time purchase. [L1141, 2026]
- ReconvertUpsell: a funnel offer can be changed under the discounts and shipping section, with percentage or fixed amount per unit, the timer, and the button text, for example *Grab another for 15% off* or *Pay now*. Post-purchase offer example line: *It's not too late to grab another for 15% off*. [L1410, 2023]
- The standard thank-you page after checkout shows order confirmation, shipment tracking and delivery updates. A post-purchase offer page is inserted before it, so the buyer still reaches the order details after the offer. [L1411, undated]
- Post-purchase offer pages render differently on desktop or laptop and on phones. Preview and check the offer page on both before launch, because the layout, buttons and visible deal can differ between the two. [L1411, undated]

### Offer copy

- Post-purchase upsell right after checkout, with a lower price and urgency copy. Buyers are still excited right after buying, so an add-on shown then is more likely to be accepted. [L1207, undated]
- Template:

```
Before you go, today only: add [product name] to your order for [discounted price]. Once this window closes, this offer is gone.
```

[L1207, undated]

- Post-purchase upsell copy with a time limit, such as a *before you go today only* offer at a lower price, raises the buyer's excitement right after the purchase. The offer should state that the deal disappears after the limited time. [L1209, undated]
- Post-purchase upsell: after the buyer completes a purchase, offer an additional product with *today only* copy that makes the offer look cheaper and time-limited. This uses the buyer's momentum right after the decision. [L1210, undated]

### Abandoned-cart offers

- Use the fourth abandoned-cart email for an offer, such as 10% off, while keeping the goal of completing the purchase. If the cart is below the free shipping threshold, such as $100, offer free shipping to push it over, then suggest complementary products that can be added to the order. [L1208, 2025-26]
- For abandoned cart recovery, offer a discount of around 10 percent rather than a large discount. A moderate offer recovers the sale without training shoppers to wait for deep discounts. [L1251, 2024+]

### Testing and measurement

- A/B test post-purchase upsells every day. A profitable upsell can cover the loss on the front-end sale, and everything after that is profit. [L1299, 2026]
- After a single-product purchase, a post-purchase offer accepted by only about 3 out of 100 buyers was treated as a low rate. Measure the acceptance rate of each post-purchase offer separately so weak offers are visible. [L0693, 2024]
- Judge each upsell by revenue per offer shown, and test a discounted same-item offer first before adding complementary products. [L0378, 2019+; L1410, 2023]
- Test the three upsell types (direct high-ticket, quantity increase, full-store discount) and compare results per entry point. [L0334, 2017]


Part 25 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/24-cart-upsells-and-cart-drawer.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/26-value-ladders-subscriptions-and-repeat-purchase.md
