<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 35 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/34-testing-methodology-and-the-cro-cycle.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/36-prioritizing-and-running-the-optimization-plan.md

### Test ideas list

**Standing list**

- Build a standing list of test ideas covering offers, page structure and product page content. Add ideas as they come up. Start tracking tests from the beginning rather than postponing it [L1364, 2021-22].

**Product page**

- Headlines: Run split tests on different headlines for the same product and compare time on page and conversion rate. Other copy elements can be tested the same way. Headlines should not be written once and never revisited [L0416, 2021-22].
- Advertorial headlines: A headline test can show which headline grabs the most attention, for example a "10 reasons why" headline on a list-style advertorial followed by a sales page [L0999, 2023].
- Testable page elements include product descriptions, product titles, product images, opt-in forms, product prices where pricing can be changed, collection page content, blog page layout, homepage layout and entire theme versions [L1364, 2021-22].
- Product image emphasis: The three elements with the largest effect on conversion to test are images, headlines and colors. Focus tests on these before smaller changes [L570.008].
- Customer reviews moved directly above the add-to-cart button: a testable concept. A suitable hypothesis is that this raises add-to-cart clicks and conversion rate, because shoppers see social proof at the moment they decide to buy [L1364, 2021-22].
- Product page USP: A product page USP test can run for one month. Record the baseline beforehand and run no other test on that page during that month. If the new USP shows no significant gain, or converts worse than the original USP on the same page, the original is judged stronger, and the result is still recorded as an insight [L1364, 2021-22].
- Button placement: Testing a button higher on the page is an example of A/B testing one element [L423.007].
- Button color: Not universal; test in your own store [L390.007].
- Product page layouts: Measure conversion rate after each layout change to see whether the new layout works [L1164, 2026].
- Ebook cover designs: Test several cover designs for the same product to see which converts best, instead of committing to the first cover. Change only the cover between tests [L513.042].
- Trust elements such as star ratings: Test one position at a time, for example lower on the page, directly under the product name, or next to the price. Keep the placement that converts best, because differences from a single element can be measurable [L1218, undated].
- Social proof and page improvements: test once steady traffic arrives [L1077, undated].

**Homepage and first view**

- Testing ideas for the first audit output: hero positioning, risk reversal and comparison modules. Label each as a test only when traffic supports it, otherwise as a fix [L886.021].
- Five first-view elements: see the procedure in the section on ads, offers and landing pages [L916.023].

**Offers, pricing and pop-ups**

- Discount values: A 5% discount is only a starting point. Edit the expiring coupon section over time and compare results, since 5% is not a proven best value [L1192, 2020-26].
- Opt-in pop-up offers: Compare a pop-up offering 15% off the first order with one offering a free set of examples. The winning version is the one that earns more money, which can differ from the one with more sign-ups [L572.011].
- Price changes: Testing a price increase that keeps conversion stable can be worthwhile. Testing a further price cut has little reason if you already have the lowest price in your market [L1364, 2021-22].
- Pre-purchase return option (procedure) [L955.054]:
  1. Split incoming shoppers 50/50 and show the pre-purchase return option to only one group.
  2. Keep the other group on a normal cart and checkout with no return option.
  3. Run the test for about two weeks, recording checkout conversion, cart abandonment and AOV for both groups.
  4. If the option group does not lose conversion and AOV rises, test two fee levels such as $2.99 and $3.99 and compare uptake.
  5. Roll out the fee that gives the best uptake without a drop in conversion.
  [L955.054]
- Postage-paid reply cards or envelopes: Test with and without them before you commit. The author found they rarely improve response enough to justify the cost [L1370, undated].

**Cart and checkout**

- Do not change a checkout that still produces a good return on ad spend [L963.058].
- Exit-intent offer: Example of a candidate test to log as an idea. Replace an exit-intent offer of a percent-off discount code with a short product-finder quiz that routes visitors to the product type that suits them. Writing the idea into the changelog before testing it means it can be found again later, so it is not forgotten or retested blindly [L410.013].

**Price testing**

- Use split testing for prices, not live price changes in Shopify [L999.067].

### Analysis and deciding the winner

- Analysis after a test [L1364, 2021-22]:
  1. Record the outcomes for the test period using the same metrics as the original baseline.
  2. Ask what changed and what it means.
  3. Ask what the result implies for the rest of the business and for future tests.
  4. Decide the next step: a new test, a refined version of the winner, or a move to another page element.
  [L1364, 2021-22]
