<!-- part of ecom/deep/21-phone-sales.md -->
Part 3 of 7 of "21. Phone Sales: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/21-phone-sales.md · Previous: https://dlichters.com/ai/ecom/deep/21-phone-sales/02-callbacks-unknown-answers-and-call-logging.md · Next: https://dlichters.com/ai/ecom/deep/21-phone-sales/04-running-the-supplier-call.md

## Calling abandoned checkouts

### Why speed decides the outcome

- Contacting a lead within minutes of abandonment, instead of 30 minutes after, makes contact about 100 times more likely, because memory and task focus degrade quickly. [L0281, 2019+]
- Contacting within 5 minutes, instead of 30 minutes after cart abandonment, makes lead qualification about 21 times more likely. [L0281, 2019+]
- Immediate contact, within minutes, lets the customer assume a legitimate checkout issue. They are less likely to perceive aggressive marketing and more likely to complete the purchase. [L0286, 2018]

### Catching abandoned checkouts in real time

- **Mistake:** Checking abandoned carts manually in Shopify Admin (Orders > Abandoned Orders) every few hours or days. Compared with immediate real-time notification, this delay cuts contact likelihood by 100 times and qualification likelihood by 21 times. [L0281, 2019+]
- **Principle:** Orders valued at $2,000-$3,000 or higher nearly require a phone conversation to close. Use automation to identify these abandoned carts and send immediate alerts to the sales team. [L0286, 2018]
- **Slack alert:** A notification goes to the phone team as soon as a new abandoned cart arrives, so calls can start quickly. [L0737, 2020-26]
- **Slack alert content:** Customer name, products left in the cart, and phone number. [L1092, 2022] **
- **Sheet:** The same data also lands in the tracking sheet, where the team logs results. [L0737, 2020-26]

### Capturing the phone number at checkout

- Roughly half or more of abandoned checkouts can yield a phone number, so the checkout should ask for one. Capturing it is what makes the follow-up call possible. [L1522, 2021-22] **
- Handle abandoned checkouts in this order: [L1522, 2021-22] **
  1. Ask for and capture the shopper's phone number during checkout.
  2. Call every abandoned checkout with a phone number as soon as possible.
  3. Send the abandoned checkout email flow to all abandoned checkouts, including those without a phone number.
- When you have the customer's phone number, combine email follow-up with a call or text. Many carts can still be converted into sales this way. [L1285, 2024] *(2024)*

### Timing the call

- Contact every abandoned checkout as soon as possible, ideally straight away, by phone. The call aims to find and fix the problem that stopped the sale. [L1522, 2021-22] **
- Call customers who abandoned checkout to ask why they did not finish the order, except on Sundays. [L1090, 2021] **

### Working each row (phone team routine)

For each abandoned cart row: [L0737, 2020-26]

1. Call the customer and record in the Notes column what happened: whether the person picked up, whether it was a wrong number, whether they bought, and what was said on the call.
2. Set the row color according to the call outcome so that results can be read at a glance.
3. If a paid order later comes in from the same email, the Recovered column is filled automatically with the purchase date.

Alternative call procedure from the 2022 course: [L1092, 2022] **

1. Receive a Slack notification showing the customer's name, the products left in the cart and the phone number.
2. Call from a business number such as Mighty Call or Google Voice.
3. Say that you saw they were on the store, did not finish the order, and ask whether you can help.

### Call scripts

Phone script for an unfinished checkout. Adjust it to your store, and stay warm and never pushy. [L1522, 2021-22] **

```
When a customer leaves a checkout unfinished, use this phone script, adjusted to your store, and stay warm and never pushy. Greet the customer by first name, introduce yourself and your store, and say you noticed they started an order but did not complete it. Ask whether anything went wrong during checkout and whether there is something you can fix or help with. Say you would be glad to have them as a customer. If a problem came up, write down exactly what it was, then either fix it or escalate it, and confirm the result back to the customer. If no problem came up, thank them, ask whether they have questions about the product or shipping, and end the call politely. Log the outcome and the reason for the abandonment in your notes.
```

Opening script (2021). Two identical copies in the course; the text is unchanged. [L0671, 2021] **

```
Hi, this is [your name] from [store name].com. We noticed you were just about to complete your order for [product name] but did not finish checking out. I just wanted to follow up quickly to see if you ran into any trouble or if there is anything I can help you with. If they are ready to buy, offer to send them a direct link back to checkout.
```

Message script (2024). [L1285, 2024] *(2024)*

```
Hi, this is [Your name], the owner of [Store name]. I noticed you started the checkout for [product name] but did not complete your order. If you have any questions about this product, I am happy to help, so just text me back and I will take care of you.
```

### Voicemail and text follow-up

