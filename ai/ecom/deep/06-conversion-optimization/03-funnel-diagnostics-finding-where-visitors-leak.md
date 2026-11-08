<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 3 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/02-when-to-start-readiness-and-the-pre-traffic-launch.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/04-diagnosis-tree-low-checkout-completion.md

## Funnel diagnostics: finding where visitors leak

### Diagnosis rules: traffic, offer, page, and the ad-to-store split

- Conversion work starts in one of two ways: customers report a problem, or conversion falls below target. The diagnosis below covers the second case, when no direct feedback exists. [L0473, 2021-22]
- Diagnose in this order: traffic, then offer, then web page. The page usually has the smallest effect on conversion chance, so start with the traffic source, not the page layout. [L0473, 2021-22]
- Under the 40-40-20 rule, about 40% of conversion depends on traffic targeting (who is sent to the site and where they land), about 40% on offer quality compared with competitors, and about 20% on how the offer is presented on the page. [L0473, 2021-22]
- A product that gets traffic but no sales is not automatically a bad product. Concluding that nobody wants it, or that the product is wrong, is premature until traffic, offer and page have been checked. [L0473, 2021-22]
- Ads drive traffic; the store has to convert it. High CTR with no sales points to a store-side problem such as price, offer or page content. Store changes belong in the offer, pages and checkout. [L0436, undated; L0773, 2023]
- Basic ad creatives can still hold attention and drive traffic, while a weak store (poor product description, offer or packaging) will still fail to convert that traffic. Once ads already produce clicks, improving the store is often the bigger lever. [L0502, 2020+]
- When ad metrics are strong but the store makes no sales, the traffic is qualified, so the work goes into the store. [L1171, 2024+]
- If ads perform well (good CTR and traffic) but sales are missing, improve the website, and especially the offer, rather than the ads. [L0650, undated]
- If CTR is low, the problem is the creative: test different creatives first. If CTR is high but there are no sales, the problem is the landing page: work on the page and offer, not the ad. [L0562, undated]
- A good click cost with weak sales points to a conversion problem on the site. Ads only deliver the right traffic, at the right time and price, to the website, where the conversion happens. [L0744, 2021-22]
- If search terms, bids and clicks are all in order but sales stay low, the cause is the offer, the competitive position or the site's conversion rate, not the ad settings. No amount of ad management fixes that; review market position, offer and site. [L0744, 2021-22]
- Audit each customer step from first ad to repeat purchase the way a retail consultant audits a store: the ad, the entry, product placement, checkout upsell and follow-up sequence. Each step can be tested separately, and stalled businesses usually have a glitch in one of them. [L0523, 2015+]
- Measure the conversion rate of each step separately so you know which phase needs repair. A low opt-in rate points to the squeeze or pre-frame; a low buyer rate points to the offer. Diagnose before changing anything. [L0523, 2015+]
- Make every step from landing on the store to a paid order as frictionless as possible: reach the site, find the product, add it to the cart, pay. Remove anything that gives the visitor a reason to stop or leave. [L1098, 2019+]
- Improve conversion before adding traffic. Check product pages, pricing, shipping and abandoned carts first, then increase volume. [L0801, 2021]

### Funnel benchmarks by stage

- The store funnel has four stages: landing page visit (LP), add to cart (ATC), checkout start (IC) and purchase (PUR). Each stage rate is measured against the stage before it, so the exact drop-off point can be found. [L0776, undated]
- Each funnel stage has its own problems and fixes. Low add-to-cart rate, drop-off between add-to-cart and checkout, and drop-off between checkout and purchase are different issues. Diagnose each stage separately instead of treating the funnel as one problem. [L0361, 2024]
- Shopify's online store analytics shows a funnel with the stages Added to cart, Reached checkout and Purchased, next to sessions and visitors. Check which stage loses the most visitors before changing the overall conversion rate, because the final rate alone does not show where the drop happens. [L0400, 2021-22]

**Stage benchmarks**

| Stage transition | Metric | Benchmark | Ids |
|---|---|---|---|
| LP to ATC | ATC rate | 6% or more is good; 1 to 2% points to a problem on the landing page or product page | [L0776, undated; L1259, undated] |
| ATC to IC | IC rate | 25% to 50% or more, with 50% as the target | [L0776, undated; L1259, undated] |
| IC to PUR | Purchase rate | 50% or more | [L0776, undated; L1259, undated] |

