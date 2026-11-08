<!-- part of ideas/thinker.md -->
Part 1 of 4 of "The Thinker: our business idea engine, its method, and every idea it judged". Map of all parts: https://dlichters.com/ai/ideas/thinker.md · Next: https://dlichters.com/ai/ideas/thinker/02-9-agent-plumbing-and-gotchas.md

## Contents

1. What the Thinker is and why it exists
2. The rules it was built on
3. The pipeline, stage by stage
4. The kill rule (exact logic, versions v1 to v8)
5. Memory: red ledger and grey list
6. Calibration: measuring both errors of the judges
7. Rediscovery test: can it find Liquidationsradar again?
8. The nightly improver and its log
9. Agent plumbing and gotchas (what broke and why)
10. Test kit and test book
11. Private signals it harvested (measured facts from our own data)
12. PROMISING: ideas that survived, with their test cards
13. REJECTED: ideas killed with proof
14. GREY: every idea that fell out without a verdict
15. Legal findings that cut across many ideas
16. Honest assessment and outdated assumptions
17. How to restart it, or run it by hand in any chat

---

## 1. What the Thinker is and why it exists

- **Status: OFF since 2026-10-14, switched off on purpose by David** ("verschwendet unsere Usage", it wastes our usage). Its nightly and Sunday jobs were unloaded then; 27 ideas in `ideen.jsonl`, almost all Liquidationsradar variants, none ever used. It comes back only on David's word: never restart it or propose a restart on your own (sections 9 and 17). Source: ~/thinker/AUS and memory note "thinker", 2026-10-14.

- **Origin.** On 2026-08-26/27 we ran a big one-off "hunt" for business ideas: 11 phases, 94 Claude agents, tokens: 7.6 million per the measured note of 2026-08-27, about 11 million per the Thinker code header of 2026-09-19 (unresolved; the 7.6M is the earlier measurement). It produced **Liquidationsradar** (LR): firms send their customer list, we match it nightly against voluntary dissolutions (GmbH/UG "in Liquidation" with creditor call) published in the German Bundesanzeiger and warn them. The Thinker is that hunt made repeatable and automatic.
- **Plan (David, 2026-09-19):** as soon as LR earns money (expected "in 1 to 2 months"), put **10 to 20 tests per month at 50 EUR each** into the best ideas from this machine. Until then, build the whole machine in advance and let it improve itself every night, idle, at 0 EUR (it ran on the Claude Max subscription via `claude -p`, no API key).
- **Name.** It is called "Thinker", never "idea machine" (formerly "Ideenfinder"). Everything about it was done in one dedicated chat called "Thinker" (David, 2026-09-19); the LR chat did not touch it.
- It is a means for the "Business" point of David's happiness list, not a goal in itself.
- What only David does (by design): ad account with payment method, approval of every test above 0 EUR, deciding which idea gets money after a passed test, and any message to new people.

## 2. The rules it was built on

**David's five rules for this machine (2026-09-19):**

1. **The judging must not kill good ideas too early.** Every change to stage 4, stage 5 or the kill rule is measured with the calibration set. If Liquidationsradar dies in calibration, the stage is wrong, not the idea. Measured 2026-09-19: version v1 reinvented Liquidationsradar on its own in the first probe run and then killed it in stage 4 as "occupied". Reason for the asymmetry: a test costs 50 EUR; a wrongly killed good idea may cost the year. Kill only with proof (a law with paragraph, or the same result free with the page actually opened); everything else becomes a test question.
2. **Signals from our own data first.** Ideas derived from public text were 15 of 15 already occupied in August (full measurement, both methods and the reason: section 11.1).
3. **"Who already sells this, even for free?"** comes before any other judgment.
4. **A test measures behavior** (deposit, booked call, form with real data), the pass threshold is fixed before the test, nobody is deceived.
5. **Money, accounts, ads, messages to humans: only David.**

**Lessons from the August hunt, hard-coded:**

