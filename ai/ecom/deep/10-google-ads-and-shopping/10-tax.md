<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 10 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/09-google-merchant-center-setup-and-verification.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/11-setup-sequence.md

### Tax

- Enter your tax configuration under the tax section, using the tax categories that match your situation. The setup depends on where you are registered and sell. [L0732, 2020-26]
- Tax setup: go to the tax section and choose **Configure no nexus for all states**, then click **Save**. Choose this only if the business is not set up with tax nexus in its registered state. The tax setup should mirror the tax settings configured in Shopify. [L0728, 2020-26]
- For Google Shopping tax, set your store and Merchant Center tax rates to zero if the business is incorporated outside the US, so the product price does not appear higher than competitors' taxed prices. (2023) [L0964, 2023]
- **Sources differ:** [L0728, 2020-26] sets no nexus when the business has no nexus in its registered state and mirrors Shopify. [L0964, 2023] sets zero rates when the business is incorporated outside the US. Both apply to their own situation as stated. [L0728, 2020-26; L0964, 2023]
- Tax and shipping are labelled optional in the free listings setup, but for this business model they were treated as required. The steps are completed in order, with Website and Products following tax and shipping. [L0731, 2021-22]

### Shipping

#### Shipping service setup
- Shipping setup: click the plus icon, enter a shipping service name (for example "domestic shipping"), select only the countries you ship to, set the order cutoff time, and set the handling time. [L0728, 2020-26]
- Set the handling time in Eastern time. For free shipping, enter a service named free shipping as well. It is required even when shipping is free. [L0728, 2020-26]
- **Sources differ on time zone:** [L0728, 2020-26] gives Eastern time for handling time in the example. [L0728, 2020-26] says the cutoff is set in the time zone used for the account, and [L0726, 2021-22] says the time zone is the business's. [L0728, 2020-26; L0726, 2021-22]
- Enter shipping information even when shipping is free, because a shipping setup is mandatory for Shopping ads eligibility. [L0728, 2020-26]
- Set the shipping rates for each destination, set shipping time zones and whether shipping is free. Shipping settings are found in the shipping section of Merchant Center. [L0732, 2020-26]
- A default shipping rate must be set up for every country you sell to, and a default shipping method must be selected. Merchant Center shows a warning when a country has no default shipping rate. [L0732, 2020-26]

