<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 28 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/27-hypothesis-testing.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/29-cbo-scaling-structures.md

## Scaling Winning Ad Sets and Campaigns

### Readiness Check and Scaling Triggers

- Know the break-even ROAS before scaling. Break-evens in the lessons range from 1.1 to 1.5 ROAS, and a 3 ROAS at small spend does not by itself make an ad ready to scale. [L0999, 2023]
- Confirm the campaign setup is correct first. A wrong campaign structure is a reason to stop the ads, correct the structure, and restart. [L1161, 2024+]
- Scale only an ad set that has cleared Rule 4: it spent double the break-even amount and reached break-even ROAS or higher. Scale that exact audience-and-creative combination, because it shows product-market fit for that segment. [L0229, undated]
- Start scaling when ROAS reaches break-even + 1. Example: break-even 1.6 gives a scaling threshold of 2.6. [L0642, undated]
- Sales-count thresholds differ by source:
  - Scale an interest ad set after 6 to 7 sales while it stays profitable. The 6 to 7 figure applies to testing interests, not to scaling a campaign that already works. [L0693, 2024]
  - Wait until the ad set has more than six or seven sales. Scaling earlier builds budget on too little data. [L0774, 2023]
  - About six profitable sales show consistency. [L0646, 2023]
  - Seven profitable sales is the more reliable scaling trigger. Seven sales in one day is excellent, but seven spread over several days is the typical case. [L1107, 2023]
  - Five profitable sales is an earlier signal some advertisers use, but seven is more reliable. Sales must be profitable, not just numerous, so check profit per sale before increasing budget. [L1107, 2023]
  - Alternative rule: start scaling once an ad set has at least 6 to 7 purchases while staying above break-even ROAS, or once it has run for more than 4 days with a profitable ROAS over the last 4 days and at least 6 purchases in that window. [L1335, 2023+]
  - Lighter signal: CTR is good, there are about four to five sales in a few days, and ROAS is strong. [L0650, undated]
  - Stricter alternative: wait for five days in a row of consistently profitable sales. [L0693, 2024]
- Testing CBO entry: run a testing CBO when one asset reaches seven profitable sales at least 0.5 above break-even ROAS. [L0646, 2023]
- Audience-level gate: scale a winning audience only after at least six sales with ROAS at least 0.5 above break-even, and only once there are at least three winning audiences so the product does not depend on one audience. [L0646, 2023]

| ROAS signal | What it means | Source ids |
|---|---|---|
| Break-even + 0.5 | Reasonable point to start thinking about scaling | [L0646, 2023] |
| Break-even + 1 (break-even 1.6 → 2.6) | Start scaling | [L0642, undated] |
| Break-even + 1.5 | Advisable margin for aggressive scaling, where ROAS is expected to be cut in half after doubling | [L0646, 2023] |
| ROAS 2 to 2.5 | Scale slowly, for example doubling 10 → 20 or 30 per day | [L0646, 2023] |
| ROAS about 3 | Raise slowly, about $20 per step | [L0999, 2023; L1335, 2023+] |
| Very strong ROAS | Scaling can be more aggressive | [L0646, 2023] |
| ROAS double break-even | Scale horizontally and check after four days | [L0646, 2023] |
| ROAS far above break-even (1.5 break-even, 3.5 actual), results clearly strong | Duplicate at the same budget or a bigger one such as 50 or 100 | [L0693, 2024] |
| ROAS 1.4 with break-even 1.5, one ad at ROAS 0.5 taking spend | Keep the ad set, switch off the inefficient ad | [L0646, 2023] |

- Keep scaling tied to performance, not a calendar: double the budget as long as ROAS holds. [L0646, 2023]
- Test the ad level before you judge the ad set. A winning ad set can contain a losing ad that absorbs spend. [L0646, 2023]

### Frequency and Fatigue Signals

- Sources give different frequency thresholds. Use each for its stated purpose:
  - 7-day frequency of 2 or 3: increase budget so people see the ads closer to once a day. Above 5: no budget increase is needed. At 7 or higher: do not increase spend. [L0360, 2024]
  - Scaling ad frequency: keep it under 2. At 2 or more, people have seen the ad at least twice and creative fatigue begins, so new creatives go into the same ad set. [L1177, 2023]
  - Fatigue filter: frequency above 1.5 indicates high audience fatigue. Filter creatives in the Fatigued Ads report in Insights and pause them before ROAS drops. [L0207, 2025-26]
