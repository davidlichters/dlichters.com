<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 16 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/15-bidding-cost-cap-bid-cap-and-automated-rules.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/17-interest-audience-size-rules.md

## Audience Strategy: Interests, Broad Targeting, Countries and Demographics

### Choosing the Audience Type: Broad, Interest, or Single Interest

#### Decision by Pixel Maturity

| Situation | Audience approach | Source |
|---|---|---|
| New pixel or completely new product; Meta does not yet know the buying audience | Single-interest testing, with broad interests of at least 5M | [L0375, undated; L0376, undated] |
| Pixel has 1,000 or more purchases | Also test a broad audience with no interest targeting | [L0375, undated] |
| Warm audience foundation exists (email list of 100K+ and months of pixel data from customer conversions) | Broad campaigns become profitable | [L0307, 2023+] |
| Broad campaigns run without a warm audience | CPCs will spike | [L0307, 2023+] |
| Small budget, broad underperforms | A narrow or broad interest audience may be the better starting point | [L0644, undated; L0999, 2023] |

- Broad campaigns (not custom audience or lookalike) become profitable only after a warm audience foundation exists. That requires a large email list (100K+) and pixel training data from months of customer conversions. Once the pixel has enough behavioural data and an engaged audience to retarget, broad works because the algorithm identifies similar high-value users. Test broad only after the warm audience is established. [L0307, 2023+]
- A new pixel or a completely new product does not yet know the real buying audience, so single-interest targeting works best there. Single-interest targeting gives the algorithm a clear audience and gathers better data faster. [L0375, undated; L0376, undated]
- Once the pixel has 1,000 or more purchases, you can also test a broad audience with no interest targeting. [L0375, undated]
- Broad works straight away for some ad accounts. Others need a large daily spend for a while to collect data, such as £50 per day for a month. This is hard on small budgets, so interest-based ad sets may be the better starting point. [L0644, undated]
- When broad underperforms, move to broad interest audiences, such as camping or pets, before falling back to no-interest targeting. Broad interests can still reach millions of people. [L0999, 2023]
- With a small budget, a small narrow interest audience with a relevant ad can still be the better starting point. Broad should be tested but not assumed to work. [L0999, 2023]
- Broad targeting with no interests is worth testing, for example in a single ad set, especially for gift-type products during peak gifting seasons. Interest targeting still works for many accounts. [L0692, 2023]
- Broad demographic targeting is a valid option that Meta encourages. Run demographic and interest tests both. [L0661, undated]
- Broad is not automatically the best start. In one new-store test with ad sets targeting only one country, the broad ad set was the weakest performer. [L0650, undated]
- Broad is what Facebook currently pushes, so creative quality matters more than fine interest selection. [L0644, undated]

#### Older Advice

- For social ads, review the targeting in place for each ad set and check whether it is too broad. If it is, narrow the audience and compare the conversion rate against the broader version. [L0473, 2021-22]

### Audience Research Before Launch

#### Facebook Audience Insights

Facebook Audience Insights is a free Facebook tool that shows the size, interests, age distribution and gender split of an audience. It is used to segment an audience before running ads and to see how much reach each interest combination offers. [L0487, 2018]

- Facebook Audience Insights (facebook.com/ads/audience_insights) shows the size and common interests of a chosen audience by country, age, gender and interests. Use it even without running ads to learn about the market and find where your customers already spend their attention. [L0643, 2015]
- Audience Insights results depend on the location the account appears to be in, so results can show a different country when a VPN is not set to the target market. Check the location before drawing conclusions from the data. [L0487, 2018]
- Narrowing the age range too early can hide the real audience. Start with the broad range and let the data show the characteristics. Narrow only after the interest data shows a clear pattern. [L0487, 2018]

Procedure, research an audience in Audience Insights:

1. Set the location to the target country. [L0487, 2018]
2. Start broad: keep the age range at 18 to 65, keep all genders, and do not narrow the audience yet. [L0487, 2018]
3. Type relevant interest keywords into the interests field one at a time and watch the audience size drop with each addition. [L0487, 2018]
4. Read the gender split and the age distribution that Facebook shows for the audience. [L0487, 2018]
5. Add more specific keywords to refine the niche, then narrow the age range to the bracket that most of the audience falls into. [L0487, 2018]
6. Use the resulting audience as the seed audience for ads. [L0487, 2018]

Reference numbers:

- With the location set to the United States and ages 18 to 65, the interest 'home grilling' alone showed about 25 to 30 million people. Each added interest shrinks the audience. Restricting the age range to 18 to 24 dropped it to about 1 to 1.5 million in one test. Check the gender split at the broad level first, since that grilling audience was roughly 42 to 46 percent men. [L0487, 2018]
- With the United States as location and no interests, the potential audience is about 150 to 250 million people. Adding one large niche brand page narrowed it to about 500,000 to 600,000 people. Adding several related pages raised it to about 700,000 to 800,000 people. [L0641, 2014]

