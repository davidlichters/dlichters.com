<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 26 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/25-competitor-research-and-the-meta-ad-library.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/27-hypothesis-testing.md

## Diagnosing Performance: Metrics, AIDA and Benchmarks

### Set Up the Metrics and Read the Funnel as AIDA

- Add hook rate, hold rate and conversion rate (CVR) as custom metrics so each stage of the ad can be checked from attention through purchase. [L0008, 2023]
- Set up the data with custom metrics and column types for both the snapshot and the funnel. [L0008, 2023]
- Read the funnel as an AIDA sequence, left to right: spend and cost per result first as a snapshot, then the funnel metrics. [L0652, 2023]
- AIDA stands for Attention, Interest, Desire and Action. Evaluate whether the creative captures attention, maintains interest, creates desire to buy and drives action, then use the data to see where the breakdown occurs. [L0008, 2023]
- The source labels this framework "ADA", but its four stages are the AIDA stages, applied to the entire ad funnel. [L0067, 2023]
- Map each stage to a metric:
  - **Attention:** hook rate, measured in the first 3 seconds of the ad. [L0067, 2023]
  - **Interest:** CTR, measured as people clicking through to the page. [L0067, 2023]
  - **Desire:** conversion rate, measured as people adding to cart and viewing the product. [L0067, 2023]
  - **Action:** overall return, measured as ROAS. [L0067, 2023]
- The Desire stage is also read through hold rate and secondary signals. [L0652, 2023]
- Read ad metrics alongside business KPIs. Ad metrics show how the ad performs, and business KPIs show whether the sale makes money. [L0875, undated]
- The ad's only job is to drive traffic to the store. It is not responsible for sales. [L0642, undated]
- Good ad metrics with no sales usually point to a store problem. Good sales with weak ad metrics point to the audience or the creatives. Diagnose this split before deciding to kill a product. [L1161, 2024+]

### Attention: Hook Rate and Hold Rate

- Hook rate benchmarks: aim for 30% or higher, 40% is great, and 50%+ is excellent. [L0067, 2023]
- The hook must be relevant to the target audience, not just attention-grabbing for its own sake. [L0067, 2023]
- A hook rate of 45 to 60% is considered good. Below roughly 40 to 45% indicates a problem in the first seconds of the video, which is usually a creative issue. [L1215, 2023+]
- Hook rate (3-second video plays divided by impressions, called attention rate) scale from the group call on target audience, creatives and Facebook: 25%+ is okay, in the 30s is good, in the 40s is 'wicked' (excellent); the speaker's own ad showed about 50%. Treat it as a rule of thumb for testing, 'with a pinch of salt', because some low-attention ads still sell through more relevant traffic. He reads attention first, then CTR, then purchases [12:30]-[12:54]. Sources differ: [L1215, 2023+] calls below 40-45% a problem, while this lesson and [L0067, 2023] call the 30s good; use 25% as the floor, 30% as good, 40%+ as strong, and compare within your own account. [L1426, undated]
- Hook rate is the first measure to check on every ad. [L1215, 2023+]
- Read hook rate at the ad level, not the ad set level. An ad set groups several creatives and hides which video is weak. [L1215, 2023+]
- Hook rate and video retention are purely creative-driven signals. [L1215, 2023+]
- A high hook rate does not guarantee sales if the hook does not match the product or audience. Example: a meme ad of someone falling over had a 60% hook rate and zero conversions, because viewers only wanted entertainment, not the product. [L0067, 2023]
- A very high hook rate with almost no sales means the creative stops attention but may attract viewers who will not buy. Check whether the audience matches likely buyers before changing the hook again, because a strong hook rate alone does not show audience quality. [L0652, 2023]
- A video is working if at least a quarter of its total views reach 50% of the video length. If fewer than that pass the halfway point, the creative is the likely problem. [L1215, 2023+]
- For the 50% retention check, use the video views figure, not impressions. Take one quarter of the views as the benchmark count and see how many reached 50% of the video. [L1215, 2023+]
- Video average play time is the average watch time per impression and includes replays, so it can exceed the exact video length. Compare it with the length shown in your editor. A short average on a longer video signals weak retention. [L1215, 2023+]
- Example: if 432 plays reach the 15-second mark and 178 of those viewers reach 95% of the video, about 41% stay to the end. Cross-check such a figure against other retention metrics, because Meta's numbers do not always agree. [L1215, 2023+]

