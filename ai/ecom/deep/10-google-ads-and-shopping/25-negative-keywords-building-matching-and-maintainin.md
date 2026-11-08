<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 25 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/24-brand-names-and-the-two-campaign-alternative.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/26-over-blocking-risks.md

## Negative Keywords: Building, Matching and Maintaining

### Negative Keywords: Building, Matching and Maintaining

### Why Negatives Matter

- Negative keywords stop Google from showing your ads for irrelevant searches, which shifts budget away from low-converting traffic toward profitable keywords over time. [L0193, undated]
- Negative keywords stop Google from spending budget on the queries you add, so over the first month or two a Shopping campaign becomes more focused and more spend goes to queries that make sales. Starting with a small budget helps you find non-revenue queries sooner. [L0750, 2020-26]
- Roughly 20% of the search terms made on the Google search network each day are unique, meaning they have never been searched before. They cannot be predicted in advance and can only be handled by exclusion. [L1074, 2021-22]
- Negative keyword lists substantially reduce the time needed to manage Google Ads campaigns compared with managing exclusions without them, and make it more likely that campaigns run as intended. [L1074, 2021-22]
- Google matches products to search terms by reading the product feed in its own way. In the first one to three weeks, many search terms that no buyer would use may appear and need negatives. [L0715, 2020-26]
- Google builds Shopping keyword matches automatically from the product feed. It sometimes matches searches unrelated to the store or containing brand names you do not sell, so check the Search terms report regularly and add those queries as negatives. [L0750, 2020-26]
- Google chooses which products to show for generic searches based on feed data, including title, SKU, description and keywords. To reduce impressions for a product, add negative keywords or lower its CPC at product level. [L0803, 2022]
- Many advertisers never review the Search terms report, so they do not add new negatives or exclude non-converting terms. The report is where most wasted spend shows up, so check it regularly. [L0876, 2025-26]
- The Search terms report can reveal wasteful searches to exclude, winning searches to scale, comparison or "X versus Y" queries that suggest new keywords, and the split between brand and non-brand searches. Accounts with real spend produce hundreds or thousands of rows. [L0876, 2025-26]

### Where Negatives Live

#### Campaign, Ad Group and Shared List Placement

Sources disagree on whether negatives belong at campaign or ad group level:

| Source | Advice | Applies when |
|---|---|---|
| one source | Set negatives at ad group level, not campaign level, because campaign level blocks keywords across all ads instead of allowing refinement. [L0245, 2020] | Read as the older view; superseded by the 2021 and 2023 rules below for most accounts. |
| one source | Campaign-level negatives apply to every ad group in that campaign. Use ad-group-level negatives only when several ad groups in one campaign must not share keywords. [L0247, 2021] | Several ad groups in one campaign must not share keywords. |
| one source | Add negatives at campaign level, not in a universal keyword list. They can be added as soon as they show up because they do not reset the campaign into a learning phase. [L0470, 2023] | Default for campaigns. |
| one source (Beta) | Add negatives to the campaign (Beta one source merch) rather than to an ad group. [L0743, 2026+] | Beta campaign. |
| one source | When a campaign has only one ad group, it does not matter whether negatives are added at campaign or ad group level. [L0746, 2020-26] | Single-ad-group campaigns. |

Read together: put negatives at campaign level by default, and use ad group level only where several ad groups must keep different keyword sets. [L0247, 2021; L0470, 2023; L0746, 2020-26]

Shopping search terms and Gmail or YouTube:
- Shopping ads that also show on Gmail or YouTube can trigger search terms through audiences. To see clean search term data, set the ads to appear only in Google Shopping results. [L0247, 2021]

#### Shared Library and Negative Keyword Lists

- Negative keywords can be added to a single ad group, to a single campaign, or to a shared negative keyword list. A shared list is the only option that applies one entry to several campaigns at once. [L0744, 2021-22]
- Negative keyword lists are reused across campaigns from the Shared Library. It holds negative keyword lists alongside bid strategies, shared budgets, the audience manager, location groups and placement exclusion lists. [L1074, 2021-22]
- Negative keyword lists are found under Tools and Settings > Shared library > Negative keyword lists. Select the list, choose Apply to campaigns, tick the target campaigns and apply. [L0742, 2021-22]
- To remove a wrong assignment, open the list, go to the campaign list, tick the campaign and choose remove list from selected campaign. [L0742, 2021-22]
- Tools and Settings > Shared Library > Negative keyword lists opens the list overview. It shows each list with its keyword count and number of campaigns, and the plus button creates a new list. [L1074, 2021-22]
- The new list dialog has the fields List name and Add negative keywords, with the hint "Enter or paste your negative keywords, one per line", plus SAVE and CANCEL buttons. A list cannot be saved until it contains at least one negative keyword. [L1074, 2021-22]
- Inside a negative keyword list, the APPLY TO CAMPAIGNS button attaches the list to selected campaigns. The detail page offers DOWNLOAD, EXPAND and ADD FILTER options. Each keyword in the detail view has a Match type column. [L1074, 2021-22]
- The Master Generic Negative Keywords list is meant to grow over time into the largest negative keyword list in the account. It holds every irrelevant search term that your ads should never show for. [L1074, 2021-22]
- Create the negative keyword lists before building a Shopping campaign so they are ready to apply at the right moment. Creating a list does not require applying it to a campaign at that point. [L1074, 2021-22]

