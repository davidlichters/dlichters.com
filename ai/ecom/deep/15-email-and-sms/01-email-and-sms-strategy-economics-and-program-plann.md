<!-- part of ecom/deep/15-email-and-sms.md -->
Part 1 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/02-platform-choice-account-setup-and-sender-identity.md

## Email and SMS Strategy, Economics and Program Planning

### Why Email and SMS Matter

#### Return on Investment

- E-commerce companies earn roughly $40 in revenue for every $1 spent on email. Email is therefore treated as a high-performing channel. [L0414, 2021-22; L0609, 2021-22]
- Sending promotion emails costs almost nothing beyond the email tool itself. [L0623, 2020-26]
- A cited survey claims 89% of marketers see email as their main lead generation channel and that email wins more customers than Facebook and Twitter combined. Email matters most for a new business that still needs to grow its list. [L0462, 2021-22]
- Email is one of four parts of the funnel, alongside Google Shopping ads, organic search and retargeting ads. [L0458, 2021-22]
- Email marketing is part of the marketing system alongside paid search and Google Shopping. Organic search traffic is included as a traffic source. [L1481, 2021-22]
- Email complements retargeting as another way to stay in front of visitors who have not yet bought. [L1239, 2021-22]
- Email and retargeting together keep prospects engaged between their first visit and their purchase, especially those in a longer buying process. [L1240, 2021-22]
- Once a list has grown, campaigns to it become an additional traffic and sales source alongside paid ads and organic content. This reduces dependence on paid traffic for repeat sales. [L0634, undated]
- Email list growth starts slowly and compounds as site traffic rises. [L0609, 2021-22]
- Email adds touchpoints that build trust, especially before a first purchase. Results compound over time, similar to SEO. [L0609, 2021-22]

#### Touchpoints and Trust

- A prospect needs on average around seven touchpoints with an e-commerce business before buying. A single visit is often not enough, so ongoing engagement is required. [L0414, 2021-22]
- Email is the place for ongoing, longer-form communication that delivers knowledge, builds trust, demonstrates authority and builds a unique brand image. It should not be used only for repeated product promotions and discounts. [L0414, 2021-22]
- Email is a personal channel. Messages should read as if sent from one person to another, because people trust people more than faceless brands. [L0609, 2021-22]
- Email success depends on how consistently you send, how valuable the content is, and how many emails reach prospects and customers. Software choice matters less; the tool is only a vehicle. [L0608, 2021-22]
- Many small and medium e-commerce businesses run no email marketing at all. Even a basic setup puts a store ahead of these competitors, since email is a channel cheaper than paid ads for repeat sales. [L0609, 2021-22]

#### Repeat-Purchase Economics

- A customer's second or third purchase typically costs far less to acquire than the first. Repeat orders are more profitable and generate cash to put back into winning new first-time buyers. [L0414, 2021-22]
- A repeat sale to an existing customer carries no new acquisition cost, so the whole order value is close to pure profit. [L0435, undated]
- Repeat purchases do not happen by accident. They need defined processes and back-end marketing separate from front-end acquisition marketing, aiming to turn first-time buyers into second and third-time buyers and eventually brand advocates. [L0414, 2021-22]
- Improving the autoresponder sequence raises the value of every subscriber. Higher value per subscriber lets you pay more to acquire the next subscriber and grow faster. [L0378, 2019+]
- Email is one of the main levers for returning customers. Build the list over time and use it for holiday promotions, new products and reminders. [L1111, 2020]
- Good opt-ins and email marketing raise the value of every paid click. In one large client account, email generated about 10% of total revenue linked to paid traffic. [L0510, 2018]
- Automation effort is low once set up. Automated flows are built once and keep earning every month. Most of the setup runs without ongoing work, except for testing and one step that needs more hands-on effort. [L0572, 2014]

#### Ownership of the Customer Relationship

- The customer relationship belongs to you, not the platform. You can market to customers indefinitely, and they can return to purchase multiple times. [L0280, undated]
- Email retargeting is one of the most powerful tools on Shopify. Customers who give their email address become a permanent marketing asset you can reach indefinitely. [L0280, undated]
- Promotions to your email list, plus traffic from several sources, help smooth out random swings in daily and weekly sales. [L0671, 2021]
- Promotions for cold traffic are less effective than promotions sent to a list of past buyers or visitors, who already know the store. [L0801, 2021]