**Creative diagnosis procedure**

1. Check the hook rate on each ad. If it is below the threshold, the first seconds are the problem. [L1215, 2023+]
2. If the hook rate is fine, check how many viewers reach 50% of the video. [L1215, 2023+]
3. Compare the average play time with the actual video length. If a 40-second video has an average play time of about 6 seconds, the creative is weak. [L1215, 2023+]

### Interest: Click-Through Rate

- CTR target: above 2%. There is no hard rule, because it depends on product and industry. Some profitable brands have very low CTR because only highly qualified buyers click. [L0067, 2023]
- On Facebook, aim for a CTR of at least 1.5 to 2%. A CTR around 4% is exceptional. [L0562, undated]
- On Facebook, CTR matters because the platform's job for the advertiser is to send quality traffic to the store. A low CTR means people scrolling past are not stopping for the ad. A high CTR means the ad earns the click. [L0562, undated]
- On platforms other than Facebook, follow the data on CTR and check that it is good. Expect more effort to turn those clicks into quality leads. [L0562, undated]
- Target outbound CTR for Facebook ads is at least 1.5%, meaning roughly 15 clicks per 1,000 impressions. A CTR of 0.63% is considered too low and signals the creative or product needs changing. [L1212, undated]
- When a Facebook ad is running, first check CTR. If outbound CTR is at or above 1.5% (some sources cite 2 to 3% as good), keep the ad running and focus on improving the store offer, because the ad's only job is to send traffic. [L1212, undated]
- Low CTR with a good hook rate usually points to the wrong audience, or to weak ad copy or thumbnail. [L1215, 2023+]
- A CTR of 2 to 3% with no sales suggests the offer or landing page is the problem, not the ad hook. Check the page and the offer before rewriting the creative. [L0524, 2023]
- A high CTR with zero sales indicates a page builder mismatch. Switching teams (e.g., PageFly to one source Team) often resolves the issue. [L0209, 2023]
- A high CTR does not guarantee sales, because clickbait creatives can attract clicks without educating or convincing buyers. Check the rest of the funnel when CTR is high but sales are low. [L1260, undated]
- Retargeting example: a CTR of 16% means 16 out of every 100 people who see the ad click it, a strong signal that the right audience is seeing it. A high CTR with no sales therefore points away from the audience and toward the store. [L1083, 2024+]
- On a winning product, CTR is usually around 2% or higher, with 1.5% as the minimum that still counts as good. A CTR below that on a winning product is a sign to review the ad creative before blaming the store. [L0774, 2023]
- If CTR is strong but there are no sales, test different offers instead of only changing ads. [L0519, 2020+]

**CTR procedure (outbound)**

1. Open the ad account and set the reporting column to CTR (all) to see the average click-through rate. [L1212, undated]
2. Compare the outbound CTR against the 1.5% target. [L1212, undated]
3. If CTR is below 1.5%, replace the images or videos in the creatives. [L1212, undated]
4. If CTR stays low after new creatives, test a different market or change the product. [L1212, undated]

### Cost Signals: CPM, CPC and Ad Quality

