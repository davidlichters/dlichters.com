<!-- part of ecom/deep/17-customer-service-returns-and-chargebacks.md -->
Part 22 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/21-post-sale-calls-reviews-and-customer-feedback.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/23-other-details.md

## Abandoned carts, leads and sales follow-up

### Who follows up, and how fast

- Sources differ on who makes the follow-up call. Each applies to the setup it describes:
  - The owner personally messages every email lead when the store is new and traffic is low. The message asks what they are interested in, offers to answer questions, and shows you want their business. This closes more sales and reveals what customers want. [L0201, 2020-26]
  - The store owner or a customer service rep can make the follow-up call to an abandoned checkout. It should happen as soon as possible after the abandonment. The goal is to ask whether something went wrong and fix it, not to push a sale. [L1522, 2021-22]
  - A VA handles the callbacks in this setup:

    1. Abandoned cart alerts are sent to Slack as soon as a cart is abandoned.
    2. The VA calls the customer back right away.
    3. The VA asks whether the customer had any difficulty or questions and tries to recover the sale.

    The owner did not measure the exact recovery rate. [L1473, 2019]

### Abandoned checkouts: where to find them and what to send

- In Shopify, go to Orders > Abandoned Checkouts to see every cart that was started but not completed. Follow up manually with every person on this list. [L0208, 2024+]
- Abandoned carts are the easiest sales to win, so following them up raises conversions without spending on ads. [L0255, 2025]
- Use Shopify's cart recovery email, which has a button that sends the reminder to the customer. Keep the default button and send it to all customers who entered an email address and did not complete the purchase. Template:

```
Email to send to customers who started checkout but did not finish, to be sent from the Shopify abandoned-checkout recovery email with its button: use the cart recovery email in Shopify, which contains a button to send the reminder to the customer. Keep the default button and send it to all customers who entered an email address and did not complete the purchase.
```

  [L1216, undated]
- Include a contact address in every abandoned cart email so shoppers with questions can reach you before they leave the checkout. [L0567, 2025-26]
- You can offer a discount in the abandoned cart email, for example 5% off. The source says this is promotional use and does not violate MAP restrictions on advertised pricing. [L0268, 2020]
- Bot-generated abandoned-cart emails can be annoying. In 2020 no simple fix was known, so keep checking your tools for an option to block them. [L1277, 2020]

### Contact timing rules

- Customer service must not contact customers after 8 pm in their time zone. For an abandoned cart, wait until the next morning to send the message or make the call. [L0964, 2023]
- Abandoned-cart calls or texts happen only during daytime, using the customer's time zone. [L0964, 2023]

### SMS and text messages

- Do not automate SMS text messages to customers for marketing or abandoned cart recovery. One operator faced significant legal liability for automating customer text outreach. [L0286, 2018]
- Sources differ on texting. [L0964, 2023] allows calls or texts to abandoned carts during daytime in the customer's time zone. [L0286, 2018] forbids automated texts. Both apply together: manual texts, sent only in the daytime window, never automated. [L0964, 2023; L0286, 2018]

### Live chat, phone and service leads

- Live chat and phone questions usually come from buyers who want to place an order or need a few answers to finish the purchase. Missed calls and chats cost real sales, so cover them as soon as traffic arrives. [L0467, 2019]
- For service clients, invite prospects to call or visit the office. In-person or live selling produced a much higher success rate than email, which mostly serves to introduce the operator. [L0440, 2023+]
- High average order values, around 2,000 dollars and above, bring more customers who want to order by phone. Answer the phone yourself first and hire help later. [L0806, 2024]

### Personal video follow-up

- The purpose of a video follow-up is to open a conversation, not to close the sale immediately. Once the lead replies, answer their specific concern, whether it is a question, a discount request, or a delivery date. [L1049, 2025+]
- Use the same Loom method for other lead inquiries, such as whether a product is in stock or a request for a bulk order quote. Pull up the relevant product, record a short video, and send the link. [L1049, 2025+]

