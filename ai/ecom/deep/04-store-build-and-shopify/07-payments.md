<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 7 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/06-core-admin-settings-general-checkout-payments-and.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/08-shipping-taxes-markets-currency-and-international.md

### Payments

#### Choosing a processor
- Shopify Payments is a built-in payment processor with the most straightforward integration. Implement it when your region is supported. [L0270, 2021] (Geographic list is older, one source: Australia, Austria, Belgium, Canada, Denmark, Germany, Hong Kong, Ireland, Italy, Japan, Netherlands, New Zealand, Singapore, Spain, Sweden, UK and US.)
- Shopify integrates with most payment processors. A store can be built with a gateway other than Shopify Payments. Shopify Payments is recommended because it is the easiest option. [L0967, 2020]
- Use a checkout-related Shopify payment processor (Shopify Payments or Stripe). Check the main payment processor of the target country before launch. [L1259, undated]
- Stripe can be used instead where Shopify Payments is not available. [L0678, 2023]
- Other payment providers can be used if Shopify integrates with them. The Payments page links to the list of all providers via See all other providers. The recommended setup is Shopify Payments plus PayPal. [L1305, 2020-26]
- Accept at least one processor for credit cards and PayPal. PayPal performs particularly well in the USA and the top four markets. [L1259, undated]
- The lesson reports that adding PayPal to a single-processor checkout roughly doubled conversion in one case. [L1259, undated]
- Crypto acceptance: it can be added through Coinbase Commerce, BitPay or CoinPayments.net in a few minutes, but it historically did not generate sales for the business. [L0834, 2021]

#### Activating Shopify Payments
- The only required action at the initial setup stage is activating Shopify Payments. The goal is to learn where settings are located rather than to configure heavily. [L0096, undated]
- Settings > Payments: click Activate Shopify payments and enter bank account details for payouts. Customers can then pay by card, debit, Apple Pay and Google Pay. The setup takes a few minutes. [L1305, 2020-26; L1111, 2020]
- Accepted methods: credit cards, debit cards, Apple Pay and Google Pay. [L1062, 2020-26]
- Shopify Payments deposits funds within 2 business days of order completion. No upfront money is needed to submit orders to suppliers in the first month. [L0249, 2022]
- Business or personal account: either a personal checking account or a business checking account works to accept payments. Business checking accounts are easy to open (phone or online, typically 20 minutes) and are recommended for long-term operations so that account numbers do not change later. [L0243, 2019]
- Shopify Payments shows as Shop Pay, which is the first option listed under Settings > Payments. [L1285, 2024]
- Enabled payment methods must match those declared in Google Merchant Center. Enable or disable Apple Pay, Google Pay and other options under Settings > Checkout > Payment methods. [L0255, 2025]
- Apple Pay shows at checkout when Shopify Payments or Stripe is active. Some themes can hide it. After switching themes, place a real test payment to confirm the button appears. [L0773, 2023]
- Payment methods shown in the footer: tick the checkboxes under payment methods for every method you accept. Each ticked method then appears automatically in the store footer. [L1050, 2020-26; L0377, 2020-26]
- Test mode: the payment section of Shopify has an Enable test mode option that checks whether transactions go through. One seller skipped it in favour of a dummy order with an immediate refund. [L1381, 2022]
- Payments are set under Settings > Payments. [L1090, 2021]

#### PayPal
- Settings > Payments > PayPal: click Complete account setup to link PayPal to the store. Customers can then choose PayPal at checkout alongside Shopify Payments. [L1305, 2020-26]
- PayPal must be on a business account before it links to Shopify. If PayPal is not connected after opening the business account, retry the connection in Shopify payment settings. [L0834, 2021]
- Shopify has support documentation on integrating PayPal as a payment method. It was shared in the September 2025 coaching call. [L1286, 2025]

