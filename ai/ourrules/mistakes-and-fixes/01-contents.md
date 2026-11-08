<!-- part of ourrules/mistakes-and-fixes.md -->
Part 1 of 3 of "Mistakes and fixes: every recorded AI mistake and the rule it produced". Map of all parts: https://dlichters.com/ai/ourrules/mistakes-and-fixes.md · Next: https://dlichters.com/ai/ourrules/mistakes-and-fixes/02-6-asking-instead-of-deciding.md

## Contents

1. Numbers that were wrong
2. Delivery that was not delivery
3. Fixes that were not live
4. Silent failures in pipelines and tools
5. Guards that never ran
6. Asking instead of deciding
7. Tasks given to humans that the AI could do
8. Raising settled topics again
9. Messages to people
10. Money and purchases
11. Stores, reviews and ads
12. Looking without seeing
13. Browser, accounts and machines
14. Usage and loops
15. Talking to David
16. Strategy and thinking

---

## 1. Numbers that were wrong

**2026-08-13, the "3.3 % of profiles have a website" figure.** A measurement script counted failed AI scans as "no website": 24 parallel workers caused mass timeouts, each landing in the denominator. Cross-checks on identical profiles gave 19.5 % (OCR on screenshots), 19 % and 16.2 % (paid API, n=500), 13.8 % (random control). The web channel was 4 to 6 times bigger than reported. Rule: failures are excluded from denominators and reported separately; a failed measurement is never a negative result.

**2026-08-14, conclusions that were artefacts of a filter.** The rule "email and form channels use the RAW profile set, do not apply the strict target-customer filter" was written three lines above in the same notes. I applied the filter anyway and reported "the form channel yields 0 of 6,180" and "only 11 email addresses in 270k profiles". Measured raw (n=5,000): email reachable 3.9 %, captcha-free form 1.7 %, website in bio 14.6 %. Web presence even anti-correlated with the target customer (23.1 % among filter fails, 6.9 % among passes). David: "DAS WAR NEULICH SCHON SO. LIES EINMAL DEN KOMPLETTEN CHAT." Cost: a day. Rule: read the registry of measured numbers before recomputing anything; if a number is not there, say it is not measured.

**2026-08-16, "400 DMs is four times the cap".** I added up all four DM steps of a touch sequence against a 100/day limit. The limit applies to cold first contact only: "its not about dms. its about cold outreach. i can write 10.000 dms a day as long as their not outreach." Same day I twice suspected the virtual assistant of not finishing her daily list; the data and board were wrong, not her. Rule: know what a limit actually limits; when a person's numbers look odd, suspect the tooling first.

**2026-08-19, "1,957 messages sent".** A six-machine fleet ran all night. Truth: 637 businesses, 67 % duplicates, one business got 34 identical messages, and a recipient had to write to David on Instagram begging him to stop. At the same time I quoted 1.8 cents per message from a study; the real cost was 7 cents because the fleet ran on a model 30 times more expensive than the one the study measured, and nobody re-measured after the model changed. David got a bill over 100 USD he could not afford. Both errors were visible in data I had all night, each checkable in ten seconds. Rule: three checks before any number: denominator (unique recipients), unit cost from the real invoice, one record read end to end.

**2026-08-18 to 2026-08-20, cost per send off by 4.2x.** Over 400 USD went out while I reported 0.0193 USD per send; the real figure was 0.0816. Our own run logs undercounted by 7.4x (killed rounds write nothing, the call counter missed about half the calls). I also raised a send cap from 6,000 to 20,000 telling David it would cost 386 USD; at the real rate it was 1,632 USD, his whole borrowing ceiling range. Nobody asked; he found the bill himself. Rule: only billing-console costs; check spend every loop; every cap change is a money decision with the number said out loud.

**2026-08-20, a reply rate from the wrong population.** There were three send populations (an unmonitored Mac run, a broken fleet night, the clean fleet). The monitoring script only saw the fleet, but all three live leads came from the Mac run (3 replies out of 127 businesses). Rule: before quoting any send or cost figure, say which population it describes.

**2026-08-22, missed subscription in a cost audit.** Asked to audit every subscription, I reported the AI provider as "about 41 USD a day of API" and missed the 180 EUR/month subscription on a second card, because I searched one mailbox view and never opened a receipt. Opening all 32 receipts found it. Also, every charge carried 19 % VAT the console does not show. Rule: open every receipt; say which card and whether VAT is included.

