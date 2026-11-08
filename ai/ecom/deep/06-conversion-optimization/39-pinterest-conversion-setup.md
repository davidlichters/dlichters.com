<!-- part of ecom/deep/06-conversion-optimization.md -->
Part 39 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/38-platform-specific-conversion-tactics.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/40-other-details.md

### Pinterest conversion setup

- Pinterest conversion campaigns need a checkout event fired on a purchase-style trigger. Use this snippet, which has a sample value of 80 and a placeholder product. Replace the product name, ID, price and value with the real trigger product's details before use. [L1133, undated]

```
pintrk('track', 'checkout', {
  value: 80,
  order_quantity: 1,
  currency: 'USD',
  line_items: [
    {
      product_name: 'Trigger Product',
      product_id: '6789',
      product_price: 80,
      product_quantity: 1
    }
  ]
});
```

[L1133, undated]

#### Activating conversion events

1. Open a product page on your store. [L1135, undated]
2. Open the browser developer tools: right-click the page and choose Inspect, or go to More tools > Developer tools if inspect is blocked. [L1135, undated]
3. Open the Console tab. [L1135, undated]
4. Paste the Pinterest conversion event code into the console and run it 10 to 20 times. [L1135, undated]
5. Wait five to 10 minutes. [L1135, undated]
6. Return to Pinterest. The conversion campaign option should now be active. [L1135, undated]

#### Pinterest audience growth

- Add a pop-up on the store that invites visitors to follow the store on Pinterest or check out new boards. This increases the number of people who follow the store and share its content automatically. [L1136, 2014]
- Place a Pinterest follow button in the website header. Add links to boards and the profile in the sidebar or footer, so visitors who want to interact on Pinterest can find the profile easily. [L1136, 2014]

### TikTok conversion setup

- Set the TikTok pixel's Data Sharing to Maximum during the Shopify connection, so the pixel receives the most event data for optimization. [L1373, undated]
- Do not scale a TikTok campaign until the store conversion rate is above 1.5% to 2%. [L1375, undated]
- Set the call to action to standard Shop now, or to Dynamic to let TikTok choose the most suitable button. Both are valid. Test which converts better. [L1383, 2022]
- If a video goes viral but produces no sales, the audience is probably wrong, even if the product is good. Switch the coins or Spark Ads objective to conversions to reach buyers. [L1429, 2022]
- Views versus conversions in one example: $10 with a conversion objective produced 1 to 2 conversions and about 500 views. The same $10 on a views objective could double the views but produce no conversions. [L1429, 2022]
- Conversion objectives cost more per result and give fewer total views, so choose between sales and reach based on your goal. If conversion targeting produces no sales, go back to views, because TikTok may still find the audience either way. [L1429, 2022]

#### Mixed coins strategy by stage

1. Spend about $10 on coins for views in the first stage. [L1429, 2022]
2. Once the account reaches about 1,000 followers, switch the remaining about $20 to a conversion objective. [L1429, 2022]
3. If growth slows, use views and conversions again to re-balance. [L1429, 2022]

### Common mistakes

- Do not copy a competitor's landing page, video or ad creative exactly. Change images, text, layout and creatives to protect the account and store. [L1213, 2023]


Part 39 of 40 of "6. Conversion Optimization: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/06-conversion-optimization.md · Previous: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/38-platform-specific-conversion-tactics.md · Next: https://dlichters.com/ai/ecom/deep/06-conversion-optimization/40-other-details.md
