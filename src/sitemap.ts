import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const cats = ['/beneficios-e-propriedades/', '/receitas-e-preparo/', '/duvidas-e-guias/']
  return [
    { url: 'https://tiodocha.com.br/', changeFrequency: 'weekly', priority: 1 },
    ...cats.map(u => ({ url: `https://tiodocha.com.br${u}`, changeFrequency: 'daily' as const, priority: 0.9 })),
  ]
}
