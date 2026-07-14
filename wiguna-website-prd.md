# Product Requirements Document (PRD)
## Wiguna Official Website — Landing Page & Product Catalog

| | |
|---|---|
| **Document Status** | Draft v1.0 |
| **Author** | Product Management |
| **Date** | July 14, 2026 |
| **Product Type** | Static informational website (catalog / landing page) |

---

## 1. Overview

### 1.1 Product Vision
To establish Wiguna's official digital home — a visually compelling, mobile-first website that showcases the brand's innovative multi-functional fashion (transformable vests, convertible bucket hats, obi belts) and acts as the trusted bridge between brand discovery and purchase on official marketplace channels (Shopee and TikTok Shop).

### 1.2 Problem Statement
Wiguna currently sells exclusively through marketplaces, where the brand story, product innovation, and "how it transforms" narrative get lost among generic listings. Customers who discover Wiguna on social media have no central, credible destination to explore the full collection, understand the multi-functional concept, or verify official store links — creating friction, lost conversions, and exposure to counterfeit/unofficial sellers.

### 1.3 Objectives
1. **Brand credibility:** Provide a single official source of truth for the Wiguna brand, its story, and its product catalog.
2. **Marketplace conversion:** Funnel qualified traffic to official Shopee and TikTok Shop listings via clear, persistent CTAs. Every product must be reachable in ≤ 2 clicks from the Home page, and its marketplace link in ≤ 3.
3. **Education:** Communicate the multi-functional value proposition (e.g., vest → tote bag) through rich visuals and product detail content.
4. **Low cost, low maintenance:** Ship a lightweight static site with no backend, no checkout, and minimal ongoing operational overhead.

### 1.4 Non-Goals (Out of Scope)
- **No internal e-commerce:** No cart persistence, checkout, payment processing, order management, or user accounts. All transactions occur on Shopee / TikTok Shop.
- **No inventory sync:** Stock levels and live pricing are owned by the marketplaces; the site displays reference prices only.
- **No CMS/admin panel in v1:** Content updates are made via the codebase (see Future Considerations for a headless CMS path).
- **No multi-language support in v1:** Launch in Bahasa Indonesia (with English as a fast-follow if analytics justify it).

### 1.5 Target Audience
- **Primary:** Fashion-conscious urban consumers aged 18–35 in Indonesia who value versatility, practicality, and unique design; they discover brands via Instagram/TikTok and purchase on Shopee/TikTok Shop.
- **Secondary:** Gift shoppers and sustainability-minded buyers attracted to "one item, multiple uses" products.
- **Tertiary:** Potential wholesale/collaboration partners and media evaluating brand legitimacy via the Company Profile.

---

## 2. Requirements

### 2.1 User Flow

**Primary flow — Discover → Explore → Redirect to purchase:**

1. User lands on **Home** (via social media, ads, or search).
2. User views the **Hero Section** and scrolls to **Best Sellers / Highlights**.
3. User taps a **product card** → a **Product Detail view** opens (name, materials, description, price).
4. User taps **"Buy" / "Add to Cart"** → redirected in a new tab to that specific product's listing on **Shopee or TikTok Shop**.
5. Purchase is completed entirely on the marketplace.

**Secondary flows:**
- Home → "View More" → **Products/Collection page** → product card → detail → marketplace redirect.
- Any page → Navbar → **How to Shop** → follows step-by-step purchase guide → marketplace redirect.
- Any page → Navbar → **Company Profile** → reads brand story → returns to Products or exits.
- Any page → Header **"Buy Now"** global CTA → marketplace storefront (channel selector: Shopee | TikTok Shop).
- Any page → Footer → Contact Us / Social Media → external channels (Instagram, TikTok, WhatsApp, email).

**Edge cases:**
- If a product has only one marketplace link, the detail view shows a single "Buy" button for that channel.
- If a product is discontinued, its card is removed from the catalog (no "out of stock" state is maintained on-site).
- External links that fail to resolve should never break the site; redirects always open in a new tab (`target="_blank"` with `rel="noopener"`).

### 2.2 Functional Requirements

