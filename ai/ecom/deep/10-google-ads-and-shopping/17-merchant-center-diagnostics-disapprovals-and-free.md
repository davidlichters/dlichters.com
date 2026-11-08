<!-- part of ecom/deep/10-google-ads-and-shopping.md -->
Part 17 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/16-merchant-center-promotions.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/18-feed-sync-and-update-timing.md

## Merchant Center Diagnostics, Disapprovals and Free Listings

### Daily Diagnostics Routine

1. Open the Merchant Center home page and check how many products are disapproved [L0732, 2020-26].
2. Open Diagnostics to see the exact error for each disapproved product [L0732, 2020-26].
3. Fix the errors in the store or feed app, then let the feed update [L0732, 2020-26].
4. Check the last upload date in the Feeds section to confirm the feed is refreshing [L0732, 2020-26].
5. Confirm that the feed is live and free of errors and warnings, and fix problems immediately. Google's error emails are unreliable, so do not depend on them alone. A feed that is offline for a day or two loses those searches [L0575, 2014].
6. Spot-check your top 10 to 20 best-selling products:
   1. Confirm they appear in Google Ads and Bing Ads if you run them [L1357, 2018].
   2. Confirm they show as organic results if you do SEO [L1357, 2018].
   3. If a product is missing, find the cause and fix it immediately, because customers cannot buy what they cannot find [L1357, 2018].
7. Check the Overview page. The top right shows free listings with the number of active and disapproved products. Click Diagnostics for the reasons [L0470, 2023].
8. Do not let disapprovals build up. In an aged store example, 474 products were approved and 81 needed optimization, which means roughly 15% of products were not showing in Shopping. Each unapproved product is a potential loss of sales, so these errors should be fixed quickly [L0732, 2020-26].
9. Merchant Center disapproves products that break Google's policies automatically and lists them, so you can see what Google rejects. If the reason for a disapproval is unclear, Google support can explain it [L0732, 2020-26].

### Where to Find Diagnostics

- Merchant Center > Products > Diagnostics shows item issues and feed issues for all products, with affected destinations (Shopping ads, Dynamic Remarketing, Free listings), countries and the share of affected past clicks [L0727, 2021-22].
- The Diagnostics page has three tabs: Item issues (problems per product), Feed issues, and Account issues (account-wide problems such as suspensions by country) [L0730, 2021-22].
- The Products overview graph shows counts of Active, Expiring, Pending and Disapproved items over time [L0730, 2021-22].
- Each row in Item issues shows the number of affected items plus two shares: % affected and % affected past clicks. The default date range is the last 30 days up to today. In the example, each issue affected less than 1% of items [L0730, 2021-22].
- To filter, set destination to Shopping ads, countries to All and primary feed to All [L0730, 2021-22].
- In the Products section, items not approved for Shopping ads are marked [L0732, 2020-26].
- The product detail page (Products > All products, then click the product) shows:
  - Item status with the issue [L0730, 2021-22].
  - Affected destinations: Shopping ads, Dynamic Remarketing, Free listings [L0730, 2021-22].
  - Technical details: Expires in (for example 11 day(s)), Created on, Primary feed, and whether the data comes from the Content API [L0730, 2021-22].
- After Google has checked your feed, open Products > Diagnostics and fix every product warning, such as missing barcodes or products without a price [L1145, 2021-22].
- The Merchant Center account does not show whether Google Ads is active. Check the Google Ads account for that. Merchant Center shows the feed, approved products, rejected products and errors [L0964, 2023].
- Merchant Center shows the status of every product feed item. Products flagged with red errors need fixing before they can show, so check that all products are green [L1112, 2021; older].
- Products > Diagnostics for the specific issue is the first step when fixing a feed error [L0971, 2024; L1015, 2020-26].

### Reading Warnings Versus Violations

