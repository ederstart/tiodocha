export default function HomePage() {
  return (
    <main className="prose">
      <h1 className="text-4xl font-bold text-[#1A1A18] mb-6">Tiodochá</h1>
      <p className="text-xl text-[#5C5850] mb-12">Blog de autoridade sobre chás: benefícios com evidência, receitas de preparo e guias de escolha.</p>
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Benefícios e Propriedades', desc: 'Evidências, compostos ativos e mecanismos de ação.', href: '/beneficios-e-propriedades/' },
          { title: 'Receitas e Preparo', desc: 'Como fazer, proporções, temperaturas e variações.', href: '/receitas-e-preparo/' },
          { title: 'Dúvidas e Guias', desc: 'Comparativos, mitos vs verdades e escolhas.', href: '/duvidas-e-guias/' },
        ].map(c => (
          <a key={c.href} href={c.href} className="block p-6 rounded-xl border border-[#E7E2D8] bg-white hover:border-[#6B7B3A] transition-colors">
            <h3 className="text-lg font-bold text-[#6B7B3A] mb-2">{c.title}</h3>
            <p className="text-sm text-[#5C5850]">{c.desc}</p>
          </a>
        ))}
      </section>
    </main>
  )
}
