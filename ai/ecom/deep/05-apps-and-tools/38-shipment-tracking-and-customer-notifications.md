<!-- part of ecom/deep/05-apps-and-tools.md -->
Part 38 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/37-orders-automation-fraud-and-operations.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/39-finance-tax-and-business-admin-tools.md

### Shipment tracking and customer notifications

**AfterShip overview**
- AfterShip is a Shopify app for delivery tracking. Once connected, Klaviyo can trigger emails on the delivery event, so the post-delivery request goes out at the right moment. [L0417, 2020-26]
- AfterShip (or a similar fulfilment tracking app) connects to Klaviyo and provides order triggers such as shipped, out for delivery and delivered. These triggers drive the shipping and UGC emails. [L0605, undated]
- AfterShip is a parcel tracking platform that shows the status of shipments and can send tracking updates to customers. It is useful when orders ship from suppliers with limited tracking information. [L0985, 2025]
- AfterShip automatically emails customers each time tracking updates, for example dispatched, in transit, out for delivery and delivered. Configure how many emails are sent and when in the app, then enter tracking numbers in the Shopify order dashboard. [L1285, 2024]
- AfterShip sends branded tracking emails at each stage of delivery, such as out for delivery, delayed and delivered. The low-cost plan cost about one dollar per month for the store in the lesson. It is recommended for every store as a way to reduce "where is my order" questions. [L0910, 2015]
- A tracking-notification app such as AfterShip can replace about four separate customer contacts per shipment: in transit, arriving in the destination city, out for delivery and delivery attempt missed. Enter the tracking number once, and the automated updates handle these messages for every order. [L1515, 2019]
- AfterShip is used for order tracking notifications sent to customers. *Older (2022).* [L0665, 2022]
- AfterShip is a Shopify app that automates tracking emails to customers and provides an embed code for a tracking page on the store. *Older (2022).* [L1281, 2022]
- AfterShip is used as an order status tracker on a store. [L0964, 2023]

**AfterShip plans and limits (conflicting dates)**
- Free plan: 50 shipments per month, with paid plans applying above that volume. The 2021 source gives the same limit as the 2025 source. [L0469, 2021; L0966, 2025]
- The free plan can be started for order tracking emails. *2024 source.* [L0856, 2024]
- The 2021 source describes a branded tracking page where customers enter a tracking or order number. [L0469, 2021]
- Tracking emails can be set up on the free plan; the low-cost paid plan is about $1 per month. Apply the free plan first, and move to the paid plan when shipment volume exceeds 50 per month. [L0856, 2024; L0910, 2015; L0966, 2025]

**Tracking page code and store health**
- AfterShip provides a code for a tracking page on the store. Generic tracking code found online slowed one store, so use a vetted app instead. [L0835, 2023]
- Add tracking to Shopify orders directly with a tracking number, or use a tracking app that customers can check. The tracking app is the better option for customer visibility. [L0934, 2023]
- Tracking apps such as Tracktor or AfterShip can be synced with Klaviyo, so fulfilment update emails are sent automatically and can carry offers. [L0604, undated]

**Shop and branded tracking page**
- The Shop app lets customers track orders from any store, not only Shopify orders, and can show them different products. It is optional and does not drive large sales volume. [L0965, 2024]
- A branded tracking page is free ad space that the brand owns. Wonderment's recommendation engine suggests products based on what the shopper bought. [L0955, 2025-26]

**Free tracking sites and carrier tracking**
- The free tracking site 17Track can be used in its drop-shipping mode to hide the supplier's origin, such as China or AliExpress, and to replace those words with custom text such as "Express". It does not reliably show delivery dates, because most couriers do not provide them. [L1315, 2023]
- Track17 and Track123 show tracking numbers to customers. Check with your supplier which one they use. The one source lesson chooses Track17 because most parcel carriers are visible there and customers can search tracking there. [L1327, 2026]

**Courier options in Australia**
- Couriers Please and Sendle are often cheaper than Australia Post for large parcels in Australia. Australia Post's eParcel account manager can also offer lower rates than advertised. *Older (2020).* [L1088, 2020]

### Zapier in customer forms

- WuFu.com is a form creation tool, available in free and paid versions. It integrates with Zapier to capture custom order requests and trigger automations. [L0284, 2020-26]
- Typeform creates forms and surveys. It integrates with Zapier as an alternative to WuFu for collecting custom product requests. [L0284, 2020-26]
- Zapier is an automation platform with thousands of integrations. It triggers workflows when events occur, such as a form submission, and stacks multiple actions in sequence within a single Zap. [L0284, 2020-26]
- Google Sheets integrates with Zapier to populate lead data automatically. This creates a searchable, ongoing database of all custom order requests for tracking, analysis and optimisation. [L0284, 2020-26]

