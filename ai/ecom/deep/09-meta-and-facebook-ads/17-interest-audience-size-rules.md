<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 17 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/16-audience-strategy-interests-broad-targeting-countr.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/18-gender.md

### Interest Audience Size Rules

| Rule | Size | Applies to | Source |
|---|---|---|---|
| Minimum for single-interest tests | At least 5M; the bigger the better | New pixel or new product test | [L0375, undated; L0376, undated] |
| Large countries | About 5M or more per interest | Detailed targeting in large markets | [L0648, undated] |
| Small single country | Judge the interest against that country's total (for example 20-30M in Germany when worldwide is 100M) | Single small country | [L0648, undated] |
| Preferred size | 10M+, ideally, and preferably 20 to 30M+ | General interest selection | [L0639, 2023] |
| Common size | Above 10M | Starting big interests, then suggestions | [L0645, 2023] |
| Common size | About 10M or more; audience sizes of 30 to 100M acceptable | Current Meta practice | [L0647, 2024+] |
| Pinterest | 5 to 10M target range, keep the total below 30M | Pinterest interests | [L1134, undated] |
| Kids product | At least 1 to 2M | Kids product | [L0692, 2023] |
| Target Expansion | Use only when the audience is about 10M or fewer | TikTok and Facebook | [L1177, 2023] |

- Choose interests with large audiences, ideally 10 million+ and preferably 20 to 30 million+. Very small audiences (for example around 50k) restrict the algorithm, force the content onto a narrow group, and usually lead to higher CPMs. [L0639, 2023]
- Pick interests with an audience size above 10 million, starting with big interests related to the product. Then add Facebook's suggested interests from them and test one at a time. [L0645, 2023]
- Choose interests with an audience of about 10 million or more. Meta has removed many narrow interests and now favours broad ones, and audience sizes of 30 to 100 million are acceptable. [L0647, 2024+]
- Choose interests with an audience of at least 1 to 2 million people. Very narrow or very small interest audiences should be avoided. [L0692, 2023]
- Keep detailed targeting broad. For large countries an interest should have an audience of about 5 million or more. In a single small country, judge an interest against that country's total, for example 20-30 million in Germany when worldwide the audience is 100 million. [L0648, undated]
- On Pinterest, a more specific sub-interest under an already selected broad interest can reduce the displayed audience size, because the platform gives priority to the narrower interest. Check the audience estimate after each addition, and keep the total within the 5 to 10 million target range, below 30 million. [L1134, undated]
- Target Expansion on TikTok and Facebook should be avoided unless the audience is narrow, such as about 10 million or fewer. A broad or balanced audience should not use it, because the algorithm then shows the ad to lower-quality users. [L1177, 2023]

#### Stated Size Is Not the Active Audience

- An interest audience stated as 30 million is not shown in full. With a purchase objective, the platform selects a much smaller pocket of users who showed buying-related behaviour, so the active pocket is far smaller than the stated size. [L0639, 2023]
- Different interests can each reach different pockets and may overlap. Meta offers an audience overlap check for this. [L0639, 2023]

### Testing Single Interests

#### Structure

Initial test structure for a new Facebook campaign with a limited budget:

1. Start with five ad sets, each with one interest. [L1216, undated]
2. Alternatively, start with four interest ad sets and one broad ad set. [L1216, undated]
3. Once sales come in and the store converts well, expand the number of interests or ad sets. [L1216, undated]

- Start Facebook interest testing with four or five interests, to spend the budget wisely in the beginning. Scale the number of interests only once the store has sales and a good conversion rate. [L1216, undated]
- An initial interest test usually covers about 5 to 10 interests, from which 2 to 3 or more winners often emerge. Keep adding new interests after that, because the goal of horizontal scaling is a steady stream of new winning pockets, not only the first winners. [L1335, 2023+]
- The five ad sets compete against each other. Use one broad, related interest per ad set. [L0647, 2024+]

Launch settings for a new interest test:

