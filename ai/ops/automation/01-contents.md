<!-- part of ops/automation.md -->
Part 1 of 2 of "Automation: the work loop, usage pacing, watchers, and what failed before". Map of all parts: https://dlichters.com/ai/ops/automation.md · Next: https://dlichters.com/ai/ops/automation/02-6-generation-2-the-5-minute-takt-for-porchnap-sept.md

## Contents

1. What David wants from automation (and the bar it must clear)
2. The current design: the motor (since 2026-11-06)
3. Usage pacing rules
4. Watchers: cheap sensors that wake the chat
5. Generation 1: the month operation (Sept 2026), design and failures
6. Generation 2: the 5-minute takt for Porchnap (Sept to Oct 2026), design and failures
7. Other expensive mistakes: fleets, parallelism, shared accounts
8. Design rules distilled from all of it
9. Checklist before starting any loop
10. The permanent work loop (since 2026-11-07 17:15)

---

## 1. What David wants from automation

- 2026-11-06: "work extremely productively and tell me as soon as there is a task like the sensor ... without a pause until we have used the 14 % of the day."
- Same day, a few minutes later: "extremely careful ... so far every takt was less productive than manual prompting." On another account a whole 200 USD plan was used up in 30 days and, looking back, the run had produced nothing.
- 2026-11-07 (the request behind this page): why does he still have to hold Claude's hand and write prompts, when every prompt of the last two days could have been thought up by Claude itself? Build a loop, and watch on the side that no time and no tokens go into pointless things. His only job should be the tasks in the Natural Intelligence (Hebel) app. It should feel like a video game: Claude works so much and so fast that the app is always full of tasks he ticks off for hours, but nothing unnecessary may ever appear in the app.

**The bar:** a loop is only good if it beats manual prompting on visible results per usage point. Usage is not progress; a report about work is not a result. Every round must end in something you can open: a file, a page, an image, a build, a sent message, a measured number.

---

## 2. The current design: the motor (since 2026-11-06)

