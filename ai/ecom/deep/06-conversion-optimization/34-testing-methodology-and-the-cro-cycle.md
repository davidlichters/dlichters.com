<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 34 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/33-site-speed-mobile-and-technical-hygiene.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/35-test-ideas-list.md

## Testing methodology and the CRO cycle

### When to test and what to expect

- Do not recommend A/B testing by default when the brand likely lacks enough traffic. Label obvious, low-risk changes as a "fix" rather than a "test" [L0886, 2025-26].
- In the first audit output, hero positioning, risk reversal and comparison modules should each be labeled a test only when traffic supports it. Otherwise, label them fixes [L0886, 2025-26].
- Low-traffic stores can run fewer tests at once [L0572, 2014].
- Do not run A/B tests with very small traffic. Splitting 20 sales into 10 and 10 gives results that are not statistically reliable. Beginners should skip formal testing at this stage and fix obvious problems first [L0390, 2019].
- Results from low-traffic stores have low statistical significance and should be treated with caution. Large platforms such as Amazon test nearly everything, but a small store should test as often as its traffic allows and should not overread small differences [L1077, undated].
- Conversion rate optimization tests need enough traffic for a statistically reliable sample. With low traffic, such as outside peak season, a clear winner can still appear, but small differences are not trustworthy and should not be acted on [L0999, 2023].
- A large change, such as 40 percent, can be acted on even with limited data. A 2 percent change is too small to trust [L0999, 2023].
- Low daily spend produces unreliable A/B results. With low traffic, duplicate the product page and product, then send separate traffic to each [L0524, 2023].
- Social proof and other conversion tactics should be tested once steady traffic arrives, so the page can be measured accurately [L1077, undated].
- Avoid site-wide changes such as theme swaps during the first two to four weeks of running ads. Wait until a product page has a few hundred unique visitors before optimizing it, so you can tell what caused a change in conversion rate [L0803, 2022].
- Do not change a checkout that still produces a good return on ad spend. If a test is needed, change one element at a time [L0963, 2022].
- Conversion testing is a long-term process that needs time and learning, not a single app install. A small gain, such as moving from about 3% to 3.5% conversion, can represent a meaningful amount of money [L0390, 2019].
- A realistic yield is about 8 tests per year. Of those, typically around 3 are confirmed as improvements. In the other cases, the current version was already the best option [L0390, 2019; L0423, 2019].
- Best practices such as button color are not universal. The right choice depends on the business, audience and website, so test the option in your own store rather than copying others [L0390, 2019].
- Conversion tests on real results can show gains of about 0.5 to 1 percent across more than 50 test variations [L1218, undated].

### Research and hypotheses

- Good hypotheses come from real signals, such as customer feedback about something missing on a page, or a comparison of your unique selling proposition against competitors. Each hypothesis should name the exact problem it addresses [L1364, 2021-22].
- Each hypothesis should be based on data or customer feedback collected so far [L0390, 2019].
- Test a specific hypothesis about one change, for example "a bigger add-to-cart button will increase sales", instead of a broad goal such as "more sales" [L0390, 2019].
- Use this template to write each hypothesis:

```
Hypothesis: If I change [specific element on a specific page], then [named metric, such as conversion rate or add-to-cart clicks] will [increase or decrease] because [customer reason based on feedback or data]. Write it down before the test starts so it can be checked against the result afterwards.
```
[L1364, 2021-22]

- Each test needs a reason, so do not test changes without a basis. If you already have the lowest price in your market, testing a further price cut has little reason. Testing a price increase that keeps conversion stable can be worthwhile [L1364, 2021-22].
- Research step before a test:
  1. Collect the customer feedback behind the hypothesis.
  2. List the options for fixing the gap.
  3. Pull the current performance of the page for the same time period the test will run.
  4. Break that data down by traffic type, device type and demographics in Google Analytics.
  [L1364, 2021-22]
- Session recordings (Lucky Orange or similar) show where customers drop off and what changes are needed [L0321, undated].
- Turn every insight from a page review into a conversion test. Change the flagged element, run the test and check whether results improve. Keep the six-factor checklist next to the workspace and run it for each page reviewed [L0473, 2021-22].

### The CRO cycle

- Run the CRO cycle in this order [L1364, 2021-22]:
  1. Form a hypothesis.
  2. Research it using customer feedback and current performance data.
  3. Document the planned test.
  4. Run the test.
  5. Document the results using the same metrics as the baseline.
  6. Analyze the results and write down the insight.
  7. Use the insight to form the next hypothesis and repeat the cycle.
  [L1364, 2021-22]
