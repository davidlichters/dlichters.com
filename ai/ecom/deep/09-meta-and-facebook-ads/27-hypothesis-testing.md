<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 27 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/26-diagnosing-performance-metrics-aida-and-benchmarks.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/28-scaling-winning-ad-sets-and-campaigns.md

### Hypothesis Testing

- Ad analysis is educated guessing from incomplete information. Form a hypothesis by interpreting performance data and creative elements, then test it with a variant to validate whether the theory is correct. [L0008, 2023]
- No one fully knows what will work. Even experienced mentors give educated guesses based on inference, meaning conclusions reached from available evidence and reasoning. Piece together data and test the hypothesis rather than relying on certainty. [L0067, 2023]
- Run a control (original ad unchanged) against a variant (one specific change applied). This isolates whether that single change improves performance, so the results measure only that change. [L0008, 2023]
- When hypothesis testing, keep everything constant except the single element you want to test. Keep the existing ad as a control. Run the test for at least 3 days before evaluating. If sales increase, the change likely caused it. [L0067, 2023]

**Full diagnostic procedure**

1. Set up your data with proper custom metrics and column types (snapshot and funnel). [L0008, 2023]
2. Build a complete picture of your ads by reviewing data alongside the actual creative assets. [L0008, 2023]
3. Apply the AIDA framework to identify which stage (attention, interest, desire or action) is underperforming. [L0008, 2023]
4. Conduct a creative review comparing your data to your creative elements. [L0008, 2023]
5. Form an educated hypothesis about what needs to change based on what you found. [L0008, 2023]
6. Test that hypothesis using a control/variant test structure. [L0008, 2023]
7. Evaluate the results and decide whether to implement the change, test a different hypothesis, or move on to a new product. [L0008, 2023]

### Benchmarks by Market and Source

**Where sources disagree:** The sources give different thresholds for the same metric. Each value is kept below with the market or tool it applies to. Use the market's own row, and check every benchmark against your own niche. The T4/T5 values are rough industry averages. [L1259, undated; L1354, 2025-26]

| Metric | Benchmark | Applies to | IDs |
|---|---|---|---|
| Hook rate | 30% or higher as aim; 40% great; 50%+ excellent | General grading of the first 3 seconds | [L0067, 2023] |
| Hook rate | 45 to 60% good; below about 40 to 45% is a problem in the opening seconds | Video creative check. Use this as the flag for weak openings | [L1215, 2023+] |
| CTR | Above 2%, no hard rule | General; depends on product and industry | [L0067, 2023] |
| CTR | At least 1.5 to 2%; about 4% exceptional | Facebook | [L0562, undated] |
| CTR | Outbound at least 1.5% (some sources cite 2 to 3%) | Facebook outbound clicks | [L1212, undated] |
| CTR | About 2% or above | T4 and T5 markets | [L1259, undated; L1260, undated] |
| CTR | About 2%; 1.5% minimum | Winning product on Facebook | [L0774, 2023] |
| CTR | Above 1% is good, usually easy to reach | one source tracker | [L1354, 2025-26] |
| CTR | Below 1%: test a new set of creatives | Diagnostic trigger | [L1259, undated; L1260, undated] |
| CTR | About 2% | German-language Facebook test | [L0694, 2024] |
| CPC | 0.50 to 1.50 USD is a good range | General; higher acceptable if profitable with good ROAS | [L0067, 2023] |
| CPC | Under 1.50 USD is good; under 1 USD is strong or ideal | T4 and T5 markets | [L1259, undated; L1260, undated] |
| CPC | Healthy range $0 to $3; about $1 very good; about $1.80 still fine; $2 to $3 getting high | one source tracker | [L1354, 2025-26] |
| CPC | 0.50 to 0.60 EUR | German-language Facebook test | [L0694, 2024] |
| CPM | Under 30 USD, with CTR about 2% or higher, for a healthy ad set | T4 and T5 markets | [L1259, undated] |
| CPM | About $20 is healthy; around $60, reevaluate the ads and the creatives | one source tracker | [L1354, 2025-26] |
| CPM | Above $25 is somewhat high; $40 or above, close the ad set immediately | Switzerland tests | [L0642, undated] |
| CPM | About 11 to 12 EUR, with CTR and CPM in range meaning delivery is healthy | German-language Facebook test | [L0694, 2024] |
| CPM | New creatives start at 35 to 40, decline to 20 to 23 by day 4 | New creatives, any market | [L0298, 2023] |
| CPM | Examples of 8 to 9 USD and 20 to 30 USD | Two products from testing | [L0502, 2020+] |
| CVR | 2 to 3% | Shopify metrics | [L0067, 2023] |
| CVR | 4% or higher is good | Dropshipping | [L0067, 2023] |
| Frequency | Below about 3 as a guideline | General | [L0510, 2018] |
| Frequency | 1.03 to 1.2 does not rule out fatigue | Large top-of-funnel audiences | [L0398, 2023+] |
| Video retention | At least a quarter of views reach 50% | Creative check | [L1215, 2023+] |
| Acquisition cost | About 10 to 15 USD per order | Example from testing | [L0492, 2023+] |
| Retargeting CTR | 16% (example of a strong signal) | Retargeting audience | [L1083, 2024+] |

**Market definitions**

- T4 = USA, Canada, Australia, UK. T5 = New Zealand. [L1260, undated]
- T4 and T5 (USA, Canada, Australia, UK, and New Zealand for T5) are the markets for the one source CPM and CTR benchmarks. [L1259, undated]

**Reading the benchmarks together**

- CPM and CTR together: a good CTR with a high CPM is a targeting or country problem, and a low CPM with a high CTR is a website problem. [L1216, undated; L1259, undated]
- CPC: a high CPM with a CPC under 1.50 USD means expensive but high-intent traffic. [L1259, undated; L1260, undated]
- If CTR and CPM sit in the German test ranges, ads are being delivered well, and the problem is more likely after the click. [L0694, 2024]


Part 27 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/26-diagnosing-performance-metrics-aida-and-benchmarks.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/28-scaling-winning-ad-sets-and-campaigns.md
