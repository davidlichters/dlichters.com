<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 31 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/30-campaign-structure-and-bid-levels.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/32-automated-and-enhanced-bidding.md

### Decisions on products without sales

- Products without sales yet can stay in the feed at a very low bid, for example one cent, until they reach about 100 unique clicks. Only remove products that you do not want to sell. [L0804, 2023]
- For products with zero conversions, first look at a longer date range, because some items sell only every few months. If they still have no sales, pause them or set a very low bid, such as 0.10 USD, and collect more data. [L1328, 2015]
- Lower CPC on products that have spent at least 50 without a conversion, even down to one cent, so the budget flows toward products that have already converted. [L0941, 2022]
- When a product has at least 100 clicks from Google Shopping and no sales, review its product page and the top two or three competitor results before reducing its cost per click or removing it. Cut waste by adding negative keywords. [L1113, 2022]
- A product that receives 200 unique clicks in Google Ads without conversions, even after a competitor comparison and page optimisation, should have its cost per click reduced to limit its spend. [L1092, 2022]
- Products that cost money but do not convert: lower the default CPC instead of removing them (example: 0.50 to 0.30). Test lower bids for a few days and see whether the product becomes profitable. [L0969, 2022]
- If a product gets many clicks and a high impression share but no conversions, first check the product page conversion elements in the store, then lower its max CPC so it does not take budget. [L0750, 2020-26]
- Lower the CPC on products that spend money but do not sell, and keep it higher on high-profit products or products that already convert. This directs more of the daily budget to the products that earn a return. [L1094, 2023]
- Lowering the bid on an unprofitable product does not stop its traffic entirely. It moves budget toward proven products and can make the remaining sales profitable. [L0970, 2023]
- ** Lowering Google Shopping bids without optimising the product catalog and negative keywords can lead to traffic that does not convert. Lower bids should go together with catalog and campaign optimisation. [L0960, 2019]
- A high cost per click is not automatically a problem, because some clicks may convert profitably. Analyse spend by keyword and product before cutting bids or budgets. [L1116, 2025]

### Low-visibility and zero-click products

- A product with fewer than 100 impressions after a few weeks in campaign should have its CPC raised to get Google to show it. Products with over 100 impressions are judged by click-through rate and conversions before changing bids. [L1094, 2023]
- Example: a store with 100 products where 40 get under 50 impressions after a month should increase CPC for those 40 products. The aim is to give them enough exposure to get data. [L1094, 2023]
- For products over 100 impressions, raise the bid when click-through rate and conversions are good, and lower the bid when clicks cost money without sales. Make the decision separately for alpha and beta campaigns. [L1094, 2023]
- Products with very low impressions can get more visibility by raising their target cost per click. [L1113, 2022]
- *Older (2018)?* Not used. [-]

Inching up bids for products with no impressions:

1. Do not raise all campaign bids at once. [L1114, 2023]
2. Open the product groups in the Alpha campaign and select only the products with no impressions. [L1114, 2023]
3. Raise each one from its current CPC by a small step, for example from $1.70 to $1.95 or $2.00. [L1114, 2023]
4. Let it run for one week. [L1114, 2023]
5. If impressions are still missing, raise it in small steps again. [L1114, 2023]

- Raising all bids from $1.70 to $3.00 at once can overspend on products that already convert and does not fix the real cause of missing impressions. Missing impressions can come from low search demand, weak relevance or too much competition, so check these first. [L1114, 2023]
- A Shopping product with a high bid spends at the level the traffic supports, so a high bid on a product with a lot of search demand will spend heavily. Bids should therefore be inched up rather than raised sharply. [L1114, 2023]
- ** Products with very low impressions and clicks can be pushed with small bid increases. [L0962, 2021]

Raising bids for products with no clicks:

1. Keep high-performing products (over 50 clicks, profitable) at current bids or raise them. [L0969, 2022]
2. Raise CPC on zero-click products in small steps (for example 0.50 to 0.60, then 0.65) and wait a few days each time. [L0969, 2022]
3. Do the same with products under 10 clicks, moving up more slowly (for example 0.55, then 0.60). [L0969, 2022]
4. Then decide budget changes based on results. [L0969, 2022]

- Raising the total daily budget on a campaign usually sends most of the extra money to products that already get clicks, so zero-click products stay at zero. To give them traffic, raise their cost per click in small steps and wait a few days after each step. Only then decide on budget changes. [L0969, 2022]

Pushing sales on products that get few clicks:

1. Keep the CPC on the top-clicking product at its current level, such as 50 cents. [L0941, 2022]
2. Raise the CPC on the other products, such as to 60 cents. [L0941, 2022]
3. Wait a few days and check the results. [L0941, 2022]
4. Keep raising CPC until those products start spending and the daily budget is used up. [L0941, 2022]
5. Only then increase the daily budget. [L0941, 2022]

