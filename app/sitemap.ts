import { MetadataRoute } from "next";
import { SERVICES, TOWNS } from "@/lib/data";
import { client } from "@/lib/sanity";

export const revalidate = 3600;

async function getBlogSlugs(): Promise<{ slug: string; publishedAt: string }[]> {
  try {
    return await client.fetch(
      `*[_type == "post"] { "slug": slug.current, publishedAt }`
    );
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://chuckelec.com";
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/locations`, priority: 0.8 },
    { url: `${base}/blog`, priority: 0.7 },
    { url: `${base}/gallery`, priority: 0.7 },
    { url: `${base}/faq`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
  ].map((p) => ({ ...p, lastModified: now, changeFrequency: "monthly" as const }));

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const townPages = TOWNS.map((t) => ({
    url: `${base}/locations/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPosts = await getBlogSlugs();
  const blogPages = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...townPages, ...blogPages];
}
