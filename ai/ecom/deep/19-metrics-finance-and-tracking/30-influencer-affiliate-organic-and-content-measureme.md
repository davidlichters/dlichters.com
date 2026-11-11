<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 30 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/29-giveaway-measurement.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/31-instagram-trial-reels.md

## Influencer, affiliate, organic and content measurement

### Define objectives and KPIs before launch

- Define clear KPIs before an influencer campaign starts so results can be measured against exact goals. Without set targets, there is nothing specific to check the campaign against afterwards. [L0630, undated; L0786, undated]
- A clearly defined campaign objective is the basis for accurate measurement and a fair evaluation of success. It also shows how each influencer partnership contributed to the overall marketing strategy. [L0787, undated; L0868, undated]
- If the goal is sales, track sales and conversion metrics directly. Conversion rate is the key metric for sales from an influencer campaign. If the goal is brand awareness, the focus shifts to awareness measures, and tracking conversions matters less. [L0630, undated; L0786, undated]
- Set the success metric before a TikTok test starts. A challenge account can be judged on views, but the result should still be checked against sales per million views, because a video can go viral and still fail to produce sales. [L0764, 2022]
- Record followers, views and orders as separate metrics. A test can add tens of thousands of followers while the product still loses money, so audience growth must not hide a weak product. [L1385, undated]
- Track sales per million views as the success metric for TikTok content. A video can go viral and still fail this metric, which means the product or offer is not converting. [L0764, 2022]
- Test a product by measuring sales per million views, because a product can go viral and still not convert. Only this figure shows whether the product is worth scaling. [L1380, 2022]

### Vet influencers before a collaboration

- Genuine engagement from an audience matters more for a campaign than a high follower count. Evaluate engagement before working with an influencer. [L0479, undated; L0480, undated]
- Track engagement rather than follower count. Likes, comments, tags and shares show whether posts reach the right audience, while bought followers from low-value countries do not buy. [L0801, 2021]
- A follower target can be unrealistic and easy to fake. Paid followers from cheap regions have no engagement, so the KPI should measure the engagement of followers. [L0801, 2021]
- Review an influencer's platform analytics before collaborating, because engagement quality can strongly affect how much your customers buy. [L0479, undated]
- Check engagement with this procedure:
  1. Ask the influencer for their native analytics: Instagram Insights, YouTube analytics or TikTok analytics.
  2. Review the engagement snapshot on each platform the influencer uses.
  3. Decide on the collaboration only after reviewing these numbers.

  Most influencers provide these analytics freely when asked. [L0480, undated]
- Ask the influencer to send the engagement numbers of their post (comments, shares, likes, interaction rate), in addition to checking the platform analytics yourself. [L0630, undated]
- Social Blade gives a cross-platform overview of an influencer across all channels. It is especially useful before collaborating with a larger influencer. [L0479, undated; L0480, undated]
- Do not buy likes, comments or engagement from SMM panels. Fake engagement distorts the data and may mislead the platform. Some sellers use it to lower CPM, but this is not recommended. [L0638, 2023]

### Platform analytics tools

- Built-in tools show a post or account's engagement and audience data: Instagram Insights (business account), Facebook Insights, Twitter Analytics, YouTube Analytics and TikTok Analytics. They show comments, shares, likes and interaction rate. [L0479, undated; L0630, undated; L0786, undated]
- In the TikTok app, open Creator tools > Analytics. The overview shows video views, profile views, likes, comments and shares. The per-video panel shows total play time, average watch time, watch full video and new followers. [L1186, 2022]
- Instagram's Edits app shows total Reels views, reach and net follower change over a selectable period, such as 60 days. Tap a single reel to see its own insights. [L1453, 2025-26]
- Instagram added weekly and monthly recaps and celebration tools in Insights to highlight milestones with followers. [L1504, 2025-26]
- Social listening tools track how often a brand, hashtag, keyword or campaign name is mentioned. Brand Watch is paid and widely used. Mention is an automated tool that counts brand and hashtag mentions. Without a listening tool, count mentions manually by searching the brand name, a keyword or the campaign name on each platform during the campaign, and note how often it appears on each specific platform. [L0630, undated; L0786, undated]

