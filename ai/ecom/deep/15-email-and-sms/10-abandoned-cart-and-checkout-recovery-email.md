<!-- part of ecom/deep/15-email-and-sms.md -->
Part 10 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/09-lead-magnet-follow-up-flows.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/11-discount-timing.md

## Abandoned Cart and Checkout Recovery (Email)

### Purpose and Priority

- An abandoned checkout occurs when a customer adds products, starts checkout, and does not complete the purchase [L0282, 2020-26]. An abandoned cart flow is triggered for shoppers who started checkout but did not complete the order, and it brings them back to the cart they already built [L0606, undated].
- Visitors who add to cart and leave without buying waste paid traffic unless you can follow up with them. Automated reminder emails or SMS let you re-contact them hours later at no extra ad cost [L0476, undated].
- Roughly 7 to 8 out of 10 shoppers who add products to their cart leave without buying, so an abandoned-cart sequence reaches a large share of site visitors [L0572, 2014].
- Recovering about 25% of abandoned carts through an email sequence is cited as a realistic result to aim for once the flow is optimized [L0572, 2014].
- Abandoned cart recovery is among the cheapest ways to win back shoppers who added items to their cart [L1251, 2024+].
- Improving the abandoned-cart flow is one of the fastest ways to see results in an online store, because it recovers sales that already had strong intent. Gains can show as lower cost per lead, better traffic quality and a higher conversion rate [L1208, 2025-26].
- A recovered buyer can become a repeat customer who leaves reviews, refers others and eventually becomes a brand advocate. This long-term value justifies the extra effort in recovery sequences [L1208, 2025-26].
- Set up the abandoned cart email sequence before any other optimization. Use it to learn why visitors leave, and avoid discounts as the first lever; discounts should be strategic and paired with something of higher value [L0575, 2014].
- The abandoned cart sequence should be set up before traffic is scaled [L0430, 2023].
- set up the abandoned cart email sequence in Klaviyo from day one, before any traffic campaigns run [L1085, 2018].
- once the store is established, run abandoned cart follow-up as an automated email flow, for example one built in Klaviyo [L0671, 2021].
- Klaviyo is used to set up abandoned cart emails with customized messages and urgency. Abandoned carts can turn into sales in the days after a visit, so configure these early [L1279, 2021].
- an abandoned cart email sequence is an automated message sent through the email autoresponder when a shopper leaves a cart without buying [L1298, 2021-22].
- Klaviyo can run abandoned cart recovery, which sends a notification to visitors who left items in their cart without completing the purchase [L1399, undated].
- Shopify's email or Klaviyo can both send abandoned cart messages and both work; the speaker's team uses Klaviyo [L0964, 2023].
- a person who added items and started checkout is the warmest prospect you will get, so extra reminder emails are acceptable here [L1449, 2021-22].
- Abandoned-cart messages are reminders about items left in the basket, not welcome emails. Keep the copy focused on the cart and its contents. Trust comes from the logo, the product block and clear next steps, not from a long introduction [L0567, 2025-26].
- A shopper who abandoned a cart has already moved through the ad, the site, the product page and add-to-cart, so purchase intent is high. The messages should help them close the sale, not reintroduce the brand [L1208, 2025-26].
- Abandoned-cart messages are bottom-of-funnel. Do not use top-of-funnel content such as broad brand introductions; focus on trust, objection handling and social proof [L1208, 2025-26].
- At the abandoned-cart stage the buyer has already decided. Messages should validate that decision, build trust and handle objections instead of pushing for a sale. Pressure or a hard sell at the first contact tends to backfire [L1208, 2025-26].

### Trigger Choice and Setup

#### Trigger by Platform

