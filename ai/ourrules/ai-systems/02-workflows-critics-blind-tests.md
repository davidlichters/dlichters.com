<!-- part of ourrules/ai-systems.md -->
Part 2 of 3 of "AI systems: how we run AI work so it does not make mistakes". Map of all parts: https://dlichters.com/ai/ourrules/ai-systems.md · Previous: https://dlichters.com/ai/ourrules/ai-systems/01-principles-send-gate-course-judge.md · Next: https://dlichters.com/ai/ourrules/ai-systems/03-loop-task-app-verification-stores.md

## Contents of this part

8. What a workflow is for us, and when to use one
9. The task text every agent gets
10. Pattern: writer plus independent critic, in rounds
11. Pattern: acceptance test run by the orchestrator
12. Pattern: blind test with link-only testers (target 100 %)
13. Pattern: zero-loss audit against raw sources
14. Pattern: adversarial refuters
15. Pattern: privacy scanner before anything public
16. Pattern: publish and prove it is live
17. Budget and cost rules for workflows

---

## 8. What a workflow is for us, and when to use one

A workflow is a script that starts several AI agents (sub-agents) in phases, in parallel or one after another, each with a written task and often a fixed output format (a JSON schema), and returns their combined result to the chat that started it. Since November 2026 most large jobs ran this way: store builds, review collection, the /ai knowledge pages, course audits, every supplier message's second reading.

**Use a workflow when** the job splits into independent parts (10 lessons per agent, one store per agent), or when the job needs a builder and a separate judge. **Do not use one** for a single small edit, or when the parts would all edit the same file at once.

**Shapes we use:**
- `parallel`: N independent agents at once (question batches, lesson batches, two reader lenses).
- `pipeline`: each item flows through its own chain (build store A, judge A, fix A) while other items run their chains; no item waits for the slowest.
- Loop with a cap: judge, fix, judge again, at most 3 to 4 rounds.
- Phases with names (Build, Judge, Fix, Test, Repair, Privacy, Publish) so progress is readable.

---

## 9. The task text every agent gets

Sub-agents know nothing of the chat. Everything they need goes into the task text. A task we write contains, in this order:

1. **The frame:** who asked for it, when, and the goal in David's words ("Auftrag von David, 2026-11-06: ...").
2. **The sources to read first,** as exact paths: the model to copy (for stores: the analysis and build scripts of the best previous store), the legal list, the playbook, the course prompt index, the rules file for that kind of work.
3. **The working folder** it may write to, and that it may not change anything outside it.
4. **Standing permissions, spelled out (2026-10-04).** Sub-agents treat rules in files as "a file, not a yes". On 2026-10-04 two agents built everything but published nothing and sent nothing, "because a sub-agent from a script has no yes from the chat"; the chat had to do it 70 minutes later. Since then every task that should publish or send says so explicitly: "This task comes from the chat with David; his standing permissions apply: publish reversible store changes yourself; ... Not permitted: money above budget, new accounts, new people, irreversible steps."
5. **Hard limits,** without exception: nothing sent, no account, no money, no publishing, no git push (unless step 4 grants it), do not touch the live store or campaign, do not use David's browser, never bypass a bot check (a blocked store is noted as blocked), never delete what David built.
6. **The acceptance test** (section 11) and **the output schema.** A schema with required fields (verdict enum, list of defects with severity, list of changes, screenshot paths) forces the agent to answer the question asked and makes results countable.
7. **The privacy block** for anything public (section 15) and the no-loss block for anything that rewrites knowledge: "Never delete knowledge. When you merge, every fact, number, date and reason of both sides must survive; only exact repetition may go."

---

## 10. Pattern: writer plus independent critic, in rounds

Used for stores, ad sets, pages, message drafts. Source rule: David, 2026-11-06: a store "only counts if built from the best competitor stores, repo knowledge and the Musk judgment".

