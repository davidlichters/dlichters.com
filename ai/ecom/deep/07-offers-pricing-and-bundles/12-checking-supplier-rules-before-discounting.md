<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 12 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/11-pop-up-sms-and-email-codes.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/13-free-shipping-shipping-fees-and-delivery-upgrades.md

## Checking supplier rules before discounting

### Read the supplier agreement before any discount

Before creating any discount code or running any promotion, work through each supplier's reseller agreement:

1. Review each supplier's reseller agreement.
2. Document which suppliers:
   - prohibit discounts entirely,
   - allow coupon-code-based discounts (applied after a code is entered),
   - allow no restrictions.
3. Apply only permitted discounts to products from each supplier. [L0251, 2023]

- Read each supplier's MAP policy carefully and follow its specific rules before creating store-wide discount codes. Some suppliers explicitly prohibit all discount codes in their MAP policy. [L0276, 2024]
- Check the MAP policy before offering coupons. Many MAP suppliers allow coupons, but some do not, so adjust the exit-intent offer for those products. ** [L0247, 2021]
- Whether a discount such as a coupon on a MAP-priced item is allowed depends on each supplier's policy, so read the MAP policy you agreed to with every supplier. ** [L0356, 2019]
- Check each brand's MAP agreement before offering coupons or special discounts. If the agreement forbids coupon codes or special offers on a product, leave those offers off that product. If it is silent, a discount is usually allowed, but confirm with the supplier because they may later object. ** [L0358, 2020]
- Check the policies you signed during approval before running any coupon. ** [L0853, 2021]
- Check the MAP clause in the supplier agreement before offering coupon codes, because the agreement states whether coupons are forbidden. [L1094, 2023]
- Most suppliers allow discounts on MAP products. Confirm this in the authorized retailer agreement, because some suppliers forbid discounts in writing. [L0857, 2025]
- Some supplier agreements forbid coupon codes or discounts entirely, so check the agreement before offering them. [L1113, 2022]
- Coupon codes are not allowed for a product if the supplier agreement explicitly forbids discounts on it. Check the agreement before offering any discount. ** [L0963, 2022]
- Check each supplier agreement for discount restrictions. Coupon codes must be entered manually by customers (see the section on advertising below). [L0251, 2023]
- Costs such as the supplier's MAP policy must be checked before any bonus or discount is launched on a supplier's products. [L0855, 2023]

### How common discount restrictions are

Sources give different rough shares. They come from different years and are estimates, so for any single brand the agreement decides.

| Share of suppliers | Meaning | Source year | Ids |
|---|---|---|---|
| About 90% or more allow discount codes | Most MAP suppliers allow codes. ** | 2021 | [L0671, 2021] |
| About 95% allow discount codes the customer enters at checkout | Only while the advertised price stays at or above MAP. Some agreements forbid codes entirely. ** | 2022 | [L1113, 2022] |
| Most allow; roughly 5% or fewer forbid codes | For suppliers that forbid codes, leave their products out of the sale. ** | 2021 | [L1279, 2021] |
| A small number forbid any discount on their brand, even at checkout | Check each brand's MAP policy and skip discounts for brands that forbid them. | 2025 | [L0972, 2025] |
| Rarely, some forbid coupon codes | Exclude those supplier products from coupon offers. ** | 2019 | [L1110, 2019] |

### Coupon codes: what is normally allowed

- Discount codes can be offered to customers unless the supplier agreement specifically forbids them. The discount must not be applied to the advertised price on the website. List the product at MAP and apply the discount only through a code at checkout. [L0278, 2025]
- Discount codes are normally permitted under MAP, for example a 10 percent off code at checkout that lowers the price after the discount is applied. This is allowed unless the supplier's MAP agreement says no discounts. In that case, exclude those products from coupons. [L0667, 2025]
- A coupon applied at checkout is generally fine under MAP, because the advertised price stays at MAP. A few supplier agreements prohibit any discount below MAP, and those products must not be discounted. [L0966, 2025]
- Most suppliers' MAP policies forbid advertising or displaying a product below MAP. A coupon code that lowers the price at checkout does not break this rule, because the advertised price stays at MAP. [L0972, 2025]
- Discount codes can take the checkout price below MAP unless the supplier prohibits discounts. The advertised price on the product page and in Google Shopping must stay at MAP. [L1281, 2022]
- Use promo codes instead of marked-down prices, so that the listed price stays at MAP. A coupon discounts the price at checkout unless the supplier agreement specifically forbids coupon codes. [L1094, 2023]
- MAP (minimum advertised price) is set by the supplier and limits the lowest price at which the product may be advertised. A discount code that lowers the final price is generally not a violation because the advertised price stays at or above MAP, but each supplier's agreement must be read because a few forbid codes. ** [L1069, 2019]
- For a MAP product, a sale must be run through a coupon code rather than by lowering the displayed price on the product. ** [L1069, 2019]
- Usually you cannot offer discounts such as 10 to 15 percent off MAP products. Some supplier MAP agreements forbid coupon codes, which is rare; if the agreement does, exclude those supplier products from your coupon offers. ** [L1110, 2019]
- Discounts that are not advertised are generally allowed under MAP pricing unless the supplier explicitly forbids them. Advertising a price below MAP is a separate issue and can violate the supplier's policy. ** [L0801, 2021]

