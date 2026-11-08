<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 51 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/50-display-ad-formats-and-cta.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/52-microsoft-bing-ads.md

## Performance Max and Automation

### Performance Max and Automation

### Humans and Machines

- The effective approach combines humans and machines. The marketer sets goals, campaign structure, tests and feed quality, while automation calculates bids across many dimensions. Manual control alone leaves dimension value untapped, and trusting automation blindly leaves no check on results. [L0454, 2019]
- Systems that learn from outcomes can find patterns that rules written by humans miss. An early drop in ROAS during the learning phase is normal and should not trigger an immediate reversal. Judge automated bidding only after it has had time to learn. [L0454, 2019]
- Keep a human in control of bids, budgets and structure, and use AI mainly for research and analysis. Do not hand a live Google Ads account to an AI agent to run unattended. [L0876, 2025-26]
- Errors compound at scale: one bad bid or budget change applied across an account can burn a lot of money before anyone notices. Some account mistakes take weeks or months to repair. [L0876, 2025-26]
- Current AI models handle short, single tasks well but fail on long chains of steps, repeated tasks and tasks requiring exact steps. They may skip a step or enter details incorrectly, which is costly in a live ad account. [L0876, 2025-26]

### Account Maturity and Starting Point

- Standard Shopping is preferred over Performance Max for most merchants. Performance Max gives Google full control of targeting, placements and bidding with less transparency. [L0272, 2022]
- Standard Shopping campaigns are preferred over Performance Max for non-impulse products because they provide control over keywords and clear data on what is performing. [L0255, 2025]
- Standard Shopping stays the core of the account. Performance Max, if tested, sits beside it. [L0854, 2022; L0969, 2022; L0941, 2022]
- For most new stores, start with Alpha Beta standard Shopping campaigns and run Performance Max alongside them rather than replacing them. [L1113, 2022]
- In a new account with no conversion history, do not use Smart Shopping for all products. Use standard Shopping campaigns with individual bids until Google has conversion data. [L1112, 2021]
- Smart Shopping and other automated bidding are not recommended for new accounts, because Google has no store data yet and will spend money broadly. Start with manual bidding and controlled setup, then consider automation once the account has a history of profitable data. [L1090, 2021]
- Automated bidding works best when the account already has a large history of conversions, since the platform then knows which clicks are likely to buy. Without that history, automation mainly spends on random clicks. [L1090, 2021]
- For most accounts, scaling manual campaigns gives a higher return on ad spend more easily than experimenting with smart campaigns. Scaling the manual campaigns is therefore the default choice. [L0963, 2022]
- Switching a working account to Smart Shopping while raising budgets can make the numbers unreadable. If an agency did this during a scale-up, revert to manual campaigns and scale there. [L0963, 2022]

Prerequisites named in the sources:

| Campaign or step | Condition | Source |
|---|---|---|
| Performance Max | Start after about 30 to 40 sales; before that, begin with Search and Shopping campaigns around the product keywords | [L0788, undated] |
| Performance Max | Needs at least 50 conversions to optimize well | [L1213, 2023] |
| Performance Max | Use only with a store already profitable on standard Shopping | [L0969, 2022] |
| Performance Max | Test only if Smart Shopping already worked profitably for the account | [L0272, 2022] |
| Performance Max | Works well only with a large history of past conversions | [L0970, 2023] |
| Smart Shopping rollout, per brand | Brand has more than 20 conversions per month and 100 or fewer products | [L0454, 2019; L1033, 2019] |
| Smart Shopping, per product group | Product groups hold 100 or fewer products, and each small group generates more than 20 conversions per month | [L1033, 2019] |
| Smart Shopping | Most worth running when the account already has a high impression share | [L1033, 2019; L0454, 2019] |

### Performance Max: Behavior and Decline

