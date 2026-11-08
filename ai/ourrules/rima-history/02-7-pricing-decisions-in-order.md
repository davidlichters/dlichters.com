<!-- part of ourrules/rima-history.md -->
Part 2 of 4 of "RIMA / Liquidationsradar: the history and lessons of the era before Porchnap (Aug to Sep 2026)". Map of all parts: https://dlichters.com/ai/ourrules/rima-history.md · Previous: https://dlichters.com/ai/ourrules/rima-history/01-contents.md · Next: https://dlichters.com/ai/ourrules/rima-history/03-12-rules-about-texts-to-humans-that-came-out-of-ri.md

## 7. Pricing decisions, in order

| Date | Price | Reason |
|---|---|---|
| 27 Aug | 75 EUR/month up to 100 names, paid from day one, no free pilot | "With a slow risk, a free month only proves silence." |
| 29 Aug | 49 now, 99 with work layer, 199 after proof | see 6.1 |
| 30 Aug | **79 EUR/month up to 1,000 names**, same price for 50 or 140 names, monthly invoice, no auto-renewal | "Up to 150 names" put a typical customer (140) at the limit; 1,000 removes the question. Price only when asked; disclosure of who we are immediately. |
| 31 Aug | Closing = one test month with ~50 A-customers | |
| 13 Sep | 3 names free, first full check 149 EUR one-off, then subscription | free month harms (6.2) |
| 14 Sep | Proposal: 149 EUR up to 3,000 names would be cheapest in the field at any list length 300 to 5,000; 299 would be more expensive than North Data Pro. Recommendation: name 299 to the next replier and measure. | Price is the main lever: same funnel, factor 3.78 between 79 and 299 |
| 18-19 Sep | "When is the price refuted": table of required reply rates per price and purchase rate, with the number of silent mature deliveries after which each cell is excluded at 95% | e.g. 79 EUR at 10% purchase rate dead after 247 silent mature deliveries to the target trade; 299 EUR at 5% after 403; 999 EUR at 30% after 4,870 |
| 30 Sep | 79 EUR at 30% purchase rate formally refuted at 17:00 (514 mature, 0 interest, threshold 366) | |

Notes that still apply: kept 79 because no human had ever heard a price (it was a setting, not a measured willingness to pay). Price-shrinking ("only 56 cents per customer") and unprompted price comparisons were banned as sales reflexes. Stripe payment methods (13 Sep): on = card, Apple Pay, Google Pay, Link; off = Klarna ("buy now pay later" on a 79 EUR B2B subscription signals consumers), PayPal and Revolut (until a customer asks), all foreign wallets. SEPA debit only once a real person says he cannot pay by card (Stripe requires ID + selfie for SEPA; an account on a minor breaks their terms).

## 8. Channels: what was tried, with numbers

### 8.1 German contact forms (6 to 11 Sep)

- Crawl of German .de domains: 11,349,733 domains; 12.8 to 12.9% "usable" (live AND `<form` AND the word "impressum") = ~1.45M, measured on 2,006,281 domains. "Usable" is not "target segment" (factor 6.7 apart). An earlier 14.9% was wrong.
- Of crawled domains only 6.4% had a usable form, falling to 2.7% and 2.4% as better lists were used up. End-to-end on one run: of 117 "ready" targets, 5 became a message (48 timeouts, 43 no form in delivered HTML), **4.3%**.
- 11 Sep: of 21,899 "ready" index rows, 21,025 were already contacted; **30 free**. Two independent re-checks (30 fresh, 40 former network errors): **0 sendable**. Rest of the web: CAPTCHA (38,202), no form (35,836), network errors. A bug had hidden this for days: the "already contacted" filter compared the wrong field (a normalised username without hyphens, differing from the site in 11.2% of rows).
- Totals: 2,825 send attempts, 2,463 unique domains, 763 delivered (31%), 3 human replies, **0.29% per delivered (3 of 1,045 mature, Wilson 0.10 to 0.84)**. The three replies: a tax adviser (no need), a party band (wrong target), an unsubscribe. Later analysis: 47.2% of the classifiable old list was the wrong industry, and all three replies came from that half.
- Rule from David (chef-sagt loop): **"No form_outreach"**; the sender also recognised 0 of 4 common honeypots and filled one.

### 8.2 Cold email from imprint addresses (from 9 Sep)

German law (§ 5 DDG) requires an email address in every business imprint, and it sits behind no CAPTCHA. 110 of 150 CAPTCHA domains (73.3%) listed an imprint email; address yield 79.7%; extrapolated ~308,000 addresses from 1.4M domains. By 11 Sep the harvest held 201,885 sendable addresses from 548,854 harvested domains (36.8% yield); later 337,131 checked addresses.