- Fix only the stage that breaks its benchmark. If ATC is below 6%, the landing page or product page is the problem and later stages can wait. [L1259, undated]
- Sources differ on the add-to-cart threshold. The 6% LP-to-ATC benchmark applies to stage analysis of landing page visitors [L0776, undated; L1259, undated]. The 4% threshold applies when a product has high CTR and low CPC but no sales; an add-to-cart rate below 4% points to the offer, price, copy or product not persuading visitors [L0691, 2024]. The sources do not state whether both use the same denominator, so measure both the same way in Shopify before comparing them. [L0691, 2024; L1259, undated]
- Add-to-cart to checkout: the target is 50%, with 25% to 50% as the range. Example: 12 add-to-cart visitors at 50% means 6 checkouts initiated. [L1259, undated; L0776, undated]
- Add-to-cart to purchase: a typical drop from add-to-cart to final checkout is about 50%, mainly from shipping cost shock. Optimisation should reduce this. [L0067, 2023]
- Add-to-cart to purchase target: 16 add-to-carts and 3 purchases is significantly below target. Aim for at least 6 purchases from 16 add-to-carts, roughly 37% to 40% checkout conversion. [L0067, 2023]
- Checkout to purchase: at least 50%. Aim for about a 50% drop-off between each stage of the checkout flow; a much larger drop-off indicates a problem to troubleshoot. [L1259, undated; L0469, 2021]
- Landing page conversion of about 3% to 4% was used as a reference point while reviewing ad performance. Compare CTR and landing page conversion together to see whether the ad or the page is limiting sales. [L0644, undated]
- A 2.5% conversion rate is the working benchmark for qualified traffic. (2023 and 2024 sources) [L0251, 2023; L0253, 2024]
- A conversion rate of 0.2% is far below a working target of about 2.5%; the lesson used that gap as the goal to close within four weeks. [L0356, 2019]
- Conversion of about 2% from quality traffic is the threshold for running the next check. If quality traffic is below about 2%, move on to a usability test. [L1068, 2019]
- Click-to-sale expectation, sources differ:
  - Older minimum: 1,835 clicks should convert to at least 15 sales, about 0.8%. If the result is significantly lower, the problem is store or product presentation, not the traffic source. [L0268, 2020]
  - Current working benchmark: clicks ÷ 40 = expected sales at a 2.5% conversion rate. For 1,835 clicks that is about 46 sales. If actual sales are lower, compare the product page with competitors. [L0253, 2024]
  - Use clicks ÷ 40 as the working expectation; treat 15 sales as the older, lower floor.

### CTR, CPC and traffic signals

- CTR below 1%: the creatives are not resonating with the audience. Test entirely new video or image creatives. [L0229, undated]
- CTR of 1.5% to 2%: pre-click performance is good. If there are still no sales, the issue is post-click (the website conversion funnel), not the ads. [L0229, undated]
- CTR above 3% with a conversion rate of 0.5% to 0.8% on a 70 EUR product signalled weak demand or weak copy. (case in the kill section) [L0693, 2024]
- CTR above 3% and sometimes 4% with a conversion rate of about 0.8% after a week was the pattern in a 60 EUR product case. [L1161, 2024+]
- A strong hook rate and CTR with low purchases means the problem sits in the offer or landing page: the ad may not clearly sell the product or may mislead, the product page may block ordering, unexpected fees may appear, the page may lack trust, or the price may come as a shock. [L0652, 2023]
- A high CTR with a low CPC, lots of visitors and no sales usually means visitors are curious but not convinced. Likely causes are the offer, price, copy, the store's trust level, or the product itself. [L0691, 2024]
- Very high CTR with no sales can point to a checkout or offer problem rather than an ad problem. Test the checkout flow yourself and confirm it completes before judging the ad. [L0644, undated]
- If most visitors leave within 9 to 10 seconds, the traffic is probably not qualified. Check the traffic source and campaign settings before changing the store itself. (2025) [L0837, 2025]
- Traffic sample sizes before you judge a result:

| Signal | Threshold | What it means | Ids |
|---|---|---|---|
| Sessions recorded for behaviour review (Lucky Orange or similar) | 150 to 200 | Enough to see where customers drop off | [L0321, undated] |
| Clicks with zero sales | 200 to 300 | Investigate by comparing with the top 3 to 5 competitor stores | [L0251, 2023] |
| Unique clicks from targeted traffic with zero sales | 300 or more | Problem is the store, offer or presentation, not the ad strategy; check competitors before cutting the budget | [L0251, 2023] |
| Clicks from relevant search terms on one product, no sale | More than 100 | Optimise that product page before changing campaigns, after negatives are cleaned up | [L0807, 2025] |
| Clicks across Google Ads campaigns over three weeks, no sales | About 600 | Funnel needs checking; a couple of sales would normally be expected; check whether visitors reach checkout at all | [L0837, 2025] |
| Clicks | About 1,000 | Meaningful sample; check search term relevance and product page before assuming the niche is wrong | [L0972, 2025] |
| Unique visitors | About 200 | Too small to judge | [L1090, 2021] |
| Unique visitors with no sales | About 2,000 | Investigate | [L1090, 2021] |

