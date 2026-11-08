<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 32 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/31-pop-up-design.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/33-site-speed-mobile-and-technical-hygiene.md

## Recovering lost visitors and carts

### Abandoned checkout versus abandoned cart

- An abandoned cart means items were added but checkout was never started. An abandoned checkout means the customer started checkout and did not finish, whether because of a declined payment, incomplete information, or an interruption. [L0266, 2020-26]
- Abandoned checkout recovery is more effective than abandoned cart recovery because these customers have progressed further in the purchase journey. [L0266, 2020-26]
- Abandoned checkout recovery automatically follows up with customers who add products, start checkout, and leave without completing the purchase. It recovers sales that would otherwise be lost while purchase intent is still high, and it runs without daily management. [L0149, undated]
- An abandoned checkout workflow triggers when checkout is abandoned with a total greater than $0. Customers who complete their purchase exit the workflow. [L0149, undated]
- An abandoned cart flow is an automated sequence that follows up with visitors who entered checkout but did not complete the purchase, targeting high-intent prospects in recovery. [L0040, 2020-26]
- Exit-intent overlays and abandoned cart flows address two distinct drop-off points: visitors who leave without acting, and prospects who abandon checkout. Each needs a separate strategy. [L0040, 2020-26]

### Setting up the abandoned checkout automation

1. Open Marketing > Automations in the Shopify admin. Automations are created through the Messaging app but edited in the Automations section. [L0282, 2020-26]
2. Build the workflow using the conditions in the table below. [L0149, undated; L0266, 2020-26; L0282, 2020-26]
3. Confirm the workflow is active. The status button shows `Turn off workflow` when it is active. If it shows `Turn on workflow`, the automation is not yet active. [L0149, undated]
4. Once set up, the automation runs in perpetuity and executes each time a customer abandons a checkout. It can be modified or paused at any time without re-setup. [L0282, 2020-26]

| Element | Setting | Source |
|---|---|---|
| Trigger | Checkout abandoned with a total greater than $0 | [L0149, undated; L0266, 2020-26] |
| Stock check | Stock status is verified before the first email. The email does not send if the product is no longer in inventory. | [L0266, 2020-26] |
| Exit check | Before each email, the system checks whether the customer has placed an order or started another checkout since abandonment. If either occurred, the customer is removed from the flow. | [L0266, 2020-26] |
| First email | Sent after a 4-hour initial delay | [L0282, 2020-26] |
| Second email wait | Second wait timer set to 20 hours after the first email. Combined with the 4-hour delay, the second email is sent 24 hours after the original abandonment. | [L0282, 2020-26] |
| Second email condition | Sent only if the customer's total amount spent equals $0 | [L0266, 2020-26] |
| Customer tag | Add the customer tag `abandoned cart` to all contacts entering the workflow. Other automations reference this tag to exclude these customers and prevent duplicate messages. | [L0266, 2020-26] |
| New subscribers | Enable only the abandoned checkout automation, not the abandoned cart automation. New subscribers already receive welcome emails, so abandoned cart emails create redundant contact. | [L0266, 2020-26] |

- The 4-hour first-email delay [L0282, 2020-26] falls outside the one-hour window cited in [L0261, 2025-26]. The sources do not reconcile these figures. The table follows the setup described in [L0282, 2020-26].

### Speed of follow-up

- Customers who open the abandoned cart email within the first hour after abandonment are 400% more likely to purchase. [L0261, 2025-26]
- Speed is critical because customers stay mentally engaged with the purchase for only minutes. Beyond 30 minutes, distractions shift focus, memory of the purchase fades, and competitors can capture the sale. [L0281, 2019+]
- Where possible, call the customer as soon as possible after abandonment, because speed matters most. [L0471, 2024]

### Manual follow-up of abandoned checkouts

Procedure A (2024):

1. Open the Shopify admin, go to Orders, then Abandoned checkouts. [L0471, 2024]
2. Count how many abandoned checkouts contain an email address or phone number. [L0471, 2024]
3. Send each of those customers a manual follow-up email. [L0471, 2024]
4. Where possible, call them as soon as possible after they abandon, because speed matters most. [L0471, 2024]

Procedure B (2023):

