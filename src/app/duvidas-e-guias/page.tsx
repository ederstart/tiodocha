export default function CategoriaPage() {
  return (
    <main className="prose">
      <h1 className="text-3xl font-bold text-[#1A1A18] mb-4">Dúvidas e Guias de Escolha</h1>
      <p className="text-[#5C5850] mb-8">Comparativos, mitos vs verdades e guias práticos.</p>
      <section className="grid gap-4">
        <a href="/duvidas-e-guias/melhor-cha-articulacoes/" className="block p-5 rounded-xl border border-[#E7E2D8] bg-white hover:border-[#6B7B3A] transition-colors">
          <h3 className="text-lg font-bold text-[#6B7B3A]">Melhor chá para dores nas articulações</h3>
          <p className="text-sm text-[#5C5850]">Comparativo honesto entre cúrcuma, gengibre e chá verde.</p>
        </a>
      </section>
    </main>
  )
}
