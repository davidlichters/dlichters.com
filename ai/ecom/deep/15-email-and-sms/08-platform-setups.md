<!-- part of ecom/deep/15-email-and-sms.md -->
Part 8 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/07-welcome-series-and-new-subscriber-nurture.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/09-lead-magnet-follow-up-flows.md

### Platform setups

#### Shopify

Create a welcome email automation (Shopify Email):

1. Open Shopify admin > Apps > Email. [L0201, 2020-26]
2. Click Create automation. [L0201, 2020-26]
3. Select Create custom automation (top right). [L0201, 2020-26]
4. Pick the trigger "Customer subscribed to email marketing". [L0201, 2020-26]
5. Click + to add a step. [L0201, 2020-26]
6. Choose Action. [L0201, 2020-26]
7. Select "Wait for a set amount of time". [L0201, 2020-26]
8. Set the duration to 1 minute. [L0201, 2020-26]
9. Add the next step. [L0201, 2020-26]
10. Choose Condition. [L0201, 2020-26]
11. Create the first rule: Customer > Tags > does not include > abandoned cart. [L0201, 2020-26]
12. Add a second rule: Customer > Amount spent > equals > 0. [L0201, 2020-26]
13. Add a step. [L0201, 2020-26]
14. Choose Action. [L0201, 2020-26]
15. Go to Installed app actions > Email > Send marketing email. [L0201, 2020-26]
16. Click Select template. [L0201, 2020-26]
17. Pick the "Welcome with discount" template. [L0201, 2020-26]
18. Click Select. [L0201, 2020-26]
19. Write the subject as "welcome to one source merch, discount code inside". [L0201, 2020-26]
20. Verify the From field. [L0201, 2020-26]
21. Write the body: "Hey, we're so happy you're here. Enjoy this discount on your first purchase." [L0201, 2020-26]
22. Pick a discount code from the dropdown (example: save 10). [L0201, 2020-26]
23. Send a test email to yourself. [L0201, 2020-26]
24. Click Save. [L0201, 2020-26]
25. If prompted to select the discount code again, do so. [L0201, 2020-26]
26. Click + to add an internal notification. [L0201, 2020-26]
27. Choose Action. [L0201, 2020-26]
28. Keep Shopify selected. [L0201, 2020-26]
29. Pick Send internal email. [L0201, 2020-26]
30. Enter your email as the recipient. [L0201, 2020-26]
31. Set the subject to "new lead - [add variable: created at]". [L0201, 2020-26]
32. Write the message: "new lead created - [add variable: customer email]". [L0201, 2020-26]
33. At the top, rename from "custom marketing automation" to "welcome email". [L0201, 2020-26]
34. Click Turn on workflow. [L0201, 2020-26]
35. Click Turn on. [L0201, 2020-26]

Shopify welcome email template, with an attached discount and optional content:

```
In Shopify, create a welcome email template with the subject line 'welcome to one source merch, discount code inside'. The body should say 'Hey, we're so happy you're here. Enjoy this discount on your first purchase.' Attach a discount code (for instance, save 10) with a button that lets customers apply it at checkout. You can optionally include bestsellers or additional promotional content below the main offer.
```
[L0201, 2020-26]

#### Klaviyo

Welcome series, one source setup (Klaviyo, newer flow):

1. Open Flows, open the welcome series, click Get started, and choose the newsletter list. [L1297, 2023]
2. Use the "thanks for signing up" trigger. [L1297, 2023]
3. Turn Smart sending off and UTM tracking on. [L1297, 2023; L0607, undated]
4. Build the first email from a template you can edit: change the logo, set sizes, edit on mobile first, and set the title, product name, product image, and welcome text. [L1297, 2023]
5. Add the offer and the discount code, highlight the code, set a button labelled "Shop now" that links to the product page, and use the brand color. [L1297, 2023]
6. Save the template as your store template so later emails reuse it. [L1297, 2023]
7. Set the email from draft to live. [L1297, 2023]

Klaviyo welcome series, one source setup (three emails):

