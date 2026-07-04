# Action Plan — best-iptv-uk-subscription.com

**Audit date:** 2026-07-03
**Companion doc:** `FULL-AUDIT-REPORT.md`

Each recommendation carries:
- **THINK** — the first-principle observation it rests on
- **CONNECT** — which other recommendation(s) it depends on or unblocks
- **FALSIFY** — how you would know this recommendation was wrong
- **GROW** — the leading indicator to monitor post-fix

---

## Critical (fix immediately — blocks rich results, damages trust signals)

### C1. Fix the broken logo URL in every JSON-LD block

**Files:**
- `src/app/page.tsx:26` — `const logoUrl = \`${SITE_URL}/buy-iptv-uk.webp\`;`
- `src/app/blog/[slug]/page.tsx:107` — `url: \`${SITE_URL}/buy-iptv-uk.webp\`,`
- `src/components/SubPageShell.tsx:85` — `const logoUrl = \`${SITE_URL}/buy-iptv-uk.webp\`;`

**Fix:** Replace `/buy-iptv-uk.webp` with `/best-iptv-subscription.webp` (the actual asset in `public/`). Better yet, add a `LOGO_URL` constant to `src/lib/constants.ts` so all three references share one source of truth. Even better: ship a purpose-built square logo (min 112×112, ideally 512×512) at `public/logo.png` — Google's Organization schema prefers a square, transparent-background logo.

**THINK:** Rich Results validation fails silently — Google won't reject the page, it just won't render the enhanced result. A 404 on `logo` cascades into Article, Product and Knowledge Graph handling.

