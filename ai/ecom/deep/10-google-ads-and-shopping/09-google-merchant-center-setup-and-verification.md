<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 9 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/08-shopify-without-the-feed-app-conversion-pixel-rout.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/10-tax.md

## Google Merchant Center Setup and Verification

### Merchant Center's role in the setup

- Google Merchant Center connects your Shopify store to Google's ecosystem. It pulls product data from Shopify and makes those products eligible for free Google Product Listings, organic Google Shopping results and paid Google Shopping Ads. [L0181, undated]
- Merchant Center is the account that receives product data from the Shopify store and passes it to Google Ads, where Shopping campaigns are built. Its free listings show products in Google surfaces without paid ads, but bring only limited traffic. [L0731, 2021-22]
- It is required before Shopping campaigns can run, and the product feed is built there. It stores product data and formats it for Google Shopping ads. [L0726, 2021-22]
- It is the interface that passes your store's product data to Google so products can appear in free product listings and Shopping ads. It takes product data from Shopify and is set up separately from the Google & YouTube app. [L0729, 2020-26]
- It is the connection between a Shopify store and Google. It pulls product data such as images, descriptions, titles, prices, barcode numbers and manufacturer part numbers into the product feed used for Shopping ads. [L0739, 2021-22]
- Google builds the product feed from the connected Shopify store through Merchant Center, pulling images, titles, descriptions, prices, barcodes (GTIN) and manufacturer part numbers. Google matches these data points against searches to decide where ads are eligible. [L0741, 2021-22]
- Your product feed is sent to Merchant Center, and from there it is used by Google Ads. [L0762, 2020-26]
- All products are entered in Merchant Center, and active listings, shopping announcements, tax and shipping are configured there. Some Merchant Center functions were being moved into the Google Ads interface, so a future setup may run through Google Ads alone. [L0732, 2020-26]
- Merchant Center holds the product feed Google uses for Shopping listings. Its tips cover correct product data so that listings are approved and shown. [L1087, 2020]

### Accounts, identity and ownership

#### Login and email
- Use the same Google Workspace email address to log in to Merchant Center that you use for Google Analytics and Google Search Console. This makes all Google platforms connect properly. [L0181, undated]
- Use the same email address for Google Analytics, Google Ads and Merchant Center. [L0467, 2019]
- Sign in with the same Google Workspace email used for Google Analytics and Google Search Console before starting the sign-up. [L0729, 2020-26]
- For the business sign-up, use the business email address, for example the store's sales mailbox. [L0726, 2021-22]

#### Account structure
- Each store should have its own Google Merchant Center account. Separate accounts keep each store's product feed, approvals and suspension issues independent. [L1114, 2023]
- Only one website can be linked per Merchant Center account. A second website requires an advanced account. [L0731, 2021-22]
- Before clicking Link in Merchant Center, confirm that the Google Ads customer ID shown there is the account meant for Shopping campaigns. Linking the wrong account pulls the Merchant Center product data into it. [L0731, 2021-22]

#### Business country and time zone
- The business country cannot be changed after the account is opened. Set it to the country you sell in, which is not necessarily the country where you live. [L0726, 2021-22]
- The business country should be the country where the business is headquartered or legally registered and where it sells. It is fixed once the account is opened, so confirm it before submitting. The owner's personal location does not decide this field. [L0726, 2021-22]
- The registered country must be the country where the business operates. [L0729, 2020-26]
- The Merchant Center time zone is used to calculate and report performance. Choose the time zone of the business, not necessarily your own location. [L0726, 2021-22]
- Set the time zone to the business's time zone when creating the account. [L0726, 2021-22]

#### Domain verification and claim
- Google requires proof that you own the website before you can sell products through Merchant Center. Website ownership cannot be verified through the default Google Analytics setup. [L0732, 2020-26]
- **Sources differ:** [L0732, 2020-26] says the default Google Analytics setup cannot verify ownership. [L0728, 2020-26] and [L0467, 2019] (2019) describe verifying through Google Analytics with the same email. Both are stated as given. [L0732, 2020-26] presents the HTML tag route without tying it to a condition. [L0732, 2020-26; L0728, 2020-26; L0467, 2019]

##### Verification methods

