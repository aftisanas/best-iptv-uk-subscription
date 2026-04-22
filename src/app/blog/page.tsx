import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Best IPTV UK Blog — 2026 Guides, Reviews & Streaming Tips",
  description:
    "Independent articles on the best IPTV UK service in 2026 — setup walkthroughs, side-by-side reviews, device guides and the latest from British IPTV. Research the market before any subscription decision.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
