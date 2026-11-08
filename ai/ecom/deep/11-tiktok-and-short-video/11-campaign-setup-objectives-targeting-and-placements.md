<!-- part of ecom/deep/11-tiktok-and-short-video.md -->
Part 11 of 14 of "11. TikTok and Short Video: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video.md · Previous: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/10-coins-spark-ads-and-paid-boosting-of-organic-video.md · Next: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/12-testing-structures-budgets-and-automated-rules.md

## Campaign Setup: Objectives, Targeting and Placements

### Setup order for a website conversion test campaign

1. Open the TikTok ad account, go to Campaigns and click Create. [L1378, undated]
2. Choose Custom mode instead of Simplified mode. [L1378, undated]
3. Under Conversions, select Website conversions as the advertising objective and click Continue. [L1378, undated]
4. Name the ad group after the interest being tested, or "broad" if no interests are used, then continue. [L1378, undated]
5. Select the website pixel you created, or create a new one. [L1378, undated]
6. Set the optimization event to Complete Payment. [L1378, undated]
7. Under Placements, remove Global App Bundle and Pangle so only TikTok remains. [L1378, undated]
8. Under Demographics and location, choose the target countries. [L1378, undated]
9. Set gender and age (all ages from 18+), leave spending power and audience include/exclude unchanged, and turn on targeting expansion. [L1378, undated]
10. Under Budget and schedule, go back to the campaign level, turn on Campaign budget optimization and set the daily campaign budget (example: 50 dollars). [L1378, undated]
11. Click Continue, set the start date to the next day at 6 a.m. or midnight, and click Next. [L1378, undated]
12. Name the ad, leave Spark Ads off, enter the store name in the ad sign and upload the logo. [L1378, undated]
13. Upload the video, add the ad text with a simple call to action, and click Continue. [L1378, undated]
14. Add the product page link and click Submit to publish. [L1378, undated]
15. After publishing, click the duplicate button on the ad group four times to get five ad groups in total. [L1378, undated; L1377, 2022+]
16. Let the campaign run for two days. [L1378, undated]

### Entry points and objective

- Two entry paths lead to the same settings. Path A: click Create an ad, choose Website conversions, then select Custom mode instead of Simplified so the full set of options appears. Path B: go to Campaigns and click Create, then select Custom mode. [L1383, 2022; L1378, undated]
- Select Website conversions again inside Custom mode. [L1383, 2022]
- In the ad group setup, after choosing the Website conversions objective and naming the ad group, the optimization location is set to the website. The store's pixel is then selected in the same section before the optimization event is chosen. [L1378, undated]

### Placements

- Remove all placements except TikTok, so the ad runs only on TikTok. Remove Global App Bundle and Pangle. [L1378, undated; L1383, 2022]

### Countries and language

- The countries available for targeting depend on the country where the TikTok ad account is registered, so only options for that registered market appear. [L1378, undated]
- German-speaking markets: target Switzerland, Germany and Austria. [L1378, undated]
- English-speaking markets: target the US, Canada, Australia, New Zealand and the UK. [L1378, undated]
- Keep the language setting broad, because users may have their phones set to a different language than the one they speak. [L1378, undated]

### Age and gender

- Age for broad testing: select all age ranges from 18+. [L1378, undated]
- Age for open targeting, default: use 18+. [L1377, 2022+]
- Age for open targeting, larger audience: if the 25+ audience exceeds about 10 million, use 25+, because that group buys more. [L1377, 2022+]
- Age for open targeting, 18 to 24 group: it often gives strong engagement and clicks but weaker purchase conversion. [L1377, 2022+]
- The two age rules differ in when they apply. The broad-testing setup in the handbook uses all ages from 18+. The open-targeting rule uses 18+ as the default and switches to 25+ only when the 25+ audience is above 10 million. [L1378, undated; L1377, 2022+]
- Gender: choose based on the product. If most buyers are female, select female, and let targeting expansion reach other genders where TikTok sees potential. [L1378, undated]
- Age and gender are the only filters kept on broad setups. Filter both by product. [L1376, undated]

### Targeting strategy

