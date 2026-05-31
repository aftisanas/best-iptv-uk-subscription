export const SITE_NAME = "Best IPTV UK";
export const SITE_URL = "https://best-iptv-uk-subscription.com";
export const CONTACT_EMAIL = "support@best-iptv-uk-subscription.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "UK Subscribers" },
] as const;

export const FEATURES = [
  {
    title: "Trusted By 50,000+ UK Subscribers",
    description:
      "Built around what UK households actually need from a streaming subscription — full channel coverage, fair pricing in GBP, no contracts, and a 30-day refund window that lets you test the service risk-free before committing.",
    icon: "Star" as const,
  },
  {
    title: "Built For Live UK Sports — Low Latency, 4K Where Available",
    description:
      "Top-tier UK football, European cup nights, motorsport, combat sports and rugby all stream with low-latency delivery on UK infrastructure. Wherever the original broadcast is produced in 4K UHD, the feed reaches your screen at that quality.",
    icon: "Tv" as const,
  },
  {
    title: "198,000 On-Demand Films & Series, Refreshed Daily",
    description:
      "The on-demand library holds 198,000 films and series, refreshed each day. Premium movie channels, world cinema, and international premiere feeds all browse inside the same app interface.",
    icon: "Film" as const,
  },
  {
    title: "Five Screens On One Account — Built For UK Families",
    description:
      "Five simultaneous screens mean parents, kids and grandparents watch on their own terms. Parental locks, safe-search and four-digit PINs come built in.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Built-In VPN At No Extra Cost — Privacy Without Add-Ons",
    description:
      "A built-in VPN encrypts every stream at no extra cost. Privacy stays intact on public Wi-Fi, mobile data or shared home networks.",
    icon: "Shield" as const,
  },
  {
    title: "Native 4K UHD On Every Plan — Adaptive Bitrate Built In",
    description:
      "Every plan streams 4K UHD on channels that broadcast in the format. Adaptive bitrate keeps the picture smooth if the line dips mid-stream.",
    icon: "Monitor" as const,
  },
  {
    title: "Buy Direct, Skip The Reseller Markup",
    description:
      "Skip the reseller markup. Buy direct for lower prices, faster server response and official support with a named UK team behind it.",
    icon: "Zap" as const,
  },
  {
    title: "99.9% Uptime, Published Live",
    description:
      "Live uptime sits at 99.9% and refreshes each minute on a public status page — verifiable before purchase, not a marketing number.",
    icon: "Clock" as const,
  },
] as const;

