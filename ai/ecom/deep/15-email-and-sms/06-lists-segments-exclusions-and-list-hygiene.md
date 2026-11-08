<!-- part of ecom/deep/15-email-and-sms.md -->
Part 6 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/05-pop-up-set-up.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/07-welcome-series-and-new-subscriber-nurture.md

## Lists, Segments, Exclusions and List Hygiene

### List vs segment logic

- A list is a data source. It shows where a subscriber came from. [L0264, 2025-26]
- A segment is a rule-based profile. It defines who meets specific engagement criteria. [L0264, 2025-26]
- A list is a group of profiles that opted in, such as the Newsletter list. A segment is a group of profiles filtered by conditions, such as past orders or behavior. Both are found under Audience, then Lists and segments. [L0607, undated]
- Klaviyo provides pre-built lists such as Newsletter. Custom segments are created with Create list or segment under Audience > Lists and segments. [L0573, undated]
- Klaviyo can read order history from Shopify or another connected store platform. This allows automatic segmentation by number of purchases and by products or product types bought. Segments are used for customers, while separate lists based on opt-in source are often used for prospects. [L0603, 2021-22]
- ** In Klaviyo, the only list to create for this setup is the broadcast list. Default segments that appear in new accounts are not needed because automations do not use them. [L0469, 2021]
- The broadcast list contains every subscriber who has not opted out, whatever the source: abandoned cart, purchase, footer signup or exit-intent signup. These contacts receive all monthly promotions. [L1204, 2022]
- Split audiences into two kinds of lists:
  - Communication lists: email lists that receive your messages.
  - Invisible lists: used only for ad targeting and never receive email.

  Keeping these apart keeps targeting precise. [L0757, 2022]

### Engagement-recency segments

Build overlapping recency segments (7-day, 14-day, 0-30, 31-60, 61-90, 90+) so you can test audiences and rotate them across different engagement windows. [L0264, 2025-26]

| Segment | Condition | Use | IDs |
|---|---|---|---|
| 7-Day Hyper-Engaged | (Opened Email at least 3 times in last 7 days) OR (Clicked Email at least 2 times in last 7 days) | Rebuilding deliverability. Typical usage: 2 weeks. Send 3-7 emails within 7 days to this segment. | [L0264, 2025-26] |
| 14-Day Super-Engaged | (Opened Email at least 3 times in last 14 days) OR (Clicked Email at least 3 times in last 14 days) | Deliverability rebuilding. If open rates reach 60-80%, continue for 3-4 sends, then expand to wider segments. | [L0264, 2025-26] |
| 0-30 Days Engaged | (Opened Email at least 1 time in 0-30 days) OR (Clicked Email at least 1 time in 0-30 days) | Core segment for the regular sending strategy. | [L0264, 2025-26] |
| 31-60 Days Engaged | (Opened Email at least 1 time in 31-60 days) OR (Clicked Email at least 1 time in 31-60 days) | Regular sending rotation. | [L0264, 2025-26] |
| 61-90 Days and 90+ Days Engaged | Same threshold: at least 1 open or click in the respective window | Build matching segments for these windows. | [L0264, 2025-26] |
| All Active | (Subscribed at least once over all time) OR (Received Email AND Can receive email marketing) | Includes all active subscribers except suppressed addresses. | [L0264, 2025-26] |

- Target open rate is above 30%. When open rates fall below this, move to a more recent engagement window to rebuild deliverability. [L0264, 2025-26]
- Email sending works like driving: gradually expand your audience until open rates drop, then revert to a tighter engagement window. Find the sweet spot where volume and deliverability stay balanced by monitoring performance and adjusting audience size. [L0264, 2025-26]
- Continuing to email contacts who have not engaged is only justified while deliverability stays good. If deliverability weakens, stop mailing these contacts. [L0494, 2026]

### Behavior, purchase-count and VIP segments

