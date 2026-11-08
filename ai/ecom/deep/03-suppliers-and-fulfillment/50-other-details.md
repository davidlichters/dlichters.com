<!-- part of ecom/deep/03-suppliers-and-fulfillment.md -->
Part 50 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/49-scaling-supplier-base-and-business-continuity.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/51-risk-and-insurance.md

## Other details

### Supplier and product sourcing

#### E-book and book supply

- E-book suppliers fall into two groups: those holding ready stock and those without it. Ready-stock books are reached through direct factories or through agents acting as middlemen. [L0560, 2026]
- Leftover balanced stock of a book usually appears when its demand has cooled off. Such books are often available without a minimum order quantity (MOQ), which lowers the cost of testing them. Treat the leftover stock as a supply signal and verify demand with your own test before scaling. [L0560, 2026]
- If a supplier offers a book in MOQ stages, this signals that the book has real demand. Use supplier MOQ status as one of the green-light checks before testing. [L1175, 2026]
- Custom bottom-of-funnel image ads are the simplest test of whether supplier customization of a book is worth the cost. Run them on the customized product before paying for full personalization, and use the response to decide. [L0794, 2026]

Getting a customizable PDF e-book from a hardcover: [L0560, 2026]

1. Search Amazon for a similar book.
2. Buy the hardcover and have it delivered to your home.
3. Send the hardcover to your agent, who scans it into an e-PDF (soft copy).
4. Once the PDF is ready, have the agent print hard copies from it when needed.
5. List the product with two sale options: sell as PDF or sell as hardcopy.

In the Singapore example, the Amazon hardcover cost S$7.03 with S$12.17 shipping to Singapore. Sales taxes may apply at checkout. [L0560, 2026]

Rewriting a book PDF before printing: [L0333, 2026]

1. Ask the supplier for the PDF of the book; the physical book itself is not needed.
2. Upload the PDF to ChatGPT.
3. Ask ChatGPT to rewrite the whole PDF with the desired content changes, starting with the first pages such as the table of contents and the chapter 1, 2 and 3 headings.
4. Check the rewritten PDF for unwanted changes.
5. Send the rewritten PDF back to the supplier, who prints the book from that file.

Case: the owner found a very niche book on Amazon because no PDF version existed in the market. The owner bought a copy from Amazon and waited about a month to receive the PDF from the US. The slow delivery led to late fulfillment, chargebacks and a reserve hold. The author publicly accused the seller of selling without consent, which led some fans to dispute charges with their bank. [L0351, 2026]

To speed up delivery of a physical book sourced from Amazon, a contact in the US can buy the book locally and scan it into PDF, so the digital copy can be sent quickly to a seller located abroad. The PDF can then be customized with a new cover and internal pages. [L0351, 2026]

Printing copyrighted books through a third-party agent in China can be fast, but it carries copyright and dispute risk. This option was mentioned only for urgent situations. [L0351, 2026]

#### Supplier trust and verification

- Publish the supplier for each ingredient on the product or supplier page, showing where each ingredient is sourced. This is a major trust signal, though it takes work, and the brand notes that few competitors do it. [L0334, 2017]
- Shein was mentioned as a source for swimwear and fashion sellers, and many of those products are also found on CJ and AliExpress. Products sold this way can be advertised with product-only images, avoiding revealing photos. [L0678, 2023]
- Stubgroup is listed as a supplier or fulfillment-related resource. The source does not describe it further, so verify its role before using it. [L1095, 2024]

#### Validating a product before testing

- Run a sample purchase to validate a product before promoting it: [L0706, 2020+]
  1. Order one unit of the product from the supplier.
  2. Check the order count on the supplier listing and the seller's history.
  3. Decide whether it is worth testing based on sales volume, not views alone.
- Validate a product on AliExpress before testing it: [L0706, 2020+]
  1. Search for the product on AliExpress.
  2. Check the number of units sold on the listing.
  3. Treat roughly 1,000 to 10,000 units sold as a sign that the product is selling.
  4. Ignore low comments or likes on ads when you use this check.