**CONNECT:** Unblocks C3 (duplicate `@id` collision is unimportant if the parent schema fails validation anyway). Prerequisite for M3 (`aggregateRating` — Rich Results won't render on Product until logo resolves).

**FALSIFY:** Run Google's Rich Results Test on `/` before the fix — if it validates without warnings, this recommendation is wrong. Prediction: it will warn on `Organization.logo` HTTP fetch failure.

**GROW:** GSC `Enhancements > Organization / Article / Product` reports. All three should move from "warning" to "valid" within 7 days of the crawl.

---

### C2. Remove deprecated `HowTo` schema from `/tutorials`

**File:** `src/app/tutorials/page.tsx:40-92` — the entire second `<script type="application/ld+json">` block.

**Fix:** Delete the `HowTo` JSON-LD block. Google deprecated `HowTo` rich results in September 2023 — the markup no longer generates rich results and can be interpreted as spam signal on non-DIY commercial sites.

**Alternative:** If the goal was to help LLMs extract the setup steps, use `Article` with `hasPart[]` referencing named steps instead. But the simpler action is deletion.

**THINK:** Deprecated schema types accrue technical debt — Google's classifiers may downweight the page over time even if today's guidance is neutral.

**CONNECT:** No dependencies. Standalone fix. Sequences well with H2 (splitting tutorials into indexable URLs) — do C2 before H2 or the deprecated schema would propagate to every new sub-URL.

**FALSIFY:** If Google's guidance restores `HowTo` rich results for commercial sites in 2026, this recommendation is wrong. Current status: deprecated for all except recipe / DIY sites, no indication of reversal.

**GROW:** None specific — this is preventative, not diagnostic. Track via SEO drift baselines.

---

### C3. Resolve duplicate `@id` collision on `/best-iptv-uk-2026`

**Files:**
- `src/components/SubPageShell.tsx:89` — `Article["@id"]: \`${canonicalUrl}#article\``
- `src/app/best-iptv-uk-2026/page.tsx:119` — `Article["@id"]: \`${CANONICAL}#article\`` (in `articleProvenanceSchema`)

**Fix:** Move the citations and `about` entities into the `SubPageShell` `citations` and `aboutEntities` props (both are already supported — see `SubPageShell.tsx:53-54`). Remove the separate `articleProvenanceSchema` script block from `best-iptv-uk-2026/page.tsx:114-143` and `page.tsx:609-612`.

Concrete diff for `best-iptv-uk-2026/page.tsx`:

```tsx
<SubPageShell
  slug={SLUG}
  title="Best IPTV UK 2026 — A Seven-Criteria Buyer's Guide"
  category="Buyer's Guide 2026"
  intro="..."
  byline={AUTHOR_BYLINE}
  readTime="12 min read"
  relatedGuides={relatedGuides}
  faqItems={faqItems}
  citations={[
    { name: "Media Nations 2025", url: "https://www.ofcom.org.uk/research-and-data/tv-radio-and-on-demand/media-nations-reports" },
    { name: "Consumer Rights Act 2015", url: "https://www.legislation.gov.uk/ukpga/2015/15/contents" },
    { name: "The Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013", url: "https://www.legislation.gov.uk/uksi/2013/3134/contents" },
  ]}
  aboutEntities={[
    { name: "IPTV" },
    { name: "United Kingdom" },
  ]}
>
```

Then delete the `articleProvenanceSchema` const and its `<script>` block.

**THINK:** Two nodes with the same `@id` in the same `@graph` is a graph-integrity error. Google may pick either arbitrarily or fail silently.

**CONNECT:** Depends on C1 being deployed first (schema won't validate at all until the logo resolves). Enables spreading the same citation pattern to the four other cluster pages (recommendation H1).

**FALSIFY:** If schema.org validators accept duplicate `@id` within `@graph`, this is wrong. Both schema.org and Google validators flag it.

**GROW:** Rich Results Test on `/best-iptv-uk-2026` should validate with citations attached to the Article after the fix.

---

## High (fix within 1 week — significant impact on rankings and trust)

### H1. Add Person author with `sameAs` — replace generic Organization author

**Files:** `src/lib/constants.ts` (`AUTHOR_BYLINE`), `src/components/SubPageShell.tsx:97-101`, `src/app/blog/[slug]/page.tsx:93-97`.

**Fix:** Introduce a named editor (real person, real credentials). Update `AUTHOR_BYLINE`:

```ts
export const AUTHOR_BYLINE = {
  name: "Anas Aftis",           // or whoever leads editorial
  role: "Editor",
  description: "Ten years covering UK broadcast and streaming.",
  publishedDate: "2023-11-01",   // real historic date if the "since 2023" claim holds
  updatedDate: "2026-06-01",
  sameAs: [
    "https://www.linkedin.com/in/...",
    "https://twitter.com/...",
  ],
} as const;
```

Update `SubPageShell.articleSchema.author` to emit `@type: "Person"` when `sameAs` is present.

**THINK:** In YMYL-adjacent categories, Google's Quality Rater Guidelines explicitly favour named, credentialed authors. LLMs replicating those signals do the same. Generic "Editorial Team" bylines carry near-zero E-E-A-T weight.

**CONNECT:** Extends the Article schema fixed by C3. Also affects blog posts. Pairs with H4 (Publisher registration) — both attack the same "who are you really" question.

**FALSIFY:** If a comparable competitor site ranking above this one uses only "Editorial Team" bylines, the effect is weaker than claimed. Spot-check the top 5 SERP results for "best iptv uk" — count named authors.

**GROW:** GSC impressions on "best iptv uk" over 60 days. Named-author E-E-A-T changes usually show in impressions before positions.

---

### H2. Split `/tutorials` into 12 indexable device-specific URLs

**Current:** All 12 device guides on one `noindex` page with anchor links.

**Fix:** Create `/tutorials/[slug]` route with slugs like `firestick`, `samsung-tv`, `lg-tv`, `apple-tv`, `android-tv`, `iphone`, `windows-mac`, etc. Move the per-device sections into individual pages. Keep `/tutorials` as an index (indexable). Each device page targets "iptv setup [device]" long-tail — dozens of these queries have UK search volume in the 100–2,000/month range.

Each per-device page should include:
- `Article` schema (not `HowTo`, per C2)
- A device-specific H1 ("IPTV Setup on Samsung Smart TV — 5-Minute Guide")
- 800–1,200 words of unique content per page (not a copy of `/tutorials` content)
- Cross-link back to `/tutorials` index and forward to `/best-iptv-uk-firestick` where relevant

**THINK:** Anchor links inside a `noindex` page capture zero organic. Setup queries are dense long-tail — 12 URLs is a floor, not a ceiling.

**CONNECT:** Requires C2 done first (kill deprecated `HowTo`). Complementary to H1 (Person author gives each new page immediate E-E-A-T signal).

**FALSIFY:** Check GSC (once configured) for existing impressions on "iptv setup [device]" queries where the landing URL is `/tutorials`. If those queries already receive impressions with acceptable CTR, splitting is unnecessary. Prediction: impressions exist, CTR < 1% because the page is `noindex, follow` — Google shows anchor snippets but the page can't hold position.

**GROW:** Baseline the current sum of GSC impressions on setup queries. Target: 5× impressions across the 12 device pages within 90 days.

---

### H3. Un-hide the LCP element — remove `opacity: 0` from H1 animations

**Files:** `src/components/HeroSection.tsx:67-77`, `src/components/SubPageShell.tsx:269-277`.

**Fix:** Either:
- Remove `initial={{ opacity: 0, y: 30 }}` from the `motion.h1` entirely (SSR-first, no animation on LCP), OR
- Keep the y-transform but drop opacity: `initial={{ opacity: 1, y: 30 }} animate={{ y: 0 }}` — transform doesn't affect LCP timing, opacity does.

The subtitle and CTA can still fade in — the LCP element specifically must be paintable immediately.

**THINK:** LCP is the largest element paintable in the initial viewport. If the largest element starts with `opacity: 0`, LCP timer waits for the animation to complete. Framer-motion mounts client-side, so the delay compounds with hydration cost.

**CONNECT:** Independent of other schema fixes. Compound with H5 (reduce framer-motion / particle surface) for measurable CWV improvement.

**FALSIFY:** Run a Chrome DevTools trace on `/` before and after. If LCP time doesn't decrease by ≥ 300ms on a 4G Fast throttled profile, the effect is smaller than claimed. Prediction: ~500-800ms improvement.

**GROW:** CrUX field data (once 28-day window elapses post-deploy). Also measurable via Lighthouse in CI.

---

### H4. Publish the operator's UK entity registration

**Fix:** Add a `/about` page (or expand `/contact`) with:
- Registered company name
- Companies House registration number (with a link)
- Registered UK address
- Data controller / ICO registration (if applicable)
- Named editor + reviewer bios

Add matching `Organization.legalName`, `Organization.address` (as `PostalAddress`), `Organization.taxID` (if applicable) to the homepage JSON-LD.

**THINK:** `/is-iptv-legal-uk` tells buyers to check for exactly these signals on any provider ("Companies House filing for the operating entity"). The site does not itself pass its own test. This is a credibility asymmetry visible to any reader who runs the checklist.

**CONNECT:** Pairs with H1 (Person author) — both attack "who are you". Independent of technical schema fixes.

**FALSIFY:** If the operator is deliberately unregistered or offshore-based, this recommendation is unworkable. Then the honest fix is to remove the "verifiable UK entity" framing from `/is-iptv-legal-uk`.

**GROW:** Track direct branded search ("best iptv uk reviews", "best iptv uk company") in GSC as a proxy for trust queries.

---

### H5. Trim client-side rendering surface

**Fix:**
- Convert `SubPageShell`, `HeroSection`, `PricingSection`, `FAQSection`, `ChannelsSection`, `FeaturesSection`, `DevicesSection`, `ComparisonSection`, `TrustSection`, `CTASection` from `"use client"` to Server Components. Only the interactive parts (FAQ accordion open-state, checkout modal) actually need client hydration.
- Move framer-motion out of hero components. Use CSS `@keyframes` fade-in for the subtitle/CTA if animation is critical; drop it from the H1 entirely (per H3).
- Consider removing `ParticleBackground` on cluster/blog pages — decorative canvas animation on content-heavy pages is a mobile INP hit.

**THINK:** 23 client components on a marketing site is 20 too many. Content-first pages should render on the server, hydrate only interactive islands.

**CONNECT:** Compounds with H3 to move CWV materially. Do not do H5 before verifying the interactive FAQ still opens correctly.

**FALSIFY:** If Lighthouse Performance score is already 90+ on mobile, don't spend the effort. Prediction: current mobile score is 60–75.

**GROW:** Lighthouse mobile Performance score. Baseline now, target +15 points post-fix.

---

### H6. Add default `openGraph.images` in root layout

**File:** `src/app/layout.tsx:65-73` — `openGraph` block has `siteName`, `url`, `title`, `description` but no `images` array.

**Fix:** Generate a 1200×630 OG card (`public/og-default.png`), and add:

```ts
openGraph: {
  ...existing,
  images: [
    { url: "/og-default.png", width: 1200, height: 630, alt: "Best IPTV UK — Premium 4K UHD Streaming" },
  ],
},
twitter: {
  ...existing,
  images: ["/og-default.png"],
},
```

Per-page overrides for the 5 cluster pages: each `metadata.openGraph.images` can point to a page-specific card. Use `/seo image-gen og-card` if the extension is installed.

**THINK:** Social share cards are the primary discovery path for LLM-mentioned content (users see the card in Slack/X/LinkedIn before they click). No image = no click.

**CONNECT:** No dependencies. Standalone.

**FALSIFY:** If the site gets zero social sharing (all traffic is organic search / direct), the effect is small. Check GA4 referral traffic.

**GROW:** Twitter/X and LinkedIn share preview counts — check quarterly.

---

### H7. Fix broken in-page anchor `#testimonials`

**File:** `src/lib/constants.ts:5-11` — `NAV_LINKS` includes `{ label: "Reviews", href: "/#testimonials" }`.

**Fix:** Since `TestimonialsSection` returns null, the anchor doesn't scroll anywhere. Either:
- Remove "Reviews" from `NAV_LINKS` until real reviews return.
- Or re-purpose the anchor to `/#trust` (the `TrustSection` still renders).

**THINK:** A nav link that scrolls to nothing is a small UX defect that Google's UX signals (dwell, back-to-SERP) can pick up as a quality issue over time.

**CONNECT:** Independent. Ties conceptually to L2 (surface Trustpilot when live).

**FALSIFY:** Check the live site — click "Reviews". If it visibly scrolls somewhere useful, this is already fixed. It doesn't.

**GROW:** None — trivial fix.

---

### H8. Consolidate homepage schema into a single `@graph`

**File:** `src/app/page.tsx:42-137`.

**Fix:** The homepage renders three separate `<script type="application/ld+json">` blocks (Organization+WebSite+WebPage graph, Product, FAQPage). Merge all three into one `@graph` array. Ensures `@id` references resolve within the same graph and simplifies future edits.

**THINK:** Google parses each `<script>` tag independently. Cross-references (`{"@id": "..."}`) work best inside a single graph. Also reduces the HTML payload marginally.

**CONNECT:** Should be done AFTER C1 (fix logo) and BEFORE M3 (aggregateRating), because M3 will reference `#product` inside the same graph.

**FALSIFY:** Google Rich Results Test accepts multiple separate blocks without issue — this is a maintainability fix, not a validation fix.

**GROW:** None — code health.

---

## Medium (fix within 1 month — optimisation opportunities)

### M1. Add `priceValidUntil` to Product Offers

**File:** `src/app/page.tsx:108-116` — the `PRICING_PLANS.map((plan) => ({ ... }))` block.

**Fix:** Add `priceValidUntil` to each Offer. Point it to a date 12 months in the future or the next planned pricing review. Merchant Center and Rich Results warn without this.

### M2. Publish real historic byline dates

**File:** `src/lib/constants.ts:405-411` — `AUTHOR_BYLINE.publishedDate = "2026-06-01"`.

**Fix:** If editorial coverage genuinely started in 2023, set `publishedDate` per-page to reflect the real first publication date, keep `updatedDate` current. Per-page overrides can live in each cluster page file. If the "since 2023" claim isn't true, drop it from `llms.txt`.

### M3. Add third-party review integration (Trustpilot / Feefo)

**Fix:** Replace the removed fake testimonials with a real review widget. Add corresponding `AggregateRating` to the homepage `Product` schema pointing at the third-party rating. Do NOT self-report ratings without a third-party audit trail — Google's structured data policy explicitly requires ratings be verifiable.

### M4. Deduplicate FAQ overlap between homepage and cluster pages

**Fix:** The homepage FAQ and cluster-page FAQs share a few questions verbatim. Either:
- Remove the overlapping questions from the homepage (keep them on the more topical cluster page), OR
- Keep them on the homepage but drop them from cluster pages.

Rule of thumb: put an FAQ where the topical page match is strongest, and avoid the same Question schema markup on two URLs.

### M5. Add `BreadcrumbList` to homepage

**Fix:** Currently only cluster pages have breadcrumb schema. Add a single-item breadcrumb (`Home`) to homepage schema for consistency across the site.

### M6. Add `CollectionPage` schema to `/blog`

**File:** `src/app/blog/page.tsx`.

**Fix:** Add `CollectionPage` with `hasPart` referencing the 4 blog `Article` URLs. Helps Google understand `/blog` as a hub.

### M7. Fix sitemap `lastModified` policy for static routes

**File:** `src/app/sitemap.ts:14-21`.

**Fix:** Static routes use `now` — every deploy stamps them freshly modified. Use a per-route stable date (e.g., pull from a JSON manifest of last-known-good build dates, or commit HEAD date).

### M8. Cross-domain email — either move to primary domain or explain

**Fix:** `contact@buy-iptv-uk.com` on `best-iptv-uk-subscription.com` is a soft trust drop. Either:
- Set up `contact@best-iptv-uk-subscription.com` as the public-facing address, OR
- Add a footer note explaining the multi-brand relationship (if there is one).

---

## Low (backlog — nice to have)

### L1. Add `x-default` hreflang

Even for GB-only sites, `x-default → /` is a safe default.

### L2. Add RSS feed for `/blog`

`app/blog/rss.xml/route.ts` generating an RSS 2.0 feed. Adds `<link rel="alternate">` in layout for blog pages.

### L3. Publish an image XML sitemap (once image count grows)

Not needed at 1 image. Add when the site ships > 20 unique images.

### L4. Align logo `alt` text with brand name

`Best IPTV Subscription logo` → `Best IPTV UK logo` (matching `SITE_NAME`).

### L5. Add `themeColor` dark/light variants

`viewport.themeColor` currently single `#0a0a0a` — safe, but light-mode users see the same. Optional.

### L6. Remove dead testimonials code

`TESTIMONIALS` constant in `src/lib/constants.ts:225-274` is imported nowhere now that `TestimonialsSection` returns null. Delete for tidiness.

---

## Suggested sequence (dependency-ordered)

**Sprint 1 — Critical + Quick Wins (~1 day dev + verification):**
1. C1 — Fix logo URL constant (30 min)
2. C2 — Delete HowTo schema (5 min)
3. C3 — Move citations into SubPageShell prop (2 hr)
4. H6 — Ship OG image + wire into layout (2 hr)
5. H7 — Fix broken #testimonials anchor (5 min)
6. H3 — Remove opacity: 0 from H1 (30 min)

Verification: Rich Results Test on `/`, `/best-iptv-uk-2026`, `/blog/best-iptv-uk-guide-2026`. All three should validate.

**Sprint 2 — E-E-A-T + performance (~1 week):**
7. H1 — Person author + `sameAs` (1 day, mostly copy work)
8. H4 — `/about` page + Companies House disclosure (1 day)
9. H5 — Convert to Server Components + trim framer-motion (2–3 days)
10. H8 — Consolidate homepage JSON-LD into `@graph` (2 hr)

Verification: Lighthouse mobile Performance +15 points. GSC E-E-A-T-related enhancements clean.

**Sprint 3 — Growth surface (~2 weeks):**
11. H2 — Split `/tutorials` into 12 indexable URLs (5 days content + dev)
12. M3 — Trustpilot integration + AggregateRating schema (2 days)
13. M4 — FAQ deduplication (half day)
14. M1, M2, M5, M6, M7, M8 — batch schema tidy-up (2 days)

Verification: Baseline GSC impressions for "iptv setup [device]" queries. Target +5× in 90 days.

**Sprint 4 — Polish (backlog):**
15. L1–L6 as convenient.

---

## Monitoring (leading indicators to watch without re-running the audit)

- **GSC `Enhancements` panel.** Watch Organization / Article / Product / FAQPage counts. Any drop from "valid" back to "warning" = schema regression.
- **CrUX field data.** LCP p75, INP p75 on mobile. Recheck monthly.
- **Impressions on cluster hub pages.** Sudden drops on `/best-iptv-uk-2026`, `/is-iptv-legal-uk` = trust-signal drift, run `/seo drift compare` immediately.
- **Direct branded search volume.** Trust-work paying off shows up here first (usually 60–90 days).

Wire up `/seo drift baseline https://best-iptv-uk-subscription.com` after Sprint 1 completes so future audits can diff against this state.

---
