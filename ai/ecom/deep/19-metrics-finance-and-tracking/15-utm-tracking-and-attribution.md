<!-- part of ecom/deep/19-metrics-finance-and-tracking.md -->
Part 15 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/14-setting-up-meta-tiktok-pinterest-and-other-pixels.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/16-platform-versus-analytics-reconciliation.md

## UTM tracking and attribution

### Attribution principles and their limits

- Digital marketing channels influence each other rather than operating independently. PPC campaigns create lift beyond their direct metrics by affecting traffic patterns and performance across other channels. [L0026, undated]
- Perfect tracking is impossible because modern users comparison shop, visit multiple stores, and take time to evaluate purchases, so it is unclear which touchpoint should receive conversion credit. [L0033, undated]
- Attribution means crediting conversions to traffic sources. It is always imperfect because customers interact with multiple channels and touchpoints across several days before purchasing. [L0257, 2020-26]
- Choose one tracking and attribution model and apply it consistently across all reporting periods instead of shifting the measurement approach. All tracking systems have blind spots (cookie loss, multi-session journeys), so consistency matters more than perfect accuracy. [L0257, 2020-26]
- Evaluate campaign performance by comparing total revenue generated against total ad spend, not by relying solely on last-click attribution data. [L0033, undated; L1406, 2020-26]
- Track revenue by traffic source from the start. Early tracking shows which sources bring profit and which waste time. Test sources, keep those that consistently make money, and drop the rest. [L0597, 2020-26]
- Judge each traffic source by the revenue and profit it generates, not by the number of visitors it sends. A source that delivers many visitors but no sales is a cost, not a win. [L0597, 2020-26]
- Set up sales tracking before the store gets traffic, so every sale can be traced back to the ad or source that brought it. ** [L0468, 2020]
- Track sales coming through phone, text or live chat, which Google does not record. [L0470, 2023]
  1. Ask each customer how they found the store when you take the order.
  2. Optionally add a short survey to the order confirmation page, such as a simple form asking how the customer found you.
  3. Note answers such as Google search, Bing search or a Facebook ad.

  [L0470, 2023]
- Platform tracking for Facebook, Google and email is often incomplete, partly because of iOS 14 limits and changed tracking rules from around 2022 on. Ask buyers how they found the store in a post-purchase survey and compare those answers with platform revenue before trusting either number alone. [L1204, 2022]

### Multi-session journeys and double counting

- The majority of e-commerce sites generate more revenue from multi-session customers (returning visitors) than from first-time single-session purchases. [L0257, 2020-26]
- Realistic journey over several days and channels: Monday the customer clicks a shopping campaign; Tuesday they click a search retargeting ad and become a lead; Wednesday they convert via email; Thursday they share a referral code. A friend sees the site, clicks YouTube retargeting, and converts. The result is 2 actual purchases but 4 to 5 channels claiming credit. [L0257, 2020-26]
- When multiple platforms independently track the same conversion (email, YouTube, shopping, referral software), each counts it separately. This produces 4 to 5 counted conversions when only 1 or 2 actual purchases occurred. [L0257, 2020-26]
- Customer journeys can span many days and several touchpoints, so the time from first ad to purchase is often long. In one example, one stage took 5 days and 2 hours and the next took 2 days and 22 hours. Customers sometimes take 7 to 10 or more days to buy. [L0688, 2021+]
- Typical multi-touch paths include seeing a Facebook or Instagram ad, later receiving an email or SMS, returning through a retargeting ad, visiting via Google search, or completing an abandoned cart email flow. Judge attribution across the whole path, not only the last click. [L0688, 2021+]
- Shoppers often need several visits or ad clicks before buying, so many conversions are multi-step and only the last touch gets credit in simple reports. A high share of multi-step conversions is expected and does not indicate a broken setup. Single-click reports will consistently undercount earlier touchpoints. [L1406, 2020-26]

### Direct and unattributed traffic

