# Parte 2 — Stack e Performance (Concluído)

## Stack
- Next.js 15 App Router
- React Server Components (RSC)
- Tailwind CSS
- next/font (Inter + Newsreader, self-hosted)
- next/image (AVIF/WebP, sizes, lazy loading)

## Performance
- Meta: LCP < 1.8s, CLS = 0, INP excelente, PageSpeed 95+
- Zero JS no critical path
- Critical CSS inline
- Prefetch inteligente
- ISR / static com revalidate
- Caching agressivo

## Arquivos gerados (prontos para colar)
- app/layout.tsx (fontes, metadata base, dark mode)
- components/ads/Monetag.tsx (isolado, requestIdleCallback)
- components/ads/AdSlot.tsx (altura reservada, CLS=0)
- app/globals.css (tokens + tipografia + dark mode)
