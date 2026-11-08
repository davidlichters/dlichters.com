<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 5 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/04-diagnosis-tree-low-checkout-completion.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/06-customer-research-feedback-and-behavior-analytics.md

### When to kill a product

- Do not stay emotionally attached to a product because it generates some sales. If it is unprofitable, continuing to spend in hope of eventual profitability wastes capital. [L0037, 2026]
- A product with good CTR but very low conversion is first a problem with the offer or market, not a reason to stop immediately. Try another market, a new offer or a new marketing angle before killing the product. [L1161, 2024+]
- Only kill a product when the loss has reached about $200 to $300. A product at break-even still deserves more offers, angles or markets. [L1161, 2024+]
- Before abandoning a product after the first day or two of ads, check whether product validation was sound and whether each funnel stage has been optimised. The weakness is often in the store rather than the product. [L1259, undated]
- Product kill checklist after $300 spent with no sales is in the high-CTR section; complete it before switching ads off. [L1171, 2024+]
- If the product has been tested with all elements optimised and still does not convert after two testing rounds, switch products. [L0321, undated]
- Do not judge a product before checking the days ads have run, the offer, the landing page, the checkout and CTR/CPC in the ad account. [L1177, 2023]

Case, 70 EUR product (older, 2019-22 framing not applicable; current sources): a product priced at 70 EUR was tested for 14 days in January and produced 18 sales with no recorded returns, and customers said they were happy with it. Conversion stayed around 0.8%. The product was later relaunched with a new, better offer and new creatives: CTR was above 3%, but conversion was about 0.5% on the first day. Low conversion at this price points to weak demand, weak copy or an unconvincing offer, so the product page should be reviewed. A conversion rate around 1.5% could still be profitable at this price if the margin is good. [L0693, 2024]

- For a 70 EUR product, a conversion rate of 0.5% to 0.8% signalled weak demand or weak copy despite CTR above 3%. A conversion rate around 1.5% can still be profitable if the margin is good. [L0693, 2024]

Case, 60 EUR product in one market: CTR was over 3% and sometimes 4%, while conversion after a week was 0.8%. The product was at break-even at about 60 euros, and the mentor would keep testing rather than kill a product at break-even. [L1161, 2024+]

Case, 60 EUR product in one market, full sequence: the product sold at around 60 euros, with strong ad metrics (CTR above 3%, sometimes 4%) but a conversion rate of about 0.8% after one week. About 400 euros had been spent and the campaign was at break-even. Several offers were tried with no change in conversion. Buyer data showed mostly male customers, so the product angle was rewritten around that group, which also produced no change, and all campaigns were paused over the weekend. The recommended next step was not to kill the product at break-even but to test a second market: translate the store with Shopify Translate, activate the UK market, set GBP prices such as 24.90 or 26.90, and spend about 100 euros on English ads with copy tied to a specific use situation. Losses of about 200 to 300 dollars would be the point to stop. [L1161, 2024+]

Kill triggers at a glance:

| Trigger | Threshold | Action | Ids |
|---|---|---|---|
| Loss reached | About $200 to $300 | Kill the product | [L1161, 2024+] |
| Spend with no sales | $300 | Run the checklist before switching ads off | [L1171, 2024+] |
| Break-even | No loss yet | Keep testing offers, angles or markets | [L1161, 2024+] |
| Good CTR, very low conversion | First suspect is offer or market | Test another market, offer or angle before killing | [L1161, 2024+] |
| Testing rounds completed, all elements optimised | Two rounds | Switch products | [L0321, undated] |
| Day one or two of ads | Before abandoning | Check validation and each funnel stage | [L1259, undated] |

[L1161, 2024+; L1171, 2024+; L0321, undated; L1259, undated]

Case, product with many add-to-carts but no sales (cross-check): when a product has many add-to-carts but no sales, check the checkout, price, shipping costs and trust elements, because the drop-off happens after the add-to-cart step. [L0552, 2023]

Scaling and winning products: once a variant wins, scale it harder rather than adding more untested variants. [L1038, 2026]

### Funnel stages and benchmarks

- A Shopify funnel has four stages: landing or product page, add to cart, initiate checkout, and purchase. Measure each stage on its own so the weakest step can be found. Strong ad metrics do not prove the store works, so the store must be analyzed separately. [L1345, 2021+]
- Use these benchmarks as guidelines and check them against your niche:

| Stage | Metric | Benchmark |
|---|---|---|
| Landing page to add to cart | Add-to-cart rate | 6% or higher is good |
| Add to cart to initiate checkout | Checkout start rate | 25% to 50% is normal; aim for 50% |
| Initiate checkout to purchase | Purchase rate | 50% or higher is ideal |

  [L1260, undated; L1345, 2021+]

- Use the following stage actions when a rate is below target. A rate of 1-2% at the add-to-cart stage is a clear failure. [L1260, undated]

