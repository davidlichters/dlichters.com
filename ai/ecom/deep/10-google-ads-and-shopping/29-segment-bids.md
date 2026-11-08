<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 29 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/28-bidding-budgets-and-bid-optimization.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/30-campaign-structure-and-bid-levels.md

### Segment Bids

#### Why Segments Multiply the Work

- Google Ads lets you set separate bids by gender, age range, household income, location, day of week, hour of day, and device. Each dimension multiplies the number of bids for one keyword, so manual management quickly becomes impossible. This is the main reason to use automated bidding. [L0454, 2019]
- Dimensions interact. A group that looks valuable overall may only be valuable within certain age ranges. Analysing combinations can reverse conclusions drawn from a single dimension. Segment bids by combinations, not one factor alone. [L0454, 2019]
- Choose bid dimensions based on price point. For high-ticket products, household income is relevant, because many buyers in lower income brackets cannot afford the item. [L0454, 2019]
- Apply the same bid optimisation formula to all dimensions, not just products. [L0299, 2020-26]

#### Bid Count Example

| Dimension | Values | Running total of bids |
|---|---|---|
| Gender | 2 | 2 |
| Age range | 6 | 12 |
| Household income level | 6 | 72 |
| Geographic location | 55,423 | about 3.9 million |
| Day of week | 7 | about 27.9 million |
| Hour of day | 24 | about 670 million |
| Device (phone, desktop, tablet) | 3 | about 2 billion |

[L0454, 2019]

#### Demographics

- Procedure for a target CPC per segment (example: gender):
  1. Pull the number of clicks for each segment, for example men and women.
  2. Pull the revenue for each segment.
  3. Calculate RPC for each segment by dividing revenue by clicks.
  4. Divide RPC by the target ROAS to get the target CPC for each segment.
  5. Repeat for each added dimension, such as age ranges and income levels.

  In one example, women converted 56% more valuably than men. [L0454, 2019]
- Adjust bids on age ranges, geographic locations, and time periods by their individual RPC versus target ROAS. [L0299, 2020-26]

#### Devices

- Keep desktop and mobile traffic in one campaign rather than separate ad groups, because separating them showed no clear gains. If mobile converts much worse, reduce mobile bid adjustments by roughly −20% to −30%. [L0429, 2022] **
- Procedure for mobile and desktop bids:
  1. Run the campaign on both mobile and desktop at the start.
  2. Track conversion rates by device over time.
  3. If mobile converts clearly lower, open the campaign settings and decrease mobile bids by a percentage.
  4. Example: a desktop bid of $0.50 per click with a 10% decrease for mobile.

  [L0359, 2020]
- Device bid adjustments must be mathematically based, not arbitrary. Increase bids on mobile if mobile converts better than your target ROAS, and decrease bids on tablets and other devices using the same RPC formula. [L0299, 2020-26]
- Device adjustment formula: device conversion value per cost (ROAS) ÷ target ROAS − 1. Example: mobile conversion value over cost 3.55 with target 6 gives 3.55 ÷ 6 = 0.59, minus 1 = −41%, so mobile bids are reduced by 41%. [L0745, 2020-26]
- Do not adjust a device with too few clicks. Example: a tablet with 29 clicks lacks confidence. [L0745, 2020-26]
- Leave device bid modifiers unset and bid equally on all devices. Around 80% of internet traffic is mobile and most Google Shopping conversions occur on mobile. [L0742, 2021-22] **

| Approach | When it applies | Source |
|---|---|---|
| Equal bids on all devices, no modifiers | Funnel where most conversions are mobile ** | [L0742, 2021-22] |
| Single campaign, mobile −20% to −30% if much worse | Mobile converts much worse ** | [L0429, 2022] |
| Percentage decrease for mobile after tracking | Mobile converts clearly lower over time | [L0359, 2020] |
| Formula-based adjustment (ROAS ÷ target − 1) | Any device with enough clicks | [L0745, 2020-26; L0299, 2020-26] |

#### Locations

- Google Ads offers 55,423 geographic biddable locations. Location modifiers can be set far below country or state level. A state can carry a modifier such as 10% more value, but rural and urban areas inside a large state can convert very differently. Review at a finer level before settling on modifiers. [L0454, 2019]
- Geographic bid adjustment workflow:
  1. Open the geographic report.
  2. Set the time range (example: all time). Remove the columns for location type, most specific location and city, leaving the region or state level.
  3. Only make decisions on regions with at least 100 clicks. With fewer clicks the data is too noisy, unless the conversion rate is very high (around 3.3% or more).
  4. Sort from high to low and compare conversion rate and ROAS per state.
  5. Save the data and export it to Excel for analysis.
  6. Calculate the bid adjustment: divide the state's current ROAS by the target ROAS, subtract 1, and apply the result as a percentage.
  7. Enter the state in the campaign's location targeting and enter the adjustment percentage.

  [L0745, 2020-26]