- Raise a converting product's traffic: find the keyword and product behind the first sale in Google Ads, check whether impressions and clicks are low for it, and if so, raise the default cost per click for that product in Google Shopping, since it has already converted. [L0963, 2022]
- ** Keep the same one to two weekly sales while lowering spend. [L0804, 2023], see the cutting section below.

### Bid adjustments on converting products

- Bid adjustments tell Google to bid less for products that do not convert and more for products that earn the most. This concentrates the budget on items that make money. [L0750, 2020-26]
- Example: a product with a return on ad spend of 20 but a search impression share of 30% is profitable and under-shown. Raise its max CPC from $0.40 to $0.50, then check again one week later. [L0750, 2020-26]
- Adjust max CPC per product in Google Shopping:
  1. Go to Campaigns, open the alpha campaign, click Ad groups, and open the alpha ad group to see the product groups. [L0750, 2020-26]
  2. Product groups are subdivided per product. Each product starts with the same max CPC of $0.40. [L0750, 2020-26]
  3. Review each product's clicks, cost, conversion value, return on ad spend and search impression share, ideally every one to two weeks. [L0750, 2020-26]
  4. If the return is above 10X and the search impression share is below 70%, raise the max CPC for that product (for example from $0.40 to $0.50), then re-check after about one week. [L0750, 2020-26]
  5. Keep raising the max CPC in weekly steps while the return stays above 10X and the impression share stays below 70%, until the spend limit is reached or the return drops. [L0750, 2020-26]
  6. If a product gets many clicks and a high impression share but no conversions, first check the product page conversion elements in the store, then lower its max CPC so it does not take budget. [L0750, 2020-26]
  7. If a product has a low impression share (for example 20%) and no clicks, raise its max CPC to make it visible and test whether it sells. [L0750, 2020-26]
  8. Repeat the same steps in the beta ad group. [L0750, 2020-26]
- The Benchmarks max CPC column shows the bid Google suggests, which is always higher than what a product needs. Do not use it to set your own max CPC. It can be removed from the product group columns. [L0750, 2020-26]
- Google Shopping placement depends on both bid and relevance, so a highly relevant campaign can get cheaper clicks even at lower bids. Relevance is improved through negative keywords and a well-optimised product catalog. [L0960, 2019]
- ** Optimising Google Shopping before lowering bids: add negative keywords to block irrelevant search terms; optimise the product catalog so each product is described clearly; lower bids if high bids did not convert, and keep monitoring. Review campaigns at least every other week, and probably weekly when you are first starting. [L0960, 2019]

Cutting cost on an underperforming supplier:

1. Open the product groups view inside Google Ads that shows each product's cost per click. [L0834, 2021]
2. Lower the CPC for only the underperforming supplier's products, leaving the default CPC for alpha and beta unchanged. [L0834, 2021]
3. Set the reduction based on profitability. If a supplier costs $1 to make $5 in sales, halve its CPC to reach $0.50 per $5. [L0834, 2021]
4. Optionally, split the supplier into its own campaign (e.g. alpha beta two) and keep other suppliers in the original campaign. [L0834, 2021]

- Google Ads spend should go toward clicks that are likely to convert, especially at the start. Optimise around keywords that bring quality clicks and products that sell at specific price points. [L0835, 2023]

### Reducing spend and scaling winners

Case: after raising bids, daily traffic rose from 2 to 3 visitors to the point of hitting the daily budget. One product had over 800 views and no sales and consumed much of the budget. Actions: add negative keywords for window-shopper terms, use exact or phrase match for niche keywords, and lower the CPC for only that product (for example from 50 cents to 30 cents) while other products keep the default CPC, so spend shifts to them. [L0803, 2022]

- To control spend per product, open the Shopping campaign, break down the results by product ID, and lower the CPC for that individual product instead of the whole campaign. [L0803, 2022]
- Lowering the CPC on a product that takes many impressions but matters little to you moves budget to your other products. For example, if 800 of 1,000 impressions go to one product you do not care about, reduce its bid so Google shifts budget elsewhere. [L0801, 2021]

Cutting a Google Shopping budget without losing sales:

1. Review keywords for impressions, clicks, CPC and sales. [L0804, 2023]
2. Add keywords that bring clicks but no sales and are unrelated as negatives. [L0804, 2023]
3. Review product groups and find the top spenders, about 30% of budget. [L0804, 2023]
4. Lower CPC on high-spend, low-conversion product groups without removing them from the feed. [L0804, 2023]
5. Raise CPC on product groups that are selling if you want more volume. [L0804, 2023]

Case: a new store spent $45 per day on Google ads and made one to two sales per week, and wanted to cut to $30 per day. The fix was to review the keyword list, add unrelated no-sale keywords as negatives to remove waste, and lower CPC on high-spend product groups that did not sell. The goal was to keep the same one to two weekly sales while dropping about $15 of daily waste, and then to scale the winners. [L0804, 2023]

