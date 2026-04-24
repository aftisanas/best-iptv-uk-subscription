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
    title: "#1 Rated Best IPTV UK Provider",
    description:
      "Independent review platforms place this service at the top of the best IPTV UK leaderboard for 2026. The average score across Trustpilot, Reddit and IPTV forums sits at 4.9 out of 5.",
    icon: "Star" as const,
  },
  {
    title: "Best IPTV Service UK For Sports Fans",
    description:
      "Every major live UK sports broadcast streams with near-zero delay on a UK grid. Top-flight football, European cup nights, motorsport, combat sports and rugby all run in native 4K wherever the original feed is produced in that format.",
    icon: "Tv" as const,
  },
  {
    title: "Best UK IPTV Library — 198,000 Films",
    description:
      "The on-demand library holds 198,000 films and series, refreshed each day. Sky Cinema, Film4 and international cinema feeds browse inside the same app.",
    icon: "Film" as const,
  },
  {
    title: "Best IPTV Subscription UK For Families",
    description:
      "Five simultaneous screens mean parents, kids and grandparents watch on their own terms. Parental locks, safe-search and four-digit PINs come built in.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Top Rated For Best IPTV With VPN UK",
    description:
      "A built-in VPN encrypts every stream at no extra cost. Privacy stays intact on public Wi-Fi, mobile data or shared home networks.",
    icon: "Shield" as const,
  },
  {
    title: "Best IPTV Provider UK For 4K Quality",
    description:
      "Every plan streams 4K UHD on channels that broadcast in the format. Adaptive bitrate keeps the picture smooth if the line dips mid-stream.",
    icon: "Monitor" as const,
  },
  {
    title: "Best IPTV Reseller UK Alternative",
    description:
      "Skip the reseller markup. Buy direct for lower prices, faster server response and official support with a named UK team behind it.",
    icon: "Zap" as const,
  },
  {
    title: "Top IPTV UK Uptime, Verified In Public",
    description:
      "Live uptime sits at 99.9% and refreshes each minute. Most competitors quote the number — this service proves it on a live status page.",
    icon: "Clock" as const,
  },
] as const;

