<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 32 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/31-decisions-on-products-without-sales.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/33-campaign-segmentation-tiers-and-scaling-structure.md

### Automated and enhanced bidding

| Situation | Approach | IDs |
|---|---|---|
| New accounts or campaigns being built | Manual CPC | [L0971, 2024], [L1279, 2021], [L1094, 2023], [L1092, 2022] |
| Stable history and consistent conversions | Enhanced CPC, only on those campaigns | [L1112, 2021], [L0967, 2020] |
| Reducing manual work while holding ROAS | Automated bidding as the main lever | [L1033, 2019] |

- Manual CPC bidding is preferred over Google's automated or AI bidding for Shopping campaigns, because automated bidding tends to charge more than the required amount. Keep manual control of the bids while the campaigns are being built. [L0971, 2024]
- Automated bidding is the main lever for reducing manual work while keeping ROAS high. This source contrasts with the advice above, which keeps manual control while campaigns are being built. Use automation once data is stable, and keep manual control while building. [L1033, 2019]
- Do not switch the campaigns to the fully automated bid strategy that Google recommends after enhanced bidding is discontinued. Keep manual CPC-based bidding. [L1094, 2023]
- Manual bidding gives more control than enhanced CPC. Switch back to manual if sales dropped after enhanced CPC was enabled, and compare which products earned the first sales with where the budget is going now. [L0853, 2021]
- Manual bidding gives more control. Switching to a target ROAS with a larger budget often changes results unpredictably, so keeping manual control is preferred for alpha and beta campaigns. [L1092, 2022]
- ** Enhanced max CPC should only be used once a campaign has many conversions. A rep's guideline was about 50 conversions per week, so it is almost never used early on. [L0967, 2020]
- ** Enable Enhanced CPC only on campaigns that already have a stable history and consistent conversions. Turning it on everywhere at once makes the budget run out much faster. [L1112, 2021]
- ** Do not enable Enhanced CPC on new accounts. Google does not have enough data and will overspend on random keywords and triggers. [L1279, 2021]
- ** Manual CPC bidding was still available in Google Ads, so manual CPC remained a valid strategy despite reports of its removal. Monitor changes Google announces before adjusting structure. [L1090, 2021]

### Keyword estimates, benchmarks and competitive position

- Pre-launch average cost-per-click figures from keyword research tools do not predict what an alpha campaign will pay, because you do not bid on generic keywords. Use the cost data from your own campaign dashboard after the ads start running. [L0961, 2020]
- ** Do not use the niche research tool's data to estimate CPC. Its data is based on search text ads that are not run for niche keywords. [L0963, 2022]
- ** Legal and malpractice-type search terms can carry estimated cost-per-clicks around $80, but these figures do not apply to product listing ads in the same niche. [L1086, 2019]
- Keywords for products sold by one or two small craftspeople usually cost less on Google Shopping than keywords for the top brands, because there is less competition for the same searches. [L1125, 2020-26]
- ** In Google Shopping, most shoppers click one of the top three listings, so an identical offer ranked fourth gets few clicks. Moving up requires higher bids or an offer that stands out from competitors, not a higher listed price. [L1109, 2018]
- ** Search the product as a customer on Google, compare competitor prices, look for MAP violations and compare offers such as free shipping, and check where your listing appears among the competing stores. If pricing and offers are competitive, make a small bid adjustment to move your listing higher. [L1275, 2019]

Diagnosis from the Benchmark column: if the average CPC is well below the Benchmark max CPC, but click share and search impression share are low and search impression share lost due to rank is high, the bids are too low and should be raised. For example, a CPC of about $0.30 against a $0.91 benchmark with 16% click share, 34% search impression share and 65% of impressions lost to rank points to raising bids. If the cost per click already looks too high to raise bids, the likely problem is the conversion rate, so bad keywords and search terms should be removed and the website optimised. [L1341, 2020-26]

Where sources differ: the Benchmark column is not used to set bids. It is used only as a diagnostic signal, to compare your CPC and share of impressions with what competitors pay. [L0750, 2020-26; L1341, 2020-26]

### Tools and reviewing search terms

- ** Procedure to review search terms and set negatives: review search terms to see where spend goes; add negative keywords to the alpha and beta campaigns; check impressions and click-through rate for products; raise the target CPC for products worth more spend, and lower it for those that should get less. [L1279, 2021]
- Adjust a product's bid in the product groups view by editing the CPC box. Work from the product group level, not the campaign level. [L1279, 2021]
- Keep the CPC changes and their dates in a log, so each step can be judged after its wait period. [L0853, 2021; L0837, 2025]

### Plain CPC Campaigns

- Plain CPC (pay-per-click) campaigns bring traffic but do not optimize return on ad spend. [L1508, 2022+]
- Plain CPC is therefore not the best way to start with a small budget. [L1508, 2022+]

### When to Use CPC

- CPC is better used later, when scaling a product that already performs. [L1508, 2022+]

#### Further details

- Once a conversion rate is established, it shows how far bids can be raised or lowered to hit the target cost per sale and target ROAS. Bids are adjusted in whichever direction brings the cost per sale to target. [L0744, 2021-22]

- Target bid from revenue per click: Target bid = Revenue per click ÷ target ROAS. Example: a product with revenue per click of 15.5 and target ROAS 6 gives a target bid of about $2.59. A product with revenue per click of 0.8 and target ROAS 6 gives a bid of about $0.13. [L0745, 2020-26]


Part 32 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/31-decisions-on-products-without-sales.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/33-campaign-segmentation-tiers-and-scaling-structure.md