- Geographic bid adjustment formula: (current ROAS ÷ target ROAS) − 1. A positive result means raising the bid by that percentage. A negative result means lowering it. With target ROAS 6:

| State example | Current ROAS | Calculation | Adjustment |
|---|---|---|---|
| California | 7.36 | 7.36 ÷ 6 = 1.22, minus 1 | +22% |
| A state | 4.28 | 4.28 ÷ 6 = 0.71, minus 1 | −28% |
| A state | 9.38 | 9.38 ÷ 6 = 1.56, minus 1 | +56% |
| A state | 13.8 | 13.8 ÷ 6 = 2.30, minus 1 | +130% |

  [L0745, 2020-26]
- Use judgement and statistical significance for adjustments. Evaluate data in chunks based on how many conversions were expected given the conversion rate, not on raw click counts alone. [L0745, 2020-26]

#### Time of Day and Day of Week

- Control the schedule of ads by time of day. Switch off unprofitable hours (the example given is 22:00 to 04:00) and raise bids for periods of higher demand, such as Valentine's Day for gift buyers. [L0720, 2020-26]
- Time periods use the same RPC versus target ROAS formula as other dimensions. [L0299, 2020-26]

### Pause Thresholds (Chopping Block: Clicks Without a Conversion, 80 to 120)

- Pause threshold formula: divide 1 by the average conversion rate to find the minimum expected clicks per conversion, then multiply by 1.5 to add a 50% safety buffer. At a 1.2% conversion rate: (1 ÷ 0.012) × 1.5 = 125, typically rounded to 120 clicks without conversion as the pause trigger. [L0299, 2020-26]
- Standard thresholds by conversion rate:

| Conversion rate | Threshold | Source |
|---|---|---|
| 1.2% | Pause at 120 clicks without conversion (minimum 83 clicks plus 50% buffer) | [L0299, 2020-26] |
| 1.0% | Pause at 100 clicks | [L0299, 2020-26] |
| 2.0% | Evaluate every 50 clicks | [L0299, 2020-26] |

- The formula and the table disagree at other rates. The formula gives 150 clicks at 1.0% and 75 clicks at 2.0%, while the table gives 100 and "every 50." The source does not say which governs. Check both before pausing. [L0299, 2020-26]
- Example: a geographic area (South Carolina) with 122 clicks and no conversion at a 1.2% average conversion rate has passed the 120-click threshold. It is approaching the point where reducing bids or pausing that location makes financial sense. [L0299, 2020-26]
- Lenient bound from the same lesson: in his example anything over 120 clicks without a conversion is "on the chopping block", but "you can really get away with anything over 80 clicks" before cutting a keyword or product. Before cutting, look for similar variants of the item, because they may be bringing in conversions. (Added 2026-11-07 from the lesson transcript, 13:46.) [L0299, 2020-26]
- Do not make major bid or pausing decisions on products with fewer than 100 clicks. Extend the data window, for example from 30 to 60 days, to accumulate enough clicks. [L0299, 2020-26]

### Data Windows and Minimum Data

- A 60-day window gives more reliable data than a 30-day window with fewer clicks per product. Example: $1,438 spend, $8,200 conversion value, 5.8× ROAS against a 6× target. [L0299, 2020-26]
- Use a 60-day window when possible to collect more data. Only apply the bid formula to items that have passed the minimum click threshold. Add the revenue-per-click column for product-level optimisation. [L0745, 2020-26]
- Keyword example: a keyword with RPC 28.29 at target ROAS 6 gives a bid of about $4.60 per the source. The arithmetic gives 28.29 ÷ 6 = 4.72. The keyword had only 6 clicks, so it lacked data confidence and should not be changed yet. [L0745, 2020-26]
- Before raising CPC in a new account, use the past month of data (see Raising Bids Carefully). [L0360, 2024]

### Automated Bidding

#### Enhanced CPC

