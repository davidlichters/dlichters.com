<!-- part of ecom/deep/15-email-and-sms.md -->
Part 12 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/11-discount-timing.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/13-browse-abandonment-manual-cart-recovery-and-person.md

### Platform Walkthroughs

#### Shopify Messaging App (Create Automation)

1. Log in to Shopify Admin [L0149, undated].
2. Open Shopify Messaging [L0149, undated].
3. Click 'Create automation' (not 'Create campaign') [L0149, undated].
4. Select template 'Recover Abandoned Checkout' [L0149, undated].
5. Click 'Turn on automation' [L0149, undated].
6. Go to Marketing → Automations and click 'Install Shopify Flow' [L0149, undated].
7. In Flow, change the first delay timer from 10 hours to 4 hours [L0149, undated].
8. Verify the first email displays products from the customer's cart and uses Shopify's default template; edit subject line or content if desired [L0149, undated].
9. Add a wait step of 20 hours [L0149, undated].
10. Add condition: customer has not placed an order [L0149, undated].
11. Add condition: customer has not started a new checkout [L0149, undated].
12. Add a second email using a blank template with subject such as 'It's been 24 hours' [L0149, undated].
13. In the second email, invite the customer to reply with questions and position yourself as the store owner offering help [L0149, undated].
14. Confirm the automation status shows 'Turn off workflow' to verify it is active [L0149, undated].
15. The automation now runs indefinitely [L0149, undated].

#### Shopify Admin Workflow (Marketing > Automations, Abandoned Checkout Template)

1. Open Shopify admin, navigate to Marketing > Automations, and click Create Automation [L0266, 2020-26].
2. Select the Abandoned Checkout template (not Abandoned Cart) and click Turn on Automation [L0266, 2020-26].
3. Click Continue if prompted about replacing existing automations [L0266, 2020-26].
4. Click into the new automation and select Edit Workflow [L0266, 2020-26].
5. Click the wait step showing '10 hours' and change it to '4 hours', then click off to save [L0266, 2020-26].
6. Right-click and drag the workflow to reposition it for better visibility [L0266, 2020-26].
7. Hover over the connector from the trigger to the first condition check and delete it to insert a new step [L0266, 2020-26].
8. Click the plus icon, select Action, and choose Add customer tags [L0266, 2020-26].
9. Enter the tag name 'abandoned cart' and click off to confirm [L0266, 2020-26].
10. Reconnect the workflow by dragging the connector from the tag action back to the first condition [L0266, 2020-26].
11. Click into the first email template and select Edit Email [L0266, 2020-26].
12. Click Generate Text, enter a description (for example 'You left items at checkout'), select a tone (for example playful), and click Generate [L0266, 2020-26].
13. Select the preferred subject line suggestion from the AI options [L0266, 2020-26].
14. Modify the email body similarly, using Generate Text or writing custom copy, then click Save [L0266, 2020-26].
15. Return to the workflow diagram and click the plus icon to add another Action [L0266, 2020-26].
16. Select Wait and set the time to 20 hours, then click off to save [L0266, 2020-26].
17. Click the plus icon, select Add Condition, and choose 'If all conditions are met' [L0266, 2020-26].
18. Click Add criteria, navigate to Customer > Amount Spent, and set the condition to 'is equal to $0' [L0266, 2020-26].
19. Click the plus icon, select Action, and choose Send marketing email [L0266, 2020-26].
20. Click Select Template and scroll to the Re-engagement section [L0266, 2020-26].
21. Select the Discount Reminder template [L0266, 2020-26].
22. Click into the email and customize the subject line using Generate Text or custom copy [L0266, 2020-26].
23. Replace any placeholder content (discount codes, promotional messages) with your offer details [L0266, 2020-26].
24. Delete the 'Need Inspiration' section by hovering and clicking the delete icon [L0266, 2020-26].
25. Replace the deleted text with 'Come back and complete your order' or similar messaging [L0266, 2020-26].
26. Hover over content sections to reveal the plus icon, then click it to add elements [L0266, 2020-26].
27. Select Abandoned Checkout from the options; Shopify will automatically display the exact products from the abandoned cart [L0266, 2020-26].
28. Click Save and return to the workflow diagram [L0266, 2020-26].
29. Review the entire workflow: trigger → add 'abandoned cart' tag → verify conditions → wait 4 hours → send first email → wait 20 hours → check amount spent equals $0 → send second email [L0266, 2020-26].
30. Click Apply Changes and confirm to make the changes effective immediately [L0266, 2020-26].

