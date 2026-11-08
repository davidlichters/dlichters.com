<!-- part of ecom/deep/15-email-and-sms.md -->
Part 18 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/17-sms-marketing-compliance-opt-in-and-flows.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/19-subject-lines-preview-text-and-sender-name.md

### Post-Purchase Upsell

#### SMS Bump procedure

1. Open Flows, click Edit on the post-purchase upsell flow, and open the first SMS. [L0476, undated]
2. Paste the template that thanks the buyer for the order and suggests a complementary product. Insert the product name of a related item, add its product page link, and include a short link version. [L0476, undated]
3. Save the first SMS. [L0476, undated]
4. Add a step with a delay of 12 hours, then add a second SMS. Mention the recommended product, add an optional discount code (example: 10% extra at checkout), add the checkout and product links, and a reply line for questions. [L0476, undated]
5. Always include opt-out instructions in each message, then save. [L0476, undated]

SMS 1 (immediately after purchase):

```
Hey [first name], thank you for your recent purchase of [purchased product]. We hope you are enjoying it. We think you might also be interested in [alternative product, e.g. a ring or a necklace], which is a great complement to [purchased product] and we think you will love it. Click here to check it out: [product page link]. If you have any questions, just reply to this message and we will be happy to help.
```
[L0634, undated]

SMS 2 (12 hours after purchase):

```
Hey [first name], just wanted to remind you about the great deal we are currently offering on [recommended product]. It is a perfect complement to your product that you already purchased, and we think you will love it. Plus, use code [discount code] at checkout to save an extra 10 percent on your purchase. Click here to check it out: [recommended product link]. If you have any questions, just reply to this message and we will be happy to help. Always include the opt-out instructions.
```
[L0634, undated]

#### SMS Pump procedure

1. Create a new flow, choose the post-purchase upsell trigger, and add a delay of 1 hour. [L1297, 2023; L0477, undated]
2. Add an SMS that thanks the customer for the purchase and recommends another store product as a complement, with the recommended product URL added automatically, a checkout link and reply-to-message support. [L1297, 2023; L0477, undated]
3. Add the condition: customer made an order after flow started. If true, end the flow. [L1297, 2023; L0477, undated]
4. If not, add a delay of 12 hours and a second SMS reminding them of the deal, with a fixed $10 discount using the "plus use code" field. The code must be applied at checkout. [L1297, 2023; L0477, undated]
5. Make sure opt-out instructions are on, then save the flow as "product upsell sequence". [L1297, 2023; L0477, undated]

#### Formula and template

Formula: thank the buyer, name the purchased item, suggest one complementary product that fits with it, give the product link, and add a short reply option. Keep the message brief and useful. Send the second reminder only after a delay so it does not feel like spam.

- Example 1: "Thanks for ordering the hoodie, Ana. Many buyers add the matching beanie. See it here: link."
- Example 2: "Hi Max, your speaker is on its way. Pair it with a carrying case at 10% off with code CASE10: link."
[L0476, undated]

Template for SMS Pump:

```
Hey [first name], thanks for your recent purchase of [your product name]. We hope you are enjoying it. We noticed you might also be interested in [recommended product name]. It is a great complement to [your product name] and we think you will love it. Click here to check it out: [recommended product URL]. If you have any questions, just reply to this message and we will be happy to help. Reply STOP to opt out.
```
[L1297, 2023]

- Discount difference: SMS Bump uses an optional 10% code in the second message, while SMS Pump uses a fixed $10 code. Use the one that matches the tool you run. [L0634, undated; L1297, 2023]

### Win-Back

#### SMS Bump procedure

Trigger: Days without order, set to 30. The source describes two routes to the same setting.

Route A:

1. Click Edit on the customer win-back flow. [L0476, undated]
2. Remove any extra delay step, so the trigger alone controls timing. [L0476, undated]
3. Set the trigger to Days without order and enter 30. [L0476, undated]
4. Edit the SMS: paste the template, create a discount code with the desired amount (example: 15% on the next purchase), add the homepage link and an opt-out instruction. [L0476, undated]
5. Click save. [L0476, undated]

Route B (adds a delay, then removes it):

1. Click edit on the Customer win-back flow. [L0634, undated]
2. Add a step with a delay in days set to 30. [L0634, undated]
3. Edit the SMS with the win-back template and create a discount code with the chosen amount. [L0634, undated]
4. Click save. [L0634, undated]
5. Remove the extra delay step, set Customer win-back with days without order to 30, then save. [L0634, undated]

Template:

```
Hey [first name], we noticed that it has been a while since you made a purchase from our store. We miss you. To show how much we value you, we are offering a special deal just for you: use code [discount code] at checkout to save 15 percent on your next purchase. Click here to check out what is new: [home page link]. Hope to see you back soon. Reply STOP to opt out.
```
[L0634, undated]

#### SMS Pump procedure

1. Create a new flow, choose the order created trigger, and add a delay of 10 days. [L1297, 2023; L0477, undated]
2. Add an SMS action with the win-back text and a $15 discount code, then add the website URL (replace with store URL). [L1297, 2023; L0477, undated]
3. Save and name the flow "customer win back sequence". [L1297, 2023; L0477, undated]
4. Add a delay of 30 days and a second SMS with a $15 discount or more, a new arrivals message and a store link. [L1297, 2023; L0477, undated]
5. Include the message "we hope to see you back soon." [L0477, undated]

Template:

```
Hey [first name], we noticed it has been a while since your last purchase from [store name]. We miss you. To show how much we value you, here is a special deal just for you: use code [discount code] to save $15 on your next order. Click here to see what is new: [store URL]. We hope to see you back soon. Reply STOP to opt out.
```
[L1297, 2023]

