<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 29 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/28-scaling-winning-ad-sets-and-campaigns.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/30-retargeting-custom-audiences-and-lookalikes.md

### CBO Scaling Structures

- Use a CBO with exactly five ad sets inside as a secondary scaling method when other approaches fail. [L0209, 2023]
- Scaling failures are caused by the scaling method used, not the business manager or ad account. Switch scaling approaches rather than replacing accounts. [L0209, 2023]
- Scale with CBO only when both the audience and the creative are proven. CBO removes ad set and creative variables and gives Facebook control over where to spend. [L1177, 2023]
- Scaling setup: a CBO with a daily budget of about 100 dollars, one ad set with the same winning interest, and one winning image creative. 80 dollars is acceptable as a lower start. [L1177, 2023]
- Austrian/Australian case: when scaling a winning product in Australia, a CBO tested one narrow audience: women 45 and older with an interest in astrology, in Sydney and Melbourne. These were the best-performing locations, so the budget was concentrated there. [L0388, 2024+]
- Stacked interests in one CBO work only when each winning interest gives consistent strong results. With only a few sales, stacking all interests together may not work. [L0646, 2023]
- CBO results can be inconsistent across days. An account may perform well for a while and then drop. Check results over several days before deciding a structure works. [L0650, undated]
- CBO did not work well for one speaker's accounts. He scaled by increasing ad set budgets under ABO or by placing the winner into an ABO scaling campaign. Test both formats, since account response varies. [L0646, 2023]
- If CBOs do not work for scaling horizontally or vertically, try ABO, which can work better. Keep testing new interests and new creatives, because winning interests eventually die out. [L0646, 2023]
- Scaling analysis is done at ad-set level. Within a CBO, do not switch off or edit individual ads too early. If one ad takes most of the spend while performing poorly, switch that ad off so the others get budget, but only after it has spent around the cost per acquisition. [L0646, 2023]
- Facebook may allocate budget to an ad because of early engagement even when it is not profitable. Watch ad-level spend and results, not early engagement alone. [L0646, 2023]
- An ad set can be kept even if it is not fully above break-even, for example at ROAS 1.4 when break-even is 1.5, if one of its ads takes spend with very poor results (such as ROAS 0.5). Switch off that inefficient ad and let the rest spend. [L0646, 2023]
- A CBO that has stopped being profitable can be refreshed (see the refresh section). [L0398, 2023+]
- CPA usually rises as you scale, because Facebook must find buyers in a smaller pool as spend grows. No fixed threshold applies, so monitor CPA against your break-even figure at each budget level. [L0692, 2023]
- Scale on the performance of the CBO, not the calendar, and expect the CBO to behave differently by day. [L0650, undated]

**Procedures**

Procedure: Running a profitable CBO

1. Wait four to five days after launching a CBO so the campaign can optimise. [L0693, 2024]
2. If it is profitable on day five, increase the budget by 20 percent. [L0693, 2024]
3. Check again every four days and raise the budget by 20 percent again while it stays profitable. [L0693, 2024]

Procedure: Refresh a running CBO

1. After the initial five profitable days, leave it running for four more days. [L0646, 2023]
2. Each day, review the previous four days. [L0646, 2023]
3. Replace unprofitable ad sets with new ad sets created by duplicating the winners. [L0646, 2023]

Procedure: Budget scaling in a Cost Cap CBO (scaling track, one source)

1. Use a CBO campaign with the bid strategy Cost Cap. [L1021, 2026]
2. Pull the winning Post IDs from the testing campaign. [L1021, 2026]
3. Give each winning Post ID its own ad set. [L1021, 2026]
4. Set the cost cap to the average cost per purchase from the testing campaign. [L1021, 2026]
5. If an ad set spends, keep it running; if it does not spend, raise the cost cap slowly. [L1021, 2026]
6. Add a minimum spend to new ad sets, because some winners are lower-funnel audiences that need consistent spend. [L1021, 2026]
7. Increase the CBO campaign budget once the campaign is stable. [L1021, 2026]
8. Let the campaign run to collect data. [L1021, 2026]
9. Scale vertically first by raising the budget, and horizontally afterwards by adding ad sets. [L1021, 2026]