1. Go to Shopify > Orders > Abandoned Carts. [L0274, 2023]
2. Follow up with all abandoned cart customers via email, phone, or SMS. [L0274, 2023]
3. Message: `Noticed you started checkout, happy to help if you have questions.` [L0274, 2023]
4. This can recover 1-3 quick sales. [L0274, 2023]

- The Abandoned checkouts section lists customers who started checkout but did not complete the order. Checking this list regularly and following up is a way to recover lost sales. [L1302, 2020-26]

### Phone and SMS follow-up

- When calling an abandoned checkout customer, use this template. It treats the abandonment as a checkout problem rather than disinterest, which increases answer rates and conversion. [L0286, 2018]

```
Hi [customer name], I saw you were looking at a [product name] that would ship to [city/state]. You didn't complete your checkout-how can I help you finish the order?
```

- Follow-up can run by email, phone, or SMS. [L0274, 2023]
- Checkout contact setting: go to Settings > Checkout > Customer contact. Set the field to email address only if SMS retargeting is not working. Customers can then only enter an email at checkout, and the store can retarget them with Klaviyo. [L1216, undated]
- During a paid testing phase, always keep SMS Bump or an equivalent SMS flow active. Checkout drop-offs with a phone number can be retargeted by SMS. [L1216, undated]
- Without SMS Bump, collect email addresses at checkout so email retargeting can be used instead. [L1216, undated]

### Real-time alerts and tracking

Procedure:

1. Send automatic follow-up emails to customers with abandoned carts. [L0236, 2018]
2. Display targeted Facebook ads to the customer. [L0236, 2018]
3. Send a real-time notification including customer name, cart value, phone number, item details, and cart link. [L0236, 2018]
4. Log customer information to a Google Sheet for tracking. [L0236, 2018]

- Abandoned cart notification messages must include: customer name, total cart value, customer contact phone number, specific items in the cart, and a direct link to the abandoned cart. [L0236, 2018]
- Real-time Slack alerts add to email follow-ups and Facebook retargeting. They do not replace them. Using all three together maximizes recovery. [L0281, 2019+]
- Recovery tracking: create a second Zapier automation that checks incoming paid orders against the abandoned cart sheet in Google Sheets. If the customer appears in both, update the sheet with the recovery date and method (phone call, email, etc.). [L0286, 2018]

### Diagnosing clicks without abandoned checkouts

Procedure (2025):

1. In Shopify, open Orders and click Abandoned checkouts. [L0837, 2025]
2. If abandoned checkouts exist, email each customer personally from the owner's address, referencing the product and offering help. [L0837, 2025]
3. If there are none despite many clicks, check which keywords and search terms triggered the clicks in Google Ads. [L0837, 2025]
4. Adjust ad spend based on what the search terms show. [L0837, 2025]

### Why visitors leave

- Abandoned checkout visitors show high purchase intent but did not buy. The usual reasons are the overall offer (not only price, but any discount, bonus item, or ebook), the product price, and trust, since first-time visitors may doubt the store or be unsure whether to buy now. [L0605, undated]
- Common reasons for cart abandonment are high or unexpected shipping costs, complicated shipping rates or policies, and distractions such as a doorbell, a phone call, or a notification. Distraction cases are solved mainly by reminders. [L1208, 2025-26]
- Visitors who do not buy immediately are unlikely to return directly. The speaker estimated that about 90% will not bookmark the store and will instead search again and click a competitor or a paid ad, which costs more money. Close the sale on the first visit. [L1293, 2014]

### Reminders, retargeting, and second chances

- Visitors who leave without buying, and abandoned carts, should be followed up later with reminders so they can be reached once they are ready to buy. [L0582, 2020-26]
- Pop-up offers, flow emails, and SMS reminders are each a second chance to convert. Traffic from paid ads or organic content without retargeting messages is largely wasted when visitors leave without buying. [L0634, undated]
- Conversion rates increase when customers interact with the website multiple times. Retargeting and multi-touch strategies are therefore essential to move visitors closer to purchase. [L0257, 2020-26]
- Set up remarketing from the start with a small budget, around a few dollars per day, so visitors who did not buy can be reached again. [L0468, 2020]

### Exit-intent visitors

Procedure:

1. Check how many visitors entered their email on the exit-intent overlay. [L0963, 2022]
2. Email each person personally with an introduction as the owner. [L0963, 2022]
3. Invite a reply or call and offer help choosing the right product. [L0963, 2022]

### Abandoned cart email content