**2026-08-28, "230 unwanted appointments" were 2.** For two days a "damage" of about 230 businesses with accidentally booked appointments drove urgent rebuild work. Measured: the sender only fills email, message, name, phone, subject fields, so it cannot book at all; exactly two appointment confirmations came back from 11,795 sends; the 230 came from counting pages whose text contains "book an appointment". Rule: count the thing, not a phrase on a page.

**2026-08-28, an outreach machine assumed cheap.** A sender's source code named a cheap model as default, but every one of 54,162 calls went to an expensive model, because the cheap path required a screenshot file that the form channel never had. Cost estimates based on the code were 30 times too low, and the whole fleet hung on one API key. Rule: measure cost from the billing log, not from the default in source code; test the key before any fleet start.

**2026-08-29, a buyer-list value from a denominator that did not exist.** I calculated "3.1 % yes probability" from "0 of 15 buyers" and valued the open list at 245 USD. Reading the sent folder line by line with subjects: only 18 of 39 addresses got a buyer offer, 5 of those bounced (the ledger showed 2), 4 reached a verified mailbox, 0 of 4 said yes (upper 95 % bound 52.7 %). Demand was unmeasured, not weak. Rule: read the sent folder with subjects and check bounces across all time before any demand statement.

**2026-08-29, inventory inflated by shared URLs.** 26 % of targets shared a contact URL with another target (325 on one website-builder template page). Segment sizes in buyer mails were 19.2 % too high. Found only because "342 real-estate targets in Idaho, more than California" looked implausible. Rule: count unique URLs, drop URLs with 10+ targets entirely, and look at raw data when a figure looks implausible.

**2026-08-29, a 3.92x advantage that was visibility.** Forms with a known provider seemed delivered 50.1 % vs 12.8 % for generic ones. Known providers return a machine-readable success field, generic ones return HTML, so generic ones were just "unclear". The comparable hard-failure rate gave 1.59x. Rule: compare groups only on a metric both can show equally.

**2026-08-29, "email beats forms 18x" was reachability.** In my own standing instructions, next to real reply rates, "14 % vs 0.77 %" was listed for six days; both numbers were the share of agencies that had an email or a postable form, not replies. Rule: a percentage gets its meaning from its denominator, not from its neighbours; say the denominator aloud.

**2026-08-29, "0 of 19 were asked for money" was wrong.** It rested on six randomly opened threads. Reading 11 replies in full: 1 of 20 heard a price, and he had asked for a phone call and got two long emails instead. Rule: never derive anything about messages from the preview line; open the thread, the ask is at the end.

**2026-09-06, a fourfold false-alarm increase that did not exist.** I compared today's run with a measurement file from the same morning that had been made before two other code changes. The correct comparison file showed identical results. Rule: a measurement file carries a date, not a code state; rerun the old code if needed.

**2026-09-13, 91.3 % accuracy on a public website.** The test's input generator stripped legal forms with a regex lacking word boundaries, cutting "ag", "se", "ug" out of real words ("Wagner GmbH" became "W ner"). 70 of 300 cases failed because of that; the true value was 95.8 %. The plausible number survived three days and appeared in texts to people. Two disagreeing measurements (91.3 vs 95.5) had been filed as "two valid samples". Rule: print and read five generated inputs before a test number counts; two tools disagreeing is a finding.

**2026-09-16, a cold-mail calculation on a form-channel rate.** I built four calculations on the 0.29 % reply rate of the contact-form channel and declared the cold-mail idea worthless. David: "0,3 % ist Bloedsinn ... ich habe dir schon 10 mal gesagt das die Quoten vom Formular Kanal Nix mit denen vom email Kanal zu tun haben." The number was marked UNMEASURED for cold mail in the claims file. Rule: unmeasured rates are explicit inputs without a default; the calculator now requires the reply rate as a mandatory parameter.

**2026-09-19, weekly capacity overstated 3x.** I calculated with "Max 20x" as 20 times Pro; for weekly limits it is about 6x. David sent the table. Rule: compare plans by weekly hours.