- Direct/None traffic represents customers returning through browser history or text message referrals. In mature stores this channel shows 15 percent of attributed revenue but is largely unmeasurable as a true traffic source. [L0257, 2020-26]
- Direct/None traffic consists of visits with no recorded referral source, for example returning visitors opening the site from their history, clicks on untracked links, or links shared in private messages. In the example store it was the third largest traffic source and produced 12 to 13 percent of total revenue. [L1406, 2020-26]
- Direct traffic in analytics can come from untracked links, bookmarks, or links saved from email, and it may be large. Keep it separate from paid ad traffic when reading results. ** [L0967, 2020]
- Do not treat Direct/None as a source you can scale or optimize directly. It hides untracked touchpoints, so use it only for comparison between channels. [L1406, 2020-26]
- Direct/None can account for a large share of total sales in a Shopify store. Channel-level revenue from Google Analytics therefore will not add up to the store's total revenue. Use it to compare channels relative to each other, not to reconcile totals. [L1406, 2020-26]
- Direct/None traffic in Analytics typically represents the final purchase session, where Google cannot link the purchase to earlier discovery visits. Reallocate this revenue to the sources that actually brought the customer (usually organic or paid search). ** [L0256, 2021-22]
- Estimating the share of unattributed revenue by source (*Older: one source 2021-22*):
  - When Shopify records revenue that Analytics does not attribute to a traffic source, estimate each source's portion by calculating its share of new users and applying the same percentage to unattributed revenue. [L0256, 2021-22]
  - Example: if Google Ads drove 72.9% of new users, attribute 72.9% of the untracked revenue to Google Ads. [L0256, 2021-22]

### Abandoned cart, email and message-driven sales

- UTMs track the source of email-driven sales by appearing as parameters at the end of URLs, enabling reporting in Shopify Messaging and Google Analytics. [L0147, undated]
- Abandoned cart recovery emails originate from an earlier visit through another traffic source. Attribute these sales to the source that first brought the customer, not to the email channel. ** [L0256, 2021-22]
- Multi-touch attribution tools can pull email and SMS touchpoints from platforms such as Klaviyo and Attentive into the customer journey. This links a sale to an earlier ad even when the final touch before purchase was a message. [L0688, 2021+]

### Reallocating revenue and cross-channel effects

- Evaluating each channel only by its own direct clicks and sales misses cross-channel effects, such as a YouTube campaign lifting search click-through rates or total traffic. Cutting a channel that looks weak in isolation can reduce results in the channels that depend on it. [L1142, 2020-26]
- When a new Google Ads search campaign goes live, total site traffic may rise gradually over several weeks rather than immediately. Judge cross-channel lift by watching the overall traffic trend over that period, not only the clicks reported for each campaign. [L1142, 2020-26]
- To compare paid Google Ads traffic with organic search and email, use the channel comparison in Google Analytics. To find which individual ads convert and how often, use Google Ads data. Do not mix the two views when judging a single campaign. [L1406, 2020-26]

### Attribution models and windows

- Google Ads uses a 30-day lookback window by default, attributing calls to website visits within the previous 30 days. [L0234, 2020-26]
- Last-click attribution is the standard model for call conversions in Google Ads, giving credit to the final ad or source a person clicked before calling. [L0234, 2020-26]
- Meta default attribution for this setup credits a purchase to the ad if the person clicked it within the last 7 days or viewed it within the last 1 day. Keep these defaults for remarketing campaigns. [L1029, 2020-26]
- The click window is kept long because a person who clicked a remarketing ad days earlier and bought later was still reached by that ad. A view counts because the ad reminds the person of the store even without a click. [L1029, 2020-26]
- Use a 30-day attribution window for influencer marketing rather than a one-day click window. Influencers typically need multiple exposures, often three or more touches, before a customer buys. [L0790, 2017]
- Retargeting apps often claim revenue using a 30-day view attribution window, which credits them with sales they did not generate. Check app attribution against your own analytics before trusting it. [L0790, 2017]
- Account hygiene: use 7DC / 1DEV attribution, and exclude website purchasers from the last 180 days and existing Shopify customers from targeting. [L1019, 2026]

Attribution settings compared against AMER (Acquisition Marketing Efficiency Ratio):

- AMER measures how efficiently the whole business acquires new customers, so it is the business-level truth against which attribution settings are judged. Ad platform numbers alone should not decide which setting is better. [L1022, 2026]
- If an account is optimized toward a metric that does not correlate with AMER, it is not optimizing for the real business outcome. Change the attribution setting or optimization target to one that correlates with AMER. [L1022, 2026]
- Platform-wide changes by Meta cause a temporary drop in AMER across the whole industry. Performance returns to normal only gradually and not fully to the previous level. Expect a dip after any platform change and do not read it as a permanent failure of the account. [L1022, 2026]