Procedure, research with brand pages:

1. Open Audience Insights from the gear/tools menu in Facebook Ads Manager. [L0641, 2014]
2. Enter a precise interest, such as a well-known brand in your niche, in the precise interests field and watch the potential audience size on the right. [L0641, 2014]
3. Open the Pages suggestions list at the bottom to see pages ranked by relevance to that brand. [L0641, 2014]
4. Add each relevant page to the additional interests field and repeat until you have a large master list of related pages. [L0641, 2014]
5. Save the audience so you can reuse it when building lead campaigns. [L0641, 2014]

Scale check before cold campaigns:

- Before launching cold Facebook campaigns for a niche product such as running gear, check the potential audience size. In the example, roughly 33 million people in the United States could be reached through Facebook ads. [L1203, 2016]
- Lists of pages and interest groups found through the Facebook search can be used as targeting interests in Power Editor, to reach new cold audiences that have not yet visited your store. [L1243, 2017]

#### Changes in Research Tools (dated sources)

Sources date the research method differently. Use the newest value for the current period.

| Period | Method | Source |
|---|---|---|
| Around one month before 2023 | The Facebook audience insights method was updated in the training. Use the updated lesson, not the older tool version. | [L0804, 2023] |
| 2024 | ChatGPT combined with Google Ads search data is used for audience research in place of Facebook Audience Insights. | [L0971, 2024] |
| 2025 | Facebook Audience Insights shows less data because Meta limits what it reveals. Use Google Ads audience insights for research, and check them when the Meta view is thin. | [L0807, 2025] |

- Facebook Audience Insights now shows less data because Meta limits what it reveals, so Google Ads audience insights are used instead for audience research. Check the Google Ads insights when the Meta view is thin. [L0807, 2025]
- ChatGPT combined with Google Ads search data replaced Facebook Audience Insights for audience research. This approach was adopted in 2024. [L0971, 2024]
- For Facebook interests specifically, use the platform's own interest options rather than relying on ChatGPT, which gave weak interest suggestions in the example. [L1131, 2018+]
- Ideas from Google or ChatGPT are fine for brainstorming, because an interest is a way to narrow the audience, not a hidden secret. [L0645, 2023]

Note: The one source units in this section carry no dates of their own. The course spans 2020 to 2026. [L0487, 2018; L0641, 2014; L0643, 2015]

#### Market and Customer Research

- Define a dream customer before creating ads, then target that exact group by gender, age and country in each ad set. In the example, the target group was women over 40 in specific countries. [L0519, 2020+]
- Use persona research to choose ad targeting and creative angles. The platforms and communities where the audience spends time (Reddit, Quora, Facebook groups, Instagram) show where to test ads and which language to use. [L0395, undated]
- Favorite Online Spaces should list where target customers spend time online. Facebook is a common answer, but specialist forums, relevant subreddits with active members, Quora for question-based communities, and LinkedIn or Twitter for business audiences often reveal the more precise places. [L0872, 2021-22]
- Older advice: Favorite Online Spaces should list where target customers spend time online, as above. [L0872, 2021-22]

Target people before they become product aware:

- Target people before they become product aware, because the auction for people already searching for your product type is crowded and expensive. Look for the earlier interest that leads to your product instead. [L0643, 2015]
- An Australian health and fitness business targeted people who follow a popular weight-loss TV show, roughly 500,000 people in Australia. The common interests Audience Insights showed included celebrity trainers, clean eating recipes, a 12-week transformation program and an activewear brand. These were less contested, so bids around 39 cents (against a maximum of 19 cents) brought strong sales. [L0643, 2015]

Procedure, chain from one interest to the next:

1. Start with a broad interest that matches your customer's situation. [L0643, 2015]
2. Pull the common interests from Audience Insights. [L0643, 2015]
3. Test these interests with a small budget to see if the audience buys. [L0643, 2015]
4. If an interest converts, run the same process again from that interest to find the next audience. [L0643, 2015]

#### Avatar Research from Ad Data

Procedure, ad data analysis for avatar research, in order:

1. **Gender:** spend share per gender, CPM, CPC and CTR per gender, conversion difference, the likely primary buyer, and whether a proxy buyer is involved. [L0613, 2026]
2. **Age:** spend, performance and conversion by cohort; under-served cohorts with high value; likely life-stage explanations; likely distress by cohort. [L0613, 2026]
3. **Time:** peak engagement, conversion peaks, late-night activity as a sign of distress, and workday versus weekend differences. [L0613, 2026]
4. **Hypotheses:** primary avatar, secondary avatars, proxy-buyer signals, and distress indicators from timing and engagement. [L0613, 2026]

Proxy buyer add-on:

