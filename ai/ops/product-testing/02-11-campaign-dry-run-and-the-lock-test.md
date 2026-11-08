<!-- part of ops/product-testing.md -->
Part 2 of 2 of "Product testing: finding, gating and judging products". Map of all parts: https://dlichters.com/ai/ops/product-testing.md · Previous: https://dlichters.com/ai/ops/product-testing/01-contents.md

## 11. Campaign dry run and the lock test

- The campaign builder only produces a list of all Meta API calls in order, from the product sheet and a configuration with all IDs; it calls nothing. Answers only a real run knows are placeholders `<<...>>`. Without a passed lock test it does not even print the list. Exit: 0 ok, 2 input incomplete, 3 lock test caught something.
- The lock test checks: status PAUSED everywhere; only creating under our own account; correct order; never the same call twice; a cap present; minimum number of ads (course minimum 12 for Curlmoon); David's ad text rules: never "small", never a deadline, never shipping, a dog ad says only "dog", a pet ad says only "pet".
- An acceptance script compares the dry run field by field against the upload plan, the ad IDs file, the status file and the real API calls of 2026-11-05; every known difference carries a reason, any other difference fails.

## 12. The course judge (Kursrichter)

**Why it exists.** David, 2026-10-03 21:20: "Stop asking yes 1, 2, 3 all the time ... Just ask someone who has read the whole course whether it is better to do this or not. Why are you asking me?" Since then a yes/no question about store, offer or ads is answered by a course judge with course quotes, and David only gets the result.

**Procedure (can be rebuilt with any AI that has the course library):**
1. Write the question with the situation: "Should we do X? Situation: ..." (numbers, dates, what is live).
2. Start a separate, non-interactive AI session (timeout 15 minutes) inside the course library folder, with read, search and write tools only, no browser or computer control. Prompt (translated from our German original):
   "You are the Course E teacher (2026) and know every lesson of all courses in this library (Course D 2026, Course E 2026, Course C, Course B, Course A). First read the library's guide, search with the search tool (statements mode) and the full Course D transcript, and read our playbook (our rules with course sources). [Store context: who we are, product, price and tiers, cost incl. shipping, delivery days, platform, start, goal.] QUESTION: ... Decide like in a coaching call: short, honest, practical. 2026 lessons beat older ones. Write: Verdict: DO, DON'T or CHANGE (then: exactly how). Why: 2 to 4 sentences. Evidence: 1 to 3 course passages with lesson, year, [mm:ss] and a short word-for-word quote, each found with an exact-string grep. If there is no passage, write 'no course evidence, own judgment'. Write that to the verdict file, then answer with one line only: 'VERDICT: <DO|DON'T|CHANGE: ...> | <one sentence reason> | <file>'."
3. Read the one-line answer; the full verdict is saved with a timestamp.
4. **Not for:** money above the approved budget, new accounts, messages to new people, anything irreversible. Those stay with David.
5. Gotcha: on 2026-11-06 it did not run ("Not logged in"); check that the CLI session is logged in before relying on it.

**Selected past verdicts (October to November 2026), useful as precedent:**
- Home page redirect to product: CHANGE, no redirect; put a featured-product section with image, price and buy button at the top instead.
- UK in Shopify Markets without a UK VAT number: CHANGE, only US active (GB, AU, CA, International off) until VAT number, duties and delivery are set up. UK VAT registration now: DON'T.
- Second product (dog stairs) before the first runs: DON'T. Calming dog bed as second product (2026-11-01): CHANGE, test it as its own campaign (1 CBO 50 USD, 3 ad sets of one concept each, 12 images), evidence from the Ad Library not Kalodata (one competitor had 131 active ads, 87 new in 30 days), price under the market leader, check cost and shipping first, never below about 3x markup [GUESS], start only when the first product really runs; never a non-dog product in a dog store (pixel, return policy and buyers are dog). Course: "If you decide to sell a second product, you need to create another campaign".
- 150 USD bundled instead of image CBO at 50: DON'T; broad US purchase CBO at 50 a day, 3 ad sets (one concept, 4 to 5 images each), 7 days.
- Video CBO on account day 3: CHANGE, instead of a second image CBO, not in addition (day 3: image CBO 50 + video CBO 50).
- AI clips of the product in themed scenes: DO, with Meta's AI label and a small "AI-generated scene" line while the AI scene is visible; the product must stay identical.
- Shipping 0 or 4.99 on the single unit: DO 0.00 for every US order; price stays (prices held until 20 purchases, rule D17). Delivery time on About and FAQ: one span everywhere ("10 to 14 business days from your order" at that time). Show the real ship date during a supplier holiday: DO, with the same number in the shipping policy (one truth in the store).
- PayPal at launch: DON'T now; decide again after 30 orders. (Later David decided PayPal stays; never switch it off ourselves.)
- Exit-intent pop-up with 10 % on one bed: never; an email pop-up only once ads run (exit intent on desktop only).
- Paid add-on (7.99 puzzle book) on the single bed: CHANGE, no paid add-on; show it as a free gift with its value in the 2 and 3 tiers. Free gift in the quantity offer from the start: DO.
- Illusion-of-choice question before the tiers (2026-11-01): CHANGE, not now; until 20 purchases the page stays (1 bed preselected); afterwards test it as variant B, judged by profit per visitor. Course: "this is why we test always our offers. And these are the two metrics that you always check" (conversion rate and order value).
- Supplier agent as Shopify collaborator (2026-11-03): CHANGE, yes but with limited rights (orders and fulfilment, view products and inventory; never settings, payments, apps, themes, discounts, customer export, staff). Course (Course D 2026, lesson 43): the agent requests collaborator access with the four-digit code and the store address, the owner approves and sets roles.
- Supplier order route: CHANGE, collaborator access instead of WhatsApp lists or our own app.
- Creator pilot booking: CHANGE, book only after a campaign makes 100 USD profit or more on 3 days in a row with CPA under break-even.
- Five-country pilot at 70 USD per country per day: DON'T. Second price round with suppliers: DON'T now, park with a measurable trigger. Appeals for old banned ad accounts: DON'T.
- Shop corrections before the first ad dollar: DO all of them before launch. Shopify Inbox AI agent: CHANGE, switch on before the first ad dollar, but restricted.