- Yellow warning signs are optimization suggestions for ad performance. They are not violations, do not cause a suspension, do not stop ads from running, and are optional to fix [L0727, 2021-22; L0730, 2021-22; older].
- Red disapprovals are the items that must be fixed [L0730, 2021-22; older].
- Google Merchant Center can show limited reach for policy violations while ads still run. Read the exact warning wording before deciding whether the problem is urgent [L0855, 2023].
- The restricted reach from a policy violation is fixed by changing the flagged content, not by stopping the campaign [L0855, 2023].
- Limited performance due to missing value (gtin) means the product still runs but with reduced performance because the barcode is missing [L0727, 2021-22].
- A product disapproval or missing GTIN can stop its feed from showing in ad previews. Check the Merchant Center issue report for the affected products and fix them [L0966, 2025].
- The same Shopping ads policy warning can appear twice in Merchant Center. Treat it as one issue when fixing the feed [L1170, 2021-22; older].
- Variant-based issues are often not a major problem if the primary products of the store are already approved and showing. It is usually not worth rewriting every variant of every product only for Shopping Actions [L0738, 2021-22; older].
- A Merchant Center notice that point-of-sale or inventory data for local product listings has expired can usually be ignored when the store's products are already approved and selling. Confirm the product listings and account status before acting on it [L0666, 2024].
- Without a visible message in Merchant Center, low organic Shopping impressions are not caused by a restriction. A niche-wide restriction would affect every store in that niche, not just one [L0837, 2025].
- Merchant Center approval problems can delay a new store by about 20 days, so resolve the flagged issues before expecting Shopping traffic [L0667, 2025].

### Item Issues and Common Fixes

#### Common Item Issues

Diagnostics > Item issues, with the affected field and the meaning for the store:

| Issue | Affected field | Meaning and fix |
|---|---|---|
| Violation of Shopping ads policy | Product | Product is blocked by Google's Shopping ads policy; check the item status and either fix the product or request a review if it is wrongly flagged |
| Invalid value (gtin) | GTIN | Barcode is not valid; correct the barcode in Shopify and the supplier data so it flows into the feed |
| Missing value (shipping) | Shipping | Shipping value is missing in the feed; add the shipping setting so it reaches Merchant Center |
| Limited performance due to missing value (gtin) | GTIN | Product still runs but with reduced performance because the barcode is missing; add the GTIN |
| Promotional overlay on image (image link) | Image | Product image contains a promotional overlay; use an image without promotional overlays |
| Low image quality (image link) | Image | Product image is rated low quality; replace it with a sharper, clearer image |
| Value truncated (too long) (title) | Title | Product title is cut off because it exceeds the length limit; shorten the title |
| Excessive capitalization (title) | Title | Title uses too many capital letters; rewrite it in normal capitalization |

[L0727, 2021-22]

Common Merchant Center disapproval reasons for a Shopping ads destination, seen in diagnostics:
- Violation of Shopping ads policy [L0730, 2021-22]
- Invalid value [gtin] [L0730, 2021-22]
- Missing value [shipping] [L0730, 2021-22]
- Promotional overlay on image [image link] [L0730, 2021-22]
- Limited performance due to missing value [gtin] [L0730, 2021-22]
- Value truncated (too long) [title] [L0730, 2021-22]
- Low image quality [image link] [L0730, 2021-22]
- Excessive capitalization [title] [L0730, 2021-22]
- Invalid value [gtin] (duplicate or non-valid) [L0730, 2021-22]
- Missing or outdated availability updates [availability] [L0730, 2021-22]
- Disallowed code in description [description] [L0730, 2021-22]

Common Shopping Actions feed issues. Each warning shows the affected items and percentage in the Diagnostics view:
- Duplicate GTIN values [L0738, 2021-22]
- Potentially inaccurate price [L0738, 2021-22]
- Promotional overlay on the image link [L0738, 2021-22]
- Same value for differing variants [L0738, 2021-22]
- Invalid GTIN or colour [L0738, 2021-22]
- Incorrect identifier [L0738, 2021-22]
- Ungrouped variants with a matching image link [L0738, 2021-22]
- Ambiguous GTIN [L0738, 2021-22]
- Character encoding problems in the description (UTF-8) [L0738, 2021-22]

Duplicate variant warnings often come from variants that share the same GTIN or other identifiers. Fix them by submitting unique values for each variant, because Google ignores very similar variants and serves a single ad for them [L0738, 2021-22].

Product-level disapprovals affect only those products and do not suspend the whole account when they are a small share of the feed [L0730, 2021-22].

#### GTIN