### Set up tracking for each creator and partner

- Use UTM tracking parameters on every link sent to a paid influencer for an ad, so traffic from that specific source is tracked accurately. The format is:

```
?utm_source=[influencer_name]&utm_medium=banner&utm_campaign=trial
```
[L0183, undated]

- Example: for an ad placed on the source's own site the UTM tracking link is:

```
?utm_source=yourstore&utm_medium=banner&utm_campaign=trial
```
[L0183, undated]

- Use UTM links for bloggers and creators whose results cannot be read from coupon codes alone. [L0790, 2017]
- Create a UTM link for every partner. Give the tagged link specifically to partners running paid ads, so clicks can be attributed to that placement in Google Analytics. [L0528, 2025+]
- Create a separate affiliate or landing link for each creator or channel. Then check Shopify's order source report for orders per channel, such as Instagram, TikTok and other sources. Referral Candy also reports sales for each link. [L1379, 2020+]
- In Referral Candy, create an affiliate link for any product in the store and give the creator a referral link. Grant the creator temporary staff access restricted to orders, so they can only see sales from the agreed period. [L1379, 2020+]
- Affiliate tracking links or codes show which sales came from a specific influencer, so the sales source is visible directly. Affiliate marketing tools show which source or influencer each sale came from when an influencer shares a tracked link or code. [L0630, undated; L0786, undated]
- Promo codes help track creator-driven sales, but many buyers do not enter them, so codes capture only part of the impact. Do not use promo codes as the only success measure for long-term partnerships. [L0783, 2025-26]
- The embed code for each Refersion banner contains that partner's unique affiliate tracking code. When a customer clicks the banner, the link carries the code automatically, so the sale is credited and the commission paid without the partner placing a custom link. [L0288, 2021-22]

#### UTM conventions in the sources

Two conventions appear in the sources. Use each for its own purpose and do not mix them in one report.

| Use | utm_source | utm_medium | utm_campaign | Ids |
|---|---|---|---|---|
| Free-trial or influencer link (ad placed by an influencer or on a site) | Influencer name, for example yourstore | banner | trial | [L0183, undated] |
| Paid partner placement, built in the UTM builder | Campaign source = ad type, for example banner ad | Campaign medium = ad format, for example banner | Campaign name = partner domain without http or.com, for example surfingwaves for surfingwaves.com | [L0528, 2025+] |

- UTM builder fields: campaign source is the ad type, campaign medium is the format, and campaign name is the partner's domain without http or.com. The resulting link carries these values as utm_source, utm_medium and utm_campaign parameters. [L0528, 2025+]

### Affiliate economics and attribution

- Affiliate payouts process in batches throughout the month or once monthly, not automatically. Payments are delayed from sale completion to verify that customers are genuine, typically withheld for up to 30 days. [L0213, 2021-22]
- Affiliate software gives each affiliate a unique tracking link. Cookies credit them for sales within a specified timeframe. If a customer clicks the link but purchases after the cookie window closes, you receive the sale but the affiliate receives no commission. [L0213, 2021-22]
- Set the cookie duration to 30 days, 60 days or unlimited. High-ticket products often convert over 2-3 months, so a 30-day window risks not crediting the affiliate who generated the initial interest. [L0213, 2021-22]
- Affiliate marketing gives controllable, predictable costs, unlike paid traffic. You know your exact commission rate per sale in advance, which supports cash-flow forecasting and financial planning. Paid advertising has variable daily costs beyond your control. [L0213, 2021-22]
- E-commerce businesses typically allocate 10% of annual revenue to Google Ads. Affiliate marketing is more cost-efficient, because you pay commissions only on completed sales, not for clicks or impressions. [L0213, 2021-22]
- Organic traffic usually has a lower cost per acquisition than paid traffic, because each click carries no direct cost. Use organic and other non-paid channels alongside paid ads, especially for traffic too expensive to target with paid ads. [L1507, 2021-22]
- Example: if a referred prospect pays 4,000 USD for Course D membership, the referrer receives 1,000 USD in commission, which is 25%. [L0214, 2026]
- During the Course D booking call, the field labelled 'Did someone recommend you?' must contain the referrer's Discord name. Otherwise the referral is not tracked and the commission is not paid. [L0214, 2026]
- About 10 new members join Course D each month through referrals from existing members, not through paid advertising. [L0214, 2026]
- A creator's story with about 5,000 views and an audience that closely matches the niche can achieve around 20 to 100 sales. Small numbers of sales can still justify the spend when the product margin is strong. [L1379, 2020+]

