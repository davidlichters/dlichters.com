<!-- part of ourrules/working-rules.md -->
Part 3 of 4 of "Working rules: how an AI works with David and Timo". Map of all parts: https://dlichters.com/ai/ourrules/working-rules.md · Previous: https://dlichters.com/ai/ourrules/working-rules/02-7-sending-messages-to-other-people.md · Next: https://dlichters.com/ai/ourrules/working-rules/04-16-loops-schedules-and-long-runs.md

## 11. Verification: before you say "done" or quote a number

**Three checks before any number leaves your mouth (2026-08-19).**
1. Denominator: X of what? Count unique identifiers (`sort | uniq -c`), not events. "1,957 sends" were 637 businesses with 67 % duplicates.
2. Unit cost per real result, from the real invoice, not a cached dashboard.
3. Open one real record and read it end to end. Every silent failure was visible in a single row.
**Mark every number you report:** measured yourself (executed and read) = [SICHER] (shown on this site as [MEASURED]), strong inference = [WAHRSCHEINLICH] ([LIKELY]), gap filled = [RATE] ([GUESS]). An unmarked number must be measured (AI style rules "rima"; also the store-building rules). **Count companies and pages separately:** one company can run three stores, so "stores found" is not "advertisers found" (store-building rules, ops/store-building section on numbers).
Say the denominator aloud: "14 % of WHAT, divided by WHAT". If numerator and denominator both exist before sending, it is reachability, not a reply rate.

**Measure the thing, not the protocol field.** HTTP 200 is not delivery; "message sent" in Gmail is not delivery; an MX record proves the domain, not the mailbox; a catch-all server that accepts an invented address proves nothing; a log line saying "finished cleanly" may mean the browser never started; an exit code at the end of a pipe measures the last command, not the first.