- Scaling track structure: a CBO winner campaign with a bid cap and an inflated budget, one campaign per region (US, UK, CA, AU, NZ), and monthly winner ad sets divided by landing page. [L1019, 2026]
- After testing is finished, move the winning ad sets back into the main CBO. [L1019, 2026]
- A graveyard campaign collects ads that had good signals but could not scale, plus past winners that faded out. [L1019, 2026]
- Advantage+ campaigns can perform well early and then slowly become unprofitable. Plan to refresh or switch them off when results decline. [L1107, 2023]
- An Advantage+ campaign can produce several sales in the first days and then fade within about three to four days. If results drop, return to the previous budget. If still unprofitable after about a week, close it and scale a winning interest with CBO campaigns. [L1161, 2024+]
- Advantage+ example: a winning ad was scaled from about 5 to about 500 euros per day and stopped working after an audience-fatigue recommendation appeared. Duplicating the ad set made the first day good, but the next day sales dropped to zero. Budgets were doubled in ABO duplicates, and the next day brought zero sales again. The operator kept the ads to day three and closed them when there were still no sales. Advantage+ was then tested: the first week was profitable, the second week lost the profit. The lesson was that broad campaigns worked better than interest targeting, and that the scaling method, not only the ad, needs control. [L1316, 2024+]

### ABO Winners and Winning Audiences

- Scaling a profitable ad on ABO:

  1. Move the winning ad into a new scaling campaign and keep it as an ABO. [L0999, 2023]
  2. Test it against a higher budget, for example $100 per day. [L0999, 2023]
  3. If it holds, increase to $200, then $400, and so on. [L0999, 2023]
  4. For a ROAS around 3, raise the budget slowly, adding about $20 per step. [L0999, 2023]
  5. Run each increase for a few days. If the ad holds, add another $20 after about three days. [L0999, 2023]
  6. Repeat and keep raising the budget gradually while the ROAS holds. [L0999, 2023]

- An ad with a ROAS of about 3 on small spend: add about $20 to the existing ad set rather than starting new campaigns, because the ad already has engagement and Facebook has begun learning from it. [L0999, 2023]
- A profitable ad set at about 3 ROAS or higher can have its budget raised, doubled, or duplicated at a higher budget. The winning audience can be duplicated with a higher launch budget to keep scaling the same audience. [L1335, 2023+]
- Case: a brand running about $50 per day at ROAS 4 to 6 during testing saw ROAS fall to about 4 at $10 per day outside peak season, which was not enough to scale in its own campaign. Scaling was then done with the $20 step method and horizontal duplication. [L0999, 2023]
- Winning audiences need at least three winners before scaling, so the product does not rely on a single audience. [L0646, 2023]
- Lookalike audiences should be tested only after roughly 150 to 200 accumulated purchases. [L1335, 2023+]
- Test new interests and audiences to find new winning pockets (horizontal scaling). [L1335, 2023+]
- Interest-based ad sets: after a product sells, create several ad sets, each targeting a different interest. [L0644, undated]
- Give each interest ad set its own daily budget, for example £10, £20 or £25 per day. [L0644, undated]
- Avoid interests that are too similar, because ad sets with overlapping audiences compete for the same space. [L0644, undated]
- Facebook delivers cheap results well at small daily budgets. Larger budgets make the system work harder to find buyers, which can trigger learning-limited status. Scaling often needs more creative and audience options. [L0644, undated]
- Do not expect Facebook support to resolve budget cap problems. Plan scaling around the account limits you can see yourself. [L0644, undated]
- Raising a budget in large jumps can get reset by Facebook. Scale in smaller steps. [L0644, undated]
- Ad-level ABO spend example: a single ad can absorb spend without delivering results if Facebook allocates budget on early engagement. [L0646, 2023]
- Scale a winning audience only after it shows at least six sales with ROAS at least 0.5 above break-even. [L0646, 2023]

**Procedures**

Procedure: Scale a winning ad set (step-up from $20)

1. Start at $20 per day. [L0999, 2023]
2. Run it for a few days. [L0999, 2023]
3. If it stays profitable, add another $20. [L0999, 2023]
4. Repeat the step after about three days to raise the budget gradually. [L0999, 2023]

### Creative Testing Campaigns for Winning Audiences

- Test the new creative in a separate ad set with the same winning interest. Do not put it in the same ad set as a winning creative that already has significant engagement (for example 250 likes), because Facebook will spend the whole budget on the winner. [L0067, 2023]
- Creative testing campaign:

  1. Create an ABO campaign and name it creative testing ABO. [L0398, 2023+]
  2. Add one ad set per winning audience, for example one interest, one country or a lookalike such as a 1-3% lookalike built from people who watched 25% of a video. Keep the other settings the same across ad sets. [L0398, 2023+]
  3. In every ad set, add the hook variations of the same video, for example video one with hook one, video one with hook two and video one with hook three. [L0398, 2023+]
  4. Keep three to five creatives in each ad set so Meta can find the combination that works. [L0398, 2023+]
  5. Change only the creative variable between tests. [L0398, 2023+]
  6. Read the results with the winner rules before you change anything. [L0398, 2023+]

