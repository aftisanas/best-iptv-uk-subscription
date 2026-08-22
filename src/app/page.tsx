import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import {
  CONTACT_EMAIL,
  FAQ_ITEMS,
  LOGO_PATH,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const EXCLUDED_FAQ_QUESTION = "How many UK channels are included?";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;
  const logoUrl = `${SITE_URL}${LOGO_PATH}`;
  const faqItems = FAQ_ITEMS.filter((item) => item.question !== EXCLUDED_FAQ_QUESTION);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <TestimonialsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data — single @graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: SITE_NAME,
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: logoUrl,
                  width: 1024,
                  height: 1024,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                  email: CONTACT_EMAIL,
                },
              },
              {
                "@type": "WebSite",
                "@id": websiteId,
                name: SITE_NAME,
                url: SITE_URL,
                inLanguage: "en-GB",
                publisher: {
                  "@id": organizationId,
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: SITE_URL,
                name: "Best IPTV UK 2026 | 4K UHD Streaming From £3.75/mo",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": websiteId,
                },
                about: {
                  "@id": organizationId,
                },
                breadcrumb: {
                  "@id": `${SITE_URL}/#breadcrumb`,
                },
                description:
                  "UK IPTV subscription with 37,000+ live channels, 198,000+ films and series, 4K UHD streaming, optional Secure Proxy add-on, and a 30-day money-back. Setup in under two minutes on Firestick, Smart TV or phone.",
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${SITE_URL}/#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: `${SITE_URL}/`,
                  },
                ],
              },
              {
                "@type": "Product",
                "@id": productId,
                name: `${SITE_NAME} Subscription`,
                url: SITE_URL,
                image: [logoUrl],
                description:
                  "UK IPTV subscription with 37,000+ live channels, 198,000+ on-demand titles, 4K UHD, five simultaneous streams and an optional Secure Proxy add-on — from £3.75/month equivalent on the 24-month term.",
                brand: { "@type": "Brand", name: SITE_NAME },
                offers: PRICING_PLANS.map((plan) => ({
                  "@type": "Offer",
                  name: `${plan.name} Plan`,
                  price: plan.price.toFixed(2),
                  priceCurrency: "GBP",
                  availability: "https://schema.org/InStock",
                  itemCondition: "https://schema.org/NewCondition",
                  priceValidUntil: "2027-07-05",
                  url: `${SITE_URL}/#pricing`,
                })),
              },
              {
                "@type": "FAQPage",
                "@id": `${SITE_URL}/#faq`,
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