| Method | Steps | Source | Notes |
|---|---|---|---|
| Google Analytics | Use the same email as the Analytics account and select the existing Analytics account when prompted | [L0728, 2020-26] | Verifies automatically if Analytics confirms domain ownership |
| Google Analytics | Choose verify through Google Analytics, click Next | [L0467, 2019] | Analytics code is already on the site and the domain matches |
| HTML tag | Copy the Google verification code from Merchant Center and paste it into theme.liquid | [L0732, 2020-26] | Paste in the head section |
| Google Tag Manager | Alternative if already installed on the site | [L0732, 2020-26] | The verification tag must stay in the head section so ownership keeps being recognised |
| Google Workspace domain | Meta tag method first, or DNS records method, which can be updated directly in Shopify | [L1094, 2023] | Check the pasted code for missing characters such as brackets, since that can stop verification |

##### Verify and claim through Google Analytics
1. Enter the website URL in Google Merchant Center. [L0728, 2020-26]
2. Use the same email address as the Google Analytics account, and select the existing Google Analytics account when prompted. [L0728, 2020-26]
3. Click Verify URL. If Google Analytics confirms domain ownership, the URL is verified automatically. [L0728, 2020-26]
4. Click Claim to claim the domain. [L0728, 2020-26]

##### Verify and claim through an HTML tag
1. Sign up for Google Merchant Center and enter your business name and website URL. [L0732, 2020-26]
2. Copy the Google verification code (HTML tag) from Merchant Center. [L0732, 2020-26]
3. In Shopify, go to Themes and edit the code of theme.liquid. [L0732, 2020-26]
4. Find the head section of the file (search for the head tag) and paste the verification code there. [L0732, 2020-26]
5. Save the theme and wait about 5 minutes for the change to be picked up. [L0732, 2020-26]
6. Return to Merchant Center and click Verify. [L0732, 2020-26]

##### Placing the tag in the editor
- To place the verification tag, open Themes, edit theme.liquid, and use the editor's find function to search for the closing head tag. Paste the verification code just above it, save the file, and then click Verify in Merchant Center. [L0732, 2020-26]
- In the example theme, the tag was pasted directly before the closing head tag on line 68. (older, 2019 to 2022 cases are not dated in this unit; the procedure is from one source) [L0728, 2020-26]

##### Workaround for the "malformed" error
- The error "Google Analytics tracking code on your site looks malformed" can appear when verifying through Google Analytics, even when the tracking code is correct. It often happens with custom or test themes. [L0728, 2020-26]
- Workaround (HTML tag verification):
  1. In Google Merchant Center, choose the option that you have access to your server and copy the HTML verification tag to the clipboard. [L0728, 2020-26]
  2. In Shopify admin, go to Online Store > Themes, open the theme (customize it, for example a copy of the live theme), and click Edit code. [L0728, 2020-26]
  3. Open the file theme.liquid. [L0728, 2020-26]
  4. Paste the copied HTML tag directly before the closing `</head>` tag. [L0728, 2020-26]
  5. Click Save. [L0728, 2020-26]
  6. Open the website to check that nothing is broken. [L0728, 2020-26]
  7. Return to Google Merchant Center, click Verify URL, then click Claim. [L0728, 2020-26]
- Test the storefront after adding a verification tag to theme.liquid to confirm the page still loads without broken code, before returning to Google Merchant Center. [L0728, 2020-26]

##### Claim and checks
- Verify and claim the website in Merchant Center: [L0731, 2021-22]
  1. Enter the website URL and click Continue. [L0731, 2021-22]
  2. Wait until Merchant Center shows the site as verified, which confirms the site is live. [L0731, 2021-22]
  3. Click Claim website. Claiming stops other accounts from using the same URL. [L0731, 2021-22]
- Enter the website URL with its full address beginning with https:// or http://. [L0731, 2021-22]
- Check in Merchant Center that the website is verified and claimed before finishing business information. [L0730, 2021-22]
- Check that the website is claimed and verified in Business information before moving on to branding or other settings. [L0727, 2021-22]
- If Merchant Center asks to verify a site that was verified before, the usual cause is that another Google login or person verified the store name, or someone edited the site and removed the verification code. Check who has access to the site first. [L0467, 2019]

### Choosing the Shopify connection path