- Set the launch time to 12:00 AM (midnight) of the next day. [L1335, 2023+]
- Use a starting budget of about $10. [L1335, 2023+]
- Name the ad set after the interest. [L1335, 2023+]
- When testing new interests, duplicate an existing ad set and change only its targeting. [L0692, 2023]
- For a test ad set in Switzerland, set location to Switzerland only, minimum age 25+, and language German when the ads are in German. Start with a Broad ad set without interests, then add one interest per ad set. [L0642, undated]
- Use one ad per ad set during testing. In Facebook testing, a single creative per ad set is used. [L1212, undated]

#### One Interest per Ad Set

- Each testing ad set should hold exactly one interest, so that its results can be traced back to that single interest. Multiple interests in one ad set blur which audience is responding. Keep the other ad set settings identical so that only the interest differs between them. [L0647, 2024+]
- Test one interest per ad set and do not stack several interests. With stacked interests you cannot tell which one produced a sale, while Meta keeps spending on the weaker ones. [L0648, undated]
- Adding several interests to one testing ad set makes it impossible to tell which interest produced the purchases. [L0647, 2024+]
- Interest stacking is not required. Test each interest in its own ad set first, and then optionally combine winners into one ad set to see which setup performs better. There is no fixed right answer. [L0642, undated]
- Meta has moved away from narrow stacked interests and now pushes broad targeting. Choose one interest per ad set only if that interest gives better return on ad spend than broad targeting. [L0353, 2023]
- Keep creatives that perform acceptably across ad sets, and drop only those that perform badly in a consistent way. [L0692, 2023]

#### Test Design Examples

- For a new-store or new-product test, test ad copies and different interest audiences, because the winning audience is found through testing. Specific interests often outperform broad targeting. The ad copy here is the primary text in the Facebook ad, not the website copy. [L1185, 2023]
- Test a new product with an interest test, then use the interest that works best for scaling. [L1212, undated]

### Broad Targeting and Creative as Targeting

#### Broad Is Valid, With Conditions

- Facebook's algorithm finds the right audience for a broad campaign on its own if the creative is strong. Broad targeting is therefore a valid start, with country as the main control. You learn the audience from the data the ads generate. [L1218, undated]
- Meta recommends broad targeting, where the creative itself should identify the buyers. Once the creative does that well, you can go fully broad with only country selection. [L0639, 2023]
- Broad targeting should be tested but not assumed to work. [L0999, 2023]
- Facebook's broad targeting is improving and interest targeting may be phased out. The ad and creative relevance matter more than fine interest selection. Even when platforms push broad, a relevant narrow test can still outperform. [L0999, 2023]
- Facebook keeps removing detailed interest options and pushes toward broad targeting, so the relevance of the creative and landing page matters more. In one store, uploading a customer list into an Advantage+ campaign still produced broad delivery that underperformed the niche approach. [L0995, 2023]
- Once an interest or niche produces sales, narrow the creative and targeting to that niche. A catch-all ad is acceptable when the budget is low and the problem is common to many people. [L0644, undated]
- After Apple's 2023 iOS update, tracking became weaker, so broad targeting with expanded audiences became the norm, and the creative now does most of the targeting. Meta expanded audience sizes by turning on detailed targeting in most accounts, and bigger audiences give the pixel more data to optimise with. [L0398, 2023+]
- Since the iOS 14 update, interest targeting has lost much of its precision, and Meta pushes advertisers toward broad targeting. Broad targeting works best when the pixel has a lot of sales data. [L0691, 2024]

Conflict: the tracking change is dated to the 2023 iOS update in one unit [L0398, 2023+] and to the iOS 14 update in another [L0691, 2024]. Both describe the same shift toward broad targeting.

#### Creative Does the Targeting

