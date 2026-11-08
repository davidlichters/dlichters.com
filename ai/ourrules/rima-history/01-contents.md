<!-- part of ourrules/rima-history.md -->
Part 1 of 4 of "RIMA / Liquidationsradar: the history and lessons of the era before Porchnap (Aug to Sep 2026)". Map of all parts: https://dlichters.com/ai/ourrules/rima-history.md · Next: https://dlichters.com/ai/ourrules/rima-history/02-7-pricing-decisions-in-order.md

## Contents

1. One-paragraph summary
2. Names and what they mean
3. Timeline
4. Before RIMA: "Strand A", the US contact-form machine (to 26 Aug)
5. The Filter: how the idea was chosen (26 Aug)
6. The product: what it was, how it changed, and why each version died
7. Pricing decisions, in order
8. Channels: what was tried, with numbers
9. The funnel at the end (30 Sep)
10. The decisions register: forbidden moves and why
11. Rules about numbers that came out of RIMA
12. Rules about texts to humans that came out of RIMA
13. The loop: how the autonomous operation worked, and why it was stopped
14. Tools we built (so they can be rebuilt by hand)
15. Money, accounts and infrastructure (what existed, what was cancelled)
16. Ideas parked during RIMA
17. Why RIMA failed, honestly
18. What carried over into Porchnap and later work

---

## 1. One-paragraph summary

RIMA ("Register Insolvency Match") was David's attempt to build a German B2B subscription: watch official German company announcements (insolvency notices, later liquidation notices with a creditor call under § 65 GmbHG in the Bundesanzeiger) and tell small businesses when one of *their own customers* is being wound up, so they can claim open invoices before the money is gone. It ran from 27 Aug to 30 Sep 2026 under the brand **Liquidationsradar** (website liquidationsradar.de, Stripe link at 79 EUR/month). Claude built a crawler, a matcher, a mail sender with warm-up ramps, ~240 checking tools, a fully autonomous loop that ran a fresh `claude -p` session every 20 minutes, and sent roughly 2,800 contact-form messages plus 861 cold emails. Result: 3 human replies on forms (0.29%), a handful of replies on cold mail, 1 person who asked about price, 1 company that accepted a free 5-day trial, **0 paying customers**. On 30 Sep David paused the loop (weekly usage limit, 14% of night usage burnt at 0 customers), muted its alarms, stopped cold sending ("end all Liquidationsradar subscriptions") and moved fully to e-commerce with Timo (Porchnap). On 3 Oct: "sort out everything about Liquidationsradar."

## 2. Names and what they mean

| Name | Meaning |
|---|---|
| RIMA | Internal project and repo name ("Register Insolvency Match"). **Rule: never used outward**, not in titles, not on pages (grep -i rima must be 0 before publishing). |
| Liquidationsradar (LR) | The public brand, the website and the Stripe product. |
| Strand A | Everything before 26 Aug: David's English, US-targeted contact-form outreach machine. All hard numbers came from here. |
| Strand B | RIMA itself: German, German SMEs, from 27 Aug. At the start "nothing measured". |
| Fassung (version) A/B/s/b | Text variants of the outreach message. "Fassung s" was David's own text (see 12.6). "Arm" = a send group in a test. |
| Firmengewerk | Trades that invoice other companies (freight, logistics, civil engineering, drywall, scaffolding, steel, waste, contract manufacturing, wholesale). The real target after 18 Sep. |
| Käufer / Verwerter / Räumer | "Buyers": companies that buy machines, stock or furniture out of liquidations, liquidation dealers, and clearance services. The last target group (from 22 to 30 Sep). |
| Sperrjahr | The one-year blocking period after a GmbH's liquidation creditor call; before it ends, a creditor can still claim. |

## 3. Timeline