Setup procedure for the three lists:

1. Open Tools and Settings in Google Ads. [L1074, 2021-22]
2. Under Shared Library, click Negative keyword lists. [L1074, 2021-22]
3. Click the plus button to create a new list. [L1074, 2021-22]
4. Enter the list name Master Generic Negative Keywords. [L1074, 2021-22]
5. Paste the negative keywords from a ready-made generic starter list into the Add negative keywords field, one per line. [L1074, 2021-22]
6. Click SAVE. The list cannot be saved without at least one keyword. [L1074, 2021-22]
7. Create a new list named Brand Names. [L1074, 2021-22]
8. Enter the names of the brands you sell through your website, using just the brand name, one per line. [L1074, 2021-22]
9. Click SAVE. [L1074, 2021-22]
10. Create a new list named Product IDs, product identifiers or product names. [L1074, 2021-22]
11. Enter the unique identifiers of your products, such as model numbers and model names, exactly as they appear in your product titles or in the manufacturer or supplier documentation, one per line. [L1074, 2021-22]
12. Click SAVE. [L1074, 2021-22]
13. Do not apply the lists to any campaign yet. They are applied when the Shopping campaign is set up. [L1074, 2021-22]

#### Adding Negatives in Shopping Campaigns

Steps for adding negatives in Shopping campaigns:

1. Log in to Google Ads and click Campaigns in the left navigation, then Campaigns in the dropdown. [L0750, 2020-26]
2. Use the toggle to select Shopping campaigns (the options shown depend on your campaign types). [L0750, 2020-26]
3. Open the beta campaign first, then repeat the same steps for the alpha campaign. [L0750, 2020-26]
4. Do not use the Keywords section for this. It only shows negative keywords already added. [L0750, 2020-26]
5. Expand Insights and reports at the top and click Search terms, checking the beta campaign one at a time. [L0750, 2020-26]
6. Review the list of search terms the ads appeared for, and check off the ones to exclude. [L0750, 2020-26]
7. Click Add to negative keywords. The added terms then appear in the negative keywords list in the Keywords section. [L0750, 2020-26]
8. Switch to the alpha campaign in the Search terms report and add only universal negatives there (see the alpha and beta rules). [L0750, 2020-26]

Negative keywords are added in the campaign under Keywords in the sidebar, using the Negative keywords section and its plus button. [L0746, 2020-26]

one source 2025 (Beta location): open the Beta campaign, expand "Audiences, keywords and content" in the sidebar, click "Keywords", then "Negative keywords", and add them to the campaign (Beta one source merch) rather than to an ad group. [L0743, 2026+]

Entering negatives:

- Enter negative keywords directly in Google Ads line by line. A spreadsheet is not needed. [L0972, 2025]
- Alpha and beta campaigns each need their own negative keyword list. [L0972, 2025]

#### Multi-Campaign Setups (High, Medium and Low Priority)

- Negative keyword work is done in the high priority campaign only, because Google checks that campaign first. If the setup is correct, the medium and low priority campaigns should not show unwanted terms. [L0744, 2021-22]
- A negative keyword added to only one campaign pushes the term into the other campaigns, where it costs more per click without a better chance of conversion. Every negative added at the high priority level must also apply to the other two campaigns. [L0744, 2021-22]
- Add negative keywords to the shared master generic negative keyword list, which applies to all three campaigns at once. This avoids missed campaigns and copy errors when lists are long. [L0744, 2021-22]
- Decide whether to review search terms per campaign or per ad group based on how many brands and product types the store carries. A store with many brands and product types usually needs ad group level review, while a narrow store can be reviewed at campaign level. [L0744, 2021-22]

#### Campaign Moves and Keyword Placement

- Do not move keywords between campaigns. To keep a term out of a campaign, add it there as a negative keyword. [L0671, 2021]
- Example: a main niche term such as pool table is added as a keyword in beta and as a negative keyword in alpha, so alpha does not spend on it. [L0671, 2021]

#### Master Negative List

- Add negative keywords to a master list that applies to all new campaigns. Example list of universal terms that never convert: secondhand, used, wholesale, local, job, training, advice, agency, and similar terms. [L0225, 2015+]
- Merchant Center is used for universal negatives during cleanup of a campaign with no sales. [L0807, 2025]