export const COMPARISON_ROWS = [
  { feature: "Live Channels", ours: "37,000+", typical: "8,000 – 15,000", unlicensed: "Variable" },
  { feature: "4K UHD Streaming", ours: "Yes — every plan", typical: "Premium tier only", unlicensed: "No" },
  { feature: "Built-In VPN", ours: "Yes — included", typical: "Rarely", unlicensed: "No" },
  { feature: "Simultaneous Screens", ours: "Up to 5", typical: "1 – 2", unlicensed: "1" },
  { feature: "Uptime (Verified)", ours: "99.9%", typical: "Not published", unlicensed: "Unstable" },
  { feature: "UK Support", ours: "24/7 live chat + WhatsApp", typical: "Email only", unlicensed: "None" },
  { feature: "Money-Back Guarantee", ours: "30 days, full refund", typical: "3 – 7 days", unlicensed: "None" },
  { feature: "Starting Price", ours: "From £3.75/month", typical: "£15 – £25/month", unlicensed: "Free (risk)" },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "Step 1",
    title: "Compare Plans & Pick The Right Length",
    description:
      "Scroll to the pricing grid and compare three, six, twelve and 24-month options. Every plan covers the same full 37,000-channel service.",
  },
  {
    step: "Step 2",
    title: "Secure Checkout — Card, PayPal or Crypto",
    description:
      "Pay by card, PayPal or crypto on an SSL-secured checkout. The M3U link and app guide arrive by email in under 60 seconds.",
  },
  {
    step: "Step 3",
    title: "Watch On Any Device In Under 5 Minutes",
    description:
      "Install any supported app, paste the credentials and press play. The full channel guide loads in under two minutes on any modern device.",
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Bronze — Quick Start",
    name: "3 Months",
    subtitle: "The shortest commitment to test the full service",
    price: 25.99,
    originalPrice: 49.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 5,
    badge: "Quick Start",
    discount: "-48%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Silver — Balanced Choice",
    name: "6 Months",
    subtitle: "Six months of full-service 4K streaming",
    price: 39.99,
    originalPrice: 69.99,
    perMonth: 6.66,
    period: "6 months",
    devices: 5,
    badge: "Balanced Choice",
    discount: "-43%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 43%",
  },
  {
    id: "gold",
    tier: "Gold — Most Popular",
    name: "12 Months",
    subtitle: "A full year of complete service at the lowest annual rate",
    price: 59.99,
    originalPrice: 99.99,
    perMonth: 4.99,
    period: "year",
    devices: 5,
    badge: "Best Value — Save 40%",
    discount: "-40%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: true,
    savings: "Save 40%",
  },
  {
    id: "diamond",
    tier: "Diamond — Elite",
    name: "24 Months",
    subtitle: "Two years locked at the lowest monthly rate available",
    price: 89.99,
    originalPrice: 199.99,
    perMonth: 3.75,
    period: "2 years",
    devices: 5,
    badge: "Elite — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 55%",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Oliver B.",
    location: "Sheffield",
    text: "Tried three rival IPTV services before this one. None came close on sports lag. The football picture is cleaner here than the old satellite dish ever was.",
    rating: 5,
    avatar: "OB",
    since: "September 2025",
  },
  {
    name: "Hannah W.",
    location: "Nottingham",
    text: "Our family WhatsApp group all agreed after a week. Five screens, all 4K, zero freeze even during cup final weekend.",
    rating: 5,
    avatar: "HW",
    since: "January 2026",
  },
  {
    name: "Daniel O.",
    location: "Belfast",
    text: "The built-in VPN sold the subscription. Most rival IPTV services charge extra for privacy — here it just works from the first play.",
    rating: 5,
    avatar: "DO",
    since: "February 2026",
  },
  {
    name: "Zara M.",
    location: "Southampton",
    text: "Recommended by a friend after researching the market for a month. The recommendation was accurate — support replied on live chat in 90 seconds at 11pm.",
    rating: 5,
    avatar: "ZM",
    since: "November 2025",
  },
  {
    name: "Lewis P.",
    location: "Swansea",
    text: "Switched from a reseller after reading reviews. The direct service is cheaper, faster and the channel list is twice the size.",
    rating: 5,
    avatar: "LP",
    since: "December 2025",
  },
  {
    name: "Nadia R.",
    location: "Aberdeen",
    text: "A solid family choice. Kids' channels in HD for the children, rolling news for the grandparents, premium film channels for the parents. Everyone wins.",
    rating: 5,
    avatar: "NR",
    since: "March 2026",
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "IPTV Box / MAG", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What should I look for when choosing an IPTV service in 2026?",
    answer:
      "Three measurable signals matter: total channel count (this service offers 37,000+ channels with full UK coverage), published uptime (99.9% verified live), and a refund window that lets you test before committing (30 days, full refund). Together they tell you whether a provider stands behind its service.",
  },
  {
    question: "How does an IPTV subscription compare with traditional UK pay-TV?",
    answer:
      "Subscribers typically pay less, get more channels, and keep no contract. A typical premium pay-TV bundle with sports and cinema add-ons costs £75+ a month. Plans here start at £25.99 for three months and include international channels, full sport coverage, and 198,000 films on demand.",
  },
  {
    question: "Is IPTV legal to use in the UK?",
    answer:
      "IPTV technology itself is legal in the UK. The legality of any specific service depends on the content being streamed and the provider's licensing arrangements. This service operates under the terms published on our site and provides a UK contact address. See our terms of service and DMCA policy for full operating details.",
  },
  {
    question: "Which device gives the best IPTV experience in the UK?",
    answer:
      "The Amazon Firestick 4K Max gives the best value for most UK households. Load IPTV Smarters Pro from the Amazon Appstore, paste the credentials from the welcome email, and the full channel guide loads in two minutes.",
  },
  {
    question: "Do all plans include 4K UHD?",
    answer:
      "Every plan includes 4K UHD on channels that broadcast in that format. HD falls back automatically on older equipment or slower connections.",
  },
  {
    question: "How can I verify the service before subscribing?",
    answer:
      "Read the public uptime page, compare the channel count against rivals, and review the 30-day refund policy. Every claim published on this page is verifiable before purchase, and the full refund window lets you test the actual service risk-free.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Instead of a fragmented free trial, every paid plan carries a full 30-day refund. Every feature can be tested risk-free inside a complete refund window.",
  },
  {
    question: "How many UK channels are included?",
    answer:
      "The full UK channel pack covers 800+ feeds including all major terrestrial channels, premium entertainment networks, dedicated sport channels, news, and regional variants.",
  },
  {
    question: "Can the account be shared with family?",
    answer:
      "Yes. Every plan includes five simultaneous screens so four family members can stream at the same time on different devices.",
  },
  {
    question: "Is the built-in VPN really free?",
    answer:
      "Yes. The VPN is built into the app at no extra cost. Most rival IPTV services charge £5 – £10 a month for a comparable privacy add-on.",
  },
  {
    question: "What internet speed is needed for stable streaming?",
    answer:
      "25 Mbps for clean 4K, 10 Mbps for HD. The servers adapt the bitrate if the line dips mid-stream, so the picture holds even on slower rural broadband.",
  },
  {
    question: "How fast is activation after payment?",
    answer:
      "Under 60 seconds. The welcome email and M3U link send the moment payment clears — no human delay and no working-hours wait.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "UK Sport — Football, Rugby & Motorsport",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Every major UK sports broadcast streams live in one place, with full coverage of domestic top-flight football, European cup nights, international rugby tournaments and the leagues UK fans follow most. Matches play in HD or 4K wherever the original feed is produced in that format.",
    linkHref: "/blog/live-uk-sports-streaming-guide",
    linkLabel: "Live UK sports streaming guide",
  },
  {
    name: "British Entertainment — Drama, Comedy & Reality",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "Every flagship British free-to-air and premium entertainment feed comes bundled with every plan — drama, comedy, reality, soaps, panel shows and award-night broadcasts all included. Regional variants and +1 timeshift feeds ship as standard.",
    linkHref: "/#pricing",
    linkLabel: "Compare subscription plans",
  },
  {
    name: "On-Demand Cinema — 198,000 Films & Series",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Every major premium film service and international premiere feed sits inside a single on-demand menu, covering the latest blockbusters, classic cinema, original series and world-cinema highlights. New releases land the moment they hit digital and the library refreshes daily.",
    linkHref: "/blog/iptv-vs-traditional-tv",
    linkLabel: "IPTV vs traditional pay-TV comparison",
  },
  {
    name: "News & Documentary — UK And Global Coverage",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Every UK rolling news desk, global current-affairs feed, financial markets bulletin and leading documentary strand rounds out the news and factual pack. Breaking stories, long-form investigations, history, science and wildlife content all stream in HD.",
    linkHref: "/#faq",
    linkLabel: "Read the full FAQ",
  },
  {
    name: "Kids & Family — Safe Browsing With Parental Controls",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "Every major children's channel — pre-school, animation, live-action adventures and family-movie feeds — streams in HD with safe browsing on by default. Lock any channel behind a four-digit PIN from the parental control tab in two taps.",
    linkHref: "/#features",
    linkLabel: "See the safety features",
  },
  {
    name: "International — 40+ Languages, 17,000+ Feeds",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Every major UK community is covered, with live feeds spanning Arabic, South Asian, Eastern European, African, Latin and Far-Eastern audiences in full HD. The sidebar filter groups feeds by country and language for quick switching.",
    linkHref: "/#testimonials",
    linkLabel: "Read subscriber reviews",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "IPTV UK 2026 — The Complete Buyer's Guide To Picking A Service",
    excerpt:
      "Choosing an IPTV service in 2026 comes down to seven verifiable signals — channel count, uptime, 4K coverage, support speed, refund policy, device support and transparent GBP pricing. Every criterion broken down in order.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "IPTV On Fire Stick — Full Install Guide In Under 5 Minutes",
    excerpt:
      "A step-by-step walkthrough for loading an IPTV service onto an Amazon Fire Stick. Credentials paste, channel guide loads and the first stream plays in under five minutes, start to finish.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-traditional-tv",
    title: "IPTV Vs Traditional Pay-TV — Which Wins For British Viewers In 2026",
    excerpt:
      "A line-by-line comparison of IPTV against traditional UK pay-TV. Price, channel count, picture quality, contract length and long-term value — everything needed to decide whether to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "live-uk-sports-streaming-guide",
    title: "Live UK Sports Streaming Guide — Football, Rugby & Motorsport In 4K",
    excerpt:
      "Top-tier UK football fixtures, European cup nights and international rugby tournaments — all in 4K UHD where available. How the sports pack covers live UK sport broadcasts in a single subscription.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