#### Payment capture method
- Capture options: automatic captures and charges immediately. Manual authorizes the card but holds the charge until you confirm stock. [L1111, 2020]
- Set the payment capture method from automatically at checkout to manually (Manage > manually). Orders then only authorize funds and are not charged until you capture them. This prevents charges on test or demo orders. [L1305, 2020-26]
- Mistake: leaving payment capture on automatic lets any test or demo purchase charge the buyer's card immediately. Set it to manual before the store is public. [L1305, 2020-26]
- With manual capture, each new order triggers a notification email to the account email. The payment must be captured manually in Shopify to charge the card. [L1305, 2020-26]
- Authorization windows (conflict between sources):
  - Shopify payment authorization defaults to seven days and cannot be extended on Shopify Payments. If a product will arrive after that window, plan a deposit or payment-capture workflow in advance. [L1090, 2021]
  - Shopify payment capture windows vary by card, so a manual capture must be completed within the authorization window. Check the timeframe before relying on a long hold. [L1111, 2020]
  - Use seven days as the planning figure for Shopify Payments, and check the card-specific window before relying on any longer hold. [L1090, 2021; L1111, 2020]

#### Authorization-only workflows
- Set up payment authorizations (not capture) initially using the payment authorization setting. This holds funds on the customer's card without charging them. You can confirm stock with the supplier and then decide whether to capture or release the payment. [L0249, 2022]
- Procedure: Capturing payments only after stock is confirmed:
  1. In the Shopify payment settings, turn on the setting that authorizes the card without capturing the payment.
  2. When a customer orders, the card is authorized, which confirms that the funds are available.
  3. Confirm with the supplier that the product is in stock.
  4. Click the capture payment button on the order to charge the customer.
  5. Process the order with the supplier once the payment is captured. [L0852, 2020]
- Deposit workflow for an out-of-stock item whose authorization will expire:
  - Step 1: ask the customer if they will pay a 50% deposit to hold the order.
  - Step 2: charge that half to the card.
  - Step 3: submit the order to the supplier.
  - Step 4: when the product arrives, charge the remaining balance and send the invoice before shipping. [L1090, 2021]

#### Manual payment methods, draft orders and invoices
- Shopify draft orders can be used to create a customer invoice before the order is paid. This lets a store owner send a payable order to a customer manually. [L0851, 2025]
- Continue using Shopify draft orders to improve customer service and checkout completion, despite their conversion tracking limitation. They make operations easier and are an effective way for customers to finalize orders, especially in high-ticket businesses. [L0256, 2021-22]
- Procedure: To accept ACH or wire transfer payments:
  1. Create draft order in Shopify for customer.
  2. In draft order notes section, include routing number and checking account number for wire/ACH transfer.
  3. Send draft order to customer.
  4. Customer sends ACH or wire transfer to your bank.
  5. Once funds received, manually mark order as paid in Shopify.
  6. Note: ACH and wire transfers have no fraud protection like credit cards. [L0255, 2025]
- Procedure: For split payment orders:
  1. Create first draft order for half of total amount.
  2. Create second draft order for remaining balance.
  3. Send both draft orders to customer.
  4. Specify payment method for each (e.g., draft 1 on card, draft 2 via wire).
  5. Customer pays both.
  6. Mark orders as paid when payments received. [L0255, 2025]
- Phone order process:
  1. Customer calls and tells you product they want.
  2. You go to website, pull up product page.
  3. Add to cart through your store.
  4. Walk through checkout with customer on phone.
  5. Collect name and payment details as customer reads them to you. [L0268, 2020]
- Partial refund for return shipping: when a return is accepted and the customer is charged a return shipping fee, issue a partial refund in Shopify to deduct the fee. [L1094, 2023]

#### Shop Pay Installments
- Shop Pay Installments is a Shopify Payments feature that lets customers split purchases into 2 or 4 interest-free installments, with the payment option selected at checkout. [L0153, undated]
- On product pages, messaging such as "Pay in 4 interest-free payments" displays below the product price, along with the calculated installment amount. Both adjust automatically based on the product price. [L0153, undated]
- The toggle applies to the whole store, not to individual products. Once switched on, installment messages can appear on every eligible product page. [L1296, 2020-26]
- All payment method changes save automatically in Shopify Payments. No additional configuration is required after enabling Shop Pay Installments. [L0153, undated]
- The option turns on in roughly 30 seconds of clicking. It can take a few minutes to appear on storefront pages after the toggle is switched on. [L1295, 2020-26]
- Once active, the financing message appears across the store's pages, including product pages, the cart and checkout. No separate theme editing is needed. [L1295, 2020-26]
- Activation path: Settings > Payments, click Manage under Shopify Payments, then Manage payment methods, locate Shop Pay Installments and toggle it ON. [L0153, undated]
- Procedure: Enable Shop Pay Installments in the Shopify admin:
  1. Log in to the Shopify admin.
  2. Click the settings gear icon in the bottom left of the admin navigation.
  3. Click Payments.
  4. Under Shopify Payments, click Manage.
  5. Click Manage payment methods.
  6. Find Shop Pay Installments in the list. If it is off, click the slider and drag it to the right to turn it on.
  7. If a save prompt appears, save the settings.
  8. Wait a few minutes, then open any product page on the store and refresh it.
  9. Confirm that the financing message appears on the product page, and check that it also shows in the cart and at checkout. [L1295, 2020-26]