- Test changes to live flow emails through split tests whenever traffic allows. A low-traffic store cannot test reliably, so keep changes small and treat results as weak evidence. [L0567, 2025-26]
- Subject line effectiveness varies by audience and product type. Test formulas (question, how-to, scarcity, declaration, numbers, curiosity, personalized) across successive sends and compare open rates. [L0198, 2021-22]
- Open the first abandoned cart email with the logo, because the message must build trust before it asks the shopper to return to checkout. [L0567, 2025-26]
- Place the company logo at the top of every email in the same form it uses on the website, so readers know they are in the right place. [L0569, 2021-22]
- Generous spacing between blocks makes the email easier to scan. Avoid crowding sections. Changing the email width matters little compared with clean spacing. [L0567, 2025-26]
- Show third-party ratings as trust icons, for example a 4.9-star rating on Google and Trustpilot and a 5-star rating on a review site. Shoppers check reviews before buying, so placing the proof in the email saves them the search. [L0567, 2025-26]
- Test one to three customer testimonials as social proof, and import reviews automatically with Klaviyo Reviews where the account is connected. The testimonial test is planned as the next iteration of the email. [L0567, 2025-26]
- Answer the "why" with specific relevance to this customer rather than generic benefits. Specificity makes the email feel personally relevant rather than broadcast. Example: `We understand keeping your gear comfortable during long rides is what matters to you.` instead of `This product is great.` [L0261, 2025-26]
- USP pattern that also handles an objection: choose the selling point that answers a common doubt, so one line does two jobs. Shipping speed answers "when will it arrive". Own example: `Order before 2pm, shipped the same day` answers the delivery-time doubt. [L0567, 2025-26]
- Risk-reduction email pattern: give a review count and star rating as proof, invite the shopper to buy with confidence, then restate the return promise. Own examples: `Over 2,000 five-star reviews from riders across the country. Buy with confidence.` and `Rated 4.8 by 900 home cooks: try it risk-free.` [L0567, 2025-26]
- The risk-reduction email can show secure payment options as payment badges and point to social proof such as Instagram stories and customer reviews. Together these reassure a shopper worried about scams before they return to checkout. [L0567, 2025-26]

### Welcome series and personal outreach

- Manually email every new subscriber within one business day as the store owner. Personal outreach converts better than automation alone. [L0201, 2020-26]
- Structure in four parts: (1) acknowledge their signup, (2) introduce yourself as owner and briefly state your store's stage or focus, (3) ask what they need or whether they have questions, (4) invite them to reply directly. [L0201, 2020-26]
- Example 1: `Hi, just saw your signup. I'm [name], founder here. We focus on [category]-what brought you in?` [L0201, 2020-26]
- Example 2: `I'm [name], owner of [store]. Noticed you joined our list. What got your attention-any specific products or questions?` [L0201, 2020-26]
- Each email must feel personal and vary by subscriber. Do not include standard unsubscribe links or brand signatures. The goal is to start real conversations and learn what visitors want. [L0201, 2020-26]
- Add urgency and scarcity in the final emails of a welcome series, such as a countdown to offer expiry. This pushes subscribers who have not bought yet to act before the deadline. [L1470, 2025-26]
- Abandoned cart emails should run as a sequence in Klaviyo to recover checkouts that were not finished. [L1092, 2022]

### Reorder pages

- Reorder landing pages make it easy for existing customers to buy the same products again. The vendor presents them as a way to build repeat purchases and loyalty after the first order. [L0593, 2025-26]

## Live chat, forms and customer contact

### Why live chat and fast answers matter

- Live chat removes friction during the buying decision. It lets customers ask questions instantly, helps you close sales in real time, and is a more convenient alternative to contact forms or email. [L0151, undated]
- Live chat leads to extra sales because shoppers get answers in real time instead of waiting hours for an email reply. For a store built this way, live chat is almost a standard feature. [L0894, 2020-26]
- Live chat lets visitors with a question get an answer while still on the site, instead of searching for an email address, filling in a contact form and waiting. Answering in near real time can close sales that would otherwise be lost, so live chat matters from the early stage of a store. [L1311, 2020-26]
- A live chat button on the store lets shoppers ask last-minute questions on product pages. This recovers sales that would otherwise be lost, and real-time answers at the moment of doubt are the core benefit. [L0948, 2020-26]
- Shoppers expect fast answers and fast delivery, so a visible way to get instant responses helps convert browsers into buyers. Competitors offering next-day delivery make slow answers and 2-3 day shipping a conversion risk. [L1399, undated]
- A live chat widget, for example the Tidio Live Chat app, lets visitors ask questions and get answers immediately while browsing. This turns browsers into buyers, since shoppers expect instant answers and fast delivery. [L1400, undated]