- Performance Max campaigns initially target the hottest existing audiences, people who visited the store, and produce high ROAS. As these audiences see the ads repeatedly and become exhausted, Google expands targeting to wider, colder audiences who are less likely to convert, so ROAS drops significantly. Performance Max, including feed-only campaigns, often performs well for a few weeks or months and then return on ad spend drops sharply, because it increasingly retargets existing visitors until those audiences run out. When this happens, add other Google traffic sources. It typically starts strong, first remarketing heavily to the warmest visitors, and it is not recommended as a core approach. [L0255, 2025; L0667, 2025; L0965, 2024; L1015, 2020-26]
- As of April 2025, Performance Max campaigns are not recommended. They show strong performance initially but decline over time as audiences exhaust. [L0255, 2025]
- Performance Max remains a black box. Remarketing lists inflate its early results before performance slows once those lists max out. [L1283, 2023]
- Performance Max is not recommended for dropship products. The lack of data visibility and declining performance over time make it unsuitable. [L0255, 2025]
- Use Standard Shopping rather than Performance Max for Google Shopping campaigns, because Performance Max has not shown consistent results. [L1115, 2024]
- Performance Max results are inconsistent: some accounts lose money with it. It is not recommended for this store model. [L0855, 2023]
- Performance Max is not recommended for this business model, because it did not perform consistently across several accounts where it was tested. A campaign that is getting impressions can still produce poor-quality traffic, since impressions alone do not show whether they lead to sales. [L1015, 2020-26]
- Performance Max is not recommended for the store types taught in the course as of March 2023. Standard Shopping campaigns outperform it, so do not run Performance Max. [L0964, 2023]
- Performance Max was not used by the team because results were inconsistent across stores. The team uses Shopping Alpha/Beta and other campaign types instead. [L0971, 2024]
- Performance Max is a newer Google campaign type that Google pushes heavily. It does not replace standard Shopping campaigns, so test it with about 10% of the budget only and keep the proven Shopping campaigns as the main spend. [L0854, 2022]
- Performance Max results vary widely, and there is no fixed set of rules that works in all accounts. Creating more asset groups segmented by product category, brand or best-selling products is the most reliable adjustment seen so far. [L1281, 2022]
- Performance Max has not replaced Standard Shopping in the owner's accounts. It sometimes targets people who click a lot but do not buy, so stick with Standard Shopping unless tests show otherwise. [L0941, 2022]
- Performance Max shows products across Google Shopping and other Google inventory such as YouTube and Gmail, and uses built-in AI to choose placements. It helps control spend because the system places ads where it expects a return. [L1508, 2022+]
- After moving from Smart Shopping to Performance Max, one seller reported sales from YouTube and Gmail placements that the earlier setup did not bring in. Performance Max therefore added incremental sales through Google's other channels. [L1508, 2022+]
- Google Shopping moved from regular Shopping, where higher bids raised placement, to Smart Shopping, which balanced toward a target return, and now to Performance Max. Shopping-based campaigns are still described as the strongest return on ad spend among Google formats. [L1508, 2022+]
- Performance Max automatically handles retargeting. After setup it needs little work once it has been given enough time, which the mentor said could be more than two weeks. [L1107, 2023]

### Performance Max: Results Seen in Sources

- Performance Max campaigns across several accounts returned about 6 to 9 in return on ad spend. Results were not clearly better than manual campaigns, so underperforming campaigns were turned off and the others kept running. [L0970, 2023]
- An agency-managed Google Ads account with Performance Max returned about 4x to 5x ROAS, with the main returns coming from that campaign type. [L1213, 2023]
- Performance Max worked for some accounts but failed for others with the same setup. [L1113, 2022]
- A Google Ads account was shown with about 450,000 spend over several years in Performance Max campaigns; the speaker estimated the spend at about 450,000 in the shown view. [L1440, 2021+]
- In an already optimized Performance Max campaign, add budget to scale. Remove products that keep consuming spend without producing sales. [L1113, 2022]

### Performance Max: Brands, Negatives and Setup

- Google Ads for brands (not dropshipping) works best when there is branded search intent. Performance Max campaigns received most of their sales from brand search terms, so they had to be adjusted. [L0577, 2023]
- Performance Max negative keywords cannot be added directly. You need to contact Google support to add them manually. Brand-term share can be checked under Insights, which only looks back 28 days. [L0577, 2023]
- For a product store on Google, use Performance Max rather than standard Shopping or Smart Shopping campaigns. Performance Max pulls from the shopping feed and runs across Search, Display, YouTube and Shopping. [L1251, 2024+]
- Once Performance Max and the Google Merchant Center feed are set up, the campaign runs largely hands-off, because Google handles much of the optimization. The main work is in the initial setup and the assets. [L1251, 2024+]
- Start Google Ads for e-commerce with Performance Max, since it automates distribution across Search, Shopping, YouTube and Display from Google data. It needs a week or two before manual changes, and it needs consistent budget to optimize. [L1440, 2021+]
- Performance Max is harder to set up for beginners because it needs money to optimize. Do not micromanage it the way TikTok or Facebook is managed. Search and shopping ads are harder to run than Performance Max for beginners. [L1440, 2021+]
- Performance Max is an AI-driven campaign type that needs a couple of weeks before its results can be judged. Once it runs, the main job is to adjust budgets every one or two weeks. [L0694, 2024]
- Start Performance Max only after the account has about 30 to 40 sales. Before that, begin with Search and Shopping campaigns using keywords around the product. [L0788, undated]
- Performance Max needs at least 50 conversions to optimize well. The account also needs about two weeks to collect data and warm up before results stabilize. [L1213, 2023]

### Smart Shopping: Status and Campaign Types

