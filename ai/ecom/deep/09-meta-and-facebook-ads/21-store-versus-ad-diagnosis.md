<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 21 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/20-kill-and-keep-rules.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/22-ad-creative-copy-and-placement-formats.md

### Store versus ad diagnosis

- The job of the ads is to drive traffic, and the job of the store is to make the sale. If traffic arrives but there are no sales, change the store (design, offer, bundle, pricing or copy) before changing the ads. [L1220, undated]
- Before launching a test, make sure the store has a branded product page and updated, good-looking creatives. A weak store or old creatives make the test result less reliable. [L1124, 2026]
- Testing procedure with checkpoints (procedure): 1. Set a test budget of $300 per product and split it into blocks of $100. 2. Spend the first $100, then check CPM, CTR and CPC in Ads Manager. 3. Check the store data after the first $100: if ad metrics are good but there are no sales or add-to-carts, the problem is the store. Change the theme, price, offer or copywriting and spend another $100. 4. If the ads have no good metrics, change the audience or the creatives and test again with the next $100. 5. Once sales start, the ads work: find the winning interest, country and offer. 6. If the store is changed and there are still no sales after the tweaks, and the offer seems good, move on to the next product. [L1161, 2024+]
- Spending the full $300 on a product in one go, without a checkpoint, makes it impossible to tell whether the ads or the store are failing. Split the budget into $100 blocks and check the data after each block. [L1161, 2024+]
- Ad account and payment check (procedure): 1. Check the ad account and payment setup after buying an existing Facebook account, especially if it had a restriction. 2. If spend stays far below the budget, duplicate the campaign and run it again. 3. Let each ad set run about 4 days until it has about $20 spent. 4. Judge the ads by CTR and CPC first. 5. If the ad metrics are good but there are no sales, change the store. 6. If there are no add-to-carts, first test the offer and bundles before concluding the ads fail. [L1220, undated]
- Debugging weak results in new international markets (procedure): 1. Check the market settings and shipping settings for each market. 2. Place a test order through the checkout using two random addresses from each country to confirm it works end to end. 3. Break down the ad results by country in the ads dashboard (age and gender are also possible breakdowns). 4. Find the country that received most of the spend but produced no sales, and pause it. 5. Test the remaining countries, ideally one at a time, and check the results again. 6. Check the store for broken buttons and wrong language text. 7. Review the full funnel, including add to cart and checkout steps, to find where visitors drop off. [L0694, 2024]
- A market that looks dead after a small spend may just lack data, so split tests by country in a way that gives each one enough spend. [L0694, 2024]
- Troubleshoot a campaign with zero clicks before building broader audiences. Do not start top-of-funnel Facebook ads while a campaign is getting zero clicks. Troubleshoot that campaign first, or turn it off and restart. [L0852, 2020]
- Ad campaign with no clicks: a case in which a campaign targeting Australia spent 143 USD in total. [L0361, 2024]
- Dropshipping rests on the funnel: a case in which ads showed CTR of 3.1 to 5.45 percent, but zero add-to-carts and zero Shopify analytics. [L0361, 2024]
- Check the store and the offer after strong CTR without sales, using the funnel review step. [L0361, 2024]

#### Case: cheap clicks, no add to cart (complete)

Case: a student ran a Meta campaign targeting Australia only and spent 143 USD in total. CTR ranged from 3.1 to 5.45 percent across the assets, and CPC ranged from 0.60 to 1.15 USD with an average of 0.67 USD. The campaign produced zero add-to-carts, and Shopify analytics also showed zero, so the pixel alone was not the likely cause. The advice was to stop the campaign, review the funnel with the mentor, and look for a new product, because cheap clicks without add-to-carts show weak interest in the product or offer. [L0361, 2024]

#### Case: dominant creative and suspected tracking fault (complete)