- Check frequency after three or four days of a scaling campaign, because frequency rises as the audience sees the same ad again. [L1177, 2023]
- Facebook now provides fatigue scores for ads in the Ad Manage.ai reporting dashboard. Monitor fatigued ads (declining performance from audience oversaturation) and pause them before ROAS drops significantly. [L0207, 2025-26]
- Stop raising the budget when frequency rises or ROAS starts to break. [L0941, 2022]
- Winning audiences rarely die on their own. A drop usually comes from ad fatigue, rising CPM and falling numbers. Adding new creatives to the same winning audience can revive it. [L0646, 2023]

### Vertical and Horizontal Scaling

| Method | Definition | Ids |
|---|---|---|
| Vertical | Raise the budget of an existing winning ad set or campaign | [L0646, 2023; L1021, 2026] |
| Horizontal | Test more audiences, or split spend across several ad sets or campaigns | [L0376, undated; L1426, undated] |

- Horizontal scaling means testing more audiences. While the product stays profitable, launch 2 to 3 new interests per day in the early phase and turn off underperforming ad sets. [L0376, undated]
- Horizontal scaling also means splitting spend across several ad sets with different interests and different daily budgets, rather than raising one ad set sharply. Pick distinct interests, because overlapping ones make ad sets compete for the same users. [L1426, undated]
- Example: daily budgets of 10, 20 and 25 per ad set for different interests. This worked for a store whose products sold best in peak season, while demand was lower outside it. [L1426, undated]
- Scale by adding interest-based ad sets at lower budgets instead of raising a single ad set. [L0644, undated]
- Meta's delivery does not spread budget evenly while a campaign is learning. Large budget jumps make the algorithm search harder and can trigger learning-limited status. Scaling in steps keeps delivery more stable. [L1426, undated; L0644, undated]
- Scaling too fast can get the account capped, or the budget reduced again within a day. One speaker saw this after several raises within 10 days. Raise budgets gradually and monitor delivery after each change. [L1426, undated]
- Expect inconsistency when scaling. Find the maximum budget a product can handle before running it steadily. Test both vertical and horizontal scaling, since either can win depending on the week. [L0690, 2022+]
- Winners take off for hard-to-predict reasons, such as hitting a different audience pocket or strong engagement. Test both CBO and ABO and follow whichever produces the money. [L0646, 2023]
- Allocate about 20 to 30 percent of budget to finding new audiences, so new winners keep appearing. Relying on one audience is risky. [L0646, 2023]
- Sequence: scale vertically first, then horizontally. Add new ad sets only once the existing campaign budget is stable. [L1021, 2026]
- Changing scaling campaigns too often stops Meta from collecting enough data. Make changes deliberately and let the campaign stabilise between adjustments. [L1021, 2026]
- A stalled example: a seller duplicated an ad set horizontally and then vertically, and sales stalled at about $4.5K to $5K per day. The seller suspected the algorithm became confused. [L1127, 2024]
- Scaling method and horizontal/vertical choice:
  - After five days of a profitable CBO, scale horizontally by duplicating the campaign at 50, 100 or higher, or vertically by raising the budget 20 to 30 percent. [L0646, 2023]
  - If ROAS is double break-even, scale horizontally and check after four days. If still profitable, scale again. Vertical scaling should be cautious, with changes at four-day intervals relative to break-even. [L0646, 2023]
  - If a raise (e.g., 65 to 70 dollars) is unprofitable after four days, go back down. If the lower budget (50 per day) is still unprofitable after another four days, turn the campaign off. Test both methods, since the best one varies by account. [L0646, 2023]
  - Scaling a winning ad set has three possible routes, and the best one should be tested per account: (1) raise the ad set budget step by step, about every three days while profitable; (2) duplicate the winner as a CBO with a budget like $50, running three days; (3) duplicate the ad set several times inside the same campaign (for example four ad sets at $5 each) for horizontal scaling. [L0642, undated]
  - Scaling a winning ad set is also possible by raising its budget 20 to 25 percent, or doubling it to about 20 units. Duplicating the winner with a higher budget such as 20, 30 or 50 is the other route. The choice depends on available budget and how aggressive the scaling should be. [L0646, 2023]
