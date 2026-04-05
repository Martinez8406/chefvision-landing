import { LayoutGrid, Camera, ImageIcon, QrCode } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: LayoutGrid,
    badge: "Pro",
    title: "Panel menu",
    description:
      "Zarządzaj wszystkimi daniami w jednym miejscu. Zatwierdzaj, edytuj opisy marketingowe i kontroluj status każdego dania w Twojej kuchni.",
    bullets: ["Status kuchni", "Edycja standardu", "Opisy marketingowe", "Zatwierdzanie dań"],
    tag: "Dostępny w planie FREE",
    highlight: true,
    previewImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202026-03-31%20002420-SwhT7eyYdHHRV56ANRMP0KphMRKEdZ.png",
  },
  {
    icon: Camera,
    badge: "Pro",
    title: "Chef's Studio",
    description:
      "Projektuj nowe dania od zera i dopasuj detale do Twojej kuchni. Kontroluj tło, zastawę, oświetlenie, perspektywę i styl. Możesz też ulepszyć swoje danie jednym kliknięciem.",
    bullets: ["Dowolna zastawa", "Zmiana oświetlenia", "Widok z góry"],
    tag: "Plan Professional",
    highlight: true,
    previewImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202026-03-31%20002850-A77L51vfvfp4HyoCy1kQ2bKoueBLcJ.png",
  },
  {
    icon: ImageIcon,
    badge: "Free",
    title: "Studio Tła",
    description:
      "Wybierz idealne tło dla każdego dania. Rozmyj tło, aby wyeksponować potrawę, i stwórz spójny wizerunek Twojej restauracji. Każde danie prezentuje się w najlepszym świetle.",
    bullets: ["Twoje tło z telefonu", "Rozmycie bokeh", "Spójny branding"],
    tag: "Dostępny w planie FREE",
    highlight: false,
    previewImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202026-03-31%20003226-v8VKr76cWDJFvRVs1ryYTuwM66QhT6.png",
  },
  {
    icon: QrCode,
    badge: "Live",
    title: "Menu Live",
    description:
      "Cyfrowe menu z Twoim logo, kolorami i typografią. Publikuj je za pomocą kodu QR lub linka. Wszystkie zmiany są dostępne natychmiast dla gości - bez ponownego drukowania czy wdrażania.",
    bullets: ["Kod QR w sekundy", "Logowanie klientów", "Linki do mediów"],
    tag: "Dostępny w planie FREE",
    highlight: false,
    previewImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zrzut%20ekranu%202026-03-31%20003446-qXeKohDVpXA3e8Puod6QLKbgz75UPE.png",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-28 bg-background" id="funkcje">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary font-serif">
            Możliwości platformy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance max-w-2xl font-serif">
            Wszystko, czego potrzebuje nowoczesna restauracja
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            Koniec z czekaniem na informatyka czy drukarnię. Zmieniaj ceny, dodawaj dania i aktualizuj menu samodzielnie w 10 sekund. Twoje menu jest zawsze aktualne, bez dodatkowych kosztów za każdą drobną poprawkę.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`relative rounded-2xl border flex flex-col transition-all duration-300 group hover:border-primary/40 hover:-translate-y-0.5 overflow-hidden shadow-sm ${
                  feature.highlight
                    ? "bg-primary/5 border-primary/30"
                    : "bg-card border-border"
                }`}
              >
                {/* Preview Image */}
                {feature.previewImage && (
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '2 / 1', overflow: 'hidden' }}>
                    <Image
                      src={feature.previewImage}
                      alt={`${feature.title} - podgląd interfejsu`}
                      fill
                      className="object-cover object-left-top"
                      loading="eager"
                      priority={feature.highlight}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent" />
                  </div>
                )}

                <div className={`flex flex-col gap-4 ${feature.previewImage ? "p-6" : "p-7"}`}>
                  {/* Icon + badge (only if no preview image) */}
                  {!feature.previewImage && (
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          feature.highlight ? "bg-primary/20" : "bg-secondary"
                        }`}
                      >
                        <Icon
                          size={22}
                          className={feature.highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"}
                        />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          feature.highlight
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {feature.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-foreground font-serif">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
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
                    {feature.tip && (
                      <p className="text-xs text-primary/80 mt-3 italic">
                        {feature.tip}
                      </p>
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