- When Google detects your Shopify store, do not click **Connect to Shopify** and do not use the Google & YouTube app for product submission. Click **Continue to Merchant Center** instead. [L0181, undated]
- When Merchant Center offers to connect to Shopify, decline it and choose **Continue to Merchant Center**. The Shopify connection uses the Google & YouTube app, which is not the method used to submit products. [L0729, 2020-26]
- Do not follow the Shopify-guided option during Merchant Center sign-up. Skip it and connect Shopify to Merchant Center afterwards. [L0726, 2021-22]
- Skip the Shopify option at sign-up and connect Shopify later. [L0726, 2021-22]

### Sign-up procedures

Four procedures from the sources are kept complete. They differ in length and detail. Use the one that fits the account type and tooling of the store.

#### Sign-up sequence A
1. Open the Google Merchant Center signup page and click **Start now**. [L0181, undated]
2. Answer the initial questions: select **Yes** for selling products online, enter your store website URL, select **No** for having a physical store, then click **Continue**. [L0181, undated]
3. When Google detects your Shopify store, do NOT click **Connect to Shopify** and do NOT use the Google & YouTube app for product submission; click **Continue to Merchant Center** instead. [L0181, undated]
4. Confirm your business name (it should match your store name) and select your registered business country, then click **Continue to Merchant Center**. [L0181, undated]
5. Enter your registered business address (home address if sole proprietor, business address if you have one). This address is not shown to customers. Click **Continue**. [L0181, undated]
6. Verify your domain, which should already be verified via Search Console; confirm ownership verification and click **Continue**. [L0181, undated]
7. Select only the countries where you actually sell (example: United States). Click **Continue**. [L0181, undated]
8. Select **Enter delivery times manually**. Choose your store's order cutoff time. Enter your handling time and transit time to match your shipping policy, ensuring totals match what is stated on your site. Select **Free shipping** if applicable. Click **Save**. [L0181, undated]
9. Paste the URL of your Returns & Refunds policy. Select the countries you accept returns from. Confirm acceptance of both defective and non-defective products. Enter your return window to match your policy (example: 30 days). Select **mail** as the return method. Specify return shipping responsibility to match your policy. Select **No cost** for restocking fee if applicable. Enter refund processing time to match your policy. Review and click **Save**. [L0181, undated]
10. Skip linking Google Ads for now; it will be set up later after your products are approved. [L0181, undated]
11. Go to Settings > Data Sources, locate **Found by Google**, and click **Hide all automatically found products**. [L0181, undated]

#### Sign-up sequence B
1. Sign in with the same Google Workspace email used for Google Analytics and Google Search Console. [L0729, 2020-26]
2. Open the Merchant Center sign-up page and click **Start now**. [L0729, 2020-26]
3. Answer **Do you sell products online?** with Yes and enter the store's website URL. [L0729, 2020-26]
4. Answer **Do you have a physical store?** with No, then click **Continue**. [L0729, 2020-26]
5. Confirm that the store's compliance fixes are finished before continuing. [L0729, 2020-26]
6. When offered two connection options, do not click **Connect to Shopify**. Click **Continue to Merchant Center**. [L0729, 2020-26]
7. Confirm that you sell products (not services) and continue. [L0729, 2020-26]
8. Keep the business name equal to the store name, and set the registered country to the country where you do business. Click **Continue**. [L0729, 2020-26]
9. Enter the registered business address and continue. [L0729, 2020-26]
10. Accept the automatic domain verification, which Search Console already completed, and continue. [L0729, 2020-26]
11. Select only the countries where you sell, for example the United States. [L0729, 2020-26]
12. For shipping, set order cutoff time, handling time and transit time manually and match them to the shipping policy page. Enter the handling and transit times, then continue. [L0729, 2020-26]
13. Choose free shipping for all customers with no conditional values, then click **Save**. [L0729, 2020-26]
14. Paste the return policy URL, select whether returns are accepted for defective and non-defective products, and state whether exchanges are accepted, all exactly as the website's return policy says. [L0729, 2020-26]
15. Enter the return window, return method, who pays return shipping, restocking fee and refund processing time, matching the policies, then click **Next**. [L0729, 2020-26]
16. Review the summary, confirm it is accurate, and click **Save**. [L0729, 2020-26]
17. Skip linking Google Ads for now. [L0729, 2020-26]
18. Open **View products**. Products show "processing" first and lose that label once approved. [L0729, 2020-26]
19. Go to Settings > Data sources, open **Actions** and choose **Hide all automatically found products** so that the "Provided by you" source is used. [L0729, 2020-26]