1. Create the flow with a trigger for the newsletter list (get started > choose list). [L0477, undated]
2. Email 1 (thanks for signing up): use a template, change the logo, make the mobile version look good, write the headline and body from the prepared text, include the discount code, add a "Shop now" button linking to the product page, use the brand color and social links (delete the section if there are none), and set the background. Save it as your store template. [L0477, undated]
3. Email 1 is sent after a 3-day wait, as stated in the source. [L0477, undated]
4. Email 2 (bestsellers): after a 4-day wait, introduce bestsellers, deals, reviews or testimonials, and the store's mission and values. [L0477, undated]
5. Email 3 (follow us on social media): highlight the loyalty program or social accounts, and resources such as product guides, size charts, or customer service contact. Keep it closed or off if there are no social links. [L0477, undated]
6. Set each email from draft to live, then turn the welcome series on. [L0477, undated]

Welcome series with the Klaviyo prebuilt template, step by step:

1. Open Flows and click Get started on the Welcome series. [L0607, undated]
2. Select the audience of new sign-ups who have never purchased and click Next. [L0607, undated]
3. Select a static coupon, enter the code (for example WELCOME10), and set the value to 10 percent off. [L0607, undated]
4. Review the prebuilt flow; the first email is sent immediately after sign-up. [L0607, undated]
5. Replace the first email's template with a text-based template and edit the subject line, preview text, sender name, and body copy. [L0607, undated]
6. Set the second email's delay from 3 days to 1 day and click Save. [L0607, undated]
7. Replace the second email with a template from Klaviyo's template library and edit the messaging. [L0607, undated]
8. Add a button linking to the product page URL. [L0607, undated]
9. Click Review and turn on, and change each email from Draft to Live. [L0607, undated]
10. Check that Smart Sending is off and UTM tracking is on for every email. [L0607, undated]
11. Click Exit. [L0607, undated]

Klaviyo setup, short form: Flows > Welcome series > Get started (Klaviyo template). Select the audience of new sign-ups who have never purchased, choose a static coupon such as welcome_10 with 10 percent off, then review and set each email to Live. [L0573, undated]

Changing a message in the Klaviyo template library: click Change on a message and choose a template for the event, then adapt the copy. [L0573, undated]

Faster build by cloning:

1. In Klaviyo, open Flows and search for "welcome". [L1470, 2025-26]
2. Pick the live flow with the highest revenue. [L1470, 2025-26]
3. Click Clone on that flow. [L1470, 2025-26]
4. Rename the copy so it names the new sign-up source and offer. [L1470, 2025-26]
5. If the copy does not appear, refresh the page, since large flows take a moment to duplicate. [L1470, 2025-26]
6. Open the clone and edit it. [L1470, 2025-26]

Go-live checks for a welcome flow:

1. Confirm you are in the correct client Klaviyo account. [L1470, 2025-26]
2. Check that the trigger, the flow filter, the conditional split, and the SMS and email steps are all set. [L1470, 2025-26]
3. Turn off the client's other welcome flows so two flows do not send to the same subscribers. [L1470, 2025-26]
4. Use Review and Turn On to switch the flow live. [L1470, 2025-26]
5. Notify the client that the flow is live. [L1470, 2025-26]

Do not leave the client's old welcome flows running alongside the new one, because subscribers would receive duplicate messages. Confirm the old flows are switched off before going live. [L1470, 2025-26]

#### Clavio

Welcome series setup in Clavio:

1. Open Flows and click Get started on the Welcome series. [L0634, undated; L0476, undated]
2. Select the Newsletter list and click Continue. [L0634, undated; L0476, undated]
3. Leave the trigger as "Subscribes to newsletter", so the first email sends immediately. [L0476, undated]
4. Open the first email with the three-dot menu and click Edit. Set a name (example: welcome gift), a subject line that states the $5 offer with a deadline (example: last three days), a sender name with the store name, and the store email as sender address. [L0476, undated; L0634, undated]
5. Click Change template, choose Drag and drop, pick a layout, and click Use template. [L0476, undated]
6. Click the logo, choose Replace, and upload the logo. If it is too large, set Max width to 100. [L0476, undated; L0634, undated]
7. Replace the main image with a product photo. Set the button to "Shop now" and link it to the product page URL. [L0476, undated]
8. Paste the copy. Keep the first name placeholder as it is. Make the discount code bold and give it a background color so it stands out. [L0476, undated]
9. Replace the second image, change the link to the store URL, and add social media links if available. [L0476, undated]
10. Remove the address and organization name. Keep the unsubscribe button. [L0476, undated; L0634, undated]
11. Click Save, check the preview on desktop and mobile, then click Done. [L0476, undated]
12. Click Draft and set to live. In the email settings, set Smart sending to off and UTM tracking to on, then click Done. [L0476, undated; L0634, undated]
13. Open the second welcome email, change its timer from three days to one day after the first email, and set a subject that states the offer is only available for 48 hours. [L0476, undated; L0634, undated]
14. Once the first email is finished, save it as a reusable template with the three-dot menu, Manage template, and Save as template, so the logo and images do not need to be replaced each time. [L0476, undated; L0634, undated]

Clavio setup, condensed: Open Flows and click Get started on the Welcome series. Select the Newsletter list and click Continue. Edit email 1 (sent immediately after sign-up) with a subject that states the 5 dollar offer storewide and mentions a three-day deadline. Choose a drag-and-drop template, set logo max width to 100 if it is too large, and replace images with product images. Save the email, set Smart sending off, UTM tracking on, and set it live. Change the delay of email 2 from three days to one day after. Edit email 2 with a reminder subject such as five dollars off storewide for only 48 hours. Save the design as a reusable template via Manage template > Save as, so later emails reuse the logo and images. [L0634, undated]

### Templates and copy

Welcome email for the Klaviyo welcome series, to adapt to your brand:

```
Subject line: "A welcome gift for you"
Preheader: "Surprise, a special offer awaits you"
Body: "Thanks for signing up, it means a lot to us. We are one of the best in the business of [your product category, e.g. watches]. Browse through our [collection or product count] collection and enjoy your welcome gift."
Discount line: "Use code welcome_10 to get 10% off", with the code shown in your brand color.
Button: "Shop now", linked to the product page of your first product.
Use the first-name personalization field (Add personalization > first name) where the name appears, and replace the sender name with a real person's name. Adjust the font to match your brand font.
```
[L0573, undated]

Welcome email 1 for a store that offers a 5 dollar sign-up discount (replace the bracketed items with your own store details):

```
Subject: '5 dollars off store-wide, last three days'. Sender name: a customer representative first name plus the store name, sent from the store email address. Body: 'Firstly, thanks for signing up. It means a lot to us. We are one of the best in the business of [your product category], and we take this seriously. As a measure of our gratitude, we are giving you a 5 dollar welcome discount. Browse through our collection of [your products]. Use the code SAVE5 during checkout. Remember, the discount vanishes in three days, so better hurry up. We are waiting for you with a store full of [your products]. Cheers, [customer representative first name], [store name], [job title: customer service representative]. Unsubscribe link kept; address and organization name removed.'
```
[L0634, undated]

Welcome email 2, reminder with 48 hours left:

```
Subject: '5 dollars off store-wide, only 48 hours left'. Body: 'Hey [first name], relationships aren't easy, we're sensitive folks. You ignoring our welcome gift feels like someone leaving us on read. We are really proud of our collections of [your product], and they really stand out. Our [product name] will steal the show without exception. This is your chance to save while you grab these. Use code SAVE5 during checkout. The discount is valid until tomorrow. You can still load up your cart after tomorrow, but who likes regrets? See you soon. Cheers, [customer representative first name]. Bold and background color on the discount code.'
```
[L0634, undated]

Welcome email, one source template (under 200 words, one clear offer line, one button):

```
Welcome aboard, {FIRST_NAME}. Enjoy 10% off sitewide with code {DISCOUNT_CODE}. Click the button below to shop, and the discount applies automatically at checkout. Keep the entire email under 200 words, with a clear offer line and one button.
```
[L1470, 2025-26]

Welcome email structure from one source, for the welcome email formula, see the discount section. [L0476, undated]