| Platform | Trigger and setup | Source |
|---|---|---|
| Shopify | Use the Abandoned Checkout template, not Abandoned Cart [L0266, 2020-26] | [L0266, 2020-26] |
| Shopify Flow | Trigger text: "This workflow starts when a customer abandons their checkout." First condition: "Customer abandoned checkout in online store = true" and "Checkout total > $0" [L0282, 2020-26] | [L0282, 2020-26] |
| Klaviyo | Trigger "When someone Checkout Started" [L0567, 2025-26]. Use the Checkout Started event, not Abandoned Checkout, to capture customers immediately when they leave the cart [L0261, 2025-26] | [L0567, 2025-26; L0261, 2025-26] |
| Klaviyo | Confirm the trigger is Started checkout [L0607, undated; L0573, undated] | [L0607, undated; L0573, undated] |
| Clavio | Open Flows, search for Abandoned carts and click Get started [L0634, undated] | [L0634, undated] |

- The sources name the trigger differently because each uses the trigger native to its platform. The one source source says to use Checkout Started rather than Abandoned Checkout [L0261, 2025-26], while the Shopify workflow starts from Abandoned Checkout [L0282, 2020-26]. Use the trigger the platform's own flow provides for the abandoned checkout event.
- Shopify automation: applying the Abandoned Cart customer tag when the automation starts segments these customers for future targeting and analysis [L0156, undated]. Shopify workflow variant: add a tag action named 'abandoned cart' [L0266, 2020-26].
- Checkout setting for Clavio: remove phone number as an optional checkout field and make email a required field, so every customer can be retargeted by email [L1347, undated].

#### Channel Choice

- one source first message: 20 minutes after abandon, sent as SMS to subscribers and as email to non-SMS subscribers [L0261, 2025-26].
- SMS can only reach customers who agreed to receive SMS. SMS Bump only sends to opted-in customers, so SMS cannot recover carts for customers who never opted in. Set up Clavio and SMS Bump in parallel [L1347, undated].
- one source SMS: within 24 hours, send one SMS that reassures the buyer, points out the saved order and lists three value propositions. If the cart is over $100, mention free shipping instead of one of them [L1208, 2025-26].

### Timing and Spacing

#### First Email Delay

| Source | First email | Applies to | Source |
|---|---|---|---|
| Shopify default | 10 hours | Pre-built Recover Abandoned Checkout template default | [L0149, undated; L0266, 2020-26; L0282, 2020-26] |
| one source recommendation | 4 hours | Reduces the default to re-engage while purchase intent is fresh | [L0149, undated; L0266, 2020-26; L0156, undated; L0282, 2020-26] |
| one source | 20 minutes (SMS to subscribers, email to non-SMS subscribers) | Standard first message | [L0261, 2025-26] |
| one source path 2 | 4 hours | Pain-point email in the split test | [L0567, 2025-26] |
| Clavio | 15 minutes | Clavio abandoned carts flow | [L0476, undated; L0634, undated] |
| Klaviyo, as taught | 15 minutes | First email after checkout start | [L0477, undated; L1297, 2023; L0605, undated] |
| Klaviyo, new store with first product | 30 minutes, changed from the default 4 hours | Aggressive timing for a first product | [L0573, undated; L0607, undated] |
| one source | Immediately after abandonment | Reminder email with product and checkout link | [L1449, 2021-22] |

- one source range for the first email: 10 to 15 minutes after checkout is abandoned, at least 10 minutes, since entering card details takes 5-7 minutes. 20 minutes can also be tested [L0605, undated].
- one source: the first abandoned checkout email is sent 4 hours after abandonment, reduced from the default 10 hours, to capitalize on immediate purchase intent [L0149, undated].
- one source: the default wait is 10 hours [L0266, 2020-26].
- one source: the first email sends only if the default-timer change is in place; the pre-built template defaults to 10 hours, so the change to 4 hours must be made manually [L0282, 2020-26].

#### Second and Later Emails

