"use client"

import { Check } from "lucide-react"

export function ComparisonSection() {
  const benefits = [
    "Idealne pod social media i delivery (Glovo, Uber Eats)",
    "Spójny wygląd całego menu (branding)",
    "Testowanie nowych dań bez kosztów",
    "Więcej zamówień dzięki lepszej prezentacji",
    "Brak chaosu w restauracji (zero sesji zdjęciowych)",
    "Możliwość zmiany zdjęć w każdej chwili",
    "Zdjęcia gotowe do publikacji od razu",
    "Kontrola nad tym, co widzi klient",
  ]

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            Dlaczego restauracje wybierają LinguaChef?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Twórz zdjęcia, które sprzedają — szybciej, taniej i bez komplikacji
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-sm hover:border-primary/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={20} className="text-primary" />
              </div>
              <span className="text-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
