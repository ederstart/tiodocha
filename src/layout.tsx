import type { Metadata } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import './globals.css'
import { Monetag } from './components/Monetag'
import { GATag } from './components/GATag'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-serif', weight: ['400','500','600'], style: ['normal','italic'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://tiodocha.com.br'),
  title: { template: '%s · Tiodochá', default: 'Tiodochá — Blog sobre Chá' },
  description: 'Tiodochá: benefícios, receitas e guias sobre chás com evidência científica.',
  openGraph: { locale: 'pt_BR', type: 'website', siteName: 'Tiodochá' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${newsreader.variable} font-serif bg-[#FDFBF7] text-[#1A1A18]`}>
        <Monetag />
        <GATag />
        <div className="shell max-w-[1120px] mx-auto px-5">
          <header className="py-8">
            <a href="/" className="text-3xl font-bold text-[#6B7B3A] tracking-tight">Tiodochá</a>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
