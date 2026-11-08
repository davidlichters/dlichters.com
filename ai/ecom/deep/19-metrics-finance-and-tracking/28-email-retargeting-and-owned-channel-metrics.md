<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 28 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/27-search-vs-shopping-and-other-channels.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/29-giveaway-measurement.md

## Email, retargeting and owned-channel metrics

### Email setup and tracking settings

- Shopify Messaging includes 10,000 free emails per month; additional emails cost $1 per 1,000. [L0147, undated]
- Keep UTM tracking on and Smart Sending off for every email in every flow and campaign, so email traffic and sales are tracked consistently and every send follows the schedule set in the flow or campaign. [L0607, undated]
- Consolidate customer data for retention, loyalty and analytics into one view. Many separate tools make it hard to know what is working and how to improve it. [L1232, 2025-26]

### Email revenue and earnings per subscriber

- Earnings per subscriber = monthly email revenue ÷ active subscribers. [L0378, 2019+]
- Example: a list earning $70,000 to $130,000 per month with about 6,000 subscribers returns roughly $11 to $22 per subscriber per month. An average list is closer to $1. [L0378, 2019+]
- Track earnings per subscriber and compare it with the average for your market. About $2 per subscriber per month is already twice a typical list. [L0378, 2019+]
- Rule of thumb when communication funnels run correctly: about $1 of profit per month per name on the list. 200 names ≈ $200/month, 1,000 names ≈ $1,000/month, 10,000 names ≈ $10,000/month. Some markets earn more than this rule of thumb. [L0523, 2015+]
- A list that grows without offers attached to its emails produces no revenue. Track subscriber count and revenue per subscriber, and measure opens and clicks alongside sales to see which story types work. [L0523, 2015+]
- ** Judge email revenue against spend, since email is commonly evaluated by revenue returned per dollar invested. Track results per email so optimisation decisions rest on data. [L0609, 2021-22]

### Lead value

- A well-executed lead generation machine should generate about $2 per lead per month through email follow-up in the first year. The source range is printed as "$2-$2". [L0240, 2019]
- A correctly running lead generation system earns about $2 to $5 per lead per month on average. Example: 1,000 leads emailed twice a week should produce roughly $2,000 to $5,000 in email revenue per month. Use this as the baseline to judge the system against. [L1076, 2019]
- Use the $2 (first-year) figure as the early target and the $2 to $5 range as the mature-system baseline. [L0240, 2019; L1076, 2019]

### Sign-up rates and welcome-flow benchmarks

- With a sign-up pop-up, expect roughly 8 to 15 newsletter sign-ups per 100 visitors. Plan the email list size with this range. [L0605, undated]
- Average email open rates are about 20 to 30%, while SMS open rates are about 60 to 80%. SMS converts better but is harder to collect, because phone numbers are harder to get than emails and compliance rules apply. [L0605, undated]
- Case (one test store, about two months old, 23 November to 23 December):
  - Total sales were about $17,000. 28% of revenue came from Klaviyo email (shown as 15% from flows and 14% from campaigns). [L0605, undated]
  - In the last 30 days the store made about $14,000, with about 24% from Klaviyo. Of the roughly $2,000 from flows, about $1,447 came from the welcome flow. [L0605, undated]
  - Only the basic flows existed: welcome and abandoned checkout. [L0605, undated]
- Basic welcome and abandoned checkout flows were estimated to add about 20 to 30% to a store's revenue. This is an estimate from one case, not a guaranteed result. [L0605, undated]
- In Klaviyo's flow list, use the Revenue and Revenue per recipient columns to decide which welcome flow to clone. The flow with the highest revenue is the proven base for a new welcome series. [L1470, 2025-26]

### Flow and campaign metrics

- Klaviyo flow analytics show Waiting, Delivered, Skipped, Open Rate, Click Rate, Placed Order Rate and Revenue per email. The time windows are 'Analytics (30 days)' and 'Last 365 days'. The 30-day view suits recent tests. [L0567, 2025-26]
- Judge each flow email by its own open rate, click rate, placed-order rate and revenue, not by the flow total, so weak messages become visible. Compare path 1 and path 2 email results side by side before changing anything. [L0567, 2025-26]
- A 9.5% click rate on a pain-point abandoned cart email is a very good result and a useful benchmark for that email type. [L0567, 2025-26]
- Observed 30-day Klaviyo results for later emails in one low-traffic store (A$ values; use as a rough benchmark only, not as a target): [L0567, 2025-26]

