<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 27 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/26-over-blocking-risks.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/28-bidding-budgets-and-bid-optimization.md

### AI-Assisted Term Audits

#### Starter List for a New Campaign

- For a new campaign with no search history, an AI can build a starter negative keyword list from the store URL alone. This avoids launching blind and spending the first week's budget on irrelevant searches. [L0876, 2025-26]
- Starter list prompt for a new Search or Shopping campaign on an eCommerce store:

```
You are a Google Ads strategist building a starter negative keyword list for a new Search or Shopping campaign on an eCommerce store.

Store URL: [paste store URL]
Product overview (optional, use only if the URL gives little detail): [one line]

Review the store to determine what it truly sells: product types, categories, price level and the type of buyer it targets. If the URL cannot be read, request the page contents from me instead of guessing.

Then compile a starter list of negative keywords for searches that would waste budget or indicate the wrong intent for this store. Sort the negatives into these buckets:
- Free / cheap intent (for example 'free', 'cheap', 'discount code', 'coupon')
- Job / career intent (for example 'jobs', 'careers', 'salary', 'hiring')
- Non-buyer intent (for example 'DIY')
- Wholesale / B2B / bulk (only if the store is retail or DTC)
- Wrong product or category (adjacent items the store does not carry)
- Competitor brand names (include only if they are obvious from the category; flag each one for my review)
- My own brand names, such as my actual brand name and product names unique to my brand

Rules:
- Include only negatives that clearly would not lead to a sale for this specific store.
- Never negate terms that could come from real buyers. When uncertain, place the term in a separate 'Review before adding' list rather than the main list.
- Format each bucket as a plain list I can copy directly into Google Ads.
- End with one short note naming any buckets I should double-check against my own product range.

Include a note stating that this list is a starting seed and must be replaced with search terms report data once real data is available.
```
[L0876, 2025-26]

- Discount and promo terms such as "discount code" or "promo code" are often added as negatives. Some accounts target them by mistake and end up competing with large discount websites, so they are usually worth excluding. [L0876, 2025-26]

#### Audit Prompt

Audit workflow:

1. Export the Search terms report. [L0876, 2025-26]
2. Paste the file into an AI tool together with a brand definition (brand names, founder name and name variants) and a description of what the store sells. [L0876, 2025-26]
3. Use the audit prompt to tag every term. [L0876, 2025-26]
4. Download the result as CSV. [L0876, 2025-26]
5. Import the CSV into Google Sheets. [L0876, 2025-26]
6. Filter and sort by brand, intent, relevance and recommended action before making changes in Google Ads. [L0876, 2025-26]

Audit prompt:

```
You are a Google Ads search term auditor.

Brand definition: [list your brand names, name variants and founder name(s)].

Product scope: [describe the products, categories, price level and key ingredients or features, and state explicitly what is NOT sold].

Audit rules: Apply strict relevance standards. Any search term that does not fit what we sell is marked irrelevant, and we recommend adding it as a negative.

For each search term in the attached report, return these columns:
- Search term
- Brand or non-brand (per the brand definition above)
- Intent stage (top, middle or bottom of funnel)
- Relevant? (yes / no)
- Recommended action (keep, add as negative, promote to its own ad group, watch)

Deliver the complete output as a CSV that imports cleanly into Google Sheets. Include every row without exception.
```
[L0876, 2025-26]

Case: a search terms report with 13,264 search terms was run through an AI audit prompt with a brand definition and a description of the store. The AI returned a CSV with brand or non-brand, intent stage, relevance and a recommended action for each term. The output could be imported into Google Sheets and filtered, which replaced reading the full report line by line. [L0876, 2025-26]

Audited search terms sheet layout (keep the Google Ads performance columns from the export and add the four columns from the AI audit at the end):

| Column | Source |
|---|---|
| Search term | Export |
| Match type | Export |
| Ad group | Export |
| Clicks | Export |
| Impr. | Export |
| CTR | Export |
| Cost | Export |
| Conversions | Export |
| Conv. rate | Export |
| Cost / conv. | Export |
| Brand or non-brand | AI audit |
| Intent stage | AI audit |
| Relevant? | AI audit |
| Recommended action | AI audit |