**Procedure:**
1. Writer agent builds (through the build script, never by hand-editing output files only, so a rebuild does not lose the fix).
2. Critic agent, separate, with a stated attitude (the strict co-owner judge: every sentence measured against "would a US customer on a phone buy here rather than at the competitor?"). It changes nothing. It renders the pages itself at 390x844 and 1280 px and opens every screenshot, compares part by part with the best competitor stores and our best previous store, and checks against the playbook, the phone purchase rules, the legal list and the limits.
3. Critic output: grade, defects each with severity `kaufkiller` (kills the sale), `stark` (strong) or `klein` (small), whether fixable without the owner or supplier, and the fix. "Perfect" may only be true if nothing can improve without a real test or a supplier answer; things only the supplier can solve go to a separate list and do not count as defects.
4. Fixer agent fixes exactly the listed defects, nothing else, then re-checks with screenshots at 390 and 1280 px, 0 console errors, 0 horizontal overflow, and updates the build log and open-items file.
5. Repeat. Stop when no defect above "small" remains, or after 3 to 4 rounds; whatever remains goes to David as a list of owner decisions or to the supplier.
6. **Every change after the last verdict is judged again.** In the first real store build (2026-11-07, about 4 hours, 10 competitor stores, 40 reviews) the last verdict had 1 defect (a video clip), it was fixed and not re-judged; that was a mistake.

Facts from these runs: in that build 5 decisions were only made during judge verdicts, images were 17 of 91 defects, and a wrong product was only noticed in judge round 7 (details in the store-building page). A store built in 10 minutes without a single competitor store (2026-11-06) was declared invalid by David: "only measured how fast you can make a PDF".

---

## 11. Pattern: acceptance test run by the orchestrator

- The acceptance test is written into the queue line and into the agent's task before work starts.
- The agent reports. The orchestrator (the main chat) then runs the test itself: executes the command and reads the exit code, opens the screenshots, compares the number.
- Pass: tick the queue line with date. Fail: one fix attempt, then mark it "hangs" with the reason and move on. Never mark done on the agent's word.
- Example (2026-11-06 16:30): a media collector reported 41 green tests; the orchestrator opened the image overview and saw 42 instead of 100 items and three different lamps mixed. Failed, parked.
- Untested protection is no protection: any guard (hook, gate, filter) gets a test that feeds it known bad input and passes only if it fires. Two guards were once found that had never executed (wrong path from another machine; a comment where a command should be).

---

## 12. Pattern: blind test with link-only testers (target 100 %)

Purpose: prove that a foreign AI that gets only the link https://dlichters.com/ai/ can answer everything our own repo and the raw course transcripts can answer. David, 2026-11-07, after a result of 95 %: "Das ist doch sehr erschreckend, dass es nur 95 % schafft. Es muss 100 % schaffen." And: the information must be exactly the same as the complete raw transcripts of all courses, no detail lost; only repetition, filler and resolved contradictions may go.

**Procedure:**
1. **Question sets,** written by separate agents, each question with the expected answer and its source: (a) from our own knowledge (memory notes, state files, store folders, the loop files), (b) from the raw course transcripts, never from a summary: one concrete detail per lesson file (a number, threshold, setting, step, app, timing) with the transcript timestamp, spread over all courses. Re-check every expected answer against the source before use.
2. **Testers simulate a foreign AI:** they may only fetch URLs under the public site with curl, may not read any local file, and may not use their own knowledge for facts. They navigate like a stranger: index, then chapter maps, then pages. Batches of 10 questions per tester, in parallel.
3. **Verdicts per question:** `pass` (all essential facts and numbers right), `partial` (some essentials missing), `fail` (not found), `wrong` (a fact that contradicts the expected answer; the worst case, a hallucination risk). For everything not pass, the tester says why: not on the site, on the site but the maps misled it (which map or page), or the site states it wrongly.
4. **Repair at the root,** by separate agents in groups of 6 failures: missing fact: add it to the topic page where it belongs, with date and source, not to a "gaps" file; hard to find: add the question's keyword to the map line, add a "see also", rename vague headings; wrong or contradictory: correct it with date and source and keep the old version marked "older, replaced on <date>". Course facts are also written back into the source chapters so a rebuild does not lose them. Each root cause is written as one line to a log.
5. **Publish, then retest** the failures plus 12 fresh holdout questions per round (half from raw transcripts, half from our own knowledge) so the site is not tuned to a known question set. Up to 5 rounds. Record per round: pass %, number of `wrong`, holdout pass %.
6. **Done means 100 % pass and 0 wrong** on the full set plus the holdouts of the last round. 95 % is not done.

