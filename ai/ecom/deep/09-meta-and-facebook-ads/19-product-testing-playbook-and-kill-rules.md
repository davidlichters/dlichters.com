<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 19 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/18-gender.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/20-kill-and-keep-rules.md

## Product Testing Playbook and Kill Rules

### Test budget and total spend

- Validate a product with a total test budget of $150, which is faster than smaller tests. The lowest test budget mentioned for this purpose is $50. [L1193, 2026]
- Budget about $1,500 per month for Facebook testing, with roughly $300 to $400 per product, aiming to test one to five products per month. [L0519, 2020+]
- A per-product test budget of $300 to $400 covers changing landing pages, creatives, countries and offers. [L1184, 2023+]
- Spend at least about $50 per campaign before judging its metrics, because Meta needs enough spend and data to learn which audience to target. [L0874, 2026]
- A test budget of only $20 to $40 per campaign is too small to produce enough purchases to read a result. Fund a test so that several purchases can realistically happen before the decision. [L1124, 2026]
- Spend at least about $100 to test a new product, split across five ad sets of about $20 each. This is the minimum needed to read CTR and decide whether the product or creative deserves more budget. [L0562, undated]
- For each country, spend at least $50 in total, with at least $10 on each of five ad sets, before judging a product. This gives enough data to read CTR. [L0661, undated]
- Set a fixed spend cap per product test. Stop the product when the cap is reached without a sale. Running one product for a full month across carousel, image and video creatives with no sale wastes far more budget than the EUR 50 kill threshold used in EU general-store testing. [L0660, 2019+]
- For a product test that spends about 225 AUD (around 150 USD) with zero or one sale and a low CTR, review the ad rather than funding it further. [L1212, undated]
- Test budget per product: around 200 to 300 USD when CTR is good, and stop earlier, around 100 USD, when CTR is poor. If there are still no sales after 200 to 300 USD, stop testing the product. [L0774, 2023]
- Daily testing budgets ranged from $50 to $150, and sometimes reached $200 while many interests were being tested. [L0549, undated]
- A daily budget of $50 suits early testing because it runs over a full week and gives roughly four weeks of data, rather than spending everything in three days. Increase the budget only when cash flow allows it. [L1225, 2025]
- Use a daily ad budget of about $100 or more only with daily checks on creative, audience and trend. CBO campaigns at $100 or more per day need this; testing ad sets at $5 to $10 per day is fine for the early phase. [L1345, 2021+]
- Interest test ad sets run as ABO at 10 EUR per day, with 50 EUR as the overall test budget. [L0693, 2024]
- A single country with four ads needs at least about $10 per day for a useful test over several days. Five dollars per ad set per day is likely too little for five ads in five countries. [L1315, 2023]
- Example budget: $8 per day per interest (about $10 USD), split across multiple interests, with a total daily spend limit of $50. [L0067, 2023]
- Spreading a small budget across many ad sets leaves too few clicks and conversions per market to judge. For example, five sets at about 10 EUR each for roughly 200 EUR in total is too thin. [L0694, 2024]
- Reframe ad spend as buying data, not losing money. The early ad budget is for learning what converts and whether the page can turn traffic into sales. [L1016, 2026]
- Set a minimum spend threshold at the ad set level: spend at least your break-even cost per purchase. At the ad level, spend more to confirm the ad itself is profitable. [L0067, 2023]

### Campaign and ad set structure

#### Standard ABO product test (procedure)

1. Create and connect the Meta pixel before choosing the objective, because a new account has no pixel yet. [L0648, undated]
2. Create an ABO testing campaign. Name it with the product name, ABO or CBO, the objective and, for long runs, the start date. [L0648, undated]
3. Choose Website as conversion location and Purchase as the only objective. Leave Dynamic creative off at the start. [L0648, undated]
4. Set the ad set budget to $10 for the US, Canada, Australia and UK (5 to 10 USD range), or $5 to $7 for European and Gulf countries. Schedule the start for the next day at 12:00 AM in the ad account time zone. [L0648, undated]
5. Target one single interest per ad set, with all genders, age 20+ or 21+, and a broad audience size (for large countries about 5 million or more). Use all languages unless the store and ads are in another language. [L0648, undated]
6. Keep placements on Advantage+ placements. [L0648, undated]
7. Add 3 to 5 creatives with ad copy, and set the destination to the product page or landing page with UTM parameters. [L0648, undated]
8. Duplicate the ad set and replace only the interest until the campaign has 5 to 10 ad sets (normally 6 to 10). [L0648, undated]

