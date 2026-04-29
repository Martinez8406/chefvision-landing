"use client"

import { X, Check } from "lucide-react"

export function AntiPlatformSection() {
  const comparison = [
    {
      feature: "Prowizja od sprzedaży",
      ubereats: "15-30%",
      chefvision: "0%"
    },
    {
      feature: "Dodatkowy sprzęt (tablet)",
      ubereats: "TAK (kolejny tablet na barze)",
      chefvision: "NIE (działa na Twoim sprzęcie)"
    },
    {
      feature: "Kontrola nad klientami",
      ubereats: "Klienci należą do platformy",
      chefvision: "Klienci należą do Ciebie"
    },
    {
      feature: "Wsparcie dla Twojej marki",
      ubereats: "Branding platformy na pierwszym planie",
      chefvision: "Twoja marka na pierwszym planie"
    },
    {
      feature: "Ukryte opłaty",
      ubereats: "Opłaty za rejestrację, usługę, itp.",
      chefvision: "Przejrzyste ceny, bez niespodzianek"
    },
    {
      feature: "Skupienie na",
      ubereats: "Logistyce i dostawach",
      chefvision: "Jakości i wizerunku Twojego jedzenia"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            ChefVision ≠ UberEats, Glovo czy Wolt
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Jesteśmy narzędziem dla Twojej restauracji, a nie kolejnym pośrednikiem, który zabiera Twoją marżę i stawiania kolejny tablet na barze.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-border shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b border-border">
                <th className="text-left px-6 py-4 font-semibold text-foreground">Funkcja</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">
                  <span className="flex items-center gap-2">
                    <X size={20} className="text-destructive" />
                    Platformy Dostawcze
                  </span>
                </th>
                <th className="text-left px-6 py-4 font-semibold text-foreground bg-primary/5">
                  <span className="flex items-center gap-2">
                    <Check size={20} className="text-primary" />
                    ChefVision
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                  <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.ubereats}</td>
                  <td className="px-6 py-4 text-foreground font-medium bg-primary/5">{row.chefvision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Message */}
        <div className="mt-16 bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Twoja Niezależność, Twoje Zyski
          </h3>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            ChefVision to partner, który wspiera Twoje rzemiosło i pomaga budować bezpośrednie relacje z klientami. Bez ukrytych opłat, bez kolejnych tabletów, bez utraty kontroli nad swoją marką.
          </p>
        </div>
      </div>
    </section>
  )
}
