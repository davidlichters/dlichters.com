<!-- part of ecom/deep/15-email-and-sms.md -->
Part 17 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/16-source-conflicts-and-version-notes.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/18-post-purchase-upsell.md

## SMS Marketing: Compliance, Opt-in and Flows

### When and How Much to Use SMS

- Use SMS sparingly. Subscribers receive fewer marketing texts than emails, and frequent promotions quickly annoy them. Too many texts lead to opt-outs faster than too many emails do. [L0949, 2021-22]
- Use SMS mainly for valuable messages, such as order updates, which customers want and can opt into on Shopify. Save promotional texts for rare, genuinely valuable offers. [L0949, 2021-22]
- Asking for SMS consent at checkout is fine if you might use text marketing later, but ask very sparingly. Frequent discount texts can damage the customer relationship more than they help. [L1090, 2021]
- Email is worth more in the long run than an SMS phone number, because it allows remarketing to website visitors. SMS works well when it is targeted and sent to the right person at the right time, but it should be used sparingly. [L1112, 2021]
- Do not run ads that send traffic to an SMS sign-up page instead of your website. SMS sign-ups from paid traffic are not a recommended default. [L1112, 2021]
- Audience matters. Younger customers tend to accept text marketing more readily, while older customers may find frequent texts annoying. Test SMS with your audience before scaling it. [L0949, 2021-22]
- Collect a phone number from every customer, so SMS is available when it is valuable. Phone numbers are an asset for order updates and occasional offers. [L0949, 2021-22]
- Every SMS campaign should be an automated sequence set up early, with A/B testing built in. Never send one-off texts. Automation captures volume even before you have large subscriber lists. [L0041, 2025-26]
- Source conflict on one-off sends: [L0041, 2025-26] says never send one-off texts, while [L1470, 2025-26] describes a one-off SMS offer update as a single setting inside a Klaviyo flow step. Treat the one-off setting as a step inside a flow, not a standalone blast. [L0041, 2025-26; L1470, 2025-26]

#### Results figures

Sources disagree on SMS open rates. Use each figure only in the context named.

| Figure | Value | Source | When it applies |
|---|---|---|---|
| Open rate | about 80% | [L0363, 2022+] | Typical result cited in one source |
| Click rate | about 40% | [L0363, 2022+] | Typical result cited in one source |
| Purchase rate | about 6-7% | [L0363, 2022+] | Typical result cited in one source |
| Open rate | 80% or higher, usually above email | [L0949, 2021-22] | Older benchmark for time-sensitive messages |
| Open rate | 40% to 50% for SMS, while 2% to 3% for email is considered good | [L1213, 2023] | Speaker's comparison |
| Return on investment | about 10x compared with other channels | [L1213, 2023] | Reported by the speaker, not verified |

- SMS is preferred over email because notifications are seen more reliably than promotion-tab emails. [L0363, 2022+]
- SMS is a strong channel for time-sensitive messages, though its use is still less common than email. [L0949, 2021-22]

### Consent and Compliance

#### Legal baseline by market

- In the US, marketing SMS sent to customers generally needs prior express written consent under the TCPA. Every message must include a clear way to opt out. Confirm consent is captured at sign-up before running SMS flows in the US. [L0476, undated]
- Before building an SMS opt-in, verify the required consent wording for your jurisdiction. In the US, TCPA compliance applies. [L0418, 2025-26]
- Check the SMS rules and GDPR compliance of every target country before sending texts. Phone consent is stricter than email consent. [L1213, 2023]
- Use an SMS app with built-in compliance features, such as GDPR settings and quiet hours, and make sure messages are sent only at permitted times. [L0363, 2022+]
- Every SMS campaign must include an unsubscribe option. [L0363, 2022+]
- Avoid SMS providers that use shared sender numbers, because your messages may come from a number shared with unrelated companies. Choose a provider with a dedicated number for your store. [L0949, 2021-22]

#### Opt-out in every message

