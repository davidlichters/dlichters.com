<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 6 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/05-business-email-phone-number-and-contact-identity.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/07-payments.md

## Core admin settings: general, checkout, payments and orders

### Store identity and account settings

#### Opening Settings and the section map
- Open the admin's main settings page with the gear icon labeled Settings in the bottom-left corner. The sections are Store details, Plan, Billing, Users, Payments, Checkout, Customer accounts, Shipping and delivery, Locations, Apps, Sales channels, Domains, Notifications and Policies. [L0096, undated]
- Settings open with the gear icon at the bottom left of the admin, labeled Settings. [L1306, 2020-26]
- Shopify's Settings sections are reached from the gear icon. Payments are opened with Settings > Payments. [L1285, 2024; L1305, 2020-26]

#### Store details
- Under Settings > Store details, the billing address is tied to the card on file. [L0096, undated]
- The pencil icon edits three fields: store name (internal only, not shown to customers), store email and store phone number. [L0096, undated]
- The default store name is "my store". Replace it with the real business name. [L1306, 2020-26]
- To change the store name, click Edit, change the name and then click Save. The store URL does not change. [L1305, 2020-26]
- Keep the store email and store phone number as entered at account creation until a business email address and business phone number exist. Update them after the business accounts are created. [L0096, undated; L1305, 2020-26]
- The billing address shows the business address entered at account creation. Leave it as is at first and update it later with Edit once a business address is available. [L1305, 2020-26]
- The general store settings, including Store details, are preset. Other default options do not need changes at launch. [L1306, 2020-26]
- Older advice: fill in store name, store contact email, sender email, store address, legal name of business and phone number. The store address appears on invoices and is used for shipping rate calculation. Shopify shows a warning if tax information is missing. [L0677, 2021-22]
- Older advice: in Settings > General, also fill in Store name, Store contact email (where Shopify contacts you), Sender email, Legal name of business, Phone and Store address, and set the industry field. [L1145, 2021-22]
- The two approaches conflict on the store email, phone and sender email. Use the one source approach (keep them until business contacts exist) for a new store, and the one source approach (fill them in during setup) only where the business contacts already exist. [L0096, undated; L1305, 2020-26; L0677, 2021-22; L1145, 2021-22]

#### Plan, billing and users
- Settings > Plan shows the current Shopify plan. The recommended plan at the start is Basic Shopify. Upgrades and downgrades are handled here, and paid apps and subscriptions also appear in this section. [L0096, undated]
- Settings > Billing lists Shopify charges and billing history. No changes are needed there at the start. [L0096, undated]
- Settings > Users controls who can access the store. The default user is the account owner. Add staff users later when help is hired. No action is needed at the start. [L0096, undated]
- At the foundation stage, check the trial and billing dates. [L1305, 2020-26]

### Store defaults: time zone, units, currency and order numbers

#### What Settings > General contains
- Settings > General contains Backup Region, Unit system, Default weight unit, Time zone, Order ID format and the store currency. [L0351, 2026]
- Currency display is not set in General. Customer-facing currencies are managed under Markets. [L1167, 2026; L0351, 2026]
- Keep only the primary market active under Settings > Markets. [L1305, 2020-26]

#### Time zone
- The time zone controls when orders and analytics are recorded. Set it first. [L0351, 2026; L1327, 2026]
- Examples: GMT+08:00 Singapore for a Singapore-based business [L0351, 2026], and (GMT+08:00) Singapore for the same case [L1327, 2026].
- Older example: an Australian store uses (GMT+10:00) Brisbane. [L0677, 2021-22]
- The time zone defaults to the sign-up location. Using your own time zone is recommended because it makes analytics tracking easier. [L1305, 2020-26]

#### Unit system and default weight unit

| Target market | Unit system | Default weight unit | Source |
|---|---|---|---|
| United States | Imperial | Pound (lb) | [L1327, 2026; L1305, 2020-26] |
| Australia | Metric | Kilogram (kg) | [L0677, 2021-22] |
| Metric-based store | Metric | Kilogram (kg) | [L1167, 2026] |