### Paid partner placements: ROAS and CPC

- Cost per click (CPC) equals the monthly ad cost divided by the number of clicks. Example: 200 USD per month with 100 clicks gives a CPC of 2 USD. [L0528, 2025+]
- Return on ad spend (ROAS) equals sales generated divided by ad spend. Example: 200 USD of ad spend that brings in 2,000 USD in sales gives a 10X ROAS. [L0528, 2025+]
- A 10X return on ad spend is treated as an acceptable threshold for paying a partner for an ad placement. [L0528, 2025+]
- Partners usually do not charge per click. Calculate CPC yourself by dividing the monthly ad cost by the clicks counted in Google Analytics for that partner's UTM link. [L0528, 2025+]
- Example: a partner charging 500 USD per month brought 2,000 USD in sales with a 5 USD CPC, which is a 4X ROAS. After the free trial, drop this partner, because it does not make money. [L0528, 2025+]
- Partner placement procedure:
  1. Open the UTM builder and enter the destination URL, which is your store page.
  2. Set campaign source to the ad type, for example banner ad.
  3. Set campaign medium to the ad format, for example banner.
  4. Set campaign name to the partner's domain without http or the.com ending, for example surfingwaves for surfingwaves.com.
  5. Generate the link and give that tagged link to the partner for paid ad placements.
  6. After the campaign, count the clicks in Google Analytics, calculate CPC from the ad cost, then calculate ROAS from the sales for that month.
  7. Keep the partner only if the ROAS justifies the monthly cost. [L0528, 2025+]
- Banner ads on forums and niche sites can be surprisingly cheap, sometimes around a couple of hundred dollars per month. This makes constant visibility in front of a target audience affordable for many early businesses. [L0525, 2021-22]

### Measure influencer campaign results

- Compare the same metrics before and after the influencer campaign. This before-and-after comparison is especially important for a first influencer campaign. [L0630, undated; L0786, undated]
- Benchmark influencer results against other channels, such as Facebook ads, TikTok ads and Google Analytics data. This shows whether the influencer budget is worth the spend compared with paid channels. [L0630, undated; L0786, undated]
- To measure which influencer generated conversions:
  1. Survey customers and ask where they first heard of the influencer or brand, or run audience surveys or social media polls to gauge how the campaign was perceived.
  2. Check brand analytics for traffic and click-through rate coming from the influencer.
  3. If affiliate links are used, read the sales source data from the affiliate tool. [L0630, undated; L0786, undated]
- Influencer log procedure, kept in one spreadsheet that functions as the influencer database:
  1. Record the influencer's name and whether they have posted for you before.
  2. Log each step: contacted, replied, product sent, product received, photo sent for approval, and post executed.
  3. Record whether the influencer sold anything.
  4. If there were no sales, judge whether the impressions and content quality were worth the cost.
  5. Keep all of this in a spreadsheet, which functions as the influencer database. [L0790, 2017]
