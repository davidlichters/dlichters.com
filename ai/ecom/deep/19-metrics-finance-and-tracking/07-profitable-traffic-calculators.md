<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 7 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/06-break-even-and-target-roas-cpa-and-allowable-ad-sp.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/08-break-even-cpa-and-cost-per-purchase.md

### Profitable traffic calculators

#### one source Profitable Traffic Calculator

- The Profitable Traffic Calculator is a free spreadsheet (Excel or Numbers, and a Google Sheets copy). It calculates break-even and target CPA, ROAS and max CPC from price, cost, target profit and conversion rate. It works for Google Ads, Facebook or any cost-per-click channel. [L0446, 2021-22] **
- It is a spreadsheet used to work out target cost per sale and target ROAS. Both targets are needed before any bid or budget decision. [L0744, 2021-22] **
- Procedure:
  1. Enter the product price in the blue input field (example: $2,000).
  2. Enter the unit price: the total cost of the sale before marketing, including supplier cost, shipping, wages and overheads (example: $1,500). The calculator shows net profit before traffic (example: $500).
  3. Enter target profit per sale. Use $0 to aim for break-even sales (example: $300).
  4. Enter the conversion rate, for the store or the individual product (example: 1%).
  5. Read the outputs: break-even CPA, break-even ROAS, break-even max CPC, target CPA, target ROAS and target max CPC.
  6. Change the conversion rate to see how allowed bids move (example: 0.5%).

  Only blue fields are entered by hand; pink and green fields calculate automatically. [L0446, 2021-22] **
- Sheet labels include Product Price, Unit Price, Target Profit Per Sale, Conversion Rate and current-average inputs (Current Avg CPA, Current Avg CPC, Current Avg ROAS, with Actual conversion rate). Required entries are marked "YOU NEED TO ENTER" and optional ones "YOU CAN OPTIONALLY ENTER". Outputs include Net Profit Before Traffic, Break Even CPA, Break Even CPC, Break Even ROAS, Target CPA, Target Max CPC and Target ROAS. Enter current averages from your ad account to compare live performance with the targets. [L0446, 2021-22] **
- Inputs are product price, unit price, target profit per sale, and conversion rate (blue fields). Result cells (pink and green) calculate automatically and should not be overwritten. [L0686, 2021-22] **
- Procedure:
  1. Enter the product price.
  2. Enter the unit price: total cost of one sale before marketing (including shipping, staff and overheads per sale).
  3. Enter target profit per sale.
  4. Enter the store conversion rate or, if known, the product's own rate.
  5. Read net profit before traffic and the break-even results (break-even CPA, ROAS and CPC).
  6. Read the target results (target CPA, ROAS and max CPC).
  7. Compare target max CPC with current bids and conversion rate before raising any bid.

  [L0686, 2021-22] **
- Formulas used by the calculator:

```
Net profit before traffic = product price - unit cost
Break-even CPA = net profit before traffic
Break-even ROAS = product price / break-even CPA
Break-even max CPC = break-even CPA x conversion rate
Target CPA = net profit before traffic - target profit per sale
Target ROAS = product price / target CPA
Target max CPC = target CPA x conversion rate
```

  [L0686, 2021-22] **
- Worked example: product price $2,000, unit cost $1,500, net profit before traffic $500. Target profit $300, conversion rate 1%. Results: break-even CPA $500, break-even ROAS 4x, break-even max CPC $5, target CPA $200, target ROAS 10x, target max CPC $2. [L0686, 2021-22] **
- At a conversion rate of 0.5%, target CPA stays $200 but target max CPC falls to $1. The lower rate halves the affordable bid. [L0686, 2021-22] **
- If a single product's conversion rate is unknown, use the store-wide rate. The result is much closer to reality than running no calculation. [L0686, 2021-22] **
- Setting targets for a large catalogue:
  1. List the prices of all products.
  2. Group them into price buckets, e.g. around $2,000, $1,700, $1,500 and $1,300.
  3. Run the calculator once per bucket price.
  4. Use the stepped results as average guidance for max CPC and related targets, and avoid limits so tight they block profitable sales.

  [L0686, 2021-22] **
