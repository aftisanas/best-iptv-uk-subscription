import type { Metadata } from "next";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "best-iptv-uk-firestick";
const CANONICAL = `${SITE_URL}/${SLUG}`;

// Title & description sourced from v2 plan Section C, page 3.2
const PAGE_TITLE = "Best IPTV For Fire Stick UK 2026 — Setup & Buyer's Guide";
const PAGE_DESCRIPTION =
  "Fire Stick IPTV in the UK: which model handles 4K, the five-minute install, and how to choose a service that won't buffer during peak hours.";

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

// FAQ — 6 items from v2 plan Section C 3.2, drawn from Task 3 user questions
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "Which Fire Stick model is best for IPTV in 4K?",
    answer:
      "The Fire TV Stick 4K Max is the most capable model for IPTV in the UK in 2026. Its quad-core CPU and 2 GB of RAM handle native 4K UHD streams without the dropouts that affect older Sticks. The standard 4K Stick is fine for HD and most 4K channels but can struggle on busier feeds. The Lite and original HD Sticks are reliable for SD/HD only. For a household paying for a 4K IPTV plan, the 4K Max is the worthwhile upgrade — it sits in the £55-60 price band.",
  },
  {
    question: "Why does my Fire Stick keep buffering during football?",
    answer:
      "Peak-hour buffering on Fire Stick traces to one of four causes: a weak Wi-Fi signal between the router and the Stick (Ethernet via a USB OTG adapter usually fixes this), an older Stick with insufficient RAM for live 4K, home broadband under 12 Mbps when ISPs throttle 6-11 PM, or an IPTV service running overcrowded servers for the same kick-off. Walk through each in turn. The device is rarely the root cause on a service running proper UK infrastructure with an Ethernet-connected Stick.",
  },
  {
    question: "Do I need to side-load an app, or can I use the Amazon Appstore?",
    answer:
      "Both work. The Amazon Appstore carries IPTV Smarters Pro and several alternatives that handle most UK IPTV services without side-loading. Some providers ship a custom player only available via Downloader side-load — that requires enabling unknown sources under Settings → My Fire TV → Developer Options. For a new UK subscriber, start with the Appstore version of Smarters Pro; only side-load if the provider specifically requires it.",
  },
  {
    question: "Does Ethernet really fix Fire Stick IPTV buffering?",
    answer:
      "Yes — Ethernet eliminates Wi-Fi signal degradation, which is the single most common cause of UK Fire Stick buffering. A USB OTG adapter with a built-in Ethernet port costs around £15 and plugs into the Stick's micro-USB slot, adding a wired connection while still drawing power. On a stable broadband line, switching from Wi-Fi to Ethernet typically removes 80-90% of buffering events without changing the IPTV service.",
  },
  {
    question: "Can I use one IPTV plan on Fire Stick + Smart TV + mobile?",
    answer:
      "Yes — every plan on this service includes five simultaneous screens on a single login. A typical UK household runs the Fire Stick on the main television, a smart TV in a second room, the IPTV Smarters mobile app on a phone or tablet, and two more concurrent streams if needed. Each device can watch a different channel at the same time without re-authenticating.",
  },
  {
    question: "How fast is install once I've paid?",
    answer:
      "Under 60 seconds for the credentials. The welcome email and M3U link send the moment payment clears — no human delay and no working-hours wait. The fresh Fire Stick install then takes five minutes: install IPTV Smarters Pro from the Amazon Appstore, paste the server URL, username and password from the welcome email, and the channel guide populates within two minutes.",
  },
];

// Related guides — 3 sibling pages from v2 plan Section D matrix
// (outbound rows 13, 14 from /best-iptv-uk-firestick + /is-iptv-legal-uk added
// as the cluster's trust anchor, per the pillar→firestick pattern in row 11)
const relatedGuides: ReadonlyArray<SubPageRelatedGuide> = [
  {
    title: "Best IPTV UK 2026 — Seven-Criteria Buyer's Guide",
    href: "/best-iptv-uk-2026",
    description:
      "The seven UK IPTV evaluation criteria — channel count, uptime, refund, 4K, devices, GBP pricing, support — applied to every service worth considering.",
  },
  {
    title: "Best IPTV Subscription UK 2026 — Plans Compared",
    href: "/best-iptv-subscription-uk",
    description:
      "Choose a subscription length — three, six, twelve or 24 months — and see the per-month GBP rate across each tier, with refund and renewal terms.",
  },
  {
    title: "Is IPTV Legal in the UK?",
    href: "/is-iptv-legal-uk",
    description:
      "The UK legal position on IPTV in 2026 — what to verify on a provider's site before paying, and the six checks any buyer can run in five minutes.",
  },
];

export default function Page() {
  return (
    <SubPageShell
      slug={SLUG}
      title="Best IPTV For Fire Stick UK 2026 — Setup Guide & Service Criteria"
      category="Device Guide"
      intro="The Fire Stick is the most popular IPTV device in UK homes in 2026, but the experience splits sharply between Fire Stick generations and between IPTV services. This guide covers which Fire Stick model handles 4K UHD without dropping mid-stream, the five-minute install using IPTV Smarters Pro, the five fixes that actually solve peak-hour buffering, and the buyer's-guide criteria filtered specifically for Fire Stick households. Written for UK viewers who already own a Fire Stick — or are about to buy one — and want a single IPTV service to load that won't fail on Saturday afternoon."
      byline={AUTHOR_BYLINE}
      readTime="9 min read"
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    >
      {/* CONTENT PLACEHOLDER: paste approved markdown from drafts/best-iptv-uk-firestick.md here */}
      {/* Body content for this page will be inserted in a follow-up pass. */}
      {/* DO NOT write content here — leave this comment block visible. */}
      <div className="prose prose-lg">
        <p className="text-amber-400 font-mono text-sm">
          [SCAFFOLD ONLY — body content pending from drafts/best-iptv-uk-firestick.md]
        </p>
      </div>
    </SubPageShell>
  );
}
