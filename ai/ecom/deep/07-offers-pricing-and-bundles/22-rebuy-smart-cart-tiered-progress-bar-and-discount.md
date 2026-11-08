<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 22 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/21-building-bundles-in-shopify-and-apps.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/23-upsells-cross-sells-and-add-ons-on-the-product-pag.md

### Rebuy Smart Cart: tiered progress bar and discount tiers

**Bar options and types**

- Smart Cart goal box > Tiered Progress Bar > Configure Tiers: each tier has a Choose Tier Type field (Free Shipping, free products, order discount, or decorative only), an Unlock Price field in dollars, and an Add New Tier button, with a maximum of four tiers. Advanced Bar Settings > Use Shopify Functions (Recommended) is on by default. The Free Gifts section has a Gift Area Title field. Separate Configure Icon and Configure Labels & Text sections change the bar's icon and wording. [L1230, 2025-26]
- Type list differs between sources. [L1230, 2025-26] names "decorative only" as a type. [L1231, 2025-26] and [L1231, 2025-26] name Fixed Price. Check the tier-type list in your admin before you build. [L1230, 2025-26; L1231, 2025-26]
- A tiered progress bar supports up to 4 tiers. The tier types are Free Shipping, Free Product, Order Discount and Fixed Price. [L1231, 2025-26]
- Tiered Progress Bar with Shopify Functions can turn full-priced products into free gifts once a cart reaches a tier. Each tier can be set to a free gift, free shipping, an order discount, or a decorative stage. [L1230, 2025-26]
- Only one tiered progress bar is shown to a visitor at a time. Multiple bars can be built with different country limits. Example: one bar offers free shipping and a free gift in the US, while another offers only the free gift in Canada. [L1231, 2025-26]
- Each progress bar must have its countries specified, or it will show for all visitors. Currency settings follow the country codes assigned to each bar. [L1231, 2025-26]

**Setup procedure**

- Set up a tiered progress bar:
  1. In the cart editor, click Add Component to Header and choose Tiered Progress Bar, placing it in the header or goal box area.
  2. Set the countries where the bar should appear, using the country field with autocomplete. This replaces the old two-letter ISO code entry.
  3. Add a tier and choose its type: Free Shipping, Free Product, Order Discount, or Fixed Price.
  4. Set the threshold amount for that tier.
  5. For Free Product, choose the product and the variant option, then set the unlock price.
  6. Turn on Use Shopify Functions if the tier should be applied as a discount automatically.
  7. Set a custom tier label and icon size if needed.
  8. Repeat for additional tiers.
  9. Save the cart. [L1231, 2025-26]

**Free gifts and line items**

- Line item mode is a toggle for free gifts. When it is on, the free gift is added to the cart as a normal line item instead of being shown in the free gift area. This saves space and avoids a complex workaround. [L1231, 2025-26]
- For a Free Product tier, you can select a single variant or all variants of a product. When several variants are selected, the customer chooses one from a dropdown. With line item mode on, the chosen variant appears as a line item in the cart. [L1231, 2025-26]
- Any product used in a free product tier must be active, in stock and available for sale on the online store. Otherwise the reward cannot be applied at checkout. [L1308, 2025-26]
- Free Product tier example: a free product is added to the cart automatically when the cart reaches a $100 unlock price. The product is a single-variant item in the demo. [L1231, 2025-26]
- Use a custom tier label to describe the reward generically, such as savings or money off, instead of naming the free product or the discount amount. Icon size can also be set for each tier. [L1231, 2025-26]
- Selectable gift with purchase, where the customer picks the free gift, is not a native option on non-Plus stores at the time of the webinar. It needs extensive workarounds, a third-party app that can run Shopify Functions discounts, or a cross-sell widget. [L1231, 2025-26]

**Discount tiers (Shopify Functions)**

- Discount tiers can only be powered by Shopify Functions. When you add a discount tier, the Use Shopify Functions toggle is hidden. If you switch that setting off, the discount tier disappears for the user. [L1308, 2025-26]
- The step 6 wording in the setup procedure presents Use Shopify Functions as a choice. For discount tiers, keep it on, because [L1308, 2025-26] says discount tiers depend on it. [L1231, 2025-26; L1308, 2025-26]
- Path to add a discount tier: Tiered Progress Bar > Configure Tiers > Add New Tier. For a discount tier, choose Order Discount Type (Percentage or fixed amount), set Order Discount Amount from Total, and set the Unlock Price (the cart total that unlocks the tier). [L1308, 2025-26]
- Order Discount tier example: spend $500 and get 25% off the order. Fixed Price tier example: spend $500 and get $50 off the order. Both are applied through Shopify Functions. [L1231, 2025-26]
- Example pair: a fixed $50 off tier unlocked at a $500 cart total, plus a percentage tier of 20% off unlocked at a $1000 cart total. Set the Order Discount Text of each tier to match its discount, such as "20% OFF". [L1308, 2025-26]
- By default, Functions discounts are allowed to combine with product, shipping and order discount types. In the tested cart, only the largest qualifying order discount was applied. With several tiers reached, the biggest one wins. [L1308, 2025-26]
- With a $50 fixed tier at $500 and a 20% tier at $1000, a cart of about $1000 or more receives only the 20% discount, because it is greater than the $50 fixed amount. The checkout shows only that order discount. [L1308, 2025-26]
- Remaining-amount label: with a $500 unlock price, a cart subtotal of $499.99 shows the remaining-amount label as one cent away from the reward. The remaining-amount placeholder always displays the gap between the current cart total and the next unlock price, so customers see exactly how little they still need to add. [L1308, 2025-26]
- Two product tiers: Tier 1 at a $50 unlock price for one free product and Tier 2 at a $100 unlock price for a second free product. When both tiers are unlocked, checkout shows both products fully discounted. The product discount text comes only from Tier 1, so keep that Tier 1 text generic so it fits both rewards. [L1308, 2025-26]

