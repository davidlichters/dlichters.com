<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 18 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/17-interest-audience-size-rules.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/19-product-testing-playbook-and-kill-rules.md

### Gender

- Keep gender set to all genders and do not narrow it, because Meta optimises by performance. Narrow gender targeting only when the creative and product are clearly for one gender, such as a men's grooming kit. [L0648, undated]
- Gender breakdown: in Ads Manager, open the breakdown menu and select Breakdown by gender. Check where budget and sales go, because a single gender often takes 70 to 90 percent of the budget, even with open targeting. Other breakdowns in the same menu are By time and By delivery. [L0648, undated]
- If the product is not clearly gender-specific, test open targeting and a single-gender split test (for example 10 tests) against each other. Gifts can cross genders, so the data decides which gender converts. [L0648, undated]
- Default gender in the standard setup is all genders. [L0865, 2025-26]
- Testing a gendered product, such as men's jewelry, when the seller has no prior success with that audience:

1. Start with broad interest targeting. [L0773, 2023]
2. Confirm the CTR is good and that the target gender engages with the ad. [L0773, 2023]
3. Test interests that the target group typically follows, such as cars or sports, adjusted to each country. [L0773, 2023]
4. Run multiple countries in the same campaign and break the data down by country to see which performs best. [L0773, 2023]

- In Audience Insights, the gender split at the broad level should be checked first, before narrowing. A grilling audience was roughly 42 to 46 percent men. [L0487, 2018]

### Reading Breakdowns: Demographic and Time Analysis

- Target Evidence Prompt uses your Facebook ad account metrics to refine customer targeting and messaging. Use it with 2 to 3 days of product running data. It covers:
  - gender breakdown with performance by gender [L0221, 2026]
  - age breakdown with performance by cohort [L0221, 2026]
  - time-of-day and day-of-week spending patterns [L0221, 2026]
  - top performing ad creative themes [L0221, 2026]
  - geographic concentration data [L0221, 2026]
- Ads Manager breakdowns: open the Breakdown menu and choose By gender, By time or By delivery to see where budget is spent and which segment converts. Check the gender breakdown after tests. [L0648, undated]
- Use the ad data analysis procedure in the Audience Research section above for gender, age, time and hypotheses. [L0613, 2026]

### Keeping Variables Isolated

- In a test, only the variable under test should differ between ad sets. Unequal budgets or different creatives make the comparison of countries or audiences invalid. [L0644, undated]
- Each testing ad set should hold exactly one interest, and the other settings stay identical, so only the interest differs. [L0647, 2024+]
- Test a single variable per run: country, interest, gender or age. For a country test, use the same ad and copy in each ad set with equal budgets. [L0644, undated]
- When testing several interests with the same creative, keep the creative identical across ad sets where the test is about audience. [L0692, 2023]
- Keep creatives that perform acceptably across ad sets, and drop only those that perform badly in a consistent way. [L0692, 2023]
- Test different ad copies and different interest audiences because the winning audience is found through testing. [L1185, 2023]
- Keep ad set settings identical except the interest. Duplicate an existing ad set and change only its targeting. [L0647, 2024+; L0692, 2023]
- Single-gender split tests are run against open targeting, so the gender variable is the one under test. [L0648, undated]

### Scaling Winning Audiences

- Once an interest or niche produces sales, narrow the creative and targeting to that niche. [L0644, undated]
- Interests that convert are used for scaling. The interest that works best is used for scaling. [L1212, undated]
- When scaling, the winning group can be narrowed. In one case the group was narrowed to women 45+ interested in astrology in two cities, and that audience produced most of the sales. [L0388, 2024+]
- Targeting that works should be expanded horizontally: keep adding new interests after the first winners, because the goal is a steady stream of new winning pockets. [L1335, 2023+]
- Scale the number of interests only once the store has sales and a good conversion rate. [L1216, undated]
- Scale the winning audience. Keep the winners at the same ad settings and expand the number of interests once sales are steady. [L1216, undated]
- Interest choice is judged by sales, not by attention. [L0999, 2023]
- A small narrow audience can produce a few early sales and then stop. Check the ad account data to decide. [L0524, 2023]
- Broad targeting underperforms on some products. If broad underperforms, move to broad interest audiences before falling back to no-interest targeting. [L0999, 2023]

