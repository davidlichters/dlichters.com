<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 28 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/27-ai-assisted-term-audits.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/29-segment-bids.md

## Bidding, Budgets and Bid Optimization

### Choosing the Bid Strategy

- Campaigns with fewer than 30 conversions per month need manual bid adjustments based on product performance. Campaigns with 30 or more conversions per month can use automated Google Ads bid strategies. [L0299, 2020-26]
- Start every new campaign on Manual CPC to keep full control over spend and acquisition. [L0743, 2026+; L0225, 2015+]
- In a new account, uncheck the Enhanced CPC checkbox, which is checked by default. Google would otherwise raise bids on products it has not yet proven to sell. [L0746, 2020-26]
- Use Manual CPC over Google's automated conversion-focused bidding unless the account already tracks high conversion volume, with multiple conversions daily. [L0262, 2021-22]
- Do not use Maximize Clicks for profit-focused campaigns. Use it only if the goal is traffic volume rather than profitability. [L0225, 2015+; L0746, 2020-26]
- Target ROAS and Maximize Clicks do not work for the one source shopping funnel. [L0742, 2021-22] **

#### Automation Thresholds by Source

The sources give different conversion thresholds. Each applies to the situation described.

| Threshold | What it unlocks | Source |
|---|---|---|
| About 20 conversions per month | Automated bidding on a Shopping campaign is reasonable to turn on | [L0454, 2019] |
| 30 or more conversions per month | Switch from manual to Target ROAS or Enhanced CPC, so Google has data to optimise | [L0225, 2015+; L0299, 2020-26] |
| More than about 30 conversions per month | Portfolio bid strategies (Target ROAS) should be activated; about two months to optimise at 30 per month, about one month at 60 to 120 per month | [L0745, 2020-26] |
| 50 sales per month | Enhanced CPC or Smart Shopping, before that threshold they "blow through money" ** | [L0245, 2020] |
| 50 sales | Switch both campaigns to Enhanced CPC, so Google can find extra sales | [L0715, 2020-26] |
| 50 tracked conversions | Enhanced CPC may be turned on (rule of thumb); accounts without tracked sales must switch it off ** | [L0742, 2021-22] |
| 50 or more sales per month | Target ROAS makes sense; before this, Google has nothing to optimise against ** | [L0746, 2020-26] |

- The 30-conversion figure is the most recent guidance for moving to automation, while 50 is the stricter bar for Enhanced CPC and Target ROAS in new or thin accounts. [L0225, 2015+; L0245, 2020; L0746, 2020-26]
- Enhanced CPC should only be tested once the store is profitable, negative keywords are in place, and the alpha and beta split is set. It is not guaranteed to improve results. [L0468, 2020]

### Core Bid Formulas

- Target ROAS = total conversion value (revenue) ÷ total cost spent on the campaign. [L0113, undated]
- Target CPC (maximum bid) = revenue per click (RPC) ÷ target ROAS. [L0113, undated]
- Worked example: 100 clicks generating $1,000 gives an RPC of $10. For a 5× ROAS, $10 ÷ 5 = $2 maximum CPC. At $2 per click with $10 expected revenue, you will consistently hit 5×. [L0299, 2020-26]
- Verification: multiply the target CPC by the target ROAS. The result should match the RPC, allowing minor rounding. Example: $1.96 × 6 = $11.76, matching an RPC of $11.78. If it does not match, recalculate RPC ÷ target ROAS. [L0299, 2020-26]
- Choosing targets: the alpha campaign example uses a target ROAS of 3.3×, calculated as revenue ÷ desired ad spend. Adjust to your actual margins and profit requirements. [L0225, 2015+]
- The beta campaign uses a lower target, such as 2.5×, because beta captures less qualified research and comparison searches. [L0225, 2015+]
- Keywords use the same formula: keyword RPC ÷ target ROAS. [L0745, 2020-26]

### Starting Bids and Budgets

#### Starting CPC

| Campaign or context | Starting CPC | Source |
|---|---|---|
| Alpha, general example | $0.50 | [L0225, 2015+] |
| Beta, general example | $0.20 | [L0225, 2015+; L0746, 2020-26] |
| Alpha, alternative (double beta) | $0.40 | [L0746, 2020-26] |
| Shopping base, 2020 | about $0.25 to $0.30 before adjustment | [L0468, 2020] |
| one source low-value campaign (High priority) | 20 to 30 cents, 30 cents as example | [L0742, 2021-22; L0744, 2021-22] ** |
| one source medium-value campaign (Medium priority) | 60 cents | [L0742, 2021-22; L0744, 2021-22] ** |
| one source high-value campaign (Low priority) | about $1.20 | [L0742, 2021-22; L0744, 2021-22] ** |
| Example default | 50 cents | [L0272, 2022] ** |