- Products listed on Amazon can also be dropshipped, which means the shipping time may be just as slow. Check where the product ships from before assuming fast delivery. [L0706, 2020+]
- Check order counts for each listing of the same product separately, because different sellers and regional AliExpress versions can show very different numbers. One European listing of a product had over 5,000 orders, while another listing of the same product showed about 213 orders. [L0706, 2020+]
- A sample order reveals more than the order count. It also shows the real delivery time to your market, which decides whether viral interest will still be there when the product arrives. Order one unit before you commit to a product that depends on fast shipping. [L0706, 2020+]
- A product with no Amazon listing is not automatically a sign of poor quality, because it may simply be new to the market. The absence of a listing alone is not a reliable basis for judging the quality of a product. [L0708, undated]
- To test a spotted trending product fast, buy a unit on Amazon so you can film with it immediately, rather than waiting for a slow supplier shipment. The referenced creator received the item the same day it was ordered. [L0821, undated]
- Look for emerging products on AliExpress before they go viral on TikTok, and test a product there if it fits your content. Being the first creator to test a new winning product lets you capture most of its views and sales. [L1380, 2022]

#### Trend and supply data

- Kalodata's Local Warehouse Dropshipping tab lists products that ship from local warehouses. This usually means shorter delivery times than cross-border shipping, so check this tab when delivery speed matters for your offer. [L1479, 2026]

### Marketplace and channel rules

- Consolidate duplicate listings. When a product is listed under multiple product identifiers (for example, two different ASINs for the same book: BOGSW62L47 and BOGSJY9PQT), review velocity, bestseller rank and ad conversion data split across listings, diluting all performance signals. Consolidating duplicate listings concentrates data and improves ranking velocity, visibility and performance metrics. [L0221, 2026]
- On eBay, new sellers can only list 10 products initially and must work their way up slowly due to seller restrictions and account maturation requirements. [L0280, undated]
- Health & Personal Care on Amazon requires three supplier invoices to prove you own the product and are purchasing it. Gather these documents during the supplier approval process. [L0227, 2014]
- This business model ships domestically within the US only. Cross-border shipping, customs and international tax rules are not covered, so international orders need separate research before you accept them. [L0835, 2023]

### Payments and provider costs

- Shop Pay operates only in the US. For international sellers, use Shopify Payments (launching soon), Clear Paper or Color as alternatives. [L0324, 2025+]
- Negotiate provider discounts every three months: ask Shopify, the payment processor and PayPal for lower fees. One store saved $100 per month (over $1,000 per year) with a single phone call to Shopify. A credit card fee cut of even 0.1% adds up over 12 to 24 months. [L0575, 2014]

### Packaging, mailers and print partners

#### Stickermule poly mailers: pricing

Two screenshots show different prices for the same 10 x 13 inch mailer. The source describes them as taken minutes apart, although the recorded times are 06:57 and 09:35. The 50-unit price rose from $49 to $71, about 45 percent higher. Use the live quote before ordering. [L0884, 2025-26]

First screenshot, 06:57 (price per mailer calculated except where shown). The 50-unit price was $49:

| Quantity | Price | Price per mailer | Discount vs 50 units |
|---|---|---|---|
| 50 | $49 | $0.98 (shown) | none |
| 100 | $85 | $0.85 | 13% |
| 200 | $147 | $0.74 | 25% |
| 500 | $308 | $0.62 | 37% |
| 1,000 | $540 | $0.54 | 45% |
| 2,500 | $1,134 | $0.45 | 54% |
| 5,000 | $1,989 | $0.40 | 59% |

[L0884, 2025-26]

Second screenshot, 09:35 (partly unreadable). The 50-unit price was $71:

| Quantity | Price | Price per mailer |
|---|---|---|
| 50 | $71 | $1.42 (shown) |
| Larger quantities (mapping not fully legible) | $215, $452, $793, $1,671, $2,939 | not shown |
| Discount labels shown | 13%, 24%, 36%, 44%, 53%, 59% | not shown |

[L0884, 2025-26]

Always check the live quote before ordering. [L0884, 2025-26]

#### Stickermule poly mailers: ordering

