<!-- part of ourrules/rima-history.md -->
Part 4 of 4 of "RIMA / Liquidationsradar: the history and lessons of the era before Porchnap (Aug to Sep 2026)". Map of all parts: https://dlichters.com/ai/ourrules/rima-history.md · Previous: https://dlichters.com/ai/ourrules/rima-history/03-12-rules-about-texts-to-humans-that-came-out-of-ri.md

## 14. Tools we built (so they can be rebuilt by hand)

All Node scripts unless noted. The ideas matter more than the code.

| Tool | What it did | Inputs / outputs / gotchas |
|---|---|---|
| Archive job (daily ~06:17) | Fetched the day's liquidation and insolvency announcements and kept them forever with a category stamp | Needed because announcements are deleted after one month (§ 3 InsBekV). One targeted fetch per name, no mass download. |
| Matcher / list checker | Matched a customer's names to official names, incl. suffixes and duplicates, and produced a 12-month look-back | Initial-only names were never reported; uncertain hits labelled as uncertain. Showed "340 names in 510,000 spellings" in marketing. |
| Radius lists | For each target town: firms in liquidation within N km whose blocking year ends soon, sorted by deadline | Only ONE list may feed mail and page (see 6.4). Median 10 fresh cases per town, range 5 to 40. |
| Liquidator lookup | Fetched the liquidator's name from the register for a delivered firm | Register terms: only on demand, packs of max 5 with pauses, never systematic. |
| Mail sender | Sent from several mailboxes with rotation, per-mailbox ramp, 420 s serial pause, 09:00 to 18:45 window, lock file so only one sender runs, dry-run mode | Excludes any credentials file with "antwort" (reply inbox) in its name so the reply box can never send. |
| Reply reader + watcher | IMAP read of all 7 inboxes every 30 min; classify human vs auto-reply; set a flag file every session reads first | Open every human-looking mail in full; never judge from the preview line. Deep search every 12 h over 14 days found a reply after 4 days. |
| Maturity / denominator counter | Counted deliveries older than 3 working days, by target class, weekend separately | The only legitimate denominator for reply rates. |
| Price-refutation table | For each price x purchase rate: required reply rate and the number of silent mature deliveries that excludes it | Uses the smaller of the two denominators (capacity vs target-trade deliveries). |
| "When will we know" | Wilson upper bound after n silent deliveries | 381 for 1%. |
| Growth model | Weeks to 1k/month and 100k, revenue in 52 weeks, with follow-up rounds and market cap | Aborts without an explicit reply-rate argument (it had been fed the forbidden form rate four times). |
| Smell test | Flags suspicious generated outputs (equal lengths, identical "differences", mixed encodings, 100x outliers, common suffix) | No model call; seconds. |
| Numbers ledger + checker | Every load-bearing number with the command that produces it, plus a second command counting the set it averages over | Blocks if a "per X" has X = 0. |
| "Prove done" | Runs the command behind a claim and fails if the number differs; keeps a balance of checks | Run before any number in a reply to David. |
| "Do I know this" | Full-text search of the repo for a topic before asking or measuring | |
| Human-text gate | Requires purpose block, 3 versions + EMPTY, checklist rounds with IDs, saturation rule | Called from the Stop hook for every text touched today. |
| Self-shot checker | Flags sentences that sell a free source, promise free without paid work, or describe work without its difficulty; also legal-sentence rules | |
| Placement test | Sent the real text to seed inboxes (Gmail, GMX, Outlook) to see inbox vs spam | Microsoft business inboxes were never measured cleanly (third-party free quota ran out). |
| IP reputation check | Checks the sending/home IP against Spamhaus lists before any mailbox check | Lock forever on PBL from a home line. |
| Payment signal | Detects visits to the post-payment page and alarms | A page hit is not money; David's own test click caused a false "payment" alarm on 30 Sep. |
| Handover builder | Generates the handover file from commands, each line carrying the command that produced it | "A handover someone writes carries his errors as faithfully as his knowledge." |
| Hooks | Session start (inject rules, map of which file for which topic, under 10,000 chars), PreToolUse guard, Stop hook (dispatcher picking the checks that match changed files; on 14 Sep 62 of 80 checks had been called by nobody) | Test every hook against its purpose, not its output. |