### Choosing a chat tool

| Tool | What the source says | Source ids |
|---|---|---|
| Tidio | Live chat app for Shopify stores that lets you answer customer questions in real time. [L1358, undated] Used in the setup procedure below. [L0635, undated] | [L1358, undated; L1400, undated] |
| Shopify Inbox | Shopify's built-in chat tool for answering quick customer questions on the store. [L1358, undated] Free live chat that can replace paid chat tools. It supports pre-written answers triggered by keywords and is moving toward AI chat. [L1283, 2023] | [L1358, undated; L1283, 2023] |
| tawk.to (Talk2) | a recommended online chat option for Shopify. [L0682, 2021-22] | [L0682, 2021-22] |
| Gorgias | a more integrated and more expensive alternative for chat than tawk.to. [L0682, 2021-22] | [L0682, 2021-22] |

- Shopify Inbox is the free option. Tidio, tawk.to and Gorgias are paid or freemium tools, and Gorgias is the most integrated and most expensive of them. [L1283, 2023; L0682, 2021-22]

### Setting up Tidio

1. Install Tidio from the Shopify App Store. [L0635, undated]
2. Turn on the automations so the chat answers basic questions such as pricing and delivery times automatically. [L0635, undated]
3. Customize the widget appearance. [L0635, undated]
4. Under Chatbot, turn on the Welcome series under Increase sales so visitors receive a welcome message. [L0635, undated]
5. Under Increase sales, open Cart abandoned and use a template. [L0635, undated]
6. Set the discount in the abandoned cart flow. The video changes 15 to 10 percent. Accept, activate, choose a coupon such as WELCOME10 with a value of 10, and save. [L0635, undated]

### Chat widget design and placement

- In the theme customizer, open the App embeds section to change the chat widget. Options include the widget color, text color, button color, and the icon (chat bubble, smiley face or hand wave), with position set to bottom right and the lowest vertical position. [L1311, 2020-26]
- Pick the icon and colors that fit the site, since no single option is better. [L1311, 2020-26]
- A widget color that contrasts with the site's palette makes the chat icon easier to notice, which increases the chance of a click. Icon style is mostly a matter of brand fit and taste. [L1311, 2020-26]
- Once chat is active, the chat icon appears on every page of the storefront, so visitors can start a conversation from any page. [L1311, 2020-26]
- chat widgets must not open as a large bubble that covers more than a third of the screen on mobile. Configure them to open only after the visitor has read part of the page or has stayed on the page for a set time. [L1099, 2021-22]

### Chat greeting

- The greeting shown next to the chat icon can be edited in the widget settings, and a preview updates as the text changes. The default text is a generic greeting that invites questions and promises help. [L1311, 2020-26]
- Formula for a chat welcome message:
  - Name the store.
  - Invite the visitor to ask a specific question.
  - Add a short reassurance of a quick reply.
  - Keep it to one or two short sentences so it is easy to read in a small widget and gives the visitor a clear reason to click. [L1311, 2020-26]
- Example 1: [L1311, 2020-26]

```
Welcome to [Store Name]! Ask us anything about sizes, shipping or your order.
```

- Example 2: [L1311, 2020-26]

```
Hi, this is [Store Name]. Have a question before you buy? Send it over and we will reply shortly.
```

### Capturing customer details in chat

Two sources give different rules for when to ask for contact details. Use the rule that matches your response speed.

- **Email before chat (Shopify Inbox):** Shopify Inbox asks for the customer's email before chat. Keeping the email field is acceptable because people who ask buying questions usually give their email. The trade-off is fewer chat starts. [L0856, 2024]
- **Capture when you cannot reply quickly:** Live chat should capture the customer's name and email if you cannot reply within a minute or two, so you can follow up later. [L1283, 2023]
- **No capture when you reply quickly:** If you can respond quickly from your phone, this capture is not necessary. [L1283, 2023]
- **Which to use:** Keep the email gate if chat starts matter less than lead quality. Use the name and email capture only when a reply within a minute or two is not realistic. Drop it when you can answer from your phone in that window. [L0856, 2024; L1283, 2023]