### Content distribution and social media limits

**Transcription**
- Rev.com transcription costs $1 per minute of audio or video content. [L0286, 2018]
- Zapier uploads new videos or audio files to Rev.com automatically and notifies the team in Slack when transcripts are ready. This removes manual upload and tracking steps. [L0286, 2018]

**Platform limits**
- Blog automation should target only Facebook and LinkedIn, because Zapier templates format content natively for these platforms. Twitter, Instagram and Pinterest automation produces posts that look non-native and manufactured rather than intentional. [L0312, 2023+]
- Zapier automates blog distribution by connecting WordPress or Shopify blogs to Facebook and LinkedIn. New posts publish automatically to selected pages, formatted natively for each platform. [L0312, 2023+]
- The automation includes a 5-minute delay after a blog post is published. This gives time to catch and fix errors before the post goes out to social media automatically. [L0312, 2023+]
- When posting to multiple Facebook pages in one automation, add a 3-minute delay between posts to different pages, so followers are not overwhelmed by simultaneous posts. [L0312, 2023+]

**WordPress procedure**
1. Create a new zap with WordPress as the trigger.
2. Select the trigger event as 'new blog entry'.
3. Connect your WordPress account and select your blog or website.
4. Add a delay action set to 5 minutes.
5. Add Facebook Pages as an action, select 'create a page post'.
6. From the dropdown, choose which Facebook page to post to.
7. Build the template: add opening text (e.g., 'new e-commerce lifestyle podcast'), then use the plus button to insert the blog title, body and URL as dynamic fields.
8. Select the blog URL as the link to share.
9. Turn on the automation.
10. To post to additional Facebook pages, add another action after the first Facebook post with a 3-minute delay, then add another Facebook Pages action with the same template.
11. To add LinkedIn, add another action with LinkedIn as the platform and include the title, body and content URL.

[L0312, 2023+]

**Shopify blog procedure**
- Zapier's Text Formatter, with the event "convert HTML to markdown", removes HTML tags, meta tags and code from Shopify's blog summary field, so the content displays cleanly on social media. [L0312, 2023+]
- Without converting HTML to markdown, social posts from Shopify blog content display HTML code and meta tags, such as charset declarations and closing HTML tags. The content looks unprofessional and is hard to read. [L0312, 2023+]
- The featured image from the blog post is included automatically in the published Facebook post, with no extra configuration in the template. [L0312, 2023+]

1. Create a new zap and name it (e.g., 'one source merch blog to social').
2. Set Shopify as the trigger.
3. Select the trigger event 'new blog entry'.
4. Connect your Shopify account by selecting it from the dropdown.
5. Choose which blog category to monitor for new posts (default is 'news'); if you have multiple blog categories, select the correct one from the dropdown.
6. Click continue and test the trigger to verify it finds your blog posts.
7. Add Zapier's Text Formatter as the next action.
8. Select Text as the formatter type.
9. Choose the transform option 'convert HTML to markdown'.
10. Click into the input field, scroll down, and click 'show all options'.
11. Select 'summary HTML' as the input to convert (this is the blog excerpt shown on your homepage, not the full blog post).
12. Test the formatter action to confirm the HTML has been removed.
13. Add a delay action set to 5 minutes.
14. Add Facebook Pages as the next action.
15. Select 'create a page post' as the event.
16. Choose which Facebook page to post to.
17. Build the post template: type static text (e.g., 'new blog post is live'), add line breaks, then insert the blog title, the converted summary output (from the Text Formatter step, not the raw summary HTML), and the URL.
18. For the URL: manually copy the base URL up to and including the blog category path (e.g., 'yoursite.com/blogs/news/') and paste it in the link URL field, then insert the blog post handle field from the Shopify trigger to create the complete working URL.
19. Click continue and test the action.
20. Verify the post appears on your Facebook page with the correct text, summary and clickable link.

[L0312, 2023+]

**Social scheduling**
- Buffer handles social media scheduling for posts that are not automated (see the cost table above). [L0286, 2018]

### Fraud screening and chargebacks

