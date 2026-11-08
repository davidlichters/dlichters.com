<!-- part of ecom/deep/15-email-and-sms.md -->
Part 11 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/10-abandoned-cart-and-checkout-recovery-email.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/12-platform-walkthroughs.md

### Discount Timing

#### Discount Position and Amount

| Source | Discount placement | Amount | Source |
|---|---|---|---|
| one source | No discount in the first messages; risk email first, then the offer email after a 1-day wait, sent at 7:00 am | 15% offer | [L0567, 2025-26; L0261, 2025-26] |
| one source (offer example) | Discount offer email subject variant | 15% | [L0261, 2025-26] |
| one source (scarcity reminder) | Discount reminder with scarcity messaging, 8 hours after offer | 15% | [L0261, 2025-26] |
| one source (Clavio) | Email 1 without discount; email 2 with code; email 3 with a larger code | $5, then $10 | [L0476, undated; L0634, undated] |
| one source (Klaviyo, as taught) | Email 2 with a discount code for the product | $10 or 20% | [L0477, undated] |
| one source (Klaviyo, Shopify code) | Email 2 with the code created in Shopify | $10 off | [L1297, 2023] |
| one source (four-email flow) | No discount in email 1; 10% from email 2 onward | 10% | [L0606, undated] |
| one source (four-email flow, extra) | Email 3 announces an exclusive deal with an extra 10% off | Extra 10% | [L0605, undated] |
| one source (three-email flow) | Third email offers an extra discount | 10-20% | [L0604, undated] |
| one source (Shopify default) | Second email uses the Discount Reminder template | Discount per store offer | [L0266, 2020-26] |
| one source (free shipping first) | Use free shipping first, then 10% off if free shipping costs more | Free shipping or 10% | [L1243, 2017] |
| one source | Discount offer 24 hours after the personal email, limited to 3 days | Discount code | [L1449, 2021-22] |
| one source (SMS flow) | Email four: 10% off, plus free shipping or add-on suggestions if the cart is under the threshold | 10% | [L1208, 2025-26] |

#### Discount Rules

- Holding the discount back until the second email protects margin from shoppers who would have bought anyway. Only the people who still hesitate receive the offer [L0606, undated].
- The most common abandoned-cart mistake is offering a discount immediately. Start with a plain reminder and a checkout link, because many people abandon carts for non-price reasons such as distraction, connection loss or interruptions [L1449, 2021-22].
- Lead with value and the product before any discount, so the offer does not come first [L0567, 2025-26].
- Discounts should be strategic and paired with something of higher value [L0575, 2014].
- Use only the offer that is cheapest for your margin: free shipping first, then 10% off if free shipping costs more [L1243, 2017].
- For carts over $100, mention free shipping instead of one of the SMS value propositions [L1208, 2025-26].
- one source discount progression: none in email 1, then $5, then $10 across the sequence. The discount increases across the sequence [L0476, undated].
- Time-limited offers should be labelled clearly as limited, here for 3 days, and reminders should show the remaining time, such as 24 hours and 4 hours [L1449, 2021-22].
- one source: the first email can carry no discount, the second a small code, and the third the largest code, with its deadline stated [L0634, undated].

### Conditions, Splits and Filters

#### Send Conditions