- Write down ideas for future conversion tests in a tracking system before running any test. This keeps testing organized and makes clear what is planned, running and finished [L0399, 2021-22].

### Choosing the test type

- **A/B test:** Change one element and split traffic 50/50 between version A and version B, then implement the better version [L0390, 2019].
- **Split test:** Compares two fundamentally different designs or page structures instead of one small detail [L0390, 2019].
- **Split test for solutions:** Compares two distinct solutions, such as two brand or product options, to see which performs better [L423.008].
- **A/B testing (concept):** Tests one element with two versions to check one specific hypothesis. Example: whether moving the add-to-cart button higher on the product page increases conversions [L423.007].
- **ABC test:** Checks one hypothesis against three potential solutions, with traffic split across all variants. Example: which of three positions for a call-to-action button converts best [L390.009, L423.009].
- **Multivariate test:** Combines several elements, such as 3 button sizes and 3 copy options, which gives 9 combinations and requires a much larger sample size. It is the most complicated method [L390.009, L423.010].
- Note on the multivariate example: the unit's own example gives 9 combinations for 3 options and 2 variants. The stated rule (options multiplied by variants) gives 6 for those numbers. Check the count before using it [L423.010].
- **Simultaneous split (A/B), preferred:** Show both versions at the same time to split traffic evenly. Comparing a page before and after a change can give false conclusions because of differences in weekday mix and traffic sources [L1364, 2021-22].
- **Consecutive test:** Compares a fixed period before a change with a period after it, such as two four-week blocks. It is simpler to run but more exposed to other changes, so it is weaker than a split test, though still better than no testing [L1364, 2021-22].
- **Consecutive procedure:**
  1. Pick one element to test, such as a bonus offer or the button text.
  2. Run version A for one week with enough traffic.
  3. Run version B the following week and compare the results.
  Use this only when enough visitors come in, because time-based testing is less reliable [L356.042].
- **Page-builder split test:** Changes the content on the same URL and shows each variation to about 50 percent of visitors, instead of splitting URLs. Typical test items are offers, bonus items and button text [L356.043].
- Setting up a simultaneous A/B test [L1364, 2021-22]:
  1. Create two identical versions of the page.
  2. Make only the planned change in one version.
  3. Use a tool that alternates visitors evenly between the two versions.
  4. Collect and compare the results for both versions at the end.
- Use the tool to test a new Shopify theme against the current one before all traffic switches over. This shows whether the new theme converts better or worse first [L1364, 2021-22].

### Keeping variables isolated

- Test one single change at a time on a page, so any difference in results can be traced to that change. Testing several changes together makes results confusing [L1364, 2021-22].
- Test one variable at a time. For example, test an offer by keeping the same creative and audience, then compare the conversion rate to the existing one [L1315, 2023].
- When the target audience and angle are known, test one page element at a time. For example, test the headline first for about five days, then the product pictures, then the brag bar. Changing several elements at once makes results hard to attribute [L387.014].
- Test several different marketing angles together only when the audiences and angles are truly different. Example: gaming, home decor and a therapeutic angle for the same product, to show which audience converts best without separate ads [L387.013, L387.014].
- Group small changes into one concept when they belong to the same part of a page, such as the area around the add-to-cart button. Testing every combination of small elements one by one can take six months or more, which is too slow [L1364, 2021-22].
- Example: If a product page has four elements around the add-to-cart button that may distract buyers, remove them together as one concept test. If the concept wins, refine it later rather than testing each element alone [L1364, 2021-22].
- Never run two concept tests on the same page at the same time, for example a change to the add-to-cart area and a change to the product description. Concepts can run in parallel on different pages [L1364, 2021-22].
- Stores with many product pages can run many tests at once, one per page. Stores selling one or two products have fewer pages to test in parallel, so testing is slower [L1364, 2021-22].
- Verify that each variant is delivered correctly before reading the data. Split testing is technically demanding, and setup errors can easily invalidate results [L423.013].
- Changing the price of the live store in Shopify is less reliable than split testing, because it compares two periods rather than two groups at the same time. Use split testing for prices [L999.067].

### Setting up split tests and tools

