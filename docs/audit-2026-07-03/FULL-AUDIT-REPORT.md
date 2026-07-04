# Full SEO Audit — best-iptv-uk-subscription.com

**Audit date:** 2026-07-03
**Branch inspected:** `seo/phase2-cluster-scaffold-2026-06`
**Scope:** live site + local Next.js source (16 indexable URLs; 1 noindex utility page)

---

## Executive Summary

**SEO Health Score: 75 / 100**

**Business type detected:** Direct-to-consumer subscription product (IPTV) + supporting editorial cluster.
- Not classic e-commerce (WhatsApp checkout, no cart), not local (no map pack), not pure publisher.
- Falls in Google's YMYL-adjacent tier: legal ambiguity + consumer financial commitment. E-E-A-T bar is elevated.

**What's strong.** The editorial cluster (5 hub pages + 4 blog posts) is unusually well-argued for the category — sourced against Ofcom, `legislation.gov.uk`, FACT, PIPCU. `/is-iptv-legal-uk` explicitly frames the trust framework the site is being judged against, which is defensible against the affiliate-review SERP glut. Schema coverage is broad (Organization, WebSite, WebPage, Product with Offers array, FAQPage, Article, BreadcrumbList). `llms.txt` is published. Robots + sitemap + canonicals + hreflang(`en-GB`) are all in place. Testimonials were previously fabricated and have correctly been disabled (`TestimonialsSection.tsx` returns null) — good defensive move.

**What's blocking real gains.** Three findings compound: (1) the logo URL referenced in every JSON-LD block on every page (`/buy-iptv-uk.webp`) is a 404 — the actual asset at `/best-iptv-subscription.webp` is used only in the visible logo, not in schema; (2) the `/tutorials` page ships deprecated `HowTo` schema (Google dropped rich results for it in Sept 2023); (3) contact email lives on a different domain (`buy-iptv-uk.com`) than the site brand — a soft E-E-A-T signal that undermines the "verifiable UK entity" argument the cluster pages make.

**Top 5 critical issues** (see ACTION-PLAN.md for fixes):
1. Broken logo URL in Organization/Article/Product JSON-LD across every page.
2. Deprecated `HowTo` schema on `/tutorials`.
3. Duplicate `@id` collision on `/best-iptv-uk-2026` (`#article` used twice).
4. Cross-domain contact email undermines E-E-A-T trust signals.
5. Framer-motion `opacity: 0 → 1` on the H1 element delays LCP paint on the homepage and every subpage hero.

**Top 5 quick wins** (≤ 1 day each):
1. Replace `${SITE_URL}/buy-iptv-uk.webp` with `${SITE_URL}/best-iptv-subscription.webp` in three files (`app/page.tsx`, `app/blog/[slug]/page.tsx`, `components/SubPageShell.tsx`).
2. Delete the `HowTo` `<script>` block from `app/tutorials/page.tsx`.
3. Move the LCP H1 out of the framer-motion `initial={{ opacity: 0 }}` wrapper.
4. Add `openGraph.images` to `app/layout.tsx` (currently absent — social cards render blank).
5. Add a real `Person` author with `sameAs` to `AUTHOR_BYLINE` so `Article.author` becomes verifiable rather than a generic Organization.

---

## Synthesis — the four phases

### PERCEIVE
- **Observe-external.** SERP for "best iptv uk" is dominated by affiliate review lists ranking the same 7–10 providers in different orders. A direct operator publishing an evidence-led buyer's framework is a rare position — the site's own `/best-iptv-uk-2026` copy names this dynamic explicitly. The strategy is defensible if execution matches editorial voice.
- **Observe-internal.** Well-structured Next.js 15 App Router codebase. Recent commit history shows disciplined phased execution (Phase 1 → 5), a GEO infrastructure phase (2b+2c+3), and compliance scrub work. `llms.txt` shipped in Phase 4.5. No exposed secrets, no obvious tech debt.
- **Listen.** Editorial voice is direct, non-hype, willing to acknowledge conflicts of interest. The recent commit "compliance scrub" and the choice to disable fake testimonials both signal an operator aware of E-E-A-T risk in this vertical.