- Troubleshooting: if the financing message does not show right after enabling, the most likely cause is that the page has not refreshed yet. Give the change a few minutes and refresh the product page before assuming the setup failed. [L1295, 2020-26]
- Testing Shop Pay Installments against Affirm:
  1. Keep the Affirm account open.
  2. Turn off Affirm on the site for two weeks.
  3. Turn on Shop Pay Installments for the same period.
  4. Compare conversion results at the end of the two weeks and keep the option that performs better. [L0970, 2023]
- Shop Pay as installment financing: Shop Pay is sufficient for installment options, and no separate Klarna setup is required. [L0969, 2022]
- Klarna or Afterpay can be added when the product price is above 60 USD. [L1259, undated]
- Conflict: [L0969, 2022] (2022) says no separate Klarna setup is needed, while [L1259, undated] adds Klarna or Afterpay above 60 USD. Use Shop Pay Installments as the base, and add Klarna or Afterpay for products above 60 USD. [L0969, 2022; L1259, undated]

#### Settings order for payments
- Payments must be configured before ads. Once payments are configured and saved, the checkout is live and visitors can place real orders. [L0677, 2021-22]
- Complete the Shopify settings in this order before running any ads: General, Payments, Shipping and delivery, Taxes, then Legal. [L0677, 2021-22]

### Shipping, taxes and duties (boundary of this section)
- Do not adjust taxes or duties in the shipping settings yet. Tax configuration is done in a later stage of the setup. [L0096, undated]
- Shipping procedure : delete default rates, create Custom flat rate Free shipping at $0, delete the International zone. [L1305, 2020-26]
- Taxes and duties: no changes at this stage. [L1305, 2020-26]

### Orders, fulfilment and notifications

#### Order notification emails
- Settings > Orders: configure which email addresses receive order notifications and which address emails should be sent from. The customer can choose to receive notifications at any configured email. [L0270, 2021]
- Set your notification email in Settings > Orders. The Shopify mobile app can play a sound with every sale. [L0834, 2021]
- Customer order notes field at checkout: leave it on at first, then remove it if customers never use it. [L0855, 2023]
- Use the Shopify order number and the order's information for customer purchase receipts. If a customer does not receive the automatic Shopify order email, resend it from the order page or send a screenshot of the order. [L0964, 2023]

#### Order details
- Clicking into an order in Shopify Admin shows the products bought, any notes the customer added at checkout, the customer's name, email and address, and the customer's full purchase history with the store. [L1302, 2020-26]

#### Fulfilment and tracking
- Shopify Admin > Fulfillment screen > Tracking Information section: select the shipping service and enter the tracking number before marking the order as fulfilled. [L1291, undated]
- Mistake: marking an order as fulfilled sends the shipping notice to the customer straight away. Do not mark it fulfilled before the shipping service and tracking number are entered. [L1291, undated]
- Procedure: send tracking information to a customer when the supplier ships:
  1. Get the tracking number from the supplier.
  2. Open the customer's order in the Shopify admin.
  3. Attach the tracking number to the order so the customer receives updates. [L0803, 2022]
- Procedure: orders split across multiple suppliers:
  1. Receive order.
  2. Mark as partially fulfilled in Shopify.
  3. Add tracking number for first shipment, send first email.
  4. Mark remaining items as fulfilled when second shipment ships.
  5. Customer receives separate tracking email for each shipment. [L0270, 2021]
- Fulfilment request notification: turn on the option that notifies your fulfilment service provider when an order is marked as fulfilled. Use it when an outside 3PL or fulfilment partner needs the order update automatically instead of by hand. [L1327, 2026]
- Install a fulfilment app via Apps > Sales channel settings > Shopify App Store. Search for the app name, then click Install. Once installed, the app shows Open app. [L0685, undated]

