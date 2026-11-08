<!-- part of ecom/deep/04-store-build-and-shopify.md -->
Part 4 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/03-store-name-domain-purchase-and-domain-connection.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/05-business-email-phone-number-and-contact-identity.md

### Connecting an external domain to Shopify (DNS, TXT and SSL)

**Procedure F**

1. In the Shopify admin, click Settings in the bottom left corner.
2. Open Domains.
3. Click Connect existing domain instead of Buy new domain.
4. Type the exact domain name you bought from the external provider.
5. Click Next. If the domain was bought externally, Shopify shows the option to continue.
6. Follow the DNS settings Shopify shows, and make the changes at your external registrar. Shopify's official guide describes the exact DNS settings to use.
7. Expect a waiting period for the DNS changes and SSL before the domain works with the store. [L0520, undated]

- Use the connect existing domain option only for a domain already bought elsewhere, such as at Namecheap or GoDaddy. Shopify has documentation for the connection steps. [L0504, 2020-26]
- A domain registered elsewhere can still be connected to Shopify, but it needs more setup than one bought in Shopify. [L0941, 2022]

**Procedure G **

1. In the Shopify admin, go to Settings > Domains.
2. Click Connect Existing Domain and enter your domain.
3. Shopify reports that the DNS records do not point to Shopify yet and shows the records to change.
4. Log in to Namecheap and open the domain's Advanced DNS tab. [L0989, 2025-26]

| Record | Name / host | Current value | Change to |
|---|---|---|---|
| A | as listed by Shopify | 162.255.119.46 | 23.227.38.65 |
| CNAME | www | parkingpage.namecheap.com | shops.myshopify.com |

[L0989, 2025-26]

1. In Namecheap's Advanced DNS, update the existing A record from 162.255.119.46 to 23.227.38.65.
2. If no A record is listed, use Add New Record and choose A Record with the value 23.227.38.65.
3. Update the www CNAME record from parkingpage.namecheap.com to shops.myshopify.com.
4. Click Save All Changes.
5. Return to Shopify and click I updated it.
6. Wait a while for DNS propagation and the TLS certificate to complete before assuming the connection failed. [L0989, 2025-26]

- Right after DNS changes, Shopify shows DNS propagation at 0 and the TLS certificate as not provisioned. These statuses are normal during the waiting period, so do not change the records again straight away. [L0989, 2025-26]
- After you connect a custom domain under Settings > Domains, the connected domain may show as redirecting to the store's default myshopify.com address until the DNS records are correct. Expect this status during setup, and do not treat it as a final result. [L0989, 2025-26]
- Expecting the external domain to work immediately after connecting it is a mistake. DNS changes and SSL setup take time, so the store will not load on the new domain right away. [L0520, undated]
- one source's 2024 lesson says a domain linked under Settings > Domains takes effect immediately. The DNS wait described above applies to external domains. Treat the wait as the rule when the domain was bought elsewhere. [L0971, 2024; L0520, undated]

**TXT records (domain verification)**

- For a domain bought through Shopify: go to Sales channels > Online store > Domains, click the main store domain and then Manage, then open DNS settings. Click Add custom record, choose TXT, keep the Name as @, paste the verification value into Text value and click Confirm. [L1025, 2020-26]
- In Shopify's Domain settings > Add custom record, enter @ in the name or host field so the record applies to the whole domain. Paste the verification value from Search Console into the value field and confirm. [L0735, 2020-26]
- For a domain bought from a registrar other than Shopify, add the TXT record in the DNS settings of the site where the domain is hosted. [L1025, 2020-26]
- Always use the main domain, not the myshopify.com address, when editing DNS records. [L1025, 2020-26]

**SSL**

- The SSL certificate on Shopify is free. Enable it through Shopify's documentation to show the HTTPS lock and secure connection badge to customers. [L0249, 2022]
- An SSL certificate is included with Shopify, so buying one separately is unnecessary. [L0934, 2023] (2023)
- Shopify's 2022 advice is to enable SSL through its documentation. The 2023 advice says it is included. Both describe the same certificate: it is free, and you do not buy it separately. [L0249, 2022; L0934, 2023]
- A newly added custom domain can show the status Provisioning TLS while its SSL certificate is still being issued. Wait until this status clears before treating the domain as ready for visitors. [L1330, 2025-26]
- A domain bought through Shopify does not wait for SSL. [L0520, undated]

### Primary domain, redirects and www

**Setting the primary domain**

