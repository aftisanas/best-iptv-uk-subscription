# SEO Action Plan — best-iptv-uk-subscription.com

**From:** Full audit 2026-07-28
**Health Score:** 83 / 100
**Framework:** Every item is (a) grounded in a first-principle observation, (b) sequenced by dependency, and (c) carries a "how would we know this failed?" check.

---

## CRITICAL — fix immediately (indexing / trust risk)

### C1. Fix cross-domain contact email in Organization schema

**File:** `src/lib/constants.ts`
**Change:** `CONTACT_EMAIL = "contact@buy-iptv-uk.com"` → `CONTACT_EMAIL = "contact@best-iptv-uk-subscription.com"`
**Why:** Sprint 2 commit `d59287a` claimed this was resolved, but the constant still ships the old value and it renders in live Organization JSON-LD across every page. Cross-domain contact info is a documented E-E-A-T weakness flagged in the 2026-07-03 audit and remains unresolved.
**Falsifiability:** After deploy, `curl https://best-iptv-uk-subscription.com/ | grep -oE '"email":"[^"]*"'` must return the new domain. If any page still emits the old domain, the fix is incomplete (grep the codebase for `buy-iptv-uk.com`).
**Leading indicator:** No GSC Rich Result validation warnings on Organization; no email bounces routed to the old domain.
**Effort:** 5 minutes. **Blocks:** C2, H1.

### C2. Render a visible contact email on `/contact`

**File:** `src/app/contact/page.tsx`
**Change:** After C1, render `contact@best-iptv-uk-subscription.com` as visible text with `mailto:` link. Currently the contact page's SSR HTML contains zero email addresses (verified: `curl /contact | grep '@'` returns nothing).
**Why:** Schema advertises an email that users cannot see anywhere on the page. That mismatch is a Google "consistent contact info" flag and reduces trust for human visitors.
**Falsifiability:** `curl https://best-iptv-uk-subscription.com/contact | grep 'mailto:'` returns the correct link. Users report they can find the email without asking on WhatsApp.
**Effort:** 10 minutes. **Blocked by:** C1.

---

## HIGH — fix within 1 week (materially impacts rankings/trust)

### H1. Render visible breadcrumb component on cluster + tutorial + blog pages

**Files:** `src/components/SubPageShell.tsx` (add breadcrumb JSX before the H1); reuse in `src/app/tutorials/[device]/page.tsx`; add to blog post component.
**Why:** BreadcrumbList schema is already emitted, but there is no visible breadcrumb UI. Google requires the visible breadcrumb to match the marked-up one for rich-result eligibility. Currently the schema is at best ignored, at worst treated as misleading markup.
**Design:** `Home → [Section] → [Page]` under the header, small text, semantic `<nav aria-label="Breadcrumb">` with `<ol>`. Match schema exactly.
**Falsifiability:** Google Rich Results Test on `/best-iptv-uk-2026` shows Breadcrumbs eligible (no "Not eligible" warning about missing visible breadcrumb). Screen reader reads the breadcrumb.
**Leading indicator:** After 4–6 weeks, GSC "Breadcrumbs" report starts showing impressions for cluster URLs.
**Effort:** 2 hours (one shared component, 4 usage sites). **Blocks:** none. **Unblocked by:** nothing (start now).

### H2. Add 5–8 outbound authoritative citations to `/is-iptv-legal-uk`

**File:** `src/app/is-iptv-legal-uk/page.tsx`
**Change:** Add hyperlinks (target=_blank, rel="noopener external") to:
- `legislation.gov.uk/ukpga/1988/48` — CDPA 1988
- `legislation.gov.uk/ukpga/2006/35/section/11` — Fraud Act 2006 s.11 (already named on page)
- `legislation.gov.uk/ukpga/2015/15` — Consumer Rights Act 2015
- `legislation.gov.uk/ukpga/2024/15` — Media Act 2024
- `ofcom.org.uk` — Ofcom homepage / their statement on illegal streaming
- FACT / PIPCU announcement URLs for the Jonathan Edge case cited on page
**Why:** YMYL legal content with zero statute-level citations is E-E-A-T weak. LLMs also preferentially cite pages that themselves cite authoritative sources — this is a citation-worthiness signal for AI Overviews.
**Falsifiability:** `curl /is-iptv-legal-uk | grep 'legislation.gov.uk' | wc -l` returns ≥ 4. Page still passes the "not legal advice" disclaimer test.
**Leading indicator:** `/is-iptv-legal-uk` starts appearing in AI Overviews / Perplexity answers for "is iptv legal uk" within 8–12 weeks.
**Effort:** 45 minutes.

### H3. Add named-individual author byline (start with the legal page)

