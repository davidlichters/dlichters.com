<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 4 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/03-funnel-diagnostics-finding-where-visitors-leak.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/05-when-to-kill-a-product.md

### Diagnosis tree: low checkout completion

- Checkout drop-off after add-to-cart: first check the functional and technical issues.
  1. Is the price displaying correctly? [L0067, 2023]
  2. Is the currency correct? [L0067, 2023]
  3. Are unexpected fees appearing at checkout? [L0067, 2023]
  4. Is the shipping cost visible before checkout? [L0067, 2023]
  5. Is there a payment method issue? [L0067, 2023]
- Shipping cost shock is the main reason for the typical drop. Use language like free tracked shipping instead of standard shipping to sound more attractive and trustworthy. [L0067, 2023]
- Some people add to cart only to see the final price. If the offer is not displayed clearly (for example a free gift revealed only after adding to cart), simplify: reduce the price by an equivalent amount and show the offer on the product page. [L0067, 2023]
- If add-to-cart is high but purchases are low, check in this order: the shipping price shown, the offer, the tax settings, and whether checkout is enabled for the visitor's country. These are the most common causes of drop-off after add-to-cart. [L0363, 2022+]
- If ATC is strong but few visitors start checkout, work through these causes in order:
  1. Audience quality: if the audience is weak, test the offer again. [L0776, undated]
  2. Trust factor. [L0776, undated]
  3. Shipping prices. [L0776, undated]
  4. Taxes. [L0776, undated]
  5. Address-related issues. [L0776, undated]
  6. Currency issues. [L0776, undated]
- If ATC and IC are good but few visitors complete the purchase, check in order:
  1. Shipping prices. [L0776, undated]
  2. Currency. [L0776, undated]
  3. Payment processors. [L0776, undated]
  4. Taxes. [L0776, undated]
- Shipping prices, taxes and currency can cause drop-off both at checkout start and at the purchase step, so check them at both stages. [L0776, undated]
- Diagnosis when a store gets clicks but no sales, in order:
  1. Check shipping options and whether shipping is charged. [L0773, 2023]
  2. Check that every targeted market and country is enabled in Shopify Markets. Customers from non-enabled countries cannot select their country at checkout and abandon the cart. [L0773, 2023]
  3. Test payment providers by placing a test order with a 95% discount code on PayPal, Shopify Payments and Stripe. If a provider fails, uninstall and reinstall it. [L0773, 2023]
- If checkout is poor, check the store's traffic and ads for the same issues. If traffic is high but conversion is zero over two months:
  1. First, test checkout functionality with a $1 product on desktop and mobile. [L0274, 2023]
  2. Second, check abandoned carts immediately. [L0274, 2023]
  3. Third, review traffic source keywords for quality. [L0274, 2023]
- Debugging a conversion problem, for example 1,835 clicks with fewer than one sale:
  1. Create a $1 test product and verify checkout works on desktop and mobile. [L0268, 2020]
  2. Add PayPal, Amazon Payments, Klarna and Affirm financing options. [L0268, 2020]
  3. Analyse Google Ads data: which keywords and products receive clicks? [L0268, 2020]
  4. Identify unrelated keywords and add them as negatives. [L0268, 2020]
  5. Find products with strong competitor pricing and adjust bids. [L0268, 2020]
  6. Check for checkout errors or technical issues on both devices. [L0268, 2020]
- Shoppers who reach checkout but do not buy: audit the website and compare it with established brands in the niche. Model the structure and presentation of those brands rather than guessing. [L1251, 2024+]
- A store solution such as Debutify can support conversion at the final step, paired with a site audit to find the friction points. [L1251, 2024+]
- Checkout drop-off test: about 50% drop-off between each stage is the expected range; a much larger drop-off indicates a problem. [L0469, 2021]
- Abandoned checkouts: check them under Orders in the Shopify admin and call those customers for feedback. [L1090, 2021]
- Mobile bounce: a bounce problem on mobile often hides a checkout or load-speed problem. [L1090, 2021]

### Diagnosis tree: high CTR and no sales