- CPC is a derived metric, not an independent one. It is calculated from CPM multiplied by CTR, so high CPM with good CTR naturally results in high CPC. [L0298, 2023]
- Arithmetic check: CPC = CPM ÷ (1,000 × CTR). Example: a CPM of $10 at a 1% CTR gives a CPC of $1. [L0298, 2023; L1260, undated]
- CTR formula: link clicks ÷ impressions × 100. Example: 20 clicks from 1,000 impressions give a CTR of 2%. [L1260, undated]
- If CPM is high but profitability is achieved, focus first on proving the product works. CPM and CPC are secondary optimization opportunities. [L0298, 2023]
- Low CPM on Meta comes from engagement. Likes and comments signal to the platform that people enjoy the ad, which lowers cost. [L0691, 2024]
- A high bounce rate, where visitors leave the landing page within a second, signals a poor page and raises CPM. [L0691, 2024]
- CPM is not something that can be changed day to day. It follows from ad quality and the landing page. [L0691, 2024]
- Meta reads early engagement as a quality signal. When more of the first audience watches, comments or interacts, the ad can reach a wider pool, which tends to lower CPM. Weak creatives get fewer engagements and narrower reach, which raises cost. [L0637, 2023+]
- A creative that delivers poor user experience is penalized in delivery, which shows up as higher CPMs. Weak creative costs money even when the audience is right. [L0398, 2023+]
- Ad-level rankings: quality, engagement and conversion rankings are shown for each ad. [L0398, 2023+; L0646, 2023]
- An above-average engagement ranking usually comes with lower CPM and cheaper clicks than competing ads, so strong creative can lower acquisition cost. [L0646, 2023]
- In Facebook Ads Manager, the Quality Ranking and Engagement Ranking columns show whether an ad is below average, average or above average. They signal how Meta rates ad quality and engagement. [L1260, undated]
- Use the quality and engagement ranking columns as an additional signal when diagnosing. [L1259, undated]
- Lower CPM is a goal, but it does not by itself mean better performance. Expensive CPM can come with higher-intent audiences, so judge the ad by CTR and CPC together. [L1260, undated]
- Low CPM alone does not guarantee good performance, because clickbait ads can attract clicks without generating sales. [L1259, undated]
- A low CPM with a high CTR means the ads are doing their job, so the problem is most likely on the website, not in the ad. [L1259, undated]
- A good CPM and CTR show the ad reaches the right audience, so a sales gap points to the website. Look at add-to-cart and conversion rate before changing the creative. [L1225, 2025]
- CPM examples from testing: about 8 to 9 USD for one product and about 20 to 30 USD for another. A high CPM means fewer impressions and fewer people reached, so read it together with CTR and CPC, not alone. [L0502, 2020+]
- New creatives typically start at CPM 35 to 40 and naturally decline to CPM 20 to 23 by day 4, sometimes lower by day 5 or later, as real engagement and social proof accumulate. This applies regardless of creative quality. [L0298, 2023]
- New ads in an early product test usually start with a high CPM. Engagement signals and a low landing-page bounce rate push CPM down over time, so the starting CPM is not a final verdict. [L0691, 2024]

**Relevance score**

- Facebook's relevance score works like Google's quality score: higher engagement lowers CPC. Unlike Google, Facebook counts all engagement, such as likes, shares, comments, page likes and website clicks. An ad with few interactions can score low even with some engagement. [L0510, 2018]
- Example: an ad with one comment and seven likes had a relevance score of 2.9. Adding page likes, website clicks, shares, post likes and more comments raises the score. [L0510, 2018]
- Relevance scores are specific to each audience, so the same ad can score differently for two audiences. [L0510, 2018]
- Facebook's Relevance Score plays the same role as Google's Quality Score. Every form of engagement counts toward it, so more engagement generally helps. [L1031, 2018]

### Desire and Action: Conversion, Return and Acquisition Cost

- Conversion rate target from Shopify metrics: 2 to 3%. For dropshipping, 4% or higher is good, because longer shipping delays lower conversion rate. [L0067, 2023]
- For stores with multiple traffic sources, measure conversion rate separately by source (Google Shopping, Facebook Remarketing, organic, etc.). Do not use the blended conversion rate from Shopify Analytics, which includes bot traffic and irrelevant visitors. [L0249, 2022] **
- Cost per purchase in the Meta section must be compared against the target cost per purchase. Values below target are profitable. Values above target turn red and signal that new ads are needed. [L1354, 2025-26]
- Example: if Meta cost per purchase rises to $140 while the target is $115, the cell turns red. The campaign is unprofitable at that level and new ads are needed. [L1354, 2025-26]
- Customer acquisition cost of about 10 to 15 USD per order was reached. Ten orders cost about 100 to 150 USD in ads. [L0492, 2023+]
- CPC is critical because it determines what traffic costs before the website even gets a chance to convert. Even an excellent website cannot scale if traffic is too expensive, especially on slow days when buying intent is lower. [L1354, 2025-26]
- Cost per click can be higher if the product is profitable and overall ROAS is good. [L0067, 2023]
- In the first weeks, a Meta pixel is still learning and needs data before it finds real buyers. Poor early sales therefore do not prove that the offer or the store is wrong. [L1445, 2026]
- Early sales followed by a drop-off often point to creative fatigue or a weak offer. Test more creatives and offers, and aim for consistent profit so that a bad day still yields profit. [L0524, 2023]

