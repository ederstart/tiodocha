export default function CategoriaPage() {
  return (
    <main className="prose">
      <h1 className="text-3xl font-bold text-[#1A1A18] mb-4">Benefícios e Propriedades</h1>
      <p className="text-[#5C5850] mb-8">Evidências científicas, compostos ativos e mecanismos de ação dos chás.</p>
      <section className="grid gap-4">
        <a href="/beneficios-e-propriedades/cha-verde-inflamacao/" className="block p-5 rounded-xl border border-[#E7E2D8] bg-white hover:border-[#6B7B3A] transition-colors">
          <h3 className="text-lg font-bold text-[#6B7B3A]">Chá verde para inflamação</h3>
          <p className="text-sm text-[#5C5850]">O que a ciência mostra sobre EGCG e catequinas.</p>
        </a>
      </section>
    </main>
  )
}