- Customer feedback that appears during the test is part of the result and can form a new hypothesis, such as the idea being right but the execution being wrong [L1364, 2021-22].
- Decisions should wait for more data where possible, because the confidence score rises as the sample grows [L570.002].
- For sales-based tests, the winner is the variant that earns more money, which can differ from the one with more sign-ups [L572.011].
- Expected outcome: changing landing page elements based on testing produced conversion differences of about 0.5 to 1 percent across more than 50 test variations [L1218, undated].

### Documentation, changelogs and naming

- Making unrecorded site changes on impulse makes it impossible to tell later whether a change helped, hurt or did nothing. Every change should be planned, recorded before it goes live and measured [L1364, 2021-22].
- Document each test before it starts, covering [L1364, 2021-22]:
  - what is being tested,
  - The details of the change,
  - how the test will be implemented,
  - The baseline performance,
  - The planned start and end dates,
  - The duration.

  Keep the record in the same place as the results. [L1364, 2021-22]
- Store every test record for as long as the business runs, not only until the test ends. Old records prevent repeating a failed test and can later inspire a modified test with new insight [L1364, 2021-22].
- Changelog: Change tests every one to two weeks is a typical rhythm for active store owners, so a changelog becomes necessary early on. Log each change with its date and platform so that the many simultaneous tweaks can be separated later [L410.012].
- Test naming: Name every Visually test with its device, scope, element and change, for example "mobile, site-wide, promo bar, text color" or "mobile BDP social proof". Clear names make the test report readable when several experiments run at the same time [L389.026].

### Ongoing cadence

- After a win is achieved and deployed, keep testing. Continue testing different recommendation ranking logic, design variations and customer segments to find further improvements beyond the initial test [L197.024].
- Test conversion changes one at a time and expect a result over a fixed period, such as two weeks. Run each change long enough to measure a clear result before adding the next change, so the cause of any sales movement is identifiable [L410.011].
- Change tests every one to two weeks is a typical rhythm for active store owners [L410.012].
- Plan testing as a long-term effort. A realistic pace is about 1.5 months per test, which allows roughly 8 hypotheses over one year [L423.014].
- Of about 8 hypotheses tested per year, typically around 3 are confirmed as improvements [L390.011].
- Stores with many product pages can run many tests at once, one per page [L1364, 2021-22].
- Never run two concept tests on the same page at the same time [L1364, 2021-22].
- Do not change traffic sources during a test. Accept natural shifts only [L1364, 2021-22].
- Do not run A/B tests with very small traffic. Focus on fixing obvious problems first [L390.012].
- Keep a standing list of test ideas and add to it as they come up [L1364, 2021-22].

#### Further details

- A/B testing should be iterative and ongoing: after a win is achieved and deployed, continue testing different recommendation ranking logic, design variations, and customer segments to identify further improvements beyond the initial test. [L0197, 2025-26]

- Do not turn off ad campaigns after 1 or 2 days unless performance is extremely poor; analyze performance around day 3, not before, because early data is incomplete. [L0280, undated]

- Testing optimization priority: (1) Find creative with high CTR (1%+ on Facebook, high engagement rate on TikTok), this proves ad is getting attention. (2) Once creative is locked, test offer variations (discount level, bundle structure, bundle price) to find highest converter. Don't optimize both simultaneously, isolate variables. [L0307, 2023+]

- If testing different offers, maintain consistency first. Don't increase price mid-campaign because sales slowed-lower the price back to consistency baseline. Test one variable at a time. Kill offers that don't work; keep and duplicate what works. [L0308, 2023]

- 1. Pick one element to test, such as a bonus offer or the button text. 2. Run version A for one week with enough traffic. 3. Run version B the following week and compare the results. Use this only when enough visitors come in, because time-based testing is less reliable. [L0356, 2019]

- Page-builder based split testing changes the content on the same URL and shows each variation to about 50 percent of visitors, instead of splitting URLs. Typical test items are offers, bonus items, and button text. [L0356, 2019]

- In Google Optimize, the weights of the variants determine the share of traffic each receives. With three variants use 33 percent each; with two variants use 50 percent each; any uneven split can be set to favor one variant. [L0387, 2022]

Set up a split test in Google Optimize:
1. Create the page variants, one per angle or version you want to test.
2. Open Google Optimize and set up a split test (A/B test).
3. Add the variants and set the traffic weights (e.g., 33/33/33 for three variants, 50/50 for two).
4. Copy the generated link and use it in ads, bio, or organic posts.
5. Read the performance data per variant to see which one converts best.
[L0387, 2022]

- Testing completely different marketing angles in one split test (for example gaming, home decor, and a therapeutic angle for the same product) shows which audience converts best, without needing separate ads for each angle. [L0387, 2022]

