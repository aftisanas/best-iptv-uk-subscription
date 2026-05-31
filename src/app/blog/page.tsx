import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "IPTV UK Buyer's Guide — Setup, Comparisons & Streaming Tips",
  description:
    "Articles on choosing an IPTV service in 2026 — setup walkthroughs, comparisons against traditional pay-TV, device guides and the latest from British IPTV. Research the market before any subscription decision.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
