<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 20 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/19-data-windows.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/21-kill-rules-by-platform.md

## Test budgets, kill rules and scale decisions

### Starting budgets and first spend

- start with $10 to $30 USD per day across all campaigns. The goal is to reach return on ad spend (ROAS) within two to three days. [L0243, 2019]
- a starting daily ad budget of about $10 to $30 per day is typical for new stores. Promotional ad-credit vouchers can cover roughly one week of advertising at no cost. [L0247, 2021]
- a few hundred dollars is enough as a starting ad budget for the first months, provided ad spend is monitored closely and optimized. Profits should then be reinvested into ads. [L1068, 2019]
- leaving campaigns running without checking them can drain money quickly. For example, a $100 per day budget left unmonitored for a month would leak a large amount of money. [L1068, 2019]
- For a new store, $1,000 in ad spend covers about 30 days of paid traffic. Free traffic methods can reduce how much must be invested in ads each month. [L0360, 2024]
- Older advice (2021 to 2022): a daily budget of about $30 equals roughly $1,000 per month and is a reasonable entry level. Other examples mentioned are $50, $100 and $1,000 per day, depending on what the advertiser can comfortably afford. [L0749, 2021-22]
- Older advice (2021 to 2022): only put a daily ad budget into a shared budget that you could lose completely in a single day without financial stress. If you cannot afford to lose a given amount daily, do not set it as the budget. [L0749, 2021-22]
- Older advice (2021 to 2022): a daily budget set very low, for example $2 per day, produces too little data to learn anything. Sales may come only once every three or four months. The budget must be realistic enough to generate meaningful results. [L0749, 2021-22]
- Older advice (2021 to 2022): ad spend aims at long-term profitability, not profit every day. Days with zero return or a full loss on ad spend will happen, so judge performance over time rather than daily. [L0749, 2021-22]
- Older advice (2021 to 2022): beginners without advertising experience often spend money on ads that bring no return during trial and error. Plan a test budget for this learning period and track returns from the start so losses are limited. [L1014, 2021-22]
- Treat money spent on ads and tests as a purchase of data. Every dollar spent should produce a lesson that brings the business closer to profitability. [L0631, 2026]

### Lead generation and warm audience budgets

- Daily lead budget = target leads per day × maximum cost per lead. Example: 10 leads per day at a $4 maximum gives about $40 per day. [L0649, 2019]
- Start each lead generation campaign at $5 to $10 per day. The customer goodwill campaign can run on $5 per day because it only needs to show ads to a few people. [L0649, 2019]
- As a starting point, the three warm audiences together need about $15 to $20 per day. The promotions budget depends on the size of the audience. [L0649, 2019]
- When entering a promotion budget in Meta, the screen shows the audience size and the estimated daily reach. Try different budget amounts to see how reach changes before launching. [L0649, 2019]
- Budget needs grow with traffic. Retargeting a large audience, such as 100,000 site visitors, costs far more to reach than a 1,000-visitor audience, so size budgets to the audience. [L0649, 2019]
- Ad fatigue in cold lead generation took roughly half a year to over a year to appear. Earlier, ads had to be swapped out about every week. [L0649, 2019]

### Per-product testing budgets

#### Budget caps and loss limits

| Cap or limit | Applies when | Source |
|---|---|---|
| Maximum $300 per product before deciding to cut or continue | Cut the product if it is profitable or break-even after $300 of spend. | [L0307, 2023+] |
| About $200 to $250 before the decision | Set as the test budget limit. Kill threshold: conversion stays below 1% after optimization. | [L0363, 2022+] |
| Loss limit about $300 (or $200 also possible) | Track daily in a Google Sheet recording ad spend, cost of goods and sales. Stop once cumulative losses reach the limit. | [L0691, 2024] |
| About 200 to 300 USD | Good CTR but no sales after the full optimization set. | [L0773, 2023] |
| About 100 USD | Poor CTR: turn the product off earlier. | [L0773, 2023] |
| About 250 to 300 USD | Spend on testing one product. Move on if the aimed-for results do not appear, but only if the store was also improved during the test. | [L1108, 2023] |
| $300 without sales | Switch the ads off and move to the next product, after the optimization steps in the procedure below. | [L1171, 2024+] |
| About 500 USD per product | Reference figure for planning a product test in the example given. | [L0678, 2023] |
| About 400 to 500 USD with good CTR and no sales | Move on to the next product. The likely cause is the offer, which should be improved before spending more. | [L0661, undated] |
| About 400 USD spent, only about 50 to 60 USD returned | Still losing money: stop and move on. | [L0661, undated] |
| Break-even cost per purchase | Test budget limit. One or two days beyond it only if there are positive signals, such as a good CTR of around 2.5 to 3% with no sales yet. | [L0639, 2023] |