- Stickermule's poly mailer order page offers three sizes: 7.5 x 10.5 inch, 10 x 13 inch and 14.5 x 19 inch. Choose the size before comparing prices, since the quantity price ladder shown for 10 x 13 inch mailers applies only to that size. [L0884, 2025-26]
- Order flow for poly mailers: [L0884, 2025-26]
  1. Choose the product Poly mailers.
  2. Select the size (for example 10" x 13").
  3. Select the quantity (from 50 to 5,000 or a custom quantity).
  4. Click Continue.
  5. Click Next: upload artwork.
- Stickermule offers an order samples option before a bulk order, so you can check the material and print quality first. [L0884, 2025-26]
- Stickermule poly mailers are advertised with a 4-day turnaround and free shipping, which matters when planning packaging for launch dates. [L0884, 2025-26]

#### Stickermule poly mailers: material and print

- Stickermule poly mailers are made from a recyclable, low-density polypropylene material, which is relevant if eco-friendly packaging is part of the brand. [L0884, 2025-26]
- Stickermule includes full bleed, full-color printing on poly mailers at no additional cost, so the design can extend to the edges of the mailer without extra fees. [L0884, 2025-26]
- Poly mailers from this supplier are described as tear-proof, self-sealing and weather resistant, and are suited to apparel and soft goods. [L0884, 2025-26]

#### Print and mail partners

- Print and mail partners, such as specialist printers and mailing houses, know delivery tactics, personalisation, grabbers and the rules around them. Ask them for samples and their experience before commissioning a campaign. [L1370, undated]

### Physical samples and local distribution

#### Sample rules

- Deliver samples locally through stores rather than by mail, because people will travel to pick up a free sample more readily than they will write for one. Where possible, send samples to a nearby retailer and name that retailer in the offer. [L1261, undated]
- Distributing samples unsolicited to homes or through dealers in bulk is usually a waste, because many never reach the intended person and the product's image suffers. Samples should only go to people who asked for them after hearing your story. [L1261, undated]
- Limit samples to one per household and say so in the offer, because repeat requests from a few people are not buyers and cost the business money. Calculate the cost of repeat sampling into your sample budget. [L1261, undated]
- Sending a free sample to a few distributors and dealers at the same time as ads run can create a national presence in a single week. The free packages can cost less than other ways of forcing distribution. [L1261, undated]

#### Dealers and retail distribution

- Consignment shipments to retailers are generally a poor distribution method, since retailers resent them and collections are difficult. Use models where the retailer buys the product or where demand is created by ads first. [L1261, undated]
- For a sample coupon that is redeemable at any store, send the ad proof and the list of publications with their circulation to dealers in advance so they can stock. Each coupon redemption then counts as a full-price sale for the dealer, which motivates them to stock. [L1261, undated]
- When samples are requested at a central store, that store gets the traffic, and other dealers accept this as long as they share in the sales. Routing traffic to supplied stores solves the problem of uneven stocking. [L1261, undated]
- Dealers often discount advertised products and rarely push another company's product hard. Plan distribution around your own selling effort instead of expecting retailers to sell it for you. [L1261, undated]

Rollout sequence for local distribution: [L1261, undated]

1. Begin with advertising in a few local markets, one town at a time.
2. Name the stores that already stock the product in each ad.
3. Add each new stocking store's name to later ads as dealers join.
4. Move to wider national advertising once local distribution is in place.

#### Retail and wholesale buyers

- Retail buyers, especially grocery chains, often ask for syndicated sales and scan data, called spin data, when a brand is being listed. Prepare this data and the sales performance behind it before pitching the retailer, otherwise the listing process stalls. Hire someone who handles retail data requests once wholesale accounts grow. [L0334, 2017]
- The store-building method also works for B2B niches such as restaurant furniture or kitchen equipment, but the site must be customized for business buyers. [L0663, 2019]

### Store building and brand

