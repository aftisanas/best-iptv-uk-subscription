import type { Metadata } from "next";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "best-iptv-uk-2026";
const CANONICAL = `${SITE_URL}/${SLUG}`;

// Title & description sourced from v2 plan Section C, page 3.1
// (docs/best-iptv-research-and-plan-v2.md)
const PAGE_TITLE = "Best IPTV UK 2026: 7-Criteria Buyer's Guide";
const PAGE_DESCRIPTION =
  "Compare the best IPTV UK services in 2026 with a 7-criteria buyer's framework. Channel count, uptime, refund window, 4K, device support, GBP pricing.";

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

// FAQ items — 7 questions from v2 plan Section C 3.1, drawn from Task 3 user-intent research
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: 'What makes an IPTV service "the best" in the UK in 2026?',
    answer:
      "Seven verifiable signals separate strong UK IPTV services from the rest in 2026: total channel count (this service offers 37,000+ live channels with full UK coverage), published uptime (99.9% verified live, not a marketing number), a refund window that lets new subscribers test the full service before committing (30 days, full refund), native 4K UHD on every plan, device breadth across Fire Stick, smart TV, Apple TV, mobile and desktop, transparent GBP pricing with no hidden renewals, and named UK support reachable on live chat, WhatsApp and email around the clock.",
  },
  {
    question: "How can I tell if a UK IPTV provider is legitimate before paying?",
    answer:
      "Look for verifiable signals on the provider's site before paying: a published refund policy in plain English (30 days is the UK standard), a live uptime page that refreshes minute-by-minute, GBP pricing on the front page (not USD with conversion at checkout), multiple payment methods including card and PayPal (avoid crypto-only sellers), a UK contact address and named support team, and full terms of service, privacy and DMCA policies linked in the footer. A provider that hides any of those is not ready for a UK subscriber.",
  },
  {
    question: "Why do some UK IPTV plans cost £3/month and others £15/month?",
    answer:
      "Term length and reseller margin explain most of the spread. A direct UK service on a 24-month term reaches the £3.75/month-equivalent floor because the longer commitment unlocks the lowest server cost per stream. A three-month reseller plan often lands at £15+ a month because the reseller takes a margin on top of the wholesale rate and pays shorter-term infrastructure costs. The cheapest absolute price needs verification: a £3/month plan with no published uptime, no refund window and crypto-only payment is usually a different product class altogether.",
  },
  {
    question: "Are 3-month plans worth it, or should I commit to 12 months?",
    answer:
      "Three months is the right length to test a new IPTV provider inside the 30-day refund window and verify the channel list, peak-hour stability and support response time. Twelve and 24-month plans unlock the lowest per-month rate (the 24-month plan on this service equates to £3.75/month). The recommended path for a UK household: start on the three-month plan, confirm the service performs across a full month including weekend football and weekday peak hours, then renew at the longest available term once stability is proven.",
  },
  {
    question: "Why does my IPTV service buffer during peak hours?",
    answer:
      "Most UK peak-hour buffering traces to one of five causes: weak Wi-Fi signal between the router and the device (Ethernet typically fixes this), lower-RAM Fire Stick models (the 4K Max handles 4K streams more reliably than the Lite or original Stick), home broadband under 12 Mbps, ISP throttling between 6 PM and 11 PM on contended lines, or an IPTV provider running overcrowded servers during high-demand windows. The Fire Stick setup guide covers each fix in turn — the device is rarely the root cause on a service with proper UK infrastructure.",
  },
  {
    question: "Can one IPTV subscription stream on more than one device at once?",
    answer:
      "Yes. Every plan on this service includes five simultaneous screens on a single login, which is the right number for most UK households — Fire Stick in the lounge, smart TV in a second room, Apple TV in a third, mobile for one parent and tablet for the other. Multi-screen support is one of the buyer's-guide criteria worth checking before paying: a plan limited to one or two screens is rarely the cheapest option once a second device is added.",
  },
  {
    question: "Is IPTV legal in the UK?",
    answer:
      "IPTV technology itself is legal in the UK in 2026. The legality of any specific service depends on the content being streamed and the provider's licensing arrangements. A licensed UK IPTV service publishes refund and privacy policies, lists a UK contact address, displays pricing in GBP and accepts mainstream payment methods. A full breakdown of the UK legal position — including what end-users should verify before paying — sits on the dedicated guide at /is-iptv-legal-uk.",
  },
];

// Related guides — 3 sibling pages from v2 plan Section D linking matrix
// (rows 8, 9, 11 outbound from /best-iptv-uk-2026)
const relatedGuides: ReadonlyArray<SubPageRelatedGuide> = [
  {
    title: "Best IPTV For Fire Stick UK 2026",
    href: "/best-iptv-uk-firestick",
    description:
      "The Fire Stick setup guide — which generation handles 4K, the five-minute install, and how to choose a service that won't buffer during peak hours.",
  },
  {
    title: "Best IPTV Subscription UK 2026",
    href: "/best-iptv-subscription-uk",
    description:
      "Compare UK subscription plans across three, six, twelve and 24-month options. GBP pricing, refund windows, and what a fair UK subscription includes.",
  },
  {
    title: "Is IPTV Legal in the UK?",
    href: "/is-iptv-legal-uk",
    description:
      "The legal position on UK IPTV in 2026 — licensed vs unlicensed services, end-user position, and the six checks any buyer can run in five minutes.",
  },
];

export default function Page() {
  return (
    <SubPageShell
      slug={SLUG}
      title="Best IPTV UK 2026 — A Seven-Criteria Buyer's Guide"
      category="Buyer's Guide 2026"
      intro="Choosing the best IPTV service in the UK in 2026 comes down to a small number of verifiable signals — total channel count, published uptime, refund window, 4K coverage, device breadth, transparent GBP pricing and named UK support. This guide walks through each criterion in turn, applies it to direct services and resellers, and explains what to verify on a provider's site before any card details are entered. It is built as a buyer's framework rather than a sales pitch: a clear way for any British household to test the claims of an IPTV subscription inside its 30-day refund window."
      byline={AUTHOR_BYLINE}
      readTime="12 min read"
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    >
      {/* CONTENT PLACEHOLDER: paste approved markdown from drafts/best-iptv-uk-2026.md here */}
      {/* Body content for this page will be inserted in a follow-up pass. */}
      {/* DO NOT write content here — leave this comment block visible. */}
      <div className="prose prose-lg">
        <p className="text-amber-400 font-mono text-sm">
          [SCAFFOLD ONLY — body content pending from drafts/best-iptv-uk-2026.md]
        </p>
      </div>
    </SubPageShell>
  );
}