- Example daily tracking for a $300 test limit: day 1 is -$50, day 2 is -$30, day 3 is +$20, giving a running balance of -$60. Keep adding each day's result until the balance reaches -$300, then stop the product. [L0691, 2024]
- Low-cost product test example: a pack of 24 cheap juice units cost about 3 USD in total, and the challenge was run with almost zero spend besides the product and food. [L0764, 2022]
- A low-cost product test can be run by buying the item from a marketplace such as Amazon, filming with it, and returning it for a refund afterward. The main cost is the consumables used during filming, such as food, so the test budget stays close to zero. [L0764, 2022]

#### Product test procedure (budget and kill rule)

1. Spend about $25 to $30 per day across 5 to 6 ad sets at $5 each. [L1171, 2024+]
2. Let the ads run for the first three days without interfering. [L1171, 2024+]
3. Gather data until about $100 is spent and check that CPM is below $25, CTR is above 1.5% (ideally 2%), and CPC is below $1. [L1171, 2024+]
4. If these numbers are met, check the store's conversion rate, which should be at least 1.5%. [L1171, 2024+]
5. If conversion is too low, improve the offer and store for two to three days. [L1171, 2024+]
6. If there are still no sales after $300 spent, switch the ads off and move to the next product. [L1171, 2024+]

#### Price-based spend threshold (product page test)

- Use this procedure when a product reaches its first spend threshold, about 10% of price, with no sale. [L0965, 2024]
  1. Do not switch the ads off yet. [L0965, 2024]
  2. Check the search terms for irrelevant traffic and add those keywords as negative keywords. [L0965, 2024]
  3. Open the product pages of your future competitors for the exact same product and compare them with yours. [L0965, 2024]
  4. Change your page to match or beat what the competitors do better, which is where the conversion rate can improve. [L0965, 2024]
  5. Keep spending while you optimize, and stop only at about three times the first threshold if there is still no sale. [L0965, 2024]
- Example: for a $1,500 product, the first spend threshold is about $150, meaning 10% of price. If $150 is spent without a sale, keep the ads running and start optimizing. Stop at about $450 (three times the threshold, roughly 30% of price) if there is still no sale. [L0965, 2024]

### Ad and ad set budgets by platform

#### Meta (Facebook)

- Test ad sets with a daily budget of $5 each. The presenter starts 4 to 6 ad sets, so the test spends about $20 to $30 per day in total. [L0642, undated]
- Check ad performance after about four days of spend (about $20 per ad set), starting with CTR, then CPM, then sales. [L0642, undated]
- Ad testing budget: start with about 5 USD per ad set (or 5.10 USD). Run five ad sets at 5 USD per day for about four days, then analyze. Alternatively, 20 USD per ad set for two days. [L0773, 2023]
- Ad budgets for a single ad start at $10 to $50 per day. The ad is judged when it has spent three times the desired cost per acquisition (CPA). Example: for a product bought at $15 and selling at $45 with a target CPA of $15, the ad runs with $45 per day until it is switched off or scaled. [L0995, 2023]
- Budget rule for a single Facebook ad: daily budget = 3 × target CPA. Example: CPA $15 gives a daily budget of $45 per ad. Target ROAS example: product cost $15, selling price $45, CPA $15 = 3:1 target ROAS. [L0995, 2023]
- Limit a Meta daily budget correctly. The daily budget shows three limits: average daily spend equals the daily budget, maximum daily spend equals daily budget × 1.75, and maximum weekly spend equals daily budget × 7. Example with a $25 daily budget: average $25.00 per day, maximum daily $43.75, maximum weekly $175.00. [L0348, 2026]
- Set the spend limit for an ad set at the product's cost of goods, so the first test measures whether the product covers its cost. Return on ad spend (ROAS) is the revenue from the ad divided by the amount spent on it. [L0562, undated]

#### TikTok