### Frequency and Ad Fatigue

- To check frequency, open Ads Manager, customize the columns to add "Frequency", and review the figure over the past seven days. [L0360, 2024]
- Frequency is the main drag on relevance score. The more often one person sees the same ad, the less likely they are to click. [L0510, 2018]
- Ad frequency, the average number of times a person sees the ad, is the biggest drag on relevance score. Higher frequency lowers CTR and raises CPC. [L1031, 2018]
- Small audiences of about 1,000 to 5,000 people often hit high frequency quickly with dynamic product ads, which causes CPCs to rise. [L0510, 2018]
- Aim for a frequency below about 3 as a general guideline. Keep trying to improve it instead of treating three as a fixed target. [L0510, 2018]
- Watch for a rise in CPC that moves in step with a drop in CTR. That pattern signals ad fatigue. [L0510, 2018]
- Low frequency, such as 1.03 to 1.2, on large top-of-funnel audiences does not rule out creative fatigue. Negative reactions such as hides and reports can still lower performance, so watch those signals together with frequency. [L0398, 2023+]
- Frequency depends on how long an ad has been running. Compare it against the run length rather than reading it as a fixed number. [L1030, 2026]
- Frequency is a useful indicator when ads wear out. Use it with hook rate and CTR to decide which creatives to rotate. [L0950, 2023]
- When spend concentrates on one creative with no results, Meta is signaling that it sees this creative as the best option. Cut that creative from the ad sets and let the budget go to the others to see whether the result changes. [L0361, 2024]

### Symptom-Cause Diagnosis

| Symptom | Possible causes | IDs |
|---|---|---|
| Great attention + great interest + poor desire / low conversion rate | Ad doesn't clearly sell the product or misleads. Technical problem on the page. Unexpected fees or price shock. Poor product page. Lack of trust. Offer not compelling enough. | [L0067, 2023] |
| Poor attention + great interest + good desire | Test different hooks. Target the right audience more specifically. Research audience language and context. | [L0067, 2023] |
| Great attention + poor interest + good desire | Test better messaging and copy. | [L0067, 2023] |
| Universally weak metrics at all stages | Product is not viable. Kill it and move on. | [L0067, 2023] |

- When CPC, CPM and CTR are all poor, the cause is usually the ad's creative or targeting. Adjust hooks and audience first, rather than changing the offer. [L0874, 2026]
- When results are poor, first check whether the cause is the messaging rather than the media buying (budget, bidding, targeting). Only then change the buying setup. [L1019, 2026]
- The ad metrics are read alongside the store. Check the store only after the ad's numbers are healthy. [L0875, undated; L0642, undated]
- If CTR is strong but there are no sales, the problem is the offer, the product or the website, not the ad. [L0642, undated]
- Check CPM and CTR before changing anything else. If CTR is strong but there are no sales, test different offers instead of only changing ads. [L0519, 2020+]

### Diagnostic Sequences for Unprofitable Ads

**Sequence A **

1. If CPM is high but CPC is below 1.50 USD, the audience is expensive but high-intent, so the ads work. Optimize the landing page or the offer. [L1259, undated]
2. If both CPM and CPC are high (CPC above 1.50 USD), the audience is too competitive. Test new audiences with more interest testing to find lower CPMs. [L1259, undated]
3. If CPM and CPC are high and CTR is low, the creatives are underperforming. Create and test new creatives. [L1259, undated]
4. If CPM and CPC are high despite earlier sales, customer feedback may be hurting ad delivery. Improve product quality and customer support. [L1259, undated]
5. If CTR is below 1%, test a completely new set of creatives. [L1259, undated]

**Sequence B (alternate version, same logic with added steps)**