- Segmentation divides the list into groups based on behavior, such as pages viewed, time spent on the site, purchase history, and how the person joined the list. Relevant messages to each group generally produce better results, so more segmentation usually means more valuable messages sent more often. ** [L0603, 2021-22]
- Email segmentation uses the same logic as retargeting audiences: group people by their actions and interests so each group gets a message suited to where it is in the buying journey. ** [L0603, 2021-22]
- Minimum segments to set up in the email software **: [L0603, 2021-22]
  1. Customer segments by purchase count: customers who bought once, customers who bought twice, and customers who bought three or more times.
  2. A segment of all customers who have bought.
  3. Product-based segments for best-selling products or products with a clear upsell or repurchase cycle, such as items that wear out or have a limited shelf life.
  4. Customer segments by product type if the store sells several product types.
  5. Prospect lists by opt-in source: one list per specific content opt-in, one per product page opt-in, and one per collection page or product type opt-in.
  6. Add new segments or lists each time a new opt-in is added to the website.
- Set up audience segments in Klaviyo: buyers, non-buyers and VIP customers, where VIP means a customer who has bought more than once. Exclude buyers from offer launches for products they already bought. [L0605, undated]
- Example VIP segment: customers whose Placed order count is greater than one (two or more orders). Use it to target loyal buyers with product launches or early access. [L0573, undated]
- VIP segment setup:
  1. Under Audience, then Lists and segments, click Create list or segment and create a segment.
  2. Set the condition to the Placed Order metric with a count greater than 1, meaning two or more orders.

  [L0607, undated]
- A VIP customer is defined here as a customer with two or more orders (Placed Order count greater than 1). [L0607, undated]
- Create Klaviyo segments for shoppers who bought Checkout Plus and for those who did not, then target them differently. The integration does not come out of the box, but it can be built. [L0955, 2025-26]
- After identifying high-performing engagement segments (30%+ open rates), layer on product-specific conditions to increase targeting precision: "viewed products with [attribute]", "looked at [collection]", or "purchased from [collection]". Example: add "AND viewed products containing protein" to the 0-30 Days Engaged segment to target engaged subscribers interested in protein. [L0264, 2025-26]
- Audience segmentation produces 8 to 10 segments deployed in Klaviyo, built from existing subscriber data without any extra tool. [L1361, 2025-26]
- Add a checklist of product interests and a request for name and address to every reply card, so each response also reveals what the buyer wants. Use these answers to build segments for later mailings. A list built from stated interests produces more relevant follow-ups than a general list. [L1369, undated]
- ** Email follow-up covers both pre-purchase and post-purchase contacts. Lists should be segmented and built before purchase, and different emails should be sent to prospects versus buyers to keep them engaged and raise the chance of completing a transaction. [L1497, 2021-22]

### Naming conventions

