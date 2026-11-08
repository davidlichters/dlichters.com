<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 30 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/29-segment-bids.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/31-decisions-on-products-without-sales.md

### Campaign structure and bid levels

- ** A Google Shopping campaign is layered as campaign, ad group, product group and individual product. Bids can be set at ad group, product group or individual product level, and a bid on a lower level overrides the ad group bid. Product group and individual product bids therefore always take priority over ad group bids. [L0747, 2021-22]
- ** The ideal setup is one bid per product, which requires every product to be identifiable inside the campaigns. Products differ in sale price and profit margin, so paying more per click for one product than another can be justified, and the structure must make that easy to do. [L0747, 2021-22]
- Within one product group, all products share the same bidding strategy, so automated bidding cannot be set differently inside a single group. If products need different bids, split them into separate product groups or ad groups. [L1033, 2019]
- Do not exclude product variants from Google Shopping by default. Adjust bids per product instead, unless the product is already proven not to convert. [L1094, 2023]
- Give a handful of products with the biggest opportunity a higher CPC, and keep products you want in free listings without funding ads at one cent. This focuses paid spend on the best products. [L0934, 2023]
- Set higher max CPC on a few high-potential products while the rest keep the default, so budget flows to the products most likely to sell. [L1112, 2021]
- To prioritise specific products, open the product group view, edit the CPC box for those product groups, and raise them. For example, raise the top three products from the 50 cent default to 75 cents. [L1279, 2021]
- ** Max CPC is a ceiling, not a fixed price. With a 1 dollar CPC and a 10 dollar daily budget you get at most about 10 clicks per day across all products, not 10 different products. Check the historical actual cost per click in Google Ads, because it differs per product. [L1112, 2021]
- Stopping a product: open the product groups (products are set as individual product groups), find the product and set its cost per click (CPC) to 0 cents. [L0854, 2022]
- As an alternative to excluding products in the feed, open the product groups of each Shopping campaign (for example alpha and beta), find all products under $200, and set their max CPC to $0 or $0.01. Clicks on them then cost almost nothing, so they do not consume the budget. [L0748, 2020-26]

### Shared budgets

1. Before building Google Shopping campaigns, go to Tools and Settings, then under Shared Library open Shared budgets. [L0749, 2021-22]
2. Click the blue circle with the plus sign to start a new one. [L0749, 2021-22]
3. In the New shared budget form, fill in Budget name (e.g. 'Google Shopping Shared Budget') and the average amount to spend each day in the amount field, then click SAVE. [L0749, 2021-22]
4. "Add to campaign(s)" is optional and can be left empty at creation. [L0749, 2021-22]

- A shared budget is one campaign budget that several campaigns can draw from at the same time, so each shared budget must be large enough to cover all campaigns linked to it. [L0749, 2021-22]
- The shared budget amount should reflect the total you are willing to spend per day across all your Google Shopping campaigns, since it covers them together. [L0749, 2021-22]
- ** Example: a starting value of $50 per day, saved as 'Google Shopping Shared Budget'. The new budget appears in the shared budget list, with the confirmation "Your shared budget was created". [L0749, 2021-22]
- Tools and Settings > Shared Library is the hub for reusable account assets. Besides shared budgets it lists Audience manager, Bid strategies, Negative keyword lists, Location groups and Placement exclusion lists, so the same asset can be reused across campaigns. [L0749, 2021-22]
- The daily amount for a shared budget is an average, not a hard cap per day. Actual daily spend may vary, so some days spend more or less than the set figure, and the budget should be judged over a longer period. [L0749, 2021-22]
- Use a shared budget for alpha and beta campaigns so the budget is split evenly even when one supplier's products draw more traffic. This avoids creating new campaigns just to balance spend. [L0856, 2024]
- Do not balance traffic by adding multiple negative keywords one by one across campaigns. Use a shared budget so each campaign gets an even split. [L0856, 2024]
- Use one shared budget across the Alpha and Beta campaigns, for example $33 per day total. Do not split it evenly into $16.50 each, because Google then allocates spend to where results are best. [L1068, 2019]
- Combine the alpha and beta campaign budgets into one shared budget equal to their sum. For example, two campaigns at 10 USD per day each become one shared budget of 20 USD per day, linked to both campaigns. [L1090, 2021]
- When one alpha or beta campaign runs out of budget early in the day, its search terms move to the other campaign. A shared budget keeps both campaigns running until the same point of the day, which reduces this leakage. [L1090, 2021]
- If a campaign budget runs out every day, set a shared budget across alpha and beta so spend is not wasted on one campaign while the other is starved. [L0970, 2023]
- For a single alpha and beta pair, use one shared budget, because shared budgets let the campaigns use the full daily budget together. If each alpha/beta group has its own tier, give each group its own shared budget. [L1115, 2024]
- Giving one alpha and beta pair two separate budgets can cause one campaign to use the whole daily budget early in the day. The lower-priority campaign then stops showing ads for the rest of the day, so one shared budget is usually safer for one pair. [L1115, 2024]
- ** Shared budget in use: a campaign with a daily budget of 20 USD, getting no traffic, combined with a second campaign into one shared 40 USD budget. No new campaigns are needed, and the platform splits the spend. [L1281, 2022]