- Starting daily ad spend for a new product test: break-even cost multiplied by 10, divided by 4, which equals the daily ad spend for one ad set with no targeting. [L1177, 2023]

#### Pinterest

- Pinterest test budget: start with a daily budget of exactly $5 per campaign, with $10 as the maximum to start with. A single product can be tested for under $5 per day, and multiple products can run in parallel at $5 each. Test three to five products if the budget allows. [L1134, undated]

#### Google and YouTube

- A YouTube ads test needs a budget of at least $1,000 to $2,000. Expect to wait two to three weeks before judging results, and a single month of testing often only improves creatives. [L0788, undated]

### Learning phase and waiting times

#### Wait times at a glance

| Platform or case | Wait before judging | Condition | Source |
|---|---|---|---|
| Meta learning phase | About 50 conversion events within one week | The event must match the optimization goal (purchase or add to cart). Hard to reach at small budgets. | [L0353, 2023] |
| Meta ad sets | About 3 to 5 days of data | Early results are unstable because the pixel is still learning. | [L0639, 2023] |
| Meta new campaign | Roughly 3 days of ad spend | If the 24-hour spend runs out before that, send metrics to the coach for review instead of deciding alone. | [L0874, 2026] |
| Meta ad set (budget $5) | Break-even amount spent | Break-even $20 at $5 per day: wait 4 days (20 ÷ 5). | [L0648, undated] |
| Phase 5 ad testing | 48 to 72 hours | Sufficient data to identify whether a product-and-creative pairing is viable. | [L0199, 2026] |
| Pinterest campaign | About 100 visitors | Early data is too noisy to act on. | [L1134, undated] |
| Campaign at $5 per day | At least 5 to 7 days, ideally 7 | Review once it has reached around 100 visitors. | [L1135, undated] |
| TikTok new campaign with little traffic | 2 to 3 days | Check whether metrics have settled before changing anything. | [L1177, 2023] |
| Google integrated system | 2 to 4 weeks | Measurable improvement during Google's learning and optimization phase. | [L0168, undated] |
| Google campaign data | Six weeks (January to mid-February example) | Enough to identify which products attract traffic and deserve optimization investment. | [L0208, 2024+] |
| Google, ads evaluated | Two-week intervals | Do not switch ads off early. | [L0429, 2022] |
| Ad account ranking | About five months at about $500 per month (about $2,500 spend) | Enough data to rank products and ads by results. | [L0803, 2022] |

- Do not judge a campaign after one day of data. Allow about 3 to 5 days of data before deciding. [L0639, 2023]
- Judging a new campaign after less than a day or after a small spend, such as $35, is premature. Wait for several days of data before deciding whether it works. [L1107, 2023]
- For a $24.99 product, four ad sets with about $3.50 spent each and a single sale is an acceptable early start. Judging the campaign after less than one day is premature. Compare results against break-even ROAS and wait for several days of data before changing the setup. [L1107, 2023]
- Do not judge a product on the first day. During learning, CPMs tend to be high and CTR low, so the data is not reliable yet. [L1135, undated]
- Avoid abrupt launches and large budget changes. Performance fluctuates on the first day and usually stabilises around day three or four as the account learns the audience. [L1135, undated]
- Let each campaign run for at least five to seven days, ideally seven, and review it once it has reached around 100 visitors. [L1135, undated]
- Waiting for a longer run only makes sense when the early numbers show a plausible path to the benchmarks. [L0361, 2024]
- Do not close a store just because ads have run for a few weeks without sales. Compare the clicks from each Google Ads campaign against the sales and decide on optimizations based on traffic volume. A store with very little traffic cannot yet be judged on its conversion rate. [L0837, 2025]
- Judge a new Meta campaign after roughly three days of ad spend. [L0874, 2026]
- A new campaign with little traffic may need several days before its results stabilize. Judge performance after two to three days and check whether the metrics have settled before changing anything. [L1177, 2023]
- Typical Google Ads ramp (especially with low starting budgets): a first sale within a few weeks, about one sale a day by month two, and two to three sales a day by month three. (2023) [L1094, 2023]

#### Test cost before the first-sale gate

- Test cost before the first-sale gate equals the daily budget times the number of test days. At $5 per day for six days, the spend is $30, so a product without a sale by then is dropped. [L1135, undated]


Part 20 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/19-data-windows.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/21-kill-rules-by-platform.md