- Products showing missing GTIN, MPN or brand errors point to broken product URLs, outdated feed data, or missing brand fields. Verify:
  1. The URLs are working [L0276, 2024].
  2. The feed updates every 24 hours [L0276, 2024].
  3. The brand field is populated in your Shopify store [L0276, 2024].
  4. The brand is mapped correctly in your feed [L0276, 2024].
- Fix a missing GTIN:
  1. Email the supplier and ask whether each affected product has a GTIN and what it is [L0807, 2025].
  2. Add the GTIN for every product where the supplier provides one [L0807, 2025].
  3. Only if no GTIN exists, use the manufacturer part number (MPN) instead, following Google's documentation on when this is allowed [L0807, 2025].
- Fix a valid disapproval such as an invalid GTIN:
  1. Identify the product from the diagnostics list [L0730, 2021-22].
  2. In Shopify, open the product and check the barcode value linked to it [L0730, 2021-22].
  3. Compare it with the supplier's product information and make sure the values match [L0730, 2021-22].
  4. Change the value in Shopify if needed [L0730, 2021-22].
  5. The change passes through the feed to Merchant Center and the disapproval updates automatically [L0730, 2021-22].
- Errors in product data such as invalid GTIN values should be fixed in the source data (Shopify and supplier information), so the corrected value flows automatically through the feed into Merchant Center [L0727, 2021-22].
- For a missing identifier warning:
  1. Check that every product and every variant has a unique SKU [L0855, 2023].
  2. Resubmit the existing product feed so the products are pulled in again. Do not create a new feed [L0855, 2023].
  3. Wait a couple of days for the missing-identifier warning to clear [L0855, 2023].
  4. If the warning remains, set the identifier-exists attribute to false for those products, accepting that they may show in fewer searches [L0855, 2023].

#### Images

- Promotional overlay on the image and low image quality are image issues. Use an image without promotional overlays and replace low-quality images with a sharper, clearer image [L0727, 2021-22; older].
- A product photo can be wrongly flagged for partial nudity under Google's personalized advertising policy. If you review the images and none show nudity, submit a review request with the compliance confirmation ticked [L1170, 2021-22].

#### Limited Discoverability

Fix a limited discoverability warning:
1. Open the links in the warning, such as the editorial and professional requirements policy [L0470, 2023].
2. Check that the website domain matches the domain listed in the upload [L0470, 2023].
3. Remove broken links and any placeholder content [L0470, 2023].
4. Make sure the whole store works, then submit the review again [L0470, 2023].
5. Have someone outside the business click through the store as a customer and report anything that looks untrustworthy [L0470, 2023].

Basic policy compliance for free listings: the company's physical address, email, phone number and terms and conditions should be easy to find on the website. The product data should contain only products that Google supports [L0731, 2021-22].

#### Adult Content and Nudity Flags

- If Google flags products for adult content by mistake, appeal immediately in Merchant Center. The initial flag is automated and a person reviews the product only after you request a review [L0471, 2024].
- A policy flag on one product, such as an image wrongly marked for partial nudity in personalized ads, suspends only that product [L1170, 2021-22].
- A mismatch between prices, taxes or shipping shown at checkout and those in the feed can suspend the entire product feed, so checkout settings must match the feed exactly [L1170, 2021-22].

#### Titles, Descriptions and Other Fields

- Common disapproval causes include missing product microdata and overly long product titles. Shorten and simplify titles, and fill in every field Google requests, because fixing these errors makes Google prefer the products more [L0732, 2020-26].
- Fix a 'product has one missing or invalid field' Merchant Center error:
  1. Open Merchant Center > Products > Diagnostics for the specific issue [L0971, 2024].
  2. Open the product in the feed and check each section for empty fields [L0971, 2024].
  3. Compare a rejected product with an approved one side by side [L0971, 2024].
  4. Fix errors and resubmit [L0971, 2024].
  5. Alternatively, remove unwanted products from the Google Shopping feed app and submit a new feed [L0971, 2024].
- Missing required product information can stop listings from qualifying for badges such as the 30-day return badge [L0970, 2023].

#### Policy Violations on a Product

