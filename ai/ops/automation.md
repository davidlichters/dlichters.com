<!-- split-map -->
# Automation: the work loop, usage pacing, watchers, and what failed before

When to read this: before you set up any loop, schedule, background agent or "work without David" system, and before any large run that spends the Claude weekly limit.

Written 2026-11-07 from the loop designs, run logs and post-mortems on David's Mac. Three generations of loops ran between September and November 2026. All three taught something; two were switched off because they burned usage without visible results. Facts marked [MEASURED] were measured on the stated date, [GUESS] were estimates in the source. The tools named here are described in `ops/tools.md`.


**This chapter is split into 2 pages of at most about 4,000 words so an AI can open exactly the part it needs. Pick the page whose headings match the question, open it, and answer only from what it says.**

1. https://dlichters.com/ai/ops/automation/01-contents.md (3,155 words)
   Contents · 1. What David wants from automation · 2. The current design: the motor (since 2026-11-06) · Principle · Files · One round · Human tasks · Chat behaviour · Stop rules · Limits (as of 2026-11-06) · Trial and status · 3. Usage pacing rules · Plan arithmetic · Daily pace (David, 2026-11-06) · Two accounts: Ultra and Max (since 2026-11-07; reset times, drain plan, which plan is active) · What actually eats usage (measured: context size, effort level stays max) · Reporting usage · 4. Watchers: cheap sensors that wake the chat (incl. how Claude learns about new Curlmoon orders: the Sensor app)
2. https://dlichters.com/ai/ops/automation/02-6-generation-2-the-5-minute-takt-for-porchnap-sept.md (3,585 words)
   5. Generation 1: the month operation (Sept 2026) · Design (built 2026-09-16) · Results [MEASURED] · Failures and their fixes · 6. Generation 2: the 5-minute takt for Porchnap (Sept to Oct 2026) · Evolution · Hard limits it ran under · Failures · What worked · 7. Other expensive mistakes · 8. Design rules distilled from all of it · 9. Checklist before starting any loop · 10. The permanent work loop (since 2026-11-07 17:15; moved here from ops/gaps-3-1.md) · Why it exists · Timer · One round, in this order · Resource stops (Ultra over its line, machine load, memory, disk) · Stop rules (3 empty rounds, 1.5x estimate) · Limits that still apply in every round
