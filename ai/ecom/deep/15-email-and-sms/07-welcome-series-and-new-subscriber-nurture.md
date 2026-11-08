<!-- part of ecom/deep/15-email-and-sms.md -->
Part 7 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/06-lists-segments-exclusions-and-list-hygiene.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/08-platform-setups.md

## Welcome Series and New Subscriber Nurture

### Welcome flow structure

- The welcome series is the first automated sequence a new subscriber receives. It is triggered by a sign-up through the pop-up or footer newsletter form, for example a pop-up app such as Wheelio. [L0606, undated; L0605, undated]
- In Clavio, the series is triggered when a visitor subscribes to the chosen list, such as Newsletter, through the sign-up pop-up. The first email goes out immediately, and later emails follow on set delays. [L0634, undated]
- In Klaviyo, the series starts automatically for each person who joins through a sign-up form, so the first email goes out right after subscription. [L0573, undated]
- The three-day structure of one source:
  1. Day 1, welcome email, sent immediately after subscription. Keep it short and simple: thank the subscriber, explain that the newsletter keeps them updated with promotions and offers, and include the brand's social media links. Also send an SMS if budget allows. [L0307, 2023+]
  2. Day 2, brand introduction email, sent 24 hours later. Introduce the brand and go deep on product benefits, technology, design, craftsmanship, and what differentiates you from competitors. For electronics, explain technology benefits. For jewelry, highlight design, designer experience, and handmade quality. For any product, explain why it is worth buying. [L0307, 2023+]
  3. Day 3, user-generated content email. Include a natural product photo (not a professional one) and a text testimonial in this form: "We got an awesome comment on our Facebook/product page: [Customer name] faced [problem], tried our product, [their positive feedback]." This adds social proof without video. [L0307, 2023+]
- The welcome flow order for a community-style brand:
  1. Tell new subscribers they are joining a community, family or club.
  2. Offer a welcoming gift.
  3. If you have a collection, add a collection block after the welcome content.
  4. Add your brand story in the footer. [L0604, undated]
- A pop-up welcome flow with a 5-10% welcome kit discount:
  1. Trigger the flow when someone signs up through the pop-up or the footer newsletter form.
  2. Send the first email straight away: welcome them to the community, family or club, give a welcome kit discount of 5-10%, add a link to a collection, and close with a short brand story in the footer.
  3. If the email is not opened after one day, send the same email again with the same offer.
  4. Keep sending emails every 2-3 days, not several times a day, until the subscriber opens an email or buys.
  5. Make the content educational: address the customer's use case and pain points, and avoid hard sales pitches such as "buy now" repeated in every email.
  6. End each email with at most a one-line pitch, such as checking out the collection. [L0605, undated]
- The welcome flow has three emails with a 10% storewide discount. The deadline gets shorter in each one: last 3 days, then 48 hours, then 24 hours. The same discount code is used in all three emails. [L0606, undated]
- Some sellers run longer introduction sequences of 40 to 50 emails. Choose the length you can realistically write and maintain, since a shorter sequence that gets finished is more useful than a longer one that is abandoned. [L0523, 2015+]
- Stated lengths for welcome or introduction sequences differ by source. Use the length that fits your capacity:

| Source | Length | Note |
|---|---|---|
| one source, three-day structure | 3 emails | Day 1, Day 2, Day 3 [L0307, 2023+] |
| one source, three-email flow with 10% offer | 3 emails | Shortening deadlines [L0606, undated] |
| one source, Clavio setup | 2 emails | Email 1 and reminder email 2 [L0634, undated] |
| one source, Klaviyo setup | 3 emails | Thanks, bestsellers, follow-social [L0477, undated] |
| one source, soap-opera sequence | 5 emails | Once per day [L0523, 2015+] |
| one source, trust series before a higher-priced ask | 5 emails | Story, problems, solutions [L0552, 2023] |
| one source, long introduction sequences | 40 to 50 emails | Optional [L0523, 2015+] |
| one source, welcome flow with offer clock | 5 emails | Offer clock 0 to 4 hours [L1470, 2025-26] |
| one source | 3 to 4 emails | Introduce business and expectations [L0801, 2021] |
| one source, welcome flow before broadcast | About 4 to 5 emails | Then main broadcast list [L1076, 2019] |
| one source | 30-day master flow | Covers pre- and post-purchase contacts [L0493, 2021-22] |

