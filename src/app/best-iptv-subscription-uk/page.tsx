import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { AUTHOR_BYLINE, REVIEWER_BYLINE, SITE_URL } from "@/lib/constants";

const SLUG = "best-iptv-subscription-uk";
const CANONICAL = `${SITE_URL}/${SLUG}`;
const PUBLISHED_DATE = "2026-06-04";

// Title & description sourced from v2 plan Section C, page 3.3
const PAGE_TITLE = "IPTV Subscription UK — Plans, Pricing & Terms Compared";
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

// FAQ — 6 Q&A pairs from drafts/best-iptv-subscription-uk.md lines 112-134
const faqItems: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "How much does a UK IPTV subscription cost in 2026?",
    answer:
      "The honest band for a complete UK IPTV subscription is £4-£10 per month, billed annually or biennially. Our four plans run £8.66/month for Bronze (3 months total £25.99), £6.66 for Silver (£39.99), £4.99 for Gold (£59.99) and £3.75 for Diamond (£89.99). Below £3 a month suggests an oversubscribed shared server or an unlicensed feed; prices above £15 per month may not represent the same value as lower-cost alternatives. Compare these against the £60-£80 monthly streaming spend the average UK household carries across multiple popular streaming platforms.",
  },
  {
    question: 'Are "lifetime" IPTV subscriptions a scam?',
    answer:
      'In the overwhelming majority of cases, yes. Seized UK enforcement cases consistently show three-to-six-month operating lifespans for "lifetime" operators charging £50-£500 upfront. The economics do not support indefinite service for a one-off payment at consumer prices. Legitimate UK operators publish fixed-length plans — three, six, twelve, 24 months — with refund policies that apply across every length. If an operator advertises "lifetime" access, treat the offer as a red flag and run the verification framework before paying.',
  },
  {
    question: "Why don't most IPTV providers offer real refunds?",
    answer:
      "Providers running on the legal margin time their refund window inside seven days because the failure modes of unlicensed feeds take two or three weekends to surface. By the time peak-time outages and channel gaps are confirmed, the window has closed. The Consumer Contracts Regulations 2013 set a 14-day cooling-off floor for distance-sold services, but it can be waived once digital content has been provided with the buyer's express consent. A 30-day window applied to every plan length doubles the legal minimum and is the buyer-friendly standard.",
  },
  {
    question: "Should I avoid crypto-only IPTV sellers?",
    answer:
      "For UK consumers, yes. Crypto-only checkout removes the chargeback and processor-dispute routes that protect card and PayPal buyers. A registered UK operator processing through a regulated card or PayPal route preserves reversal rights. Crypto is not illegal for IPTV purchase, but it concentrates buyer risk entirely on the operator's continued existence. Combined with Telegram-only contact or a \"lifetime\" pricing model, crypto-only payment is the strongest single signal of an operator running outside UK consumer protections.",
  },
  {
    question: "Can one subscription stream on multiple devices at once?",
    answer:
      "Yes, on a legitimate UK operator. Our four plans all include five simultaneous screens on a single account — the same five on Bronze as on Diamond, with no plan-tier exemption. That covers a typical UK household running a Smart TV in the living room, a Fire Stick on a second set, an Apple TV on a third and at least one mobile device for matches consumed on the move. Operators that cap entry-tier screens at one or two while reserving five for the highest-priced plan are using screen count as upsell pressure rather than a genuine product feature.",
  },
  {
    question: "Are 3-month plans worth it, or should I commit to 12 months?",
    answer:
      "Three-month Bronze suits two cases: first-time buyers testing whether the service covers their household's actual viewing, and seasonal viewers tracking a single sport window. For households planning to keep IPTV beyond three months, the per-month maths shifts the rational choice toward Gold (£4.99/month, 42% below Bronze) or Diamond (£3.75/month, 57% below Bronze). The 30-day refund window applies to all four plan lengths, so the longer plans carry no additional refund risk. Commit shorter if uncertain; commit longer once the service has proved itself.",
  },
];