- Smart Shopping campaigns were sunset by the end of Q3 2022. Merchants migrated to either Standard Shopping or Performance Max. [L0272, 2022]
- Smart Shopping is being sunset and replaced by Performance Max. Standard Shopping is the campaign type taught as the core. [L0969, 2022]
- Smart Shopping campaigns are generally not recommended. Performance Max may be tested with about 10% of the ad budget, but it only works well with a large history of past conversions. [L0970, 2023]
- Shopping campaign types include standard Shopping, Dynamic ads on the Google network, YouTube shopping, Gmail shopping and product listing retargeting on the display network. Smart Shopping is Google's automated campaign type and automatically includes retargeting, dynamic retargeting, YouTube ads and Gmail ads. [L0454, 2019]
- Smart Shopping is most worth running when the account already has a high impression share. It covers Shopping, retargeting, dynamic retargeting, YouTube ads and Gmail ads, and is valued for simplicity, performance and reach. [L1033, 2019]
- Smart Shopping gives little control. You cannot see placements, performance by dimension such as gender, location or income, or the split between cold and retargeting traffic, and negative keywords are not available. Placement exclusions can only be set at the account level. [L0454, 2019]
- Smart Shopping works best with one brand per campaign. Product groups should contain 100 or fewer products, and each small product group should generate more than 20 conversions per month. [L1033, 2019]

### Smart Shopping: Learning Time and Stability

- Pausing a new Smart Shopping campaign before it has enough conversions cuts off its learning. Google suggests giving it about one month to learn. Judge it only after that period. [L0454, 2019]
- Frequent changes to Smart Shopping campaigns disrupt the automated learning, so settings should be left alone for a stable period. Make adjustments deliberately rather than on a daily basis. [L1033, 2019]
- The lesson estimated Smart Shopping succeeds about 50 to 60% of the time. Sometimes it performs very well, sometimes it needs more learning, and sometimes it must be turned off in favor of Alpha Beta. Plan for all three outcomes. [L0454, 2019]
- Automated Google recommendations and Smart features mainly raise spend rather than performance. For high-ticket dropshipping, managing settings manually performs better, so use your own judgment. [L0742, 2021-22]

### Smart Shopping Rollout Procedure

Procedure to roll out Smart Shopping safely [L0454, 2019; L1033, 2019]:

1. Start with one brand at a time.
2. Exclude that brand from the standard Alpha Beta campaign.
3. Place the brand in a Smart Shopping campaign.
4. Prefer brands with 100 or fewer products, since smaller sets are easier for Google to learn.
5. Confirm the brand already has more than 20 conversions per month.
6. Prioritize brands that already convert well and have a high search impression share, because they gain the most clicks and conversions.
7. Do not change the campaign frequently; allow about one month for learning.

Build the shopping structure in a hierarchy: keep Alpha Beta as the baseline, peel one brand into Smart Shopping, then test Bing, other product listing ads, YouTube shopping ads and Gmail shopping ads. Compare each new element against the Alpha Beta baseline before expanding it. [L0454, 2019]

### Testing Automation Safely

Procedure to test a change safely with Drafts and experiments [L0454, 2019]:

1. Open Drafts and experiments in the left sidebar of Google Ads.
2. Create a draft from the campaign; the draft lets you change the campaign without affecting live traffic.
3. Make the changes to test in the draft, for example grouping products instead of segmenting by product ID, turning on automated bidding, or adding negative keywords.
4. Run an experiment from the draft.
5. Set how much traffic or budget goes to the test, for example a 50/50 split or a smaller share of 20, 30 or 40%.
6. Compare the results and decide based on the experiment outcome.

Procedure to test automated bidding on an existing Shopping campaign [L1033, 2019]:

1. In Google Ads, open Drafts and Experiments.
2. Create a draft from the original campaign.
3. In the draft, turn on bid automation.
4. Run the draft as an experiment against the original campaign and compare the results.

An experiment tests automated bidding on a share of traffic instead of the whole campaign. If the automated version wins, the test shows where to scale; if the manual campaign wins, that result confirms the existing setup beats automation. Either outcome is useful. [L0454, 2019]

A couple of years before the lesson, automated bidding beat manual setups only about 10 to 20% of the time, and that share was rising. Test automated bidding on your own account instead of assuming either outcome. [L0454, 2019]

With a large amount of account data, a smart campaign can be tested at a small budget in parallel with the manual campaigns. The manual campaigns stay switched on during the test. [L0963, 2022]

### Case: Switching a Shopping Account to Smart Shopping

A client's Shopping product listing ads were slowly declining. The campaign manager switched the account from the standard Alpha Beta shopping setup to Smart Shopping. Afterwards the chart showed large daily swings, with revenue peaks around $25,000 on some days and a reference line near $12,500 that many days exceeded. Cost and conversions were high but volatile, and the recent period clearly outperformed the older period on sales and ROI. [L0454, 2019]