- Include opt-out instructions in every SMS. Sending without them exposes the store to legal and carrier complaints. [L0476, undated]
- Every marketing SMS sent through SMS Bump should include opt-out instructions, such as a reply STOP line. Leaving them out creates compliance risk and hurts customer trust. [L0634, undated]
- In SMS Pump, always include opt-out instructions and keep them turned on in the flow. [L0477, undated]
- Opt-out and discount fields in SMS Pump: the discount code field must be filled in before a message is saved, and the opt-out text must have room. [L1297, 2023]

#### Opt-in disclosure

Place the disclosure directly under the phone number submit button. It must state that the visitor agrees to receive marketing texts, the message frequency per month, that message and data rates may apply, and that consent is not a condition of purchase. [L0418, 2025-26]

Adapted from a public compliant SMS opt-in text:

```
By submitting this form, you agree to receive recurring automated marketing text messages (e.g. promotions and cart reminders) from [Brand Name] at the phone number provided. Consent is not a condition of purchase. Message frequency varies (about 3 to 4 messages per month). Message and data rates may apply. Reply HELP for help or STOP to cancel.
```
[L0418, 2025-26]

Prompt for drafting and checking opt-in language:

```
You are an expert in marketing and SMS law. Help me write opt-in language for a form at the bottom of a submit button on a website. The form requires detailed opt-in language that includes marketing messages sent via SMS, about 3 to 4 messages per month, and automated messages. When crafting the opt-in, be transparent and compliant: ask for consent, state that consent is not a condition of purchase, state the number of messages per month, and state that message and data rates may apply. Then check my draft against the SMS disclosure language published by a major email/SMS platform and tell me where it differs.
```
[L0418, 2025-26]

- Postscript's list growth tools (Acquisitions > List growth tools > Convert your email list) show ready-made mobile opt-in code with TCPA-style consent language. Use it as a wording reference and check it against your own SMS provider's requirements instead of copying from a live client account. [L0418, 2025-26]

### Opt-in Capture and Phone Collection

- Collect phone numbers from abandoned checkouts and purchases rather than through cold pop-ups, because phone numbers are personal. An incentive, such as an extra 5% off, can encourage the visitor to give the number. [L0363, 2022+]
- Collect phone numbers at checkout, where buyers already enter them. Add a second pop-up step after email signup that offers an extra 5% VIP discount in exchange for a phone number. [L1213, 2023]
- The phone number field's placeholder should encourage the visitor to enter their real number, because the discount code is sent there. A fake number means the visitor never receives the code and the subscriber is lost. [L0418, 2025-26]
- Name every page in an Optimonk campaign before setting up navigation rules, such as the form, the email thank-you page, the SMS upgrade page and the SMS thank-you page. Clear names keep the Next-page dropdowns unambiguous when a flow has several steps. [L0418, 2025-26]
- The Klaviyo SMS opt-in flow depends on the welcome flow already being live. It is complete once the SMS opt-in flow is live. [L1361, 2025-26]

### Email-to-SMS Escalation (Trojan Horse)

#### Structure

- Trojan-horse structure: first collect the email with a discount reveal, then escalate to an SMS upgrade with a higher discount, so each signup leads to a bigger offer. [L0418, 2025-26]
- Set the SMS upgrade offer to 15% (upgraded from the 10% email code) and make the upgrade the main action. Keep a 10% "No thanks" option as the alternative. [L0418, 2025-26]

#### Procedure: Email pop-up with Reveal code (Optimonk)

