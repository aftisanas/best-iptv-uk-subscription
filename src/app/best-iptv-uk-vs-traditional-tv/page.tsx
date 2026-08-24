import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, SITE_URL, OG_IMAGE } from "@/lib/constants";

const SLUG = "best-iptv-uk-vs-traditional-tv";
const CANONICAL = `${SITE_URL}/${SLUG}`;
const PUBLISHED_DATE = "2026-06-04";

// Title & description sourced from v2 plan Section C, page 3.4
const PAGE_TITLE = "IPTV vs Traditional UK Pay-TV 2026 — Full Comparison";
const PAGE_DESCRIPTION =
  "IPTV vs traditional UK pay-TV in 2026: cost, channels, picture quality, contract length and long-term value compared line by line for UK households.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
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
    images: [OG_IMAGE.url],
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// FAQ — 6 Q&A pairs from drafts/best-iptv-uk-vs-traditional-tv.md lines 103-125
// All Section E compliance substitutions applied (no banned broadcasters or leagues)
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "Is IPTV cheaper than traditional UK pay-TV?",
    answer:
      "For most household configurations, substantially. Entry-tier traditional pay-TV with broadband sits at £660-£840 across a year before sport. Premium traditional pay-TV with sport add-ons runs £1,200-£1,500. IPTV runs £60-£90 per year on the longer plans, plus the £180 TV licence. The saving sits between £600 and £1,440 per year against a sport-heavy premium configuration. The variables are whether the household values brand familiarity over the saving and whether the broadband line and household hardware support the switch.",
  },
  {
    question: "Does IPTV cover top-tier UK football the same way as traditional pay-TV?",
    answer:
      "Both categories carry the major UK sport feeds. Traditional pay-TV does so under direct rights-holder agreements integrated into the platform's interface. IPTV operators carry the feeds through their own commercial arrangements, which vary by operator. The viewing experience on a stable IPTV connection is functionally equivalent — same matches, same kick-off times, same 4K UHD on the channels that broadcast in 4K. The integration of the channel into the household's EPG, recording and on-demand chain differs by category.",
  },
  {
    question: "Can I keep my existing UK pay-TV box and add IPTV alongside?",
    answer:
      "Yes. IPTV runs on a separate device — a Fire Stick, Apple TV or Smart TV app — and does not interact with an existing pay-TV box or dish. Households often run both in parallel during a transition month, using IPTV for the wide channel pack and the pay-TV box for the integrated UK terrestrial catch-up apps and the bundled streaming platforms. The pay-TV box becomes a secondary device the household can cancel at the end of its contract term once IPTV proves itself.",
  },
  {
    question: "What broadband speed do I need before cancelling traditional pay-TV?",
    answer:
      "A 25 Mbps line is the floor for stable 4K IPTV; 10 Mbps is enough for HD. Ofcom's Connected Nations 2025 report puts UK median download speeds in the 80-100 Mbps range, which carries IPTV comfortably. The line variable is consistency rather than peak speed — a 50 Mbps fibre line is more reliable than a 200 Mbps cable line during peak 6pm-11pm congestion. Confirm a working speed test at peak time on the device that will run the IPTV app before committing.",
  },
  {
    question: "Does IPTV need an engineer visit?",
    answer:
      "No. IPTV installs through an app on hardware the household already owns. Setup runs five minutes start to finish on a working Fire Stick. No dish, no satellite alignment, no in-home cabling, no engineer appointment window. The single technical step the household runs is pasting the Xtream Codes credentials from the welcome email into the IPTV app. Traditional satellite pay-TV typically requires an engineer install for new dish placement (£150-£500), though existing dishes can be reused.",
  },
  {
    question: "Can I record live IPTV streams the way I record on a pay-TV PVR?",
    answer:
      "Yes, on Fire OS Fire Sticks running IPTV Smarters Pro or TiviMate. Both apps support recording on supported provider lines, with the recording saved to internal storage or an external USB drive. The 16 GB on the Fire TV Stick 4K Max holds 4-6 hours of HD recording before filling. The Vega OS units (new 2026 HD and 4K Select) restrict recording to whatever the Appstore-published IPTV app supports — Purple Smart Player carries a limited recording feature.",
  },
];

