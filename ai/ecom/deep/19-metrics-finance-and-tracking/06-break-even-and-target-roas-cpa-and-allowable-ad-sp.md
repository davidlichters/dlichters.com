<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 6 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/05-cost-of-goods-shipping-and-tax-per-order.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/07-profitable-traffic-calculators.md

## Break-even and target ROAS, CPA and allowable ad spend

### Core definitions: ROAS, CPA and cost per purchase

- **ROAS** is revenue divided by ad spend. Examples: $100 ÷ $25 = 4x; $1,000 ÷ $100 = 10x; $1 spent that returns $1.60 gives 1.6; $10 spent that returns $80 gives 8; $1 that returns $2 gives 2. [L0327, 2020-26; L0445, undated; L0645, 2023; L0875, undated]
- one source defines ROAS as revenue attributed to the ads divided by ad spend, so 15x means 15 units of revenue for every unit spent on ads. [L0719, 2021-22] **
- one source also defines ROAS as sale price ÷ cost per acquisition. A $2,000 product at a $500 CPA gives 4x (400% in Google Analytics). [L0446, 2021-22] **
- Google Analytics shows ROAS as a percentage: 4x appears as 400% and 10x as 1,000%. Compare analytics ROAS with calculated targets in the same format. [L0446, 2021-22; L0686, 2021-22] **
- one source gives the same ROAS definition with a 10x example: $100,000 revenue from $10,000 spend equals 10x. [L0808, 2026]
- Cost per acquisition (CPA), cost per purchase (CPP) and cost per sale describe the same measure: the cost to win one customer or one order. They are used interchangeably in ad platforms and reports. [L0446, 2021-22; L0875, undated]
- CPA = total ad spend ÷ number of purchases. Read it in Meta Ads Manager or calculate it from Shopify data. [L0445, undated; L0875, undated]
- Cost per sale = total ad spend ÷ orders from that spend in the same period. Example: $14,000 over 366 orders is about $38.25 per sale. This figure should fall when paid traffic converts better. [L0400, 2021-22] **
- The total campaign spend for cost per sale must include clicks on every product in the campaign, including products that never sold. Otherwise the figure is understated. Example: $152 of spend with 2 sales gives $76 per sale. [L0748, 2020-26]
- Compare ROAS against CPA: a $20 CPA acquisition that generates $100 in revenue is more profitable than a $10 CPA that generates $50, because profit per sale matters more than cost per acquisition. [L0327, 2020-26]
- one source: minimum product price = cost per sale × target ROAS. At a 10x target, a $74 sale needs a product priced at least $740, and a $52 sale needs at least $520. Any product priced above this threshold gives a ROAS above 10x. [L0748, 2020-26]

### Break-even ROAS and break-even CPA

#### Definition and calculation