- Identify who buys for whom and the relationships involved. Estimate the percentage of buyers who are proxies from ad data. [L0613, 2026]
- Build a full avatar for the proxy with extra sections covering their relationship to the end user, how their emotions differ from the direct user, what 'saving' the loved one would mean for their own identity, and the hurtful things they fear hearing about the loved one. [L0613, 2026]

### Finding Interests

#### What Interests Are

- Interest targeting is about what the audience likes, follows, shares, comments on and engages with on Instagram and Facebook. The aim is to find interests that lead to engagement, website visits and purchases. There is no universally right or wrong interest as long as it matches the target audience. For example, do not target men and football for a makeup store. [L0650, undated]
- Interests are based on what people follow on social media, not what they buy. [L0642, undated]
- An interest includes everyone who engaged with the topic, including people who dislike it. Interest targeting therefore does not guarantee the right audience. [L0639, 2023]
- Interest targeting should follow what the ideal customer follows on social media, not only the product itself. The interest does not need to be related to the product, as long as it reaches the right buyers. [L0661, undated]
- Find interests where your buyers already spend time. Think of the product, the customer it serves, and the brands, TV shows, magazines or celebrities that customer follows, then use those as interests. A broad interest related to the product or the audience is enough. Deep research is not needed. [L0647, 2024+]
- Look beyond the product category. Think about what else the target audience does: hobbies, parenting, work, brands, astrology, sports, food. Start with obvious interests, then add less obvious ones. [L0642, undated]
- Using interests that are only loosely related to the product leads to poor results. Interests should reflect what people actually follow on social media and match the niche, for example culturally specific interests for a specific audience. [L0678, 2023]
- Starting with interest targeting that is too broad, and running it for about a month without results, wastes budget. Narrow the interests to match the audience once the product and offer are in order. [L0678, 2023]

#### Non-Obvious Interests That Sold

- A shoe store found that its best interests were astrology, Kim Kardashian and makeup, none of them directly related to shoes. Its target audience was highly active on astrology content, and when they saw the shoe ads they visited the site and bought. [L0642, undated]
- A shoe brand running ads in Australia found that its winning interest was astrology, because women over 40 who were interested in the brand were also interested in astrology. The advertiser could scale that interest a lot. A non-obvious interest linked to the actual buyer can outperform the interests that look most relevant. [L0650, undated]
- For women over 45 in Australia, the research surfaced health, fashion, spirituality and astrology as interests. Astrology performed best for a shoe product. For men's grooming products in Germany, football clubs such as FC Bayern and Dortmund worked as interests. [L0661, undated]
- Interests that performed well for an Australian fashion store targeting women over 45 included discounts, Black Friday and astrology. [L1212, undated]
- Very broad celebrity interests, such as famous singers, reached large audiences that did not buy a niche jewelry product. Interests tied to the community the product serves, such as a culture-specific style interest combined with a demographic filter for that community, produced results. [L0678, 2023]
- A travel accessory product tested broad first and then switched to an outdoor and camping audience. The landing page and creatives were changed to show the product in mountains and by the sea, and results improved. [L0999, 2023]
- For a floor mat product, the interest search used cleaning terms: 'Clean house' and 'Carpet cleaning', the latter with an audience of about 13 million. Further ad sets then used other broad floor-related interests such as 'Carpet dust mop', 'Mop' and 'Floor', one interest per ad set. [L0647, 2024+]
- For a kids product, use interests such as kids, family, fatherhood, motherhood and parenting. Unrelated interests, such as magazines, TV programs or cartoons, can also work and are worth testing. [L0692, 2023]
- Problem-solving household and washroom products can work on Facebook with audiences aged about 25 to 30 and older, because they recognize the everyday problem right away. [L0708, undated]
- Target interests similar to the problem being solved, such as the game, the platform or related hobbies, and match the audience age and gender to the buyer profile. [L0513, undated]

#### Interest Types by Affinity

- For a higher-affinity audience, look for interests tied to big brands, influencers that are still available as interests, and TV shows that match the product. These show the user has a real connection with the product, not just a single click on an interest. [L0645, 2023]
- Engaged shopper audiences have higher purchase intent but also raise CPM, because many brands target the same group. [L0363, 2022+]
- Interests where other brands and dropshippers already convert have high CPMs because of competition. Low-intent audiences such as engagement or link clicks have low CPMs but rarely sell. Start with the high-converting interests even though they cost more per impression. [L0648, undated]
- Do not exclude dropshipper or AliExpress interests. The exclusion adds a filter that raises CPM and shrinks the audience (example: from 100 million to 68 million). It also made the ads more visible to spy tools. [L0648, undated]
- If audience filters like engaged shoppers perform poorly, switch to broad audiences. Keep a main broad audience running alongside any interest audience. [L0363, 2022+]
- Each extra filter on Facebook also increases the cost per impression. [L0363, 2022+]

