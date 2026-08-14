import type { MetadataRoute } from "next";
import { getBlogSlugsForConfiguredSite } from "@/lib/blogs";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

type StaticEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** Public marketing URLs (canonical paths used in nav / footer). */
const STATIC_PAGES: StaticEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/curriculum", changeFrequency: "monthly", priority: 0.85 },
  { path: "/faqs", changeFrequency: "monthly", priority: 0.85 },
  { path: "/blogs", changeFrequency: "daily", priority: 0.85 },
  { path: "/nyla", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "monthly", priority: 0.6 },
  { path: "/terms-of-service", changeFrequency: "monthly", priority: 0.6 },
  { path: "/cookie-policy", changeFrequency: "monthly", priority: 0.5 },
  { path: "/acceptable-use", changeFrequency: "monthly", priority: 0.5 },
  { path: "/disclaimer", changeFrequency: "monthly", priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogs = await getBlogSlugsForConfiguredSite();

  if (!blogs?.length) {
    return staticRoutes;
  }

  const blogEntries: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${SITE_URL}/blogs/${b.slug}`,
    lastModified: b.date_modified
      ? new Date(b.date_modified)
      : b.date_published
        ? new Date(b.date_published)
        : now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogEntries];
}