Reducing the cost of a large product group while protecting proven sellers:

1. Identify the products that generated most of the revenue, for example 11,000 USD from 4 out of 200 products. [L0836, 2024]
2. Lower the CPC for the remaining products to a low level, for example from 1 USD to 0.20 USD, to get cheap traffic. [L0836, 2024]
3. Lower the total daily budget, for example from 50 to 30 USD per day. [L0836, 2024]
4. Keep most of the budget on the proven products (roughly 80/20 split). [L0836, 2024]
5. Raise CPC on low-cost products only once they start converting. [L0836, 2024]

- Allocate about 80% of the ad budget to proven winning products and about 20% to new products being tested. [L0836, 2024]

Reducing wasted ad spend when a product brings traffic but does not pay for itself:

1. Check how much was spent on impressions and clicks for each product that generated a sale. [L1092, 2022]
2. If a sale costs a large share of its value, for example 50 to 100 USD in ads for a 215 USD sale, lower that product group's cost per click, for example from 50 cents to 25 cents. [L1092, 2022]
3. Move the remaining budget toward products where the profit is higher. [L1092, 2022]

Reducing spend on a store with many products and little traffic-to-sales conversion:

1. Review historical Google Ads spend by keyword and by product. [L1092, 2022]
2. Remove products that consume budget without sales, or lower their cost per click. [L1092, 2022]
3. Move the freed budget to products that convert. [L1092, 2022]
4. Compare any product page with 100 or more unique visitors and no sales against the top two competitors. [L1092, 2022]

Lowering bids on unprofitable products:

1. Open the alpha campaign and then the beta campaign, one at a time. [L0970, 2023]
2. Open the Product groups view, where each product appears with its Max CPC. [L0970, 2023]
3. Leave the winning products at their current bid. [L0970, 2023]
4. For unprofitable products, open the bid setting (the gear icon) and lower Max CPC, for example from $0.50 to $0.30 or $0.25. [L0970, 2023]
5. Do this in both campaigns and check the account the next day. Lower bids further if spend is still going to the wrong products. [L0970, 2023]

- The main lever for controlling Google Shopping spend across alpha and beta campaigns is the cost per click set per product in each campaign. Negative keywords should be correct before adjusting CPC. [L1094, 2023]
- For low-margin or low-priced products, set a very low default CPC, for example 2 to 3 cents, so they are rarely shown but cost little. Products with real margin should take most of the budget. [L1094, 2023]
- When traffic is spread across both Alpha and Beta campaigns, apply CPC increases to both, based on the traffic data. [L0837, 2025]
- For non-MAP products that do not leave enough profit at competitor prices:
  1. Open both the Alpha and the Beta Shopping campaigns. [L0857, 2025]
  2. Set the CPC of every non-MAP product to 0.01 dollars (one cent). [L0857, 2025]
  3. Leave the existing bids on MAP products unchanged. [L0857, 2025]
  This tells Google not to spend much on uncompetitive products, so the budget goes to products that earn money. [L0857, 2025]
- For all products priced under $200, set the Google Ads CPC to $0.01 so that they do not absorb budget. Direct spend toward products that earn more when they sell. Add-on products under $200 that sell well can receive the same $0.01 CPC, or be excluded entirely. [L0837, 2025]

### Budget or bid: which one to change

- If a campaign does not spend its full daily budget, the audience may be too small or the bid too low for impressions. Increase the bid, not the budget. [L0805, 2024]
- If the budget is spent every day, keep the bid where it is and increase the budget. [L0805, 2024]
- Google Ads budget logic: if a campaign does not spend its full daily budget, raise the bid; if it spends the full daily budget every day, raise the budget. [L0805, 2024]
- Do not raise the ad budget while the account is not profitable, even if Google says the campaign is budget limited. Google benefits from larger budgets, and a higher budget spreads spend across less qualified traffic. [L1068, 2019]
- Raise the budget only when the campaign keeps spending its full daily budget and the traffic quality is still good. [L1086, 2019]

Procedure: when the daily budget is not being spent:

1. Compare the daily budget with the daily ad spend in Google Ads. [L0837, 2025]
2. If the full daily budget is not being spent, raise the default CPC by 10 cents, for example from 20 cents to 30 cents. [L0837, 2025]
3. Monitor traffic for one to two weeks. [L0837, 2025]
4. If the daily budget is still not spent, raise the default CPC by another 10 cents. [L0837, 2025]