- Enhanced CPC uses the manual bid as a baseline. It lets Google raise bids on searches with a higher chance of converting, while keeping baseline manual bids for other searches. It is a middle ground between full manual control and full automation. [L0225, 2015+; L0715, 2020-26]
- Google raises a manual bid when a search looks more likely to convert and lowers it when a sale looks unlikely. This matches the account's conversion history with customer behaviour. Without conversion data the algorithm only guesses. [L0742, 2021-22] **
- Enhanced CPC only works well once enough sales data exists. [L0715, 2020-26]
- For Search and Display, new campaigns no longer offer Enhanced CPC because it was deprecated. New campaigns should use Target ROAS. Existing campaigns keep Enhanced CPC until it is switched off in March, and should not be changed in the meantime. [L0360, 2024] *(2024)*
- Enhanced CPC can be switched on later in the campaign settings once sales are tracked. [L0742, 2021-22] **

#### Target ROAS

- Do not use Target ROAS in a new account. Without sales data Google has nothing to optimise against. [L0746, 2020-26] **
- Do not set a target far above current performance. If current ROAS is 3×, start at 5× and move to 8× only after 5× is reached. Larger jumps create volatility and slow the strategy down. [L0454, 2019]
- Setup procedure:
  1. In Google Ads, use the search bar at the top of the account.
  2. Type "bid" and select portfolio bid strategies, Google's list of automated bid strategies.
  3. Create a new strategy and choose Target ROAS bidding.
  4. Give the strategy a name.
  5. Enter the target ROAS as a percentage, where 5× is entered as 500%.
  6. When asked for a minimum or maximum bid, leave the fields empty, as the lesson advises against setting them.

  [L0454, 2019]
- Portfolio setup: choose the target return on ad spend option and enter the target as a percentage (example: 600). Minimum and maximum bid fields under advanced options are usually left empty. [L0745, 2020-26]
- Set Target ROAS as the bidding strategy once you have 30 or more conversions per month. For alpha, enter the calculated target (for example 3.3×). [L0225, 2015+]
- Once active, the portfolio strategy takes over individual product and bid adjustments. [L0745, 2020-26]

#### Maximize Clicks

- Do not use Maximize Clicks unless the goal is traffic volume over profitability. [L0225, 2015+]
- Use Manual CPC instead of Maximize Clicks in a new account. [L0746, 2020-26]

### Shared Budgets and Limited by Budget

#### Setting Up a Shared Budget

- Procedure (shared budget for alpha and beta):
  1. In Google Ads, go to Tools > Budgets and bidding > Shared budgets.
  2. Click the plus icon, name the budget (for example "alpha beta 2026"), check both alpha and beta campaigns, and set the daily budget.
  3. After assignment, both campaigns show the "shared" budget with the split figure, so total daily spend is divided between them.

  [L0743, 2026+]
- Create the shared budget as a new object. Do not recreate campaigns. [L0253, 2024] **
- Set the shared budget to the combined daily budget of the campaigns. Example: $20 for two $10 campaigns. [L0253, 2024] **
- When two $10 campaigns are added to a new shared budget, Google shows it as $20 per day by default. Click edit on the daily budget and set the total you want, for example $10. Both campaigns then show the split average, about $5 per day each, with the label "shared." [L0743, 2026+]
- A shared budget stops one campaign from exhausting the daily budget before the other receives impressions. [L0253, 2024] **
- Use a shared budget for alpha and beta so Google can move spend to where the searches happen. This removes the need to set separate budgets. [L0470, 2023] *(2023)*
- Funnel example: a shared budget called "Google Shopping Shared Budget" from the shared library (US$50 per day in the example) serves all three campaigns. [L0742, 2021-22] **
- A funnel uses one shared daily budget. Budget changes affect every campaign in the funnel at once. [L0744, 2021-22] **

#### Limited by Budget

- In the Campaigns view, the Status column shows "Limited by budget" when a campaign is capped and "Eligible" when it runs normally. The Budget column shows the daily shared budget, for example US$300.00 per day. [L0744, 2021-22] **
- The status also appears in the header of the ad group view and the search terms view. Check this before reading search term data, because a capped budget changes which campaign receives which terms. [L0744, 2021-22] **
- "Limited by budget" warnings are common, even for well-performing campaigns. They are not a reason to raise the budget. Raise the shared budget only as performance justifies it. [L0429, 2022] **
- Why it matters: once a funnel is limited, Google overrides campaign priority settings and sends most traffic to the campaign with the highest bid. That defeats the purpose of the funnel. [L0744, 2021-22] **
- Letting the shared budget run out daily is one of the most common reasons a shopping funnel stops working as designed. The funnel only works when the budget lasts the whole day. [L0744, 2021-22] **
- Fix procedure (in this order):
  1. Check whether the campaigns are profitable against the target cost per sale and target ROAS.
  2. If they are profitable, increase the shared budget first. Open the Budget explorer icon in the Campaigns view to see Google's recommended daily budget.
  3. If the budget is not raised, lower bids in the campaigns that drive most clicks, for example from $0.30 to $0.20, so the average CPC lands at $0.20 or below.
  4. Let the change run for a couple of days and check whether the status returns to Eligible.
  5. If that is not enough, add more negative keywords to cut the number of search terms the ads can show for.

  [L0744, 2021-22] **
