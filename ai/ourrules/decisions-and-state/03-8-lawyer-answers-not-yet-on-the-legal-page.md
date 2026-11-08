<!-- part of ourrules/decisions-and-state.md -->
Part 3 of 3 of "Decisions, corrections and current state (as of 2026-11-07)". Map of all parts: https://dlichters.com/ai/ourrules/decisions-and-state.md · Previous: https://dlichters.com/ai/ourrules/decisions-and-state/02-5-how-david-wants-to-work-standing-decisions.md

## 8. Lawyer answers not yet on the legal page (moved)

Moved on 2026-11-07, word for word, to the section "Every lawyer answer in detail" on https://dlichters.com/ai/ourrules/legal.md (media, reviews, musts, order for the next store, health claims, AI videos, books, publisher titles, course knowledge, what is still open). Nothing was dropped.

---

## 9. Why the old reminder loop failed (and rules for the new loop)

From 2026-10-03 to about 2026-10-14 an automated "chief" loop ran every 20 to 60 minutes against a "money ladder" of six stages and wrote reminders into the open-items file, which a companion script sent to David and Timo. The open-items file grew to about 290 KB. What went wrong [MEASURED in the file]:

- **The same reminder every 4 hours for 10+ days.** Examples: "send three ready supplier texts" (Bonnie, John, Adam) was escalated dozens of times from 2026-10-05 to 10-14; "say 'carry on' or 'stop' to chief rounds writing to the live shop via the admin API" stayed unanswered for over 124 hours; "check your inbox for the hosting provider's answer" repeated for a week. Each repetition cost usage and attention and changed nothing.
- **A capped yes-list blocked everything.** The yes-list had 8 slots; once full (8 of 8, oldest 9.8 days overdue), no round could create a new decision, so the loop wrote the same internal line again and again.
- **The store-fix lane died silently.** A separate chat was supposed to publish prepared theme fixes; it stopped on 2026-10-04 13:27 and 22 to 44 prepared fixes piled up for over 9 days while the reminders measured the pile.
- **The loop wrote to the live shop without approval** through the admin API (2026-10-08 morning), and two chief rounds ran at the same time on the same files (2026-10-07 23:15).
- **Our own polling got us blocked:** repeated checks of the live store triggered Cloudflare rate limits (HTTP 429) for 51 minutes; even 3 fast requests can trigger it. Customers were not affected. Measure from a different server or slowly.
- **Status repeats instead of news,** wrong alarms (an access token that renewed itself was escalated as "expires tonight"), and tasks David had explicitly struck came back (a test purchase struck "forever" on 2026-10-04 reappeared 2026-10-06).
- **A hosting refund was lost:** on 2026-10-08 the provider only asked for a confirmation, nobody answered, the ticket closed on 2026-10-11. Rule: never let a ticket lie; answer the same day. Also: an EU 14-day withdrawal ("Widerruf") refunds everything including setup; cancelling in the customer panel refunds nothing.
- The loop stopped on 2026-10-14 (usage on all accounts). David's verdict on 2026-11-06: every loop so far was less productive than manual prompting, so the new one must be "extremely careful".

**Rules for the new loop (2026-11-06/07):**
- The AI thinks up its own work; only real human tasks go to David, as switches in his app, each with everything prepared.
- Never the same request twice; a task David struck or rejected never returns (check the rejected list first).
- One bundled request when everything waits on David, not six single lines.
- A waste watcher logs every round; three empty rounds = off.
- Wait with a script, not with the model; wake the AI only on a result.
- Spend 10 to 14% of the weekly limit per day.
- Every rule needs a job and every alarm one real test firing.
- Never write to live systems in ways David has not allowed; never two rounds on the same files.

---

## 10. The shared-memory system: how to rebuild it

So the setup survives losing the Mac. All scripts ran without any AI model (no usage cost), scheduled by the Mac's launch daemon.

- **State page ("LAGE"):** rebuilt every 30 minutes from measured files into one short page (target under 5,000 characters) that every chat reads first: north star summary with tracker status for the last 7 days, each project's measured numbers, open items, and three rules (no number without a source; under 30 cases no finding; money, accounts and messages to strangers only with David's yes). Gotcha: it appended the whole open-items file and grew to 295 KB; better: the current store block on top and only open items of the last 7 days.
- **Where-what-is map:** a table "question about X: read this first, then this". Only targeted reading, never whole folders or whole chat logs.
- **Open items ("OFFEN"):** dates and open points for David. Lines containing "David" and a date were automatically reminded (earlier by WhatsApp, now via his app). Keep finished lines marked DONE/OUTDATED with the reason; never delete history.
- **Bottleneck line ("ENGPASS"):** exactly one line, the one bottleneck David must solve himself today, phrased to fit after "and you still have to ..."; replaced when a new one is found. The evening message (22:12) was one sentence: "You have only 3 of 6 on the tracker and still have to ...".
- **Companion (every 10 minutes):** calls for important events (a human answered, a paying customer), messages at 07:30 and 20:30 and one hour before dated items; dry-run and self-test modes. Data caution built in: a tracker tap is saved immediately, an empty day means "nothing entered", never "nothing done"; no trends, no quotas.
- **Coach (22:00):** counted the real day without estimates: Mac app minutes from Apple's screen-time database, browser visits by category (TikTok, YouTube, Instagram, work), tracker habits entered, business rounds; always said what it cannot see (the iPhone's screen time is not on the Mac).
- **Careful learning:** test questions excluded, under 30 cases only "observation, n = X", every number with denominator, only same code version.
- **Rejected list:** read before any task goes to David or Timo; anything there is never proposed again.
- **Musk judge, corrections list, lawyer list:** see thinking-billionaires.md and sections 7 and 8.


