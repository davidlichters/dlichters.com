<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 1 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/02-ad-types-and-placements.md

## How Google Ads Works and Where It Fits

### Definition and Scope

- Google Ads is a customizable, pay-per-click, self-serve advertising platform. It includes search ads and the Google Display Network, which reaches many internet users beyond search results. [L0013, undated]
- It is a pay-per-placement platform where advertisers bid to show text, banners, videos, product listings or app install promotions. A store owner pays to be seen by people who are already searching for or browsing related products. [L0714, 2020-26]
- Pay-per-click means the advertiser pays each time a user clicks an ad. It is the paid format used for search and shopping campaigns. [L0713, 2021-22]
- Google Ads reaches people who are actively searching for solutions, so it taps existing demand rather than creating awareness. It places you where people are already looking for what you sell. [L0013, undated]
- The core of Google Ads is showing the right ad to the right person at the right time. Getting these three elements right puts an advertiser well ahead of competitors. [L1078, 2020-26]
- Google Ads gives complete cost transparency. You can see how much revenue each campaign generates, which gives you full control of spending and profitability. [L0013, undated]
- Google Ads fits this model because spend per sale is small relative to the product price. It can work for any product, but it is most effective when the product's margin covers the ad budget. [L1111, 2020]

### Channels, Campaign Types and Targeting

- Google Ads serves on three main channels: text search results on Google search, Product Listing Ads (PLA) through your Merchant Center with your Google Shopping data, and the Google Display Network, including YouTube, Gmail and many other sites. [L0020, undated]
- Campaign types include Shopping Campaigns, Search Campaigns, Video Campaigns and campaigns on the Google Display Network. [L0020, undated]
- Eight targeting options are available: keywords for search; website and placement targeting for display; demographics; audience interests and life events; topics; YouTube videos and channels; customer match; and remarketing. [L0020, undated]
- The four Google traffic methods work as one integrated system. Organic search provides free high-intent traffic, product listings add free visibility, shopping ads deliver scalable paid traffic with maximum control, and remarketing recaptures interested visitors who did not convert. [L0163, undated]
- Google Organic Search is free traffic from visitors who click non-paid text search results. Most clicks concentrate on the first page of Google results. [L0163, undated]
- Google Ads is one traffic source among several, never the only one. Once the account is running, the next step is to add other marketing channels. [L1065, 2021-22]
- Google Ads should not be the only channel. Use it as the starting point, get campaigns running and producing results, then add other traffic channels that complement the Google Ads account. [L0713, 2021-22]

### Traffic System Setup Check

Verify that all components of the traffic system are complete and live: [L0168, undated]

1. Google Search Console set up and verified [L0168, undated]
2. Google Merchant Center approved [L0168, undated]
3. Products submitted correctly to Merchant Center [L0168, undated]
4. Shopping ads campaign created [L0168, undated]
5. Remarketing campaign live [L0168, undated]

### The Auction

#### How the Auction Works

- Google Ads runs an auction for every search query. Advertisers place bids to have their ads shown for specific queries, and competing advertisers bid on the same queries at the same time. [L0496, 2021-22]
- The auction decides the order of ads on the results page: which ad appears first, second, third and so on. Ads are ranked for each query individually, so the same advertiser can hold different positions for different queries. [L0496, 2021-22]
- Google decides which search terms your ads are eligible for, based on the product data you supply. [L0739, 2021-22]
- Google's auction is a second-price auction, not a typical auction where the highest bidder pays their own bid. [L0496, 2021-22]

#### Second-Price Logic

- The winning advertiser pays only slightly more than the next competitor's ranking, not the full amount of its own maximum bid. [L0496, 2021-22]
- Standard cost-per-click formula for the second-price auction: [L0496, 2021-22]

```
actual cost per click = (Ad Rank of the advertiser directly below you ÷ your Quality Score) + $0.01
Ad Rank = maximum bid × Quality Score
```