### Finding the stage that lost performance

- If conversion drops by 35%, check the metrics in sequence: did cost per link click rise, did CPM rise, did CTR fall, did add-to-cart percentage fall, did initiate-checkout percentage fall? Cost metrics point to top-of-funnel issues; percentage metrics point to website conversion. Each metric reveals which stage lost performance. [L0290, 2025-26]
- If sales or traffic dropped:
  1. Check the Google Ads numbers for changes in impressions, clicks and the keywords showing. [L1088, 2020]
  2. Check Google Analytics for changes in traffic and bounce rate on key pages. [L1088, 2020]
  3. Look for limited products or feed warnings that could be restricting ads. [L1088, 2020]
  4. If the dip continues into the next few days, review all ads and products more closely. [L1088, 2020]
- Shopify sales funnel, step by step:
  1. Open the Shopify analytics and look at the number of sessions. [L0626, 2025+]
  2. Compare the number of add-to-cart actions with the number of sessions. [L0626, 2025+]
  3. Compare the number of checkouts started with the number of add-to-cart actions. [L0626, 2025+]
  4. Compare the number of completed checkouts with the checkouts started, and note the number of abandoned carts. [L0626, 2025+]
  5. Identify the step where most visitors leave and focus the fixes there. [L0626, 2025+]
- Each funnel metric points to a specific stage, so the funnel is faster to diagnose than aggregate metrics. [L0290, 2025-26]
- A store that ran $50 per day on Facebook ads got good traffic but no sales. The spend showed that the website was the problem; the founder rebuilt the site, and the test revealed the bottleneck that was not visible before. [L1016, 2026]
- When a product gets clicks but no sales, diagnose in this order:
  1. Check how many days the ads have been running before judging results. [L1177, 2023]
  2. Check the offer. [L1177, 2023]
  3. Check the landing page. [L1177, 2023]
  4. Check the checkout process for issues. [L1177, 2023]
  5. Check creative performance using CTR and CPC in the Facebook ads account. [L1177, 2023]
  6. In Shopify analytics, check the add-to-cart percentage, the initiate-checkout percentage and the visitor count, since low traffic can explain weak results in a new campaign. [L1177, 2023]
- Seasonality: a two-month-old store saw traffic rise, Google cost per click fall and add-to-carts increase, but conversion did not rise with them. Sales peaked during Black Friday, Cyber Monday and early Christmas shopping, then dropped as buyers spent their budgets. Wait a couple of weeks to see where sales level out, and check in Google Ads whether keywords have become less relevant, since falling costs can also mean weaker keyword matches. [L0551, 2020]
- Holiday weekend check:
  1. Check the conversion rate for the product against its normal baseline before blaming a sales weekend. [L0468, 2020]
  2. Check the traffic first: confirm the keywords and products getting impressions and clicks. [L0468, 2020]
  3. Open the store as a buyer on mobile and on desktop and walk through the purchase. [L0468, 2020]
  4. Fix any step that interrupts the path from click to purchase. [L0468, 2020]
  5. Optimise the product pages before increasing ad spend. [L0468, 2020]
- Compare conversion results to a baseline, not to a single weekend. If normal conversion was already low, the problem is more likely traffic or the offer than the holiday. [L0468, 2020]

### Traffic or store: attribution checks

- Check the traffic before the store. Traffic quality comes before design: visitors who are not relevant to the product will not convert, regardless of volume. Check audience and keyword relevance before changing the page. [L0356, 2019]
- A store can be well optimised and still not sell to the wrong visitors. Check that keywords reach buyers first, then optimise the store for conversions. [L0803, 2022]
- A store with about 15 to 20 clicks per day on an $11 daily budget for about six weeks, roughly 1,000 visitors and no sales: the actions were to check keywords for buying intent, add negative keywords, lower max CPC on products that do not produce results, then work through the conversion lessons step by step. The traffic was sufficient, so the problem was conversion and traffic quality. [L0803, 2022]
- A store that gets many visitors but few orders most likely has a problem on the site itself rather than in traffic, so review the site for conversion problems. [L1069, 2019]
- Exclude non-customer traffic, such as suppliers and virtual assistants, before judging conversion, because they skew results. [L1068, 2019]
- If visitors leave a product page within seconds, the traffic is usually the problem, not the page. Improving design or copy will not produce sales until the visitors who arrive match what the store sells. [L1254, 2020-26]
- Traffic checks in order, for a store with no sales after real traffic:
  1. Check the number of unique visitors. About 200 is too small to judge; about 2,000 visitors with no sales means something needs investigating. [L1090, 2021]
  2. Check traffic quality by country (only countries you sell in) and by search term. Remove or add negatives for broad or irrelevant searches. [L1090, 2021]
  3. If qualified visitors reach relevant product pages and still do not buy, focus on on-site conversion. [L1090, 2021]
