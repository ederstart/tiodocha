import { howToSchema } from '@/lib/schema'

export default function PostPage() {
  const schema = howToSchema('Chá calmante de camomila e melissa', [
    { name: 'Ferver água', text: 'Aqueça 200ml de água até 90°C.' },
    { name: 'Infundir', text: 'Adicione 1 c.chá de camomila e ½ c.chá de melissa. Deixe 7–10 min.' },
    { name: 'Coar e servir', text: 'Coe e sirva morno.' },
  ], 'PT10M')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="prose">
        <header className="mb-8">
          <p className="text-sm text-[#6B7B3A] font-medium">Receitas e Preparo · 6 min de leitura</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A18] mt-2">Como fazer chá calmante</h1>
        </header>
        <section>
          <h2>Ingredientes</h2>
          <ul>
            <li>1 c.chá de camomila</li>
            <li>½ c.chá de melissa</li>
            <li>200ml de água</li>
          </ul>
        </section>
        <section className="bg-[#FDFBF7] border-l-4 border-[#B98A5E] p-5 rounded-r-xl my-6">
          <h3 className="text-[#B98A5E] font-bold mb-2">Modo de preparo</h3>
          <p>Infundir a 90°C por 7 a 10 minutos. Coar e servir morno.</p>
        </section>
      </article>
    </>
  )
}