### Universal Negatives

#### What Qualifies

- Universal negatives are terms that should never trigger an ad, such as unrelated products or topics. They belong in both Alpha and Beta. Brand, SKU and product-name negatives belong only in Beta, because Alpha has to be able to show for those searches. [L0746, 2020-26]
- Universal negative keywords are terms for other brands you do not sell, and for products or niches unrelated to your store. Add them as negatives in both the alpha and the beta campaign. [L0750, 2020-26]
- Universal negatives are only for keywords that never lead to a sale on your store, for example an unrelated product term. Do not use universal negatives for competitor brand names that buyers might search with your product name. [L0804, 2023]
- Add terms you never want to appear for to the universal negative keyword list, so they block across all campaigns. [L0745, 2020-26]
- Example: a chandelier store that shows for tanning beds should block tanning beds in both campaigns so no money is spent on it. [L0746, 2020-26]
- If a search term shows another brand you do not carry, add it as a universal negative keyword. Do not exclude generic brand names that could be confused with your own products. [L0276, 2024]

#### Starting List and Timing

- Start with a universal list of negative keywords, plus your brand names and SKU numbers. Then review the keyword reports for the active campaigns every two to three days and add any unwanted search terms as negatives. [L0941, 2022]
- Add universal negative keywords to Alpha and Beta campaigns right away, before data comes in. [L0855, 2023]
- Universal negative keywords should be added to both alpha and beta campaigns from day one. New irrelevant search terms that appear later should be added as you find them. [L0970, 2023]
- Add universal negative keywords as irrelevant terms appear in ad reports. Start with a published list, then keep extending it through regular audits. [L0853, 2021]
- Add generic words such as "free", "cheap" and "local" as universal negative keywords on both alpha and beta campaigns. Broader niche terms should only be blocked as exact-match negatives. [L0854, 2022]
- Add negative keywords by applying the same universal negatives and campaign-specific negatives from the product feed submission lesson, and update them based on the search terms that bring irrelevant clicks. [L0856, 2024]

Sources disagree on how much to add at the start. Read together: add the obviously irrelevant universal terms from day one, and hold back sweeping broad terms until search term data exists. [L0855, 2023; L0970, 2023; L0274, 2023; L0972, 2025]

Early-phase advice that conflicts with the "add now" rules above:

- Be selective early in a campaign. If traffic is too new to tell what will convert, only block obviously irrelevant keywords. Broad negatives early risk blocking future sales. [L0274, 2023]
- Start with a few basic negative keywords, and add more as the search terms that trigger clicks become clear. Adding too many negatives at the start limits reach. [L0972, 2025]
- Do not add many negative keywords at the start. Begin with basic terms such as free and cheap, then add more negatives from actual search terms that waste money. [L0969, 2022]
- Start with broad keyword coverage and add negative keywords over time, based on search terms that do not match the products. Do not limit the keyword list at the start, because more impressions give more data. [L0468, 2020]

### Match Types

#### Match Type Reference

| Match type | Syntax | What it blocks | Typical use | Sources |
|---|---|---|---|---|
| Broad | term, no symbols | Searches containing the term; see the conflict below on single generic words | Universal terms irrelevant to every product (e.g. free, retail); brand, product and SKU list in Beta | [L0746, 2020-26; L0961, 2020; L0743, 2026+] |
| Phrase | "term" | Every variation containing the word or phrase | Brand names; product-type phrases you never want; long competitor-style product titles in Beta | [L0225, 2015+; L0270, 2021; L0961, 2020; L0805, 2024] |
| Exact | [term] | Only that exact phrase | Specific terms that must be blocked exactly; generic words that must not block product-name searches; suppliers; broad niche keywords taking budget | [L0225, 2015+; L0962, 2021; L0837, 2025; L0854, 2022; L0857, 2025] |

Syntax check: exact match negatives are typed in square brackets, for example [competitor name], and phrase match negatives in quotation marks, for example "competitor name". [L0804, 2023]

Other match-type rules:

