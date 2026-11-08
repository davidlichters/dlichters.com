<!-- part of ecom/deep/20-scaling-team-and-processes.md -->
Part 26 of 37 of "20. Scaling Team and Processes: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes.md · Previous: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/25-testing-cadence-and-scale-or-kill-decision-rules.md · Next: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/27-scaling-google-and-bing-ad-budgets.md

### Learning phase: keep hands off

- After launching traffic campaigns, do not constantly adjust settings, do not panic or overreact to early performance data, and do not restart or duplicate campaigns, because this disrupts Google's optimisation. [L0168, undated]
- After launch, monitor for three specific issues only: campaign disapprovals, account warnings and technical errors. Escalate these to support, but do not adjust other metrics during the learning phase. [L0168, undated]
- When a store has a long ad-time budget, leave it running. Sales from paid traffic should appear within 1 to 3 days of the click, so a long wait without sales signals a problem to fix. [L0964, 2023]
- If an ad is making sales but is not yet profitable, let it run until it either becomes consistently profitable or falls below break-even ROAS, then switch it off. Do not switch it off while it still performs well, and do not change the budget during the learning phase. [L1315, 2023]
- Do not customise a product whose original profit fluctuates a lot. Keep the original running at the same budget and treat the early phase as a learning phase. [L1030, 2026]

### Optimisation rules for scaling campaigns

- Optimisation rules, applied to yesterday's ROAS and the last 4 days (use 7 days if not confident):
  1. If yesterday's ROAS is above benchmark ROAS, increase the budget by 20%. [L1335, 2023+]
  2. If yesterday's ROAS is roughly equal to break-even ROAS, make no change and monitor closely. [L1335, 2023+]
  3. If the ROAS over the last 3 days plus today equals break-even ROAS, keep the same budget; if it is slightly below break-even, reduce the budget by 20%. [L1335, 2023+]
  4. If the ROAS over the last 3 days plus today is below break-even ROAS, turn the ad set off (kill the loser). [L1335, 2023+]
  5. If a campaign is unprofitable, check both ad-set and ad level; if one ad takes most of the spend (for example 90%) without a sale, remove that ad. [L1335, 2023+]
  6. Consistently underperforming ad sets or creatives should be removed. [L1335, 2023+]
- Budget example: an ad set at $50 with a 4-day ROAS of 1.4 and break-even ROAS of 1.5 is slightly below break-even, so its budget is reduced by 20% to $40. [L1335, 2023+]
- Test one ad group at a time: Scale only from proven assets, not from unproven combinations. [L1469, 2023+]

### Kill criteria

- Product kill decision: if you have spent your break-even cost per purchase and metrics are not promising (poor attention, poor interest, poor conversion rate despite good attention), stop testing and move to the next product. Do not burn budget on products with no signal. [L0067, 2023]
- Kill the product if results remain poor after the spend and audience test on Facebook. [L1213, 2023]
- Cutting a product after roughly one month without clear data, because results seem insufficient, makes it hard to know whether the product was really working. Decide on a product using its data rather than short-term impressions. [L1347, undated]
- Decide when to cut on day 2 or day 3 by judgement: when soft metrics are weak early in the test and the product cannot realistically become a brand, cut it. The choice depends on the product and the operator's conviction. [L1030, 2026]
- Cut a product that shows thin margins and repeated red days without a consistent signal. When margins are very lean, one more red day can be enough to stop it. [L1030, 2026]
- Keep a product only while it has a clear chance to become a brand. Holding a mediocre product ties up budget that could test another product, so move on when opportunity cost outweighs the upside. [L1030, 2026]
- A product built for a quick pump-and-dump with no brand potential should be dropped rather than customised. [L1030, 2026]
- Reallocate ad budget across a supplier list with uneven margins:
  1. Cut ad spend on products and suppliers where the margin is too thin or no sales happen. [L1069, 2019]
  2. Move the budget to the products and suppliers where margins are healthy. [L1069, 2019]
  3. Return to the low-margin suppliers and negotiate better pricing before adding more ad spend to them. [L1069, 2019]
- Decide with the data for each product and do not kill a product on a single weak signal. [L1213, 2023]

### Product customisation gates

