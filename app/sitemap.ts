import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://amateurtechgeek.com',
      lastModified: '2026-06-06',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}