| Date | What happened |
|---|---|
| to 26 Aug | Strand A: US contact-form outreach about security of AI-written code, plus Instagram DM outreach. 10,237 form sends, 0 sales; 12,784 Instagram sends, 0 sales. |
| 26 Aug | "The Filter" written (hard gates for any idea, originally for a friend in Hamburg who would run it). Panel of pessimist agents killed 12 of 14 ideas. Filter amended: 90 days to first euro, commodity test, name the moat. |
| 27 Aug | Idea chosen: insolvency early warning for German SMEs with invoice customers. 14-day plan, budget 400 of 1,000 EUR. |
| 28 Aug | Outreach message v2 ("Skonto bet"), A/B design, GPT-5 nano personalisation decided. |
| 29 Aug | Price verdict (11 agents, 545 tool calls): "we warn earlier" thesis dead; price ceiling 49 EUR today, 99 with a work layer, 199 only with a proven rescue. |
| 30 Aug | WhatsApp sales flow fixed ("final version"): sender David (not the friend), 79 EUR/month up to 1,000 names, no phone, three names for a demo. |
| 31 Aug | Premise audit: the two anchor numbers (0.47% reply rate, 0.031 USD per send) were dead. ~33% of 16M tokens that day were wasted on false premises. Decision register created. Thresholds F1-F4, money ladder. |
| 1 Sep | David dismissed three "blockers" (who invoices, UWG risk, spending cap). "Five questions before any text to a human" created after he had to ask them himself. Goal: 1,500 EUR profit. |
| 4 Sep | Legal correction (§ 2 vs § 3 InsBekV), "smell test" tool and numbers ledger after 12 errors in one day. |
| 6 Sep | First German send: 190 contact-form messages (Bundesanzeiger version). |
| 9 Sep | Loop moved into the chat ("build the loop here in the chat"). Rule: decide yourself, don't ask. |
| 10 Sep | Loop evaluated: heartbeat forgotten for 20 h, 33 false push alarms to David. Form channel switched off then on again; three wrong "dead" verdicts measured in transient states. |
| 11 Sep | Form channel exhausted (30 targets left, 0 refill). Hooks instead of rules. David re-cut roles: Claude does all numbers, all WhatsApps and emails, and must give the verdict "is it worth it for a 16-year-old". |
| 12 Sep | Direction: small hand-picked list instead of mass. Logo geometry fixed. WhatsApp profile description: empty. |
| 13 Sep | Reply rate finally measured: 3 of 1,045 delivered forms = 0.29% (Wilson 95%: 0.10 to 0.84). Plans for 100k USD and 3k EUR/month recalculated. Free month dropped. Multipliers (tax advisers etc.) refuted. Stripe payment methods set. |
| 14 Sep | Finding: the measured list was 47% wrong industry; all 3 replies came from the wrong half. Five competitors read the same source; North Data prices measured. "Three ways" decision paper. |
| 16 Sep | DER_PLAN fixed: David buys 2 domains (1.68 EUR) and Mailforge (30 USD). Minijob started (600 EUR/month). No hires: "You do everything." Goal becomes: sell the company at peak. Monthly autonomous operation built (launchd, every 20 min). |
| 17 Sep | "Two weeks building to the extreme, then optimise usage." Five Mailforge mailboxes set live without warm-up, all test mails landed in Gmail spam. No A/B on small text differences (math says impossible). |
| 18 Sep | Send source switched to verified businesses (old "checked" list was 57% non-businesses). Firmengewerk sorted first. Weekend sending kept. |
| 19 Sep | NORDSTERN (David's happiness list) placed above the project. Weekly limit at 92%: all Claude loops paused until 21 Sep. |
| 20 Sep | Four Contabo servers rented. "Already sold by someone" stops being an exclusion (it proves demand). |
| 21 Sep | Measured: 0 of 7 mailboxes ever received a Stripe email, so a payment would have gone unnoticed. Payment signal built. |
| 22 Sep | First real German reply with intent: a removal/transport firm wanted the liquidation list as *jobs*. Start of the buyer pivot. "50 rounds" redefined with a checklist and a stop rule. |
| 23 Sep | David: the 1 Sep 2027 "departure" deadline is withdrawn ("an idea with 0 planning"). |
| 24 Sep | David's own "Fassung s" saved verbatim; Claude must not change it again. |
| 25 Sep | A liquidation dealer in Berlin asked about the price: the only person ever to ask. Follow-up sent 28 Sep, no answer. |
| 26-29 Sep | Buyer harvest: ~88 new buyer targets in 20 h. 29 Sep: a forklift service company in Leipzig accepted a free 5-morning trial. |
| 30 Sep | Last thinking round: 0 customers, 861 cold mails sent, 860 delivered, 8 clicks, 1 button press. Trial showed 0 relevant firms in 15 km in 20 days. 08:55 loop paused, 10:35 alarms muted, 11:19 cold sending stopped. Porchnap goes live the same day. |
| 3 Oct | Last make-up delivery of the trial (computer had been off). David: "sort out everything about Liquidationsradar." Memory archived. |

## 4. Before RIMA: "Strand A", the US contact-form machine (to 26 Aug)

What it was: English messages to US businesses via website contact forms (and earlier Instagram DMs), about security problems in AI-written code; Claude Sonnet wrote a personalised message per target. Four rented servers sent in parallel.

**Measured, 18 to 26 Aug, all four machines, from the send log:**

| Stage | Count |
|---|---|
| Form sends | 10,237 |
| Actually delivered (not just "HTTP 200") | 1,800 (17.6%), i.e. sends overstate delivery by factor 5.7 |
| Replies | 27 (1 per 401 sends = 0.25%; 1 per 69 delivered = 1.45%) |
| "Raised hand" (interest) | 3 |
| Sales | 0 |
| Model cost | 1,047 USD for 0 sales |
| Cost per send attempt | 0.1023 USD (checked against the real card bill on 24 Aug; models only, no servers/proxies/domains/labour) |
| Cost per delivered | 0.58 USD; per reply 38.79 USD; per interested person 349.08 USD |

Instagram DMs before that: **12,784 sends, 0 sales, accounts banned.** Three outreach accounts were banned because they started following and messaging while still having no picture, no posts, no bio (an empty-account-doing-outreach signature, a sequencing error, not proof that accounts can't work). Selling lead lists to agencies: 19 offers, 5 reached a real inbox, 0 yes.

**What the right half of that funnel really looked like** (measured 29 Aug by opening every thread): 20 threads where David answered, 6 people wrote again, 1 meeting booked, **0 meetings held**. The one booked meeting: the prospect sat alone in the video call and wrote "Are you joining?"; David did not come. Another prospect asked for a phone call and got two long emails instead. Of 3 raised hands, 2 were lost by us, not by the customer. Only 1 of 20 repliers ever heard a price. Lesson: "0 sales from 12,784 sends" sounded like a broken channel, but no offer was ever rejected in a conversation, because no conversation happened. **Answer every raised hand before spending one more dollar on sending.**

Also measured: a Google Sheets write limit (60 writes/min shared by 4 machines x 24 workers) returned HTTP 429 and the code treated it as failure: **14,969 of 26,764 finished drafts (55.9%) were never sent.** Lesson: when "ready" is much bigger than "sent", look for a silent gate.

Contact-form traps that answer HTTP 200 but deliver nothing: forms without an `action` (submitted by JavaScript to an API), Contact Form 7 5.x (posts to a REST endpoint, not the page), formsubmit.co (first message held until the site owner clicks an activation link). A dry run went from "mostly accepted" to 34 of 50 rejected once this was checked.

## 5. The Filter: how the idea was chosen (26 Aug)

Written before any agent ran. Every candidate had to pass all hard gates:

1. Under 1,000 EUR total cash out before the first euro comes in (everything counted).
2. First euro from a stranger within 30 days (**changed to 90 days** the same day, because 30 days mechanically selected commodity labour). Not from friends or family.
3. One person at 20 h/week can reach it, no hiring.
4. No inventory bought upfront.
5. No licence, no regulated activity (financial, medical, legal advice, food, alcohol, gambling).
6. Nobody pays before delivery beyond a normal deposit.

Scores (not gates): days to first euro; proof per euro spent; test costs time not money; customer 2 cheaper than customer 1; local physical presence helps; credible in under 2 weeks; survives AI getting 10x better in 12 months. The winning metric: **euros from a stranger, within 30 days, per hour spent.**

Kill heuristics for pessimist agents (a kill only counts with a structural reason): it is a job not a business; the market is other beginners; it needs an audience you don't have ("a two-year plan wearing a 30-day costume"); it needs trust you can't show yet; winner-take-all with funded incumbents; the season just ended.

**Amendment after the panel killed 12 of 14:**

- **Commodity test:** before submitting any idea, name the cheapest existing substitute with a URL and a price. Dead if the substitute is free software, a vendor doing the work cheap to win a subscription (a club-software vendor did a whole migration at 135 EUR/h and killed the 4x-convergence winner), a labour marketplace with thousands of reviewed providers (8,873 helpers, 4.8 stars from 5,331 reviews), a flat-rate tool below our price (9.90 EUR/month against our 25 EUR/unit), or a free tool posted last week in the forum we would prospect in.
- **Name the moat:** proprietary access, accumulating asset, closed distribution, an external deadline with a date, or aggregation. "I will work harder" and "I will be cheaper" are not moats. Since anyone can build with AI, **the code is never the moat**; usually the data or the distribution is.

Later correction (David, 20 Sep, for the idea finder "Thinker"): **"Taken" is not an exclusion.** That someone sells it proves demand; Liquidationsradar itself was "taken". Exclude only: no reachable buyer; one provider with crushing share plus high switching costs; licence required; delivery needs staff or capital we don't have. Many small providers with public prices are a plus.

Another rule learned on 27 Aug: **ideas derived from public text are already taken** (15 ideas derived, 0 free). Only non-public sources (own archive, own measurement, a relationship) produce free ideas.

## 6. The product: what it was, how it changed, and why each version died

### 6.1 Version 1: insolvency early warning (27 to 29 Aug)

Pitch: "Give me your customer list. I watch the official registers, stay silent on everything normal, and email you in German with one sentence on what to do when something smells like non-payment. 75 EUR/month up to 100 names." Sell the filtering of 99% noise, not the notices (notices are free).

Price verdict, 29 Aug (11 agents, 545 tool calls, all sources fetched): **the thesis "199 EUR because we warn earlier" fell on all three of its sentences.**

- Nobody publishes the *application* for insolvency. The official portal has nine publication categories, "applications" is not one. The first public event is the court order appointing a provisional administrator (§ 23 (1) InsO).
- Cheap competitors already alert on that first event, and one advertises it as lead generation: 25 EUR for 10 firms, 59 for 50, 149 for 150 (checked 28 Aug). Creditreform monitors it too.
- "Could become insolvent" is legally impossible to sell from court data: § 15a InsO forces the filing within three weeks of insolvency, so every court signal comes *after* the customer is already insolvent.
- The lead time between the provisional order and the opening is real (90 to 163 days, n=3, not a measurement) but it belongs to everyone who reads the same feed: **our head start against a 25 EUR product is zero days.**
- Going earlier is blocked everywhere: the debtor register forbids passing data on (§ 882f ZPO, § 9 SchuFV, plus 4.50 EUR per query); the commercial register's terms forbid systematic retrieval to build a parallel register; a missing annual report gives at most 8.3% precision and arrives 12+ months late; a self-built balance-sheet score (study on 437,792 statements) needs 40.1% of all firms flagged for 90% recall, i.e. **~98.6% false alarms**; payment-behaviour pools are reciprocal and not for sale.

Price ceiling from that day: **49 EUR now** (North Data's starter plan was 49 EUR for 100 watchlist names on more sources), **99 EUR with a work layer**, 199 EUR only after a reference customer confirms a prevented loss ("we saved customer X 14,000 EUR"). Comparison that would justify more: credit insurance has a minimum premium of 2,000 EUR/year (insurer quote) and ~20,000 EUR per contract on average (industry estimate, unverified), but 9 of 10 target firms buy none, so they compare against zero.

Build order fixed on 29 Aug: (0) free test accounts at two competitors to measure when their alarm fires (no claims about competitors until then); (1) our own daily archive of the official feed, because **§ 3 InsBekV deletes "other" announcements one month after publication and procedures six months after closure**, so whoever does not record daily loses history (the archive is the product, not a convenience); (2) match each alarm to the customer's open invoice (the only gap no product filled); (3) an action pack instead of a notice (deadline countdown, letter for delivery stop/prepayment, retention-of-title hint, pre-filled claim form) because "the customer does not buy the information, he buys the next three work steps"; (4) **never build a score**: an event product has zero false alarms, which is its selling point; (5) measure the lead time on 100 opened insolvencies backwards.

The one sentence that survived every check: *"We report at the earliest point German law makes public, and we tell you which of your open invoices are affected and what to do in the next three days."*

Correction 4 Sep: the claimed "two-week search block" was § 2 InsBekV and applies only to consumer insolvencies, not companies; the regulation is called InsBekV, not "InsoBekV". The conclusion (one targeted query per name, no mass download; robots.txt disallows all but the search page; free access only "to a reasonable extent", § 4 InsBekV) stayed right, the reasoning had been wrong.

### 6.2 Version 2: Liquidationsradar, the creditor-call product (from ~6 Sep)

The product moved to **voluntary liquidations**: when a GmbH is wound up in an orderly way, the liquidators must publish a creditor call (§ 65 GmbHG) and wait a blocking year before distributing assets (§ 73 GmbHG). Known creditors' money must be paid or deposited. Offer: "I check your business customers against the liquidation notices in the Bundesanzeiger and tell you if one is being wound up. Free check, then the subscription." Later the mail showed "21 firms in a 15 km radius around your town" with a short link to a page with the local list.

Measured facts that shaped it:

- 2.24% of all German GmbH/UG have a liquidation announcement per year (32,125 notices against ~1.43M companies, 12 months, own archive). The archive grew to ~34,000 rows by mid-Sep.
- For a business with 60 business customers: chance of seeing a hit in a **30-day free month: 10.6%**; in a **first check against 12 months of archive: 74.3%** (30 customers: 5.5% vs 49.3%; 120: 20.1% vs 93.4%). So a free month proves to 9 of 10 customers that nothing happens, right before they should pay. **Decision 13 Sep: free month removed**, replaced by 3 names free as a sample, then a first full check for 149 EUR one-off, then the subscription.
- A list with 60 names sees about **one** hit per year (1.01% of a list per year).
- Relative risk by industry (archive 33,756 vs register sample 30,001): staffing 1.81x, IT and media 1.78x, holding/management 1.42x, energy 1.13x, restaurants 0.93x, real estate 0.89x, **construction and trades 0.80x**, transport 0.67x, **trade 0.45x**. Orderly liquidation is done by firms that still have money; broke firms go to insolvency. So the creditor call structurally misses the risky industries, and our target list (construction/trades) was in the low-risk half. Only 24.2% of craft businesses are GmbH/UG (craft association 2024), so of 60 craft customers we can see about 15.
- Name matching is the hard part and the real value: the official name often differs from how the customer writes it (suffixes, duplicates in two towns).
- **Five providers read the same source**, one free (a register alarm), one is the Bundesanzeiger publisher itself; 3 of 3 random liquidations from our archive were freely visible at North Data. The cold-mail sentence implying we alone sit on this source was in 11,843 mails and was removed on 14 Sep.
- Cheapest real substitute: North Data Basic **490 EUR net/year for 100 names** (583.10 gross), self-service in five minutes; Plus ~1,487.50/year for 300; Pro ~2,250 net/2,677.50 gross/year for 1,000. At 60 names even 79 EUR/month is 1.6x more expensive than the market; at 1,000 names even 299 is cheaper. Our flat price only wins on long lists.
- Multipliers refuted on 13 Sep before anyone was contacted: tax advisers, debt collectors and factoring firms already get this (a competitor names them and charges 49 EUR for 300 firms; DATEV sells Creditreform debtor monitoring to tax advisers; § 62a StBerG blocks list transfer; the liability argument in BGH IX ZR 285/14 concerns the client's own insolvency, not his customers').

### 6.3 Version 3: the buyer pivot (22 to 30 Sep)

On 22 Sep the first German reply with intent came from a removal/transport company: it wanted the liquidating firms as **jobs** (clearance, transport), not as a risk warning. Its second message asked "Which sales route is most effective?", the furthest any human ever got in the funnel (at that point 364 deliveries, 1 click, 2 replies, both from him). From there the target became companies that profit from liquidations: liquidation dealers (Verwerter), machine/forklift/furniture buyers (Ankäufer), clearance services (Räumer), and as an idea industrial auction houses (one payer per mandate).

Measured by 30 Sep, first mail at least 24 h old: dealers on the old clearance text 1 reply of 7 (plus one button press); dealers on the new buyer text 0 of 4; buyers 1 of 29 (the forklift company); clearers 0 of 10. **Total 3 of 50 (6%, Wilson 2.1 to 16.2%); on the buyer text 1 of 43 (2.3%, Wilson 0.4 to 12.1%).** Difference dealers 2/11 vs rest 1/39 not significant (Fisher p=0.12). Creditor text: **0 interested of 514 mature businesses.**

The one trial: a forklift service company in Leipzig accepted 5 free morning mails with every new liquidation within 15 km and the liquidator's name, then a price question (79 EUR for the area). Result: in 20 days, 13 liquidations within 15 km, **0 with forklift-type assets** (0 of 41 within 80 km; 52 of 1,584 nationwide). The trial proved no value for that buyer. A liquidation dealer in Berlin asked for the price on 25 Sep ("the only human who ever asked about our price"); the follow-up promised a weekly list "from Monday 5 Oct" and got no answer.

### 6.4 What the website did

Static site on GitHub Pages (liquidationsradar.de), one page with per-town data loaded by JavaScript from a JSON file (3,209 towns), short links handled by a 404.html router that counts the click (goatcounter) and redirects. Gotchas found: the router returns HTTP 404 by design, so checking status codes reported "all links broken" when they worked (read the body, not the code); the page was `noindex` with no sitemap, so "free town pages as SEO" was impossible without a rebuild; with five parallel town lists, **8,850 of 21,544 mails (41.1%) linked to a page showing a different number than the mail** (worst case mail 40, page 5), so from 17 Sep only ONE list feeds both mail and page (6.2% mismatch left, explained). Privacy blockers (EasyPrivacy in uBlock) hide goatcounter clicks, so click counts are a lower bound.


Part 1 of 4 of "RIMA / Liquidationsradar: the history and lessons of the era before Porchnap (Aug to Sep 2026)". Map of all parts: https://dlichters.com/ai/ourrules/rima-history.md · Next: https://dlichters.com/ai/ourrules/rima-history/02-7-pricing-decisions-in-order.md