### Campaigns and Flows

#### Definitions

- Flows are automated sequences triggered by visitor or customer behaviour, such as signing up, abandoning checkout, buying or receiving a shipment. They turn interest into revenue without manual sending. [L0605, undated; L0573, undated]
- Campaigns are one-off sends tied to a date, event or launch, sent to a list or segment. They are not triggered by website behaviour. Flows are the better choice for behaviour-based follow-up. [L0605, undated; L0607, undated]
- A campaign sends a single email one time to your list. An automation is triggered by a specific event (for example, abandoned checkout) and executes a sequence of steps automatically. [L0282, 2020-26]
- In Clavio, flows are automated sequences that start from customer behaviour, such as a welcome series, abandoned checkout and order confirmation. Campaigns are one-off messages sent manually to a chosen audience. [L0635, undated]

#### The Rule

- All email campaigns except holidays and major sales events (Black Friday) must be automated flows. Never send one-off campaigns for days such as national pet day. Automation is where volume and leverage come from. [L0041, 2025-26]
- Flows are tied to customer behaviour and deadlines. Do not try to make them reactive to news or trends; timely content belongs in campaigns. [L0494, 2026]

#### Flow Design Requirements

- Every flow needs three elements: a customer behaviour that triggers it, a clear objective, and a deadline. [L0494, 2026]
- Flow reference table: [L0494, 2026]

| Flow | Behavior that triggers it | Objective | Deadline |
|---|---|---|---|
| Abandoned checkout | Customer starts checkout | Return and purchase | 72-hour window, then the product goes back on the shelf |
| Welcome series | Visitor wants to buy at a discount (wants a deal) | Get the visitor to buy a product | 72 hours, or until the coupon or discount code expires |

- Flow blueprints are intentionally generic. Their value lies mainly in the gotchas, common mistakes, suppressions and exclusions they describe. Structure and copy still need adapting to each brand before use. [L0588, 2025-26]
- A flow for a high-ticket product (for example, a $3,000 dining table) differs fundamentally from one for a low-ticket product (for example, $40 jewellery). Set timing, messaging, offers and sequence length by price point. [L0588, 2025-26]

### Which Flows to Launch First

#### Core Flow Set

- Every e-commerce brand needs five automated email flows: a pop-up with a welcome series, an abandoned checkout flow, a browser abandonment flow, an added-to-cart abandonment flow, and a post-purchase flow. [L0494, 2026]
- The five core flows (post-purchase, welcome series, abandoned cart, abandoned checkout and abandoned browse) generate at least 80% of total flow revenue. They deserve the most attention when building or optimising a store's email setup. [L0588, 2025-26]
- Upsells and downsells do not need dedicated flows. Subscribers who receive regular campaigns with new angles and solutions will see upsell offers naturally. [L0494, 2026]

#### Minimum Launch Set by Source

Sources differ on the minimum launch set. Each row applies to the source named.

| Source | Minimum set | ids |
|---|---|---|
| one source 2025-26 | Five core flows (welcome series with pop-up, abandoned checkout, browser abandonment, added-to-cart abandonment, post-purchase) | [L0494, 2026] |
| one source | Welcome flow and abandoned checkout flow at launch; then browse abandonment, post-purchase thank-you, win-back, UGC generator, cross-sell after fulfilment | [L0605, undated] |
| one source | Welcome series, abandoned cart, customer thank-you (post-purchase); browse abandonment, cross-sell and win-back later | [L0573, undated; L0607, undated] |
| one source | Abandoned cart, welcome and post-purchase, built before anything else | [L0606, undated] |
| one source (2024, older is not applied) | Abandoned cart sequence and promotional emails first; other topics optional | [L0971, 2024] |
| one source (2023) done-for-you setup | Welcome series, abandoned cart campaign, post-purchase campaign asking for referrals and reviews, plus Klaviyo technical setup so emails fire at the right times | [L0835, 2023] |
| one source procedure | Abandoned cart, abandoned checkout and welcome flows in Klaviyo, plus SMS flows with SMSBump for the same triggers | [L0693, 2024] |

- The list of eight flows for an online store, with groups: [L0604, undated]