- Budget explorer: when the status is "Limited by budget," the Budget explorer opens a Change daily budget panel. It lists the current budget (for example US$300.00, current) and a recommended higher budget (for example US$370.00, recommended), with estimated extra weekly clicks and cost for each. Apply saves the chosen amount. Cancel closes the panel without changes. [L0744, 2021-22] **
- Google's budget explorer recommended raising a $300 daily shared budget to $370. A step of about $70 on a $300 base is a small jump, which the lesson treats as acceptable. [L0744, 2021-22] **
- A large jump, such as from $300 to $1,000 per day in one step, is significant extra spend. Test before committing to a large increase. [L0744, 2021-22] **
- If the funnel is profitable and the budget limits it, raise the budget as far as profit allows. Clicks keep coming in at the same cost, so as long as conversion rate holds, more profitable sales follow. [L0744, 2021-22] **
- Lowering bids reduces the cost of each click and can bring daily spend back under budget. The trade-off is weaker auction position, so some traffic is lost to competitors. [L0744, 2021-22] **
- Raise the daily budget when it is used up every day, all useful negative keywords are added, and products are getting impressions and clicks. Otherwise, optimise product pages or lower CPC on products that get no clicks. [L0470, 2023] *(2023)*
- Raising the daily budget alone will not make a campaign spend more if its bids are limiting it. Bids such as CPC must rise for the extra budget to be used. [L0360, 2024] *(2024)*

### Scaling Budgets Gradually

#### Gates Before Scaling

- Only increase daily ad budgets after negative keywords are optimised, CPCs are adjusted, and ROAS is consistently at least 10×. [L0193, undated]
- Start at $10 to $30 per day and achieve 10× or higher ROAS within two weeks. [L0270, 2021] **
- Scaling a budget that is hitting a ceiling: first confirm the campaign converts and that the budget is fully spent every day. [L0429, 2022] **

#### Stepping Up

- Procedure (incremental increase):
  1. Increase budgets gradually in increments such as $15 → $20 → $30 → $40 → $50.
  2. After each increase, wait 1 to 2 weeks.
  3. Review campaign performance.
  4. Repeat the negative keyword review, CPC adjustment, and budget increase steps.
  5. Continue until ROAS drops below 10× or diminishing returns appear.

  [L0193, undated]
- Scaling sequence (2021): increase daily budget incrementally, for example $30 → $50 → $70 or more, while monitoring ROAS. Continue monthly increases as long as ROAS stays above 10×. Focus on scaling without reducing profitability. [L0270, 2021] **
- Scaling best products (2020): set a daily budget for your best products, for example $20 per day. Let it run a few days. If spend rises by 25%, clicks and sales should also rise by about 25%. If so, raise the budget in steps, for example to $25, $30 and then $40 per day, letting each step run for a few days. Stop increasing when profitability falls. [L0551, 2020] **
- Scaling a budget that hits a ceiling (2022): raise the daily budget modestly, for example from $35 to $45 or $50 per day. Wait one to two weeks and check results. [L0429, 2022] **
- Consider adding Microsoft Ads only after Google spend is close to maxed out. [L0429, 2022] **
- Increase Google Ads budgets faster than Facebook budgets, because Google's search volume can absorb larger jumps. Doubling a Google budget can roughly double results, though this is not guaranteed. [L0247, 2021] **
- Monthly spend cap: a Shopping campaign's daily budget caps monthly spend at the daily budget multiplied by the average number of days in a month. On individual days the campaign may spend less than the daily budget or up to twice as much. [L0742, 2021-22] **

#### Stopping

- Stop scaling when ROAS drops below 10× or diminishing returns appear. Pivot to other traffic sources instead of continuing to increase spend. [L0193, undated]

### Impression Share and Click Share

#### Metrics

