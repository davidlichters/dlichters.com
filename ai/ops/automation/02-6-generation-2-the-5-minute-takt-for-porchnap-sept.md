<!-- part of ops/automation.md -->
Part 2 of 2 of "Automation: the work loop, usage pacing, watchers, and what failed before". Map of all parts: https://dlichters.com/ai/ops/automation.md · Previous: https://dlichters.com/ai/ops/automation/01-contents.md

## 5. Generation 1: the month operation (Sept 2026)

Context: a B2B cold-email product ("Liquidationsradar", reports on dissolved companies for buyers of used equipment) while David was away for a month. Milestone in its core file: 1,000 EUR/month = 13 paying customers.

### Design (built 2026-09-16)

- launchd every 20 minutes runs a wrapper. The wrapper decides nothing about the work: it measures the situation, builds a task, calls `claude -p` with a core instruction file as system prompt, logs the run itself and sets a heartbeat.
- **Every round is a fresh head.** Measured claim in the design: an agent running for days in one context loses 13 to 85 % quality, and after compaction rule violations rise from 0 up to 59 %. A restart per round with the core re-injected avoids that. Memory = measured situation, last 14 diary lines, the task book. All files, nothing remembered.
- **Round types, computed not chosen:** HUMAN (a business replied: beats everything, answer only), CHECK (every 6th: re-run the proof commands of the last 6 rounds, nothing new), IDEAS (every 8th: an assigned pattern from a 107-item foreign catalog: 55 business models, 40 TRIZ principles, 12 role swaps; assigned, not chosen, none repeated before all were used; an idea must be a JSON patch that adds a field or deletes an assumption, else it is mere "variation"), THINK (every 24th: four attacks against the top lever, written down, no execution), WORK otherwise. Up to ~70 rounds/day possible, capped at 40. A WhatsApp message from David went on top of the next task and had to be acknowledged by command, else it came back.
- **Round structure:** situation, intention (one sentence what and why, one sentence which command proves it, written before working), one piece of work, proof (exactly one command, no semicolons or pipes, re-runnable blind, rc 0 while it still holds; run it and read the output).
- **Anti-self-deception:** the wrapper keeps the log, a hook blocks the round from touching the log, heartbeat and counters ("a ban written only in text is no ban"), intention before work, proof = command, visible gap counter (rounds that ran but wrote no line). A model-free re-checker re-runs old proof commands: an agent cannot grade its own work.
- **Anti-damage hook (PreToolUse on Bash/Write/Edit):** blocks `rm -rf` on root paths, `git push --force`, `git reset --hard`, DROP/TRUNCATE, payment and login pages, the run log, the alarm throttle. An empty `HALT` file stops everything.
- Services: round (20 min), dead-man (30 min), reply-inbox watcher (30 min), mail sending (6x/day), login keep-alive (08:30), daily line (20:00), `caffeinate` (Mac awake). David's part: enable Apple Events JS in Chrome, install the push app, lid open and on power, leave Chrome with WhatsApp open.

### Results [MEASURED]

- Delivered 74 to 78 mails/day (SMTP 250), 0 bounces, but seed tests showed Microsoft junk and Gmail "Updates" tab, so inbox placement was not proven. 28 to 31 rounds/day, mostly rc 0.
- **Wrong target:** rounds 75 to 84 were 10 of 10 internal work (locks, tests, checkers) and 0 changed anything a recipient sees, at 0 paying customers (2026-09-19). On 2026-09-30, 8 of the last 10 rounds were still internal; the impact meter itself had been reading no commits for 30 rounds because the commit title format changed, and reported "2 at the customer" when it was 0 to 1.
- 2026-09-30 08:55: paused at 14 % of the night's usage with 0 customers. Cold sending stopped 11:19 on David's word; alarms muted.

### Failures and their fixes

