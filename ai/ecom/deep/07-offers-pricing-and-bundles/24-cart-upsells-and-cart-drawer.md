<!-- part of ecom/deep/07-offers-pricing-and-bundles.md -->
Part 24 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/23-upsells-cross-sells-and-add-ons-on-the-product-pag.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/25-post-purchase-and-checkout-offers.md

### Cart upsells and cart drawer

**Cart upsell setup in Visually**

1. Add a Products Upsells widget below the last product in the cart. [L0389, 2025-26]
2. Choose the Blocks List layout (vertical list). [L0389, 2025-26]
3. Show three products only, without a Show More button. [L0389, 2025-26]
4. Place Add to Cart on the right, move the zoom button to the bottom left, and show product reviews above the product name. [L0389, 2025-26]
5. Add a heading such as "Our Personal Favorites", set the block spacing to 10 on both sides, make the reviews black, set the Add to Cart border radius to 0, and make the zoom icon background transparent with no border or shadow. [L0389, 2025-26]
6. Choose the Personalized algorithm and the filters listed below. [L0389, 2025-26]
7. Set Audience to All Visitors, Pages to Cart page, Device to Mobile, name the test (for example "mobile cart sales"), add AOV as a goal, tick the box and publish. [L0389, 2025-26]

**Visually layouts and algorithms**