- Broad targeting works better on TikTok than specific interest targeting because the algorithm is newer and still optimizing. Let the creative decide which customers it reaches rather than pre-selecting interests. [L0296, 2021+]
- TikTok has always used very broad targeting, so the creative and the message must carry the audience fit rather than the targeting settings. [L0999, 2023]
- Testing TikTok can reach a younger audience than Facebook. [L0999, 2023]
- Interest targeting used to perform well on TikTok but now works less well. The recommended setup is completely broad targeting with no interest filters. [L1376, undated]
- A broad audience works well only for products with very wide mass-market appeal. Otherwise use targeted interests. [L1440, 2021+]
- Start broad with no interests in the first test, rather than narrowing to specific interests from the beginning. [L1378, undated]
- Open targeting is usually the cheapest audience on TikTok, because the platform can show ads to anyone. Stacked interests usually have higher CPMs because they are narrower. Treat stacked interests as a second layer and use them to find a different pocket of buyers. [L1377, 2022+]
- Purchase intention: turn on the TikTok "Purchase intention" option within interest targeting and select broad interests under it. This reaches users who have shown purchase behavior and is meant to attract higher-intent buyers than plain interest targeting. [L1377, 2022+]
- Automated targeting can work for broad, relatable products that appeal to many people, such as simple life-hack or fitness products. Test it as an alternative, but keep it secondary to the open and interest structure for most products. [L1377, 2022+]
- Household income and interest targeting were left at default in the setup shown in the source. These can be tested but were not used as a standard setting. [L1383, 2022]
- Spending power and audience include/exclude stay at their defaults for broad testing. [L1378, undated]

### Audience size and expansion

| Situation | Rule | Ids |
|---|---|---|
| Interest or open audience, target size | At least about 8 to 9 million people | [L1377, 2022+] |
| Audience under about 4 to 5 million | Usually shows clearly high CPMs | [L1377, 2022+] |
| Interest audience below 8 million | Turn on targeting expansion to widen toward about 10 million | [L1377, 2022+] |
| Open or broad, no interests or custom audiences selected | Targeting expansion applies | [L1378, undated] |
| US broad open audience (18+, all genders, no interests) | Estimated 150 to 200 million reachable people | [L1436, undated] |

- Smaller audiences tend to produce expensive CPMs and are hard to scale. [L1377, 2022+]
- Expansion lets TikTok reach beyond the chosen interests when the audience is small. [L1377, 2022+]
- Small budgets reach only a small pocket of the broad US audience. This is why separate campaigns are used to find the right pocket. [L1436, undated]

### Test campaign structure

- Use 5 to 6 ad groups: two open-targeting ad groups (18+ with no interests), two stacked-interest ad groups, and one hashtag ad group. [L1377, 2022+]
- Split related interests across two stacked-interest ad groups with roughly five interests in each. Keep hashtags in a separate third ad group. [L1377, 2022+]
- Before launching, check that each combined audience reaches at least 8 to 10 million people. [L1377, 2022+]
- Duplicate a finished ad group and change only the audience, so creatives stay identical across groups. [L1377, 2022+]
- The setup order produces five ad groups in total by duplicating the first one four times. [L1378, undated]

### Hashtag audiences

- Some TikTok hashtags do not appear as targeting options in Ads Manager, even when they have hundreds of millions of views. [L1374, undated]
- Hashtags tied to a brand or a specific product are likely to be excluded. A hashtag may need to exist for some time before it becomes available. [L1374, undated]
- The sources differ in emphasis: the hashtag procedure asks for hashtags that describe the product and its niche, while the availability rule warns that brand- or product-specific hashtags are likely to be missing. Use niche-level hashtags and check each one for availability. [L1377, 2022+; L1374, undated]

Procedure:

1. Choose hashtags that describe the product and its niche. [L1377, 2022+]
2. Search each hashtag on TikTok without ads and note the ones that appear often in recent videos. [L1377, 2022+]
3. Keep the frequently used hashtags and add them to the hashtag ad group. [L1377, 2022+]
4. Check the audience size and turn on targeting expansion if it is below 8 million. [L1377, 2022+]

### Budget and schedule