#### Draft orders and receipts (cross-reference)
- Use the draft order and receipt rules above for manual orders. [L0851, 2025; L0964, 2023]

### Locations

#### Default location and plan limits
- Settings > Locations: the default single location is the address entered at sign-up. It is sufficient at launch. Extra locations are only needed for inventory tracking across several warehouses or suppliers. [L1305, 2020-26]
- Shopify's Locations page shows how many active locations the plan allows, for example "Using 1 of 10 active locations available on your plan". A Point of Sale subscription is included with the plan, so in-person selling can start from any active location. [L1250, 2026]
- Up to 1000 locations are allowed on the Shopify Basic plan. [L1305, 2020-26]
- Conflict: the Locations page example shows a limit of 10 [L1250, 2026], while [L1305, 2020-26] gives up to 1000 on Basic. Read the number shown on the Locations page for the plan in use. [L1250, 2026; L1305, 2020-26]
- Keep the default location at the foundation stage. A location only needs to be changed when stock is held or sold from a different address or when in-person selling is added. [L1327, 2026]

#### Dropshipping rules
- Warehouse locations in Shopify should reflect the primary fulfilment location, typically the home office for dropshipping. Setting one per supplier is unnecessary, because the supplier location determines the actual shipping, not the Shopify warehouse setting. [L0274, 2023]
- Set the Shopify default location to the country from which you actually ship. If all orders ship from the US, set the Shopify location to USA so it matches the shipping origin in Google Merchant Center. [L0835, 2023]
- Point of sale is not used for a dropshipping store, since it requires a physical card reader. [L1305, 2020-26]

### Customer notifications and sender email
- Settings > Notifications contains the sender email settings. Do not change them yet. They are updated once the business email setup is finished. [L0096, undated]
- The sender email address can be changed later once business email addresses (for example @yourstore.com) exist. Add the logo and brand colours to email templates. The default templates (for example order confirmation) can be edited, but editing is not required. [L1305, 2020-26]
- The sender email in Settings > General is the address customers see when the store emails them. It may not appear in the same way in every customer's inbox. [L0677, 2021-22]
- Revisit brand, notifications and business contact details once the logo, brand colours, business phone, business email and business address are in place. [L1305, 2020-26]
- Policies are completed during an earlier step of the setup, so no action is needed in Settings > Policies. [L0096, undated]
- one source 2026 places Policies in the foundation order before any sales channel is opened. [L1327, 2026]

### Gift cards
- Set an expiration date for gift cards rather than never expiring, so pending gift cards do not become old liabilities when the business is sold. Apple Wallet passes are optional and not a priority. [L1305, 2020-26]
- Shopify has a built-in gift card feature. Customers choose the amount they want to pay, and the code is sent by email to be used by the buyer or given to someone else. [L1439, 2024+]

### Apps, sales channels and domains

#### Apps and sales channels: what they are
- The Apps item is at the bottom of the left navigation menu. It lists every app already installed and shows recommendations for further apps. [L1301, 2020-26]
- Shopify Settings has a combined page for apps and sales channels, reached from the Apps page via its app and sales channel settings. [L1301, 2020-26]
- Apps add features to the store. Sales channels are platforms through which the store sells. Both are managed from the same Shopify account. [L1301, 2020-26]
- The Online Store is the default sales channel, because it is where orders are accepted. Add other sales channels only when the store needs to sell somewhere else. [L1301, 2020-26]
- Most sales channels used in practice are native to Shopify and free to activate. Only some third-party channels or add-ons carry a cost. [L1301, 2020-26]
- At the time of the lesson, the sales channels available included TikTok, Etsy, the Shopify Marketplace and multi-feeds for Google Shopping. Check Shopify's current sales channel list before relying on them. [L1301, 2020-26]
- Shopify sales channels connect the store to traffic platforms such as Facebook, Instagram and Google from within the same account. [L1304, 2020-26]

