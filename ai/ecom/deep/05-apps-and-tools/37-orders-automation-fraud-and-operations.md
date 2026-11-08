<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 37 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/36-conversion-testing-site-speed-and-monitoring.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/38-shipment-tracking-and-customer-notifications.md

## Orders, Automation, Fraud and Operations

### Automation principles and sequencing

- Automate only after you have processed orders by hand for a few days to a few weeks and understand each step. Automating steps you do not yet understand produces the wrong logic. [L0934, 2023]
- Use Zapier for simple automated flows. Hand tasks too complex to automate, such as detailed product uploads, to virtual assistants. Use human assistants for multi-step tasks. [L1441, 2018]
- Automation can recover abandoned sales through follow-up and retargeting, monitor order status and trigger customer reviews, distribute content to social channels, instantly complete repetitive tasks, maintain customer records, transcribe media files, and generate new content. [L0236, 2018]
- In practice, automation can recover abandoned carts, track all order statuses, automatically request and collect product reviews, post new content to social media without manual work, and execute any repetitive business task in seconds without additional instruction. [L0285, 2020-26]
- Zapier is the central automation engine. It connects Shopify, Facebook, LinkedIn, Google Sheets, Trello and Slack to manage orders, communications, content distribution and customer tracking without manual intervention. [L0236, 2018]
- Zapier connects apps and automates steps. One example used it to send new orders to Trello and to send automatic emails based on quiz results on the website. It looks intimidating at first but can be learned. [L0337, 2022]
- Shopify is the core platform of a dropshipping store and the base all automations connect to. Its data (orders, customers, products) is the starting point for most automation work. [L0437, 2020-26]

### Platforms, costs and choice of tool

**Shopify Flow**
- Shopify Flow is a free app that simplifies building and editing automations compared with the Messaging app interface. Install it via Marketing > Automations > Install. [L0282, 2020-26]

**Zapier basics**
- Zapier (zapier.com) connects applications with automated workflows called "Zaps". [L0283, 2020-26]
- Each automation is a Zap made of one trigger and one or more actions or steps. [L0737, 2020-26]
- Zapier supports hundreds of pre-built integrations. Connect each platform once (for example, enter the Shopify subdomain); the connection stays active for all future Zaps that use that platform. [L0286, 2018]
- Authentication with each platform is required once, after which the connection is maintained permanently. [L0286, 2018]
- Zapier's screens and terms change over time. Check each step against the current Zapier and Shopify interface before following older setup instructions. *Older (2022).* [L1281, 2022]
- Zapier's Premium plan costs $20 per month. [L0286, 2018]
- The free plan does not include the Shopify integration. The plan that includes it costs $20 per month and is the only paid tool in this basic automation stack. [L0437, 2020-26]
- The 2023 comparison cites Zapier at $50 per month. Use $50 as the 2023 price point for that comparison, and the $20 Premium figure for the plan with the Shopify integration. Check the current price before budgeting, because the sources differ. [L0251, 2023; L0286, 2018; L0437, 2020-26]
- The 2023 lesson's comparison table lists IntegralMat at $19.99 per month and IFTTT as alternatives. Both provide similar capabilities for connecting applications, automating email, data transfers and notifications. Compare pricing and the specific integrations you need before choosing. [L0251, 2023]
- The one source comparison describes Zapier per-automation cost as "a couple dollars per automation per month". [L0287, 2025-26]

**Zapier Gmail triggers and Slack actions**
- Zapier offers four Gmail-based triggers:
  - **New Email & Polling:** activates when messages arrive in your specified mailbox.
  - **New Email Matching Search Polling:** restricts triggering to emails that meet search criteria you define, such as a specific sender domain.
  - **New Label & Polling:** fires when you apply a label to an email.
  - **New Labeled Conversation & Polling:** triggers once when a label is first added to an email thread. It does not re-trigger if more messages appear in that thread. [L0287, 2025-26]
- When you test a Gmail trigger, Zapier automatically loads your previous emails from that mailbox as sample data. You do not need to trigger events manually; Zapier retrieves recent historical emails so you can check the logic before publishing. [L0287, 2025-26]
- Slack actions available in Zapier workflows include:
  - **Retrieve Thread Message:** extracts all messages from a specific conversation.
  - **Send Channel Message:** posts to public channels, with optional delivery scheduling.
  - **Send Direct Message:** routes private messages to a user or yourself through Slackbot, and supports scheduled sending.
  - **Send Private Channel Message:** targets restricted channels.
  - The integration also supports message deletion, channel creation, reminder scheduling and channel lookup. [L0287, 2025-26]