- After buying a domain, open Settings > Domains, find the new domain in the list and click Set as primary. From then on, anyone who types that domain lands on the storefront, the public side of the store. [L0504, 2020-26]
- Connect the domain and set it as the primary domain before launch. [L1145, 2021-22]
- The purchased domain must be set as the primary domain. Additional domains can be connected or transferred without creating a new Shopify account. [L1305, 2020-26]
- Admin path for a primary change: Online Store > Domains > Change primary domain. Select the custom domain and click Save. Traffic from all domains then redirects to the primary domain. [L1292, 2021-22]
- Under Primary for Online Store you can switch the primary domain. [L1250, 2026]
- After a custom domain is bought, check the Domains list under Settings to confirm it is marked as the primary domain. The default.myshopify.com address should no longer be the one shown to customers. [L0521, 2020-26]
- Leaving the default Shopify-assigned domain as your public address is a mistake. Use a professional domain that represents your brand and set it as the primary domain. [L0520, undated]

**Auto-assigned or manual primary (sources differ)**

- Shopify automatically assigns a newly bought domain as the primary domain. [L0079, undated]
- Once bought, the domain becomes the primary domain. [L0521, 2020-26]
- Shopify's Settings say no additional configuration is required after purchase. [L0079, undated]
- Other sources say the purchased domain must be set as primary manually, from Settings > Domains. [L0504, 2020-26; L1305, 2020-26]
- Check the Domains list after purchase, whichever way it was set. [L0521, 2020-26]

**Redirects, www and non-www**

- If traffic from the other domains is not redirected to the primary domain, the page shows an "Enable redirection" link. After the primary domain is changed, the page shows "Traffic from all your domains redirects to this primary domain" with a Disable redirection option. [L1292, 2021-22]
- When a custom domain is connected, Shopify also adds the www version as a third-party domain with its own SSL status. The www and non-www addresses redirect to each other, so visitors reach the store through either one once the primary domain is set. [L1292, 2021-22]
- Use the non-www version of the custom domain as the primary domain, because www and non-www redirect to each other and the non-www form is simpler. [L1292, 2021-22]
- Check that the www version is connected to the store and set to redirect to the root domain, so the store has one main address. [L1327, 2026]
- In Settings > Domains, the www variant of a custom domain can show "Redirects to the myshopify.com address" during setup. [L1330, 2025-26]
- Two domains pointing to the same Shopify store show identical content, which splits brand authority. Choose one domain and build its authority. Redirects are possible but not recommended. [L1088, 2020]

### The myshopify.com address

- Every Shopify store keeps an automatically generated myshopify.com domain that cannot be deleted. It should remain as the backend, while the custom domain is the primary public domain. [L1292, 2021-22]
- The admin default domain on Shopify cannot be removed, so the custom domain must be set as primary to avoid customers reaching the myshopify.com address. [L1292, 2021-22]
- On the Domains page, the myshopify.com address is listed under Shopify-managed domains with the note "Never expires". It cannot be removed. [L1292, 2021-22]
- The myshopify.com entry is labelled Primary for Online Store in the Domains list until a custom domain is set as primary. Use the myshopify.com entry for the Shopify URL field in the Shrine whitelist. [L1330, 2025-26]
- A new Shopify account starts with a default domain made of random letters and numbers under.myshopify.com. Customers should not see this address, so replace it with a purchased custom domain as the primary domain. [L0521, 2020-26]
- The default myshopify.com domain is only a technical placeholder. Choose any name for it, because the store is later connected to a purchased custom domain used for promotion. [L1313, undated]
- Using a store on a default myshopify.com address is a weak sign for a business and can appear with unprofessional branding. Use a custom domain name. [L0806, 2024] (2024)
- A store on a myshopify.com URL looks unprofessional to customers and suppliers. Keep the myshopify.com URL only for demo stores. [L0852, 2020]
- The myshopify.com subdomain is not visible to customers, so it does not matter much. The store name in the admin (name.myshopify.com) is not visible to customers either. [L0358, 2020; L0359, 2020]
- Buying a domain in the admin and linking it hides the myshopify.com address from customers, with one click. [L0468, 2020]
- Before a custom domain is connected, the store is reachable at a temporary address in the form store-name.myshopify.com, which is also the address shown in the admin header. The store is not visible to the public at that address while it is password-protected. [L1314, 2021-22]
- A new Shopify store starts with a temporary myshopify.com address. The real domain is connected before the store goes live. The domain choice does not have to be made during signup, and there is no deadline for it. [L1114, 2023] (2023)
- Register the business name and domain before creating the Shopify account, because the store is set up under that name. The domain is connected to the store later through the Add domain task on the dashboard. [L1314, 2021-22] (2021-22, older; this conflicts with the no-deadline point above. Both apply: the domain is not required at signup, but registering the name first is a sound order.)