[L0876, 2025-26]

Checking the AI output:

1. Read the AI's restatement of your brand terms and product range at the start of its reply. [L0876, 2025-26]
2. Correct any brand name, name variant, founder name or product it missed, and re-run the audit if the definition is wrong. [L0876, 2025-26]
3. Open the returned CSV and check that every search term from the export appears with no skipped rows. [L0876, 2025-26]
4. Read the actual terms behind every row flagged as irrelevant or add as negative before adding any of them to the account. [L0876, 2025-26]

Treat AI suggestions as a head start rather than a final list. Read every term in an AI-generated list before adding it to the account. [L0876, 2025-26]

### Review Frequency and Workload Over Time

#### Review Rhythm by Phase

| Phase or rule | Rhythm | Source |
|---|---|---|
| First 1 to 3 weeks of a new Shopping campaign | Heaviest; irrelevant terms are most common | [L0715, 2020-26] |
| Every week, alpha and beta both | Add negatives weekly, not only once at the start | [L0715, 2020-26] |
| Every 2 to 3 days | Review keyword reports for active campaigns | [L0941, 2022] |
| Weekly | Weekly reviews produce faster ROAS improvement | [L0193, undated; L0744, 2021-22] |
| Daily (2023) | Check Shopping ads daily for irrelevant impressions | [L0251, 2023] |
| Daily | Morning or evening routine | [L0357, 2019] |
| At most twice a week | Checking daily wastes time because too little new data builds up in a day | [L0744, 2021-22] |
| At least every 2 weeks | Minimum review frequency for Google Shopping campaigns | [L0193, undated] |
| Never stop | Work decreases as the campaign matures, but never stops completely, even for established stores | [L0715, 2020-26] |

Sources disagree between daily and twice-weekly review:

- Daily review fits a new campaign with a high volume of irrelevant terms in the first weeks. [L0251, 2023; L0715, 2020-26]
- Twice a week at most fits an established account, where little new data builds up in a day. [L0744, 2021-22]

#### Workload Over Time

- Negative keyword work is heaviest in the first weeks of a new Google Shopping campaign, when irrelevant search terms are most common. The workload drops as the campaign matures, but it should never be stopped completely, even for established stores. [L0715, 2020-26]
- A new account starts with a short master negative keyword list, while an established account can grow it to thousands of entries. Once the main variants are excluded, few new negatives are usually needed, and most new additions are variations of terms already blocked. [L0744, 2021-22]
- Example of list growth: 6,971 search terms in an established account over 30 days. [L0744, 2021-22]
- A keyword search term list growing to 20,000 entries is not inherently good or bad. Review which keywords earn money and which waste spend, and add negatives where needed. [L0969, 2022]
- Adding negatives at the start limits reach, so begin with a few basic negatives and add more as the search terms that trigger clicks become clear. [L0972, 2025]
- Between the alpha and beta campaigns, beta carries more negative keywords than alpha. There is no fixed ratio of negative keywords to aim for. [L0837, 2025]
- Using negative keyword lists reduces the time needed to manage campaigns substantially. [L1074, 2021-22]

### Universal Negative Keyword List

Start the master generic negative list with a ready-made starter list of terms that no business wants ads for. Copy all of it and paste it in at once, then add terms specific to your business later. ** [L1074, 2021-22]

The word `rent` is an example of a starter negative keyword for a high-ticket dropshipping business that sells new products. Searches for renting signal that the person does not want to buy, so ads should not show for them. ** [L1074, 2021-22]

A store selling new surfboards found that its Shopping ads could appear for searches like "hire a surfboard." This happened because product titles contain the word "surfboard," and Google does not weigh the buying intent behind the search. Google also showed organic results and text ads for places to hire, so the merchant added the unwanted intent as a negative keyword and planned to add more business-specific terms over time. ** [L1074, 2021-22]

Shopping ads can show for searches that share a product word but have a different intent, such as rental or hire searches for items you sell to buy. Block such queries with negative keywords as soon as they are noticed. ** [L1074, 2021-22]