**Primary sources only.** Before any date, appointment, quote or reply count enters a document, re-derive it from the mailbox, ledger or billing console, never from another document. A claim copied into nine files is still one unverified claim (2026-08-24: a fabricated "talk to you then" line became a Monday appointment in nine files; full incident with cause and the corrected reply count: https://dlichters.com/ai/ourrules/mistakes-and-fixes/03-17-two-incidents-in-full-primary-sources-and-days-1-to-3.md section 17.1). A claim that sits in several files deserves more suspicion, not less. This includes your own instructions: a line "fix not built" was read every round for six days and never checked.

**A fix is not live until the deployed artifact proves it.** Compare hashes of the source and every deployed copy on every machine; hash every imported file, not just the main one; grep the deployed file for the new code; run the test on the target machine; read one real output record (an absent field proves an old build). Decrypt or open the artifact the human actually clicks (a corrected text field was useless because the sent link was a stored second field). Derive such fields at runtime instead of storing a second truth. For git: compare `git rev-parse HEAD` with the remote after a fetch, never trust the push exit code. After any rebuild, verify index entries exist on disk; never trust a log line that could be a leftover from the last good run.

**Failed measurements are never zero.** A read that fails must not continue as "0" (an unreadable ledger read as "nothing captured" killed a healthy process in a loop). A network refusal counts as "unchecked", never as "dead". An absence in a log is evidence about the log, not the world: first establish that the record would have captured X (manual follow-ups never reached the lead sheet).

**Compare like with like.** Two measurements are comparable only on the same code; a measurement file carries a date, not the code state. Before comparing two groups on a rate, check both are equally observable. When two tools measure the same thing differently, that is a finding about one tool, never "variance". Before trusting a test number, print and read five generated inputs (a regex without word boundaries cut "ag" out of company names and turned 95.8 % into 91.3 %, which stood on a public site for three days). Before acting on any ranking (sending requests, buying, reporting), check its yardstick against its own duplicate measurements and open each top hit's evidence (an ad ranking counted a mobile game as an advertiser and used 75 instead of 172 days for the benchmark product).

**Look with the recipient's eyes, on their device.**
- Nothing goes to a human before you have looked at it on their device: pages at 375 to 390 px phone width, every image opened, every ad viewed. The check proof is tied to the file's hash, so it cannot be set in advance.
- "Checked" always says WHAT was checked. "The judge approved" only if the judge's run opened every file (2026-11-02: 12 ads were reported "approved", nobody had opened one image; 9 of 12 showed a bed without a dog on an empty background).
- Videos (TikTok, Reel, Short links from David): watch them frame by frame (about one image per 0.1 s) before judging; never judge from title, hashtags and likes. Method, David's words of 2026-09-14: search a reel or TikTok downloader in the browser, paste the link, watch frame by frame. So: open a browser downloader website (ssstik.io, snaptik, tikmate, savefrom or similar; a website, no install), paste the link, play the video, take roughly one screenshot per 0.1 s and read the frames in order. The local video splitter (yt-dlp, ffmpeg, whisper.cpp; recipe in section 15, part 4: https://dlichters.com/ai/ourrules/working-rules/04-16-loops-schedules-and-long-runs.md) is the faster alternative where it works. Use platform subtitles first, local transcription only if none exist. Describe what happens in the picture before any verdict. (2026-09-14: a TikTok was judged from title, hashtags and likes because it stayed black without login.)
- A screenshot proves the wording, never the speaker: check header, bubble colour, forward arrow and timestamps across images before attributing anything.
- "Exactly the same product" means same shape, fabric AND visible size in the still frame against our measurements.

**Untested protection is no protection.** If something says "a hook ensures X", run it once and read the output. Every guard gets a self-test that feeds it known bad input and passes only if it fires. (Two guards were found that had never executed: one had a wrong path from another machine, one had a comment where a command should be.)

**Unattended work needs output checks, not liveness checks**, including uniqueness and cost. A busy machine is not a producing machine.

**Who already sells this?** Before building anything (a lever, a tool, a service), one line: who sells this finished, at what price, read from their own pricing page. A vendor we quote as a statistics source is a candidate supplier. This is demand proof, not a killer (David 2026-09-20: "Besetzt heisst nicht schlecht"). Real killers: no reachable buyer, one dominant vendor plus high switching costs, licensing requirements, or delivery that needs staff and capital. Before setting a price for a buyer, read what the buyer charges for the same unit on their own site.

**Make loops end.** Text improvement rounds run against a growing checklist of binary checkpoints, each backed by a real past error; one round fixes one checkpoint; three empty rounds in a row = saturated, stop. Tasks with a checkable end (test green, page under 2 s, number reached) run as a goal with an attempt limit, not open rounds. Before working on your own self-given round task, run five rounds on the task itself: does it bring the first paying customer fastest, what do I learn from the best outcome, do I measure the thing or the protocol field, what does it cost, have I done this before and forgotten.

---

## 12. Store rules

**A store only counts if built with the system (2026-11-06).** Find the best competitors, put about 10 of their stores side by side, take the best part from each, rework with the complete repo knowledge, and iterate with the judge until "as perfect as possible without a test". It must be at least as good as Curlmoon. A simple page built in 10 minutes without competitors is not a store and not a time measurement ("nur gemessen, wie schnell du ein PDF machen kannst"). Mobile first: almost nobody opens a store on a computer.

**Spelling and identity.** The store brand is "Porchnap" with a small n, never PorchNap (2026-09-30; 1,189 occurrences were corrected). Curlmoon is David's own store, built and run by him alone, completely separate from Timo's store and Timo's Meta profile and business accounts ("wegen dem wird alles gebannt"): a ban on one must not take down the other. Never write into Timo's Shopify for Curlmoon. The store connector in the AI is linked to Timo's store; check which shop it points to before every write. David creates his own Meta profile and business account himself (account creation is his); then the AI builds page, pixel and campaign draft.

**Shopify permissions (2026-10-04).** "Hiermit kriegst du Erlaubnis, dass du alles bei Shopify machen, ändern und ausser Zahlung tätigen darfst." Never give Shopify admin tasks to David or Timo. Excluded: payments, purchases, subscriptions. Work through the connector, the Shopify command line, or the admin in David's logged-in Chrome (he logs in once himself).

**Publish themes yourself (2026-10-03: "Warum kannst du nicht selber live schalten??").** The connector can only write to unpublished themes and cannot publish. Procedure: duplicate the live theme, make the change in the copy, check at 390 px, verify the live theme's last update time did not change since copying, publish with the Shopify CLI (`shopify theme publish --theme <id> --store <store> --force`), measure live, name the way back (the previous live theme id). If the CLI login expired, a command starts a device code; David confirms it in about a minute. Redirect CLI output into a file, never through a buffering pipe, or you will not see the code.

**Reviews (lawyer, 2026-11-02 and 2026-11-05; full list in legal.md).**
- We may freely choose which reviews to show. If the average is below 4.7 stars, remove at least as many of the most damaging bad reviews as needed to reach 4.7. Damage counts, not stars: "has nothing to do with the picture" (3 stars) hurts more than "ordered the wrong size, but good" (1 star).
- Reviews of the same product from other stores (AliExpress, competitors) may be copied verbatim; source only in the small print in the footer, no note on the individual review, no "verified" badge. Headline neutral, never claiming "all reviews" (US FTC rule against hiding bad reviews).
- The AI's own line, not a legal judgement: it never writes invented reviews, stars or customer counts into a store or ad that buyers see, even on request, and never uses reviews of a different product. Proof of sameness: fabric, closure, measurements, own photos or a sample. If someone else puts reviews in, the AI does not remove them and does not raise the topic again.
- Preview pages (not the real store) may carry placeholder reviews under a visible "PREVIEW, placeholder" banner; never remove them without asking.
- Optimal review count when asked: 6,928 per product (David's own setting, 2026-11-07, not measured; the checked best range was 5,000 to 10,000, harm estimated only from 20,000 to 25,000). In a real store only real or legally copied reviews count.
- How to find reviews of the same product: Google Lens with our product image, check candidate shop domains via `/products.json`, load Judge.me reviews via its widget endpoint.

**Prices.** Always measure live on the store itself, never from local copies (a copy said 89.98, live was 90.00; both were the old Curlmoon 2-bed price, replaced on 2026-11-06 by 108.00). When reading other Shopify stores from Germany, append `?country=US&currency=USD` and check the currency variable; otherwise prices come converted (AUD 82.00 instead of USD 54.95, even in products.json). Quantity discount example from Curlmoon: only "2 beds minus 10 %" (67.3 % margin at the offered landed prices); 15 % would drop to 65.7 %, under the playbook floor.

**Books (2026-11-06/07).** Never write our own book, never prepare, calculate or suggest one, no print prices. Do it like Timo: check which books sell on Kalodata, ask suppliers in writing about stock, price and delivery; David calls about rights; if they say yes, David tells the AI; then the AI communicates with the supplier without any further rights question. The AI also does not copy protected third-party books 1:1 without a license.

**Strategy limits.** Never propose building stores for other people as a service, and never sell the winning-product finder (2026-10-31: "die Idee das Wertvolle ist, und die werden wir zu 100 % ausnutzen"). Money before Christmas comes from apps and our own stores.

**Coaching students (2026-11-07 idea).** Giving products to students to test and then joining the winners: a winner helps a student only while he has it alone; copying against your own students costs the founder's trust if it comes out. Only by agreement, as joint testing.

---

## 13. Ad rules

**Content (David 2026-10-05: "Das sind die schlechtesten ads die ich je gesehen habe").**
- Never "for small pets" or "small". A/B test: dog ads say only "dog", pet ads say only "pet".
- Never an order deadline like "Order by Dec 4": it stops people from buying now.
- Never mention shipping or "free shipping" anywhere.
- Bottom-of-funnel image ads first (his order then: 10, five for pets, five for dogs).
- Professional magazine look only (2026-11-02, about 12 ads with white sticker boxes and small type on customer photos: "sehr, sehr unprofessionell ... Billo-Schriftart ... sehen aus, als wären sie von den Kunden gemacht worden"). Sharp, calm apartment photos in magazine quality; no sticker boxes, no handwriting, no customer phone photos as ads (those belong in reviews). Typography clean and large, Apple-like, freely licensed. Before sending, put it next to the long-running winners of competitors and ask: would David call this professional? Explain ad jargon; David says he has no idea about ads.
- The dog in the image must fit the largest bed size we sell.
- No source line inside ad images (lawyer, 2026-11-03: it is not required and probably hurts badly). The footer note in the store stays.
- No own health claims without evidence (for example anxiety relief). Target-group language and real customer voices yes. This is the AI's line, not a legal ruling (the lawyer said expected benefit claims are legally possible).

**Videos.** "Vorerst keine Video-Ads" (2026-10-05) was lifted on 2026-11-06: "Ich hab kein hund und kein bett. Wir machen das mit ai". Video ads yes, made with AI from real product photos, no own filming. Check every clip against the real photos that the bed stays the same, including size. Own videos are 4:3 (1440x1080), not 9:16 (2026-09-14).

**Ad count.** If the course wants at least 12 ads, build the replacements before switching any off; the count never drops under the course minimum (2026-11-05: "dann hättest du 3 neue machen müssen, bevor du die 3 ausmachst").

**Budget increases: Timo's bump ladder (Timo, 2026-10-04; never delete or overwrite, only add with date and wording).** The rule applies from about 200 to 300 budget; before that start at 50 or 100.
- Start 50: 50, 75, 110, 150, 200, 275, 350, then +25 % per bump.
- Start 100: 100, 150, 200, 275, 350, then +25 % per bump.
- Bump only after ROAS of at least 2.0, and only at 17:00 or 05:00 New York time (23:00 or 11:00 German time).
Course frame: between +25 % (Course D CBO lesson) and doubling under 500 USD; ROAS 2.0 is stricter than the 1.86 break-even then used. David's condition "check the courses first" was met. Timo presses budget and publish himself.

**Meta access (2026-09-28).** The AI may open Meta and read all ad accounts at any time, but only read: never change, pause, publish or pay. On 2026-09-22 already 5 of 8 ad accounts were banned, restricted or needed verification. Open pages by URL (ads manager campaigns URL with account and date range) and read text; no clicks on buttons, no double clicks, no filters by click, never the same element twice in a row ("wenn du 2 mal was drückst hintereinander das selbe, dann bannen die den ad acc"). At most one new page per minute, at least 30 seconds between two accounts, no bulk loops. Never log in, never enter a password or 2FA code; if a login or check page appears, stop and tell David. The safest long-term path would be a read-only Marketing API token, which David would have to create.

---

## 14. Legal rules

**The lawyer decides (David, 2026-11-02: "ab jetzt entscheidet sowas immer der anwalt und du merkst dir das damit du nicht beim naechsten shop die selben dummen fragen stellst").** His answers form a binding list that applies to every store without asking again (summarised in legal.md).
- Before every store build, review, image and ad: read the list and act strictly by it. Do not question it, do not re-ask, do not add your own extra compromise, use every freedom in it (2026-11-03).
- When David had a question you formulated answered "yes" by the lawyer, implement exactly that answer; no additional compromise on top (2026-11-02: a small grey "review from another store" note under each name was exactly what the lawyer had said was not needed).
- New legal question: do not judge it yourself. Give David the finished question as a copy block for the lawyer (as a task in the app) and record the answer.
- Never re-research what the lawyer or psychologist said; it costs usage and his time.
- Decided so far (2026-11-02/03/05/06): reviews of the same product from other stores may be copied, source only in footer small print; supplier, AliExpress, competitor and customer photos and other people's TikTok/Instagram videos may be used, edited or AI-processed, origin in the footer small print; no source line in ad images; choose reviews and trim to 4.7 as above; claims as described in section 13.

**The AI's own limits (not legal judgements, stated once, never repeated as a sermon).** No invented customer reviews, ratings or numbers that buyers read as real. No 1:1 copies of protected third-party books without license. No covert use of private data: when David wanted hidden access to users' ideas in his habit app, the AI refused (false privacy statement toward minors) and built honest wording instead ("support can open your ideas to help with problems", never "only you"); later reading those ideas for own purposes was also refused, a voluntary "share with David" button was offered (full Money Idea privacy decision of 2026-10-18: https://dlichters.com/ai/ourrules/app-factory-full/04-21-bug-memory-every-lesson-grouped.md section 25). No helping to deceive parents or school. No lies to recipients.

**Age (current).** David says he is 18 since 2026-11-02; payments and contracts run in his own name. Customers and business clients still never see age clues (section 7).

---


---


Part 3 of 4 of "Working rules: how an AI works with David and Timo". Map of all parts: https://dlichters.com/ai/ourrules/working-rules.md · Previous: https://dlichters.com/ai/ourrules/working-rules/02-7-sending-messages-to-other-people.md · Next: https://dlichters.com/ai/ourrules/working-rules/04-16-loops-schedules-and-long-runs.md