### Renewals and privacy

**Auto-renew (sources differ)**

- To renew a Shopify domain, go to Settings > Domains in the Shopify admin. The domain is usually set to auto-renew, so check that setting before the renewal date. [L0962, 2021]
- Turn on auto-renew every year. [L1327, 2026]
- At purchase, leave auto-renew off and keep domain privacy on. Once the business is working, go back and turn auto-renew on so the domain does not expire. [L0989, 2025-26]
- The two approaches differ at the start: the one source and one source sources keep auto-renew on from the start, while the one source source turns it off at purchase and on later, once the business works. [L1327, 2026; L0962, 2021; L0989, 2025-26]

**Registration term and renewal price (GoDaddy, 2021-22, older)**

- A domain can be registered for one or two years at checkout. It renews automatically each year (or each registration period) at the price originally paid. A one-year term saves money now, while a two-year term is equally valid. [L0522, 2021-22]
- Introductory prices can be far below the renewal rate, so check the renewal price before buying. [L0522, 2021-22]

**Privacy**

- Keep domain privacy on when registering the domain. [L0989, 2025-26]
- GoDaddy states that domains include Basic Privacy Protection, which hides the owner's contact details in public registration records. Keep this default on when buying the domain for a business. [L0522, 2021-22]

**Stability**

- Once a domain is bought and set up on the store, it should not be changed later. Treat the choice as long-term and do not rush it. [L0522, 2021-22]

### Changing, transferring and moving domains

**Whether to change at all**

- Changing a domain for SEO is usually unnecessary, since products, brands and SKU numbers are what rank, not the niche keyword in the domain. Keep an existing domain unless there is a strong reason to replace it. [L0941, 2022]
- If the store is still new, changing its domain name is fine. Link the new domain to the existing Shopify account rather than building a new store. [L1088, 2020]
- To move an existing store to a new domain: in the Shopify admin, remove the current domain and connect the new one. Products, categories and settings carry over, and no new Shopify account is needed. [L1002, 2019]

**Safety rules for a change**

- Making changes to the primary domain, contact email and payment method in one session led Shopify to suspend the store, and support did not explain the reason at first. Make such changes one at a time and check the store after each one. [L1131, 2018+]
- Keep a saved copy of the working theme before editing, so the store can be restored quickly. [L1131, 2018+]
- Changing a store's domain name can break existing Google accounts (Workspace, Analytics, Merchant Center) that were set up on the old domain. If a domain change is needed, create new Google accounts for the new domain instead of reusing the old ones. [L0472, 2025] (2025)

**Procedure H: change a store domain**

1. Buy the new domain and link it in the Shopify admin.
2. Update your store emails to use the new domain.
3. Update the domain in Google Merchant Center.
4. Create a new product feed, since all URLs change.
5. Relink the new URL to Google Analytics, Merchant Center, Facebook and Bing. [L0941, 2022]

**Procedure I: rename a store domain without damaging ads**

1. Turn off all Google Shopping ads.
2. Delete the product feeds from Google Merchant Center, Microsoft Ads and Facebook shop feeds.
3. Buy or link the new domain in Shopify so it loads the store.
4. Resubmit the products from the new domain and expect a few days of downtime while they are approved again. [L0968, 2021]

**Procedure J: switch to a new domain in the same Shopify store**

1. Buy a new domain in the same Shopify account.
2. In the TikTok channel app in Shopify, disconnect and reconnect the channel, and select the same pixel so the historical data is kept.
3. Set the new domain as primary in Shopify.
4. Add the new URL to the new campaigns, because campaigns change every two to three days. [L1436, undated]

**Transfers**

- A domain bought through Shopify can be transferred to another registrar, and a domain bought elsewhere can be connected to Shopify. Every domain registrar allows transfers. [L1094, 2023] (2023)
- Transferring a domain to Shopify is a separate procedure from building the store and needs to be handled as its own step. [L0851, 2025] (2025)
- Shopify's Domains page offers Transfer domain alongside Connect existing domain and Buy new domain. Transfer domain moves a domain registered elsewhere into Shopify, while Buy new domain registers a new domain through Shopify. [L1292, 2021-22]
- Shopify's Connect existing domain links a domain without moving its registration. Transfer domain moves the registration itself. [L1292, 2021-22; L0520, undated]

