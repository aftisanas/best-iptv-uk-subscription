import type { Metadata } from "next";
import Link from "next/link";
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

// FAQ — 7 questions/answers from drafts/best-iptv-uk-2026.md lines 95-121
// (Stage 3 integration — replaces the Stage 1 scaffold placeholders)
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "What does \"IPTV UK\" actually mean in 2026?",
    answer:
      "IPTV stands for internet protocol television — the delivery of live channels and on-demand content through a broadband connection rather than satellite or aerial. \"IPTV UK\" specifically refers to subscription services targeting British households: GBP pricing, UK terrestrial channels and regional feeds, live UK sports coverage, and a UK contact point for support. The technology itself is unremarkable in 2026 — most Smart TVs already stream this way for popular streaming platforms. The category-defining difference is the content bundle: a single flat-fee subscription replacing the traditional pay-TV package and the on-demand streaming subscriptions with one app and one payment.",
  },
  {
    question: "How many UK channels should a strong IPTV service include?",
    answer:
      "The realistic floor for a complete UK pack is around 800 feeds, covering the main UK terrestrial channels and regional variants, +1 timeshifts, premium entertainment networks, dedicated sport channels, rolling news and children's channels with safe-browsing variants. Below 500 UK feeds, the service is functionally incomplete for a typical family. Above 800 is where the bundle starts to compete with traditional UK pay-TV on coverage. Total catalogue size — including international packs — is a separate number; check the UK pack count specifically rather than the headline total.",
  },
  {
    question: "What's a fair price for an annual IPTV subscription in the UK?",
    answer:
      "The honest band in 2026 is £4 to £10 per month, billed annually or biennially. Below £3 a month suggests either an oversubscribed shared server or an unlicensed feed. Above £15 a month sits well above what the wholesale supply chain typically justifies. Traditional UK pay-TV entry tiers sit at £15 to £18 per month for the base package and £40 to £100 with broadband and sport add-ons. A fair IPTV price compares on coverage at roughly a third of the cost. Annual and 24-month plans typically halve the per-month figure of the three-month plan.",
  },
  {
    question: "Is 4K UHD really available on every plan, or just the top tier?",
    answer:
      "On most providers, 4K is gated behind the highest plan tier and only on a handful of channels. On this service, 4K UHD is enabled across all four plan lengths — Bronze through Diamond — on channels that broadcast in 4K at source, with adaptive bitrate falling back to Full HD if the line dips. The realistic 4K headline content for a UK household is top-tier UK football, European cup nights and motorsport. Niche entertainment and international feeds stream HD or Full HD. Playback requires HEVC decoding — standard on Smart TVs sold since 2018 and on the Fire TV Stick 4K Max.",
  },
  {
    question: "How long should an IPTV refund window be?",
    answer:
      "The Consumer Contracts Regulations 2013 give UK buyers a 14-day cooling-off period by default for distance-sold services. Once digital content has been provided with the buyer's express consent, that right can be waived. A 30-day window doubles the legal minimum and is the buyer-friendly standard. Anything below 7 days is a red flag — the service has either been designed to fail quietly inside the refund period or the operator does not expect to honour claims. The procedure should run through email to a named support address, with the policy text published on the same page as the price.",
  },
  {
    question: "Which device gives the best IPTV experience in the UK?",
    answer:
      "For most UK households, the Amazon Fire TV Stick 4K Max is the best value device for IPTV. The 2 GB of RAM and quad-core processor handle 4K HEVC streams without buffering, the Wi-Fi 6E radio extends usable range across a typical UK home, and the Amazon Appstore version of the standard IPTV app installs in under a minute. Apple TV 4K delivers a slightly cleaner interface at roughly five times the hardware cost. Smart TVs sold since 2018 with HEVC decode work well as a second screen, and a mobile device covers the on-the-move use case for live sport.",
  },
  {
    question: "What's the difference between a direct IPTV service and a reseller?",
    answer:
      "A direct service operates the streaming infrastructure — owns or contracts the servers, ingests the feeds, manages the transcoders and runs the support team in-house. A reseller buys credentials in bulk from an upstream operator and rebadges them. The practical differences are price (no second margin layered on), server response time (fewer other customers on the same hardware), and support latency (a reseller forwarding a ticket upstream adds 24 to 48 hours to every reply). Verifiable signals of a direct service: a UK contact address, a published status page, a named support team and a refund policy honoured without escalation.",
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

const articleProvenanceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${CANONICAL}#article`,
      citation: [
        {
          "@type": "CreativeWork",
          name: "Media Nations 2025",
          url: "https://www.ofcom.org.uk/research-and-data/tv-radio-and-on-demand/media-nations-reports",
        },
        {
          "@type": "CreativeWork",
          name: "Consumer Rights Act 2015",
          url: "https://www.legislation.gov.uk/ukpga/2015/15/contents",
        },
        {
          "@type": "CreativeWork",
          name: "The Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013",
          url: "https://www.legislation.gov.uk/uksi/2013/3134/contents",
        },
      ],
      about: [
        { "@type": "Thing", name: "IPTV" },
        { "@type": "Thing", name: "United Kingdom" },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
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
      <div className={proseClasses}>
        <h2>What is IPTV UK in 2026?</h2>
        <p>
          IPTV UK is internet protocol television delivered to British
          households over a broadband connection rather than satellite,
          aerial or coaxial cable. The category bundles live UK terrestrial
          channels, on-demand films, sport and an electronic programme guide
          into a single flat-fee subscription billed in sterling, with
          UK-based support and a refund policy that aligns with UK consumer
          law.
        </p>
        <p className="lead text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
          The phrase &ldquo;best IPTV UK&rdquo; gets searched around 3,800 times
          a month in Britain, and most of those searches land on pages that read
          like vending machines. Lists of providers. Stars next to names. No
          criteria. We have spent the last 90 days testing this service against
          the same framework we would apply to any rival: 37,000+ channels live,
          a published refund window measured in weeks rather than days, and UK
          infrastructure tuned for peak-hour load. The seven criteria below are the ones that decide whether a
          UK household keeps a subscription or claims its refund. Read them in
          order. The provider rankings on every other guide on this topic only
          make sense once you have something to rank against.
        </p>

        <h2>What &ldquo;Best IPTV UK&rdquo; Actually Means in 2026</h2>
        <p>
          &ldquo;IPTV&rdquo; is two things in 2026, and most buyers searching
          the term only know one of them. The technology is internet protocol
          television — delivery of channels and on-demand content through a
          broadband connection rather than a satellite dish, an aerial or a
          coaxial cable. That part is unremarkable. Smart TVs have been
          streaming this way for a decade. The half doing the work in the
          search query is content: a paid subscription bundling live channels,
          on-demand films and an electronic programme guide into a single
          interface for a flat monthly or annual fee, payable in GBP.
        </p>
        <p>
          The UK regulatory context matters. Ofcom does not licence IPTV
          operators as a category. It regulates broadcast-licensed channels and
          the linear feeds that carry them, which means the legitimacy of any
          single IPTV service comes down to two questions: where does the
          content originate, and what is the operator&apos;s relationship with
          the rights-holders. A service that publishes a UK address, processes
          payment in GBP through a regulated processor, holds a refund policy
          in line with the Consumer Rights Act 2015 and operates a verifiable
          status page sits in a recognisable commercial category. A service
          that takes crypto only, runs through Telegram and advertises
          &ldquo;lifetime&rdquo; deals does not. The seven criteria below sort
          the first from the second. For the full picture, read{" "}
          <Link href="/is-iptv-legal-uk">
            the legal position on IPTV in the UK
          </Link>
          .
        </p>

        <h2>The Seven Criteria, Ranked By Impact</h2>
        <p>
          Most &ldquo;best IPTV&rdquo; lists rank providers. We rank the things
          that decide whether a provider keeps your money or hands it back.
          Ordered by impact on a normal household — meaning frequency of pain
          when the criterion fails, not feature gloss:
        </p>
        <ol>
          <li>
            <strong>Channel count</strong> — the headline number. If the
            channels you watch are not on the list, every other criterion is
            academic.
          </li>
          <li>
            <strong>Uptime</strong> — published, measurable. The one criterion
            that is binary: either the service works at 9pm on a Saturday or it
            does not.
          </li>
          <li>
            <strong>Refund window</strong> — your legal escape hatch. UK
            consumer law gives you 14 days by default; the buyer wants more.
          </li>
          <li>
            <strong>4K UHD streaming</strong> — available on every plan rather
            than gated behind a &ldquo;premium&rdquo; tier.
          </li>
          <li>
            <strong>Simultaneous screens</strong> — how many family members can
            watch on different devices at the same time.
          </li>
          <li>
            <strong>Device coverage</strong> — which screens already in your
            house can play the service without buying new hardware.
          </li>
          <li>
            <strong>Transparent GBP pricing</strong> — sterling throughout, no
            surprise renewals, the per-month figure published next to the
            total.
          </li>
        </ol>
        <p>
          Channel count tops the list because it is the only criterion that
          cannot be fixed after purchase. A provider can patch uptime; nobody
          can retroactively add channels you wanted. Uptime sits second because
          a service that is down at peak is functionally useless regardless of
          channel count. Refund window is third because it is the protection
          that activates when any of the others fails quietly. The bottom four
          are weighted by how often they bite the average UK household — not
          how often they appear on marketing pages.
        </p>

        <h2>Channel Count — Why 37,000+ Matters For UK Households</h2>
        <h3>Why headline channel counts inflate</h3>
        <p>
          Channel count is the headline number on every IPTV landing page, and
          the figure is almost always inflated by listing the same channel
          three times — HD, SD and the +1 timeshift — as three separate
          entries. The number that matters is total unique live feeds inside a
          single subscription interface, with the UK feeds grouped and
          searchable.
        </p>
        <p>
          The UK household watches differently from any other European market.
          Ofcom&apos;s Media Nations 2025 report puts average daily viewing at
          4 hours 30 minutes per person across TV and video, with broadcast
          still accounting for 56 percent of in-home viewing — meaning the UK
          terrestrial channels and their regional variants remain
          non-negotiable. Add live UK sports coverage (top-tier UK football,
          European cup nights, international rugby tournaments, motorsport,
          combat sports), the rolling news desks, children&apos;s channels with
          regional safe-browsing variants, and the 40-plus language packs that
          serve British households with family abroad.
        </p>
        <p>
          The realistic ask sits between 4,000 and 8,000 channels before a
          subscription qualifies as &ldquo;complete&rdquo; for a typical UK
          family.
        </p>
        <h3>The UK pack number that matters</h3>
        <p>
          Anything north of 30,000 is luxury territory — breadth of
          international coverage and depth of niche premium movie channels.
          This service publishes 37,000+ as the unique-feed total, with an 800+
          UK pack inside that figure covering the main terrestrial feeds,
          regional variants and +1 timeshifts. The 198,000-title on-demand
          library refreshes daily, which matters more than the raw count — a
          static library decays inside three months.
        </p>
        <p>
          Red flags before paying anyone: a single round number with no
          breakdown (&ldquo;over 30,000 channels!&rdquo;) usually means total
          feed slots rather than unique channels. Ask for the UK pack count
          separately. If it is not published, the headline figure is doing the
          work for both numbers.
        </p>
        <p>
          To see how the channel pack maps to plan length, view{" "}
          <Link href="/#pricing">the four subscription lengths</Link>.
        </p>

        <h2>Uptime — How To Verify Any Provider's Reliability Claim</h2>
        <p>
          High-uptime promises are the IPTV equivalent of "fast
          broadband" — a phrase every operator uses and almost none of
          them prove. The maths is worth running. A typical "three-nines"
          uptime claim translates to a maximum of around 8 hours 45 minutes
          of downtime across a full year, or roughly 43 minutes per month. If a
          provider advertises that level of reliability and you experience a
          single peak-time outage longer than 45 minutes inside any 30-day
          window, the claim has already failed.
        </p>
        <p>
          UK households feel uptime failure at predictable times. Peak demand
          on UK consumer broadband sits between 6pm and 11pm — also when live
          UK sport airs. UK broadband infrastructure now reaches gigabit speeds
          in most premises, so the household line is rarely the bottleneck. The
          IPTV server is. Overloaded shared servers, oversubscribed transcoders
          and shifting CDN routes cause the classic &ldquo;service works until
          kickoff&rdquo; pattern.
        </p>
        <p>
          The verifiable signal is a live status page that updates in real
          time and is auditable historically. A service that publishes uptime
          as a marketing line on the homepage without a status page link is
          asking for trust without supplying the evidence. Three questions to
          ask before paying: does the status page update independently of the
          marketing page, is downtime logged retrospectively, and is the
          incident history searchable by date.
        </p>
        <p>
          The honest answer for any buyer is this: hold the provider to the
          refund window rather than the uptime number. The 30-day refund
          window covers the scenario where real performance fails to match
          the marketing copy, regardless of whether a status page exists.
          For the load patterns that separate stable services from the rest,
          read{" "}
          <Link href="/best-iptv-uk-vs-traditional-tv">
            how IPTV compares with traditional UK pay-TV
          </Link>
          .
        </p>

        <h2>Refund Window — The 30-Day Rule</h2>
        <p>
          The Consumer Rights Act 2015 and the Consumer Contracts Regulations
          2013 give UK buyers of distance-sold services a default 14-day
          cooling-off period. That window is the legal floor, not the ceiling.
          Once a buyer has expressly consented to immediate provision of
          digital content — which an IPTV credential paste effectively
          triggers — that right can be waived. Most IPTV providers know this
          and time their refund cut-off accordingly.
        </p>
        <p>
          A 30-day window doubles the legal minimum, and it matters
          specifically because the failure modes of IPTV services are slow.
          Channel coverage gaps are obvious in week one. Server overcrowding
          shows up in week two. The &ldquo;service works fine then falls apart
          at 7pm on a Saturday&rdquo; pattern often takes three weekends to
          confirm. A 7-day window is enough time to confirm activation worked.
          It is not enough time to confirm the service will hold up across a
          normal UK viewing cycle.
        </p>
        <p>
          What to look for on a provider&apos;s site: the refund window in
          plain text on the same page as the price, the procedure for claiming
          it (an email address counts; a Telegram handle does not), and
          whether the window applies to all plan lengths or only the shortest.
          Some operators publish a 30-day window but quietly exempt their
          12-month and 24-month plans, which is where most of the money sits.
        </p>
        <p>
          This service operates a 30-day full refund across every plan length
          — three-month Bronze through 24-month Diamond. The procedure runs by
          email through the same UK support team that handles activation.
          Doubling the legal minimum is the only refund policy a UK buyer
          should accept. To inspect the refund terms before paying,{" "}
          <Link href="/">view current UK pricing</Link>.
        </p>

        <h2>Streaming Quality — 4K UHD Without The Premium Tier Trap</h2>
        <p>
          4K UHD is the criterion most IPTV providers exploit. The advertised
          pitch is &ldquo;4K available on our service&rdquo;. The reality, on
          most providers we have tested: 4K only on the top-tier plan, only on
          channels that originate in 4K (a small minority) and only with HEVC
          decoding support on the playback device. Three &ldquo;only&rdquo;s
          stack into a much smaller offer than the headline implies.
        </p>
        <p>
          The UK household variable here is the playback chain. HEVC, the
          H.265 codec that 4K IPTV streams rely on for bandwidth efficiency,
          is supported by most UK Smart TVs sold since 2018. Older sets, some
          Samsung models with the documented HEVC inconsistency, and Fire
          Stick generations earlier than the 4K Max struggle with it. UK
          broadband is rarely the limit — UK broadband infrastructure now
          reaches gigabit speeds in most premises. The line carries 4K. The
          decoder is the bottleneck.
        </p>
        <p>
          What to look for: 4K UHD available on every plan tier rather than
          gated behind the most expensive option, explicit adaptive-bitrate
          fallback to Full HD when the line dips, and a channel-by-channel
          indication of which feeds are produced in 4K at source. A provider
          that advertises &ldquo;4K&rdquo; without naming which channels
          stream natively at that resolution is selling a marketing claim.
        </p>
        <p>
          This service streams 4K UHD on every plan — Bronze through Diamond
          — on channels that broadcast in 4K at source, with adaptive bitrate
          that drops to Full HD if the line dips. The realistic 4K headline
          content for a UK household is top-tier UK football, European cup
          nights and motorsport.
        </p>

        <h2>Device Coverage — Fire Stick, Apple TV, Smart TV, Mobile</h2>
        <p>
          The UK household runs more than one screen the IPTV service is
          expected to play on. Typical: a Smart TV in the living room, an
          Amazon Fire Stick on a second set, an Apple TV box on a third, and a
          mobile device for matches on the move. A subscription that supports
          two of those four leaves the household paying for hardware it cannot
          use.
        </p>
        <p>
          The Fire Stick deserves separate treatment because it is the device
          most UK IPTV buyers actually own. The Fire TV Stick 4K Max (second
          generation) ships with a 2.0 GHz quad-core processor, 2 GB of RAM
          and Wi-Fi 6E — enough to handle 4K HEVC streams without the
          buffering drop-outs that plague the Lite and the original HD
          generations. If a household is choosing a Fire Stick specifically
          for IPTV, the 4K Max is the only generation worth buying in 2026.
          Apple TV 4K behaves identically: paste credentials into a compatible
          app, the channel guide loads, no side-loading required.
        </p>
        <p>
          Red flags worth screening for: any service requiring Telegram-only
          credential delivery, any service refusing to support the official
          Amazon Appstore versions of standard IPTV apps, any service that
          caps simultaneous screens at one or two on the entry tier. The cap
          is the give-away. A genuine multi-device UK service publishes the
          screen count at the headline of each plan and applies the same
          number to every tier.
        </p>
        <p>
          This service supports Fire Stick (all 4K generations), Apple TV,
          Smart TVs with HEVC decode, Android and iOS mobile, Windows and Mac
          desktop, and MAG-class IPTV set-top boxes. Five simultaneous screens
          applies across every plan — the same five on Bronze as on Diamond.
          The full install walkthrough lives at{" "}
          <Link href="/best-iptv-uk-firestick">
            the device-by-device setup guide
          </Link>
          .
        </p>

        <h2>Pricing Transparency — GBP, No Hidden Renewals</h2>
        <p>
          The UK IPTV market has a pricing-transparency problem. Most
          high-ranking review pages list providers in USD — US-affiliate plays
          repurposed for UK search. The reader who pays $69 a year discovers
          the conversion adds £6, the processor adds a foreign-transaction
          fee, and the renewal switches back to the dollar figure each
          anniversary.
        </p>
        <p>
          What honest UK pricing looks like: GBP throughout, the per-month
          figure stated next to the total, renewal terms in plain text, and
          the difference between the introductory rate and the renewal rate
          set out before checkout. Compare that to the traditional UK pay-TV
          norm. Entry-tier bundles from the dominant pay-TV platform sit at
          £15 to £18 per month, with sport and cinema add-ons pushing the
          household bill into the £40 to £100 band depending on broadband
          package.
        </p>
        <p>
          The UK TV licence currently runs at £174.50 a year for households
          watching live broadcast television — an additional fixed cost on
          top of the traditional pay-TV bundle. Those numbers reset the
          baseline a UK buyer should compare an IPTV subscription against.
        </p>
        <p>
          What to watch for: an &ldquo;annual&rdquo; headline price that is
          actually billed monthly under a different renewal clause; a 24-month
          plan with a 12-month auto-renew at a higher rate; a
          &ldquo;lifetime&rdquo; deal collecting £100 to £500 upfront. The
          last category is the most consistent scam in this market —
          operators take the lump-sum payment and disappear inside three to
          six months.
        </p>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm sm:text-base border-collapse rounded-lg overflow-hidden border border-violet-100">
            <caption className="sr-only">
              UK IPTV subscription plans in GBP — total price, per-month
              equivalent and refund window.
            </caption>
            <thead className="bg-violet-50 text-foreground">
              <tr>
                <th scope="col" className="text-left font-semibold px-4 py-3">
                  Plan
                </th>
                <th scope="col" className="text-left font-semibold px-4 py-3">
                  Length
                </th>
                <th scope="col" className="text-left font-semibold px-4 py-3">
                  Total (£)
                </th>
                <th scope="col" className="text-left font-semibold px-4 py-3">
                  Per month (£)
                </th>
                <th scope="col" className="text-left font-semibold px-4 py-3">
                  Refund
                </th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-t border-violet-100">
                <th scope="row" className="text-left font-medium text-foreground px-4 py-3">
                  Bronze
                </th>
                <td className="px-4 py-3">3 months</td>
                <td className="px-4 py-3">£25.99</td>
                <td className="px-4 py-3">£8.66</td>
                <td className="px-4 py-3">30 days</td>
              </tr>
              <tr className="border-t border-violet-100 bg-violet-50/30">
                <th scope="row" className="text-left font-medium text-foreground px-4 py-3">
                  Silver
                </th>
                <td className="px-4 py-3">6 months</td>
                <td className="px-4 py-3">£39.99</td>
                <td className="px-4 py-3">£6.66</td>
                <td className="px-4 py-3">30 days</td>
              </tr>
              <tr className="border-t border-violet-100">
                <th scope="row" className="text-left font-medium text-foreground px-4 py-3">
                  Gold
                </th>
                <td className="px-4 py-3">12 months</td>
                <td className="px-4 py-3">£59.99</td>
                <td className="px-4 py-3">£4.99</td>
                <td className="px-4 py-3">30 days</td>
              </tr>
              <tr className="border-t border-violet-100 bg-violet-50/30">
                <th scope="row" className="text-left font-medium text-foreground px-4 py-3">
                  Diamond
                </th>
                <td className="px-4 py-3">24 months</td>
                <td className="px-4 py-3">£89.99</td>
                <td className="px-4 py-3">£3.75</td>
                <td className="px-4 py-3">30 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Direct Reseller vs Affiliate Review Sites</h2>
        <p>
          An awkward fact: this is a direct service, not a review site
          comparing many providers. The framework above is a buyer&apos;s
          framework, but the reader&apos;s reasonable response is &ldquo;of
          course you&apos;ll say you meet your own criteria — you wrote
          them&rdquo;. That objection is fair, and the only honest answer is
          to acknowledge it.
        </p>
        <p>
          What changes when you read a buyer&apos;s guide on the operator&apos;s
          own site rather than on a third-party affiliate page is that the
          bias is visible. We are not pretending to be neutral. We are
          publishing the criteria a thoughtful UK buyer should apply, and we
          are positioning this service against them in the same paragraph.
        </p>
        <p>
          A reader who applies the framework, checks a third-party review,
          then comes back gets the most useful comparison — better than three
          &ldquo;Top 10 Best IPTV UK&rdquo; affiliate pages listing the same
          seven providers in different orders because the commissions vary
          month to month.
        </p>
        <p>
          The other half of the answer is the publishing record. The seven
          criteria are auditable: the 37,000+ channel count sits on the
          homepage, the 30-day refund is in the footer terms, the GBP-only
          pricing is on every plan card, and the Secure Proxy add-on pricing
          is itemised at checkout. Nothing in the framework above is asserted
          without the corresponding evidence sitting one click away.
        </p>
        <p>
          A direct service that hides its evidence is selling on hope. A
          direct service that publishes its evidence is at worst telling the
          truth selectively — and at best handing you the same checklist you
          would use against any rival. For the position on{" "}
          <Link href="/is-iptv-legal-uk">legality before payment</Link>, the
          standalone guide covers it in detail.
        </p>
      </div>
    </SubPageShell>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleProvenanceSchema) }}
    />
    </>
  );
}
