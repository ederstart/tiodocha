import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://tiodocha.com.br/sitemap.xml',
    host: 'https://tiodocha.com.br',
  }
}
