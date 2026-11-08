<!-- part of ecom/deep/09-meta-and-facebook-ads.md -->
Part 23 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/22-ad-creative-copy-and-placement-formats.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/24-bottom-of-funnel-and-cold-video-campaign-mix.md

### Meta Setup Settings

- Under Ad creative setup, Meta allows up to five Primary Text versions (shown as "Primary text (1 of 5)") and several headlines, added with the Add text option and Add headline option. When more than one text is entered, Meta shows the version it predicts will perform best. The label reads "Not optimised" while that setting is off. [L0348, 2026]
- The Set up test option under the creative section compares up to 7 different versions of one creative in a single test. It is meant to make sure new test ads receive delivery. [L0348, 2026]
- Advantage+ creative enhancements: the default is 6 of 8 enabled. Switch to All optimisations to turn all 8 on, which shows 8 out of 8 after saving. [L1029, 2020-26]
- Dynamic creative testing (DCT) combines many images with copy and headlines, and Facebook finds the best combinations. Adding a DCT ad as a new asset in a scaling CBO shows whether new creatives get spend. If it gets almost none, the creatives are likely not good enough. [L1107, 2023]
- Dynamic creative is being phased out by Meta. While it is still available, using it switches on the Flexible ad format, so the Flexible option is turned off in this test setup. [L1193, 2026]
- Some advertisers build creatives as dark posts, which are unpublished posts that appear only inside ads and not on the Page timeline. The speaker still preferred this older method for setting up his ads. [L0643, 2015]
- Promotion and sandbox ads run as dark posts and never appear on the Facebook page. Post publicly only the content you want public, to the page first. [L0649, 2019]
- Ad setup procedure for a creative test [L1193, 2026]:
  1. Name the ad with today's date, product name, CBO, ad set name and the ad number, following the naming formula.
  2. Choose Manual setup.
  3. Select the Facebook Page and the Instagram account that should appear as the ad identity.
  4. Choose the single image or video format and turn the Flexible option off.
  5. Open the Media box, choose Videos, and upload all the video creatives you have collected. Uploading takes time, so wait for it to finish.
  6. Paste the Primary Text and headlines, add one description, paste the landing page as the website URL, and select Shop Now as the CTA.
  7. Duplicate the ad once for each creative so every creative has its own ad, then publish all ads.
  [L1193, 2026]
- Creating the other two creatives in one ad set [L0647, 2024+]:
  1. Click the three toggle buttons on the first ad, choose Duplicate, and repeat once more so there are three copies in total.
  2. Rename the copies Video 2 and Video 3.
  3. In each copy, open Ad creative, click Edit media, click Change video and select the next video (image ads also work).
  4. Keep the Primary Text, headline, description and call to action identical to the first ad.
  [L0647, 2024+]

### Creative Testing Structure

- Andromeda retrieval engine (deployed December 2024): creative now does the audience targeting, so tight audience restrictions can hurt performance. Campaigns need genuinely different creative concepts, since small changes such as a word or a colour do not count. Campaigns with 8-15 truly different concepts are expected to outperform those with 2-3 variants of one idea. [L0613, 2026]
- A concept pairs one avatar with one angle: a specific pain point, a variation in messaging, or a demographic segment such as ethnicity, age group or life stage. [L1019, 2026]
- Test a new creative with the best existing audience, such as a winning interest or stacked interests, so only the creative varies. Reduce all other variables, including the offer and audience, to keep the test readable. [L0646, 2023]
- Moving a winning ad into a new ad set and forcing spend on it, while other creatives get almost no spend, can raise CPM and CPC. Test untested creatives in a separate ad set so Facebook can learn which one performs, instead of pushing one ad. [L0645, 2023]
- Ads that get almost no spend in a campaign with a clear winner usually have weaker results in Facebook's data, so this is normal. Test them separately in their own ad set before deciding they are dead. [L0645, 2023]
- Putting several ads into one ad set makes Meta concentrate spend on one or two ads while others get only cents. Creative test results are then unreliable, so use one ad per ad set during creative testing. [L1316, 2024+]
- Creative testing structure with ABO [L1316, 2024+]:
  1. Create one new campaign with budget set at ad set level (ABO).
  2. Create nine ad sets, each with a daily budget of 5 USD.
  3. Put exactly one new ad into each ad set.
  4. Target a winning interest in some ad sets and a broad audience in others.
  5. Let the campaign run and compare the nine ads on performance, then keep the best one.
- Creative testing with proven audiences [L0648, undated]:
  1. Build one creative testing campaign whose ad sets are your winning audiences, one ad set per winning interest or custom audience.
  2. Add one new creative as three variations that differ only in the first 3-5 seconds (the hook).
  3. Keep the same three variations in every ad set so the results can be compared across audiences.
  4. Treat a creative as a likely winner only if it has the best CTR in all winning ad sets, not just one.
  5. Replace the older creative in the main campaigns with the confirmed winner.
