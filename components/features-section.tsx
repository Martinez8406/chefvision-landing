"use client"

import { LayoutGrid, Camera, ImageIcon, QrCode } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const icons = [LayoutGrid, Camera, ImageIcon, QrCode]
const highlights = [true, true, false, false]
const previewImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202026-03-31%20002420-SwhT7eyYdHHRV56ANRMP0KphMRKEdZ.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202026-03-31%20002850-A77L51vfvfp4HyoCy1kQ2bKoueBLcJ.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202026-03-31%20003226-v8VKr76cWDJFvRVs1ryYTuwM66QhT6.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202026-03-31%20003446-qXeKohDVpXA3e8Puod6QLKbgz75UPE.png",
]

// Features data is hardcoded per locale since it's complex nested content
const featuresData = {
  pl: {
    badge: "Możliwości platformy",
    headline: "Wszystko, czego potrzebuje nowoczesna restauracja",
    sub: "Zarządzaj sprzedażą tak łatwo, jak odpisujesz na SMS. Zmieniaj ceny, dodawaj rekomendacje i aktualizuj menu z telefonu w 30 sekund — bez informatyka, bez drukarni.",
    items: [
      {
        badge: "Pro",
        title: "Panel menu",
        description: "Zarządzaj wszystkimi daniami w jednym miejscu. Zatwierdzaj, edytuj opisy marketingowe i kontroluj status każdego dania w Twojej kuchni.",
        bullets: ["Status kuchni", "Edycja standardu", "Opisy marketingowe", "Zatwierdzanie dań"],
        tag: "Dostępny w planie FREE",
      },
      {
        badge: "Pro",
        title: "Chef's Studio",
        description: "Profesjonalny retusz Twoich dań. Wgraj zdjęcie z kuchni, a system zadba o idealne oświetlenie, wydobędzie tekstury i nada potrawom wygląd, na jaki zasługują.",
        bullets: ["Profesjonalne oświetlenie", "Korekta tekstur", "Stylizacja tła"],
        tag: "Plan Professional",
      },
      {
        badge: "Free",
        title: "Studio Tła",
        description: "Wybierz idealne tło dla każdego dania. Rozmyj tło, aby wyeksponować potrawę, i stwórz spójny wizerunek Twojej restauracji.",
        bullets: ["Twoje tło z telefonu", "Rozmycie bokeh", "Spójny branding"],
        tag: "Dostępny w planie FREE",
      },
      {
        badge: "Live",
        title: "Menu Live + 12 języków",
        description: "Cyfrowe menu z Twoim logo i kolorami w 12 językach. Gość z Niemiec, Chin czy Korei widzi kartę w swoim języku automatycznie.",
        bullets: ["12 języków automatycznie", "Kod QR w sekundy", "Linki do wideo z kuchni"],
        tag: "Dostępny w planie FREE",
      },
    ],
  },
  en: {
    badge: "Platform capabilities",
    headline: "Everything a modern restaurant needs",
    sub: "Manage sales as easily as replying to a text. Change prices, add recommendations and update your menu from your phone in 30 seconds — no IT, no printing.",
    items: [
      {
        badge: "Pro",
        title: "Menu Panel",
        description: "Manage all your dishes in one place. Approve, edit marketing descriptions and control the status of every dish in your kitchen.",
        bullets: ["Kitchen status", "Standard editing", "Marketing descriptions", "Dish approval"],
        tag: "Available in FREE plan",
      },
      {
        badge: "Pro",
        title: "Chef's Studio",
        description: "Professional retouching of your dishes. Upload a photo from the kitchen and the system will handle perfect lighting, bring out textures and give your food the look it deserves.",
        bullets: ["Professional lighting", "Texture correction", "Background styling"],
        tag: "Professional plan",
      },
      {
        badge: "Free",
        title: "Background Studio",
        description: "Choose the perfect background for every dish. Blur the background to highlight the food and create a consistent image for your restaurant.",
        bullets: ["Your background from phone", "Bokeh blur", "Consistent branding"],
        tag: "Available in FREE plan",
      },
      {
        badge: "Live",
        title: "Live Menu + 12 languages",
        description: "Digital menu with your logo and colors in 12 languages. A guest from Germany, China or Korea sees the menu in their language automatically.",
        bullets: ["12 languages automatically", "QR code in seconds", "Kitchen video links"],
        tag: "Available in FREE plan",
      },
    ],
  },
}

export function FeaturesSection() {
  const { locale } = useLanguage()
  const fd = featuresData[locale] || featuresData.pl

  return (
    <section className="py-28 bg-background" id="funkcje">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary font-serif">
            {fd.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance max-w-2xl font-serif">
            {fd.headline}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            {fd.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fd.items.map((feature, idx) => {
            const Icon = icons[idx]
            const highlight = highlights[idx]
            const previewImage = previewImages[idx]
            return (
              <div
                key={feature.title}
                className={`relative rounded-2xl border flex flex-col transition-all duration-300 group hover:border-primary/40 hover:-translate-y-0.5 overflow-hidden shadow-sm ${
                  highlight
                    ? "bg-primary/5 border-primary/30"
                    : "bg-card border-border"
                }`}
              >
                {previewImage && (
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '2 / 1', overflow: 'hidden' }}>
                    <Image
                      src={previewImage}
                      alt={`${feature.title} - preview`}
                      fill
                      className="object-cover object-left-top"
                      loading="eager"
                      priority={highlight}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent" />
                  </div>
                )}

                <div className={`flex flex-col gap-4 ${previewImage ? "p-6" : "p-7"}`}>
                  {!previewImage && (
                    <div className="flex items-start justify-between">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${highlight ? "bg-primary/20" : "bg-secondary"}`}>
                        <Icon size={22} className={highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"} />
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                        {feature.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-foreground font-serif">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    {feature.bullets && (
                      <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-auto pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">{feature.tag}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