Fixing a campaign that gets no traffic when two campaigns share a budget:

1. Check whether one campaign spends its full daily budget while the other gets nothing. [L1281, 2022]
2. Set both campaigns to share a single budget, such as two $20 budgets becoming one shared $40 budget. [L1281, 2022]
3. No new campaigns are needed, and the platform splits the spend. [L1281, 2022]

When two campaigns, such as alpha and beta, each have a set daily budget but only part of it is spent:

1. Raise the cost per click on the campaign that is underspending. [L1092, 2022]
2. Consider a shared budget instead, for example combining two 20 USD daily budgets into a 40 USD shared budget, or two 10 USD budgets into a 20 USD shared budget. [L1092, 2022]

### Starting bids and the inch-up method

Starting bids and the first weeks:

1. Start with a bid of $0.20. [L1341, 2020-26]
2. Check the clicks the next day. [L1341, 2020-26]
3. If fewer than 100 clicks per week are on pace, raise the bid by $0.10. [L1341, 2020-26]
4. Check again whether the campaign is on pace for 100 clicks per week. [L1341, 2020-26]
5. If not, raise the bid a little further and check again. [L1341, 2020-26]
6. Repeat every week until the Shopping campaign gets about 100 clicks per week. [L1341, 2020-26]

At a 1% conversion rate, 100 clicks per week should bring about one conversion per week. Whether this is acceptable depends on the site's economics, which may work at 0.5% or fail at 2%. [L1341, 2020-26]

See also: the July 2019 coaching-call version of the inch-up method (student with under 300 impressions in two weeks at 10 cents: raise to 15 cents that evening, then 20 cents the next day, check daily until the sweet spot) is on page 28 under "Inch-Up Method, July 2019 Coaching Call": https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/28-bidding-budgets-and-bid-optimization.md [L0357, 2019]

Inch-up method for raising Shopping bids (about 20% per step):

1. Raise the CPC by about 20 percent (for example 10 cents to 12 cents, 25 cents to 30 cents). [L0856, 2024]
2. Let it run for a few days. [L0856, 2024]
3. If performance holds or improves, raise again by about 20 percent. [L0856, 2024]
4. If the same or fewer sales come in for more money, step back one increment and keep that bid. [L0856, 2024]
5. Do not double bids, because Google will spend the extra budget on whatever traffic exists and the bid will likely be overpaid. [L0856, 2024]

- The inch-up method raises bids and daily budgets gradually, not in large jumps like tripling. Keep increasing while you maintain a positive return on ad spend, until you reach your maximum spend per sale. [L1274, 2018]
- ** Do not double your bids or budget at once to spend more quickly. This skips finding the efficient level and can spend the whole budget with poor results. [L1109, 2018]
- Google Shopping CPC change: increase by about 20 percent, for example from 10 cents to 12 cents. [L0856, 2024]
- Sample: 50 cents raised by 20 percent becomes 60 cents, and it runs for a few days to check the effect. [L0856, 2024]
- Google Shopping campaign budgets and CPC bids should be changed by about 20 percent at a time. The goal is the highest spend that still reaches target ROAS, not the highest traffic. [L0856, 2024]
- Set bids by increasing them slowly until the sweet spot is found. Google's suggested bids often cause overpaying for traffic that can be bought for much less. [L0963, 2022]
- ** If an alpha campaign has a daily budget that is not fully spent, raise bids by about 20% step by step. If the budget is spent every day, raise the daily budget to collect more data and clicks. [L1274, 2018]
- ** If only about 10% of a daily budget is being spent, your bids are far too low. Raise bids more aggressively, for example to $0.75 and $0.50 in the call's example, and review after a few days. [L1274, 2018]
- ** If the budget goes unspent because products get few impressions, keep the daily budget unchanged and raise the cost-per-click bid gradually, about 10% per day. Keep watching return on ad spend while you do this. [L1002, 2019]
- ** When click-through rate is very low, keep raising bids in small steps, such as from 20 cents to 25 cents. Audit keywords every day and raise the budget only slightly, about 10%, while checking whether spend increases and better keywords appear. [L1002, 2019]
- ** To grow traffic on a working campaign, raise the cost-per-click bid in small steps, for example from $0.25 to $0.30 the next day, and measure how much more traffic results. Raise the daily budget only when the campaign keeps spending its full daily budget and the traffic quality is still good. [L1086, 2019]
- Raise the default cost per click in small steps when impressions stay low, for example from 40 to 45 cents. Wait a few days and check the results. If impressions remain low, move up again, for example to 50 cents. [L0803, 2022]
- ** To raise the default cost per click in a Google Shopping campaign that gets too few clicks: wait at least a few days after any change before judging the result. If clicks still lag, raise in small steps, such as from 35 cents to 45 cents. Wait 3 to 5 days after each step before raising again. [L0853, 2021]
- When a campaign gets very few clicks, raise the cost per click (CPC) by about 50 cents and let the change run for one week before judging the result. [L0836, 2024]
- Only raise a CPC when the campaign is not spending. Raise it slowly, for example from 50 cents to 65 cents, then 75 cents, and wait a few days between steps. [L0804, 2023]
- When a store gets very little spend but has few visitors, increasing the cost-per-click bid is the first step, so that more traffic arrives and data can build. [L0855, 2023]
- ** Increasing bids for products that get too few clicks: keep the daily budget unchanged, raise the max CPC for those products by a small step such as 5 cents (for example from 15 cents to 20 cents), wait about three days, and if impressions are still low, raise it again by a similar amount. [L0962, 2021]
- ** Do not double the CPC or raise it sharply because a platform support rep suggests it. If a product already gets clicks at a lower CPC, increase the bid only in small steps. [L0962, 2021]
- ** Google's estimated cost-per-click refers to search text ads and does not carry over to Shopping campaigns. Keep Shopping targeting to product names, brand names and SKU numbers, and never bid close to a high keyword estimate. [L1086, 2019]