### Phone orders

1. Add the product to the cart.
2. Collect the name, shipping address, billing address and payment method.
3. Enter the order into the checkout with the customer's email.
4. Process the order like a web order and follow it up the same way.

[L1283, 2023]

## Reputation management and complaint handling

### Principles of reputation work

- Poor reviews and complaints are inevitable at scale: one complaint in a thousand customers is normal. [L0790, 2017]
- Respond honestly, and interact with critics while the audience is still small enough to do so. [L0790, 2017]
- Public negative comments cannot be fully prevented, so the practical response is to resolve each customer's complaint quickly and directly. Consistent service reduces the number of unhappy buyers over time. [L0492, 2023+]
- Happy customers refer other customers, while unhappy customers search out every public channel to complain. [L1472, 2022]
- Customers judge a brand by how the retailer treats them. Suppliers approve retailers only if they will treat customers fairly, because a retailer represents the brand's name and must protect its reputation. [L1422, 2020-26]

### Response standard and speed

- Answer complaint emails quickly. Acknowledge the customer's frustration and offer a concrete solution such as a refund or fix. Response speed is part of the solution and prevents disputes. [L1141, 2026]
- Reply to negative reviews within 24 hours. Acknowledge the specific problem, state the action taken and give a direct contact route. [L1164, 2026]
- Trustpilot shows a company's reply rate and reply time. The example brand replied to 99% of negative reviews, typically within 24 hours. Use these figures as the benchmark for your own response standard. [L1164, 2026]
- Update customers proactively about shipping delays, before they have to ask. [L0637, 2023+]
- Reply fast to Facebook comments, DMs and Messenger messages. Fast replies signal good business practice to Meta and can help move the business up a tier. [L0637, 2023+]

### Triage of negative reviews

- Older advice, still valid as a sequence. Handle a negative review as follows: [L0968, 2021]
  1. Decide whether it comes from a real customer, a competitor or a troll. [L0968, 2021]
  2. For a real customer with a fixable problem, try to fix it calmly. [L0968, 2021]
  3. For fake or unjustified reviews, request removal. [L0968, 2021]
  4. For customers who cannot be satisfied, stop engaging and focus on good customers. [L0968, 2021]
- The business cannot edit or delete reviews itself. Its only direct action on a review is a reply. [L0694, 2024]
- Removal, as described in step 3 above, applies only to fake or unjustified reviews. [L0968, 2021; L0694, 2024]

### Reply templates

Reply to negative reviews and complaint emails with this template, filling in the brackets:

```text
Hi [Customer name], thank you for your review. We are sorry about [the specific issue, e.g. the unexpected charge, the difficulty cancelling your subscription, the wrong order]. We understand how frustrating that is, and it is not the experience we want for you. We have reviewed your order and [the action taken, e.g. cancelled your subscription, processed a full refund of [amount] for order [order number], refunded the remaining balance]. The refund should appear on your original payment method within [5-10] business days, depending on your bank's processing time. You are welcome to keep [the package you received] as a gesture of goodwill. If you have any other questions, contact us at [support email] or reply directly to our email and we will help. Kind regards, [Agent name], [Title]
```

[L1164, 2026]

### Trustpilot: analysing the profile

1. Read the star rating, the review count and the AI review summary. [L1164, 2026]
2. Filter the reviews to 1, 2 and 3 stars to find product flaws and service problems. [L1164, 2026]
3. Export or copy the filtered low-star reviews into a CSV file. Ask an AI assistant such as Claude or ChatGPT to run a full gap analysis of the complaint themes. [L1164, 2026]
4. Interpret the pattern:
   - When low-star reviews focus on cancellations, unexpected recurring shipments and refunds rather than the product itself, the product is probably acceptable. The real gap is service and subscription handling. [L1164, 2026]

### Trustpilot: handling a negative profile