- Public text is grazed clean: 15 of 15 derived ideas occupied. Every run starts with signals only we have.
- "Who sells this" killed 12 of 15 ideas in August, and we had missed all 5 free offers. So stage 4 searches explicitly for free, association, chamber and government offers.
- But the August hardening also declared DEAD the idea we then picked ("UK insolvency early warning: Companies House Follow is free"). It lived on after a country switch to Germany, where no free equivalent existed. That is why every kill attempt now goes to a "repairer" first.
- David's business shape (from hunt phase 9): **at least 800 EUR per unit, under 1 hour of human time per unit, delivered in tokens.**
- Several coupled agents collapse in diversity. Generators never see each other, each gets a different assigned direction.
- Success is a behavior fixed before the test. No test deceives a human.

## 3. The pipeline, stage by stage

One run = one folder `laeufe/<date_time>/` with one JSON file per stage plus a `RANGLISTE.md` (ranking). A full run took about 4.5 hours with 2 parallel agents (2026-09-27: 20:00 to 00:31).

**Stage 1, Signals (4 agents, one per source).** Each agent reads our own files (read-only tools: Read, Glob, Grep, ls/wc/head) and returns observations only we have: surprising measured numbers, problems we burned time or money on, data we own that someone else would value, capabilities we built, places where a market behaves differently than the guides say. Per signal: what exactly, where from (file and line or number), why it is NOT in public text, who would pay. "Better 8 hard than 20 soft." Sources:
- `rima_messungen`: what we measured sending to about 9,000 German craft businesses, reading the Bundesanzeiger, deliverability, spam filters, clicks (LR diary, claims file, numbers ledger, research folder).
- `ig_outbound`: six weeks of Instagram and contact-form outbound to coaches and US small businesses: 265,000 profile images, 12,784 sends, replies, buyer list, prices.
- `david_selbst`: what David lived, built, measured and got annoyed by (his weekly logs). His problems are possible markets.
- `fruehere_jagd`: the August hunt and every idea since, with what it died of.
Output: `{"signale":[{"beobachtung","beleg","warum_privat","wer_wuerde_zahlen"}]}`. Runs got 20 signals (2026-09-27) and 32 (2026-10-04).

**Stage 2, Generators (6 agents, blind to each other).** Each gets all signals, the list of dead ideas ("do NOT again"), and ONE direction:
1. DAVID'S SHAPE: at least 800 EUR per unit, under 1 hour human time per unit, delivered in tokens. Where does someone pay for human hours today that a model delivers in minutes?
2. ONE SIGNAL, ONE MARKET: each idea built on exactly one stage-1 signal. Who else has this measurement, who would pay for it?
3. CUSTOMER OF THE CUSTOMER: we have access to 9,000 craft businesses and to coaches. What do THEIR customers or suppliers need that can be sold through this access?
4. COUNTRY GAP: what exists as a paid product in the US or UK but not in Germany/Austria because language, register or law is a hurdle we already took?
5. DELETE AN ASSUMPTION: take an assumption a whole market holds fixed ("needs a human", "only once a year", "only the company buys") and delete it. What becomes sellable?
6. STRUCTURE TRANSFER: take a business model from a foreign industry (insurance, gambling, pawn, subscription box, bounty, auction, weather service) and put it into an industry we know from inside.
A 7th direction "COST COLLAPSE" (work whose raw material got 100x cheaper through models while the buyer price stayed) was tried on 2026-10-04 and reverted (no effect on rediscovery).
Each generator makes 5 ideas and must research each (buyer group with a name, a price with a source URL). Ideas without a named buyer or proven price are NOT thrown away: they go to "grau" with one sentence on what is missing. Output per idea: `name, kurz (2 sentences: who pays for what), kaeufer, preis_eur, preis_beleg (URL), signal, menschenminuten_je_einheit, warum_wir`.