1. Create a new campaign from scratch with the relevant domain, using a blank canvas. [L0418, 2025-26]
2. Cut out a lifestyle product image with a background-removal tool, export it as PNG, and resize it in batch. Use about 500 px wide for a standard floating image, or about 1000 px if it needs to look larger; keep PNG format. This reduces the file from roughly 2.3 MB to about 54 KB. [L0418, 2025-26]
3. Add a Floating image element and drop in the resized PNG so it overlaps the top edge of the pop-up. [L0418, 2025-26]
4. Remove the default column background (Column > Style > Solid color > None) so the large container box does not show, and handle layering with z-index. [L0418, 2025-26]
5. Add a headline "Congratulations" (font size 50, reduced to 40 if too big, black weight) and a subheadline "You've unlocked a mystery discount" (font size 30, semi-bold, with the key word in black). [L0418, 2025-26]
6. Add an Input element of type email with placeholder "Email", set as required, with the error message "This field is required". Set display to manual, width 400 px, height 50 px, and a top margin of 25 px. [L0418, 2025-26]
7. Add a text line "Ready to see what you got?" (font size 18, line height about 1.5) and a second line "Enter your best email below..." beneath it. [L0418, 2025-26]
8. Add a Button element labeled "Reveal code" (font size 24, black, display manual, width 400 px, height 60 px, top margin 10 to 15 px). Match its solid background color to the brand's button color, picked with a color-picker browser extension. [L0418, 2025-26]
9. Set the column horizontal padding to 0, and adjust top and bottom padding (for example 50/50 or 100 px) so spacing is even on all sides. [L0418, 2025-26]
10. Set the background as a solid color or a generated hero image (resized to about 1200 px wide, JPEG, quality reduced to about 40 to 50 KB). Apply a light-to-medium text shadow to the text for readability. [L0418, 2025-26]
11. Add a close button in white and a "No thanks, I hate discounts" secondary button (font size 12, no background, no shadow) to close the pop-up. [L0418, 2025-26]
12. Check the design in mobile view. Set the floating image and column so the layout fits: width 400 px, button height 70 px, button font size around 150, and overlay width at 95% of the screen. [L0418, 2025-26]
13. Set the z-index of the input fields and the Reveal Code button higher than the floating image (inputs about 10, image about 1), so clicks go to the form and not to the image. [L0418, 2025-26]
14. Check the campaign's Next-page settings: Conversion closed, campaign goal reached, Smart sync on. [L0418, 2025-26]
15. Test the pop-up live by enabling the Optimonk app embed in the Shopify theme (app embeds). The preview may not show it on some themes, so turn it live briefly if needed. [L0418, 2025-26]

#### Procedure: SMS upgrade stage (Optimonk)

1. Insert an SMS upgrade stage right after the email signup. [L0418, 2025-26]
2. Copy the email pop-up page. [L0418, 2025-26]
3. Place a Survey element called "SMS club invite" that offers two choices: "Upgrade to 15%" and "No thanks, 10% is enough". [L0418, 2025-26]
4. SMS page text shown in the lesson: "Your discount: 10%. Do you wanna upgrade your discount? Join our SMS club & get an upgraded 15% discount code! Plus early access to sales and new products. Only a few clicks away..." The phone step then asks the visitor to enter their best number to join the SMS club; the offer is the upgraded 15% code plus early access to sales and new products. [L0418 at 33:27, 2025-26]
- Result claimed in the lesson for this email-then-SMS pop-up: the brand made over 30,000 USD in under 10 days after implementing it. Self-reported, not independently verified. Full case (16,000 views, 71 sign-ups, about 0.4% before) on https://dlichters.com/ai/ecom/deep/06-conversion-optimization/31-pop-up-design.md [L0418 at 50:12, 2025-26]

Confirmation message after the visitor opts in:

```
You're in. Your text with your [15]% discount code is on its way and should arrive any second now. Once the message arrives, tap the link inside and the discount will apply automatically at checkout.
```
[L0418, 2025-26]

### Setting Up SMS Bump

- SMS Bump is the SMS-only app used here for abandoned checkout texts, post-purchase upsell texts and win-back texts. It can create discount codes automatically inside the SMS messages. [L0476, undated]

#### Procedure: Install and set up