- Troubleshooting framework when a campaign shows poor performance or zero sales:
  1. Ad spend analysis at the ad level within each ad set: identify which individual ad or video consumes the majority of the budget versus the others. If one creative spends 80% or more of the ad set budget and shows poor metrics (no sales, low CTR, high CPC), deactivate that single ad and let the remaining creatives spend another full break-even amount to compete equally. [L0229, undated]
  2. Evaluate all creatives: if all creatives in the ad set perform poorly despite balanced budget distribution, check their CTR. If CTR is below 1%, the creatives are not resonating with the audience; test entirely new video or image creatives. [L0229, undated]
  3. Pre-click metrics: if CTR is 1.5% to 2% (good ad performance) but there are no sales, the issue is post-click (the website conversion funnel), not the ads. [L0229, undated]
  4. Checkout and funnel verification: run a $1 test purchase from each targeted country to verify the checkout flow, shipping prices and absence of unexpected charges at the final step. Check that Shopify Markets are configured and activated in Settings. [L0229, undated]
  5. Shipping and payment processing: verify shipping prices for each country and that the payment processor functions. Test both free and paid shipping models to see which converts better, but ensure no hidden charges appear between product page and checkout. [L0229, undated]
  6. Offer optimisation: if ads bring traffic (good CTR and CPC) but no conversions, the offer may lack appeal. Test proven bundle and promotional offers: BOGO (buy one, get one free), buy 2 get 1 free, buy 2 get 50% off, free gift with purchase, or tiered bundles (single, duo, trio packs). [L0229, undated]
  7. Website trust and design: display customer testimonials prominently, both text and video. Keep the website to a maximum of three to four colours (black, white and one brand colour); consistent visual design increases perceived trustworthiness. [L0229, undated]
- Check the landing URL first. Confirm the ad opens the correct product or collection page. A wrong link can look like a conversion problem. [L0388, 2024+]
- Diagnosing a high-CTR, low-conversion store in this order: [L0388, 2024+]
  1. Confirm the ad link opens the correct product or collection page. [L0388, 2024+]
  2. Check the add-to-cart rate in Shopify. If it is near zero while CTR is high, treat the offer as the first suspect. [L0388, 2024+]
  3. Test price, bundles and offers before changing the design. [L0388, 2024+]
  4. Once sales come in, split test the design: send part of the traffic to the standard landing page and another campaign to a page-builder version. [L0388, 2024+]
  5. Choose the version that sells more before rolling it out. [L0388, 2024+]
- A high CTR with almost no add-to-cart actions means the ad works but shoppers do not find the store offer convincing. Traffic is arriving, so the problem sits on the store side. [L0388, 2024+]
- When ads have a strong CTR but no sales, the offer is usually the cause (a rough estimate of about 90%), while store design explains only about 10%. Test price, bundles and offers before redesigning the store. [L0388, 2024+]
- If CTR is high and add-to-cart is near zero, the problem is almost always the store, not the ads; fix the store before changing the ads. [L0773, 2023]
- **Facebook ads (High CTR No Sales lesson, 2023-09-18):** your ads perform well when all three hold: CTR above 1.5% (winners often 2%+), CPC below $1 (his winners $0.30 to $0.40), and CPM below $25. If all three hold and there are no sales, the store is the problem, not the ads [01:42]-[02:06]. [L0773, 2023; L0774, 2023] (TikTok uses CPM below $10 instead [L1375, undated].)
- Diagnosing a product with high CTR, low CPC, lots of visitors and no sales:
  1. Check the add-to-cart rate and conversion rate. [L0691, 2024]
  2. If add-to-cart is below 4%, review the offer, the price, the copy and whether the product page looks trustworthy. [L0691, 2024]
  3. If add-to-cart is fine but conversion is low, check shipping cost (free or not) and run a test order through the whole funnel. [L0691, 2024]
  4. Only then decide whether the product itself is the issue. [L0691, 2024]
- Worked example: with a 6% add-to-cart rate and a 1% conversion rate, the problem sits in the offer or shipping, so check those first. Also run a test order through the funnel to confirm checkout works. [L0691, 2024]
- Case, French market: a seller testing a product got a high CTR and low CPC with many visitors but no sales. The add-to-cart rate was 2.5%, far below the 4% benchmark. The seller lowered the price and tried a second offer; neither changed the result, and the ads were stopped. The lesson is to check the offer, price, copy and page trust signals against the add-to-cart benchmark before concluding the product fails. Competitors scaling the same product in that market is normal. [L0691, 2024]
- Ads that perform but do not sell: the store's offer, pages and checkout need changes, not the ads. [L0773, 2023]
- Checklist before switching off ads after $300 spent with no sales:
  1. Improve the offer. [L1171, 2024+]
  2. Improve pricing. [L1171, 2024+]
  3. Improve copywriting. [L1171, 2024+]
  4. Try another product name. [L1171, 2024+]
  5. Improve the product description. [L1171, 2024+]
  6. Activate markets so each targeted country sees prices in its own currency. [L1171, 2024+]
  7. Check that payment providers work and everything is set up correctly. [L1171, 2024+]