- Zapier's Slack integration sends real-time private messages containing lead details when forms are submitted, giving immediate visibility on mobile or desktop. [L0284, 2020-26]
- Zapier's **Attachments setting:** when connecting to services that send file attachments, you choose whether attachments auto-open for processing or remain clickable links for manual team review. [L0286, 2018]

**AI steps in Zapier**
- In Zapier's AI by Zapier step, models marked with a Lightning icon (such as GPT-4-1 mini and GPT-4-1 nano) are free to use. You do not need a paid OpenAI API account or your own ChatGPT credentials for them. [L0287, 2025-26]

**Why an API matters**
- An API is the connection tool that lets one application command another. Zapier uses APIs to connect Gmail, ChatGPT and Slack. Each integration works because the API gives the automation platform permission to trigger actions in that app, such as creating a task in ClickUp, sending a message in ChatGPT or posting a Slack message. [L0287, 2025-26]

**Platform comparison**

| Platform | Best for | Cost | Learning curve | Native integrations | Practical for simple tasks |
|---|---|---|---|---|---|
| Zapier | Beginners | Most expensive (couple dollars per automation per month) | Easiest | Most app connections | Yes, very intuitive |
| Make.com | Experienced users | Substantially cheaper than Zapier | Still accessible but slower to build | Fewer connections | No, more annoying setup for basic tasks like text splitting or time conversion |
| N8N | Developers only | Free or very cheap if self-hosted | Very steep (needs API, webhook, JSON, MCP knowledge) | Flexible | No, designed for low-code development, not business users |

[L0287, 2025-26]

- If you are brand new to automation, start with Zapier because it is the most intuitive. After gaining experience with several automations, move to Make.com to reduce costs. Switch to N8N only when you have many dozens of automations running at once and want to self-host to eliminate platform fees. [L0287, 2025-26]
- Plan to switch from Zapier to Make.com when you have dozens of automations running at once. At that scale, Zapier's per-automation monthly costs add up significantly, while Make.com's pricing becomes more economical. Move to N8N only at very large numbers of automations or if you focus on AI agents. [L0287, 2025-26]
- Make.com handles basic data transformations more awkwardly than Zapier. Splitting or reformatting text, converting code between formats, and transforming timestamps between time zones each require extra steps. These small friction points add up in complex automations, so Make.com feels slower despite its lower cost. [L0287, 2025-26]
- N8N is the only one of these platforms that supports self-hosting. You run the whole platform on your own computer or laptop instead of N8N's cloud servers, so all processing stays on your device. Self-hosting is possible because N8N is open source. It removes monthly subscription costs, making it free or very inexpensive once you run many automations, unlike Zapier and Make.com, which charge per automation. [L0287, 2025-26]
- N8N has the best AI agent functionality of the three main platforms. If you focus heavily on AI agents, N8N is the superior choice despite its steep learning curve, which requires knowledge of APIs, webhooks, JSON and MCP. [L0287, 2025-26]
- Make.com is the mid-tier option and N8N the developer option; the platform guidance above applies to IFTTT as well, which the 2023 comparison lists as a Zapier alternative. [L0251, 2023; L0287, 2025-26]

**Cost and tool stack (reference table)**

| Tool | Cost | Purpose in Workflow |
|---|---|---|
| Zapier Premium | $20/month | Connects Shopify to Slack, Trello, Google Sheets, Rev.com, WordPress, and social platforms via automated Zaps |
| Slack Free | Free | Receives Zapier alerts and team messaging |
| Trello Free | Free | Order status board and tracking with five lists |
| Google Sheets | Free | Automated customer data logging and measurement |
| Rev.com | $1/minute | Audio and video transcription |
| Grasshopper | Varies | 1-800 business phone number with SMS and calling app |
| BuzzSumo | Varies | Content research and trend identification |
| Buffer | Varies | Social media scheduling for non-automated posts |

[L0286, 2018]

- The basic automation stack is Shopify, Zapier, Slack, Trello and Google Sheets. Zapier is the only paid tool in it. [L0437, 2020-26; L0286, 2018]