- Judge influencer performance with several measures together: total traffic and social impressions, Google Analytics traffic, new emails collected, and the mix of new versus existing buyers. Judging on direct sales alone undervalues brand awareness. [L0790, 2017]
- Do not spend a large sum on one high-profile post without a way to measure its results, such as coupon codes or real-time analytics. Without measurement, the spend can feel like money lost. [L0790, 2017]
- Organic reach is not the same as conversion. Judge a product by orders per thousand views and by whether it is a real purchase, not by follower growth or comment volume alone. [L0655, undated]
- Use total reach to see how many people the content is shown to and whether a creator is worth the cost. If the content will be repurposed in paid ads, its quality matters more than the size of the creator's audience. [L0783, 2025-26]
- Benchmark creator content costs at 500 to 5,000 USD per million views. Use this range as a minimum when judging the economics of view-based content. [L1367, undated]
- Creator ROI procedure:
  1. Measure the return on investment for each influencer.
  2. Compare the influencers and identify the ones giving the highest return.
  3. Shift part of the budget toward those top performers and increase the posting cadence with them. [L0783, 2025-26]
- Track engagement metrics per platform for each repurposed video. This shows which videos to renew, keep running or stop. [L0784, 2025-26]
- Record multi-product TikTok tests per post in a spreadsheet, not by account totals, since aggregate account views hide which product is working. A weekly review is enough. [L0561, 2023+]

### Audience sentiment and indirect value

- Judge creator campaigns first by audience sentiment, meaning the quality of the comments and the conversation the post starts, before counting likes. A post that triggers buying questions and positive discussion is worth more to a brand than a high like count. [L0783, 2025-26]
- Likes, comments, shares and total interactions are the standard social engagement metrics. They are not the main success measure for creator campaigns. Track conversion rate, meaning how many people take the desired action after seeing the creator's content, for each creator where it can be measured. For long-term partnerships this is harder to track, so read it alongside sentiment and reach. [L0783, 2025-26]
- Some creator value is indirect. Repeated product exposure builds brand recall, so people may later buy in a store or without a code. For long-term partnerships this effect must be accepted as part of the return, not expected to appear in direct tracking. [L0783, 2025-26]
- Use shares as the main metric for audience-building content, because a share shows that people will pass the content on and that its reach will grow. Watch the cost per engagement as a secondary check. [L0487, 2018]
- Targeting is working when cost per engagement falls to almost nothing. In the example, a post had a cost per engagement under one cent. Judge posts by engagement and shares before looking at sales. [L0487, 2018]
- Genuine engagement for a campaign matters more than a high follower count. Evaluate engagement before working with an influencer. [L0480, undated]
- Rule of thumb: about 10% of likes should convert into followers. An account with only about 1% like-to-follow conversion is performing badly even if views are high. [L0764, 2022]

### TikTok video signals and diagnostics

- A winning video clearly outperforms the rest of the account. Example: if most videos get about 1,000 views and one gets 30,000, that video is the account's winner and should guide new content. [L0795, undated]
- Once analytics show high average watch time, a high completion rate and a good engagement ratio, create more videos of that type. [L0795, undated]
- Store sessions are the diagnostic. Millions of views with few store sessions means the product or video does not create interest. Many sessions without sales points to the store itself. Check the sessions-to-views relationship before changing the store. [L0352, 2022]
- When a video gets many views but few store sessions, the cause is most often the product itself, not the store, because curious viewers who see value click through. Check store sessions for each viral video. [L0795, undated]
- Use TikTok analytics to check watch time, which videos perform and trends from the last 7 days. This data shows which videos to recreate or which direction to take. [L1380, 2022]
- Keep a written log of the upload time of each video, then compare times with results. Re-upload a winning idea at the same time it previously went viral. [L0795, undated]
- Check the follower gender split in TikTok analytics to decide who your videos are made for. In the example, followers were 61.1% female and 38.9% male. [L1186, 2022]
- New TikTok accounts may not show retention charts and can register views incompletely. In one example, an account showed about 30 million views when the real count was 80-90 million. Verify numbers on an older account before drawing conclusions. [L1186, 2022]
- Track the four engagement signals together per video: likes, comments, shares and bookmarks. Strong numbers across all four matter more than a high like count alone, because TikTok distribution responds to all four. [L1384, 2022]

#### Engagement ratios

