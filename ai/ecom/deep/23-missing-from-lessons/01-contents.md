<!-- part of ecom/deep/23-missing-from-lessons.md -->
Part 1 of 2 of "23. Missing from the lessons: coverage audit of chapters 01 to 22". Map of all parts: https://dlichters.com/ai/ecom/deep/23-missing-from-lessons.md · Next: https://dlichters.com/ai/ecom/deep/23-missing-from-lessons/02-5-appendix-the-91-lessons-that-were-sampled.md

## Contents

1. Result in one table
2. How the audit was done (so it can be repeated)
3. Missing specifics, grouped by the 22 chapter topics
4. What this says about the chapters
5. Appendix: the 91 lessons that were sampled

## 1. Result in one table

Audit date: 2026-11-07. Sample: 91 lessons out of 1,523 lesson files, spread over all six course sources and their modules. From each lesson the most concrete specifics (a number, a setting, a procedure step, a threshold, a script line) were taken, usually 3, and searched in chapters 01 to 22 (about 2 million words).

| Measure | Value |
|---|---|
| Lessons sampled | 91 |
| Specifics checked | 250 |
| Specifics found in chapters 01 to 22 | 201 (80.4 %) |
| Specifics missing | 49 (19.6 %) |

By course (measured):

| Course | Lessons | Specifics checked | Missing | Missing share |
|---|---|---|---|---|
| Course A (videos) | 20 | 62 | 9 | 15 % |
| Course A (PDF and sheet documents) | 16 | 31 | 4 | 13 % |
| Course B | 18 | 50 | 11 | 22 % |
| Course C calls and lessons | 14 | 42 | 8 | 19 % |
| Course C vault documents | 3 | 9 | 2 | 22 % |
| Course E | 10 | 28 | 5 | 18 % |
| Course D 2026 | 10 | 28 | 10 | 36 % |

The weakest course is Course D 2026 (newest, 2026, closest to what we actually do: low-ticket Meta, books, Kaching apps). More than one in three of its specifics were missing. If the chapters get one more filling pass, start with Course D.

Most missing items are numbers and thresholds, not whole topics. The topics nearly always exist in a chapter; the exact figure, example or step is what got lost in the rewrite.

## 2. How the audit was done (so it can be repeated)

Anyone can redo this without our Mac, given the lesson files and the chapters.

1. Group the lessons by course and module (the source line at the top of each lesson names course, module or folder).
2. Keep only lessons between 500 and 10,000 words (shorter ones rarely hold specifics, longer ones are multi-hour calls that bias the sample).
3. Fixed quotas per course: Course A videos 22, Course A documents 16, Course B 18, Course C 14, Course E 10, Course D 10, Course C vault documents 3. Within a course, pick round-robin over the modules with a fixed random seed, so every module gets a turn before any gets a second lesson. 93 were drawn; 2 had no concrete specific, leaving 91.
4. For each lesson read the facts list and the transcript, and write down the 3 most concrete specifics in English.
5. For each specific write a search rule: one or more regular expressions that must all appear on the same line of a chapter (the chapters keep one rule per line, so same-line co-occurrence is a fair test). Example: `grammar&&80` for "VA candidates must score 80 percent on the grammar test".
6. Run the rules over chapters 01 to 22, case-insensitive.
7. Every hit was spot-checked by reading the matching line. Loose hits (the words appear but not the fact) were overruled to "missing" by hand; about 30 hits were checked this way and 22 of them turned out to be false and were set to missing. Missing items were checked once more with a broader search before being listed here.
8. Facts in the lesson files' "Fakten" lists are machine summaries and can be wrong. Every missing item below was checked against the transcript or document text of the lesson itself. Where the source is vague, that is said.

Known limits: a specific counts as "found" if the same fact sits in a chapter even when it came from a different course. A specific counts as "missing" even if a nearby but different number exists (for example chapter 09 has "typical dropshipping CPMs are $20 to $30", which is not the same as "alarm above $20 to $25, act above $30").

## 3. Missing specifics, grouped by the 22 chapter topics

Format per item: the specific, then the course and lesson it comes from (lesson titles are the German titles of our lesson files), then notes. Measured = stated as a measured result in the source. Claim = speaker's estimate or opinion.

### 01 Business model and strategy