- **Google Optimize, how it works:** Turns one landing page URL into a single link that distributes visitors across several landing page variants according to set weights. Google reports how each variant performs [L387.010].
- **Weights:** With three variants use 33 percent each. With two variants use 50 percent each. Any uneven split can be set to favor one variant [L387.011].
- **Google Optimize setup procedure (historic; the method still works with another tool):**
  1. Create the page variants, one per angle or version you want to test.
  2. Open Google Optimize and set up a split test (A/B test).
  3. Add the variants and set the traffic weights (e.g., 33/33/33 for three variants, 50/50 for two).
  4. Copy the generated link and use it in ads, bio or organic posts.
  5. Read the performance data per variant to see which one converts best.
  [L387.012]
- Google Optimize was shut down in September 2023, so it can no longer be used for weighted landing page split tests. The method still works with another split-testing tool: one link distributes visitors across several page variants by set weights, and results are compared per variant [L387.032].
- Current tool: since Google Optimize was discontinued in 2023, use a current A/B testing tool for this procedure [L1260, undated]:
  1. After optimizing the landing page, collect another 200 to 300 visitors and measure the funnel again.
  2. For a split test, send traffic 50/50 to two page versions, or 33/33/33 to three versions.
  3. Use a current A/B testing tool for this, since Google Optimize was discontinued in 2023.
  [L1260, undated]
- Historic procedure: Google Optimize (historic tool) can divert traffic 50/50 or 33/33/33 across three landing page variants. Check results after another 200 to 300 visitors [L1259, undated].

**Tools overview**

| Tool | Status and notes | Ids |
|---|---|---|
| Google Optimize | Shut down September 2023. Recommended as an A/B tool connected to Google Analytics in 2021-22 | [L0387, 2022; L0399, 2021-22] |
| Neat A/B testing (Shopify) | Alternative to Google Optimize on Shopify. Can run alongside another tool and compare, or pick one | [L0399, 2021-22] |
| VWO (Visual Website Optimizer) | Reported at about 5,000 USD per year after an acquisition. Pays off only at high sales volume. Check app store alternatives first | [L0356, 2019] |
| Google Optimize on Shopify (PageFly) | Install the Google Optimize snippet after the PageFly page builder loader so it can replace page elements for testing. Used to test headlines on an advertorial page | [L0999, 2023] |
| GrowthBook | Open-source A/B testing tool, presented as an option since Google Optimize is being discontinued | [L0709, 2017+] |
| Kaching Cart | "Create A/B test" section in the left menu for cart variants. Analytics compare variants by visitors, AOV, added revenue (Add. rev), total revenue and revenue per visitor (Rev/visitor). Finished tests are kept in an A/B test archive | [L0560, 2026] |
| Visually | Test names must include device, scope, element and change (see documentation section) | [L0389, 2025-26] |

- Any split test approach: the tool is not the test. Testing is the way to measure which page changes improve results [L709.029].

### Sample size, duration and significance

**Sample thresholds (sources disagree; each applies in its own context)**

| Threshold | Value | When it applies | Ids |
|---|---|---|---|
| Benchmark per version | About 10 samples per version. Results from smaller samples are unreliable | General benchmark | L423.012 |
| Meaningful A/B result | At least 1,000 samples per variant. In a 50/50 split this is 2,000 total recipients or visitors in the funnel, not 500 per variant | one source 2025-26 | L570.001 |
| Start testing offers and page elements | 150 to 200 unique sessions, with session recordings to find drop-offs | one source | L321.011 |
| Judge a landing page change | About 200 landing page visitors, judged by add-to-cart rate | one source; ads are judged by CTR and CPC instead | L871.028 |
| Measure after a landing page change | Another 200 to 300 visitors | one source | [L1345, 2021+; L1259, undated; L1260, undated] |
| Conversions in a test | One or two conversions are not a valid result. More are always better | one source 2021-22 | [L1364, 2021-22] |

- Sample at 1,000 per variant: a result can reverse once more data arrives. Small samples produce unstable winners, and the confidence score rises as the sample grows [L570.002].
- Declaring a winner after only 1,000 samples per variant risks choosing a version that loses once more data is collected. Wait for a larger sample before acting [L570.012].
- Low-traffic tests must run longer to collect enough conversions [L1364, 2021-22].
- Judge a test by whether the result is statistically significant, not by a rough impression. If there is no significant increase, the element may not have been a real problem. Keep the current version or test a different option [L1364, 2021-22].
- A/B tests need a large amount of traffic to reach statistical significance [L524.043].

**Duration (sources disagree; each applies in its own context)**