- Fix a policy violation. When one product is flagged while identical product sizes are approved:
  1. Open the product's violation link to see which policy is cited [L0429, 2022].
  2. Compare the flagged product page with the approved pages side by side in separate tabs [L0429, 2022].
  3. Remove the product from the product feed, resubmit the feed, add the product back and resubmit again [L0429, 2022].
- Find the cause of a violation:
  1. Note whether the violation appears in Google Merchant Center or in Google Ads [L0855, 2023].
  2. Copy the exact warning wording, because the wording shows which policy is involved [L0855, 2023].
  3. Find the flagged text or image on the product page and read the policy that the warning names [L0855, 2023].
  4. Change the flagged content, then resubmit the product or request a review [L0855, 2023].
- Product pages flagged as unsupported shopping content or limited can be checked against competitor pages that sell the same product without a warning. Compare the description for copied supplier text or unique wording that might trigger the flag, and do not copy competitor text [L0472, 2025].
- A product disapproval for a dangerous or prohibited category can be a false positive from automated review, for example a steam shower flagged as recreational drug equipment. Check the product's category and content before accepting the disapproval as correct [L0730, 2021-22].
- A disapproved product's detail page has an Actions section that suggests reviewing the Shopping ads policies and updating the feed to meet requirements, with a Learn more link. Use Request review only when the product is actually compliant. If it breaks a policy, fix the feed data first [L0730, 2021-22].
- Google's automated product checks can make mistakes. Wrongly flagged products should be challenged with a review request, while real product errors should be fixed in Shopify and the feed [L0727, 2021-22].

### Manual Reviews and Appeals

- Review a disapproved product:
  1. Open Diagnostics > View examples for the issue, click the product, and check the item status [L0727, 2021-22].
  2. If the product is wrongly flagged (for example, a steam shower wrongly flagged as recreational drugs or drug-related equipment), select Request review [L0727, 2021-22].
  3. Tick the box confirming the product complies with Shopping ads policies and the product feed specification [L0727, 2021-22].
  4. Submit the manual review request [L0727, 2021-22].
  5. Review takes about one day, and the product is expected to be reapproved within 24 hours [L0727, 2021-22].
- Request a manual review for a wrongly disapproved product:
  1. Open Products > All products and click the product, then find the issue in the Item status section [L0730, 2021-22].
  2. Under Actions, click Request review [L0730, 2021-22].
  3. Tick the confirmation box that the product complies with Shopping ads policies and the product feed specification [L0730, 2021-22].
  4. Click to request the manual review [L0730, 2021-22].
  5. Wait. The status changes to under review and a person reviews the product. Re-approval is expected within up to 24 hours, after which the product returns to the feed and can be advertised [L0730, 2021-22].
  6. While under review, no other action is possible on that product [L0730, 2021-22].
- A product under manual review cannot be edited or acted on further until Google decides, so fix all other issues on that product before requesting a review [L0727, 2021-22].
- Use Request review only when the product is actually compliant [L0730, 2021-22; older].
- If a Google Merchant Center account or product listing is disapproved or suspended, request a review through Merchant Center. Follow the Google support document on requesting a GMC review, which describes the submission path [L1093, 2023].
- If the suspension looks like an algorithm error, investigate the product first and then request a review:
  1. Open Products > All products [L1170, 2021-22].
  2. Search or filter for the product [L1170, 2021-22].
  3. Open the product to view its data points [L1170, 2021-22].
  4. Compare the final attributes Google uses with the raw feed attributes. Missing attributes often explain suspension [L1170, 2021-22].
  5. Check the Item status for violated policies and affected destinations [L1170, 2021-22].
  6. If the suspension looks like an algorithm error, tick the compliance confirmation and click REQUEST REVIEW [L1170, 2021-22].
- Product data changes in Merchant Center can take up to 30 minutes to appear. Diagnostics lists disabled products, but the individual product page usually gives the specific reason [L1170, 2021-22].
- When fixing a suspension or product disapproval, read Google's Shopping ads policies and the product data specification pages before you change anything. These pages are linked from the Merchant Center diagnostics and define what each issue means [L0727, 2021-22].

### Account-Level Suspensions and Country Scope

