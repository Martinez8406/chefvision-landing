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
    },
    {
      feature: "Języki menu",
      ubereats: "Zazwyczaj podstawowe",
      chefvision: "12 języków + wideo z kuchni"
    },
    {
      feature: "Koszt pozyskania opinii Google",
      ubereats: "Brak funkcji",
      chefvision: "~1,50 zł (koszt kawy) zamiast 30 zł w Google Ads"
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
            Nie jesteśmy platformą jak Pyszne.pl. Nie zabieramy Twojej marży. ChefVision to Twój pracownik, który kosztuje tylko 3,30 zł dziennie i nigdy nie idzie na chorobowe.
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
            Inwestujesz 99 zł, odzyskujesz ponad 2 500 zł miesięcznie
          </h3>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Przy rachunku 200 zł platforma dostawcza zabiera Ci 40–60 zł prowizji. ChefVision bierze 99 zł miesięcznie — bez prowizji, bez tabletów, bez utraty klientów. Kelnerzy odzyskują czas, goście zamawiają śmielej, a Ty zbierasz opinie w Google za 1,50 zł.
          </p>
        </div>
      </div>
    </section>
  )
}
