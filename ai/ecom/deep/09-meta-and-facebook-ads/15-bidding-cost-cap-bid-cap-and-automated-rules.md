<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 15 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/14-schedule-and-start-time.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/16-audience-strategy-interests-broad-targeting-countr.md

## Bidding: Cost Cap, Bid Cap and Automated Rules

### Manual and Automatic Bidding: The Options

#### Campaign Bid Strategies in Ads Manager

| Ads Manager name | Type | What it does | Typical use |
|---|---|---|---|
| Highest volume or value | Automatic, default | Meta gets the most results or purchase value for the budget | Standard setup, beginners |
| Cost per result goal (cost cap) | Manual | Aims for an average cost per result while maximizing volume | Control over cost per purchase |
| ROAS goal | Manual | Aims for a set return on ad spend (example: 2.5) while maximizing value | Control over return |
| Bid cap | Manual | Sets the highest bid Meta may pay in any auction | Hard maximum per result |

[L0977, undated]

- If the bid strategy is never changed, Meta uses Highest volume or value by default, which is the automatic strategy. All standard campaigns run this way unless the bid strategy is edited. [L0977, undated]
- A ROAS goal asks Meta to reach a set return on ad spend, for example 2.5, while maximizing the total value of results such as average order value. Unlike a cost cap, which sets a target cost per purchase, this option sets the target by return on spend. [L0977, undated]
- The Cost per result goal field only becomes editable when the campaign bid strategy is cost per result goal. With Highest volume it shows none and cannot be changed. [L0865, 2025-26]

### Automatic Bidding as the Default

- Automatic bidding typically outperforms bid capping. Lifetime budget is worth testing. Focus on making creative and copy very relevant to your audience, then let Facebook's algorithm find your audience. [L0067, 2023]
- For a product test, set the campaign bid strategy to highest volume when creating the CBO sales campaign. [L1193, 2026]
- Automatic bidding is still the recommended default, so manual bidding should be tested on your own account first. [L0977, undated]
- Beginners should start with automatic bidding because it usually performs well. [L0977, undated]

### When Manual Bidding Makes Sense

- Manual bidding is meant for advanced ad accounts that spend roughly $10,000 to $20,000 or more on a single account. Higher spend (up to about $100,000) gives Meta more purchase data. Below that level, use the scaling and testing approach with automatic bidding instead. [L0977, undated]
- Use manual bidding when you want control over the cost of each result, or when you need to spend a large amount in a short time, for example $10,000 in one day for an offer, with a stop-loss in place. [L0977, undated]
- Cost cap is the most successful manual setup. Bid cap and ROAS goal campaigns are built in almost the same way. [L0977, undated]
- The bid cap approach did not outperform automatic bidding in the lesson's experience. Cap the bid, raise it slowly until you find a sweet spot, but default to automatic bidding with relevant creative and copy and let Facebook find the audience. [L0640, 2023]

### Cost Cap and Bid Cap Explained

- A cost cap (Cost per result goal) targets an average cost per result, not a limit on each individual result. Example: with a $20 cost cap, some purchases may cost $22 and others $19 as long as the average stays near $20. [L0977, undated]
- A cost cap lets some purchases run above the target, for example $26 or $27, as long as the average is around the cap. [L0977, undated]
- A bid cap is a maximum bid per auction. With a $25 bid cap, Meta cannot pay more than $25 for any single purchase. Every result is held under that limit, which is stricter than a cost cap average. [L0977, undated]
- With a $25 bid cap, all purchases should land under $25. [L0977, undated]
- Do not assume a cost cap guarantees that every purchase costs less than the cap, because Meta only aims for the average. If you need a hard per-purchase maximum, use a bid cap instead. [L0977, undated]
- The same method used for cost cap (test a set of caps, apply automated rules, narrow the sweet spot) works for bid cap, with the same campaign structure. [L0977, undated]
- The max CPC from the calculator applies to any cost-per-click campaign, on Google or Facebook. Use the same break-even and target values for both. [L0686, 2021-22]

### Setting the Baseline Cost per Purchase

Determine the baseline cost per purchase before building a cost cap campaign:

1. Open a campaign or ad set that is profitable and has spent more than $1,000.
2. Read its cost per purchase (cost per conversion) in Ads Manager.
3. Round it to a working number, for example $50.79 becomes $51. This is the ideal cost per purchase.
4. Optionally use the account-wide average cost per purchase if the whole account is profitable.
5. Set this value as the first cost cap to test, then test a lower value (for example $49) to look for a better sweet spot.

[L0977, undated]

- Example: a campaign with about $45,000 in spend and profitable ROAS showed a cost per purchase of $50.79. It was rounded to $51 as the reference cost cap. The next test was a lower cap of $49 to check whether Meta still delivers profitable results. [L0977, undated]
- The cost cap should always be set below the break-even cost per purchase. A cap above break-even makes the campaign unprofitable even with many sales. Example: a $70 cap when break-even is $60 gives an average purchase cost of $70. [L0977, undated]

### Building the Cost Cap Test Campaign

Build the cost cap test campaign in Ads Manager:

1. Click Create and select the Sales objective (buying type as usual).
2. Turn on Advantage campaign budget.
3. In Campaign bid strategy, click Edit and select Cost per result goal.
4. Set a high campaign budget, starting at $1,000 to $2,000.
5. Go to the ad set level and scroll down to the Cost per result goal field, then enter the first cost cap, 51.
6. Select the times (ad scheduling) if needed.
7. In targeting, create one ad set with a broad audience and duplicate it to create one ad set with a stacked winning interest audience. Keep countries, age and other settings the same.
8. Duplicate each of these two ad sets four more times and change the cost cap for each pair: 51, 49, 47, 45, 43. Each cost cap value is used by one broad and one stacked interest ad set.
9. Result: one high-budget CBO campaign with 10 ad sets.
10. Add the automated rules described below to all 10 ad sets.