## 13. Open contradictions we know about

- Which base the order counts use: the source set 6 / 4 / 3 orders at 200 USD as a separation, 9 at 300 USD without a calculation, before the VAT correction. Depending on the base (33.47, 37.50 or 44.63 per purchase) it gives 6, 6, 5 at 200 USD and 9, 8, 7 at 300 USD. Active: 9 from the calculator, 6 and 4 unchanged and open.
- At 300 USD, 8 orders are exactly 37.50 per purchase: out by the stage rule, inside the CPA rule. Code: the stage rule decides the product verdict.
- "No ad set off because of 0 purchases" (72 h rule) versus the emergency brake at 0 purchases, 0 carts and 75.00. Code: the brake wins (any time, newer rule).
- Between the stages (e.g. 6 orders at 250 USD) the stage rule and the CPA rule can disagree; the CPA rule only applies after a recorded "stays" verdict; until then the contradiction is shown as a note.
- All thresholds are for the 20-inch bed; other sizes and the double offer have other contributions.
- "CPC" in the source does not say per click or per link click; the watcher reads all clicks; the reading assumes per link click.
- The 2-of-the-cap "grey" line (2 orders) has no calculation in the source; the calculator knows a different line for new products (under 3 out).


## 14. Test form per new product and wave 1 economics (system plan, 2026-11-06)

Source: our system plan of 2026-11-06 09:4x, section 2 and the wave 1 table, checked against its sources the same day. Marks: [MEASURED] / [GUESS]. Curlmoon's own running test keeps its own rules (sections 7 to 9 in part 1); this is the form for every NEW product attempt.

**Test form per attempt:**
- **34 EUR a day for 3 days, cap 100 EUR** (Meta's minimum [MEASURED]).
- **Stage 1, up to 116 USD:** under 3 orders = off.
- **Stage 2, up to 300 USD:** goes beyond Meta's cap, so it needs David's yes per test. **Confirmed from 12 orders**, because 11 orders would be 27.27 USD per purchase, above the threshold of 26.23 USD (the break-even with refunds at Curlmoon values; 29.60 without refunds) [GUESS]. Stage 2 at 34 EUR a day takes almost 5 days.
- **Emergency brake: 59.20 USD, only without add-to-carts** (as decided on 2026-11-05). With carts there is no brake. The sheet computes the thresholds per product; 59.20 was 2 x 29.60 at the old Curlmoon price. For Curlmoon itself the rules code uses 75.00 USD since 2026-11-06 14:06 after the price rise (part 1, section 7); both rules agree that the brake fires only at 0 orders and 0 carts.
- **Detection:** the test catches only **63 % of real winners** and lets **7 % of mediocre products** through [GUESS].
- Campaigns are created paused; switching on only with David's yes, start 00:00 New York. Money never runs by itself.

**Wave 1 = 10 attempts as new product pages in the existing store** (about 10 instead of 60 minutes of David's time each). Model recalculated without store costs, confirmation from 12 orders, ranges from the hard and the current stop rule [GUESS]:

| Item | Value |
|---|---|
| Stake in the till | 1,600 to 1,950 USD on average, cap 2,000 USD (little room: at the cap the wave ends even if not all 10 ran) |
| Net loss on average | 510 to 800 USD |
| Failed attempt, net | 85 to 110 USD |
| At least 1 confirmed winner at a 10 / 15 / 20 % hit rate | 48 / 63 / 74 % |
| Certainty of 95 % | would need 23 to 46 attempts |
| Duration | 16 to 19 days with Meta's limit of 74.35 EUR a day and 2 tests in parallel, stage 2 included; longer while Curlmoon runs in the same account (at 50 USD a day there is room for one test) |
| Neutral store | all candidates are non-dog products, so wave 1 first needs one neutral (non-dog) store, once about 54 USD extra, 60 to 70 minutes of David in one block |

- David's sentence "10 attempts, almost guaranteed back": on average yes, once a winner brings 370 to 1,170 USD; in a single wave no. With a winner the size of our best measured one (700 USD) the money comes back in only 29 to 64 % of waves, from 3,000 USD in 48 to 74 %. In 26 to 52 of 100 waves there is no winner at all [GUESS].
- The attempts are not independent (same image style, same ad account): if the error is in the system, all ten fail together.
- **Calendar [GUESS]:** builds until 2026-11-13, wave 1 from about 2026-11-16, reading about 2026-12-03 to 12-05. Gates before wave 1: build 10 passed, neutral store standing, the 2026-11-09 Curlmoon reading done with real delivery (if Curlmoon does not deliver, the calendar moves). A wave with a 2,000 USD cap needs David's yes after the reading.

Part 2 of 2 of "Product testing: finding, gating and judging products". Map of all parts: https://dlichters.com/ai/ops/product-testing.md · Previous: https://dlichters.com/ai/ops/product-testing/01-contents.md
