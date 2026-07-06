import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "is-iptv-legal-uk";
const CANONICAL = `${SITE_URL}/${SLUG}`;
const PUBLISHED_DATE = "2026-06-04";

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

// FAQ — 5 Q&A pairs from drafts/is-iptv-legal-uk.md lines 97-115
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "Will I personally get in trouble for watching IPTV?",
    answer:
      "Risk depends on the source. Section 11 of the Fraud Act 2006 — obtaining services dishonestly — applies where a buyer pays for a service knowing it is not properly licensed. FACT and UK police sent warning notices to more than 1,000 end users in December 2025 after seizing customer data from an unlicensed operator. End users are not anonymous. Buying through a registered UK operator with documentary signals in place is materially different from buying through a Telegram-only seller.",
  },
  {
    question: "How do I tell a legitimate IPTV service from an unlicensed one?",
    answer:
      "Five fast checks. Companies House filing for the operating entity. A refund policy meeting the 14-day Consumer Contracts Regulations 2013 floor and listing an email procedure. GBP pricing on the same page as the plan list. Card or PayPal payment through a regulated processor — not crypto-only. A working DMCA contact. Services passing all five are not guaranteed to be licensed, but services failing two or three are reliably the operators FACT and PIPCU have targeted.",
  },
  {
    question: "Does a published refund policy mean a service is legitimate?",
    answer:
      "Necessary, not sufficient. It signals the operator has read the Consumer Contracts Regulations 2013 and intends to honour its obligations. Unlicensed operators rarely publish refund policies at all, and the ones that do typically time the window inside 7 days or exempt the longer plan tiers where most of the money sits. A 30-day window applied to every plan length is the buyer-friendly standard. Combine it with the four other checks above before treating it as confirmation.",
  },
  {
    question: "Where do I report a suspected unlicensed IPTV operator?",
    answer:
      "The Federation Against Copyright Theft (fact-uk.org.uk) accepts public reports through its website. The City of London Police's Intellectual Property Crime Unit (PIPCU) is the lead UK law-enforcement body for IP-related crime and runs joint operations with FACT. Trading Standards via Citizens Advice handles consumer-rights breaches such as undelivered services or refused refunds. Serious cases are shared between agencies during ongoing investigations.",
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

const proseClasses = [
  "prose prose-lg max-w-none",
  "prose-headings:text-foreground prose-headings:font-bold",
  "prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-5",
  "prose-p:text-muted prose-p:leading-relaxed",
  "prose-strong:text-foreground",
  "prose-li:text-muted prose-li:marker:text-violet-500",
  "prose-a:text-violet-600 prose-a:no-underline prose-a:font-medium",
  "hover:prose-a:underline prose-a:underline-offset-2",
].join(" ");

export default function Page() {
  return (
    <SubPageShell
      slug={SLUG}
      title="Is IPTV Legal in the UK? — A 2026 Buyer's Guide"
      category="Legal"
      intro="IPTV technology is legal to use in the UK in 2026, but the legality of any specific service depends on what is being distributed and under what licensing arrangement. This guide separates the technology question from the content question, sets out what UK buyers should verify on a provider's site before paying, explains the end-user position in plain English, and lists six checks any household can run in five minutes. Written as a factual buyer's reference rather than a legal document — and deliberately avoids the unverifiable claims that signal a low-trust provider."
      byline={AUTHOR_BYLINE}
      readTime="7 min read"
      publishedDate={PUBLISHED_DATE}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    >
      <div className={proseClasses}>
        <p className="lead text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
          IPTV technology is legal in the UK. The law engages with the content
          distributed through it, and only at the operator level — not at the
          subscriber level — under the Copyright, Designs and Patents Act
          1988. This guide separates the technology question from the content
          question, sets out what UK law says about end users in 2026, and
          lists the verification checks any buyer should run before paying for
          any IPTV service.
        </p>

        <h2>The Short Answer — IPTV Technology vs IPTV Content</h2>
        <p>
          IPTV — internet protocol television — is the delivery of video over
          a broadband connection rather than satellite or aerial. The
          technology has been in use for two decades. Smart TVs, set-top
          boxes and mobile apps all rely on it. No UK statute prohibits IPTV
          as a category, and Ofcom does not licence IPTV operators as a
          class.
        </p>
        <p>
          The legal question attaches to content. The Copyright, Designs and
          Patents Act 1988 (CDPA 1988) governs the unauthorised
          communication, distribution and reproduction of copyrighted works.
          An operator distributing channels without rights-holder permission
          infringes copyright. A buyer knowingly accessing those streams
          engages with infringing material — a separate question examined in
          section three.
        </p>
        <p>
          The split matters because it determines what the buyer evaluates.
          A service can use the technology legally and still distribute
          content unlawfully — or under proper commercial arrangements. The
          difference is decided by what the operator has put in place behind
          the channel list, not by the word &ldquo;IPTV&rdquo; on the
          homepage. The seven criteria a buyer should apply to any UK IPTV
          service sit at{" "}
          <Link href="/best-iptv-uk-2026">the full buyer&apos;s framework</Link>
          .
        </p>

        <h2>How UK Law Actually Treats IPTV</h2>
        <p>UK statute does not single out IPTV. It covers it under three established laws.</p>
        <p>
          The CDPA 1988 — particularly Section 20 (&ldquo;communication to
          the public&rdquo;) and Section 107 (criminal offences for
          distribution) — gives rights-holders the basis to pursue operators
          distributing channels without permission. Most criminal IPTV
          prosecutions in 2025-2026 use these provisions.
        </p>
        <p>
          The Fraud Act 2006, specifically Section 11 (&ldquo;obtaining
          services dishonestly&rdquo;), has shifted enforcement toward end
          users. Section 11 carries an unlimited fine and up to five
          years&apos; imprisonment. The Federation Against Copyright Theft
          (FACT) and the City of London Police&apos;s Intellectual Property
          Crime Unit (PIPCU) have used it against viewers, not just
          operators (
          <a
            href="https://www.ispreview.co.uk/index.php/2025/12/1000-uk-broadband-users-warned-of-illegal-tv-streaming-by-fact.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISPreview, December 2025
          </a>
          ).
        </p>
        <p>
          The Consumer Rights Act 2015 and the Consumer Contracts Regulations
          2013 govern the commercial transaction between an IPTV operator
          and a UK buyer — refund rights, distance-selling disclosures,
          contract cancellation. A service that disregards these is breaking
          UK consumer law on a separate front.
        </p>
        <p>
          Ofcom&apos;s role is narrower than buyers expect. Ofcom regulates
          broadcast-licensed channels and is consulting on Tier 1
          video-on-demand rules under the Media Act 2024 — aimed at services
          with 500,000+ UK users, consultation closing 7 August 2026. IPTV
          resellers below that threshold sit outside direct Ofcom oversight,
          even where individual channels they carry are Ofcom-licensed at
          source.
        </p>

        <h2>The End-User Position — Are You Personally At Risk?</h2>
        <p>
          The end-user position changed materially in December 2025. FACT,
          working with UK police, sent warning emails and text messages to
          more than 1,000 individuals identified as users of an illegal
          streaming operation after customer data was seized during the
          underlying investigation. That campaign confirmed three things
          buyers should treat as live in 2026.
        </p>
        <p>
          First, end users are not anonymous. Customer databases of
          unlicensed operators are routinely seized during raids and
          reviewed by police-supported investigators. Payment records, IPs
          and email addresses are reconstructed downstream.
        </p>
        <p>
          Second, criminal liability for end users exists in statute.
          Section 11 of the Fraud Act 2006 applies where a viewer pays for a
          service knowing it is not properly licensed. The 2025 Liverpool
          case of Jonathan Edge illustrated this — sentenced to three years
          and four months for running an unlicensed operation, with a
          concurrent two years and three months for personally using the
          service. The court treated buying and watching as a distinct
          offence.
        </p>
        <p>
          Third, realistic enforcement still concentrates on operators and
          commercially significant viewers — resellers, repeat buyers, those
          flagged in seized databases. A single household using a paid
          subscription from a registered UK operator carries materially
          different risk from buying access via a £20-a-year Telegram
          seller. Neither is zero, and the trajectory tightens each year.
          Source matters as much as technology.
        </p>

        <h2>How to Identify a Legitimate UK IPTV Service</h2>
        <p>
          Legitimate UK IPTV services share a common operating signature.
          The signals are visible before payment if the buyer knows where to
          look.
        </p>
        <p>
          A registered UK business identity: company number, registered
          address, contact email at the operating domain. Telegram handles
          and PO-box-only listings fail this check.
        </p>
        <p>
          A refund policy meeting at least the 14-day cooling-off floor
          under the Consumer Contracts Regulations 2013, ideally exceeding
          it. The procedure should name an email address and a response
          window. A service that refuses refunds, or routes them through a
          chat handle, is operating outside UK consumer law.
        </p>
        <p>
          Pricing in GBP through a regulated processor. Card and PayPal
          flows pass standard fraud and chargeback rules. Crypto-only
          checkouts are not illegal, but they remove the reversal route.
        </p>
        <p>
          A working DMCA contact. Operators that publish a takedown route
          and respond to it are signalling a serviceable rights-management
          posture, even where their full licensing position is undisclosed.
        </p>
        <p>
          Transparent terms of service stating the operating jurisdiction,
          the dispute-resolution mechanism, and the cancellation conditions.
          The full criteria framework sits at{" "}
          <Link href="/best-iptv-uk-2026">
            the seven evaluation criteria
          </Link>
          .
        </p>

        <h2>Warning Signs of an Unlicensed Operator</h2>
        <p>
          The patterns below show up across the unlicensed operators FACT
          and PIPCU have raided in 2024-2026. None on its own proves
          illegality. Two or three in combination is the buyer&apos;s signal
          to walk.
        </p>
        <p>
          &ldquo;Lifetime&rdquo; subscriptions for a £50-£500 one-off. The
          economics do not support a multi-year service at that price.
          Seized cases consistently show three-to-six-month operating
          lifespans before the operator disappears with the lump sums.
        </p>
        <p>
          Crypto-only payment removes chargeback as a route and concentrates
          buyer risk entirely on the operator&apos;s continued existence.
        </p>
        <p>
          Contact only through Telegram, WhatsApp or Discord, with no
          working email at a registered domain. Investigation-resistance is
          the design goal.
        </p>
        <p>
          Channel lists headlining current-season top-tier UK football,
          European cup nights, motorsport pay-per-views and recent cinema
          releases at consumer-subscription prices in the £3-£10 a month
          range. That content costs commercial operators tens or hundreds of
          millions to licence.
        </p>
        <p>
          No public status page, no refund window, no DMCA contact, no terms
          of service, no UK GDPR notice. Each absence is a separate red
          flag.
        </p>
        <p>
          For the category-level comparison against pay-TV, see{" "}
          <Link href="/best-iptv-uk-vs-traditional-tv">
            how IPTV compares with traditional UK pay-TV
          </Link>
          .
        </p>

        <h2>What to Do Before You Pay</h2>
        <p>
          Five checks any UK buyer can run inside five minutes, before a
          card number leaves the keyboard.
        </p>
        <p>
          Search Companies House for the operating entity. A registered UK
          limited company with an active filing history beats an
          unverifiable trading name. The check is free and returns
          instantly.
        </p>
        <p>
          Read the refund policy. Match the procedure (email, response
          time, plan-length exemptions) against the Consumer Contracts
          Regulations 2013 14-day floor. A 30-day window across every plan
          length is the buyer-friendly standard.
        </p>
        <p>
          Confirm GBP pricing on the same page as the plan list. A
          &ldquo;from $X&rdquo; headline that converts at checkout is the
          strongest single signal of US-affiliate repurposing.
        </p>
        <p>
          Verify the payment processor. Card (Visa/Mastercard) and PayPal
          preserve chargeback rights. Crypto-only checkout removes them.
        </p>
        <p>
          Read the terms of service and locate the DMCA contact. Pages that
          404, pages with placeholder text or pages without an update date
          are doing page count, not work.
        </p>
        <p>
          Buyers who run these checks evaluate a service the way a regulator
          or rights-holder would — on documentary signals, not marketing
          copy. To run the same checks against this service,{" "}
          <Link href="/">view current UK subscription options</Link>.
        </p>

        <h2>How This Service Operates (Transparency Section)</h2>
        <p>
          This is a direct UK IPTV service, not a comparison or review
          site. We are an interested party, and the transparent way to
          handle that is to set out how the service operates under its
          published terms — not to make categorical legal claims a buyer
          cannot independently verify.
        </p>
        <p>
          The full operating terms are published at{" "}
          <Link href="/terms">/terms</Link>. They cover jurisdiction,
          dispute resolution, cancellation conditions and data-handling
          commitments.
        </p>
        <p>
          The refund policy at <Link href="/refund">/refund</Link> offers a
          30-day full refund across every plan length — three-month Bronze
          through 24-month Diamond — exceeding the 14-day floor under the
          Consumer Contracts Regulations 2013. The procedure runs through
          email to the named UK support team.
        </p>
        <p>
          A working DMCA / copyright-complaint contact is published at{" "}
          <Link href="/dmca">/dmca</Link>. Rights-holders can submit
          takedown requests through that route; we respond within published
          windows.
        </p>
        <p>
          Payment is processed in GBP through WhatsApp ordering with itemised
          totals before any payment is taken. Order details and the Secure
          Proxy add-on price are confirmed in the chat before checkout.
        </p>
        <p>
          What this section deliberately does not do is claim the service
          is &ldquo;100% legal&rdquo;, &ldquo;fully licensed&rdquo; or
          &ldquo;Ofcom-approved&rdquo;. Those phrases are unfalsifiable
          from the buyer&apos;s position and we will not publish them. What
          we publish are the documentary signals a reasonable buyer should
          weigh.
        </p>
      </div>
    </SubPageShell>
  );
}
