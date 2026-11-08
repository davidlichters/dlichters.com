<!-- part of ecom/deep/17-customer-service-returns-and-chargebacks.md -->
Part 12 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/11-refunds-timing-cancellations.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/13-processing-returns-refunds-and-exchanges.md

### Compliance check and AI-generated drafts

- Procedure for checking the Contact Us page (after updating it in Shopify, Online Store > Pages > Contact Us):
  1. Copy the full page content and run it through Google Gemini to confirm it is compliant, in addition to the policy pages.
  2. Apply any changes Gemini recommends.
  3. Ask Gemini to re-check the page.
  [L0167, undated]
- A policy that does not say where the item should be sent is flagged as unclear. The policy should explicitly state that the return address is provided after the return is approved through an RMA (return merchandise authorization). [L0167, undated]
- An AI writing tool such as ChatGPT can generate a complete returns and exchanges policy when given the store's specific terms in a structured prompt. The output is then pasted directly into the Shopify refund policy page. [L0539, undated]
- Pasting the generated policy into Shopify with unfilled bracket placeholders or unchecked example values leaves customers with contradictory or meaningless terms. Check every value against the actual store process before publishing. [L0539, undated]
- Procedure: creating the shipping policy with an AI prompt (Settings > Policies > Shipping policy):
  1. Copy the full shipping policy prompt from its copywriter role line to the end.
  2. Paste it into ChatGPT or another AI tool.
  3. Enter the store name.
  4. Enter the support email in the format support@yourdomain.com.
  5. Set the shipping region to Continental United States only for a US business.
  6. Keep the default handling time of 3 to 5 business days, transit time of 3 to 7 business days and total delivery time of 7 to 12 business days.
  7. Leave the shipping partners at their default.
  8. Set the freight option to yes for large and heavy products.
  9. Delete the white glove delivery field unless it is confirmed available for your niche.
  10. For out of stock or custom orders, enter that customers are contacted with updated timelines.
  11. For delays, enter that customers are proactively notified when delays occur.
  12. Send the prompt, copy the generated policy and paste it into the Shipping policy in Shopify.
  13. Click Publish.
  [L1048, 2020-26]
- Procedure: creating the refund and return policy with an AI prompt (Settings > Policies > Refund and return policy):
  1. Click the Refund and return policy, which initially shows as "no policy set".
  2. Copy the full refund page prompt from its copywriter role line to the end.
  3. Paste it into ChatGPT or another AI tool.
  4. Enter the store name.
  5. Enter the support email in the format support@yourdomain.com.
  6. Set the return window to 30 days.
  7. Keep the restocking fee at none.
  8. Keep the defaults for return shipping, defective or wrong items, cancellation, damage reports and exchanges as listed below.
  9. Send the prompt and wait for the full output.
  10. Copy the generated policy and paste it into the policy section in Shopify, then save it.
  [L1048, 2020-26]
- Default settings for a new dropship store (refund policy): the customer pays for return shipping; the store pays for defective or wrong items and refunds the original shipping cost; orders canceled before shipping receive a full refund; exchanges use prepaid shipping labels. [L1048, 2020-26]
- For a new store, keep most refund and return settings at the default values, since the store is still choosing suppliers. Change them over time to match each supplier's actual return and cancellation policy. [L1048, 2020-26]
- The standard return window for a new dropship store is 30 days, because it usually follows supplier return policies, and the restocking fee is set to none. Adjust both values later once actual supplier policies are known. [L1048, 2020-26]
- Prompt for a plain-language returns and exchanges policy (use verbatim; the student inputs are filled in before sending):

