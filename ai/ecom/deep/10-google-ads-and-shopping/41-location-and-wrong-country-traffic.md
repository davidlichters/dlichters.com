<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 41 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/40-clicks-without-sales-conversion.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/42-search-text-ads-and-keyword-strategy.md

### Location and wrong-country traffic

Google changed the default location target for Shopping, Search and Display campaigns to "Presence or interest". The two options conflict in effect:
- Google default: "Presence or interest" reaches people who live in, regularly are in, or have shown interest in the targeted locations, which suits local businesses reaching commuters. [L0719, 2021-22]
- Recommended for a national advertiser that ships to one country: "Presence" (reaches people in or regularly in the targeted locations). [L0719, 2021-22]

| Option | Who it reaches | Typical use |
|---|---|---|
| Presence or interest | People in, regularly in, or who have shown interest in the targeted locations | Local businesses that want to reach commuters into a city |
| Presence | People in or regularly in the targeted locations | National advertisers limited to one country (recommended) |
| Search interest | People searching for the targeted locations | Not recommended for national sales |
[L0719, 2021-22]

- For a national advertiser that ships to one country only, paid clicks from shoppers who cannot buy are waste, so the location target should be set to Presence. [L0719, 2021-22]
- Open the campaign, go to Settings > Locations, expand Location options, and set Target to Presence. Under Exclude, keep Presence (recommended). [L0719, 2021-22]
- "Presence or interest" exists for local advertisers who want to capture people who live outside a city but commute into it. A business that ships nationally has no use for that reach and should not keep it. [L0719, 2021-22]

**Procedure for every campaign**
1. Open every campaign in the account, including Search, Shopping and Display. [L0719, 2021-22]
2. Go to Settings > Locations for each campaign. [L0719, 2021-22]
3. Expand Location options. [L0719, 2021-22]
4. Set Target to Presence. [L0719, 2021-22]
5. Set Exclude to Presence (recommended). [L0719, 2021-22]
6. Save and repeat for every new campaign you create. [L0719, 2021-22]

- Google changed this setting retroactively on campaigns built years earlier, and it does not send any notice. Check every existing campaign, including Search text campaigns, and do not assume an older account is unaffected. [L0719, 2021-22]
- Shopping campaigns targeted to one country can receive clicks from abroad, such as Europe or Asia, when the location setting is "Presence or interest". In one Australian account, this traffic reached a volume where paid clicks were costing real money. [L0719, 2021-22]
- Case: a US-based Shopping account targeted US states and showed clicks from countries it does not ship to. The location target was "Presence or interest", which Google applied by default to campaigns created before the setting existed. Every campaign was switched to "Presence" for the target and "Presence (recommended)" for exclusions. No further clicks from non-sale countries were expected, and wasted ad spend stopped, though the exact figure was not measured. [L0719, 2021-22]
- The same default change also appears in Display network campaigns, most often there. Check the location target on Display campaigns as well as Search and Shopping campaigns. [L0719, 2021-22]
- Shopping campaign settings show a separate "Country of sale" field, set to United States in the example, above the location targeting. Confirm that Country of sale matches the one country you ship to, then set the location target under Settings > Locations. [L0719, 2021-22]

### Supplier, MAP and stock problems

**Procedures**

Handling MAP violations in ads (2024):
1. Pause the ads of SKUs that are sold below MAP. [L0806, 2024]
2. Resume them when the issue is fixed. [L0806, 2024]
3. Find the repeat offenders among suppliers or competitors. [L0806, 2024]
4. Report the supplier if it does not enforce its MAP policy. [L0806, 2024]
5. Move repeat offenders into separate campaigns with lower bids, or keep small budgets if the competitor has bad reviews. [L0806, 2024]

Protecting margins when a competitor sells a supplier's product far below MAP (2026):
1. Exclude that supplier's products from your Google Shopping campaigns right away, so no budget goes to them. [L0808, 2026]
2. Lower the daily budget, for example from $40 to $20, while you work toward the first sale and Google learns. [L0808, 2026]
3. Re-add the supplier once prices return to normal. [L0808, 2026]
- Also tell the supplier, since a MAP violation can be serious for them. [L0808, 2026]

**Principles and cases**

- Pick the root cause of recurring MAP violations (one supplier or a few competitors) and remove it, instead of monitoring endlessly. Competitors with bad reviews can still send you customers, so a small ad budget can stay on. (2024.) [L0806, 2024]
- A store ran Google Shopping ads for two weeks with alpha and beta campaigns: $330 for 34,000 impressions, 430 clicks, a 1.29% CTR, and an average CPC of $0.77 (bids raised to $1.00 alpha, $0.50 beta), with a $1,800 average product price and no sales. A competitor sold the same supplier's products at 40% off. The recommended response was to exclude that supplier from ads, lower the daily budget to $20, and re-add the supplier once prices normalized. (2026.) [L0808, 2026]
- A store had been running Google Ads for about three weeks with a priority campaign for 300 to 400 top products on a shared budget of $40, and a separate secondary campaign with a max CPC of $3. After 3 weeks it had spent about $189, received about 13,000 impressions and 583 clicks, and no sales. The advice was to clean up irrelevant search terms first, leave bids and budgets unchanged for the moment, and add negatives before building Meta remarketing. The outcome was not reported. (2025.) [L0807, 2025]
- Low performance in Google Ads should be checked in the ad account first before investigating competitors on Google Shopping for MAP violations, which are not checked by default. (2024.) [L0805, 2024]