- A higher Quality Score lowers the price you pay for the same position. [L0496, 2021-22]
- Approximate cost per click: Ad Rank of the bidder directly below you ÷ your own Quality Score, plus $0.01. You never pay more than your maximum bid, and the actual price depends on the competitors around you. [L1226, 2020-26]
- Worked example: the bidder with Ad Rank 32 sits below a bidder with Quality Score 10, giving 32 / 10 + $0.01 = $3.21 per click. [L1226, 2020-26]
- Do not assume you pay your full bid per click, as you would at a house or product auction. Your actual cost depends on the competitor below you and your Quality Score, so a high bid with a low Quality Score can still cost more per click than necessary. [L0496, 2021-22]

#### Ad Rank and Position

- Ad Rank = maximum bid × Quality Score. The highest Ad Rank takes the top position, so a bidder with a strong Quality Score can outrank a higher bidder. [L1226, 2020-26]
- Google earns money when people click ads, not when they buy on the advertiser's site. For this reason, it rewards ads that people want to click with a higher Quality Score. [L1226, 2020-26]
- A higher ad position brings more traffic than a lower one, regardless of competitors. A bidder with a well-optimized Quality Score can therefore get more clicks while bidding less than the competition. [L1226, 2020-26]
- Google and Facebook prefer ads that get clicked, so they reward advertisers whose ads perform well with cheaper clicks. Their quality metrics exist to enforce this. [L1031, 2018]
- Google Ads uses Quality Score, Facebook uses Relevance Score, and Amazon also uses a quality score. All three measure how well an ad matches what people want and how often they click it. [L1031, 2018]
- A bidder with a very low Quality Score can have the highest bid and still rank low. A bidder who bids too little with a strong Quality Score can miss the top results entirely. [L1226, 2020-26]
- Ad rank historically combined the bid with a bundle of factors known as Quality Score. A competitor with a higher Quality Score can rank above you with a lower bid, while a lower Quality Score forces you to bid much higher to move up. [L0879, 2021-22]
- Ad rank and Quality Score cannot be measured directly in the Google Ads interface. Any change to them has to be tested and judged from indirect results, because no one knows the exact outcome. [L0879, 2021-22]

#### Worked Auction Example

Worked auction example (bids and Quality Scores as stated in the lesson): [L1226, 2020-26]

| Bidder | Max bid | Quality Score | Ad Rank (bid x QS) | Position |
|---|---|---|---|---|
| Bidder A | $3.75 | 10 | 37.5 | 1 |
| Bidder B | $4.00 | 8 | 32 | 2 |
| Bidder C | $3.45 | 7 | 24.15 | 3 |
| Bidder D | not stated | 6 | not stated | 4 |
| Bidder E | $5.00 | 3 | 15 | 5 |
| Bidder F | $2.50 | 4 | 10 | 6 |
| Bidder G | $1.70 | 5 | 8.50 | not stated |
| Bidder H | $0.50 | high | high | first page |

- Bidder A ranks above Bidder B despite bidding $0.25 less. Bidder E bids the most but ranks fifth because of its very low Quality Score. [L1226, 2020-26]

### Cost Per Click and Click Quality

- A high Quality Score gives discounted clicks. A low Quality Score triggers a penalty that raises the cost per click, so Quality Score changes what you pay, not only where your ad shows. [L1226, 2020-26]
- Quality Score affects ad rank, not only the price paid. In the example, a bidder with the highest bid but a low Quality Score was not shown, while a bidder with a lower bid and the strongest Quality Score took the top position. A high Quality Score lets an advertiser win placement with a smaller bid. [L0510, 2018]
- Moving from a Quality Score of 5 to 6 gave about a 16% CPC discount. Moving from 5 to 7 gave about a 30% discount. [L0510, 2018]
- When Quality Score rises, CPC falls, so an advertiser with a higher score can bid low and still appear first and receive the most clicks. Bidding high is not required to win top placement. [L1031, 2018]
- Shopping ads charge per click. Cost-per-click is lowered when your ad gets a higher click-through rate and visitors stay longer on your site than on competitors' sites. (2023) [L0855, 2023]
- Google evaluates post-click behavior on the store (bounce rate, time on site, add-to-cart, purchase). Strong engagement raises Quality Score and lets ads show more for less, so the conversion tag must be set up for tracking. (2024) [L0666, 2024]
- Shopping ads show the price in the ad, so shoppers who object to the price do not click. This filters out unqualified clicks before they cost money. [L0510, 2018]