| Failure | What happened | Fix |
|---|---|---|
| Expired login | 2026-09-23 06:57 to 09-25 14:11: 18 rounds failed with "OAuth session expired and could not be refreshed", ~57 h without work, including 3 rounds owed to a buyer who asked for list and price. The alarm rang once, then never again. | Detector that rings until fixed; one-year token for scripts. |
| Weekly limit treated as error | Rounds printed exactly 69 bytes "You've hit your weekly limit · resets ..."; the wrapper phoned David twice on a Saturday ("please log in once") and sent 5 technical alerts until 03:46; the health check counted limit rounds as faulty. The limit also lifted earlier than announced. | Limit detector: never ring, retry every ~40 min. |
| Faked timestamps | 11 of 13 diary lines stamped after their own commit. | Diary tool writes measured time. |
| Inherited effort | All 2,038 calls on xhigh; 24 of 55 failed rounds at quota; 34.8 of 45.7 h without a round (09-25 to 09-27). | Effort set per round type, checked against the real session logs. |
| Prompt bloat | Task head 132 KB, working rounds fell to 0 to 8/day. A limit written only as a sentence was gone after 5 days. | Size meter with a hard limit in code. |
| Lost special rounds | Type derived from round number; rounds that died in 10 to 22 s still counted, so 96 rounds passed without a THINK round. | Per type a marker of the last successful run; missed runs caught up once (like anacron/systemd Persistent). |
| Aborted round leftovers | A 47-minute round died at the limit leaving three untested, uncommitted files the next 5 rounds never mentioned; 7 rounds cut by the 55-min timeout (rc 124, 0 bytes). | Handover: the next task states what the crashed round left (pattern from "Ralph loops": dirty tree with passing tests = probably done, failing tests = mid-flight). |
| Setting vs reality | A/B setting promised variant S, 152 deliveries, 0 were S, unnoticed by 84 rounds. | Assumption checker: every relied-on setting gets a shell check. |
| Human reply ignored | The first HUMAN round deleted the flag and worked on something else (2026-09-16 22:46); in August nine real replies rotted the same way. | The flag can only be cleared by a command that records the sent answer. |
| Chrome hijack | Helper Chromes captured AppleScript, WhatsApp looked logged out, alarms died. | Address David's Chrome by PID. |
| Pretty density, no customers | The system grew 300+ tools, checkers and meters around 0 customers. | An impact meter that forces customer work when too few rounds touch the customer; and, in the end, switching the loop off. |

---

## 6. Generation 2: the 5-minute takt for Porchnap (Sept to Oct 2026)

Context: Porchnap, a Shopify dog-bed store with Meta ads, goal 200,000 USD profit from 2026-10-01 to Christmas.

### Evolution

- 2026-09-28: a chat timer (`CronCreate`) every 20 to 30 min, then 10, then 5 minutes. Never as a scheduled cloud routine (David had one deleted immediately: "absolutely not as a routine, it should happen in the chat"). Chat timers live only in that session, fire only when the chat is idle, expire after 7 days, and die with a session change (3 rounds lost on 09-29); check the timer list after every restart.
- Output contract: after starting, write nothing in chat; only one result line per round (later up to 420 to 500 chars, never cut mid-sentence): `HH:MM <World|Escalation|Inside> Level <n>: <what is provably different> | Proof: <command, file:line or commit> | Yes open <n>`.
- 2026-09-30: moved to launchd at fixed minutes (:00, :05 ...), skip if the previous round still runs; each round published as a sentence "a 5-year-old understands" on a public page. Minute plan: each round type and each fixed job on its own minute so nothing collides (improver, normal, research, creative; big creative round in the background :30 to :42).
- Normal, research and creative rounds on Sonnet, improver on Opus.
- 2026-10-03 "permanent boss": instead of a fresh `claude -p` per round, boss rounds resumed ONE session (`claude -p --resume <id>`), and started a new session with a short handover once the context passed 150,000 tokens. An event folder (open > in progress > done; back to open on failure; given up after 3 tries) let a sensor start a round immediately instead of waiting for the next slot. An atomic start lock (`mkdir`) prevented two rounds at once.
- Money ladder: each round had to name the level of the money ladder it worked on; levels cooled down for 4 hours after work.
- 2026-10-14 16:26: **off** (David: "uses extremely much on all accounts"). A file `AUS` blocks the start script even against nudges from the watcher.