### Abandoned cart alerts to Slack

**Purpose and timing**
- Slack sends real-time notifications to desktop and smartphone apps. Use it to alert the shop owner or a team member the moment a cart is abandoned, so the phone follow-up can happen within minutes. [L0281, 2019+]
- A real-time Slack notification each time a customer abandons checkout lets the store owner follow up immediately. Slack works like Discord for team alerts. [L0471, 2024]
- Zapier checks Shopify every 5 minutes for new abandoned carts and forwards customer data directly to Slack. [L0281, 2019+]
- Maximum latency between cart abandonment and the Slack notification is 5 minutes. [L0281, 2019+]
- Set "Abandoned cart age in hours" to 0 in Zapier's Shopify trigger. This sends the notification immediately on abandonment, with no delay. [L0281, 2019+; L0286, 2018]
- The Zapier wait setting for cart data should also be 0 hours, so the data arrives immediately. [L0737, 2020-26]

**Who receives the alert**
- The Slack recipient can be anyone on the support team: the shop owner, a virtual assistant, an employee or a family member helping with phone follow-up. Choose who receives the Slack message when you configure the automation. [L0281, 2019+]
- The Slack free plan receives real-time Zapier notifications, including abandoned cart alerts with customer name, phone number, email, order value and checkout link. [L0286, 2018]

**Slack message settings**
- Auto expand links: no.
- Link username and channel names: yes. [L0281, 2019+]

**Message template**

```
Hi [Customer First Name], [Customer Last Name] just abandoned a cart with the value of [Cart Value]. [Customer First Name] can be reached at [Customer Phone Number]. The order was for [Product Name], and it would be shipping to [Shipping State]. Here is their abandoned checkout URL: [Abandoned Checkout URL]. Good luck on the call.
```

[L0281, 2019+]

**Example message**
- The Slack bot can be named Steve, with a tuxedo emoji as its profile picture. It alerts the team when customers abandon checkouts. Each message should include customer name, cart total, phone number, product details, shipping destination and the checkout link. Example output: "Hi, Alex, John Smith just abandoned a cart with the value of $49. John can be reached at 55555. The order was for an official one source hoodie, and it would be shipping to New York. Here is their abandoned checkout URL. Good luck on the call." [L0281, 2019+]

**Setup procedure**
1. Create a new Zap in Zapier.
2. Select Shopify as the trigger source.
3. Choose "New abandoned cart" from Shopify trigger options.
4. Authenticate with your Shopify store login credentials.
5. Set "Abandoned cart age in hours" to 0.
6. Click "Test this step" to verify connection with an existing abandoned cart from your store; if none exist, manually create and abandon a test order in Shopify.
7. Add an action by clicking the plus symbol to create a new step.
8. Select Slack as the action platform.
9. Choose "Send a channel message" as the Slack action.
10. Authenticate with your Slack login and select your Slack workspace.
11. Create a new Slack channel for these notifications (e.g., "Steve") or select an existing channel.
12. Click in the message text area to customize the notification.
13. Use the plus button next to the text field to insert dynamic data fields from the abandoned cart: customer first name, customer last name, cart value, customer phone number, product name, shipping state, and abandoned checkout URL.
14. Write the message: Hi [First Name], [Last Name] just abandoned a cart with the value of [Amount]. [First Name] can be reached at [Phone]. The order was for [Product], and it would be shipping to [State]. Here is their abandoned checkout URL: [URL]. Good luck on the call.
15. Set "Bot name" to a custom name (e.g., "Steve").
16. Select a bot icon to represent the automation in Slack.
17. Verify that "Auto expand links" is set to no and "Link username and channel names" is set to yes.
18. Click "Continue" to preview the message based on your test abandoned cart data.
19. Click "Send test to Slack" to verify the message displays correctly in your Slack channel.
20. Once verified, turn the Zap on by clicking the toggle switch at the top (default is off).
21. The automation now runs continuously: Zapier checks for new abandoned carts every 5 minutes and immediately sends a Slack message with all customer data.

[L0281, 2019+]