```
Act as a senior eCommerce customer-experience writer. Draft a plain-language Returns & Exchanges Policy for a Shopify store that sells high-ticket goods sourced from domestic suppliers. The copy should ease buyer worry, state expectations openly, read as an established and dependable business, stay simple to follow, avoid legal jargon, never use the word “dropshipping,” and feel fair and centered on the customer. Voice: professional, reassuring, transparent, supportive, confident. Use short section headers and brief paragraphs. Length: 400 to 650 words. Skip filler, exaggeration, and boilerplate. It should read like a genuine brand's own page.

Include these sections: Policy Overview; Return & Exchange Eligibility; Return Window; Return Shipping Responsibility; How to Start a Return or Exchange (RMA Process); Damaged or Defective Items; Cancellations; Refund Processing Time; Our Error vs. Customer-Initiated Returns; Exchanges Process; Final Reassurance Statement.

Student inputs to fill in:
Store Name: [Example: Coastal Ridge Living]
Support Email Address: [Example: support@yourstore.com]
Return Window: [Example: 30 days from delivery]
Condition Requirements for Returns: [Example: New, unused, in original packaging, all accessories included]
Restocking Fee: [Example: None]
Who Pays Return Shipping for Buyer's Remorse: [Example: Customer is responsible]
Who Pays Return Shipping for Defective/Wrong Item: [Example: Store covers all shipping]
Original Shipping Cost Policy: [Example: Original shipping cost is refunded]
Refund Processing Time: [Example: Within 7 business days after item is received and inspected]
Cancellation Policy: [Example: Full refund if canceled before shipping]
Damage Reporting Window for Freight (LTL): [Example: 48 hours after delivery]
Damage Reporting Window for Small Parcel (UPS/FedEx): [Example: 15 days after delivery]
Exchange Shipping Policy: [Example: Customer responsible for return and reshipment costs]
Do You Use Prepaid Return Labels? (Yes/No): [Example: Yes, cost deducted from refund]

Final instruction: Using the details above, write a complete Returns & Exchanges Policy that feels fair and professional, reduces hesitation on high-ticket purchases, makes the brand feel safe to buy from, can be pasted straight into Shopify, and is unique each time it is generated. Use no placeholders. Give no explanations. Include no notes or headings such as "Policy Generator." Output only the finished policy copy.

Before writing, confirm every student input is filled in. If one is missing, request it instead of inventing a value. Apply the exact input values for the return window, condition requirements, restocking fee, shipping responsibility, refund time, cancellation rule, damage reporting windows, and exchange shipping, and place each one in the section where it belongs. Keep the Final Reassurance Statement to two or three sentences that include the support email address.
```
[L0539, undated]

- Reference: the prompt's required sections and student inputs are set out in [L0539, undated]. Use the input values exactly; do not invent a value for any missing input. [L0539, undated]
- A high-ticket returns policy should state the refund timeframe as a fixed number of business days from receipt and inspection (see Refunds), and keep the copy between 400 and 650 words with short section headers. [L0539, undated]
- High-ticket buyers hesitate most when they cannot see the cost and effort of a return. The policy should answer who pays return shipping, whether a restocking fee applies, and how the original shipping cost is treated. Clear answers lower purchase anxiety more than long reassurance text. [L0539, undated]
- Shipping-policy text with a template is in [L0377, 2020-26]. Return policy text templates are in [L0377, 2020-26] and [L1250, 2026]. [L0377, 2020-26; L1250, 2026]