- Example of scale path: from 1k to 5k to 10k to 50k per day by increasing budget while the algorithm finds the right customers, with good creative systems and account structure. [L0296, 2021+]
- Simpler account structures work better in some cases: prospecting ad sets plus retargeting, scaled by budget. [L0650, undated]

### Budget Step Rules and Cadence

**Step ladders**

| Ladder | Condition | Ids |
|---|---|---|
| $5 → $10 → $20 → $50 → $100 → $250 | Raise about every three days while profitable | [L0642, undated] |
| $5 → $10 → $20 → $50 → $100 → $200 → $500 | Standard winner ladder; if results drop, switch to 20% steps | [L0773, 2023; L0774, 2023] |
| $5 → $10 → $20 → $50, or 20% per step | Two ways to scale; test which fits the account | [L0209, 2023] |
| $10 → $20 → $50 | Ad set in ABO testing campaign | [L0693, 2024] |
| $10 → $20 → $50 → $100, or 20% per step | Winning ad set, when CTR, offer and store conversion are good | [L0650, undated] |
| $5 → $10 → $20 → $50 → $100 | Aggressive ABO scaling while profitable | [L1316, 2024+] |
| $20 → $50 → $100 → $200 | Aggressive pattern used by some advertisers; faster than 20%, riskier | [L0693, 2024] |
| $100 → $200 → $400 | Profitable ABO ad moved into a scaling campaign | [L0999, 2023] |
| $10 → $50 → $100 or $200, or 2x to 3x | Duplicating a winning ad set at a higher budget | [L1335, 2023+] |
| $20 step per increase | Ad with ROAS about 3 on small spend | [L0999, 2023] |

**Percentage rules**

- 15 to 20 percent steps are considered safe because they do not push the campaign out of learning or damage optimisation. [L1016, 2026]
- 20 percent is the safe step. Larger jumps can disrupt optimisation, so avoid sudden budget changes that reset learning. [L0693, 2024]
- The 20 percent rule exists to scale slowly. If scaling aggressively, use duplication or doubling, which avoids learning-phase resets. [L0298, 2023]
- 20 to 25 percent every 48 hours avoids resetting learning. Avoid sudden large increases, which cause fluctuation. [L1335, 2023+]
- 20 percent every 48 hours, only when the campaign stays consistently above break-even ROAS. [L1335, 2023+]
- Conservative ABO: raise the ad set budget 20 percent every second day instead of duplicating. The right method depends on the account. [L1316, 2024+]
- Scaling by 20 percent every one to two days, stopping when frequency rises or ROAS starts to break. [L0941, 2022]
- Winner in ABO audience testing: increase by about 20 percent every two to three days, or every three to four days. [L0398, 2023+]
- Vertical CBO step: 20 to 30 percent. [L0646, 2023]
- Vertical scaling in four-day intervals relative to break-even. [L0646, 2023]
- Budget formula: starting budget × 1.2 for each increase. From 100, two increases give 144 (100 × 1.2 × 1.2). [L1161, 2024+]
- Check the arithmetic before planning steps. A daily budget step from 5 to 7 is a 40 percent increase, not 20 percent. [L1017, undated]
- Doubling: if ROAS is around 2 to 2.5, scale slowly, for example from 10 to 20 or 30 per day. [L0646, 2023]
- Doubling as long as ROAS holds, so the step follows performance rather than a fixed calendar. [L0646, 2023]

**Cadence: the sources disagree**

| Cadence | When it applies | Ids |
|---|---|---|
| Every 24 hours | Not recommended; the 48-hour rule replaces it for learning reasons | [L0298, 2023] |
| Every 48 hours | Default safe interval for profitable CBO and learning protection | [L0298, 2023; L1335, 2023+] |
| Every second day | Conservative ABO | [L1316, 2024+] |
| Every 1 to 2 days | Slow scaling with stop rules (frequency or ROAS) | [L0941, 2022] |
| Every 2 to 3 days, or 3 to 4 days | ABO audience winner | [L0398, 2023+] |
| About every 3 days | Step ladder while profitable; ad-level ramp | [L0642, undated; L0999, 2023] |
| After every fourth day | ABO performing ad sets; reduce if results slow | [L0646, 2023] |
| Four-day checks | Vertical and horizontal changes relative to break-even | [L0646, 2023] |
| Day five, then every four days | CBO start | [L0693, 2024] |