#### Ad set count and structure rules

- Structure each product test as one ABO testing campaign with 5 to 10 ad sets (normally 6 to 10), each holding a single interest. All other settings stay identical, so the interest is the only variable. Start with 5 to 6 ad sets when budget is tight. [L0648, undated]
- Test structure in the testing phase: about five interest audiences and three creatives per ad set. [L0690, 2022+]
- Procedure for a five-ad-set product test on Meta: the first ad set is broad with no interests selected; the other four each use one specific interest. Use the Business Manager pixel for tracking. [L0691, 2024]
- Starting test structure: five ad sets with three ads each, a daily budget of about $5 per ad set, run for two to four days before analysing the data. [L0774, 2023]
- Test budget structure for a new product: start with $5 per ad set and run 5 to 6 ad sets, so spend is about $25 to $30 per day. Let each ad set run for at least 4 days. [L1184, 2023+]
- Test structure for a new product (procedure): 1. Run one campaign with five ad sets at $5 each. 2. Send the traffic to the advertorial. 3. Analyse CTR, CPM and CPC per ad set after the test period. 4. Keep the best-performing creative and continue testing offers before judging the product. [L1131, 2018+]
- Creatives: each test ad set contains 3 to 5 different creatives, and the same set of creatives is duplicated across all test ad sets. [L0375, undated]
- The same 3 to 5 creatives are duplicated into every test ad set. This keeps the creative constant, so the interest is the only variable compared between ad sets. [L0376, undated]
- For a first launch, build separate ad sets that each target one interest, and place 3 creatives in each ad set. Compare results per interest and creative before drawing conclusions. [L0639, 2023]
- one source 2026 test structure: CBO with three ad sets, all creatives placed in each ad set, and a $100 daily budget. A CBO test can later be followed by an ABO version. [L1124, 2026]
- one source 2026 Phase 5 initial ad test (procedure): 1. Create one CBO campaign with a $50 daily budget. 2. Split the campaign into 3 ad sets. 3. Assign 4 to 5 creative variations to each ad set. 4. Run the ads for 48 to 72 hours. 5. After the evaluation window, assess performance on CTR, CPM, ATC and conversion rate. 6. Pause underperforming combinations and optimise based on data. [L0199, 2026]
- Keep the same interests and audiences within one product's ad assets. Separate each product into its own campaign so results stay comparable. [L1194, undated]
- Run one ad campaign per platform, per store, per time period. Mixing traffic from several platforms makes the conversion rate in Shopify impossible to analyse. [L1184, 2023+]
- Test one pixel per product. Each product should have its own product page and website URL in its own ad. [L0348, 2026]
- Run ads to a collection page instead of a single product page, so the customer can choose a product. Test which products win, then manually move winning products to the top of the collection. [L0642, undated]
- Facebook test structure for a product (procedure): first, a control ad with the existing setup. Second, a single change tested as a separate ad in the same ad set, or a new ad set with identical interest, copy and hook. Third, compare the lift in sales and metrics between the two. [L0640, 2023]
- Test a new product with interest targeting first. Once it reaches roughly 10 to 20 to 30 sales, add an Advantage+ broad campaign alongside it. [L1161, 2024+]
- Results differ by product and account: one product flopped on Advantage+ from the start, another worked alongside interest targeting, and a broad campaign with 20 ad sets gave only okay results while interest targeting performed better. Test both approaches with the budget you have. [L1161, 2024+]

#### Marketing angle tests

- Targeting test with marketing angles (procedure): pick 5 different marketing angles, choose 10 interests for each angle, and create one ad set per interest, which gives 50 ad sets. Write a separate ad copy and headline for each angle, and reuse the same video if the angle is covered in it. This 500 campaign setup needs a total budget of about $200 to $250 per day. [L1218, undated]
- For a smaller budget, test 5 to 10 to 15 different interests on Facebook and place all marketing angles on the landing page, so visitors who relate to one angle get an emotional trigger there. [L1218, undated]
- Split test marketing angles for one product (procedure): 1. Identify several marketing angles for the same product. 2. Create one campaign per angle, each with interests that match that audience. 3. Duplicate the product page once per angle and change images, description and matching reviews. 4. Link each campaign to its matching page and run them at the same time. 5. Compare results, close the weaker pages and continue with the strongest angle. [L1219, undated]

