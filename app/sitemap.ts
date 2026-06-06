import { MetadataRoute } from "next";
import { SERVICES, TOWNS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chuckelec.com";
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/locations`, priority: 0.8 },
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

  return [...staticPages, ...servicePages, ...townPages];
}
