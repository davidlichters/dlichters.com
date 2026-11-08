<!-- part of ecom/deep/15-email-and-sms.md -->
Part 13 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/12-platform-walkthroughs.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/14-post-purchase-transactional-and-retention-flows.md

## Browse Abandonment, Manual Cart Recovery and Personal Follow-up

### Tracking abandoned carts and recovery results

Log every abandoned cart in one sheet so recovery can be measured.

| Date | Name | Phone Number | Email | Cart Value | Products | Shipping To | Recovered? | Cart Link | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Abandonment date | Customer name | Contact phone | Customer email | $ amount | Item list | Destination | Yes/No | Cart URL | Recovery method & result |

- Capture these details for each abandoned cart to track recovery efforts systematically. [L0200, undated]
- Recovery rate = recovered carts (Yes entries) divided by total abandoned carts. Use it to measure email campaign effectiveness and find improvement points. [L0200, undated]

### Multi-touch recovery strategy

- Abandoned checkout links, automated email sequences, SMS notifications, retargeting ads and phone calls within minutes work together as one multi-touch strategy, not as alternatives. [L0286, 2018]
- Do not rely on Slack alerts alone. Send Slack alerts to sales staff, and also keep automated emails, retargeting ads and SMS (where legally permissible) running for multi-channel reach. [L0286, 2018]
- Sources differ on SMS:
  - The older 2021 workflow used no SMS app: staff call, then send the text by hand. [L0247, 2021]
  - The current multi-channel rule adds SMS only where it is legally permissible. [L0286, 2018]
  - Where no SMS tool is used, follow the manual call-and-text workflow below. Where SMS is legally permissible, add it to the multi-channel mix. [L0247, 2021; L0286, 2018]

### Staff alerts and lead notifications

Internal notification for manual lead follow-up:

```
To: [your email address]
Subject: 'new lead - [created at timestamp]'
Body: 'new lead created - [customer email address]'
```

- Review the notifications daily or per cycle to reach out manually to new subscribers. [L0201, 2020-26]
- Use the created_at variable in the subject line to add the timestamp of each lead's arrival. This makes it easy to sort and batch outreach by day and hour. [L0201, 2020-26]

Build a Gmail-to-Slack triage automation in Zapier:

1. Trigger on incoming Gmail messages, authenticate the account and test the connection. [L0287, 2025-26]
2. Add an AI by Zapier step using the GPT-4 mini model. [L0287, 2025-26]
3. Give the model a system prompt that classifies emails as 'REPLY' (legitimate messages needing action) or 'DON'T REPLY' (spam and promotional content), with the email body passed as context. [L0287, 2025-26]
4. Validate the classification by generating test output. [L0287, 2025-26]
5. Insert a Filter by Zapier step that passes only 'REPLY' results forward. [L0287, 2025-26]
6. Connect the filtered output to a Slack direct message. Build the body from sender address, subject line and email body using variable insertion. [L0287, 2025-26]
7. Publish the automation to activate it. [L0287, 2025-26]
8. Optional: insert an AI step before Slack to generate draft responses, then add a Gmail draft creation step to auto-populate response emails. [L0287, 2025-26]

Older abandoned-cart alert workflow (2021):

1. A Slack notification alerts staff to an abandoned cart. [L0247, 2021]
2. Staff call the customer. [L0247, 2021]
3. If there is no answer, staff send a text manually. No SMS app is used. [L0247, 2021]

### First contact with exit-intent and new leads

- Follow up manually with every email address captured through an exit-intent overlay in the early stage. This builds initial relationships and converts traffic that would otherwise be lost. [L0208, 2024+]

```
Hi [Customer Name], I'm [Your Name], owner of [Store Name]. I noticed you were checking out on our site recently and didn't complete your purchase. I'd love to know if there was an issue I can help with or if you have any questions-please feel free to respond to this email or call me directly at [Your Phone Number]. I'd really appreciate the chance to earn your business. Thanks!
```
[L0208, 2024+]

### Phone, voicemail and text sequence

Follow-up sequence for a customer who started checkout but did not finish:

1. Call the customer first. [L0806, 2024]
2. If there is no answer, leave a voicemail. [L0806, 2024]
3. About 10 minutes later, send a short, personal text by hand, with no spam or marketing tone. [L0806, 2024]
4. If the customer replies, continue the conversation. If not, stop without pressure. [L0806, 2024]

