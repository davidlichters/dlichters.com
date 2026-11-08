<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 12 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/11-attribution-settings-and-the-march-2026-changes.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/13-testing-architecture.md

## Campaign Structure: CBO, ABO, Objectives and Budget Setup

### Account Hierarchy and Levels

- Ads Manager has three levels: campaign (objective and budget strategy), ad set (budget, audience, placements and message destinations), and ad (identity, creative and ad name). Settings must be made at the correct level, so a destination or audience change made at campaign level will not apply to the ad set. [L0614, 2026]
- The ad account holds campaigns, campaigns hold ad sets, and ad sets hold the ads. Each campaign has one objective, and each ad set holds one audience. [L0649, 2019]
- At campaign level the optional budget is set. At ad set level the countries, age, gender, interests, placements, schedule and, under ABO, the budget are set. At ad level the media, copy, headline and destination link are set. One campaign holds many ad sets, and each ad set holds many ads. [L0647, 2024+]
- The campaign defines the objective (sales, traffic or leads), the ad set holds targeting (countries, audiences, placements, start date and time), and the ad combines the creative (video, image or carousel) with the ad copy. [L1024, undated]
- Settings are entered from the top level down, so campaign settings are set before the ad set and the ad. [L1029, 2020-26]
- Settings made at a higher level affect everything below it, so the structure must be understood before building. [L0865, 2025-26]
- In the Power Editor hierarchy, the campaign represents the industry or theme, each ad set targets one precise interest, and each ad holds the creative shown in the feed. [L0641, 2014]
- in a Facebook campaign, ad sets sit inside the campaign, ads sit inside the ad sets, and the audience is chosen at the ad set level. Name ad sets after their audience, for example website visitors within 7 days. [L1086, 2019]

#### Ad Level Hierarchy Table

| Level | What you set there |
|---|---|
| Campaign | The offer you want to sell (for example resistance bands) and the optimization objective (for example Conversions) |
| Ad set | The target audience, budget, schedule, placement (mobile, desktop, iPhone, iPad and so on), and bidding for clicks |
| Ad | The creative: image, video and copy |

[L0643, 2015]

### Campaign Objective and Buying Type

- For new Meta sales campaigns, choose the Sales objective. Awareness, traffic, engagement, leads and app promotion are not recommended for direct-response ad accounts that aim to make money. [L0865, 2025-26]
- Set the objective that matches the real goal, such as conversions for leads or sales, or catalog sales for product sales. Choosing another objective, such as traffic or engagement while wanting sales, to steer delivery is outdated. [L0649, 2019]
- Campaign objective: set Conversions, unless you are driving traffic for retargeting. [L0643, 2015]
- Choosing the purchase conversion objective targets audiences with high purchase intent, so CPMs are higher than in engagement campaigns. Interest targeting determines the first sales in early testing. [L1217, 2023+]
- Create > Choose a buying type: Auction. Keep Auction for new sales campaigns and do not switch to Reach and frequency or other manual buying types. [L0865, 2025-26]
- Campaign details: keep Buying type on Auction, keep Campaign objective on Sales, and leave Product information untouched, because it only makes Meta suggest products to people and is not needed for a basic setup. [L0865, 2025-26]
- Reach and frequency campaigns use buying type Reach and Frequency and objective Reach. When asked, set how many impressions per person per day and over how many days. [L0649, 2019]
- Total impressions per person = impressions per day multiplied by number of days. Example: 2 impressions per day for 7 days equals 14 impressions in total. [L0649, 2019]

#### Campaign Types

| Campaign Type(s) | Purpose | Creative Requirements |
|---|---|---|
| Cold Traffic: Lead Generation & Warm Traffic: Lead Generation | Collect names and emails from target market audience that has never engaged with your business | 3-4 unique ads used in all lead generation ad sets |
| Hot Traffic: Dynamic | Recover lost sales by showing website visitors ads for specific products they viewed on your store | 3-4 dynamic ads with unique copy |
| Hot Traffic: Static | Recover lost sales by showing website visitors ads that build authority and trust | 3-4 unique ads for authority, trust, and closing sales |
| Customers: Goodwill | Strengthen customer relationships, reduce buyer's remorse, build authority and trust | 1 video ad |
| Promotions | Generate additional sales during limited-time periods (Labor Day Sale, Cyber Monday, etc.) | 3-4 unique ads per promotion |
| Sandbox | Split-test creatives to identify winners without affecting core campaign performance | 2 ads per test: 1 control (proven winner), 1 variation (potential new winner) |