**Older, replaced on 2026-11-07 17:15** by the permanent 30-minute work loop, section 10 in part 2 (https://dlichters.com/ai/ops/automation/02-6-generation-2-the-5-minute-takt-for-porchnap-sept.md), because David no longer wanted to write prompts himself. The trial limits below ("no timer, next round only when a helper finishes") no longer apply; the rest is kept as the reason the loop looks the way it does.

**Update 2026-11-07 17:15 (newer than this section):** David asked why he still has to write prompts; the motor became a continuous loop: a chat timer every 30 minutes (minutes 13 and 43), the AI thinks up its own next items when the queue is empty, a waste watcher in the book stops the loop after 3 rounds without a visible result. The "no alarm clock" principle and the trial below are superseded. Current procedure: https://dlichters.com/ai/ourrules/ai-systems/03-loop-task-app-verification-stores.md section 18.

### Principle

**Event-driven, no alarm clock, no idle rounds.** The next round starts only when a helper finishes and the chat receives its completion notice (a background process ending wakes the chat). Never a scheduled routine. The "researcher" (a big autonomous research run) stays off until David says otherwise. No "ultracode", no agent fleets.

Why no timer: the old timed loops ran empty rounds, re-read huge contexts every few minutes and asked the same question every 4 hours. Why not headless `claude -p` in the terminal: it hangs on the same weekly limit of the Max account, so it cannot run without the chat anyway.

### Files

- **MOTOR:** the rules below.
- **Queue for Claude (SCHLANGE):** ordered by impact. Each line: date, build number, short name, estimated cost in % of the weekly limit, and an **acceptance test** that defines done. Example lines (2026-11-06): "Build 1: input sheet, calculator, gate (2 %). Acceptance: the Curlmoon values give 35.22 / 29.60 / 59.20 with the old prices; below 70 % contribution or below 60 USD is rejected." "Build 4: image pipeline (8 %). Acceptance: David passes 9 of 12 on a foreign product." Lines get [x] with a date, or "hangs" with the reason.
- **Book (BUCH):** one line per round: time, item, visible result (file or "empty"), weekly usage before and after.
- **David queue:** only what Claude cannot do, sorted by deadline and closeness to money. These become Hebel tasks in the app.

### One round

1. Read the usage meter. Limit = 14 % times the number of started days since the week start (Thursday 12:00; a day ends at 12:00). If the week's usage is over that line: start nothing, write nothing in chat, round over.
2. If a helper from the last round still runs: start nothing new, unless a second item touches entirely different files. At most 2 helpers at the same time.
3. Check finished helpers: **run the acceptance test yourself, never trust the helper's report.** Pass: tick it in the queue. Fail: fix once, then mark "hangs" with the reason and move on.
4. Start the top open queue line in the background, with its acceptance test written into the task.
5. One line in the book.
6. Check the David queue (below).

### Human tasks

- Go to the Hebel app with a title of max 28 characters and a grey text so complete that David never asks back. Switch on = his yes to exactly that text. Rank 1 = most important: near deadlines first, then what unlocks money or other tasks; re-rank everything with each new task. While the waiting script runs, each flipped switch wakes the chat immediately.
- Only what Claude provably cannot do: try first. Never invent busywork. Never report a task twice. No notifications 22:00 to 08:00 except money or a customer. Sleep stays 8 to 10 hours.
- Examples of real human tasks on 2026-11-07 (about 6 hours of them): send a support text to the research tool's Discord (2 min), approve a dialog on the Mac (1 min), a one-word standing yes for creating paused campaigns, a call to the lawyer with a prepared text, setting up a neutral second store (domain, Shopify, payments, business and ad accounts, Instagram, Facebook, SMS: 60 to 70 minutes in one go), clarifying money before day 1, a yes/no on wave 1 with a spending cap.

### Chat behaviour

Silence is normal. One line only for: a new task for David now, a build passed, a stop.

### Stop rules

- 3 rounds in a row without a visible result: motor off, tell David why.
- An item costs more than 1.5 times its estimate: stop and report.
- No fleets carrying images in their context.

### Limits (as of 2026-11-06)

No money, no new accounts, no passwords. Nothing to people David knows; companies only through the send gate. Delete nothing. The review collector locked until the lawyer answers. Never bypass a bot check. Meta: read only. Certain live campaigns not touched until a fixed reading time.

### Trial and status

Trial until Saturday 2026-11-07 12:00: passed only if builds 1, 2 and 9 passed their acceptance (checked by Claude itself) and the week used at most 5.5 points above base load (plan: total 23 %, start 16 %). Otherwise motor off, tell David the number, back to manual prompting. Ends in any case Thursday 2026-11-12 12:00.

What the book shows by 2026-11-07 [MEASURED from the book]: builds 1, 2, 2b, 9, a dry run of the campaign build (6), the order-value plan and build 5 (US mode) passed with self-checked acceptance between 13:50 and 16:00 on 2026-11-06, while the week moved from 16 % to 19 to 20 %. Build 8 (media collector) failed its acceptance (42 of 100, mixed products) and was parked. Build 3 (product supply) hung on 1 of 15 candidates passing the gate. A one-hour run on a self-written book was stopped by David at 21:1x ("We do not write a book ourselves under any circumstances") because it was Claude's idea, not an order. A store build measurement was declared invalid by David because it used 0 competitor stores and not the system ("only counts if built from the best competitor stores, repo knowledge and the Musk verdict"). The final trial verdict is not recorded in the sources at the time of writing.

---

## 3. Usage pacing rules

### Plan arithmetic

- Weekly limit is the binding limit, not the 5-hour window. Max 20x is about 6x Pro per week, Max 5x about 3.5x Pro (David's table, 2026-09-19). Weekly Sonnet hours: Pro 40 to 80, Max 5x 140 to 280, Max 20x 240 to 480. "20x" only describes the 5-hour window; calculating with 20x overstates capacity by more than 3x.
- Per euro Pro buys the most hours; one Max 20x account is the most one person can legally hold. David accepted the ban risk of using several accounts (2026-10-06).
- Auto-reload of API credit is on, so an empty balance stops nothing; spending caps are the only brake on paid API use.

### Daily pace (David, 2026-11-06)

"Every day 10 % to 14 % of the limit. If day 1 was only 10 %, day 2 may use 18 % if needed."

- The week runs Thursday 12:00 to Thursday 12:00 (Berlin).
- Cumulative account: by day n, usage at most 14.3 % × n, at least 10 % × n. Unused budget rolls forward.
- Before every large run, read the meter and compare with this line. Under the line: add work from the queue, but only work with a visible result. Over the line: no fleets, small work only, at the limit only watchers and readings.
- Measured 2026-11-06 09:23: 11 % after 0.9 days = 12.4 %/day, inside the range. Base load (other chats, apps) estimated at 5 %/day [GUESS, unmeasured].
- Planned week (2026-11-06): builds total 35.5 %, week ending at 71 % with 27 points reserve; at 1.5x cost per step 85 %, still inside. After the build phase: one trial max 7 %, so with base load 12 %/day one trial per day fits; above 10 % per trial only every second day.

### Two accounts: Ultra and Max (since 2026-11-07)

David, 2026-11-07 19:30 and 19:50: there are now two Claude accounts, each with its own weekly limit.
- **Ultra** resets Thursday 12:00 (Berlin) and has 1.7x the weekly amount of Max.
- **Max** resets Saturday 12:00 and is 37 % of the total amount (about 2.6 days of work).
- **Plan (calculated by the AI, 2026-11-07):** drain each account right before its own reset. Max runs Wednesday about 21:50 to Saturday 12:00 (38.6 % of Max per day); Ultra runs Saturday 12:00 to Wednesday 21:50 (22.7 % of Ultra per day). Both windows lie inside each account's own week.
- **Transition week:** Ultra stood at 40 % on Saturday 2026-11-07 19:45; the remaining 60 % lasts until Wednesday 2026-11-11 21:50 (14.6 % per day). Ultra line for that week: Sun 19:30 55 %, Mon 19:30 70 %, Tue 19:30 84 %, Wed 21:50 100 % (linear between the points). From Wednesday 21:50 Max is used in full.
- **Every loop round** first reads which plan is active (Ultra or Max) and holds it against this schedule; if it does not match, one line to David. Switch reminders sit in the open-items file (2026-11-11 21:45 and 2026-11-14 11:55). More than 2 points over the Ultra line: stop running jobs (resume later); see the loop stops in https://dlichters.com/ai/ops/automation/02-6-generation-2-the-5-minute-takt-for-porchnap-sept.md section 10.
- The 10 to 14 % daily pace above and the 80 % rule below still apply.

Sources: AI memory file "verbrauch-gleichmaessig" and the motor rule file, both 2026-11-07.

### What actually eats usage (measured)

- **Re-reading long chats.** 30-day token balance (2026-11-01): 69 % of the load is re-reading long conversations, output including thinking only 8 %. The big lever is context size, not thinking depth. **Effort level barely matters, keep it at max:** it went briefly to high on 2026-11-01, then back to max after David asked "will Claude get dumb then?", because it saves hardly any limit (memory file "einstellungen-limit", 2026-11-01). A chat cannot lower its own effort; only David can (2026-11-03).
- **Compaction setting history:** at 200k auto-compaction a chat compacted 27 times in one afternoon, on average every 7 minutes, 41 minutes of standstill total, with 121,000 tokens already used after each and only ~50,000 left to work; it felt "stuck". Since 2026-11-02 the window is 500,000 (David 2026-11-05: "500K as default for all chats"), at about 1.5 to 2x usage per step [GUESS]. David rejected helpers on Sonnet and compaction at 300k (2026-11-05): "would save less because we have to do everything 5 times." Opus and 500k stay; save only without quality loss. Do not lower without his word. At every big task boundary, start a new chat with a handover anyway.
- **Agent fleets with images in context:** 2026-11-03 05:31 to 07:47 cost 6 points of the weekly limit, almost all from workflow fleets (one ad helper carried 32 MB of images) plus a 400k chat. At 97 % of the week David said the last 3 % had to last 2 days; fleets were stopped and two hourly background jobs that called Claude on the main account were unloaded.
- **Chat relays of a background loop:** a 5-minute loop whose output was relayed into David's large chat cost about 20 % of a night (about 216 million cache-read tokens), because every relay re-read the whole conversation. A fresh, empty chat reads a few thousand per relay.
- **Inherited effort:** headless runs without `--effort` inherited `xhigh` from David's own settings: 2,038 of 2,038 model calls (2026-09-28).
- **Huge prompts:** the month operation pasted the head of its task book into every round; the prompt grew from 26 KB (09-22) to 166 KB (09-27), 132 KB of it that head, and working rounds per day fell from 24 to 28 to 0 to 8, almost all dying at the session limit.
- **Quota rule history:** on 2026-09-29 David once said the weekly limit did not matter ("if we need more, we buy Enterprise") and the loop was sped up to every 5 minutes; that was reversed by 2026-09-30 (paused for the weekly limit) and fully on 2026-10-14 (loop off: "uses extremely much on all accounts"). The rule now is the 10 to 14 % pace.

### Reporting usage

Every big run reports: what visibly came out, what it cost (weekly % before and after), and says openly when the result was zero.

---

## 4. Watchers: cheap sensors that wake the chat (incl. how Claude learns about new Curlmoon orders: the Sensor app)

Pattern: **a script without any model** checks the world on a timer and either writes a file or **exits** when something needs Claude. A background process exiting wakes the chat; the chat acts, then restarts the watcher. This costs zero tokens while nothing happens. Every watcher has an off file and logs its own state.

| Watcher | Interval | Wakes on | Notes |
|---|---|---|---|
| WhatsApp watcher | 20 s | new message not from us in any non-own chat | Collects for 180 s of quiet, then exits with all lines. Never touches a running sender. Clears leftover search text. Restart after every wake. |
| Hebel waiter | 5 s | a switch flipped in the app | 5-line loop counting event-file lines. Restart after every wake. |
| Store watcher (Curlmoon) | 30 min (launchd) | campaign stopped, or a purchase | Reads Meta through David's logged-in tab; alerts once per event at level 2; end date built in. Older: until 2026-11-06 it also read Shopify orders through the tab; replaced on 2026-11-06 by the Sensor (next row), so new orders no longer need an open Chrome tab. |
| Sensor (Curlmoon Shopify orders, no Chrome tab needed) | read by the store watcher | every new order in the Curlmoon store | A small custom Shopify app ("Curlmoon Sensor"), read-only (orders, customer, staff and store data). David approved the install via his task app on 2026-11-06; installed 15:42; David pasted its client key himself at 15:45 because the AI may never paste keys; check run OK, 0 orders read; the Shopify Dev Dashboard shows Curlmoon. It reports every order immediately and decouples the Shopify part from the Chrome tab. Source: Claude work log 2026-11-06 15:42 and David's queue (motor BUCH.md, DAVID.md). |
| General watcher | 1 to 5 min (launchd) | loop stale or failing 3x, a hung round (> 25 min: killed), research tool dead (6 failures in a row and 2 h without success), Chrome missing (restart it in the background), disk < 10 GB (and < 30 GB: run simulator cleanup), repo not updated for 2 h | Built because the health check ran only inside the loop: on 2026-10-01 93 of 94 rounds failed and then one round hung 41 h on `git fetch`, and the safety net died with the loop. Only network call: `git ls-remote` with timeout. |
| Event sensor | 1 min | new supplier WhatsApp message (chat-list preview only), new research answer file, foreign commit | Bundles: a second event of the same kind (same chat) is appended to the waiting one, so 3 messages during a running round make 1 follow-up round. Tool problems (WhatsApp not ready, GitHub unreachable) are not events, they go to the health board. "List read" is only ok if every supplier is in the list. |
| Research mailbox | 10 s | a new question file pushed to the shared repo | `git ls-remote` only, starts the question ahead of the queue, commits the answer. |
| License watcher | 2 to 15 s | research extension asking for its key | Max a few activations; backs off 10 min after 3 rejections. |
| Dead-man switch | 30 min | heartbeat older than 90 min, services not loaded, alarm path closed | Runs as its own service, depends on one file only, falls back to plain `curl` to the push service if node is broken. "The thing most likely to fail silently is the thing that should report failures." Two of seven cron agents in a documented case were dead for 18 days without the dashboard noticing. |
| Reminder companion | 10 min | dated items for David | No model. |
| Situation page | 30 min | (writes, never wakes) | One page under 5,000 chars built from measured files. |

**Silence vs failure:** a low-priority daily one-line push at 20:00 existed only so David could tell "quiet" from "dead".

---

Part 1 of 2 of "Automation: the work loop, usage pacing, watchers, and what failed before". Map of all parts: https://dlichters.com/ai/ops/automation.md · Next: https://dlichters.com/ai/ops/automation/02-6-generation-2-the-5-minute-takt-for-porchnap-sept.md