#### Account creation for Shopping ads
1. Open the Google Merchant Center page and click **Get started**, then **Get started** again. [L0728, 2020-26]
2. Enter the country, the business display name (for example the store name), and the time zone, then click **Continue**. [L0728, 2020-26]
3. Accept the terms of service and choose whether to receive updates, then click **Continue**. [L0728, 2020-26]
4. Select the programs that fit your goals. Select Shopping actions only if you want it, knowing it needs more business history and product understanding, then click **Continue**. [L0728, 2020-26]
5. Confirm your choices and create the account. [L0728, 2020-26]
6. In the setup guides, start with the shopping ads setup (listed first, most important). [L0728, 2020-26]
7. Configure tax (see tax section), then shipping (see shipping section). [L0728, 2020-26]
8. Add the store website URL, verify it and claim the domain (see verification section). [L0728, 2020-26]
9. Upload the logo and set branding (accent color, square and rectangular logo). [L0728, 2020-26]
10. Link the Google Ads account to Google Merchant Center and approve the link request in Google Ads. [L0728, 2020-26]
11. Upload the product feed (covered in the next step of the course; this lesson does not include it). [L0728, 2020-26]

#### Account creation for Google Shopping
1. Open the Google Merchant Center sign-up page using the business email address, for example the store's sales mailbox. [L0726, 2021-22]
2. Click **Get started**. [L0726, 2021-22]
3. Enter the business name. Customers see it in product listings, and it becomes the Merchant Center account name. [L0726, 2021-22]
4. Select the business country, which is the country where you sell. [L0726, 2021-22]
5. Select the time zone of the business. [L0726, 2021-22]
6. Skip the Shopify option at this stage and connect Shopify later. [L0726, 2021-22]
7. Decide whether to receive marketing emails. This is optional. [L0726, 2021-22]
8. Accept the Merchant Center terms of service and create the account. [L0726, 2021-22]
9. Leave the remaining setup questions open. They are completed when the product feed is built. [L0726, 2021-22]

### Business information

#### Where to find it
- In Merchant Center, open the cogwheel (Settings) at the top right and go to Business information. Complete all of its fields, verify the domain and phone number, and add your branding. Incomplete business information can get the account suspended. [L1145, 2021-22]
- Business information is under the Tools section of the left menu, next to Shipping and returns, Regions and Sales tax. [L0727, 2021-22]
- The left menu holds these groups [L0730, 2021-22]:
  - Overview
  - Products: All products, Feeds, Diagnostics
  - Performance
  - Marketing
  - Growth
  - Tools: Shipping and returns, Regions, Sales tax, Shopping ads setup, Free listings setup, Comparison Shopping Services
  - Settings: Account settings, Account access, Preferences, Linked accounts, Automatic improvements, SFTP / FTP / GCS, Content API
  - Business information is one of the settings pages and holds the About your business and Branding tabs.
- If the interface is missing a menu such as Manage programs or Growth, the account may be in a Google test. Contact Merchant Center support, state the missing menu, and ask to be removed from the test or shown where to find it. (2023) [L0970, 2023]

#### Fields in About your business
- The About your business page contains: Business display name, Business address (Address line 1, Address line 2, City, State/Province, Postal/ZIP code, Country), Phone number, Website, and Customer service contact (URL, E-mail, Phone). [L0730, 2021-22; L0727, 2021-22]
- Click Save after entering the address. Complete the phone verification and customer service contact in the same tab. [L0730, 2021-22]
- The page for Shopping ads customer service contact fields is: Website, E-mail and Phone. [L0730, 2021-22]

#### Business display name
- Keep the business name equal to the store name, and do not change it. [L0729, 2020-26]
- Changing the business display name requires re-submitting product data before the new name takes effect. [L0727, 2021-22; L0730, 2021-22]

#### Business address
- The registered business address must match where the business is actually set up. A sole proprietor uses their home address, while an LLC may enter a business address. The address is not shown to customers. [L0729, 2020-26]
- **Sources differ:** [L0729, 2020-26] and [L0181, undated] accept a home address for a sole proprietor. A 2020 unit reports that a residential home address on a Merchant Center account or website may cause problems, with one reported case asking for photos of a warehouse. The cause is not confirmed, so use a commercial address such as a UPS store address where possible. [L0729, 2020-26; L0181, undated; L1111, 2020]
- The business address entered in Business information must match exactly the address shown on the website. A mismatch can lead to a Merchant Center suspension. [L0730, 2021-22]
- The address in Merchant Center must be the same as the address shown on the Shopify store and on the business documents. (2024) [L0971, 2024]

