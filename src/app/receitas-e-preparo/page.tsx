export default function CategoriaPage() {
  return (
    <main className="prose">
      <h1 className="text-3xl font-bold text-[#1A1A18] mb-4">Receitas e Preparo</h1>
      <p className="text-[#5C5850] mb-8">Como fazer, proporções, temperaturas, tempos e variações.</p>
      <section className="grid gap-4">
        <a href="/receitas-e-preparo/cha-calmante/" className="block p-5 rounded-xl border border-[#E7E2D8] bg-white hover:border-[#6B7B3A] transition-colors">
          <h3 className="text-lg font-bold text-[#6B7B3A]">Chá calmante de camomila e melissa</h3>
          <p className="text-sm text-[#5C5850]">Receita completa com proporções e modo de preparo.</p>
        </a>
      </section>
    </main>
  )
}
