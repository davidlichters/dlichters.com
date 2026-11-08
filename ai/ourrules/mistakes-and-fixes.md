<!-- split-map -->
# Mistakes and fixes: every recorded AI mistake and the rule it produced

When to read this: when you are about to report a number, ship a fix, send a message, give David a task, spend money, or start a long run. Almost every mistake below happened more than once before it became a rule. The rules themselves, without the stories, are in https://dlichters.com/ai/ourrules/working-rules.md . The shorter list of business lessons (until 2026-11-07 the page lessons.md) stands right below.

Format of each entry: **date, what happened. Cost. Rule.** "I" is the AI that made the mistake. Names of customers, leads and private people are left out on purpose.

## Short list: lessons from our own mistakes (moved here from ourrules/lessons.md on 2026-11-07)

> Each rule here cost us something real. Format: the rule, why, and the number that taught it. Written for anyone (human or AI) running a small online business with AI helpers.

### Numbers

1. **Never report a count of events as a count of things.** We reported "1,957 messages sent". It was 637 businesses, 67% of the sends were duplicates, and one business got 34 identical messages. Check the denominator and the unique count before quoting any number.
2. **Re-measure costs after any change.** A study said 1.8 cents per message; the real cost was 7 cents, because the model had been switched to one 30x more expensive.
3. **Reach is not a reply rate.** "Email beats the contact form 18x" compared how many companies had an email (14%) or a working form (0.77%). Neither said anyone answers. The real reply rate by email was 0 of 15.
4. **Never reuse a rate from one channel for another.** 0.29% (3 of 1,045) was the reply rate of contact forms. We built four calculations for cold email on it and nearly killed the idea. Cold email had never been measured.
5. **Agreed money is not received money.** Count only money that arrived; list agreed money separately. One summary was 2,636 USD too optimistic.
6. **Check the currency.** A store that reports in USD is not in EUR.
7. **Compare measurements only on the same code.** A measurement file has a date but not a code version. We almost reported a 4x increase that was two different programs.
8. **A test tool can destroy its own input.** A regex without word boundaries cut "ag", "se", "kg" out of real company names; our "91.3% hit rate" stood on a website in five places and was a bug. Read generated test inputs yourself.
9. **Two numbers for the same thing are a finding, not a rounding issue.**

### Proof

10. **A fix is not live until the deployed version matches.** A correct fix ran on 0 of 5 servers all night because they carried an older build. Compare the hash on every machine.
11. **A push is not measured by the exit code of a pipe.** git push failed with HTTP 400 for 171 commits while the background job returned 0, because the last command in the pipe was tail. Compare HEAD with the remote branch after a fetch.
12. **HTTP 200 from a contact form is not delivery.** Forms without an action, some WordPress form plugins and first-time form services answer 200 and deliver nothing. A dry run went from "mostly accepted" to 34 of 50 rejected once we checked properly.
13. **An MX record is not a mailbox.** MX checks found 0 of 7 dead addresses; asking the mail server for the recipient found all 7 (21% of the list). A catch-all server that accepts a made-up address proves nothing.
14. **Documents cite documents (2026-08-24).** One invented line in a notes file ("Sounds good, talk to you then") became a confirmed meeting in nine files. Always check against the inbox, never against another document. In full: section 17.1, https://dlichters.com/ai/ourrules/mistakes-and-fixes/03-17-two-incidents-in-full-primary-sources-and-days-1-to-3.md
15. **Look at it before it goes out.** Ten messages of complaints about a page were four avoidable faults, three of them visible on a phone screenshot. Check every page at 390 px width.

### Writing and selling