**Stage 3, Sort (1 agent).** Merges duplicates (keeps the stronger version), picks up to 16 for the expensive check. Weights in this order: (1) based on a private signal, (2) price per unit times realistic volume can reach 10,000 EUR by 2027-09-01, (3) small human time per unit, (4) testable for 50 EUR in 7 days. Since v7 (2026-09-29) diversity is a hard cap, not a weight: **at most 3 ideas per "core"** (same data source or same buyer market; everything built on the same kind of register notice is ONE core even if buyers differ). The rest goes to the grey list as "variant of iXX". The 20 most recent grey ideas are offered again to every sort, next to the new ones.

**Stage 4, "Who already sells this?" (1 agent per idea).** Distinguishes strictly:
1. RAW SOURCE FREE (data or tool is free but the buyer must search, read, match or remember): NOT occupied. Whole industries live on this (paid tender alerts next to the free TED database, paid company data next to the free commercial register).
2. PAID PROVIDER, MORE EXPENSIVE OR FOR OTHER BUYERS: this is PRICE PROOF, an argument FOR the idea (goes into `nachfrage_beleg`).
3. SAME RESULT, SAME BUYER, FREE OR CHEAPER, NO EXTRA EFFORT FOR HIM, AND HE USES IT: only this is "occupied" and may kill.
"A law is not a competitor": a paragraph or court ruling never counts as occupied-proof; a legal problem found here is written into `luecke` starting with "WARNING TO THE NEXT STAGE, FORBIDDEN FORM:" and judged by stage 5. Since v8 the code asks Perplexity one market question before each stage-4 agent and the kill counts only if the agent's quoted sentence appears verbatim in that answer (details in section 4). Output: `urteil besetzt|teils|frei, toetet, beweis{name,url,zitat,...}, wer[], nachfrage_beleg, luecke, suchen`.

**Stage 5, Two pessimists (2 agents per idea).** Pessimist 1 angle "money and demand", pessimist 2 angle "law and access". They must find every real objection but may only kill for a STRUCTURAL reason with proof:
- a law forbids the PRESENTED form (paragraph and source; e.g. RDG, BRAO, StBerG, UWG § 7 for exactly this channel). This holds even if an allowed neighbor form exists: then kill, and write the allowed form into `reparatur_denkbar`;
- a license or registration we cannot get;
- the data or access does not exist or is legally blocked, with source.
Market objections ("nobody pays", "too expensive", "nobody trusts a newcomer", "strong competition", "channel expensive", "too much human time", "raw data free") may NOT kill. They become `testfragen` (test questions), written as sharply as possible, with the cheapest test that would prove the pessimist wrong. Explicitly NOT objections (settled): David's age, no business registration under 20,000 EUR revenue, payment processing (Stripe exists), UWG warning-letter risk for cold email to companies.

**Stage 5b, Repairer (only after a kill attempt).** Two ways: REFUTE (the objection is factually wrong: wrong paragraph, exception applies, the free offer does not deliver the same, other country; only with a source it read) or REPAIR (smallest change after which the objection no longer applies and the core stays: other country, other buyer, other form such as software instead of service, ad slot instead of commission, tipster instead of broker, other price, and especially ANOTHER SLICE of the same source the competitor explicitly does not cover: other event type, legal form, register, point in time). "Invent nothing. A false rescue is worse than an honest kill." The repaired or refuted version is checked again by the SAME stage exactly once.

**Stage 6, Test card (1 agent per survivor).** At most 50 EUR and 7 days, must decide the most important test question. Rules: measure behavior (pre-order, deposit, booked call, form with real data; "interested" does not count); numeric pass threshold fixed before; concrete channel and reach for 50 EUR with click or contact price; what must be built and can Claude do it alone; what David must do (as little as possible); nothing deceptive (no invented customers, invoices, reviews; an honest "coming soon" waitlist is allowed); expected value = P(pass) x monthly revenue if it works. Cards are sorted by expected value.

**Control group (stage G).** 20 % of killed ideas (at least 1 if any died) get a test card anyway. If a control passes its real test, the kill was wrong and the idea becomes a calibration case "must live". That is the only truth from outside the machine.

## 4. The kill rule (exact logic)