1. Install SMS Bump from the Shopify App Store (Apps > All recommended apps > Shopify app store, search "sms bump"), click Get started, and create an account. [L0476, undated; L0634, undated]
2. When asked, choose SMS only, not email and SMS. [L0476, undated; L0634, undated]
3. Enter your business information and continue. [L0476, undated]
4. On the setup page, keep the abandoned checkout flow, post-purchase upsell flow and customer win-back flow switched on, then click Next. [L0476, undated; L0634, undated]
5. Finish the setup. Leave the subscription pop-up customization for later if Clavio already runs one. [L0476, undated; L0634, undated]

### SMS Bump: Abandoned Checkout Flow

#### Procedure

1. Open Flows, scroll to Abandoned checkout, and click Edit. [L0476, undated; L0634, undated]
2. Edit SMS 1 and change the delay from 30 minutes to 15 minutes. Paste the first SMS template, which contains a checkout button and a reply option for questions. [L0476, undated; L0634, undated]
3. Add SMS 2 with a delay of 2 hours. Paste the SMS 2 template. Click the discount code field, let SMS Bump create the code automatically, and set the value to 10. Add the abandoned checkout URL and save. [L0476, undated; L0634, undated]
4. Click Add step, then Add delay, and choose 20 hours. Add SMS 3 with a 20% discount code created the same way, paste the template text and save. [L0476, undated]
5. Note on placement: if needed, remove the step and place the 20-hour delay above the SMS 2 position, then add SMS 3 with a 20 discount code. [L0634, undated]
6. Click save. [L0634, undated]

#### Templates

SMS 1 (15 minutes after checkout abandonment):

```
Hey [first name], it looks like you left something in your cart. Do not miss out, it is going fast. Click here to finish your purchase: [checkout link]. If you have any questions or need help, just reply to this message and we will be happy to assist.
```
[L0634, undated]

SMS 2 (2 hours after abandonment, with 10% code):

```
Hi [first name], we noticed a few items still sitting in your cart, and we would hate for you to lose them. Tap here to finish your order and pick up [product] with a 10 percent discount code [auto-generated code]: [abandoned checkout URL]. Questions? Just reply to this text and we will gladly help.
```
[L0634, undated]

SMS 3 (20 hours after abandonment, with 20% code):

```
Hi [first name], it looks like some items are still waiting in your cart, and we want you to have them. Tap here to complete your purchase and get [product] with a 20 discount using code [auto-generated code]: [abandoned checkout URL]. Need help? Reply to this message and we will be glad to answer.
```
[L0634, undated]

### SMS Pump: Setup

#### Procedure (as taught, two lessons)

1. Install SMS Pump from the Shopify App Store, click Add app, then Add sales channel. [L1297, 2023]
2. Click Get started, then Set up SMS only. [L1297, 2023]
3. Enter the company name, phone number, optional additional address and industry. [L0477, undated; L1297, 2023]
4. Keep the template welcome message or edit it, then click Finish. [L0477, undated; L1297, 2023]
5. Delete the preset flows and build all flows from scratch under Flows, using Explore more flows and Create new flow. [L0477, undated; L1297, 2023]
6. Keep the balance at least $20 so SMS can send. [L0477, undated; L1297, 2023]

Alternative route, as taught in another lesson:

1. Open SMS Pump from the App Store and click Install. [L0635, undated]
2. Click Add sales channel, then Get started. [L0635, undated]
3. Create the basic account. [L0635, undated]
4. Set up flows and campaigns inside SMS Pump. [L0635, undated]

Balance rule: SMS Pump only sends messages if the account has a balance of at least $20. [L1297, 2023]

### SMS Pump: Abandoned Checkout Flow

#### Procedure

1. Name the flow "abandoned checkout" and choose the abandoned checkout trigger. [L1297, 2023]
2. Trigger: Abandoned checkout. Add a delay of 15 minutes, then an SMS action with the prepared text, filling in the product name in the brackets. [L0477, undated; L1297, 2023]
3. Add a condition: customer made an order after flow started is true. If true, end the flow; if not, continue. [L0477, undated; L1297, 2023]
4. Add a delay of 2 hours and a second SMS with a 10% discount code created in SMS Pump. [L0477, undated; L1297, 2023]
5. Add the same condition again, then a delay of 20 hours and a third SMS offering 20% off with an automatically generated code. [L0477, undated; L1297, 2023]
6. Make sure the discount code field is applied. If the discount amount shows red, fix it. If the opt-out text shows red, make space for it. [L0477, undated; L1297, 2023]
7. Click Save and confirm the flow is live. [L1297, 2023]

