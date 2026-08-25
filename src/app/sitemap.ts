import type { MetadataRoute } from "next";


const siteUrl = "https://traveco.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/document-checklist`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    { url: `${siteUrl}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${siteUrl}/refund-and-cancellation`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticRoutes];
}