- Bounce and session-time check: a store showed an average session of 26 seconds and a bounce rate of 83.94%. Compare these numbers for mobile and desktop in Google Analytics, because slow mobile loading often causes most of the bounce. [L1090, 2021]
- Traffic that is well targeted but only checked on one device: when most conversions come from one device, adjust bids by device. (older, 2024 framing applies to current account) [L0806, 2024]
- If a store has received traffic for many months without sales, the cause is usually a front-end problem driving visitors away. Have an experienced reviewer check the live store as a first-time buyer, looking for usability and trust problems, before spending more on traffic. [L0471, 2024]
- The 40-40-20 split puts traffic first. Read the search terms or audience settings that send visitors to the page before editing the page. [L0473, 2021-22]

### Diagnosis tree: low add-to-cart

- Work the funnel top to bottom. Check the LP-to-ATC rate first. Only when it is healthy, check ATC-to-IC; only when IC is healthy, check IC-to-PUR. [L0776, undated]
  1. LP to ATC below 6%: work on the offer, images, branding and trust, copywriting, friction and speed. [L0776, undated]
  2. ATC to IC below 25% to 50%: work on audience quality, trust, shipping prices, taxes, address issues and currency. [L0776, undated]
  3. IC to PUR below 50%: work on shipping prices, currency, payment processors and taxes. [L0776, undated]
- If visitors do not add products to the cart, check these causes in order:
  1. Bad offer. [L0776, undated]
  2. Poor product images. [L0776, undated]
  3. Poor branding and weak trust factor. [L0776, undated]
  4. Poor copywriting. [L0776, undated]
  5. Too much friction on the page. [L0776, undated]
  6. Speed-related issues. [L0776, undated]
- When people do not add to cart, the usual causes are an overly complex page, a price that is too high, unexpected fees, shipping cost shock, a lack of trust, or a functional problem on the page. Simplify the page and remove surprises before lowering price. [L0950, 2023]
- Product that converts well at checkout but has low add-to-carts: the issue is usually the funnel, such as the product page or pricing. Check the funnel before concluding the product is weak. [L0660, 2019+]
- Product detail page (PDP) check:
  1. Check whether the PDP converts visitors at a reasonable rate. [L1038, 2026]
  2. If conversion is weak, optimise the PDP first. [L1038, 2026]
  3. If conversion is still weak, check whether the landing page or the ad creative is the problem. [L1038, 2026]
  4. Keep testing until a winner appears, then scale it harder. [L1038, 2026]
- Visitors who reach a product page but never add to cart point to a page that is not driving the main action. The page should focus on the add-to-cart button; visitors who wander to the home page or collection pages may be distracted. [L1085, 2018]
- Diagnosing a product page where many visitors do nothing:
  1. Check how long visitors stay on the product page and whether they scroll. [L1085, 2018]
  2. Load the page on mobile, including a slow connection (for example 3G), to see whether it appears quickly. [L1085, 2018]
  3. Check page speed, since visitors who see a blank screen or wait for loading often leave before the page appears. [L1085, 2018]
  4. Compare the result with the expected conversion rate on the actual number of visitors who reached the product page. [L1085, 2018]
- Time on page: if visitors stay under 15 seconds and do not add to cart, the messaging is not compelling. [L0321, undated]
- Google Ads: when ads get clicks but few add-to-carts:
  1. In Google Ads, open the alpha and beta campaigns and go to the Keywords view. (2023) [L0970, 2023]
  2. Check which keywords triggered the clicks and whether they show buying intent. [L0970, 2023]
  3. Add vague or unrelated terms as negative keywords so budget goes to buying terms. [L0970, 2023]
  4. Compare the product page with the top two or three competitor pages side by side and check whether they make a stronger offer. [L0970, 2023]
- Product with clicks, add-to-carts but no sales: the store and pricing are the first suspects. [L0552, 2023]
- Diagnosing add-to-carts without purchases:
  1. Confirm add-to-carts are happening but no sales follow. [L0874, 2026]
  2. Place a test order to check that the checkout button and checkout flow work. [L0874, 2026]
  3. If checkout works, review the offer against competitors' offers. A broken checkout button alone can stop all sales even when add-to-carts are high. [L0874, 2026]
- Consider a full-page review using the six factors in the page-scoring section below. [L0473, 2021-22]


Part 3 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/02-when-to-start-readiness-and-the-pre-traffic-launch.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/04-diagnosis-tree-low-checkout-completion.md