### Consolidated Ad Set Starting Template

Use this setup for a new product test, one interest per ad set:

| Setting | Value | Source |
|---|---|---|
| Campaign | One campaign, each country or interest in its own ad set | [L0644, undated; L0774, 2023] |
| Countries | US, UK, Australia, New Zealand, Canada | [L1193, 2026] |
| Age | 18 to 65+ | [L0678, 2023; L0865, 2025-26] |
| Gender | All genders | [L0648, undated] |
| Language | English, unless the ads or store are in another language | [L0648, undated] |
| Detailed targeting | Broad for the first ad set; one interest per additional ad set | [L0642, undated; L0647, 2024+] |
| Interest size | At least 5M for single-interest tests; ideally 10M+ | [L0376, undated; L0639, 2023] |
| Starting interests | 4 or 5 interests; or 4 interests plus one broad ad set | [L1216, undated] |
| Launch | 12:00 AM next day, budget about $10 | [L1335, 2023+] |
| Ad set name | The exact interest name | [L1335, 2023+; L0642, undated] |
| Dropshipper interests | Do not exclude | [L0648, undated] |

### Broad Versus Interest Targeting

| Situation | Approach | Source |
|---|---|---|
| Product is not very specific or niche, and you target top five or e-packet countries | Broad targeting with an audience of at least about 5 million people | [L1469, 2023+] |
| Product is narrow | Go narrow with targeting | [L1440, 2021+] |
| Sales already come in and a niche is working | Narrow the creative to that niche | [L1426, undated] |
| Budget is low and the problem is common to many groups | Catch-all ads are acceptable | [L1426, undated] |

- Meta has been pushing broad targeting in recent years and has removed many interest options, so broad audiences often beat very narrow interest targeting. Advantage+ shopping campaigns follow this direction by using the account's purchase and engagement history rather than manual audience choices. [L1335, 2023+]
- Broad targeting lets the algorithm choose the audience without interest restrictions. It works immediately for some ad accounts, but other accounts may need a large spend over roughly a month before the data supports good results, so the budget must be able to absorb that test. [L1426, undated]
- On Facebook you can target broad and still do well, because the algorithm uses the ad copy to find the audience. [L1440, 2021+]
- Run separate campaigns for broad, niche and specific targeting, run them in parallel, compare which performs best, and keep the winning targeting. [L1469, 2023+]
- A broad-targeting test on Facebook was suggested at about £50 per day for one month for accounts that need large volumes of data. That level is high for small stores, so run it only when cash flow can absorb the test. [L1426, undated]

### Audience Size

- For products that are not very specific or niche, use broad targeting with audiences of at least about 5 million people, especially when targeting top five or e-packet countries. Let strong creatives define the audience through engagement data and pixels. [L1469, 2023+]

### Creative as Targeting

- Facebook builds a profile of who responds to an ad from its copy and creative. [L1426, undated]
- A niche message, such as a specific profession with the problem named in its language, lets the algorithm find that audience faster and makes the message resonate more. [L1426, undated]
- When sales already come in and a niche is working, narrow the creative to that niche, for example nurses or snowboarders in parks. [L1426, undated]
- Catch-all ads are acceptable when budget is low and the problem is common to many groups. [L1426, undated]

### Finding Interests