1. Look at CPM. [L1260, undated]
2. If CPM is high but CPC is under 1.50 dollars, the audience is expensive but high quality and the ad is working. Fix the landing page, offer, branding or checkout. [L1260, undated]
3. If CPM is high and CPC is over 1.50 dollars, test new audiences with more interest testing to find cheaper CPM audiences. Also improve creatives if CTR is low. Improve product quality and customer support, because negative customer feedback can raise CPM. [L1260, undated]
4. If CTR is under 1%, test a new set of creatives. [L1260, undated]
5. If CPM is low and CTR is high, the ad is doing its job and the problem is on the website, offer or landing page. [L1260, undated]

**Timing rules for these sequences**

- Wait at least one to two days of running ads before optimizing, unless the ad is clearly not profitable. Check Ads Manager first when there are no sales. [L1260, undated]
- Ads that have run for two to three days and are still unprofitable should be reviewed after the first or second day. Start with CPM, CPC and CTR in the ads dashboard before touching the website. [L1259, undated]

**Account review procedure**

1. Open the Ads Manager and check the CTR of every ad set first, to see whether the creative and audience get attention. [L0650, undated]
2. Sort ad sets into performing and non-performing ones, and look inside the weak ones. [L0650, undated]
3. Open each ad inside the weak ad set, compare its CTR and spend, and decide per ad. [L0650, undated]
4. Give each ad enough spend before judging it. [L0650, undated]
5. Pause the losing ads and duplicate the best performing ad set. [L0650, undated]
6. If CTR is good but sales are missing, look at the store conversion rate and the offer rather than the ads. [L0650, undated]

### Ad Set Diagnosis and Spend Decisions

**Procedure for an ad set with weak results and spend**

1. Check whether one creative takes most of the ad set's spend while performing badly. [L0692, 2023]
2. If it does, turn off that creative and let the other creatives receive spend up to the break-even cost per purchase. [L0692, 2023]
3. If spend is then roughly even across creatives and the ad set still performs badly, turn off the whole ad set and test different interests. [L0692, 2023]

- When new ad sets with different interests are added to a campaign, they can compete for the same people and cause older ad sets to lose sales. If sales drop right after adding ad sets, pause only the new ones for a few days and see whether the old ones recover. [L0950, 2023]
- A few days of poor Facebook performance can happen even in a healthy account, and earlier good periods do not guarantee stability. Before reacting, cross-check the platform numbers with independent tracking to see whether the drop is real. [L0694, 2024]

### Breakdown Analysis by Country, Gender and Placement

- Use the Breakdown function to split results by country, gender and page (placement). Find the group with the highest CTR and sales, narrow spending to the groups that sell, and cut the groups that do not. [L0388, 2024+]
- When a product has reached about $300 in ad spend without a sale, run the breakdown analysis before deciding to kill it. Check how the $300 was spread across countries and audiences. [L0388, 2024+]
- Mistake: killing a product because the largest-spend country fails can throw away a viable market. A country that received only about $5 with a strong CTR may just need more budget to show sales. [L0388, 2024+]
- Example: five countries were tested. Australia produced one sale from only about 20 visitors, so more spend was moved there. Sales then came in from that market, which showed the country needed more budget rather than being dropped. [L0388, 2024+]
- If a country gets no sales after the test budget, test the same product in another market. Example: Australia after US and Canada had no sales. The market itself can be the reason for weak results. [L0388, 2024+]
- A country with high CPM can absorb most of the budget and push CPC up. Breaking results down by country quickly shows which country is causing a high CPC, for example the US in Q4. [L0774, 2023]
- A good CTR combined with a high CPM means the creative catches attention, but reaching the audience in one country costs too much. Remove or separate the expensive country in the ad targeting before replacing the creative. Compare the cost per country in the account breakdown to find it. [L1216, undated]

**Procedure after store changes**

1. Pause the ads while you change the store. [L0774, 2023]
2. Return to Ads Manager and click Breakdown on the ads. [L0774, 2023]
3. Break the data down by gender, by age and, if you target several countries, by country. [L0774, 2023]
4. Look for countries with high spend but low CTR or high CPM, and remove or reduce them. [L0774, 2023]
5. Relaunch new ad sets with the best gender, age and countries. [L0774, 2023]


Part 26 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/25-competitor-research-and-the-meta-ad-library.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/27-hypothesis-testing.md
