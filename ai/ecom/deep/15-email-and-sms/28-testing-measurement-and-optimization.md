<!-- part of ecom/deep/15-email-and-sms.md -->
Part 28 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/27-gain-logic-fear-sequences.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/29-outreach-and-supplier-email.md

## Testing, Measurement and Optimization

### Where to Test: Campaigns or Flows

- Run major tests in email campaigns rather than flows. A campaign sends one variant to a large list at once, which produces the volume needed for a reliable decision. Campaign tests also target differences large enough to show up statistically. [L0570, 2026]
- Typical differences worth testing in a campaign, each comparing two versions of one element: [L0570, 2026]
  - CTA button color change [L0570, 2026]
  - Lifestyle image versus product shot [L0570, 2026]
  - Benefit-driven headline versus curiosity-driven headline [L0570, 2026]
- Low-volume flows, such as abandoned checkout, can take many months before any decision is possible. Validate ideas in campaigns first, then move them into flows. [L0570, 2026]
- Abandoned-cart sequences can be split-tested with different angles and hooks even on a low-traffic store. Keep the flow structure that works and vary the messaging. [L1208, 2025-26]

| Test location | Volume and time needed | Units |
|---|---|---|
| Campaign to a large list | 20,000 contacts at a 50/50 split gives 10,000 per variant. A 50,000 to 100,000-contact list can reach roughly 50,000 per test in one send. | [L0570, 2026] |
| Abandoned-checkout flow | About 1,000 per variant can take about six months, depending on the brand. Some brands never reach that volume. Around 2,000 abandoned carts in a test can take a full year. | [L0570, 2026] |
| Welcome series | Very large volumes are needed, so results are slow. Plan for long test durations before acting on any result. | [L0570, 2026] |

### Test Design and Sequencing

- Clone a working campaign, change a few elements such as the subject line or the offer, and send the copy to a different list. Comparing the two campaigns shows which version performs better. [L0514, 2015]
- Use the following sequence to move from campaign tests to flows: [L0570, 2026]
  1. Run the split test as a campaign to a large list (for example 20,000 to 100,000 contacts) to reach a decisive sample size.
  2. Choose the winning version and use it as the basis for the next campaign.
  3. Keep changing one proven element at a time and resending, so the template improves with each send.
  4. Once the template reliably generates revenue on every send, treat it as the proven template.
  5. Implement the proven winning ideas in automated flows and run the flow tests as A/B tests.
  6. Because the ideas were already validated at scale, flow tests with lower volume are more likely to produce a winner.
- Repeatedly sending a winning template keeps it as the baseline for future tests, which reduces guesswork. Flow changes then rest on campaign data rather than assumptions or long waiting periods. [L0570, 2026]
- Almost every flow element, including timing, subject lines and offers, must be tested in your own account with your own customers. Treat any source that presents email flow advice as absolute rules with skepticism. [L0588, 2025-26]
- Small-batch variant testing, a direct-mail procedure: [L1261, undated]
  1. Write several letter variants with different headlines and offers.
  2. Mail each variant to a small batch of prospects, such as 1,000 prospects per variant across 25 variants.
  3. Measure cost per response or per customer for each variant.
  4. Use only the best-performing letter for the full mailing.

### Baselines and Changelog Tests

- Log every test in a changelog with its date, the change made, the expected result, the baseline, and the result. Record the result even if it is entered after the test end date. [L0410, 2020-26]
- Worked example, a sender profile picture test on Shopify email:
  - Change: on 15 November, the sender profile picture was replaced with an animated GIF instead of a static image. [L0410, 2020-26]
  - Expected result: open rate up by 5 percentage points. [L0410, 2020-26]
  - Baseline: 90-day trailing open rate of 45%, so the target was an open rate above 50%. [L0410, 2020-26]
  - Record whether the open rate stayed at 45%, rose to 50%, or rose further. [L0410, 2020-26]
- The sender profile picture is the small avatar that Gmail shows next to the sender name in the inbox. Replacing a static avatar with an animated GIF is a test you can run on Shopify email to see whether it moves the open rate. [L0410, 2020-26]
- The two sources for the same test state the goal differently. Use the one that matches how you write your target: [L0410, 2020-26; L1509, undated]

| Reading of the goal | Open rate target from a 45% baseline | Units |
|---|---|---|
| +5 percentage points (absolute) | 50% | [L0410, 2020-26] |
| +5% (relative increase) | About 47.25% | [L1509, undated] |