- Split test product pages:
  1. Confirm CTR and CPC are on target. [L1220, undated]
  2. If there are no sales, change the store first. [L1220, undated]
  3. Run the same product to different product pages with different offers, bundles and copy. [L1220, undated]
  4. Compare which pages produce sales. [L1220, undated]
  5. Keep the winning page and test the next variation. [L1220, undated]
- A high CTR with no sales means the store is the problem, not the ads. Change the store design, offer, bundle, pricing or copy, and do not rely on the first version of the store. [L1220, undated]
- Running ads to only one product page with one offer, then judging the product, is a mistake. Test several offers and bundles before concluding it fails. [L1220, undated]
- Strong hook rate and CTR, few purchases: see the hook-rate note in the signals section. [L0652, 2023]
- Basic ad creatives can still drive traffic while a weak store fails to convert; see the attribution section. [L0502, 2020+]
- If ads perform but the product page is too busy, reduce it to one clear decision that is largely made for the buyer. [L1016, 2026]
- Product page with clicks but no sales (high price): improve the product page before removing the product. Add education, reassurance, extra information or a bonus the competitor does not offer. [L0468, 2020]
- Product page friction: do not add friction; reduce it at every step. [L1098, 2019+]
- If search terms, bids and clicks are all in order but sales stay low, review the offer and the market before changing ads. [L0744, 2021-22]
- A product that converts poorly on a new page should be checked against the funnel before the product is blamed. [L0660, 2019+]
- Ads that get clicks but no sales in a targeted market should be checked for market-level issues before changing the product. [L0715, 2020-26]
- Very high CTR with no sales on one ad; see the high-CTR framework above. [L0229, undated]
- Product page with TikTok audience: if add-to-cart is high but purchases are low, audience quality is often the cause. Remove age groups that do not fit the product and test stronger offers. Example: removing the 18 to 24 group improved conversion even though add-to-cart fell. (2025-26) [L1259, undated]

### Google Shopping and Google Analytics troubleshooting

**Google Shopping: clicks without sales**

- If Google Shopping underperforms after three months:
  1. Go to Google Ads. [L0272, 2022]
  2. Run a report for the past three months. [L0272, 2022]
  3. Identify products with many impressions but few clicks. [L0272, 2022]
  4. Focus the ad budget on the 20 to 30 products already getting traction. [L0272, 2022]
  5. Pause or reduce spend on products with no impressions. [L0272, 2022]
  6. Optimise landing pages for high-impression products to increase conversion rate. [L0272, 2022]
  7. Build up initial sales volume and margin before expanding to more products. [L0272, 2022]
- If the daily budget is not fully spent:
  1. Increase product-level CPC incrementally. Start at baseline (for example 50 cents), raise to 75 cents, then to $1. [L0272, 2022]
  2. Run each increase for several days. [L0272, 2022]
  3. Continue until the daily budget is fully spent each day. [L0272, 2022]
  4. Once all products show, there is enough data to identify winners and optimise. [L0272, 2022]
  5. Add negative keywords to prevent wasting money on non-relevant searches. [L0272, 2022]
- If impressions are high but clicks are low (for example 900 impressions, 4 clicks, 90% search impression share):
  1. Check the product feed in Google Merchant Center or Microsoft Merchant Center. [L0272, 2022]
  2. Look for unapproved items, errors or warnings. [L0272, 2022]
  3. Clean up feed issues (missing fields, policy violations). [L0272, 2022]
  4. Resubmit the feed. [L0272, 2022]
  5. On Microsoft, try removing some negative keywords; the impact differs from Google. [L0272, 2022]
  6. Test a slightly higher CPC for a few days to improve ad position. [L0272, 2022]
