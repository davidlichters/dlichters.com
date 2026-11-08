<!-- part of ecom/deep/17-customer-service-returns-and-chargebacks.md -->
Part 19 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/18-non-delivery-claims-and-older-guidance.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/20-post-purchase-communication-and-customer-gratitude.md

## Automation, help desk and self-service tools

### Self-service and proactive support principles

- Omni-channel support brings customer touchpoints from email, social media, phone and SMS into one platform. This lets you serve customers on their preferred channel and move a conversation to a faster channel, such as from email to SMS. [L0401, 2025-26]
- Self-service resources (FAQ pages, knowledge bases and chat) let customers find answers themselves. The source states that 88% of customers prefer self-service because it is quick and hassle-free. Self-service also reduces repetitive tickets in the inbox. [L0401, 2025-26]
- Proactive support means reaching out before customers contact you, for example with live chat campaigns while they browse the site, or with direct messages to social media followers. This creates chances to answer questions, offer discounts and build happier customers. [L0401, 2025-26]
- A shopper who cannot get a fast answer about product fit, shipping or account changes often leaves the store without buying. Instant automated replies across the whole buying journey can keep these visits from ending in lost sales. [L0753, 2025-26]
- Self-service quick responses should cover frequent questions that can be answered without a human, so the support team is not distracted from more significant issues. [L0752, 2025-26]

### Support channel hierarchy and tool choice

- Start with the chat and automation add-on features (flow builder, quick response flows), then the help center, then the contact form. Tickets that still reach the contact form and could have been solved by the flow builder or quick response flows are handled by rules and auto responses. [L0752, 2025-26]
- Use quick response flows for questions with one fixed answer, where one click gives the reply. Use the flow builder only when the right answer depends on a customer detail such as days since the order, region or product, because it asks follow-up questions and branches. Both can run in the same chat widget. [L0752, 2025-26]

### Gorgias Automate and the automation ratio

- Gorgias Automate can automate up to 30% of support tickets on average, which lowers first response time and cost. Some brands report higher rates, but 30% is the planning figure. [L0752, 2025-26]

### Gorgias AI agent

- Gorgias is a conversational AI platform for e-commerce stores, built both to answer support questions and to drive sales through one-to-one chat conversations. Its AI agent works as an automated front-line team member. [L0753, 2025-26]
- AI chatbots can handle customer service 24/7. The stated purpose is to reduce refunds and increase customer satisfaction. [L1459, 2026]
- AI reply generators inside a live chat app can handle standard customer questions automatically, which reduces response time for common requests. [L1416, 2023+]
- Routine requests, such as changing a shipping address or modifying a subscription, can be resolved automatically by the AI agent without a human handling them. This shortens response times for simple inquiries. [L0753, 2025-26]
- When the AI agent hands a conversation over to a human agent, the human sees the full customer history, profile and order data already in the same place. The human can answer personally without asking the customer to repeat information. [L0753, 2025-26]
- Quality control of a Gorgias AI support agent runs in this order:
  1. Gorgias runs rigorous quality checks on the agent. [L0753, 2025-26]
  2. The store's own team reviews the agent, so that responses are accurate and match the brand voice. [L0753, 2025-26]

### Quick response flows

- Quick response flows are set up under `Automation > Quick response flows` (Automation Add-on). Up to 6 buttons can be displayed in the chat widget with common questions. A click gives an instant answer. If the customer needs more help, a ticket is created for an agent. [L0752, 2025-26]
- Buttons appear in the order set in the list. Add new flows with `+ Add Quick Response Flow`. [L0752, 2025-26]
- Build quick response flows in this order: [L0752, 2025-26]
  1. Analyze the first 30 to 45 days of tickets after launch to find the questions asked most often. [L0752, 2025-26]
  2. Pick the six most frequent questions. Examples include product mineral-based check, vegan and cruelty-free status, how to create an account, how to pick the right shade, track and manage orders, and return policy or flow builder questions. [L0752, 2025-26]
  3. Create one quick response flow per question in `Automation > Quick response flows`. [L0752, 2025-26]
  4. Use all six button slots as soon as the brand has enough recurring questions. [L0752, 2025-26]

### Finding the most frequent customer questions

Follow these steps to find the questions that quick response flows and flow builder logic should cover: [L0752, 2025-26]

1. Review the historical ticket backlog and aggregate the most common questions. [L0752, 2025-26]
2. For a new brand without history, list the typical questions: [L0752, 2025-26]
   - subscription changes
   - shipping and return policy
   - discount codes and how to get a discount
   - loyalty program
   - restock dates for out-of-stock items
   - changing or cancelling an order
   - return fees
   - product sizing
   - product differences versus competitors
   - ingredients
   - product usage