```
Hi [customer name], this is [your name] from [store name]. I noticed you started to check out but did not finish your order. If you have any questions, I am standing by and happy to help. Just reply to this text and I will get back to you.
```
[L0806, 2024]

- A personalized text to an abandoned cart can outperform a generic abandoned-cart email. Use individual texts for high-value carts, and keep automated email sequences running alongside them. [L1472, 2022]
- Personal texts read like a real person reaching out, which earns more replies than automated messages. Make each text reflect that customer's actual situation rather than a fixed formula. [L1472, 2022]

```
Hi {customer_name}, it's {your_name} from {store_name}. I noticed you have been looking at the {product_name} for a while, so I wanted to check in personally. Do you still want it, or is there anything I can answer for you?
```
[L1472, 2022]

- Many customers prefer texts to calls, so texting is often more effective than calling, especially for owners who are not comfortable on the phone. [L1472, 2022]
- Use calls when a customer is calling you actively and you can pick up. [L1472, 2022]
- The sequence starts with a call, then a text if the lead does not answer. [L1049, 2025+; L0806, 2024]
- Texts are the second step after an unanswered call. Texting first is the stronger option where the owner is not comfortable on the phone. [L1472, 2022; L0806, 2024]

### Loom video follow-up for abandoned carts

- When a lead asks a detailed product question, reply with a short Loom video of 30 to 60 seconds showing your screen and webcam. The personal video builds trust and turns leads into buyers. [L0972, 2025]
- Phone calls and texts are often ignored because many people do not want to answer unknown calls. A video sent by email gives a second route to a reply that does not depend on the lead picking up. [L1049, 2025+]
- A follow-up that does not show or name the exact product the lead left in the cart loses most of its personal effect. Always pull up that product before recording. [L1049, 2025+]
- Keep each Loom about 30 seconds to 1 minute. The goal is only to start a conversation. [L1049, 2025+]
- The standard sequence stays in place: phone call first, then text if the lead does not answer, and the standard abandoned-cart reminder email still goes out. The Loom video is added on top of this sequence and does not replace it. [L1049, 2025+]

Personalized Loom follow-up procedure:

1. Open the products the lead left in the cart on your store so they are visible on screen. [L1049, 2025+]
2. Open Loom on your computer (Chrome extension or desktop app). [L1049, 2025+]
3. Turn on your webcam, which adds personalization. [L1049, 2025+]
4. Allow microphone access. [L1049, 2025+]
5. Select screen share. [L1049, 2025+]
6. Start the recording, then speak the personal message while showing the cart products. [L1049, 2025+]
7. Stop the recording. [L1049, 2025+]
8. Copy the loom.com link that Loom generates. [L1049, 2025+]
9. Paste the link into a follow-up email with a personal greeting and an invitation to reply with questions, then send it. [L1049, 2025+]

Email body for the Loom follow-up:

```
Subject: A quick video for you, [First Name]

Hi [First Name],

I noticed you were recently on [Store Name] and added [Product Name] to your cart, but you have not completed your order yet. I am the owner of [Store Name], so I recorded a short video for you, about [30 to 60] seconds, to say hello and check whether anything stopped you.

[Paste Loom link here]

If something held you back, such as a question, a delivery date you need, or a discount you were hoping for, just reply to this email. I am happy to help and to do what it takes to earn your order.

Thank you,
[Your Name]
[Store Name]
```
[L1049, 2025+]

Spoken script for the video (keep it between 30 seconds and 1 minute):

```
Hi [First Name], I'm [Your Name], the owner of [Store Name]. I noticed you were recently on our website and added [Product Name] to your cart, but you did not finish checking out. I wanted to reach out personally and see whether there was a specific reason you did not complete the order, such as a question, a delivery date you need, or a discount you were hoping for. Just reply to the email this video came with, and I am happy to help and do what it takes to earn your business.
```
[L1049, 2025+]

- Offer a discount in a follow-up only if the store can actually afford it. Do not promise a discount in the video or email just to get a reply. [L1049, 2025+]

### Plain-text and personal-looking emails

- Some automated emails can go out as plain text with no designed template, because they look more personal and get higher response. This format is used for a post-second-purchase flow and for abandoned-cart emails. [L0334, 2017]
- A plain-text email signed as sent from a phone is reported to work well, but it misrepresents the sender. Check the legal and platform risk before using it, and avoid it if it could be seen as misleading. [L0334, 2017]
- Rewrite automated messages so they read as if a person wrote them, not like a generic template. Personal wording gets far more replies and thanks. [L1515, 2019]
- The personal tone is the goal. Use it without a false sender identity: a plain-text personal style is acceptable, while a signature implying a phone-sent message needs the legal and platform check first. [L0334, 2017; L1515, 2019]