Case: a student ran a Meta campaign for three days, spending 150 EUR across five ad sets until the spend reached break-even. Most of the budget went to one video creative, and Meta kept sending the spend to it. The store's general conversion rate was about 1 to 1.1 percent. The campaign produced 91 clicks at a CPC of 1.76 EUR and a CTR of 1.08 percent, but only one add-to-cart. The student stopped the ads and cut the dominant creative from the ad sets. The mentor suspected a tracking fault, a funnel problem, or an outdated product, and noted that influencer traffic had produced more add-to-carts and at least one purchase. [L0361, 2024]

#### Case: day one failure that became profitable (complete)

Starting point: a new dropshipping product was tested with a campaign set up as CBO, with three ad sets, all creatives placed in each ad set, a $100 daily budget, and a branded product page with updated creatives. Day 1: the campaign spent about $104.49 and produced one purchase, giving a CPA of $104.49, which would normally lead to switching it off. Day 2: nothing was edited and CPA fell to about a quarter of day one (around $26). Day 3: nothing was edited again, and the campaign produced about $1,000 in revenue at about $15 CPA, with more purchases than Facebook reported. Day 4 morning: CPA started at about $4. Break-even CPA was around $20 to $21 with a $30 selling price and a $10 product cost. Result: the test looked like a failure on day one but became profitable by leaving it running, and the winning campaign was then scaled. The speaker estimated roughly $200 profit on day three. These figures are as stated in the lesson. [L1124, 2026]

### Testing variables and order

- When testing, fix the variables in this order: 1) the offer and the website at the end of the funnel, 2) the audience, and only then 3) vary the creative. Otherwise a weak result cannot be traced to a single cause. [L0646, 2023]
- Facebook test structure (procedure): see the standard ABO product test above; all settings identical except the interest. [L0648, undated]
- Isolation rule for ads: when Facebook favours one ad over others in an ad set, initially trust Facebook's choice. If you want to test underperforming ads, isolate them in a separate ad set and force spend into them for 3 days to see if they perform better in isolation. [L0067, 2023]
- Ad testing procedure in an ad set (procedure): 1. Create 3 ads in one interest ad set. 2. Run for 3 days minimum at break-even cost per purchase spend level. 3. Review which ad Facebook favours by looking at spend and CTR. 4. If one ad significantly underperforms but other metrics are promising, isolate it in a separate ad set and force spend into it to test further. 5. If metrics across the ad set look good overall (good attention and interest), proceed to creative review and hypothesis testing. 6. Do 2 to 3 rounds of testing iterations minimum before killing a product. [L0067, 2023]
- Ad testing with an isolated ad: a per-ad test with high spend in one set needs a separate ad set to read the ad itself. [L0067, 2023]
- Split test interests, mobile, desktop, operating system, gender and age brackets as much as you can. [L0643, 2015]
- Start new campaigns with a low budget and split test one variable at a time, choosing creative as the variable when creating the test. [L0649, 2019]
- Test at least 3 to 5 ad sets per product before judging. [L0375, undated]
- Keep the same creatives across ad sets so the interest is the only variable. [L0376, undated]
- Do not test many variables at once. Change one thing per ad, keep copy and hook identical, and compare the lift. [L0640, 2023]
- one source 2026 product rule: test one pixel per product; if a product in the test fails several times in a row, move the successful ad set to a CBO and turn off the failing ad set. [L0348, 2026]

### Country and market tests

- Multi-country market testing (procedure): 1) Launch the product in about five countries, including the countries where the competitor runs ads. 2) Break down ad results by country. 3) Compare CTR, CPC, CPM and conversion rate per country. 4) Narrow the test to the countries with the best results. [L1185, 2023]
- For each country, spend at least $50 in total, with at least $10 on each of five ad sets, before judging a product. This gives enough data to read CTR. [L0661, undated]
- Put the budget behind the country that performs best, rather than spreading it evenly. [L1220, undated]
- Split test by country, age group and gender after a test campaign has run. [L1220, undated]

### Testing pitfalls