### Hard limits it ran under

Never send messages, spend money, change budgets, publish ads, change settings in Shopify/Meta/other accounts, enter passwords, log in or delete; instead a line in a yes-list, and even after a yes the action runs only in the chat where the yes was given. No theme publishing from rounds. Every number with a source or [SURE]/[PROBABLE]/[GUESS]. No computer use, no Chrome. Research only through the mailbox. Timeouts on every network call. Backups before overwriting.

### Failures

| Failure | What happened |
|---|---|
| Wrong work at night | Improver audit 2026-09-29 00:42: in a launch night only 2 of 6 rounds worked on the night plan; rule changes then got it to 5 of 5 "money-near", but 0 of 11 changed the real store or ad account, because only Timo could log in. More sheets brought nobody closer: the launch hung on three human clicks. |
| Creatives nobody used | By 2026-10-05: 111 ad creatives built, 0 live. David: "Something is going very, very, very wrong here." Rule: no new creatives until ads run; rounds only keep the store green and read supplier answers. David then judged the video ads "the worst ads I have ever seen". |
| Repeating questions | The same human question every 4 hours; the same blocker written to the lessons file 5 rounds in a row; the result line replaced by "WARNING ToolSuite" 6 of 11 times. |
| Things David had forbidden | Rounds kept raising items David and Timo were doing themselves (business manager, card, pixel, domain verification, test purchase). 2026-10-04: never mention them again, in any list or answer. |
| Billed the paid API | A key exported in the shell profile made `claude -p` bill the API; on 2026-10-01 93 of 94 rounds failed with "401 API key is invalid". |
| Hung round | One round hung 41 h on `git fetch`. |
| Relay cost | The chat relay cost ~20 % of a night (216 M cache-read tokens). |
| Editing a running script | Broke the running round ("unmatched quote"). |
| Sub-agents without permission | Agents built everything but did not publish or send ("a sub-agent from a script has no yes from the chat"); work went live 70 minutes late. Every workflow task that should publish or send must state the standing permissions explicitly. |

### What worked

Model-free sensors and the general watcher; the course judge replacing yes-lists (section 6 in `ops/tools.md`); the improver's habit of writing a checkable prediction ("check at 02:45: N3 ticked, file with at least 8 lines ...") and then checking whether its change worked.

---

## 7. Other expensive mistakes

- **Fleets:** 6 weekly points in about 2 hours (2026-11-03). No fleets with images in their context.
- **Parallel simulators:** 8 booted simulators hit the per-user process limit (2026-10-25): no shell, no terminal, no new app; stopping the workflows did not help because simulators keep running under launchd; the Mac could not be restarted remotely. Max 3 simulators; check process count before parallel work.
- **Parallel research on a shared account:** 12 to 17 parallel Perplexity runs made 70 % fail with "Unable to start session". Opening 14 ToolSuite tools in 16 minutes probably got the license key blocked [GUESS]. Few parallel runs, max 5 tool openings per hour.
- **Building on Claude's own ideas without an order:** the self-written book run (stopped by David), the invalid store-build measurement, an earlier USD/PayPal commitment in a supplier message. Each led to a rule: no own book; store builds only with the system; the send gate.
- **"Nothing to do" while a human step is open:** David's rule: never report "nothing to do"; fix what can be fixed immediately, name only the real human obstacle, and put it in the app. Never write "write X and then I repair it" (David 2026-10-25: "what a stupid sentence").

---

## 8. Design rules distilled from all of it

