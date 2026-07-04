# GEO Analysis — best-iptv-uk-subscription.com

**Analysis date:** 2026-07-03
**Framing:** Per Google Search Central (May 2026): "Optimizing for generative AI search is still SEO." This report treats GEO findings as SEO fundamentals applied to AI-search surfaces (Google AI Overviews, ChatGPT web search, Perplexity, Bing Copilot).

---

## GEO Readiness Score: **72 / 100**

**Verdict.** The on-page work is above-average for this vertical: `llms.txt` published, `citation[]` schema referencing primary sources (Ofcom, `legislation.gov.uk`, FACT, PIPCU), question-based H2/H3s, quotable specific numbers throughout. Where the site loses points is off-page: **zero indexed brand presence on Reddit, YouTube, Trustpilot, or Wikipedia**. In a category where Ahrefs' Dec 2025 study puts brand-mention correlation with AI citations at ~3× the correlation of backlinks, that's the ceiling. Everything you can do inside the codebase is already ~80% done; the growth axis is now brand mention, not markup.

### Category breakdown

| Criterion | Weight | Score | Notes |
|-----------|--------|-------|-------|
| Citability (passage quality, 134–167 word blocks, quotable facts) | 25% | 82 | Cluster pages excel; homepage weak — leads with sales copy, not a definition. |
| Structural readability (H hierarchy, lists, tables) | 20% | 88 | Question-based H2s, comparison tables, ordered lists in place. |
| Multi-modal content | 15% | 30 | Zero images beyond logo, zero video, zero infographic — biggest quick-win gap. |
| Authority & brand signals | 20% | 55 | Organization-only author, cross-domain email, zero external brand mentions. |
| Technical accessibility (SSR, AI crawler access) | 20% | 85 | Next.js SSR renders client components' initial HTML; all AI crawlers allowed via `User-Agent: *`. |

Weighted: 82·0.25 + 88·0.20 + 30·0.15 + 55·0.20 + 85·0.20 = **72.1**

---

## Platform breakdown

| Platform | Estimated visibility | Rationale |
|----------|---------------------|-----------|
| **Google AI Overviews** | Medium | 92% of AIO citations come from top-10 ranking pages. Cluster pages have the citation-worthy structure (`citation[]` schema, question H2s, FAQ blocks). Ranking is the gate — no field data available; likely not yet top-10 for "best iptv uk". |
| **ChatGPT web search** | Low | ChatGPT skews toward Wikipedia (47.9%) and Reddit (11.3%). Brand has zero presence on either. Direct crawls via `OAI-SearchBot` / `GPTBot` are allowed but the site is one candidate among many undifferentiated commercial sites. |
| **Perplexity** | Low | Perplexity skews toward Reddit (46.7%). Zero Reddit brand mentions = near-zero Perplexity citation probability. |
| **Bing Copilot** | Medium | Follows Bing organic index. Bing tends to be more forgiving of newer sites than Google. Submit sitemap via Bing Webmaster + IndexNow ping on publish. |

---

## AI Crawler Access Status

