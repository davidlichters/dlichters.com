<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 29 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/28-email-retargeting-and-owned-channel-metrics.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/30-influencer-affiliate-organic-and-content-measureme.md

### Giveaway measurement

- The funnel method was reported to generate about 500,000 leads. This figure is an unverified estimate and was not supported with data. [L0797, 2025-26]
- Facebook ad set results from the example giveaway campaign (values as shown): [L0797, 2025-26]

| Metric | Value |
|---|---|
| Reach | 862,845 |
| Frequency | 2.34 |
| Cost per result | $35.40 |
| Amount spent | $10,832.32 |
| Impressions | 2,017,463 |
| CPM | $5.37 |
| Link clicks | 27,761 |
| CPC | $0.39 |
| CTR | 1.38% |
| Website purchases | 306 |
| AOV | $129.20 |
| Facebook-reported revenue | $39,535.2 |

  Klaviyo results for the same giveaway: [L0797, 2025-26]

| Klaviyo metric | Value |
|---|---|
| Leads | 18,726 |
| Net new sales (30-day window) | 145 |
| Revenue (30-day window) | $16,715.70 |
| Net new sales since giveaway to now | 736 |
| Revenue since giveaway to now | $108,424.26 |

- Facebook reported about $40,000 in revenue for the giveaway ad set, while Klaviyo's 30-day revenue was $16,715.70. Klaviyo's default view undercounts because email-driven purchases arrive with a delay. [L0797, 2025-26]
- Purchases from email flows may not track straight away, so the real revenue from giveaway traffic can be about double what Klaviyo reports by default. Measuring only cold traffic reveals this hidden revenue. [L0797, 2025-26]
- Measuring true giveaway revenue in Klaviyo: [L0797, 2025-26]
  1. Build a segment of people who were added to the giveaway list, filtered by date added.
  2. Keep only people who had not placed an order before the giveaway. This removes past customers already known to the brand.
  3. Keep only people who placed at least one order after entering the giveaway, since non-buyers generate no revenue.
  4. Exclude everyone who appears on the lists of earlier giveaways and campaigns.
  5. Read the revenue and net new sales of this segment, which measure absolute cold traffic.
- When giveaway revenue is measured correctly with cold-traffic segments, return on ad spend is about double the default figure, and cost per purchase is about half. [L0797, 2025-26]
- Return on ad spend from the same spend, two ways: [L0797, 2025-26]
  - Platform-reported ROAS = $39,535.20 ÷ $10,832.32 ≈ 3.65
  - Klaviyo 30-day ROAS = $16,715.70 ÷ $10,832.32 ≈ 1.54
  - Cost per Klaviyo lead = $10,832.32 ÷ 18,726 ≈ $0.58, if every entrant counts as a lead
- Meta counted 306 website purchases, while Klaviyo's 30-day window showed only 145 net new sales, about 47% of the Meta count. Klaviyo revenue since the giveaway ($108,424.26) was about 6.5 times its 30-day revenue ($16,715.70), so the attribution window changes the reported result a lot. [L0797, 2025-26]
- Many advertisers abandon instant giveaway funnels because they only read the default platform numbers and cannot see the real results. Measure revenue through the email platform with a cold-traffic segment before judging the funnel. [L0797, 2025-26]
- Name every giveaway audience list in Klaviyo with country, campaign sequence number, year and product, for example "UK 1 2023 Product Giveaway". Consistent names make it possible to build exclusion segments that remove earlier campaign entrants later. [L0797, 2025-26]

### Owned-channel baselines

- Track baseline numbers for organic traffic in analytics, opt-ins per day or week, remarketing ROAS and units sold, then monitor how they grow over time. These show whether content and email work. [L0941, 2022]


Part 29 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/28-email-retargeting-and-owned-channel-metrics.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/30-influencer-affiliate-organic-and-content-measureme.md