| Funnel stage | Metric | Target | If below target |
|---|---|---|---|
| Landing page to Add to Cart | Add-to-cart rate | 6% or higher | Fix the landing or product page; 1-2% is a clear failure |
| Add to Cart to Initiate Checkout | Checkout start rate | 25-50% (aim for 50%) | Fix friction and trust on the way into checkout |
| Initiate Checkout to Purchase | Purchase rate | 50% or higher | Fix checkout trust, payment options, shipping and taxes |

  [L1260, undated]

- Initiate checkout is counted once a visitor enters contact details such as an email address. [L1345, 2021+]
- A 12-add-to-cart example: 12 add-to-carts should produce about 3 to 6 initiate checkouts, and 6 is the better result. [L1345, 2021+; L1260, undated]
- Initiate checkout to purchase should be at least 50%. If it is lower, optimize the checkout, including trust elements, shipping display, taxes, currency, and payment methods. [L1345, 2021+]

### Calculating the rates

- Calculate funnel rates from clean visitor counts, after removing bot and launch-spike traffic. [L1260, undated]
- Use these formulas:
  - Add-to-cart rate = add-to-cart events / landing-page visitors x 100
  - Checkout start rate = initiate-checkout events / add-to-cart events x 100
  - Purchase rate = purchases / initiate-checkout events x 100

  [L1260, undated; L1345, 2021+]
- Use genuine landing-page visitors as the denominator for the add-to-cart rate. Example: 12 add-to-carts from 200 genuine visitors gives 6%, which meets the benchmark. [L1345, 2021+]
- Worked example: with 200 real visitors and 12 Add-to-Cart events, the Add-to-Cart rate is 6%, which meets the benchmark. Twelve add-to-carts leading to three to six checkout initiations would be within the 25-50% range. [L1260, undated]
- A funnel judgment needs at least 150-200 real visitors. 50-100 visitors is too little data. [L1260, undated]

### Stage-by-stage check

1. Check landing page to add to cart against the target of 6% or higher. If it is 1-2%, the landing page or product page is the problem. [L1260, undated]
2. Check add to cart to initiate checkout against the target of 25-50%. With 12 add-to-carts, that means at least 3 to 6 checkout starts. [L1260, undated]
3. Check initiate checkout to purchase against the target of 50% or higher. If it is lower, optimize the checkout. [L1260, undated]
4. Fix only the stage that fails before moving on. [L1260, undated]
5. Do not change checkout or other stages at the same time as the landing page, or the cause of a change cannot be identified. [L1345, 2021+]

### Diagnosis order

- Diagnose a low conversion rate in this order and never skip ahead [L1456, 2021-22; older]:
  1. Evaluate traffic quality: look at search terms and whether visitors are the right people at the right stage of the buying journey. [L1456, 2021-22]
  2. Run competitor analysis: list every seller of the same product and compare price, returns policy, review count, site design and similar factors in a matrix. [L1456, 2021-22]
  3. Only then optimize the website and offer based on what the competitor comparison revealed. Doing the website first wastes effort and can make the position worse. [L1456, 2021-22]
- Speed and friction issues matter most when visitors arrive but do not add to cart. Fix these first before other changes. [L1260, undated]
- If the landing-page add-to-cart rate is below benchmark, fix the landing or product page first and leave later funnel stages for now. [L1345, 2021+]

### Diagnosis: low add-to-cart

- Check the landing and product page first, because speed and friction issues matter most when visitors arrive but do not add to cart. [L1260, undated]
- Product pages should clearly show these points, because gaps explain why competitors win sales [older advice, 2020]:
  - stock status and shipping time
  - The shipping and returns policy
  - The price match policy
  - more and better images
  - descriptions that answer buyer questions

  [L1277, 2020]

### Diagnosis: low checkout completion

- Check initiate checkout to purchase against the 50% target. If it is lower, check the checkout, including trust elements, shipping display, taxes, currency, and payment methods. [L1345, 2021+; L1260, undated]
- When TikTok traffic adds to cart but does not buy, check the offer, the trust signals and the checkout in that order. High add-to-cart with low purchases usually points to checkout or trust level rather than the ad. [L1377, 2022+]
- When an ad brings many checkout starts but no sales, place a test order yourself through the full checkout to confirm payment works before changing the ad. [L1426, undated]
- If the checkout works, run the original ad again to see whether the low conversion came from the ad or from a checkout fault that has since been fixed. [L1426, undated]

### Diagnosis: high add-to-cart with few purchases

- High add-to-cart with few purchases can be caused by a broad audience, for example TikTok audiences under 24 years old. Exclude non-buying age groups, such as 18-24, if they convert poorly, and test a stronger offer. [L1260, undated]
- Example: a store with 18+ targeting had good add-to-carts but weak conversion. After removing the 18-24 age group, add-to-carts dropped but the conversion rate improved. The conversion rate is the goal to watch, not the add-to-cart count. [L1260, undated]