[L0238, 2019]

#### Seven-Campaign Account Table

| Campaign | Buying type | Objective | CBO | Audiences | Ads per set | Purpose |
|---|---|---|---|---|---|---|
| Cold Traffic Lead Gen | Auction | Conversions (leads) | On | Interests and lookalikes | 3-4 lead magnet ads | Collect names and emails from people who never engaged with the business |
| Warm Traffic Lead Gen | Auction | Conversions (leads) | On | Website visitors 180 days, Facebook engagement 180 days, Instagram engagement 180 days | 3-4 lead magnet ads | Collect names and emails from people who did engage |
| Hot Traffic Dynamic | Auction | Catalog Sales | On | Website visitors 7 days who did not buy | 3-4 dynamic product ads | Recover lost sales by showing products viewed on the store |
| Hot Traffic Static | Reach and Frequency | Reach | Not stated | Website visitors 7 days who did not buy | 3-4 trust and authority ads | Build authority and trust alongside dynamic ads |
| Customers Goodwill | Reach and Frequency | Reach | Not stated | Purchasers in the last 7 days | 1 thank-you video | Thank new buyers and build the relationship |
| Promotions | Reach and Frequency | Reach | Not stated | Warm audiences (180 days) including past customers | 3-4 sale ads | Seasonal sales and supplier promotions |
| Sandbox | Split test (creative) | Leads (per example) | Not stated | Best-performing cold audience | 2 per test (control and variation) | Test new creatives without touching core campaigns |

[L0649, 2019]

#### Sales Campaign Creation Procedure

1. In Ads Manager, confirm you are working in the correct ad account.
2. Click Create campaign.
3. Choose Sales as the campaign objective.
4. Choose Manual sales campaign instead of Advantage+ shopping campaign.
5. Name the campaign with today's date, the product name and CBO.
6. Turn on campaign budget optimization (CBO).
7. Set the total test budget.
8. Set the campaign bid strategy to highest volume.
9. Continue to the ad set level.

[L1193, 2026]

#### Sales Campaign Creation Procedure

1. Click Create.
2. Choose the Sales objective, because the main goal is driving sales.
3. Click Continue and start with a manual sales campaign.
4. Scroll down and switch off Advantage campaign budget, so no budget is set at campaign level during testing.
5. Name the campaign: product name followed by 'audience testing campaign'.

[L0647, 2024+]

#### Full Launch Procedure for a New Store