#### Formula

Note the time since the last order, express that you miss the customer, offer a discount for the next purchase, link to new products and include an opt-out line. Keep the offer modest and specific.

- Example 1: "Hi Jo, it has been a while since your last order. Here is 15% off your next order with code COMEBACK15: link. Reply STOP to opt out."
- Example 2: "We have new arrivals you may like, Mia. Use code WELCOMEBACK for 15% off at checkout: link. Reply STOP to unsubscribe."
[L0476, undated]

- Trigger difference: SMS Bump uses days without order (30), while SMS Pump uses the order-created trigger with a 10-day first delay. Both put the second message at 30 days. [L0476, undated; L0634, undated; L1297, 2023; L0477, undated]
- Discount difference: SMS Bump uses a percentage (15%), while SMS Pump uses $15. [L0634, undated; L1297, 2023]

### VIP and Loyalty SMS

Confirmation for a VIP upgrade:

```
You made it into the VIP group! Here's your bumped-up 15% discount code as promised. Tap this link to unlock it and start shopping: {DISCOUNT_LINK} *Applied automatically at checkout. Reply STOP if you'd like to unsubscribe.
```
[L1470, 2025-26]

- The VIP phone-number step offers an extra 5% in exchange for a phone number after email signup. [L1213, 2023]

### Message Formatting and Character Limits

#### Sender and layout

- Start each SMS with the brand name followed by a colon, so the recipient knows the sender before reading the offer. Keep the brand name short, so it leaves room for the offer and the link within the character limit. [L1470, 2025-26]
- In the Klaviyo SMS editor, turn on "Automatically shorten links" and add a blank line before the final sentence so the message does not look cramped. [L1470, 2025-26]

#### Character counting

- Klaviyo's SMS editor counts characters against 160 for a single message. Longer messages are sent as multiple parts, and the counter then shows a 306-character limit for two parts. Shorten the text where possible, so the message stays within one 160-character part. [L1470, 2025-26]
- A draft with a link read 190 of 306, which splits the message. Check the counter before saving. [L1470, 2025-26]

#### Reply line and help

- Include a reply line for questions in each message, such as "If you have any questions, just reply to this message and we will be happy to help." [L0634, undated]
- For personal tone, a phone number is personal, so write as one person who is ready to answer, not as a broadcast. [L0363, 2022+; L0634, undated]

### Campaign Settings and Tool Checks

- For a one-off SMS offer update in Klaviyo, turn off Smart Sending and Quiet Hours in the SMS step. The message then sends at its scheduled point in the flow instead of being held. [L1470, 2025-26]
- Source conflict: [L0363, 2022+] requires quiet hours and permitted send times, while [L1470, 2025-26] turns Quiet Hours off for a one-off offer update. Check the permitted send times in your market before turning Quiet Hours off. [L0363, 2022+; L1470, 2025-26]
- Check the Optimonk Next-page settings: Conversion closed, campaign goal reached, Smart sync on. [L0418, 2025-26]
- Name every Optimonk page before setting up navigation. [L0418, 2025-26]

### Testing SMS Against Email

#### Procedure

1. Set up an SMS message on the abandoned-cart flow first. [L0949, 2021-22]
2. Compare open rate, click-through rate and purchases from SMS against the same flow in email. [L0949, 2021-22]
3. Expand SMS only if it performs better or adds value your email cannot. [L0949, 2021-22]

#### Practice

- Use SMS and email together and compare their performance across campaigns. [L1213, 2023]
- Build SMS and email flows as automated sequences, with A/B testing built in from the start. [L0041, 2025-26]
- Test the Optimonk pop-up live before relying on it, enabling the app embed in the Shopify theme. [L0418, 2025-26]

#### Tools

- SMS Bump and Postscript are Shopify SMS tools that are broadly similar, so the way you use SMS matters more than which tool you pick. Drip and some email autoresponders also offer SMS features. [L0949, 2021-22]
- TxtCart is an SMS cart recovery app. It is easy to set up, and the author reported a 50x ROAS during the free trial. The author said that result was strong enough that other SMS recovery apps were no longer needed. This is a single reported trial result, not a benchmark. [L1299, 2026]

### Summary: Flow Timing and Discounts

| Flow | Tool | Trigger and timing | Discount | Ids |
|---|---|---|---|---|
| Abandoned checkout, SMS 1 | SMS Bump | 15 minutes | None | [L0476, undated; L0634, undated] |
| Abandoned checkout, SMS 2 | SMS Bump | 2 hours | 10% (auto-generated) | [L0476, undated; L0634, undated] |
| Abandoned checkout, SMS 3 | SMS Bump | 20 hours | 20% (auto-generated) | [L0476, undated; L0634, undated] |
| Abandoned checkout | SMS Pump | 15 min, 2 h, 20 h | 10%, then 20% | [L0477, undated; L1297, 2023] |
| Post-purchase upsell, SMS 1 | SMS Bump | Immediately | None | [L0476, undated; L0634, undated] |
| Post-purchase upsell, SMS 2 | SMS Bump | 12 hours | Optional 10% | [L0476, undated; L0634, undated] |
| Post-purchase upsell | SMS Pump | 1 hour, then 12 hours | Fixed $10 | [L0477, undated; L1297, 2023] |
| Win-back | SMS Bump | Days without order: 30 | 15% | [L0476, undated; L0634, undated] |
| Win-back | SMS Pump | Order created, then 10 days; second at 30 days | $15, then $15 or more | [L0477, undated; L1297, 2023] |


Part 18 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/17-sms-marketing-compliance-opt-in-and-flows.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/19-subject-lines-preview-text-and-sender-name.md