#### Procedure: Finding the Next Interest

The four sources below describe the same workflow, merged here. Keep the ad set name in sync with the interest.

1. Open the ad set that already has a working interest, or duplicate the ad set that is working. [L0691, 2024; L0648, undated]
2. In the ad set's detailed targeting, search a broad term such as home decor, or open the interest section of the ad set. [L0642, undated; L0650, undated]
3. Click 'Suggestions' to get interest ideas from Meta, and under the working interest, choose one of the related interests Meta lists. [L0650, undated; L0691, 2024]
4. Select one suggested interest and copy its exact name. [L0642, undated; L0650, undated]
5. Replace the interest in the copied ad set, or add it. Paste the name at the top of the ad set name, so you always know which interest each ad set contains. Rename the ad set with the new interest name before publishing. [L0648, undated; L0642, undated; L0650, undated]
6. Repeat with other interests, including adjacent themes such as flowers or bonsai for a home decor store. Click the cross in the top left and publish. [L0650, undated]
7. Keep the first ad set Broad and repeat with a different interest for each additional ad set. [L0642, undated]
8. Repeat until you have 12 to 15 tested interests. [L0648, undated]

Additional rules:

- Test several interests for the same product, even with a good CTR. Some interests bring visitors who never buy, while others convert. Keep only the interests that produce sales. [L0388, 2024+]
- Test many interests and ad variants to find audiences with a lower cost per acquisition and a higher margin. Some interests bring strong results while others barely cover costs, so each one needs its own test. [L0661, undated]
- Use Peeksta (peeksta.com) to find niche-specific interests for single-interest targeting. [L0375, undated]
- Interest choices matter even when platforms push broad. In one test, a brand-specific interest such as a snowboard brand audience consistently beat broad targeting, and a pets interest performed better than a narrower dog-owner interest. Test several interest levels before choosing one. [L0999, 2023]
- A high attention rate alone does not show that an audience is buying. In one test with two interests, the home and garden interest had a poor attention rate but produced the sales. A PC-focused interest had about 40 percent attention and no add-to-carts. Judge interests by sales. [L0999, 2023]
- Interests can still be used with broad-level choices, such as 'cats' or 'pets' for a cat toy. They matter less than before. [L0691, 2024]
- Facebook builds a profile of the audience from the ad creative, copy and who responds to it. Naming the target audience in the copy, for example an architect using a specific piece of software, helps the system find the right people. [L0644, undated]

#### Discovering Interests from Adjacent Products

- For a pet product, a single-interest test ad set can target a broad interest such as 'I love dogs'. Each test ad set then uses a different interest of the same kind, with an audience of at least 5M. [L0376, undated]
- Interest targeting for a female fashion test: use Gender = female; Age = 40+ (the lesson uses 40 to 65+ in its search); Country = one or more target countries. Use the same age and gender settings as the research search, so the test matches the product's proven audience. [L0661, undated]
- Early tests used women 40+ as the audience. Younger audiences were excluded when data for them looked weak. When scaling, the winning group was narrowed to women 45+ interested in astrology in two cities, and that audience produced most of the sales. [L0388, 2024+]
- For a fishing niche outside the usual women-focused audience, the test audience was set to men over 30. Testing a demographic that differs from your core customer is a deliberate step when a niche shows strong results elsewhere. [L0388, 2024+]
- Interests for a gendered product, such as men's jewelry, when the seller has no prior success with that audience: see the procedure in the Gender section. [L0773, 2023]
- Postpartum audiences suit hair loss products. Targeting parents zero to 12 months after childbirth with a motherhood interest performed well. Seasonal holiday audiences work only briefly. [L0549, undated]
- Facebook's audience estimate for a new parents interest in Canada was about 30,000 to 40,000 people. That size is too small for some products, while the same audience performed well for a hair product. [L0549, undated]
- Small interest audiences can produce a few early sales and then stop, possibly because the platform exhausts the easiest buyers first. This is one possible explanation, and the ad account data should decide. [L0524, 2023]
- Target the top-level interest related to the product. Find where the buyer lives online and what they follow, then move from broad to specific. [L0647, 2024+]
- On Facebook, you can target people travelling between two countries for an event. Open Facebook Ads detailed targeting and search for a travel behavior filter, such as people who travel from one country to another. Another option is the filter for people who recently moved from the origin country to the destination country. If neither returns a usable audience, a custom audience has to be built. [L1218, undated]
- Instagram boosts can target a defined audience, such as women aged 25 to 55 interested in luxury products, tea and organic goods, to find likely buyers instead of accumulating followers. [L1016, 2026]


Part 16 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/15-bidding-cost-cap-bid-cap-and-automated-rules.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/17-interest-audience-size-rules.md
