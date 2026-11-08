<!-- part of ourrules/ai-systems.md -->
Part 1 of 3 of "AI systems: how we run AI work so it does not make mistakes". Map of all parts: https://dlichters.com/ai/ourrules/ai-systems.md · Next: https://dlichters.com/ai/ourrules/ai-systems/02-workflows-critics-blind-tests.md

## Contents of this part

1. The six principles behind every system
2. Where the rest is already written (do not look for it here)
3. The send gate ("Sendeschleuse"), done by hand
4. The second reader ("Gegenleser"), done by hand
5. Who gets a message at all, and in which language
6. Supplier messages: the watcher and the same-turn reply
7. The course judge ("Kursrichter"), done by hand

---

## 1. The six principles behind every system

Each principle exists because its absence cost us something measurable.

1. **Memory is not a lock (2026-11-06).** The rule "think five rounds against David before any message" existed since 2026-09-08 and was skipped on 2026-11-06 08:12, when a supplier message fixed "invoices in USD, PayPal is easiest" without any cost comparison (withdrawn 08:18). A rule that only lives in a notes file is read when the AI remembers to read it. Since then every rule that protects something important is built into the tool that does the dangerous step (the send tool refuses to send), and the tool has a self-test that feeds it known bad input.
2. **The one who wrote it never approves it (2026-09-01, sharpened 2026-11-06).** A writer agent cannot judge its own text, page, store or code. Every output that leaves the machine is checked by a separate agent that did not build it and sees only the result plus the rules. "Never approve your own check card."
3. **Done is defined before work starts (2026-11-06).** Every task carries an acceptance test written before the work (a command, a number, a screenshot to open). The orchestrator runs that test itself after the helper reports. The helper's report is never the proof. Example acceptance lines from the queue: "the Curlmoon values give 35.22 / 29.60 / 59.20 with the old prices; below 70 % contribution or below 60 USD is rejected"; "David passes 9 of 12 on a foreign product".
4. **Usage only against a visible result (2026-11-06).** "Verbrauch ist kein Fortschritt. Ein Bericht über Arbeit ist kein Ergebnis." Before a run, name what will be openable at the end (file, page, image, build, sent message, measured number). After the run, report what came out and what it cost, and say "zero" openly when it was zero. On another account a whole 200 USD plan was used up in 30 days and the run had produced nothing.
5. **Decide yourself, ask David only for what only a human may do (2026-10-03, 2026-10-30).** Yes/no lists to David were replaced by the course judge (section 7). David is asked only about money above an approved budget, new accounts and passwords, messages to people he knows, irreversible steps, and questions he wants to ask suppliers himself by phone. Those go into the task app (part 3), never as a list in chat.
6. **Look with the recipient's eyes (2026-09-11).** Nothing reaches a human before the AI has looked at it the way the human will: the page at 390 px phone width, every image opened, the message read aloud as the recipient. "Checked" always says what was checked.

---

## 2. Where the rest is already written (do not look for it here)

This page adds the procedures. These pages hold the rest; read them, they are not repeated here.

- Send gate mechanics (file format, which words count as sensitive, exit code 7, log): https://dlichters.com/ai/ops/tools/01-contents.md section 4.
- Everything about sending messages (who you may write to, five rounds checklist, five purpose questions, what a message must never contain, channel rules): https://dlichters.com/ai/ourrules/working-rules/02-7-sending-messages-to-other-people.md section 7.
- Verification rules (denominators, primary sources, deploy hashes, failed measurements, 390 px, untested guards): https://dlichters.com/ai/ourrules/working-rules/03-11-verification-before-you-say-done-or-quote-a-num.md section 11.
- The task app's server, push and CLI: https://dlichters.com/ai/ops/tools/01-contents.md section 5.
- Perplexity bridge and research mailbox: https://dlichters.com/ai/ops/tools/02-6-research-perplexity-bridge-toolsuite-adapter-nan.md section 6.
- The loop, usage pacing, watchers table, older loop generations: https://dlichters.com/ai/ops/automation.md .
- Store building steps 0 to 11, judge rounds, 390 px checks: https://dlichters.com/ai/ops/store-building.md .
- The Musk judge (strict owner-view reviewer) and how to rebuild it: https://dlichters.com/ai/ourrules/thinking-billionaires/03-12-the-musk-judge-how-it-works-and-how-to-rebuild.md .
- Every mistake and the rule it produced: https://dlichters.com/ai/ourrules/mistakes-and-fixes.md .