Email 1 structure (soap opening, set the stage):
- Pattern: a warm welcome from the character that sets expectations about frequency and promises a valuable gift or lesson soon. The formula is: introduce yourself, share one personal milestone that shows your credibility, state the send schedule, and tease tomorrow's email in a P.S. with its subject line. Subscribers know what to expect and have a reason to open the next message. [L0523, 2015+]
- Example 1, subject "Welcome: Day 1 of 5". Body: "Hi, I am Sam. I started my first online shop from my kitchen table. Tomorrow I will share the checklist I used to get the first 100 orders. P.S. Look for the subject line Day 2 of 5: The checklist." [L0523, 2015+]
- Example 2, subject "Day 1 of 5: A quick hello from me". Body: "Welcome to the group. I will send one short email each day for the next five days. Tomorrow I will show you the one mistake that cost me my first six months." [L0523, 2015+]

Email 2 structure (high drama and backstory):
- Pattern: open at the emotional peak of a story, then rewind to the events that led there, stop at the wall you hit, and leave the answer for the next email. The reader's situation should mirror the backstory. Starting in the middle of a dramatic moment hooks attention faster than starting at the beginning. [L0523, 2015+]
- Example 1, subject "Day 2 of 5: The night my account got frozen". Body: "I stared at the locked screen at midnight, knowing rent was due in four days. Two years earlier I had been sure this business was simple. Here is how I got stuck, and why the answer surprised me. Tomorrow I will show you exactly what I did." [L0523, 2015+]
- Example 2, subject "Day 2 of 5: The month I almost quit". Body: "My order count had been flat for ninety days, and my savings were nearly gone. I had tried every tutorial I could find. I will tell you what finally broke the pattern tomorrow." [L0523, 2015+]

Email 3 structure (epiphany):
- Pattern: describe the moment of realization, which often occurs when a simple observation exposes a flaw in the old approach, and connect the new insight directly to the product you sell. End with a link to the offer. The subscriber now sees the offer as the answer to the drama you built. [L0523, 2015+]
- Example 1, subject "Day 3 of 5: The math that changed everything". Body: "I worked out how much I earned per hour compared with a single product that sold hundreds of copies a day. Selling a system once beat selling my time forever. The method behind it is what I want to show you. Here is the link: [link]." [L0523, 2015+]
- Example 2, subject "Day 3 of 5: The tiny detail I had missed". Body: "One day I noticed that my best customers all came from the same place. That observation became my whole strategy. The short training that teaches it is here: [link]." [L0523, 2015+]

Email 4 structure (hidden benefits):
- Pattern: list two or three benefits of your solution that the reader has not thought about, phrase each as "Sure, you will get X, but you will also get Y", and back them with a short story. Then present the offer with a try-before-you-pay option. Non-obvious benefits create a new reason to act and deepen the bond with the character. [L0523, 2015+]
- Example 1, subject "Day 4 of 5: The benefit nobody mentions". Body: "Sure, you will earn more, but you will also get the freedom to take a Tuesday off. Last month I took three days away, and my store kept selling. Normally this course costs 300 USD, but you can take it free and pay only if you find it useful. Sign up here: [link]." [L0523, 2015+]
- Example 2, subject "Day 4 of 5: More than money". Body: "Sure, you will grow your income, but you will also spend more evenings with your family. I did not expect that. The full program is free to try, and you only pay if it is worth it to you." [L0523, 2015+]

Email 5 structure (urgency and call to action):
- Pattern: give a real reason the offer will change or disappear, such as a webinar starting tomorrow or a discount ending. State the price the reader will pay if they wait, then give one clear link. A true deadline turns interest into action, while a fake one destroys trust. [L0523, 2015+]
- Example 1, subject "Day 5 of 5: Last call". Body: "The free-access window closes tonight at midnight. After that the course returns to its full price of 3,000 USD. If you want to try the complete training before paying, grab your place here: [link]." [L0523, 2015+]
- Example 2, subject "Day 5 of 5: Seats are almost gone". Body: "Only ten seats remain for Thursday's live session. After it starts, late entries pay the full fee. Reserve your seat now: [link]." [L0523, 2015+]

Welcome email principle: keep the content educational and avoid hard sales pitches. [L0605, undated]

### Soap-opera and story sequences