#### Phone number
- The phone number entered in Merchant Center must match the number on the website and must be verified. An unverified number can lead to a Merchant Center suspension. [L0730, 2021-22]
- Enter the business phone number under Business information, which must match the phone number on the website. [L0727, 2021-22]
- After a phone number is entered, it shows an **Unverified** label until verified. The **Verify number** button starts the process. The phone field uses a country code prefix (for an Australian store, +61), and the example format is (02) 1234 5678. The verification method screen has a **Change my number** link to correct the number before a code is sent. The website URL also shows an **Unverified** label. [L0730, 2021-22]

#### Customer service contact
- For Shopping ads, enter the contact-us page URL, the customer service email and the business phone number. The phone number should match the one on the website. [L0727, 2021-22]
- The Customer service contact for Shopping ads (Business information > Customer service contact) takes the contact-us page URL, a support email and the verified business phone number. [L0730, 2021-22]

#### Consistency across the store
- Information entered in Merchant Center (prices, tax, shipping, contact details, policies) must match the website exactly at all times. If it does not match, Google can suspend the account. [L0731, 2021-22]
- Merchant Center tax rate, shipping policy, return policy and contact information must match what the store shows. Mismatches can lead to limited performance or suspension for misrepresentation. (2023) [L0804, 2023]

### Phone verification

Steps:
1. Open Business information > About your business and click **Verify number**. [L0730, 2021-22]
2. Choose **Voice call** or **Text message**. For most phone providers, choose **Voice call**, because text messages often do not reach business numbers. [L0730, 2021-22]
3. The automated call reads a verification code. Enter the code in the field, then click **Continue**. The status changes to Verified. [L0730, 2021-22]
4. Enter the code exactly as heard. The code is a six-character code of letters and digits, not only digits. [L0730, 2021-22]
5. Enter the business phone number under Business information, then click **Verify number**, choose **Voice call** (text messages often do not work for business numbers), then enter the six-digit alphanumeric code from the automated call. [L0727, 2021-22]

Why it matters:
- Google verifies the phone number so it can confirm the business is reachable through the customer service number and that the account owner is genuine. Skipping verification makes Google suspect the account owner is not the real business owner. [L0730, 2021-22]
- Phone verification confirms the business owner and ensures customer contact works. [L0727, 2021-22]

### Branding

- Branding is optional. Leaving it empty does not cause suspension. [L0727, 2021-22; L0730, 2021-22]
- If you fill it in, the main color should match the background color of your logo, and the accent color should differ from the main color. [L0727, 2021-22]
- Logos only appear after Google approves them, and only in some Shopping ad placements, not all. [L0727, 2021-22; L0730, 2021-22]
- Branding is found under Business information > Branding. [L0730, 2021-22]
- Set up branding: open Branding, upload the logo, choose the accent color, and upload the square logo and rectangular logo. Shopping actions branding is not needed while Shopping actions is not used. [L0728, 2020-26]
- Merchant Center preferences: enable receiving opportunities to get Google's improvement suggestions. You can also upload a business logo, which Google may show during shopping sessions. [L0732, 2020-26]

Branding requirements:

| Element | Requirement | Source |
|---|---|---|
| Square logo format | PNG or SVG | [L0727, 2021-22; L0730, 2021-22] |
| Maximum file size | 5 MB | [L0727, 2021-22; L0730, 2021-22] |
| Dimensions | Minimum 500 x 500 pixels, maximum 2,000 x 2,000 pixels | [L0727, 2021-22; L0730, 2021-22] |
| Ratio, square logo | 1:1 | [L0727, 2021-22; L0730, 2021-22] |
| Rectangular logo | Also uploaded; appears on small screens | [L0730, 2021-22] |
| Main color | Matches the logo background color; hex format (for example #FFFFFF) or rgba | [L0730, 2021-22; L0727, 2021-22] |
| Accent color | Optional; must differ from the main color | [L0730, 2021-22; L0727, 2021-22] |

(older, 2021-22 for all rows above except where noted in the source list; the [L0728, 2020-26] and [L0732, 2020-26] units are undated or from one source)


Part 9 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/08-shopify-without-the-feed-app-conversion-pixel-rout.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/10-tax.md
