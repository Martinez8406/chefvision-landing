import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Montserrat, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const FB_PIXEL_ID = '1950565928953303'

const _inter = Inter({ subsets: ["latin"] });
const _montserrat = Montserrat({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Darmowe QR Menu dla Restauracji i Hoteli | ChefVision',
  description: 'Stwórz darmowe QR Menu dla restauracji lub hotelu. 14 dni Premium bez karty kredytowej. Menu w 14 językach, zdjęcia dań i rekomendacje sprzedażowe.',
  generator: 'v0.app',
  manifest: '/images/favicon_io22/site.webmanifest',
  icons: {
    icon: [
      { url: '/images/favicon_io22/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon_io22/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/images/favicon_io22/favicon.ico',
    apple: '/images/favicon_io22/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