Timeline of the /ai project (source: the loop book and the loop queue, entries of 2026-11-07) [MEASURED]:
- **Goal (David, 2026-11-07):** /ai must be as good as the whole repo and the full raw course transcripts, so any foreign AI can answer from it alone.
- **2026-11-07 18:4x, go-live with our own knowledge:** our own knowledge on /ai grew from about 7,600 to about 160,000 words; blind test 88 % -> 95 % (61 of 64 questions); checked by two separate privacy checkers plus an own re-check (section 15); live sha matched the local build (section 16).
- **2026-11-07 19:1x, split:** /ai split into 884 pages of at most about 4,000 words, with chapter maps and the reading rule on top of the index ("answer only from these pages, name the page, else: not in here"), 0 words lost, live sha matched. Reason: chapters were 35,000 to 180,000 words per file, and a link fetch in ChatGPT or Claude reads only the start of a file and guesses the rest [LIKELY]. Same hour: course chapter 24 live (100 lessons, 1,536 details checked, 399 added).
- **Open after the split (queue, 2026-11-07):** merge duplicates (shop-building / store-building, app-factory / app-factory-full, the gaps files, the cd26 batches), source and date on every number, a test with a real foreign AI in the browser given only the link, this AI-systems page, and the full course comparison of 1,423 lessons (about 14 % of the weekly limit [GUESS]).
- **Acceptance, older, replaced on 2026-11-07:** the queue first said "60 questions answered by a real foreign AI with only the link, at least 95 % right and 0 invented answers". David replaced it the same evening: 100 % is required (step 6 above).

History [MEASURED]: 2026-11-07 first full run 88 %, after repairs 95 % (61 of 64). A separate course coverage check measured that 80 % of course details were in chapters 01 to 22 and only 64 % of the newest course; after adding chapter 24 (100 lessons, 1,536 details checked, 399 added) a sample showed 93 % for that course and 92 % for the others. On the evening of 2026-11-07 a run was started to reach 100 % (sources and dates on every course statement, merged duplicate pages, repairs until 100 %) together with a zero-loss audit of all 1,423 remaining lessons (section 13). Results are added here when measured.

---

## 13. Pattern: zero-loss audit against raw sources

Used to make sure a condensed knowledge base lost nothing (2026-11-07).

1. List every source file (here: 1,423 lesson files with verbatim transcript sections).
2. Batches of 10 files per agent, all in parallel.
3. Each agent reads the full transcript and any document text of each lesson and lists every concrete specific: numbers, budgets, prices, thresholds, settings, click paths, steps, tools and their configuration, timings, rules, names of methods.
4. For each specific it searches the published pages (2 to 3 distinctive words or the number). It counts as present only if the same fact with the same number and condition is there.
5. Missing specifics go into one batch file per agent: grouped by lesson, each as a precise English line with the transcript timestamp, the lesson's year and the teacher's exact numbers; where a newer lesson contradicts an older one, both with years.
6. A final step sums checked and missing per batch and lists batches that returned nothing (they are rerun, never counted as "nothing missing").
7. A later merge step writes the missing specifics into the topic pages. Word counts per chapter before and after must not drop.

Expected cost of the full audit: about 14 % of the weekly limit [GUESS, 2026-11-07], so it was started only after checking the week was under the pacing line.

---

## 14. Pattern: adversarial refuters