### ANALYZE
- **Think (first principle).** In a legally-ambiguous product category, SEO is won by proving trustworthiness through documentary signals more than by keyword coverage. Every technical gap that touches trust — broken logo in schema, cross-domain email, org-only author, missing OG image — costs disproportionately here. Ranking gaps in this vertical usually trace back to trust, not topical.
- **Connect-lateral.** `/is-iptv-legal-uk` is the site's highest-leverage page: it discusses the same trust framework Google evaluates on. It's already linked from every sibling cluster page via `SubPageShell.relatedGuides`, but it's not linked prominently from the homepage. Elevating it in the top nav would compound both organic AND conversion effects (buyers researching legality convert better when the operator addresses it directly).
- **Connect-system.** One broken image URL in JSON-LD cascades three ways: (a) Google Rich Results validator flags Organization schema → weak brand signal in Knowledge Graph; (b) `logo` failure prevents Article rich results; (c) LLM crawlers reading the schema may drop the citation. One fix, three benefits.

### VALIDATE
- **Feel.** There is a mismatch between the editorial content (careful sourcing, plain-English legal analysis, published prices, published refund window) and the marketing visual chrome (particle backgrounds, aurora blobs, framer-motion opacity animations on every H1). The editorial voice says "we publish evidence"; the visual chrome says "we're a landing page". Tightening the visual polish toward the editorial voice would reinforce E-E-A-T.
- **Accept.** Falsifiability checks:
  - If Google's Rich Results Test on the homepage validates the current schema, finding #1 is wrong — I predict it will flag the logo 404 as a warning.
  - If PageSpeed Insights (mobile) reports LCP < 2.5s despite the framer-motion opacity animation on the H1, finding #5 is wrong — I predict LCP will be 3.0–4.5s on mid-range Android.
  - If GSC organic queries show strong CTR on "iptv setup samsung tv" / "iptv setup lg smart tv" without dedicated URLs, the tutorials-should-split recommendation is wrong — I predict impressions will exist but CTR will be < 1% because the anchor-linked sections on `/tutorials` are `noindex`.

### ACT
- **Create.** Split `/tutorials` into 12 device-specific URLs (indexed), each targeting "iptv setup [device]" long-tail queries. Add a Person author with `sameAs` to real profiles (LinkedIn, X, industry byline). Add third-party review integration (Trustpilot) to replace the removed fake testimonials with verifiable social proof.
- **Grow.** Baseline CWV via CrUX field data (28-day window) now, remeasure in 30 days after the H1 opacity fix + framer-motion trim. Baseline GSC impressions for cluster hub pages and monitor 30/60/90 day trajectory. Wire up SEO Drift baseline (`/seo drift baseline`) so structural changes get flagged in future audits.

---

## Category findings

### Technical SEO — 70/100

**Green:**
- `robots.ts` allows `/`, disallows `/api/`, `/_next/`, `/admin/`, points to `/sitemap.xml`. Clean.
- `sitemap.ts` generates 16 URLs (7 static + 5 cluster + 4 blog). Priorities graded 0.4–1.0 sensibly.
- Canonicals set explicitly on every page via `alternates.canonical`.
- `hreflang` present (`en-GB` → `/`).
- Two 301 redirects wired for legacy blog slugs in `next.config.ts` — good migration hygiene.
- Global metadata: `metadataBase`, `title.template`, `description`, `keywords`, `authors`, `openGraph`, `twitter`, `robots.googleBot` all set.
- `<html lang="en-GB">` correct.
- Skip-to-content link present in layout.

**Red:**
- **No `openGraph.images` declared anywhere** — social share cards will render with no preview image.
- **No `x-default` hreflang** — safe for GB-only targeting but recommended even for single-locale sites.
- Sitemap `lastModified` for static routes uses `new Date()` at build time — every deploy stamps all static URLs as freshly modified. Over time this trains Google to discount the sitemap's `lastmod` signal. Use commit date or a stable per-route timestamp instead.
- `/tutorials` is intentionally `noindex, follow` — correct decision to avoid competing with the homepage, but the 12 device-specific sections could be split into indexable URLs that capture setup queries without hitting the homepage keyword.

**Missing:**
- No `<link rel="alternate" type="application/rss+xml">` for `/blog`.
- No `themeColor` variants for dark/light mode (single `#0a0a0a`).

### Content Quality — 82/100