- Alpha's bid must always stay above beta's bid, because alpha converts at a higher rate. [L0225, 2015+; L0746, 2020-26]
- The starting CPC should be set below the benchmark, not above it. Raise it in small steps of about 5 to 10 cents. [L0470, 2023]
- Adjust starting values once conversion data comes in. [L0744, 2021-22]
- The sources disagree on the exact starting figure. Each figure is a starting point for its own context: the alpha and beta split, the funnel tier, or the store type. [L0225, 2015+; L0742, 2021-22; L0468, 2020]

#### Daily Budget and CPC Limit

- Start with the same daily budget in alpha and beta. The course team launches new campaigns at about $20 per day each. A 27-product merchandise store used $15 per day each. A lower budget means slower data collection. [L0746, 2020-26]
- A $25 daily budget is an example starting point for testing. Budget is independent of the alpha and beta split. Each campaign can share a budget or have its own. [L0225, 2015+]
- Start Google Shopping with a daily budget between $15 and $35. [L0468, 2020]
- A common starting setup is a daily budget of about $20 with a cost-per-click limit of $1. The maximum daily budget to start with is about $33. [L0551, 2020]
- Set both a daily budget and a CPC limit. Spend stops when the daily budget is reached. Ads usually begin running 2 to 3 days after setup. [L0551, 2020]
- Do not set the CPC limit too low at launch. A very low cap restricts impressions and slows data collection. A limit near $1 is a common starting point. Adjust it once the data shows which products are over- or underbid. [L0551, 2020]
- Use "standard" delivery, not "accelerated." Accelerated delivery spends the budget as fast as possible and may exhaust it before the day ends. [L0225, 2015+]
- Test with a small budget first and increase spending only after the tests show results. [L0586, 2020-26]
- To control spend without losing campaign history, lower the daily budget instead of pausing, for example from $50 to $10 per day. Pausing causes a messy restart. [L0469, 2021]

#### Max CPC Is a Ceiling, Not a Product Count

- Question from the October 2021 coaching call: with a $1 max CPC and a $10 daily budget, can only 10 products get clicks per day? No. A $1 CPC means a click can cost up to $1; many clicks come cheaper, so the real count varies. If the true cost really were $1 per click, $10 buys up to 10 clicks in total per day, spread over any products, not 10 different products. Check the historical data in Google Ads to see what your clicks actually cost. (Added 2026-11-07 from the lesson transcript, 02:43.) [L1112, 2021]

#### New Campaign Launch Procedure **

1. Upload all available products.
2. Confirm every product is approved and receiving impressions.
3. Set a very small default cost per click.
4. Wait a few days for impressions and clicks.
5. Once clicks arrive, raise the cost per click by about 0.05 at product level every couple of days.

[L0247, 2021]

- Raising budgets and bids right after launch is a common error. Products that are not yet approved do not enter the auction, so the increase has no effect. [L0247, 2021]

### Raising CPC in Steps

#### Waiting Between Changes

| Situation | Wait before next change | Source |
|---|---|---|
| Product with no impressions in a new campaign | 2 to 3 days before going higher | [L0470, 2023] |
| Zero impressions after several days | A few days between each step | [L0251, 2023] |
| First raises, clicks just arriving ** | Every couple of days | [L0247, 2021] |
| Ongoing CPC adjustment | Every 1 to 2 weeks | [L0193, undated] |
| Any bid change | One full week, then compare the last two weeks | [L0715, 2020-26] |
| Beta with little traffic | One week between each change | [L0746, 2020-26] |
| Budget increase | 1 to 2 weeks, then review | [L0193, undated] |
| Shared budget or bid change under "Limited by budget" | A couple of days, then check status | [L0744, 2021-22] |

#### When Data Is Enough to Change a Bid

- Wait for at least 100 impressions before changing a product's CPC. Use 200 impressions to be safer. Then raise or lower the CPC depending on whether clicks cost too much or too little. [L0470, 2023]
- Start with low bids. If ads are approved and get some impressions but no clicks, or too few impressions in total, raise bids gradually. [L0715, 2020-26]
- About 100 impressions per week is far too few for a product. Raise the bid in small steps, for example from 25 cents to 30 or 35 cents. Never jump to one dollar. [L0715, 2020-26]
- Each optimisation session takes about 15 minutes once familiar. Adjust cost-per-click bids every 1 to 2 weeks. [L0193, undated]