| Source | Second email | Third or later | Source |
|---|---|---|---|
| one source (Shopify) | 20 hours after the first, about 24 hours total from abandonment (4 + 20) | Not applicable (two-email sequence) | [L0149, undated; L0266, 2020-26; L0156, undated] |
| one source (Shopify) | 24 hours after the initial abandonment | Not applicable | [L0282, 2020-26] |
| one source | Reminder 45 minutes after the first email, only to unopened emails; path test at 23 hours total from abandon | Risk email 24 hours after step 4 (about 47 hours total); first discount offer 12 hours later (about 59 hours); scarcity reminder 8 hours later (about 67 hours) | [L0261, 2025-26] |
| one source (five-message sequence) | Risk and social-proof email, then a 1-day wait before the 15% offer at 7:00 am | Last-chance email 13 hours after the offer email | [L0567, 2025-26] |
| one source (Clavio) | 4 hours after the first | Third email 20 hours after the second | [L0476, undated; L0634, undated] |
| one source (Klaviyo, as taught) | 4 hours after the first | Third email 24 hours after the second, with the cart and discount reminder | [L0477, undated; L1297, 2023] |
| one source (Klaviyo, new store) | After roughly 8 to 10 hours | Third email after 24 hours; a fourth at 48 hours can also work | [L0573, undated; L0607, undated] |
| one source (four-email flow) | About 2 hours after email 1 | About 6 hours after email 2; final email announces the deal is ending | [L0605, undated] |
| one source | 6 hours after the first reminder | Personal email 18 hours after the second reminder; discount 24 hours later | [L1449, 2021-22] |

- one source timing for the three-email sequence: first email 15 minutes after the cart is left, second 4 hours after the first, third 20 hours after the second [L0476, undated].
- one source gap note: the second email's delay was described as 4 hours (default was 20 hours in the Clavio setup) [L0476, undated].

#### Spacing Rules

- Use 20-minute, 45-minute and 23-hour intervals rather than random timings. The 23-hour wait ensures the second follow-up hits the customer at the same time of day as when they originally abandoned their cart, when they are most likely to be free and receptive [L0261, 2025-26].
- Always space abandoned cart emails using multiples of 24 and 12 hours (20 min + 45 min ≈ 1 hour, then 23 hours, 24 hours, 12 hours). Avoid arbitrary intervals like 4 hours, which hit customers at inconvenient times (for example 2 a.m.) and get lost in inbox clutter by morning [L0261, 2025-26].
- Conflict: the one source recommendation uses a 4-hour first delay [L0149, undated; L0266, 2020-26], and the one source path 2 pain email also waits 4 hours [L0567, 2025-26]. The one source rule says to avoid 4-hour intervals [L0261, 2025-26]. The one source test data show 8.1 orders per 100 abandons with a 20-minute delay and 3.7 with a 4-hour delay [L0261, 2025-26]. Use the one source evidence where the 20-minute start is used; the 4-hour delay remains the one source recommendation for the first email [L0149, undated].
- Scheduled send time: in Klaviyo, use Time Delay with Wait until specific time to send at a consistent time in the customer's timezone (for example 7 a.m.). This prevents emails sent at inconvenient hours [L0261, 2025-26].
- Example from the same source: wait 13 hours to reach an 8 p.m. send time, which creates midnight expiration urgency [L0261, 2025-26].
- Discount offer email at 7:00 am in the sequence [L0567, 2025-26].
- one source: the 48-hour email is optional [L0607, undated].

#### Expiry Windows

- one source: the abandoned checkout flow has a 72-hour window. After that window, the product is returned to the shelf and the flow ends [L0494, 2026].
- one source: the cart discount should expire only after the final cart email. Send email 4 a few hours before that expiry. Derive the gaps between emails 1 to 3 from the expiry you set, because the cart copy does not fix them [L0606, undated].
- one source: time-limited discounts should be labelled clearly as limited, here for 3 days, and reminders should show the remaining time, such as 24 hours and 4 hours [L1449, 2021-22].

#### Day-Based Countdown

- Abandoned-cart email countdown over seven days:
  1. Day 5: send an email saying there are 72 hours left [L1243, 2017].
  2. Day 6: send an email saying there are 48 hours left [L1243, 2017].
  3. Day 7: send three emails within the day, at 12 hours, 6 hours and 1 hour left [L1243, 2017].
  4. Make clear in the final message that this is the last and best offer [L1243, 2017].

### Sequence Structure and Per-Email Jobs

#### Sequence Length and Shape