- A small share of disapproved products does not suspend the whole account. The risk of account suspension rises significantly when a large share of products is disapproved, for example 3,000 out of 6,000 [L0727, 2021-22].
- A well managed feed of about 6,000 products including variants can have a few products disapproved at any time. A share below 1 percent of affected items is not a serious problem, while a large share (for example 3,000 of 6,000) greatly raises the risk of a whole-account suspension [L0730, 2021-22].
- A high number of disapproved products relative to the total feed increases the chance of an account-wide suspension [L0730, 2021-22].
- Example from an active account: about 6,000 approved products (including variants), with a few disapproved items, mostly from invalid GTIN values, missing shipping value, promotional overlay on the image and a policy violation. Less than 1% of past clicks were affected by these issues [L0727, 2021-22].
- Account-wide suspensions appear under Merchant Center > Diagnostics > Account issues. Each country where the account is suspended is listed separately, so a suspended country (for example Canada) can be inactive while the main country account stays active [L0727, 2021-22].
- Account-wide suspensions appear under Account issues, with the affected country and the reason stated. A suspension for one country (e.g. Canada) does not affect the account for another country if no products are offered there [L0730, 2021-22].
- An account-level suspension appears on the Overview as a notice that all items are suspended from listed destinations, with a reason such as a feed specification violation for inappropriate currency. The suspension can cover all destinations or only one country, for example Canada, while a store with no offers in that country stays unaffected in the other country [L0730, 2021-22].
- A feed specification violation such as an inappropriate currency can suspend the account for one destination country only, even when no products are offered there. Under Diagnostics > Account issues, each suspended country is listed separately, so check the country named in the notice and the currency set for it in the feed [L0727, 2021-22].

### Approval Timelines

The sources give different values for different situations. Each value below is paired with the situation it describes.

| Situation | Timeline | Source |
|---|---|---|
| First Merchant Center review of a clean submission (no warnings, no exclusions) | 2 to 4 days; products stay in Pending during this period | [L0182, 2026+; L1168, 2026+] |
| First Merchant Center review, sometimes longer | Up to about four days | [L1168, 2026+] |
| Feed moving from pending to approved after submission | 2 to 3 days | [L0964, 2023] |
| Merchant Center approval in general | Usually a few days, sometimes up to a week; campaigns can be set up while products are pending, but nothing spends until approval | [L0941, 2022] |
| Google approval and first impressions, no fixed timeline | A day to about a week or more; check the account daily after launch | [L0468, 2020] |
| Merchant Center approval problems for a new store | About 20 days of delay | [L0667, 2025] |
| New Google Ads Shopping campaign under review | Status shows All ads under review; about 30 minutes or a few days; impressions and clicks should start within a day once approved | [L0743, 2026+] |
| First-time Google Ads approval | About 2 days or more; impressions start only after approval | [L1111, 2020] |
| Campaign stuck because of a feed issue | Delete the campaign and recreate it; approval should follow within about a day | [L0964, 2023] |
| Manual review of a wrongly flagged product | About one day for review; reapproval within 24 hours | [L0727, 2021-22; L0730, 2021-22] |

- Newly submitted products have the status Pending, which is normal. The first review by Google usually takes 2 to 4 days, and sometimes up to about four days, before products become approved [L1168, 2026+].
- After Merchant Center approves a product, it appears in the free product listings in Google Shopping without any manual submission at the account setup stage. Until approval, the product status shows 'processing', and that label disappears once the product is approved [L0729, 2020-26].
- In the Symprosis Google Shopping Feed dashboard, a newly linked store shows all products as Pending [L1168, 2026+].
- If a Google Ads campaign is stuck because of a feed issue, delete the campaign and recreate it. Approval should follow within about a day [L0964, 2023].
- If Google gives a date by which a policy warning must be resolved, do not keep editing the product page past that date. Set the product to inactive if the warning is still not cleared [L0472, 2025].
- Check the account daily after launch, because there is no fixed approval timeline [L0468, 2020; older].
- If free listings setup fails to add products on the same step for several days in a row, contact Google Merchant Center support. The cause may be a glitch or a setting that needs to be turned on [L0835, 2023].


Part 17 of 56 of "10. Google Ads and Shopping: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping.md · Previous: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/16-merchant-center-promotions.md · Next: https://dlichters.com/ai/ecom/deep/10-google-ads-and-shopping/18-feed-sync-and-update-timing.md