1. **Event-driven beats timed.** Model-free sensors, and the chat wakes only when a sensor exits or a helper finishes. No idle rounds.
2. **Every work item has an acceptance test written before work starts**, and the orchestrator runs it itself. A helper's report is never proof.
3. **Visible result or stop.** 3 empty rounds in a row = off. Cost over 1.5x estimate = stop.
4. **Customer-facing work first.** Measure the share of rounds that change something a customer, supplier or ad platform sees; internal tooling is allowed only when it unblocks that.
5. **Pace against the weekly meter**, cumulative 10 to 14 % per day, checked before every large start.
6. **Small contexts:** fresh chats with handovers at task boundaries, short prompts with a size limit in code, no relaying into long chats, no images in agent contexts, effort set explicitly.
7. **Humans get only true human tasks**, ranked, complete, once, in the Hebel app, never at night unless money or a customer.
8. **Hard locks in code, not rules in memory:** send gate, delete blocker, kill files, start locks, title length check. "Memory is not a lock."
9. **Scripts keep logs, time and counters**; the model never does.
10. **Explicit permissions in every delegated task** (what may go live or be sent, what may not), else sub-agents stop short.
11. **Never trust "it ran"**: verify the effect in the world (message arrived, thread created, page live at 390 px, deployed hash matches).
12. **One safety net outside the loop** (dead-man / general watcher) that does not die with it.

---

## 9. Checklist before starting any loop

- What exact, openable result does each round produce? If you cannot name it, do not start.
- Is the queue ordered by money impact, and does every line have an acceptance test and a cost estimate in weekly %?
- Current weekly usage vs the 14 % × days line?
- Which watchers are running (WhatsApp, Hebel)? Restart them after every wake.
- Are standing permissions and hard limits written into every helper task?
- Max 2 helpers, max 3 simulators, no images in helper context, no fleets.
- Kill file and stop rule in place? Book line written after the round?
- Anything for David: in the app, ranked, under 28-character title, complete grey text, not at night.

## 10. The permanent work loop (since 2026-11-07 17:15; moved here from ops/gaps-3-1.md)

(ops/gaps-2-1.md section 6 described the same loop in a shorter form; every point of it is in this version, so the two were merged here.)

**This replaces the event-driven "no alarm clock" motor described in `ops/automation.md` section 2.** That section is the trial design of 2026-11-06 to 2026-11-07 12:00. Its trial limits ("no timer, next round only when a helper finishes") no longer apply.

### Why it exists

David, 2026-11-07: "Why do I still have to hold your hand and write prompts all the time? ... everything we did today and yesterday, every prompt I wrote, you could have thought of yourself. ... It must be like a video game: you work so much and so fast that the app is always full of tasks I have to tick off for hours. But under no circumstances may anything unnecessary appear in the app." And the same day: "Why do I work only 1 hour a day instead of the 15 I have and want to work?" So: the AI invents its own work, and David only gets real human tasks, but plenty of them.

### Timer

- One round every 30 minutes **inside the chat**, created with the chat timer tool `CronCreate` (cron expression used: `13,43 * * * *`, i.e. minutes 13 and 43 of every hour; odd minutes avoid collisions with other jobs). Never as a scheduled cloud routine: David had one deleted on 2026-09-28 ("absolutely not as a routine, it should happen in the chat").
- Gotchas of chat timers [measured]: they live only in this one session, fire only when the chat is idle, expire after 7 days, and die with a session change (3 rounds were lost on 2026-09-29 that way). After every restart or new chat: list timers first; if empty, recreate. After 7 days: recreate.

### One round, in this order

