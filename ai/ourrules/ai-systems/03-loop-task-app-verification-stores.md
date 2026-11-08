<!-- part of ourrules/ai-systems.md -->
Part 3 of 3 of "AI systems: how we run AI work so it does not make mistakes". Map of all parts: https://dlichters.com/ai/ourrules/ai-systems.md · Previous: https://dlichters.com/ai/ourrules/ai-systems/02-workflows-critics-blind-tests.md

## Contents of this part

18. The continuous loop (since 2026-11-07 17:15) and the waste watcher
19. The task app ("Natural Intelligence", internally "Hebel"): writing a task
20. Copy blocks in tasks (since 2026-11-07 19:18)
21. Research goes to Perplexity
22. Verification rules this page adds
23. Store building as a system (short; full version linked)
24. Checklist: before, during, after any AI job

---

## 18. The continuous loop (since 2026-11-07 17:15) and the waste watcher

David, 2026-11-07: "Warum muss ich immer noch dein Händchen halten und dir die ganze Zeit Prompts schreiben? ... alles, was wir heute und gestern gemacht haben, jeden Prompt, hättest du dir auch selber ausdenken können." The task app should feel "like a video game": always full of real tasks he ticks off for hours, "aber auf gar keinen Fall darf irgendwas Unnötiges in der App auftauchen".

This replaced the event-only "motor" of 2026-11-06 (no timer, next round only after a helper finished; described in the automation page). The trial limits of that design ("no alarm clock") no longer apply.

**Timer:** a chat timer every 30 minutes (minutes 13 and 43 of each hour), created inside the chat, never as a scheduled cloud routine (David had one deleted on 2026-09-28: it must happen in the chat). A chat timer dies with the chat and after 7 days; check the timer list after every restart and recreate it.