1. Create a campaign with the objective Sales, choose Manual campaign setup (not Advantage+/CBO), and name it after the store. [L0642, undated]
2. Set budget optimization to ABO (budget set per ad set) so each interest test gets the same budget. [L0642, undated]
3. Confirm the Meta pixel is connected and that the pixel ID (last three digits) matches the one shown in the Shopify Facebook app. [L0642, undated]
4. Set the conversion event to Purchase. [L0642, undated]
4a. Set the daily budget per ad set to $5 and schedule the start for the next day at 6:00 a.m. (the presenter's own choice; 12 p.m. or 12 a.m. also work). [L0642, undated]
5. Set location to Switzerland, age minimum 25+, and leave the first ad set as Broad (no interests) with German as the language, because the ads are in German. [L0642, undated]
6. Leave placements on Advantage+ placements. [L0642, undated]
7. Select the correct Facebook Page and do not connect an Instagram account, so clicks go directly to the landing page. [L0642, undated]
8. Use manual upload (not a catalog) with a single image or video, write primary text, headline with the offer, and description, and set the CTA. [L0642, undated]
9. Duplicate the ad set to create four ad sets with the same creative setup, each testing a different interest, then review and publish. [L0642, undated]

#### Campaign Setup for Creative and Audience Tests

- Recommended testing budget and structure: start with the recommended testing budget from the Meta ads module, and follow its campaign structure, creatives and budgets. Do not improvise the structure on the first launch. [L0491, 2026]
- Keep one product per Meta ad campaign; every additional product you sell needs its own separate campaign so the algorithm can optimize for that product. [L0874, 2026]

### Budget Optimization: CBO Versus ABO

#### Definitions

- CBO (Campaign Budget Optimization, now called Advantage campaign budget): one budget is set on the campaign, and Meta distributes it across the ad sets. [L0865, 2025-26; L1021, 2026; L0647, 2024+]
- ABO (Ad set Budget Optimization): a budget is set on each ad set, and each ad set spends its own budget. [L0647, 2024+; L0524, 2023; L1021, 2026]
- Principle: CBO is used for scaling because Meta distributes one campaign budget across the best-performing ad sets. ABO is used for testing because it forces a fixed budget into each ad set. [L0348, 2026]
- Principle: ABO keeps spending under your control because a new pixel has no purchase data for Meta to optimize with. [L0647, 2024+]
- CBO works by sending several copies of the same interest to different pockets of the audience, so the campaign can shift budget to the pocket that performs best. For example, a $10 daily budget at a $10 CPM reaches about 1,000 people per day, which is a tiny share of a 30 million audience. [L0645, 2023]
- Under CBO, after about a week the campaign shifts most budget to the best interest ad set. If that ad set drops off, budget flows back to the others. [L0649, 2019]

#### When Each Structure Applies (Sources Agree and Differ)

| Situation | Recommended structure | Source |
|---|---|---|
| Single product test | CBO | [L0348, 2026] |
| Several different products tested at once | ABO, not as a beginner | [L0348, 2026] |
| Beginners and mid-stage accounts | CBO as the default | [L1019, 2026] |
| Scaling proven winners | CBO | [L0348, 2026; L0645, 2023] |
| Testing new interests or a new store | ABO | [L0642, undated; L0645, 2023; L0647, 2024+] |
| Creative testing with a fixed budget per creative | ABO | [L0398, 2023+] |
| Multi-interest tests on a new store, German-speaking markets | ABO with several similar interests in one ad set at $5 | [L0646, 2023] |
| Default one source course recommendation | CBO; ABO advised against | [L0865, 2025-26] |
| Lead generation with one source's campaigns | CBO on | [L0649, 2019] |

- ABO is not a scaling method and should not be used by beginners to scale, because it burns the budget fast. Scaling with ABO is a mistake; move winners to a CBO for scaling. [L0348, 2026]
- ABO only makes sense with a large budget reserve. [L1019, 2026]
- Use CBO only for scaling with known winning interests and creatives, because CBO would otherwise concentrate spend on one interest and starve the rest of the test. [L0645, 2023]
- A new store that tests interests should use ABO rather than CBO, so that each interest receives the same fixed budget for a fair comparison. CBO is better used later when scaling winners. [L0642, undated]
- To decide between CBO and ABO for your account, run the same proven interest in both structures for a set test period and compare ROAS and purchases. Keep ABO for testing new interests, and use CBO for scaling only once an interest is already profitable on ABO. [L0645, 2023]
- Test both CBO and ABO in your own account, since the better structure depends on the specific ad account. [L0693, 2024]
- Use ABO campaigns for creative testing, because the budget is fixed per ad set and each creative can be read on its own. When a winner is scaled into CBO or cost-cap campaigns, Meta controls the spend allocation, so put at least two to three creatives in each ad set to keep delivery from concentrating on a single ad. [L0398, 2023+]
- In a separate ABO test campaign the budget is set at ad set level, so every creative gets spend regardless of early results. In a scaling CBO, some new creatives may get little or no spend, so you cannot tell whether they work. [L1107, 2023]
- Running an ABO scaling ad set alongside a separate testing ad set that targets the same interest usually makes the testing sets lose delivery. [L0524, 2023]
- Stay on CBO while testing, because ABO means funding every ad set manually, which takes a large budget. Let the algorithm allocate spend, and add bid or cost caps later once the pixel has data. [L1195, 2026]
- Switch to ABO only after the pixel has real purchase data. [L1019, 2026]
- Switch from CBO to ABO only after around 80-100 website purchases from the CBO, with rich data from custom ads and high-intensity testing. [L1195, 2026]
- Move from ABO to CBO or other campaign types only after the pixel has collected good purchase data, because Meta can then identify likely buyers and allocate spend itself. [L0647, 2024+]
- Use ABO only when testing several different products at once, and not as a beginner, because ABO uses up the budget quickly. Use CBO for a single product test and for scaling. [L0348, 2026]
- Lifetime budget optimization is hardly ever recommended. It has specific uses, such as some Black Friday setups, and is only used in those cases. [L0865, 2025-26]

#### Conflicting Position on the Test Budget Structure

- one source and other sources recommend a CBO test (Sales objective, CBO, highest volume) as the standard test structure. [L1193, 2026; L0865, 2025-26]
- one source recommends ABO for testing and says CBO was unreliable for one product: CBO broke even or lost money, so ad set budgets were used instead. [L0999, 2023]
- one source's Advantage+ campaign note: Advantage+ campaigns are scaled with the same strategy used for other campaigns. [L1107, 2023]
- Testing a CBO that holds only one winning creative limits ad delivery; add two to three creatives even when one ad keeps producing sales. [L0645, 2023]

#### Case: CBO Failed, ABO Worked

- Starting point: a profitable ad with a ROAS of roughly 2 to 3, and a testing-phase CPA of about 10 to 50 dollars. [L0999, 2023]
- Step 1: the ad was duplicated into a CBO with three ads and a $200 budget, and CPA rose with almost no sales. [L0999, 2023]
- Step 2: a second CBO with a $20 budget and the same ads also failed. [L0999, 2023]
- Step 3: the ad in a separate testing campaign with a $5 budget performed well. [L0999, 2023]
- Result: CBO was unreliable for this product because Facebook shifts budget between ads and removing weaker ads disrupted delivery, so ABO was used instead. [L0999, 2023]

#### Case: Budget Flow in a Seller's CBO

- The seller used campaign budget optimization (CBO) on Facebook instead of ad set budgets (ABO). Most of the spend flowed to the broad interest and online-shopper audiences. [L1127, 2024]

#### Mistakes With Per-Ad-Set Budgets

- Budgets set per ad set make a profitable ad set stop at its daily cap while break-even ad sets keep spending. This forces constant manual reallocation, so use CBO in campaigns that need it. [L0649, 2019]
- With ABO, a budget set per ad set is fixed, for example 25 dollars for each of four ad sets. Meta offers a setting that lets it move part of an ad set budget to other ad sets, which undermines manual control, so ABO is not recommended. [L0865, 2025-26]

### CBO Settings and Budget Figures

#### Setting Procedure

- Set one total daily budget across all targeting groups and let Facebook automatically allocate spending to the most profitable audiences and placements; for example, allocate $100/day and Facebook distributes where it performs best. [L0238, 2019]
- Campaign level: turn on Advantage+ campaign budget (CBO), enter the test budget there, since Meta then distributes that single campaign budget across the ad sets. [L1193, 2026]
- Budget > Budget strategy: choose Advantage+ campaign budget (CBO). Enter the daily amount in Daily budget in USD. Choosing CBO removes the ad set budget suggestions shown in Ads Manager. [L0865, 2025-26]
- The CBO toggle is off by default in the lead generation setup and must be turned on. [L0649, 2019]
- Ad set > Budget: check that the budget shown is the campaign budget, because an ad set still set to ABO will show its own budget. If so, go back and change it to Campaign budget optimization before continuing. [L0865, 2025-26]
- The Advantage+ sales campaign toggle is shown as on in the recommended setup for new sales campaigns, and the campaign-level budget is used. If an ad set shows that Advantage+ is off for Budget, that ad set is not using the campaign budget and should be checked before publishing. [L0865, 2025-26]
- Campaign level CBO test: choose the Sales objective, switch Campaign budget to Advantage+ campaign budget, and set the daily budget to a test amount. Use $50 for a normal test, with $75 or $100 for a more aggressive test; more spend yields data faster and bad campaigns can be cut earlier. [L0348, 2026]
- CBO campaign-level settings: turn off the Advantage+ sales campaign recommendations, leave Campaign bid strategy at its default, and set the Performance goal to Maximize number of conversions. Use Conversion event purchase and confirm the correct pixel dataset is selected. [L0348, 2026]
- Set the campaign to CBO and allow Meta to share the budget across the ad sets in the testing campaigns. This lets Meta move spend toward the ad sets that perform best. [L1021, 2026]

#### Signals Meta Reads Under CBO

- Meta's Advantage campaign budget (CBO) continuously reads signals such as CTR, CPA, CPC, conversion volume and ROAS. It moves budget toward ads converting at lower cost and reduces budget for underperformers throughout each day. Spend is therefore treated as Meta's confidence signal for each ad. [L0613, 2026]
- With CBO turned on, Meta spreads the campaign budget across the ad sets to find more results. This makes the single campaign budget the one control you set for the test. [L1193, 2026]

#### Budget Spend Behaviour

- With a daily budget of 500 USD, Ads Manager shows an average spend of about 500 USD per day, a maximum daily spend of 875 USD (175 percent of the daily budget) and a maximum weekly spend of 3,500 USD (seven times the daily budget). Meta can spend more on some days and less on others, but it stays within the weekly cap. [L0865, 2025-26]
- With an Advantage campaign budget, the maximum weekly spend equals seven times the daily budget. Daily spend can vary above or below the average within the week, but the weekly total cannot exceed the cap. The example shows a maximum daily spend of $43.75 and a maximum weekly spend of $175, which matches a $25 daily budget. [L1029, 2020-26]
- Facebook has no minimum budget, and a daily budget of $1 is enough to keep a campaign active. Keep it running at this level until you have money to scale it back up. [L0643, 2015]

#### Budget Figures by Source

| Figure | Context | Source |
|---|---|---|
| $1/day | Minimum to keep a campaign active | [L0643, 2015] |
| $5 per ad set | one source new-store ABO test, one interest per ad set | [L0642, undated; L0646, 2023] |
| $10 to $15 per ad set per day | one source initial product test, ABO, 6 to 10 ad sets | [L0375, undated; L0376, undated] |
| $15 per ad set | one source testing structure, ABO, 7 to 8 ad sets | [L0645, 2023] |
| $10 daily | one source CBO example, reaches about 1,000 people per day at $10 CPM | [L0645, 2023] |
| $10 in account currency per ad set | Example ad set with three ads | [L0353, 2023] |
| $50 per day minimum | Learning-phase minimum; lower budgets do not gather enough learnings to leave the learning phase | [L1016, 2026] |
| $50 per ad set | Common ABO starting budget for one product with three creatives | [L0348, 2026] |
| $25, $50 or $100 per product | ABO budget depending on how aggressively each product is tested | [L0348, 2026] |
| $50 CBO | Beginner test budget | [L1107, 2023] |
| $50 normal, $75 or $100 aggressive | CBO test amount | [L0348, 2026] |
| $75 start, then $150, $300, $500, $750, $1,000 | Aggressive testing CBO scaling steps; continue higher if results hold | [L1021, 2026] |
| $200 to $300 CBO | Budget after sales are reliable | [L1107, 2023] |
| $200 CBO | Failed case: CPA rose with almost no sales | [L0999, 2023] |
| $20 CBO | Failed second CBO in case | [L0999, 2023] |
| $5 ABO | Working separate testing campaign in case | [L0999, 2023] |
| $100/day | Example total daily budget across audiences | [L0238, 2019] |
| $500/day | Example in Ads Manager budget display | [L0865, 2025-26] |

#### Lifetime and Ad Set Spending Limits

- Ad set > Ad set spending limits: tick the box and enter a daily minimum or a daily maximum for the ad set. Use this only when a specific spend limit is needed. [L0865, 2025-26]
- Meta's existing customer budget cap can no longer be applied to new campaigns. To get a similar effect, use Campaign budget optimization together with ad set spending limits, and campaigns that already use the cap keep working. [L0865, 2025-26]


Part 12 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/11-attribution-settings-and-the-march-2026-changes.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/13-testing-architecture.md