Mailbox checking by SMTP RCPT (ask the receiving server if the mailbox exists, send nothing): MX records found 0 of 7 dead addresses, RCPT found all 7. Gotchas, all paid for:

- "Port 25 is dead" was declared four times on 10 Sep. It was throttling after ~40,000 checks that reopened after minutes, and later `ECONNREFUSED` came from the Node environment inside the Claude session, not the line (`nc` from the same line got a full SMTP dialog with Google). **ECONNREFUSED counts as unchecked, never as dead.**
- The checker greeted foreign servers with `EHLO gmail.com` ~110,000 times; the home IP landed on Spamhaus CSS (a second, unknown device on the home network also triggered it). Each listing costs spam points on every mail that passes through that IP. Never check mailboxes from a home connection.
- One big German provider group answered 554 to our home IP: ~40% of addresses uncheckable from home.
- A catch-all server that accepts a made-up address proves nothing.

Sending infrastructure:

- 10 Sep: Maildoso considered (1,000 mailboxes 499 USD/month + 125 domains at 12 USD/year, max 8 mailboxes per domain recommended): total ~624 USD/month. Real limit was not money but replies: at 15,000 mails/day ~463 replies/day = 15 h of answering.
- 16 Sep, decided: **2 domains at checkdomain (0.84 EUR each first year, the discount applies to two only; normal ~18 EUR/year), Mailforge 10 slots for 30 USD/month (max 3 mailboxes per domain), mailbox ~2.70 EUR/month.** SPF/DKIM/DMARC automatic, mail-tester 10/10.
- Mailforge says 10 mails/day per mailbox at start. Our ramp: **15/day, then 25, 40, 60, 80, from the 20th sending day 100.** A **serial minimum pause of 420 s** inside a 09:00 to 18:45 window caps one mailbox at **60 mails/day** no matter the ramp; 4 more mailboxes alone saved one sending day; mailboxes plus a per-mailbox pause turned 17 sending days into 5.
- 17 Sep: the five new mailboxes were set live at 10:41 **without warm-up; all six test mails landed in Gmail spam.** New domains don't fix this; age and sending history do. Correct: warm up at 10/day per mailbox, double weekly, 100 after four weeks. Also: the watchdog must not send itself test mails (~8/day to its own address make the spam reputation worse).
- Ramp bug: the daily job ran once at 09:00 but the ramp counted the **last 24 hours**; with the last send at 17:43 the day before, it found "0 free" every day forever. Fixed with 6 start times (9, 11, 13, 15, 17, 18).
- Replies inbox: IMAP needs a Google app password, which needs 2-factor auth on *that* account; the first password was created on the sending account (the only one where the page opened). "It was never the wrong password, it was the right password for the wrong account."
- 21 Sep: 0 of 7 mailboxes had ever received a Stripe email; Stripe notified an address no tool read. A paying customer could have waited for days unnoticed.

### 8.3 Other channels examined