- Set the budget with Campaign budget optimization turned on, at campaign level. Example daily campaign budget: 50 dollars. [L1378, undated]
- Start date: set it to the next day at 6 a.m. or at midnight, then click Next. [L1378, undated]
- Default run hours: start the ad group schedule the next day at midnight and run all day, or run from 7 a.m. to midnight. [L1377, 2022+]
- Narrow the hours only when past data shows that traffic arrives at certain times without producing sales. [L1377, 2022+]
- Ad schedules can be set to run at chosen times instead of running continuously. [L1383, 2022]
- Let the campaign run for two days before judging it. [L1378, undated]

### Naming

- Name each ad group after the interest it tests, so results can be traced to that interest. If no interest is used, name it "broad". [L1378, undated]
- Give each video ad a sequential name such as "add 1" for the first video, so every creative can be identified later when comparing results within an ad group. [L1378, undated]

### Ad configuration

- Name the ad, and leave Spark Ads off. The option "use TikTok account to deliver Spark Ads" is left off for this test structure. [L1378, undated]
- Enter the store name in the ad sign and upload the logo. [L1378, undated]
- Upload the video, add the ad text with a simple call to action, and click Continue. [L1378, undated]
- Destination: under the link field, add the product page URL, then click Submit to publish the campaign. [L1378, undated]

### Comment filters

- Comment filters can be set on ads in TikTok Ads Manager. Use these settings when you run your own ads. [L0706, 2020+]

## Ad Creative and Copy for TikTok Ads

### Ad Performance Weighting: Video Versus Copy

- TikTok ad performance is about 90 percent determined by video content and 10 percent by ad copy. The video carries the conversion weight. [L0204, undated]
- TikTok requires video creatives. Images do not work on the platform. [L0577, 2023]
- Users have already seen the product in the video within the first 3-5 seconds, so the copy's job is to close. [L0204, undated]

### Offer and Copy Rules

- Include the product offer or discount in TikTok ad copy in 9 out of 10 cases. The offer in the copy is the final trigger to click the shop button. [L0204, undated]
- Keep TikTok ad copy to one line maximum. Longer text will not be visible on mobile. [L0204, undated]

### Copy Strategies

The following template is reproduced unchanged:

```
TikTok ad copy strategies (one line each):

**Offer-focused:** [Discount]% off, get yours today | [Discount]% off, limited time only | Buy one get one free, limited time only | Offer ending soon, shop now

**Problem-solution:** Say goodbye to [problem] | Tired of [pain point]? Here's the solution, get yours today.

**Question-based:** Struggling with [problem]? [Product name] is your answer.

**Meme/controversial:** Use punchy, pattern-breaking humor or provocative one-liners that stop scrolling.
```

[L0204, undated]

### Native Creative Style

- TikTok ad videos should look like organic TikTok content rather than traditional polished ads. The more native, fun and less salesy the video, the better the performance. Classic Facebook-style ad formats do not work on TikTok. [L1376, undated]
- TikTok ads perform best with UGC-style videos that are already native to TikTok. Different creatives should be used per platform. [L1184, 2023+]
- Organic-looking, creator-style videos were outperforming polished ads on TikTok Shop in 2025. Use the top-selling videos as a reference for the format, pacing and hook of your own creatives. [L1479, 2026]
- GIF-style clips and entertaining content often outperform static material in competitor ads on TikTok. Taglines that grab attention in the first seconds are worth noting and testing in your own creatives. [L0895, 2021+]
- For digital products, the lesson suggested a hook showing someone experiencing a pain point, followed by a transition to the product. This approach is not proven. Check the TikTok Creative Center for competitor creatives. [L0577, 2023]

**Native clips on TikTok versus Facebook**

| Aspect | TikTok | Facebook |
|---|---|---|
| What is rewarded | Very short, sharp content [L0524, 2023] | More depth [L0524, 2023] |
| Native clips as ads | Often underperform on Facebook; work when native and punchy [L0524, 2023; L1376, undated] | Longer problem and solution videos often win [L0524, 2023] |

### Adapting Organic Posts and TikTok Shop Clips