### Recommendations in chat

- Personalized product recommendations given in chat, based on a shopper's stated needs such as skin type, can raise conversion rate and create upsell opportunities. The AI agent can suggest a fitting product directly in the conversation. [L0753, 2025-26]

### Response speed

- Answer live chat, phone calls and emails quickly, because a slow reply can lose a sale that is worth $1,000 or more in net profit over a month. [L0468, 2020]
- Customer service responsiveness affects conversions. When customers call or email with questions and receive no reply, they abandon the purchase. Monitor inquiries and respond quickly. [L0272, 2022]
- Early on, a store's conversion rate is driven by manual follow-up with every inquiry. Even one or two extra sales from inquiries can put a young store in profit. [L1092, 2022]
- In the first sales phase, handle every inbound contact manually. Answer the phone quickly, call back missed calls, and reply to every inquiry with real effort. This personal touch drives high conversion for a new store. [L0963, 2022]
- Make the response fast and convenient, because even an interested reader will procrastinate when responding costs effort. Offer a toll-free number, consider staffing it around the clock, and consider fax, website or email response options. [L1370, undated]

### Quote forms for trade and bulk buyers

- Custom quote forms built with Wufoo or Typeform trigger Zapier to send a private Slack message to the sales team and auto-populate a Google Sheets quote tracker. Respond to inquiries within minutes to maximize quote-to-order conversion. [L0286, 2018]
- Quote reply template: [L0360, 2024]

```
Hi [customer name],

Thank you so much for your inquiry. We work with many [customer type, e.g. interior designers] and we are more than happy to provide custom quotes for your business.

I am the owner of [store name]. Please reply to this email with the products you are interested in and the quantities, and I will get back to you with a quote.

Best regards,
[your name]
[store name]
```

- Trade program welcome template: [L0360, 2024]

```
Welcome to our trade program. We love working with [customer type]. If you ever need special orders or bulk orders, please email [trade email alias, e.g. trade@yourstore.com] or call [phone number].
```

### Phone numbers on the site

- Showing a phone number on the store tends to raise the conversion rate, even when visitors never call. It signals that the business can be reached and reduces doubt before buying. [L0700, 2020-26]
- Add a phone number on the store's contact page. Customers rarely call, but its presence builds trust, and the few who call are more likely to buy. [L0359, 2020]
- Place the business phone number in three spots: [L0700, 2020-26]
  - The header, which shows it on every page;
  - The footer, for visitors who look for contact details;
  - The contact page, for visitors who look for contact details.
- Set a voicemail message that thanks the caller, says you are away or helping another customer, and asks for a name, email address and inquiry. Even if you rarely answer the phone, the number builds trust and makes visitors more likely to buy. [L1090, 2021]

### Contact page

- A contact page should show several ways to reach the business, such as an email address, a phone number, and a physical address, alongside the contact form. This gives customers more than one option to get help. [L1264, 2021-22]
- The Contact Us page needs its Template suffix set to 'page.contact' instead of the default 'page' to display a contact form. The form shows fields for Name, Email, Phone Number, Message, and a SEND button. [L1264, 2021-22]
- Steps to add the contact form to the Contact Us page: [L1264, 2021-22]
  1. Open the Contact Us page under Online Store > Pages.
  2. Scroll to the Template section and open the Template suffix dropdown, which shows 'page' by default.
  3. Select 'page.contact'.
  4. Click Save.
  5. Click View page to check that the contact form appears.

### Mid-page "We are here to help" section

- Build a mid-page help section with this structure: [L1310, 2021-22]
  - a heading that says the business is ready to help customers reach their outcome;
  - a line naming the outcome;
  - contact details: phone, email and live chat;
  - one button linking to the contact page.
- Example: [L1310, 2021-22]

```
Ready to plan your next move?
[one line naming the goal]
Phone: [phone number] | Email: [email address] | Live chat
[Talk to our team]
```

### Personal video follow-up

- A personal video lets a lead see a face and hear a voice behind the brand. This makes a reply more likely than a generic reminder email. Most competitors do not send such videos, so this method also helps the store stand out. [L1049, 2025+]


Part 32 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/31-pop-up-design.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/33-site-speed-mobile-and-technical-hygiene.md
