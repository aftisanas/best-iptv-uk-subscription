import { ArrowLeft, Tag, Clock, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import PricingSection from "./PricingSection";
import CTASection from "./CTASection";
import MotionFadeIn from "./MotionFadeIn";
import MotionScaleIn from "./MotionScaleIn";
import SubPageFAQ from "./SubPageFAQ";
import { LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/constants";

export interface SubPageByline {
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly publishedDate: string;
  readonly updatedDate: string;
}

export interface SubPageRelatedGuide {
  readonly title: string;
  readonly href: string;
  readonly description: string;
}

export interface SubPageFAQItem {
  readonly question: string;
  readonly answer: string;
}

export interface SubPageReviewer {
  readonly name: string;
  readonly role: string;
}

export interface SubPageCitation {
  readonly name: string;
  readonly url: string;
}

export interface SubPageEntity {
  readonly name: string;
}

export interface SubPageShellProps {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly intro: string;
  readonly byline: SubPageByline;
  readonly reviewer?: SubPageReviewer;
  readonly citations?: ReadonlyArray<SubPageCitation>;
  readonly aboutEntities?: ReadonlyArray<SubPageEntity>;
  readonly readTime?: string;
  readonly publishedDate?: string;
  readonly updatedDate?: string;
  readonly relatedGuides: ReadonlyArray<SubPageRelatedGuide>;
  readonly faqItems: ReadonlyArray<SubPageFAQItem>;
  readonly children: React.ReactNode;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function SubPageShell({
  slug,
  title,
  category,
  intro,
  byline,
  reviewer,
  citations,
  aboutEntities,
  readTime,
  publishedDate,
  updatedDate,
  relatedGuides,
  faqItems,
  children,
}: SubPageShellProps) {
  const resolvedPublishedDate = publishedDate ?? byline.publishedDate;
  const resolvedUpdatedDate = updatedDate ?? byline.updatedDate;

  const canonicalUrl = `${SITE_URL}/${slug.replace(/^\/+/, "")}`;
  const logoUrl = `${SITE_URL}${LOGO_PATH}`;

  const articleSchema = {
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description: intro,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    datePublished: resolvedPublishedDate,
    dateModified: resolvedUpdatedDate,
    author: {
      "@type": "Organization",
      name: byline.name,
      description: byline.description,
    },
    ...(reviewer && {
      reviewedBy: {
        "@type": "Organization",
        name: reviewer.name,
      },
    }),
    ...(citations && citations.length > 0 && {
      citation: citations.map((c) => ({
        "@type": "CreativeWork",
        name: c.name,
        url: c.url,
      })),
    }),
    ...(aboutEntities && aboutEntities.length > 0 && {
      about: aboutEntities.map((e) => ({
        "@type": "Thing",
        name: e.name,
      })),
    }),
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: 1024,
        height: 1024,
      },
    },
    articleSection: category,
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        description: intro,
        primaryImageOfPage: { "@type": "ImageObject", url: logoUrl },
      },
      articleSchema,
      breadcrumbSchema,
      faqSchema,
    ],
  };

  return (
    <>
      {/* ── Hero (editorial, section-wash-dark) ── */}
      <section className="relative overflow-hidden section-wash-dark">
        {/* Amber + red vignettes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,188,125,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,30,30,0.10),transparent_55%)]" />

        {/* Faint editorial grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
          {/* Back link */}
          <MotionFadeIn x={-10} y={0} duration={0.5}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Best IPTV UK
            </Link>
          </MotionFadeIn>

          {/* Category badge */}
          <MotionScaleIn initialScale={0.95} delay={0.05}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-[#ffbc7d] uppercase mb-6">
              <Tag className="h-3 w-3" />
              {category}
            </span>
          </MotionScaleIn>

          {/* H1 — LCP element, no motion wrapper */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08] text-white mb-5">
            {title}
          </h1>

          {/* Intro paragraph */}
          <MotionFadeIn
            as="p"
            delay={0.18}
            duration={0.7}
            className="text-base sm:text-lg text-white/75 leading-relaxed max-w-3xl mb-8"
          >
            {intro}
          </MotionFadeIn>

          {/* Byline */}
          <MotionFadeIn
            delay={0.25}
            duration={0.7}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/60"
          >
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#ffbc7d]" />
              <span className="text-white/90 font-medium">{byline.name}</span>
              <span className="text-white/50">— {byline.role}</span>
            </span>
            {reviewer && (
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#ffbc7d]" />
                <span className="font-medium text-white/85">Reviewed by {reviewer.name}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/40" />
              <span>Updated {formatDate(resolvedUpdatedDate)}</span>
            </span>
            {readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#ff6fa1]" />
                <span>{readTime}</span>
              </span>
            )}
          </MotionFadeIn>
        </div>

        {/* Bottom gradient fade to site background */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[color:var(--color-background)] to-transparent pointer-events-none" />
      </section>

      {/* ── Article body slot ── */}
      <article className="relative py-12 lg:py-16">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </article>

      {/* ── FAQ (driven by faqItems prop, schema-aligned) ── */}
      {faqItems.length > 0 && (
        <section className="relative py-11 lg:py-14">
          <div className="absolute inset-0 mesh-gradient" />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="editorial-rule" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--color-primary)]">
                  Frequently Asked Questions
                </span>
                <span className="editorial-rule" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Questions UK Buyers Ask About{" "}
                <span className="gradient-text">This Topic</span>
              </h2>
            </div>

            <SubPageFAQ items={faqItems} />
          </div>
        </section>
      )}

      {/* ── Related guides ── */}
      {relatedGuides.length > 0 && (
        <section className="relative py-11 lg:py-14">
          <div className="absolute inset-0 section-gradient-1" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
                <span className="gradient-text">Related UK IPTV Guides</span>
              </h2>
              <p className="text-sm text-muted">
                Sibling guides from the Best IPTV UK 2026 cluster.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group relative flex flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-primary)]/40 hover:shadow-lg hover:shadow-[rgba(101,30,253,0.10)]"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-[color:var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-primary)] group-hover:text-[color:var(--color-primary-hover)]">
                    Read the guide
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Conversion footer ── */}
      <PricingSection />
      <CTASection />

      {/* ── JSON-LD @graph (Article + BreadcrumbList + FAQPage) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