**Related follow-up options**
- Zapier can be used with Shopify abandoned checkout events to trigger notifications alongside email tools such as Klaviyo or Shopify Email. Before relying on it, opt in with a test customer and place a test order to confirm each Zap fires. [L1114, 2023]
- Zapier can connect Shopify so that an abandoned cart automatically places the customer into a Minichat Messenger sequence. The connection is set up once and then runs automatically. [L1243, 2017]
- Zapier automates follow-ups for abandoned checkouts. Keep the subscription only if it brings sales. If it does not pay for itself after a while, cancel it and follow up manually. [L0806, 2024]
- Zapier's Shopify and Slack connection for abandoned carts is covered in the course's automation module. [L0964, 2023]
- Shopify's abandoned carts report, under Orders, lists customers who started checkout without buying. It is useful for calling those customers to learn why they left. *Older (2021).* [L0801, 2021]

### Abandoned cart logging in Google Sheets

**Overview**
- Zapier connects Shopify to Google Sheets without code. [L0737, 2020-26]
- Google Sheets (free) automatically logs customer information from Zapier when carts are abandoned or orders are placed. It captures email, name, phone, creation date, contact status and recovery status for team visibility. [L0286, 2018]

**First Zap: new abandoned cart creates a sheet row**
1. Log into Zapier and create a new zap.
2. Set the trigger to Shopify and choose 'new abandoned cart'.
3. Connect the Shopify store and select the store to link.
4. In the options, set the wait time before data is passed through to 0 hours so the data arrives immediately.
5. Add an action: click the plus, click action, and choose 'create spreadsheet row' in Google Sheets.
6. Log into your Google account to connect it to the zap.
7. Select the spreadsheet 'abandoned cart tracking sheet' and the worksheet 'abandoned carts'.
8. Map every field (date, name, phone number, email, cart value, products, shipping, link to cart) to the matching data from the test order.
9. Click continue, then click test this step.
10. A successful test pushes the data into the sheet, and the phone team receives a Slack notification at the same time.

[L0737, 2020-26]

**Rules for the sheet**
- Zapier matches each mapped field to a sheet header by name. Headers must be typed exactly as the fields are named in the mapping. Mismatched headers stop the correct data from landing in the right column. [L0737, 2020-26]
- Leave the Recovered and Notes fields unmapped in the create-row step. Team members fill these in by hand, and mapping them would overwrite or pre-fill fields that need human input. [L0737, 2020-26]
- Run the test step with a test order before activating a zap, so you can confirm each field lands in the correct column. Fix any mismatch before the automation runs on real carts. [L0737, 2020-26]
- Choosing the wrong spreadsheet or worksheet in Zapier sends rows to the wrong place. A worksheet can have any name, as long as the correct one is selected in the zap. [L0737, 2020-26]

**Second Zap: paid order updates the sheet**
1. Create a new zap and name it along the lines of 'paid order to update abandoned cart Google tracking sheet'.
2. Set the trigger to Shopify and choose 'paid order' instead of 'new abandoned cart', then select the store.
3. Add a step called Search in Google Sheets to look for an existing row.
4. Select the spreadsheet 'abandoned cart tracking sheet' and the worksheet 'abandoned carts'.
5. Set the search column to Email and match it against the email of the latest paid order.
6. If no matching row is found, nothing happens and the zap ends without changing the sheet.
7. If a matching row is found, add an update action for that row and fill the Recovered column with the date of the purchase.
8. Keep calls and notes manual; only the Recovered date is automated.

[L0737, 2020-26]

- The paid-order Zap matches the sheet only by exact email address. A customer who places the paid order with a different email will not have the Recovered column updated. Enter the recovery date by hand in that case. [L0737, 2020-26]

### Order flow: Shopify to suppliers

**Trigger rules**
- Use the Shopify trigger "New Paid Orders" so the automation runs only after an order is marked paid. Rejected or unpaid orders do not trigger it. Refunds require cancelling the order separately. *Older (2021).* [L0469, 2021]
- Zap 1 trigger conditions: payment status marked as paid; order status any; fulfillment status any. This fires once, when payment is first marked as paid, not repeatedly. [L0292, 2020-26]

**Vendor filtering**
- The vendor filter Zap uses Shopify as the order source, Filter by Zapier for vendor matching, and Gmail for sending email. You already have Shopify and Gmail; you only need a Zapier account. [L0283, 2020-26]
- When you set up the vendor filter, Zapier pulls sample orders from your Shopify store and displays all available data fields (vendor name, product name, SKU, customer details and more). Use these samples to build and verify the filter condition, for example "line item vendor text exactly matches one source merch", before the Zap processes live orders. [L0283, 2020-26]