**Conflict on 10-15 percent discounts.** The 2019 unit ([L1110, 2019]) says you usually cannot offer 10 to 15 percent off MAP products. Units from 2021 to 2025 ([L0667, 2025; L0966, 2025; L0972, 2025]) say discount codes are normally permitted as long as the advertised price stays at MAP. Use the later view for checkout codes. The 2019 caution applies only to a supplier whose agreement forbids discounts.

### Keep the advertised price at MAP

**Principle.** Sell at MAP and treat any extra offer as a discount off MAP. Do not inflate the MAP price to create room for a discount. ** [L0247, 2021]

- List products at MAP and fund discounts from the margin you can afford. Do not list above MAP, because products above MAP lose traction on Google Shopping. If a discount is too large, reduce the discount rather than raising the list price. ** [L0968, 2021]
- If the margin cannot cover discounts, list the product at MAP without discount codes for that supplier. Listing a higher price lowers clicks in Google Shopping because the product appears at the highest price. [L1283, 2023]
- If you must choose between pricing above MAP while offering discounts and pricing at MAP without discounts, the MAP-without-discounts option keeps your prices in line with other sellers on Google Shopping and avoids looking more expensive. ** [L0801, 2021]
- If MAP is the minimum advertised price, discount codes can take the checkout price below MAP. List the product at MAP and apply discount codes to the MAP price, rather than inflating the price and then offering a discount. [L1283, 2023]
- Under MAP pricing, keep everyday prices at the MAP level and run promotions as a percentage off that price, such as 5% or 10%. Raising a price and then discounting it back to MAP is an alternative, but it changes the displayed price. ** [L0853, 2021]

**Conflict on inflating the price.** [L0853, 2021] describes raising the price and discounting back to MAP as an alternative. [L0247, 2021; L0968, 2021] and [L1283, 2023] advise against inflating. Default to listing at MAP. Use the alternative only if you accept that the displayed price changes.

#### Worked examples: what the customer sees

| Case | Price on product page and in ads | Price after code at checkout | Ids |
|---|---|---|---|
| MAP $1,000, $50 code | $1,000 | $950 | [L0276, 2024; L1281, 2022] |
| MAP $1,000, $50 code for orders over $1,000 | $1,000 (may not be advertised at $950) | $950, as the code is entered | [L0857, 2025] |
| MAP $1,000, $100 code | $1,000 | $900 | [L0963, 2022] |
| $1,000 item, $50 coupon | $1,000. Showing $950 would break MAP. | $950 | [L1094, 2023] |
| MAP $1,000, $900 after coupon | Cannot be advertised at $900 in ads or emails | $900 | [L0964, 2023] |
| MAP $1,000, 10% off code | $1,000 until the code is entered | Discounted price after code | [L1279, 2021] |

- A product with a MAP of $1,000 must show $1,000 on the product page. A $50 code for orders over $1,000 may lower the checkout total to $950, but the store cannot advertise the product at $950 without the code. [L0857, 2025]
- Lowering the displayed price to $950 on a $1,000 item with a $50 coupon would break MAP. The product remains advertised at $1,000 and the coupon is applied at checkout. [L1094, 2023]

### Where prices may appear

- Google ads, Facebook ads and strikethrough pricing may not show a product below its MAP. Most brands allow discount codes the customer enters at checkout, but these must not be auto-applied or advertised as the lower price. ** [L1113, 2022]
- Coupon codes must be entered manually by customers. Do not auto-apply discounts at checkout. [L0251, 2023]
- When a coupon code is allowed, show the full price on the product page and reveal the discounted price only after the code is entered. ** [L1279, 2021]
- Offer discounts and coupon codes on product pages only where the supplier's MAP agreement permits it. If the supplier forbids discounting below MAP, do not discount those product pages. ** [L0852, 2020]
- For special supplier pricing during a sale, put the discounted products on a separate bundle page rather than changing the price on existing product pages. [L1094, 2023]

### Brand-level exclusions

- Some suppliers forbid coupon codes that push the price below MAP. If a supplier's agreement says so, exclude that supplier's products from any coupon code that lowers the price. ** [L0961, 2020]
- Do not discount below MAP if the supplier's policy forbids it. ** [L0853, 2021]
- If a supplier forbids discounts or coupons, exclude its products from coupon offers and offer a bonus gift instead, so the deal stays attractive without breaking the policy. ** [L0665, 2022]
- Before offering discount codes on a supplier's products, read its MAP agreement. If it forbids discounts, do not discount that supplier's products. Most suppliers, about 90% or more, allow discount codes. ** [L0671, 2021]