- Before any bid change, check target max CPC against current bids and conversion rate (see [L0686, 2021-22] steps 6-7). [L0686, 2021-22]

#### one source and dropship calculators

- The Course C dropshipping calculator returns break-even ROAS from COGS (product plus shipping) and selling price. Enter both to get the result. [L0445, undated]
- The tool is on ecommercementoring.com/tools. Enter COGS (including shipping to warehouse or supplier cost) and selling price; the tool returns the break-even ROAS threshold. [L0229, undated]
- The one source KPI calculation sheet takes COGS and average order value as inputs. It outputs break-even KPIs and profit-target KPIs, including break-even ROAS, break-even cost per purchase and the ROAS for each profit target. Its built-in fee and app cost assumptions can be used directly. [L0875, undated]
- Check which profit figure any calculator uses before relying on its output. [L0440, 2023+]

### KPI baseline sheets

#### Baseline procedure per product

- Before running paid ads, know three numbers for each product: COGS, break-even ROAS and break-even cost per purchase. [L0445, undated]
- Procedure to calculate the KPI baseline for a product:
  1. Add COGS (product price plus shipping).
  2. Add average order value.
  3. Read the break-even KPIs (minimum ROAS and maximum CPA that avoid a loss).
  4. Set a profit target (e.g. 10% or 15%) and read the profit-target KPIs.
  5. Compare live campaign ROAS and CPA against these numbers before deciding to scale, hold or kill the product.

  [L0445, undated]
