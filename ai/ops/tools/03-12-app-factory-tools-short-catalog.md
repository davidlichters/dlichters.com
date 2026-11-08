<!-- part of ops/tools.md -->
Part 3 of 3 of "Our tools: what we built, how each works, how to rebuild it". Map of all parts: https://dlichters.com/ai/ops/tools.md · Previous: https://dlichters.com/ai/ops/tools/02-6-research-perplexity-bridge-toolsuite-adapter-nan.md

## 11. Website builder (dlichters.com)

A Python script builds the whole static site for GitHub Pages: home page, one page per app at `/<slug>/`, privacy/support/imprint per app. Rules in code: English only (David 2026-10-26); old URLs stay reachable as tiny redirects (old links, QR codes on printed PDFs); apps marked private never appear; the Lichters app has its own pages (privacy, support, imprint built from the app's legal folder and a provider-data config file, never guessed); long dashes replaced and a check aborts the build if any remain. Gotcha (account mix-up): the GitHub CLI reports one login but creates repos under another owner; never guess a Pages URL in advance, read it after creating.

---

## 12. App factory tools (short catalog)

Full rules: `ourrules/app-factory.md`. One kit, many apps; tools are shell/Python/Node around `xcodebuild` and `simctl`:

- **new app** from templates (name, slug, two hex colors, display name); **build** for the app's own simulator; **quick install** to David's iPhone with the store bundle id (same id and iCloud as TestFlight, so data stays); **device build** with separate dev bundle ids so store ids stay free; **TestFlight upload** with build number = date.time (two uploads never collide), `--store` for App Store builds, `--mac` for Mac Catalyst. Since David was traveling (2026-10-17) every change to the Lichters app went through TestFlight.
- **QA:** code checker with one rule per bug class ever seen; Apple-style design checker (screens light/dark next to Apple's own); unit and purchase tests; a test robot that taps through the whole app as Pro and as free user and reports by severity; tap-sequence screenshots. Everything with ERROR, CRASH or SUSPECT must be fixed before showing.
- **Store:** screenshot pipeline (fresh install so old robot settings do not leak into images; raw images must be newer than the build; a variable prevents StoreKit from opening Apple's sign-in sheet in the simulator); store text checker (name and subtitle 30, keywords 100 UTF-8 **bytes** (umlauts count double), promo 170, description 4,000; no long dashes; US spelling; no third-party brands like LEGO; iCloud apps may not say "no cloud"); name checker against the iTunes search in US, DE, GB (a name free at build time was taken 16 days before submission); purchase text checker.
- **App Store Connect:** API client with a key (stored outside the repo), retries reads 5x on 5xx/429; a planner that computes every write for an app and writes only with `--write`; bundle id registration (only POST bundleIds and capabilities, never PATCH/DELETE); creating the app record and setting "Data Not Collected" are not in the official API, so those go through the logged-in App Store Connect tab in David's Chrome (internal `/iris/v1` calls, by PID). Submission timer (2026-11-01): once a day checks if the first app is approved, then submits the next app of a fixed queue at least 2 calendar days apart, only if build valid, dry-run plan has 0 writes and 0 errors, all purchases ready.
- **Market gap radar:** daily 03:30, no Claude, free Apple data, runs in its own git worktree detached at origin/main so it never touches David's working branch.
- **Simulator hygiene:** max 3 booted simulators (each holds 150 to 200 processes; 8 at once hit the per-user process limit on 2026-10-25: "fork failed", no shell possible). Throwaway simulators filled 85 GB on 2026-10-27 (disk 99 % full, OCR failed with "e5rtError 13"); a cleanup deletes shut-down throwaway simulators unused for 3 h, started automatically under 30 GB free. Before any parallel work check `ps -A | wc -l` against `sysctl -n kern.maxprocperuid` (stay under 60 %). Scripts must load the Xcode path first (bare `xcrun simctl` failed silently with Command Line Tools selected).
- **Dictation:** text to audio file with a pause of P seconds after every N words (macOS `say` with silence markers).
- **Handover package:** zips the factory (without builds) plus memory notes and a "read me, Claude" file so a fresh account on a new Mac sets everything up with one sentence.

---

## 13. Mail: reading codes, reading reply inboxes, mail as alarm

- **Login and confirmation codes (David 2026-11-02):** whenever a step triggers a code, read it immediately from Apple Mail's local database (the `Envelope Index` SQLite file finds the newest mail from the sender; the code is in the matching `.emlx` file) and put it at the very top of the reply with sender and time. Typing it stays David's step.
- **Reply reader (cold-email era, Sept 2026):** reads every sending inbox over IMAP without marking messages read, sorts replies. Origin: in a previous project nine real human replies rotted unanswered in inboxes (2026-08-29); at 450 sends/day and 3.43 % reply rate about 15 replies a day arrive across 30 inboxes.
- **Mail as third alarm path:** sends through the same SMTP mailbox that sends daily anyway; used only when WhatsApp or push failed, so never only one path is open.
- **Shop mails:** every shop uses `<shopname>@` David's own catch-all mail domain, forwarded to Gmail; no paid mailbox.

---

## 14. Claude accounts, seats and usage measurement

- **Seats ("platz", 2026-10-06):** `platz` lists seats, `platz 3` starts terminal Claude on seat 3, `platz 3 neu` re-logs seat 3 with another account. Each seat is a folder used as `CLAUDE_CONFIG_DIR`; rules, memory, skills, hooks and chat history are symlinked to the main config, only the login differs (a copied `.claude.json` minus account fields). Login link: open it in a private window (the browser takes whatever account is signed in). Keychain entry per seat is named after a hash of the folder path. The desktop app cannot do separate seats (it deletes the override variable in release builds); do not try again. David accepted the ban risk of several accounts (2026-10-06).
- **Seat-switching wrapper for scripts:** a `claude` replacement first in scripts' PATH: passes all arguments; for `-p` runs it tries seats in a set order; on output matching "hit your ... limit", "usage limit reached", "failed to authenticate", "not logged in" or "disabled subscription access" it parses "resets <Mon> <d> at <h>pm" (else 30 min), marks the seat locked until then in a JSON file and tries the next. Some seats are reserved for the app and never used by scripts. Log: "Platz 2 am Limit bis ..., wechsle" / "Kein Platz mehr frei". On 2026-11-07 15:38 all seats were locked, nothing started.
- **Year token:** `claude setup-token` creates a one-year OAuth token for scripts (`CLAUDE_CODE_OAUTH_TOKEN`), bills the subscription, has no refresh that can fail. Built after 18 rounds failed with "OAuth session expired and could not be refreshed" (57 h lost, 2026-09-23 to 09-25; a keychain refresh race with parallel sessions). Clean the pasted token of invisible line-break spaces.
- **API key trap:** an `ANTHROPIC_API_KEY` exported in the shell profile made headless runs bill the paid API instead of the subscription (found 2026-10-03; on 2026-10-01 93 of 94 rounds failed with "401 API key is invalid"). Scripts now `unset ANTHROPIC_API_KEY ANTHROPIC_BASE_URL` first.
- **Limit and login detectors:** read a failed run's output. Short output with a login error = login dead, ring David until fixed (it once fired only once and then never again, which made it blind). "You've hit your weekly limit · resets ..." (69 bytes) = limit, never ring, retry every ~40 min (the limit once lifted earlier than announced; a rejected attempt cost 4.5 min of prompt building and 15 s).
- **Effort check:** verifies each headless run uses the effort level chosen for its kind instead of inheriting `xhigh` from David's settings (2,038 of 2,038 model calls ran on xhigh, 2026-09-28) and passes `--disable-slash-commands`.
- **Token balance:** reads all session logs of the last N days and weights input, cache writes, cache reads and output by API price ratio [GUESS weights]. Finding 2026-11-01: 69 % of the load is re-reading long chats, output including thinking only 8 %. See `ops/automation.md` for what was decided.

---

## 15. State pages: LAGE, OFFEN, leitstand

- **LAGE (situation page):** every 30 min, no model, built only from measured files: one short page (target under 5,000 characters) every chat reads first. Details live in a separate "where is what" index; read one file from there, never whole folders. Trick against wasted tokens.
- **Situation measurer (Sept):** reads only disk; what it cannot measure is null, not 0. Origin: a round that tells its situation from memory tells fairy tales after three days.
- **OFFEN (open items):** dated lines for David get reminded automatically; superseded for tasks by the Hebel app.
- **Leitstand (control board):** every 15 min, no model, writes a JSON that a static GitHub Pages board reads: six cards a child understands; only result figures, each with timestamp and source; ads and money entered by a chat with source and a validity window (6 h; "today" values only same day); creatives counted from files created since Monday; tasks from the open file; tool health from the watcher. Anything unmeasured shows "unknown" with the reason.
- **Assumption checker (2026-09-19):** settings promise things, nobody checks reality. Case: an A/B setting "arms b,s" plus "versions 1" sent 152 mails, 0 of variant S, unnoticed by 84 rounds, a watcher and a health check. Each assumption is a shell command that returns 0 while it holds; every round that relies on a setting must add one.
- **Progress file:** once a day the same six numbers that cannot be inflated by effort (e.g. tools with a self-test), compared with 7 days ago.
- **Weakest tool finder:** no self-test, never called, no header comment, last run failed.

---

## 16. Timo's Windows toolkit

Timo works on a Windows PC with Claude Code; his repo is shared via GitHub. Tools are PowerShell, plain ASCII only (Windows PowerShell 5.1 reads files without BOM as ANSI; a real euro sign breaks the script; read JSON explicitly as UTF-8).

- **Execution policy:** Windows blocks all scripts by default (`Restricted`). Quick: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` (this window only, no admin). Permanent: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`. Never `Unrestricted`. ZIP downloads mark files as from the internet ("not digitally signed"): `Get-ChildItem -Recurse -File | Unblock-File`, or better use `git clone`.
- **Morning start check (30 s):** tools found (node, git, claude, login, connection to Anthropic), project folder (git, uncommitted changes, key files), scheduled task (exists, enabled, last run, failure counter; it switches itself off after three failures, the most common silent outage), sleep/hibernate on AC and free disk ("a sleeping PC does not work while you are at school"), last rounds as a table with exit codes. Marks OK / ACHTUNG / FEHLER / INFO, verdict green/yellow/red with a numbered fix list.
- Others: situation page builder; gatekeeper ("does the system stand, yes or no"); ntfy alarm; numbers file doorman (every line in the numbers file must be able to carry a decision); human-text doorman; "do I know this" search through all Markdown before asking; runtime measurer (measured durations instead of guessed ones); public store checker (GET only, logs, push on error, quiet 23:30 to 10:00); a PreToolUse hook that blocks irreversible deletes; a Stop hook that runs the quick acceptance and makes Claude continue if red; a machine export (what files and programs exist, never credentials); Windows OCR; YouTube subtitle batch.

---

## 17. Small servers and side tools

- **Voice call relay (2026-10-04):** Node, no packages, HTTP plus a tiny WebSocket server relaying audio between two roles, so David and Timo can talk through a browser link.
- **Ad image gallery:** static server for ad images, so they can be viewed on the phone.
- **Voice bridge:** David speaks on his phone, a Claude round runs on the Mac; launch agent only on David's yes because it opens a port.
- **Morning film:** daily 08:00 builds a short film into the repo so Timo's PC has it after `git pull`.
- **Instagram group reader:** hourly reads the Instagram group "Claude" through David's logged-in tab, downloads new reels and carousels from the URLs Instagram gives the tab (no yt-dlp, no cookie file), splits into frames, transcript and OCR, files a task; runs `claude -p` only when an on-file exists (off since all seats hit limits, 2026-11-01).
- **Cross-post watcher:** polled a TikTok account every 2 s and uploaded new videos to YouTube Shorts, Instagram Reels and Facebook; dry run unless an "AKTIV" file exists. Its hidden Chrome caused the Chrome hijack in section 2.
- **Course downloads from a members site on Timo's PC, mobile OCR, page crawlers:** one-off, rebuilt on demand.

---

## 18. Rebuild checklist

To get the core working on a fresh Mac in an afternoon:

1. Chrome logged in as David (Google, Meta, Shopify, App Store Connect, TikTok, Instagram, WhatsApp Web), View > Developer > Allow JavaScript from Apple Events.
2. Node (26+, built-in WebSocket and fetch), Python 3, ffmpeg, yt-dlp, whisper-cli, Xcode (with `DEVELOPER_DIR` set in scripts), Shopify CLI, GitHub CLI.
3. Rebuild in this order: Chrome-by-PID runner (section 2) > WhatsApp read/send with field read-back and header check (3) > send gate (4) > WhatsApp watcher (3) > Hebel server, CLI and app with APNs (5) > Perplexity bridge (6) > phone screenshot (7). Each is under 200 lines.
4. ntfy app on David's phone subscribed to a private topic, as the independent second alarm path.
5. One-year token for headless runs, unset any API key in the shell profile.
6. Grant Accessibility to `/usr/bin/osascript` (only if DICloak automation is needed).
7. For every tool: dry run default, self-test with the real failure case, timeout on every network call, kill file, log written by the script.


Part 3 of 3 of "Our tools: what we built, how each works, how to rebuild it". Map of all parts: https://dlichters.com/ai/ops/tools.md · Previous: https://dlichters.com/ai/ops/tools/02-6-research-perplexity-bridge-toolsuite-adapter-nan.md
