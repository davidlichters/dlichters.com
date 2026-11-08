<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 45 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/44-apps-and-leftover-code.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/46-launch-criteria-and-checklists.md

## Pre-launch testing and go-live

### Readiness before paid traffic

- Optimize the store for conversion before any paid traffic is sent to it, because visitors who arrive at a store that is not ready cannot be converted and the advertising budget is wasted. [L0582, 2020-26]
- set up and optimize the Shopify store before spending money on ads, so paid visitors land on a working store. [L1002, 2019]
- Before a campaign goes live, make the store attractive. A better offer and a better-made website can outperform a competitor's store selling the same product, and weak competitor stores show room for improvement. [L1161, 2024+]
- Run the full pre-launch checklist before sending any paid traffic, so mistakes in the theme, product page, bundles or checkout are fixed before money is spent on clicks. [L1324, 2026]
- If the store is not ready when a video goes viral, sales are lost and the store must be rebuilt in a hurry. Build a working store before the content has a real chance to take off, especially without web-building experience. [L1380, 2022]
- Set a deadline for the store to be live within one week, and check each store task on the deadline day. [L1431, 2020+]
- Publishing a store before launch carries no risk, because you are the only visitor until you send traffic. Keep the store unpublished only if you prefer not to test it yourself. [L0934, 2023]
- Build the store in this order before launch (older advice, 2021-22 source label one source; no date given):

Store setup order before launch [L1288, undated]:

1. Set the store name.
2. Activate payments: Shopify Payments, PayPal and Clearpay.
3. Add products and make sure the stock count is set.
4. Set up shipping.
5. Set up policies.
6. Connect the domain.
7. Set up markets for UK, Australia and US.
8. Choose and set up the theme.
9. Build pages with Pagefly.
10. Build the homepage.
11. Build the product page.
12. Build the About us page.
13. Build the Contact us page.
14. Set up the header.
15. Set up the footer and menus.
16. Set up checkout.
17. Add reviews with Ryviu.
18. Set up Tag Manager.
19. Set up Google Analytics (GA).
20. Set up GA4.
21. Review all Shopify settings.
22. Check whether redirects from the testing site are still active. [L1288, undated]

- Leftover redirects from the testing site can keep visitors away from the live store, so they must be checked before launch. [L1288, undated]
- When conversion is below 1 percent with a lot of traffic and few add-to-carts, the offer, theme and checkout are the first suspects. Have someone review the checkout process and the offer for friction before running more ads. [L1316, 2024+]

### Store access and password protection

- Disable the protection before beginning supplier outreach, because suppliers must be able to review the store during initial contact without a password. [L0076, undated; L0834, 2021]
- Keep Shopify Payments turned off until real products are live, so nobody can place an order. [L0834, 2021]
- Launching while the demo password is still active leaves the storefront hidden from visitors and ad traffic. Remove the password before sending any traffic. [L0393, undated]
- A password left on blocks customers and can get your Google Merchant Center and Google Ads accounts suspended. It is often switched on during supplier work and forgotten, so check that it is off before launch. [L1145, 2021-22]
- While the online store is password protected, visitors without the password cannot see any pages. The Pages screen shows a banner, Online store is password protected, with a Disable password button that must be used before launch. [L1264, 2021-22]
- While password protection is on, visitors who open the store address see an Opening Soon page with an email sign-up field instead of the shop. [L1292, 2021-22]
- While a store is protected, visitors see an Opening soon page with an email signup field and a link for the store owner to log in. A theme published behind this password is not visible to the public until the password is removed. [L1330, 2025-26]
- Remove the storefront password once the demo store is complete, so the store becomes publicly accessible. [L0532, undated]
- The store is only publicly live after the password toggle is switched off and saved. Switching it off without clicking Save does not complete the step. [L1294, 2020-26]

Where to find the setting (the label varies by source and Shopify version):

| Source | Location | Setting |
|---|---|---|
| [L0393, undated] | Online Store > Preferences > Password protection | Turn off the password for the store |
| [L1294, 2020-26] | Online Store > Preferences | First setting shown is Store access, currently set to Password protected |
| [L1145, 2021-22] | Online Store > Preferences > Password protection section | Enable password must be off before launch |
| [L1292, 2021-22] | Online Store > Preferences | Disable password can be used once the store is ready to launch |
| [L1292, 2021-22] | Online Store > Themes | Banner Online store is password protected with a Disable password button |

Removing the password, step by step [L1294, 2020-26]:

1. Log into your Shopify account.
2. Click Online Store.
3. Click Preferences, located at the bottom of the Online Store section.
4. In the Store access setting, which shows Password protected, toggle the switch off.
5. Click Save.

After saving, the store is live and anyone who opens the store URL can view it. [L1294, 2020-26; L0076, undated]

- Speed score is not calculated while a store is protected. The speed score becomes available 1 to 3 days after protection is disabled, so the store stays hidden from speed measurement until protection is removed. [L1292, 2021-22]
- Conflict on removing the password, with costs and plan requirements:

| Source | Requirement | When each applies |
|---|---|---|
| [L0356, 2019] | Removing the password page costs about 29 USD and can be done even during the free trial | Older advice from 2019; check current Shopify plan rules before relying on it |
| [L0370, 2021-22] | The password cannot be disabled without a paid plan. Click Select a plan to end the free trial. The Basic Shopify plan is recommended, at USD 29 per month when billed every 30 days. A credit card is required, and remaining trial days are kept before the first charge. | Use this when the store is still on the free trial, since it requires a paid plan to remove the password |

Removing the password with a paid plan, step by step [L0370, 2021-22]:

1. Open Online Store > Preferences in Shopify admin.
2. Click "Select a plan" to end the free trial, since the password cannot be disabled without a paid plan.
3. Choose a plan; the Basic Shopify plan is the recommended starting plan, at USD 29 per month when billed every 30 days.
4. Add a payment method (a credit card is required); the trial days still remaining are kept before the first charge.
5. Return to Online Store > Preferences.
6. Under Password protection, turn off "Enable password" and click Save.
7. Check the storefront in a separate browser or private window to confirm the "Opening Soon" password page is gone.

### Link and content checks

- Click-test every link on the site and confirm each one opens the correct destination with no 404 errors, in this order [L0167, undated]:

1. Header menu links, including every item and every dropdown item.
2. Homepage collection sections, opening each collection.
3. Every other linked section or button on the homepage.
4. Footer links, especially the Quick Links and policy links.

- Click every link on the homepage, the collection pages, the about page and the policy pages. [L0855, 2023]
  1. Fix or remove any link that goes nowhere, is broken, or reloads the same page.
  2. Remove placeholder text and theme default labels, such as generic collection names, left over from installing the theme.
  3. Check that each product category matches what the store says it sells, and that the policy pages are rewritten for this business.
  4. Confirm that the contact method, shipping time and return policy are all filled in.

Note: [L0855, 2023] is listed above as a single procedure with five steps; the numbering in the source is 1 to 5, with the click-test as step 1.

- Before going live, check for glaring issues such as broken links, product pages missing information, mispriced items and empty collections. The store should look professional from the first day. [L1446, 2020-26]
- Check the About Us page and the rest of the site for typos before turning on ads. [L1068, 2019]

### Critical elements: prices, buttons and add-to-cart

- A product page with the price and compare price accidentally hidden produced 40 add-to-carts and only 4 purchases for one student. Always verify that critical information is visible. [L0067, 2023]
- A missing or unclear add-to-cart button is a technical oversight that can silently kill conversions. Verify that all buttons and fields work before running ads. [L0067, 2023]
- A product listing that shows a price of $0.00 or a broken price looks like a bug and kills trust. Test the product page and cart before sending paid traffic. [L0657, undated]
- check the store before turning on ads, in this order [L1068, 2019]:

1. Make sure the checkout works.
2. Make sure all links in the header and footer work.
3. Make sure every add-to-cart button works.
4. Check the About Us page and the rest of the site for typos.
5. Once confident, turn the ads on.

### Mobile and cross-device checks

- Check the store on mobile first, because most shoppers buy from phones and desktop views often look weaker. Make sure the layout looks trusting and polished on a phone. [L0657, undated]
- Check the store on a phone as well as on desktop, because the mobile layout can look much better or worse than the desktop version. [L0656, undated]
- Review a store on a phone in portrait view, not only on desktop, because desktop layouts can hide gaps where a product photo or GIF fails to fit. Count the taps needed to reach the real product page on the phone as well. [L0530, 2022]
- Check the mobile version separately from the desktop view at every stage of editing, because mobile is the main traffic source. Confirm that images, icon bars, reviews and FAQs look clean on mobile before publishing. [L1324, 2026; L1331, 2025-26]
- A product title shown vertically on mobile after Add to cart, while the cart shows it horizontally, looks broken and can cost a sale. A likely cause is a font size set too large for mobile. [L0837, 2025]
- Shopify checkout appears as a dropdown order summary on mobile but displays differently on desktop. [L0255, 2025]
- Scroll the whole page on mobile before linking the store from TikTok, to confirm that the lower half loads and that text and images display correctly. Most visitors arrive on their phone. [L1380, 2022]

