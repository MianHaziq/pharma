import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { blogPosts } from "@/data/blog";

const base = `https://${company.domain}`;

// Only reachable, indexable routes are listed. The /solutions and /products
// catalog is intentionally excluded — it is hidden/redirected for now.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/research`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/quality`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insights`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const insightRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...insightRoutes];
}