- Same-day increase, older guidance versus recent experience:
  - Older guidance held that raising a winning ad set's budget by more than 25 percent every two to three days resets the learning phase. [L0646, 2023]
  - Recent experience: a same-day increase during strong momentum (for example 4 to 5 ROAS with more than 3 sales) boosted performance without resetting the algorithm. [L0646, 2023]
  - Same-day doubling during strong momentum tends to boost performance, but a raise of 25 percent or more could in the past reset the algorithm. [L0646, 2023]
  - Test the current behaviour in each account before relying on either rule. [L0646, 2023]
- Any change to an ad set resets the learning phase. The reset is acceptable during events but should be avoided on normal days. [L0298, 2023]
- Waiting 48 hours between 20 percent adjustments (not 24) prevents resetting learning. [L0298, 2023]
- Large jumps reset learning: the budget can be reset by Facebook so spend falls back the next day. Scale in smaller steps and check the budget after each change. [L0644, undated]
- Going down: if an increase is unprofitable after four days, return to the previous budget. [L0646, 2023]
- Changes that remove the budget entirely cause instability. Budgets cut from about $1,000 per day to zero and restarted at $100 to $200 gave unstable results. Change budgets gradually. [L1127, 2024]
- Raising the budget of a proven ad set reaches more people within the same audience, which brings more quality traffic and sales. Raise only when CTR, the offer and store conversion rate are already good. [L0650, undated]
- Budget ladder for a newly profitable product: start a CBO at 50 USD per day if ROAS is acceptable; consider 100 USD only if ROAS for that interest is very high. [L0693, 2024]
- Scaling a profitable ad on ABO with a small budget: start at $20 per day, run a few days, and add another $20 if it stays profitable. Repeat about every three days. [L0999, 2023]
- Duplicating a winning ad set at a higher budget (for example $10 to $50 to $100 or $200, or 2x to 3x) is covered in the duplication section. [L1335, 2023+]

### Duplication Methods

- Older guidance: duplicating ad sets was effective two years ago but no longer works well, so treat it as a deprecated scaling method. [L0209, 2023]
- Conflicting guidance: duplicating winning ad sets is still used in several structures below. Duplicates compete with each other in the same auction, but a copy can reach a different group or gain engagement. [L0646, 2023]
- Duplication with CBO delivers more consistent scaling than budget increases alone. Duplicate from 200 to 500 dollars of budget for campaigns with 4+ ROAS. [L0298, 2023]
- Duplicating a winning ad set into a CBO and running it three days is one route. [L0642, undated]
- Duplicating a winning ad set four times inside the same campaign (for example four ad sets at $5) is the horizontal route. [L0642, undated]
- Duplicating an ad set to a higher budget keeps the same audience and creatives, so the winning combination stays intact. [L1335, 2023+]
- Duplicate a winning ad set into a new campaign with the budget type set to Advantage campaign budget (formerly CBO), a minimum daily budget of $50, and four ad sets with the same audience and creatives so the algorithm can find different audience pockets. Leave ad-set budgets empty. [L1335, 2023+]
- Duplicating an ad set on a higher budget and a fresh set of creatives: create a new ad set with a fresh batch of creatives rather than adding to a working ad set. [L1225, 2025]
- Ways to use duplicates:
  - Duplicate the winning ad set as a CBO with a daily budget of 20, then duplicate that CBO three times for a total of 60 dollars per day. Kill weaker CBOs once they have spent about 50 dollars, and keep raising the winner from 20 to 50, 100, 200 and so on. [L0646, 2023]
  - Once an audience is a winner, create a CBO for that audience with four ads using the same audience and creative, starting at 100. [L0646, 2023]
  - Duplicate the winning asset four times into a new CBO. [L0646, 2023]
  - Duplicate a winning ad set into a CBO with 20 budget, after building the ad set to 5 sales and then 10 budget. [L0646, 2023]