---

## 3. The send gate ("Sendeschleuse"), done by hand

Applies since 2026-11-06 to every WhatsApp or mail to a stranger or company (suppliers, providers, store owners). Free without a card: only David's own chat and the To-Dos group. Messages to people David knows are not sent at all (section 5).

David's deal, 2026-11-06: the AI does not ask him before sending, and in return there is never nonsense in the message. "Du musst 100 % sichergehen, dass du keinen Blödsinn in die Nachrichten reinschreibst." "Sag einmal, wie du sichergehst, dass so was nie, nie, nie wieder passiert."

**Procedure (in this order, no step skipped):**

1. **Read the real chat first,** in WhatsApp or the mailbox, not your notes and not your draft. Copy the recipient's last message verbatim; it goes on the card. Before writing "no reply", compare the preview text and time in the chat list with the last message you read (2026-11-03: two supplier messages at 07:58 and 08:04 were missed because the chat reader showed an old history).
2. **Write the purpose in one sentence:** what the recipient should do after reading. "Answer the three format questions in one reply" is a purpose; "follow up" is not. If you cannot write the chain from this message to money, you have not understood the task (five purpose questions, 2026-09-01: WHY, READ ALOUD, RETURN PATH, DOES IT EXIST, WHERE FROM).
3. **Draft, then run five rounds against David's objections** (2026-09-08), improving the text each round: how much do we learn from the best answer (a yes/no question returns one bit; a choice of three plus "or something else" is better); does the door stay open; what if my assumption is wrong; why should this person answer; is the assumption proven from the history. The full checklist is in working-rules section 7.
4. **Mark every sensitive sentence.** A sentence is sensitive if it contains a money or terms word (currency, PayPal, Wise, SEPA, IBAN, invoice, pay, transfer, bank, price, discount, refund, fee, deposit, shipping, DDP, deadline, access, contract, and the German equivalents), a commitment phrase (we will, we can, we need, we have, easiest, cheapest, best for, always, never, guarantee), or any number, weekday, "today" or "tomorrow". For each sensitive sentence decide its type:
   - `frage` (question): it must end with "?". Anything undecided is asked, never stated.
   - `fakt` (fact): needs a source (file, page, the supplier's own earlier message, a measurement).
   - `festlegung` (commitment): needs a source AND at least two options with their costs compared, written on the card. A money sentence that is not a question must be a commitment. Polite requests count too: "please send the invoice in USD" fixes a currency.
   **Principle:** a message never newly fixes money, payment method, currency, price, deadline or access. If it has not been decided with a cost comparison, it is a question.
5. **Check promises against stock (2026-08-29).** If the text offers anything ("we can send you X"), check it can be delivered today: does the item, segment or filter exist, is the quantity enough. If not, delete the sentence; do not promise to build it.
6. **Language check:** write in the language of the recipient's last message (section 5).
7. **Write the check card** next to the text file as `<file>.pruefung.json`: sha256 of the trimmed text, purpose, the recipient's last message verbatim, every sensitive sentence verbatim with type, source and (for commitments) options, and the second reader's block (section 4). The sha binds the card to exactly this text: any edit after review blocks the send, so edit first, review last.
8. **Run the second reader** (section 4). It must be a separate agent. Fill its verdict and at least 5 objections into the card. Never write "OK" yourself.
9. **Send through the tool,** which re-checks everything and refuses with "SCHLEUSE ZU, nothing sent" (exit 7) if anything is missing. Every attempt, passed or blocked, is logged with time, recipient, errors and the first 300 characters.
10. **After sending:** open the chat and confirm the message is there (a "sent" line in a log is not a delivered message), save the recipient with first and last name if new (2026-09-22: from the company imprint), and note what was sent.

**By hand, without the tool:** do steps 1 to 8 on paper, then compare the text you are about to paste character by character with the reviewed text. If it differs, review again.

**Why each check exists:** the sha check because texts were "slightly improved" after review; the last-message field because drafts were written without reading the chat (2026-09-11: a follow-up nearly broke our own promise "this is the last mail if nothing comes"); the commitment rule because of the USD/PayPal message of 2026-11-06; the 5-objection minimum because a reader who finds nothing has usually not tried.

**Things the gate does not catch and you must:** a true sentence that makes us unnecessary (2026-09-11: "you can look up every name yourself in two minutes" sat above a monthly price); signs of AI writing (no contractions, mirrored summaries, little maxims); anything that reveals David's age to a business; questions only David may ask (section 5).

---

## 4. The second reader ("Gegenleser"), done by hand

A second reader is an independent agent (a fresh chat or a sub-agent with no history of the draft) that receives only: the message text, the chat history or the recipient's last message, the check card, and the rules that apply. It changes nothing; it returns a verdict.

**Run two lenses per message,** in parallel, each as its own agent (pattern used for every supplier message on 2026-11-07):

- **Recipient lens.** "You are the recipient (for example a Chinese supplier for whom English is a second language, or a 16 to 20 year old store beginner on Discord). Is every question unambiguous and answerable in one reply? Does anything sound suspicious, insulting, like spam, like a sales pitch, like an order or a commitment? What would you misunderstand? Would you answer?"
- **Rule lens.** "Check against these rules: no question about rights, licences or authenticity (David asks those by phone); no commitment to an order; no price, payment method or currency fixed; every number has a source (give the source file); names and product titles match what the recipient actually offered; channel and length rules (for example: a first Discord message at most 70 words, never names Timo, coaches or who sent us)."

**Output format of each reader:** file, verdict `OK` or `AENDERN` (change), at least 5 objections each written as one sentence with its conclusion, and for `AENDERN` the complete new wording. Answer short.

**Rules for using the result:**
- Both lenses must say OK. If one says change, take the new wording or fix the point, then run both lenses again on the new text (the sha changes, so the old verdict is void anyway).
- At most 3 review rounds; if it still fails, the message is wrong in its purpose, not its wording: go back to step 2 of the gate.
- Copy the objections into the card as they were written. They are the proof that someone looked.
- The second reader never sends and never edits the file.

---

## 5. Who gets a message at all, and in which language

- **People David knows: never (2026-09-11, confirmed 2026-10-30).** Friends, family, Timo, school, mentors, family friends, community members he has met: draft only, and the task goes to the app with the text in a copy block (part 3). Doubt test: did David meet this person, or did we only research them? Researched = stranger.
- **The student community and coach circles: read only (2026-11-06).** Nothing is sent there without David's yes per message, together with Timo.
- **Questions only David asks, by phone (2026-11-06):** whether a supplier has the rights to a book or product, whether they are the supplier of a named brand. Never by WhatsApp or mail, not even rephrased, never twice. These become a task in the app with the exact question and whom to call. What David reports from the call counts as the supplier's answer (on 2026-11-06 the AI doubted a confirmation that came 87 seconds after the task was created; David had really called; his report counts unless times make it impossible, and then say so openly).
- **Product questions** (size, fabric, packaging, shipping days, stock, unit price asked as a question) the AI asks itself.
- **Business customers:** writing only, never a call, video meeting or meeting offered (2026-10-14). Grep every document for video, call, phone, meeting, personal before sending.
- **Language (2026-10-07):** the language of the recipient's last message. On 2026-10-07 at 23:25 a German goodwill mail went to Contabo, whose mails to David are all English ("Dear David"); David answered "englisch!!!!!!"; the English resend at 23:27 made two tickets. Suppliers in China: English, short sentences, one question per line, numbered. Shop texts for US customers: English. Messages to David: German, at most 2 to 3 lines.
- **A sent message cannot be recalled.** After David says stop, halt immediately and say honestly what already went out.

---

## 6. Supplier messages: the watcher and the same-turn reply

David, 2026-11-07: "Baue mal irgendwas, damit du direkt benachrichtigt wirst, wenn wir auf WhatsApp Business eine Nachricht bekommen, weil du immer viel zu lange brauchst, um denen zu antworten."

**The watcher** (mechanics in the automation watchers table): a script without any model reads the chat list in David's logged-in browser every 20 seconds, only reading, never bringing a window to the front, never touching a send that is running. It exits with "NEW <chat> [time] <preview>" as soon as a message not from us appears in any chat except David's own and the To-Dos group; the exit wakes the chat.

**Procedure on every wake (2026-11-07):**
1. Open the chat and read everything new, including images.
2. **Answer in the same turn.** Every supplier message gets a reply, at least thanks plus what is still missing. Evaluating the message, updating a file or planning does not count as answering. (2026-11-07 a supplier wrote between 15:19 and 15:28 about formats and photos; the AI read and evaluated but sent nothing; David: "Du hast schon wieder nicht auf whatsapp geantwortet".)
3. The reply goes through the send gate with the second reader (sections 3 and 4). Rights questions become an app task instead.
4. **Restart the watcher immediately.** It stops after each wake; a forgotten restart means the next message waits for hours.
5. Images to suppliers: they cannot open TikTok Shop or AliExpress links, so send the picture. Sending images hangs while the WhatsApp tab is in the background; bring the tab to the front first (allowed since 2026-11-02), then each image arrives in 1 to 3 s (measured 2026-11-07).

The watcher only runs while a chat is open. Start it at the beginning of every chat that handles suppliers.

---

## 7. The course judge ("Kursrichter"), done by hand

David, 2026-10-03 21:20: "Hör auf, die ganze Zeit nach ja 1, 2, 3 zu fragen. Du hast den Kurs ... Frag einfach jemanden, der den kompletten Kurs gelesen hat ... Wofür fragst du mich? Ich mache ja selber nichts anderes, als einfach im Kurs zu gucken."

**What it is:** a fresh AI session whose working folder is the whole course library (all lessons with verbatim transcripts, the merged topic files and the search tool), plus our playbook with course sources. It plays an e-commerce coach who knows every lesson and decides one yes/no question with course evidence.

**When to use it:** any decision you would otherwise put to David as "yes or no?": store layout, offer structure, price step, which product to test, whether to kill an ad. Not for: money above the approved budget, new accounts, messages to new people, irreversible steps (those stay with David, as one line, never as a list).

**Procedure:**
1. Write the question with the situation in it: product, price, cost, shipping time, platform, ad state, numbers measured so far, the deadline. A question without the situation gets a generic answer.
2. Start a fresh session (headless `claude -p` or a new chat) with the course library as working folder; give it read, search and write tools only; browser and computer-control tools are forbidden; 15-minute time limit.
3. Prompt (structure we use): "You are an e-commerce coach who knows every lesson of every course in this library. First read the library's guide file, search with the search tool and the full transcripts, and read our playbook. Situation: <business, product, price, cost, timeline, goal>. QUESTION: <question>. Decide as in a coaching call: short, honest, practical. Lessons from the current year beat older ones. Write: Verdict: DO, DON'T or CHANGE (then exactly how). Why: 2 to 4 sentences. Evidence: 1 to 3 course passages with lesson, year, [mm:ss] and a short verbatim quote, each found by exact text search. If there is none, write 'no course evidence, own judgement'. Write this to <file>. Then answer with one line only: 'VERDICT: <...> | <one sentence reason> | <file>'."
4. **Check the evidence yourself:** grep each quoted snippet in the transcript. A quote that is not found verbatim makes the verdict "own judgement", not "course-backed".
5. Act on the verdict and tell David one sentence of result, not the question. Keep the verdict file.

First use, 2026-10-03 21:23: "do not redirect the home page to the product; put a product card at the top instead", with two timestamped quotes from a 2026 lesson.

**Gotchas:** the session runs on a Claude account seat; when that seat is at its weekly limit, the judge cannot run (measured 2026-11-06 16:25: the main seat was at its limit until the next day and the other seats were logged out). Then either wait or answer from the course yourself with the same evidence rule, and say which you did. Headless runs inherit the user's effort setting unless one is passed (2026-09-28: 2,038 of 2,038 calls ran at the highest effort).

**Related rule (2026-09-29): rules only from courses.** Statements by Timo or anyone else never go straight into the playbook; first search the course; only what the course backs is entered, with lesson and timestamp. When a task matches a purpose in the course prompt index (returns, shipping, about us, product description, domain, niche, SEO, CSV), the course prompt is used verbatim with placeholders filled and the source named; never invent your own.

---

Part 1 of 3 of "AI systems: how we run AI work so it does not make mistakes". Map of all parts: https://dlichters.com/ai/ourrules/ai-systems.md · Next: https://dlichters.com/ai/ourrules/ai-systems/02-workflows-critics-blind-tests.md