#### FR-1: Global Elements (Must-Have, P0)

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-1.1 | **Header** with Wiguna logo, Navbar, and global **"Buy Now" CTA** | Logo links to Home; CTA is visible on all pages and viewports; CTA opens marketplace storefront(s) in a new tab. On click, if both channels exist, show a lightweight channel selector (Shopee / TikTok Shop). |
| FR-1.2 | **Navbar** with links: Home, How to Shop, Products (Collection), Best Seller, Company Profile | All 5 links present and functional on every page; "Best Seller" anchors/filters to the best-seller section or view; collapses into a hamburger menu below 768px; active page is visually indicated. |
| FR-1.3 | **Footer** on every page containing About Wiguna (short blurb + link to Company Profile), Contact Us (email/WhatsApp), and Social Media links (Instagram, TikTok, Shopee, TikTok Shop) | Footer renders identically across all pages; all links open in new tabs; social icons meet minimum 44×44px touch-target size. |

#### FR-2: Home Page (Must-Have, P0)

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-2.1 | **Hero Section** with catchy headline and high-quality model photos wearing the products | Hero loads above the fold on mobile and desktop; headline communicates the multi-functional concept; hero image(s) optimized (WebP/AVIF, responsive `srcset`); includes a primary CTA (e.g., "Explore the Collection"). |
| FR-2.2 | **Featured product list** (Best Sellers / Highlights) | Displays 4–8 curated product cards with photo, name, and price; cards behave identically to catalog cards (FR-3.2). |
| FR-2.3 | **"View More" button** below the featured list | Button navigates to the Products/Collection page. |

#### FR-3: Products / Collection Page (Must-Have, P0)

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-3.1 | **Complete catalog** of all Wiguna products in a responsive grid | All active products displayed; grid adapts 1-col (mobile) → 2-col (tablet) → 3–4-col (desktop); images lazy-loaded. |
| FR-3.2 | **Product Detail interaction:** tapping/clicking any product card (Home or Products page) reveals product detail | Detail view (modal or dedicated detail page — see Open Questions) displays: product name, materials used, detailed description, price (IDR), and product photos including transformation states (e.g., vest mode ↔ tote mode). |
| FR-3.3 | **"Buy" / "Add to Cart" redirect button** in the detail view | Button deep-links to the **specific product listing** (not the storefront homepage) on Shopee and/or TikTok Shop; opens in a new tab; both channel buttons shown when both links exist, clearly labeled with the marketplace name/logo. |
| FR-3.4 | Optional category filter (P1 — Nice-to-Have) | Filter chips by product type (Vests, Hats, Obi Belts, etc.); filtering is instant/client-side. |

