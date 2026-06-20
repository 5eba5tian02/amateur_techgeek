import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  
  const baseUrl = 'https://amateurtechgeek.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}