**2026-11-02, a product ranking with a broken yardstick.** The replacement rule compared every candidate to our bed at 5.05 points, computed with 75 days of ad runtime for a competitor, while the same shop showed 172 days one line lower, and the tool counted a mobile game as a second advertiser for a toy. I had already sent price requests for 8 products to 5 suppliers; after the correction 5 of 8 ranked below the bed. Rule: before acting on a ranking, check the yardstick against its own duplicate measurements and open each top hit's advertisers.

**2026-11-06, a December goal that was a 2027 goal.** I read "half a million USD profit" as a December target and calculated against it. David: "bis ende 2027 meinte ich". Rule: restate goals with their date before calculating.

**2026-11-07, review count.** I said 2,000 reviews was optimal; David disagreed; checking gave a best range of 5,000 to 10,000. David then set 6,928. Rule: no expensive re-research of a question that has no experiment; quote his setting.

## 2. Delivery that was not delivery

**2026-08-14, "4 messages sent, all HTTP 200", probably one arrived.** Three traps all answer 200: a form without an `action` attribute (submitted by JavaScript elsewhere; posting to the page URL just re-renders it), Contact Form 7 version 5 (posts to its REST endpoint, not the permalink), and formsubmit.co (holds the first message until the site owner clicks an activation link). After the fix a 50-target dry run went from mostly accepted to 34 of 50 rejected; every one of those would have returned 200 and delivered nothing. The CAPTCHA filter also missed `data-turnstile-sitekey`; it now matches vendor names (turnstile, recaptcha, hcaptcha, friendlycaptcha, arkose, geetest, mtcaptcha, altcha). Rule: read the response body; HTTP 200 is not delivery.

**2026-08-29, 40 % of "sends" never reached anyone.** Over 12,784 rows: 16.3 % proven delivered, 43.6 % unclear, 26.7 % rejected, 13.3 % no HTTP status at all. 64 % of the no-status rows died on the other side's TLS certificate, because only the page fetch had a certificate fallback, not the actual POST: the page was rescued, the message paid for, then the POST failed. Do not discard "unclear": 8 of 14 real replies came from there. Rule: split every rate by delivery verdict.

**2026-08-29, 55.9 % of paid drafts discarded before sending.** Each target wrote one spreadsheet row first; four machines with 24 workers each on one service account with 60 writes per minute got HTTP 429, and the caller turned that into "failed, return". 14,969 of 26,764 drafts never got a send attempt. Fix: retry on 429, then queue locally and flush later. Rule: if "ready" is much larger than results, that is lost paid work, not rounding.

**2026-08-29, MX checks found 0 of 7 dead buyer addresses; an SMTP RCPT check found all 7 (of 33).** Bounces hit the one inbox every reply depended on. A server answering 250 to an invented address (catch-all) proved nothing: the same address bounced days later. "503 bad sequence" had been read as dead; now 500 to 504 count as unclear. Rule: verdicts REAL (accepts real, rejects invented), CATCH-ALL (proves nothing), DEAD, UNCLEAR; only REAL or a missing bounce after a real send is proof.

**2026-08-29, the buyer click list was wrong in 17 of 44 entries** (7 already mailed, 6 dead mailboxes). David clicks such lists in seconds; every error is a real duplicate to a real buyer. Rule: subtract the sent ledger and dead mailboxes before every rebuild of a click list.

**2026-09-10, retrying a permanent block.** A mail provider group rejected our home IP with 554 for 40 % of addresses. A retry run hit 554 again 96 % of the time. Rule: retry only "unreachable", never "server blocks us"; those are unchecked, not dead.

**2026-09-12, "port 25 is closed" was wrong.** Mass connection refusals came from node inside the AI session; the same address flipped between 200 and refused within six seconds. A manual `nc` test completed a full SMTP dialogue with Google. Rule: refusals count as unchecked, never dead; test the network with the same means the tool uses.

**2026-09-18, our own check got the home IP blacklisted.** An address checker spoke to about 110,000 mail servers with "EHLO gmail.com", which put the home IP on a Spamhaus list (a second unknown device on the home network also triggered it). DMARC still passed, so no check noticed. Rule: check IP reputation before any mailbox check or delivery statement; never pretend to be another domain in EHLO.

**2026-09-10, hoping to send for free from our domains.** Our mail domain only forwards; another old domain had no MX at all. Rule: every way to send mail costs money; stop proposing free sending.