#### Shopify Messaging and Flow (Verify and Modify)

1. Log into Shopify admin and open the Shopify Messaging app [L0282, 2020-26].
2. Click Create Automation (top right), not Create Campaign [L0282, 2020-26].
3. Select the 'Recover Abandoned Checkout' template from the list [L0282, 2020-26].
4. Click Turn on Automation [L0282, 2020-26].
5. Navigate to Marketing > Automations in Shopify admin to manage the workflow [L0282, 2020-26].
6. Install Shopify Flow app for easier editing (optional but recommended) [L0282, 2020-26].
7. In Flow, click Edit on the Recover Abandoned Checkout automation [L0282, 2020-26].
8. Verify the trigger: 'This workflow starts when a customer abandons their checkout.' [L0282, 2020-26]
9. Verify first condition: 'Customer abandoned checkout in online store = true' and 'Checkout total > $0.' [L0282, 2020-26]
10. Modify the first delay timer: change from default 10 hours to 4 hours [L0282, 2020-26].
11. Verify condition: customer has not placed an order since workflow started [L0282, 2020-26].
12. Verify condition: one or more products from the cart remain in stock [L0282, 2020-26].
13. Review the first email template or customize by clicking Edit Email to change subject, text, and add sections [L0282, 2020-26].
14. Hover over Send Marketing Email, click plus, select Action > Wait [L0282, 2020-26].
15. Set wait time to 24 hours (total time from abandonment to second email) [L0282, 2020-26].
16. Add condition: 'Customer has no order since abandonment = true.' [L0282, 2020-26]
17. Add condition: 'Hours since last abandoned checkout > 24.' [L0282, 2020-26]
18. Select Add > Action > Messaging > Send Marketing Email [L0282, 2020-26].
19. Choose blank template and customize the subject line and email body for the second email [L0282, 2020-26].
20. Click Apply Changes to save the workflow [L0282, 2020-26].
21. Verify the workflow is active by checking that the button shows 'Turn off workflow' [L0282, 2020-26].

- Status check: an active automation displays a 'Turn off workflow' button; an inactive automation displays a 'Turn on workflow' button [L0282, 2020-26].

#### Shopify Email (Template-Based)

1. Start with Shopify Email's 'Abandoned Checkout' automation template [L0156, undated].
2. Reduce the initial email wait from 10 hours to 4 hours for faster follow-up [L0156, undated].
3. Add an action that applies the 'Abandoned Cart' customer tag when the automation starts [L0156, undated].
4. Use Shopify Email's built-in AI tool to refine the first email template and improve its messaging [L0156, undated].
5. After the first email, add a waiting period of 20 hours before the next action [L0156, undated].
6. Add a condition that only proceeds if the customer has previously spent over $0.00 [L0156, undated].
7. Create a second email using Shopify Email's 'Discount Reminder' template [L0156, undated].
8. Use the AI tool to refine the second email and add the 'Abandoned Checkout' section for context [L0156, undated].

#### Klaviyo

- Trigger: 'When someone Checkout Started' [L0567, 2025-26]. Flow filters are added after the trigger, starting with a Conditional Split [L0567, 2025-26].
- Split, timing, and reminder steps: see the Conditions, Splits and Filters section [L0567, 2025-26; L0261, 2025-26].
- Scheduled sends: use Time Delay with Wait until specific time [L0261, 2025-26].

#### Klaviyo
1. Open Flows and click Get started on the Abandoned cart flow [L0607, undated].
2. Check that the trigger is Started checkout [L0607, undated].
3. Change the first wait step from 4 hours to 30 minutes [L0607, undated].
4. Edit the first email: set the subject line and preview text, then delete the default blocks you do not need [L0607, undated].
5. Add a text block with your own cart copy, then add the cart section that shows the items [L0607, undated].
6. Insert a button labeled complete checkout linked to the checkout link [L0607, undated].
7. Add a Return to cart link [L0607, undated].
8. Add the review section, for example an image collage made in Canva from customer testimonial screenshots [L0607, undated].
9. Add your signature and store name [L0607, undated].
10. Click Done [L0607, undated].
11. Clone the email and add more emails: one at 30 minutes, one after 8 to 10 hours, and one after 24 hours; a 48-hour email is optional [L0607, undated].
12. Change each email from Draft to Live, then click Exit [L0607, undated].

