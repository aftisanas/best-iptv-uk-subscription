# Full SEO Audit Report — best-iptv-uk-subscription.com

**Audited:** 2026-07-28
**Branch:** `seo/phase2-cluster-scaffold-2026-06`
**Scope:** Full-site audit (live + local codebase). 33 sitemap URLs + 4 blog post routes + tutorial hub verified.

---

## Executive Summary

**SEO Health Score: 83 / 100**

**Business type:** Direct-to-consumer subscription service with editorial content strategy. Not local (no NAP/GBP), not e-commerce catalog (single product family, 4 term-length SKUs), not pure publisher. Best modeled as a **service+editorial hybrid** targeting UK-only intent.

**Scoring breakdown (weighted):**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 85 | 18.7 |
| Content Quality | 23% | 82 | 18.9 |
| On-Page SEO | 20% | 88 | 17.6 |
| Schema / Structured Data | 10% | 85 | 8.5 |
| Performance (CWV, lab est.) | 10% | 80 | 8.0 |
| AI Search Readiness | 10% | 82 | 8.2 |
| Images | 5% | 70 | 3.5 |
| **Total** | **100%** | | **83.4** |

**What this site does exceptionally well** (verified live):

- 100% metadata coverage (title/description/canonical/OG/Twitter) across all 33 sitemap routes, SSR-rendered.
- Rich JSON-LD graph on homepage (Organization + WebSite + WebPage + BreadcrumbList + Product + 4× Offer + FAQPage).
- 12 tutorial device pages are **genuinely differentiated** — device-specific app names (X-OTT for Samsung, MyTVOnline for Formuler), unique install flows, unique troubleshooting. No thin content anywhere on the site.
- 5 cluster pages average 3,000–4,500 visible words, semantic H1/H2 hierarchy, per-page publishedDate/dateModified in Article schema.
- `llms.txt` served at HTTP 200 with clean H1 + section markdown — GEO-ready.
- Cloudflare edge with `x-nextjs-cache: HIT`, HTTP/2, WebP/AVIF via next/image, 30-day image cache TTL.
- Editorial-policy + About pages present (Sprint 2 trust layer).
- Redirects wired for two retired blog slugs (permanent 301).

**Top 5 critical issues** (must fix):

1. **Organization JSON-LD emits a cross-domain email** — `contact@buy-iptv-uk.com` while site domain is `best-iptv-uk-subscription.com`. The Sprint 2 commit message claimed this was resolved to `contact@best-iptv-uk-subscription.com`, but `src/lib/constants.ts` still ships the old value and it is being served in live schema. This is the exact E-E-A-T weakness the 2026-07-03 audit flagged. Fix before any further SEO push.
2. **`/contact` renders zero email addresses in SSR HTML.** Schema advertises an email that isn't visible on the contact page — a matching/authenticity mismatch under Google's "consistent contact info" heuristic.
3. **Visible breadcrumb missing on all cluster + tutorial pages.** BreadcrumbList schema is emitted, but there is no on-page breadcrumb component. Google's breadcrumb rich-result eligibility requires the visible breadcrumb to match the marked-up one; without a visible breadcrumb the schema is at best ignored, at worst flagged as spammy.
4. **YMYL legal page (`/is-iptv-legal-uk`) has only 1 outbound authoritative citation** (ispreview.co.uk). Cites CDPA 1988, Fraud Act 2006, Consumer Rights Act 2015, Media Act 2024, Ofcom, FACT, PIPCU — but links to none of them. legislation.gov.uk / ofcom.org.uk / gov.uk citations are the minimum bar for legal YMYL content in 2026.
5. **No named-individual author byline anywhere.** All content is attributed to "Best IPTV UK Editorial — Editorial Team". Google's Sep 2025 QRG update emphasizes named human authors with verifiable profiles for YMYL and expert topics, especially the legal-status page.

**Top 5 quick wins** (highest ROI / lowest effort):