- Break-even ROAS is the minimum ROAS at which revenue exactly covers COGS and ad spend, leaving zero profit and zero loss. Above it the campaign is profitable; below it is a loss. Knowing it shows which campaigns are viable. [L0327, 2020-26]
- Formula: Break-even ROAS = Revenue ÷ (Revenue − COGS) = Revenue ÷ Profit. Example: $1,000 revenue with $400 COGS gives $600 profit, so $1,000 ÷ $600 = 1.67x. [L0327, 2020-26]
- Simple example: $1,000 revenue with 50% COGS ($500) leaves $500 profit. If all profit is spent on ads, break-even ROAS = $1,000 ÷ $500 = 2.0x. Above 2.0x is profitable; below is a loss. [L0327, 2020-26]
- **Conflict within the one source source:** one formula line reads "(Revenue − Cost of Goods) ÷ Revenue", which as written gives 0.6, not 1.67. The worked result of 1.67x matches Revenue ÷ Profit. Use Revenue ÷ (Revenue − COGS). [L0225, 2015+; L0327, 2020-26]
- Sauna example: $400 sourcing cost, $1,000 revenue, $600 gross profit. A $300 ad budget gives a target ROAS of 3.3x (1,000 ÷ 300) and a break-even ROAS of 1.67x (1,000 ÷ 600). [L0225, 2015+]
- Google Ads version: Breakeven ROAS = Revenue ÷ (Revenue − COGS & Fees). Example: revenue $10,000, COGS plus fees $6,000, profit before ads $4,000, so break-even ROAS = 2.5x. [L0329, undated]
- Your margin before ads, as a percentage of revenue, equals the maximum ad spend percentage at break-even. A 40% margin lets you spend up to 40% of sales on ads and still break even. Reducing COGS and fees raises the profit available for scaling ads. [L0329, undated]
- one source: Break-even ROAS = Selling Price ÷ (Selling Price − Expenses). At the start, Expenses = product cost + shipping. This is an early estimate that does not yet cover other costs, so calculate it before launch and judge every ad set against it. [L0375, undated]
- Break-even ROAS = Selling price ÷ (Selling price − COGS). For $60 with $20 COGS this gives 1.5. Dividing by the $20 cost alone would give 3 and is wrong. [L0875, undated]
- **Conflict within the one source source:** [L0445, undated] and [L0875, undated] write the formula as Selling price ÷ COGS, which gives 3 for $60 and $20, yet both state the result as 1.5. The 1.5 matches Selling price ÷ (Selling price − COGS), as [L0875, undated] says. Use the corrected form. [L0445, undated; L0875, undated]
- one source tool example: COGS $10, selling price $40, break-even ROAS 1.3x. This matches Selling price ÷ (Selling price − COGS). [L0229, undated]
- Gross-margin shortcut: Break-even ROAS = 1 ÷ gross margin %, since at that ROAS the margin covers ad spend. [L0693, 2024]
- Break-even ROAS before fees = selling price ÷ (selling price − product − shipping). Payment and app fees raise the number, so include them for the real break-even. [L0645, 2023]
- Dropship Toolkit example: a product costing $18 sold at $39.99 has a break-even ROAS of 1.85 in the tool. A plain price-minus-cost calculation gives 1.82 (39.99 ÷ 21.99), so the tool likely deducts some extra cost. [L0661, undated]
- Example with a $39.90 price and $17 fulfilment cost: $22.90 margin gives 1.74. A stated profit of $22 gives 1.81. Check which profit figure a calculator uses before relying on it. [L0440, 2023+]
- one source KPI sheet formula: Break-even ROAS = AOV ÷ (AOV × (1 − fee %) − COGS). Example: 60 ÷ (60 × 0.96 − 20) = 1.60. The daily business cost is not part of this ROAS formula. [L0900, undated]
- one source: Break-even ROAS = new-customer AOV (tax-inclusive, as shown in ad platforms) ÷ cost per order that makes contribution margin zero (gross profit per order). Example: $238.49 ÷ $130.27 = 1.83. At 1.83 the business neither makes nor loses money on first orders. [L0433, 2025-26]
- Break-even ROAS of 1.3-1.5 is the stated ideal range for any product. A break-even near 1.9 means only a thin profit even at a ROAS of 2. [L0645, 2023]
- Aim for a break-even ROAS of 1.6 or lower, which gives roughly three times the margin on the product. This leaves room for ad spend, app and staff costs and payment fees. [L0875, undated]
- For a product with break-even ROAS 1.5, a ROAS of about 1.6-1.8 or higher is profitable. A ROAS of about 1.3-1.4 or lower is a loss. Small ROAS changes decide profit or loss. [L0875, undated]

#### Break-even cost per purchase (margin per order)

- Break-even cost per purchase = selling price − (product cost + shipping cost). Example: $6 product + $4 shipping, $40 price: break-even margin $30 per purchase. This $30 is the minimum the ad set must spend before you decide to continue, pause or kill it. [L0229, undated]
- Break-even cost per purchase = selling price − COGS. Example: $60 − $20 = $40. CPA below $40 yields profit; above $40 yields a loss. [L0445, undated; L0875, undated]
- Break-even cost per purchase is the profit margin per product. Spend at least this amount on an ad set or ad before judging it, and judge at ad level later for more precision. [L0640, 2023]
- For first tests, fees and other expenses can be ignored, but subtract them later as they become known, for example transaction fees. Example: $30 price − $10 product − $10 shipping = $20. [L0648, undated]
- Full break-even CPP with the KPI sheet: AOV × (1 − average fee %) − average COGS including shipping − daily cost of running the business. Example: 60 × (1 − 0.04) − 20 − 0.9524 = $36.65. This is lower than the simple $40 margin because fees and daily costs are included. [L0900, undated]
- Break-even CPP must be checked against actual cost per purchase. If CPA is $40 and break-even CPA is $36.65, the seller loses about $3.35 per sale (the source text says $3.50). [L0445, undated; L0875, undated]
- Procedure: calculate break-even cost per acquisition, write it down, and keep the actual cost per purchase below it. Any cost above it means the product is losing money. [L0692, 2023]
- Per product: know COGS, break-even ROAS and break-even cost per purchase before running paid ads. These are the baseline KPIs that show whether a product can make money at all. [L0445, undated]
- one source formula for break-even CPP as the margin, plus the note on kill rules: use it to set kill rules for campaigns. [L0693, 2024; L0692, 2023]

