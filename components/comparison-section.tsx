"use client"

import { Check } from "lucide-react"

export function ComparisonSection() {
  const benefits = [
    "Obsługa gości zagranicznych bez bariery językowej (12 języków)",
    "Inteligentne rekomendacje wina, napójów i dodatków — ustawiasz sam z telefonu",
    "System ChefStars: zamień koszt kawy w 5 gwiazdek w Google",
    "Wideo z kuchni przy każdym daniu — gość kupuje oczami",
    "Brak prowizji — stałe 99 zł/msc, zero ukrytych opłat",
    "Aktualizacja cen i menu bez drukowania i informatyka",
    "Zdjęcia, które sprzedają — profesjonalne efekty bez fotografa",
    "Pełna kontrola managera z poziomu telefonu",
  ]

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            Dlaczego restauracje wybierają ChefVision?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Asystent sprzedaży, który nigdy nie idzie na chorobowe i kosztuje tylko 3,30 zł dziennie
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
