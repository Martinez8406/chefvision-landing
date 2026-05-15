"use client"

import { X, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AntiPlatformSection() {
  const { t } = useLanguage()
  const ap = t.antiPlatform

  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            {ap.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {ap.sub}
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b border-border">
                <th className="text-left px-6 py-4 font-semibold text-foreground">{ap.featureCol}</th>
                <th className="text-left px-6 py-4 font-semibold text-foreground">
                  <span className="flex items-center gap-2">
                    <X size={20} className="text-destructive" />
                    {ap.themCol}
                  </span>
                </th>
                <th className="text-left px-6 py-4 font-semibold text-foreground bg-muted border-l-2 border-l-primary">
                  <span className="flex items-center gap-2">
                    <Check size={20} className="text-primary" />
                    {ap.usCol}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ap.rows.map((row: { feature: string; them: string; us: string }, i: number) => (
                <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                  <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.them}</td>
                  <td className="px-6 py-4 text-foreground font-medium bg-muted/50 border-l-2 border-l-primary">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 bg-muted border border-border rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {ap.keyHeadline}
          </h3>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            {ap.keyText}
          </p>
        </div>
      </div>
    </section>
  )
}