**Shopify's built-in protection**
- Shopify's built-in fraud protection screens orders as low or high risk. Some merchants add ClearSale for extra protection, though one speaker found Shopify Payments sufficient. *Older (2020).* [L1111, 2020]
- Shopify's built-in fraud analysis flags high-risk orders when Shopify Payments is in use. Flagged orders should be cancelled and refunded rather than processed. *Older (2020).* [L0468, 2020]
- Shopify's built-in fraud labels flag orders as "high risk" and list the reasons. Stolen cards are not covered by this flag, so a high-risk flag does not prove a fraudulent card. Check the reasons before cancelling. [L0472, 2025]
- The two sources conflict on flagged orders. The 2020 advice cancels and refunds them. The 2025 caution applies before you act: a flag is a signal, not proof. [L0468, 2020; L0472, 2025]

**Third-party screening apps**
- Signifyd is an order-fraud screening app for Shopify stores. It approves or declines orders and can guarantee protection against chargebacks on approved orders. [L0430, 2023]
- Signifyd is a third-party order guarantee app. It reviews orders for fraud and reimburses the merchant for approved orders that turn out to be fraudulent. It is optional and adds cost per order. *Older (2020).* [L0468, 2020]
- Signifyd and ClearSale are third-party fraud screening apps that charge different percentages per order. They are an alternative to Shopify's built-in fraud protection and should be compared by rate and order volume. *Older (2019).* [L0960, 2019]
- ClearSale is a Shopify app that checks orders for fraud. If it approves an order that later becomes a chargeback, ClearSale reimburses the seller for a fee. Its protection is a paid service. [L0472, 2025]
- ClearSale can be used as chargeback insurance for orders it approves. It reimburses the merchant for fraud chargebacks on approved orders, at about 1 percent per order. It is optional and was not used by that source's own team. *Older (2022).* [L0665, 2022]
- The 2022 source quotes about 1 percent per order for ClearSale. The 2025 source gives no rate and describes a paid service. Use the rate quoted in the current ClearSale offer when you compare options. [L0665, 2022; L0472, 2025]

**Chargeback insurance**
- A chargeback insurance service that works with Shopify can add protection against unauthorised purchases. The lesson recommended it without the speaker using it personally. [L0934, 2023]

### Chargeback handling with Disputely

- Disputely alert fees appear on the Shopify billing statement rather than as a separate invoice. The alert prices shown were $16.00 and $25.00 each. [L0351, 2026]
- Disputely is a chargeback handling app. Its charges are lower and its approach friendlier than the alternative, so the lesson uses it. Disputifier (Smart Chargebacks) is the more expensive alternative. [L1327, 2026]
- In Disputely Billing, the RDR section has fields to add BIN/CAID and ARN entries. The RDR setting must read "Not active". Disputely support can change it when asked by email. [L0351, 2026]

### Returns, package protection and checkout add-ons

**Loop Returns and Checkout Plus**
- Loop Returns is return and exchange software that drives refunds into exchanges and keeps money in the business. Its Checkout Plus add-on charges a return fee at checkout. [L0955, 2025-26]
- Checkout Plus used to be named Offset and was renamed. The two names refer to the same product. [L0955, 2025-26]
- Loop provides an online calculator for return fee and Checkout Plus economics. Its sales reps can run a deeper analysis of a brand's numbers. [L0955, 2025-26]
- Package protection can be sold as a standalone product through partnerships. Loop has announced an in-house version for coming months. [L0955, 2025-26]
- Gorgias, the help desk, shows the Checkout Plus line on the order because it is a Shopify product. A support agent can check whether a customer was charged a fee they should not have paid. [L0955, 2025-26]

**Wonderment**
- Wonderment is an order tracking tool that Loop acquired about a year before the lesson. It now sits in Loop's portfolio as Loop order tracking and works with Loop Returns. [L0955, 2025-26]

**Market availability**
- Checkout Plus and Wonderment are sold mainly to brands in the US, Canada, the UK and Australia, with some use in New Zealand and mainland Europe. Confirm the app supports your target market before planning a launch there. [L0955, 2025-26]

### Store continuity and data

- Rewind backups can export everything from a Shopify store, including products as CSV, before you close or stop paying for the store. The export can later be used to rebuild a similar store. [L0804, 2023]

### Financing

- Shopify Capital is a cash-flow financing option that can fund stock purchases. Lending facilities can be tight at times, which can cause cash-flow problems for a brand that must buy a lot of stock. [L0660, 2019+]


Part 38 of 41 of "5. Apps and Tools: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/05-apps-and-tools.md · Previous: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/37-orders-automation-fraud-and-operations.md · Next: https://dlichters.com/ai/ecom/deep/05-apps-and-tools/39-finance-tax-and-business-admin-tools.md