### AI for Keyword and Search Term Work

- Use AI for keyword research, search term analysis and negative keyword lists rather than for managing the ad account itself. These tasks carry the least risk and give the biggest time saving. [L0876, 2025-26]
- Any large language model can be used for the negative keyword and search term prompts. The lesson used Gemini in a browser chat for these tasks. [L0876, 2025-26]
- For a large search terms export, attach the full file to an AI chat together with the audit prompt and wait for it to finish. A file of about 13,000 rows took a few minutes to process in Gemini, so review the output only after the run is complete. [L0876, 2025-26]
- AI generates plausible-looking keywords without knowing whether anyone searches for them, so it can produce long lists of terms with zero search demand. Never build campaigns on AI keyword ideas before validating their search volume. [L0876, 2025-26]

Keyword validation procedure [L0876, 2025-26]:

1. Use AI to generate keyword ideas and group them by theme and intent.
2. Take the keyword groups into Google Keyword Planner.
3. Check each group for real average monthly search volume and keep only terms that people actually search.
4. Feed the validated set back to the AI as seed keywords to find more ideas, then validate again.

Keyword and campaign prompt [L0876, 2025-26]:

```text
Act as a senior Google Ads strategist working for eCommerce and DTC brands.

1. Business summary from the website alone: Describe what the company sells, its main product category, the problems its customers face, its core benefits and unique selling points, its trust signals, current offers, pricing and guarantees, and any compliance limits (claims that cannot appear in ads).

2. High-volume keyword themes: Using that summary, group keyword themes by product sold, priority and search intent. Keep each ad group narrow enough that matching ad copy can be written for it. For every theme, state its intent stage and priority. Never invent keywords nobody searches for. Mark every theme that still needs search volume confirmation.
```

### Where Sources Disagree

| Topic | One source says | Other source says | When each applies |
|---|---|---|---|
| Is Performance Max worth running? | Not recommended for dropshipping, black box, declines over time, or for this store model [L0255, 2025; L1115, 2024; L0855, 2023; L1015, 2020-26] | Start a product store on Performance Max; an agency account returned about 4x to 5x ROAS [L1251, 2024+; L1440, 2021+; L1213, 2023] | The negative view covers dropshipping and the store model taught in the course. The positive view covers a product store on Google, with branded intent in the brand case [L0577, 2023; L1251, 2024+]. Test in your own account [L0454, 2019] |
| Size of a Performance Max test | About 10% of the budget, with Standard Shopping as the main spend [L0854, 2022] | About 10% of the ad budget (2023) [L0970, 2023]; a small budget in parallel with manual campaigns still on [L0963, 2022] | Same test size in both; the proven Shopping campaigns stay on in every version |
| Time before judging Performance Max | 8+ weeks to reach Smart Shopping performance; results not guaranteed [L0272, 2022] | About two weeks to collect data and warm up [L1213, 2023; L0694, 2024; L1440, 2021+]; more than two weeks [L1107, 2023] | The 8+ week figure compares to Smart Shopping; the two-week figures cover stabilization |
| Start Performance Max or not | Start only after about 30 to 40 sales [L0788, undated] | Start Performance Max as the first campaign [L1440, 2021+] | Use the sales count as the gate; below it, begin with Search and Shopping [L0788, undated] |
| Automation in new accounts | Start manual; no Smart Shopping for all products [L1090, 2021; L1112, 2021] | Roll out Smart Shopping one brand at a time once conversions exist [L0454, 2019; L1033, 2019] | New or thin accounts: manual. Accounts with conversion history: staged rollout |
| Smart Shopping status | Sunset by end of Q3 2022 [L0272, 2022] | Rollout steps and hierarchy in undated lessons [L0454, 2019] | The dated sunset outranks the undated steps; read the steps as a method for a staged test |
| Smart Shopping success | About 50 to 60% of the time [L0454, 2019] | Automated bidding beat manual setups about 10 to 20% of the time, rising [L0454, 2019] | Different measures: the first is for Smart Shopping, the second for automated bidding against manual setups |
| Performance Max ROAS | About 6 to 9 across several accounts, not clearly better than manual (2023) [L0970, 2023] | About 4x to 5x in one agency-managed account [L1213, 2023] | Different accounts; the 6 to 9 figure was measured against manual campaigns |
| Hands-off or hands-on | Largely hands-off after setup; do not micromanage [L1251, 2024+; L1107, 2023; L1440, 2021+] | Adjust budgets every one or two weeks; add or remove products and asset groups [L0694, 2024; L1113, 2022; L1281, 2022] | Hands-off refers to optimization after setup; budgets and assets still need a person |


Part 51 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/50-display-ad-formats-and-cta.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/52-microsoft-bing-ads.md