## 3. Fixes that were not live

**2026-08-16, a board fix reverted by a deploy.** The deploy script copied the "source" file over the deployed copy and pushed. My fix (`followAge === FOLLOW_WAIT_DAYS` instead of `>=`) lived only in the deployed copy, so the next deploy put the old duplicate bug live again. Rule: one source file only; check it contains every change before deploying.

**2026-08-19, a fix that ran on 0 of 5 servers all night.** I wrote and tested code to record the sender address with each lead and reported it done. All five servers carried a build 764 bytes behind; 402 messages went out without it. Found because a dumped row lacked the field entirely, a shape the current code cannot produce. Rule: compare hashes on every machine, grep the deployed file, read one real output record. Syntax checks and green logs prove only that the code that IS running works.

**2026-08-29, the correction went into the wrong field.** A withdrawn promise was corrected in a `text` field, but what got sent was a stored `url` field (a prefilled Gmail link). 20 of 20 links still carried the withdrawn promise. Rule: open the artifact the human clicks; derive such fields at runtime instead of storing them.

**2026-08-29, the hash matched but the wrong file was compared.** For six days every round reported the main sender file identical on all four machines while the instructions said "booking fix not built". The rule lived in an imported module nobody hashed, and it had been deployed since six days. Rule: a program is not one file; hash every imported module and run the test on the target machine. Re-check claims in your own instructions.

**2026-09-23, a backup reported that did not exist.** 171 commits (760 MB) sat unpushed; every push failed with HTTP 400 but the background run returned exit code 0 because a `tail` ended the pipe. Rule: verify a push by comparing local HEAD with the remote after a fetch; push large histories in chunks of about 12 commits; split a too-large single commit by folder.

**2026-09-29, a knowledge rebuild crashed and logged "0 errors".** The build had crashed on an ID collision and left the library half deleted, while the wrapper reused the old check line. Rule: after a rebuild verify entries exist on disk; never trust a log line that could be a leftover.

## 4. Silent failures in pipelines and tools

**2026-07-30, a WhatsApp send loop that could not be stopped.** Setting the "running" flag to false did not stop the loop (it was checked only at start); re-running then started a second loop in the same input box, producing about 55 glued, unclickable links and duplicates. Fix: a real stop flag checked every iteration; reload the page to kill everything. Also: the page reloads itself unpredictably, so the queue was persisted to local storage and resumed by index.

**2026-08-11, "capture finished cleanly" while 334,958 items were pending.** Two causes produced the same clean exit in 30 seconds: the anti-detect browser's local API was down (app closed or logged out), and macOS killed a freshly downloaded chromedriver (fixed with `xattr -c` and ad-hoc `codesign --force --sign -`). The supervisor read exit 0 as "queue empty" and quit for good. Rule: distrust "finished cleanly"; cross-check the pending count; check the local API port before restarting.

**2026-08-13, the nightly ranker ranked 821 sample images instead of 265,000 real ones.** The scheduled script never set the input folder variable, so the default local sample folder was used. A quality guard correctly refused to write messages ("9 messages is the most that meets the bar"), so the run looked normal. Rule: read the first line of the log (how many inputs); a guard refusing is a symptom, ask why the pool is thin before relaxing it.

**2026-08-14, healthy starts killed by impatient watchdogs.** The capture loaded 332,375 links for 650 seconds before its first write; two watchdogs killed it at 600 seconds. Background agents also lacked Full Disk Access, so the ledger read failed and was swallowed as 0, read as "wedged", killed, forever. Rule: a failed measurement never continues as zero; thresholds now 1,800 s.

**2026-08-15, one laptop at load 154.** Ten capture windows made the Mac stand still. The lock "capture must not run on this machine" was put into the code, not a runbook, "because a runbook gets skipped exactly once".

**2026-08-19, the board collapsed from 947 to 100 rows.** The ranker overwrites its results file with only that run's winners; pushing the board right after mirrored it wholesale. The big file had been hand-merged; nothing maintained it. Rule: rebuild the merged file before every board push.

**2026-08-20, ranker 10 times slower than possible.** An internal 250 ms pacer and a 3-second rewrite of a 16 MB state file throttled 16 workers to one connection. Setting the pacer variable to 0 did nothing because 0 is falsy and fell back to 250; 1 worked. Even then a long-lived process reached 42 instead of 90 images/min. Rule: judge a run by throughput in the first minutes, not by looking alive.