Live `robots.txt`:
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: https://best-iptv-uk-subscription.com/sitemap.xml
```

**Effective status per AI crawler** (all inherit from `User-Agent: *`):

| Crawler | Status | Notes |
|---------|--------|-------|
| GPTBot (OpenAI) | ✅ Allowed | ChatGPT training + web features. |
| OAI-SearchBot | ✅ Allowed | ChatGPT search citations. |
| ChatGPT-User | ✅ Allowed | User-triggered ChatGPT browsing. |
| ClaudeBot (Anthropic) | ✅ Allowed | Claude web features. |
| PerplexityBot | ✅ Allowed | Perplexity citations. |
| CCBot (Common Crawl) | ✅ Allowed | Training data. |
| anthropic-ai | ✅ Allowed | Claude training. |
| Bytespider | ✅ Allowed | ByteDance / TikTok AI. |
| cohere-ai | ✅ Allowed | Cohere models. |

**Assessment.** Access is wide open — appropriate for a brand that needs to be found. No changes recommended. If the operator later decides to gate training crawlers (CCBot, anthropic-ai training, Bytespider) while keeping search-time crawlers (OAI-SearchBot, ClaudeBot, PerplexityBot), that's a policy decision to make deliberately, not a default.

---

## llms.txt Status

**File present:** `public/llms.txt` → served at `/llms.txt`. Well-structured (Primary / Editorial / Policy / Contact sections). Good.

**Evidence caveat.** Per Google (Mueller, Illyes) and the SE Ranking 300k-domain study cited in the plugin's `references/llmstxt-evidence.md`, `llms.txt` is **not currently a citation lever** for major AI search systems. Publish it, keep it maintained, don't over-invest in it. It's a hedge, not a growth channel.

**Small tweaks worth making:**
- Add editor name (once you introduce a `Person` author — see H1 in ACTION-PLAN.md).
- Add a "## Key facts" section: 37,000 channels, 198,000 films, 4K UHD, 30-day refund, GBP pricing, 5 simultaneous screens. LLMs occasionally quote from this section directly.
- Add the `<link rel="alternate">` reference to `/llms.txt` in `layout.tsx` head — some crawlers look for it there.

**Not recommended:**
- RSL 1.0 licensing. Emerging Dec 2025 standard, low adoption still, backed mainly by publishers (Reddit, Yahoo, Medium). Commercial subscription sites gain little from restrictive licensing on their own marketing content — you want to be quoted, not gated.

---

## Brand Mention Analysis (off-page)

**This is the single biggest GEO gap.** Ahrefs (Dec 2025, 75k brands): brand-mention correlation with AI citations ≈ 3× the correlation of backlinks. Reddit specifically is the #1 external citation source for Perplexity (46.7%) and top-3 for ChatGPT.

### Current presence (external search, 2026-07-03)

| Platform | Presence | Impact |
|----------|----------|--------|
| Wikipedia | None | ChatGPT cites Wikipedia in 47.9% of responses. No entity, no presence. |
| Reddit (`r/IPTV`, `r/iptvreviews`) | None | Highest-correlation AI citation source. |
| YouTube | None | Highest AI-visibility correlation signal (0.737 per Ahrefs). |
| LinkedIn | None found | Brand employees / editor should have profiles. |
| Trustpilot | None | Would unlock `AggregateRating` and social-proof signal. |
| G2 / Capterra | N/A (consumer product) | Not applicable. |

### Competitive landscape (external SERP scan)

SERP for "best iptv uk 2026" currently surfaces:
- Affiliate review lists (xtream4k.uk, iptvowl.com, geekvibesnation.com) ranking above operator sites.
- One direct operator ("Stream in UK") mentioned as SERP winner in a review test.

**Implication.** The category is dominated by affiliate lists that recycle each other's rankings. Breaking into AI citation surfaces means becoming *the* Reddit-mentioned direct operator that neutral reviewers reference. That is not achievable via markup — it requires distribution work.

### Recommended distribution program (90 days)

1. **Reddit** — Do NOT astroturf `r/IPTV` (heavily moderated, well-defended against paid resellers, will backfire). Instead: publish long-form legal / comparison content ON your site that the community would voluntarily reference. The `/is-iptv-legal-uk` page in particular is Reddit-quotable if it can be found — cite it once from a well-respected r/IPTV or r/UKPersonalFinance thread on a genuine question.
2. **YouTube** — 6–12 device setup walkthroughs (30–90 sec each) is the highest-leverage move. Each video: unique setup URL (see H2 in ACTION-PLAN.md), URL in description, on-screen brand watermark, closed captions in English. Ahrefs correlation 0.737.
3. **Wikipedia** — Not a direct entry for the brand (fails notability), but *add citations* to the IPTV UK-related Wikipedia articles pointing at `/is-iptv-legal-uk` where it acts as a reference for Consumer Contracts Regs 2013 discussion. Legitimate encyclopedia work.
4. **Trustpilot** — Set up profile, wire post-purchase email flow requesting reviews. Once you have 30–50 real reviews, integrate the Trustpilot widget + `AggregateRating` schema (see M3 in ACTION-PLAN.md).
5. **LinkedIn** — Editor (named per H1 in the audit action plan) with public profile linking back to `/is-iptv-legal-uk` bylines. `sameAs` in Person schema then binds the entity.

---

## Passage-Level Citability Analysis

**Target block size for AI citation:** 134–167 words per self-contained answer block.

### Homepage — Weak citability

**First 60 words of homepage (LCP-visible copy):**
> "Best IPTV UK — Premium 4K Streaming For British IPTV Viewers. Stream 37,000+ live channels and 198,000+ films in 4K UHD across five simultaneous screens. UK-focused infrastructure, optional Secure Proxy add-on, and 24/7 UK-based support — backed by a 30-day money-back. Eight pillars define what a complete IPTV subscription should deliver."

**GEO problem.** This is sales copy, not definitional. AI Overview extractors look for "What is X?" answers to open their answer blocks. The homepage never defines IPTV.

**Fix.** Add one paragraph immediately below the H1, above the pillars section, in this shape:

> "**IPTV UK is internet protocol television delivered to British households over a broadband connection** rather than satellite, aerial or coaxial cable. A complete UK IPTV subscription bundles live UK terrestrial channels, on-demand films and an electronic programme guide into a single flat-fee service billed in GBP, with UK-based support and a refund window aligned to UK consumer law."

That is 52 words — sits under the H1 without disrupting the visual hero, opens with "IPTV UK is..." (the pattern AI Overviews grab), and defines the category before pitching the product. This paragraph would double as a preferred snippet for "what is iptv uk" queries.

### Cluster pages — Strong citability

`/best-iptv-uk-2026` opens (paragraph 1, ~85 words):
> "IPTV UK is internet protocol television delivered to British households over a broadband connection rather than satellite, aerial or coaxial cable. The category bundles live UK terrestrial channels, on-demand films, sport and an electronic programme guide into a single flat-fee subscription billed in sterling, with UK-based support and a refund policy that aligns with UK consumer law."

Already citation-shaped. Extend this pattern:
- `/best-iptv-uk-firestick` — open with "IPTV on Fire Stick is…"
- `/best-iptv-uk-vs-traditional-tv` — open with "The difference between IPTV and traditional UK pay-TV is…"
- `/best-iptv-subscription-uk` — open with "A UK IPTV subscription is…"

Each first paragraph should be 40–80 words and lead with a "X is..." construction. Currently only 2 of 5 do.

### FAQ items — Optimal

FAQ answers on cluster pages average 80–180 words. Right in the target zone. AI Overviews often lift FAQ answers verbatim when the answer is self-contained. `/is-iptv-legal-uk` FAQ answers are particularly strong — they cite specific legislation with dates.

### High-value citable blocks (already present, worth highlighting)

Blocks the site already publishes that AI Overviews are likely to lift:

1. **Cost band definition** (from `/best-iptv-uk-2026`, ~110 words):
   > "The honest band in 2026 is £4 to £10 per month, billed annually or biennially. Below £3 a month suggests either an oversubscribed shared server or an unlicensed feed. Above £15 a month sits well above what the wholesale supply chain typically justifies. Traditional UK pay-TV entry tiers sit at £15 to £18 per month for the base package and £40 to £100 with broadband and sport add-ons."

2. **Refund window rationale** (`/best-iptv-uk-2026`, ~90 words) — explains the 30-day standard against the 14-day legal floor.

3. **Legal status one-line** (`/is-iptv-legal-uk`) — "IPTV technology is legal in the UK. The law engages with the content distributed through it, and only at the operator level — not at the subscriber level — under the Copyright, Designs and Patents Act 1988." This is the perfect AI Overview seed for the "is iptv legal uk" query.

4. **Cost saving vs pay-TV** (`/best-iptv-uk-vs-traditional-tv`) — the £600–£1,440/year figure with configuration breakdown.

Each of these is quote-shaped. LLMs will lift them verbatim if crawlers reach the pages and the pages rank.

### Missing citable formats

- **No original data.** The strongest citation currency is data the site published first. Ideas: a monthly "UK peak-hour IPTV latency" chart (auto-generated from your infra), a "% of £X spent per plan category" table, a `n=100` device-hours survey of "which Fire Stick generation handles 4K IPTV without buffering". LLMs cite pages that publish numbers others don't have.
- **No published survey.** A 500-respondent survey of UK IPTV buyers ("what made you switch from pay-TV") would be citation gold — Wikipedia editors and Reddit posters would both quote it. Cost: ~£300 via Prolific.
- **No comparison table with named third-party sources.** Comparisons on the site are internal ("ours vs typical"). Named comparisons ("Stream in UK vs [your brand] vs [affiliate favourite]") are more citable but require care — see the sensitive-category footnote below.

---

## Structural Readability

**Green (already in place):**
- Question-based H2s ("What is IPTV UK in 2026?", "Which Fire Stick model is best for IPTV in 4K?", "Is IPTV legal in the UK in 2026?") — match query patterns.
- Ordered lists for the seven-criteria ranking.
- Comparison tables (`COMPARISON_ROWS`, per-plan pricing tables).
- FAQ blocks with clear Q → A pattern.
- H1 → H2 → H3 hierarchy consistent across cluster pages.
- Paragraph length 2–5 sentences (mostly) — right for extraction.

**Red:**
- Homepage has ~15 H1/H2/H3 sections but no single passage under 60 words that could answer "what is IPTV UK" — because sections lead with marketing framings ("Eight Measured Pillars", "One Subscription, Every Device") rather than answer patterns.
- Blog listing page (`/blog`) — flat list, no summarising paragraph that AI could quote as a topical index answer.

---

## Multi-Modal Content

**Current state:** 1 logo asset. That's it. No hero image, no infographic, no chart, no embedded video, no interactive tool.

**Ahrefs finding:** Multi-modal content sees 156% higher AI citation selection rates.

**Prioritised additions** (each independent, ship any / all):

1. **6 device setup videos** (30–60 sec each) — embed on the split `/tutorials/[device]` pages (see H2 in the audit ACTION-PLAN.md). Host on YouTube for the brand-mention hit, embed on-site for on-page multi-modal signal.
2. **UK IPTV price comparison chart** — SVG or PNG showing the £3.75/month figure against £15–£100 pay-TV band. Ships once, cited forever.
3. **Fire Stick generation compatibility infographic** — one visual, high evergreen value, likely image-search entry point.
4. **Channel category breakdown** (Sankey / donut) — 37,000 channels → UK terrestrial / sport / cinema / news / kids / international. Number-heavy, quoted often.

Each with `alt` text, hosted on the same domain (not a CDN subdomain), included in image sitemap if you build one, and referenced from the JSON-LD `Article.image` field.

---

## Authority & Brand Signals

**Green:**
- Author byline visible on every cluster page (name + role + updated date + read time).
- `Article` schema with `author`, `publisher`, `datePublished`, `dateModified`.
- `citation[]` schema on the highest-priority cluster page pointing at Ofcom + `legislation.gov.uk`.
- Cluster pages cite specific laws with year and full name.
- Editorial voice consistent, non-hyped, willing to acknowledge conflicts of interest.

**Red:**
- **Author is Organization ("Best IPTV UK Editorial")**, not a `Person` with credentials and `sameAs` to LinkedIn / X. This is the single biggest E-E-A-T weakness for AI systems replicating QRG signals.
- **No Wikipedia entity.** No Wikidata QID. Cannot be linked as `sameAs` from `Organization` schema until one exists (and the brand may not yet meet Wikipedia notability).
- **No expert quotes with attribution.** Every claim is in the site's own voice.
- **`AUTHOR_BYLINE.publishedDate === updatedDate === 2026-06-01`** on all cluster pages. Site claims editorial history "since 2023" in `llms.txt` — but published dates don't back that claim.
- Cross-domain contact email (`contact@buy-iptv-uk.com`) undermines the "verifiable UK entity" argument.

---

## Technical Accessibility (SSR check)

**AI crawlers do NOT execute JavaScript.** Every citable passage must be present in the initial HTML.

**Verification.** Next.js 15 App Router renders **all** components server-side for the initial HTML, including those marked `"use client"` — the `"use client"` directive only affects **hydration**, not the initial SSR pass. Confirmed by reading `SubPageShell.tsx`, `HeroSection.tsx`, `PricingSection.tsx` — content is in JSX at render time.

**However:**
- Framer-motion `initial={{ opacity: 0 }}` on the H1 renders opacity: 0 CSS in the initial HTML too. AI crawlers reading the HTML won't be confused (they don't execute the animation, so they see the H1 text — but they see it in a hidden state). Small ambiguity, not a blocker. Fix per H3 in the audit ACTION-PLAN.md removes the ambiguity.
- FAQ accordions in `SubPageShell` render both question AND answer text in the initial HTML — good. The button toggles `aria-hidden`, but the DOM contains the answer text. Crawlers get the full answer.
- Particle backgrounds don't affect content extraction (they're decorative canvases).

**Verdict.** SSR is not a GEO blocker. The site is discoverable end-to-end without JS execution.

---

## Schema Recommendations (for AI discoverability)

Already in place: `Organization`, `WebSite`, `WebPage`, `Product` (with `Offers`), `FAQPage`, `Article`, `BreadcrumbList`, `Article.citation[]`, `Article.about[]`.

**GEO-specific additions to consider:**

1. **`Article.mentions[]`** — link out to third-party mentions of the site once they exist (press coverage, forum discussions, review sites). Signals brand entity to LLMs.
2. **`Person` schema for author** with `sameAs` pointing at LinkedIn / X / verified profile pages (blocked on H1 in ACTION-PLAN.md — introduce named author first).
3. **`Article.speakable`** — Speakable specification marks passages suitable for audio (voice assistant) reads. Wrap the 40–60 word definition paragraphs suggested above.
4. **`DefinedTerm` for "IPTV UK"** — an explicit `DefinedTerm` node in the graph telling LLMs "this page contains a definition of X". Rare, high-signal.
5. **`Claim` schema for the falsifiable claims** — "£3.75/month equivalent on 24-month term" is a `Claim` with `appearance` pointing at the pricing table. Only for claims you can defend if challenged.

**Do NOT:**
- Add `HowTo` schema (deprecated Sept 2023 — see C2 in audit ACTION-PLAN.md).
- Duplicate `FAQPage` schema across cluster and homepage (deduplicate — see M4).
- Self-report `AggregateRating` without a third-party audit trail (violates Google structured data policy).

---

## Top 5 Highest-Impact Changes (GEO-specific)

Ordered by impact-per-effort, taking into account what's already in the audit ACTION-PLAN.md.

### G1. Add a 50-word "IPTV UK is..." definition paragraph immediately below the homepage H1
**Effort:** 20 minutes. **Impact:** Adds a homepage-level citable block for "what is iptv uk" queries. Currently the homepage never defines the category. Draft copy in the "Passage-Level Citability" section above.

### G2. Publish 6 device setup videos on YouTube; embed on split tutorial pages
**Effort:** 3–5 days of production. **Impact:** Highest single lever available — YouTube mention correlation with AI visibility is 0.737 (Ahrefs). Dovetails with H2 in the audit ACTION-PLAN.md (splitting `/tutorials`). Each video: 30–90 seconds, brand watermark, CC captions, links to your setup page in description.

### G3. Publish original data or a survey
**Effort:** £300 + 3 days (Prolific survey of 500 UK IPTV users). **Impact:** Creates a citation that other pages, Reddit threads, and eventually Wikipedia editors reference. Turns you from "one more IPTV site" into "the site that published the data everyone else quotes".

### G4. Set up Trustpilot with post-purchase review flow
**Effort:** 4 hours of integration + ongoing operational work. **Impact:** Unlocks `AggregateRating` schema (M3 in audit), gives you a Trustpilot review page that ranks on brand queries, seeds third-party validation for LLMs. Do NOT solicit fake reviews — the brand already made the correct decision to disable fabricated on-site testimonials; extending that discipline to Trustpilot is critical.

### G5. Introduce a named `Person` author with LinkedIn `sameAs`
**Effort:** 4 hours. **Impact:** Compounds with G3 (data attributed to a person is more citable than data attributed to "Editorial Team"). Duplicate of H1 in audit ACTION-PLAN.md — do it once, benefits both audits.

---

## Content Reformatting Suggestions (specific passages)

### Homepage
- Add the 50-word "IPTV UK is..." paragraph (draft above).
- Convert the "Eight Measured Pillars" section H2 to a question form: "What defines a complete UK IPTV subscription in 2026?" — matches AIO query patterns better.
- Add a summary bulleted list at the top of the pricing section: "In brief: 4 plan lengths (3, 6, 12, 24 months). GBP pricing. 30-day refund. From £3.75/mo equivalent on 24-month plan." Self-contained citable block.

### `/blog` listing page
- Add a 60–80 word introductory paragraph above the article grid: "The four IPTV UK guides below cover: [1-line summary of each]." Currently the page is a bare card grid with no citable summary.

### FAQ block on `/best-iptv-uk-firestick`
- FAQ answer on "Why does my Fire Stick keep buffering during football?" is currently 130 words — perfect citable length. Add specific numbers ("2.4 GHz Wi-Fi routes at ~30 Mbps under peak load vs 5 GHz at 200+") to make it more quotable.

### `/is-iptv-legal-uk`
- Already the strongest page for AI citation. One addition: an explicit definition block near the top: "The legality of IPTV in the UK depends on two questions. First, is the technology legal? Yes. Second, are the specific feeds licensed? That depends on the operator." Break it into three sentences so extractors can lift just the first.

---

## Sensitive-Category Footnote

This site sits in a category where Google, ChatGPT and Perplexity all apply extra scrutiny — legally ambiguous, consumer-financial, potential harm from unlicensed operators. Two consequences:

1. **AI systems will preferentially cite pages that acknowledge risk and cite legal sources over pages that make unqualified claims.** `/is-iptv-legal-uk` is your strongest asset because it does exactly this. Extend that pattern — every cluster page should have one paragraph that engages honestly with a limitation, risk or trade-off. This is counterintuitive marketing but well-aligned with QRG-derived AI ranking.
2. **Direct competitive comparison (naming rival operators) will be scrutinised.** If you build comparison pages naming other operators (per `seo-competitor-pages`), stick to publicly-verifiable claims (published prices, published channel counts) with primary-source citations. AI systems have been trained to downweight adversarial or unverified competitor claims.

---

## What to monitor (30/60/90 day check-ins)

- **YouTube channel:** subscriber count, video views, click-through to site.
- **Reddit:** brand mentions (search `"best-iptv-uk-subscription.com" site:reddit.com` monthly).
- **GSC impressions on question queries** ("what is iptv uk", "is iptv legal uk", "how much does iptv uk cost") — these are AI-Overview-adjacent queries. Rising impressions on these = your pages entering the AI candidate set.
- **Google AI Overview appearance** for target queries — check manually in an incognito UK session, and via `/seo dataforseo ai_optimization_chat_gpt_scraper` if DataForSEO MCP is available.
- **Trustpilot review count** (once set up) — track pace of authentic review acquisition.

Baseline `/seo drift baseline` against the current state so structural GEO regressions get flagged in future audits.

---