**Procedure K: move a domain bought through Shopify to a new store**

1. Create the new Shopify account.
2. Follow Shopify's knowledge base documentation to transfer the domain from the old account to the new one.
3. Close the old account once the domain has moved.

Linking the domain through DNS settings is not enough; the domain itself must be transferred. [L0857, 2025]

### Subdomains and multiple stores

- Each store needs its own domain. A domain should not be bought for every niche before the first store proves itself. A new store should have its own URL rather than a subdomain of another store. [L0807, 2025] (2025)
- Use a store on its own domain rather than a subdomain such as store.yourdomain.com. Separate memorable domains bring more returning customers and are better for a second store. A domain costs about $14 per year. [L0665, 2022]
- A store can run on a subdomain, such as store.yourwebsite.com, linked from the header menu of the existing website. Alternatively, the existing website content can be moved to a new Shopify store, and the main URL can point to it. [L1068, 2019]
- Shopify can host a blog on a subdomain: install the store on a subdomain such as store.yourdomain.com while the main domain keeps the blog. The store then has full Shopify functionality and the rest of the site remains unchanged. [L0357, 2019]
- Build a separate.com store for each other market you sell into. [L0967, 2020]
- Each extra domain costs about $14 per year, and each one has its own fee. [L1283, 2023] (2023)

### Reusing a store for a new niche or domain

**Reuse decisions**

- If the domain and company name are generic, reuse the existing store for a new niche by changing the tagline and branding in the backend. Starting from scratch is not necessary. [L0469, 2021]
- An existing Shopify store can be reused for a new niche by editing the store and optionally buying a new domain (about $12 a year) and linking it. [L0834, 2021]
- To add a new domain to an existing Shopify store, link it in the Shopify admin panel. The 2021 source says this creates a new store on the same account while the old one continues to exist. [L0469, 2021] (2021, older; later sources describe the same store with a new domain, see the next point)
- Linking a new domain to the existing Shopify account, rather than building a new store, is the approach in later sources. [L1088, 2020], [L1305, 2020-26] (undated)
- A new domain can be bought in the same Shopify account, then set as the primary domain. The downside of keeping one store is that other products cannot be tested in that same store without mixing their results. [L1382, undated]
- If one product is clearly working, keep it in the same store: buy a new domain, make it the primary domain, and keep the apps. The downside is that other products cannot be tested in the same store. [L1436, undated]

**Moving a winning product to its own brand**

1. Buy a new domain that fits the winning product. A reported cost is about $10 per year.
2. Create a new logo for the product brand.
3. Create a new Facebook page for the product's ads.
4. Point the new domain to the Shopify store's base URL.
5. Switch the store and the ads to the new logo, domain and Facebook page. [L1428, undated]

**Store name checks when reusing**

- The store name in the Shopify admin is not visible to customers, and the URL customers see can be changed as often as needed by changing the domain connected to the store. [L0359, 2020]
- If the.com is already taken for a reused store, the domain may change while the store stays the same. Keep the domain and store consistent. [L0964, 2023]
- Before buying a domain for a new niche, check whether the existing domain and company name are generic enough to reuse. [L0469, 2021]

#### Further details

- Adding a new domain to Shopify is simple: buy the domain through the Shopify backend, then select which domain is primary for your store from the settings. [L0249, 2022]

- Do not use.myshopify.com extensions for your store URL. Always use a custom domain name (e.g., chandelier.com, not yourstore.myshopify.com) for professional appearance. [L0253, 2024]

- Shopify domain path: in the Shopify admin, open Settings (bottom left), then Domains, where the Buy new domain option is shown. The default Shopify-assigned domain shown on a new account is not a professional domain. [L0520, undated]

- Domain names can be bought from any registrar and linked to Shopify. Avoid expensive parked resale domains, and choose an open domain available for about $14 to $15 per year. [L0934, 2023]

- Domain names can be bought directly through Shopify and are linked to the store, so the domain does not have to be bought from a separate registrar. [L1304, 2020-26]

- Under Settings > Domains the Shopify domain and any purchased custom domain are listed. Both are visible there once the domain has been bought. [L1306, 2020-26]


Part 4 of 49 of "4. Store Build and Shopify: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify.md · Previous: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/03-store-name-domain-purchase-and-domain-connection.md · Next: https://dlichters.com/ai/ecom/deep/04-store-build-and-shopify/05-business-email-phone-number-and-contact-identity.md
