import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";

// Stable per-route publication/update anchors. Bump only when the page's
// content materially changes. Do not use new Date() here — a moving
// lastModified on every deploy causes Google to distrust the sitemap.
const STATIC_ROUTE_DATES: Record<string, string> = {
  "/": "2026-07-05",
  "/blog": "2026-07-05",
  "/about": "2026-06-04",
  "/contact": "2026-05-31",
  "/editorial-policy": "2026-06-04",
  "/terms": "2026-05-31",
  "/privacy": "2026-05-31",
  "/dmca": "2026-05-31",
  "/refund": "2026-05-31",
};

const CLUSTER_ROUTE_DATES: Record<string, string> = {
  "/best-iptv-uk-2026": "2026-06-09",
  "/best-iptv-subscription-uk": "2026-06-04",
  "/best-iptv-uk-firestick": "2026-06-04",
  "/is-iptv-legal-uk": "2026-06-04",
  "/best-iptv-uk-vs-traditional-tv": "2026-06-04",
};

const FALLBACK_DATE = "2026-06-04";

const parseDate = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date(FALLBACK_DATE) : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: parseDate(STATIC_ROUTE_DATES["/"]), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: parseDate(STATIC_ROUTE_DATES["/blog"]), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: parseDate(STATIC_ROUTE_DATES["/about"]), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: parseDate(STATIC_ROUTE_DATES["/contact"]), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/editorial-policy`, lastModified: parseDate(STATIC_ROUTE_DATES["/editorial-policy"]), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/terms`, lastModified: parseDate(STATIC_ROUTE_DATES["/terms"]), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: parseDate(STATIC_ROUTE_DATES["/privacy"]), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/dmca`, lastModified: parseDate(STATIC_ROUTE_DATES["/dmca"]), changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/refund`, lastModified: parseDate(STATIC_ROUTE_DATES["/refund"]), changeFrequency: "yearly", priority: 0.4 },
  ];

  // Phase 2 cluster pages — v2 plan Section C. Each date matches the page's PUBLISHED_DATE constant.
  const clusterRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/best-iptv-uk-2026`,
      lastModified: parseDate(CLUSTER_ROUTE_DATES["/best-iptv-uk-2026"]),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/best-iptv-subscription-uk`,
      lastModified: parseDate(CLUSTER_ROUTE_DATES["/best-iptv-subscription-uk"]),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/best-iptv-uk-firestick`,
      lastModified: parseDate(CLUSTER_ROUTE_DATES["/best-iptv-uk-firestick"]),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/is-iptv-legal-uk`,
      lastModified: parseDate(CLUSTER_ROUTE_DATES["/is-iptv-legal-uk"]),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/best-iptv-uk-vs-traditional-tv`,
      lastModified: parseDate(CLUSTER_ROUTE_DATES["/best-iptv-uk-vs-traditional-tv"]),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: parseDate(post.updatedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...clusterRoutes, ...blogRoutes];
}