Add terms you never want to appear for, such as unrelated product words, to a global negative keyword list that applies to both alpha and beta campaigns. ** [L1113, 2022]

Build and maintain a universal negative keyword list that applies across campaigns. [L1226, 2020-26]

### Intent Mismatches

Shopping ads often show a product to people searching for the vehicle or item it fits, not the accessory itself, which creates irrelevant paid clicks. Check search term reports for this mismatch, because those visitors are not in the market for the product and paying for them is wasteful. ** [L1456, 2021-22]

Bidding on every keyword a broad search might trigger, like a billboard, wastes budget on irrelevant clicks, such as searches for generic terms that match a product's name loosely. Limit targeting to keywords and audiences that match what you sell and the intent behind the search. [L1455, 2018+]

Do not target all available traffic on a search network. Build campaigns to attract the paid traffic that best fits your business and exclude the rest. Use negative targeting to remove traffic that does not match the right customer, time, and price. ** [L1507, 2021-22]

### Brand and Product-Name Negatives

#### Brand Names list

The Brand Names list should contain the names of the brands sold through your website, entered as just the brand name. It is a separate negative list from the master and product lists. ** [L1074, 2021-22]

#### Product IDs list

Create a separate Product IDs list, which may also be named product identifiers or product names, containing the unique identifiers of your products. These identifiers can be model numbers, model names or similar codes. ** [L1074, 2021-22]

A Product IDs list can mix model numbers such as `AM156JDTSZ`, `BO73D-BLK` and `BT-0502` with model names such as Baldwin, Barcelona, Barrett, Bergen and Bliss. Such a mix is fine. ** [L1074, 2021-22]

Every product with a unique identifier needs its identifier in the Product IDs list, so 1,000 such products produce 1,000 negative search terms. A list of that size is expected and acceptable. ** [L1074, 2021-22]

If a product has both a model number and a model name, enter both as separate negative terms. Customers may search with either one, so both must be covered. ** [L1074, 2021-22]

One Product IDs negative list held 366 terms and was applied to 2 Shopping campaigns in the example account shown. ** [L1074, 2021-22]

#### SKUs, UPCs and product names

Add SKU numbers and UPCs as broad match negative keywords, because broad negatives catch variations of the SKU. [L1115, 2024]

For product names, use phrase or exact match negative keywords with the brand name and product name, such as brand plus product name, so you do not block searches for other products that share generic words. [L1115, 2024]

#### Which match type for which item

| Item | Match type | Source |
|---|---|---|
| Brand name as a single word | Broad | [L1074, 2021-22] |
| Model number, model name or other single model word | Broad | [L1074, 2021-22] |
| SKU number or UPC | Broad | [L1115, 2024] |
| Brand plus product name | Phrase or exact | [L1115, 2024] |
| Brand name (alternative guidance, undated) | Phrase | [L1328, 2015] |
| Generic term you want out of the campaign (undated) | Exact | [L1328, 2015] |
| Term you never want | Broad | [L1285, 2024] |
| Term you might want in some cases | Phrase or exact | [L1285, 2024] |

The sources disagree on brand names. The 2021-22 approach uses broad match for single brand and model words because exact match would only block searches consisting of that word alone and would miss most related queries. [L1074, 2021-22] The undated approach uses phrase match for brand names and exact match for generic terms. [L1328, 2015] Use broad match for single brand or model words that are almost never relevant to your product, and phrase or exact match where a blocked word also appears in searches you want to keep. [L1074, 2021-22; L1115, 2024; L1328, 2015]

### Match Types and Pitfalls

#### Match type definitions

The screen describes each negative keyword match type as follows. **

| Match type | Ad does not show when the search |
|---|---|
| Broad match | Contains all keyword terms, even if they are in a different order |
| Phrase match | Contains the exact keyword terms in the same order |
| Exact match | Contains the exact keyword terms, in the same order, without extra words |

[L1074, 2021-22]

A broad match negative blocks a search only when it contains all of the keyword terms. A broad positive keyword triggers on any one of the terms. For negative keywords, broad match is often the usual choice. ** [L1074, 2021-22]