#### FR-4: How to Shop (Cara Belanja) Page (Must-Have, P0)

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-4.1 | **Step-by-step purchase instructions** for buying via Shopee and TikTok Shop | Numbered steps with supporting visuals/screenshots per marketplace (e.g., 1. Browse products here → 2. Tap "Buy" → 3. You'll be taken to our official store → 4. Complete checkout on the marketplace); each guide ends with a direct link to the official storefront; content is written in clear Bahasa Indonesia. |
| FR-4.2 | Official store verification note (P1) | A short trust section listing the official store names/handles so customers can verify authenticity and avoid counterfeit sellers. |

#### FR-5: Company Profile Page (Must-Have, P0)

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| FR-5.1 | **Brand story, vision, and mission** | Dedicated sections for About/Story, Vision, and Mission; includes the origin of the multi-functional fashion concept; supported by brand/lifestyle photography. |
| FR-5.2 | Contact / collaboration section (P1) | Email or WhatsApp contact for partnership and media inquiries. |

#### FR-6: Future Considerations (P2 — not in v1)
- Headless CMS (e.g., Sanity/Contentful/Decap) so the team can update products without code changes. The v1 data model (a structured `products.json` / MDX collection) should be designed to migrate cleanly.
- English language toggle; lookbook/video gallery; newsletter capture; WhatsApp chat widget.

### 2.3 Non-Functional Requirements

| ID | Category | Requirement |
|----|----------|-------------|
| NFR-1 | **Performance** | Largest Contentful Paint < 2.5s on mid-range mobile over 4G; total page weight target < 1.5MB per page; all images served in next-gen formats with lazy loading; Lighthouse Performance score ≥ 90. |
| NFR-2 | **Mobile-first responsiveness** | Fully functional and visually polished from 360px width upward; majority of traffic is expected from mobile social referrals. |
| NFR-3 | **SEO** | Semantic HTML, unique meta titles/descriptions per page, Open Graph tags for social sharing, `Product` structured data (JSON-LD), sitemap.xml, robots.txt; product detail views must be crawlable/indexable. |
| NFR-4 | **Accessibility** | WCAG 2.1 AA intent: alt text on all product images, sufficient color contrast, keyboard-navigable menus and modals, visible focus states. |
| NFR-5 | **Reliability & security** | Static hosting with global CDN; HTTPS enforced; no user data collected or stored (no backend attack surface); external links use `rel="noopener noreferrer"`. |
| NFR-6 | **Analytics** | Lightweight analytics (e.g., GA4 or Plausible) with event tracking on: "Buy Now" header CTA clicks, product detail opens, and marketplace redirect clicks per product per channel — this is the site's core conversion signal. |
| NFR-7 | **Maintainability** | Product data stored in one structured source (JSON/MDX), so adding a product requires editing a single file plus images — no changes to layout code. |
| NFR-8 | **Browser support** | Latest 2 versions of Chrome, Safari, Firefox, Edge; Android WebView & iOS Safari (in-app browsers from Instagram/TikTok are a priority given traffic sources). |

---

## 3. Tech Stack (Recommended)

Given the strict static/catalog scope (no transactions, no user accounts, no backend), the guiding principle is **maximum performance and minimum operational cost**.

| Layer | Recommendation | Rationale |
|-------|----------------|-----------|
| **Framework** | **Astro** (primary recommendation) or Next.js with Static Export | Astro ships zero JS by default and is purpose-built for content/catalog sites — ideal for hitting LCP and Lighthouse targets. Next.js static export is a solid alternative if the team already knows React. |
| **Styling** | **Tailwind CSS** | Fast to build, tiny purged CSS output, consistent design system, excellent responsive utilities for mobile-first work. |
| **Interactivity** | Minimal vanilla JS / Astro islands (or a small React island for the product detail modal & channel selector) | Only two interactive elements exist (detail view, mobile nav); no need for a heavy SPA framework. |
| **Product data** | Local **JSON / Markdown (MDX) content collection** (e.g., `products.json` with name, materials, description, price, images, `shopeeUrl`, `tiktokShopUrl`, `isBestSeller` flag) | Single source of truth; trivially migratable to a headless CMS in v2 (FR-6). |
| **Image pipeline** | Astro `<Image />` / built-in optimization (WebP/AVIF, responsive sizes) | Product photography is the heaviest asset class; automated optimization is essential for NFR-1. |
| **Hosting & CDN** | **Vercel**, **Netlify**, or **Cloudflare Pages** (free tier is sufficient) | Zero-config static hosting, global CDN, automatic HTTPS, preview deployments, effectively $0/month at this traffic scale. |
| **Version control / CI** | GitHub + auto-deploy on push (built into the hosts above) | Simple content-update workflow: edit JSON → push → live in ~1 minute. |
| **Analytics** | **Plausible** (privacy-friendly, lightweight ~1KB) or GA4 | Required for NFR-6 marketplace-redirect conversion tracking. |
| **Forms (if needed later)** | Formspree / Netlify Forms | Keeps "Contact Us" serverless if a form is added; v1 can use `mailto:`/WhatsApp links only. |

**Explicitly avoid for this project:** WordPress/WooCommerce, Shopify, or any database-backed stack — they add hosting cost, security surface, and maintenance burden with zero benefit for a redirect-only catalog.

---

## 4. Open Questions

| # | Question | Owner | Blocking? |
|---|----------|-------|-----------|
| 1 | Product detail: **modal overlay** (faster, stays in flow) vs. **dedicated detail pages** (better SEO — each product gets an indexable URL)? Recommendation: dedicated pages with modal-like transitions. | Design + PM | Yes — affects information architecture |
| 2 | Should the global "Buy Now" CTA default to one marketplace, or always present the Shopee/TikTok Shop choice? | Marketing | Yes |
| 3 | Final asset inventory: how many products at launch, and are transformation photos/videos available for each? | Brand team | Yes — content gating launch |
| 4 | Is "Best Seller" a separate page, or a filtered view/anchor of the Products page? (Spec assumes anchor/filter.) | PM | No |
| 5 | Displayed prices: fixed reference prices, or a "from Rp X" range to absorb marketplace promo variance? | Brand team | No |

## 5. Success Metrics

- **Leading:** ≥ 40% of sessions open at least one product detail; ≥ 15% of sessions result in a marketplace redirect click (measured via NFR-6 events) within the first 30 days.
- **Lagging:** Month-over-month growth in marketplace traffic attributed to the website (Shopee/TikTok Shop referral analytics); reduction in "is this store official?" inquiries on social channels.
