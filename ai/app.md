# How the Lichters app works

> Lichters is a free iPhone habit tracker (with widgets and an Apple Watch app) for six fixed daily habits on one grid for the whole year, plus friends who see each other's grids and a private vault for money ideas. No ads, no purchases, no tracking. The app is in English. The method behind it: https://dlichters.com/ai/index.md

## The main screen

- Six habits in a fixed order, shown as letters: f Friends, e Eating, b Business, t Training, o Offline, s Sleep.
- Tick today's circle for a habit when it is done. Each tick fills a square in that habit's row of the year grid: 7 rows for the weekdays, about 52 columns for the weeks.
- A missed day stays empty. There is no streak that falls back to zero; the year grid shows the pattern at a glance.
- Tap a row to read exactly what counts for that habit, then set your own time, place and an optional reminder.
- The six habits cannot be edited, removed or renamed, so the hard ones never get dropped on a bad day.

## Friends

- Your Lichters ID comes with your iCloud account: no sign-up, no email, no password.
- Copy your invite link and send it in any chat. It contains your Lichters ID and your first name. Whoever taps it sends you a friend request.
- Friends you accept see your name and this year's grid; you see theirs. No chat, no feed, no likes, no public profile. Remove or block anyone at any time.
- Technically: this year's ticks and your name are stored encrypted in the app's public iCloud (CloudKit) database. Only accepted friends get the key, plus Lichters support for help with problems. Your full history stays on your iPhone and in your own private iCloud.
- Without iCloud the habits still work; friends need it.

## Money ideas vault

Why the privacy texts read the way they do (David's decision of 2026-10-18, option A, never "only you"): https://dlichters.com/ai/ourrules/app-factory-full/04-21-bug-memory-every-lesson-grouped.md section 25.

- Tap the lightbulb and write down something you spotted that others overlook and that could make or save you money.
- Add screenshots and links, or save straight from the share sheet ("Money Idea"), a widget, Control Center or Siri.
- A weekly goal (3 ideas by default) and an optional reminder: at most one nudge a day (a popup on first open after 14:00, or a notification at the reminder time, 20:00 by default), none on a day you already saved an idea. If you ignore 3 in a row it drops to every other day, after 3 more to twice a week; a new idea resets it to daily. No hint repeats within 14 days.
- Ideas are private: friends and other users never see them. Optional Face ID lock. Deleted ideas stay in Recently Deleted for 30 days.
- Ideas sync end-to-end encrypted through your own iCloud; one extra encrypted copy only Lichters support can open. Ideas never go to any AI company.

## Widgets and Watch

- Lichters widget: your last 6 days and today's habits on the Home Screen and Lock Screen.
- Money Idea widget: add an idea with one tap. It never shows what you wrote.
- Apple Watch: today's habits, ticked from the wrist, synced with the iPhone.

## The Guide

Tap "Lichters" at the top to open the Guide: what the six habits are for, lessons learned the hard way, and every business model the developer tested since 2022 with honest numbers. Once a week the app asks: How satisfied are you with your life, from 0 to 10? The answers stay on your device.

## Privacy in short

Free, no ads, no tracking, no analytics, no third-party SDKs, nothing sold. Notifications are created by the iPhone itself. Face ID stays on the device. Full policy: https://dlichters.com/ai/privacy/ · Support: https://dlichters.com/ai/support/

## How it is built

Native SwiftUI app with four parts: the iPhone app, a widget extension (habit grid and money-idea widgets), a watchOS app and a share extension for saving ideas from other apps. Shared code lives in an app group. Friends and grids run on CloudKit's public database with per-user encryption keys; ideas on CloudKit private sync. The reminder logic is pure rules without UI so tests can check it with fixed dates.

How we build apps in general: https://dlichters.com/ai/ourrules/app-factory.md