**One round, in this order:**
1. **Usage:** read the meter. Line = 14.3 % times the started days since Thursday 12:00. Over the line: only answer humans (WhatsApp, app switches, mail), no new work. Under 10 % times days: start more in parallel.
2. **Inputs first:** WhatsApp watcher, task app switches, mailbox. Every human reply is handled immediately (and supplier replies in the same turn, part 1 section 6).
3. **Accept finished helpers:** run their acceptance test yourself; never trust the report.
4. **Choose work without asking David:** the top open line of the queue. If none can start, think up the next 3 items yourself by one question: what brings us fastest to the first sale, then to 1,190 USD a day (David's goal: 500,000 USD profit by the end of 2027)? Each item gets a visible result and an acceptance test and goes to the bottom of the queue. At most 2 helpers at a time.
5. **Human tasks:** everything only a human can do (call, send to people David knows, accounts, money, signature) goes to the task app immediately with its full text. More tasks appear only through more real work, never invented.
6. **Waste watcher:** one line per round in the book: time, item, visible result (file, page, link, or "empty"), weekly usage. Stop rules: 3 rounds in a row without a visible result, or one item costing more than 1.5 times its estimate: loop off, one line to David with the reason. A round that only waits while helpers are running is noted "waiting" and does not count as empty.
7. **Chat:** silent, except a human reply, a new task in the app, a finished build, a stop. 22:00 to 08:00: no app notifications (except money or a customer); work may continue.

**Resource stops and two accounts (David, 2026-11-07 19:30):** every round first reads which account is active (Ultra, reset Thursday 12:00, or Max, reset Saturday 12:00) and holds it against the schedule (Ultra Saturday 12:00 to Wednesday 21:50, Max Wednesday 21:50 to Saturday 12:00). Ultra more than 2 points over its line: stop running jobs and resume them later. Machine load over 9, free memory under 20 % or disk under 30 GB free: no new runs, running ones continue. Full rules: https://dlichters.com/ai/ops/automation/01-contents.md section 3 and https://dlichters.com/ai/ops/automation/02-6-generation-2-the-5-minute-takt-for-porchnap-sept.md section 10.

**Why this design:** the earlier timed loops ran empty rounds, re-read huge contexts and asked the same question every 4 hours; the waste watcher plus "visible result or stop" is the guard against that. The first rounds on 2026-11-07 [MEASURED from the book]: 18:2x inputs checked, a provider cancellation confirmed, 2 runs active; 18:4x /ai published with about 160,000 words of our own knowledge and the blind test at 95 %; 19:1x the newest course chapter published and /ai split into 884 pages of at most 4,000 words; 19:3x copy buttons in the task app; weekly usage 37 % to 40 % over those rounds.

---

## 19. The task app ("Natural Intelligence", internally "Hebel"): writing a task

Mechanics (server, push, CLI, the 28-character title limit) are in the tools page section 5. These are the writing rules, all from David on 2026-11-06 and 2026-11-07:

- **Every task for David goes into the app.** Including texts for a lawyer, a parent or a phone call. In chat at most one sentence that it is in the app. (2026-11-07 15:50: a "send this text to the lawyer" block was put in chat instead; David: "Warum war die Aufgabe nicht in NI app????")
- **Only what the AI provably cannot do:** try first, then list. Never invent busywork. Never report the same task twice.
- **Title at most 28 characters** (one line), starting with the verb: "3 Discord-DMs senden", "Anwalt anrufen".
- **The grey text is complete:** "how you prepared it and exactly how I do it, so I never have to ask again". Where to tap, what to type, what to say, how long it takes, what happens after. Switching it on is David's yes to exactly that text, so the text must not contain anything he would not agree to.
- **Rank:** 1 = most important. Near deadlines first, then what unlocks money or other tasks. Re-check the whole order with every new task.
- **Timing:** no notifications 22:00 to 08:00 except money or a customer; never many tasks in quick succession (each fires a push).
- **Waking:** a waiting script in the background ends when a switch is flipped and wakes the chat; restart it after every wake.
- **Editing a task later:** change the task file directly; the server reads it on every request.

---

## 20. Copy blocks in tasks (since 2026-11-07 19:18)

David, 2026-11-07: at the very end of each text that must be copied there should simply be the word "Copy"; tapping it copies exactly that part. "Zum Beispiel würde dann jetzt in der Erklärung unter '3 Discord-DMs senden' dreimal in Blau 'Copy' stehen, für alle drei."

**How to write it:** in the grey text, put every piece David must paste somewhere between `[[copy]]` and `[[/copy]]`. Everything outside the markers is explanation.

```
Open Discord, search the user name, paste, send. 2 minutes.
1. To store owner A:
[[copy]]I saw your website ... (full message)[[/copy]]
2. To store owner B:
[[copy]]I saw your website ... (full message)[[/copy]]
3. To store owner C:
[[copy]]I saw your website ... (full message)[[/copy]]
```

**What the app does:** the markers are invisible; each block's text is shown, followed by a blue "Copy"; a tap puts exactly that block (trimmed of surrounding spaces and line breaks) on the clipboard and gives a short success vibration. The rest of the text is still selectable. Inline markdown (bold, links) works outside the blocks.

**Rules:**
- One block per thing to paste: each message, each domain name, each search term, each phone script. Never two messages in one block.
- The block contains only what gets pasted: no "Hi David", no instructions, no quotation marks around it.
- A block with an unclosed `[[copy]]` is shown as plain text: always close it.
- Messages in copy blocks for strangers still pass the second reader before the task is created (part 1 section 4); David sending it himself does not make an unchecked text acceptable.
- Domain names and other exact strings always go in a copy block (2026-11-02 a typo domain was bought from a retyped name).

Implementation (for rebuilding): the row's footer text is parsed for the markers; each block becomes a link with a private URL scheme and its index; the view's open-URL handler copies block n to the pasteboard and returns "handled"; any other link opens normally. Verified on 2026-11-07 on the real task text (3 blocks recognised) and installed on David's phone the same evening.

---

## 21. Research goes to Perplexity

Global rule (David, 2026-10-03): "Alles, was auch nur ansatzweise mit Perplexity gemacht werden kann, muss mit Perplexity gemacht werden. Ich möchte nicht, dass du unsere Usage auf Recherche verschwendest oder Fragen stellst, für die man nicht den Kontext vom Computer braucht." Web search and web fetch inside Claude are blocked in the settings on purpose. Every question answerable without our files (market, prices, rules, platforms, competitors, tools, taxes, deadlines) goes to the Perplexity bridge or into the research mailbox, never to an agent and never to the AI's own knowledge as a substitute. Our own pages are still measured with curl.

How to ask well: the question names the decision that depends on it, asks for source and date for every number, and requests the four answer levels (3 sentences, 15 lines, all details, takeover note with decision and tasks); read levels 1 and 2 unless the decision hangs on 3. For a number that decides money, ask the same question three times or to a second model and compare. Since 2026-09-29 questions may be concrete (our store, suppliers, prices). Never re-research what the lawyer or psychologist already told David (2026-11-06). Bridge mechanics and gotchas: tools page section 6.

---

## 22. Verification rules this page adds

The general verification rules are in working-rules section 11. Added here:

- **"Perfect" only after a side-by-side with the best competitors (2026-11-06).** Never call a store, page, ad or text "perfect", "done" or "as good as it gets" without having put it next to the best competing examples (for stores: about 10 competitor stores at 390 px) and having a separate judge confirm it. A self-assessment of quality without that comparison is worthless.
- **Live means sha equal.** After publishing, compare the live file's hash with the local one (part 2 section 16). A push exit code is not proof.
- **Look at 390 px yourself.** The chat opens the screenshots itself, not only the agent; on 2026-11-02 twelve ads were reported "approved" and nobody had opened one image (9 of 12 showed a bed without a dog).
- **Same product means same size.** On 2026-11-07 four videos of a giant bed were shown as our 40 to 70 cm bed; check the visible size in the still frame against our measurements.
- **A tool can destroy its own input.** Before trusting a test number, print and read five generated inputs.
- **Watch the protocol, not just the claim:** "submit clicked" is not a sent question (four research questions once stayed in the field); "sent" in a log is not a delivered message.
- **Never quote a number without its denominator and source;** never let a document quote a document (go to the mailbox, the console, the transcript).
- **Every fix gets one line in the mistakes list** with date, number and the new rule, and where possible an automatic check, so it cannot happen again.

---

## 23. Store building as a system (short; full version linked)

David, 2026-11-06 and 07: a store only counts (also as a time measurement) when it is built like this: find the best competitors, lay their stores side by side, take the best part from each, rework it with all repo knowledge, and run judge rounds until the strict judge says it is as perfect as possible without a test. It must be at least as good as our best previous store. Keep 10 comparison stores and the judge rounds; a store costs about 3 % of the weekly limit, "never save on stores"; faster only through parallel work.

The procedure in one view: competitor list ranked by active ads, run time and new ads in 30 days; capture each store at 390 px and note structure, offer, first screen, objection handling, trust parts, size choice, buy button; build through a build script with a fixed skeleton; course prompts for page texts; the legal list followed exactly; real reviews only, from provably the same product, average 4.7 to 4.8; repo knowledge round; critic loop (part 2 section 10); publish and prove live (part 2 section 16). Full steps 0 to 11, the skeleton, copy rules, images, reviews, 390 px checks and domain steps: https://dlichters.com/ai/ops/store-building.md . Name and domain rules: https://dlichters.com/ai/ourrules/shop-building.md .

---

## 24. Checklist: before, during, after any AI job

**Before**
- Is it the fastest way to the first sale? If not, why now?
- Who already sells this finished, at what price? (one line)
- Visible result named, acceptance test written, cost estimated in % of the weekly limit, meter read and under the line.
- Task text has frame, sources, working folder, permissions spelled out, limits, schema, privacy and no-loss blocks.
- Does anything here need a human (money, account, people David knows, rights questions, irreversible)? Then it becomes an app task with full text and copy blocks, now, not later.

**During**
- Builder and judge are different agents; the judge changes nothing.
- Messages to strangers: gate plus two-lens second reader; never people David knows.
- Watchers running (WhatsApp, task app); supplier replies answered in the same turn.
- Round book line written; stop at 3 empty rounds or 1.5 times the estimate.

**After**
- Acceptance test run by the chat itself; screenshots opened by the chat itself.
- Live hash compared; privacy scan passed for anything public.
- Report: what came out, what it cost, zero if zero, and the next item.
- New mistake? One line with date and number in the mistakes list, plus an automatic check.

---

Part 3 of 3 of "AI systems: how we run AI work so it does not make mistakes". Map of all parts: https://dlichters.com/ai/ourrules/ai-systems.md · Previous: https://dlichters.com/ai/ourrules/ai-systems/02-workflows-critics-blind-tests.md