### Diagnosis: high CTR with no sales (three metrics that mean the ads perform well: CTR, CPC, CPM)

- **TikTok ads (TikTok scaling lesson):** if CPC is below $1, CPM is below $10, and CTR is above 1.5% but the store converts poorly, work on the store instead of the ads. The $10 CPM is a TikTok threshold; for Facebook the High-CTR lesson uses $25 (next line). [L1375, undated]
- **Facebook ads (High CTR No Sales lesson, 2023-09-18):** your ads perform well when all three hold: CTR above 1.5% (winners often 2%+), CPC below $1 (his winners $0.30 to $0.40), and CPM below $25. If all three hold and there are no sales, the store is the problem, not the ads [01:42]-[02:06]. [L0773, 2023; L0774, 2023]
- Test new offers, a new store design, and new copywriting. Change something on the store every day until the conversion rate reaches the target. [L1375, undated]
- When a product gets clicks and spend but no sales, check the parts you control in this order: landing page first, then creative, then offer, and only then the product itself. Changing the product before the page is fixed leaves the real cause unknown. [L1382, undated]
- Clicks and spend may not show sales on the same day. Orders can come from people who clip an ad and keep it until a need appears, so a good ad can produce sales months after it stops running. Plan for delayed responses when measuring an ad campaign. [L1366, undated]

### Diagnosis: traffic but no sales

- Assuming a traffic problem when sales are missing is a mistake. If visitors arrive and do not convert, the issue is usually the store experience or the offer compared with competitors. [L1274, 2018; older]
- Diagnose in this order [L1274, 2018; older]:
  1. Check the bounce rate on the pages that receive traffic.
  2. Check whether shoppers add products to the cart and then leave without completing the order.
  3. Check whether visitors are comparison shopping and leaving for better deals elsewhere.
  4. Re-research the top competitors, focusing on the pages already getting traffic, to see what they do differently.
  5. Only after you know what competitors offer, add incentives such as bonus gifts or expiring coupon codes to make buyers choose your store.

  [L1274, 2018]
- Case: a second store with over 100 products, running Google Ads and working on SEO, had been open since April, received a fair amount of traffic, and had zero conversions. The previous Black Friday produced zero revenue. The recommended diagnosis was a conversion problem, not a traffic problem: check the bounce rate and add-to-cart-then-leave behaviour, check comparison shopping, then re-research competitors on the pages that already get traffic. Set up email campaigns before peak season so non-buying visitors can be followed up. [L1274, 2018; older]

### Google Shopping troubleshooting

- The Google Shopping conversion rate should be around 2.5 percent or higher, roughly five times the 0.5 percent that signals a problem. Measure it on Google Shopping traffic only, not overall site traffic. [L1277, 2020; older]
- Conversion fix when Google Shopping traffic does not convert [L1277, 2020; older]:
  1. In Google Ads, list the products that receive clicks and where the spend goes.
  2. Search those products on Google Shopping the way a customer would, and note which competitors show up.
  3. Open the competitor ads and product pages, and compare them side by side with your own pages.
  4. Check how each competitor shows shipping timing and stock, shipping and returns policy, price match policy, number and quality of images, and product descriptions.
  5. Cut spend on products that cost money without sales and that you cannot compete on.
  6. Improve your product pages where competitors are stronger, then move budget to products that convert.

### Traffic versus store attribution

- Strong ad metrics do not prove the store works, so analyze the store separately. [L1345, 2021+]
- Use the funnel stages to decide whether a problem sits in traffic or in the store. Ad clicks with a healthy landing-page add-to-cart rate point to later stages; a 1-2% add-to-cart rate points to the landing or product page. [L1260, undated]
- Measure ad effect with delayed responses in mind, because a good ad can produce sales months after it stops running. [L1366, undated]
- Do not treat a traffic problem as the cause of missing sales without checking the store. [L1274, 2018; older]

### When to kill a product

- Do not conclude that a product is dead after the first day or two of traffic. Low sales often come from fixable problems in the offer, images, trust elements, or checkout, so optimize each level before giving up. [L1345, 2021+]
- Before cutting a product, check the parts you control in this order: landing page, creative, offer, then the product itself. [L1382, undated]
- Cut spend on products that cost money without sales and that you cannot compete on, then improve product pages where competitors are stronger before moving budget to products that convert. [L1277, 2020; older]

#### Further details

- In Phase 5 (Days 60-75), after 48-72 hours of ad testing, diagnose whether poor performance is caused by an ad problem (weak creative or ineffective targeting) or a funnel problem (low product page appeal, unclear offer, or checkout friction); this diagnosis determines which system requires optimization effort. [L0199, 2026]


Part 5 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/04-diagnosis-tree-low-checkout-completion.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/06-customer-research-feedback-and-behavior-analytics.md