export const COMPARISON_ROWS = [
  { feature: "Live Channels", ours: "37,000+", typical: "8,000 – 15,000", pirate: "Variable" },
  { feature: "4K UHD Streaming", ours: "Yes — every plan", typical: "Premium tier only", pirate: "No" },
  { feature: "Built-In VPN", ours: "Yes — included", typical: "Rarely", pirate: "No" },
  { feature: "Simultaneous Screens", ours: "Up to 5", typical: "1 – 2", pirate: "1" },
  { feature: "Uptime (Verified)", ours: "99.9%", typical: "Not published", pirate: "Unstable" },
  { feature: "UK Support", ours: "24/7 live chat + WhatsApp", typical: "Email only", pirate: "None" },
  { feature: "Money-Back Guarantee", ours: "30 days, full refund", typical: "3 – 7 days", pirate: "None" },
  { feature: "Starting Price", ours: "From £4.99/month", typical: "£15 – £25/month", pirate: "Free (risk)" },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "Step 1",
    title: "Compare The Best IPTV UK Plans",
    description:
      "Scroll to the pricing grid and compare three, six, twelve and 24-month options. Every plan covers the same full 37,000-channel service.",
  },
  {
    step: "Step 2",
    title: "Secure Best IPTV UK Checkout",
    description:
      "Pay by card, PayPal or crypto on an SSL-secured checkout. The M3U link and app guide arrive by email in under 60 seconds.",
  },
  {
    step: "Step 3",
    title: "Watch The Best IPTV UK On Any Device",
    description:
      "Install any supported app, paste the credentials and press play. The full channel guide loads in under two minutes on any modern device.",
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Best IPTV UK — Bronze",
    name: "3 Months",
    subtitle: "The shortest path into the best IPTV UK experience",
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
    tier: "Best IPTV UK — Silver",
    name: "6 Months",
    subtitle: "Six months of best-rated 4K IPTV",
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
    tier: "Best IPTV UK — Gold",
    name: "12 Months",
    subtitle: "Voted the best IPTV UK value for a full year",
    price: 59.99,
    originalPrice: 99.99,
    perMonth: 4.99,
    period: "year",
    devices: 5,
    badge: "Top Rated — Save 40%",
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
    tier: "Best IPTV UK — Diamond",
    name: "24 Months",
    subtitle: "Two years locked at the lowest best IPTV UK price",
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
    text: "Tried three so-called best IPTV UK brands before this one. None came close on sports lag. The Premier League picture is cleaner here than the old Sky dish.",
    rating: 5,
    avatar: "OB",
    since: "September 2025",
  },
  {
    name: "Hannah W.",
    location: "Nottingham",
    text: "Voted best IPTV subscription UK in our family WhatsApp after a week. Five screens, all 4K, zero freeze even during the FA Cup final.",
    rating: 5,
    avatar: "HW",
    since: "January 2026",
  },
  {
    name: "Daniel O.",
    location: "Belfast",
    text: "The built-in VPN sold the subscription. The top rated IPTV UK services all charge extra for privacy — here it just works from the first play.",
    rating: 5,
    avatar: "DO",
    since: "February 2026",
  },
  {
    name: "Zara M.",
    location: "Southampton",
    text: "Rated as the best IPTV provider UK on the Reddit thread followed for a month. Totally accurate. Support replied on live chat in 90 seconds at 11pm.",
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
    text: "Best IPTV UK 2026 choice for any family. CBeebies in HD for the kids, rolling news for the grandparents, Sky Cinema for the parents. Everyone wins.",
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
    question: "What makes this the best IPTV UK service in 2026?",
    answer:
      "Three measurable wins: 37,000 channels (the widest verified list in the UK market), 99.9% verified uptime and a 4.9/5 score from 50,000 verified users. Every metric is published live and backed by a 30-day refund.",
  },
  {
    question: "How does the best IPTV UK compare with Sky or Virgin?",
    answer:
      "Subscribers pay less, get more channels and keep no contract. A typical Sky Sports + Cinema bundle costs £75+ a month. The best IPTV UK plan here starts at £25.99 and adds international channels, full sport and 198,000 films.",
  },
  {
    question: "Is the best IPTV UK option legal to use?",
    answer:
      "Yes — streaming through a licensed IPTV provider is legal in the UK. Always pick a provider that states its licensing and publishes a UK contact address, as this service does.",
  },
  {
    question: "Which device is best for IPTV UK streaming?",
    answer:
      "The Amazon Firestick 4K Max gives the best value. Load IPTV Smarters Pro from the Amazon Appstore, paste the credentials from the welcome email and the full guide loads in two minutes.",
  },
  {
    question: "Do top IPTV UK plans include 4K?",
    answer:
      "Every plan includes 4K UHD on channels that broadcast in that format. HD falls back automatically on older equipment or slower connections.",
  },
  {
    question: "How can subscribers confirm this is really the best IPTV UK service?",
    answer:
      "Read the public uptime page, scan the Trustpilot reviews and compare the channel count against any rival. Every claim published on this page is verifiable before purchase.",
  },
  {
    question: "Is there a free trial for the best IPTV UK plan?",
    answer:
      "Instead of a fragmented free trial, every paid plan carries a full 30-day refund. Every feature can be tested risk-free inside a complete refund window.",
  },
  {
    question: "How many UK channels are included with the best IPTV UK service?",
    answer:
      "Every UK broadcast channel is included — BBC, ITV, Channel 4, Channel 5, Sky, BT Sport, TNT and all regional variants. The full UK list covers 800+ feeds.",
  },
  {
    question: "Can the best IPTV UK account be shared with family?",
    answer:
      "Yes. Every plan includes five simultaneous screens so four family members can stream at the same time on different devices.",
  },
  {
    question: "Is the VPN really free with the best IPTV UK service?",
    answer:
      "Yes. The VPN is built into the app at no extra cost. Most rival best IPTV UK offers charge £5 – £10 a month for a comparable add-on.",
  },
  {
    question: "What internet speed is needed for best IPTV UK streaming?",
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
    name: "#1 UK Sport — The Best IPTV UK Pack For Football",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Every major UK sports broadcast streams live in one place, with full coverage of domestic top-flight football, European cup nights, international rugby tournaments and the leagues UK fans follow most. Matches play in HD or 4K wherever the original feed is produced in that format.",
    linkHref: "/blog/premier-league-streaming-guide",
    linkLabel: "Premier League streaming guide",
  },
  {
    name: "#2 Best IPTV UK British Entertainment Channels",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "Every flagship British free-to-air and premium entertainment feed comes bundled with every plan — drama, comedy, reality, soaps, panel shows and award-night broadcasts all included. Regional variants and +1 timeshift feeds ship as standard.",
    linkHref: "/#pricing",
    linkLabel: "Compare best IPTV UK plans",
  },
  {
    name: "#3 Best IPTV UK On-Demand Cinema — 198,000 Films",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "Every major premium film service and international premiere feed sits inside a single on-demand menu, covering the latest blockbusters, classic cinema, original series and world-cinema highlights. New releases land the moment they hit digital and the library refreshes daily.",
    linkHref: "/blog/iptv-vs-sky-comparison",
    linkLabel: "Best IPTV UK vs Sky comparison",
  },
  {
    name: "#4 Best IPTV UK News & Documentary Channels",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Every UK rolling news desk, global current-affairs feed, financial markets bulletin and leading documentary strand rounds out the news and factual pack. Breaking stories, long-form investigations, history, science and wildlife content all stream in HD.",
    linkHref: "/#faq",
    linkLabel: "Read the best IPTV UK FAQ",
  },
  {
    name: "#5 Best IPTV UK Kids & Family Channels",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "Every major children's channel — pre-school, animation, live-action adventures and family-movie feeds — streams in HD with safe browsing on by default. Lock any channel behind a four-digit PIN from the parental control tab in two taps.",
    linkHref: "/#features",
    linkLabel: "See best IPTV UK safety features",
  },
  {
    name: "#6 Best IPTV UK International Channels — 40+ Languages",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Every major UK community is covered, with live feeds spanning Arabic, South Asian, Eastern European, African, Latin and Far-Eastern audiences in full HD. The sidebar filter groups feeds by country and language for quick switching.",
    linkHref: "/#testimonials",
    linkLabel: "Read best IPTV UK reviews",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — The Complete Guide To Picking A Top-Rated Service",
    excerpt:
      "Choosing the best IPTV UK service in 2026 comes down to seven verifiable signals — channel count, uptime, 4K coverage, support speed, refund policy, device support and transparent GBP pricing. Every criterion broken down in order.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "Best IPTV UK On Fire Stick — Full Install Guide In Under 5 Minutes",
    excerpt:
      "A step-by-step walkthrough for loading the best IPTV UK service onto an Amazon Fire Stick. Credentials paste, channel guide loads and the first stream plays in under five minutes, start to finish.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "Best IPTV UK Vs Sky — Which Wins For British Viewers In 2026",
    excerpt:
      "A line-by-line comparison of the best IPTV UK service against Sky TV. Price, channel count, picture quality, contract length and long-term value — everything needed to decide whether to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Best IPTV UK For Premier League — Stream Every Match Live In 4K",
    excerpt:
      "Every Premier League fixture, every Champions League night and every Six Nations match on the best IPTV UK service. How the sports pack covers Sky Sports, TNT Sports and Premier Sports in one subscription.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
