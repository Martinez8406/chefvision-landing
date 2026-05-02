"use client"

import { TrendingUp, Clock, Star, Globe } from "lucide-react"

const items = [
  {
    icon: TrendingUp,
    title: "Dlaczego PDF pod kodem QR nie działa?",
    points: [
      "Goście nienawidzą powiększać palcami nieczytelnych plików PDF",
      "Zwykły tekst nie sprzedaje tak, jak profesjonalne zdjęcia i wideo z kuchni",
      "PDF nie przetłumaczy się sam na chiński czy koreański",
      "PDF nie zaproponuje wina do steka ani nie poprosi o opinię w Google",
    ],
    highlight: false,
  },
  {
    icon: Clock,
    title: "Matematyka zysku — twarde liczby",
    points: [
      "Kelner traci średnio 5–7 minut na stolik na tłumaczenie karty (Cornell University)",
      "Przy 3 kelnerach to ~84 zł oszczędności dziennie = 2 500 zł miesięcznie",
      "Koszt ChefVision: 99 zł/msc = 3,30 zł dziennie",
      "Zwrot z inwestycji już po 3–4 dniach",
    ],
    highlight: true,
  },
  {
    icon: Star,
    title: "Maszyna do opinii Google — ChefStars",
    points: [
      "Gość skanuje menu → zachwyca się wideo z kuchni → dostaje darmową kawę za opinię",
      "Koszt kawy/napoju dla restauracji: ~1,50 zł. Koszt leada w Google Ads: ~30 zł",
      "Każda nowa opinia winduje restaurację w rankingach Google Maps",
      "Opinia od obcokrajowca w jego języku przyciąga dziesiątki kolejnych turystów",
    ],
    highlight: false,
  },
  {
    icon: Globe,
    title: "Pełna kontrola managera — z telefonu",
    points: [
      "Ustaw rekomendowane wino do dania dnia w 30 sekund",
      "Zmień bonus za opinię (kawa, lemoniada, nalewka) bez informatyka",
      "Dodaj wideo z kuchni do dowolnego dania jednym kliknięciem",
      "Aktualizuj ceny bez drukowania nowych kart menu",
    ],
    highlight: false,
  },
]

export function ProfitMathSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            Matematyka, która się opłaca
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            ChefVision to nie gadżet. To narzędzie, które zwraca się po sprzedaży zaledwie dwóch butelek wina lub trzech deserów miesięcznie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`rounded-2xl border p-7 flex flex-col gap-4 ${
                  item.highlight
                    ? "bg-primary/5 border-primary/40 shadow-md shadow-primary/10"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.highlight ? "bg-primary/20" : "bg-secondary"}`}>
                    <Icon size={20} className={item.highlight ? "text-primary" : "text-muted-foreground"} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground font-serif">{item.title}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