| Ratio | Definition | Benchmark | Ids |
|---|---|---|---|
| Views to likes | Total views ÷ total likes. Example: 1:8 is very strong for videos with millions of views. | 1:8 very strong for millions of views; 1:10 or lower still considered good, and lower is better | [L1384, 2022] |
| Comments to views | A healthy engagement ratio of 1 comment for every 10 views (1:10) | 1:10 | [L0795, undated] |
| Likes to followers | Share of likes that convert into followers | About 10% is the rule of thumb; about 1% is poor | [L0764, 2022] |

- Worked example: 250,000 views with 25,000 likes gives a 1:10 ratio, still in the good range. The same 250,000 views with only 5,000 likes gives 1:50, a weak ratio that signals the video will likely be pushed less widely. [L1384, 2022]
- Case: a video with 24.5 million views and 3.2 million likes had a ratio of about 1:8, with many comments, shares and bookmarks. This was a standout result, because ratios that good are rare at that view count. The video was 8 seconds long and reached about 20 million views within 24 hours of first going viral. The creator attributed this to combining a strong ASMR element, good timing and a strong hook. [L1384, 2022]
- Case: a 51 million view video with about 3 million likes had a ratio of roughly 1:17. It performed because it was a long video with very high watch time. High watch time can offset a weaker like ratio. [L1384, 2022]

#### Watch time and retention

- Average watch time is the most important metric for judging a video and for TikTok distribution. It can exceed the video's length when viewers rewatch it. The goal is for average watch time to exceed the video's actual length. A video with a weak like ratio can still be pushed widely if its watch time is strong. [L0795, undated; L1384, 2022]
- Completion rate, meaning the share of viewers who watch to the end, is the second key signal. Benchmarks: above 50% is good, around 65% is strong, and up to about 80% is achievable for smaller videos. Completion rates tend to fall as a video reaches millions of views. [L0795, undated; L1384, 2022]
- Watch-through percentage tends to decline as a video is pushed to larger audiences. A strong rate at small scale does not guarantee the same rate at scale. Track the percentage over time and do not expect it to stay constant. [L1384, 2022]
- Watch-time check: average watch time divided by video length. Example: a 12-second video with a 15.4-second average watch time gives about 1.28. This is strong, because the result is above 1.0 and viewers replay the clip. [L1384, 2022]
- Example: a 12-second video had an average watch time of 15.4 seconds, considered very good because viewers rewatched it. Average watch time above the video length is the target benchmark. [L1384, 2022]
- Watch retention is the key metric for short video. Aim for viewers to watch to the end, or at least more than 50% of the video, because higher retention improves distribution. [L1457, 2025-26]

#### Traffic sources and distribution

- Track the share of views from the For You Page, not from your own followers. A high For You share, reported around 97% in one example, signals real growth to new viewers. Views mainly from your profile suggest limited reach. [L1384, 2022]
- In per-video analytics, the traffic source labelled 'Reached audience' shows the share of views coming from the For You Page. A rising share means the video reaches viewers who do not follow the account. [L1384, 2022]
- Per-video traffic source analytics usually appear within about 24 hours of posting, sometimes up to two days. Detailed analytics were reported to require a minimum follower threshold of around 1,000 followers, though the lesson was unclear on the exact number. [L1384, 2022]
- Choose Instagram posting times from the audience activity data in Instagram Insights, because the best time differs for every account. There is no universal best hour. [L0796, 2025-26]

#### Creator Fund and platform payouts

- The TikTok Creator Fund paid about 30 dollars per million views on average, and one month of Creator Fund earnings reached about 2,000 dollars. Eligibility requires at least 10,000 followers. [L1384, 2022]
- Creator Fund payments are not recommended for product accounts, because joining may reduce organic reach. Consider joining only after you have proven products and an established account. [L1384, 2022]
- Reach was reported to drop near the end of the year when Creator Fund budgets appeared to run low, then recover after the fund reset in the new year. This is an unverified observation and should be treated as a warning sign. [L1384, 2022]
- Snapchat Spotlight payouts now require at least 10,000 unique views and snaps submitted on at least 5 days. Plan the posting schedule around both conditions. [L1504, 2025-26]


Part 30 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/29-giveaway-measurement.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/31-instagram-trial-reels.md