### Quality Score

- Quality Score is Google's rating of how relevant your ads and landing pages are to a search query, based on expected click-through rate, ad relevance and landing page experience. It affects both the price you pay per click and how competitive your ad is against others for the same query. [L0496, 2021-22]
- Quality Score in Google Ads is based on how relevant the ad is to the searched term, how often people click it, and whether visitors stay on the landing page instead of leaving immediately. A high score lets an advertiser rank well without outbidding everyone. [L0714, 2020-26]
- Quality Score depends largely on click-through rate, along with landing page quality and site experience. Advertisers with a higher Quality Score compete better in the auction, and at equal bids they usually pay less per click within a certain range. [L0744, 2021-22]
- A slow website can lower Quality Score through the on-page experience factor. Search text ads once showed per-keyword quality breakdowns, but Shopping never has, though the same factors still apply. [L0879, 2021-22]
- Google does not publish the exact Ad Rank or Quality Score factors or their weights. The bid is the main lever for search impression share, while Quality Score factors help make your bid more competitive. Google Shopping uses its own algorithm separate from search. [L0879, 2021-22]
- Google Ads shows Quality Score per keyword with change history. It does not show a Quality Score column for Shopping campaigns. [L0510, 2018]
- Google has no separate advertiser-level Quality Score visible to the advertiser; only the keyword level is displayed. Improving an existing campaign is generally better than creating a new one, because the campaign history and steady spend help the account. [L0510, 2018]

### CTR as the Main Lever

- Google measures whether people like an ad mainly through Click-Through Rate (CTR). A high CTR is the main signal of a clickable ad. [L1226, 2020-26]
- CTR = Clicks ÷ Impressions. A higher CTR increases Quality Score and lowers CPC, so a higher CTR gives cheaper clicks. [L1031, 2018]
- CTR has the largest influence on Quality Score. If your CTR is below the benchmark, you probably have a Quality Score problem. [L1031, 2018]
- Google measures relevance through click-through rate. A low CTR, where people see the ad but do not click, lowers ad rank because Google reads it as weak relevance compared with competitors. [L0879, 2021-22]
- Most paid-traffic problems can be traced back to CTR, so start diagnosis there. [L1031, 2018]
- For Shopping, the two ad types worth optimizing most are ad engagement and Shopping campaign CTR. These are the two levers to address first. [L1031, 2018]
- When an account has high bids but almost no traffic, the usual cause is that the ads are not clickable, not that the bids are too low. Fix ad quality before raising bids. [L1226, 2020-26]
- Raising CTR, which drives Quality Score, is therefore the main lever for cheaper clicks. [L0510, 2018]

### Benchmark CTR for Shopping Campaigns

- Google does not show a Quality Score column for Shopping campaigns. Use the Benchmark CTR, which reflects the average CTR of competing advertisers, to estimate the Shopping Quality Score. [L0510, 2018]
- If your CTR is below the Benchmark CTR, a Quality Score problem is likely and bidding more will not fix it. In the example, the advertiser had a 0.77% CTR against a 0.94% benchmark, so competitors were paying less per click for the same visibility. [L0510, 2018]
- Google shows an ad in more than one position for a query when the ad's CTR is higher than the average for that position. Each position has an average CTR, so an ad that beats its position average gets moved up, which then makes its CTR even higher. [L0510, 2018]