Mobile-first store review, step by step [L0530, 2022]:

1. Open the store on a phone and count the clicks to reach the actual product page; a product page that takes around five clicks is a weakness.
2. Make sure the product page comes first on the page, with the product image, title, price and add to cart above everything else.
3. Move the product details, refund policy, and long text blocks below the main product information.
4. Place customer reviews above the email signup section and the footer.
5. Keep the footer last, and remove the "Powered by Shopify" credit only if your theme allows it.

Cross-device check before launch [L0552, 2023]:

1. Before launch, open the store page and every ad creative on a Windows PC and on a Mac.
2. Check the page on an iPhone and on an Android phone.
3. Fix any layout or visual differences before spending on ads, because a page can look correct on one device and broken on another.

- run a test purchase on desktop and on mobile to confirm orders go through, and check on mobile that all content stays visible and usable. [L0356, 2019]

### Test orders and checkout

- Place a test order before launch to check that the whole store works as intended. Reviewing it in the Shopify admin shows what a real customer order will look like. [L1302, 2020-26]
- Test order in Shopify [L1302, 2020-26]:

1. Open the store and go to the cart.
2. Remove most of the extra products, since a test does not require buying several units.
3. Go to checkout and enter any email address that uses the domain example.com.
4. Enter dummy shipping information.
5. Click Complete order.
6. Open the Shopify admin, go to Orders, and check that the test order appears.

- In Shopify Admin > Orders, a test order shows payment status payment pending, because it is not a live order and receives no payment. Its fulfillment status starts as unfulfilled. The list also shows the sales channel (Online Store), the order amount and the shipping method (here free shipping). [L1302, 2020-26]
- Before launching ad campaigns, place a full test order on your own store with your own credit card, going through the entire checkout. Check that every step works, then cancel the order, since the money returns to your account. [L1126, 2018]
- Test the payment flow on a new store [L1381, 2022]:

1. Place a real dummy order on your own store.
2. Cancel the order or issue the refund in Shopify.
3. Confirm the refund arrives quickly, which one seller reported as within seconds.

- Note on refund timing: [L1126, 2018] says the money returns to the account after cancelling, while [L1381, 2022] reports one seller's refund arriving within seconds. Both describe the same test; the refund timing depends on the payment provider and is not guaranteed by either source. [L1126, 2018; L1381, 2022]
- create a $1 test product on the store, add it to the cart, and go through a complete checkout, on both desktop and mobile. Then verify that the order confirmation appears and that the payment gateway processes without errors. This validates that checkout works before driving traffic. [L0268, 2020]

  1. Create $1 test product on store.
  2. Add to cart and go through complete checkout.
  3. Test on both desktop and mobile devices.
  4. Verify order confirmation appears.
  5. Confirm payment gateway processes without errors.

- When you create a test product to check the cart flow, turn off quantity tracking for it so you can add it to the cart from the storefront. This setting is only for testing and is not a recommended way to run a live product. [L1326, undated]
- Test the checkout with a real sale before scaling ad spend, so you know orders can be completed end to end. [L0823, 2018]
- Run the test before expecting any orders, because a store that looks finished can still fail at checkout. [L1324, 2026]

### Compliance review

- Before launch, check the store against the pre-launch compliance checklist. A second reviewer can look at the same checklist on the live store to catch items that were missed. [L0970, 2023]
- Link all policy pages in the store footer before running any ads, for Google compliance. [L1446, 2020-26]
- Legal pages must exist before traffic: refund policy and shipping policy, with company name and email address. [L1345, 2021+]
- Update the Legal section in Shopify Settings and make the Contact Us page list phone number, email and postal address. [L1145, 2021-22]
- Rewrite the policy pages for this business, not the theme defaults. [L0855, 2023]
- Link Privacy Policy, Terms of Service and Contact Us in the header and footer. [L1145, 2021-22]

### Viewing the store as a customer

- When you view your own store while logged in as admin, Shopify displays a bar stating that the store is not live and checkout is disabled. Use an incognito window or a different browser to see the customer view. [L0255, 2025]
- Shopify's bottom ribbon that reads Dropship appears only for admins logged into the Shopify admin while previewing the store. To confirm what customers see, open the storefront in an incognito window or while logged out of Shopify. [L0837, 2025]


Part 45 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/44-apps-and-leftover-code.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/46-launch-criteria-and-checklists.md