**Subscriptions and Buy More Save More**

- Switch to Subscription (Cart Items > Switch to Subscription) lets customers upgrade one-time products to subscriptions directly in the cart. It is useful when a store sells both one-time and subscription versions of a product. [L1230, 2025-26]
- Buy More Save More (Cart Items > Buy More Save More) is a tiered discount that encourages customers to buy more units of a product to unlock a bigger discount. [L1230, 2025-26]
- Set up subscription upgrades in the cart:
  1. Integrate your selling plan provider, such as Recharge, in the Rebuy admin under the Integrations tab.
  2. Open the cart body and toggle subscriptions on for the eligible line items.
  3. Customers who add a one-time version will see the option to switch to a subscription.
  4. Optionally turn on Disable downgrade to stop customers switching back from subscription to one-time.
  5. Edit the switch-to-subscription labels to fit your brand. [L1231, 2025-26]
- The Disable downgrade toggle stops customers from switching a subscription back to a one-time purchase. Leave it off if you want to keep the option available, since a step back can keep the journey moving. [L1231, 2025-26]
- Switch to subscription works across multiple selling plans for the same product. If the delivery frequencies share a uniform option, such as switching a 6-week item to a 4-week option, both items can be delivered together. [L1231, 2025-26]
- Buy More Save More is set up in the cart with editable language. At the time of the webinar it had no Shopify Function equivalent, so it is set up with Shopify automatic discounts or a third-party app instead. It was largely a Shopify Plus feature. [L1231, 2025-26]
- At the time of the webinar, Buy More Save More in Rebuy Smart Cart had no Shopify Function equivalent and had to be built with Shopify automatic discounts or a third-party app. Rebuy planned a Shopify Functions integration for this offer as its next one, but did not expect it before the end of that year. [L1231, 2025-26]
- ReBuy's smart cart shows a tiered progress bar and can switch the buyer to subscription options. Both elements can be fully customized to the brand, so the tiers and subscription offer can be set per store. [L0593, 2025-26]

### Cart progress bars (Kaching Cart)

- Kaching Cart > Cart settings > Promotions progress bar: set Reward type to Order discount and Discount type to Percentage. Set a Min price in USD for each tier. Use "Add tier" for more tiers. Optionally exclude specific products from being counted, or celebrate unlocks with confetti. [L0560, 2026]
- Set the promotion threshold above the price a customer must reach for buying two products, so a 5 percent discount requires buying two items. The lesson's example threshold is 50 dollars. [L0560, 2026]
- The progress bar can hold several reward tiers, for example a 5 percent discount and a higher 15 percent tier. Each tier needs its own threshold above the previous one. [L0560, 2026]
- Promotion progress bar texts (app placeholders kept as shown):

```
Default text: Add ((progress_needed)) to unlock ((next_promo_label))
Unlocked text: ((unlocked_promo_title)) Unlocked!
All promotions unlocked text: all rewards are unlocked
Promo discount text: #1 - ((promo_discount_amount)) discount
Discount text: ((promo_discount_amount)) discount
```

[L0560, 2026]

### Bundles and promotions without an app

- Run a bundle promotion without an app:
  1. During the promotion window, edit the existing product page.
  2. Describe the bundle in the title or description, for example "standing desk plus chair".
  3. Restore the normal product page after the window ends. [L1281, 2022]
- Create a bundle as a separate product page, or temporarily change an existing page, then remove it when the promotion ends. Orders from several suppliers are not automated, so each order has to be sent out as it arrives. [L1204, 2022]
- A bundle can be added as a selectable option on the existing product page, with extra description explaining what the upgraded package includes. Ads then keep sending the same visitors to the same page. [L1456, 2021-22]
- Alternatively, the bundle can be its own product page and feed item, using the same product title plus a suffix so it still shows for the standard product's search terms. [L1456, 2021-22]
- Whichever option is chosen, the price changes with the selection near the add-to-cart button. [L1456, 2021-22]

### Other bundle apps and names

- Bundle-building apps mentioned in the course: Bundle Bear for volume and buy-to-save offers. A second app is named differently across the sources (Bundler Where, White Bundle, or White Bundles / Bundle Where). Check the Shopify App Store for current options. [L1259, undated; L1260, undated; L0321, undated]
- Coaching Bundles app (Shopify App Store) sets up offers such as multi-pack bundles on the product page. Build the competitor's offer structure in this app instead of coding it manually. [L0600, 2026]
- The Sketching Bundle app is a cheaper alternative to Bundle Bear. [L0635, undated]


Part 22 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/21-building-bundles-in-shopify-and-apps.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/23-upsells-cross-sells-and-add-ons-on-the-product-pag.md