#### Step Patterns

- **Zero-impression ladder** **: default 50 cents. Products with no impressions go to 75 cents. If the budget still is not fully spent after a week, raise to $1.00. Continue incrementally until the daily budget depletes. [L0272, 2022]
- **Zero-impression ladder** (2023): start at $0.50, see no impressions, raise to $0.60, wait a few days, then $0.70, $0.80, and $1.00. This method reveals the competitive bid landscape without requiring Google's benchmark data. [L0251, 2023]
- **Underspent campaign:** raise CPC gradually, for example from $0.35 to $0.40, rather than making large jumps such as $0.50. Small steps show whether more traffic is available at the current budget. [L0360, 2024]
- **Formula for underspent products:** new CPC = current CPC + $0.05 (for example, $0.35 becomes $0.40). Apply this only to underspent products and do not raise every CPC at once. [L0360, 2024]
- **Beta ladder:** start Beta at $0.20. After one week with no traffic, raise to $0.25. Wait another week. If traffic is still very low, raise to $0.30 and continue the same way. If traffic is good, leave the bid unchanged. [L0746, 2020-26]
#### Inch-Up Method, July 2019 Coaching Call (Daily +5 Cents)

Case from the July 2019 coaching call [L0357, 2019, transcript at 28:03]: a student's Google Shopping ads had run two weeks with under 300 impressions and about 10 clicks at a bid of about 10 cents. Course A's answer was the inch-up method below: raise the bid that same evening, check the next day, keep raising daily. A later version of the inch-up method (about 20% per step, wait a few days, 2024) is on page 30 under "Starting bids and the inch-up method"; both are kept, the 2024 version is the newer one. See also: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/30-campaign-structure-and-bid-levels.md

- **Inch-up method (July 2019 coaching call)** **:
  1. Start from the current cost per click, for example 10 cents.
  2. Raise the bid in the evening, for example to 15 cents.
  3. The next day, check impressions, clicks and sales.
  4. If results rise but not enough, raise again (for example to 20 cents) and repeat daily.
  5. Stop when ads get impressions and clicks and sales are profitable. This is the sweet spot.

  [L0357, 2019]
- There is no universal average bid. Cost per click varies by niche, brand and product group. Judge a bid by the results it produces, not a fixed number. [L0357, 2019] **

#### Raising Bids Carefully

- Do not double all bids at once when spend is low. Raise them in measured steps. [L0466, 2018] **
- Low spend with low impressions means other advertisers are bidding higher. A bid of a fraction of a cent would spend almost nothing even with a million-dollar budget. [L0466, 2018] **
- Raise bids, not budgets, when a daily budget is not being spent and impressions are low, because low bids lose auctions to competitors. [L0466, 2018] **
- Raise bids on products that you want to sell but that get no impressions, so they start appearing. [L0469, 2021] **
- Before raising CPC in a new account:
  1. Review the past month of data.
  2. Make the optimisations recommended in the optimisation lessons using that data.
  3. Then raise CPC so the full daily budget is spent on the products with the most potential.

  [L0360, 2024]

### Product-Level Bids

#### Why Each Product Needs Its Own Bid

- Conversion rates differ strongly between products, even between size or colour variants of one product. A single bid overpays for weak products and underbids strong ones. Bids should be set per product. [L0503, 2020-26]
- In one real store, product conversion rates ranged from 0.2 to 3.2%, with most between 0.6 and 0.9%. The best product converted 16 times better than the weakest (3.2 ÷ 0.2). [L0503, 2020-26]
- Leaving dozens of products under one shared bid hides large differences in conversion rate and cost per sale. Strong products get underfunded and weak products keep spending. [L0503, 2020-26]
- A 30-day campaign example: $671 spend, $5,278 revenue, 1.45% conversion rate, 7.8× ROAS. Products within it ranged from 0.5% to 8.3% conversion rate and from 0.04 to 90 ROAS, despite nearly identical bids. [L0299, 2020-26]
- Do not bid the same amount on products with vastly different conversion rates and ROAS. Each product needs a bid tailored to your profitability target. [L0299, 2020-26]

#### Applying the Formula to Products