| Sequence type | Structure | Source |
|---|---|---|
| Five messages | Desire-led reminder, pain-point reminder, risk reduction with social proof, discount offer, last-chance warning | [L0567, 2025-26] |
| Four emails  | 20-minute desire email, 45-minute reminder, 23-hour pain test, 24-hour risk email, 12-hour offer, 8-hour scarcity reminder | [L0261, 2025-26] |
| Four emails  | Email 1 without discount, discount from email 2, last two emails with a closing deadline | [L0606, undated] |
| Four emails  | Benefit email, reviews and urgency, extra 10% off, final email | [L0605, undated] |
| Three emails  | At least three emails; text-based messages with personalization convert better and reach the inbox more reliably | [L0573, undated] |
| Seven-step sequence | Reminder, second reminder, personal email, discount, content or discount reminder, final discount reminder, handover to the prospect flow | [L1449, 2021-22] |
| Two emails (Shopify default) | First email with products and default template, then a second email with a discount | [L0266, 2020-26; L0282, 2020-26] |

- A cart-abandonment flow is a series of emails, not a single reminder. Start with a short first reminder built from a fill-in-the-blank template, then plan the second and third emails using the same principles [L0572, 2014].
- one source: each of the first three abandoned-cart emails should have exactly one objective, which is returning the buyer to checkout to complete the order. Remove additional calls to action such as social media icons, app download prompts or other links that distract from the purchase [L1208, 2025-26].
- one source: each email in the abandoned checkout sequence should answer one of the four reasons customers abandon (offer, price, lack of trust, uncertainty): product value first, social proof second, and a discount last [L0604, undated].
- Use the same sequence logic for every abandoned-cart follow-up [L1208, 2025-26].
- Keep non-purchase prompts such as social media follow requests, app download invitations and other promotions out of the abandoned-cart sequence. Put those messages into separate flows or manual campaigns so the buyer has only one reason to return to checkout [L1208, 2025-26].

#### Per-Email Jobs

| Email | Job | Source |
|---|---|---|
| First email (desire) | Desire-led reminder about what the customer wants to gain or feel; no discount | [L0261, 2025-26; L0567, 2025-26; L0476, undated] |
| First email (reminder) | Reminder that the cart is waiting, with one product benefit or guarantee and a link to the store; no discount | [L0476, undated] |
| First email (validation) | Validate the decision and reassure; do not word it as if the customer forgot something | [L1208, 2025-26] |
| First email (no new options) | Do not suggest other products or new options; the buyer was ready to complete the purchase | [L1208, 2025-26] |
| Second email (pain or proof) | Pain-point reminder, or image reviews and testimonials | [L0567, 2025-26; L0604, undated] |
| Second email (urgency) | Reason to act now such as limited stock, plus a code and checkout link | [L0476, undated; L0605, undated] |
| Risk-reduction email | Guarantees, payment options and customer testimonials | [L0261, 2025-26; L0567, 2025-26] |
| Third email (offer) | Raise the incentive; include the tracking policy link, the checkout link and a deadline | [L0476, undated; L0606, undated] |
| Final or last-chance email | Final deadline and last-chance warning; state that no further emails will follow | [L0476, undated; L0605, undated; L0567, 2025-26] |

- Risk-reduction email: sent 24 hours after the test step in the one source flow, with guarantees, payment options and customer testimonials [L0261, 2025-26].
- In the final abandoned-cart email, adding a link to the store's delivery tracking policy and contact details reduces hesitation about buying. Shoppers who worry about shipping or support are more likely to return to checkout when these answers are one click away [L0476, undated].
- In the third cart email, add a short line with the delivery tracking code, a promise of a quick reply, and links to the tracking policy and contact details. Include the links only if those pages exist and are current [L0606, undated].

#### Full Sequence Procedures