- Visually upsell layouts: Blocks List shows a vertical list of blocks; Columns splits the space evenly for up to 3 upsells; Boxes Slider is a scrollable list of upsells; Blocks Slider is a horizontal slider of blocks; Grid shows two or more columns of upsells. Choose the layout that fits the cart space and the number of products to show. [L0389, 2025-26]
- Visually upsell algorithms include Manually (choose the items), Personalized (based on the customer's behaviour), Advanced Rules (custom logic), New Arrivals, Viewed Together, Viewed With Recently Viewed, Purchased Together, Most Popular (sold most in the past 30 days), Recently Viewed, and Purchased With Recently Purchased. Personalized was chosen as the AI-powered default for a cart upsell. [L0389, 2025-26]

**In-stock and price filters**

- Filter cart upsells so they show only items that are in stock, not already in the cart, and priced above zero. Without the price filter, a free add-on such as a free loop can appear as an upsell. [L0389, 2025-26]
- A free product offered as a cart upsell can take the top spot and confuse the shopper, so upsell filters must exclude items with a price of zero. Check the upsell block in the cart preview before publishing to confirm no free item appears. [L0389, 2025-26]
- When running sitewide markdowns, review which products the cart recommendation block shows, because recommendations should be chosen deliberately for the promotion rather than left to default logic. [L1231, 2025-26]

**Cart drawer and post-add-to-cart upsells**

- Enable a slide-out cart that shows complementary products with the Monster Cart Upsell app, and add a free-shipping threshold, for example free shipping over $50, to encourage buyers to add a cheap item such as a $20 product. [L0871, 2021+]
- A back-pain store's cart slide-out offers complementary items next to the main product, such as a back stretcher, a neck product, a second neck product and a pain relief cream. Every buyer sees a logical next add-on at checkout. [L0871, 2021+]
- Set up a post-add-to-cart upsell sequence before checkout, with a visible skip button on each step. Example: deodorant offered at £12 and hair care at £24, both skippable. [L0524, 2023]
- A slider add-to-cart block or a pop-up upsell offering an upgraded bundle can be added after a visitor adds an item to the cart. This is useful for stores with many products because it presents more options. [L1345, 2021+]
- Pre-checkout upsells have two standard placements: the product page, where buy-one-get-one and bundle offers are most common, and the cart page, where add-ons, free-shipping goals and extra items fit best. [L1410, 2023]
- Cart drawer threshold messages push customers to add more to reach a reward, such as adding 10 more items for free shipping or 13 more items for 20% off. Another variant is adding a $30 item to unlock free shipping. [L1411, undated]
- Tiered cart offers from the lesson, using Monster Cart Upsell (values are examples; adjust to your prices): [L1412, 2023]

| Cart value | Offer shown |
|---|---|
| about 15 | free shipping |
| about 30 | free gift |
| about 60 to 70 | 20% off |

Other examples in the lesson: add 3.99 to get free shipping, and add 13.4 to unlock 20% off. [L1412, 2023]

- Sources differ on the free-shipping threshold, and the values depend on the store:
  - Monster Cart Upsell example: free shipping over $50. [L0871, 2021+]
  - Tiered table: free shipping at a cart value of about 15. [L1412, 2023]
  - Lesson examples: add 3.99 for free shipping, or a $30 item to unlock it. [L1412, 2023; L1411, undated]
  - All values are examples, so set the threshold to your own margin and shipping costs. [L1412, 2023]
- Pre-select low-priced optional extras in the cart, such as priority processing, shipping protection, extended warranty or gift wrapping. Keep each extra under 5 USD, for example 3.99 to 5.99 USD, because most buyers accept it without much thought. [L1412, 2023]
- Example: a 6-month extended warranty priced around 3.90 to 5.90 USD can be pre-selected in the cart. Pre-selecting it keeps the add-on small enough that most buyers leave it checked. [L1412, 2023]

### Pricing, margin and price limits

- Upsell products should be priced at around 20 to 30 percent of the core product price, and never above the core price. Keep upsells above roughly 50 dollars, because very low-priced add-ons are not worth the effort. [L0923, 2015]
- Sources differ on the upsell price ceiling:
  - one source: upsell products are 20 to 30 percent of the core price and never above it. This applies to add-on upsells on the product page. [L0923, 2015]
  - one source: an upsell to a more expensive complementary product is allowed. A customer buying a $500 product can be offered a $1,000 complementary product as a second purchase, with or without a special deal. This applies to a second purchase of a related higher-priced product. [L0448, 2021]
- Sources differ on minimum prices for add-ons:
  - one source: keep upsells above roughly $50. [L0923, 2015]
  - one source: low-ticket accessories priced between 10 and 200 dollars are best offered as cross-sells on high-ticket product pages. [L0857, 2025]
  - one source: cross-sell products under $200 as add-ons to orders of high-ticket items. [L0469, 2021]
  - one source: pre-selected cart extras stay under 5 USD (3.99 to 5.99 USD). [L1412, 2023]
  - one source: a small ebook for about 5 to 10 dollars can be sold as a cross-sell alongside the main product. [L1381, 2022]
- Accessories must be profitable when offered in-store. For example, a $30 accessory at 30 percent margin yields $9, which is not enough if shipping costs $9. Either price the add-on for profit or make it yourself. [L0511, 2021-22]
- If the supplier's accessory is expensive, for example an $80 wholesale cost, do not give it away for free. Offer it as an add-on option priced close to wholesale cost, which still beats competitors that do not offer it. [L0894, 2020-26]
- When an add-on comes from a different supplier, check that the margin still works before offering it. [L1092, 2022]
- Offer upsell add-ons sourced from the same supplier as the main product, so shipping is bundled and simpler. If the same supplier has no suitable add-on, use an add-on from a different supplier. [L1092, 2022]
- Lead value optimisation (LVO) raises AOV through product options, add-ons and upgraded shipping options. These are the tools to reach a 30% net margin when the base margin is thin. [L0664, 2020]
- Lead value optimisation (LVO) adds margin on top of the MAP through cross-sells and upgrades, such as expedited shipping for a fee, extended warranties, and product add-ons. Revenue per order then becomes MAP plus cross-sells and upgrades, which widens the spread when prices rise. [L0942, 2022]
- Upsells, downsells and complementary accessories raise AOV and customer lifetime value (CLV). For a main product, the buyer typically also needs accessories and consumables, so these add-ons should be offered in the store. [L0511, 2021-22]
- Price tiers or upsells add value for low-frequency purchases, but the store should still be built around first-time buyers and their trust. (2023 advice.) [L1283, 2023]
- Example: a store adds a Gua Sha Facial Set to the cart as a cross-sell. The regular price was 69 USD and the cross-sell price 39 USD. The cart value for the same customer rose from 49 USD to 88 USD, with the same ad cost per customer. Because the store increased AOV and profit without extra acquisition cost, the offer worked. [L0434, undated; L0435, undated]
- Cross-sell by offering a product only available with a specific main purchase, at a discounted price. For example, a store selling necklaces can offer a matching ring at a discount, and the exclusivity makes the offer feel scarce. [L1399, undated]
- Complementary cross-sell: offer a related product to customers who are already ready to buy, at a discounted price, so the order value rises. Making the add-on exclusive to a specific purchase adds scarcity and fear of missing out. Example: a customer buying a necklace is offered a matching ring at a reduced price, available only with the necklace. [L1400, undated]
- Increase AOV with add-ons and upsells, and ask your suppliers which add-on or upsell opportunities they can offer. [L0920, 2018]
- The average order value of about 350 dollars can be raised by adding closely related higher-price products. [L0962, 2021]
- Sources differ on what counts as a "good" conversion rate: well-chosen upsells can reach conversion rates of 20 percent or more. Test different offers, because one upsell can convert at about 5 percent while another, such as a snowboard kit with leash, stomp pad, wax and an iron for about 100 dollars, can reach around 30 percent. [L0923, 2015]
- A special offer on a bundle carries its discount built in, since the overall cost falls when several products are sold together. [L0448, 2021]

### Warranties and protection

- Adding extended warranties as a Shopify offer had a sales target of 5 extended warranties per month. [L1509, undated]
- Warranty offers for electronics commonly run 12 months, one year or three years. Warranty exclusions such as theft and customer-inflicted damage should be stated in small print, so the terms are visible but easy to miss. [L1381, 2022]
- For an electronics product, a warranty can be added at checkout as a cross-sell rather than a separate upsell. Common terms are coverage for 12 months, one year or three years, with exclusions such as theft and customer-inflicted damage listed in small print. [L1381, 2022]
- A supplier that already offers a one-year warranty may agree to extend it to two or three years for an agreed price, while the store sets its own selling price. [L0923, 2015]
- Non-tangible offers such as extended warranties add value without physical stock. Expedited shipping, extended warranties and protective or accessory products work in almost any niche. [L1076, 2019; L0854, 2022]
- Sources differ on how to present a warranty:
  - Electronics: a warranty is offered at checkout as a cross-sell with 12-month, one-year or three-year terms. [L1381, 2022]
  - Low-priced optional extra: a 6-month extended warranty around 3.90 to 5.90 USD is pre-selected in the cart. [L1412, 2023]

### Gift options

- Offer optional gift wrapping at checkout for roughly $5 to $10, depending on product size. It adds perceived value and an unboxing moment at very low cost, but the 3PL (third-party logistics provider) must support it. [L1225, 2025]
- Add a gifting option to the product page with gift wrapping, a personal message at checkout and a gift flow, sold as an upsell, because a giftable product can benefit from a bespoke gifting experience. [L1016, 2026]
- Gift wrapping can be pre-selected in the cart as a low-priced optional extra, kept under 5 USD. [L1412, 2023]

### Finding complementary products

**Finding a complementary add-on product**

1. Find your product on Amazon. [L1107, 2023]
2. Check the "Frequently bought together" section for product ideas. [L1107, 2023]
3. Research your customers to see what problems they have and what would help them. [L1107, 2023]
4. Offer the best-fitting product as an add-on. [L1107, 2023]

- Example: for a cleaning product, a useful add-on is an e-book with tips. You can buy a PLR (private label rights) e-book or make one yourself in Canva, but a bought e-book still needs a cover and pictures to look professional. [L1107, 2023]
- If you have no idea which product to upsell, use Shopify product recommendations or a recommendation app. The lesson prefers choosing a specific product in advance based on what each buyer purchased. [L1412, 2023]
- Find upsell ideas by identifying high-quality, high-margin products, the offline services competitors provide, and non-tangible offerings customers would value. [L0240, 2019]
- Look at what top offline competitors offer as upsells and bring similar services to the online store. [L1076, 2019]
- A small ebook on a topic related to the niche, such as the best products for a target group, can be sold as a cross-sell for about 5 to 10 dollars alongside the main product. [L1381, 2022]
- Upsells and cross-sells in the same niche: a coaster or metal straw for a coffee product can work well as a bundle item. [L1383, 2022]

### Cross-sell setup in the theme (without a third-party app)

**Setting up cross-selling in theme settings **

1. Enable the cross-sell option. [L0973, 2020-26]
2. Enter the heading text shown above the suggested products, for example "you may also be interested in". [L0973, 2020-26]
3. Select the collection that holds the main products, for example a longboards collection. [L0973, 2020-26]
4. Add the tags "cross-sell one" and "cross-sell two" to the products that should be suggested for those main products. [L0973, 2020-26]
5. Test by adding a main product to the cart, confirming the heading and the tagged suggestions appear, and checking the cart shows the added items. [L0973, 2020-26]

- Cross-selling example: a seller of stand-up paddleboards suggests a paddle to buyers of a board, so the customer can add both in one order. The suggested item should logically match the main product. [L0973, 2020-26]
- In the Manhattan theme, cross-sell suggestions appear right after a customer clicks add to cart, before the cart page opens. The suggestion heading and the tagged products show at that step, so the customer can add them without leaving the flow. [L0973, 2020-26]
- For native cross-selling in the Manhattan theme, the main products are defined by the chosen collection, and the suggested products are the ones carrying the cross-sell tags. Tags therefore go on the add-on products, not on the main products. [L0973, 2020-26]
- Cross-selling is a feature to add as the store grows, not something to set up from the first day. Suggested products should make sense together so that customers add them to the cart. [L0973, 2020-26]

### Testing and measuring

- Test different upsell offers, because conversion varies widely between offers (see Pricing, margin and price limits). [L0923, 2015]
- Sources differ on when to measure results. The Visually cart test is set to track AOV as a goal. [L0389, 2025-26]
- Results vary from no gain to a large lift. A 30 percent rise in AOV for the top products has been reported, but do not expect this as a default. [L1113, 2022]
- Check the cart preview before publishing a cart upsell to confirm no free item appears. [L0389, 2025-26]

#### Further details

- Cross-selling succeeds when you educate customers about how the related product adds value or solves a secondary need, rather than simply listing options without context. [L0240, 2019]

- Collection pages can raise average order value because a customer who adds the winning product can also add other items from the same page to the cart. This is one reason to send ads to a collection page instead of a single product page once a product wins. [L0642, undated]


Part 24 of 40 of "7. Offers Pricing and Bundles: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles.md · Previous: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/23-upsells-cross-sells-and-add-ons-on-the-product-pag.md · Next: https://dlichters.com/ai/ecom/deep/07-offers-pricing-and-bundles/25-post-purchase-and-checkout-offers.md