### Tracking and site checks

- Confirm the site works and that customers can complete a purchase before judging ads. [L0853, 2021]
- Check the bounce rate in Google Analytics and whether anything looks broken on the store. [L1085, 2018]
- Run a test purchase to check every step of the product and cart pages for errors. [L1088, 2020]
- The product should be checked in Google Shopping for identifiers that match competitor pages. [L0856, 2024]
- Check the store with the ads: site and checkout must work before paid traffic is judged. [L0853, 2021]

### Product-level decisions

- If a product gets no impressions, raise its CPC first so it can get impressions. If it gets many clicks but no sales, first optimize the product page to lift conversion rate. If the page is well optimized and the product still is not profitable, decide between removing it from paid campaigns or keeping it with a lower CPC and no active focus. (2023.) [L0470, 2023]
- Use the cleaned-up data as the benchmark for the least profitable products, so budget shifts toward products that earn more. [L0853, 2021]
- If many products do not show ads while competitors do, check product page data and Merchant Center information first (see the account-health section). [L0834, 2021]
- Products with a 1% CTR or above that still do not sell need a store check before any budget change, because a store can carry sound ad metrics while conversion is weak. [L0626, 2025+]

### Procedures for common questions (stepwise)

**Google Shopping campaign with no clicks, in order** (see the no-clicks section for steps). [L0357, 2019]

**Raising CPC, the order of checks**
1. Confirm all products are approved. [L0966, 2025]
2. Raise the default CPC by 5 cents if spend is far below budget. [L0966, 2025]
3. Wait a few days for relearning. [L0966, 2025]
4. Check negative keywords for blocked terms. [L0966, 2025]

**Lowering CPC, the order of checks**
1. Review the search terms that triggered the ads and add irrelevant ones as negatives. [L0671, 2021]
2. For products with impressions and clicks but no sales, compare the product page with competitors and optimize it. [L0671, 2021]
3. For products that consume a large share of budget without enough sales, lower the cost per click, for example from $0.40 to $0.20. [L0671, 2021]

**Stop spend on a supplier quickly.** Set CPC to 0 cents for that supplier's products in Alpha and Beta, then re-add when prices normalize. [L1015, 2020-26; L0808, 2026]

### Diagnostic Order

1. Review the data before judging the ads. [L1254, 2020-26]
2. Review the campaign setup and strategy. [L1494, 2021-22]
3. Check whether the budget is being spent. [L1274, 2018]
4. Check visibility and location. [L1275, 2019]
5. Check search terms and competitors. [L1274, 2018]
6. Identify the underperformance pattern. [L1456, 2021-22]

### Step 1: Review the Data

- When someone asks how to improve their ads, first review 30 days of spend, clicks and traffic data for each platform before judging the ad copy. [L1254, 2020-26]
- If you cannot access the account, screenshots of spend, click counts, bounce rate and average time on site are enough for a first diagnosis. [L1254, 2020-26]

### Step 2: Review the Campaign Setup

- If Google Ads campaigns underperform, reviewing the campaign setup from scratch and the underlying strategy is a sensible first step, since platform changes may have altered how things work since the original setup. [L1494, 2021-22] **

### Step 3: Check Budget Delivery

- Check first whether the daily budget is actually being spent before changing anything else. [L1274, 2018]
- Example discussed: a $33 daily budget with 1.3% CTR and 50% impression share on an alpha campaign. [L1274, 2018] **

### Step 4: Check Visibility and Location

- If you cannot see Google ads for a product, nobody may be advertising it, or your location may not match the target market. [L1275, 2019] **
- A VPN can simulate another location for checking results. [L1275, 2019] **

### Step 5: Check Search Terms and Competitors

- Search terms that combine a supplier name, product name or SKU are the highest-intent keywords in a Google Ads account. [L1274, 2018] **
- If these terms show impressions but no sales, search them in an incognito window to see whether competitors are breaking MAP or running stronger promo text. [L1274, 2018] **

### Step 6: Identify the Underperformance Pattern

In roughly seven out of ten high-ticket dropshipping Google Ads accounts that underperform, one of two patterns appears. [L1456, 2021-22] **

| Pattern | What the data shows | Action | Source |
|---|---|---|---|
| A: Generic top-of-funnel spend | Too much spend goes to generic terms that rarely convert. | Exclude those terms from Shopping and reach them another way. [L1456, 2021-22] | 2021-22, older |
| B: Specific traffic, no conversion | Traffic is very specific to individual products or brands but still does not convert, which points to competitors winning the sale. | Review the competitor comparison and the website. [L1456, 2021-22] | 2021-22, older |


Part 41 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/40-clicks-without-sales-conversion.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/42-search-text-ads-and-keyword-strategy.md