- Do not buy an existing store to skip building one. A store worth buying, even one making only a few thousand dollars per month, is worth tens of thousands of dollars, and buying a cheap site usually means buying something that can be rebuilt quickly. (Source 2018.) [L1085, 2018]
- Products left over in a supplier's catalog, such as coffee tables or bookshelves from a sofa supplier, can become the basis for future stores. Look for commonalities among the extra products and build a store around each one. (Source 2018.) [L1274, 2018]
- Brands that are actually searched by name are preferred. Lesser-known brands with vague names can be promoted through internal promotions to remarketing audiences rather than relying on search traffic. [L0834, 2021]
- For websites such as Shopify, use SVG or PNG for a logo file. Shopify accepts SVG logos, and SVG keeps sharp quality at any size because it uses vector math instead of pixels. [L0952, undated]
- Before uninstalling an app, confirm it leaves no leftover code by searching the store's page source for the app or developer name. (Source 2023.) [L0970, 2023]
- Do not share store links with other sellers or publicly, because competitors who copy niches quickly flood the market. Show example store structure internally instead. (Source 2023.) [L1283, 2023]
- Outsourced content writing, such as product descriptions, collection page text and blog posts with keywords, can start from day one because organic traffic builds over time. Outsourcing paid ads early is not recommended because there is no baseline to judge results against. (Source 2023.) [L1283, 2023]
- Native translation for a new market: a freelance full-page translation costs about 15 to 20 dollars, up to 30 to 40 dollars for a full page. Google Translate or DeepL is not recommended because it lacks quality. [L1158, 2023]

### Upsells and cross-selling

Secondary store cross-promotion setup: [L0623, 2020-26]

1. Build a second store in a related niche using the same theme, with a different logo and colour scheme.
2. Add a note to the order confirmation email of the first store that thanks the customer and offers 10% off their first purchase at the second store.
3. Include the coupon code and the link to the second store in that note.
4. Repeat the process in reverse, offering first-purchase discounts on the first store to customers of the second.
5. Keep the two stores separate and do not combine their products.

Sourcing an upsell product: [L0923, 2015]

1. Check whether your existing suppliers already sell the upsell product.
2. If not, search eBay for sellers who private label that product and have strong feedback and high sales volume.
3. Contact those sellers and ask for their best price for dropshipping the product.
4. Add the product as an upsell, since branding and search traffic matter less once the customer has already committed to the core product.

Upsell products do not need to be branded or searched for, because the customer has already decided to buy the core product. Pick items that just make sense with the purchase, with good reviews and a useful function. [L0923, 2015]

### Advertising accounts, creative and traffic

- Ad account reliability: if bans are a recurring problem, use a reliable account provider for consistent Facebook ad accounts instead of self-created accounts. The speaker mentioned using an agency (Scale Affinity) with no problems. [L0690, 2022+]
- ROAS Agency sets up agency ad accounts. Contact is by text first, and funding communication then runs over WhatsApp. [L1253, 2026]
- Constant Creative customers receive assets through Frame.io. Connect Frame.io in the Integrations section of Ad Manage.ai to import Constant Creative deliverables directly into your Media Library without downloading files. [L0207, 2025-26]
- Pre-order custom agent-shot content for a new product when no creatives exist, since it gives better CPMs than generic content. Until then, have enough existing creatives for the first week. [L0363, 2022+]
- TikTok-driven stores target mobile users who buy directly from ads, so the first screen of a product page must load quickly and show the product clearly. [L1410, 2023]
- Cheap bulk traffic, such as buying 20,000 website visitors for $5 on Fiverr, does not produce sales. These visits are not targeted and are fake, so they do not convert. [L0582, 2020-26]
- A Google Merchant Center account can be suspended while the Google Ads account stays active. Google Ads suspensions are much rarer than Merchant Center suspensions in high-ticket dropshipping stores. [L0727, 2021-22]

### Outreach, partnerships and affiliates

#### Supplier and contributor outreach

Email each supplier or brand manually when a contributor or expert has recommended its product. [L0899, 2020-26]

1. Identify any suppliers or brands recommended by contributors or mentioned in the content and already sold on your store.
2. Email each brand manually, never through a mass email tool like Klaviyo.
3. Say you published the post, name the contributor and the product model they recommended, include the link, and ask the brand to share it on social media, on its website and in its email newsletter.

Brands are likely to share content when a respected expert publicly praises their product, since it gives them endorsement they can use. Personal outreach also builds a stronger supplier relationship. [L0899, 2020-26]

Supplier outreach email, written manually and never sent as a mass email: [L0899, 2020-26]