- Single-creative ad sets give control in testing, for example about $20 spent on one creative to see how it performs. For scaling in CBO or cost-cap campaigns, use at least two to three creatives per ad set, preferably three to five, so delivery does not concentrate on one creative. [L0398, 2023+]
- Creative testing: use winning ad sets to build a new testing campaign with a winning audience and interest. Start with 5 ad sets, 3 ads per ad set, and compare CTR to choose the best creative. New winning ads go into the running ad sets. [L0773, 2023]
- Creative test campaign: create one campaign on ABO so the budget sits at ad set level. Start with two to three ad sets, each targeting exactly one winning interest that already performed well, so no other targeting variable interferes. [L0902, undated]
- Each ad set in the creative test campaign targets only one winning interest. Do not add random new interests, because minimising variables isolates the concept and hook being tested. [L0902, undated]
- Publish each video as its own ad during testing to measure how well the creative resonates. Once you move to scaling, run existing posts as ads so their engagement carries over. [L1347, undated]
- Split test beside a working campaign: keep the working campaign as it is and run a new campaign structure as a split test next to it. Do this only once cash flow can absorb the extra spend. [L1225, 2025]
- When raising budget, create a new ad set with a fresh batch of creatives rather than adding to a working ad set. Adding creatives to a working ad set can reset its learning. [L1225, 2025]
- Creative testing before budget: a testing campaign at low budget isolates whether the creative works before any scaling. Ad sets that test different creatives on the same winning interest should not be mixed with ad sets that scale. [L0067, 2023; L0524, 2023]

### Refreshing Dying Campaigns and Ads

- Do not edit ad sets or campaigns that perform well. Adding creative or changing settings restarts the learning phase. Leave winning ABO and CBO setups alone. [L0398, 2023+]
- Swap creative inside a live ad set only if it is already dying, because swapping restarts the learning phase. Duplicating the ad set and launching with new creative is safer. [L0398, 2023+]
- Old creatives with lots of engagement but weak conversions still get budget from Meta. A refresh should launch with new creative only. Adding a few proven creatives is possible, but new creative drives the difference. [L0398, 2023+]
- Refresh a CBO that has stopped being profitable:

  1. Confirm that the campaign was profitable for days or weeks and has now declined. This points to creative fatigue rather than the audience. [L0398, 2023+]
  2. Duplicate the whole CBO with the same structure. [L0398, 2023+]
  3. In the duplicate, place only new creatives, using two or three new combinations. [L0398, 2023+]
  4. Turn off the old campaign once the duplicate runs. [L0398, 2023+]
  5. Compare the two campaigns side by side to see the difference. [L0398, 2023+]

- Switched-off ad sets can be turned back on after about two weeks, because they keep their data and can perform again. Before reactivating, check the last 30 days of data, because reporting is often delayed. [L0398, 2023+]
- Never turn off a campaign that performs well. A restarted campaign usually does not return to its previous performance. If you must stop spending, lower the daily budget to $1 instead of switching the campaign off. [L0643, 2015]
- Case: one account lowered its daily budget to $1 instead of switching off. It recorded 5 conversions for $1 on the day of the change. The campaign had been declining before the budget was reduced, so the result shows the value of keeping campaigns alive. [L0643, 2015]
- A previously working CBO with the same creatives may start working again, and adding new creatives to the same winning audience can revive it. [L0646, 2023]
- Keep testing new interests and new creatives, because winning interests eventually die out. [L0646, 2023]
- Winning ads take off for reasons that are hard to predict. Test both CBO and ABO and follow whichever produces the money. [L0646, 2023]
- Do not duplicate the same ad set too often in the same auction, because duplicates compete with each other. A duplicated winning ad can still work. [L0646, 2023]
- Pause fatigued ads before ROAS drops significantly. [L0207, 2025-26]

### Daily Budget, Learning Phase and Delivery Issues

**Learning phase**

- Any change to an ad set resets the learning phase. This is acceptable during events but should be avoided on normal days. [L0298, 2023]
- Learning phase end: reported to finish after about 50 conversions per week. This figure was given from memory and should be checked in Meta's current documentation. [L0639, 2023]
- Learning Limited means the ad set has not reached about 50 conversions per week. Exiting that status needs roughly 50 sales per week from that one campaign, which requires a very large budget. [L0694, 2024]
- Learning Limited is a Meta recommendation, not a verdict on performance. Ad sets can stay in learning limited for months while consistently delivering profitable ROAS. Ignore the warning if the campaign performs well. [L0316, 2026; L0694, 2024]
- Learning Limited can appear as budgets grow, which is why scaling often needs more creative and audience options. [L0644, undated]
- Fragmentation: when Meta reports ad sets competing against each other, do not simply add budget to each ad set. [L1017, undated]