**Multi-product orders**
- Zapier order processing can handle orders with multiple products. The lesson demo used a single-product order, so adjust the workflow to process each line item in a multi-product order. *Older (2020).* [L0961, 2020]

**Fulfilment handoff**
- Zapier is used for most store automations, including order forwarding to suppliers. Shopify's Mark as fulfilled action and Klaviyo tracking emails complete the process from order to customer notification. *Older (2020).* [L0468, 2020]
- Zapier can automate order processing to suppliers. Choose whether it automatically captures payment or only pre-authorizes, based on how often you run into inventory issues with suppliers. *Older (2021).* [L1090, 2021]

**Payment capture**
- Use "Authorize but not capture" payments in Shopify's payment settings. The card is checked for funds but not charged until the team verifies stock and captures the payment, after which the order is processed. [L0964, 2023]
- Setting path: Settings > Payments > Payment capture. Set to "Authorize only" (Authorize, do not capture). Verify stock, then capture the payment and process the order. [L0964, 2023]

### Order status boards in Trello

**Overview**
- Trello (Trello.com) is a free visual project management tool with a Boards → Lists → Cards hierarchy. Cards can be dragged between lists manually or moved via Zapier automation. It gives a visual overview of order progress without daily administrative work. [L0292, 2020-26]
- Trello can track orders on cards, with automation that moves a card to delivered after a set delay. [L0359, 2020]
- Trello can show where each order sits in the process, from order placed to shipped, as order volume grows. [L0970, 2023]
- Trello can be used to organise tasks as boards and cards. In an automated setup, it can track orders and collect customer review requests so nothing is missed. [L0437, 2020-26]

**Five-list structure**

| Order | List name |
|---|---|
| 1 | Paid orders |
| 2 | Sent to supplier |
| 3 | Shipped orders |
| 4 | Delivered and pending review |
| 5 | Reviewed |

Orders progress through these lists as fulfilment stages change. [L0292, 2020-26; L0286, 2018]

**Two-Zap workflow**
- Order tracking automation runs Shopify → Zapier → Trello. Two Zaps handle the workflow: Zap 1 creates cards when orders reach paid status; Zap 2 moves cards to shipped when fulfilment status changes. This removes manual card creation and movement. [L0292, 2020-26]
- Zap 1 (Shopify paid order → create Trello order card): card name "Order [order number] [order date]". The description includes customer info (name, email, date placed), order info (product name, brand, SKU), customer notes (if entered at checkout) and ship-to (full address). Board: select your board. List: paid orders. Position: top, so new cards appear above existing cards. [L0292, 2020-26]
- Zap 2 (Shopify shipped order → move Trello card): trigger "Order update in Shopify", with payment status paid and fulfilment status shipped. Action: search for the existing order card in Trello and move it to the shipped orders list. Cards transition from paid orders to shipped when Shopify marks fulfilment as shipped. [L0292, 2020-26]
- Card data auto-populates from Shopify with order number, customer details, SKU, notes and shipping address. [L0286, 2018]
- Before activating a Zap, click Test This Step to verify it. For Zap 1, a successful test creates a sample card on your Trello board, confirming the Shopify-to-Trello connection. For Zap 2, the test demonstrates card movement. Review the result, then click Finish or Turn On. [L0292, 2020-26]

**Card fields and comments**
- Each Trello card has two date fields for follow-up deadlines, for example "customer will send product photo by October 29". When a deadline passes, Trello sends reminders to team members to check whether the promised follow-up was completed or needs escalation. [L0286, 2018]
- Use the comment section of a card to record order status changes, backorder dates and follow-ups, for example "Contacted supplier on backorder until October 29". Each comment is timestamped with the team member's name. [L0286, 2018]

**Alternative board**
- Asana can serve as the order board. New orders land automatically in the first column, and the VA moves each card to the next column as its status changes. Each card carries a due date, and overdue follow-ups show in red, so the owner can spot them without asking. Asana also handles task assignment to team members and to the owner. [L1473, 2019]


Part 37 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/36-conversion-testing-site-speed-and-monitoring.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/38-shipment-tracking-and-customer-notifications.md
