import type { Metadata } from "next";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "best-iptv-subscription-uk";
const CANONICAL = `${SITE_URL}/${SLUG}`;

// Title & description sourced from v2 plan Section C, page 3.3
const PAGE_TITLE = "Best IPTV Subscription UK 2026 — Plans, Pricing, Criteria";
const PAGE_DESCRIPTION =
  "Compare UK IPTV subscription lengths and prices for 2026. Three, six, twelve and 24-month options. GBP pricing, 30-day refund, no hidden renewals.";

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

// FAQ — 6 items from v2 plan Section C 3.3, drawn from Task 3 user questions
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "How much should a UK IPTV subscription cost in 2026?",
    answer:
      "A fair UK IPTV subscription sits between £4 and £15 a month for a complete service in 2026. The £3.75/month equivalent on the 24-month plan at this service is the floor that long-commitment plans reach. Three-month plans typically land between £8 and £12 per month. Anything advertised below £3 a month should trigger a verification check — the cheapest providers usually skip a published refund window, hide pricing in USD, or operate without a UK contact address.",
  },
  {
    question: 'Are "lifetime" IPTV subscriptions a scam?',
    answer:
      'In almost every documented case, yes. "Lifetime" IPTV offers typically collect £100-£500 upfront for a plan that operates for three to six months before the operator disappears. A legitimate UK IPTV subscription bills on fixed three, six, twelve or 24-month terms and publishes its renewal policy. If a provider advertises "lifetime" access — especially payable only in cryptocurrency — walk away and report the listing to FACT UK or Action Fraud.',
  },
  {
    question: "Why don't most IPTV providers offer real refunds?",
    answer:
      "Most don't because the business model doesn't require it. Many IPTV resellers operate as low-margin pass-through shops without working refund infrastructure. A genuine refund policy carries real cost — chargeback risk, payment-processor friction, customer service overhead. Providers that publish and honour a 30-day window are signalling they expect to retain subscribers on service quality, not on lock-in. The refund policy on this service is published under /refund in plain English and applies to every first purchase.",
  },
  {
    question: "Should I avoid crypto-only IPTV sellers?",
    answer:
      "For a first UK IPTV purchase in 2026, yes. Crypto-only payments can't be reversed by a card issuer if the service fails, and the absence of card or PayPal options usually means the provider can't pass the payment networks' compliance checks. A subscription that accepts card, PayPal and crypto is offering buyer choice; one that takes only crypto is filtering for customers without recourse. Mainstream payment options are a baseline legitimacy signal.",
  },
  {
    question: "Can one subscription stream on multiple devices?",
    answer:
      "Most legitimate UK IPTV subscriptions include three to five simultaneous screens on a single login. This service includes five — enough for Fire Stick, smart TV, Apple TV, mobile and tablet to all stream concurrently under one account. A subscription limited to one or two screens is rarely the cheapest option once a second household device joins. Confirm multi-screen support before choosing a term length.",
  },
  {
    question: "Are 3-month plans worth it, or should I commit to 12 months?",
    answer:
      "Three months is the right length to test a new provider inside the 30-day refund window — long enough to cover four weekends of football, two cup-final weekends and a full peak-hour cycle. Twelve and 24-month plans unlock the lowest per-month rate (the 24-month plan on this service equates to £3.75 a month). Start with three months on any new IPTV service, verify stability for a full month, then renew at the longest term once it's proven.",
  },
];

// Related guides — 3 sibling pages from v2 plan Section D matrix
// (outbound rows 16, 17, 18 from /best-iptv-subscription-uk, excl. home)
const relatedGuides: ReadonlyArray<SubPageRelatedGuide> = [
  {
    title: "Best IPTV UK 2026 — Seven-Criteria Buyer's Guide",
    href: "/best-iptv-uk-2026",
    description:
      "The seven evaluation criteria — channel count, uptime, refund, 4K, devices, GBP pricing, UK support — expanded into a full buyer's framework.",
  },
  {
    title: "Best IPTV For Fire Stick UK 2026",
    href: "/best-iptv-uk-firestick",
    description:
      "Fire Stick setup in five minutes, which generation handles 4K, and how to choose an IPTV service that won't drop on peak-hour football.",
  },
  {
    title: "Is IPTV Legal in the UK?",
    href: "/is-iptv-legal-uk",
    description:
      "Legality before payment — what UK buyers should verify on a provider's site before subscribing, and how to spot an unlicensed operator.",
  },
];

export default function Page() {
  return (
    <SubPageShell
      slug={SLUG}
      title="Best IPTV Subscription UK 2026 — Plans, Pricing & Buyer's Criteria"
      category="Subscriptions"
      intro="A strong UK IPTV subscription in 2026 is more than a monthly price. Term length, refund window, payment method, cancellation behaviour and what's included in the base plan all separate the services worth subscribing to from the ones to walk away from. This guide compares UK IPTV subscription lengths from three months to 24, lays out the per-month cost across each tier in GBP, explains why one-off 'lifetime' deals are a scam signal, and applies the seven evaluation criteria specifically to subscriptions rather than features. Built for UK households deciding how long to commit."
      byline={AUTHOR_BYLINE}
      readTime="10 min read"
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    >
      {/* CONTENT PLACEHOLDER: paste approved markdown from drafts/best-iptv-subscription-uk.md here */}
      {/* Body content for this page will be inserted in a follow-up pass. */}
      {/* DO NOT write content here — leave this comment block visible. */}
      <div className="prose prose-lg">
        <p className="text-amber-400 font-mono text-sm">
          [SCAFFOLD ONLY — body content pending from drafts/best-iptv-subscription-uk.md]
        </p>
      </div>
    </SubPageShell>
  );
}