- The first emails must bond the subscriber with your Attractive Character. A boring first email usually means the subscriber stops opening your messages. [L0523, 2015+]
- Place your most emotional story early in the welcome sequence to build a bond with new subscribers before pitching them. Readers who connect with the story tend to open and buy more. [L0378, 2019+]
- The second email of a store welcome series should show bestsellers, active deals or promotions, and customer reviews or testimonials so new subscribers can judge product quality. It can also explain the store's mission and values and how the products match them. Keep it focused on buying decisions rather than on follow-up actions. [L1297, 2023]
- The third email should build the relationship, not push a sale. Invite subscribers to follow the social accounts or join a loyalty program for rewards, and link useful help such as product guides, size charts, or a customer service phone line so they can buy with confidence. Put the social follow request last, and only include it if the store actually has social accounts. [L1297, 2023]
- The last welcome email shifts from brand talk to product. A best-sellers block shows what the discount buys. Use this switch when the message moves to the final deadline, so the subscriber sees products instead of another plea. Only show items that are in stock. [L0606, undated]
- Sample flow with timed steps: a Time Delay step sets both the gap and the send time between emails. Email one goes out on Day 0, a Wait 3 days step puts email two on Day 3 at 12:00 PM, and a Wait 4 days step puts email three on Day 7 at 12:00 PM. A noon send is a weak fit for welcome emails, so set the delay steps to send around 8 PM instead. [L1470, 2025-26]

### Timing and spacing

- Trigger and first send:
  - Shopify: insert a 1-minute wait after the email subscription trigger so processing finishes before conditional checks run. [L0201, 2020-26]
  - General, older: the first email after someone subscribes or asks about a product usually goes out after a delay of about 5 to 10 minutes. [L1090, 2021]
  - Use the 1-minute wait in Shopify automations and the 5-10 minute delay as the general reference. [L0201, 2020-26; L1090, 2021]
- Send time: schedule welcome emails for around 8 PM rather than noon. Lunchtime sends were judged a poor fit for this series, so avoid a 12 PM send time after a multi-day wait. [L1470, 2025-26]
- Gap between welcome emails: several sources differ, so choose by offer deadline:
  - Second email moves from a 3-day delay to a 1-day delay, because a longer gap lets the buyer lose interest. [L0573, undated; L0607, undated]
  - Email spacing of about 24 hours: email 1 on signup, email 2 about 24 hours later, email 3 about 48 hours later. For a three-day offer this keeps each email's deadline true, since 48 hours remain after one day and 24 hours after two. [L0606, undated]
  - Lead-magnet flow: wait 24 hours between each further email. [L1076, 2019]
  - Soap-opera sequence: five emails sent once per day after signup. [L0523, 2015+]
  - Ongoing frequency: every 2-3 days, not several times a day, until the subscriber opens an email or buys. [L0605, undated]
- Bestsellers and social follow-up in Klaviyo: the bestsellers, offers and reviews email is sent 3 days after signup. The follow-us-on-social-media email is then sent 4 days after that, so the social ask is the last message. [L0477, undated; L1297, 2023]
- Source ambiguity: one Klaviyo procedure labels the 3-day wait as "Email 1 is sent after 3 days' wait" and then lists the bestsellers email as Email 2 after a 4-day wait, which conflicts with the 3-day and 4-day timing above. Read the 3-day wait as the delay before the bestsellers email and the 4-day wait as the delay before the social email. [L0477, undated; L1297, 2023]
- The 30-day master flow spreads early emails in the first days, for example Day 0, Day 2, Day 5 for prospects, and Day 1, Day 7, Day 21 for first-time buyers. [L0493, 2021-22]
- Offer deadlines and timing are covered in the discount section below. [L0606, undated; L1470, 2025-26]

### Discount, deadline and code logic

- Offer values used by the sources, by setup:

| Setup | Offer | Source |
|---|---|---|
| Shopify welcome email example | Save 10 (example code) | [L0201, 2020-26] |
| Welcome flow for new subscribers, three-email series | 10% storewide | [L0606, undated] |
| Klaviyo prebuilt welcome series | 10% off, static coupon such as welcome_10 or WELCOME10 | [L0573, undated; L0607, undated] |
| Clavio welcome series | 5 dollars off storewide, code SAVE5 | [L0634, undated] |
| Lead-magnet follow-up flow, first coupon | 5% off | [L1076, 2019] |
| Welcome kit for pop-up subscribers | 5-10% | [L0605, undated] |
| one source sitewide welcome email | 10% off sitewide | [L1470, 2025-26] |
| SMS welcome on separate code | 15% VIP code | [L1470, 2025-26] |