Template for the third-stage retargeting message:

```
Hey, {product name} is still waiting in your cart, and the offer is going fast. Finish your purchase now with 20% off using the code that SMS Pump generates automatically for you: {checkout link}. Reply STOP to opt out.
```
[L0477, undated]

#### Timing conflict to check

- The 15-minute, 2-hour, 20-hour schedule (SMS Bump and SMS Pump) puts three texts within about 22 hours of abandonment. [L0476, undated; L0477, undated; L1297, 2023]
- one source sets the first abandoned-cart SMS within 24 hours and says only one abandoned-cart text per customer may be sent within the first 24 hours. Treat this as a legal limit and check the SMS marketing rules that apply in your market. [L1208, 2025-26]
- Before running the schedule, confirm it fits the rules in your market. [L1208, 2025-26; L1213, 2023]

### Abandoned Checkout Message Design

#### Shape and length

- Abandoned checkout SMS should be short, three to four lines, using the customer's first name as a dynamic field. Include the offer (10-20% off), a sense of urgency and the deal end. Leave out reviews and extra content, since SMS must stay small and crisp. [L0605, undated]
- Put the offer and the discount in the first line of every SMS, since readers skim and rarely read the full message. Keep messages short and direct. [L1213, 2023]
- Put the offer and event in the first one or two lines so they show in the notification. [L0363, 2022+]

#### Formula: abandoned checkout (SMS Bump)

A short greeting with the first name, a reminder that items are still in the cart with a note of urgency, a single checkout button, and a reply line for help. Later messages add a discount code created in the SMS app and keep the same checkout link.

- Example 1: "Hi Sam, your order is still waiting. Tap here to finish checkout before your size sells out. Reply here for help."
- Example 2: "Hi Lee, your basket is saved. Here is 10% off with the code BACK10 at checkout: link. Reply STOP to opt out."
[L0476, undated]

#### Formula: SMS retargeting (SMS Pump)

One formula: a short reminder with the product name, a discount code that grows with each message, a link straight to checkout, and an opt-out line. The delay grows over time (15 minutes, 2 hours, 20 hours), and each message offers a bigger discount than the one before.

- Example A: "Hi, your [product] is still in your cart. Use code SAVE10 for 10% off, link below. Reply STOP to opt out."
- Example B: "Last chance: your [product] is waiting. Take 20% off with code SAVE20 before it sells out. Reply STOP to opt out."
[L1297, 2023]

#### Formula: first abandoned-cart SMS

Open with a non-blaming line saying checkout hit a snag and the order is saved, then add three short proof or policy points, such as customer count, return window and free shipping threshold. It reassures without implying carelessness and gives concrete reasons to return.

- Example A: "Hiccup at checkout, don't worry, your cart is saved. 12,000 happy customers, 30-day free returns, free shipping over $75."
- Example B: "Looks like checkout didn't finish, but your order is still waiting. 5,000 five-star reviews, easy 60-day exchanges, free delivery from $100."
[L1208, 2025-26]

#### Split test in Klaviyo

1. Add a conditional split based on cart value. [L1208, 2025-26]
2. If the cart value is over $100, send the variant that mentions free shipping. [L1208, 2025-26]
3. If not, send the variant that leads with a different value proposition, such as customer count or free returns. [L1208, 2025-26]

#### Channel mix

- Abandoned checkout SMS flows work well. Use SMS and email together and compare their performance across campaigns. [L1213, 2023]


Part 17 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/16-source-conflicts-and-version-notes.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/18-post-purchase-upsell.md