- Phone calls after abandoned checkouts are often unanswered, so pair each call with a voicemail and a later text. [L0806, 2024] *(2024)*
- Plan the follow-up over about a week to measure whether it recovers sales. [L0806, 2024] *(2024)*
- The call comes first. The voicemail and text follow after it, as the second step of the same sequence. [L0806, 2024; L0737, 2020-26] *(2024)*

### Tracking sheet setup

- Color-code the tracking sheet rows by call result so outcomes are visible at a glance. [L0737, 2020-26]
- Place the color key at the top of the sheet. [L0737, 2020-26]
- Notes column: record pickup, wrong number, purchase, and call content for each row. [L0737, 2020-26]
- Recovered column: filled automatically with the purchase date when a paid order arrives from the same email. [L0737, 2020-26]

### Using the answers as feedback

- Use customers' answers about why they abandoned as qualitative feedback for fixing the store. [L1090, 2021] **
- Log the outcome and the reason for the abandonment in the notes, so the reasons can be reviewed later. [L1522, 2021-22] **

## Post-purchase, confirmation and review calls

### Order confirmation calls

#### When to use an order confirmation call

- Use a confirmation call only for orders that look suspicious or that need verification before shipping. [L0960, 2019]
- The call checks the shipping destination, billing address, and connection location against each other, then asks the customer to confirm or correct the details. [L0960, 2019]

#### Order confirmation script

```
Hi, this is [Your name] from [Store name]. We received your order for [product] and want to confirm it is yours before we ship. Our records show it is going to [shipping state or city], the billing address is in [billing state or city], and the connection came from [IP location]. Could you confirm these details and tell me whether anything looks different from what you expected? Thank you, and we will get your order on its way once we have confirmed it.
```
[L0960, 2019]

### Thank-you and satisfaction calls

#### Purpose and timing of the post-sale call

- The first call is a post-sales support call, not a review request. Opening this way feels natural to the customer, and most businesses do not follow up at all, so the call builds goodwill before the request is made. [L1012, 2021-22]
- Schedule a post-purchase call to every customer at the same point the automated review email would go out, typically around 7 to 14 days after the order or after the usual delivery time. For example, if most orders arrive within 7 days, call at day 7; if the review email goes out at 2 weeks, call at 2 weeks. [L1012, 2021-22]
- Call new customers after purchase to thank them and confirm the order. Calls cost nothing if done with your own time or on commission, and take about 10 to 20 minutes each. [L1076, 2019]
- Make an upsell only when a product truly fits the customer's purchase. [L1076, 2019]

#### Goals of the review call

- A personal thank-you.
- Gauging satisfaction with the business and product.
- Resolving any problems.
- Securing at least a text review.
- Requesting a photo of the customer with the product.
- Requesting a video review via VideoPeel. [L1012, 2021-22]

#### Structure of a post-sale call

1. Open by asking a series of questions about whether the customer is getting the value they expected from the product and whether anything is wrong. [L1011, 2021]
2. Answer any questions the customer has. [L1011, 2021]
3. At the end of the call, ask the customer to leave a review. [L1011, 2021]

#### Post-purchase call script

Use this post-purchase call script with placeholders filled in:

```
Hello [first name], this is [your name] from [store name]. Thank you for your business. I wanted to let you know that we have your order [order number] confirmed, and it usually ships within 48 hours. Here is what to expect: you will get tracking updates by email as soon as it ships. If you have any questions, you can call us at [phone number], email [email address], or use live chat on our site between 9 and 5. We appreciate you, and we are here to support you.
```
[L1076, 2019]

- If the customer does not answer, leave a voicemail with the same thank-you message and the same contact details, and do not pitch a product in the voicemail. [L1076, 2019]

#### Use the script as a guide

- Use a call script as a guide to the content only. Callers should speak in their own natural language rather than reading the script word for word. [L1012, 2021-22]

### Review call procedure

#### Step-by-step review call

1. Call the customer at the scheduled point after the order (usually 7 to 14 days). [L1012, 2021-22]
2. Open with a personal thank-you for the order and say the call is a check-in to make sure everything arrived fine. [L1012, 2021-22]
3. Ask whether the customer is happy with the product. [L1012, 2021-22]
4. If the customer is satisfied, explain that reviews help the business serve customers better and ask whether they would leave a quick two-minute review. [L1012, 2021-22]
5. If the customer is unhappy, listen and try to resolve the problem on the call, since a resolved issue often produces a stronger review. [L1012, 2021-22]
6. Request a text review at minimum. [L1012, 2021-22]
7. Offer the option of a video review (via VideoPeel) and/or a photo of the customer with the product. [L1012, 2021-22]
8. Close the call and follow up with the email sequence that goes with the script. [L1012, 2021-22]

### Finding unhappy customers