16. **A true sentence can kill a sale.** "You can look up every name yourself in two minutes" stood above our proof and next to a 79 EUR price. True, polite, and it told the buyer he didn't need us. Two questions per sales sentence: does it do its job, and if the reader believes it, do they still need us? A true concession stays, with its boundary in the same paragraph (full rule: working-rules part 2, section 7).
17. **Name the work, not the free source.** "I collect public notices every day" sounds like reselling something free. People pay for the matching and the time saved.
18. **Read the buyer's own price first.** 3 of 44 target companies published their price per lead (35 to 75 USD) on their own site. Our offer was 79 to 138 for a weaker unit. A 3-minute check would have shown it.
19. **Never promise what you can't deliver.** We offered two prospects "pick any region" and "name any segment"; neither was deliverable.
20. **Know the purpose before polishing.** Seven rounds went into a message whose goal nobody had written down. Answer first: who is this for, what should they do, why would they.
21. **Rounds need a criterion.** Each improvement round fixes one named checkpoint from a real past mistake; three empty rounds in a row means stop.
22. **Five rounds against the reader's objections** before any message goes out; yes/no questions get one bit, open questions create work for the reader.
23. **No long dashes in public text.** They read as AI-written; use a comma, colon or period.
24. **Capitalise properly** in messages to businesses; lowercase reads as disrespect. Lowercase is fine for Instagram DMs.

### Strategy

25. **Public text is picked clean.** In one night, 94 AI agents derived 15 business ideas from public information: 15 of 15 were already sold, 5 of them even for free. Start from signals only you have.
26. **"Who already sells this, even for free?" comes first.** A tool we had cited as a statistics source for 6 days was itself the product we should have bought (about 95 USD a month).
27. **Compare prices before every purchase.** Recommending the provider you already use nearly cost 100 EUR more on 10 domains.
28. **First money first.** Every work block starts with: does this bring the first few thousand dollars closer? A day of spreadsheets with zero messages to buyers was a lost day.
29. **Obligation beats motivation (2026-08-27).** In 33 working days, the productive stretches were the ones where someone was waiting (a call at 16:00). Design days 1 to 3 of anything new around an outside date, one public artifact and one number that moves daily. In full (all six steps for days 1 to 3): section 17.2, https://dlichters.com/ai/ourrules/mistakes-and-fixes/03-17-two-incidents-in-full-primary-sources-and-days-1-to-3.md
30. **Thinking time is not the bottleneck.** The path to the first paying customer was 191 days, 183 of them waiting on others (warm-up, sending, reply windows). Faster thinking would have saved 4.2%.
31. **Find a way instead of quoting odds.** A low probability is not an answer; count every advantage, then work backwards from the goal.
32. **Rules come from evidence, not from whoever spoke last.** A partner's opinion went into the playbook within minutes and had to be removed. New rule: check the courses first, add only what is backed.

### AI tools

33. **Plan capacity on the weekly limit.** A "20x" plan is about 6x the base plan per week; the 20x only describes the 5-hour window.
34. **Spend the weekly limit evenly,** about 10 to 14% a day, unused days roll forward.
35. **At most 3 iOS simulators at once.** Each holds 150 to 200 processes; 6 to 8 plus browsers hit the process limit and nothing could start. Delete one-off simulators: 47 of them filled 85 GB.

More: how we think https://dlichters.com/ai/ourrules/thinking.md


**This chapter is split into 3 pages of at most about 4,000 words so an AI can open exactly the part it needs. Pick the page whose headings match the question, open it, and answer only from what it says.**

1. https://dlichters.com/ai/ourrules/mistakes-and-fixes/01-contents.md (3,879 words)
   Contents · 1. Numbers that were wrong · 2. Delivery that was not delivery · 3. Fixes that were not live · 4. Silent failures in pipelines and tools · 5. Guards that never ran
2. https://dlichters.com/ai/ourrules/mistakes-and-fixes/02-6-asking-instead-of-deciding.md (4,110 words)
   6. Asking instead of deciding (incl. 2026-09-05 gh login David-1-1-1 vs repo owner davidlichters, GitHub Pages address) · 7. Tasks given to humans that the AI could do · 8. Raising settled topics again · 9. Messages to people · 10. Money and purchases · 11. Stores, reviews and ads · 12. Looking without seeing · 13. Browser, accounts and machines · 14. Usage and loops · 15. Talking to David · 16. Strategy and thinking
3. https://dlichters.com/ai/ourrules/mistakes-and-fixes/03-17-two-incidents-in-full-primary-sources-and-days-1-to-3.md (about 900 words)
   17. Two incidents in full · 17.1 2026-08-24: a fabricated log line ("Sounds good, talk to you then"), nine files, the primary-source rule · 17.2 2026-08-27: what drove the 33 unpaid days (obligation, not motivation, 1,498 messages) and how to design days 1 to 3