[L0977, undated]

- The structure is one CBO campaign with 10 ad sets. Each cost cap value (51, 49, 47, 45, 43) is shared by two ad sets, one broad and one stacked winning interest. The cap is reduced by $2 for each step down. [L0977, undated]
- Use a higher campaign budget, starting at $1,000 to $2,000. A higher budget gets more auction priority and spends more. A very low budget such as $100 to $200 often does not spend at all, because the campaign loses auctions. [L0977, undated]
- Mapping conflict: this build puts the cost cap on a CBO campaign [L0977, undated]. one source 2026 maps the bid strategies the other way round: CBO goes with bid cap, and ABO goes with cost cap [L1019, 2026]. Use the CBO-cost-cap build above when following the one source test, and the one source mapping when your structure is ABO or you are testing bid cap on CBO. [L0977, undated; L1019, 2026]

### Automated Rules for Cost Cap Campaigns

#### Creating the Rules

Create the automated rules for the cost cap campaign:

1. Select all ad sets inside the cost cap campaign.
2. Click Rules, then Create a new rule, then Custom rule.
3. Enter the rule name (Safeguard rule, Hard stop, Trim the fat or Revival).
4. Enter the conditions and set the action to turn off the ad set (or turn it on for the revival rule), as described in the individual rules.
5. Set the time range to from today and continuously.
6. Save the rule and repeat for each of the four rules.

[L0977, undated]

#### Safeguard Rule

- Rule: turn off an ad set when spend is greater than 3x the cost per add to cart, add to cart (Meta pixel) is less than 1, and website purchase is less than 1. Example: with a $10 cost per add to cart, the threshold is $30. [L0977, undated]
- Purchase is added to the Safeguard rule because Meta sometimes fails to track add to cart while still tracking purchases. An ad set with zero add to carts but at least one purchase should not be turned off. [L0977, undated]
- Purpose: the rule targets ad sets that produce no add to carts at all, which signals a delivery or relevance problem rather than a sales problem. Because it checks early engagement, it can remove weak ad sets before they reach the larger spend thresholds of the later rules. [L0977, undated]

#### Hard Stop Rule

- Rule: turn off an ad set when spend is greater than 2x the cost per purchase and purchase (Meta pixel) is less than 1. Example: with a $25 cost per purchase, the threshold is $50. [L0977, undated]
- Base the cost per purchase used for the hard stop and trim the fat rules on the average cost per purchase of the last week, not on your best days. Use a profitable average as the normal cost per purchase. [L0977, undated]

#### Trim the Fat Rule

- Rule: turn off an ad set when spend is greater than 3x the cost per purchase, purchases are greater than 0, and website purchase ROAS is less than 2.0. Example: with a $25 cost per purchase, the spend threshold is $75. [L0977, undated]
- Purpose: an ad set can earn one or two early purchases, which keeps it out of the hard stop rule, and then keep spending at poor returns. Turning off ad sets that have spent about three times the cost per purchase with ROAS below 2.0 stops this drain before it uses up a large campaign budget. [L0977, undated]

#### Revival Rule

- Rule: turn an ad set back on when its ROAS is greater than 2.0 and its spend is greater than $10. This restores ad sets that were turned off earlier but later received purchases because Meta attributed them late, sometimes after half a day. [L0977, undated]

#### Conflicting Figures in the 1.5x Breakeven Rule

- Rule: set an automatic rule that turns off any CBO which spends 1.5 times the breakeven cost per purchase with zero sales. [L0693, 2024]
- Formula check: with a 60 USD breakeven, 1.5x gives 90 USD. The spoken example uses a 45 USD threshold, which does not match the formula. Verify the number before setting the rule. [L0693, 2024]

#### Spend Limits by Product Price

- An automated rule can turn off an ad set when it has spent $10 and its CTR is below 1.5%. [L0642, undated]
- For a higher ticket item, use a higher spend limit, for example $20 to $30, especially if CTR is above 1.5%. [L0642, undated]

#### Morning Ad Sets

- If a morning ad set is losing money and the losses do not recover by the end of the day, shut it down or cut its budget by half. [L1127, 2024]
- If the ad set usually recovers by evening and makes money, let it run. [L1127, 2024]

### Finding the Sweet Spot

1. Check which caps are profitable in the campaign. Example: 51, 49 and 47 are profitable, 45 and 43 are not. [L0977, undated]
2. Launch a new test campaign with caps only between the last profitable and first unprofitable value, for example 47, 46.5, 46 and 45.5. [L0977, undated]
3. Repeat the narrowing until a profitable range of 0.5 to $1 is found. [L0977, undated]
4. Use the lowest profitable cap in that range as the best cost cap for the account or product. [L0977, undated]

### Automated Rule Testing for Interest Audiences

1. Launch a batch of new interest audiences at once.
2. Let each audience run for two to three days.
3. An automated rule switches off any audience that does not meet the set criteria.
4. Keep running the audiences that meet the criteria.

[L0549, undated]

### Estimated Bid Ranges Before Launch

- Facebook shows an estimated bid range for an audience, with an average, a maximum and a minimum price per click. [L0643, 2015]
- In the example, the average was 50 cents, the maximum about 65 cents and the minimum about 20 cents. The range helps you choose a starting bid before you launch. [L0643, 2015]


Part 15 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/14-schedule-and-start-time.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/16-audience-strategy-interests-broad-targeting-countr.md