| # | Group | Flow |
|---|---|---|
| 1 | Basic | Welcome Flow |
| 2 | Basic | Browse/Site Abandonment |
| 3 | Basic | Abandoned Cart |
| 4 | Basic | Abandoned Checkout |
| 5 | Basic | Customer Thank-you |
| 6 | Basic | Customer Winback |
| 7 | Advanced | UGC Generator |
| 8 | Advanced | Cross Sell After Fulfillment |

- one source's checklist has six steps. Step one is the abandoned-cart sequence, step five needs more manual work than the others, and step six covers transactional emails. [L0572, 2014]

#### Timing Against Launch

- Set up abandoned cart and post-purchase email flows before the store goes live, so customers receive follow-up emails from the first sale (2025). [L0667, 2025]
- Klaviyo must have the abandoned cart flow and the welcome flow set up during store build, before traffic is sent to the store. [L1288, undated]
- Start abandoned cart emails from the day the store first gets traffic, because shoppers who leave a cart can still come back. [L0468, 2020]
- Set up welcome and abandoned checkout flows at launch, before traffic is large. Even 50-100 visitors can produce a few extra sales, and missing these flows loses buyers who were already interested. [L0605, undated]
- Sources differ on the gate for capture and follow-ups. Build flows before go-live, as [L0667, 2025] and [L1288, undated] advise. Activate email capture and abandoned cart follow-ups only after live products are on the store, as [L1094, 2023] advises (2023). [L0667, 2025; L1288, undated; L1094, 2023]
- Set up email from the start for every product, because some buyers take time to decide. It matters most for products priced $50 and above, and for stores with upsell or cross-sell products. [L1218, undated]
- Klaviyo should be set up before running ads for a product. Retargeting visitors who did not buy and capturing emails lowers customer acquisition cost by converting more of the traffic already visiting the site. [L0477, undated]
- Klaviyo should be set up before any ads run. It turns visitors who already came to the store into buyers, lowers customer acquisition cost, and builds a list for retention and retargeting people who left without buying. [L1297, 2023]
- Email funnels should be built before scaling other traffic sources. [L0790, 2017]
- Basic email campaigns are part of baseline store setup, alongside Google Ads, payment processing and remarketing, and should be set up before scaling traffic. [L0801, 2021]
- A new store should have a basic set of automated email flows in place before scaling traffic. These are the minimum requirement for email marketing. [L0609, 2021-22]
- Newsletter sign-ups and automated flows capture visitors who leave without buying. They give the store a way to reach interested visitors who did not purchase on the first visit. [L1077, undated]
- Start sending emails to subscribers as soon as they are on the list, regardless of which opt-in form or source brought them there. Early sends build engagement and begin producing returns while the list is small. [L0609, 2021-22]
- Email capture and automated sequences should be ready before subscriber numbers rise, so new subscribers get the right email immediately. [L0609, 2021-22]
- Set up email automations early, because they run continuously in the background. Content marketing can wait until the store has traffic and you know what is working. [L0835, 2023]
- Email marketing success starts with the basics. Email campaigns form part of the marketing setup before traffic scales. [L0801, 2021]

### Phased Rollout

Use these phases as the planning order. Each phase starts only when its gate is met.

#### Phase 1: Build Before Launch

- Set up the email sequences in this order: [L0493, 2021-22]
  1. Plan the post-purchase and opt-in sequences in advance.
  2. Create any new list segmentations needed to run them.
  3. Build the automations for each sequence.
- Adapt any flow blueprint to your own store: [L0588, 2025-26]
  1. Overlay your own branding, tone and messaging onto the blueprint.
  2. Overlay your own thoughts and store data (customer behaviour, price point, product type) onto the blueprint.
  3. Keep the parts that fit your store and discard the parts that do not.
- Build three automated flows in the email service before anything else: abandoned cart, welcome and post-purchase. Together they cover first contact with a new subscriber, recovery of unfinished checkouts, and the second order from existing buyers. [L0606, undated]
- Build the email list and flows so that every visitor who opts in keeps hearing from the store. Flows are not needed on the first day for every store, but they become an important revenue source later. [L0551, 2020]

#### Phase 2: Capture and Launch