- Baselines by test: [L1509, undated]

| Test | Judged by | 90-day trailing baseline | Units |
|---|---|---|---|
| Percentage-off opt-in incentive replaced with a quiz | Revenue per opt-in | $80 per opt-in | [L1509, undated] |
| Sender profile picture changed to an animated GIF | Open rate | 45% | [L1509, undated] |

### Format and Copy Tests

- Test plain text against HTML formatting with your own audience and market, and measure click-through rate as the main metric. Keep whichever format performs better, since there are very few universal truths in email marketing. [L0602, 2021-22]
- Email performance improves through continuous sending and measuring results over time. Refine your brand's tone and offer style through testing, since each market responds differently. [L0609, 2021-22]
- When email traffic or email sales are weak, review the emails before changing the audience. Check the following, then test other angles: [L1456, 2021-22]
  - Whether the right emails go to the right people
  - Whether the message fits
  - Whether recipients are engaged enough to buy
  - Whether they are at the right stage of their buying journey

### Frequency and Engagement Metrics

- Test frequency over time to find the point where results plateau. Track four metrics to decide whether the frequency is right: [L0603, 2021-22]
  - Unsubscribes
  - Open rate
  - Click-through rate
  - Conversion rate
- Test each segment's performance using audience breakdowns to see which recency windows and engagement thresholds convert best. Then adjust future sends accordingly. [L0264, 2025-26]
- Review campaign performance by audience breakdown on contact age (days engaged buckets such as 0-14, 15-30, 31-60 and 31-90), not only by overall open rate. [L0864, 2025-26]
- A steady decline across older buckets is an early sign of deliverability or list-quality problems. [L0864, 2025-26]
- Example of open rate by bucket: [L0864, 2025-26]

| Days engaged | Open rate (example) |
|---|---|
| 0-14 | About 60% |
| 15-30 | About 53% |
| 31-60 | About 41% |
| 31-90 | Dropped further (no value given) |

- The sharpest drop between buckets matters more than the absolute value. [L0864, 2025-26]

### Reading Results by Inbox Provider and Domain

- Campaign performance is found under Campaigns > [campaign] > Deliverability. It shows Performance by inbox provider and Performance by domain. [L0864, 2025-26]
- Audience breakdown, with an Export CSV option, sits next to it under Audience breakdown. The campaign list shows Open rate, Click rate, Successfully Paid and Revenue columns. [L0864, 2025-26]

### Judging Campaigns After the Full Send

- Do not judge a campaign while it is still sending. Campaigns in progress show queued recipients (for example 1,018 still queued), so wait until the send has finished before reading the open rate. [L0864, 2025-26]
- Campaigns can be scheduled to send at each recipient's local time, so the send is spread across several hours. Judge results only after the full send window has passed. [L0864, 2025-26]

### Attribution and Reporting

- Use a different discount code per flow so you can see which flow produces the sales. Otherwise cart recovery and welcome offers cannot be separated in reporting. [L0606, undated]
- The Shopify Messaging dashboard shows, for a chosen date range: [L1317, 2020-26]
  - Number of emails sent
  - Email open rate
  - Conversion rate
  - Number of sales generated by the emails

### Flow Audits

- The audit and reporting stage needs at least 30 days of Klaviyo send data, read through the Klaviyo MCP. It produces an audit report and a reporting calendar, and /email-draft-review supports the review. [L1361, 2025-26]
- Klaviyo's preview does not make discount links clickable, so you cannot test them from there. Copy the real link and open it in a customer-style browser session to confirm the code applies at checkout. [L1470, 2025-26]

### Claims to Treat with Care

- A weekly-design newsletter reported open rates above 70%. The seller called this a strong engagement signal for upselling. It describes one newsletter and is not a general target. [L1153, 2016]

### Common Mistakes

- Testing directly in low-volume flows, such as abandoned checkout, can take many months before any decision is possible. [L0570, 2026]
- Judging a campaign while it is still sending, before queued recipients have been delivered. [L0864, 2025-26]
- Testing discount links in the preview, which does not make them clickable. [L1470, 2025-26]
- Accepting flow advice as absolute rules instead of testing it in your own account. [L0588, 2025-26]


Part 28 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/27-gain-logic-fear-sequences.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/29-outreach-and-supplier-email.md
