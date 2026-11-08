<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 29 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/28-cart-optimization-and-upsells.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/30-email-and-phone-capture-pop-ups-opt-ins-and-lead-m.md

### Funnel triggers, branching and timing

- Funnel triggers in one source' setup: Product variant (is any), Advanced trigger settings, and trigger points Product Page Upsell (customer on product page), Shopping Cart (checkout button clicked), Page with Product Buy Box (Add To Cart button clicked) and Cart Drawer Upsell. Cart Drawer Upsell can only be placed on the OCU Slide Cart Drawer, and Product Page Upsell does not support the Product Variant trigger. [L1141, 2026]
- A Catch-All Funnel triggers when no other funnel conditions match, so every customer sees pre- and post-purchase offers. Funnels have a Priority setting that decides which funnel wins when several match. [L1141, 2026]
- Post-purchase upsell offers appear on the Thank You page or the Order Status page after checkout. The funnel can also show the offer on a percentage of traffic volume. [L1141, 2026]
- Trigger conditions for an upsell funnel can be set under product purchase data, choosing a specific product or the entire order. An order details condition such as unit or items total item count equals 1 targets single-item buyers. [L1412, 2023]
- Branch the post-purchase upsell by the number of units ordered. A single-unit buyer gets the same product at a discount, while a buyer of two or more units gets a different companion product. [L1412, 2023]
- The trigger can be a specific product in the order. Each trigger product can then get its own first upsell, so a buyer of one product sees a related offer and not a generic one. [L1412, 2023]
- In the post-purchase upsell app, set a countdown timer on the upsell page, for example 10 minutes, so the offer expires quickly. The timer is a field in the offer settings and works alongside the discount and button text. [L1412, 2023]
- Single-item buyer path: offer the same product at 15% off as the first upsell. If accepted, offer a different product from the same niche as a cross-sell. If declined, offer the same product at 30% off as a downsell. [L1412, 2023]
- Accept and decline buttons: the post-purchase offer should show a prominent Pay now button and a small Decline offer option. The decline option should be a small, low-visibility text link, while the accept button stays prominent. [L1412, 2023; L1410, 2023]
- Mandatory upsell screens that the customer must decline before completing an order draw complaints. Keep add-ons optional and clearly labelled. [L1164, 2026]

### Thank-you page content

- The thank-you page can show product recommendations, a share button, a collection section and more offers. These elements can be edited in the app's thank-you page settings, which are on by default. [L1412, 2023]
- The default thank-you page in ReconvertUpsell already includes product recommendations and a share button. The products and collections shown can be changed in the app's thank-you page settings. [L1410, 2023]
- A birthday form on the post-purchase page collects customers' birthdays, so a small gift such as an Amazon or store gift card can be sent. This is an optional way to build loyalty. [L1412, 2023]
- A ReconvertUpsell thank-you page can ask the buyer for a birthday, and the seller can then send a gift card as a birthday gift. [L1410, 2023]

### Testing funnels and offers

- Test multiple offer variations and multiple products, because the best complementary item is not known in advance. Compare the acceptance rate of each offer before choosing the one to keep. [L1411, undated]
- Each offer in a Rebuy flow can run as an A/B test. The flow view lists offers with their own conversion, revenue and revenue per user, which can be compared to choose the winning version. [L1413, 2025-26]
- Create a variant by copying an existing upsell or downsell widget. In the example initial offer test, traffic is split 25% to one variant and 75% to the other. [L1413, 2025-26]
- In the example merchant's dashboard, the initial offer converts at about 16.20%, and the downsell row shows about 15.42% conversion. These figures are read from a screenshot and should be checked against the live report before being quoted. [L1413, 2025-26]
- Bundle and cart test procedure:
  1. Run a 7-day test with the bundle strategy.
  2. Then run a parallel 3-7 day test of Monster Card and other tools (ReConvert post-purchase, etc.).
  3. Compare final AOV to determine which approach works best. [L0298, 2023]
- Post-purchase upsells are worth setting up even for small stores, and a store should compare offers by acceptance rate rather than by assumption. [L1410, 2023; L1411, undated]

### AOV effects

- Upsells and cross-sells raise average order value and profit margin when placed at the right point in the purchase path. [L0434, undated; L0435, undated]
- Average order value can be raised through add-ons such as an expedited shipping upgrade, an extended warranty, or a related physical product. [L0970, 2023]
- Checkout Plus raised AOV by 4% (relative) in the reported case, alongside a 2.7% relative increase in checkout conversion. [L0955, 2025-26]
- Bundles with strong discounts raise AOV significantly even for simple products. [L0298, 2023]
- Pre-selected low-priced add-ons: about 60% of orders may accept an extra $3 to $5 this way. [L1410, 2023]
- Cart reminder and recommendation changes produce conversion lifts (+9.2% reminder box, +4.5% cart recommendations) that also support basket size. [L0197, 2025-26]
- Vendor and speaker figures in this section (Checkout Plus, package protection, pre-selected add-on acceptance, Oodie results) are indicative and should be verified against your own store data before they are used as targets. [L0955, 2025-26; L1410, 2023; L0197, 2025-26]

#### Further details

- Add the product to the cart on the main product page before the customer initiates checkout. For proven concepts, this pre-warming of the cart works better than sending the customer straight to checkout. [L0560, 2026]

- Post-purchase automation email sequences are the strongest way to raise average order value after the sale. They work alongside cross-sells, upsells, faster shipping options and extended warranties. [L1109, 2018]


Part 29 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/28-cart-optimization-and-upsells.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/30-email-and-phone-capture-pop-ups-opt-ins-and-lead-m.md