Procedure for a negative Trustpilot profile created about your store: [L0694, 2024]

1. Check whether the business has claimed the profile. An unclaimed profile can be claimed by opening a new profile and proving ownership. [L0694, 2024]
2. Accept that reviews cannot be edited or deleted by the business. You can only reply to them. [L0694, 2024]
3. Send customers to your review page by email, so that new reviews improve the rating and the profile looks better. [L0694, 2024]

### Subscription and cancellation complaints

- Making cancellation hard is the most damaging pattern. This includes routing customers to a promotion instead of cancelling, or refusing to change an order after it is placed. Offer a self-service cancellation and order-change path. [L1164, 2026]

### Public comments and ad moderation

- Leaving comments unfiltered can damage an account. A comment section full of complaints or negative remarks can kill momentum and sales, so filter comments before a video goes viral. [L1429, 2022]
- Procedure for moderating comments on the page: [L1431, 2020+]
  1. Hide negative or inappropriate comments on the page. [L1431, 2020+]
  2. Assign a moderator to the page to handle comments. [L1431, 2020+]
  3. Reply to customer messages quickly using prepared templates. [L1431, 2020+]
- Respond to comments and messages on Facebook, Instagram and Messenger when running social ads, because these are often pre-purchase questions. [L1259, undated]
- Ignoring negative comments on ads and leaving them unanswered led to bad reviews piling up and the Facebook page being blocked. Answer comments and address complaints promptly. [L1131, 2018+]
- Procedure for filtering comments on every promoted video: [L1444, 2022]
  1. Add a list of banned words to the comment filter, and add words specific to your product. [L1444, 2022]
  2. If a comment gets through the filter, add variations of the same word to the filter. [L1444, 2022]
  3. If the same person posts many variations of comments, block that profile. [L1444, 2022]
- Older advice: reply to every genuine YouTube comment, including those expressing disagreement, because replies count as engagement. Ignore trolls or answer them lightly, and never argue. [L1511, 2021-22]

### Imitators and public notices

Template for a notice to customers when imitators appear:

```text
Draft a tactful notice to customers explaining that imitators are appearing, that our brand is the original, and that we have no partner ties with them. Anyone buying from us is buying from the genuine brand. Phrase it delicately so it does not come across as boasting.
```

[L0353, 2023]

### Consumer complaint services

| Platform | What it mainly contains | How to use it | Source |
|---|---|---|---|
| Yelp | Mostly complaints | Public review platform, mainly used to complain | [L1472, 2022] |
| Google Reviews | Both good and bad reviews | Can go either way | [L1472, 2022] |
| Better Business Bureau | Mainly complaints | Limited value for building trust; resolve issues directly before they reach it | [L1472, 2022] |

- Focus your reputation effort on the platforms where your customers are most active. [L1472, 2022]
- Prioritise resolving issues directly with the customer before they reach any public channel. [L1472, 2022]
- When a customer files a complaint with a consumer complaint service:
  - Reply once through that service, in a calm and factual way. [L1472, 2022]
  - Keep a copy of every message. [L1472, 2022]
  - Write the reply as if the customer will read it, because the service forwards it to the customer. [L1472, 2022]
  - Do not argue about fault. [L1472, 2022]

### Case: a complaint service filing after a pricing error

A store sold an appliance priced at about $1,000 too low because its price update was late. When the order came in, the store emailed the buyer that the item was out of stock. The buyer insisted on receiving the product and filed a complaint with a small business complaint service. The store offered a full refund, apologised again, and stopped the exchange. The complaint went off the web after about 30 days with no further action. [L1472, 2022]

### Recovering customers and turning complaints into improvements

Procedure for customers who left a negative review or complaint: [L1377, 2022+]

1. Contact each customer who left a negative review or complaint. [L1377, 2022+]
2. Apologise and say the problem was a mistake on your side. [L1377, 2022+]
3. Offer a $5 to $10 credit or a small free product to rebuild trust. [L1377, 2022+]
4. Ask the customer for feedback through a short survey about the product and delivery. [L1377, 2022+]

