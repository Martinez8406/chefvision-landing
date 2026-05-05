"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ComparisonSection() {
  const { t } = useLanguage()
  const c = t.comparison

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            {c.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {c.sub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {c.benefits.map((benefit: string, i: number) => (
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
