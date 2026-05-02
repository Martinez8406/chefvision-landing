import type { Metadata } from 'next'
import { Inter, Montserrat, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _montserrat = Montserrat({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ChefVision.pl – Asystent sprzedaży dla restauracji',
  description: 'Menu w 12 językach, opinie Google za 1,50 zł i zdjęcia dań. Cyfrowy asystent sprzedaży dla restauracji — 99 zł/msc, bez prowizji.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