1. **Usage check.** Read the weekly usage meter. Target so far = 14.3 % times the number of started days since the week start (Thursday 12:00; a day ends at 12:00). Above the target: only answer humans (WhatsApp, Hebel app, mail), start no new work. Below 10 % times days: start more in parallel (still max 2 helpers).
2. **Inputs first.** Check the WhatsApp watcher, the Hebel task app (switches David flipped) and the mailbox. Every answer from a human is handled immediately, in this round, before any building. A supplier message gets a reply in the same move (at least thanks plus what is still missing), through the send gate with a second reader. Reading and evaluating alone does not count as answering (mistake 2026-11-07 15:19 to 16:2x: a supplier wrote about formats and photos, the watcher woke the chat, the AI evaluated but never replied; David: "You again did not answer on WhatsApp"). After each wake, restart the watcher.
   - WhatsApp watcher (how to rebuild): a background script that reads the chat list in David's logged-in WhatsApp Web tab every 20 s, read-only, never brings a window forward, never interferes with a running send. It exits with "NEW <chat> [time] <preview>" as soon as the newest message in a chat is not from us; the exit wakes the chat. Own chats (To-Dos, David's own) do not count. Keeps a small state file (last seen per chat) and a log. Runs only while a chat is open.
3. **Accept finished helpers yourself.** Run the acceptance test of the queue line; never trust the helper's report. Pass: tick it with date. Fail: fix once, then mark "hangs" (also called "stuck") with the reason and move on.
4. **Choose work without asking David.** Take the top open line of the queue (ordered by money impact, each line with a cost estimate in % of the weekly limit and an acceptance test). **If no line can start, invent the next 3 items yourself** with one question: what brings us fastest to the first sale, then to 1,190 USD a day (the daily rate behind David's goal of 500,000 USD profit by 2027-12-31, set 2026-11-06)? Each invented item needs a visible result and an acceptance test, and goes at the bottom of the queue. Max 2 helpers at the same time. Before starting a new project David did not name, say one line first (2026-11-06). Not allowed even when invented: writing an own book (David 2026-11-06: "We do not write a book ourselves under any circumstances"), store builds that do not use the best competitor stores, repo knowledge and the Musk verdict.
5. **Human tasks.** Everything only a human can do (phone calls, messages to people David knows, accounts, money, signatures, eye judgement, product hunting, asking people) goes immediately into the Hebel app as a task with a full text: title max 28 characters, grey text complete enough that David never asks back, ranked (rank 1 = most important: near deadlines first, then what unlocks money or other tasks). More tasks may only come from more real work, never invented. Try first; never report the same task twice.
6. **Waste watcher.** One line per round in the book: time, item, visible result (file or "empty"), weekly usage. **3 rounds in a row without a visible result, or one item costing more than 1.5x its estimate: loop off, one line to David with the reason.**
7. **Chat.** Write only when: a human replied, a new Hebel task exists, a build passed, or a stop. Otherwise silent.

**Resource stops (David, 2026-11-07 19:30, motor rule file):**
- **Usage:** every round reads which account is active (Ultra or Max) and compares Ultra's weekly usage with its line (see the two-accounts rules in https://dlichters.com/ai/ops/automation/01-contents.md section 3). **More than 2 points over the line: stop the running jobs** (TaskStop) and resume them later from where they stopped (resumeFromRunId).
- **Machine:** load (uptime) **over 9**, or **free memory under 20 %**, or **disk under 30 GB free: start no new runs**; running ones continue.

Night: 22:00 to 08:00 no Hebel notifications (except money or a customer); work may continue.

### Limits that still apply in every round

No money, no new accounts, no passwords. Nothing to people David knows; companies only through the send gate. Delete nothing (working-rules section 17). Review collector locked until the lawyer answers. Never bypass a bot check. Meta: read only. Live campaigns untouched until their fixed reading time (Curlmoon: until Sunday 2026-11-08 06:10).


Part 2 of 2 of "Automation: the work loop, usage pacing, watchers, and what failed before". Map of all parts: https://dlichters.com/ai/ops/automation.md · Previous: https://dlichters.com/ai/ops/automation/01-contents.md