one source Klaviyo setup (alternative version):
1. Confirm the trigger is Checkout started [L0573, undated].
2. Change the first wait from 4 hours to 30 minutes, to be aggressive with a first product [L0573, undated].
3. Use the custom template instead of the Klaviyo default, since it converts better [L0573, undated].
4. Set subject line and preview text, and keep the first-name personalization [L0573, undated].
5. Keep the cart section, and add a text block with the message [L0573, undated].
6. Replace the signature with your own name and store name [L0573, undated].
7. Add a button labeled Complete checkout that links to the checkout URL, and a Return to cart option [L0573, undated].
8. Add a review section, such as a collage of testimonial screenshots made in Canva [L0573, undated].
9. Save the email and clone it to build the sequence [L0573, undated].
- Set every email to Live after cloning [L0573, undated].

one source Klaviyo setup (as taught, 2026):
1. Email 1 sent 15 minutes after checkout start [L0477, undated].
2. Email 2 sent 4 hours after email 1, including a discount code (for example $10 or 20%) for the product [L0477, undated].
3. Email 3 sent 24 hours after email 2 (listed as one day after the last wait), with reminder that the cart and discount are still waiting [L0477, undated].
4. Set each to live [L0477, undated].

one source Klaviyo setup (Shopify code, older 2021-22 wording not applicable):
1. Click Get started on the abandoned checkout flow [L1297, 2023].
2. Set the first email to send after 15 minutes [L1297, 2023].
3. Use the saved template, add the abandoned cart text, and set the subject to include the product name [L1297, 2023].
4. Set the second email to send after 4 hours. Add a discount, for example $10 off, with the code created in Shopify [L1297, 2023].
5. Clone the waiting step and set the third email to send after 24 hours. Use the subject 'your cart is still waiting for you and so is our discount' [L1297, 2023].
6. Set each email from draft to live, with Smart sending off and UTM tracking on [L1297, 2023].

#### Klaviyo Final Email

- Final last-chance email build order: see Copy and Subject Formulas, Copy Rules [L0567, 2025-26].

#### Clavio

1. Go to Flows and click Get started on Abandoned carts [L0476, undated].
2. Set the first timer to 15 minutes instead of the default four hours, then open the first email [L0476, undated].
3. Click the three-dot menu, choose Edit, and enter the name and subject line. Click Change template > Drag and drop, then open Saved templates and click Use template. The logo and images are already in the saved template, so only the text needs changing [L0476, undated].
4. Write the first email as a reminder that the cart is waiting, mention a product benefit or guarantee, add a link back to the store, and keep no discount in this first message [L0476, undated].
5. Set the delay before the second email to four hours (default was 20 hours). Write the second email with the $5 code (example: save five during checkout) and a checkout link [L0476, undated].
6. Add a time delay of 20 hours below the second email. Clone the second email, place the clone below the timer, and edit it [L0476, undated].
7. In the third email, raise the offer to a $10 code (example: save 10), bold it, and give it a background color. Include a link to the tracking policy, the checkout link, and a deadline [L0476, undated].
8. For each email, set Smart sending to off, UTM tracking to on, and switch the email from Draft to Live [L0476, undated].

Clavio (short version):
1. Open Flows, search for Abandoned carts and click Get started [L0634, undated].
2. Set the timer of email 1 to 15 minutes after abandonment [L0634, undated].
3. Use the saved template with reminder copy and a 100 percent satisfaction guarantee statement [L0634, undated].
4. Set the timer of email 2 to 4 hours and use a checkout link plus a code 'save5' offering 5 dollars off [L0634, undated].
5. Set a delay of 20 hours for email 3, clone email 2 and edit it with an offer of 10 dollars off using code SAVE10 and a link to the tracking policy [L0634, undated].
6. Set each email to live with UTM tracking on and Smart sending off [L0634, undated].

Clavio setup: the email tool for visitors who start checkout but do not buy [L1131, 2018+].

#### SMS Bump with Clavio

- Set up Clavio and SMS Bump in parallel to recover abandoned carts. SMS Bump only sends to customers who have agreed to receive SMS [L1347, undated].
- Checkout setting for abandoned cart recovery: remove phone number as an optional checkout field and make email a required field, so every customer can be retargeted by email [L1347, undated].
- Recovering paid-traffic add-to-cart visitors who did not buy:
  1. Confirm that the Clavio retargeting emails and SMS Bump messages are set up correctly [L1347, undated].
  2. If results are weak, change the email copy and the copywriting [L1347, undated].
  3. Change the discount or the offer in the retargeting emails [L1347, undated].