- The strongest long-term strategy is a creative that wins on its own inside broad targeting, regardless of the learning phase. An ad that hits and sells well is more important than optimising the algorithm. [L0353, 2023]
- The creative itself does much of the targeting now. The people, text and problem shown in an image or video tell Meta who to show it to. For example, an image of a 50+ person with the text 'foot pain' pushes the ad toward that audience. [L0691, 2024]
- Facebook builds a profile of the audience from the ad creative, copy and who responds to it. [L0644, undated]
- Keep producing new creatives with different hooks, angles and narratives. [L0644, undated]
- Keep the ad text, video and visuals relevant to the chosen interest, because the algorithm reads them to decide who sees the ad. [L0999, 2023]
- Broad Advantage+ campaigns depend on the quality of the ads, because Meta chooses the audience itself. The direction of Meta is toward broad targeting without interests, so creative quality becomes the main lever. [L1316, 2024+]
- Since 2026, changing only the hook or primary text of a duplicated video ad no longer reaches a different audience. To target several audiences you need several distinct concepts, because viewers respond differently to short videos (around 30 seconds) and long videos (around 15 minutes). [L0374, 2026]
- Meta's Andromeda delivery system is described as LLM-based and shows ads to users at different awareness levels. A campaign therefore needs messages for several awareness stages rather than one format repeated. [L1195, 2026]
- Running the same creatives across many accounts or sellers raises the risk that Meta flags the business. [L1195, 2026]

### Advantage+ Audience and Audience Controls

- Advantage+ audience lets Meta's AI find people for the ad. Optional audience suggestions steer it toward the people you expect to respond. When no suggestion is added, the AI searches on its own. [L0614, 2026]
- Ads Manager's estimated audience size does not include Advantage+ audience options. [L0614, 2026]
- Under Suggest an audience, Meta can reach people beyond the audience controls when it expects better results. The suggestion field is optional and can be left empty if strict targeting is wanted. [L0865, 2025-26]
- Use Advantage+ audience with broad targeting for the standard setup. Leave the default age range of 18 to 65+ and all genders unless there is a very specific reason to restrict them. [L0865, 2025-26]
- Ad set > Audience > Audience definition: keep Broad. Narrow and Further limit the reach of your ads are not recommended. Only location and audience exclusions should normally be changed. [L0865, 2025-26]
- Ad set > Audience > Languages: a language restriction is available if ads should run only in one language. Leave it at the default for a standard setup. [L0865, 2025-26]
- In a product test, leave the ad set audience broad. Do not add detailed targeting or other audience controls, and only restrict audience settings for legal or practical constraints. [L1193, 2026]
- For worldwide targeting, Facebook can search wider than your strongest markets, see the Countries section. [L0067, 2023]
- When testing multiple countries at once, break the data down by country. If one country pushes CPM and CPC up sharply (e.g. the US), remove that country from targeting. [L1316, 2024+]

### Countries and Market Testing

#### Country Sets to Start With

| Set | Countries | Applies to | Source |
|---|---|---|---|
| Big Five | USA, Australia, New Zealand, Canada, UK | Start of a country test for a new product | [L0361, 2024] |
| Top four | US, Canada, Australia, UK | Choosing countries based on the product's buyers; high spending power | [L0648, undated] |
| Top four or five | e.g. United States, Canada, Australia, New Zealand, United Kingdom | Target the top four or five countries for your market | [L0647, 2024+] |
| Product test | United States, United Kingdom, Australia, New Zealand, Canada | Five-country product test | [L1193, 2026] |

- Choose countries based on the product's buyers. The top four (US, Canada, Australia, UK) convert well and have high spending power. European countries also convert well, although these conditions change over time. [L0648, undated]
- Target the top four or five countries for your market, e.g. United States, Canada, Australia, New Zealand and United Kingdom. [L0647, 2024+]
- Target five countries for the product test: United States, United Kingdom, Australia, New Zealand and Canada. [L1193, 2026]
- Targeting several English-speaking markets at once, such as the US, Canada, Australia and New Zealand, can be done. Check the per-country breakdown, because one market may drive the CPM up. [L1216, undated]

#### Country Testing Workflow

Country testing workflow for a new product:

1. Start with the Big Five markets: USA, Australia, New Zealand, Canada and UK. [L0361, 2024]
2. After a couple of days, break down the results by country. [L0361, 2024]
3. Remove countries with high CPM and no sales. [L0361, 2024]
4. Keep scaling the countries that work. [L0361, 2024]

Procedure, per-country ad sets for a clean comparison:

1. Create a separate ad set for each country you want to test. [L0644, undated]
2. Use the same ad and the same copy in every ad set. [L0644, undated]
3. Keep the ad sets in the same campaign and give each the same budget. [L0644, undated]
4. Compare results per country after enough spend, so the test shows which country responds best. [L0644, undated]

- Targeting several countries in one ad set lets Facebook send most of the budget to the country that engages first. In one test about 90% of the reach went to the UK, while Australia and New Zealand got almost no spend. [L0644, undated]
- Meta delivery optimises toward the chosen conversion goal and moves spend to the ad set or country it predicts will convert best. A multi-country ad set can therefore send nearly all budget to one country. [L0644, undated]
- If the goal is to compare countries rather than let the system choose, put each country in its own ad set with the same ad, the same copy and an equal budget. [L0644, undated]
- Conflict: one ad set with several countries lets Meta choose the market and will concentrate spend [L0644, undated]. Separate ad sets per country are required to compare countries cleanly [L0644, undated].
- When running several countries in one campaign, run them in one campaign and break the data down by country to find the best performers, rather than running a separate campaign per country. [L0774, 2023]
- When running several countries in one campaign, break the results down by country in reporting so each market can be judged separately. To put the full budget behind one market, target only that country. [L0661, undated]
- In a test, only the variable under test should differ between ad sets. Unequal budgets or different creatives make the comparison of countries or audiences invalid. [L0644, undated]
- When a product sells in multiple countries, test it in several countries and find the one where it converts best. Then focus the budget there. [L1176, 2023]
- If CPM is high in one country while sales still come from it, remove that country from the ad targeting and keep the others. Compare the country breakdown of the ad account to find the expensive market. [L1216, undated]
- If one country pushes CPM and CPC up sharply, such as the US, remove that country from targeting. [L1316, 2024+]

#### Testing Outside the Main Market

- Launch new ad sets targeting countries outside your main market (for example UK, Canada, Australia without USA) to test if geographic mix improves performance. Test this in parallel, not by cutting existing ads. [L0298, 2023]
- German-speaking neighbouring countries such as Switzerland and Austria are a logical next step after a German market performs well, because the German-language store and creatives can be reused there. Test them as separate markets with their own spend rather than assuming the German results carry over. [L0694, 2024]
- For very small countries, remove as much targeting as possible and go broad, since narrow targeting limits the audience. For larger markets such as the US, Australia, Germany and other top-tier countries, specific interests can still help find relevant buyers. [L0639, 2023]
- When CPC or CPM is too high, the fix is an alternative, broader target audience instead of one narrow audience. For example, expand from only the United States to a group of top-five English-speaking countries such as the UK, New Zealand and Canada. [L0874, 2026]

#### Worldwide Targeting

- For worldwide targeting, keep the strongest English-speaking countries in the audience while letting Facebook search wider. Exclude countries with low buying power or high scam risk: Russia (hit or miss), India (scammy) and Brazil (scammy traffic). Include the top five English-speaking countries. [L0067, 2023; L0640, 2023]

#### Country Data Example

- On Facebook, mobile converted best among devices, followed by tablet and then desktop. In one example, desktop was three times as expensive per click and per lead as mobile, roughly nine times as expensive overall. iOS converted higher than Android. [L0643, 2015]

### Geo-Targeting and Locations