- To find out why Google Shopping traffic does not convert (2020-22 framing, same method):
  1. In Google Ads, pull a keyword report for the Shopping campaigns and see which keywords get most of the clicks. [L0626, 2025+]
  2. Flag irrelevant or too-broad keywords and add them as negatives (exact match for generic terms) so budget stops going to them. [L0626, 2025+]
  3. Keep budget on quality keywords: brand names, product names and SKU numbers. [L0626, 2025+]
  4. Find which products take most of the budget on quality keywords and where those clicks land on your store. [L0626, 2025+]
  5. Open the product page on one side of a split screen and search for the same product on Google on the other side. [L0626, 2025+]
  6. Open the top two or three competitor sites and ask why a shopper would choose them over your store, looking at the offer and not only the price. [L0626, 2025+]
  7. Improve the product pages that receive quality traffic so the offer beats competitors, not just the visuals or price. [L0626, 2025+]
- Product gets clicks but no sales on Google Shopping: audit competitor product pages.
  1. Search the product on Google Shopping as a shopper would. [L0969, 2022]
  2. Open the other stores selling the same item. [L0969, 2022]
  3. Note anything their product page does more persuasively than yours (for example a clearer offer, trust elements, imagery or content). [L0969, 2022]
  4. Apply the changes that could realistically raise conversion on your own page. [L0969, 2022]
- Traffic quality for Google Shopping: check which search terms generate clicks to the page under review, and judge whether they come from buyers ready to purchase or from people still researching. [L0473, 2021-22]
- Shopping and product-level checks, with a full 2019-era procedure:
  1. Run a test purchase on desktop and mobile after any app or code change, since changes can break one variant. [L0356, 2019]
  2. In Google Ads, find which products are getting clicks and which search terms triggered them. [L0356, 2019]
  3. Add irrelevant search terms as negative keywords. [L0356, 2019]
  4. For relevant keywords, search the product on Google Shopping and compare competitors' prices, shipping speed, policies, bonus gifts and review counts. [L0356, 2019]
  5. Use that data to improve your own product pages and add the conversion triggers competitors use. [L0356, 2019]
  6. Make sure every major payment method is offered and easy to use. [L0356, 2019]
  7. In Google Analytics, review the top exit pages and the bounce rate, and look for reasons visitors leave. [L0356, 2019]
  8. Check that the traffic reaching the store is relevant to the products. [L0356, 2019]
- Google Ads bids by device (2024): when most conversions come from one device:
  1. Open the alpha and beta campaigns in Google Ads. [L0806, 2024]
  2. Check historical conversions by device. [L0806, 2024]
  3. If most budget goes to mobile but sales come from desktop, lower the mobile bid. [L0806, 2024]
  4. Example: a 60 cent mobile CPC can be cut by 50%, to 30 cents, to shift traffic toward converting desktop users. [L0806, 2024]
- Conversion of Google Ads products (2024 procedure):
  1. Identify product pages receiving qualified clicks from Google Ads through the correct keywords. [L0253, 2024]
  2. Calculate expected sales: clicks ÷ 40 = expected sales at the 2.5% benchmark. [L0253, 2024]
  3. If actual sales are lower, visit competitor stores and pull up the same products side by side. [L0253, 2024]
  4. Compare product page layout, images, description, reviews, pricing and warranty information. [L0253, 2024]
  5. Identify visual or functional differences that favour the competitor. [L0253, 2024]
  6. Update the product page to match or exceed competitor pages. [L0253, 2024]
- Google Ads conversion check (2023 procedure):
  1. Monitor keyword quality by checking which keywords trigger your ads. [L0251, 2023]
  2. Review conversion rates on the ads, targeting a minimum of 2.5% from qualified traffic. [L0251, 2023]
  3. If a single product has received 200 to 300 clicks with zero sales, compare the store with the top 3 to 5 competitor stores. [L0251, 2023]
  4. Document differences in product presentation, pricing, descriptions or additional features. [L0251, 2023]
  5. Implement improvements based on the competitor analysis. [L0251, 2023]
- Products with impressions and clicks but no sales, when traffic itself is not the problem: work on the store page and conversion setup of those products before cutting them from the ads. [L0715, 2020-26]
- If a single product gets more than 100 clicks from relevant search terms and still has no sale, optimise that product page before changing campaigns. Do this only after negatives are cleaned up and the product has clear relevant traffic. [L0807, 2025]
- Clicks with no sales across Google Ads over three weeks: check whether visitors reach checkout at all. [L0837, 2025]

