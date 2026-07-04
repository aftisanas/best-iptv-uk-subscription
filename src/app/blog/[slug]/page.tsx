import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, SITE_URL, SITE_NAME, LOGO_PATH, AUTHOR_BYLINE, REVIEWER_BYLINE, GUIDES_LINKS } from "@/lib/constants";
import BlogPostContent from "./BlogPostContent";

const blogContent: Record<string, { content: string[] }> = {
  "best-iptv-uk-guide-2026": {
    content: [
      "Picking the right IPTV service in 2026 is less about clever marketing and more about verifiable signals. Across a crowded British market, the strongest providers are the ones whose channel count, uptime percentage and refund policy can all be checked by a new subscriber before any card details are entered.",
      "## What A Strong IPTV Service Actually Looks Like\n\nThe right provider is rarely the loudest. It is the one that consistently ships the channels British households actually watch, at the quality promised, on the hardware already sitting under the television — and at a monthly rate that makes traditional pay-TV look indefensible.",
      "## Seven Signals That Separate Top IPTV Providers\n\n- **UK broadcaster coverage** — all major terrestrial channels, premium entertainment, dedicated sport channels and regional variants fully represented\n- **Matchday stability** — no freeze during Saturday afternoon kick-offs or cup-final weekends\n- **Picture quality ladder** — HD as the floor, 4K UHD wherever the broadcaster transmits it\n- **EPG with catch-up** — seven-day rewind built into the guide, not bolted on\n- **Device breadth** — Fire Stick, Samsung, LG, Apple TV, MAG, phones, tablets, desktops\n- **Support staffed in British hours** — live chat and WhatsApp answered under five minutes\n- **GBP pricing with a real refund** — not a 7-day window hidden in a PDF",
      "## Red Flags To Avoid When Comparing IPTV Options\n\nSome claims fall apart on inspection. Channel counts with no live uptime page, reviews on domains the provider controls, WhatsApp-only support, missing UK registration details, aggressive countdown timers and pricing displayed only in USD are all signals to walk away.",
      "## IPTV Vs Traditional Pay-TV\n\nA comparable premium pay-TV bundle with sport and cinema sits at £75+ a month, often locked behind an 18-month contract. The [IPTV plans on this domain](/best-iptv-subscription-uk) deliver the same channels — plus international, kids and 198,000 films — for a fraction of the price, with no contract and a cancel-anywhere refund.",
      "## The Verdict\n\nThis service passes every criterion listed above: 37,000 live channels, stable streaming performance, 4K as standard, full device coverage, a named British support crew and a 30-day refund on every plan. That is what a buyer should demand from a complete IPTV subscription — and what subscribers should test inside the refund window before paying past it.",
    ],
  },
  "how-to-setup-iptv-firestick": {
    content: [
      "Loading an IPTV service onto an Amazon Fire Stick takes minutes, not hours. This walkthrough covers every stage from enabling sideloading through to the first channel playing, written in the order the Fire Stick menus actually present.",
      "## What Is Needed Before Starting\n\n- Any Amazon Fire Stick (HD, 4K, 4K Max or Lite)\n- A broadband line at 10 Mbps or above for HD, 25 Mbps for clean 4K\n- An active subscription with login credentials\n- Around five minutes of uninterrupted time at the television",
      "## Step 1 — Unlock The Fire Stick\n\nOpen Settings → My Fire TV → Developer Options → Install unknown apps. Once the Downloader toggle is enabled, the Fire Stick accepts installations that sit outside Amazon's default store — the foundation for every IPTV install guide.",
      "## Step 2 — Install Downloader\n\nFrom the Fire Stick home screen, search for “Downloader” and install the free Amazon-approved app. This is the bridge that fetches the IPTV Smarters Pro APK recommended for most install workflows.",
      "## Step 3 — Pull The Player Onto The Device\n\nInside Downloader, paste the URL supplied with the welcome email. [IPTV Smarters Pro is the default recommendation](/best-iptv-uk-firestick), with TiviMate and GSE Smart IPTV as alternatives for viewers who prefer a different interface.",
      "## Step 4 — Enter The Credentials\n\nOpen the installed app, add a new user and paste the server URL, username and password from the welcome email. Credentials arrive by email and WhatsApp within minutes of payment clearing — no manual activation required.",
      "## Step 5 — Confirm The Guide Loads Cleanly\n\nA mix of UK terrestrial, sport and entertainment channels are the fastest sanity-checks. If four representative feeds load within two seconds and the EPG populates for each, the install is finished and the full library is live.",
    ],
  },
  "iptv-vs-traditional-tv": {
    content: [
      "A fair comparison of IPTV against traditional UK pay-TV has to cover price, channel depth, picture quality, contract flexibility and support — five axes on which both have to be judged before a switch makes sense for any British household.",
      "## Monthly Price\n\nA premium pay-TV bundle with sport and cinema add-ons lands between £60 and £100 a month, usually tethered to an 18-month contract with early-termination charges. The plans on this domain start at £25.99 for three months and fall to £3.75 equivalent a month across the 24-month term. Annual saving: £600 to £1,200.",
      "## Channel Depth\n\nTraditional pay-TV packages curate what subscribers pay for. This IPTV service ships 37,000 live channels — every major UK terrestrial channel, premium entertainment networks, dedicated sport packs, regional variants, plus international packs that traditional providers do not sell. Nothing is gated behind a higher tier.",
      "## Contracts And Flexibility\n\nTraditional pay-TV typically requires a 12 to 18-month contract with an exit fee. This service runs on rolling terms with no lock-in, upgrades and downgrades on demand, and a 30-day money-back guarantee on every first purchase.",
      "## Picture And Stability\n\nSatellite pay-TV delivers excellent picture via dish. IPTV delivers HD, Full HD and 4K UHD over broadband; on any line at 10 Mbps or above, adaptive streaming matches satellite on picture and catches up on smoothness even during peak demand.",
      "## Support\n\nTraditional pay-TV routes support through phone queues and app chat. The crew here answers live chat, WhatsApp and email 24/7, with an average first response under four minutes — published weekly, not buried.",
      "## The Honest Verdict\n\nSwitching is the right call when the home broadband sits at 10 Mbps or above and the chosen provider publishes every metric. The cost saving alone is enough to pay for a broadband upgrade — the safety net is the 30-day refund that protects the first purchase.",
    ],
  },
  "live-uk-sports-streaming-guide": {
    content: [
      "For UK sports viewers, the cleanest setup is a service that carries every relevant broadcaster in one subscription. Splitting coverage across multiple traditional providers costs over £100 a month — or far less on a single complete IPTV plan.",
      "## The Sports Coverage Problem This Service Solves\n\nUK sports rights sit with several separate broadcasters. Covering every televised fixture traditionally means three separate subscriptions and three separate apps. A complete IPTV plan consolidates the lot into a single login.",
      "## What The Sports Pack Actually Carries\n\nThe sports pack ships top-tier UK football coverage, dedicated football channels, motorsport feeds, European cup coverage and every backup feed needed for concurrent matches — HD and 4K where the broadcaster supports it.",
      "## Coverage Beyond Football\n\n- **European cup nights** on dedicated sport channels\n- **Top European leagues** on international sport feeds\n- **International rugby tournaments and cricket** on UK sport channels\n- **Motorsport** including Formula One and MotoGP coverage\n- **Wimbledon and majors tennis** on UK terrestrial sport coverage\n- **Boxing, combat sports, golf** and every minor tour with UK rights",
      "## The Stability Test — Saturday Afternoon\n\nThe real measure of a sports service is the Saturday afternoon window. The infrastructure here runs dedicated sports-optimised servers with anti-freeze failover, so picture stability holds up even when tens of thousands of British subscribers join the same feed at kick-off.",
      "## Getting Started On The Sports Plan\n\nThe full UK sports calendar plus every supporting league covers every [plan on this domain](/best-iptv-subscription-uk), from £3.75 a month on the 24-month term, with a 30-day refund. The cleanest way to judge it: subscribe, stream a Saturday afternoon kick-off, and ask for a full refund if anything about the picture fails.",
    ],
  },
};

type PageParams = { slug: string };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Organization",
      name: AUTHOR_BYLINE.name,
      description: AUTHOR_BYLINE.description
    },
    reviewedBy: {
      "@type": "Organization",
      name: REVIEWER_BYLINE.name
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${LOGO_PATH}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <BlogPostContent 
        post={post as any} 
        content={content.content} 
        author={AUTHOR_BYLINE}
        reviewer={REVIEWER_BYLINE}
        relatedContent={GUIDES_LINKS.slice(0, 3)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleLd, breadcrumbLd]) }}
      />
    </>
  );
}