**Procedure: Fragmentation warning**

1. Combine the competing ad sets into one ad set. [L1017, undated]
2. Increase the budget of the combined ad set and allow about three to four days before judging the result. [L1017, undated]
3. Judge the campaign on CTR, add-to-cart and checkout rates, not sales alone. [L1017, undated]

- Adding budget to separate ad sets after a fragmentation warning did not restore results. [L1017, undated]
- Changing scaling campaigns too often prevents Meta from collecting enough data. Make changes deliberately and let the campaign stabilise between adjustments. [L1021, 2026]

**Daily budget thresholds**

- Around $50 per day collects enough data but cannot sustain a stable scale. Consistency usually starts around $100 to $200 per day, so budget decisions should be tied to unit economics. [L1016, 2026]
- Scaling hit a barrier above about £50 daily spend per ad set, where delivery became less efficient and returns dropped. The owner explained that the algorithm must reach a wider pool of users as spend rises, and iOS tracking limits made that harder. Scaling past the barrier may require more ad sets or other channels rather than one ad set with a higher budget. [L1077, undated]
- At lower budgets, around $50 per day, results can swing strongly from day to day, for example a strong day followed by a very weak one. This variance is normal and should not be read as a single trend. [L0692, 2023]
- Results often dip after a scale step. When you scale, ROAS and CTR usually drop at first because the pixel reaches a larger audience and must learn who matches the product. If the audience fits, performance recovers after two to three days, though it can take up to two days. [L1316, 2024+; L0773, 2023]
- Do not judge a scaled campaign on its first day or two after a budget increase. The drop in ROAS and CTR is normal. Wait a few days before deciding whether the scaling worked. [L1316, 2024+]
- Scaling procedure, dip rule: if results drop after an increase, raise the budget by 20% instead and expect a dip for about two days while the pixel adjusts to the bigger audience. [L0773, 2023; L0774, 2023]
- Facebook scaling in smaller steps keeps delivery more stable than doubling spend at once. [L1426, undated]
- Scaling too fast can cap the account or reduce the budget again within a day. Raise budgets gradually and monitor delivery after each change. [L1426, undated]
- Scaling by raising the budget of the same ad set worked better in one case than CBO campaigns, which were inconsistent. Keep the account structure simple and test the approach that works best for each store. [L0650, undated]
- Test the scaling method on each account: one account can respond to 20 percent steps while another responds to doubling or to duplicates. [L0209, 2023; L0646, 2023]

**Procedure: Scaling a winning ad set (full sequence)**

1. Start each ad set with a budget of 5 USD per day. [L0774, 2023]
2. Increase the budget step by step: 5 to 10, 10 to 20, 20 to 50, 50 to 100, 100 to 200, 200 to 500 USD. [L0774, 2023]
3. If results drop after an increase, raise the budget by 20% instead and expect a dip for about two days while the pixel adjusts to the bigger audience. [L0774, 2023]
4. If that still does not work, duplicate the ad set into a CBO campaign, run three CBOs, close the two weakest and scale the budget of the winning CBO. [L0774, 2023]

**Procedure: Budget scaling for a winning ad set (ladder version)**

1. Start at 5 USD per ad set. [L0773, 2023]
2. Increase step by step: 5 → 10 → 20 → 50 → 100 → 200 → 500 USD. [L0773, 2023]
3. If results drop after a step, increase by 20% at a time, and expect a temporary performance drop for about two days because the pixel must adapt to a bigger audience. [L0773, 2023]

- Before scaling an ad set, wait until it has more than six or seven sales. [L0774, 2023]
- Budget decisions go with unit economics. A profitable CBO is judged by profit per sale, not sales count alone. [L1107, 2023]
- Advertisers reporting a budget decrease caused by Facebook's review: budgets reduced within a day after raises indicate delivery limits, so raise budgets gradually and monitor delivery after each change. [L1426, undated]
- CPA usually rises when you scale. Monitor CPA against break-even at each budget level. [L0692, 2023]
- Scaling expects some inconsistency. Find the maximum budget a product can handle before running it steadily. [L0690, 2022+]
- Scaling a campaign that already works uses the scaling-campaign rules, not the testing thresholds. Interests need 6 to 7 sales; the threshold applies to testing, not to scaling a campaign that already works. [L0693, 2024]

#### Further details

- Increasing the budget directly on the ad set itself is currently the most reliable Facebook scaling method. [L0209, 2023]


Part 29 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/28-scaling-winning-ad-sets-and-campaigns.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/30-retargeting-custom-audiences-and-lookalikes.md
