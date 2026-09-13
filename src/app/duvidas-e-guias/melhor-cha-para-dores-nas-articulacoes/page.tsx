import { faqSchema } from '@/lib/schema'

export default function PostPage() {
  const schema = faqSchema([
    { q: 'Qual chá é melhor para articulações?', a: 'Cúrcuma com piperina tem evidência moderada; gengibre ajuda na dor.' },
    { q: 'Chá verde ajuda?', a: 'Sim, por propriedades anti-inflamatórias, mas não substitui tratamento médico.' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="prose">
        <header className="mb-8">
          <p className="text-sm text-[#6B7B3A] font-medium">Dúvidas e Guias · 7 min de leitura</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A18] mt-2">Melhor chá para dores nas articulações</h1>
        </header>
        <section>
          <h2>Comparativo</h2>
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-[#E7E2D8]"><th className="text-left py-2">Chá</th><th className="text-left py-2">Mecanismo</th></tr></thead>
            <tbody>
              <tr className="border-b border-[#E7E2D8]"><td className="py-2">Cúrcuma</td><td className="py-2">Anti-inflamatório (curcumina)</td></tr>
              <tr className="border-b border-[#E7E2D8]"><td className="py-2">Gengibre</td><td className="py-2">Redução de dor</td></tr>
              <tr><td className="py-2">Chá verde</td><td className="py-2">EGCG, antioxidante</td></tr>
            </tbody>
          </table>
        </section>
      </article>
    </>
  )
}