| Rule | Value | When it applies | Ids |
|---|---|---|---|
| Minimum test length | At least four weeks, longer if traffic is low | one source 2021-22 | [L1364, 2021-22] |
| Typical conversion test | Four to six weeks | Most online store tests | [L1364, 2021-22] |
| Low-traffic or no-history products | About eight weeks | Products with little traffic or no sales history | [L1364, 2021-22] |
| Idea to statistically relevant A/B result | About 6 weeks, so about 8 tests per year | one source | L390.010 |
| Realistic pace per test | About 1.5 months, so about 8 hypotheses per year | one source | L423.014 |
| Fixed period per change | Two weeks | one source; pre-purchase return option test uses about two weeks | L410.011, L955.054 |
| Two landing pages for different buyer intents | About 10 days, then pick the winning page | one source 2025-26 | [L1225, 2025] |
| Consecutive test | One week per version | one source 2019 | L356.042 |
| Campaign-level test | About three days of normal conversion campaign | one source | [L1217, 2023+] |
| Ad campaigns | Do not turn off after 1 or 2 days unless performance is extremely poor. Analyze around day 3, because early data is incomplete | one source | L280.015 |

- Stop a test that shows no result after four weeks. Record it as not working and move to the next test idea. Do not keep it running indefinitely without signs of a result [L1364, 2021-22].
- Products with little traffic or no sales history can need about eight weeks [L1364, 2021-22].

**Significance and what counts as a win**

- A test counts as winning if it shows a positive improvement toward the stated hypothesis. A test with no change or a result going backwards counts as failed or inconclusive [L1364, 2021-22].
- Use both checks: a winning test shows a positive improvement toward the hypothesis [L1364, 2021-22], and the result must be statistically significant to be trusted [L1364, 2021-22].
- A test that shows no gain or a loss still has value, because it shows the hypothesis was wrong or incomplete [L1364, 2021-22].
- A small change of about 1 to 2 percent is too small to trust [L999.022].

**Traffic changes during a test**

- During a CRO test, avoid big changes to traffic, such as launching several new Google Shopping campaigns that send new traffic to the tested pages. Traffic changes make results useless because the conversion change can no longer be attributed to the page change [L1364, 2021-22].
- Traffic targeting is cited as a large share of conversion outcomes, roughly 40% in the course framework. Natural shifts, such as growing organic search traffic and small pay-per-click adjustments, can be accepted without stopping the test [L1364, 2021-22].

### Testing ads, offers and landing pages

**Ad creatives**

- Test at least 3 different ad creatives for each product. Do not test fewer than 3 [L0280, undated].
- Allocate a minimum of $5 per day per creative. The ideal budget is $5 to $10 per day per creative, so $15 to $30 daily for 3 creatives [L0280, undated].
- Judge the landing page by its add-to-cart rate and judge creatives by CTR and CPC, so each asset is optimized on the metric that matches it [L871.028].
- Testing optimization priority:
  1. Find the creative with a high CTR (1%+ on Facebook, high engagement rate on TikTok). This proves the ad is getting attention.
  2. Once the creative is locked, test offer variations (discount level, bundle structure, bundle price) to find the highest converter.
  Do not optimize both at the same time. Isolate variables [L307.028].

**Offers**

- If testing different offers, maintain consistency first. Do not increase price mid-campaign because sales slowed. Lower the price back to the consistency baseline. Test one variable at a time. Kill offers that do not work. Keep and duplicate what works [L308.030].
- Test campaign-level variants [L1217, 2023+]:
  1. Run a normal conversion campaign for about three days.
  2. Send one group of traffic to a collection page where each variant has its own listing.
  3. Send the other group of traffic to a single listing that holds all variants.
  4. Compare the results and keep the setup that performs better.
  5. Use a total test budget of about 20-50 USD.
  [L1217, 2023+]

**Landing pages**

- Build two landing pages for different buyer intents, such as a pre-selected starter kit and a full build-out. Send the campaigns to both pages. After about 10 days, see which page converts. Lean into the winning angle before testing gender-based angles [L1225, 2025].
- Test the five first-view elements [L916.023]:
  1. Create a version of the page with three features or elements in the first view.
  2. Create a second version with five features or elements in the first view.
  3. Run both versions in an A/B test and measure the conversion rate of each version.
  4. Keep the version with the higher conversion rate.
  [L916.023]
- Test a GIF against a static image on the product page. The GIF may not convert better, so test it instead of assuming it works [L1194, undated].


Part 34 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/33-site-speed-mobile-and-technical-hygiene.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/35-test-ideas-list.md