### Funnel Position

#### Funnel Model

- The sales funnel is an inverse pyramid where TOFU (top, awareness stage), MOFU (middle, consideration stage) and BoFU (bottom, buying stage) represent declining audience size but increasing purchase intent. Apply this framework when structuring Google Ads campaigns. [L0023, undated]
- The funnel runs Awareness, Interest, Learn, Shop, Buy. Google Ads works well because its campaigns target people at the bottom of the funnel who are ready to buy. The goal is to reach only those at the Buy stage, not people who are only researching or aware of a product. [L0714, 2020-26]
- Paid traffic works when the right ad reaches the right customer at the right stage of the funnel. Most people at the top are only researching, a larger group is comparing options, and only a small share at the bottom is ready to buy now. [L0720, 2020-26]
- Funnel-aligned spending is more effective and profitable because BoFU audiences have much higher conversion rates and require less budget to generate sales than spending on TOFU awareness audiences. [L0023, undated]
- Intent maps onto the sales funnel. Low-value terms sit at the top, medium at the middle and high at the bottom. Google Shopping and search text ads perform best in the middle and bottom of the funnel, and they perform poorly for high-ticket products at the top. [L0739, 2021-22]

#### Matching Message to Stage

- Match each funnel stage with a different ad message. At the top, reach people who are unaware of the product or the problem with informational content. In the middle, serve people comparing options with webinars, buying guides, comparison guides and detailed video reviews. At the bottom, show direct product ads to people who are ready to buy. [L0720, 2020-26]
- No tool currently matches the right ad to each funnel stage automatically, so audience and ad segmentation by funnel stage has to be planned and set up manually. [L0720, 2020-26]

#### Where Google Sits in the Funnel

- Google Ads is excellent for middle and bottom funnel work, such as retargeting previous visitors, but weak for top funnel because it cannot reach cold audiences unaware of the product. [L0296, 2021+]
- Google is mostly a bottom-of-funnel platform (search and shopping ads triggered by product searches). Top-of-funnel testing should be done on Facebook and TikTok first. Test on Google once the product works with branded content. [L0577, 2023]
- Google Ads cannot interrupt journeys or show new products to cold audiences. It works best where people already search for solutions or have pre-existing intent. [L0296, 2021+]
- Google Shopping works best for middle and bottom of the funnel, meaning shoppers already searching for specific products. It performs poorly for high-ticket businesses at the top of the funnel, and spending heavily on top-of-funnel traffic makes the campaign unprofitable. [L0741, 2021-22]
- Google Ads are strong in the middle and bottom of the funnel but weak at the top. Social media is strong at the top, and YouTube works across the whole funnel. Using them together gives full coverage of the customer journey. [L0414, 2021-22]
- Google is strong for retargeting and for buyers who search for the product. Cold traffic from Google is less scalable than Facebook, because customers must already be searching for the product. Use Google to reach people with search intent rather than to find new audiences. [L0694, 2024]
- Target Google Ads at search queries with a high chance of leading to a sale rather than broad interest. Expensive products should not be pushed to cold audiences on social media in the first phase. [L0713, 2021-22]
- Cold traffic from Google includes Google Shopping, Google display ads, Google search text ads and YouTube ads. [L0414, 2021-22]
- Google and Bing are the main channels for front-end demand on expensive products, since they reach people already searching. Facebook and Instagram are better suited to remarketing. [L0247, 2021]
- Most high-ticket sales come from Google Shopping ads and organic search, because buyers of expensive items use search engines. Social media is not a main channel in this model and is used only for retargeting. [L0771, 2021-22]
- Google Shopping reaches people who are actively searching for a specific product, while social media reaches people who are mostly not ready to buy. For expensive products, this makes search-based traffic more likely to convert. [L0713, 2021-22]


Part 1 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/02-ad-types-and-placements.md