#### Break-even CPA and max cost

- The maximum you can pay through paid traffic is the break-even CPA, equal to net profit before marketing when you count one purchase per customer. If you use customer lifetime value, the maximum can be set against it, which may mean a loss on the first order. [L0446, 2021-22] **
- Break-even is not a good target for every sale, because a business that only breaks even earns nothing. Set the ideal target CPA below break-even so the chosen margin stays in the business. [L0446, 2021-22] **
- Formula: Break-even CPA = net profit before traffic per sale. Target CPA = net profit before traffic − profit to keep per sale. Example: $500 net profit before traffic and $300 wanted profit gives a target CPA of $200. [L0446, 2021-22] **
- Worked example: a product sold for $200 and bought for $100 leaves $100 gross profit. Free shipping and other per-sale costs take $20, so net profit before marketing is $80. Keeping $40 as profit and spending up to $40 per sale on ads gives a target CPA of $40. [L0446, 2021-22] **
- The unit cost is the total cost of one sale before marketing: product cost, shipping, staff costs such as customer service, and all other overheads divided down to a single sale. Net profit before traffic = selling price − this full unit cost. [L0686, 2021-22] **
- Break-even max cost per sale is normally calculated on a single first purchase. A store with repeat buyers can instead use customer lifetime value, which may allow a maximum above break-even and means accepting a loss on the first order. [L0686, 2021-22] **
- Before scaling paid traffic, know the maximum cost per sale and the ideal cost per sale for each product, or at least for product groups on average. Without both numbers, decisions to scale or pull back are guesswork. [L0686, 2021-22] **
- The ideal cost per sale sits below the maximum so that each sale keeps a chosen margin. Running every sale at break-even means the business never earns money. [L0686, 2021-22] **

#### Break-even by units and volume

- Break-even units for a one-time sponsorship fee = fee ÷ revenue per unit. Example: a $10,000 fee at $100 per unit needs 100 units sold to recover the fee in revenue, not profit. [L0492, 2023+]
- Break-even sales per month = total monthly fixed costs ÷ margin left per sale after product, fees and acquisition costs. This shows how many sales cover overhead. [L0436, undated]
- Paid-ad dropshipping customer acquisition cost is often about $5-15 per new customer, depending on niche and market. Use your own measured figure once ads run. [L0436, undated]
- Paid ads cost roughly $7-12 in ad spend per conversion for the products discussed. Include this when judging whether a product can sell at a profit with ads. [L0706, 2020+]
- Include more costs than COGS and ads once orders are numerous: payment processing (around 4% for Shopify Payments, Stripe or PayPal), app subscriptions, Shopify transaction fees, and virtual assistant or staff costs. Add them to the break-even calculation after the first few profitable weeks. [L0875, undated]
- For a store with several products, calculate one break-even ROAS from the average selling price and average fulfilment cost. Keep prices and fulfilment costs close across products so this one number stays accurate. [L0642, undated]
- Calculate for each acquisition channel the cost to acquire one customer, the time to break even, and the point at which that customer becomes profitable. These three numbers set how much you can safely spend on traffic. [L0378, 2019+]

### Target and desired ROAS from profit allocation

#### Target ROAS with a profit share

- Target ROAS = Revenue ÷ (Profit × Allocation %), where Allocation % is the share of profit you choose to spend on ads. Example: $1,000 revenue, $600 profit, 50% allocated to ads gives 1,000 ÷ 300 = 3.3x. [L0327, 2020-26]
- Procedure:
  1. Calculate break-even ROAS first (e.g. 1.67x).
  2. Decide the percentage of profit to spend on ads (e.g. 50%).
  3. Calculate target ad spend = Profit × Percentage (e.g. $600 × 50% = $300).
  4. Calculate target ROAS = Revenue ÷ Ad spend (e.g. $1,000 ÷ $300 = 3.3x).
  5. A higher target ROAS means a lower ad spend allocation and more profit remaining. [L0327, 2020-26]
- Example: $1,000 revenue with $600 profit before ads. Allocating 50% of profit to ads gives $300 ad spend and a target ROAS of 3.3x. $300 of profit remains after paying for ads. [L0327, 2020-26]
- Spreadsheet columns for break-even and target ROAS, in calculation order, with the lesson's example values:

