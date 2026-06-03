import type { Metadata } from "next";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "best-iptv-uk-vs-traditional-tv";
const CANONICAL = `${SITE_URL}/${SLUG}`;

// Title & description sourced from v2 plan Section C, page 3.4
const PAGE_TITLE = "IPTV vs Traditional UK Pay-TV 2026 — Full Comparison";
const PAGE_DESCRIPTION =
  "IPTV vs traditional UK pay-TV in 2026: cost, channels, picture quality, contract length and long-term value compared line by line for UK households.";

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

// FAQ — 6 items from v2 plan Section C 3.4, drawn from Task 3 user questions
// All Section E compliance substitutions applied (no banned broadcasters or leagues)
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "Is IPTV cheaper than traditional UK pay-TV?",
    answer:
      "In almost every case, yes. The average UK household pays £80-£110 a month for a traditional pay-TV bundle once sport, cinema and the TV licence are included — £1,500 to £1,800 a year. A modern UK IPTV subscription delivers a comparable channel mix for £5-£15 a month, with no 18-month contract and no separate set-top box rental. The annual saving for a typical UK household is in the £900-£1,500 range.",
  },
  {
    question: "Does IPTV cover top-tier UK football the same way as traditional pay-TV?",
    answer:
      "A complete UK IPTV subscription carries the major sport channels that traditional pay-TV bundles split across multiple add-ons. Top-tier UK football, European cup nights, international rugby tournaments and motorsport all stream in HD or 4K UHD where the original broadcast is produced in that format. Coverage matches across the channels that matter for a typical UK sports household, without the higher-tier upgrade fee.",
  },
  {
    question: "Can I keep my existing UK pay-TV box and add IPTV alongside?",
    answer:
      "Yes. IPTV runs over broadband to an app on a Fire Stick, smart TV, Apple TV or mobile device — it doesn't touch the existing pay-TV box. Many UK households keep the traditional box for one or two specific channels and use IPTV for everything else. Both run side by side on the same television via HDMI input switching. No re-wiring, no engineer visit.",
  },
  {
    question: "What broadband speed do I need before cancelling traditional pay-TV?",
    answer:
      "25 Mbps handles stable 4K UHD on a single stream; 10 Mbps is enough for HD. For a household running multiple concurrent streams, target 50+ Mbps on a fibre-to-the-premises line. UK fibre availability now reaches north of 80% of premises — most households can comfortably switch without a broadband upgrade. Run a speed test at peak hours (6-11 PM) before cancelling, not at midday.",
  },
  {
    question: "Does IPTV need an engineer visit?",
    answer:
      "No. IPTV installs over the existing broadband line. A Fire Stick install takes five minutes — install IPTV Smarters Pro from the Amazon Appstore, paste the server URL and credentials from the welcome email, and the channel guide loads in under two minutes. Traditional pay-TV installs typically require an engineer visit, a dish or cable connection, and a three-to-six-hour appointment window.",
  },
  {
    question: "Can I record live IPTV streams the way I record on a pay-TV PVR?",
    answer:
      "IPTV apps don't replicate PVR-style scheduled recording. Most modern UK IPTV services replace recording with a seven-day catch-up window on the EPG — every channel rewinds for a full week, so missed broadcasts are accessible on demand without recording in advance. On-demand libraries (198,000+ films and series on this service) cover most use cases that PVR scheduling traditionally addressed.",
  },
];

// Related guides — 3 sibling pages from v2 plan Section D matrix
// (outbound rows 19, 20, 21 from /best-iptv-uk-vs-traditional-tv, excl. home)
const relatedGuides: ReadonlyArray<SubPageRelatedGuide> = [
  {
    title: "Best IPTV UK 2026 — Seven-Criteria Buyer's Guide",
    href: "/best-iptv-uk-2026",
    description:
      "The full 2026 buyer's guide — seven criteria a UK household can verify on any IPTV provider's site before paying for a subscription.",
  },
  {
    title: "Best IPTV Subscription UK 2026 — Plans Compared",
    href: "/best-iptv-subscription-uk",
    description:
      "UK IPTV subscription options — three to 24-month plans, GBP pricing, refund windows and what should be included in a fair UK plan.",
  },
  {
    title: "Is IPTV Legal in the UK?",
    href: "/is-iptv-legal-uk",
    description:
      "UK IPTV legality, briefly — the technology, the content question, and the six checks a buyer can run in five minutes before paying.",
  },
];

export default function Page() {
  return (
    <SubPageShell
      slug={SLUG}
      title="IPTV vs Traditional UK Pay-TV in 2026 — A Full Side-By-Side Comparison"
      category="Comparison"
      intro="Traditional UK pay-TV bundles cost the average household £80 to £110 a month once sport and cinema add-ons are layered on — between £1,500 and £1,800 a year. A modern UK IPTV subscription delivers a comparable channel mix for £5 to £15 a month. This guide compares the two categories line by line: monthly cost, channel count, picture quality, contract length, equipment, on-demand library and reliability under load. Written for UK households deciding whether to switch outright — or whether to run an IPTV service alongside an existing pay-TV box rather than replacing it."
      byline={AUTHOR_BYLINE}
      readTime="9 min read"
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    >
      {/* CONTENT PLACEHOLDER: paste approved markdown from drafts/best-iptv-uk-vs-traditional-tv.md here */}
      {/* Body content for this page will be inserted in a follow-up pass. */}
      {/* DO NOT write content here — leave this comment block visible. */}
      <div className="prose prose-lg">
        <p className="text-amber-400 font-mono text-sm">
          [SCAFFOLD ONLY — body content pending from drafts/best-iptv-uk-vs-traditional-tv.md]
        </p>
      </div>
    </SubPageShell>
  );
}