- Deadline logic:
  - The welcome series deadline is 72 hours, or the expiry date of the coupon or discount code if that is the shorter limit. [L0494, 2026]
  - Three-email flow: last 3 days, then 48 hours, then 24 hours. [L0606, undated]
  - Clavio: email 1 states a three-day deadline; the reminder (email 2) says the offer is available for 48 hours only. [L0634, undated]
  - Offer clock in the one source structure: welcome email with the discount code at 0 hours, bestseller showcase at 48 hours to go, social proof story at 24 hours to go, urgency email at 12 hours to go, and last-chance email when the offer ends in 4 hours. [L1470, 2025-26]
  - Only state a deadline you can keep. A true deadline turns interest into action, while a fake one destroys trust. [L0523, 2015+]
- Discount code formula for the welcome email: the subject line names the offer and adds a deadline; the body thanks the new subscriber, shows the discount code in bold on a colored background, states where to use it, and states when it expires. The code is the reason the person subscribed, so it must be easy to find and clearly time-limited. [L0476, undated]
- Examples from the same formula: subject "Your $5 welcome code ends Friday", with the code and a Shop now button; and subject "Your 48 hours to claim $5 off start now", with a short thank-you line, the code, and a link to the best-selling collection. [L0476, undated]
- Separate codes per channel: give each welcome channel its own discount code, such as a 10% sitewide code for email and a 15% VIP code for SMS. Separate codes show which channel brings redemptions and make the offers easy to tell apart at checkout and in reporting. [L1470, 2025-26]
- Automatic application: before saving a discount link, confirm that the discount is set to apply automatically at checkout, so the customer never has to type the code. Use the link itself as the test, since the preview in Klaviyo does not make discount links clickable. [L1470, 2025-26]
- Use the same discount code in all emails of one flow. [L0606, undated]
- Offer and reward messaging in the Clavio reminder: the discount is valid until the stated time, and the subscriber can still load the cart after that. [L0634, undated]
- Newer and older discount advice: the 5% first coupon in the lead-magnet flow is from one source, undated, and the 5-10% welcome kit is from one source, undated; both apply to different flow types. [L1076, 2019; L0605, undated]

### Filters: buyers, abandoners and channels

- Audience for the discount: limit the audience to new subscribers who have never placed an order, so buyers do not receive the new-customer discount again. [L0573, undated]
- Klaviyo audience setup: select the audience of new sign-ups who have never purchased, then choose a static coupon. [L0573, undated]
- Klaviyo prebuilt flow: the prebuilt welcome flow branches between subscribers who have never ordered and customers who have ordered at least once. Customers with at least one order see a separate flow path, so the template covers both groups. [L0607, undated; L0573, undated]
- Beginners should start with the prebuilt Klaviyo welcome flow. [L0573, undated]
- one source flow filter: add the filter "Placed Order zero times since starting this flow". Anyone who buys is removed from the welcome flow and stops receiving its emails, so the flow only targets new customers. [L1470, 2025-26]
- SMS split: add a Conditional Split with the condition "Is not consented to receive SMS". Put the SMS message on the No branch, which means subscribers who did consent to SMS, and let the Yes branch carry only the email path. [L1470, 2025-26]
- Shopify abandoned-cart exclusion: exclude customers tagged "abandoned cart" from the welcome automation because they enter a separate abandoned cart automation. Sending both sequences creates duplicate emails and wastes effort. [L0201, 2020-26]
- Shopify rules used in the automation: the first rule is Customer > Tags > does not include > abandoned cart, and the second rule is Customer > Amount spent > equals > 0. [L0201, 2020-26]
- Pop-up trigger: the welcome flow is triggered for people who enter their email in the pop-up installed on the store. It is the first automated sequence a new subscriber receives. [L0606, undated]
- Klaviyo newer flow experience: the pre-built welcome flow can be used with the newer experience. Beginners should start with this pre-built flow. [L0573, undated]


Part 7 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/06-lists-segments-exclusions-and-list-hygiene.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/08-platform-setups.md