| Email | Open rate | Click rate | Placed order rate | Revenue |
|---|---|---|---|---|
| #3 Risk mitigation / social proof | 54.3% | 4.3% | 2.1% | A$221.50 |
| #4 Offer 15% | 56.7% | 11.1% | 4.4% | A$254.33 |
| #5 Offer 15% reminder (last chance) | 60.7% | 9.0% | 4.5% | A$262.00 |

### A/B testing and confidence

- In a completed subject line A/B test on the offer email, the winning variant had an open rate about 19.8% higher. The winner was chosen manually. [L0567, 2025-26]
- Confidence levels by sample size per variant: [L0570, 2026]

| Sample size per variant | Confidence |
|---|---|
| Around 1,000 | About 80% |
| Larger samples | About 95% |
| Very large samples | About 98% |

- Confidence is the likelihood that a change judged positive really is positive. [L0570, 2026]

### Email frequency testing

- ** Sending too many emails raises unsubscribes, and sending too few raises them too. If people unsubscribe or mark emails as spam while receiving one email per month or less, they have likely forgotten the brand and see the email as unfamiliar. [L0603, 2021-22]
- ** A steady decline in open rate can indicate too many emails and subscribers becoming blind to the sender. Check click-through rate and email conversion rate next, with email performance tracked in Google Analytics. [L0603, 2021-22]
- *Older procedure (2021-22):* How to test email frequency: [L0603, 2021-22]
  1. Start with 4 automated emails per week for days 0 to 30, 2 to 3 per week for days 30 to 60, and 1 per week from day 60.
  2. Increase frequency gradually rather than all at once.
  3. After each change, check unsubscribes first. If they rise, reduce frequency.
  4. Check open rate over time. A steady decline suggests too many emails are being sent.
  5. Check click-through rate and email conversion rate in Google Analytics.
  6. Keep experimenting until results plateau, which shows how far frequency can be pushed.

### Deliverability baselines and list health

- Before leaving the old provider, record a deliverability baseline of open rate, click rate, bounce rate, unsubscribe rate and spam complaints over 30, 60 and 90 days. Use these figures as the minimum expectation for the new provider. [L0633, 2025-26]
- Keep the deliverability target for the affected provider above a 30% open rate. Once it stays above that level, begin reducing the exclusion. The example used a Yahoo segment of 135 unengaged profiles that were not landing in inboxes. [L0864, 2025-26]
- Stop sending to a contact segment when its open rate falls to around 15% and its click rate falls to around 0.5%. [L0864, 2025-26]
- Read the thresholds together: 30% open is the recovery target for an affected provider, 15% open with 0.5% click is the stop-sending point, and 20 to 30% is the typical average open rate. [L0864, 2025-26; L0605, undated]
- A campaign with about 40% open rate and about 50 clicks was treated as healthy in one example. Good overall results can still hide a sharp drop in a single age bucket, so check the buckets too. [L0864, 2025-26]
- After a large send, an unsubscribe rate higher than usual can still be acceptable if it stays within your normal margins. Check it against the provider breakdown before changing sending. [L0864, 2025-26]
- Audience breakdown totals can exceed campaign totals, because a recipient in several lists or segments is counted once for each membership. Do not add up segment numbers to get campaign totals. [L0864, 2025-26]
- Open rate for an audience bucket = recipients who opened ÷ total recipients in that bucket. Example: 141 opens out of 430 recipients gives 32.8%. [L0864, 2025-26]
- Bounce rate = bounced recipients ÷ sent recipients. Delivered = sent − bounced. Example: in a send of 999 recipients with 2 bounces, the bounce rate was 0.20% and 997 recipients (99.8%) were delivered. [L0864, 2025-26]
- The Performance by inbox provider chart on a campaign's Deliverability tab lets you hide either the Open rate or the Click rate series. Comparing one metric at a time across providers makes one weak provider easier to spot. [L0864, 2025-26]
- Read open rate and click rate together for each age bucket. A bucket with lower opens can still have strong clicks. In one example the 31 to 60 day bucket fell to about 40% opens but kept a good click rate, which suggests the people still opening remained engaged. [L0864, 2025-26]

### Customer satisfaction and surveys