- If one creative wins across all ad sets, use only that creative for scaling. If no creative wins everywhere, let the audiences decide: different creatives may be relatable to different audiences, so give the campaign several strong options. [L1177, 2023]
- Ad structure inside each ad set: one concept with its three hook variations, so each ad set holds three ads and every ad set carries the same three ads. Two ads per ad set is the minimum. Two to three is the recommended structure, and three to four are also possible. [L0902, undated]
- Let each creative test run for two to three days before judging it. Judge the concept by profitability, and judge the hooks by hook rate. [L0902, undated]
- Avatar testing procedure [L0906, 2026]:
  1. Keep the problem concept fixed, and choose one audience to test it on.
  2. Create several avatar variants of the same audience, for example by ethnicity, language or gender, such as English-speaking, Spanish-speaking, Latino, or Spanish-speaking men and women.
  3. Test each avatar version with the same problem concept.
  4. Keep the version that performs best and build more variants from it.
- Test several creative formats at once, such as carousel, meme-style image, slideshow and single picture ads. Compare their CTR and spend, and keep the format with the strongest CTR. Scale that one once it has enough spend. [L0650, undated]
- Testing multiple creatives is effective. Changing the pictures and adding the offer inside the image improved results for an ad set that had been showing the same creative for a long time. [L0650, undated]
- The Sandbox is a separate campaign for split-testing creatives. CBO tends to concentrate spend on the early winner, so new ads in core campaigns rarely get a fair test. [L0649, 2019]
- Launch the Sandbox only after the core campaigns are live. Test new creatives against the best-performing cold audience. When a new ad wins, move it into the core campaign and turn off the old one. [L0649, 2019]
- Launch a new campaign with a meaningful number of creatives, ideally between 10 and 20. Use the time before launch to produce as many creatives as possible while saving cash. [L1225, 2025]
- A single ad set with about 13 creatives, including four videos and nine static images, across different angles is a reasonable amount. Diversify angles, such as by gender, and add variants over time. [L1225, 2025]
- Beginners should aim to launch more than 20 ads per month. Use a monthly ad spend divided by 500 to 1,000 USD as a rough check of that number. [L1235, 2025-26]
- Creative and conversion matter more than the ad budget at the start. Fix the page and the creative first, then increase spend so the test produces useful data. [L1016, 2026]
- Creative quality and offer quality have a bigger effect on ROAS and scalability than the choice of scaling strategy. A strong creative with a good offer and a strong sales page makes the audience and budget structure matter less. [L0999, 2023]

### Creative Fatigue and Refresh

- Update and test creative ad variations weekly, and refresh campaign creatives every week. [L0238, 2019]
- Ads that get almost no spend in a campaign with a clear winner should be tested in their own ad set before being judged dead. [L0645, 2023]
- Do not copy a competitor's full creative. Meta can detect duplicates and penalise your ad when the competitor is penalised. Reuse only the proven hook (about the first 1-5 seconds), then change slides and clips, add your logo and product name. Alternatively use custom or UGC content when budget allows. [L0637, 2023+]
- Meta's algorithm updates, such as Andromeda, are increasingly wary of AI-generated ads that look like spam. Generic or mass-produced ads can lose reach, so AI output must meet a real quality standard before going live. [L0498, 2025-26]
- A Dynamic Creative ad that gets almost no spend in a scaling CBO means the creatives are likely not good enough. Replace them rather than adding more of the same. [L1107, 2023]
- Use the Sandbox to bring new creatives into core campaigns when they win, and turn off the old one. [L0649, 2019]

### AI-Generated Creative

- Meta's algorithm may penalise or raise CPMs on AI-generated bottom-of-funnel ads uploaded directly, because it prefers original content and reads image metadata. If you make ads with ChatGPT, Claude or similar tools, upload the image to Canva and download it again before uploading to Meta. [L0316, 2026]
- The AI creative approach taught in this series applies across product categories, including pet, fashion and pain relief. The principles are not tied to one niche, so an advertiser can adapt them to any product. [L0498, 2025-26]
- A default AI answer, asked which resources it would study to build a system for effective Meta ad creative, relies mainly on Meta's own guidance plus generic inputs such as reviews, the product itself, competitors and ROAS. Generic sources like this do not reveal what actually works, which usually comes from testing over years. [L1478, 2025-26]
- Generic AI-made ads can lose reach on Meta; the quality bar in [L0498, 2025-26] applies to every AI output before it goes live. [L0498, 2025-26]

#### Further details

- Image and video ads should be placed in separate ad sets; when they share an ad set, the algorithm may stop delivering the image and push all budget to the video. Duplicate the ad set and place the winning image in its own ad set to test it. [L0642, undated]


Part 23 of 35 of "9. Meta and Facebook Ads: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads.md · Previous: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/22-ad-creative-copy-and-placement-formats.md · Next: https://dlichters.com/ai/ecom/deep/09-meta-and-facebook-ads/24-bottom-of-funnel-and-cold-video-campaign-mix.md