// Related guides — 3 sibling pages from v2 plan Section D matrix
// (outbound rows 16, 17, 18 from /best-iptv-subscription-uk, excl. home)
const relatedGuides: ReadonlyArray<SubPageRelatedGuide> = [
  {
    title: "How We Evaluate UK IPTV Providers — Seven-Criteria Framework",
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
      title="IPTV Subscription UK — Plans, Pricing and Terms Compared"
      category="Subscriptions"
      intro="A strong UK IPTV subscription in 2026 is more than a monthly price. Term length, refund window, payment method, cancellation behaviour and what's included in the base plan all separate the services worth subscribing to from the ones to walk away from. This guide compares UK IPTV subscription lengths from three months to 24, lays out the per-month cost across each tier in GBP, explains why one-off 'lifetime' deals are a scam signal, and applies the seven evaluation criteria specifically to subscriptions rather than features. Built for UK households deciding how long to commit."
      byline={AUTHOR_BYLINE}
      reviewer={REVIEWER_BYLINE}
      readTime="10 min read"
      publishedDate={PUBLISHED_DATE}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
      citations={[
        { name: "Digital Markets, Competition and Consumers Act 2024", url: "https://www.legislation.gov.uk/ukpga/2024/13/enacted" },
        { name: "Consumer Contracts Regulations 2013", url: "https://www.legislation.gov.uk/uksi/2013/3134/contents" }
      ]}
      aboutEntities={[
        { name: "Subscription business model" },
        { name: "IPTV" },
        { name: "United Kingdom" }
      ]}
    >
      <div className={proseClasses}>
        <p className="lead text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
          A UK IPTV subscription now competes against a £60-£80-a-month
          average household streaming spend — two or three popular streaming
          platforms, a music service, often a sport pass — that adds up to
          £720-£960 a year before the £180 TV licence and any traditional
          pay-TV bundle on top. That maths drives the IPTV question for
          British households in 2026. This page covers what a strong UK IPTV
          subscription should include, breaks down our four plan lengths,
          and flags the hidden costs that turn a cheap headline price into a
          £150 surprise twelve months later.
        </p>

        <h2>What an IPTV Subscription UK Should Actually Include in 2026</h2>
        <p>
          &ldquo;IPTV subscription&rdquo; is one of the loosest commercial
          terms in UK streaming. It can mean a £3-a-month credential pasted
          from a Telegram seller. It can mean a £90 annual plan through a
          registered UK operator. It can mean a single-channel re-stream
          sold through the lower tail of Trustpilot. None of those three
          buyers wants the same product, and none would describe what they
          bought in the same words.
        </p>
        <p>
          A defensible UK IPTV subscription in 2026 has six attributes a
          buyer can check before paying.
        </p>
        <ul>
          <li>
            Total live channels published as a unique-feed count, with a
            separate UK pack count inside it.
          </li>
          <li>
            Plan length sold in clean GBP — three, six, twelve and 24 months
            is the standard ladder — with the per-month figure printed next
            to the total.
          </li>
          <li>
            Refund window of at least the 14-day Consumer Contracts
            Regulations 2013 floor, applied to every plan length without
            exemption.
          </li>
          <li>
            4K UHD enabled on every plan tier, not gated behind the most
            expensive.
          </li>
          <li>Five simultaneous screens, applied equally across plans.</li>
          <li>
            A working DMCA contact and a public uptime page that is
            verifiable before payment.
          </li>
        </ul>
        <p>
          A subscription missing two of these is not a UK product — it is
          an offshore reseller masquerading as one. The framework that turns
          this checklist into a verifiable decision sits at{" "}
          <Link href="/best-iptv-uk-2026">
            the seven evaluation criteria
          </Link>
          .
        </p>

        <h2>The Four Plan Lengths — When Each Makes Sense</h2>
        <p>
          Most UK IPTV operators publish three or four plan lengths because
          the maths of household subscription patterns rewards it. First-time
          buyers want the shortest commitment that still proves the service
          works. Returning buyers want the rate that minimises per-month
          cost. Six months captures households testing a switch across a
          single season.
        </p>
        <p>
          Our four plans split as follows. Bronze runs three months at
          £25.99 (£8.66 per month). Silver runs six months at £39.99 (£6.66
          per month). Gold runs twelve months at £59.99 (£4.99 per month).
          Diamond runs 24 months at £89.99 (£3.75 per month). Every plan
          includes the same 37,000+ channels, the same 198,000+ films and
          series, the same five screens, the same 4K UHD coverage and the
          same 30-day refund window. The variable is purely commitment
          length.
        </p>
        <p>
          The per-month differential matters. Going from Bronze to Diamond
          cuts the per-month rate by 57 percent — £8.66 down to £3.75 —
          for a household using the service for two full years. Going from
          Bronze to Gold cuts it by 42 percent. Silver sits in the middle
          at 23 percent below Bronze.
        </p>
        <p>
          That ladder is the cleanest way to read IPTV subscription pricing
          in the UK. A provider selling a single rolling monthly plan at a
          flat rate is bidding for sceptical buyers or running a different
          commercial model entirely. The four-tier ladder is the UK consumer
          norm.
        </p>

        <h2>Bronze (3 Months) — Who It&apos;s For</h2>
        <p>
          Bronze is the shortest commitment any UK IPTV buyer should
          consider. Three months at £25.99 — £8.66 per month, the highest
          per-month rate of the four plans — covers the full 37,000+ channel
          pack and the 198,000+ on-demand library with no feature gating.
        </p>
        <p>
          The plan suits two buyer profiles. The first is the first-time
          IPTV subscriber switching from a traditional pay-TV bundle and
          testing whether the catalogue covers what the household actually
          watches. Three months is long enough to confirm stable peak-time
          uptime across at least a dozen weekends and that the channels
          matter to your household are present in HD or 4K. The 30-day
          refund window covers the first month of that test; the remaining
          two months let you commit conditionally.
        </p>
        <p>
          The second profile is the seasonal viewer. Households following a
          single sport season — top-tier UK football, a stretch of European
          cup nights, an international rugby tournament — can match Bronze
          to the season window and stop. Pause-and-resume is the cleanest
          model for sport-driven viewers who do not want IPTV running
          year-round.
        </p>
        <p>
          What Bronze does not buy is the best per-month rate. For
          households planning to keep IPTV beyond three months, £8.66 per
          month makes Silver or Gold the rational next step. The plan
          trades commitment for flexibility, and the price reflects that
          trade fairly.
        </p>

        <h2>Silver (6 Months) — The Half-Year Test</h2>
        <p>
          Silver runs six months at £39.99 — £6.66 per month, 23 percent
          below the Bronze rate. Same channel pack, same 4K UHD coverage,
          same five screens, same 30-day refund window. The plan is the
          most common upgrade path from Bronze for households that
          confirmed during the three-month window that the service holds
          up.
        </p>
        <p>
          The half-year length suits households that want to ride out the
          seasonal swings in viewing. UK households watch differently in
          November-March (peak sport, peak indoor evenings) from
          April-September (longer days, more on-demand catch-up, fewer
          live-TV hours). Six months spans either of those halves cleanly,
          which is why Silver tends to outsell Bronze for first-time annual
          users.
        </p>
        <p>
          For households still uncertain whether to commit to a full year,
          Silver is the buyer-friendly middle. The per-month rate is closer
          to Gold than to Bronze — £1.67 above Gold, £2.00 below Bronze —
          and the shorter commitment preserves an exit point if
          circumstances change inside six months.
        </p>
        <p>
          Where Silver falls short is value-per-month against the longer
          plans. A household confident it will keep the service for a full
          year is paying £6.66 instead of £4.99 — £20 over the period — for
          the right to step out at month six. For households not exercising
          that exit, Gold is the rational pick.
        </p>

        <h2>Gold (12 Months) — The Most Popular Plan</h2>
        <p>
          Gold is the volume plan. Twelve months at £59.99 — £4.99 per
          month, 42 percent below Bronze and 25 percent below Silver. The
          same full pack: 37,000+ channels, 198,000+ films, 4K UHD, five
          screens, 30-day refund.
        </p>
        <p>
          The economics drive the volume. A household running any
          combination of two popular streaming platforms plus a sport tier
          already pays £30-£40 a month on streaming alone — over £400 a
          year by the time the bills land. Gold replaces all of those with
          a single £59.99 annual figure that covers the live channels, the
          on-demand library and the sport coverage inside one app. For
          households committed to streaming as their primary television
          model, the swap pays for itself inside three months.
        </p>
        <p>
          The twelve-month commitment is the right length for households
          that have either lived with IPTV across a six-month Silver run,
          or that are making the full switch from traditional pay-TV and
          want a year of stable pricing to plan against. The 30-day refund
          window applies on the same terms as the shorter plans — there is
          no &ldquo;exempt on annual&rdquo; clause some UK providers
          quietly publish.
        </p>
        <p>
          For the technical setup that gets Gold running on the most
          popular UK device, read{" "}
          <Link href="/best-iptv-uk-firestick">
            the device-by-device setup guide
          </Link>
          . The plan installs in under five minutes from purchase.
        </p>

        <h2>Diamond (24 Months) — Locked-In Value</h2>
        <p>
          Diamond runs 24 months at £89.99 — £3.75 per month, the lowest
          per-month rate across the ladder. Same channel pack, same library,
          same 4K, same five screens, same 30-day refund. The trade is pure
          commitment: two years of pricing locked against any future
          increase, against an upfront payment 50 percent higher than Gold.
        </p>
        <p>
          The economics suit households that have already used the service
          across at least one Silver or Gold cycle and are confident it
          covers what they watch. The two-year lock removes the
          renewal-pricing risk: if the operator increases plan pricing
          during the period, Diamond holds at £89.99. Against a 2026
          average UK household streaming spend of £60-£80 per month, the
          £3.75 per-month figure sits in a different category entirely.
        </p>
        <p>
          Where Diamond becomes the wrong plan is for households whose
          viewing patterns are likely to change inside 24 months. A move, a
          household downsize, a return to terrestrial-only viewing — all of
          these argue for Gold instead, with the option to renew when
          circumstances settle. The 30-day refund still covers the
          early-failure scenario for Diamond, but it does not cover the
          household-change scenario at month seven.
        </p>
        <p>
          The clearest single number to remember about Diamond: £3.75 per
          month, for the same complete service every other plan delivers.
          If the household is going to keep IPTV running for two years
          anyway, the plan is the rational pick. To inspect the live
          pricing grid, <Link href="/">view current UK pricing</Link>.
        </p>

        <h2>Per-Month vs Total Cost — Reading IPTV Subscription Prices Honestly</h2>
        <p>
          UK IPTV pricing is published in two figures: the total cost of
          the plan and the per-month equivalent. Both matter. Most buyers
          anchor on whichever number serves the comparison they happen to
          be running.
        </p>
        <p>
          The total cost is what leaves your account at purchase. £25.99
          Bronze, £39.99 Silver, £59.99 Gold, £89.99 Diamond. That figure
          dictates the cash-flow impact at checkout and is what a
          chargeback or refund window applies to.
        </p>
        <p>
          The per-month figure is what the plan costs against your other
          monthly bills. £8.66 Bronze, £6.66 Silver, £4.99 Gold, £3.75
          Diamond. That is the right number when comparing IPTV against
          the household&apos;s combined monthly streaming spend.
        </p>
        <p>
          Two reading errors are common. The first: comparing a
          competitor&apos;s rolling monthly rate against our 24-month
          per-month rate without accounting for the commitment difference.
          A £6.99 rolling plan is not &ldquo;more expensive than Gold&apos;s
          £4.99&rdquo; — it is a different product entirely. The second:
          assuming a per-month figure quoted under a foreign-currency
          headline holds at the GBP equivalent at checkout. It usually does
          not. Conversion, processor fees and FX margins routinely add
          10-15 percent.
        </p>
        <p>
          The clean read: take the total cost, divide by months, compare
          against the equivalent UK product on the same basis. Any other
          comparison is a marketing-funnel artefact.
        </p>

        <h2>The Hidden Costs Most IPTV Subscriptions Include</h2>
        <p>
          The headline price on an IPTV landing page is rarely the full
          annual cost. Five categories of hidden cost recur across the UK
          market.
        </p>
        <p>
          Auto-renewal at a higher rate. Many operators publish an
          introductory rate, then auto-renew at a &ldquo;standard&rdquo;
          rate 20-50 percent higher. The Digital Markets, Competition and
          Consumers Act 2024 introduces mandatory auto-renewal reminders
          for UK subscription contracts when the rules take effect —
          currently expected autumn 2026 — but the reminder requirement
          does not cap the renewal price.
        </p>
        <p>
          Mid-cycle plan changes. Some operators rebrand or remove the
          original tier mid-year, forcing a transition to a higher-priced
          equivalent. Read the terms for any &ldquo;we reserve the right to
          vary plan structure&rdquo; clause.
        </p>
        <p>
          Sport pack add-ons. A core subscription that quietly excludes
          top-tier UK football, European cup nights or motorsport, with an
          add-on tier at £5-£15 a month, is the most common hidden cost.
          Confirm the channel pack covers the sport you watch before
          paying.
        </p>
        <p>
          Foreign-currency conversion charges. A &ldquo;from $X&rdquo;
          headline that converts at checkout typically adds £4-£10 to the
          annual cost.
        </p>
        <p>
          Per-device surcharges. Some operators publish a single-screen
          entry plan that adds £2-£5 a month per additional screen. A
          subscription without simultaneous screens for a typical UK
          family is functionally incomplete.
        </p>
        <p>
          Our four plans publish in GBP with no auto-renewal trap, no
          mid-cycle plan changes, no sport add-on tier and the same five
          screens on every plan. The 30-day refund window is the
          buyer&apos;s check against any of these costs reappearing under
          a different name. For the legal context, see{" "}
          <Link href="/is-iptv-legal-uk">
            the legal position on IPTV in the UK
          </Link>
          .
        </p>

        <h2>What&apos;s Covered Across Every Plan</h2>
        <p>
          The four plans differ on length and per-month rate. They do not
          differ on what the subscription delivers. Every plan — Bronze
          through Diamond — includes the same complete service.
        </p>
        <p>
          37,000+ live channels with full UK terrestrial coverage and an
          800+ UK pack inside the total. 198,000+ films, series and
          documentaries on-demand, refreshed daily. Full EPG with 7-day
          catch-up TV. HD, Full HD and 4K UHD streaming on channels that
          broadcast in 4K at source, with adaptive bitrate falling back to
          Full HD if the line dips. Five simultaneous screens on a single
          account.
        </p>
        <p>
          24/7 dedicated UK support through live chat and WhatsApp.
          Secure Proxy available as an optional add-on — most rival operators charge
          £5-£10 a month for a comparable privacy add-on. Instant
          activation under 60 seconds. 30-day money-back guarantee applied
          to every plan length without exemption.
        </p>
        <p>
          Setup runs on the standard UK device list: Amazon Fire Stick (4K
          and 4K Max), Apple TV, Smart TVs with HEVC decode, Android and
          iOS mobile, Windows and Mac desktop, and MAG-class IPTV boxes.
          Households running parents, teenagers and grandparents in
          parallel keep one subscription across the five screens.
        </p>
        <p>
          What the plans deliberately do not split is the channel pack,
          the on-demand library, the 4K coverage or the screen count. A
          two-tier structure where the entry tier loses sport, 4K or
          screen capacity is the most common hidden cost in this market —
          we avoid it by design. To compare live figures side by side, see{" "}
          <Link href="/#pricing">the four subscription lengths</Link>.
        </p>
      </div>
    </SubPageShell>
  );
}
