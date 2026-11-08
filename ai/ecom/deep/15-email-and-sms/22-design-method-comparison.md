<!-- part of ecom/deep/15-email-and-sms.md -->
Part 22 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/21-flow-email-templates.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/23-tone-and-personality-description.md

### Design Method Comparison

- Email design methods are compared on two axes: programme fit (editability, render safety and scalability, higher is better) and design wow factor (higher to the right). Every method involves trade-offs, so no single option wins on all axes. [L1263, 2025-26]
- The same method comparison applies to other email platforms such as Omnisend. The tool name changes, but the trade-offs between editability, render safety and design polish stay the same. [L1263, 2025-26]

| Method | Strength | Weakness |
|---|---|---|
| Self-design in Canva or Figma | Full control if you have real graphic and email design skill | Easily looks amateur, can damage the brand, often abandoned after weeks or months |
| Bought template (Envato, ThemeForest, similar marketplaces) | Quick start, can look good on paper | Often made by graphic designers, may be image-based, mobile and cross-client rendering often unverified |
| Third-party tool (BeFree, later renamed LGE Studio) | Polished, modular templates | Two-tool workflow, pushed to Klaviyo as one large HTML block, every edit needs a re-push |
| Professional designer file (Figma or Canva) | Pleasing, professional look | Delivered as locked images, text can be changed but layout and module order cannot, does not scale into flows |
| Klaviyo native editor | Editable, render-safe, repeatable | Needs patience and skill to produce polished design |
| Klaviyo Composer (alpha at time of lesson) | Expected to allow better native, editable Klaviyo designs | Still in alpha, full extent unknown |
| Modular system with reusable content blocks | On-brand, editable, scalable for campaigns and flows | Less polished than a bespoke designer look |

[L1263, 2025-26]

- Only self-design emails in Canva or Figma if you have professional graphic design and email design skills. If you lack them, avoid this route entirely. [L1263, 2025-26]
- Graphic design and email design are different skills. Email design depends on specific psychology and on the placement of modules, which a graphic designer may not know. [L1263, 2025-26]
- Founders who design their own emails without the right skills often spend weeks or months on it and then give up for another route. Self-designed emails can also do real damage to the brand. [L1263, 2025-26]
- BeFree, later rebranded as LGE Studio, is a third-party tool for building modular email templates and pushing them to Klaviyo. The pushed result is one large HTML block, so every change requires returning to the tool and pushing again. [L1263, 2025-26]
- Professional designer files in Figma or Canva are usually locked images. Buyers often can change text but cannot change the layout, and the building blocks do not stack in any order. [L1263, 2025-26]
- The Klaviyo native editor produces editable, render-safe emails. It requires patience and design skill to make the result look polished. [L1263, 2025-26]
- Klaviyo Composer was in alpha and expected to be released publicly within about one month of the lesson. It is meant to help design better emails natively in Klaviyo while staying editable and scalable. [L1263, 2025-26]
- The modular system trades some visual polish for on-brand consistency, editability and scalability. It suits operators who send many emails and value speed over a bespoke look. [L1263, 2025-26]
- The modular email system described in this method is also a two-tool workflow, similar to a third-party tool setup. Its main advantage is reusable content blocks and campaign-level scaling, not a single-tool process. [L1263, 2025-26]
- The modular email system is positioned as the most widely rendered option among the methods compared, and it should work on mobile and in dark mode. It is chosen for scalability first, with polish as a secondary consideration. [L1263, 2025-26]
- On the programme-fit scale (editability, render safety, scalability), a modular system built with an AI approach and Klaviyo's native editor score roughly equal. The sliced-image designer route may look more impressive, but it breaks in real inboxes and cannot scale into flows. [L1263, 2025-26]
- Choose a professional designer if the priority is a fully bespoke look and you accept locked, non-editable files. Choose the modular system if the priority is editability, consistent branding and scaling across campaigns and flows. [L1263, 2025-26]

### Brand Voice File

- Markdown is the most AI-friendly format for storing brand voice and style rules because it is easy for language models to parse, structure and reference when generating brand-specific content. [L0318, 2025-26]
- Brand voice template, to be filled in for each brand:

```markdown
# [Brand Name], Brand Voice


Part 22 of 29 of "15. Email and SMS: full technical reference". Map of all parts: https://dlichters.com/ai/ecom/deep/15-email-and-sms.md · Previous: https://dlichters.com/ai/ecom/deep/15-email-and-sms/21-flow-email-templates.md · Next: https://dlichters.com/ai/ecom/deep/15-email-and-sms/23-tone-and-personality-description.md