### Interest and audience testing

- Test around 20 to 30 interests in ad sets to find the few winners. Each ad set is given roughly $20 to $30 of spend. If it brings no sales after that, close it and replace it with a new interest. [L0642, undated]
- Test at least 12 to 15 different interests before judging a product. If you have not found 2 to 3 profitable audiences after 12 to 15 tests, change the creatives and test 3 to 5 more interests. If the product still fails, switch to another product. [L0648, undated]
- Testing 10 to 15 audiences gives a product enough chance, since audience, landing page, videos or creators and the product itself all affect results. Judging after one audience is unreliable. [L1213, 2023]
- Each interest needs roughly one to two break-even spends before there is enough data to judge it. Testing five or six interests one after the other can take weeks, which is why faster budget choices help. [L0361, 2024]
- Interest testing workflow (procedure): 1. Before starting, set your own rules for when an interest counts as a winner, for example a number of sales and profitability. 2. Start each interest at a daily budget of about $5 for products under about $30, or higher if you want data faster. 3. Let each interest run without budget increases until it reaches your sales threshold. 4. Once an interest reaches the threshold and is profitable, increase its budget to scale it. 5. Shut down interests that do not reach the threshold. [L0361, 2024]
- Do not increase the budget of an interest while it is still being tested. Scale an interest only after it reaches the sales threshold you set in advance, for example six to seven sales, and is profitable. [L0361, 2024]
- Once 2 to 3 ad sets are profitable, find similar winning audiences by testing related interests, including interests Facebook suggests. [L0375, undated]
- Test rule for interests: Do not assume that a method working in one ad account will work in another, because every ad account differs. Test everything in your own account before scaling. [L0375, undated]
- Split test interests, mobile, desktop, operating system, gender and age brackets as much as you can, because the winning combination is not predictable. Use a split test tool when you spend around $2,000 a month or more on Facebook. [L0643, 2015]
- Split test toggle: it appears only when creating a new campaign. Choose creative as the variable, upload the two creatives, and Meta shows the budget and days needed to declare a winner. [L0649, 2019]

### Budget per ad set

#### Minimum and standard ad set budgets

- Give each test ad set at least $10 per day and let it spend for 3 days or until it reaches its break-even cost per purchase (BECPP). For mid-high ticket products priced at $90 or more, start each ad set at $15 per day instead. [L0375, undated; L0376, undated]
- Start testing with a budget of $5 to $10 per ad set, then check the break-even ROAS. Products are not given a fixed budget in advance: if a product is not profitable, switch to the next product. [L0440, 2023+]
- Start Facebook ads with about $5 to $10 per ad set. Scale spend only after results show that the audience responds. [L0492, 2023+]
- Test budgets at about $5 per day per ad set during the testing phase. Move an ad set into scaling only after it has produced around four purchases. [L0524, 2023]
- A new product should start with a small test budget per ad set. [L0999, 2023]
- Starting ad set budget per day: $10 for the US, Canada, Australia and UK, where CPCs are higher. Use $5 (or $5 to $7) for European countries and Gulf countries, where clicks are cheaper. [L0648, undated]
- A $5 budget may need 3 to 5 days to gather enough pixel data, while $10 gathers it faster. In cheaper countries such as Germany or France, $5 to $7 can still gather enough data. [L0648, undated]
- Daily budget per ad set during testing, based on selling price: under $30 = $5; $30 to $60 = $10; $60 or above = $15. Higher-priced products have a higher cost per acquisition, so each ad set needs more budget to win one customer. [L0647, 2024+]
- Example: a product priced at $34.99 falls in the $10 tier. Five ad sets at $10 per day means the testing campaign spends at most $50 per day. [L0647, 2024+]
- For audience testing of products priced under about $30, start each interest with a daily budget of about $5. This is a guideline, not a strict rule. [L0361, 2024]
- A higher daily budget such as $10 to $15 gets data faster, which is the main goal of interest testing. For cheap products, $5 per day may still be preferable, because it spreads data over several days and avoids judging a product on one unusually bad day. [L0361, 2024]
- Testing ad sets at $5 to $10 per day is fine for the early phase. [L1345, 2021+]

