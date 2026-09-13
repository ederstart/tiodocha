export function faqSchema(qs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qs.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  }
}

export function howToSchema(name: string, steps: { name: string; text: string }[], totalTime: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    totalTime,
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://tiodocha.com.br/#org',
  name: 'Tiodochá',
  url: 'https://tiodocha.com.br/',
  logo: 'https://tiodocha.com.br/logo-olive.svg',
}

export const authorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://tiodocha.com.br/#author',
  name: 'Equipe Tiodochá',
  jobTitle: 'Especialistas em Chá e Nutrição',
  url: 'https://tiodocha.com.br/sobre/',
}

export function articleSchema(p: { title: string; desc: string; image: string; datePublished: string; dateModified: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.desc,
    image: p.image,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    author: authorSchema,
    publisher: orgSchema,
    inLanguage: 'pt-BR',
    mainEntityOfPage: `https://tiodocha.com.br${p.path}`,
  }
}