- Set the unit system to Imperial and the default weight unit to Pound (lb) when the store targets the US, since the US uses the imperial system. [L1327, 2026]
- Keep the unit system on Imperial and the default weight unit on pound for a US store. [L1305, 2020-26]
- Store defaults are set under Settings > General: unit system Metric and default weight unit Kilogram (kg). [L1167, 2026]
- Conflict: one one source 2026 lesson lists the default weight unit as Pound (lb) [L0351, 2026], while another sets Metric and Kilogram (kg) [L1167, 2026]. Choose the pair that matches where the store sells: Imperial and lb for the US [L1327, 2026; L1305, 2020-26], Metric and kg for metric markets [L0677, 2021-22; L1167, 2026].

#### Order ID format
- Shopify starts order numbers at #1001 by default. The number itself cannot be changed. A prefix or suffix can be added under Settings > General > Edit order ID format, for example EN1001 or 1001-A. [L0677, 2021-22]
- Use the pound symbol (#) as the prefix for order numbers and no suffix. [L1305, 2020-26]
- Set the Order ID format so the first order number is high, starting from around 200 onwards (for example #200 or #2001 style numbers) instead of the default #1001. A low starting number makes a store look new to buyers. [L1327, 2026]
- Conflict: the 2021-22 source says the starting number cannot be changed [L0677, 2021-22], while the one source 2026 lesson sets a higher starting number [L1327, 2026]. Verify in the admin whether the starting number is editable on the plan in use, and use the prefix option [L0677, 2021-22; L1305, 2020-26] if it is not.

### Checkout

#### Contact method and required fields
- Set the customer contact method to Email. [L0096, undated; L1306, 2020-26; L1305, 2020-26; L1327, 2026]
- Show the link to download the Shop app, a customer app from Shopify for tracking orders and reordering. [L1305, 2020-26]
- Keep the order tracking link enabled. [L0096, undated; L1306, 2020-26]
- Customer information fields:
  - Require last name only: left on. [L0096, undated]
  - Require first and last name: left on, with last name required and first name also required. [L1305, 2020-26]
  - Company name: disabled. Include it only for B2B. [L0096, undated; L1305, 2020-26]
  - Address line two: optional. [L1305, 2020-26]
  - Shipping address phone number: don't include. The phone number entered as the main order phone is used by carriers. [L1305, 2020-26]
- The two sources differ on name fields: [L0096, undated] turns on only "Require last name", while [L1305, 2020-26] lists both options as left on. Use the option you choose consistently, and check the field in the admin. [L0096, undated; L1305, 2020-26]
- Verify all required fields are configured under Shopify > Settings > Checkout > Customer contact. [L0274, 2023] (2023.)

#### Sign-in and customer accounts
- Keep Require customer to log into their account before checkout OFF, so customers can check out as guests. A login requirement adds friction. [L1305, 2020-26]
- No required sign-in before checkout . [L1327, 2026]
- Customer accounts: keep customer accounts enabled and sign-in links enabled. No customization is required at this stage. [L0096, undated]
- Keep customer account creation hidden, so there are no accounts before purchase. Leave the login experience and self-serve returns off. [L1305, 2020-26]
- Enable Shop Pay under Sign in with shop only after Shopify Payments is active. [L1305, 2020-26]
- one source 2026: keep the default customer account configuration. Self-serve returns and cancellations can be configured later with conditions and fees. The sign-in links and store credit options stay at their defaults. [L1327, 2026]

#### Marketing, tipping, billing address and order notes
- Marketing emails: turn on the email marketing opt-in and keep it pre-selected. SMS opt-in can also be offered. [L1305, 2020-26]
- Default marketing settings are left enabled, and SMS marketing is not enabled by default. [L0096, undated]
- one source 2026 keeps no marketing opt-in checkbox at the foundation stage. [L1327, 2026]
- Conflict: one source turns the email opt-in on [L1305, 2020-26], while the one source 2026 foundation keeps no opt-in checkbox [L1327, 2026]. Choose the setting that matches your consent and email plan.
- Tipping: The sources give three positions.

| Position | Source | When it applies |
|---|---|---|
| Keep off | [L1305, 2020-26] | Standard one source setup |
| No tipping options | [L1327, 2026] | one source 2026 foundation |
| Enable the default tip setting (for example a 5, 2 or 3 pound tip) | [L0773, 2023] | one source notes many store owners remove these settings |

- Address collection: keep Use the shipping address as the billing address by default on, and keep Use address completion on. [L1305, 2020-26]
- Keep the order notes field enabled in the Shopify cart before checkout. Few customers use it, but it is worth having. [L0470, 2023]
- Leave the order notes field on at first, then remove it if customers never use it. [L0855, 2023]
- Checkout language should default to the store's business language. Change it only if needed. No checkout rules are added. [L1305, 2020-26]
- Customized checkout (logo, favicon and checkout appearance) can be left for later. [L1305, 2020-26]
- Checkout trust and security:
  - Shopify's default checkout trust elements are enough for security display, so no extra security app is needed at checkout. [L1110, 2019]

#### Order processing (dropshipping)
- Order processing options after payment:
  - Automatically fulfill the order's line items.
  - Automatically fulfill only the gift cards of the order.
  - Don't fulfill any of the order's line items automatically.
  - Automatically archive order after fulfillment or payment can also be set. [L1327, 2026]
- The one source 2026 lesson left these at the default for the foundation setup. [L1327, 2026]
- For dropshipping, choose option 3 (do not automatically fulfill any line items). The order is then marked as fulfilled manually once the supplier provides tracking. [L1305, 2020-26]
- Keep the automatic archiving of fulfilled orders on. Archived orders are not deleted; they are only removed from the open list. [L1305, 2020-26]
- Mistake: automatic fulfillment after payment marks orders as fulfilled before a supplier has shipped or provided tracking. Option 3 avoids this. [L1305, 2020-26]
- Conflict: one source recommends option 3 for dropshipping [L1305, 2020-26], while the one source 2026 foundation keeps the default [L1327, 2026]. For a dropshipping store, option 3 avoids marking orders fulfilled too early.

#### Checkout apps, custom code and third-party buttons
- Checkout customization apps (countdown timers, custom images) were removed from the Shopify app store around 2020. Checkout customization is reserved for Shopify Plus, which starts at about $2,000 per month (as of 2020). Use the native cart and theme settings for standard stores. [L0664, 2020]
- Avoid adding custom code to the Shopify checkout page, because it can cause issues. Extra payment buttons such as Klarna, Affirm or Amazon Pay appear prominently on their own and are a better way to add choices. [L0962, 2021]
- Blocks or links for Amazon checkout are not a trust signal. Keep your store's checkout on your own platform and payment methods. Avoid links that send visitors to the marketplace. [L0551, 2020]
- Use the discount code and discount row settings at their defaults. The footer and the shipping protection row are optional extras during testing. [L0560, 2026]
- The Shopify checkout allows little customization. Most conversion changes must happen earlier in the journey: on the product page, in the offer and in the shipping and trust messaging. Plan the store around these pre-checkout elements. [L0640, 2023]

#### Checkout friction and language
- Minimize checkout friction by accepting common payment methods and reducing steps to purchase. Every additional step increases cart abandonment. [L0233, undated]
- Use words that signal security and trust such as "free" and "tracked". Check the checkout and cart for hidden prices, mismatched currencies or a missing add-to-cart button. Shipping charged by mistake is a common cause of abandonment. [L0640, 2023]
- PayPal one-click checkout: Integrate PayPal's payment button so customers can complete a purchase immediately after adding a product to the cart with one click. This removes the multi-step checkout, reduces effort and increases the completion rate. [L0233, undated]
- One-click checkout app: displays checkout immediately after the customer adds a product to the cart, bypassing the cart review page. [L0233, undated]

#### Price display
- Settings > Pricing > Price rounding is off by default. Enable it and choose the ending 95 or 99 so bundle prices end in.95 or.99. [L0861, 2026]
- Other pricing toggles in the same section are Show prices per item, Use product compare-at price and Show prices without decimals. [L0861, 2026]


Part 6 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/05-business-email-phone-number-and-contact-identity.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/07-payments.md