- Second email conditions: the customer must not have placed an order since abandonment, and they must not have started a new checkout [L0149, undated].
- First email conditions (Shopify template): the first email sends only if both are true, the customer has not placed an order since the workflow started, and at least one product from the abandoned cart is in stock [L0282, 2020-26].
- Second email conditions (Shopify template): the second email sends only if the customer has no order since abandonment and more than 24 hours have passed since their last abandoned checkout, preventing duplicate emails from multiple abandoned carts [L0282, 2020-26].
- Purchase exclusion: if a customer completes their purchase before a delay timer expires, they are automatically excluded from all remaining email steps [L0282, 2020-26].
- New checkout during a running automation: if a customer initiates a new checkout before the first abandoned checkout automation completes, that automation cancels without sending emails. If the new checkout is also abandoned, the customer enters a fresh abandoned checkout automation for the new session, enabling re-entry without duplicate emails [L0266, 2020-26].
- Second email spend filter: send the second abandoned checkout email only to customers who have previously spent over $0.00, filtering out brand new customers who may not be ready for follow-up offers [L0156, undated].
- Conflict on the spend filter: the Shopify workflow sets the Amount Spent condition to "is equal to $0" (Customer > Amount Spent) in its condition step and again in its review step [L0266, 2020-26]. The spend filter described in [L0156, undated] sends to customers who spent over $0.00. The sources do not explain which applies in which case, so confirm the condition in Shopify before relying on either.
- Branch by cart size: if the cart is over $100, mention free shipping in the SMS; if under the threshold, add free shipping or add-on suggestions in email four [L1208, 2025-26].
- Branch by product range: after 2 days without purchase, send a helpful content email (such as a buyer's guide) if the product range is broad, or a discount reminder if the range is narrow [L1449, 2021-22].

#### Splits

- one source 50/50 split: send the first email with a 50/50 A/B test. Path A uses desire messaging; path B uses pain messaging [L0261, 2025-26].
- Klaviyo setup for the split: use a Conditional Split with the condition 'Is part of a 50% random sample' to divide shoppers into two paths for the first email test. The live split was about 51% and 49% [L0567, 2025-26].
- Path 1 (desire/objection email #1A): sent 20 minutes after checkout starts [L0567, 2025-26].
- Path 2 (pain-point email #1B): waits 4 hours after checkout starts before it is sent [L0567, 2025-26].
- Conditional split for reminders: after the first email, use a conditional split to check 'Has Opened Email zero times since starting this flow.' If unopened, send a 45-minute reminder with the same subject line. If opened, let the customer continue to the next step without a redundant email [L0261, 2025-26].
- one source test step: after the 23-hour wait, test short direct pain copy against story-driven pain copy [L0261, 2025-26].

### Copy and Subject Formulas

#### Subject-Line Formulas

- Formula for a cart-recovery subject line: suggest that something may have gone wrong at checkout, then promise a direct link back to the cart. The question-style opener lowers pressure and reduces the sense of being chased [L1243, 2017].
  - Example 1: "Did something go wrong at checkout? Here is your cart: {link}" [L1243, 2017]
  - Example 2: "Quick question about your order, {first name}. Your cart is saved here: {link}" [L1243, 2017]
- Pattern for the last-chance subject line: put the exact hours left first, then the offer and its expiry, for example a plain countdown plus discount. Examples of the author's own: "2 hours left: your 10% code ends tonight" and "Last call: your saved bag closes in 3 hours" [L0567, 2025-26].
- Pattern for the offer email subject: tease what waits in the cart without naming the product, which creates curiosity and gets opens. Examples of the author's own: "Something good is still sitting in your basket" and "Your favourite pick is still on hold" [L0567, 2025-26].
- Formula for the one source email 1 subject line in the Clavio setup: a friendly reminder, with the first email written as a reminder that the cart is waiting [L0476, undated]. Example of the same tone: "Still thinking it over? Your cart is saved for a few more hours." [L0476, undated]
- Example for the second email: "Stock on your picks is running low. Here is 10 dollars off for the next hour." [L0476, undated]
- Subject-line examples for a benefit-led first email: none specified beyond the template; set the subject to include the product name [L1297, 2023].
- Discount offer example subject : "You Won't Believe What's Waiting in Your Cart" with a 15% discount [L0261, 2025-26].
- Discount reminder example subject : "4 Hours Left: 15% Off Expires Soon" [L0261, 2025-26; L0567, 2025-26].
- Default subject line for the first abandoned checkout reminder email: "You left items at checkout" [L0266, 2020-26].
- The one source sender name uses the brand and a monitored support address, and the subject "RE: About your order" makes the email look like a reply in the inbox [L0567, 2025-26].
- one source third email subject: "your cart is still waiting for you and so is our discount" [L1297, 2023].
- Day 3 to 4 email subject: "Your {product name} is still waiting for you" [L1243, 2017].
- "Did you forget something?" was used as the first abandoned-cart subject line [L1086, 2019]. one source advises against wording reminders as if the customer forgot something [L1208, 2025-26], so use the newer wording.
- one source second-email subject: say the order is not yet complete [L0605, undated].
- one source third-email subject: announce an exclusive deal with an extra 10% off [L0605, undated].

#### Copy Rules

- One strong headline is enough in the first abandoned cart email. A sub-headline can be dropped. Testing in this store showed the extra line added nothing, so remove it unless a split test proves otherwise [L0567, 2025-26].
- Repeat the real deadline in the P.S. line of an offer email, because many readers scroll to the end. Keep it consistent with the countdown and the code expiry time [L0567, 2025-26].
- Sign the offer and last-chance emails with the founders' first names to add a personal touch. The sign-off should match the brand voice used across the sequence [L0567, 2025-26].
- Each abandoned-cart email should contain a direct button to the checkout link, so the customer returns to the exact cart with one click. Copy the same link into each email in the sequence [L0634, undated].
- Text-based abandoned-cart emails with some images and plenty of personal text tend to convert better, because they feel personal and land in the primary inbox more often [L0607, undated; L0573, undated].
- The personal welcome email in the cart sequence should ask a direct question and invite a reply, rather than repeating the product. Its goal is to uncover objections such as an unresolved question or hesitation about a competitor, and a reply can lead to a personal conversation that moves the sale forward [L1449, 2021-22].
- Personal message from the store owner: frame the second follow-up email as a personal message from the store owner offering direct help with questions. Invite the customer to reply, positioning it as one-on-one conversation rather than automated broadcast, to increase engagement and encourage direct response [L0149, undated].
- Insert the abandoned checkout products block into the second reminder email so recipients see exactly which items they left behind, rather than generic product suggestions or inspirational content [L0266, 2020-26].
- Last-chance email build order:
  1. Copy the layout of the offer email [L0567, 2025-26].
  2. Change the subject to a countdown such as "4 Hours Left: 15% Off Expires Soon" [L0567, 2025-26].
  3. Update the headline to say time is almost up and the discount ends [L0567, 2025-26].
  4. Insert the product block of the items left behind between the headline and the CTA [L0567, 2025-26].
  5. Add the final warning and the CTA to complete the order with the discount applied [L0567, 2025-26].
- one source: the first email's copy as a reminder, with a product benefit or guarantee and a link back to the store; keep no discount in this first message [L0476, undated].
- one source: abandoned-cart copy should be benefit-led and describe the customer's pain point and how they will feel after getting the product [L0605, undated].
- Use the Shopify AI tool to refine the first email template and improve its messaging [L0156, undated].
- For the first abandoned checkout email, Shopify's Generate Text tool can be used with a description (for example "You left items at checkout"), a tone (for example playful) and a choice of suggested subject line [L0266, 2020-26].

#### Templates and Prompts

Abandoned cart email, sent automatically to a shopper who left checkout:

```
Hi [First name], you did not finish your order. Is there anything I can help you with? Just reply to this email. [Sender name], [Brand name]
```
[L0334, 2017]

Prompt for composing email two in the recovery sequence:

```
I need assistance composing an email for an abandoned cart recovery sequence on [store domain]. My first email in this sequence is complete, but I'm developing email two to communicate to buyers that they can reach out with questions or purchasing support. I have a preliminary version of this email: [paste draft here]
```
[L0282, 2020-26]

Abandoned cart email template, ready to paste (replace the placeholders in braces):

```
Subject line: {subject_line}
Preview text: {preview_text}

Hi {first_name},

You left {product_name} in your cart, and it is still waiting for you.

[Cart section showing the items]

Checkout now to secure your items.
[Button: Complete checkout, linked to {checkout_link}]

Prefer to keep browsing? [Link: Return to cart, linked to {cart_url}]

Here is what other customers say about {store_name}:
[Image: testimonial collage]

If you have any questions, just reply to this email.

Cheers,
{signature_name}
{store_name}
```
[L0607, undated]

Abandoned cart email 1 (sent 15 minutes after abandonment) :

```
Hey [first name], you know we feel like you stood us up for a date. We hate to see sad looking abandoned carts, especially when they hold such amazing items. If you are the thinky kind of shopper, you will be glad to know our products have a 100 percent satisfaction guarantee in place. We are also known for our fantastic [product] which make the owner 150 percent more awesome instantly. We are holding on to your cart for now, but these items tend to sell out really soon. Hope to see you back. Cheers, [customer representative first name], [store URL].
```
[L0634, undated]

Abandoned cart email 2 :

```
Hi there, we know online checkout can feel like a lot. Ideally nobody would leave a cart behind, so consider this before you go: the items you picked are the same ones other shoppers are buying right now. They are selling fast, and we may not be able to fill your order next time. To make it easier, we are taking $5 off once you finish checkout. That means more savings and more shopping, but the window is short because we cannot tell when your selection will sell out. Enter code SAVE5 at checkout. [Checkout link button] Warm regards, [customer representative first name], [store URL].
```
[L0634, undated]

Abandoned cart email 3 :

```
Hi [first name], still on the fence? Treating yourself is never a bad idea. Your cart is saved for the moment. [Checkout link button] We are holding your discount too, and this round is bigger: $10 off. Apply code SAVE10 at checkout. Every order ships with a tracking code, and our team responds quickly if you have questions. See our [tracking policy link] or reach out through our contact details. Your saved cart will expire and the offer closes soon, so act now. We hope to welcome you back today. Warm regards, [customer representative first name], [store URL].
```
[L0634, undated]

Older template, first abandoned cart email:

```
Subject: Did you forget something?

Hi {first_name}, did you forget something? {customer_name} from {customer_location} got their {product_name} from {store_name}, and yours is still waiting in your cart. Did you forget yours? [Insert customer photo of {customer_name} with {product_name} here]

Complete your order here: {cart_link}
```
[L1086, 2019] Use this as the first abandoned cart email, and keep the customer photo above the button. with the subject wording conflicting with [L1208, 2025-26]; see the subject-line section.

Day 3 to 4 abandoned-cart email, sent after the Messenger reminder when the shopper still has not bought:

```
Subject line: 'Your {product name} is still waiting for you'

Body: 'Hi {first name}, you left {product name} in your cart, and it is still here. Use code {code} for {free shipping or 10% off} at checkout. Return to your cart here: {link}. We would really like to be the store you choose, so thanks for considering us.'
```
[L1243, 2017] Replace the placeholders before sending, and use only the offer that is cheapest for your margin: free shipping first, then 10% off if free shipping costs more.

### Benchmark Results

#### one source Results (2025-26)

| Email | Open rate | Click-through rate | Order rate | Source |
|---|---|---|---|---|
| Desire-based abandoned cart email | 83% | 16.2% | 8.1% | [L0261, 2025-26] |
| First email, desire path (Path A) | 83.8% | 16.2% | 8.1% | [L0261, 2025-26] |
| First email, pain path (Path B) | 82.4% | 5.9% | 2.9% | [L0261, 2025-26] |
| Discount offer email (15% off, subject "You Won't Believe What's Waiting in Your Cart") | 56.2% | 11.2% | 4.5% | [L0261, 2025-26] |
| Risk-mitigation email (testimonials, guarantees, payment options) | 53.2% | 3.2% | 1.1% | [L0261, 2025-26] |
| Discount reminder with scarcity messaging ("4 Hours Left: 15% Off Expires Soon") | 60.2% | 9.1% | 4.5% | [L0261, 2025-26] |
| Pain copy, short direct version (after 23-hour wait) | 76.2% | 9.5% | 2.4% | [L0261, 2025-26] |
| Pain copy, story-driven version (after 23-hour wait) | 69.6% | 8.9% | 0% | [L0261, 2025-26] |

- Timing result: a 20-minute first delay produced 8.1 orders per 100 abandons, against 3.7 orders with a 4-hour delay, a 2.2x difference in conversion [L0261, 2025-26].
- Copy result: short, direct pain copy significantly outperformed story-driven copy for pain-focused follow-up emails [L0261, 2025-26].
- The one source figures come from its own store tests. The units do not give sample sizes [L0261, 2025-26].

#### Other Sources

- one source: the units give no measured results; they make qualitative claims only. Text-based emails with personalization convert better and reach the inbox more reliably [L0573, undated; L0607, undated].
- one source: the third email's larger discount is presented as the step that pushes hesitant buyers to act, without a measured rate [L0606, undated; L0604, undated].
- one source: roughly 7 to 8 out of 10 shoppers leave without buying, and about 25% recovery is cited as a realistic target [L0572, 2014].


Part 11 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/10-abandoned-cart-and-checkout-recovery-email.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/12-platform-walkthroughs.md