- Use the naming convention brand name + double slash + segment name (e.g., "e2 // 0-30 Days Engaged"). Apply this consistently across all segments. [L0264, 2025-26]
- Prefix all exclude segments with an asterisk (*) so they are instantly recognizable when searching for exclusions to apply in campaigns (example: *e2 // Purchased Last 7 Days). [L0279, 2025-26]
- Name a new list after the campaign and its offers (for example, the campaign name plus "10% and 15%"), so that separate lists can be created later for split tests. In Klaviyo, go to Lists & segments > Create list and give the list a name. [L1138, 2025-26]

### Core exclude segments

Apply these five core exclude segments to every email campaign: Purchased Last 7 Days (minimum; consider 14 days), Soft Bounce (3+ bounces), Spam Trap, and Spam Keywords. This approach protects deliverability and maintains sender reputation. [L0279, 2025-26]

With proper list management and the five core exclude segments applied consistently, a well-maintained email list should achieve over 30% open rate. [L0279, 2025-26]

Focus email marketing on deciding whom NOT to send to rather than whom to send to. Proper exclusions for bounces, inactive profiles, and suspicious keywords ensure messages reach engaged audiences and protect your sender reputation. [L0279, 2025-26]

#### Purchased Last 7 Days and Purchased Last 14 Days

- Do not send marketing emails to customers within 5-14 days of purchase. This period is perceived as triggering and annoying. Customers need time to receive and be satisfied with their order before you resume marketing to them. [L0279, 2025-26]
- Create a Purchased Last 7 Days exclude segment with the condition: placed order at least once in the last 7 days. Adjust timing based on shipping speed. Purpose: prevent triggering customers with marketing immediately after purchase. [L0279, 2025-26]

| Shipping speed | Exclude window | IDs |
|---|---|---|
| Customers receive products within 3 days | 5 days | [L0279, 2025-26] |
| Standard shipping | 7 days | [L0279, 2025-26] |
| Maximum aggressive purchase exclusion (minimal marketing contact with recent purchasers) | 14 days (Purchased Last 14 Days: placed order at least once in the last 14 days) | [L0279, 2025-26] |

- Discount-driven segment: when you want minimal marketing contact with recent purchasers, use the 14-day segment. [L0279, 2025-26]
- Check flow structures for suppressions and exclusions, such as customers who have already purchased or who are already in another flow. Blueprints list these as key points that are easy to miss. [L0588, 2025-26]

#### Soft Bounce

- Create a Soft Bounce exclude segment for email addresses that have bounced at least 3 times, as soft bounces significantly hurt deliverability. In Klaviyo, the condition is "bounced at least three times overall time." [L0279, 2025-26]
- Always exclude profiles that have bounced twice or more, using a segment such as *Bounced x2 or more in the Don't send to field. In the example this excluded 62 profiles. This is a stricter campaign-level exclusion than the 3-bounce core segment. [L0864, 2025-26]

#### Spam Trap

- Spam traps are email addresses that Internet Service Providers (Google, Yahoo, Outlook) use to monitor sender reputation. ISPs take over dormant accounts inactive for 5-10 years, sign them up to mailing lists, and watch whether senders continue emailing them without engagement. Senders who keep sending to spam traps get blacklisted. [L0279, 2025-26]
- Create a Spam Trap exclude segment with these AND conditions together:
  - Viewed Product = zero times
  - Checkout Started = zero times
  - Placed Order = zero times
  - Opened Email = zero times
  - Clicked Email = zero times
  - Cannot Receive Marketing = true

  Optional: add "subscribed more than 14 days ago" to exclude brand-new inactive profiles and focus on established bot/fake accounts. Profiles automatically exit this segment upon any engagement action. [L0279, 2025-26]
- Do not use "active on site" conditions in the spam trap segment, as bots and fraudulent accounts can appear active on site even without genuine engagement. Base spam trap detection on actual engagement behavior: zero emails opened AND zero emails clicked AND zero products viewed AND zero checkouts started AND cannot receive marketing. [L0279, 2025-26]

#### Spam Keywords

Exclude emails containing these keywords by creating a segment with "Email contains [keyword]" conditions joined by OR. These patterns indicate non-personal or system accounts that should never receive marketing. [L0279, 2025-26]

| Keyword group | IDs |
|---|---|
| support, help@, reply@, nobody, admin, marketing, server, test, spam, subscribe, unsub, job, billing, promotion, careers, contact, service, customer, editor, finance, ftp, info, helpdesk, news, media, relations, investor | [L0279, 2025-26] |

#### Purchase exclusions for overlapping segments

- Without exclusions, one person can appear in several overlapping segments and receive conflicting or repeated messages. For example, when emailing customers who bought once, exclude customers who bought twice from that audience. ** [L0603, 2021-22]

### Cleaning fake and unengaged subscribers

- Invalid or misspelled email addresses trigger a self-correction: each send attempt bounces, and after 3 or more soft bounces, your soft bounce segment excludes them from future campaigns. This automatic removal continuously improves list hygiene and sender reputation without requiring manual cleaning. [L0279, 2025-26]
- Clean fake newsletter subscribers in Klaviyo without double opt-in (double opt-in would drop most real subscribers): [L0971, 2024]
  1. Once a week, delete obviously fake contacts.
  2. Once a month, run a report in Klaviyo for contacts who have not engaged with emails in the past 30 or 60 days.
  3. Delete those contacts.
- Build an exclusion segment for unengaged profiles at one struggling provider: [L0864, 2025-26]
  1. Go to Audience > Lists & segments and click Create segment.
  2. Name it with a single asterisk at the start, for example *Yahoo Unengaged, and avoid multiple asterisks.
  3. Under Definition, choose What someone has done (or not done).
  4. Set Person has > Opened Email zero times between 15 and 365 days ago, and add the same condition for Clicked Email, so the profile has neither opened nor clicked in that window.
  5. Add an AND filter on the profile property email that contains yahoo.
  6. Check the number under Preview details before saving (the example preview showed about 2,446 profiles).
  7. Click Create segment to save it.
- In Klaviyo's Create segment screen, the Segment builder offers a Define with AI option next to the manual Definition builder. The manual route starts with the Definition field, where you choose a condition such as What someone has done (or not done) and then add Person has filters. [L0864, 2025-26]
- In a campaign's Recipients step, the Don't send to (optional) field takes exclusion segments, and the Estimated recipients count updates after you add them. The Skip recently emailed profiles option uses Smart Sending, which skips profiles emailed in the past 16 hours by default; this window can be changed in Account Settings. [L0864, 2025-26]
- Check the Estimated recipients count in the campaign's Recipients step after adding each exclusion, because it shows how many profiles remain after include and exclude segments. In the example the count was about 2,012 after excluding the bounced and Yahoo unengaged segments. [L0864, 2025-26]
- Put the exclusion segment into the Don't send to field of every new campaign, and share it with the team so every email uses it automatically. This keeps the fix in place without needing a manual check each time. [L0864, 2025-26]

### Send-to-engaged strategy

- Three-part sending strategy:
  1. Send to engaged subscribers first.
  2. Tailor segments by product or behavior interests.
  3. Exclude unengaged audiences. Most important is knowing who not to send to.

  [L0264, 2025-26]
- Segment by date range to control costs. Create audience segments by date range (for example, July-August cohort, August-September cohort). Send the same email campaigns to each segment separately. Klaviyo charges per unique recipient per campaign, so segmented sends cost less than one large campaign. This keeps you on the $150/month plan instead of scaling to $5,000/month. Once scaled up to high-volume pricing, it is difficult to scale back down, so plan segmentation from the start. [L0263, 2022]

### Avoiding overlap and conflicting messages

- Split the customer list into segments so that different customer groups receive different emails. Segmenting lets one email account serve several audiences without sending the same message to everyone. [L0337, 2022]
- ** Do not send all subscribers the same messages from one large list. Split the total list into targeted segments that each receive their own email flow based on actions taken on the site, such as which product was bought or which content page the person opted in on. [L0493, 2021-22]
- ** Emails sent to a segment should be highly relevant to the opt-in point or purchase that placed the subscriber there. Contextual, targeted flows are where the strongest email returns come from. [L0493, 2021-22]
- Before sending a segmented message: [L0603, 2021-22]
  1. Define the exact group the message is for.
  2. Check whether that group overlaps with another segment.
  3. If it does, add an exclusion for the overlapping segment.
  4. Confirm that the audience now matches the intended message.

### Audience sync to ads

- In Klaviyo, sync an email list or segment to a Facebook custom audience. Subscribers are then shown ads even when they do not open email. [L1204, 2022]
- Use invisible lists, which are never sent email, only for ad targeting. Keeping them apart from communication lists keeps targeting precise. [L0757, 2022]


Part 6 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/05-pop-up-set-up.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/07-welcome-series-and-new-subscriber-nurture.md