- Geo-targeting in Meta ads can target zip codes, whole states, or a radius around a city instead of an entire country. This lets you limit ads to customers near a supplier's warehouse. [L0942, 2022]
- In the US, Facebook ads can target people by income, household size, political party and the last car they test drove, and geo-targeting can reach people by location in real time. This is useful for higher-priced offers, but it is not available in every country. [L0643, 2015]
- In the Locations field, typing a country name returns a list of matching countries, regions, cities, states and addresses. Each suggestion must be selected from the list. [L0614, 2026]
- The Include dropdown adds the location to the audience. Browse or bulk entry can add several locations at once. [L0614, 2026]
- In the ad set's Locations field, add each target country with the Include control. Under the field, Meta shows the default option 'People living in or recently in this location', which is left as it is. [L1193, 2026]

### Language

- Choose all languages or English as the language setting, unless the landing page and ads are in another language. If the store is in German, select Germany together with the German language. [L0648, undated]
- Run ads in the language of the target market, for example German for a German-speaking audience. English ads weaken trust with local buyers. [L1108, 2023]
- If a product's language version is only English, run English ads. Match the ad language to the language of the product or game in each country. [L1176, 2023]
- Ad set > Audience > Languages: a language restriction is available if ads should run only in one language. Leave it at the default for a standard setup. [L0865, 2025-26]
- For a test ad set in Switzerland, set language German when the ads are in German (Switzerland has German, French and Italian parts). [L0642, undated]

### Age

| Situation | Setting or value | Source |
|---|---|---|
| Certain product types | Do not target below 45 years old | [L0209, 2023] |
| Products aimed at older demographics | 55+ is safe | [L0209, 2023] |
| Fitness-related and other products, general rule | Keep the age range broad and do not cap it at 45, because people over 45 also buy many products, especially fitness-related items | [L1212, undated] |
| Minimum age | 20+ or 21+. An 18 to 20 audience is large but converts weakly due to lower spending power; use it only when you want Meta to explore | [L0648, undated] |
| Standard range | 18 to 65+ | [L0865, 2025-26; L0678, 2023] |
| Do not exclude 65+ | Older buyers can have money and time to spend | [L0678, 2023] |
| Ads targeting only 65+ | Can still produce acceptable results | [L0773, 2023] |
| Parents of children aged two to three | Avoid: CPMs for these audiences are extremely high | [L0692, 2023] |
| Women 40+ | Used as the early test audience in one case | [L0388, 2024+] |
| Women 45+ | Narrowed winning group in scaling, with astrology interest, in two cities | [L0388, 2024+] |
| Women 18 to 35 | Core demographic for a unisex sunglasses brand; men reached mainly as gift recipients | [L0790, 2017] |

- Use 20+ or 21+ as the minimum age. An 18-20 audience is large but converts weakly due to lower spending power, so use it only when you want Meta to explore. [L0648, undated]
- For Facebook ad targeting, keep the age range broad and do not cap it at 45, because people over 45 also buy many products, especially fitness-related items. [L1212, undated]
- Do not target below 45 years old for certain product types. Targeting 55+ is safe for products aimed at older demographics. [L0209, 2023]
- For a new product test, keep the audience broad, for example from 18 to 65+, and do not restrict it early. After sales and data arrive, break ads down by age group, country and gender and narrow the audience toward the best performer. [L0678, 2023]
- Do not exclude the 65+ age group when testing products, because older buyers can have money and time to spend. In the example, the age group that performed best was 55+ for a jewelry product, though the seller did not restrict targeting to only that range. [L0678, 2023]
- For a product aimed at people over 45, a 65+ only ad set can still produce acceptable results. Compare age ranges such as 18-34, 45+ and 65+ in a spreadsheet before choosing the audience. [L0773, 2023]
- Use a spreadsheet to record which age range performs best, for example 18-34, 45+ or 65+. Ads for a single age group, such as 65+, can produce acceptable results when that group converts best. [L0774, 2023]
- Avoid demographic targeting such as parents of children aged two to three, because CPMs for these audiences are extremely high. [L0692, 2023]
- The core demographic for a unisex sunglasses brand was women aged 18 to 35. Men were reached mainly as gift recipients, so the paid budget went to targeting women. [L0790, 2017]


Part 17 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/16-audience-strategy-interests-broad-targeting-countr.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/18-gender.md