#### Starting point
- Settings > Sales channels: keep only the Online Store active at the foundation stage. [L1327, 2026; L0096, undated]
- Open the Online Store channel and confirm it shows the store name and the primary domain before adding any other sales channel. [L1327, 2026]
- If Point of Sale appears, click the three dots next to it and choose Uninstall, because this business model does not use it. [L0096, undated; L1305, 2020-26]
- Keep Online store and Email. Add sales channels such as Facebook, Instagram or Google later as the store grows. [L1305, 2020-26]
- Shop is an optional sales channel that can stay enabled. Point of sale is not needed and can be removed under Settings > Apps and sales channels. [L0971, 2024]
- Do not connect sales channels such as Facebook, Shopify Chat or Wholesale before the store is launched and selling products. Add them later under Sales channels. [L1292, 2021-22]
- Sales channels vary by country. Facebook is free to add (Facebook fees may apply), and the Wholesale channel is unavailable in some setups. [L1292, 2021-22]
- Among Shopify's sales channels, Google is generally a poor choice for a new store, while Messenger is a better alternative. eBay can be connected in Australia. [L1292, 2021-22]
- Conflict: one source 2021-22 calls Google a poor first choice and Messenger better [L1292, 2021-22], while one source's setup adds Google later as the store grows [L1305, 2020-26]. Treat the one source advice as older.

#### Removing apps and channels
- To remove a sales channel or app: go to Settings (gear icon, bottom left) > Apps and sales channels, hover over the item and click Uninstall. Remove international markets under Settings > Markets. [L0971, 2024]

#### Domains
- Settings > Domains shows the Shopify domain and the custom domain. Both are already configured and need no further action. [L0096, undated]
- Check that the purchased domain is primary. [L1305, 2020-26]

### Activity log
- Settings > Store activity log: a running list of all store changes. It is useful when sales rise or fall, to find what was changed. [L1305, 2020-26]

### Setup order for a supplier-ready store
- Procedure: Shopify Settings configuration order for a supplier-ready store (in the sequence of the course):
  1. Store details: set the store name; keep phone, email and billing address until a business phone, email and address exist.
  2. Billing, currency, time zone, units, order ID format.
  3. Plan and billing: check the trial and billing dates.
  4. Users and permissions: add staff if needed.
  5. Payments: activate Shopify Payments, complete PayPal setup, set payment capture to manual.
  6. Checkout: customer contact by email, Shop app link on, customer login off, last name only or first and last name, company name off, phone number not included for shipping, email marketing on, tipping off, shipping address as billing on, order processing option 3, archive fulfilled orders on.
  7. Customer accounts: keep hidden, enable Shop Pay after payments are set up.
  8. Shipping: delete default rates, create Custom flat rate Free shipping at $0, delete the International zone.
  9. Taxes and duties: no changes at this stage.
  10. Locations: keep default location; remove point of sale if installed.
  11. Gift cards: set an expiration date.
  12. Markets: keep only the primary market active.
  13. Apps and sales channels: uninstall point of sale.
  14. Domains: check the purchased domain is primary.
  15. Brand, notifications, languages, policies: revisit after logo, colors and business email are set. [L1305, 2020-26]
- one source 2026 foundation order: first open the account with the business email, then work through Settings > General, Payments, Shipping and delivery, Apps, Domains, Customer privacy and Policies before any sales channel is opened. The lesson treats these as the foundation before advanced settings are touched. [L1327, 2026]
- At the initial setup stage, most Shopify settings should stay at their defaults. The goal is to learn where settings are located rather than to configure heavily. [L0096, undated]
- The general store settings are preset. Other default options do not need changes at launch. [L1306, 2020-26]
- At launch, the recommended default options in Settings > Checkout can be left unchanged, apart from the customer contact method, the order tracking link, and the required-field and sign-in settings. Later checkout changes are made in the same section. [L1306, 2020-26]
- At the foundation stage, keep Shopify's defaults for advanced settings such as metafields, customer events, post-purchase and marketing pixels. Do not spend time on them until the store is scaling. The reasoning is to build a stable base first. [L1327, 2026]

#### Further details

- By default, Shopify does not send orders to suppliers. Orders must be forwarded to the supplier separately. [L0663, 2019]

- In Online Store > Preferences, turn off Google reCAPTCHA on contact forms and on login, create-account and password recovery pages. Enable it only if you get spam, because it can require customers to complete a reCAPTCHA task. [L1145, 2021-22]


Part 7 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/06-core-admin-settings-general-checkout-payments-and.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/08-shipping-taxes-markets-currency-and-international.md