- Purpose: the first emails after someone joins your list must bond the subscriber with your Attractive Character. A boring first email usually means the subscriber stops opening your messages. Use the first sequence to build an emotional connection. [L0523, 2015+]
- Soap Opera Sequence, five emails sent once per day after signup:
  1. Email 1, set the stage: thank the subscriber, introduce yourself as the character, explain how often emails arrive, and promise a valuable gift or lesson in the next email. [L0523, 2015+]
  2. Email 2, open with high drama: start at the most intense moment, then tell the backstory that led there, stop at the wall you hit, and open a loop for email 3 without giving the answer. [L0523, 2015+]
  3. Email 3, epiphany: reveal the discovery that changed things for you and tie it directly to the offer, with a link. [L0523, 2015+]
  4. Email 4, hidden benefits: list two or three non-obvious benefits of the solution, tell a parable that shows one, and present the offer with a risk-reducing try-before-you-pay offer. [L0523, 2015+]
  5. Email 5, urgency and call to action: give a real reason to act now and end with one clear call to action. [L0523, 2015+]
- Open a loop in each email and close it in the next one, so each email ends with a reason to open the following one. Tease a result or secret without revealing the details, then give the answer later. Repeat this pattern from email to email. [L0523, 2015+]
- The five-email soap sequence is a short version of a longer introduction sequence; see the length table in the structure section. [L0523, 2015+]
- Trust series before a higher-priced ask: send a five-part email series that tells the brand's story, the problems it solved, and how to solve them in the niche. Then make the larger offer once trust is established. [L0552, 2023]
- Emotional story placement: see the structure section. [L0378, 2019+]

### 30-day master flow

- The first 30 days after a subscriber joins or a customer buys are the most important engagement period, since interest is highest then. Use this period to build the relationship and drive a first purchase (for prospects) or a repeat purchase (for customers). [L0493, 2021-22]
- A 30-day master flow is a single automated email series that covers both pre-purchase and post-purchase contacts, regardless of how the person entered the business. It is built so that the early emails carry the most engagement weight. [L0493, 2021-22]
  - Example one: a 30-day flow for prospects who opted in via a guide: welcome email on day 0, product story on day 2, first offer on day 5. [L0493, 2021-22]
  - Example two: a 30-day flow for first-time buyers: order follow-up on day 1, usage tip on day 7, repeat-purchase offer on day 21. [L0493, 2021-22]
- Build the first 30-day master flow this way: start building it right away, add one email every day or every other day, and accept that the complete flow will take a few weeks rather than a single day. [L0493, 2021-22]
- Replicate an existing master flow for each new entry point to the email list:
  1. Copy the complete flow. [L0493, 2021-22]
  2. Update only the specific emails that need to be more relevant to the new entry point. [L0493, 2021-22]
  3. Keep shared early emails, such as the welcome email, unchanged. [L0493, 2021-22]
- Integrate introductory emails for the loyalty program, referral program, and customer feedback survey into your existing 30-day new customer welcome sequence, so all new customers receive them automatically. [L0203, 2021]

### Content-based nurture sequences

- Send automated sequences to subscribers grouped by the content piece or product page they opted in on, with emails leading down the purchase path linked to that content. The first few emails should follow the call to action in that content, such as buying a recommended product. [L0603, 2021-22]
  - Example pattern: an opt-in from a guide comparing two products leads to emails that explain the guide's pick and then push that product. [L0603, 2021-22]
- Quiz and buyer's guide follow-up flow:
  1. The visitor completes a product quiz. [L1204, 2022]
  2. A follow-up email sequence sends product recommendations based on the quiz answers. [L1204, 2022]
  3. The sequence points the visitor to the buyer's guide. [L1204, 2022]
  4. If the visitor downloads the buyer's guide first, the sequence points them to the quiz instead. [L1204, 2022]
- Giveaway leads: leads captured by the giveaway funnel go into email nurture sequences that aim to convert them over time. These email flows also generate part of the measured revenue. [L0797, 2025-26]
- To launch quickly, duplicate your existing welcome flows or welcome series and run a similar funnel alongside them. [L0797, 2025-26]


Part 8 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/07-welcome-series-and-new-subscriber-nurture.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/09-lead-magnet-follow-up-flows.md