| Setting | What the sources say | Use or caution | Ids |
|---|---|---|---|
| 7-day click | Before March 17 it had the highest correlation with AMER among the tested settings, which is why it was the default. Gives roughly seven times the window of 1-day click. | Default before the change. | [L1022, 2026] |
| 1-day click | Too narrow for most accounts because it did not capture enough purchases for fast decisions. | Caution. | [L1022, 2026] |
| 1-day click plus 1-day view | Showed a higher correlation in the chart. | Its window is too short for most accounts. | [L1022, 2026] |
| 7-day click plus 1-day engage-through | After the redefinition, matched AMER better than the other tested settings. | Seven-figure cohort, March 2026. | [L1022, 2026] |
| 7DC / 1DEV | Recommended account hygiene setting. | Use. | [L1019, 2026] |

- A cohort of seven-figure stores tracked in March 2026 showed AMER dropping sharply at the March 18 attribution redefinition, then recovering only partly over the following weeks. Before the change, 7-day click followed AMER closely; afterwards it diverged. [L1022, 2026]

### UTM parameters: what they do and naming

- UTM parameters are free extra fields appended to the destination URL of an ad. When a visitor clicks, they pass source, medium, campaign, content and term to analytics tools such as Shopify reports or Google Analytics. [L0688, 2021+]
- UTM tracking shows which campaign, ad set and ad a sale came from. Compare these sources in Shopify reports or in Google Analytics if it is connected to Shopify. [L0648, undated]
- UTM tracking is limited because customers often buy on a later visit, from another device, or after several touchpoints such as ads, emails, SMS and Google searches. Those paths can break the link to the original ad, so UTM data loses sales. [L0688, 2021+]
- Use UTMs to cross-check Facebook metrics against actual store data. [L0691, 2024]
- Use a consistent naming convention: name ad sets by date, audience, country, placement, and ads after their video or angle. The names flow into the URL parameters, which keeps results readable. [L0647, 2024+]
- Use UTM parameters on every TikTok ad URL. Name campaigns, ad groups and ads consistently so the parameters can be reconciled with Shopify orders. [L1377, 2022+]
- Track every ad, headline and offer with its own key, such as a unique coupon, code, address or phone number, so each response can be traced to its source. Without keying, the best-performing creative cannot be identified. [L1261, undated]
- UTM parameters show conversion rate per campaign and ad set, which is more precise than country-level data for budget decisions. Check UTM tracking when deciding which ad set or campaign deserves more money within a country. [L1316, 2024+]
- Some sellers do not connect the Meta pixel to their store and instead track each campaign with UTM parameters, reading which campaign converts from the UTM data. This allows testing across several ad accounts without linking the pixel to each one. [L0638, 2023]
- Small brands rarely need custom parameters. Bigger brands and GA4 or Triple Whale users should follow the parameters their tool requires. [L0865, 2025-26]
- Audience segment URL parameters are set for all sales campaigns in the advertising settings, not per ad, so they do not need to change for each new ad. [L0865, 2025-26]
- UTM Link Builder creates tracking URLs with utm_source, utm_medium and utm_campaign parameters. These let analytics attribute visits from ads, emails and links to their source. [L1007, 2024]

### UTM strings and builder procedures by platform

Shared Meta/Facebook ad-level string ([L0375, undated] and [L0376, undated] are the same string, merged):