- Do not cut a product after a single day or after spending only $50 without sales. Meta requires time to test different audience segments and show results. [L0037, 2026]
- Judging a new ad after a few hours on a $5 daily budget is premature. [L0645, 2023]
- Cutting ad creatives and age groups too quickly after a few good sales can cause CTR and sales to drop sharply. [L0690, 2022+]
- Assuming weekends are always the best days to test. [L0692, 2023]
- Removing a creative after mixed results, rather than retesting it. [L0692, 2023]
- Running a product for a full month across carousel, image and video creatives with no sale, rather than setting a fixed cap. [L0660, 2019+]
- Spreading a small budget across many ad sets. [L0694, 2024]
- Pushing a product at audiences who do not respond. [L0760, undated]
- Spending the full $300 on a product in one go, without a checkpoint. [L1161, 2024+]
- Changing audience, placement or ad set settings during a product test. [L1193, 2026]
- Assuming a method working in one ad account works in another. [L0375, undated]
- Judging an ad as a failure after $10 to $15 spend with no add-to-carts. [L1220, undated]
- Cutting a test after the first day with a high CPA (paper handing). [L1124, 2026]
- Judging a product on the first day alone. [L1124, 2026]
- Judging a product after one bad day, and not giving a product the spend to read its result. [L1124, 2026]
- Judging an interest, ad or ad set before its break-even spend. [L0645, 2023; L0646, 2023]
- Reacting to single-day results. [L0690, 2022+]
- Running ads with no measurable goal, for example mixing multiple platforms into one store. [L1184, 2023+]
- Under-funding a test with $20 to $40 per campaign. [L1124, 2026]
- Scaling before the threshold of sales is reached. [L0361, 2024]
- A mixed approach where results are judged before the ad has spent enough to read a result, while also not stopping when the spend passes break-even with no promising signal. [L0640, 2023]
- Judging a new product's ads after a day or two, which wastes money on losing ads. [L0999, 2023]
- Using a product's ads as proof that the product fails in a market when only one ad was run there. [L0691, 2024]

### Product-level testing principles

- Dropshipping is about testing rather than overthinking. Launch the product, gather data and decide based on the results. [L1172, 2023+]
- Profitability cannot be expected immediately. [L0440, 2023+]
- Test a product for enough spend before moving on, and keep a product whose metrics show that its audience responds. [L0229, undated; L1124, 2026]
- Products are not given a fixed budget in advance. [L0440, 2023+]
- Results from a test can be read by country, age and gender once spend is split. [L1220, undated]

### Before you spend: store and supplier checks
- The landing page must deliver what the Facebook ad promises. If a visitor clicks an ad for one product and the homepage shows unrelated products, the visitor loses trust and leaves. [L1346, 2020-26]
- Cut ad spend on products from a supplier who does not process orders at once. Spending to acquire customers for products you cannot ship only wastes budget. [L1407, 2023+]

### Diagnosis order: ad metrics before store conversion
- When checking Meta ads, judge CTR, CPC, and CPM first, and only then the store conversion. [L1345, 2021+]
- Record results daily, including trends and patterns by day of week and time of day, even when sales are flat. [L1345, 2021+]

### Killing underperforming creatives (ad level)
1. Compare each ad's CPC and CTR with your account averages (example: average CPC $0.90, average CTR 1.3%). [L1345, 2021+]
2. Wait until the ad has spent about $8 or more. [L1345, 2021+]
3. If the ad shows clearly worse data, such as a CPC of about $3 and a CTR of 0.3% to 0.5%, turn it off. [L1345, 2021+]
4. Keep the other creatives in the ad set running so they get budget. [L1345, 2021+]

### Killing underperforming ad sets
- Cut an ad set after two days if it has spent more than the breakeven cost per purchase without a sale, and replace it with a new audience. [L1345, 2021+]

### Testing pitfalls
- A typical beginner mistake is launching ads to an unreviewed store and spending money, such as $200 with no sales, before knowing whether the product page, offer or checkout is the cause. [L1452, 2026]

#### Further details

- The testing phase is built to find winners quickly while not wasting much money or time forcing an ad set to work. Clear kill rules, applied on schedule, are the main protection against overspending on weak audiences or creatives. [L0376, undated]


Part 21 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/20-kill-and-keep-rules.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/22-ad-creative-copy-and-placement-formats.md