| Column | Example value |
|---|---|
| Revenue | $1,000 |
| COGS and fees ($) | $400 |
| COGS and fees (%) | 40% |
| Profit before ads ($) | $600 |
| Profit before ads (%) | 60% |
| Break-even ROAS | 1.67x |
| Share of profit spent on ads | 50% |
| Target ad spend | $300 |
| Target ROAS | 3.3x |

  [L0327, 2020-26]
- Break-even is the point where all profit before ads is spent on advertising. With $1,000 revenue and $600 profit before ads, spending $601 on ads loses $1, while spending $599 keeps $1. Every dollar of ad spend above profit before ads is a dollar of loss. [L0327, 2020-26]

#### Desired ROAS for a profit target

- Desired ROAS is the ROAS a campaign must reach to hit a chosen profit target, such as 15% or 20%. Calculate it from COGS and average order value, not only from break-even ROAS. [L0445, undated]
- Desired ROAS = AOV ÷ Profit Target CPP. Example: 60 ÷ 27.65 = 2.17. [L0900, undated]
- Desired ROAS for a target margin uses COGS, AOV and the chosen profit percentage (for example 10%, 15% or 20%). It is read from a KPI calculation sheet. [L0875, undated]
- Required ROAS for a profit target = 1 ÷ (margin after COGS and all non-ad costs, as a share of revenue, minus target profit share). Non-ad costs include payment fees, app fees and staff costs. Example: 66.7% margin, 4% fees, 15% target gives 1 ÷ 0.477 ≈ 2.1. A sheet with extra costs can land slightly higher, such as 2.17. [L0875, undated]
- For a 15% profit target with COGS $20 and a given AOV, the target ROAS is 2.17. If Facebook ads alone run at 2.17 ROAS, the 15% margin is reached. Higher ROAS means a larger margin and possibly a reason to scale. [L0445, undated; L0875, undated]
- A cost per purchase near $27.65 corresponds to roughly 15% profit under the same COGS and AOV, so it is a good target when using the calculation sheet. [L0875, undated]
- one source benchmark ROAS formula: Benchmark ROAS = BE-ROAS + 20% margin. Your own benchmark can use a different margin, because not everyone aims for 20%. [L0376, undated]
- Scaling target: aim for a ROAS above break-even by at least one point (break-even ROAS + 1). [L0650, undated]

#### Desired ROAS from first-order contribution

- Target ROAS for a desired first-order contribution margin: amount to keep = AOV × target margin %. Required ROAS = AOV ÷ (gross profit per order − amount to keep). Example with $238.49 AOV and $130.27 gross profit: for 15% margin, keep $35.77, and required ROAS = 238.49 ÷ (130.27 − 35.77) = 2.52. For 25% margin, required ROAS = 3.38. [L0433, 2025-26]
- Break-even ROAS shows the minimum ad return to avoid losses, but target ROAS sets the margin you want. Set targets from the profit you want to keep, and compare them with ROAS in the ad account. If ad ROAS meets the target but profit is still low, the problem is unit economics, not advertising. [L0433, 2025-26]

### Maximum acquisition cost and the 10% rule

#### Maximum acquisition cost

- Maximum acquisition cost = profit per sale × share of profit you are willing to give to the ad platform. Example: $50 product with $15 profit gives a maximum of $7 if you keep 50% of profit (the source says $7; 50% of $15 is $7.50), or up to $14.95 with a much thinner margin. [L0643, 2015]
- Lifetime value changes the ceiling. A $50 product with a historical customer lifetime value of $500 can afford $450 to acquire that customer. Without lifetime value data, the same business can only justify spending up to its first-order profit. [L0643, 2015]
- Know two dollar figures immediately: the maximum you can afford to spend to acquire one customer, and the target cost per acquisition for your ideal profit position. Both depend on your specific business; there is no universal correct amount. [L0414, 2021-22] **
- Use the maximum affordable acquisition cost and the target CPA to decide where to advertise, where not to, and where to spend more. Check these numbers across the full customer journey and against customer lifetime value. [L0414, 2021-22] **
- Keep a financial system that shows at any moment whether actual CPA is at or below target, and why or why not. Hitting the target CPA is the marketing-side indicator of profitability. [L0414, 2021-22] **
- To find the maximum you can spend per sale in the Profitable Traffic Calculator, enter 0 as target profit per sale. Enter the profit you want to keep as a currency amount (e.g. $300), not a percentage. The break-even results then show the highest CPA, ROAS and max CPC you can accept. [L0686, 2021-22] **
- Ad cost per sale should be compared against average order value. A 10x ROAS target allows ad cost of one tenth of the order value. [L0472, 2025] *(2025)*