- Opt-in and segmentation procedure: [L0414, 2021-22]
  1. Map the desired customer touch points from first hearing about the business to being ready to purchase.
  2. At each touch point, offer an option to join an email list or other list (such as push notifications or SMS by phone number). Do not rely on one pop-up for everyone; offer several ways to join across the site.
  3. Segment the list by the touch point where the subscriber entered.
  4. Send contextually relevant communication regularly over at least the first 30 days after joining, moving the prospect through the awareness stages from their entry point.
  5. Do not send the same emails to everyone, because subscribers are at different stages and need different content.
- Implementation can take one to three months. Rolling out the full email setup gradually is acceptable, and consistent starting matters more than speed. [L0609, 2021-22]
- SMS works alongside email. Set up SMS flows for the same triggers as email flows to recover lost sales, using SMSBump in one source's setup. [L0693, 2024]
- Set up only the basic automated emails needed to launch a new store as part of the initial build. Defer advanced email marketing until after the first sales are made. [L0555, 2026+]

#### Phase 3: After First Sales

- Advanced email marketing is a separate, later-stage layer on top of a basic email setup, not a prerequisite for it. [L0544, 2026+]
- Set up email autoresponders for as many messages as possible, not only abandoned carts, so each repeated customer message is sent automatically. [L1515, 2019]
- Once a list passes 500 contacts, the email program should be profitable with at least about $1,000 in extra sales per month. Check this against the Klaviyo revenue report. [L1076, 2019]
- Once live, send the holiday promotions to the full email list first. [L1224, 2025+]
- Email lists drive a large share of extra revenue during holidays and monthly promotions. A new store's list grows slowly, mostly from people who opt in through ads, so start building it early (2025). [L1097, 2025]

#### Phase 4: Scale

- Begin sending email promotions and retargeting campaigns once you have accumulated around 1,000 email subscribers. [L0280, undated]
- Advanced email automations are worth implementing once a store is above roughly $100K in sales. Below that level, simpler email flows are enough (2024). [L0965, 2024]
- Add the advanced flows (UGC generator, cross-sell after fulfilment) once the basic set is running. [L0604, undated; L0605, undated]

#### Phase Gates

| Gate | Action | ids |
|---|---|---|
| Any list size | Keep sending regular emails; even 200 contacts should receive them | [L0390, 2019] |
| Basic setup live, before scaling traffic | Basic flows in place | [L0609, 2021-22; L0801, 2021] |
| First sales made | Begin advanced email marketing | [L0555, 2026+; L0544, 2026+] |
| 500 contacts | Expect profitability of about $1,000 extra per month; check the Klaviyo revenue report | [L1076, 2019] |
| About 1,000 subscribers | Begin promotions and retargeting campaigns | [L0280, undated] |
| Above roughly $100K in sales | Implement advanced automations | [L0965, 2024] |

### Program Management

- Send copies of the emails you want to discuss, or paste their body text, before the call. This lets the reviewer work out improvements in advance rather than reading them during the session. [L0364, 2021-22]
- Case: a workshop product launched to an email list of about 3,000 people with no prior sales history. The team used reply emails to ask buyers why they bought and to learn prospects' objections. Insights from the replies went into the copy and the offer. In its third month the workshop was generating about $90,000 in revenue from the small list. The team noted that the reply emails provided both the data and the sales. [L0378, 2019+]
- Competitor check: a competitor having no opt-in on its homepage does not prove it skips email marketing. Check content pages and the checkout flow, because some stores email only visitors who take an action such as adding to cart. [L0893, 2021-22]
- Some e-commerce businesses send no email at all, so an empty inbox after signing up is itself useful information. Record whether the competitor sends abandoned cart emails and any other follow-ups. [L0893, 2021-22]

### Outsourcing

- Email writing can be outsourced if the operator does not enjoy writing, as long as the full set of planned emails gets built and sent. [L0609, 2021-22]
- Email writing can be assigned to the same content writer role that produces blog posts, combined with other website copywriting. This frees the owner from writing customer emails and copy. [L1334, 2021-22]
- A done-for-you email setup typically includes a welcome series for new subscribers, an abandoned cart campaign, and a post-purchase campaign that asks for referrals and reviews. The technical setup in Klaviyo is also included so emails fire at the right times (2023). [L0835, 2023]
- Find a trustworthy email agency by asking other store owners, and use Upwork only as a last resort. [L1129, undated]
- One operator's email list of about 50,000 subscribers produced strong, very profitable revenue through regular sales campaigns run by an email agency. [L1315, 2023]
- Flow blueprints need adapting before use, so outsourced builds should still be checked against your own price point and data. [L0588, 2025-26]