**Green:**
- Cluster pages average 2,000–3,500 words each. Well-structured H2/H3 hierarchy.
- Sourced against verifiable primary documents: Ofcom Media Nations 2025, CDPA 1988, Consumer Rights Act 2015, Consumer Contracts Regulations 2013, FACT, PIPCU, ISPreview.
- Editorial voice consistent across all cluster pages.
- Homepage and cluster pages both address the same 7 buyer criteria — good topical consistency without duplicate content (framing differs per page).
- FAQ answers on cluster pages are 60–180 words each — right length for AI citation extraction.
- Blog posts (4 published) have distinct angles: buyer's guide, Fire Stick setup, IPTV vs pay-TV, sports streaming.
- Fabricated testimonials removed (`TestimonialsSection` returns null) — defensible under YMYL-adjacent scrutiny.

**Red:**
- **Author is a generic Organization ("Best IPTV UK Editorial")**, not a `Person` with credentials, `sameAs` profiles, or a bio page. In a YMYL-adjacent category this is the single biggest E-E-A-T weakness.
- **`AUTHOR_BYLINE.publishedDate === updatedDate === 2026-06-01`** on all cluster pages. The site claims editorial coverage "since 2023" (in `llms.txt` and copy) but no evidence of that history in the byline dates.
- **Cross-domain contact email** (`contact@buy-iptv-uk.com` on `best-iptv-uk-subscription.com`) undermines the "verifiable UK entity" claim the cluster pages themselves lean on.
- Homepage feature list uses the exact same 9-item feature block across all 4 pricing plans — verbatim repetition. Fine for humans, but risks being read as thin/boilerplate by content-quality classifiers.
- No published UK company registration number, no Companies House link — the `/is-iptv-legal-uk` page tells buyers to check exactly these signals on any provider, yet doesn't itself expose them.

### On-Page SEO — 85/100

**Green:**
- Title tags unique and keyword-rich across all pages, all under 60 chars target.
- Meta descriptions present on every page, 140–160 chars, action-oriented.
- H1 → H2 → H3 hierarchy clean across cluster pages.
- Rich internal linking via `relatedGuides` (3 sibling cluster links per page) + inline contextual links (e.g., "read the legal position on IPTV in the UK" → `/is-iptv-legal-uk`).
- Anchor text descriptive, not generic ("click here").
- URL slugs keyword-aligned and hyphenated correctly.
- Breadcrumb schema present on all cluster pages via `SubPageShell`.

**Red:**
- Homepage h1 renders as `<h1>` inside a framer-motion `motion.h1` with `initial={{ opacity: 0, y: 30 }}` — the LCP element starts invisible. Same pattern on every SubPageShell hero. This is a measurable LCP regression.
- No breadcrumb schema on the homepage itself (only on cluster pages).
- Blog listing page has no `ItemList` or `CollectionPage` schema — misses a rich-result opportunity for the guides index.
- Homepage nav uses hash links (`/#features`, `/#pricing`, `/#testimonials`, `/#faq`) but `#testimonials` no longer scrolls to visible content (TestimonialsSection returns null). Broken in-page anchor.

### Schema / Structured Data — 55/100

**Green:**
- Homepage: `Organization`, `WebSite`, `WebPage`, `Product` (with `Offers` array for all 4 tiers), `FAQPage`.
- Cluster pages: `WebPage`, `Article` (with `datePublished`, `dateModified`, `publisher`, optional `reviewedBy`), `BreadcrumbList`, `FAQPage`.
- Blog posts: `Article`, `BreadcrumbList`.
- `/best-iptv-uk-2026` adds `citation[]` schema referencing Ofcom, Consumer Rights Act, Consumer Contracts Regulations. Excellent E-E-A-T signal for LLM crawlers.
- IDs use fragment pattern (`${canonical}#article`, `#webpage`, etc.) — good for cross-references.

**Red — CRITICAL:**
- **Broken logo URL in every JSON-LD block on every page.** `Organization.logo`, `Article.publisher.logo`, `WebPage.primaryImageOfPage` all reference `${SITE_URL}/buy-iptv-uk.webp`. That file does not exist in `public/`. The actual logo asset is `/best-iptv-subscription.webp`. Files affected: `src/app/page.tsx:26`, `src/app/blog/[slug]/page.tsx:107`, `src/components/SubPageShell.tsx:85`.
- **Deprecated `HowTo` schema on `/tutorials/page.tsx`** (Sept 2023 Google deprecation — no rich results eligible, and the skill quality-gate explicitly forbids recommending it).
- **Duplicate `@id` on `/best-iptv-uk-2026`.** `SubPageShell` renders `Article` with `@id: ${canonical}#article`. The page then adds a second `articleProvenanceSchema` also using `${canonical}#article`. Two nodes with the same `@id` = graph collision. Move citations into the `SubPageShell` `citations` prop (already supported) instead of injecting a second Article.