**Google Analytics checks**

- Google Analytics Insights flags top landing pages whose e-commerce conversion rate is below the site average, for example below 0.46% when that is the site average. Use this flag to decide which product or landing page to fix first, then confirm the problem with the page's conversion rate column. [L0721, 2021-22]
- Compare product pages with each other over time as traffic accumulates:
  1. Collect Google Analytics data for product pages over time. [L0293, 2020-26]
  2. Compare pages using average time on page and bounce rate. [L0293, 2020-26]
  3. Identify pages where visitors stay longer (low bounce rate, high time on page). [L0293, 2020-26]
  4. Study those high-performing pages to understand which design and content elements work. [L0293, 2020-26]
  5. Find pages with high bounce rates (visitors leave immediately). [L0293, 2020-26]
  6. Review those pages for errors, unclear messaging, design issues or missing elements that cause quick exits. [L0293, 2020-26]
- Behaviour data for a landing page: read bounce rate, time on site, time on page and exit rate for the page used as a landing page. [L0473, 2021-22]
- Read the page with Shopify's funnel report to see where add-to-cart, checkout start and purchase drop, then return to the Google Analytics figures. [L0400, 2021-22]

### Scoring the page: six conversion factors

Full-page diagnosis for a low-converting page:
1. Review traffic targeting: list the search terms or audience settings that send visitors to the page and judge whether they reach people near the top or the bottom of the funnel. [L0473, 2021-22]
2. Check the traffic-to-page match: confirm the landing page fits the search intent and the customer awareness stage of the visitors. [L0473, 2021-22]
3. Check follow-up: confirm retargeting and email exist, and that retargeting uses varied ads rather than one dynamic product ad for 30 days. [L0473, 2021-22]
4. Review the offer: confirm it is a CURV offer, compare it with competitor offers, and check that it matches what visitors are looking for. [L0473, 2021-22]
5. Test the page on desktop, mobile and tablet, on several devices and connections (cellular data and home Wi-Fi), and check page speed. [L0473, 2021-22]
6. Read behaviour data in Google Analytics: bounce rate, time on site, time on page and exit rate for the landing page. [L0473, 2021-22]
7. Score the page against the six e-commerce conversion factors: value proposition, relevance, clarity, anxiety, distraction and urgency. [L0473, 2021-22]
8. Turn each weakness into a single test: change one element, then measure whether the conversion rate improves. [L0473, 2021-22]

The six factors apply to any page meant to drive an action, including product pages and opt-in pages with a form. [L0473, 2021-22]

| Factor | Question to ask |
|---|---|
| Value proposition | How well does the page explain the product's value, including the marketing offer, and what is the main perceived benefit for the customer? |
| Relevance | How closely does the content match what visitors expect, and how well does the value proposition address their primary problem? |
| Clarity | Does the page explain the value proposition, the offer and the calls to action clearly, with a logical sequence and enough white space? |
| Anxiety | What is missing or unclear that could make a buyer feel uneasy about completing the purchase? |
| Distraction | What does the visitor see first, and does anything compete with or pull attention away from the goal? |
| Urgency | What convinces the visitor to act now, through incentives, the offer itself, tone or message? |

[L0473, 2021-22]

- Value proposition: the visitor must associate enough value with the price. The page should explain the product's pros and cons, the marketing offer and the main benefit clearly enough that the price feels justified. [L0473, 2021-22]
- Relevance: lead with the primary problem the visitor wants solved and show the product as the solution through its main promise. Naming the problem early is what holds visitors on the page. [L0473, 2021-22]
- Clarity: the page must follow a clear sequence, make calls to action easy to find and identify, and leave plenty of white space. A cluttered page with too much text or too many elements lowers conversion even when the copy is good. [L0473, 2021-22]
- Distraction: the first thing a visitor sees must support the goal. Intrusive pop-ups and stacked widgets such as chat, messenger and wishlist pull attention from the main call to action, so product pages should show very little beyond what is needed to buy. [L0473, 2021-22]
- Split test the design after sales come in (see the high-CTR framework). Test one variation at a time. [L1220, undated]
- Improve the product detail page before testing the ad: the product page is the lever for product-level conversion. [L1038, 2026]


Part 4 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/03-funnel-diagnostics-finding-where-visitors-leak.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/05-when-to-kill-a-product.md