#### Why budgets are sized this way

- A higher ad set budget sends more data to a new pixel, which can produce early sales and a faster read on whether an audience works. [L0375, undated]
- A higher ad set budget feeds more data to a new pixel, which can produce early sales sooner. This makes the early read on an ad set more reliable. [L0376, undated]
- Higher-priced products need more audience reach and more spend to produce one sale, so the daily budget should be sized to the product price. To test fast, set each ad set's daily budget at the BECPP or slightly above it, so some ad sets can produce an early sale as a positive signal. [L0376, undated]
- For higher-priced products that need more reach to convert, setting the daily ad set budget at the BECPP or slightly above it speeds up testing, and an early sale is a good sign. [L0375, undated]
- Starting with a high daily budget on a new Meta campaign spends money before the pixel and audience have enough data to optimise. Begin with a low daily budget per campaign and raise it only after results show which audiences perform. [L0649, 2019]
- Daily test spend equals the number of ad sets multiplied by the daily budget per ad set. For example, 5 ad sets at $5 each means $25 per day, and running them for 2 to 4 days gives enough data to decide. [L0774, 2023]
- Low-budget product testing (procedure): 1. Launch the new product with a low daily budget, for example about $10 per day. 2. Check whether the ads gain traction. 3. If they do not, move to the next product. 4. If they do, test different offers before deciding to scale. [L1185, 2023]
- To find a winning Facebook ad with a small budget (procedure): 1. Start each new ad with a small daily budget, for example from 5 pounds per day. 2. Increase budget in small steps while watching which creative gets results quickly. 3. Scale only the creative that performs, and stop the rest early. [L0561, 2023+]

### Break-even rules and formulas

#### Break-even cost per purchase (BECPP)

- Break-even cost per purchase is the threshold for an ad set: spend at least that amount before judging it. [L0067, 2023]
- Let an ad spend up to the break-even cost per purchase, for example the full profit per sale such as 17 USD, before judging it. [L0502, 2020+]
- Spend up to the profit margin per ad before deciding. If an ad is still unprofitable at three times the target cost per acquisition, shut it off. [L0524, 2023]
- Kill an ad set in testing once it has spent the break-even cost per purchase without a single sale. [L0646, 2023]
- Testing budget per ad set from the desired CPA: spend three times the desired CPA on each ad before deciding to turn it off or scale it. In the example, a product costing $15 that sells for $45 targets a CPA of about $15, so each ad is tested with $45 spend. Daily ad budgets for testing in the example ranged from $10 to $50 per ad. [L0999, 2023]
- Testing budget per ad set = 3 x desired CPA. Desired CPA is roughly the amount the business can afford to pay for one customer, based on the margin: with a product cost of $15 and sale price of $45, the margin supports a CPA of about $15. Example: $15 CPA x 3 = $45 spend per ad before judging it. [L0999, 2023]
- Before deciding to switch off an ad, let it spend up to the target cost per acquisition. For example, if the desired CPA is 15 units and ROAS shows 30 percent margin, spend about three times that before deciding. Then shut the ad off if it does not work. [L0646, 2023]
- Set the target cost per acquisition at about half the profit margin per order. Example: with a $30 margin, aim for $15 per customer, and cut unprofitable ads once they reach about $45 spent. [L0524, 2023]
- Check the ad-level spend: if an ad has spent around $8 to $10 or more, or about 1,000 to 1,500 impressions, and shows poor CPC and CTR, it is taking budget from other ads and should be turned off. [L0646, 2023]

#### Break-even ROAS

- Break-even ROAS = selling price divided by gross profit per sale, where gross profit = selling price minus cost of goods sold (COGS) and fulfilment costs. Example from the lesson: a $30 flower pot with $11 COGS and a price of $29.9 gives a break-even ROAS of 1.6. [L0642, undated]
- The break-even ROAS for a given product is set by its margin. A product with a $6 cost sold at about $7 allowed a break-even of about 1.1, while another brand's break-even was 1.5. Calculate break-even ROAS before deciding whether an ad with a given ROAS is profitable. [L0999, 2023]
- Break-even ROAS and the scaling conversion goal: a conversion goal for a new interest or ad set is at least four to five sales within the next couple of days, with the return on ad spend at the break-even ROAS plus 1. [L0650, undated]


Part 19 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/18-gender.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/20-kill-and-keep-rules.md