- Net Promoter Score (survey question: "How likely are you to recommend to friends and family?") is the best metric alongside review ratings for measuring how much customers love you. [L0041, 2025-26]
- CSAT formula: (number of "very satisfied" + "satisfied" responses) ÷ total survey responses × 100, giving a percentage. Neutral, dissatisfied and very dissatisfied answers stay in the denominator and count against the score. [L0401, 2025-26]
- CSAT options are typically a five-point scale: very satisfied, satisfied, neutral, dissatisfied, very dissatisfied. The survey usually asks one question: how satisfied the customer is with the support received. [L0401, 2025-26]
- CSAT ratings below 4 (on a 5-point scale) are the most valuable negative feedback to review, since they show what blocks a high satisfaction score. Some reviewers also look at ratings under 5 as a broader signal. [L0401, 2025-26]
- Thematic analysis of CSAT text responses: [L0401, 2025-26]
  1. Export all CSAT scores as a CSV file from the helpdesk.
  2. Upload the file to a thematic analysis tool based on natural language processing, such as Thematic.
  3. Review the resulting keywords, pain points and recurring themes.
  4. Choose one or two specific themes to focus on at a time.
- The Gorgias Satisfaction view lists every ticket rated 4 stars or lower, which is wider than the below-4 threshold used for analysis. Filter to ratings under 4 before deciding which tickets to review, or the review includes neutral-leaning feedback that does not point to a clear problem. [L0401, 2025-26]
- Post-purchase surveys asking why the customer bought and what they will use the product for reveal the real audience and can feed Facebook interest targeting. [L1410, 2023]
- ** Send automated customer feedback surveys using recommended tools, set up conditional thank-you emails for survey completers, and determine a reward structure for participation. [L0203, 2021]
- ** Track the share of customers who leave a review as a key metric, and compare it before and after starting the post-sale call program. [L1011, 2021]

### Lead generation and cart recovery costs

- Lead magnet setup (eBook lead generation): [L0240, 2019]

| Component | Cost | Time to Set Up |
|---|---|---|
| eBook design (outsourced) | $20-$50 | Included in 10-20 hours |
| Landing page (default Shopify or Pagefly) | $0 | 1-2 hours |
| Klaviyo email automation | Free (first 500 contacts) | 5-10 hours for sequence |
| **Total setup** | **$20-$50** | **16-32 hours** |

- Thank-you and follow-up setup: [L0240, 2019]

| Component | Cost | Time to Set Up |
|---|---|---|
| Email sequence (9 emails in Klaviyo) | Free (first 500 contacts) | 5-10 hours |
| Facebook thank-you video ad | $5/day ad budget | 1-2 hours (filming + ad creation) |
| Phone follow-up calls | $0 (staff time) | 10-20 minutes per customer |
| **Total setup** | **$5-$10/day running** | **16-32 hours setup** |

- Channel setup and monthly investment: [L0240, 2019]

| Channel | Cost | Setup Time |
|---|---|---|
| Klaviyo abandoned cart email flow | Free (first 500 contacts) | 5-10 hours |
| Facebook Ads (audiences, campaigns, creatives) | $5-$50/day | 5-10 hours |
| Google Ads (audiences, campaigns, creatives) | $5-$50/day | 5-10 hours |
| **Total monthly investment** | **$300-$3,000** | **15-30 hours setup** |

- Target a cost per lead of $4 or less for a good audience and offer, and aim well below that where possible. [L0649, 2019]
- Reaching prospects within the first few minutes of cart abandonment improves contact success by 100 times compared with a 30-minute delay. Calling within five minutes increases conversion qualification by 21 times versus a 30-minute response time. [L0286, 2018]
- Abandoned checkout links remain active and clickable for 90 days after cart abandonment. [L0286, 2018]
- Test the Loom follow-up for about one month and track what happens to those leads. Compare their reply rate and purchase rate with leads who only received the standard reminder email. [L1049, 2025+]

### Abandoned-checkout tracking sheet

- Logging every abandoned checkout in a shared sheet shows how many carts exist, when they were contacted, what happened on each call and how many were recovered. Shopify's default abandoned checkout view only shows whether an email was sent and whether the cart was recovered, so it hides the reasons for lost sales. [L0737, 2020-26]
- Tracking sheet layout (headers in row 1; row 2 contains only dashes as a separator): [L0737, 2020-26]

| Column | Field | Filled by |
|---|---|---|
| A | Date | automation |
| B | Name | automation |
| C | Phone number | automation |
| D | Email | automation |
| E | Cart value | automation |
| F | Products | automation |
| G | Shipping | automation |
| H | Recovered | paid-order automation or team member |
| I | Link to cart | automation |
| J | Notes | phone team |

  Columns can be added or removed, but these ten cover the core needs of a tracking sheet. [L0737, 2020-26]