// Related guides — 3 sibling pages from v2 plan Section D matrix
// (outbound rows 19, 20, 21 from /best-iptv-uk-vs-traditional-tv, excl. home)
const relatedGuides: ReadonlyArray<SubPageRelatedGuide> = [
  {
    title: "How We Evaluate UK IPTV Providers — Seven-Criteria Framework",
    href: "/best-iptv-uk-2026",
    description:
      "The full 2026 buyer's guide — seven criteria a UK household can verify on any IPTV provider's site before paying for a subscription.",
  },
  {
    title: "IPTV Subscription UK — Plans & Terms Compared",
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

const proseClasses = [
  "prose prose-lg max-w-none",
  "prose-headings:text-foreground prose-headings:font-bold",
  "prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-12 prose-h2:mb-5",
  "prose-p:text-muted prose-p:leading-relaxed",
  "prose-strong:text-foreground",
  "prose-li:text-muted prose-li:marker:text-[color:var(--color-primary)]",
  "prose-a:text-[color:var(--color-primary)] prose-a:no-underline prose-a:font-medium",
  "hover:prose-a:underline prose-a:underline-offset-2",
].join(" ");

export default function Page() {
  return (
    <SubPageShell
      slug={SLUG}
      title="IPTV vs Traditional UK Pay-TV in 2026 — A Full Side-By-Side Comparison"
      category="Comparison"
      intro="Traditional UK pay-TV bundles cost the average household £80 to £110 a month once sport and cinema add-ons are layered on — between £1,500 and £1,800 a year. A modern UK IPTV subscription delivers a comparable channel mix for £5 to £15 a month. This guide compares the two categories line by line: monthly cost, channel count, picture quality, contract length, equipment, on-demand library and reliability under load. Written for UK households deciding whether to switch outright — or whether to run an IPTV service alongside an existing pay-TV box rather than replacing it."
      byline={AUTHOR_BYLINE}
      readTime="9 min read"
      publishedDate={PUBLISHED_DATE}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
    >
      <div className={proseClasses}>
        <p className="lead text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
          Traditional UK pay-TV and IPTV are not the same product fighting
          on price. They are two different ways of buying television, with
          different equipment, different commitment structures, different
          content libraries and different consumer protections. This page
          sets out the comparison line by line — the costs each carries
          across twelve months, what each delivers, where each genuinely
          wins, and which UK household each suits. The honest answer is
          not that IPTV beats traditional pay-TV across every category. It
          is that the two now serve clearly different buyer profiles in
          2026.
        </p>

        <h2>Traditional UK Pay-TV in 2026 — The Real Cost</h2>
        <p>
          The traditional UK pay-TV market in 2026 is dominated by three
          providers: a satellite-and-streaming platform with a 30-year-plus
          history, a cable-based provider, and the rebranded telco TV
          service running through a major UK mobile operator. Their
          entry-tier and bundled pricing has converged sharply over the
          past two years.
        </p>
        <p>
          Entry-tier traditional pay-TV starts at £15-£18 per month for the
          base television package on its own. Bundle that with full-fibre
          broadband and the cost moves to £50-£55 a month on an 18-month
          contract for the mid-tier package, and £80-£100 a month for the
          premium tier with both broadband and a sport add-on tier. The
          Ofcom Pricing Trends 2025 report (published February 2026) shows
          the average UK household pays around £12 a month for pay-TV when
          taken as part of a triple-play bundle — a 23 percent real-terms
          drop year on year, driven by competition.
        </p>
        <p>
          Two costs sit above the headline. The UK TV licence, mandatory
          for live broadcast viewing regardless of source, rose to £180
          per year from 1 April 2026 — an increase from £174.50 the year
          before. A premium UK sports add-on tier sits at £35-£40 per
          month, taking the household premium pay-TV bill toward £100-£140
          per month once equipment, broadband, sport and licence are
          summed. The £100/month threshold is where IPTV starts to look
          like a different commercial category entirely.
        </p>

        <h2>What Traditional Pay-TV Subscribers Actually Get</h2>
        <p>
          The traditional UK pay-TV package buys five things, and the
          package&apos;s strengths sit in those five.
        </p>
        <p>
          A curated channel lineup. UK terrestrial channels in HD with
          regional variants, premium entertainment networks, dedicated UK
          news desks, premium movie channels and — on the higher tiers —
          the major premium UK sports broadcaster. The channel count sits
          between 200 and 350 active feeds on most bundles, well below an
          IPTV catalogue but assembled with editorial intent.
        </p>
        <p>
          Equipment that just works. A set-top box with a working remote,
          an EPG that updates automatically, a recording function with
          cloud or hard-disk storage, and — on the cable provider — a
          satellite-free install through the household coax line. The
          hardware is the friction the subscription removes.
        </p>
        <p>
          Catch-up apps for UK terrestrial channels, integrated into the
          platform&apos;s interface. Seven-day catch-up and longer
          archives sit alongside the live grid.
        </p>
        <p>
          Bundled streaming subscriptions on the higher tiers. The
          dominant pay-TV platform now bundles popular streaming
          platforms inside its mid-tier package — a real cost-saving
          against subscribing separately.
        </p>
        <p>
          A named UK customer service team with a contact phone number,
          an engineer visit option, and a household-brand trust signal
          that has built across decades. The intangible matters: a
          70-year-old switching television is more likely to choose the
          brand they have used since 1990 than a category they have never
          heard of.
        </p>

        <h2>IPTV vs Traditional UK Pay-TV — Side by Side</h2>
        <p>
          The two services align on the surface and diverge underneath. A
          side-by-side at the criteria that decide the buyer&apos;s
          choice.
        </p>
        <p>
          <strong>Total live channels.</strong> IPTV: 37,000+ on this
          service, with an 800+ UK pack inside the total. Traditional
          pay-TV: 200-350 channels on most bundles. The IPTV advantage is
          breadth, particularly international feeds.
        </p>
        <p>
          <strong>Monthly cost.</strong> IPTV: £3.75-£8.66 per month
          depending on plan length. Traditional pay-TV: £15-£18 base,
          £50-£100 bundled, £100-£140 with premium sport. IPTV runs at a
          third of the bundled price even before sport.
        </p>
        <p>
          <strong>4K UHD.</strong> IPTV: enabled on every plan tier.
          Traditional pay-TV: gated behind the highest tiers and limited
          to specific channels.
        </p>
        <p>
          <strong>Equipment.</strong> IPTV: an existing Fire Stick, Apple
          TV or Smart TV from £35 one-off. Traditional pay-TV: a
          provider-supplied box (rented or bundled), dish install where
          required (£100-£500), engineer time on first set-up.
        </p>
        <p>
          <strong>Contract.</strong> IPTV: a fixed-length subscription
          with the 30-day refund window applied to every plan. Traditional
          pay-TV: 18-24 month bundle contracts with mid-contract
          cancellation fees and the standard 14-day cooling-off period.
        </p>
        <p>
          <strong>Trust.</strong> Traditional pay-TV: established
          household brands, named UK customer service, decades of
          operating history. IPTV: a newer category with wider variance
          in operator quality — buyers must verify the criteria
          themselves. For the framework that turns this comparison into a
          buying decision, see{" "}
          <Link href="/best-iptv-uk-2026">
            the seven evaluation criteria
          </Link>
          .
        </p>

        <h2>Cost Comparison Over 12 Months</h2>
        <p>
          The twelve-month total is the cleanest read for a household
          choosing between the two categories. Three realistic scenarios.
        </p>
        <p>
          <strong>
            Scenario A — Entry-tier traditional pay-TV with broadband
            bundle.
          </strong>{" "}
          £55/month bundle on an 18-month contract × 12 = £660. Add TV
          licence £180. Total Year 1: £840. The bundle assumes the
          broadband line is already part of the household&apos;s
          commitment; the standalone TV component is £15-£18 per month.
        </p>
        <p>
          <strong>
            Scenario B — Premium traditional pay-TV with sport add-on.
          </strong>{" "}
          £90/month bundle × 12 = £1,080. Sport add-on £35 × 12 = £420.
          TV licence £180. Total Year 1: £1,680. This is the
          configuration most households running live UK football,
          European cup nights and motorsport pay for.
        </p>
        <p>
          <strong>
            Scenario C — IPTV (Gold plan) + retained broadband + TV
            licence.
          </strong>{" "}
          Gold £59.99 (12 months) = £59.99 total. Existing broadband (a
          household keeps broadband regardless). TV licence £180. Total
          Year 1: £240 — only the £180 licence and the £60 IPTV
          subscription sit on the household television bill.
        </p>
        <p>
          The £600-£1,440 annual saving from B to C is what drives the
          IPTV decision for sport-heavy households. The smaller £600
          saving from A to C is enough to justify the switch for many
          households even before sport enters. The maths is the maths —
          the variable is whether the IPTV service delivers stably and
          whether the household values brand familiarity over the saving.
          For the plan structure behind these figures,{" "}
          <Link href="/best-iptv-subscription-uk">
            compare IPTV subscription plans for the UK
          </Link>
          .
        </p>

        <h2>Channel Coverage — What Each Service Includes</h2>
        <p>
          Channel coverage is where the two categories diverge in shape,
          not just size. A summary of what each delivers.
        </p>
        <p>
          <strong>Traditional pay-TV strengths.</strong> Live UK
          terrestrial channels are the category&apos;s strongest hand —
          full HD, all regional variants, automatic EPG updates, and
          integrated catch-up apps tested against UK broadcast standards.
          Premium UK sport sits inside the platform&apos;s commercial
          agreements with rights-holders; the sport add-on delivers
          top-tier UK football and the premium UK sports
          broadcaster&apos;s full slate inside a single grid. Premium
          movie channels and bundled popular streaming platforms round
          out the catalogue.
        </p>
        <p>
          <strong>IPTV strengths.</strong> Channel breadth: 37,000+
          unique feeds against 200-350 on traditional pay-TV.
          International coverage: 40+ language packs covering Arabic,
          South Asian, Eastern European, African, Latin and Far-Eastern
          feeds — the category traditional pay-TV historically priced
          into separate add-ons. Niche premium movie channels and
          world-cinema feeds inside one interface. A 198,000-title
          on-demand library refreshed daily.
        </p>
        <p>
          <strong>Where the categories overlap.</strong> Both deliver
          top-tier UK football, European cup nights, international rugby
          tournaments, motorsport and combat sports — traditional pay-TV
          under direct rights-holder agreements, IPTV operators under
          arrangements that vary by operator. Both cover UK terrestrial
          channels and regional variants. Both deliver 4K UHD on the
          channels that broadcast in 4K at source — IPTV on every plan
          tier, traditional pay-TV behind the highest tier.
        </p>
        <p>
          A household concentrating on UK terrestrial broadcasts and a
          small premium sport slate finds traditional pay-TV the simpler
          product. A household with international content needs or wide
          niche-channel viewing finds IPTV&apos;s catalogue dominant.
        </p>

        <h2>Setup and Equipment — Box, Dish, Stick</h2>
        <p>
          The first month of the bill includes very different setup
          mechanics.
        </p>
        <p>
          <strong>Traditional pay-TV.</strong> The dominant satellite-based
          platform requires either an existing dish or an engineer
          install. New satellite dish installs run £150-£250 for a
          standard residential job, more in London and the South East,
          and up to £400-£500 for multi-room cabling. The cable provider
          runs through existing in-home coax — no dish, no engineer
          visit on most installs. Set-top boxes are provided as part of
          the contract on most tiers. The streaming-stick tier of the
          satellite platform avoids the dish entirely, with a small
          streamer that plugs into HDMI.
        </p>
        <p>
          <strong>IPTV.</strong> No dish, no engineer visit, no
          provider-supplied hardware. The household uses an existing
          device — most commonly an Amazon Fire Stick (£34.99-£59.99
          retail), Apple TV 4K, a Smart TV sold since 2018 with HEVC
          decode, or a mobile device. Setup is a paste-credentials
          install through the IPTV app: five minutes start to finish on
          Fire OS Fire Sticks, three minutes on the new Vega OS units
          through the Amazon Appstore route.
        </p>
        <p>
          <strong>The equipment trade.</strong> Traditional pay-TV
          bundles the hardware cost inside the monthly fee — the buyer
          never sees a separate equipment line, but the rental sits
          inside the headline price. IPTV externalises the hardware cost
          as a one-off purchase the household typically already owns.
          Over 24 months, the IPTV hardware cost is amortised to near
          zero; the traditional pay-TV rental keeps recurring.
        </p>
        <p>
          For a household making the switch from satellite, the dish and
          box are recoverable: the hardware can stay installed and used
          for free-to-air satellite reception alongside the IPTV
          subscription. No removal cost is necessary.
        </p>

        <h2>Contracts and Cancellation — The Two Models</h2>
        <p>
          The contract structure decides what happens when household
          circumstances change.
        </p>
        <p>
          <strong>Traditional pay-TV contracts.</strong> 18-month and
          24-month minimum-term contracts are the norm on bundled
          broadband-plus-TV packages. Standalone TV packages typically
          run on 31-day rolling contracts at a higher monthly rate.
          Mid-term cancellation triggers an early-termination fee —
          typically the remaining monthly fees minus a discount, often
          in the hundreds of pounds for a long-bundle exit. The standard
          14-day Consumer Contracts Regulations 2013 cooling-off period
          applies at the start of the contract but expires shortly after
          activation.
        </p>
        <p>
          Annual price rises mid-contract are written into most
          providers&apos; terms. Increases were confirmed for April 2026
          across the major providers, ranging from CPI to CPI+3.9
          percent depending on the package. The buyer commits at one
          price and pays escalating amounts across the contract.
        </p>
        <p>
          <strong>IPTV subscription contracts.</strong> Fixed-length
          plans (three, six, twelve and 24 months) with the full amount
          paid at the start. No mid-cycle price rises — the plan price
          is locked at purchase. The 30-day refund window applies to
          every plan length without exemption, doubling the legal
          minimum. No automatic monthly billing relationship — the
          subscription expires cleanly at the end of its term, and the
          household chooses whether to renew.
        </p>
        <p>
          The two models suit different household preferences.
          Traditional pay-TV&apos;s monthly-payment model spreads the
          bill but commits the household for 18-24 months at a price
          that will rise. IPTV&apos;s full-amount-upfront model
          concentrates the spend at purchase but caps the
          household&apos;s exposure. For the consumer-law context behind
          both, see{" "}
          <Link href="/is-iptv-legal-uk">
            the legal position on IPTV in the UK
          </Link>
          .
        </p>

        <h2>Who Each Service Suits Best</h2>
        <p>
          Neither category dominates across every household. The honest
          match-up.
        </p>
        <p>
          <strong>Traditional pay-TV suits.</strong> Households that
          value brand familiarity and prefer a household-name provider
          with a phone-line customer service team. Households wanting a
          single bill bundling broadband, TV and phone with no separate
          hardware decisions. Older households moving from a long-running
          pay-TV relationship who want continuity. Households where a
          single dominant sport — most commonly top-tier UK football —
          is the central viewing driver and the household prefers the
          rights-holder&apos;s integrated package.
        </p>
        <p>
          <strong>IPTV suits.</strong> Households running stable
          broadband (25 Mbps minimum) on a Wi-Fi 6 router. Households
          with international content needs across multiple language
          packs. Households wanting to halve or quarter their television
          spend and accept some setup work in exchange. Households
          comfortable with a paste-credentials install on a Fire Stick,
          Apple TV or Smart TV. Households watching widely across
          multiple sport categories, niche entertainment and
          international cinema, where the 37,000-channel breadth
          outweighs the curated traditional package. Households running
          multiple screens in parallel — IPTV&apos;s five simultaneous
          screens match a UK family pattern that traditional pay-TV
          charges as a multi-room add-on.
        </p>
        <p>
          The wrong match in either direction creates a bad outcome. A
          household picking IPTV without the broadband or hardware to
          support it ends up with a buffering experience and a refund
          claim. An IPTV-suited household staying on traditional pay-TV
          pays £500-£1,000 more per year than it needs to.{" "}
          <Link href="/">View current UK pricing</Link> to inspect the
          live IPTV plan figures against your household&apos;s
          situation.
        </p>
      </div>
    </SubPageShell>
  );
}