- Facebook interests are determined by what people like and follow on their social media, not by what they say about themselves. An unrelated interest such as astrology can produce the best results if that is what the buyers follow. [L1439, 2024+]
- To find new interests similar to a winner, open the ad set, scroll to Detailed targeting and click Suggestions. Pick related interests with a good audience size, for example a category interest such as home appliances for a cleaning product. [L1335, 2023+]
- Look for interests that match the customer's life, not only the product. Examples include family, hobbies or astrology, so the audience reflects who buys the product. [L1469, 2023+]
- A post-purchase survey can ask why the customer bought and what they plan to use it for. The answers can refine interest targeting for Facebook ads. [L1412, 2023]

#### Interest Testing Process

1. Find out who has already bought, including age, gender and country. [L1439, 2024+]
2. List possible interests from their everyday life, such as hobbies, food, parenting, health, TV series and streaming shows. [L1439, 2024+]
3. Test many different interests in parallel, within the daily ad budget. [L1439, 2024+]
4. Keep the interest that brings sales and scale it over a longer period. [L1439, 2024+]

- Do not test too many interests at the same time, because the number that can be tested depends on the daily ad budget. Running ten interests with a small budget gives too little data per interest. [L1439, 2024+]
- For gift products, the person who pays is often not the person who uses the product. Test interests that match the likely gift buyer's own life, such as what they follow and do, rather than only the recipient's profile. [L1439, 2024+]
- For a jewelry store, interests built around the product itself or around occasions, such as jewelry, anniversaries and relationship status, produced weak results. Fashion accessories worked better, and a fitting interest was found only by testing many options. Do not assume that buyers follow an interest just because it matches the product or occasion. [L1439, 2024+]
- For a known buyer profile of UK women over 35, possible interests to test include parenting, motherhood, cooking, health, work and career topics, and popular UK TV programmes or Netflix shows. Use such a list as a starting set and keep only the interests that bring sales. [L1439, 2024+]

#### Interest Cases

- A shoe store found that the strongest interest was astrology, which had nothing to do with shoes. Women above 45 living in Australia who were interested in astrology became very good customers. [L1469, 2023+]
- A jewelry store had zero sales before joining mentoring. After the store focused on a clear offer, changed the product images, added a two-for-one bundle and tested interests, sales began to rise. About 20 sales came in one week, but sales stalled at one or two per day afterward. The winning interest for this brand was one that unexpectedly fit the buyers, and the sales came mainly from UK women over 35. [L1439, 2024+]

### Country Selection

- For a clean country test, place each country in its own ad set with the same ad, copy and campaign, and control the spend per ad set with equal budgets. Putting several countries in one ad set lets Facebook pick the winner by engagement and can starve smaller markets. [L1426, undated]
- When countries share one ad set, Facebook can send 90% of the spend to one country, here the UK, and leave Australia and New Zealand with almost nothing. Separate countries into their own ad sets to avoid this. [L1426, undated]

### Age, Gender and Demographics

- Facebook audiences skew toward users over 30, while TikTok and Snapchat attract younger users. Facebook ads need higher production quality than UGC-style content, which fits younger audiences better. [L1431, 2020+]
- Use the buyer profile from existing sales, including age, gender and country, as the starting point for demographic choices. [L1439, 2024+]
- Demographic examples from tested stores: UK women over 35 for a jewelry store [L1439, 2024+], and women above 45 in Australia for a shoe store [L1469, 2023+].

### Keeping Variables Isolated

- In a valid test, all variables must stay equal except the one being tested. Unequal spend between two countries, such as 2 versus 5 per day, distorts the comparison. [L1426, undated]
- When you duplicate a winning interest into a new ad set to test a different interest, delete the older interest from the duplicate, so the test isolates the new interest and each test runs on its own. This keeps the results of each test clean. [L1382, undated; L1436, undated]

#### Further details

- Target newer smartphone models as a proxy for buying power, since people who can afford a new phone are more likely to buy higher-priced products. [L0643, 2015]

- To target phone types, use Facebook's option to target Android users rather than limiting the audience to one phone brand, so that the product still reaches a broad group of customers. [L1161, 2024+]


Part 18 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/17-interest-audience-size-rules.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/19-product-testing-playbook-and-kill-rules.md