A broad match negative keyword blocks any search containing its words in any order. Phrase match blocks searches containing the phrase with extra words before or after. Exact match blocks only that exact search. Use broad match for SKU numbers, and phrase or exact match for brand plus product names so you do not block searches for other products that share generic words. [L1115, 2024]

Negative exact keywords are written in square brackets and block only that exact query. Negative phrase keywords block any query that contains the words. Use phrases for brand names and exact keywords for generic terms you want to keep out of a campaign. [L1328, 2015]

Use broad match for terms you never want, and phrase or exact match for terms you might want in some cases. [L1285, 2024]

Use negative keywords to block searches you do not want. A negative phrase keyword blocks every query that contains that phrase, so a negative phrase on a single word blocks all queries with that word. [L1352, 2020-26]

#### Common pitfalls

A broad match negative keyword can also block searches that are relevant to your product, because it blocks every search containing that word. Check which relevant searches a broad negative is removing. ** [L1074, 2021-22]

Exact match on a single brand or model word such as Baldwin would only block searches that consist of that word alone, and would miss most related queries. ** [L1074, 2021-22]

A negative exact keyword blocks only the exact wording you typed. Plural forms, word-order changes and abbreviations such as "mens" can still trigger the campaign, so add each common variant of a generic term as its own negative exact keyword. [L1328, 2015]

Add irrelevant search terms as negative keywords and add close variations as broad match modifier, phrase match and exact match negatives. Keep adding negatives over time, because they are the main way to stop wasted spend. ** [L1090, 2021]

Phrase match blocking can accidentally block searches that already make money, such as a product name that contains the blocked phrase. Before blocking, check whether the term affects profitable search terms and choose exact, phrase or broad match accordingly. ** [L1090, 2021]

### Non-English Terms

Add non-English search terms to negative keywords only if they actually appear in your search terms report for your ads. Do not add them to a starting negative keyword list. [L1285, 2024]

### Location of Negative Lists

#### Attaching lists to campaigns

On a negative keyword list's detail page in Google Ads, a counter shows how many campaigns use the list, for example "2 campaigns using this list," or "0 campaigns using this list" for an unused list. The APPLY TO CAMPAIGNS button opens a campaign picker, labelled Campaign +, to attach the list to selected campaigns. ** [L1074, 2021-22]

A negative keyword list is attached to campaigns individually, and one list can be attached to several campaigns. Its terms are then excluded in every campaign it is attached to, so a list must be applied to each Shopping campaign that needs the exclusions. ** [L1074, 2021-22]

#### Shared and global placement

Add terms you never want to appear for to a global negative keyword list that applies to both alpha and beta campaigns. ** [L1113, 2022]

Review the search terms report once campaigns are live and add irrelevant terms as negatives to both alpha and beta. ** [L1113, 2022]

Block broad search terms that do not lead to sales by adding them as negative keywords in the main campaign. Keep search terms that bring buyers, and raise their cost per click instead of blocking them. ** [L1112, 2021]

### Starting the Negative List

Start negative keywords from the standard setup. After the first one or two weeks of running, review the search terms, including terms with no clicks, and add irrelevant ones as negative keywords. [L1116, 2025]

Build a starter list from the standard setup and add terms as the search terms report shows them. [L1116, 2025; L1226, 2020-26]

### Finding Search Terms

#### Where to find the report

To view search terms that triggered your ads, open the campaign in Google Ads and click Keywords in the left navigation. The list shows impressions, click-through rate and other performance data for each term. ** [L1090, 2021]

In Google Ads, find search terms under Insights and reporting > Search terms. The report shows every query the ads appeared for, including queries without clicks. [L1116, 2025]

#### Procedure: alpha and beta campaigns (2024)

1. Log into the Google Ads account.
2. Open the alpha and beta campaigns.
3. Go to Insights and reporting.
4. Click Search terms to see all search terms the ads appeared for.
5. Add unwanted search terms as negative keywords.

[L1115, 2024]

#### Procedure: Shopping campaigns (2025)

1. Open the Shopping campaigns in Google Ads.
2. Go to Campaigns and expand Insights and reports.
3. Click Search terms.
4. Check that the search terms match your keywords and that the traffic is relevant.
5. Check which product pages those terms land on and what the conversion rate is.