- Negatives in Google Shopping work as broad match, so every variation containing the negative term is blocked, not only the exact phrase. One negative such as course or videos covers many related queries. [L0746, 2020-26]
- Negative keyword match types: broad match blocks related searches, while phrase and exact match are narrower and better suited for most negatives. [L0966, 2025]
- Choose the match type for a negative keyword by how closely the term matches the products you want to keep showing. Broad and phrase negatives also block longer searches that contain the term, so a generic word like chandeliers can be added as an exact match negative if specific product-name searches must still appear. [L0626, 2025+]
- Choose negative keyword match type per keyword. Use exact match for a single term that should always be blocked, and broad match to block variations. In practice, a mix of match types is common. [L0803, 2022]
- Check the match type before you add any negative keyword. [L0626, 2025+]
- Use exact match negatives for generic terms that you want to block. [L0966, 2025]
- Exact match negative keyword: enter the term in square brackets in the negative keywords list, for example [table], so only that exact search is blocked. [L0966, 2025]
- Negative keywords do not automatically cover close variants, plurals or misspellings the way positive keywords do. Add each variant, such as plurals and misspellings of a blocked word, as its own negative. [L0876, 2025-26]
- Positive match types for search text ads differ from the negative keyword match types used in Shopping campaigns. Do not transfer the negative keyword rules to search text ads. [L0880, 2021-22]

#### Broad Match Pitfalls

- A broad match negative keyword blocks every search that contains that word, including specific product searches such as dining table with model numbers. Use exact match negatives for generic terms that you want to block. [L0966, 2025]
- Broad match negatives also block searches that contain the term with extra words before or after it. Use exact match negatives (wrapped in brackets) only when a specific term must be blocked exactly, and not for the brand, product, and SKU list. [L0743, 2026+]
- A broad generic word such as sinks should not be added to alpha or beta manual campaigns. Broad matching would show ads for any search containing that word, so use exact match only if clicks justify it. [L0963, 2022]
- Negative keywords set as broad match block long-tail variants. Blocking broad "standing desk" also blocks "model 123 standing desk", because the system matches the partial phrase. Use exact or phrase match instead. [L0249, 2022]
- Do not add negative keywords using broad match. Use exact match to avoid accidentally blocking related keywords. [L0249, 2022]
- Add negative keywords as exact match by default, because phrase or broad match negatives can block traffic you want. Example: a broad negative "generators" would also block "brand name generators". Use phrase or broad match only for terms you never want to appear for. [L0837, 2025]

Sources disagree on the broad-match default for brand and product lists:

| Source | Advice | Applies when |
|---|---|---|
| one source | The brand list for Beta is entered as broad match, so searches for these terms are blocked in Beta and handled by Alpha. [L0743, 2026+] | Brand, product and SKU list in the Beta campaign. |
| one source | Brand names are added as negatives; the default matching type is broad, which is correct for this strategy. Exact match negatives are optional for later optimization and not required for initial setup. [L0186, undated] | Initial Beta setup for high-intent searches. |
| one source | Broad negatives block long-tail keywords; use exact or phrase match. [L0249, 2022] | Generic keywords where related long-tail searches must still show. |

Read together: broad match suits the brand, product and SKU list in Beta, while exact or phrase match suits generic or niche terms that must not block related product searches. [L0743, 2026+; L0186, undated; L0249, 2022; L0837, 2025]

#### Single Generic Words

Sources disagree on how a single generic word behaves:

| Source | Behaviour described | Applies when |
|---|---|---|
| one source | Single-word negatives use broad match, which blocks any search containing that word. [L0270, 2021] | Single words such as "free" that should be blocked everywhere. |
| one source | Broad match blocks every variation containing the term. [L0746, 2020-26] | Negatives in Shopping campaigns. |
| one source | Adding a single generic word such as sauna as a negative blocks only that word on its own, not longer search phrases that contain it. Use it when the word alone attracts irrelevant searches. [L0744, 2021-22] | The word alone attracts irrelevant searches. |

Test the behaviour in your own account before relying on either version. [L0274, 2023; L0744, 2021-22]

#### Match Type Examples

- Exact match example: [infrared sauna portable] blocks only that exact term but allows "infrared sauna portable for cats". Using just [portable] blocks only the word portable and still allows "portable infrared sauna". Use phrase match "portable" to block all variations containing portable. [L0225, 2015+]
- Exact match example: a negative exact match for blue pool does not block searches for blue pool q. [L0962, 2021]
- Negative exact match keywords in brackets block only that exact phrase. Negative phrase match keywords in quotes block every search variation containing that word or phrase, which makes them useful for blocking entire categories like "portable". [L0225, 2015+]
- For single-word negative keywords, such as free, use broad match (no quotes or brackets) to block any search containing that word. For brand name negatives, use phrase match (quotes) to block exact brand plus variations. For exact blocking, use exact match (brackets) when only one specific phrase must be blocked. [L0270, 2021]
- Use broad match for universal negative keywords that are irrelevant to every product, such as free or retail. Use phrase match for brand names and for product-type phrases you do not want, such as an unrelated product term. [L0961, 2020]
- Use a broad negative only when the term is irrelevant to every product you sell. Exact match suits any term that could still lead to a sale on a specific product. [L0626, 2025+; L0837, 2025]


Part 25 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/24-brand-names-and-the-two-campaign-alternative.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/26-over-blocking-risks.md