#### The 10% rule

- Set ad spend at up to 10% of product price per sale. A $200 product supports up to $20 of ad spend per customer; a $1,000 product supports up to $100. [L0358, 2020] **
- Keep customer acquisition cost (CAC) at a maximum of 10% of product price. For a $1,000 product, up to $100 of ad spend per sale. [L0759, 2020-26]
- The 10% CAC limit is a rough average rule. Real acquisition costs fluctuate between campaigns, so judge it over many sales rather than one. [L0759, 2020-26]
- Maximum customer acquisition cost is about 10% of the sale price, which is the 10x ROAS target. On a $1,000 product, spend up to $100 per customer. [L0855, 2023] *(2023)*
- one source 2022 budget per sale:
  1. Set the minimum advertised price (MAP) at least 2X wholesale cost. Example: $500 wholesale means a $1,000 MAP.
  2. Aim for a target ROAS of 10X, so every $1 on ads returns at least $10 in sales. Example: a $1,000 product allows up to $100 ad spend per sale.
  3. Typical cost structure per sale: COGS about 50% of selling price, a 2.9% transaction fee, shipping covered, leaving about 10% of the price for traffic. The source does not itemise the remainder, so check it against your own costs.

  [L0429, 2022] **
- Use a minimum ROAS of 10x when budgeting ads for a product, leaving margin for shipping and the merchant fee. [L0834, 2021] **
- Low ROAS on lower-priced products has three possible causes: ads not targeted tightly enough, keywords too broad, and low website conversion rate. Review all three before deciding a niche is wrong. Focus first on costs you control, such as shipping rates and ad spend. [L0358, 2020] **

### Revenue per click and maximum CPC

#### Core formulas

- Revenue per click (RPC) = total conversion value (revenue) ÷ total clicks. It is the average revenue each click generates and the basis for all bid calculations. [L0299, 2020-26; L0454, 2019]
- Predicted revenue per click comes from historical performance data for each product. Combined with target ROAS, it determines the maximum CPC you can profitably bid. [L0299, 2020-26]
- Target CPC (maximum bid) = Revenue per click ÷ Target ROAS. Divide revenue per click by target ROAS to get the highest CPC that still keeps you profitable. [L0299, 2020-26; L0510, 2018]
- Example: 100 clicks generating $1,000 revenue gives $10 RPC. At a 10x target ROAS the target CPC is $1. [L0454, 2019]
- Maximum CPC for a target ROAS = RPC ÷ target ROAS. Example: a $1,000 budget earning $2,000 has ROAS 2. With RPC $2, the maximum CPC for ROAS 2 is $1. [L0510, 2018]
- one source: Maximum CPC = target CPA × conversion rate. At a $500 CPA and 1% conversion, break-even max CPC is $5. At a $200 target CPA and 1% conversion, max CPC is $2. [L0446, 2021-22] **
- one source: a higher bid is only profitable if conversion rate rises in step. Paying above target max CPC pushes profit below your target per sale, and a falling conversion rate makes existing bids unprofitable. [L0686, 2021-22] **
- Bid, conversion rate and ROAS are linked: a high bid stops being profitable when conversion falls too low, so check every bid level against the conversion rate it actually produces. [L0740, 2021-22] **

#### Worked case: competitor and optimised advertiser

- Competitor baseline: $1,000 budget at $1 CPC gives 1,000 clicks. At a 1% conversion rate that is 10 conversions. At $200 customer value, that is $2,000 revenue, ROAS 2 and RPC $2. The highest CPC that still holds ROAS 2 is $1. [L0510, 2018]
- Optimised advertiser with the same $1,000 budget: shopping title and quality score lowered the rate to $0.80 CPC, giving 1,250 clicks. Facebook retargeting raised conversion to 1.26%, giving about 16 conversions. The email lift raised customer value to $220, so revenue is about $3,520, and the maximum CPC for ROAS 2 becomes $1.41. [L0510, 2018]
- The source quotes $3,500 ÷ $1,000 as 4. The correct result is 3.5. Use exact figures and recalculate with your own revenue before setting a bid target. [L0510, 2018]
- The competitor and optimised advertiser both had a $1,000 budget. The optimised one reached about $3,500 revenue (a stated 76% increase from better titles, dynamic retargeting and email opt-ins, which is 75% on the given figures), with a much higher ROAS. The gap made it hard for the competitor to match the bid. [L0510, 2018]


Part 6 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/05-cost-of-goods-shipping-and-tax-per-order.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/07-profitable-traffic-calculators.md