- After raising the default CPC by 10 cents, check traffic again about one week later. If traffic has not increased and the daily budget is still not fully spent, raise the default CPC by another 10 cents. [L0837, 2025]
- ** Procedure to raise the default CPC: wait a few days, step up 5 to 10 cents at a time, and decide budget changes only after bids have had time to work. [L0853, 2021], (see the bid steps above)
- ** If only about 10% of a daily budget is being spent, your bids are far too low. [L1274, 2018], (see the bid steps above)

### Scaling budgets gradually

- Larger daily budgets reach wider audiences, and the widest audiences convert least, so return on ad spend tends to fall as budget grows. The smallest budgets capture the highest-intent searches and usually give the best return. Scaling is still possible, but expect the return to drop as reach widens. [L0837, 2025]
- The "limited by budget" status alone does not explain poor performance. See the section below. [L0837, 2025]
- ** Google often recommends large budget jumps that are not needed. Increase budgets gradually, for example from 20 to 30 dollars for about a week, then raise them again in steps. [L1279, 2021]
- ** Use the inch-up approach to budgets: raise the daily budget slightly, about 10%, while watching whether spend increases and the quality of the traffic holds. [L1002, 2019]
- Scale Google Shopping from the start:
  1. Set the daily budget and default CPC across all products. [L0941, 2022]
  2. If the budget is not spent, look at which products get impressions and clicks. [L0941, 2022]
  3. Raise CPC on products with too few impressions and clicks. [L0941, 2022]
  4. Add negative keywords and lower CPC on products that get clicks but no sales. [L0941, 2022]
  5. When campaigns reach a ROAS of 10x or higher and the daily budget is maxed every day, raise the daily budget. [L0941, 2022]
- Google budgets can be scaled faster than Facebook budgets. Doubling the daily budget has worked once everything is dialled in. Expect three to five days of bad results after a jump, let it run about a week, and scale back if it does not level out. [L0941, 2022]
- Scaling is the path, but the goal is the highest spend that still reaches target ROAS, not the highest traffic. [L0856, 2024]

### Limited by budget

- Google Ads shows "limited by budget" on almost all campaigns. This is normal, because Google wants you to spend more. The status alone does not explain poor performance. [L0837, 2025]
- A Google Shopping "limited by budget" message is not a warning and does not require raising the budget. Hovering over it shows estimated conversions at higher budgets. [L1285, 2024]
- Do not raise the ad budget while the account is not profitable, even if Google says the campaign is budget limited. [L1068, 2019]

### Segment bids: device, demographics, geography and time

Device bids:

- Start with no adjustments for mobile or desktop. Once sales come in, review the conversion split in Google Ads, and if mobile produces no sales, reduce the mobile bid, for example to 50% of desktop. [L0804, 2023]
- Adjust device bids in Google Ads by going to Campaigns, opening the device settings, and increasing or decreasing the bid for mobile, tablet or desktop. For example, reduce mobile by 30 percent if desktop converts better. [L0962, 2021]
- Mobile bids can be raised or lowered when setting up campaigns, which is useful when most traffic comes from phones (example: 80% mobile). [L1085, 2018]
- Mobile bid adjustment in a Google Shopping campaign: open the campaign's bid adjustment for mobile devices, choose decrease, and set it to 100% to exclude mobile traffic. [L1274, 2018]
- Google Ads > bid adjustments for devices > mobile set to about -50% relative to desktop. Test this setting and raise mobile bids again if return on ad spend drops. [L1275, 2019]
- Example: with a -95% mobile bid adjustment on a $100 ad set, Google put about $95 toward desktop and only about $5 toward mobile. Sales and return on ad spend then dropped across the board. [L1275, 2019]
- Cutting mobile bids to nearly zero can also lower desktop conversions. Mobile visitors who return later on desktop to buy stop being reached. [L1275, 2019]
- Adjust search bids by device (mobile vs. desktop) based on where sales are strong. Google Ads also allows bid differences by gender (added in the 12 months before the talk), so raise bids for segments more likely to convert, such as men buying gifts. [L1203, 2016]

Demographic and geographic bids:

- Google Ads lets you exclude the lower 50 percent of household income from seeing search ads, shown in the geographic settings of the demonstration. This suits premium or luxury products. Age range, financial status and other demographic options can also be used to build better-targeted search campaigns. [L1203, 2016]
- Do not bid by location, time of day, or device at the budget levels most stores use, because the added control usually hurts performance. [L1115, 2024]

Time-of-day bids follow the segment formula in the section "Bid formulas and CPA targets". [L1328, 2015]

Where sources differ: the 2023 guidance starts with no device adjustment and reduces mobile only after it proves weak. The 2018 and 2019 examples applied large cuts (-100% and -95%) that cut desktop conversions too. The device adjustment should be made gradually, and a large cut should be reversed if return falls. [L0804, 2023; L1274, 2018; L1275, 2019]


Part 31 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/30-campaign-structure-and-bid-levels.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/32-automated-and-enhanced-bidding.md