- **LinkedIn (proposed 14 Sep, not run):** a vendor dataset claimed 3.0% reply on connection notes (13.2M requests, 13,302 accounts), 5.57 per 100 in construction. Interested source, no country split, mostly US. Only 19.6% of German craft businesses use LinkedIn (Bitkom 2025, n=504). 50 manual requests would have shown at least one reply with 94% probability if 5.57% were true.
- **Google Ads/SEO:** dead, 4 of 9 product search terms at zero in Google Trends in 54 of 54 weeks.
- **Xing, trade fairs, guild seals:** blocked by minimum age 18, 5,197 EUR minimum spend, five years of market presence.
- **Letters:** no measured cold rate (the circulating 10.8% rests on 25 self-reports in a US online survey). Only channel that never runs out (817,051 domains with a known imprint, § 5 DDG guarantees a postal address). 1.05 EUR per letter self-stamped. Parked for money.
- **Trade press:** a free product notice to a construction trade magazine (18,149 copies, the publisher's media kit invites it) was drafted with deadline 2 Oct; publishing was David's decision; not sent.
- **Phone:** never done. "David is 16 and does not phone" (30 Aug). By 9 Sep five people had asked for a call, 0 were called.

### 8.4 Mass vs small list (12 Sep)

Three platform datasets (16.5M, 20M+, 53.1M mails): campaigns under 50 recipients 5.8% reply, from 500 recipients 2.1%; personalisation depth moves it by factor 2. We had combined the three worst traits: fixed text, maximal list, no follow-up, and our 0.39% was 5x below their worst category. Personalised text at 0.086 USD per attempt costs 7,900 USD for 92,000 targets but **4.30 USD for 50**; the cost argument was a consequence of the volume assumption. We took the *direction* of those effects, not their height (their senders are office workers on warmed domains, not a 54-year-old craftsman).

## 9. The funnel at the end (30 Sep, 02:53)

| | |
|---|---|
| Cold mails sent / delivered | 861 / 860 |
| Clicks on the short link | 8 |
| Button press (WhatsApp/contact) | 1 |
| Human replies (cold mail, all-time) | a handful; with buying intent: removal firm (22 Sep), Berlin dealer (25 Sep, asked price), forklift firm (29 Sep, trial) |
| Mature creditor-text deliveries with interest | 0 of 514 |
| Paying customers | **0** |
| Total spent on RIMA | ~3,000 USD (mostly tool building and model calls, per KURS: "the 3,000 dollars in RIMA were tool building, not test cost") |
| Tools in repo | 239 on 16 Sep (28 with self-test) |
| Commits | ~1,100 |
| Autonomous rounds | 271 by 3 Oct |

Earlier honest verdict (11 Sep): 984 hours of continuous operation had produced 0 EUR; a minijob (603 EUR/month at 13.90 EUR/h, ~43 h) would have produced ~600 EUR in the same time. RIMA was still judged "worth it because of its construction, not its outlook" (218,015 addresses and a year archive keep working while David sleeps), with the explicit condition that it flips if 381 mails bring zero replies in 14 days.

## 10. The decisions register: forbidden moves and why

The register (ENTSCHEIDUNGEN.md) had 62 numbered rejections, each with quote, date and "reopen only if". The ones that generalise:

**Scars (already happened):**
1. Phone calls in any form (David was 16 and does not phone). Reopen only if someone else phones, as a new dated decision.
2. Prices other than the decided one; no re-litigating.
3. A different sender name than the real person.
4. Any human-dependent rate from another strand (reply, interest, close, sendability). "A house number from the wrong city is no house number."
5. A withdrawn cost number (0.031 USD) reused for nine days in every margin calc.
6. "We warn earlier than others" (false, see 6.1).
7. Asking for the full open-items list before the demo; ask for three names.

**Legal and irreversible:**
- "Sell until the first cease-and-desist" is not a plan (a warning letter does not end when it comes). Exit: sales message only to people who replied.
- Scraping the commercial register systematically: forbidden by its terms.
- Debtor register as a source: forbidden to pass on.
- Delivering personal data of managing directors (computing "over 60" from a birth date is already processing).
- Recording or letting others listen to calls: criminal (§ 201 StGB).
- Writing first on WhatsApp, switching channel after silence, contacting again after a no ("not in four weeks, not with an update").
- Note: on 1 Sep David dismissed "one cease-and-desist ends the project" as unproven: he had sent hundreds of thousands of messages in other projects with zero warning letters. Measured experience beat an unproven line. Same day: invoicing solved via Stripe; spending cap lifted (costs still named, not used as a brake). **Stripe is solved; business registration only from 20,000 USD revenue** (he had to say this six times; never list it as a blocker again).

**Sentences that kill a running conversation:**
- Price unasked in message two; disclose who you are and why immediately instead ("I'll tell you right away why I asked, otherwise it looks odd").
- Shrinking the price, unprompted privacy blocks or price comparisons ("unprompted is the same marker as any sales reflex").
- Naming a competitor first ("Honesty means answering asked questions truthfully. Not shooting yourself.").
- Free pilot / "costs you nothing, I learn from it".
- Postponement sentences: "May I get back when I have something to show?", "Want to be the first?", "Until then you pay nothing", reason-less follow-ups, apology paragraphs (cost four closes in simulations).
- Voice messages to strangers (cost 48 h and the close in a simulation).
- Inventing recipient sentences that phrase our value too perfectly ("no suspicious boss talks like that").
- Explaining where the data is (makes us a data forwarder; he has an office that can look daily).

**Message and text:**
- "A business like this" ("so ein Betrieb") reveals the mail merge; say "a business like yours".
- Never an invented custom line for thin websites: send without it (model answers "EMPTY").
- Never an invented family story; if a story is used it must be true, because people ask back "what happened at yours?".
- No jargon in the opening line (debtors, creditworthiness, credit insurance, dunning software, insolvency): "one technical word tips the whole message". Resolved 4 Sep: disclosure of the product name in sentence two is allowed (newer decision wins); the opening line stays jargon-free.
- No announcement phrases ("quick question:").

**Product and market:**
- Never build an own credit score (98.6% false alarms).
- Missing annual report as early signal (max 8.3% precision).
- "Bloomberg kills the idea" (31,980 USD per user/year, sold to banks, does not cover German SMEs) and "five German providers kill it" (not a kill; churn at renewal, not a lost sale) were both rejected as reasons to stop.
- Time advantage as price argument (same feed, same lead).
- Login, dashboard, payment flow before more than three customers (invoice by hand).
- Targets under 10 or over 249 employees ("smaller has no budget, bigger has a purchasing process").
- First euro from friends, family or David himself does not count as market proof.

**Measurement and operations:**
- Sends as denominator ("HTTP 200 is not delivered. That cost David money three times."). Denominator = delivered, at least 48 h (later 3 working days) maturity.
- Sending without a `version` field in the log ("without it the whole test is worthless").
- A/B with 3 to 5 sends per arm (needs several hundred per arm).
- Treating an agent-made points ranking as a measurement.
- Gemini 2.5 Flash-Lite (shut down 16 Oct 2026) and Haiku 4.5 for personalisation (16x more expensive than GPT-5 nano batch, not justified).
- Stopping the crawl when the sender is slow: throttle it (`-P 80`), don't stop.
- "Very interested" as success signal and revenue as a daily counter: count held conversations; only money in the account counts.
- Measuring the German reply rate before anyone pays (31 Aug: "last time the perfectly measured rate was worthless: 27 replies, 0 sales"). Note: this was later overruled in practice, the rate got measured anyway on 13 Sep.

**Rule for contradictions:** the younger date wins; on the same day the timestamp decides. Report a contradiction, never smooth it over. Two runs giving different answers to the same number are a finding, not rounding.

## 11. Rules about numbers that came out of RIMA

These are the most transferable lessons. Each has its scar.

1. **No number without origin.** Every number carries source, date and population, or is marked ESTIMATED. "Measured" written in someone's prose is not a source. The 0.47% reply rate appeared 46 times in agent files, always labelled "measured", and existed in no log. It was probably 12 replies / 2,529 businesses with numerator and denominator from different days (sends rose from 3,591 to 5,820 in between); same-day data gives 0.29 to 0.39%.
2. **Always the denominator.** Per send, per delivery or per business differ here by factor 2.3 to 5.7 (up to 53). Six different "reply rates" for the same machine ranged over factor 20 (0.25% to "about 50 per 1,000" = 5%).
3. **Search for the retraction.** Grep the number across the whole history, not just where you found it. Twice the correction already existed, two hours after the original (0.031 USD was retracted by David on 22 Aug; no downstream document picked it up for nine days).
4. **Read before fanning out.** Open every file whose name fits the topic. "An `ls` hit that was not opened is an error." A 26-agent WhatsApp simulation was worthless because one 8 KB file was missing; 16 simulated conversations "died" at a question the real flow had already solved.
5. **Measuring beats estimating.** If a number can be measured for under 200 to 500 EUR, don't estimate it with 200 agents (200 agents gave a funnel range of 0.16 to 12%).
6. **Preflight for big runs.** Before any workflow with more than 10 agents, a preflight checks for missing files, answerability and contradictions with the register, and returns a binding maximum number of agents. "The width of a fan-out is capped by the quality of its root, not by the budget." On 31 Aug ~5.2M of ~16M tokens (33%) were premise errors; avoiding them would have cost ~50,000 tokens: **ratio 104 to 1. Care is the cheapest option.** With ten accounts the waste would have scaled to 52M tokens and ten wrong results with more confidence.
7. **Cross-check after parallel runs** before anything goes into a deliverable.
8. **No average over an empty set.** "14.57 USD per idea" with zero ideas; "9,300 targets in stock" when 897 existed (the 9,300 was an extrapolation). David: *"if we don't have any ideas yet, how do you know we only need 14 USD per idea to test?"* Every "per X" needs a second command counting how many X exist now; if 0, it is a projection and must be called that.
9. **Run it before you say it.** In one night Claude said "done" four times and was wrong four times (41 fixable were 6; 6 fixed were 2; a switch "fires at 25" came from a mock; a "wrong by 51" was a wrong comparison). Before any number in a reply: run the command, read the output. A ledger (`ZAHLEN_LEDGER.tsv`) stored every load-bearing number with the command that produces it.
10. **The command must measure the thing, not a log field.** "ok=true 10.3% / 48.2%" measured a field another program wrote, not delivery. "Checked" in a file name meant mailbox-checked, not business-checked; that list was 57% non-businesses and had 28% dead addresses, the other list 3.8%.
11. **Measure rates over two full cycles after the initial stock is used up.** Three numbers in one day were measured in transient states: "port 25 dead", "form channel 600x worse" (measured while the harvest ran with 10 parallel fetches), "70 sends/hour" (one burst that consumed the stock; sustainable was ~2/hour). **A measurement under competition measures the competition. A re-check needs distance from its trigger.** Whoever declares a capability dead measures twice with distance before writing it down.
12. **On an extreme or zero result, suspect your own tool first.** "34 wrong recipients" were 100% legitimate forwards. The smell-test tool flags: all values same length (truncation), a "difference" between identical values, mixed umlaut encodings, a value 100x the median, a common suffix in all values. Tested against that day's real broken outputs: 3 of 3 found.
13. **Statistics for small numbers.** Use Wilson 95% intervals. With a true rate p, P(at least one reply in n) = 1 - (1 - p)^n. At 0.29% and 105 deliveries that is 26.1%: a milestone you can miss with perfect work and hit with a broken channel measures nothing. 100 deliveries with 0 replies give an upper bound of 3.7% and refute nothing; **381 mature deliveries with zero replies refute 1% at 95%**. At 1% true rate: 1,000 delivered gives 0.54 to 1.83%, 2,000 gives 0.65 to 1.54%, 5,000 gives 0.76 to 1.32% ("after 1,000 the order of magnitude, after 5,000 the number"). Separating 0.5% from 0.2% needs ~10 to 12 reply events. 30 handled replies with 0 sales means the true close rate is under 10% with 95% confidence.
14. **A/B tests have a price.** With our click rates, detecting factor 1.5 needed 223 sending days, factor 2 needed 67, factor 3 needed 23, factor 5 needed 9; one arm to 1,000 sends needed 24. A subject-line change moves rates 20 to 30%: undetectable before the deadline. **A test whose result arrives after the deadline is not a test but an expense.** A/B only for differences where factor 3 is plausible (a different offer or target group).
15. **Maturity.** A mail counts as mature after 3 working days, not 72 hours (otherwise weekend mails with one working day count as silent).
16. **Fix the stop number before the first send.** RIMA sent 105 mails before any number was written down at which we would stop. "A no is only expensive if you move the line afterwards." Abort rule of 16 Sep: 30 cleanly handled replies, 0 paying customers = the pitch is dead (date then: 24 Oct). Not to be moved for emotional reasons.
17. **Two numbers in one plan must use the same denominator.** On 19 Sep a price table was off by factor 2.2 because required rates were computed on mailbox capacity (18,369 sends) while refutation only counts deliveries to the real target trade (8,458).
18. **Calendar facts.** Clock times written into logs were estimated, not taken from `date`: 11 of 13 log lines on 22 Sep were later than their own commit (impossible). Always take times from the system clock.
19. **Thinking time was 4.2% of the path, not the bottleneck** (17 Sep): of 191 days to the first customer, 183 were waiting that we don't control (28 warm-up, 134 sending, 14 reply window, 7 close). So faster thinking buys nothing; more mailboxes and a better close rate buy everything, and the better question is whether the path must have 183 days of idle at all.
20. **An idea test costs ~31 EUR once the machine exists** (domain 12.88/year, 5 mailboxes one month 13.80, 1,458 mails 4.48). David had assumed 500 EUR (16x too high). Five ideas in parallel cost ~156 EUR and take as long as one. Break-even close rate for the infrastructure: 0.019% (mailboxes 3.07 EUR per 1,000 mails; a customer at 5% churn worth 1,580 EUR).
21. **The market is the ceiling, not the money** (17 Sep): with 400,000 reachable businesses each contacted once, 1% reply, 10% close, 5% churn and aggressive reinvestment, MRR peaks at month 5 (~29,352 EUR, 372 customers, market 100% used) and then falls (month 12: 20,498; month 36: 5,985). Consequences: sell at the peak, don't shoot the whole market empty (a business with 15k MRR and 250k untouched prospects is probably worth more than 29k MRR and none), and after the market is used only churn decides.
22. **Follow-ups:** 4 rounds, not 10. Assumed decay 0.55 per round [guess]: rounds 1 to 4 give 2.02x, rounds 5 to 10 together only 0.20x more (91% of the benefit in the first four) and carry all the complaint risk. Stop the next round if complaints exceed 0.1%. Last follow-up round 2 to 3 months before any sale talk so delivery stats are clean.


Part 2 of 4 of "RIMA / Liquidationsradar: the history and lessons of the era before Porchnap (Aug to Sep 2026)". Map of all parts: https://dlichters.com/ai/ourrules/rima-history.md · Previous: https://dlichters.com/ai/ourrules/rima-history/01-contents.md · Next: https://dlichters.com/ai/ourrules/rima-history/03-12-rules-about-texts-to-humans-that-came-out-of-ri.md