### Store-wide and multi-brand sales

- For a store-wide sale, include only brands that agreed to join the promotion. Use the announcement bar's advanced targeting to hide it on pages of vendors that are not part of the sale. ** [L0671, 2021]
- Use notification bar promotions only for vendors that agreed to the promotion. Show promotions based on conditional rules, not as blanket offers. ** [L0671, 2021]
- To run promotions across brands with different discount levels: ** [L0853, 2021]
  1. Change the promotion banner on each product page to show the offer relevant to that product's brand or collection.
  2. Create a separate coupon code for a brand only if it needs one.
  3. Check the supplier's policy first, and exclude any brand that forbids coupon discounts from the promotion.

### Adding value without changing the price

**Principle.** When price discounts are not possible, add value through bonus gifts, extended warranties or expedited shipping. A bonus gift can carry more perceived value to the customer than its cost, and extended warranties can cost little or nothing when arranged with the supplier. ** [L0852, 2020]

**Principle.** Discounts on products that suppliers do not allow to be discounted can be replaced with other value, such as expedited shipping, free white glove delivery or a small bonus gift. Check each option's margin before offering it. [L0804, 2023]

| Option | Changes the product price? | Notes | Ids |
|---|---|---|---|
| Free expedited shipping | No | Can be run as a spend threshold, for example once the customer spends over $500, $1,000 or $2,000 | [L0837, 2025; L0852, 2020] |
| Upgraded shipping, such as white glove delivery | No | Check each supplier's MAP agreement, because a brand can have separate rules outside MAP | [L0961, 2020; L0804, 2023] |
| Bonus gift from a third party | No | Gifts, free shipping and upgraded shipping do not change the price, so they do not violate MAP ** | [L0961, 2020; L0852, 2020] |
| Free bonus product from the same supplier | Can violate MAP | Get written approval from the supplier before running the promotion | [L0855, 2023] |
| Extended warranty | No | Can cost little or nothing when arranged with the supplier | [L0852, 2020] |

- If a supplier's MAP policy forbids discount codes, run promotions that do not change the price, such as free expedited shipping or a free bonus gift once a customer spends over $500, $1,000 or $2,000. [L0837, 2025]
- Bonus gifts, free shipping and upgraded shipping such as white glove delivery do not change the product price, so they do not violate MAP. A brand can still have separate rules outside MAP, so check each supplier's agreement. ** [L0961, 2020]
- A free bonus product from the same supplier can violate MAP. Get written approval from the supplier before running the promotion. [L0855, 2023]
- For a supplier that forbids discounts, a bonus gift instead of a discount makes the deal more attractive without breaking the policy. ** [L0665, 2022]

### Check margins before offering a discount

- Do not sell at MAP with a 10 percent discount. Net margins around 15 percent are too low unless the order value is thousands of dollars. Try a 5 percent discount, a smaller discount, or a bonus gift that costs less than the discount would. [L0806, 2024]
- Check the margin of each option before offering it. [L0804, 2023]
- A coupon is paid by the retailer, not the supplier. The discount comes out of the retailer's profit, not the wholesale price. The supplier still receives the wholesale price. [L0667, 2025]
- If the margin cannot cover discounts, list the product at MAP without discount codes for that supplier. [L1283, 2023]

### Negotiate supplier-funded promotions

**Principle.** If product margins are insufficient for discounts or coupons, negotiate with suppliers for promotional support. Propose a promotion where the supplier includes a free item of value, worth $20 to $50 depending on the product price, with customer purchases. ** [L0245, 2020]

**Rule.** When product pricing is fixed and margins are low, build tighter relationships with suppliers to access co-promotional opportunities. The supplier includes a free premium, upgraded shipping or a discount, instead of you absorbing promotional costs yourself. ** [L0245, 2020]

**Example.** Buy-one-get-one offers were easier to source when suppliers had excess inventory. Today they are mainly worth offering on stock that is overstocked or being discontinued, as described in the supplier procedure. [L1204, 2022]

**Procedure.** Sourcing a supplier-funded deal, such as buy-one-get-one or a deep discount:

1. Review supplier inventory lists regularly and look for SKUs with very high stock that are not moving.
2. Watch for supplier emails announcing that a SKU is being discontinued.
3. Ask the supplier which promotional price they can give, for example a buy-one-get-one price, a 30 to 50 percent discount on the SKU, or a temporary waiver of the MAP restriction for the promotion.
4. Run the offer only if the numbers show it is profitable for your store.

[L1204, 2022]

**Competitor offers.** Competitor holiday offers can be checked with the supplier before you copy them. Send the supplier a screenshot of the competitor's offer and ask whether it violates policy or whether the same promotion is available to you. [L1283, 2023]


Part 12 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/11-pop-up-sms-and-email-codes.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/13-free-shipping-shipping-fees-and-delivery-upgrades.md