[L1287, 2025]

#### Procedure: weekly search terms workflow (2023)

1. Open the search terms report in Google Ads that shows which search terms triggered impressions.
2. Mark every irrelevant search term and add it to the negative keyword list.
3. Export the list to Excel or Google Sheets to sort and manage larger lists more easily.

[L1094, 2023]

#### Procedure: general search term review (undated)

1. Review the search terms report to see which real queries trigger your ads.
2. Add irrelevant queries as negative keywords to stop wasted impressions.
3. Build and maintain a universal negative keyword list that applies across campaigns.
4. Test ad copy continuously, since testing is the main way to improve performance.

[L1226, 2020-26]

#### Actions during review

Add negative keywords for search terms that trigger ads without producing sales. This stops spend on irrelevant traffic. ** [L1277, 2020]

Add negative keywords for broad-match search terms that bring in clicks but do not match the product. This cuts wasted spend as budgets rise. ** [L1088, 2020]

Add non-specific search terms that appear in search reports as negative keywords, so ads stop showing for them. ** [L1092, 2022]

When a big-box retailer name appears as a search term that does not make money, add it as a phrase-match negative keyword. Check profitability first, because a retailer name that converts should stay in the campaign. ** [L1112, 2021]

### Review Frequency

| Situation | Cadence | Source |
|---|---|---|
| First review after launch | After the first one or two weeks, including terms with no clicks | [L1116, 2025] |
| Early period, spend is high | Weekly, after waiting a few days for obvious items | [L1090, 2021] |
| Spend around 50 USD per day or less | Every other week | [L1090, 2021] |
| Campaigns live, alpha and beta | Once live, then add irrelevant terms to both | [L1113, 2022] |

The sources differ on the first review. The 2025 guidance sets the first review after one or two weeks. [L1116, 2025] The 2021 guidance says to review weekly at the beginning, when spending is high, after waiting a few days for obvious items. [L1090, 2021] Use the first-review timing for the initial setup, then move to the weekly cadence while spend is high and every other week at around 50 USD per day or less. [L1090, 2021; L1116, 2025]

Do not block weak terms such as `black` or `modern` from day one. Wait a few days, and only block them if they receive impressions and clicks but no sales. ** [L1090, 2021]

### Over-Blocking Risks

Check which relevant searches a broad negative is removing before you add it. [L1074, 2021-22]

Check whether a term affects profitable search terms before blocking it, because phrase match can block product names that already sell. ** [L1090, 2021]

Keep search terms that bring buyers and raise their cost per click instead of blocking them. ** [L1112, 2021]

Check profitability before blocking a retailer name, because a retailer name that converts should stay in the campaign. ** [L1112, 2021]

### Bids and Workload Over Time

Raising bids on a low-priority keyword to chase more impressions can flood the campaign with generic, non-converting search terms. Watch the search terms report closely after any bid increase. ** [L1275, 2019]

Every product with a unique identifier adds its identifier to the Product IDs list, so the number of negative terms grows with the catalogue. A list of 1,000 terms from 1,000 products is expected. ** [L1074, 2021-22]

As spend rises, review the search terms more often and add negatives for non-converting traffic, because negatives are the main way to limit wasted spend. [L1088, 2020; L1090, 2021]

For larger lists, export the negative list to Excel or Google Sheets to sort and manage it. [L1094, 2023]

#### Further details

- For both Alpha and Beta campaigns, add unrelated brand names, irrelevant niches, and search terms unlikely to convert as negative keywords to reduce wasted spend. [L0193, undated]

- Do not leave out the negative keywords. Without them Alpha and Beta compete for the same searches, and Beta, which has higher priority, will catch the strong terms that should go to Alpha at its lower bid. [L0746, 2020-26]

- Add negative keywords over time to clean junk traffic out of Google Ads campaigns; the blueprint lists universal negative keywords to block first, then weaker terms as they appear in the search term report. [L0834, 2021]


Part 27 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/26-over-blocking-risks.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/28-bidding-budgets-and-bid-optimization.md