- Triple duplication case: three CBO triple-duplication campaigns, each with the same ad set at $100 ($300 total), were stopped after about $50 to $70 each with zero sales, leaving about $200 spent. Earlier, a single interest in a testing campaign had about 20 sales and very high ROAS, but in a CBO scaling campaign it returned under 1 ROAS. The response was to check the setup, verify results with UTMs, and retest after a couple of weeks at a different budget such as $200 or $50. [L0349, 2024]
- Other ad sets targeting the same interest usually lose delivery and results when one ad set is scaled. Keep testing ad sets separate from scaling ones. [L0524, 2023]
- Never turn off a winning interest that runs in ABO just because you launch a CBO with it. Both can run side by side, and audiences of 30 million or more rarely overlap enough to matter. [L0645, 2023]

**Procedures**

Procedure: Scale a winning audience by duplicating (ABO audience-testing campaign)

1. Increase the budget by about 20% every two to three days, or every three to four days. [L0398, 2023+]
2. When the performance drops, do not edit the ad set; duplicate the same audience. [L0398, 2023+]
3. Replace the creative in the duplicate, or paste in the new winning creative. [L0398, 2023+]
4. If the duplicate also fails, turn it off. [L0398, 2023+]

Procedure: Scale a winning interest in ABO testing (horizontal copy)

1. Keep the winning interest ad set in the ABO testing campaign. [L0693, 2024]
2. Raise its budget step by step, for example from 10 to 20 and then to 50. [L0693, 2024]
3. Alternatively, duplicate the ad set inside the same testing campaign with a higher budget, such as 50. [L0693, 2024]

Procedure: Duplicating a winning ad set at a higher budget

1. Duplicate the ad set. [L1335, 2023+]
2. Set a higher budget, for example from $10 to $50 to $100 or $200, or 2x to 3x. [L1335, 2023+]
3. Change only the budget and start time. [L1335, 2023+]
4. Keep the audience, creatives and all other settings identical, since the winning combination must stay intact. [L1335, 2023+]

Procedure: Horizontal scaling of a winning ad

1. Take the winning ad set and place it in a separate scaling campaign by itself. [L0999, 2023]
2. Duplicate it, for example 10 times as ABO ad sets with $20 each. [L0999, 2023]
3. Turn off the ad sets with no sales after the test period, usually about one day with no sales. [L0999, 2023]
4. Keep the ad sets that perform well and let them scale. [L0999, 2023]

Procedure: Testing and scaling a new interest with a small budget

1. Start a new audience at 5 units of budget in a single-interest ad set. [L0646, 2023]
2. Once the ad set reaches 5 sales, raise its budget to 10. [L0646, 2023]
3. Leave the ad set running for two to three days at least. [L0646, 2023]
4. If orders stay consistent with good ROAS, start scaling by duplicating the ad set four times into a CBO with a 20 budget. [L0646, 2023]

Procedure: Second testing method (ABO)

1. Start with multiple similar interests in one ad set at 5 dollars. [L0646, 2023]
2. Duplicate that ad set a few times within the same testing campaign to increase spend. [L0646, 2023]
3. Compare results. [L0646, 2023]
4. Increase the budget of performing ad sets by 20 percent after every fourth day, and reduce it if results slow. [L0646, 2023]

Procedure: Duplicate a winning asset into a CBO

1. Create a CBO campaign for the audience with four ads using the same audience and creative. [L0646, 2023]
2. Launch it at 100 as a start budget. [L0646, 2023]

Procedure: Testing and scaling procedure for CBO

1. Run a testing CBO when one asset reaches seven profitable sales and at least 0.5 above break-even ROAS. [L0646, 2023]
2. Duplicate that asset four times into a new CBO. [L0646, 2023]
3. Keep the campaign with the most sales and kill the rest. [L0646, 2023]
4. Start each at 50 or 100 dollars depending on how high ROAS is. [L0646, 2023]
5. After five days of a profitable CBO, scale horizontally by duplicating the campaign at 50 or 100 or higher, or vertically by raising the budget 20 to 30 percent. [L0646, 2023]

Procedure: Testing and scaling procedure for CBO (three-CBO close-out)

1. Duplicate the ad set into a CBO campaign. [L0774, 2023]
2. Run three CBOs. [L0774, 2023]
3. Close the two weakest and scale the budget of the winning CBO. [L0774, 2023]


Part 28 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/27-hypothesis-testing.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/29-cbo-scaling-structures.md