- **Strong performer:** Product 1 shows an RPC of $11.78 with a 6× target ROAS. $11.78 ÷ 6 = $1.96 target CPC. Raise the bid from $1.00 to $1.96, because this product converts above target and can bid more aggressively for more traffic. [L0299, 2020-26]
- Rounding note: the lesson itself says "$1.97" (07:49). 11.78 ÷ 6 = 1.963, so $1.96 and $1.97 are the same bid rounded differently. (Added 2026-11-07.) [L0299, 2020-26]
- The principle: when RPC exceeds the target, the strong conversion rate supports the higher CPC. Higher bids increase volume while maintaining profitability. [L0299, 2020-26]
- A strong product with low search impression share (for example 29%) gains both traffic and impression share when its bid is raised. This captures demand you are missing. [L0299, 2020-26]
- **Weak performer:** Product 2 shows an RPC of $5.62 with a current bid of $1.00. $5.62 ÷ 6 = $0.93 target CPC. Reduce the bid to $0.93 to move it toward target profitability. [L0299, 2020-26]
- For products with very low RPC relative to target (for example $0.56 RPC with a 6× target gives $0.09 target CPC), either pause the product to free budget and inventory for better performers, or reduce the bid to the calculated amount and continue at minimal scale. [L0299, 2020-26]
- A product's maximum CPC can be lowered when it is overpriced, so Google spends the budget on products that convert. [L0468, 2020] **
- Remove products that do not reach the target ROAS and move the remaining budget to the most profitable products. [L0664, 2020] **
- Decreasing CPC is preferred to removal for low performers. They can still generate organic traffic or profitable sales at lower ad costs. [L0249, 2022] **
- Lower CPC on unprofitable products after months of data. After six to seven months, reduce CPC possibly to zero, or moderately, for example from $0.50 to $0.25. Add negative keywords to remove irrelevant search terms first. [L0469, 2021] **

#### Products That Are Far Above Competitors or Not Converting

- For a product whose CPC is far above competitors and above what its converting items pay, lower the bid to just under its current average CPC first, not to a calculated target. A bigger cut is only justified if the item is not converting at all. [L0745, 2020-26]
- Example: in one product group, the only converting item paid about $1.40 per click, while the others paid $3.00 and $5.44. Lowering the overpaying items was expected to bring the group to a ROAS of 6 or better within about 30 days. [L0745, 2020-26]
- Example: a product with 190 clicks, $300 spend and no conversion should have converted by now. Pausing it redirected the budget to the top product and, in the example, lifted campaign ROAS from 4.2 to about 6.0 without losing revenue. [L0745, 2020-26]
- Alternative to pausing: reduce the bid drastically (example: to $0.50) and keep some low-cost traffic, but only if you are confident conversion rate can be improved through website work. [L0745, 2020-26]
- Adjust bids before pausing. Poor ROAS is often a symptom of wrong bids. [L0454, 2019]
- In a two-keyword example, the weak keyword (ROAS 1.8, bid $304, cost $4,100) was not paused. Its bid was lowered to $211. Its ROAS rose to 3.9 over time, cost per click fell and conversion rate stayed the same. [L0454, 2019]
- Where the actual CPC is far below the calculated target because competition is low, keep the bid above the formula value. [L0745, 2020-26]
- A product that gets impressions but not enough clicks may need a higher CPC. Test increases on the top 20% of valuable products first. [L0274, 2023]

#### Prioritising Products

- Raise CPC first on the 20% of highest-price products that are not getting impressions. Monitor impressions and clicks, then slowly repeat for the remaining products. This prioritises valuable inventory. [L0274, 2023] **
- Aim for high impression share only on top-performing products. Segment out low performers. [L0745, 2020-26]

#### Bid Structure and Editing in Google Ads

- Ad group bids are not the main bid in Google Shopping. The product-level bid matters, but a starting bid must still be entered on the ad group. [L0742, 2021-22] **
- Bids appear per ad group as Default max. CPC in the Ad groups view, with enhanced CPC in brackets. Check them there when adjusting bids within a campaign. [L0744, 2021-22] **
- Update path : within a campaign, go to Product groups, tick all product groups, choose Edit > Change bids, enter the bid and apply. Do not set bids for excluded product groups. [L0742, 2021-22] **
- When the Max CPC field is grayed out for a product group (campaign level), go to the ad group level. Under each product group, hover over Max CPC, click the box that appears, and enter the new value. [L0253, 2024] **
- If the "Everything else in [category]" row is grayed out, hover over it, click the plus icon, and subdivide into individual products. Each product's Max CPC can then be adjusted individually. [L0253, 2024] **
- Procedure: before a bid change, verify with the bid formula that the target matches your RPC. [L0299, 2020-26]


Part 28 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/27-ai-assisted-term-audits.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/29-segment-bids.md
