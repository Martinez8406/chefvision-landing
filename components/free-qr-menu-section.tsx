"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FreeQrMenuSection() {
  const { t } = useLanguage()
  const s = t.freeQrMenu

  return (
    <section id="darmowe-qr-menu" className="border-b border-border bg-background py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            {s.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {s.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.cards.map((card: string) => (
            <div
              key={card}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check size={18} className="text-primary" />
              </div>
              <span className="text-foreground font-medium leading-snug">{card}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
