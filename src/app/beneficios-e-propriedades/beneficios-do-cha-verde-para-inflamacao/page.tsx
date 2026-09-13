import { articleSchema } from '@/lib/schema'

export default function PostPage() {
  const schema = articleSchema({
    title: 'Chá verde para inflamação: o que a ciência mostra',
    desc: 'Os benefícios anti-inflamatórios do chá verde vêm de catequinas como a EGCG.',
    image: 'https://tiodocha.com.br/img/cha-verde.jpg',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    path: '/beneficios-e-propriedades/beneficios-do-cha-verde-para-inflamacao/',
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="prose">
        <header className="mb-8">
          <p className="text-sm text-[#6B7B3A] font-medium">Benefícios e Propriedades · 8 min de leitura</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A18] mt-2">Chá verde para inflamação</h1>
        </header>
        <section>
          <h2>O que são catequinas e EGCG</h2>
          <p>As catequinas são polifenóis presentes no chá verde, com a EGCG como principal composto ativo.</p>
        </section>
        <section>
          <h2>Mecanismo anti-inflamatório</h2>
          <p>A EGCG modula vias pró-inflamatórias como NF-κB, reduzindo citocinas.</p>
        </section>
        <section className="bg-[#FDFBF7] border-l-4 border-[#6B7B3A] p-5 rounded-r-xl my-6">
          <h3 className="text-[#6B7B3A] font-bold mb-2">Evidência científica</h3>
          <p className="text-sm">Estudos humanos mostram redução moderada de PCR e IL-6 com consumo regular.</p>
        </section>
        <section>
          <h2>Quanto tomar por dia</h2>
          <p>2 a 3 xícaras, infundidas a 70–80°C por 2–3 minutos.</p>
        </section>
        <section>
          <h2>Contraindicações</h2>
          <p>Sensibilidade à cafeína, interação com anticoagulantes. Consulte um profissional.</p>
        </section>
      </article>
    </>
  )
}