---

## 11. Things never to raise again

Each was explicitly struck by David (or Timo); do not remind, propose or ask:
- Renaming the TikTok channel (2026-10-04: "Nope, we leave it. Don't ask again.").
- Meta business-manager setup, cards on ad accounts, connecting Shopify or the page to Meta, the partner's business-manager access for the AI (answer: no), Porkbun DNS entries, test purchases ("strike test purchase forever, it all works", 2026-10-04). David and Timo handle these themselves.
- Stripe and trade registration as open tasks or blockers.
- Waiting reasons that are settled: unfair-competition warning, spending cap, former minor status, payout delay.
- Speculation about Timo's personal state.
- The exchange year date of 2027-09-01 as a deadline (withdrawn 2026-09-23).
- Training-sheet printing and shortening the museum (2026-11-06: not on his list anymore).
- Re-asking the lawyer or re-researching his answers.
- Re-asking book suppliers about rights.

**Two more settled topics (moved here from ops/gaps-3-1.md on 2026-11-07; they belong to the settled-topics table in working-rules section 5):**

| Topic | Rule |
|---|---|
| **BM3** (Timo's third Meta business manager), and AI access to it | 2026-10-04 14:17 to 14:24, David and Timo. Timo: "What BM3 card page Shopify is he always babbling ... he should do other things now, nothing with BM." AI access to BM3: NO, never ask again ("Saves me 15 minutes and for that we get banned"). Never a sentence, list line, reminder, poll or escalation about it. Why: the AI had ended five answers in a row with "Now: Timo finishes BM3", plus to-do polls and takt escalations about the same thing, which held them up. React only when they report ads are running. |
| **The emergency incident of 2026-10-04** | David: never mention this incident again, in any answer, list or summary. It was resolved the same afternoon. The details stay off this page (they concern a third person). The only exception: if a NEW message of the same kind ever arrives, alert David immediately anyway; do not stay silent because of this rule. |

The same 2026-10-04 list also covers: test purchase, the card, account limit, the domain verification code and DMARC at the registrar (Porkbun), connecting Shopify and the page to Meta, dataset/pixel, ad start. All: they do it themselves, never mention.

## 12. Curlmoon test: state as of 2026-11-07 evening (moved here from ops/gaps-2-1.md, newer than 3.1)

Facts newer than `ourrules/decisions-and-state.md` 3.1 (which still says "0 EUR spent, 0 impressions as of 2026-11-06 midday"):

- **First delivery: 2026-11-06 19:56 Berlin** [measured]. At 20:38: 22 impressions, 1.51 EUR spent, 0 orders. Cause of the ~14 h late start unknown; no intervention (everything was active, payment valid, page published, no error, still 0 for 12 hours).
- **Sales so far: 0** [measured, as of the last reading].
- **The Sunday reading (2026-11-08 06:10, read-only) gives at most about 40 USD of data** at 17 EUR/day: cost per click, click rate, add-to-carts. Not a product verdict. Cost per purchase comes at the earliest at the 100 EUR cap, around 2026-11-12. Refund rate only in January (10 to 16 business days delivery plus 30-day guarantee). A second reading around 2026-11-09 (~60 USD) is also not a product verdict.
- **Gate after the reading:** cost per click from 2 USD, click rate under 1 % and 0 add-to-carts means repair the images first, no series of tests.
- **Rules code thresholds** (since 2026-11-06 14:06): break-even cost per purchase 37.50 USD and brake 75.00 USD (2x); 75 USD spent with 0 orders switches the ad set off.
- **Money math:** measured ROAS 1.46 on average and 1.61 for the best product so far; 2.5 to 3 needed. Therefore the main work is the **product gate and candidate supply**, not building: contribution after refunds at least 70 %, price at least 60 USD, goods at most 16 % of price (6.2x). Of 6 supplier prices only the Sleep Pod passes for sure; candidates were priced at 3x goods, the gate needs 6.2x, and the true goods price only comes from the supplier, so the gate is final only with a supplier quote. If fewer than 10 candidates pass by 2026-11-11: check bundles or run a smaller wave, never quietly lower the gate.
- **Wave 1: about 10 attempts** as product pages in an existing store (about 10 instead of 60 minutes of David's time each). All candidates asked so far are not dog products, so wave 1 first needs **one neutral store** (about 54 USD, 60 to 70 minutes of David in one block, by 2026-11-15). Calendar [guess]: builds until 2026-11-13, wave 1 from about 2026-11-16, read around 2026-12-03 to 12-05. Wave 2 only after at least one winner with over 100 USD profit a day on 3 days, so realistically 2027. Wave 1 money (stake 1,600 to 1,950 USD, net loss 510 to 800, chance 48/63/74 %, 23 to 46 attempts for 95 %, 16 to 19 days) and the full test form: https://dlichters.com/ai/ops/product-testing/02-11-campaign-dry-run-and-the-lock-test.md section 14.
- **Chance:** ten attempts buy knowledge, not a guarantee: 48 to 74 % for at least one winner [guess]. With a winner the size of our best measured (700 USD) the money comes back in only 29 to 64 % of cases; 95 % would need 23 to 46 attempts. Earlier figure on /ai "1,208 EUR for ten tests" stands next to the newer estimate of 1,600 to 1,950 USD stake with a 2,000 USD cap [guess].
- Until Sunday 2026-11-08 06:10: hands off the Curlmoon store and campaign; the second ad batch goes up only after the reading.

## 13. Open items as of the evening of 2026-11-07 (Claude queue and David queue; newer than section 4)

Sources: Claude queue (motor SCHLANGE.md), David queue (motor DAVID.md), loop rules (motor MOTOR.md), work log (motor BUCH.md), task app (hebel aufgaben.json), all read 2026-11-07 evening. Order = effect.

**Claude (AI):**
- /ai rebuild for foreign AIs: split into pages of at most 4,000 words is done and live (884 pages, maps, reading rule on top, 2026-11-07 19:1x). Still open: merge duplicates (shop-building/store-building, app-factory/-full, gaps files, cd26 batches), source and date on every number, test by a real foreign AI in the browser with only the link (60 questions; old target at least 95 % and 0 invented answers; David raised it to 100 % on 2026-11-07), then repair to 100 %. Blind test so far: 95 % (61 of 64). Running as a helper since 2026-11-07 19:3x.
- Full course comparison: Course D done (chapter 24 live, 100 lessons, 1,536 details checked, 399 added; sample 93 %); all other courses lesson by lesson still open (sample 92 %), 1,423 lessons in total, running as helpers since 19:3x. Target: new sample of 80 lessons, at least 95 % found.
- Bau 3, product supply: only 1 of 15 candidates passes the gate (Sleep Pod); Tina's quotes of 2026-11-06 16:53 (printer 48.95, pod 25.16) both failed. Main work from Sat 2026-11-07 12:00, before Bau 4. Real profit numbers from the Course D group only together with Timo, never by writing members ourselves (David, 2026-11-06). Details: https://dlichters.com/ai/suppliers.md
- Bau 4, image pipeline. Acceptance: David passes 9 of 12 on a foreign product.
- Bau 8 (image collection) failed on 2026-11-06 16:30 (new product 42 instead of 100 images, mixed lamps, about 26 of 94 images with foreign text or seals); waits until after the Sat 12:00 trial.
- Child price for store two: market price 79.99 is on the sheet; ask the course judge whether 99.99 or 89.99 (71.3 % contribution), before the store build, not urgent.
- SuperGrok probe from Tue 2026-11-10 03:18.
- Bau 7 and 10 only after Bau 1 to 9 stand and the first real order has come in.
- Curlmoon store and campaign untouched until the reading on Sun 2026-11-08 06:10.
- Two Claude accounts since 2026-11-07 19:30; account-switch reminders set for 2026-11-11 21:45 and 2026-11-14 11:55.

**David (only what the AI cannot do; as switches in his task app):**
- Rank 1 in the app: "3 Discord-DMs senden": three ready messages to course students, each with a blue "Copy" button; David sends them himself from Discord on his phone (about 1 min each), then flips the switch and the AI waits for replies.
- Support text to the research tool's Discord (2 min) and the DICloak approval on the Mac (1 min) so Perplexity works again.
- Standing yes: Claude may create campaigns, always paused (one word, before Bau 6 goes live).
- Lawyer call with the prepared copy block, before Bau 10.
- Neutral store, track B: domain, Shopify, payments, business account, ad account, Instagram, Facebook, SMS, 60 to 70 min in one block, by 2026-11-15.
- Clarify the money before day 1, by 2026-11-15.
- Yes or no on wave 1 with a spending cap, after the Sunday reading, by about 2026-11-13 (2 min).
- Veto finder candidates as real or fake once Bau 3 stands; log into the domain registrar once (1 min, not urgent).
- Done 2026-11-06: Sensor installed and key entered (see https://dlichters.com/ai/ops/automation/01-contents.md section 4).


---

Part 3 of 3 of "Decisions, corrections and current state (as of 2026-11-07)". Map of all parts: https://dlichters.com/ai/ourrules/decisions-and-state.md · Previous: https://dlichters.com/ai/ourrules/decisions-and-state/02-5-how-david-wants-to-work-standing-decisions.md