- When the target audience and angle are already known, test one element of the landing page at a time (for example the headline first for about five days, then the product pictures, then the brag bar), because changing several elements at once makes results hard to attribute. Only test multiple different angles together when the audiences and angles are truly different. [L0387, 2022]

- ABC testing adds a third or further variant of the same element, for example three possible positions for the add-to-cart button, with traffic split across all variants. Multivariate testing combines several elements, such as 3 button sizes and 3 copy options, which means 9 combinations and a much larger sample size. [L0390, 2019]

- Test conversion changes one at a time and expect a result over a fixed period, such as two weeks. Run changes long enough to measure a clear result before adding the next change, so the cause of any sales movement is identifiable. [L0410, 2020-26]

- Change tests every one to two weeks is a typical rhythm for active store owners, so a changelog becomes necessary early on. Log each change with its date and platform so that the many simultaneous tweaks can be separated later. [L0410, 2020-26]

- A candidate test worth logging as an idea is replacing an exit-intent offer of a percent-off discount code with a short product-finder quiz that routes visitors to the product type that suits them. Writing the idea into the changelog before testing it means it can be found again later, so it is not forgotten or retested blindly. [L0410, 2020-26]

- A/B testing compares two versions of one element to check one specific hypothesis. For example, you could test whether moving the add-to-cart button higher on the product page increases conversions. [L0423, 2019]

- Split testing compares two distinct solutions against each other to see which performs better. For example, two different brand or product options can be shown to visitors to find the stronger one. [L0423, 2019]

- A/B/C testing checks one hypothesis against three potential solutions. For example, it can show which of three positions for a call-to-action button converts best. [L0423, 2019]

- Multivariate testing examines a complex hypothesis that combines several variables, which makes it the most complicated method. The number of combinations equals options multiplied by variants: 3 options for 2 variants gives 9 combinations, and 3 size options with 3 copy options gives 9 combinations for one call-to-action. [L0423, 2019]

- Each version in a test needs a sufficient sample, with the benchmark being about 10 samples per version. Results from smaller samples are unreliable. [L0423, 2019]

- Running split tests is technically demanding, so setup errors can easily invalidate results. Verify that each variant is delivered correctly before reading the data. [L0423, 2019]

- Test several ebook cover designs for the same product to see which one converts best, instead of committing to the first cover. Change only the cover between tests so the result shows which design performs. [L0513, undated]

- For an A/B test, aim for at least 1,000 samples per variant before treating the result as meaningful. In a 50/50 split this means 2,000 total recipients or visitors in the funnel, not 500 per variant. [L0570, 2026]

- A result at 1,000 samples per variant can reverse once more data arrives, because small samples produce unstable winners. The confidence score rises as the sample grows, so decisions should wait for more data where possible. [L0570, 2026]

- The three elements with the largest effect on conversion to test are images, headlines and colors. Focus tests on these before smaller changes. [L0570, 2026]

- Declaring a winner after only 1,000 samples per variant risks choosing a version that loses once more data is collected. Wait for a larger sample before acting on a result. [L0570, 2026]

- Split testing compares two versions of one element, such as an opt-in pop-up offering 15% off the first order versus one offering a free set of examples. The winning version is the one that earns more money, which can differ from the one with more sign-ups. [L0572, 2014]

- Judge the landing page by its add-to-cart rate and judge creatives by CTR and CPC, so each asset is optimized on the metric that matches it. Use a sample of about 200 landing page visitors before judging a change. [L0871, 2021+]

Test the five first-view elements:
1. Create a version of the page with three features or elements in the first view.
2. Create a second version with five features or elements in the first view.
3. Run both versions in an A/B test and measure the conversion rate of each version.
4. Keep the version with the higher conversion rate.
[L0916, 2022+]

- 1. Split incoming shoppers 50/50 and show the pre-purchase return option to only one group. 2. Keep the other group on a normal cart and checkout with no return option. 3. Run the test for about two weeks, recording checkout conversion, cart abandonment and AOV for both groups. 4. If the option group does not lose conversion and AOV rises, test two fee levels such as $2.99 and $3.99 and compare uptake. 5. Roll out the fee that gives the best uptake without a drop in conversion. [L0955, 2025-26]

- Price testing in Shopify by changing the price of the live store is less reliable than split testing, because it compares two periods rather than two groups at the same time. Use split testing for prices. [L0999, 2023]


Part 35 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/34-testing-methodology-and-the-cro-cycle.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/36-prioritizing-and-running-the-optimization-plan.md