**File:** `src/lib/constants.ts` + `src/components/SubPageShell.tsx`
**Change:** Introduce a `PERSON_AUTHOR` object (name, role, short bio, optional LinkedIn URL, optional photo). Emit `author: { @type: "Person", name, url, jobTitle }` in Article schema. Start on `/is-iptv-legal-uk` (highest E-E-A-T need) and roll out to remaining cluster pages after 2 weeks of monitoring.
**Why:** Google's Sep 2025 QRG update emphasises named human authors for YMYL and expert topics. "Editorial Team" ≠ verifiable expertise. Even one named editor with a LinkedIn link materially lifts the E-E-A-T signal.
**Author profile page:** Create `/authors/[slug]/page.tsx` with `Person` schema, byline used across posts. `@id`-link it to Article.author for graph consistency.
**Falsifiability:** Article schema on `/is-iptv-legal-uk` has `author.@type: "Person"`, `author.name` non-empty, `author.url` resolves to a page that returns 200 with Person schema.
**Leading indicator:** GSC Rich Results shows Author markup as valid; author name starts appearing in AI answer citations.
**Effort:** 3–4 hours (constant + component change + one author page). Ongoing to add more contributors.

### H4. Add security headers via `next.config.ts`

**File:** `next.config.ts`
**Change:** Add `headers()` async function returning:
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
```
Also remove the deprecated `X-XSS-Protection` header if Cloudflare is emitting it (verify at Cloudflare Transform Rules; it currently shows in live response headers).
**Why:** HSTS is table stakes for HTTPS best practice and required for HSTS preload eligibility. `X-XSS-Protection` was deprecated by browsers years ago and can create false-positive issues on newer scanners.
**Falsifiability:** `curl -I https://best-iptv-uk-subscription.com/ | grep -i "strict-transport"` returns the header. securityheaders.com grade improves from B to A/A+.
**Effort:** 20 minutes.

### H5. Decide + encode AI crawler policy in `robots.ts`

**File:** `src/app/robots.ts`
**Decision needed:** Allow or block GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, ChatGPT-User, Google-Extended, Amazonbot, CCBot. `llms.txt` presence suggests the answer is "allow" — but robots governs the crawl, not llms.txt.
**Change:** Add explicit `{ userAgent: "GPTBot", allow: "/" }` etc. — one rule per AI bot the strategy is to admit.
**Why:** Default `User-agent: *` allows them today, but as scrapers get stricter about explicit consent (GDPR-style opt-in patterns), being ambiguous is a risk. Explicit is defensible.
**Falsifiability:** `curl /robots.txt` shows the explicit allowlist.
**Effort:** 15 minutes (once the policy decision is made).

---

## MEDIUM — fix within 1 month (optimisation upside)

### M1. Automate sitemap `lastmod` dates

**File:** `src/app/sitemap.ts`
**Change:** Replace `STATIC_ROUTE_DATES` and `CLUSTER_ROUTE_DATES` with build-time `git log -1 --format=%aI <path>` per route. Fallback to build timestamp for files without git history.
**Why:** Currently hardcoded to 2026-07-05; today is 2026-07-28 (23 days stale). Fresh lastmod signals content freshness on crawl.
**Falsifiability:** After a code change on `/best-iptv-uk-2026` and deploy, `curl /sitemap.xml | grep best-iptv-uk-2026 -A1` shows a lastmod within the last day.
**Effort:** 1 hour.

### M2. Add hreflang correctly (or drop the config)

**File:** `src/app/layout.tsx`
**Current:** `alternates: { languages: { "en-GB": "/" } }` — Next.js silently drops single-locale hreflang, so nothing renders.
**Decision:** Either (a) commit to hreflang: add `x-default` and any other locale you plan to support; or (b) delete the `languages` key. Dead config is confusing.
**Falsifiability:** `curl / | grep -oE '<link[^>]*hreflang="[^"]*"'` returns links (path A) or is empty and no dead code remains (path B).
**Effort:** 15 minutes.

### M3. De-duplicate FAQ questions between homepage and cluster pages

**Files:** Homepage FAQ constants + each cluster page's FAQ.
**Change:** Audit the 9 homepage FAQ items against each cluster page's FAQ. Reserve intent-specific questions to their matching cluster (e.g., "Is IPTV legal in the UK?" belongs only on `/is-iptv-legal-uk`; "Which Fire Stick model do I need?" only on `/best-iptv-uk-firestick`).
**Why:** Duplicate FAQPage entities across pages confuse rich-result deduplication and dilute AI citation attribution to the primary URL.
**Falsifiability:** No FAQ question text repeats verbatim across two URLs' schema.
**Effort:** 1–2 hours.

### M4. Add page-level WebPage schema to legal pages