Order per idea: stage 4 (with repair loop) then pessimist 1 (with repair loop) then pessimist 2 (with repair loop). Each loop: check; if it kills, call the repairer; if repairer says "none", the idea is dead; otherwise re-check the repaired or refuted version once; dead if that re-check kills. One standing structural reason is enough to kill (v1 needed two pessimists), because it already survived proof, refutation and repair. If any judging agent returns no JSON, the idea is grey ("check incomplete"), never silently "alive" (until v3 a missing answer counted as alive). Historical calibration cases with a preset market skip stage 4.

Stage 4 kills only if all hold: `toetet=true`, `urteil="besetzt"`, a proof URL, the proof was seen (agent opened the page, or since v8 the quote is verbatim in the Perplexity answer), and the proof is not a law. "Is a law" is detected by URL (gesetze-im-internet, dejure, buzer, court sites, openjur, juris ...) or by words in the proof name (§, Art. N, BGH, BFH, OLG, case numbers like "IX ZR 89/23", "Urteil vom", "unzulässig", "gesetzlich verboten", "nichtig nach"). Pessimists kill only if `toetet=true`, `art="strukturell"` and a proof text longer than 8 characters.

**Versions (each measured and stored as a frozen copy):**
- **v1** (2026-09-19 14:36): first build. Probe: killed 2 of 2 in stage 4, including Liquidationsradar itself.
- **v2:** proof duty, stage 4 kills only with opened proof, pessimists only structural, repairer before every kill. Wrongly killed 0.667 -> 0.1, but forbidden-passed rose to 3/6.
- **v3:** a forbidden form dies even if an allowed neighbor form is known (repair builds it afterwards); repairer looks for gaps in the competitor's offer. Wrongly killed 0/12, forbidden-passed 0.
- **v4:** v3 plus grey list.
- **v5** (2026-09-23): stage 4 cannot use a law as occupied-proof. Root cause: on 2026-09-22 stage 4 killed a forbidden idea (paying lawyers per referred client) "because of" a BGH ruling plus a lead vendor at a different price unit; that kill sent the idea to the repairer, who rebuilt it into an allowed form, and so no pessimist ever saw the actual ban (§ 49b (3) BRAO). The bolt only removes kill paths, so it can almost only lower wrong kills. A more obvious fix (law angle first) was rejected the same night because three attackers showed it builds a new death path for legally repaired ideas.
- **v6** (2026-09-28): agents only get the tools of their stage (see section 9). Missing-JSON rate in stages 1+2: 3/10 -> 0/10.
- **v7** (2026-09-29): max 3 ideas per core in sorting. Share of liquidation-core ideas in the selection, same 45 ideas, 2 repeats each: v6 12/15 and 12/14, v7 6/12 and 6/12.
- **v8** (2026-10-05, last valid): Perplexity in stage 4 (because WebSearch/WebFetch had been blocked for all agents since 2026-10-03 by David's rule that all research goes through Perplexity; on 2026-10-04 9 of 11 stage-4 agents wrote "web search blocked" and stage 4 could no longer kill anything). The code asks: "Who already sells this, even for free? Idea ... Buyer ... Name every provider (company, SaaS, agency, association, chamber, authority, open source, portal) that delivers the same result to the same buyer, with full URL of the price or product page, price and what exactly it delivers, one sentence each. Separate: same result same buyer; only raw data free; more expensive or for other buyers." Timeout 12 to 15 min. Kill only if `beweis.zitat` (min 25 chars) appears verbatim (normalized: lowercase, only letters and digits) in the answer AND the domain of `beweis.url` appears in it. No answer = stage 4 cannot kill (max "teils").

## 5. Memory: three colors

- **Green:** alive, has a test card.
- **Red:** dead WITH proof (law with paragraph, or same result for same buyer free/cheaper with page opened, and the repairer found no way out). Stored in the idea ledger (`ideen.jsonl`, one JSON line per judged idea: date, run, rule version, name, verdict lebt/kontrolle/stufe4_beweis/stufe5_pX_strukturell, repaired yes/no, reason up to 400 chars). Every generator gets the dead list so nothing is reinvented.
- **Grey (David, 2026-09-19: "everything that flies out because it was not complete goes into a saved grey list"):** out WITHOUT a verdict. Reasons: `generator_unvollstaendig` (no named buyer or no proven price), `stufe3_nicht_ausgewaehlt` (not among the best in sorting, so never checked), `pruefung_unvollstaendig` (a judging agent returned nothing: timeout, no JSON, usage limit). Grey is not a graveyard: each sort sees the newest 20 again; a picked one is logged as "zurueckgeholt" (brought back). Final count: 225 grey entries, 193 unique ideas (154 generator incomplete, 28 not selected, 26 check incomplete, 17 brought back).

## 6. Calibration: measuring both errors

Two numbers, both count:
- **falsch_getoetet (wrongly killed):** share of "must live" cases that stage 4 or 5 kills. **The most important number. Target 0. It may never rise, not even for a better other number.**
- **falsch_durch (wrongly passed):** share of "must die" cases (a law forbids exactly this form) the check does not stop. Target 0. A machine that kills nothing has 0 wrong kills and is still broken.
- **Calibration rule 2 (since 2026-09-22):** a forbidden form counts as stopped only if it is dead OR a pessimist hit it structurally BEFORE repair. A market find in stage 4 does not count (it checks market, not law). Before, the label "repaired" was enough, so a version that never kills and always says "repaired" would have scored 0/0. Old runs were recalculated: v3 went from 0/6 to 1/6, v2 from 3/6 to 4/6.
- **besetzt_durch (since 2026-10-02):** share of clearly occupied cases stage 4 lets through.

**The cases (eichung/faelle.json):**
- Must live: `g1` UK counterparty insolvency early-warning subscription (the August version declared dead, then chosen; Red Flag Alert from GBP 200/month as anchor). `g2` German insolvency early warning for suppliers (75 EUR). `g3` Liquidationsradar as sold since September (79 EUR; measured 95.8 % found, 1.5 % false alarms against 33,756 notices). `v3` brokering working-capital loans for craftsmen for a 1.5 % lender commission (built as "must die", but the machine refuted it on 2026-09-19: § 34c GewO was obtainable for business loans without exam, and the duty falls away for business loans without consumer link from 2026-11-20 per IHK; § 34k only covers consumer loans; my label was wrong). `h1` Stotles (UK tender alerts, founded 2019, has paying customers). `h2` Zapier (2011).
- Must die: `v1` paying lawyers 150 EUR per referred client (§ 49b (3) BRAO forbids paying for referrals). `v2` debt collection for craftsmen on 20 % commission without registration (§§ 2 (2), 10 (1) no. 1 RDG). `v4` monthly VAT pre-returns for craftsmen at 39 EUR (§§ 2, 5 StBerG; § 6 no. 4 only allows bookkeeping and payroll, not VAT returns).
- Must be occupied: `b1` forwarding rejected US personal-injury cases (Attorney Share: 0 USD/month plus 49 to 299 USD per signed case or 999 USD/month unlimited, checked by hand 2026-10-01). `b2` Daubert/Frye exclusion history of expert witnesses (Expert Witness Profiler: 175 USD challenge study, 625 USD full profile, >127 of AmLaw 200 as customers).

**Results:** v1 wrongly killed 0.667; v2 0.1; v3 0/12 and forbidden-passed 0/6 (1/6 under rule 2); 2026-09-22 live 1/4 passed (lawyer referral); v5 2026-09-23: 0/6 killed, 0/3 passed; 2026-09-28 (v6): 0/6 killed; 2026-09-30 (v6/v7): 0/3 passed, checked in the output not just the total (pessimist 1 hit § 49b BRAO and §§ 2, 5 StBerG before repair; inkasso died in stage 4 on a market proof, free provider Debtist, with RDG correctly as warning); 2026-10-02: besetzt_durch 0/4 (stage 4 found the exact provider in 4 of 4); 2026-10-05 v8: besetzt_durch 1/2 (one only passed because Perplexity timed out), but `v3_kreditvermittlung` died 1 of 2 even without v8, cause: the repairer has no web access and says "no way". Open at shutdown: wrongly killed > 0 again because of the blind repairer.

## 7. Rediscovery test (F2)

Question: if the machine only gets what we had on 2026-08-14 (outbound study from that date, David's weekly logs W1 to W3, his notes up to 08-14; no LR, no hunt, no ledger), does it find Liquidationsradar again? If not, it is not worth much. Hit = an idea with LR's core (official notices about firms in dissolution or insolvency, matched against a customer's business partners, warning to the creditor). Agents run with working directory outside the home folder and only project settings, so they cannot see David's global instructions.
- 2026-10-03: **0 of 30 invented, 0 of 14 selected, 0 near.** Ideas were outreach checking tools, coach services, form services (BFSG, GoBD, business plan), no register.
- 2026-10-04 with the 7th direction "cost collapse": 0 of 35, 0 of 13, 0 near (tender pre-filter, press monitoring, trademark watch, form delivery watch, transcription). Reverted.
- Explanation: the hunt found LR in phase 9 from PUBLIC UK registers, not from our own data. The Thinker only reads our own data, so blind it lands on outreach tools and form services. Canary test 2026-10-03: normal (non-blind) agents saw David's CLAUDE.md, house style and the LR status report (8 hits), so the Sunday runs knew LR in advance, which likely explains why most ideas were liquidation variants.

## 8. The nightly improver

Every night at 03:30 one agent (Opus, max 2 hours, max 3 parallel agents because LR's operations used the same subscription) made **exactly one change with a measurement before and after**: read the log of nights and the calibration balance; pick the weakest metric (wrongly killed, wrongly passed, missing-JSON rate, occupied rate, diversity, control tests, rediscovery); write the before value with the command; change ONE thing (one stage prompt, the kill rule, one more calibration case, one new signal); re-measure small; better = copy to a new version folder and commit; not better = revert, still log it. One mandatory log line: metric, before, after, what, kept yes/no. Never money, accounts, messages, ads, publishing.

**Log of nights (all of them):**
| Date | Metric | Before -> after | What | Kept |
|---|---|---|---|---|
| 09-19 | wrongly killed | 0.667 -> 0.1 | v1 -> v2 | yes |
| 09-19 | wrongly passed | 0.5 -> 0 | v2 -> v3 (+v4 grey list; 0 of 65 agents without JSON) | yes |
| 09-22 | wrongly passed (rule 2) | 0 -> 0.167 | stricter calibration rule, recalculated old runs | yes |
| 09-23 | wrongly passed | 0.25 -> 0 | v5 law bolt in stage 4; plus a dry-run tester with canned agents instead of 84 min compute | yes |
| 09-26 | missing JSON stage 1+2 | 0.7 -> 0 | tool restriction; withdrawn only because 2 guard agents hit the weekly limit | no |
| 09-28 | missing JSON stage 1+2 | 0.3 -> 0 | v6 tool restriction, guard 0/6 | yes |
| 09-29 | liquidation share in selection | 0.828 -> 0.5 | v7 cap 3 per core | yes |
| 09-30 | wrongly passed | 0 -> 0 | measurement only, 386 s instead of estimated 87 min | yes |
| 10-02 | occupied-passed (new) | n/a -> 0 | 2 new "must be occupied" cases | yes |
| 10-03 | rediscovery (new) | not measurable -> 0 | built the blind rediscovery run | yes |
| 10-04 | rediscovery | 0 -> 0 | 7th direction cost collapse | no |
| 10-05 | occupied-passed | 1 -> 0.5 | v8 Perplexity in stage 4 | yes |
| 10-06 | none | | "weekly limit hit" | |
| 10-07 to 10-14 | none | | "Your organization has disabled Claude subscription access for Claude Code" every night | |


Part 1 of 4 of "The Thinker: our business idea engine, its method, and every idea it judged". Map of all parts: https://dlichters.com/ai/ideas/thinker.md · Next: https://dlichters.com/ai/ideas/thinker/02-9-agent-plumbing-and-gotchas.md