#### Review of an Existing Sequence

- Review the abandoned cart sequence against the templates provided, and update it where it does not match the new approach [L0493, 2021-22].

### Tracking and Mistakes

#### Tracking and Go-Live Checks

- one source: for each email, set Smart sending to off, UTM tracking to on, and switch from Draft to Live [L0476, undated; L0634, undated; L1297, 2023].
- one source: set every email in the sequence to Live after cloning [L0573, undated; L0607, undated].
- Shopify Admin: click Apply Changes and confirm to make the changes effective immediately [L0266, 2020-26; L0282, 2020-26].
- Shopify status check: confirm the button shows 'Turn off workflow' to verify the automation is active [L0149, undated; L0282, 2020-26].
- Shopify Messaging: the automation now runs indefinitely once active [L0149, undated].
- Check each timer before going live [L0476, undated].

#### Mistakes to Avoid

- Leaving the default timers in place for welcome and abandoned cart flows means messages arrive too late or too late for the offer. Check each timer before going live [L0476, undated].
- Customizing the Shopify template without a specific improvement adds risk, because the pre-built template is built on performance data [L0282, 2020-26].
- Offering a discount in the first message is the most common mistake; start with a plain reminder and a checkout link [L1449, 2021-22].
- Stopping all emails after the abandoned-cart flow ends is a common error. Contacts who did not buy should move into the 30-day prospect master flow rather than being dropped, because they may still be in the market [L1449, 2021-22].
- Do not word reminders as if the customer forgot something, because that implies the item was not valuable to them [L1208, 2025-26].
- Do not restart the shopping journey in the early abandoned-cart messages by suggesting other products or new options. Doing so confuses a buyer who was ready to complete the purchase [L1208, 2025-26].
- Do not add extra calls to action (social media icons, app download prompts or other links) to the first three abandoned-cart emails [L1208, 2025-26].
- Do not add a second headline or sub-headline to the first email unless a split test proves it helps [L0567, 2025-26].
- Do not send a last-chance email with a deadline that conflicts with the countdown or the code expiry time; keep the P.S. line consistent with both [L0567, 2025-26].
- Do not keep a 4-hour first interval as a fixed rule for all emails; the one source guidance avoids arbitrary 4-hour intervals that hit customers at inconvenient times [L0261, 2025-26].
- Do not treat the abandoned cart flow as a one-off reminder; it is a series [L0572, 2014].
- Do not leave an automation running with an expired discount; the discount should expire only after the final email, with email 4 sent a few hours before that expiry [L0606, undated].
- Do not send SMS to customers who did not opt in; SMS cannot recover their carts [L1347, undated].
- Do not use the abandoned-cart sequence to deliver top-of-funnel content or broad brand introductions [L1208, 2025-26].

### Scope and Standard

- Use an abandoned checkout flow with more than one email, not a single reminder. A typical flow runs five to seven emails spread across five to seven days [L1522, 2021-22].
- If a store already runs an abandoned-cart flow, review it against the standard sequence: reminders, a personal owner email, a time-limited discount and a final reminder. Add only the missing emails rather than rebuilding the whole flow [L1449, 2021-22].
- All advice in this section is older advice from one source's 2021-22 course [L1449, 2021-22; L1522, 2021-22].

### Why Emails Are Spaced

- Abandoned-cart emails are spaced with waiting periods because many people do not check email right away [L1449, 2021-22].
- Each step gives the shopper time to act before the next message is sent [L1449, 2021-22].

### Sequence Timeline

The following schedule is derived from the moment of abandonment [L1449, 2021-22]:

1. 0 hours: first reminder with product and checkout link [L1449, 2021-22].
2. 6 hours: second reminder of the same type [L1449, 2021-22].
3. 24 hours: personal owner email asking whether you can help and inviting a reply [L1449, 2021-22].
4. 48 hours: time-limited discount offer for 3 days [L1449, 2021-22].
5. 96 hours: either a helpful content email (broad product range) or a discount reminder with 24 hours left (narrow product range) [L1449, 2021-22].
6. 120 hours: final discount reminder with about 4 hours left [L1449, 2021-22].
7. After the final reminder, move the contact to the 30-day prospect master flow [L1449, 2021-22].