### What to Defer

- Advanced email marketing waits until after the first sales. Add it as a later-stage layer. [L0555, 2026+; L0544, 2026+]
- Flows that matter later, not on the first day, can wait. [L0551, 2020]
- Win-back and re-engagement do not need separate automated flows. Regular campaigns sent to the full list already reach lapsed contacts. In this context, win-back targets people who have not purchased in two to four weeks. [L0494, 2026]
- Do not stack extra win-back, re-engagement or upsell flows on top of a regular campaign schedule. This floods subscribers with messages. Keep the automated flows to the core five. [L0494, 2026]
- Browse abandonment, cross-sell and win-back flows come after the core three are running. [L0573, undated; L0607, undated; L0605, undated]
- Advanced flows (UGC generator, cross-sell after fulfilment) come after the basic set. [L0604, undated]
- Optional email topics beyond the abandoned cart sequence and promotional emails can be added later. [L0971, 2024]
- Content marketing waits until the store has traffic and you know what works. [L0835, 2023]

### Benchmarks and List Value

#### Share of Revenue

Sources differ on the share. Use each value under the conditions stated.

| Benchmark | Value | Condition | ids |
|---|---|---|---|
| Email share of total online store revenue | 10% to 30% | Generic planning range; depends on the store and how well flows are set up | [L0572, 2014] |
| Email share of total revenue, another source | 10% to 30% | Same range, stated as a planning figure | [L1129, undated] |
| Email share in one large client account | About 10% of total revenue linked to paid traffic | Revenue tied to paid traffic | [L0510, 2018] |
| Email share of total revenue, one store | About 25% | Store with email funnels built before scaling other traffic | [L0790, 2017] |
| Email share of monthly revenue, one lesson business | About 30% | Part of it from monthly promotions; sending costs almost nothing beyond the tool | [L0623, 2020-26] |
| Email share of monthly revenue, established store | Roughly 30% | Holiday promotions go to the full list first | [L1224, 2025+] |
| Email share of monthly revenue, established store (2025) | About 30% | Treat email as a major sales channel; build the list early | [L1287, 2025] |

#### Revenue Per Month and Per Contact

- At a monthly store revenue of $100, email adds about $10 to $30 per month. At $1,000 monthly revenue, the same 10% to 30% range adds about $100 to $300 per month. [L0572, 2014]
- An extra $1,000 per month from email over six months adds up to $6,000 in additional profit. Small recurring gains accumulate into large totals over time. [L0572, 2014]
- The email database should generate at least about $1 of revenue per contact per month. For example, 10,000 contacts should bring in roughly $10,000 per month from email with no ad spend. [L0854, 2022]
- Email generated about 30% of monthly revenue in the lesson's business, part of it from monthly promotions. [L0623, 2020-26]

#### List Size Benchmarks

| List size | Benchmark | ids |
|---|---|---|
| 200 contacts | Still send regular emails; subscribers eventually buy. Raising the returning customer rate from 5% to 30% is described as close to free revenue. Email platform setup takes roughly 2 to 10 hours. | [L0390, 2019] |
| 500 contacts | Email program should be profitable with at least about $1,000 extra sales per month; check the Klaviyo revenue report | [L1076, 2019] |
| About 1,000 subscribers | Begin email promotions and retargeting campaigns | [L0280, undated] |
| About 3,000 subscribers | Workshop case: about $90,000 revenue in the third month from the list, with no prior sales history | [L0378, 2019+] |
| About 50,000 subscribers | Strong, very profitable revenue from regular sales campaigns run by an agency | [L1315, 2023] |

#### SMS Benchmark

- SMS marketing acted as a retention tool with a good return on ad spend. For one brand, about 2,000 USD of roughly 50,000 USD in revenue came from SMS. [L1431, 2020+]

#### Other Reference Values

- The core five flows generate at least 80% of total flow revenue. [L0588, 2025-26]
- Email is often overlooked but can add 10% to 30% to monthly revenue. [L1129, undated]
- A customer's second or third purchase typically costs far less to acquire than their first. [L0414, 2021-22]
- Email contacts raise the value of every subscriber, so improving sequences lets you pay more to acquire the next subscriber. [L0378, 2019+]


Part 1 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/02-platform-choice-account-setup-and-sender-identity.md