- **Private-label product lines are typically 3 to 5 products.** When a dropship store later launches its own products, start with a line of 3 to 5, not one and not twenty. Source: Course A, 2016 Retreat Recordings, "Das große Bild: Zehnfachung durch Partnerschaften, Branding und X-Faktor". Claim.
- **Course D 2026 roadmap (4 weeks).** Week 1 to 2: foundation and store setup. Week 2 to 3: product research and validation. Week 3 to 4: ads and testing frameworks. Promised end state: a launched branded dropshipping store, a validated product system with consistent sales, the knowledge to scale beyond $10k (per month), target a six-figure income. Some students finish everything in one week. Source: Course D 2026, "Kurs-Überblick und Roadmap". Use it as a pacing benchmark for a new low-ticket store.
- **Course B's track record (why his numbers carry weight).** First e-commerce business 2014, more than 400 e-commerce entrepreneurs coached, more than $50 million in e-commerce sales over six years, almost 120,000 individual transactions. Source: Course B, copywriting module, "Willkommen zu the copywriting module". Self-reported.

### 02 Niche and product research

- **Zoro supplier count as a marketplace signal.** Zoro states it works with 4,600 leading suppliers plus 2,000 additional distribution centers. In the drop-ship-friendly test, a marketplace like Zoro or Wayfair that lists many brands in a niche proves the niche has many drop-ship-ready suppliers. Source: Course A Module 2, "Der Dropship Friendly Test" (read from Zoro's own page in the video, measured from screen).
- **Ad-spy filters for low-ticket winners (Minea style).** Filter by creation date to the last 30 to 45 days to find recently launched campaigns. Minimum engagement per ad: 200 likes, 100 comments, 100 shares. Read the competitor's active-ad count: 20+ active ads = the competitor moved from testing to scaling; 30+ = solid proof the product works; 50+ = the competitor is likely making $1,000 to $2,000+ per day with that product. Source: Course C, "Produktforschung mit Ad-Spy-Tools: Gewinner finden, nicht erfinden" (checked in transcript). The revenue mapping is the speaker's estimate. Note: chapter 02 only has the rule "skip if fewer than about 50 active ads" from another source; this graded ladder is missing.

### 03 Suppliers and fulfillment

- **Supplier call script, launch-date framing.** On the first call tell the supplier your team is finishing a big project about to launch in their niche, that you researched the niche and expect to dominate it, and that you are building the catalog before the launch-day traffic wave. Give a real launch date 1 to 2 months out (set it for yourself too, it keeps you on target). Use facts from their website to show why their brand fits. If they say they are not taking new retailers, say it is a shame they will miss the launch and ask who the two of you need to talk to to make it happen. First follow-up call usually 2 to 3 weeks after the site goes live (after the launch date you gave). Source: Course A, Drop Ship Blueprint Module 4, "4.8 Phone Email Scripts" (document, verified). Chapter 03 has the note-taking advice but not this script or the timing.

### 04 Store build and Shopify

- **Launch related products together on one multi-product PDP.** When using a custom product template that shows 4 to 10 products on one page, launch related products (for example books of the same genre, such as hand-tool books) at the same time or one after another on that same PDP, so the template and traffic serve all of them. Source: Course D 2026, "Mehrere Produkte auf einer PDP mit Shopify-Templates". (The template steps themselves are in chapter 04.)

### 05 Apps and tools

No missing specifics from the sampled lessons. (Tool items that are missing are listed under the chapter where they are used: Kaching under 07, Hunter.io under 14.)

### 06 Conversion optimization

- **Price guarantee: the reason.** Shoppers visit at least 3 different websites before buying because they look for the best price, which is why the product page template links to a "100% Price Guarantee" page (with stated limitations). Source: Course A, Drop Ship Blueprint Module 5, "5.2 Content Templates The Perfect Product Page" (document). Chapter 06 has the price guarantee page, not the 3-sites reason.
- **Page speed thresholds (Course B, measured on his own stores).** Going from 5 seconds to 3 seconds load time showed no visible conversion difference on average. 10 seconds versus 5 seconds clearly hurt conversion. So: fix anything near 10 seconds, do not chase 5 to 3. A theme update once changed load time by about 10 seconds. Source: Course B, BSGR Conversion Optimization, "Zusätzliche On-Site CRO-Faktoren" (checked in transcript). Chapter 04 has the 10-second theme case, not the 3 vs 5 vs 10 rule.
- **Landing page proof examples.** Pet Lab Co: subscribe-and-save shows £5 saved per month; review badge with "3,500+ five-star reviews"; trust badge "150,000+ happy customers"; 30-day money-back guarantee with 100% refund. Source: Course C, "Landingpage-Struktur für E-Commerce-Verkäufe". Use as copy patterns, numbers are that brand's.

### 07 Offers, pricing and bundles

- **Kaching Bundles setup (Course D, 2026).** App cost about $15 (billing starts once customers check out with a bundle). Use Quantity Breaks (recommended) rather than Buy X Get Y. Turn on price rounding to .95. Buy One: quantity 1, full price ($19 in the example). Buy Two: $14.98 each, $29.99 total, badge style "Most Popular". Buy Three: badge "Best Value". Set the free shipping threshold at $25, between the single price ($19) and the two-pack price, so the bundle gets free shipping and the single does not. Source: Course D 2026, "Kaching Bundles für Produktbündel und Gratis-eBooks". Chapter 07 describes Kaching in general but none of these settings.
- **Five Q4 promotions need five different offers.** The Q4 2025 plan (Halloween, Black Friday incl. Thanksgiving, Cyber Monday, Christmas, New Year) requires 5 unique offers, one per promotion, not the same discount repeated. Source: Course A, Members Podcast, "Q4 2025 Members Share" (document). The email dates are in chapter 07; the "5 unique offers" rule is not.
- **Obvi membership offer.** $129 membership gives 25 % off every order, 10 % cashback and free shipping. Example of a paid membership as an offer on a landing page. Source: Course C, "Landingpage-Struktur für E-Commerce-Verkäufe".
- **Instant giveaway funnel: measure and optimise correctly (Course E).** Optimise the giveaway campaign for the Purchase conversion, not leads. Facebook showed about $40,000 revenue, but real revenue was about double, so true ROAS is about double and cost per purchase about half of what Ads Manager shows. To see it, look at revenue in Klaviyo from the giveaway flows and exclude people who had bought before. Source: Course E, Website and Offers, "Instant-Giveaway-Funnel für Website-Angebote" (checked in transcript). The WooRise tool and 1-in-10 win chance are in chapter 07; the measurement correction is not.

### 08 Brand and positioning

- **Why build a brand (Course A, 2018 retreat).** Lower CPA (cost per acquisition), more repeat customers, more referral traffic, more creative ways to monetize, higher business valuation if you sell, and everyone knows who you are. Source: Course A, 2018 Retreat, "Course A Build Your Brand" (document).
- **Minimum Viable Brand document step order.** Step 1 define your business, step 2 target audience, step 3 USP, step 4 brand values, step 5 brand name, step 6 logo, colour palette and typography (Canva or a designer). The order matters: the name comes after USP and values. Source: Course C vault, Module IV Branding, "MVB Document". Chapter 08 mentions the MVB document but not the six-step order.
- **USP lines that worked in cart emails.** "Australian-owned family business", "Order today, unpacked tomorrow", "1,500+ five-star reviews". Local ownership plus fast delivery plus count of reviews. Source: Course E, Email Marketing, "E-Mail-Content für verlassene Warenkörbe" (FYXO example, checked in transcript).

### 09 Meta and Facebook ads

- **Low-ticket Meta economics (Course C).** Expected ROAS with working Meta ads: 2 to 2.5, up to 3 when a campaign scales well. Customer acquisition cost around $15 to $20. Recommended selling price at least $25, up to $200. (The 3x markup and break-even ROAS 1.3 to 1.6 are in the chapters.) Source: Course C, "Produktforschung mit Ad-Spy-Tools". Claim.
- **CPM alarm levels (Course C coaching).** Alarm bells when CPM is above $20 to $25. Above $30: make more interactive ads that get people to comment, like and share. Restricting targeting to English-speaking countries cut CPM to about $18 in one student's account. Retargeting campaigns at most $5 per day in that setup. Source: Course C, "Finanzübersicht für Dropshipping und Facebook-Ads Q&A" (checked in transcript).

### 10 Google Ads and Shopping

- **Agency payback math.** Store at $7,000 monthly revenue and 20 % profit margin makes about $400 per month ($4,800 per year). A good agency that doubles ad spend from $1,000 to $2,000 and lifts ROAS from 7 to 10 roughly doubles monthly profit from $400 to $825, even after a $1,200 service fee, and frees your time for SEO or email. Realistic expectation from a good vendor: +$1,000 spend and +3 ROAS points. Know your margin, spend and ROAS before hiring. Source: Course A, Google Ads for eCommerce Module 5, "Wann und wie man eine Google Ads-Agentur einstellt" (checked in transcript).
- **What a good Google Ads vendor does.** Answers emails fast, invites you to calls at least monthly, shares task lists so you see the optimisation work. In an audit it blocks zero-revenue keywords, wrong age groups, wrong devices and wasted search terms, and builds a full structure (audiences, YouTube, Display, Bing, Facebook, Gmail ads). Same lesson. (The WordStream statistics are already in chapter 10.)
- **Merchant Center website verification.** Verification through Google Analytics with the default setup does not work. Use Google Tag Manager, or paste the HTML tag into the head section of theme.liquid. Takes about 5 minutes. Source: Course A, Google Ads for eCommerce Module 2, "Google Merchant Center und Product Feed Einrichtung" (checked in transcript). Older lesson; newer DSL guidance verifies through Search Console with the same Google Workspace email (in chapter 10).
- **Ads sell the click, not the product.** The job of a PPC ad is to bring the right traffic at the right time at the right price; the site does the selling. Source: Course B, BSGR Google Ads and Shopping, "Wozu sind Anzeigen da?".
- **Targeting all available traffic is never profitable in high-ticket.** Margins are not high enough; restrict to buyers. Same lesson. (The 40-40-20 rule is in the chapters.)

### 11 TikTok and short video

No missing specifics from the sampled lessons.

### 12 Creatives and ad copy

- **People buy on emotion and justify with logic.** The base premise of the "paint a picture" lesson; story and thought commands exist to create the emotional picture first. Source: Course B, copywriting module, "Ein Bild malen".
- **Behaviour versus motivation messaging.** Behaviour-based message: "make $10,000 a month". Motivation-based message: "financial freedom". Write for the motivation behind the behaviour. Source: Course C, "Marktsegmentierung und Zielgruppendefinition".
- **Cross-pollinate angles from winning markets.** In the Course C creative process, after competitor and audience research, take angles that win in other markets or niches and test them in yours. Source: Course C vault, "Audience and Creatives Process" (document).
- **Example hook from the NAD+ case.** "If you want to age backwards, you need NAD" with the testimonial line "my dad's really old but he doesn't look that old because he takes NAD". Source: Course D 2026, "Kreativ-Recherche und Content-Recycling mit CapCut". The case and the 4,000-creative pool are in chapter 12; the hook text is not. Health claims: check our lawyer list before use.
- **Speaker credential.** The Course E creative-strategy speaker has about a decade of creative strategy experience. Source: Course E, AI Playbooks, "Wie AI wirklich funktioniert und wo sie versagt". Low value.

### 13 Influencers and UGC

- **Platform demographics for creator choice.** Instagram skews 18 to 34 (millennials), visual content, built-in shop. YouTube: broader audience, long-form, higher conversion. TikTok: Gen Z, short form, trends spread fast, TikTok Shop has high potential. Source: Course C, "Die besten Influencer finden" (checked in transcript).
- **Ask buyers where they heard of you.** A post-purchase survey question is needed to attribute sales to an influencer, next to codes and affiliate links. Source: Course C, "Influencer-Kampagnen-Ergebnisse tracken".
- **Creator-scale benchmark and naming.** A benchmark brand ramps to about 2,300 creators. Ad naming convention used: product name (sleep, tea, bathrobe), ad type (video, UGC versus sale ad) and the creator name written identically every time, so AI can report output per product and per creator and calculate creator commissions. Source: Course E, AI Brand Builder Results and Analytics, "KI-gestützte Verfolgung von Creative-Output pro Produkt".

### 14 SEO and content

- **Hunter.io bulk domain search numbers.** About 50 % of email addresses can be found. Set max emails per domain to 10 (not 1, companies have several). 78 domains run in seconds, 1,000+ domains take 10 to 15 minutes. Example: 200 emails from 50 of 78 domains. 85 % estimated deliverability is acceptable, below 80 % is too low; a 95 % filter gives fewer addresses. Needs Starter plan or higher; credits are charged per email found. After export, pick one email per domain for sending. Source: Course B, "Email-Adressen für Link-Outreach mit Hunter.io finden" (checked in transcript and screen). Chapter 14 describes Hunter.io but none of these thresholds.
- **Outsourced content prices.** ProBlogger job board for native-English writers; example price $500 per blog post; a nice custom image about $10 (Fiverr). Source: Course B, BSGR Content Marketing, "Content-Erstellung auslagern".

### 15 Email and SMS

- **Email share of revenue.** Email marketing should bring 10 to 30 % of total store revenue. At $1,000 a month revenue that is $100 to $300 more per month. Source: Course A, 2014 Retreat, "E-Mail-Marketing: 6 Schritte zu 30% mehr Shop-Umsatz" (checked in transcript). Older (2014).
- **Review and photo request flow in Klaviyo.** Trigger metric "Ordered Product"; time delay equal to normal delivery time plus a few days (example: 7 days shipping, 10-day delay); then set the flow Live, it runs indefinitely. Source: Course A, Drop Ship Blueprint Module 6, "Das Sanduhr-Funnel für automatisierte Kundenreferrals" (checked in transcript). Chapter 15 has the AfterShip delivered trigger as the better option; this simpler order-plus-delay setup is missing.
- **Cart discount is valid for 3 days.** In Course B's cart sequence the discount sent 24 hours in is labelled as time-limited to 3 days, which is what makes the later "24 hours left" and "4 hours left" emails true. Source: Course B, BSGR, "Warenkorbabbruch-E-Mail-Sequenzen".

### 16 Retargeting

- **Reach.** Google retargeting options plus Facebook retargeting together reach about 99 % of internet users, so a store can stay in front of past visitors almost everywhere. Source: Course B, BSGR Follow-up and Upsells, "Retargeting: Follow-up und Kundenreise" (checked in transcript). Claim.

### 17 Customer service, returns and chargebacks

No missing specifics from the sampled lessons.

### 18 Legal, tax, banking and payments

No missing specifics from the sampled lessons.

### 19 Metrics, finance and tracking

- **Cash shocks that Profit First prevents.** Owner pay is irregular (one month $15,000, the next nothing). A store owner who thought he was breaking even got a surprise supplier bill of $10,000 to $15,000. A tax bill can eat a whole month's profit. Source: Course B GROW, "Profit First: Warum Sie Cashflow-Probleme haben" (checked in transcript). The Profit First account system itself is in chapters 18 and 19.
- **US average conversion rate (Course D claim).** Speaker says US stores typically see about 4 to 5, maybe 6 % conversion rate. This is far above the 1 to 2 % used in other chapters; treat it as an unverified claim, likely for low-ticket impulse products with warm traffic. Source: Course D 2026, "Mindset & Daten: Die Grundlage zum Erfolg" (checked in transcript).

### 20 Scaling, team and processes

- **Do it until you understand it, then outsource.** Automate first (copyable processes). For human tasks: do them yourself until you understand them, then outsource. Source: Course A, Drop Ship Blueprint Module 7, "Wann und warum outsourcen" (checked in transcript).
- **Virtual assistants, not W-2 employees; outsource as soon as profitable.** Same lesson.

### 21 Phone sales

- **Call abandoned checkouts.** At least about 50 % of abandoned checkouts include a phone number. Course B calls every abandoned checkout that has one and says conversion on those orders goes up substantially. Source: Course B, BSGR Conversion Optimization, "Zusätzliche On-Site CRO-Faktoren" (checked in transcript).

### 22 Mindset and planning

- **Course D daily tracker.** Fixed daily habits: 30 minutes of development (training, course, reading), at least 30 minutes of market research (double, triple or quadruple it when possible), plus tasks such as a new idea, launching a new ad creative and attending the weekly call; several 30-minute blocks make about 90 minutes of daily tasks. Target completion rate 75 % (0.75 in the sheet). Reward yourself when you hit 75 % (a nice meal, new shoes). For every missed task, right-click and add a note with the reason. Source: Course D 2026, "Der Daily Tracker zur Gewohnheitsbildung". Fits our own habit tracking.
- **Compress 1 to 3 year goals into a 3-month plan.** Set the long goal, then plan in 3-month blocks. Source: Course D 2026, "Mindset & Daten: Die Grundlage zum Erfolg".

## 4. What this says about the chapters

- Coverage of concrete specifics is about 80 % (measured on 250 items). A reader can trust that a topic exists in the chapters; for exact numbers, about one in five is lost.
- What gets lost: (a) worked examples with numbers (agency math, CPM alarm levels, ad-count ladder), (b) app settings (Kaching values), (c) the reason behind a rule (price guarantee because shoppers check 3 sites), (d) course-specific step orders (MVB steps), (e) newest course content (Course D 36 % missing).
- Hits that look like hits but are not: about 1 in 4 raw keyword hits was a false match during this audit. Any future check should read the matching line, not just count matches.
- Recommended next pass: run the same audit on 30 more Course D lessons and the Course C "Sonstiges" calls, since those courses have the highest missing share and are the ones closest to our low-ticket Meta and book stores.


Part 1 of 2 of "23. Missing from the lessons: coverage audit of chapters 01 to 22". Map of all parts: https://dlichters.com/ai/ecom/deep/23-missing-from-lessons.md · Next: https://dlichters.com/ai/ecom/deep/23-missing-from-lessons/02-5-appendix-the-91-lessons-that-were-sampled.md