### Bid formulas and CPA targets

Worked example for the generic term 'men's sunglasses' with a 0.5% conversion rate, a 200 USD cart value and 1,000 clicks: a 0.25 USD bid costs 250 USD and returns 1,000 USD (about 4x), while a 1.50 USD bid costs 1,500 USD for the same 1,000 USD and loses money. [L1328, 2015]

- Before setting bids you need a target cost per acquisition (CPA) for each product and its current CPA. CPA is the ad spend needed to produce one sale. The gap between current and target tells you how much to raise or lower the bid. [L1328, 2015]
- Setting bids once and never adjusting them wastes budget, because low-converting products keep drawing expensive clicks. Review bids against a target CPA using real data. [L1328, 2015]
- Bid modifier = (target CPA / current CPA) - 1. A negative result means a bid reduction of that percentage. Examples: current CPA 50 with target 25 gives -50%; current CPA 4 with target 2 gives -50%; current CPA 135 with target 50 gives about -63%. [L1328, 2015]
- Apply the modifier to the current max CPC: new max CPC = current max CPC x (1 + modifier). A modifier of -50% halves the bid and +50% raises it by half. Calculate the modifier first, then enter the resulting bid in the campaign. [L1328, 2015]
- Mobile and time-of-day bid adjustments use the same calculation: take the CPA for that segment (mobile, or a specific day), divide your target CPA by it and subtract one. The result is the bid modifier for that segment. [L1328, 2015]
- Limit any single bid change to about 50%, even if the calculation suggests more, such as a 101% increase. Make the rest of the change after more data has come in, so the decision rests on a statistically meaningful sample. [L1328, 2015]
- Keep the target CPA for every product in one spreadsheet in a fixed order, so the bid calculation runs consistently each time. Products with different margins will have different targets. [L1328, 2015]
- Daily budget for a target number of clicks equals the average CPC over about seven days multiplied by the target clicks. For example, an average CPC of $1.00 with a target of 100 clicks needs a daily budget of about $100. [L1114, 2023]

Optimise product bids in a spreadsheet:

1. In the Shopping campaign, open the product groups tab and click the download tab to export the data. [L1328, 2015]
2. Open the file in Excel or Google Sheets and check the columns campaign, ad group, product group, partition type, max CPC and cost per conversion. [L1328, 2015]
3. Add a column with your target CPA for each product. [L1328, 2015]
4. Enter the formula target CPA / current CPA - 1 in the first row, then drag it down to all products. [L1328, 2015]
5. Apply the resulting bid changes to the campaign. [L1328, 2015]

- AdWords Editor imports hundreds of bid changes at once, which is faster than editing products one by one in the interface. Use it after you have calculated the bid changes in the spreadsheet. [L1328, 2015]
- AdWords rules and scripts generally cannot be applied to product listing ad campaigns, although they work for text ads. For bulk changes to Shopping campaigns, the Optimizer tool or the spreadsheet method (free) were the options named. [L1328, 2015]

### Return and impression share thresholds

Metrics and rules for judging a product:

- The main decision metric for raising or lowering bids is return on ad spend (ROAS = conversion value divided by cost). Compare the ROAS of each product or keyword against the minimum ROAS the business needs, and use it rather than click counts. [L0856, 2024]
- Judge a Google Shopping product by ROAS, not by a fixed number of conversions. A ROAS above 10x marks a winner even with only one or two sales, so do not remove a product just because it has few conversions yet. [L0856, 2024]
- In Google Ads, bidding has the largest influence on ROAS, so optimisation effort should start there. [L1033, 2019]
- If a store gets good traffic and some conversions but ROAS is too low for profit, the cost per click is likely too high. Bid less and accept less traffic in exchange for profitable sales. Dropshipping margins need a much higher ROAS than many other e-commerce models. [L1456, 2021-22]
- Use campaign or ad group ROAS to decide bids: where ROAS beats target, raise bids to gain volume; where ROAS is far below target, cut weak spend or lower bids. In the example, an ad group at about 1.63 ROAS was the clear laggard against ad groups at about 4.15 and 6.2, and the threshold for lowering bids was a ROAS under 2.75. [L1236, 2015+]
- Use a high-ROAS keyword to raise its product's CPC:
  1. Open the keyword report in the campaign. [L0856, 2024]
  2. Add the columns cost, CPC and conversion value (revenue), and compute ROAS as conversion value divided by cost. [L0856, 2024]
  3. For keywords well above the minimum ROAS (for example 20x against a 10x target), increase the CPC of the matching product by about 20 percent (for example 50 cents to 60 cents). [L0856, 2024]
  4. Let it run a few days and check traffic and conversion rate. [L0856, 2024]
  5. Keep stepping up in small increments to find the sweet spot. [L0856, 2024]
- Search Impression Share procedure:
  1. In the Google Ads dashboard, add the column Search Impression Share. [L0836, 2024]
  2. Identify a profitable product with a ROAS around 15x that has low impression share (for example 30%). [L0836, 2024]
  3. Raise the CPC (for example from 1 USD to 1.25 USD), run it for one week, and check ROAS and impression share again. [L0836, 2024]
  4. Keep raising the CPC step by step while ROAS stays healthy. In the example, 1.50 USD gave about 70% impression share with ROAS of 13x, and 2 USD dropped ROAS to 8x. [L0836, 2024]
  5. Step back to the level that gives a healthy impression share and an acceptable ROAS. [L0836, 2024]
  6. Do not decide overnight. Collect a sufficient sample first, since high-ticket campaigns often get fewer than hundreds of clicks per day. [L0836, 2024]
- Search Impression Share target for Google Shopping is above 10%, provided ROAS stays positive. [L0836, 2024]
- Bidding test: raise the CPC from 1 USD to 1.50 USD, then to 2 USD if needed, and monitor ROAS after each change. [L0836, 2024]
- Impression share is the share of available impressions you capture. Check it in the campaign data before deciding that a product's visibility is limited. [L0962, 2021]
- ** Increase a product's bid when it has a strong return on ad spend but limited impression share because budget or bid position caps its visibility. [L0962, 2021]
- ** A product with very low impressions and clicks can be pushed with small bid increases, while a product with strong sales and ROAS can be scaled through higher bids. [L0962, 2021]
- Click-through rate on Google Shopping depends on the search and the position among the competing ads. Track cost per click and aim to be near the top of the results to get more clicks. [L0801, 2021]

The threshold table below lists every ROAS, impression-share and spend figure in this section. Where sources differ, each row states when it applies.

| Decision | Threshold | When it applies | IDs |
|---|---|---|---|
| Product is a winner | ROAS above 10x, even with 1-2 sales | one source's store, 10x target | [L0856, 2024] |
| Raise a product's CPC | ROAS above 10X and impression share below 70% | Re-check after about one week | [L0750, 2020-26] |
| Raise the daily budget | ROAS 10x or higher and budget maxed every day | Campaigns that are fully dialled in | [L0941, 2022] |
| Lower bids on an ad group | ROAS below 2.75 | Ad group well below target ROAS | [L1236, 2015+] |
| Impression share target | Above 10%, provided ROAS stays positive | Standing target for Shopping | [L0836, 2024] |
| Impression share example | About 70% at ROAS 13x (1.50 USD bid) | Example case, 2 USD dropped ROAS to 8x | [L0836, 2024] |
| Dropshipping ROAS | "Much higher" than other e-commerce models | Break-even depends on margin | [L1456, 2021-22] |

Note: the 10x figure is a benchmark from one store, while the dropshipping source says margins need a much higher ROAS. Use the minimum ROAS your own margins require (see [L0856, 2024]) rather than 10x.


Part 30 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/29-segment-bids.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/31-decisions-on-products-without-sales.md