**Red — HIGH:**
- Homepage `Product` schema has no `aggregateRating` or `review[]`. In this category, product rich results without ratings compete poorly.
- FAQ overlap: the homepage `FAQPage` schema and cluster-page `FAQPage` schemas share some questions verbatim. Consider deduplicating (cluster-page FAQs should differ from homepage FAQs; currently there's some overlap on core "what is IPTV" / "is IPTV legal" questions).
- No `Offer.priceValidUntil` on `Product.offers[]` — Merchant Center / Rich Results warn when this is missing.
- Homepage renders three separate `<script type="application/ld+json">` blocks instead of one `@graph`. Not a rendering issue but harder to maintain and Google prefers consolidated graphs.

### Performance (CWV) — 60/100 (estimated; no field data)

**Green:**
- `next.config.ts` has `compress: true`, `poweredByHeader: false`, `productionBrowserSourceMaps: false`.
- `optimizePackageImports: ["lucide-react", "framer-motion"]` — reduces bundle size via tree-shaking.
- Fonts loaded with `display: "swap"` and `preload: true` on Inter (`--font-sans`), `preload: false` on Outfit (`--font-display`) — sensible.
- Image formats set to AVIF + WebP with 30-day minimum cache TTL.

**Red:**
- **23 files marked `"use client"`.** For a marketing/editorial site whose content is 95% static text, this is far more client-side rendering than necessary. Every page ships React hydration for particles, aurora blobs, framer-motion, and interactive FAQ accordions.
- **H1 LCP element delayed by framer-motion opacity animation.** `<motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1 }}>` means the largest text on the page starts invisible until framer-motion mounts. On mobile mid-range (Moto G4-class), this typically pushes LCP into 3.5–4.5s territory. FCP is likely fine because the H1 gradient background paints first.
- Particle background (`ParticleBackground.tsx`) is present on every page hero — a canvas animation running on the main thread. INP risk especially on scroll.
- 6 aurora blob divs + 3 radial-gradient overlays + mesh grid + 4 floating orb divs on every hero. Aggregate paint area is huge. Fine on desktop, expensive on mobile GPU.

**Cannot measure without field data:**
- Real LCP / INP / CLS values. Recommendation: enable CrUX (or install `web-vitals` reporter to GA4) and run `/seo google` after Google API auth to pull field data.

### AI Search Readiness (GEO) — 88/100

**Green:**
- **`llms.txt` published** and well-structured (primary / editorial / policy / contact sections).
- Cluster pages use "what is X in 2026" framing — matches AI Overview extraction patterns.
- FAQ answers 60–180 words — right length for LLM extraction and citation.
- Sourced against primary documents (Ofcom, `legislation.gov.uk`) with named references — LLMs preferentially cite pages that themselves cite verifiable sources.
- `citation[]` schema on `/best-iptv-uk-2026` explicitly names Ofcom Media Nations and Consumer Rights legislation.
- Specific numbers throughout (37,000 channels, 198,000 films, £3.75/mo, 30-day refund, 25 Mbps for 4K) — LLM-quotable.
- Author bylines rendered as visible text on every cluster page.
- Breadcrumb schema helps LLMs understand cluster hierarchy.

**Red:**
- Author is Organization, not Person — LLMs trained on E-E-A-T signals prefer named human authors.
- Homepage does not include the same evidence-density as cluster pages (buyer's guide claims are made without the same source citations). Homepage is the most crawled page — GEO benefits from lifting one Ofcom citation into homepage copy.
- No `mentions[]` schema linking to third-party mentions (press, review sites the operator has legitimately been covered by).

### Images — 72/100

**Green:**
- Only 2 image assets on the whole site (logo used 2x). Minimal image debt.
- `next.config.ts` configured for AVIF/WebP output.
- Visible logo has descriptive alt text ("Best IPTV Subscription logo") in both Navbar and Footer.
- Favicon set complete (16, 32, 180, 192, 512).

**Red:**
- **Zero use of `next/image`.** The Navbar and Footer render logos via native `<img>` (assumed from the alt text patterns). No lazy-loading, no `width`/`height` reservation, no automatic format negotiation.
- No hero image on the homepage — the LCP element is text (H1). Not inherently bad, but a hero image with proper `priority` prop would give a controllable LCP target.
- No `og:image` or `twitter:image` asset exists — social share cards render blank. Add a `1200×630` OG image to `public/og-default.png` and wire it into `layout.tsx`.
- No image XML sitemap (not needed at current image count).
- Logo alt "Best IPTV Subscription logo" — brand name in the alt is "Best IPTV Subscription" while the actual brand ("Best IPTV UK" per `SITE_NAME`) differs. Slight inconsistency.

---

## Cluster page assessment (all 5)

| Page | Word count* | Author byline | Cites sources | Internal links | FAQ items | Score |
|------|-------------|---------------|----------------|-----------------|-----------|-------|
| `/best-iptv-uk-2026` | ~2,800 | ✓ | Ofcom, CRA 2015, CCRs 2013 | 5+ | 7 | 88 |
| `/best-iptv-subscription-uk` | ~2,400 | ✓ + Reviewer | Implicit | 4 | 6 | 82 |
| `/best-iptv-uk-firestick` | ~2,300 | ✓ | Implicit | 4 | 6 | 80 |
| `/is-iptv-legal-uk` | ~2,200 | ✓ | CDPA 1988, Fraud Act, FACT, PIPCU, ISPreview | 4 | 5 | 90 |
| `/best-iptv-uk-vs-traditional-tv` | ~2,300 | ✓ | Ofcom Connected Nations 2025 | 3 | 6 | 82 |

*Estimated from visible copy on live URLs.

**Cluster verdict:** Content quality is above the vertical median. The two strongest pages (`/is-iptv-legal-uk`, `/best-iptv-uk-2026`) are the two with explicit primary-source citations — extend that pattern to the other three.

---

## Route inventory

**Indexed (16):**
- `/`, `/blog`, `/contact`, `/terms`, `/privacy`, `/dmca`, `/refund`
- `/best-iptv-uk-2026`, `/best-iptv-subscription-uk`, `/best-iptv-uk-firestick`, `/is-iptv-legal-uk`, `/best-iptv-uk-vs-traditional-tv`
- `/blog/best-iptv-uk-guide-2026`, `/blog/how-to-setup-iptv-firestick`, `/blog/iptv-vs-traditional-tv`, `/blog/live-uk-sports-streaming-guide`

**Noindexed (1):** `/tutorials` — intentional (post-purchase content).

**In redirects (`next.config.ts`):** `/blog/iptv-vs-sky-comparison` → `/blog/iptv-vs-traditional-tv`, `/blog/premier-league-streaming-guide` → `/blog/live-uk-sports-streaming-guide`. Good migration hygiene.

**Missing from sitemap:** No `/tutorials` entry (correct — noindex). No `/robots.txt` or `/llms.txt` self-references (not required).

---

## Findings by priority

See `ACTION-PLAN.md` for prioritized recommendations with dependency sequencing and falsifiability checks.

**Counts:**
- Critical: 3
- High: 8
- Medium: 8
- Low: 6

---

## What was NOT audited

- **Field CWV data.** No CrUX record inspected (Google API not configured for this session). Estimated performance score is bench-mark-based. Run `python scripts/google_auth.py --check` + `/seo google cwv` for real numbers.
- **Backlinks.** No Moz / Bing API keys detected. Domain authority and referring-domain profile not measured.
- **Live SERP position.** DataForSEO MCP not invoked; no rank data.
- **Full-site crawl.** Firecrawl extension not installed; static route inventory used instead. 16 URLs known via `sitemap.ts` should be full coverage of indexable content anyway.
- **Legal page copy** (`/terms`, `/privacy`, `/dmca`, `/refund`). Metadata inspected; content not deep-read.
- **Live JavaScript execution.** Rendered DOM inspected via WebFetch (which strips some client-rendered content). Cluster page JSON-LD was confirmed by reading source; the WebFetch reports incorrectly stated "no JSON-LD" on cluster pages — the schema IS rendered.

---