- Callers must find out when a customer is unhappy, because customers often will not say so themselves. [L1012, 2021-22]
- A problem that gets resolved on the call can turn into a more credible five-star review that mentions the good service. [L1012, 2021-22]
- Ask whether the customer is happy with the product before asking for a review, so unhappy customers are identified first. [L1012, 2021-22]

### Starting new staff on calls

- Do not start new customer service staff on live calls straight away if the product is complex or technical. [L1012, 2021-22]
- Start new staff with outbound scripted calls to existing customers. This lets them learn the product and customer language first. [L1012, 2021-22]

## Upselling and cross-selling on calls

### Where phone upselling fits

- Phone upselling and cross-selling can increase store profit substantially, but it is optional and is a different style of selling from the core approach. A store with a net margin of about 30% can run without it. [L0834, 2021]

### Upsell planner for agents

- Give every customer service agent the full upsell planner: the list of core products and their related upsells. This lets agents know which products to offer with which core product. If you handle service alone, the planner applies to you too. [L1409, 2021]

### Answer first, then offer

- Answer the customer's question first, then offer the related upsell product. For example, answer a shipping question and then mention the related product that goes with the item. [L1409, 2021]

### Relevance over frequency

- Offer upsells only where they fit the customer's purchase. Relevance matters more than offering every time, so skip the offer when it does not fit. [L1409, 2021]

### Phone and chat upsell steps

Steps for customer service agents:

1. Answer the customer's question first. [L1409, 2021]
2. Mention the related upsell product that pairs with the core product the customer is buying. [L1409, 2021]
3. Ask whether the customer wants to add it to the order. [L1409, 2021]
4. If the customer agrees on the phone, create the checkout for them and send it, or walk them through finding the product on the site, particularly when a deal applies. [L1409, 2021]
5. If the customer is in online chat, send a direct link to the product page or checkout. [L1409, 2021]
6. If a discount or special offer applies, give the customer the discount code or apply the offer. [L1409, 2021]

### Agent scripts and training

- Provide agents with a written script and instructions covering when and how to offer upsells. Build the upsell step into the customer service process or SOPs. Agents need practice before the upsell becomes routine. [L1409, 2021]
- Upsells in customer service fail when agents have not been trained or when the step is not part of the service process. Practice the script with agents and make the upsell step a standard part of their workflow. [L1409, 2021]

### Post-purchase calls and offers

- A post-purchase call should add a helpful offer only when a better product or benefit makes sense for the buyer. Calling a customer just to tell them they should have bought something else damages trust. [L1076, 2019]
- Case: a business owner with a sales background called every buyer after purchase for a few months, after selling the store.
  - The owner offered a different product, extended warranties and faster shipping over the phone. The owner had previously offered these on the site.
  - The owner saw sales climb steadily during that time.
  - The approach needs a team member or owner who is comfortable on the phone, and it takes little time. [L1076, 2019]

## Preparing for supplier calls

### Why phone beats email

- Phone communication works better than email because people connect through voice, so a call allows real-time discussion and problem-solving that the back-and-forth chains of email cannot provide. [L0235, 2021-22]
- Call suppliers rather than relying on email, because a phone call gets a clear answer far more often. The lesson reports approval rates above 60% when calling suppliers, and email follow-up alone was less effective. [L0458, 2021-22]
- Calling gives an immediate yes, no or call-back answer, which speeds up approvals. [L0469, 2021]
- If a call is not possible, use email and follow up persistently. [L0469, 2021]
- Use phone calls to supplier contacts as the default approach, because emails are easy to ignore and calls build a stronger connection. (2023.) [L0970, 2023]
- Call first and email second, because a phone call gets a yes or no faster than email. [L0803, 2022]
- Call the supplier first and make your case by phone rather than email, because a call cuts through the noise and gets you to the decision maker faster. [L0928, 2020-26]
- Calling is faster than emailing for getting approved, especially when you need a direct answer. Pair calls with follow-up emails, since many suppliers only respond after a second contact. [L1090, 2021]
- Phone calls to suppliers are the most efficient route to approval. (2024.) [L0836, 2024]

### Vetting suppliers

- Vet a supplier before calling: search the company name for reviews and reputation, and confirm they are sold on competitor sites. The call then only confirms the details. [L0963, 2022]

### Building the call list

- Keep building the supplier list and collect all contact details during the holiday period. [L0551, 2020]
- Build a contact list of at least 20 suppliers before you start calling. Not all of them will approve you from the first call. [L0933, 2020-26]
- Some suppliers need education about the business model, and approval can take many months. [L1085, 2018]
- Prepare your own pitch script and expect a dialogue rather than a single call. [L1085, 2018]
- Suppliers with strong brands are usually the hardest to get approved. [L1085, 2018]
- Starting with silver-tier suppliers and building traffic and sales makes it easier to return to them later. [L1085, 2018]

**Holiday-period plan**

Source procedure, kept complete:

1. Keep building the supplier list and collect all contact details during the holiday period. [L0551, 2020]
2. Finish the demo store so it looks complete before you start calling. [L0551, 2020]
3. Start supplier calls on the first Monday after the holidays, when companies return to normal business. [L0551, 2020]
4. Call with the supplier sheet ready to go. [L0551, 2020]

Step 3 is tied to the return to normal business after the holidays. Timing for calls outside that window is covered under Timing and time zones below.

### Reviewing the supplier's website

- Before calling a supplier, review the supplier's own website and speak back to what it highlights about its brands, as if preparing for a job interview. (2023.) [L0855, 2023]

### Timing and time zones

- All supplier calls must occur during the supplier's business hours, even if this requires calling at inconvenient times from your location. [L0235, 2021-22]
- When calling suppliers, call early on weekdays in the supplier's time zone, for example at 8:30 a.m. (2025.) [L1097, 2025]
- If no one answers, call back at 9:00 a.m. This was the fastest way to get through. (2025.) [L1097, 2025]
- Use a phone-based process for supplier contact: call first thing in the morning and follow up by phone or email. (2023.) [L0835, 2023]
- Contacting suppliers early in the day gives you a better chance of reaching the decision maker. (2023.) [L0835, 2023]
- Calls to suppliers, especially early in the morning, get through to decision makers more often than emails or calls at busy times of the day. (2023.) [L0970, 2023]
- If no replies come in, change the timing and test again. (2023.) [L0970, 2023]

**Where the timing sources differ**

- The 2020 holiday plan starts calls on the first Monday after the holidays. It applies to the post-holiday restart. [L0551, 2020]
- The 2023 and 2025 rules recommend early weekday morning calls in the supplier's time zone. They apply to routine calling. [L0835, 2023; L0970, 2023; L1097, 2025]
- Where the supplier's business hours and your location conflict, the business-hours rule takes priority. [L0235, 2021-22]

### Mindset before the call

- Fear of calling suppliers often comes from treating one deal as make-or-break. [L0701, 2015]
- Having several options lined up makes each call feel less critical, and the calmer energy that results makes others more willing to work with you without changing your words. [L0701, 2015]
- Present yourself as a partner who will bring them sales, not as a pestering retailer. Approach the call with the expectation that they are glad to hear from you. [L0665, 2022]
- Supplier calls are normal conversations, not scripted interviews, so questions should be treated as a discussion and not as objections to overcome. [L0933, 2020-26]
- Only some of the questions covered here will come up on any given call. [L0933, 2020-26]
- Mistake: do not overthink supplier questions or read them as rejections. [L0933, 2020-26]
- Preparing answers in advance is useful, but a call should stay natural and confident. [L0933, 2020-26]
- Supplier calls are relaxed, informal conversations rather than hiring interviews, and no salary is offered. [L0968, 2021]
- Prepare by learning about the company and expect questions about your business, but treat the call as a conversation rather than a test. [L0968, 2021]
- Many new sellers get stuck calling suppliers. (2023.) [L0804, 2023]
- Making the calls in a single block, recording notes on each call and starting with the top of the list helps overcome the reluctance. (2023.) [L0804, 2023]
- Nervousness with senior decision-makers often comes from seeking their approval as if you had to beg for it. [L1206, 2015+]
- Ask whether you would physically behave that way in the same situation. If you would not, the posture is a belief you can test and drop. [L1206, 2015+]

### Nervousness and accent

- Accent or non-native English is not a barrier to getting supplier approvals. Suppliers want business relationships that benefit both sides. [L0962, 2021]
- When making cold calls to suppliers, a non-native accent or nervousness can be named openly as part of your background, which reduces tension and builds trust. [L0832, 2019]
- Presenting this trait honestly often works better than hiding it. [L0832, 2019]

### Rehearsal and coaching practice

- Rehearse hard tasks like supplier cold calls with a coaching call before doing them alone. [L0832, 2019]
- This reduces nervousness and builds the skill over time. [L0832, 2019]
- Rehearse the script and practise on less important suppliers first. (2024.) [L0836, 2024]

**Mental rehearsal procedure**

1. Before a sales call, list the questions and objections the prospect is most likely to raise. [L1206, 2015+]
2. For each one, work out a clear, specific answer in your mind. [L1206, 2015+]
3. Rehearse the full conversation in your imagination, including the prospect's objections and your replies. [L1206, 2015+]
4. Repeat the rehearsal, especially for difficult objections, until your replies come easily before using them on real calls. [L1206, 2015+]


Part 3 of 7 of "21. Phone Sales: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/21-phone-sales.md · Previous: https://dlichters.com/ai/ecom/deep/21-phone-sales/02-callbacks-unknown-answers-and-call-logging.md · Next: https://dlichters.com/ai/ecom/deep/21-phone-sales/04-running-the-supplier-call.md