3. Check the FAQ pages of brands in the same industry for inspiration. [L0752, 2025-26]
4. Trigger chat for out-of-stock products so customers ask about restock timing and get an answer. [L0752, 2025-26]

### Order management flows

- Order management flows are set up under `Automation > Order management flows` (Automation Add-on). They let customers act on their order from the chat widget. [L0752, 2025-26]
- Customers can use order management flows to:
  - view tracking information
  - get responses for unfulfilled orders
  - return orders
  - cancel orders
  - report an order issue
  [L0752, 2025-26]
- It is highly recommended to have both quick response flows and order management flows turned on. [L0752, 2025-26]
- Returns in the order management flow can link out to a return portal (for example Loop Returns) instead of sending an automatic reply. Returns are accepted only if the order was delivered less than 30 days ago under that brand's return policy. [L0752, 2025-26]
- Order cancellation through a chat flow is very difficult with a 3PL, so the cancel order flow was turned off in the example brand. [L0752, 2025-26]
- If the cancel flow is enabled, it can be set to trigger by order status (still processing fulfillment, unfulfilled or pending delivery), with a response text for each status. [L0752, 2025-26]
- The report order issue flow lets the customer choose from scenario options such as "I didn't get my refund" or "I'd like to reorder some items". Each scenario can be built out for self-service. [L0752, 2025-26]

### Order status checks and tracking

- To check an order, the shopper enters their email address and receives a six-digit code. The code unlocks the order so they can see and change it. [L0752, 2025-26]
- For orders that have not been packed or sent out yet, the system displays a special note to manage expectations about shipping dates or holdups. A sample note reads: `Your order has not been packed and shipped yet. Processing usually takes one to two days.` [L0752, 2025-26]
- Orders still waiting to be fulfilled generally need 24 to 48 hours to be processed. [L0752, 2025-26]
- After the customer enters their email and the six-digit code, the track order view shows:
  - The fulfillment count (for example 1 of 1)
  - The carrier (for example USPS)
  - The tracking number
  - a status timeline such as In transit or Out for delivery, with date, time and location
  - The shipping address
  [L0752, 2025-26]
- Unfulfilled orders show the custom message instead of a timeline. [L0752, 2025-26]
- At high order volume, automate order tracking and review requests with a dashboard, and check it daily to make sure nothing gets missed. [L1277, 2020]

### Flow builder

- The flow builder supports multiple choice, free text reply collection, file upload, and an automated answer as the end step. The flow ends after the final answer. [L0752, 2025-26]
- The conditional pattern asks a condition (for example, days since order), and each answer leads to a different automated response. The customer gets the right policy answer without an agent. [L0752, 2025-26]
- Return-window example, as described in the source:

| Step | Content | Source |
|---|---|---|
| Question | "How many days has it been since you placed your order?" | [L0752, 2025-26] |
| Answer "More than 30 days" | Reply that free returns and exchanges are only offered within 30 days | [L0752, 2025-26] |
| Answer "30 days or less" | Reply that returns or exchanges can be started, with a link to the return portal | [L0752, 2025-26] |

- The same logic works for regional shipping policies or product guidance. [L0752, 2025-26]
- Shipping-policy example, as described in the source:

| Step | Content | Source |
|---|---|---|
| Question | "Which region are you in?" | [L0752, 2025-26] |
| Answer "United States" | Reply with the US shipping time and cost | [L0752, 2025-26] |
| Answer "International" | Reply with the international shipping time and cost, with a link to the shipping policy | [L0752, 2025-26] |

- Recommended flow builder use cases beyond returns are product recommendations, size guides, warranty policy, shipping policy and subscription management. [L0752, 2025-26]

Return-window reply template (US store example), full text:

```
Question to the customer: How many days has it been since you placed your order? Answer 'More than 30 days' reply: Sorry, we can only offer free returns and exchanges within 30 days of ordering for customers in the US. Answer '30 days or less' reply: You can start your return or exchange here: [return portal link]. Replace the 30-day window and the region with your own return policy.
```

[L0752, 2025-26]

Subscription management flow template, full text:

```
Subscription management flow template for the flow builder. Ask 'How can we help with your subscription?' with these options: 'Change frequency', 'Change products', 'Update delivery details', 'Change payment info', 'Cancel subscription'. Each option leads to an automated answer or a link to the relevant page. Use the flow builder to add the conditional logic that follows each choice.
```

[L0752, 2025-26]

### Help center

- The help center is set up under `Settings > Channels > Help Center` in Gorgias. You can create multiple help centers. Setup fields are: [L0752, 2025-26]
  - email to integrate with
  - subdomain
  - help center name
  - connection to a Shopify store