one source sample returns and refund policy template (replace every bracket with the store's real term):

```
Return and Refund Policy

At [Your Store Name] our goal is that you're happy with what you bought. If something isn't right for you, we'll help. The rules are set out below.

1. Eligibility
- A returned item must be unused, kept in the state it arrived in, and still in its original packaging.
- You have [number of days] days from the purchase date to initiate a return.
- Any return needs a receipt or other proof of purchase.

2. Non-returnable items
Food and flowers (perishables), gift cards, and health and personal-care products cannot be sent back.

3. Refunds
- After we get your return, we check it and let you know where it stands. Approved refunds go back to the original payment method within 5-7 business days.
- Partial refunds: some cases qualify, such as items not in original condition, damaged goods, or goods sent back after the [number of days]-day window has closed.

4. Exchanges
- Replacements happen only for defective or damaged products. Email [your contact email] describing the problem and attaching proof of damage.

5. Return shipping
- Mail the product to [Your Return Address].
- The customer pays return postage, and that postage is not reimbursed.

6. Sale items
- Refunds apply only to full-price items; discounted goods are not refundable.

7. Contact
For questions about returns, refunds or exchanges, write to [your contact email]. We're glad to help with any concern.
```
[L1250, 2026]

- Sample refund and exchange rules are repeated in the template above. Replace every bracket with the store's real value before publishing. [L1250, 2026]

### Returns policy template

```
Returns
You have 14 days from the day you receive your item to request a return. [Set the number of days to match the return window in Settings > Policies > Return and cancellation rules.]
To qualify, the item must be in the condition you received it: unworn or unused, with tags still attached, and in its original packaging. You also need the receipt or proof of purchase.
To start a return, contact us at {Business email}. Returns must be sent back to the original shipping address.
If we accept your return, we will send you a return shipping label and instructions on how and where to ship the package. Items sent to us without a return request first will not be accepted.
For any question about returns, you can reach us at {Business email}.

Damages and Issues
Please check your order when it arrives. If the item is defective or damaged, or if you received the wrong item, contact us right away so we can review the problem and make it right.

Exceptions / Non-Returnable Items
Some items cannot be returned. These include perishable goods (such as food, flowers or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns of hazardous materials, flammable liquids or gases. If you have questions about a specific item, please get in touch.
We cannot accept returns on sale items or gift cards.

Exchanges
The quickest way to get the item you want is to return the one you have and, once that return is accepted, place a separate order for the new item.

European Union 14-Day Cooling Off Period
Despite the above, if the goods are shipped into the European Union, you may cancel or return your order within 14 days, for any reason and without giving a justification.
As stated above, the item must be in the condition you received it: unworn or unused, with tags, and in its original packaging. You also need the receipt or proof of purchase.

Refunds
We will notify you once we have received and inspected your return, and tell you whether the refund has been approved. If approved, the refund goes automatically to your original payment method within 10 business days.
Your bank or credit card company may need some time to process and post the refund. If more than 15 business days have passed since we approved your return, contact us at {Business email}.
```
[L1327, 2026]

### Return window and Smart SEO setup

- The one source template uses a 14-day return window from receipt, and tells you to set the number of days in Settings > Policies > Return and cancellation rules to match it. [L1327, 2026]
- one source's Smart SEO example uses 30 days as the window, so the number entered must match your actual policy, not the example. [L1337, 2020-26]

Setting the return policy in Smart SEO:

1. Turn on the return policy option. [L1337, 2020-26]
2. Enter the country where returns apply. [L1337, 2020-26]
3. Enter the return window in days, for example 30 for a 30-day return policy. [L1337, 2020-26]
4. Enter the return method, such as return by mail. [L1337, 2020-26]
5. Enter the return fees: free returns, or the customer pays for return shipping, matching your actual policy. [L1337, 2020-26]
6. Save. [L1337, 2020-26]

### Subscription, pre-order and try-before-you-buy cancellations

```
Some items in our store may be offered as a subscription, a pre-order or try before you buy. This cancellation policy explains how you can change or cancel these types of purchases.

Subscriptions
A subscription delivers items to you repeatedly, according to the subscription duration and frequency you choose. Your payment details are stored securely, and you will be charged for each delivery unless you choose to pay in advance.
Some subscriptions renew automatically at the end of their duration. If you do not want to renew, you can cancel.
You can change or cancel a subscription at any time. Your order confirmation emails contain links to your order, and you can manage your subscription from there.
See our returns policy for more details on returns and refunds.

Pre-orders
When you buy a pre-order, you are purchasing an out-of-stock or soon-to-be-available product that is not yet in inventory. We may collect no payment or a partial deposit at checkout, store your payment method, and then fulfill the order and charge the full or remaining amount at a later date.
You can cancel a partially paid pre-order that has not yet been fulfilled. Once an order has been fulfilled, it can no longer be cancelled, but you can request a full or partial refund.
See our returns policy for more details on returns and refunds.

Try Before You Buy
When you buy a try before you buy item, we authorize your payment method before fulfilling the order. You have a set amount of time to decide whether to keep the item.
Once that period has passed, if you have not returned the item, we will charge your payment method the full amount.
```
[L1327, 2026]

### Clear return terms in high-return markets

- In markets with a strong habit of buying and returning items, such as the UK, a fashion brand should make its return policy firm and clearly visible before checkout. [L1438, 2023+]
- Customers in such markets expect easy returns, so the policy needs to be stated plainly rather than left implied. [L1438, 2023+]

### Cancellation rights for pricing errors

- Use a written return and exchange policy that states you have the right to cancel and not fulfill an order when a pricing mistake was made. [L1472, 2022]
- Put this in your terms before any pricing error happens. [L1472, 2022]

#### Further details

- Use one general return policy, typically the policy most suppliers share, such as a 30-day return for undamaged products. Place outlier brand policies below the general policy on the shipping and returns page, including non-returnable or extended-return brands. [L0471, 2024]


Part 12 of 23 of "17. Customer Service Returns and Chargebacks: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks.md · Previous: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/11-refunds-timing-cancellations.md · Next: https://dlichters.com/ai/ecom/deep/17-customer-service-returns-and-chargebacks/13-processing-returns-refunds-and-exchanges.md