Procedure to set up a shipping service:
1. Click **Add shipping service**. [L0731, 2021-22]
2. Enter a name for the service (for example Australia shipping or US shipping). [L0731, 2021-22]
3. Select the country. [L0731, 2021-22]
4. Select the service area, which is the delivery destination (the customer's address). [L0731, 2021-22]
5. Select the currency, matching the currency used for the business and the delivery location. [L0731, 2021-22]
6. Click **Next**. [L0731, 2021-22]
7. Enter the order cutoff time (optional), handling time and transit time under Delivery times. [L0731, 2021-22]
8. Click **Next**. [L0731, 2021-22]
9. Keep the default free shipping rate. [L0731, 2021-22]
10. Click **Save**. [L0731, 2021-22]

#### Choosing the countries
- Select only the countries where you actually sell in Merchant Center. Shipping and return details are then set up for each selected country. [L0729, 2020-26]
- Select only the countries in the shipping destination list that you actually ship to, because the setting controls where Shopping ads may be shown. [L0728, 2020-26]

#### Handling and transit times

Sources give different values for different cases. Use the case that matches the store.

| Case | Handling time | Transit time | When it applies | Source |
|---|---|---|---|---|
| Example store (policy: processing 3 to 5 days, maximum 5; typical delivery 3 to 7 days, up to 12) | 1 to 5 days | 1 to 12 days | The store's own policy text, entered manually | [L0729, 2020-26] |
| Print-on-demand products | 2 to 4 days, Monday through Saturday | Not stated | Print-on-demand fulfilment | [L0728, 2020-26] |
| Free shipping (2023) | 1 to 2 days | 5 to 7 days | Free shipping set in Merchant Center | L835.064 |

Notes:
- Enter order cutoff time, handling time and transit time so they match the shipping policy page. [L0729, 2020-26; L0181, undated]
- Handling time is the time from order to dispatch. [L0728, 2020-26]
- The order cutoff time sets the time of day after which an order counts as shipping the next day. Choose a cutoff that matches the store's real dispatch routine. [L0728, 2020-26]
- Automated shipping rules from carriers such as UPS or FedEx are not used in this setup. Delivery times are entered manually, so they must be kept up to date when the policy changes. [L0729, 2020-26]
- Cross-check the shipping and return fields against the policy pages, as follows: [L0729, 2020-26]
  1. Open the shipping policy page and note the stated order processing time, typical delivery time and maximum transit time. [L0729, 2020-26]
  2. In Merchant Center, enter the order cutoff time, handling time and transit time so they match those figures. [L0729, 2020-26]
  3. Open the return policy page and copy its URL into the return policy URL field. [L0729, 2020-26]
  4. Compare the accepted return conditions (defective and non-defective products) and whether exchanges are accepted with the page text. [L0729, 2020-26]
  5. Enter the return window, return method, party paying return shipping, restocking fee and refund processing time exactly as the page states them. [L0729, 2020-26]
  6. Before clicking Save, check the summary against both pages. [L0729, 2020-26]
- Merchant Center shipping and return values must match the policy pages word for word in substance. A mismatch, such as choosing exchanges when the policy refuses them, causes Google to flag the account. [L0729, 2020-26]
- The shipping policy link in the product data section needs the exact URL of the shipping policy page on the store. Save it after the shipping page has been created. [L0731, 2021-22]

#### Free shipping
- If the store offers free shipping on all orders, setting the shipping rate to 0 for all orders in Merchant Center is sufficient. No other shipping options need to be added. Paid shipping options are only added when the store charges for shipping. [L0728, 2020-26]
- Create a shipping rate named free shipping with a single rate for all orders and a fixed rate of 0, then click **Continue** and **Save**. [L0728, 2020-26]
- Choose free shipping for all customers with no conditional values, then click **Save**. (older, 2021-22 for the source's procedure) [L0729, 2020-26]
- Keep the default free shipping rate. [L0731, 2021-22]
- Advanced shipping settings include free shipping thresholds (for example free shipping from a minimum order value) and holiday shipping exceptions. These are optional and only needed if the store uses them. [L0728, 2020-26]
- The shipping settings in Merchant Center must match what the Shopify store charges at checkout. If the store offers free shipping on all orders, the Merchant Center shipping rate must also be 0. A paid shipping option should only be added when the store charges for shipping. [L0728, 2020-26]
- Showing free shipping in Merchant Center while charging shipping at checkout can trigger warnings or suspensions, because Google bots crawl stores and test the cart. (2024) [L0360, 2024]
- Merchant Center shipping settings must match the Shopify shipping settings exactly. Mismatches can trigger warnings or a suspension, because Google bots check the two against each other. (2022) [L1092, 2022]
- To show free shipping on the Google ad label, set shipping prices in Shopify and then set the same shipping prices in the Merchant Center settings. [L0941, 2022]
- The estimated delivery date shown under a Shopping ad is set in the shipping section of Merchant Center. [L0671, 2021]

#### Special shipping cases
- For Black Friday with a flat shipping fee for one supplier only, create the matching shipping rate in Shopify and set the same rule in Merchant Center. Free shipping for all other products can stay as is. (2022) [L1092, 2022]
- Heavy items can be shipped curbside and advertised on Google Shopping with free shipping. The shipping approach should still be checked against Merchant Center policies and confirmed with Google if a policy seems to restrict it. (2023) [L0835, 2023]
- For items whose shipping cost depends on destination (LTL or freight items), contact Google Merchant Center help through the help page and describe the issue. Save the conversation or the answer in case the question comes up again. (2023) [L0835, 2023]
- When Google Merchant Center asks for a ship-from address, enter your own business account address rather than each supplier's warehouse address. Supplier warehouse locations do not need to be listed separately for every supplier. (2022) [L0854, 2022]
- Warehouse locations need to be entered in Merchant Center only if you calculate shipping rates using zip codes. (2023) [L0835, 2023]

### Returns

- Return settings in the example store: return window 30 days, return method by mail with a return label, return shipping paid by the customer only if the policy says so, no restocking fee if none exists, and refund processing time 7 days after the return is received. [L0729, 2020-26]
- Return settings in the sign-up sequence: paste the Returns & Refunds policy URL, select the countries you accept returns from, confirm acceptance of defective and non-defective products, enter the return window (example: 30 days), select **mail** as the return method, specify return shipping responsibility, select **No cost** for restocking fee if applicable, and enter refund processing time. [L0181, undated]
- Enter the return window, return method, who pays return shipping, restocking fee and refund processing time to match the policies, then click **Next**. Check whether exchanges are accepted. [L0729, 2020-26]

### Google Ads linking

- Do not link Google Ads to your Merchant Center account during initial setup. Google Ads will be configured later after your products are approved. [L0181, undated]
- Do not link a Google Ads account to Merchant Center until your products have been approved for the first time in Merchant Center. [L0729, 2020-26]
- **Sources differ:** [L0181, undated] and [L0729, 2020-26] say to link only after first approval. [L1165, 2020-26] lists a linked Google Ads account among the requirements the account must meet before products can be submitted. The sources do not state how to reconcile the two. The first two are the step order of the setup flow, and [L1165, 2020-26] is a checklist of what must be in place before submission. [L0181, undated; L0729, 2020-26; L1165, 2020-26]
- Before products can be submitted to Google Merchant Center, the account needs taxes, shipping rules, a verified store URL and a linked Google Ads account. Only the product data is missing at that point. [L1165, 2020-26]

Linking procedure:
1. In the Merchant Center linking step, select the Google Ads customer ID that should be used and click **Link**. [L0731, 2021-22]
2. In Google Ads, go to Tools and settings > Linked accounts. [L0731, 2021-22]
3. Find Google Merchant Center and click **Details**. [L0731, 2021-22]
4. Click **View details** on the pending request, check the Merchant Center ID and website, then click **Approve**. [L0731, 2021-22]
5. Refresh Merchant Center and confirm the link status shows as active. [L0731, 2021-22]

Linking steps from other sources:
- Link Google Ads to Merchant Center: in Merchant Center, click **Link**, sign in to the Google Ads account with the same email, and approve the linking request that appears in Google Ads. Linking happens automatically after approval. [L0728, 2020-26]
- Link Merchant Center to Google Ads under the account linking section by clicking **Link account**. Once linked, Merchant Center can be used for daily feed management while campaigns run in Google Ads. [L0732, 2020-26]
- Link the Merchant Center account to Google Ads and select the correct Merchant Center account when adding products to the campaign. [L0743, 2026+]
- Link Merchant Center to Google Ads: open the cogwheel settings in Merchant Center and choose **Linked accounts**. Without this link you cannot create campaigns that include your products. [L1145, 2021-22]

### Programs: free listings and Shopping ads

- In Merchant Center, go to Growth > Manage Programs and enable both Free listings and Shopping ads. These are the two channels that display your products to shoppers. Shopping ads must be enabled here before you can run Shopping campaigns in Google Ads. [L1145, 2021-22]
- Select the programs that fit your goals when creating the account. Shopping actions is optional and needs more business history and product understanding. [L0728, 2020-26]
- The free listings setup has Tax and Shipping items, which are optional, and the steps are completed in order. [L0731, 2021-22]
- Free listings show products in Google surfaces without paid ads, but bring limited traffic. [L0731, 2021-22]
- Merchant Center Buy with Google listings are optional. Disapprovals there are not a cause for concern if Shopping ads and dynamic remarketing are active without error. (2022) [L0969, 2022]

### Country availability

- Across every surface, Google Merchant Center can be used only in the United States and India. In New Zealand the sole option offered is Google Ads, which means Google Shopping cannot be operated there in the identical manner. [L0961, 2020]
- Select only the countries where you actually sell. [L0181, undated; L0729, 2020-26]
- Set shipping and return details for each selected country. [L0729, 2020-26]
- Set a default shipping rate for every country you sell to. [L0732, 2020-26]
- Shopping Actions in the US market in 2020 had its own dedicated ad space. [L0738, 2021-22]

### Product source control and avoiding duplicate feeds

- To stop Google from importing products on its own, go to Settings > Data sources, open **Actions**, and choose **Hide all automatically found products**. Products then come through the "Provided by you" source, which you control. [L0729, 2020-26]
- Hide automatically found products in Settings > Data Sources by locating **Found by Google** and clicking **Hide all automatically found products**. This prevents Google from pulling products without your control. Your products will be submitted under "Provided by you." [L0181, undated]
- Hiding automatically found products reduces your visibility in the Shopping tab, Google Maps and YouTube. This is accepted because you then control which products are submitted, and the feed is the source of your product data. [L0729, 2020-26]
- Duplicate-prevention checks: [L1114, 2023; L0731, 2021-22]
  - One Merchant Center account per store.
  - One website per account; a second website requires an advanced account.
  - Claiming the website stops other accounts from using the same URL.
  - Confirm the correct Google Ads customer ID before linking.

### Starting the feed

- You can start a Google Shopping feed with about 30 products, but keep adding products continuously. Starting early lets data and sales begin to build while the catalog grows. [L0358, 2020]
- If Merchant Center has a feed issue, check the product data first: correct product data is the basis of approval. [L1087, 2020]

### Pay button and payment methods

- Enabling the Google Pay button in Merchant Center: if using Shopify Payments, Apple Pay and Google Pay are usually enabled by default. If not, enable them in Shopify payment settings. (2025) [L0255, 2025]
- The Add to checkout feature in Merchant Center is not recommended for dropship products due to lower conversion rates. (2025) [L0255, 2025]
- In Merchant Center, under payment method settings, check the boxes for all payment methods accepted on your site (Apple Pay, Google Pay, Shop Pay, credit cards). This must match what is enabled in Shopify. (2025) [L0255, 2025]

### Shopping Actions and Buy on Google

#### What it is
- Google Shopping Actions, also called Buy on Google, are product ads that let shoppers complete a purchase on Google without visiting the merchant's website. The format changes quickly, so the rules described for 2020 should be verified against current Merchant Center documentation before making decisions. [L0738, 2021-22]
- Buy on Google is a checkout feature that lets people buy without leaving Google Shopping. It is a separate policy and is not the same as the standard Google Shopping setup. (2023) [L0835, 2023]
- Shopping Actions ads carry a Buy on Google icon over the product image, and often an Add to cart button. Clicking adds the item to the shopper's Google cart and leads to a checkout hosted by Google, which sends the order and payment to the merchant to process. [L0738, 2021-22]
- In the Google Shopping tab, a Buy it on Google filter can appear on many results. Shoppers who apply it see only Shopping Actions ads, and all pay-per-click ads are hidden. [L0738, 2021-22]
- Do not let customers buy directly through Google. Use free Google product listings but send shoppers to your own store for checkout. (2021) [L0962, 2021]

#### History and cost
- Shopping Actions developed from Google Express, an app-based Google marketplace that was not adopted by customers. Google then moved the same buy-on-Google ads into its existing Search, Images, Shopping, Discover and Lens interfaces. [L0738, 2021-22]
- Originally Shopping Actions were not cost-per-click ads. The merchant paid a commission only on completed sales, similar to Amazon or eBay. [L0738, 2021-22]

| Period | Cost to merchant | Source |
|---|---|---|
| Before mid-2020 | Commission on completed sales; averaged about 12%, varied by product type and category, ranged from roughly 8% up to above 12% | [L0738, 2021-22] |
| From mid-2020 | No commission; selling became free. Google presented this as a COVID-19 measure for advertisers, and it also increases the number of users on the platform | [L0738, 2021-22] |

- Shopping Actions listings are not pay-per-click ads, but they sit in the same ad slots as paid Shopping ads, so they push paid listings down. Even first position among ads may not be the first thing the shopper sees when Shopping Actions appear above it. [L0738, 2021-22]
- Shopping Actions listings appear in the same positions as paid Shopping ads, in Search, Image search and other placements. As they grow, they take space from pay-per-click listings and can push them lower. [L0738, 2021-22]
- Merchant Center renamed the Shopping Actions labels: Shopping Actions became Buy on Google listings, surfaces across Google became free listings, and local surfaces across Google became free local listings. [L0738, 2021-22]

#### Control and placement
- With Shopping Actions, the merchant has little control over the checkout experience or the ad placement, and there is no optimisation tool. Google's aim of keeping users on its own properties means fewer visits to the merchant's own website, which weakens a sales funnel that depends on site traffic. [L0738, 2021-22]
- Merchants cannot optimise Shopping Actions ads. They can only submit an additional feed on top of their existing Merchant Center feed, and Google decides whether and when the products are shown. [L0738, 2021-22]
- In 2020, Shopping Actions listings could appear on Google Search, Google Images, the Shopping tab, Google Discover, Google Lens, the online Google Shopping homepage and the Google Shopping app (formerly Google Express). Google decides where each listing is shown, and the merchant cannot select individual placements. [L0738, 2021-22]
- Shopping Actions ads only display when at least one competitor for the same product is also participating. If no competitor in the market has joined, a merchant will see no Shopping Actions ads even when approved. [L0738, 2021-22]
- Large national retailers that sell high-ticket products, such as Walmart, Costco and Target, can occupy Shopping Actions slots if they join. Their entry can push smaller high-ticket dropshipping listings further down in the same results. [L0738, 2021-22]
- Google's algorithm ranks and promotes sellers according to their seller score. A low score reduces traffic and sales, which leaves fewer orders to rebuild the score, so the damage compounds. [L0738, 2021-22]

#### Risk and decision
- Shopping Actions requires more business history and a deeper product understanding than standard Shopping ads, so it is not a starting priority. Selecting it in the program choice is optional and can be ignored. [L0728, 2020-26]
- Stock shortages, which were common for high-ticket dropshippers during COVID-19, make Shopping Actions risky because delivery time commitments are hard to keep. Do not join while order fulfilment times are unpredictable. [L0738, 2021-22]
- Start with Shopping Actions when you can reliably meet your delivery times, because the platform is useful for getting into the program. If stock and delivery are unpredictable, wait, but monitor the channel because it is expected to become more important. [L0738, 2021-22]
- If traditional Shopping ads become harder to get seen, a merchant may be forced to use the Shopping Actions interface. This is both a risk and an opportunity when competitors are not using it. [L0738, 2021-22]
- In the US market in 2020, when few competitors take part, a merchant can gain extra ad positions by joining. [L0738, 2021-22]

#### Setup and reporting
Procedure:
1. Check whether Shopping Actions is visible as an option in Google Merchant Center. [L0738, 2021-22]
2. If it is not visible, submit the Google application form linked from Google's Shopping Actions page and describe the business. [L0738, 2021-22]
3. Wait for Google's approval. After approval, the Shopping Actions sections are added to Merchant Center. [L0738, 2021-22]
4. Submit the additional feed data through the Feeds for Google Shopping app in Shopify and switch on Google Shopping Actions in that app's menu. [L0738, 2021-22]
5. Only after approval, install the Order Sync for Google Shopping app so orders are brought into Shopify. [L0738, 2021-22]
6. Manage the orders in Shopify, where they are synced, and fulfil them. [L0738, 2021-22]

- Shopping Actions reporting is under Performance > Dashboard > Shopping Actions. Retailer Standards and Shopping Actions promotions are under Performance, and disapproval details are under Diagnostics > Products after changing the destination to Shopping Actions. [L0738, 2021-22]
- The Merchant Center Overview page (merchants.google.com) includes a Shopping Actions box that shows how many products in the feed are approved for Shopping Actions. It is listed separately from the boxes for Shopping ads, Dynamic Remarketing and surfaces across Google. [L0738, 2021-22]
- The Growth tab's Shopping Actions insights were in beta and added little value at the time. Promotions can be attached to Shopping Actions listings to highlight sale events on particular items. [L0738, 2021-22]

### Why Merchant Center Comes First

- Google Shopping ads cannot run without a product feed created in Google Merchant Center. [L1287, 2025]
- The Shopping campaign pulls its products from that feed, so Merchant Center must be set up before the Shopping campaign. [L1287, 2025]
- Google Merchant Center receives the store's product feed and is needed before products can appear in Google Shopping. [L1437, 2018]
- Submit the feed right after uploading products, because approval takes time. [L1437, 2018]


Part 10 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/09-google-merchant-center-setup-and-verification.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/11-setup-sequence.md