- Help center content is organized in categories (for example Products, Returns, Orders & Shipping, Account), each with articles. Each category has a title, image and description. [L0752, 2025-26]
- Top action buttons can include Track order, Return order, Cancel order, Report issue and Get more information. [L0752, 2025-26]
- Configuration options include: contact form on or off, chat widget on or off, appearance, preferences, header elements such as navigation links back to the main site, and publishing on a chosen subdomain. [L0752, 2025-26]
- Link the help center in the website footer and possibly the header. [L0752, 2025-26]
- Build many help center categories and articles rather than few. More articles improve self-service. [L0752, 2025-26]
- Articles can be referenced in chat support responses to push customers into the self-service flow. [L0752, 2025-26]

### Rules and auto-close

- Rules are set up under `Automation > Rules`. They are triggered in the order listed. Create rules with Create Rule. [L0752, 2025-26]

| Rule type | What it does | Example names | Source |
|---|---|---|---|
| Auto reply | Sends an automatic answer for matching inbound messages | `(Auto Reply) Send tracking information email` (order status or tracking requests); `(Auto Reply) Automate return request emails` | [L0752, 2025-26] |
| Auto close | Sets ticket status to closed and adds a tag when the message body or subject contains defined keywords | `(Auto Close) Auto-close spam emails` | [L0752, 2025-26] |
| Auto tag | Tags messages | `(Auto Tag) Identify social questions and leads`; `(Auto Tag) Identify intents and sentiments` | [L0752, 2025-26] |

- Auto close rules suit social mention tickets (for example from Instagram tracking) that need no agent response. When the ticket is created and the body or subject contains set keywords, the ticket is closed and tagged automatically. [L0752, 2025-26]

### Chatbot setup in other tools

- Tidio chatbots can be set up with three automations:
  1. Cart abandoned: set a coupon name (for example `save 15`) and a discount value (for example 15), click save, check that the coupon is created in Shopify, then save and activate. [L0477, undated]
  2. Product recommendation: use the template as is, then save and activate. [L0477, undated]
  3. AI responder: add a conversation topic for order status, such as "where is my order" or "when will my product arrive", with a prepared reply. Add your email address, then save and activate. [L0477, undated]

### Reference resources for support questions

- The one source Help Desk Database was listed as a new resource in the December 2020 coaching call, presented as a reference for customer support questions. The lesson gives no further detail. [L0426, 2020]

### Zendesk caveat

- Zendesk is not recommended for most small stores. It becomes very expensive over time and creates lock-in, which makes switching costly as more data piles up. [L1281, 2022]

### AI reply drafting

- AI can help draft email replies, but customers should not be handed to AI to talk to directly. Human review remains necessary for live conversations. [L1287, 2025]
- Compose.ai is a free Google Chrome extension that writes email replies, including customer support answers, in Gmail. Install it from the Chrome extension store. A blue button then appears in the reply field. [L1428, undated]
- Compose.ai can write replies in languages other than English. Ask in the instruction for the reply in the target language, for example French or German. The app interface can also be set to German. Check the language quality yourself before sending. [L1428, undated]

Writing an email reply with Compose.ai in Gmail:

1. Install the Compose.ai Google Chrome extension. [L1428, undated]
2. Open the email you want to answer and click reply. [L1428, undated]
3. Click the blue Compose.ai button on the right side of the reply field. [L1428, undated]
4. Type a short instruction of what the reply should say, for example the main point or the fact to communicate. [L1428, undated]
5. The tool reads the incoming email, detects its topic and writes a short reply. [L1428, undated]
6. Choose one of the suggested versions by clicking it. [L1428, undated]
7. Review the text and click send. [L1428, undated]

- Example input for a customer asking where an order is: state that the product is on its way and that delivery takes about two weeks. Compose.ai turns this short instruction into a complete, polite reply. [L1428, undated]

### Third-party tool support

- Problems with a third-party software tool should be taken to that tool's official support channel, not to individual users who offer to help in direct messages. Community members who redirect you to a support channel are the safer path. [L1442, 2026]

### Reassurance email flow

Reassurance email flow built in Klaviyo (set up in Shopify) to reduce disputes and refunds: [L1128, 2023]

1. Right after fulfillment, email the customer that the order has shipped and will arrive in about 7 to 14 days, sometimes up to 20 days. [L1128, 2023]
2. After 7 days, send a second email confirming the product is on its way and that everything is fine. [L1128, 2023]
3. After about 3 weeks, send a third email asking whether the product has arrived. If not, ask the customer to contact you so the issue can be checked together. [L1128, 2023]


Part 19 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/18-non-delivery-claims-and-older-guidance.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/20-post-purchase-communication-and-customer-gratitude.md