- An example sheet also includes a column showing whether the customer was emailed, which the standard automated column set does not include. This status column shows which carts received outreach before a call was made. [L0737, 2020-26]
- Review the sheet once a day or every few days to see how many carts were abandoned, when outreach happened, what came of each contact, and how many were recovered. Regular review makes gaps in the process visible early. [L0737, 2020-26]
- Reviewing the sheet after several weeks reveals causes of low recovery, such as slow response times, not leaving voicemails, or customers citing high prices. Each cause points to a specific process change. [L0737, 2020-26]

### Retargeting ROAS and conversion benchmarks

- Retargeting achieves 2 to 10 times higher conversion rates than cold traffic, because users who have already interacted with the site are further along in the purchase journey. [L0033, undated]
- The top end for direct-response e-commerce conversion is described as 2 to 3%. Most visitors who are interested but do not buy can be recovered by retargeting, for example via Google. [L0637, 2023+]
- Retargeting makes it reasonable to keep an ad with low attention and click-through rate running, because the cold traffic it brings can later be retargeted as a larger audience. [L0999, 2023]
- Meta remarketing campaigns should deliver the highest ROAS of the ad channels used. This held even after Apple's iOS 14.5 update, because small budgets aimed at highly qualified visitors produce a very high return on ad spend. [L1020, 2020-26]
- Judge remarketing budgets by ROAS. [L0854, 2022]
- ** Facebook retargeting below 1x ROAS is the threshold for cutting spend. [L0854, 2022]
- ** A Facebook remarketing campaign should reach at least 10x return on ad spend. 20x to 50x is typical for strong campaigns. Below about 20x points to audiences that are too broad or frequency that is too high. [L1113, 2022]
- Use the 1x threshold to decide when to cut spend and the 10x minimum to judge whether a campaign is performing. [L0854, 2022; L1113, 2022]
- Allocate roughly 10% of your daily Shopping Ads budget to Google Display remarketing. Example: a $10/day Shopping budget gives $2/day for remarketing. [L0189, undated]
- ** Facebook DPA example: $100 on Google Shopping versus about $10 on DPA remarketing, showing remarketing is a smaller share of spend early on. [L0969, 2022]
- Shopify notifies Meta when someone buys on the store, and that buyer is added to the purchase audience. The 7-day purchase audience always holds buyers from the last 7 days, and the same logic applies to the 30- and 180-day versions. [L1023, 2020-26]

### Promotion budgets for warm audiences

- Audience budget formula: Audience budget = audience size × frequency × remarketing CPM ÷ 1,000. CPM is the cost per 1,000 impressions, so the result is the total spend needed to show the ads that many times to that many people. [L0757, 2022; L1204, 2022]
- Example, Google: 50,000 people × 6 impressions × $1.50 ÷ 1,000 = $450 total campaign budget, about $150 per day over 3 days. [L1204, 2022]
- Example, Facebook: 130,000 people (Facebook website visitors, Instagram and Facebook engagement audiences combined) × 6 impressions × $5 ÷ 1,000 = $3,900 total campaign budget, about $1,300 per day over 3 days. [L1204, 2022]
- Worked budget example (180-day visitor audiences, frequency 6, 3-day promotion): [L0757, 2022]

| Audience | Size | Frequency | Remarketing CPM (historic) | Budget |
|---|---|---|---|---|
| Google: Website Visitors - 180 Days | 50,000 | 6 | $1.50 | $450 |
| Google total | 50,000 | 6 | $1.50 | $450 |
| Facebook: Website Visitors - 180 Days | 50,000 | 6 | $5.00 | - |
| Facebook: Insta Engagement - 180 Days | 40,000 | 6 | $5.00 | - |
| Facebook: FB Engagement - 180 Days | 40,000 | 6 | $5.00 | - |
| Facebook total | 130,000 | 6 | $5.00 | $3,900 |

  Daily budgets for this 3-day promotion: Google $150/day and Facebook $1,300/day. [L0757, 2022]
- ROAS means return on ad spend, and budgeting is done to get the highest ROAS possible. Frequency is the average number of times each person sees the ad. CPM is the cost per 1,000 impressions. [L0757, 2022]
- Calculating the ad budget for a promotion: [L1204, 2022]
  1. Count each warm audience. In Facebook Audience Manager, read the size of the 180-day website visitor, Facebook engagement and Instagram engagement audiences. In Google, open the shared library of audiences.
  2. Set a frequency target, typically 6 to 10 impressions per person for a 3 to 5 day campaign.
  3. Look up the historic CPM for warm audiences in the Facebook Ads and Google Ads accounts, using the CPM column.
  4. Apply the formula for each platform and set the budget.
