# Parte 4 — Monetag + Google Analytics (Concluído)

## Monetag (isolado de Core Web Vitals)
- Formatos confirmados: Popunder (OnClick), Push Notifications, In-Page Push (IPP), Vignette Banner, SmartLink
- Componentes: Monetag.tsx (carrega após paint via requestIdleCallback) + AdSlot.tsx (altura reservada, CLS=0)
- Regra: nunca no <head> síncrono; gatear atrás do banner LGPD
- Slots discretos, nível Apple, sem pop-ups agressivos

## Google Analytics
- Integração via script assíncrono (não bloqueia LCP)
- Recomendado: GA4 com tag manager, carregado após hidratação
- Eventos: scroll, clique em CTA, tempo de leitura

## LGPD / Cookies
- Banner de consentimento obrigatório para Push/IPP
- Política de privacidade + cookies (página dedicada)