- Build the KPI sheet in this order:
  1. Enter average order value, average fee % and average COGS including shipping per order.
  2. Enter the daily cost of running the business (the sheet's value is total monthly cost ÷ monthly orders: 400 ÷ 420).
  3. Enter the profit target %.
  4. Calculate break-even CPP, then the profit-target CPP by subtracting profit target % × AOV.
  5. Enter add-to-cart %, reached-checkout % and purchased %.
  6. Work backwards from CPP to CPIC, then CPATC, then CPVC using the funnel rates.
  7. Calculate break-even ROAS and profit-target ROAS.
  8. If the ad account is not in USD, enter how many units of your currency equal 1 USD.
  9. Compare the goal CPC with actual CPC and funnel rates.

  [L0900, undated]
- Breakeven KPIs cover the costs of the sale and leave no profit. Profit-target KPIs are the stricter limits to aim for. Each funnel-stage cost is derived from the next stage's cost times the conversion rate between them. Higher conversion at any stage allows a higher cost at the stage above. [L0900, undated]

#### Funnel formulas (KPI sheet)

- Profit Target CPP = Breakeven CPP − (profit target % × AOV). Example: 36.65 − (0.15 × 60) = 36.65 − 9.00 = 27.65. [L0900, undated]
- Cost Per Initiate Checkout (CPIC) = CPP × (purchased % ÷ reached checkout %). Example: 36.65 × (2 ÷ 4) = 18.32 at breakeven; 27.65 × (2 ÷ 4) = 13.82 at the profit target. [L0900, undated]
- Cost Per Add to Cart (CPATC) = CPIC × (reached checkout % ÷ add to cart %). Example: 18.32 × (4 ÷ 6) = 12.22 at breakeven; 13.82 × (4 ÷ 6) = 9.22 at the profit target. [L0900, undated]
- Cost Per View Content (CPVC) = CPATC × add to cart %. Example: 12.22 × 0.06 = 0.73 at breakeven; 9.22 × 0.06 = 0.55 at the profit target. [L0900, undated]

#### Sheet values (example inputs)

- Example inputs: AOV $60, fees 4%, COGS $20 including shipping, daily cost $0.9524 (total $400 ÷ 420 items per month), profit target 15%, add to cart 6%, reached checkout 4%, purchased 2%. [L0900, undated]

| KPI | Breakeven (no profit, no loss) | Profit target (15%) |
|---|---|---|
| Cost Per Purchase (CPP) | 36.64761905 | 27.64761905 |
| Cost Per Initiate Checkout (CPIC) | 18.32380952 | 13.82380952 |
| Cost Per Add to Cart (CPATC) | 12.21587302 | 9.215873016 |
| Cost Per View Content (CPVC) | 0.732952381 | 0.552952381 |
| Return on Ad Spend (ROAS) | 1.595744681 | 2.170168791 |

[L0900, undated]

| Field | Value | Unit |
|---|---|---|
| Average Order Value | 60.0 | $ |
| Average Fees | 4.0 | % |
| Average COGS (incl. Shipping) | 20.0 | $ |
| Daily cost of running a business | 0.9523809524 | $ |
| Profit Target | 15.0 | % |
| Add to cart | 6.0 | % |
| Reached checkout | 4.0 | % |
| Purchased | 2.0 | % |
| Currency conversion: 1 USD equals (in your currency) | 1.0 | - |
| Baseline PUR conversion rate (est.) | 0.01666666667 | - |
| Total cost of running a business | 400.0 | $ |
| Approximate number of items generated per month | 420.0 | - |
| Goal CPC (calculated) | 0.6207936508 | $ |

[L0900, undated]

#### Goal CPC from a single product

- Procedure:
  1. Margin per sale: product price $75 − COGS $29 = $46.
  2. With a 3% conversion rate, one sale comes from about 33 clicks (100 ÷ 3).
  3. Keep $25 of the $46 margin for ad spend, as the sheet example does, so the sale still breaks even.
  4. Divide the ad budget by clicks per sale: 25 ÷ 33 = $0.76 goal CPC (the sheet example rounds this to $0.75).

  [L0900, undated]

### Reading results and acting on them

- Compare actual ROAS with break-even and target ROAS. Above target: performing well. Between target and break-even: profitable but short of goals. Below break-even: losing money. [L0327, 2020-26]
- Calculate break-even ROAS before launching any ads, because it is the reference number for profit or loss. Compare every campaign, keyword and product against it. [L0327, 2020-26]
- Break-even ROAS depends on each product's COGS and fees, so calculate it per product or per product category rather than one number for the whole store. This can be a single spreadsheet covering all products or products grouped by category. [L0327, 2020-26]
- Campaigns below break-even lose money on each order; the funnel must be fixed or the product removed. Campaigns above break-even but below the profit target need optimisation before scaling. [L0875, undated]
- Judge an ad set against break-even cost per purchase. Use ad-level data later for more precise decisions. [L0640, 2023]
- Use the break-even cost per purchase to set kill rules for campaigns. [L0693, 2024]
- Know four numbers before reviewing ad performance: target cost per sale, target ROAS, break-even ROAS and break-even cost per sale. Work them out at least roughly; without a target, report data means nothing. [L0719, 2021-22] **
- Track cost per product and cost per creative alongside ad spend to see which products and creative types cost the most to support. [L0885, 2025-26]
- True ROAS = attributable revenue ÷ (Meta ad spend + cost to produce the creatives). Including creative cost gives a more accurate return than ad spend alone. [L0885, 2025-26]
- If ad ROAS is at or above target but profit is still low, the problem lies in unit economics, not advertising. [L0433, 2025-26]
- A ROAS of 2.6-3 on the same margins was reported to give about 35% profit, against about 15-20% at a ROAS of 2-2.5 with break-even of 1.3-1.5. [L0645, 2023]
- Example: a ROAS of 3.5-4.5 on CAD 1,000 daily spend and CAD 3,500 sales gives a stated net daily profit of CAD 1,100-1,200. [L0298, 2023]
- Winter ad spend of about $5,000 produced about $18,000 in sales in November. The brand roughly broke even overall, which was accepted because the strategy was long term. [L0492, 2023+]
- one source example: $1 spent that returns $1.60 gives a ROAS of 1.6. [L0445, undated]
- Ad cost per conversion should always be read against the margin per sale before deciding whether a product sells profitably with ads. [L0706, 2020+]

### ROAS benchmarks by business model

| Business model | ROAS benchmark | Source |
|---|---|---|
| Online course sales | 2x to 3x typical; 5x is excellent | [L0719, 2021-22] |
| High-ticket dropshipping | About 10x on average or better is needed to be profitable | [L0719, 2021-22] |
| General ecommerce | Minimum 10x | [L0208, 2024+; L0358, 2020; L0359, 2020; L0808, 2026] |
| one source paid ads | Break-even 1.3-1.5 ideal; 1.6 or lower planning target | [L0645, 2023; L0875, undated] |
| Facebook and TikTok at scale | About 2 to 2.5 when working well; higher possible but not a planning basis | [L0871, 2021+; L0875, undated] |
| one source general | 4.5 is strong when break-even is 1.8; above 2.5 is solid margin | [L0298, 2023] |
| one source scaling | 5-7 average held over 3-7 days is an ideal scaling target | [L0298, 2023] |

- The ROAS you need is set by your margins and costs, not by a universal standard. High-ticket margins mean a 2x-3x result that is good in other models would lose money. [L0719, 2021-22] **
- A break-even ratio of 1.16 was quoted for a $50 product bought at $2-3 bulk cost, with about 30-50% profit at $7 unit cost on Facebook scaling at 2-2.5 ROAS. Check these figures against your own unit cost, fees and shipping before using them. [L0871, 2021+]
- one source 2026: set a minimum ROAS target of 10x for ad campaigns. Keep scaling spend only while the 10x minimum holds. [L0808, 2026]
- one source: a $1,000 budget earning $2,000 is ROAS 2; the 10x minimum target is the standard the source applies to scaling. [L0208, 2024+]
- one source example: $923 monthly ad spend should generate $9,230 at 10x. A store that spent $923 and generated $6,700 had 7.3x blended ROAS. Reaching 10x needed $2,530 more revenue. [L0208, 2024+]
- Low ROAS on lower-priced products: review targeting, keyword breadth and conversion rate first; costs you control include shipping rates and ad spend. [L0358, 2020] **
- one source 2025: a 10x ROAS target allows ad cost of one tenth of order value. [L0472, 2025]
- one source: a ROAS below target (for example 7x against a 10x target) signals the need for optimisation through bid adjustments, keyword management or other changes. [L0256, 2021-22] **
- Key figures for dropshipping: a break-even ROAS of 1.5 and ROAS above it is profitable; a ROAS of 2.5 or higher on paid ads is the planning band for solid margins. [L0875, undated; L0298, 2023]

### Core metrics: ROAS, CPA, CPC and the KPI

- A KPI is the goal you set before advertising, such as cost per sale or the return you need, so every campaign has a clear number to reach. Without a defined target you cannot judge whether a campaign is working [L1021, 2026].
- ROAS is the most important KPI in the reporting view [L1024, undated].
- ROAS = revenue generated by the ads ÷ ad spend over the same period [L1020, 2020-26; L1049, 2025+; L1110, 2019; L1111, 2020; L1038, 2026; L1135, undated; L1215, 2023+; L1217, 2023+; L1508, 2022+; L1002, 2019; L0969, 2022; L0970, 2023; L0972, 2025; L1203, 2016].
- Worked examples of the ROAS formula:

| Ad spend | Revenue | ROAS | Source |
|---|---|---|---|
| $1,000 | $3,000 | 3.0 | [L1049, 2025+] |
| $100 | $300 (3x) | 3.0 | [L1038, 2026] |
| $100 | $1,000 | 10x | [L1110, 2019] |
| $2,000 | $20,000 | 10x | [L1111, 2020] |
| $1,600 | about $17,000 | about 10x | [L0969, 2022] |
| $1,000 | $20,000 | 20x, a sign to test a larger budget | [L0970, 2023] |
| $30 per day for 30 days ($900) | $13,500 at 15x | 15x | [L0972, 2025] |
| $50 | $200 | 4x | [L1508, 2022+] |
| $1 | $1.80 | 1.8 | [L1174, undated] |
| $1 | $2.50 | 2.5 | [L1217, 2023+] |
| $100 | $3.50 | 3.5 | [L1215, 2023+] |
| 100  | $450 | 4.5 | [L1354, 2025-26] |
| $100 | $60 | 0.6x, spending more on ads than earned | [L1203, 2016] |

- A rising spend with falling ROAS signals that extra traffic is not profitable. Keep ROAS high while raising bids or budgets [L1002, 2019].
- Track ROAS against two targets: the target ROAS you aim for, and the break-even ROAS where ad revenue covers ad spend and COGS. Both shift when cost per click or average order value changes [L1038, 2026].
- CPA = amount spent on the campaign ÷ number of purchases. Example: $104.49 spent with one purchase gives a CPA of $104.49 [L1124, 2026].
- Ad spend = cost per click × number of clicks. CPA = ad spend ÷ number of sales. Example: $3 × 100 clicks = $300 spend. At 2% conversion (2 sales), CPA is $150. At 3% (3 sales), CPA drops to $100 [L0923, 2015].
- Cost per sale = cost per click ÷ conversion rate. At $1 CPC, 100 visitors at 5% gives 5 sales for $100 total, or $20 per sale. 500 visitors at 1% gives 5 sales for $500, or $100 per sale. The lower-CTR, higher-conversion version is far cheaper per sale [L1401, 2020-26].
- CPA = cost per click ÷ conversion rate. At 0.5% conversion, a $0.25 click gives a CPA of $50, while a $1.50 click gives $300. The same term is profitable at one bid and not at the other [L1328, 2015].
- Paid traffic math: ad spend = clicks × CPC; conversions = clicks × conversion rate; revenue = conversions × average value per conversion; ROAS = revenue ÷ ad spend. Example: 500 clicks × $1.20 = $600 spend; 500 × 2% = 10 conversions; 10 × $300 = $3,000 revenue; ROAS = 5 [L1455, 2018+].
- Paid traffic is only worth scaling when ad revenue exceeds ad spend, so the target is a positive return on ad spend. A campaign that earns more in sales than it costs can justify a higher budget [L1455, 2018+].
- Stores with a profitable paid setup often run budgets without a fixed cap, as long as the return stays positive. The key control is knowing conversion rate and value per conversion, so the spend limit follows from the numbers [L1455, 2018+].
- Before launching a campaign, know your average cost per click, your site conversion rate and the value of one sale. These three numbers decide whether the campaign can be profitable, and without them you cannot calculate break-even or the ROAS you need [L1455, 2018+].
- Your cost per click or acquisition must fit the conversion rate your site achieves on that traffic. If you pay more for traffic than your conversion rate supports, sales will not be profitable. Set financial targets for paid-traffic sales before scaling spend [L1507, 2021-22].
- Filtering out buyers unlikely to convert, through ad text and pre-click qualifiers, improves cost-to-revenue more than a higher click-through rate does. Judge ad changes by cost per sale or revenue per dollar spent, not by CTR alone [L1401, 2020-26].

### Break-even ROAS: definition and rules

- Break-even ROAS is the minimum return on ad spend an offer needs to avoid a loss. Any ROAS above it makes money and any ROAS below it loses money [L0986, 2026].
- Break-even ROAS is the point where a campaign is neither profitable nor loss-making. A ROAS above it is profitable; below it means a loss [L1217, 2023+].
- The break-even ROAS is the point where revenue equals COGS plus ad spend. Profit turns from negative to positive above it [L1203, 2016].
- Break-even ROAS is the return at which a campaign covers its costs. The mentor gave no fixed target above it, but described a ROAS of about 1.7 as acceptable and about 3 as great [L1107, 2023].
- Before running ads for an offer, compare its break-even ROAS with the ROAS you expect or measure. Keep ads running only while measured ROAS stays above break-even. Do this for every offer, including bundles and buy-X-get-Y offers [L0986, 2026].
- Calculate the minimum ROAS for each campaign, keyword and other segment before launch, and let that minimum guide every bidding and budget decision [L1203, 2016].
- Compare ROAS with break-even: above it the campaign is profitable, below it the campaign is at a loss [L1024, undated].
- Knowing the break-even ROAS for every candidate product before testing is essential, because it sets the minimum return a product's ads must generate [L1162, undated].
- Break-even ROAS depends on margin, so always compare ROAS with break-even before deciding whether to keep or cut an ad set [L0950, 2023].
- Break-even ROAS changes with the product's margin and costs. Calculate your own floor for each product rather than using another store's figure [L0977, undated; L1203, 2016].

#### Break-even ROAS formulas

Sources define the cost base differently. The formulas below are not interchangeable. Use the one that matches the costs you have:

| Formula | Cost base | Worked example | Source |
|---|---|---|---|
| Total revenue ÷ margin $ | Margin after all per-order costs | Buy 1: 43 ÷ 32.50 = 1.32. Buy 2 get 1 free: 83 ÷ 60.30 = 1.38 | [L0986, 2026] |
| Selling price ÷ (selling price − product cost), before fees, shipping and returns | Product cost only | $6 cost, $20 price: 20 ÷ 14 ≈ 1.43 | [L0995, 2023] |
| Selling price ÷ (selling price − product − shipping) | Product plus shipping | $40 price, $20 product plus shipping: 40 ÷ 20 = 2 | [L1217, 2023+] |
| Selling price ÷ (selling price − expenses), where expenses at the start = COGS (supplier price + shipping to customer) | Product plus shipping at the start | $36 price, $12 COGS ($6 product + $6 shipping): 36 ÷ 24 = 1.5 | [L1174, undated] |
| Selling price ÷ gross profit per order, where gross profit is after product cost, fees, shipping and fulfilment | Fully loaded | Not given numerically | [L1182, 2026] |
| Selling price ÷ gross profit per unit (price minus COGS); shipping, transaction fees and ad costs must also be deducted for a realistic value | Product cost, with other costs deducted later | $50 price, $20 COGS: gross profit $30, break-even about 1.67 before other costs | [L1159, 2023+] |
| 1 ÷ gross margin as a fraction | Gross margin | Campaign needing 1.4x-1.5x to break even and reaching about 2x is profitable and suitable for scaling | [L1382, undated] |

- Break-even ROAS in the tracker example = listing price ÷ (listing price − cost of goods) = 150 ÷ (150 − 35) ≈ 1.30. This matches the 76.67% product margin shown in that example [L1354, 2025-26].
- The dropshipping ROAS calculator linked in the course gives the BE ROAS for each product. Enter the result in the BE ROAS column of the product sheet [L1159, 2023+].
- Enter COGS and selling price in the calculator linked from the testing sheet to get the value you must reach to avoid losing money on ads [L1162, undated].
- Before running ads, calculate break-even ROAS from product cost plus shipping and the average selling price competitors use. The dropshiptoolkit.com calculator can do this [L1217, 2023+].
- Example at COGS $4.02 ($2.02 product + $2 shipping to the US) sold at $24.99: break-even ROAS about 1.2, with profit margin of 21 shown by the calculator. The 1.2 was judged a very good result [L1174, undated].
- The same $6-product, $20-price example appears with two values in one source: 1.43 from the formula [L0995, 2023] and "1.5:1" in the lesson text, which notes it differs from another example of 1.1 to 1.11 [L0995, 2023]. Use 1.43 when working from the formula, and reconcile before using either as a hard threshold.
- For near-zero-cost digital products, break-even ROAS was estimated at about 1.02 to 1.05. A ROAS of 1.3 was cited as a profitable target [L1431, 2020+].


Part 7 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/06-break-even-and-target-roas-cpa-and-allowable-ad-sp.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/08-break-even-cpa-and-cost-per-purchase.md