## 15. Money, accounts and infrastructure (what existed, what was cancelled)

- **David's money at the time:** account at 0 on 16 Sep, a minijob from 16 Sep paying 600 EUR at month end (first pay 30 Sep). Decisions 16 Sep: borrow nothing more (1,000 EUR more would have bought ~2 weeks on the 100k path, week 24 instead of 26); pay into RIMA from the minijob for at most three months.
- **Spending authority:** a proposed 50 EUR/month limit for sending infrastructure that Claude could spend without asking (25 mailboxes and 4 domains); card data, new accounts and amounts above stay with David.
- **Subscriptions to cancel on 30 Sep:** 4 Contabo servers (rented 20 Sep, ~5 to 15 EUR/month each [guess]; back up first), Mailforge 10 slots (30 USD/month), checkdomain domains (renewal off; one cancellation already confirmed 20 Sep), Anthropic API auto-reload (53 to 66 USD top-ups, 20+ times in Aug/Sep, mostly the cold sending). Not to cancel (not RIMA): Claude Max, MEGA (course videos), the Porchnap domain, Tailscale, ntfy and goatcounter (free).
- Sales goal (David, 16 Sep): "If it works, ideally sell for 50 to 100 times monthly income; then you have a few million for a startup." Realistic multiples for small software subscriptions [estimated, market reports]: 3 to 4x annual revenue at under 3% monthly churn and growth = 36 to 48x monthly. Targets derived: 3,000 EUR MRR = 100k sale at 33x = 38 customers; 30,000 MRR = 1M = 380 customers; 40,000 EUR profit/year = 43 simultaneous customers. Buyers will check churn (target under 2%/month), a second acquisition channel beyond a one-time cold blast, six months of revenue history, documentation that runs without David and without Claude; a minor can't sign a sale alone.
- Goals over time: 1 Sep "1,500 EUR profit" (19 customer-months; 5 customers kept 4 months judged most realistic; target 30 Nov). 9 Sep "1,000 EUR/month = 13 customers at 79", to fund idea tests, with the 100k from the best idea, not necessarily RIMA. 13 Sep "100,000 USD collected by 1 Sep 2027" (86,266 EUR at that day's rate; needs ~15,800 EUR/month in the last month whatever the price: 199 customers at 79, 105 at 149, 53 at 299; "1,000 EUR/month is 6% of the way, not half"). 13 Sep, David: *"My goal is to scale one successful thing to a few thousand per month and then study exactly how we found, tested and built the idea, to do it en masse."* 23 Sep: the 1 Sep 2027 deadline withdrawn; urgency comes from 13 months and ~3,000 USD without a customer, not from a date.
- On parallelising (13 Sep): Claude claimed a second project would halve attention; David: *"early parallelising halves no attention because I work 1 hour a day on rima. You do everything anyway."* He was right: RIMA was throughput-bound (15 mails/day from a fresh mailbox), not work-bound. And everything built for RIMA (sender with locks, delivery check, text checker, legal pages from one master file, block list, reply path) is the machine for idea two, if built product-independent: two weeks instead of three months.
- On the minor question: at the time David was recorded as 16 (later corrected to 18 on 2 Nov). Contracts, Stripe and invoices were handled by an adult during RIMA. This is no longer a blocker.

## 16. Ideas parked during RIMA

None was to be built before RIMA made 3,000 EUR/month ("first the bottleneck, then the new"). An idea becomes a project only when three questions have numbers: who pays and how much (a price from a price page or a conversation); how many exist and how we reach them (with denominator); what is the first sentence a stranger reads and why does he answer.

1. **Find legal cases and sell them to lawyers** (David, 13 Sep): RIMA one floor up. Measured: lead prices on David's old list were 35 to 75 USD per lead. Against it: § 2 RDG (rating and brokering cases is close to legal advice), § 49b (3) BRAO forbids lawyers paying for referrals (that is why legal portals sell flat ad slots, not per-case fees), and every case source has its own terms. Next step if ever: have a lawyer check the three points before any code.
2. **A hundred offers instead of one** (David): offers are almost free to build (12,196 finished texts), but with 0 replies, 100 offers produce the same zero 100 times. Writing to the same person from a new company does not escape § 7 UWG (it attaches to the advertising and the recipient, not the sender).
3. Reels saved with notes: AI agents with their own wallets (a claim of 13,000 agents buying servers in 24 h came from a promotional caption, unverified); one reel could not be transcribed. Rule: a link without a note is worthless in four weeks; send one sentence on why it's interesting.
4. Idea rounds produced: the "customer of our customer" question (are our claims about a liquidated firm still true at send time? 21 cases where not, plus a tool); "copy": take the customer list from the customer's own website (references, logos) and show a hit before asking for anything (market for matching is crowded: Creditreform etc.); "open source": give the full check away free and charge for watching (weakest point, a business uploading its debtor list to a stranger, [guess]).
5. Industrial auction houses as one payer per mandate (describe the case, name the firm only after an agreed fee); never sent before the stop.

## 17. Why RIMA failed, honestly

1. **The product had no proprietary edge.** The source was public and read by at least five providers, one free; the cheapest substitute was 490 EUR/year for 100 names. The only real gap (matching to the customer's open invoices plus action steps) required the customer's list, which "nobody gives to a stranger" (16-year-old, unknown, cold).
2. **The event is rare.** About one hit per year for a 60-name list; orderly liquidations hit low-risk industries; our target trades saw 0.80x and 0.45x relative risk. A rare-event product cannot be demonstrated in a free month, and the one paid trial showed zero relevant firms.
3. **Cold outreach volume was the only lever, and it was capped** by form supply (exhausted on 11 Sep), new-domain reputation (spam at day 1), a 60-mails/day per-mailbox cap and a market of ~400,000 businesses each contactable once.
4. **The right half of the funnel was never worked.** No conversation was ever held. Strand A lost 2 of 3 raised hands through us. In RIMA one person asked about price and one accepted a trial, both in the last week.
5. **Building was more comfortable than selling.** ~240 tools, ~1,100 commits, 271 autonomous rounds. "984 hours of operation, 0 EUR." The loop measured itself well and the market badly.
6. **The loop optimised inside its frame.** Nobody asked early enough whether to buy an existing cold-mail platform, whether to phone, or whether the target group was right (the list was 47% wrong industry for the first measured rate).
7. **Usage cost was real.** At the end 14% of night usage went to a business with 0 customers, while e-commerce with Timo had paying potential.

What was *not* the reason: legal risk (David's measured experience: zero warning letters), invoicing (solved), or the age (handled).

## 18. What carried over into Porchnap and later work

- The whole numbers discipline (denominator, retraction search, measure over estimate, run before saying, Wilson intervals, stop numbers before starting): now in our general working rules and lessons.
- The five questions before any text to a human, three versions plus EMPTY, five rounds against David, rounds need a criterion and stop after three empty rounds.
- Decide yourself; ask only for money, accounts, sending to people David knows, irreversible steps. Browser instead of dead connectors.
- One-line loop output; heartbeat at the start; the wake-up text is fixed; state in files; hooks over written rules; test every guard against its purpose; HALT file; dead-man switch.
- "Already sold by someone" = proof of demand, plus: before any lever, get the market price of the finished service ("does someone already sell this, at what self-fetched price?").
- Never report events as things; HTTP 200 is not delivery; MX is not a mailbox; documents cite documents (check the inbox, not another document).
- Usage only against results; spread weekly usage evenly; pause loops that burn usage with zero customers.
- The decision to move to e-commerce: a product people already buy, with a visible price and a channel (ads) whose cost per sale is measured daily, instead of a rare-event B2B subscription sold cold by a newcomer.


Part 4 of 4 of "RIMA / Liquidationsradar: the history and lessons of the era before Porchnap (Aug to Sep 2026)". Map of all parts: https://dlichters.com/ai/ourrules/rima-history.md · Previous: https://dlichters.com/ai/ourrules/rima-history/03-12-rules-about-texts-to-humans-that-came-out-of-ri.md