- Test a book product first with an unchanged or minimally changed cover and content, then look for proof of validation, meaning real customers buying the book, before investing in full branding. Only build the full custom version once that proof exists. [L0333, 2026]
- Customising a book's cover and contents before knowing that it sells wastes time and possibly money if the product does not work. Test the product first. [L0333, 2026]
- A "pump and dump" approach uses fast tests with minimal customisation to check many products quickly. It suits speed-focused testing but skips the brand-building that comes after validation. [L0333, 2026]
- Once a brand consistently makes over $1k per day in profit, the owner can consider custom ads and custom covers as the next stage. Before that, focus on validating the concept. [L0351, 2026]
- Once a product is profitable, refine it rather than changing products. Mentors suggested focusing on one profitable product before testing more products. [L0577, 2023]
- Proof-of-concept gate before custom production: the product must hold a profit margin of US$75-100 per day consistently for 3-5 days. [L1019, 2026]
- Do not build the full testing, scaling and graveyard structure before the proof-of-concept gate is passed; save the structure for later. [L1019, 2026]
- The minimum signal to consider customising is consistent profit of about $100 or more per day over three days. Below that, customising wastes time and money on video credits. [L1030, 2026]
- A product that makes about $200 profit per day on the same budget for three to four consecutive days is a candidate for customisation. In the example, customisation started on day 8, after the profit held on the following days. [L1030, 2026]
- Customisation workflow for a proven product, in order:
  1. Keep the original product running in its CBO campaign. [L1030, 2026]
  2. Around day 5 or 6 (or day 8 if the $200 pattern applies), duplicate the CBO campaign. [L1030, 2026]
  3. Upload custom UGC ads to the duplicate. [L1030, 2026]
  4. Create a second product on the same store landing page with a custom cover photo, a different title and its own link. [L1030, 2026]
  5. Duplicate the campaign again and point it at the custom-cover product, with its own custom UGC ad. [L1030, 2026]
  6. Run the custom version together with the original until the custom version shows consistent profit. [L1030, 2026]
  7. Turn off the original product's ads once the custom version is clearly profitable. [L1030, 2026]
- Customisation gates at a glance:

| Gate | Signal | Unit |
|---|---|---|
| Proof-of-concept before custom production | US$75-100 profit/day, consistent for 3-5 days | [L1019, 2026] |
| Minimum signal to consider customising | About $100+ profit/day over 3 days | [L1030, 2026] |
| Candidate for customisation | About $200 profit/day, same budget, 3-4 consecutive days | [L1030, 2026] |
| Custom ads and covers as next stage | Consistently over $1k/day profit | [L0351, 2026] |
| Do not customise | Original profit fluctuates a lot | [L1030, 2026] |

### Diagnosing bottlenecks

- Identify the bottleneck by checking the funnel in order and reading the colour of each metric. If the Meta side is red, fix ads; if the website side is red while Meta is green, fix the website; if both are red, fix both; a healthy Meta side with a healthy website means scale. [L1354, 2025-26]
- Troubleshooting a store with lots of traffic and few conversions:
  1. Cut outsourced traffic if it produces no sales. [L0664, 2020]
  2. Reduce Facebook and Google budgets to about $5 per day. [L0664, 2020]
  3. Pause Bing ads until Google Shopping is profitable. [L0664, 2020]
  4. Focus on making Google Shopping profitable. [L0664, 2020]
  5. Check the store look, traffic source, product pages and checkout process. [L0664, 2020]
- When CPA is higher than target while the campaign is still profitable, the funnel has room to improve. The levers are the ads, the average order value and the landing page, not only the budget. [L0875, undated]
- Optimise in this order once products are live: images, discount display, ETA, reviews, and tabbed pages. Feature-to-benefit rewriting and extra images follow as soon as possible. [L1130, 2020-26]
- If revenue stays flat, first check how much of the existing audience is used. Look at email database revenue per contact and remarketing audiences before adding new traffic. [L0854, 2022]
- Use a test-and-measure approach for performance drops: change one variable at a time and record the outcome before the next change. [L0950, 2023]

#### Further details

1. Pick four or five representative towns or market segments for the test.
2. Start users quickly with a sample offer or a free package that carries your full claims.
3. Track whether the people who get the sample buy, how often they reorder, and how much they spend.
4. Calculate how long it takes for the profit from those buyers to repay the cost of selling to them.
5. Only expand to national or wider campaigns after the figures confirm the cost, sale and payback are acceptable.
[L1261, undated]


Part 26 of 37 of "20. Scaling Team and Processes: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes.md · Previous: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/25-testing-cadence-and-scale-or-kill-decision-rules.md · Next: https://dlichters.com/ai/ecom/deep/20-scaling-team-and-processes/27-scaling-google-and-bing-ad-budgets.md
