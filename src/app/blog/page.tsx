import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "IPTV UK Buyer's Guide — Setup, Comparisons & Streaming Tips",
  description:
    "Articles on choosing an IPTV service in 2026 — setup walkthroughs, comparisons against traditional pay-TV, device guides and the latest from British IPTV. Research the market before any subscription decision.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <BlogContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/blog/#collection`,
            name: "Best IPTV UK Blog — Guides & Analysis",
            description:
              "In-depth guides, buyer analysis and setup walkthroughs for UK IPTV.",
            url: `${SITE_URL}/blog`,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            hasPart: BLOG_POSTS.filter((post) => Boolean(post.slug)).map((post) => ({
              "@type": "Article",
              "@id": `${SITE_URL}/blog/${post.slug}#article`,
              url: `${SITE_URL}/blog/${post.slug}`,
              headline: post.title,
            })),
          }),
        }}
      />
    </>
  );
}