### Mistakes that cause lasting reputation damage

- Collecting customer payments without sending the orders to the supplier, then closing the store, leads customers to complain to the supplier and damages its online reputation. [L1422, 2020-26]
- Ignoring negative comments on ads and leaving them unanswered led to bad reviews piling up and the Facebook page being blocked. [L1131, 2018+]
- Making cancellation hard, through promotion redirects or refusing order changes after placement, is the most damaging service pattern. [L1164, 2026]

## Documentation, record-keeping and operational safeguards

### Order and communication records

- Contact the customer first in any refund or dispute, then the supplier or carrier. Keep records of all communication, because they serve as chargeback evidence. [L0856, 2024]

### Evidence for disputes

- Keep complete records of every order, shipment and refund in Shopify. These records are the evidence needed to win a buyer appeal, and refund requests from platforms such as Facebook can be contested with them. [L1128, 2023]
- Keep detailed records of tracking numbers, supplier legal names, locations (including exact China addresses) and company names. Payment processors require these in compliance investigations. [L0324, 2025+]

### Supplier information

- Do not share customer email addresses with suppliers without caution. Suppliers will likely use them for marketing, and customers did not consent to receive supplier communications. [L0245, 2020]
- Send customers only the supplier's order email and return policy. The company does not create its own supplier contracts. Sign the supplier's agreement and return it right away. ** [L0834, 2021]
- As the store owner, you handle customer complaints and payment disputes, not the supplier. Agree return and payment terms with the supplier in advance. [L0660, 2019+]
- Set the defective return allowance on a supplier application to 100 percent, because a defective product is always replaced. [L0855, 2023]

### Supplier relations and escalation

- If a supplier does not respond after a few days, keep following up until you get a yes or no answer. [L0855, 2023]
- When an order is lost or damaged, do not yell, curse or send hostile emails to the supplier, even if the fault is theirs. Work through the problem calmly and respectfully. Suppliers who are treated with disrespect will not give you special treatment, even if you sell a lot. [L0939, 2020-26]
- If you cannot reach the decision maker at a supplier, ask the receptionist to connect you to a sales representative. Sales representatives have more product knowledge than call-center staff. [L0941, 2022]

### Insurance

- The sources differ on whether general liability insurance is required or only usual.
  - Optional view: general liability insurance is optional and not needed to open a business. It can be considered based on business assets. Get quotes from a large insurer or from the insurer already used for a home policy. [L0941, 2022]
  - Usual-type view: general liability insurance is the usual type for an online store. ** [L1277, 2020]
- Be cautious with insurance brokers, and review what you are actually charged over time, since premiums can rise a lot after the first year. ** [L1277, 2020]
- Limited liability insurance becomes more sensible once you have assets to protect. Consult a professional before deciding. ** [L1277, 2020]

### Sales tax and payouts

- Enable sales tax for each state before taking orders from that state. An order placed before tax is set up may need to be cancelled and redone, and refunds can cost real money, as in one case that cost 40 USD. ** [L1090, 2021]
- A refunded or cancelled order can create a negative pending payout in Shopify. After logging in, check the options shown in Shopify Payments before paying out the balance. ** [L1090, 2021]

### Refund exposure and cash reserves

- Letting backorders stretch for months while income continues to be spent on normal costs and owner pay can leave no money for refunds or supplier bills. Track refund exposure from pending orders against the cash set aside for them. ** [L1200, 2021-22]

### Sensitive files and AI-accessible folders

- Dragging personal or financial documents into an AI-accessible folder exposes them to the agent and creates real risk. [L0366, 2025-26]
- Keep such files outside the agent folder and out of any folder Codex can open. [L0366, 2025-26]


Part 22 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/21-post-sale-calls-reviews-and-customer-feedback.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/23-other-details.md