- Focus on organic growth first, then promote the best-performing organic posts as ads. Ads performed poorly when the posts were not native to the platform. [L1077, undated]
- When repurposing an organic video for ads, adjust the text and add an offer with a call to action at the end, such as an instruction to shop now. TikTok ads are judged on views and higher conversion. [L1376, undated]

**Procedure: adapting a TikTok Shop video for a Meta ad**

1. Download the video from the source tool only for study, then edit a new cut rather than running the original.
2. Remove all TikTok Shop elements, such as the shop card, the product card and any shop-only buttons.
3. Remove on-screen price overlays that do not match your own selling price.
4. Cut the video down, since the sample testimonial ran almost two minutes and most of it would not be needed on Meta.
5. Keep the hook, the testimonial, the problem and solution, the benefits and the call to action.
6. Add your own call to action and link to your store.

[L0707, 2026]

**Mistakes to avoid**

- Do not run a TikTok Shop video on Meta unchanged. It still shows shop elements and a price that is not yours. Such mismatches confuse the viewer and can make the ad disconnect from your landing page. [L0707, 2026]
- Do not keep a video at close to two minutes when the hook and key claims fit in a much shorter cut. Long ads lose viewers before the call to action, so cut all filler and repeat lines. [L0707, 2026]

**Shop-badge example**

- Short vertical video ads for a seasonal one-size product can show a small TikTok Shop cart badge in one corner. This makes the ad look like it can be bought directly in the feed, which supports impulse purchases. [L0347, 2026]

### Static-to-Video Conversion

- Once a static creative proves an offer, put that offer into a video ad. Video is more engaging but takes longer to produce. [L0341, 2023]

### Ad Length

- Keep a TikTok ad under one minute. Short-form ads for TikTok should be quicker and more punchy than longer feed ads. Aim for 30 to 45 seconds when the content allows. [L0344, 2023]
- The one-minute cap is stated in the source as the limit for Reels and Stories at the time of the course. Check current platform limits before relying on it. [L0344, 2023]
- A near-two-minute cut is too long when the hook and key claims fit in less time. [L0707, 2026]

| Format | Target length | Source |
|---|---|---|
| TikTok ad | Under one minute; 30-45 seconds when content allows | [L0344, 2023] |
| Repurposed TikTok Shop testimonial for Meta | Cut from almost two minutes to the hook, problem and solution, benefits and call to action | [L0707, 2026] |

### Sourcing Creatives

- TikTok reduces the reach of duplicate content, and the same logic applies to ads that reuse the same video. Fresh creatives are therefore needed for ads. [L1436, undated]
- Use creatives uploaded recently, ideally within the last 7 days, that few competitors are using. A video with a good like rate on PPAds is a sign that it is getting strong engagement. [L1436, undated]
- A video that has run for more than about 15 to 20 days, or a month, and has gone viral usually gets much less reach when reused in an ad, because TikTok has already analyzed it. [L1436, undated]
- Example: a creator video posted three days earlier with about 23,000 to 30,000 views (not yet viral) was reused for ads and scaled successfully, because TikTok had not yet picked it up. [L1436, undated]

| Organic video state | Reuse as ad | Source |
|---|---|---|
| Uploaded within the last 7 days, few competitors using it | Preferred | [L1436, undated] |
| About three days old, about 23,000-30,000 views, not yet viral | Scaled successfully in the example | [L1436, undated] |
| Running more than about 15-20 days or a month, gone viral | Usually much less reach | [L1436, undated] |

### Creative Lifespan and Supply

- Creatives on TikTok perform for 1-2 weeks before needing replacement. Plan for consistent creative supply to maintain campaign performance. [L0296, 2021+]
- Creative lifespan on TikTok is about one week, sometimes up to two weeks. [L0637, 2023+]

| Spend plan | Creative supply needed | Source |
|---|---|---|
| Scaling | A steady supply of new creatives per week | [L0637, 2023+] |
| $10k-30k per month | A new creative every two to three weeks | [L0637, 2023+] |


Part 11 of 14 of "11. TikTok and Short Video: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video.md · Previous: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/10-coins-spark-ads-and-paid-boosting-of-organic-video.md · Next: https://dlichters.com/ai/ecom/deep/11-tiktok-and-short-video/12-testing-structures-budgets-and-automated-rules.md