```
utm_source=Facebook&utm_medium=cpc&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

[L0375, undated; L0376, undated]

- Add UTM parameters at the ad level so traffic from each ad is tracked by campaign, ad and ad set. Use exactly this parameter string. [L0376, undated]
- Note: the sources give different conventions for the same fields. The string above maps utm_content to the ad and utm_term to the ad set. Procedure [L0648, undated] sets utm term to the ad set name, and procedure [L0688, 2021+] sets utm content to the ad set name and utm term to the ad name. Choose one convention and apply it consistently (see [L0257, 2020-26]). [L0375, undated; L0376, undated; L0648, undated; L0688, 2021+]

Meta procedure in the ad's website section (Ads Manager):

1. Click Build a URL parameter.
2. Set campaign source to facebook.
3. Set campaign medium to cpc (cost per click, the standard label for paid clicks).
4. Set campaign name to the dynamic value campaign.name from the dropdown.
5. Add the ad set name and the ad name as dynamic values from the dropdown.
6. Set utm term to the ad set name.

The parameters are added to the URL, so Shopify receives which campaign, ad set and ad sent the visitor. [L0648, undated]

Free UTM setup for a Facebook ad (procedure):

1. In Facebook Ads Manager, open the ad level of the campaign after adding the page, creative, and website URL (the landing page or product page).
2. Open the section called Tracking.
3. In the UTM parameters area, either use a pre-built UTM link from a website or use Facebook's own UTM builder.
4. Fill in Campaign source: Facebook, FB Marketing, or any consistent label you prefer.
5. Fill in Campaign medium: CPC (cost per click) or the placement information.
6. Fill in Campaign name with the campaign name.
7. Fill in Campaign content with the ad set name.
8. Fill in UTM term with the ad name.
9. Save the URL so the parameters are appended when someone clicks Shop Now or any other button.

[L0688, 2021+]

Meta setting in one source's course:

- Ad > Tracking > URL parameters > Build a URL parameter: add utm_source with the value ((campaign.id)) or the campaign name. Add utm_medium for the medium, such as Facebook Feed, utm_campaign for the campaign or promotion, and utm_content for the ad variant. Dynamic values like ((ad.id)) can be inserted from the campaign, ad set or ad level. [L0865, 2025-26]

Checking UTM results in Shopify:

- Go to Reports and search for "sales through marketing" or sessions attributed to marketing. Select the exact time range, for example today, then add or view the columns UTM term, source, campaign name, campaign medium, and content. The columns stay empty until traffic arrives with UTM parameters. [L0688, 2021+]
- Shopify's sales-through-marketing report, together with Google Analytics, shows which source, medium, campaign, content and term brought each session or sale when UTM links are used. It is the free way to see campaign-level attribution without an extra subscription. [L0688, 2021+]

Meta ad-level tracking with UTMs (on iOS and beyond):

- After the iOS privacy changes, Facebook and Shopify struggle to track what happens after the click. The destination link should carry campaign, ad set and ad names as URL parameters, so Shopify can show which ad set and ad each customer came from. [L0647, 2024+]
- Accurate attribution is needed to decide whether to kill, keep or scale a campaign or ad set. Without knowing which campaign or ad set produced each sale, a profitable account cannot be scaled with confidence. [L0688, 2021+]

### TikTok and Pinterest UTM setup

TikTok:

- UTM links work for TikTok ads too. Paste a UTM link into the store link field at the ad level instead of a plain store URL, using the same parameter logic as for Facebook. [L0688, 2021+]
- On TikTok, UTM parameters are needed because native TikTok tracking was considered unreliable. Compare Google Analytics with TikTok ad data and duplicate only the campaigns that perform well. *(Date not stated in source.)* [L0819, 2020+]
- Use UTM parameters on every TikTok ad URL, because tracking on iOS is limited and TikTok data may not match Shopify. [L1377, 2022+]

Pinterest string appended to the destination URL:

```
?utm_source=pinterest&utm_medium=cpc&utm_campaign=%7Bcampaignname%7D&utm_term=%7Badgroupname%7D&utm_content=%7Badid%7D
```

[L1133, undated]

- Destination URL: use the product page link and append UTM parameters with a question mark to track which campaign the sales come from. [L1134, undated]
- Destination URL: enter the product page link, then append a UTM tag starting with a question mark so each sale can be traced to its campaign, ad set and creative. [L1135, undated]
- Pinterest tracking is delayed because the platform takes time to record sales. UTM parameters show the source of each sale and are sufficient for a simple one campaign, one ad group test. [L1135, undated]

### iOS and platform undercounting

- Since Apple's iOS 14 update in 2021, Facebook Ads Manager reports on campaign and ad set sales have become less reliable, especially for Apple devices. Many accounts see tracking accuracy of roughly 60 to 80 percent, so decisions should not rely on Ads Manager data alone. [L0688, 2021+]
- Since iOS 14, Facebook reporting undercounts conversions. The coach estimated that only about 70 percent of actual purchases may show up there. The platform dashboard can therefore show a return of 1.3 when the real value is closer to 1.6. Use an independent tracking source to check the numbers. [L0694, 2024]
- Facebook misses some sales when users switch devices or browsers, or when cookies are not stored. Complex tools such as Triple Whale can track the full customer journey, but they are not needed for the basic 80 to 90 percent tracking rate. [L1158, 2023]
- After iOS tracking changes, Meta can track fewer users, so its algorithm is less precise. Retargeting still works but needs different setups. Advertisers have moved toward broad audiences with Advantage+ campaigns that receive all creatives and handle retargeting internally. [L0353, 2023]
- Tracking accuracy figures differ by measurement: 60 to 80 percent is the accuracy many accounts see in Ads Manager ([L0688, 2021+]); about 70 percent is the coach's estimate of purchases that show up ([L0694, 2024]); 80 to 90 percent is the basic tracking rate that does not need a complex tool ([L1158, 2023]).
- UTM tracking is not 100 percent accurate after the iOS update, but it still shows which campaign, ad set and ad a sale came from. [L0648, undated]

### Paid multi-touch attribution tools

Tools and what they do:

- Paid multi-touch attribution tools include Triple Whale, Northbeam, Cometly, Converge and Trackify. They track customer journeys across Facebook, TikTok, Google, email and SMS. Triple Whale also shows platform ROAS next to its own ROAS. [L0688, 2021+]
- Triple Whale's dashboard lists campaigns in a layout similar to Facebook Ads Manager, with spend and ROAS per campaign. Platform-reported ROAS and the tool's ROAS can be compared side by side on each row, making any gap easy to see. [L0688, 2021+]
- Triple Whale is better for attribution, and its AI on a higher paid plan is strong. Use TrueProfit when the main goal is profit tracking and Triple Whale when the main goal is attribution. [L1299, 2026]
- Google Analytics custom report setup is free, and paid attribution tools are generally expensive. Google Analytics with a properly installed tag remains the standard for high-ticket dropshipping in most cases. ** [L0721, 2021-22]

Cost and threshold:

| Item | Value | Note | Ids |
|---|---|---|---|
| Starting price, Triple Whale, Northbeam, Cometly, Converge | About 100 to 150 USD per month | Rises with revenue or monthly visitors | [L0688, 2021+] |
| Trackify | Cheaper | Weaker interface; mainly sends conversion data back to Facebook | [L0688, 2021+] |
| Worth-it threshold (monthly revenue) | Roughly 20,000 USD or more | Below that, UTM parameters are recommended | [L0688, 2021+] |
| Worth-it threshold (monthly ad spend) | Roughly 10,000 USD or more | Older, one source 2021-22. Installing a more advanced tool only makes economic sense at this level, because such tools are expensive. | [L0721, 2021-22] |

- Attribution is not a perfect science. Installing a more advanced attribution tool only makes economic sense at roughly 10,000 USD or more per month in ad spend, because such tools are expensive. ** [L0721, 2021-22]
- Paid attribution tools are only worth their cost at roughly 20,000 USD or more in monthly revenue. Below that level, UTM parameters are recommended. [L0688, 2021+]

Example of platform versus tool ROAS:

- A Facebook campaign with 244 USD spend showed a ROAS of 0.84 in Facebook Ads Manager, while Triple Whale showed 1.30 for the same campaign. Another campaign showed 1.22 on Facebook and 2.75 in Triple Whale. A campaign that looks unprofitable on the platform can be profitable once tracking is corrected, which changes the kill-or-scale decision. [L0688, 2021+]
- Simple case: an account spends 200 USD on Facebook ads and earns 400 USD in sales, so it is profitable. Without campaign or ad set level tracking, the owner cannot tell which ad set generated the sales and so cannot decide which one to scale. [L0688, 2021+]


Part 15 of 46 of "19. Metrics Finance and Tracking: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking.md · Previous: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/14-setting-up-meta-tiktok-pinterest-and-other-pixels.md · Next: https://dlichters.com/ai/ecom/deep/19-metrics-finance-and-tracking/16-platform-versus-analytics-reconciliation.md