**Files:** `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, `src/app/dmca/page.tsx`, `src/app/refund/page.tsx`
**Change:** Emit minimal `WebPage` schema with `@id`, `name`, `description`, `dateModified`, `isPartOf: {@id: "/#website"}`. 6 lines each.
**Why:** Freshness signal + graph completeness. Legal pages are cited by the trust-layer pages; incoming references should resolve.
**Falsifiability:** Rich Results Test shows valid WebPage on each legal page.
**Effort:** 30 minutes total.

### M5. Create dedicated 1200×630 OG images per page family

**Files:** `public/og/homepage.jpg`, `public/og/cluster-{slug}.jpg`, `public/og/tutorials.jpg`, `public/og/blog-{slug}.jpg`. Reference via `metadata.openGraph.images`.
**Why:** Current OG uses 1024×1024 logo — crops awkwardly on LinkedIn/X and misses the opportunity to render page-specific hooks (title + price + device).
**Falsifiability:** LinkedIn / X post-preview debugger renders the new asset without cropping the message.
**Effort:** 2–4 hours (design + implementation). Consider `/seo image-gen` for AI generation.

### M6. Align tutorial H1s with primary keyword

**File:** `src/lib/tutorial-content.ts`
**Change:** Firestick H1 currently "Amazon Fire Stick — Step-by-Step Guide (2026)" → "IPTV Setup on Amazon Fire Stick — Step-by-Step Guide (2026)". Mirror the title. Apply to all 12 devices.
**Why:** Title says "IPTV Setup on X" — H1 should reinforce, not restart, the primary keyword signal.
**Falsifiability:** Every tutorial H1 contains "IPTV".
**Effort:** 30 minutes.

### M7. Verify Google Search Console geotargeting is set to United Kingdom

**Location:** GSC → Legacy tools → International targeting → Country → United Kingdom.
**Why:** `.com` doesn't auto-target. The site's entire keyword strategy is UK-only; without explicit geo, ambiguous ranking in `.com` search.
**Falsifiability:** GSC shows "Country: United Kingdom, Targeted" for the property.
**Effort:** 5 minutes (once GSC access is available).

### M8. Add content diagrams / comparison images

**Files:** cluster + tutorial pages.
**Suggestions:**
- `/best-iptv-uk-2026`: a 7-criteria evaluation matrix image (top of page).
- `/best-iptv-uk-firestick`: Fire Stick model comparison table image (Lite / 4K / 4K Max / Cube specs).
- `/best-iptv-uk-vs-traditional-tv`: cost-per-year chart.
- `/tutorials/*`: annotated screenshot of each device's install UI.
**Why:** Currently the site is text-heavy. Diagrams help dwell time (a UX quality signal), rank in Google Images, and provide LLM/AI systems with clearer visual references.
**Falsifiability:** After 6–8 weeks, GSC Image search shows impressions for these URLs.
**Effort:** 1–2 days depending on design capacity.

---

## LOW — backlog (nice to have)

### L1. Add custom `not-found.tsx` and `error.tsx`
Improves UX on 404 / 500, surface a search box + top links. No direct SEO gain but reduces bounce.
**Effort:** 1 hour.

### L2. Consider replacing framer-motion with CSS-only animations
6 motion islands isolated; visual payoff is small. Removing the dependency would shave 20–30 KB from the client bundle. Test INP before/after.
**Effort:** 4–6 hours.

### L3. Increase blog velocity
4 posts in the blog is thin for an editorial trust signal. Aim for 1 post/month for 12 months to build the pillar. Topics from `llms.txt` structure suggest natural follow-ups (device comparisons, cost analyses, legal case updates).
**Effort:** Ongoing.

### L4. Add third-party mention / review citations to About or homepage
If any independent outlet has referenced the service, cite it. Weakest link in E-E-A-T "Authoritativeness" is external validation. Not fixable by code alone.

### L5. Homepage H2/H3 de-duplication
"37,000 Live Channels" appears as both H3 feature and H2 section — merge or vary text so the section H2 reads e.g. "Every UK Channel You'd Actually Watch".
**Effort:** 5 minutes.

---

## Info-only (do not act unless strategy changes)

- **FAQPage schema on commercial pages:** Per Google's Aug 2023 restriction, FAQ rich results only render for gov/health sites. Existing FAQPage on `/best-iptv-uk-2026` etc. still helps AI/LLM citation and is fine to keep. Do not add new FAQPage entities purely for Google rich results — they won't render.
- **No HowTo schema (correct):** HowTo was deprecated Sep 2023. Tutorial pages correctly use Article instead. Do not "fix" this.
- **Cluster pages ending with the same CTA blocks:** Repeated CTAs are normal. If body text on those blocks is >150 words, extract to a shared component and vary the surrounding copy.

---

## Sequencing summary

**Week 1 (Critical + fastest High):**
1. C1 (5 min) → C2 (10 min) → H4 (20 min) → H5 (15 min).
2. H1 breadcrumb component (2 hr).
3. H2 legal citations (45 min).

**Weeks 2–3:**
4. H3 named author (start with legal page).
5. M1 automated sitemap dates.
6. M2 hreflang decision.
7. M6 tutorial H1 alignment.

**Weeks 3–4:**
8. M3 FAQ deduplication.
9. M4 legal page WebPage schema.
10. M5 OG images (design work).
11. M7 GSC geotargeting verification.

**Ongoing / month 2+:**
12. M8 content diagrams.
13. L1–L5 as capacity allows.

**Post-implementation verification:** Re-run `/seo audit` in 30 days. Expected new score after H-tier + top-3 M-tier: **89–91 / 100**.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