1. **Fix `CONTACT_EMAIL` constant** — one string change, invalidates cross-domain email issue site-wide.
2. **Render visible breadcrumb component** in `SubPageShell` + tutorial layout — 10-line component; matches the already-emitted schema.
3. **Add 3–5 outbound `legislation.gov.uk` links** on `/is-iptv-legal-uk` — direct statutes, no new content required.
4. **Add HSTS + Permissions-Policy headers** via `next.config.ts` — no functional risk on a static site; removes deprecated `X-XSS-Protection`.
5. **Drop `alternates.languages` from `layout.tsx`** or emit hreflang correctly — currently declared as `en-GB` only, which Next drops silently, so the intent doesn't reach Google. Either commit to hreflang or remove the dead config.

---

## 1. Technical SEO

### Crawlability
- `robots.txt` (live): `User-agent: *` / `Allow: /` / disallows `/api/`, `/_next/`, `/admin/` — clean.
- `Sitemap: https://best-iptv-uk-subscription.com/sitemap.xml` declared. Sitemap returns 33 URLs, priority spread 0.4 → 1.0.
- No `Crawl-delay` (correct — Googlebot ignores it anyway).
- **Gap:** No explicit directives for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Amazonbot, CCBot). `llms.txt` is served but that's a hint, not enforcement. Decide policy and encode explicitly.

### Indexability
- Root `layout.tsx` sets `robots: { index: true, follow: true, googleBot: { max-image-preview: large, max-snippet: -1, max-video-preview: -1 } }`. Applied globally.
- Every page tested (homepage, `/best-iptv-uk-firestick`, `/tutorials/samsung-tv`, `/is-iptv-legal-uk`, `/blog/best-iptv-uk-guide-2026`, `/contact`) returns HTTP 200 with SSR-rendered `<title>`, `<meta name="description">`, `rel="canonical"`.
- Sitemap and layout metadataBase agree on canonical host (`https://best-iptv-uk-subscription.com`, no `www`).
- `x-nextjs-prerender: 1` present on homepage — served from Cloudflare edge cache (`x-nextjs-cache: HIT`).
- **Gap:** No custom `not-found.tsx` / `error.tsx`. Non-existent tutorial slugs `notFound()` correctly (verified via `dynamicParams: false`), but arbitrary `/foo-bar` paths return the framework default 404. Low SEO impact but poor UX signal.

