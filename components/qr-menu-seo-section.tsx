"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function QrMenuSeoSection() {
  const { t } = useLanguage()
  const s = t.qrMenuSeo

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance font-serif">
              {s.whatIs.headline}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {s.whatIs.text}
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance font-serif text-center">
              {s.whyUse.headline}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {s.whyUse.bullets.map((bullet: string) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={18} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