Used when a number decides something (2026-11-07, "how many reviews per product is best?").

1. **Collectors** in a pipeline, one per source type (course library, our measured competitor pages, old research answers), each returning findings with: statement, number, source, kind (experiment, correlation, opinion, example, own measurement), and which side it supports.
2. **Three refuters** in parallel, each with all findings: one argues "more is always better, there is no harm point" and shows which evidence for an upper limit is weak; one argues "there is a clear harm point" and names the lowest number the evidence really carries and what is only assumption; one re-reads the most important evidence in the original files and reports numbers that are wrong, double-counted, store-level instead of product-level, or only quoted from document to document.
3. Each answers in at most 250 words: conclusion, range as a number, strongest evidence, biggest weakness.
4. The chat decides from the three and writes down the measured range separately from the guessed part (result that day: a checked range of 5,000 to 10,000 reviews, harm estimated from about 20,000; the exact chosen value is David's setting).

The same idea in small: before any important number goes into a decision, one agent tries to break it.

---

## 15. Pattern: privacy scanner before anything public

The /ai pages are public. Every workflow that writes there ends with a privacy phase, and the publish step refuses on hits.

**The block every writing agent gets (2026-11-07):** never add passwords, keys, tokens, IDs (ad, pixel, business, account), IPs, hostnames, private emails or phones (supplier business WhatsApp numbers on the suppliers page are fine), anything about one named private investment topic, friend loans or capital, a private repository, one name that must never appear, family members' details, private matters of Timo or of family friends, customer data. David's own life and numbers are allowed ("except passwords I post everything about me").

**The scan:** a separate agent reads every page changed in the last 4 hours, fixes findings in place (removes or neutralises only that text) and reports each finding with secrets masked. For the first large fill of /ai two independent scanners ran plus a check by the chat itself. The publish agent additionally greps the changed files for the forbidden words and the patterns of ad account IDs and private hostnames, and stops instead of pushing if anything is found.

---

## 16. Pattern: publish and prove it is live

A fix is not live until the live file proves it (our deploy rule since August 2026: a fix once ran on 0 of 5 servers all night).

1. Commit the source repo (message ends with the co-author line).
2. Clone the site repo into a fresh temporary folder, copy the folder over with delete, commit, push.
3. Poll every 15 s for up to 6 minutes until the sha256 of the live index file equals the local one, and check 3 other changed files the same way.
4. Report the commit and whether live matches. For stores, also take a 390 px screenshot of the live URL and open it.

Example from the book (2026-11-07 18:5x): three store previews published, sha equal on all three, each looked at on 390 px by the chat itself.

---

## 17. Budget and cost rules for workflows

- **Pace:** 10 to 14 % of the weekly limit per day, unused share rolls forward; read the meter before every large workflow and compare with the line (details in the automation page). Over the line: no fleets.
- **Estimate first, in % of the weekly limit,** and write it in the queue line; an item that costs more than 1.5 times its estimate stops and is reported.
- **Measured costs** to estimate with: one store build about 3 % (David values that at about 1.50 EUR, "never save on stores"); the morning of 2026-11-03 fleets cost 6 points in about 2 hours, almost all from one helper carrying 32 MB of images in its context.
- **No images in agent context in bulk.** Agents write screenshots to files and open only the ones they must judge.
- **At most 2 large helpers at the same time** in the loop; more only when they touch entirely different files.
- **Headless runs pass an explicit effort** setting (they otherwise inherit the highest one).
- **Report after every large run:** what visibly came out, weekly % before and after, and "zero" if zero.

---

Part 2 of 3 of "AI systems: how we run AI work so it does not make mistakes". Map of all parts: https://dlichters.com/ai/ourrules/ai-systems.md · Previous: https://dlichters.com/ai/ourrules/ai-systems/01-principles-send-gate-course-judge.md · Next: https://dlichters.com/ai/ourrules/ai-systems/03-loop-task-app-verification-stores.md