- Search Impression Share (SIS) is the percentage of relevant searches where your ad appears. [L0299, 2020-26]
- Absolute impression share is checked separately to identify remaining opportunities. [L0274, 2023]
- Click share shows how often a visible ad gets the click. [L0274, 2023]
- Search lost impression share due to rank (around 30% in the example) signals whether to raise bids to capture those impressions or lower bids to improve click-through rate and ROAS. [L0745, 2020-26]
- Search lost rank is read per product in the product view of Google Ads. [L0360, 2024] *(2024)*

#### Reading the Signals

| Observation | Interpretation | Action | Source |
|---|---|---|---|
| High ROAS, low impression share | Profitable traffic is missed | Increase CPC | [L0193, undated] |
| High spend, no conversions | Budget is being wasted | Lower CPC | [L0193, undated] |
| No clicks, low impression share | Demand is unknown | Raise CPC slightly to test demand | [L0193, undated] |
| Impression share 97%, click share 65% | Visible but lower-ranked | Increase CPC cautiously | [L0274, 2023] |
| Impression share 85% to 97%, click share under 65% | Visible but ranked lower than competitors | Check absolute impression share, then raise CPC by 10 cents to reach higher positions | [L0274, 2023] |
| Impression share 85% to 97% with gaps | Remaining inventory not captured | Check absolute impression share; if campaign is profitable, raise CPC by 10 cents | [L0274, 2023] |
| Search impression share under 10%, high click count | Keywords too broad or bids too low | Review search term report, add irrelevant broad terms as negatives, then raise CPC on targeted keywords | [L0274, 2023] |
| High search lost rank for a product | Product ranks too low | Raise CPC (fast); product page SEO helps but acts more slowly | [L0360, 2024] |
| 230 products, 50 with impressions, 7 with clicks | Low-impression products likely need higher bids | Test higher CPC on top 20% of valuable products first | [L0274, 2023] |
| Sales below target cost per sale | Bids may need raising | Raise bids only for those products. Low impression share alone is not a reason | [L0744, 2021-22] |

- A bid increase only stays profitable if conversion rate rises by the same factor. Otherwise cost per sale rises, and when more traffic comes in, conversion rate often falls for a while. [L0744, 2021-22] **
- Judge bid competitiveness by search impression share, not by benchmark max CPC. [L0744, 2021-22] **

### Benchmarks and Competitor Signals

- Google's suggested CPC benchmarks are typically higher than actual market rates. Do not use them as targets. Adjust bids dynamically based on your own impression and conversion data. [L0251, 2023] *(2023)*
- Benchmark max CPC is a column in the Product groups view, not in the Ad groups view. It does not appear when an ad group has too few impressions or too few competing bids on similar products. It is estimated from similar auctions and products that may include brands the store does not sell. [L0744, 2021-22] **
- If no paid ads show above the gray line in Google Shopping for a keyword, cheap clicks may be available. First confirm it is not a glitch by checking whether ads appear for other, broader searches. [L0469, 2021] **
- Competitor check procedure **:
  1. Search for the products that get impressions, in an incognito Google window, as a customer would.
  2. Find what competitors show that you do not, such as free shipping.
  3. Model those differences on your store.
  4. Only if your listing already matches, adjust the bids: raise the maximum bid by about 10% and wait a few days before changing it again.

  [L0663, 2019]

### Mistakes to Avoid

- Raising budgets and bids right after launch, before products are approved. [L0247, 2021]
- Bidding the same amount on products with very different conversion rates and ROAS. [L0299, 2020-26; L0503, 2020-26]
- Doubling all bids at once. Raise in measured steps. [L0466, 2018]
- Making major bid or pausing decisions on fewer than 100 clicks. [L0299, 2020-26]
- Raising bids on the assumption that extra traffic will convert better. Check profitability at the actual conversion rate first. [L0686, 2021-22] **
- Raising bids without checking profitability. Stores that struggle with profit usually pay too much per click, and the fix is to reduce bids. [L0744, 2021-22] **
- Pausing a weak keyword before adjusting its bid. [L0454, 2019]
- Letting the shared budget run out daily. [L0744, 2021-22] **
- Raising the budget only because the status shows "Limited by budget." [L0429, 2022] **
- Using Maximize Clicks for profit-focused campaigns. [L0225, 2015+]
- Using accelerated delivery, which may exhaust the budget before the day ends. [L0225, 2015+]
- Setting the CPC limit too low at launch. [L0551, 2020] **
- Using benchmark max CPC as a target. [L0251, 2023; L0744, 2021-22]
- Turning on automated bidding before the conversion threshold is met. [L0245, 2020; L0225, 2015+; L0454, 2019]


Part 29 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/28-bidding-budgets-and-bid-optimization.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/30-campaign-structure-and-bid-levels.md
