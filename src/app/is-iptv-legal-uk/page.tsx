import type { Metadata } from "next";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "is-iptv-legal-uk";
const CANONICAL = `${SITE_URL}/${SLUG}`;

// Title & description sourced from v2 plan Section C, page 3.5
const PAGE_TITLE = "Is IPTV Legal in the UK? 2026 Buyer's Guide";
const PAGE_DESCRIPTION =
  "Is IPTV legal in the UK in 2026? Factual guide to UK IPTV law, licensed vs unlicensed services, and what buyers should verify before paying.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    locale: "en_GB",
    url: CANONICAL,
    siteName: "Best IPTV UK",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    publishedTime: AUTHOR_BYLINE.publishedDate,
    modifiedTime: AUTHOR_BYLINE.updatedDate,
    authors: [AUTHOR_BYLINE.name],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// FAQ — 5 items from v2 plan Section C 3.5, drawn from Task 3 user questions
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "Is IPTV legal to use in the UK in 2026?",
    answer:
      "IPTV technology is legal in the UK in 2026. The legality of any specific service depends on whether the provider has the rights to distribute the content being streamed. A service that publishes refund and privacy policies, lists a UK contact address, displays GBP pricing on the front page and accepts mainstream payment methods is operating in a manner consistent with a licensed business. A service with none of those signals is not.",
  },
  {
    question: "Will I personally get in trouble for watching IPTV?",
    answer:
      "The legal exposure of an end-user watching an unlicensed IPTV service in the UK is documented as low — UK enforcement action has historically focused on operators rather than viewers. That is not legal advice. The pragmatic position for a UK buyer is to subscribe to providers that publish UK contact details, refund and privacy policies and full terms of service. A provider satisfying those criteria removes the question entirely.",
  },
  {
    question: "How do I tell a licensed IPTV service from an unlicensed one?",
    answer:
      "Six checks: (1) a published refund policy in plain English, (2) pricing displayed in GBP on the front page, (3) a UK contact address and named support team, (4) multiple payment methods including card and PayPal, (5) full terms of service, privacy and DMCA policies linked in the footer, (6) a live uptime page that refreshes minute-by-minute. A licensed provider passes all six. An unlicensed one usually fails at least three.",
  },
  {
    question: "Does a published refund policy mean a service is legitimate?",
    answer:
      "Not on its own, but it's the single strongest signal. A real refund policy is expensive to honour — it carries chargeback risk, payment-processor friction and customer-service cost. A provider willing to publish and honour one is signalling that they expect to retain subscribers on quality rather than churn. Combined with the other five legitimacy checks, a published 30-day refund window is the most reliable single UK buyer signal in 2026.",
  },
  {
    question: "Where do I report a suspected unlicensed IPTV operator?",
    answer:
      "In the UK, the Federation Against Copyright Theft (FACT) and Crimestoppers both accept reports of suspected unlicensed IPTV operations. FACT publishes a reporting form at its public site; Crimestoppers can be reached at 0800 555 111 anonymously. For payment fraud specifically — a provider taking payment and disappearing — Action Fraud at actionfraud.police.uk is the appropriate route.",
  },
];

// Related guides — sibling pages from v2 plan Section D matrix
// (outbound rows 23, 24 from /is-iptv-legal-uk + /best-iptv-uk-vs-traditional-tv
// added as the third sub-page sibling — informational like the legal page)
const relatedGuides: ReadonlyArray<SubPageRelatedGuide> = [
  {
    title: "Best IPTV UK 2026 — Seven-Criteria Buyer's Guide",
    href: "/best-iptv-uk-2026",
    description:
      "The buyer's guide for 2026 — the seven criteria a UK household can verify on any provider's site before paying for an IPTV subscription.",
  },
  {
    title: "Best IPTV Subscription UK 2026 — Plans Compared",
    href: "/best-iptv-subscription-uk",
    description:
      "View UK IPTV subscription plans — three to 24-month options, GBP pricing, refund and renewal terms, and what a fair UK plan includes.",
  },
  {
    title: "IPTV vs Traditional UK Pay-TV",
    href: "/best-iptv-uk-vs-traditional-tv",
    description:
      "Line-by-line comparison of IPTV against traditional UK pay-TV — cost, channels, contract length, equipment, picture and long-term value.",
  },
];

export default function Page() {
  return (
    <SubPageShell
      slug={SLUG}
      title="Is IPTV Legal in the UK? — A 2026 Buyer's Guide"
      category="Legal"
      intro="IPTV technology is legal to use in the UK in 2026, but the legality of any specific service depends on what is being distributed and under what licensing arrangement. This guide separates the technology question from the content question, sets out what UK buyers should verify on a provider's site before paying, explains the end-user position in plain English, and lists six checks any household can run in five minutes. Written as a factual buyer's reference rather than a legal document — and deliberately avoids the unverifiable claims that signal a low-trust provider."
      byline={AUTHOR_BYLINE}
      readTime="7 min read"
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    >
      {/* CONTENT PLACEHOLDER: paste approved markdown from drafts/is-iptv-legal-uk.md here */}
      {/* Body content for this page will be inserted in a follow-up pass. */}
      {/* DO NOT write content here — leave this comment block visible. */}
      <div className="prose prose-lg">
        <p className="text-amber-400 font-mono text-sm">
          [SCAFFOLD ONLY — body content pending from drafts/is-iptv-legal-uk.md]
        </p>
      </div>
    </SubPageShell>
  );
}