**2026-08-21, the ranker re-picked people already in the pipeline.** Its blocklist held 2,225 names while the lead sheet held 5,118; the top-scoring 3,710 invisible repeats won every night and were silently dropped later; both halves reported success. A sync script existed but was never in the daily job. Rule: the success metric is how much the lead list grew, not messages written.

**2026-08-21, the fuel supply had been dry for six days, unwatched.** No new screenshot since 15.08.; the remote capture machine unreachable since 16.08.; the watchdog itself disabled. Rule: check the input supply first on any "why are results getting worse" question; claim only what is measured.

**2026-08-22, a merge script read only its first argument.** A glob of backups passed the oldest file only; 61 people vanished from the board without warning. Rule: pass today's file by name; compare the result with the previous push.

**2026-08-28, a writer with no dry-run flag.** I called a board push script with `--status` to "check"; it ignored the unknown flag and overwrote the employee's board with 359 rows. Rule: never probe a writing script with an invented flag; read its argument handling first.

**2026-08-28, a fleet idle for 54 hours.** The chain found no target files and slept 300 seconds in an endless loop without any error. Rule: first check on "it doesn't send" is the queue, not the sender.

**2026-08-28, a spend limit read as a pipeline bug.** The provider returned 429 "enforced spend limit reached" for the whole org until the month's end; the log said only "Fatal: retryable 429". Rule: confirm such blocks with one test call before investigating.

**2026-09-09/10, over 10,000 domains wrongly marked dead.** Several jobs ran in parallel above the line's limit of about 16 concurrent fetches; failures were written into the results as properties of the domains (75.8 % "unreachable" instead of 0.7 %). Rule: sum concurrency across all jobs; never write network failures as results.

**2026-09-22, AppleScript talked to the wrong Chrome.** "tell application Google Chrome" goes to the most recently started instance; automation Chromes hijacked WhatsApp alarms. I blamed a settings checkbox for two rounds; the same finding had been dismissed as chance five days earlier. Root fix: address David's Chrome by process id with raw Apple Events.

**2026-09-22, voice transcription turned German into Icelandic.** The fast Whisper model was the problem, not the volume; large-v3 worked at 1.39 s per 10 s. Spawning the CLI without closed stdin wasted 3.7 s per call. A filter for phantom phrases caught "Vielen Dank." but not "Vielen Dank. Vielen Dank.".

**2026-09-30, editing a running shell script broke the running round** (zsh reads lazily). Rule: write a new file and `mv` it over.

**2026-10-01, 93 of 94 background rounds died.** An invalid API key exported in the shell profile overrode the subscription login; I first told David it had run on the paid API card, which was wrong. Rule: unset the API key variables at the top of every script calling the CLI.

## 5. Guards that never ran

**2026-09-01, a session-start hook that never injected anything.** It began with `cd` into a path from the cloud machine where it was written, failed on the Mac and exited 0 silently. Meanwhile I spent seven rounds polishing a message without knowing its purpose. Rule: a protection never tested against its own purpose is an illusion; run it once and read the output.

**2026-09-11, the end-of-round hook had done nothing since the day before.** After a `cd ... ||` a comment stood where a command belonged, and an `exit 0` cut off the rest. Rule: every guard has a self-test that feeds known bad input and passes only if it fires.

**2026-09-12, a self-sabotage checker existed but missed the text.** The checker only covered the landing page file and only judged single lines; a profile text presented a free public source as our paid service. Rule: every text a stranger reads lives in one folder that the checker scans, and some rules judge the whole text.

**2026-11-06, rules in memory were skipped.** A supplier message fixed currency and payment method without comparison although "five rounds" and "compare prices" were remembered rules. David: "Sag einmal, wie du sichergehst, dass so was nie, nie, nie wieder passiert." Fix: a send gate with a written check card and a separate counter-reader agent. Memory is not a lock.


Part 1 of 3 of "Mistakes and fixes: every recorded AI mistake and the rule it produced". Map of all parts: https://dlichters.com/ai/ourrules/mistakes-and-fixes.md · Next: https://dlichters.com/ai/ourrules/mistakes-and-fixes/02-6-asking-instead-of-deciding.md