- For a 3 to 5 day promotion, aim for a frequency of about 6 to 10, meaning each person sees the ad 6 to 10 times. This is the planning figure for budgeting. [L1204, 2022]
- Historic CPM for warm audiences was roughly $2 to $5 in the example account, with $1.50 on Google and $5 on Facebook. Use the actual CPM from your own accounts, not a planning assumption of about $10, which is set high on purpose. [L1204, 2022]
- Set promotion campaigns with a total campaign budget and a start and end date, not a daily budget. Spend usually starts slightly lower on the first day and ramps up toward the end as the platform gathers data. [L1204, 2022]
- For a first test with a limited budget, use 7-day or 30-day audiences instead of 180-day audiences; at least 30-day audiences are recommended. In the example, 7-day audiences on both platforms came to about $78 in total. [L1204, 2022]
- Measuring promotion impact: [L1204, 2022]
  1. Pull the tracked promotion revenue from Klaviyo, Facebook and Google.
  2. Compare the combined total with the total revenue for the same month to find the promotion share of sales.
  3. Check return on ad spend per platform to see whether the ad spend was efficient.

### Google Analytics audiences

- Google Analytics audiences for remarketing should be built from normal traffic. The audience pool grows from qualified visitors rather than artificial numbers. [L0805, 2024]
- When creating Google Analytics audiences, enable remarketing in the audience definition. Otherwise the audience cannot be used for remarketing on Google properties. [L1204, 2022]
- In Google Analytics, a purchaser audience uses the condition transactions greater than 0. It works only when enhanced e-commerce tracking is active, and it is typically built as a 7-day and a 180-day list. [L1204, 2022]
- Google Analytics can compare revenue and conversion rate of first-time visitors against returning visitors. This shows how much retargeting can lift overall conversion. [L1203, 2016]
- In one example, returning visitors who came back more than once converted at a rate 50% higher than visitors who came only once. [L1203, 2016]
- Build a customer avatar in Facebook Analytics: [L1243, 2017]
  1. Open the newer Facebook Analytics, which offers segments based on user actions on your site.
  2. Create a segment of people who purchased in the past 28 days or the past 90 days.
  3. Review the page likes and demographics of that purchaser segment.
  4. Use those results to describe your customer avatar.
- *Older procedure (2021-22):* Create Google Analytics audiences and send them to Google Ads: [L1390, 2021-22]
  1. Go to Admin > Property Settings > Audience Definitions > Audiences.
  2. If remarketing is not enabled yet, click Enable remarketing, then Next step.
  3. Under Audience destinations, select your Google Ads account as the destination before saving. This imports the audiences into Google Ads as targeting options.
  4. Ignore the default All Users audience.
  5. Click + New audience, then Create new.
  6. Build the conditions in the Audience Builder.
  7. Name the audience and click Next step. If Google Ads is linked, select it as the destination and send the audience there.
- ** In the example Google Analytics audience list, the All Users audience has a membership duration of 30 days. [L1390, 2021-22]
- ** Audience Builder categories in Google Analytics: Demographics (age 18-24, 25-34, 35-44, 45-54, 55-64, 65+; gender female, male, unknown; language), Technology, Behaviour, Date of First Session, Traffic Sources, Enhanced E-commerce, and Other Category (Affinity Category, In-Market Segment, Location). [L1390, 2021-22]
- ** Location targeting under Other Category > Location lets you segment by city, region, country, subcontinent or continent. Use it for offers limited to certain areas, such as free shipping only where you can afford it. [L1390, 2021-22]
- ** Behaviour options: Sessions, Days Since Last Session, Transactions per user, and Session Duration per user. Example: an audience of users with more than three sessions on the website. [L1390, 2021-22]
- ** Session Duration is set per session, for example Session Duration > 30 seconds. Conditions can be layered with AND or OR, and Date of First Session can limit the audience to visitors since, before, after or between dates. [L1390, 2021-22]
- ** Enhanced E-commerce audience conditions include revenue per user, amount spent, products bought, brand and variant. With enough volume, you can build an audience of people who bought one product and offer them relevant upsells. [L1390, 2021-22]
- ** To target by page, change the condition dropdown from its default to Page, then choose Behaviour. Use contains with part of the URL. For Shopify product pages, enter products, or enter the product name slug after the last slash for one specific product. [L1390, 2021-22]


Part 28 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/27-search-vs-shopping-and-other-channels.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/29-giveaway-measurement.md