```
Subject: We featured your [Product name and model number] in a new guide

Hi [Supplier contact name],

I wanted to let you know we just published a new blog post: [Article title], [URL]

[Contributor name], [Contributor role or expertise], contributed to the post and said your [Product name and model number] is their favorite, because [Contributor's reason].

We would really appreciate it if you could share the article on your social media, on your website, or in your email newsletter if you have one.

Thanks,
[Your name]
```

[L0899, 2020-26]

#### Affiliate networks and referrals

- Commission Junction and ShareASale are affiliate networks where store owners sign up as vendors and pay affiliates a commission on sales they refer. Search their affiliate program databases for stores in your niche, since those stores can be promoted to your audience. [L0923, 2015]
- Referral commissions work best when you list and sell the products yourself and refer a customer to the brand only when you cannot close the sale, under a prior agreement on the commission. (Source 2025.) [L0857, 2025]

### Team, outsourcing and community

#### Hiring a virtual assistant or freelancer

- Interview a prospective VA or freelancer before hiring, especially when the role is ongoing, because they will interact closely with the store and strongly influence its success. The interview tests attitude and reasoning ability alongside skill, since those traits are hard to teach while Shopify store mechanics can be taught. [L1417, undated]
- The goal of a VA interview is not for the candidate to answer every question perfectly. Look for a positive attitude, the ability to think through a problem, initiative and sound reasoning toward a correct answer. [L1417, undated]
- During the interview, listen actively and ask follow-up questions to each answer. The interview is also a chance for the candidate to decide whether they want to work with you. [L1417, undated]

Use the following sets of interview questions, organised by skill area, to evaluate a virtual assistant or freelancer. [L1417, undated]

**General**

1. Tell me about any work you've done with ecommerce stores and walk me through it.
2. Can you send me a portfolio or CV showing your past work?
3. Are there past clients or colleagues from relevant projects who would be willing to speak with me about your work, and could I get their contact details?
4. Recall a situation where you ran into a problem you had no immediate answer for. How did you work through it and fix it?
5. What activities do you enjoy in your free time? What is one thing that genuinely irritates you?

**Customer Service**

1. What customer service experience have you had before?
2. How would you handle a furious customer over the phone?
3. What would you do if a customer asked something you couldn't answer?
4. What could you do to make the shopping experience better for a customer of our store?
5. How would you describe your general philosophy toward customer service?
6. Tell me about a moment when a customer gave you praise. How did it make you feel?
7. If a customer asks to talk to the manager or owner and that person isn't around, what do you say to them?

**Product Description and Content Writing**

1. Have you written anything similar that I could review?
2. Walk me through how you come up with content.
3. Would you be willing to complete a sample task, such as a small number of trial product descriptions?
4. What separates an excellent product description from an average one? What role does a product description play on a website?
5. Describe a time you had to write about a subject you had no background in. How did you get up to speed on it and then write about it?

**Product Uploading and General Admin**

1. Do you know Shopify?
2. If so, how would you carry out a bulk product import using a Shopify CSV file?
3. Describe a time you needed to pick up a new system or tool to do your work. What steps did you take?
4. On a packed day with many different tasks, how do you organise yourself and decide what comes first?

#### Reseller and outsourced services

- A reseller that does not hold the products can still film reviews and unboxings. It can receive the products from the supplier and record them at its own premises or at the supplier's warehouse. [L1424, 2021-22]
- The course offers done-for-you services at an additional cost, where the author's team performs selected tasks for the business owner. Not every business activity is covered, and using these services is optional. [L1495, 2021-22]

#### Mentoring and community

- Mentor program members in one source earn a minimum of $100,000 per month in store sales and offer 30-minute one-on-one calls on a weekly basis. [L0249, 2022]
- A moderated, active community removes scammers and spammers immediately and keeps the focus on sharing wins, numbers and questions. Dead Facebook groups or Discords with occasional posts provide little support. [L1452, 2026]


Part 50 of 51 of "3. Suppliers and Fulfillment: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment.md · Previous: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/49-scaling-supplier-base-and-business-continuity.md · Next: https://dlichters.com/ai/ecom/deep/03-suppliers-and-fulfillment/51-risk-and-insurance.md