### Per-Email Jobs

**Reminders (0 hours and 6 hours).** Both use the same plain text. Neither includes a discount [L1449, 2021-22].

```
Subject: You left {product_name} in your cart

Hi {first_name},

Your {product_name} is still in your cart and ready to order. You can finish your purchase here:
{checkout_link}

{business_name}

(Send the same email again 6 hours after the first one, using the same text. Do not include a discount in either reminder.)
```
[L1449, 2021-22]

**Personal owner email (24 hours).** Write it as a welcome-style email from the business owner, 18 hours after the second reminder, to a shopper who has not purchased [L1449, 2021-22]. Use the following prompt text unchanged:

```
Write a personal welcome-style email from the business owner for an abandoned cart, 18 hours after the second reminder, to a shopper who has not purchased. Keep it short and written by a real person. Share a brief part of your story and what sets your business apart, and do not mention the abandoned product. End with one clear call to action: ask whether there is anything you can help with and ask the shopper to simply reply to this email. Use a plain-text style, no discount, no pressure.
```
[L1449, 2021-22]

**Discount offer (48 hours).** Send the time-limited discount with the product, the code and the checkout link. The offer lasts 3 days and ends on the expiry date [L1449, 2021-22]. Use the following template unchanged:

```
Subject: {first_name}, your discount for {product_name} is ready

Hi {first_name},

You left {product_name} in your cart. We have set up a discount code for you: {discount_code}

Use the code at checkout here:
{checkout_link}

This offer is time limited and ends in 3 days, on {expiry_date}. After that the code will no longer work.

{business_name}
```
[L1449, 2021-22]

**Narrow-range discount reminder (96 hours, 24 hours left).** Use this email when the store has a narrow product range [L1449, 2021-22]. Use the following prompt text unchanged:

```
Write a discount-reminder email for an abandoned cart, sent 24 hours after the discount offer when the store has a narrow product range. Include the product, a link back to checkout and the discount code, and state that 24 hours are left to finish the purchase. Keep it short and direct.
```
[L1449, 2021-22]

**Broad-range content email (96 hours).** Use this email when the store has a broad product range, in place of the discount reminder [L1449, 2021-22].

**Final reminder (120 hours, about 4 hours left).** Send a brief, factual final reminder [L1449, 2021-22]. Use the following prompt text unchanged:

```
Write a final abandoned-cart reminder email, sent 4 hours before a discount expires. Include the product, a direct link back to checkout, the discount code, and a short, clear statement that the discount is about to expire in 4 hours. Keep it brief and factual, with no extra offers.
```
[L1449, 2021-22]

### Discount Timing

- The discount is offered at 48 hours and runs for 3 days [L1449, 2021-22].
- The first two reminders contain no discount [L1449, 2021-22].
- The narrow-range reminder is sent at 96 hours, when 24 hours are left [L1449, 2021-22].
- The final reminder is sent at 120 hours, with about 4 hours left [L1449, 2021-22].
- The source values do not fully align, so check them before building:
  - The 96-hour send matches the "24 hours left" wording, since the discount ends at 120 hours [L1449, 2021-22].
  - The wording "sent 24 hours after the discount offer" does not match the 96-hour timing. The offer is at 48 hours, so 24 hours after it would be 72 hours [L1449, 2021-22].
  - The 3-day discount from 48 hours ends at 120 hours. The final reminder at 120 hours is described as "about 4 hours left", which implies expiry near 124 hours [L1449, 2021-22].

### Conditions and Splits

- Product range decides the 96-hour email. A broad range receives a helpful content email. A narrow range receives a discount reminder with 24 hours left [L1449, 2021-22].
- After the final reminder, the contact moves to the 30-day prospect master flow [L1449, 2021-22].

### Personalisation Fields

- Templates use these fields: {first_name}, {product_name}, {checkout_link}, {discount_code}, {expiry_date} and {business_name} [L1449, 2021-22].

#### Further details

- Abandoned checkout automation follows up with customers who initiated but didn't complete purchase, enabling recovery of otherwise lost sales through automated email sequences. [L0156, undated]

- Abandoned-cart emails run through Klaviyo's autoresponder, which automatically includes the abandoned product's information and links in the reminder emails. [L1449, 2021-22]


Part 12 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/11-discount-timing.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/13-browse-abandonment-manual-cart-recovery-and-person.md