### Abandoned-cart email outreach

Subject line and body for a personal abandoned-product email:

```
Subject: Need help with your order of [Product name]?

Hi [Customer name],

This is [Your name] from [Store name]. I'm the owner of the store. I noticed you were looking at [Product name] on our site but didn't complete your order.

Could you let me know if you ran into any problems during checkout or if you have any questions? I'm happy to help and I'd do whatever I can to earn your business.

[Optional: direct link to the product or checkout]

[Your name]
[Store name]
```
[L0837, 2025]

Older guidance (2021), for visitors who sign up for an email coupon but do not buy:

1. Check that the welcome emails are being delivered. [L0853, 2021]
2. Check that the discount code is active and works at checkout. [L0853, 2021]
3. Send personal one-off emails to those leads, asking whether they have questions before ordering. [L0853, 2021]
4. Use the replies to learn what is stopping them. [L0853, 2021]

Older guidance (2022), a basic re-engagement email for everyone who opted in but has not bought, sent to the whole list:

```
Hi [first name], are you still interested in [product name]? Reply yes or no.
```
[L0854, 2022]

- Anyone who replies no is removed from the conversation. Anyone who replies yes receives a manual follow-up by email to close the sale. [L0854, 2022]

Older procedure (2022), recovering abandoned carts with email:

1. Open Shopify and pull the list of abandoned carts. [L0854, 2022]
2. Send each customer a short personal question asking whether they are still interested in the product. [L0854, 2022]
3. Follow up manually with anyone who replies yes. [L0854, 2022]

### Re-engagement and follow-up angles

- Use email campaigns to re-engage visitors who did not buy on the first visit. Email is the follow-up step after the first ad conversion fails. [L0661, undated]
- A follow-up to someone who has shown interest should continue the same argument that created the interest. Introducing a new pitch weakens the impression already made. [L1261, undated]
- Each follow-up must bring a new angle and a fresh reason to act, because repeating the same letter brings steadily lower response. Change the offer, proof or emotional appeal every time. [L1369, undated]
- Old unsold leads can be a low-cost source of orders. A follow-up to leads that salesmen had turned down still produced 4.5 percent orders when mailed with a new letter. [L1369, undated]
- After several follow-ups bring little response, stop mailing that list and file the leads rather than sending more of the same. Send a final mop-up letter that is clearly different from the earlier ones before stopping. [L1369, undated]
- Older retargeting discount pattern (2021-22): when a customer viewed a specific product but did not buy, email a large, clearly stated percentage discount on that same product.
  - Formula: product name, discount as a headline percentage, and regular price reference.
  - Why it works: the customer already showed interest, and a big saving on a known product removes the main objection, price.
  - Example one: "The jacket you loved: 25 percent off today" with the product image and the new price.
  - Example two: "Still thinking about the desk lamp? Save 20 percent" with a button linking to that product.
  - [L0569, 2021-22]

### Backorder and stock-status messages

- Use automatic emails for out-of-stock status and expected delivery times, so customers know what to expect without contacting support. [L0492, 2023+]
- On the product page, near add-to-cart, state: "Currently backordered with ETA [specific date]". When the customer buys, email them to confirm the order and the ETA. [L0274, 2023]
- Text customers about stock discrepancies or back-in-stock dates. This keeps them informed and makes them more likely to order anyway. A rough back-in-stock date by itself can lead to an order. [L1472, 2022]

Confirmation email sent right after a customer buys a backordered product. Replace the bracketed placeholders before sending:

```
Subject: Your order [ORDER NUMBER] is backordered

Hi [FIRST NAME],

Thank you for your order [ORDER NUMBER]. The item [PRODUCT NAME] is currently backordered [OPTIONAL: due to REASON] and is expected back in stock on [EXACT DATE]. All orders ship first come, first served, and your order is on the list.

Please reply to confirm that you are willing to wait. If you would rather not wait, reply to this email and we will cancel your order for you.

Thank you for your patience,
[STORE NAME] team
```
[L0359, 2020]

- After someone buys a backordered product, send a follow-up email confirming they saw the out-of-stock note and the ETA on the product page. This protects against disputes about delivery timing. [L0808, 2026]


Part 13 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/12-platform-walkthroughs.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/14-post-purchase-transactional-and-retention-flows.md