**one source four-email abandoned checkout flow (in this order):**
1. Email 1, about 10 to 15 minutes after checkout is abandoned (at least 10 minutes, since entering card details takes 5-7 minutes; 20 minutes can also be tested). Use a benefit-led headline, not a salesy one. Describe the customer's pain point and how they will feel after getting the product, add 3-4 bullet points on why they need it, and end with a benefit-driven call to action such as "get yours today" or "make your partner happy by ordering now" [L0605, undated].
2. Email 2, about 2 hours after email 1. Use a subject line that says the order is not yet complete. Add 3-4 five-star reviews with images, a link back to the order, and urgency such as limited stock (for example only 50 pieces remaining), a price increase after 4-5 days, or "while stock lasts" [L0605, undated].
3. Email 3, about 6 hours after email 2. Use a new subject line that announces an exclusive deal with an extra 10% off. Repeat the benefit points, reviews, headline and bullet points, and restate the same offer [L0605, undated].
4. Final email: say the deal is about to end, give a final confirmation and state that no further emails will follow [L0605, undated].

**one source three-email abandoned checkout sequence:**
1. First email: explain the benefits of the product, address the customer's pain point or current situation, and explain why this product fits them. Show the product with 3-4 bold headline points and a call to action [L0604, undated].
2. Second email: show image reviews and testimonials [L0604, undated].
3. Third email: make a better offer with an extra 10-20% off [L0604, undated].

**one source abandoned-cart sequence:**
1. Reminder email immediately after abandonment, containing the product and a link back to checkout [L1449, 2021-22].
2. Second reminder email 6 hours after the first, same type (product plus checkout link) [L1449, 2021-22].
3. Personal welcome-style email from the business owner 18 hours after the second reminder, asking whether you can help and inviting a reply, without pushing the product [L1449, 2021-22].
4. Discount offer 24 hours later, limited to 3 days, with the product, a checkout link and the discount code [L1449, 2021-22].
5. After 2 days without purchase, send either a helpful content email (such as a buyer's guide, if the product range is broad) or a discount reminder if the range is narrow, stating 24 hours remain to finish the purchase [L1449, 2021-22].
6. 24 hours later, send a final discount reminder stating about 4 hours remain before the discount expires [L1449, 2021-22].
7. Hand the contact over to the 30-day master flow for prospects so they keep receiving emails [L1449, 2021-22].

**one source Shopify template sequence (overview):**
- The pre-built template automatically includes the customer's abandoned products in the first email and uses the color scheme configured in the Messaging app settings [L0282, 2020-26].
- The pre-built template is effective because Shopify designed it using performance data. Keeping it unchanged is a safe choice; customize only if you have specific improvements beyond the default version [L0282, 2020-26].

### Desire vs Pain Messaging

- Design the abandoned cart flow using desire messaging (what the customer wants to gain or feel) versus pain messaging (the biggest problem the product solves). Test both with a 50/50 split to find which resonates with your audience, because effectiveness varies by product category and niche [L0261, 2025-26].
- Desire messaging outperformed pain messaging for the initial abandoned cart email in the same one source test. Desire path A reached 83.8% open, 16.2% click and 8.1% order; pain path B reached 82.4% open, 5.9% click and 2.9% order [L0261, 2025-26].
- Find the pain point by asking what goes wrong during the product's hardest real use, such as long sessions in heat or a full working day. Name that exact situation in the email so the reader recognises their own experience [L0567, 2025-26].
- Pain-based example for bike gear: the subject line "Saddle Sores? Say No More!" targets the specific objection (uncomfortable clothing causing soreness) rather than generic benefits. It overcomes the biggest barrier to purchase in that product category [L0261, 2025-26].
- Objections are usually offer, price, lack of trust or uncertainty. Address each in its own email [L0604, undated].
- Trust-based messaging: focus on trust, objection handling and social proof, not on introducing the brand [L1208, 2025-26].
- one source offer email: tease what waits in the cart without naming the product. This creates curiosity and gets opens [L0567, 2025-26].
- Short versus story-driven pain copy after the 23-hour wait: see the benchmark results below [L0261, 2025-26].
- Reminders must not suggest the customer forgot something, because that implies the item was not valuable to them. Use assumptive wording such as saying something went wrong at checkout instead [L1208, 2025-26].


Part 10 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/09-lead-magnet-follow-up-flows.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/11-discount-timing.md