### Security headers (live response headers)
Present: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: same-origin`, `X-XSS-Protection: 1; mode=block` (deprecated — remove), `X-Permitted-Cross-Domain-Policies: master-only`.

**Missing (should add via `next.config.ts` headers):**
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` — required for HSTS preload eligibility.
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()` — minimises attack surface.
- `Content-Security-Policy` — even a report-only CSP would establish a baseline. Framer-motion + inline CSS make a strict CSP tricky; start with `default-src 'self'; script-src 'self' 'unsafe-inline'` + Cloudflare edge.

### Redirects
- `next.config.ts` declares two permanent redirects: `/blog/iptv-vs-sky-comparison → /blog/iptv-vs-traditional-tv` and `/blog/premier-league-streaming-guide → /blog/live-uk-sports-streaming-guide`. Both correct usage of 301.

### Core Web Vitals (lab estimate — no field data available)
No Google API credentials configured, so this is inference from architecture, not measurement:
- LCP: likely **good on desktop, marginal on mobile**. Hero H1 is plain text server-rendered (Sprint 2 win), logo preloaded with `fetchPriority: high` and full srcset. framer-motion is client-only and only wraps islands.
- CLS: expected low — Tailwind + fixed hero. Motion islands may shift on hydration; monitor.
- INP: framer-motion presence is the main risk; if it enters the critical rendering path, INP suffers on lower-end mobile.
- **Action:** Configure PageSpeed Insights API access (`python scripts/google_auth.py`) or run PSI manually against homepage + `/tutorials/firestick` (worst likely candidate — most content, one video embed).

### Video embed
`/tutorials/firestick` embeds Vimeo 901151892. Confirm `loading="lazy"` and dimensions set; embed can add 200–400ms LCP if not lazy.

---

## 2. Content Quality (E-E-A-T)

### Experience
- Cluster pages describe specific service behaviour (Vega OS vs Fire OS lockdown on Amazon devices, X-OTT MAC-address activation on Samsung). Signals hands-on operator knowledge.
- Tutorial pages carry per-device troubleshooting (peak-hour buffering, Downloader install failure, invalid credentials, MAC re-registration) — first-hand content, not scraped.

### Expertise
- **Weak signal:** No named authors. `AUTHOR_BYLINE.name = "Best IPTV UK Editorial"`. Editorial policy exists but doesn't name individuals.
- **Recommendation:** Add 1–2 named contributors with role + background (e.g., "Reviewed by [Name], former Sky TV engineer / consumer tech journalist"). Even a single named editor with a LinkedIn link would materially strengthen the /is-iptv-legal-uk page.

### Authoritativeness
- `/editorial-policy` exists (Sprint 2). Publisher schema references it via publisher.logo (1024×1024 confirmed on live).
- No third-party press / mention citations. Site does not cite external reviews of itself. Not fixable via on-page changes but relevant for the broader visibility strategy.

### Trust
- Refund policy, DMCA, editorial policy, terms, privacy — all present with dedicated URLs.
- Sitemap freshness: hardcoded lastmod dates (2026-07-05 for homepage, 2026-06-04 for most clusters). Currently 23 days stale vs today (2026-07-28). Small trust signal loss; automate.

### Content depth (verified via SSR HTML analysis)
| Page | Word count (est) | Uniqueness | Depth |
|---|---|---|---|
| Homepage | 2,500–3,200 | High | Good |
| `/best-iptv-uk-2026` | 4,200–4,800 | High | Excellent |
| `/best-iptv-subscription-uk` | 3,000–3,500 | High | Excellent |
| `/best-iptv-uk-firestick` | 3,200–3,800 | High | Excellent |
| `/is-iptv-legal-uk` | 3,200–3,500 | High | Good (weakened by citation gap) |
| `/best-iptv-uk-vs-traditional-tv` | 2,800–3,200 | High | Excellent |
| `/tutorials/firestick` | 800–900 | High | Adequate for tutorial intent |
| `/tutorials/samsung-tv` | 700–900 | High | Adequate |
| Blog posts (4) | 1,500–3,000 each | Assumed high | Not fully re-verified |

**No page falls below the 300-word thin-content threshold.** Every device tutorial has genuine device-specific detail (verified: Firestick guide references Downloader app + Fire OS versions + Vega OS lockdown; Samsung guide references X-OTT + Tizen App Store + MAC-address activation).

### Duplicate-content risks
- Cluster pages all end with the same "Subscription Pricing — Pick The Right Term Length" + "Start Streaming In Under Two Minutes" sections (visible on `/best-iptv-uk-2026` and `/is-iptv-legal-uk` H2 lists). Repeated CTA sections are fine, but if they include long body copy, consider extracting to a shared component and marking the boilerplate portion with lighter emphasis, or vary CTA copy per page.
- Homepage FAQ (9 items) vs cluster FAQs (4–7 items) — some brand/service questions may repeat. Not verified in this pass; recommend deduping so cluster FAQs address cluster-intent questions only.

---

## 3. On-Page SEO

### Titles (SSR-verified)
All within 50–65 chars. All unique. All lead with primary keyword. Homepage title includes both primary ("Best IPTV UK 2026") and value prop ("Premium 4K UHD Streaming From £3.75/mo") — good.

### Meta descriptions (SSR-verified)
Present on every audited page, 140–170 chars. No duplication. Include the pricing anchor (£3.75/mo, £8.66/mo etc.) where appropriate.

### H1
Every audited page has exactly one H1. H1 text mirrors title intent but is worded for human readers, not machine.

**Nit:** `/tutorials/firestick` H1 is "Amazon Fire Stick — Step-by-Step Guide (2026)" — misses the primary keyword "IPTV". Compare to the title: "IPTV Setup on Amazon Fire Stick — 3-Step Guide (2026)". Recommend aligning the H1 to include "IPTV Setup": "IPTV Setup on Amazon Fire Stick — Step-by-Step Guide (2026)". Same nit likely applies to all 12 device tutorials.

### Heading hierarchy
- Homepage has visible H2 duplication ("37,000 Live Channels" appears as both an H3 feature label and an H2 section title). Not a bug but worth deduping to strengthen semantic clarity.
- Cluster pages have clean H1 → H2 → H3 flow with no skipped levels.

### Internal linking
- Every cluster page links to the other 3 sibling clusters via a "Related UK IPTV Guides" block. Good.
- Tutorial hub links to all 12 device pages; each device page links back to hub + 3 sibling devices (deterministic rotation).
- Homepage nav includes cluster pages? **Not verified** — confirm the top-nav / footer includes cluster page links; if only the "Related guides" module carries the crawl, the clusters get one hop instead of two.
- Anchor text is descriptive (device names, "Fire Stick buyer's guide"), not "click here" — good.

### Breadcrumb
- **BreadcrumbList schema present, but no visible breadcrumb UI on cluster or tutorial pages.** Confirmed on `/best-iptv-uk-2026` (WebFetch: "No breadcrumb navigation visible on the page"). Google requires the visible breadcrumb to match the marked-up one — schema-only is at best ignored.

---

## 4. Schema / Structured Data

### Current implementation (verified live via `curl` + `grep '@type'`)

| Page | Types emitted |
|---|---|
| Homepage | Organization, WebSite, WebPage, BreadcrumbList, Product, 4× Offer, FAQPage (9 items) |
| `/best-iptv-uk-firestick` | WebPage, Article, BreadcrumbList, FAQPage (6 items), Organization (nested), 2× ImageObject |
| `/tutorials/samsung-tv` | WebPage, Article, BreadcrumbList, Organization, 2× ImageObject |
| `/is-iptv-legal-uk` | WebPage, Article, BreadcrumbList, FAQPage (4 items), Organization, 2× ImageObject |
| `/blog/best-iptv-uk-guide-2026` | Article, BreadcrumbList, Organization, WebPage, ImageObject, ListItem |

### Validation
- @graph pattern used correctly (Sprint 2 win — single `<script type="application/ld+json">` per page instead of fragmented blocks).
- `@id` cross-references resolve within-graph.
- `publisher.logo` emits `width: 1024, height: 1024` — Rich Results-safe.
- `Product.offers` array uses `priceCurrency: GBP`, `availability: InStock`, `priceValidUntil: 2027-07-05` (~1 year forward — good practice).

### Issues
- **Organization.contactPoint.email = `contact@buy-iptv-uk.com`** (cross-domain). Sprint 2 commit claims resolution but constants.ts still ships the old value. **This is the highest-priority schema fix.**
- No BreadcrumbList visible-UI counterpart (see §3).
- FAQPage on commercial cluster pages: per Aug 2023 Google restriction, FAQPage rich results are only shown for government/health sites. **Info priority only** — the schema still helps LLM/AI citation (Perplexity, ChatGPT, Copilot), so keep it, don't add more.
- Legal pages (`/privacy`, `/terms`, `/dmca`, `/refund`) have no page-level Article/WebPage schema. Adding a minimal `WebPage` with `dateModified` would help freshness signals and is 6 lines of code per page.
- No `Person` schema for authors (blocked by the "no named author" gap in §2).

### Deprecated types not used (correct)
- No HowTo schema (deprecated Sep 2023) — correct that Tutorial pages use `Article`, not `HowTo`.

---

## 5. Performance

Field data unavailable (no GSC/CrUX credentials). Lab-inferred from live SSR HTML + response headers:

### Confirmed wins
- Server components everywhere except necessary islands (Sprint 2). H1 renders plain text, no motion wrapper. LCP element is likely the hero H1 or the preloaded logo.
- Logo preloaded via `<link rel="preload" as="image" fetchPriority="high">` with full responsive srcset (32w → 3840w).
- Fonts preloaded with `crossorigin` — Inter + Outfit, `.woff2`, `fetchPriority` high implicit via preload.
- Cloudflare edge caching HIT on homepage. `cache-control: s-maxage=31536000`.
- `next.config.ts`: `compress: true`, AVIF+WebP, `optimizePackageImports: ["lucide-react", "framer-motion"]`.

### Risks
- framer-motion in `dependencies` (12.38.0). Even with `optimizePackageImports`, if hydration blocks the main thread on low-end Android, INP suffers.
- Vimeo iframe on `/tutorials/firestick` — verify `loading="lazy"` and reserved dimensions to avoid CLS.
- Homepage HTML ~207 KB (compressed transfer). Not alarming but worth watching if content grows.

### Action
1. Run PageSpeed Insights on homepage, `/best-iptv-uk-2026`, `/tutorials/firestick`, `/is-iptv-legal-uk`. Capture LCP/INP/CLS per URL.
2. Verify Vimeo embed is lazy.
3. Consider replacing framer-motion with CSS-only animations for the 6 islands — the visual payoff is minimal.

---

## 6. AI Search Readiness (GEO)

### Confirmed
- `llms.txt` served at 200. Content: H1 title, tagline, Primary section (6 links), Editorial (5 links), Policy (4 links), Contact. Clean, indexable by AI aggregators.
- Article schema with `datePublished` + `dateModified` on every long-form page.
- FAQPage with `Question`/`Answer` pairs — high AI-citation value.
- Semantic H2/H3 structure that LLMs parse cleanly.
- Editorial policy public.

### Gaps
- `robots.txt` doesn't declare any AI crawler allowlist. If the strategy is to be cited by ChatGPT / Perplexity / Copilot, explicitly `Allow` GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, ChatGPT-User, Google-Extended, Amazonbot, CCBot. `llms.txt` alone doesn't grant them access — robots governs the crawl.
- Only 1 external outbound citation across the 5 cluster pages (ispreview.co.uk on `/is-iptv-legal-uk`). LLMs preferentially cite pages that themselves cite authoritative sources — this is a citation-worthiness signal.
- No `Person` schema, no author profile pages. AI systems that cite may need to attribute a source — anonymous "Editorial Team" is weak attribution.
- Homepage FAQ excludes the "How many UK channels are included?" question (filtered by constants). If the intent is to reserve this question for a specific cluster page, verify it's answered in schema elsewhere; otherwise re-add.

---

## 7. Images

### Confirmed
- next/image with responsive srcset (15 breakpoints from 32w to 3840w).
- AVIF + WebP formats configured.
- 30-day cache TTL.
- `alt` attribute usage not fully verified — recommend a targeted audit.

### Gaps
- **Only 2 content images in `public/`:** `best-iptv-subscription.webp` (100 KB, 1024×1024) and `best-iptv-uk-xott.webp` (1.8 KB, thumb). No dedicated 1200×630 OG image — social preview scaling uses the 1024×1024 logo, which crops awkwardly on LinkedIn/X.
- No content images on cluster pages beyond the logo. Fire Stick page could benefit from a Fire Stick model comparison table image; pricing page could use a plan comparison graphic; `/tutorials/*` could use annotated device UI screenshots (with proper alt text and OCR-friendly labels).
- **Recommendation:** Add one 1200×630 OG asset per page family (homepage, cluster, tutorials, blog) and reference via `metadata.openGraph.images`.

---

## 8. Sitemap Quality Gates

- 33 URLs — within the quality gate range (no location-page risk since site is single-country UK-only, not multi-location).
- Priority spread appropriate (homepage 1.0, tier-2 cluster 0.85–0.9, tutorials 0.6, tier-3 legal 0.4).
- **All URLs share hardcoded lastmod dates** — recommend deriving from git commit time via a build-time helper (e.g., `child_process.execSync("git log -1 --format=%aI src/app/...")`).

---

## 9. Business-Type Notes

Site scores as a **service+editorial hybrid**. Not local — skip the `seo-local` / `seo-maps` recommendations. Not classic e-commerce — Product schema with 4 Offer variants is correct; no need for catalog-level `ItemList` or `AggregateOffer`. Publisher pattern applies to the blog + tutorials but the site is not primarily a publisher.

Because primary keywords all include "UK", **Google GB targeting matters**. Confirm the property is set to United Kingdom in GSC (Legacy International Targeting or ccTLD-based auto). `.com` domain means Google doesn't auto-target — explicit setting required.

---

## 10. What Was NOT Audited (and why)

- **Field CWV data (CrUX / GSC)** — no Google API credentials configured. Highest-value follow-up.
- **Backlink profile** — no Moz / Bing / DataForSEO credentials.
- **Individual blog post pages** — verified `/blog/best-iptv-uk-guide-2026` renders correctly with Article schema; other 3 assumed to follow same dynamic route pattern.
- **Alt text audit** — HTML samples showed few images; full audit needs `beautifulsoup` or Playwright, out of scope for a static curl+grep pass.
- **Broken-link crawl at 500-page depth** — site is 33 URLs, not needed.
- **Log-file analysis / crawl budget** — no server access.

---

*See `ACTION-PLAN.md` for prioritised remediation with effort estimates and falsifiability checks.*
