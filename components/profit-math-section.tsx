"use client"

import { TrendingUp, Clock, Star, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [TrendingUp, Clock, Star, Globe]
const highlights = [false, true, false, false]

export function ProfitMathSection() {
  const { t } = useLanguage()
  const pm = t.profitMath

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            {pm.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {pm.sub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pm.items.map((item: { title: string; points: string[] }, idx: number) => {
            const Icon = icons[idx]
            const highlight = highlights[idx]
            return (
              <div
                key={item.title}
                className={`rounded-2xl border p-7 flex flex-col gap-4 ${
                  highlight
                    ? "bg-primary/5 border-primary/40 shadow-md shadow-primary/10"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${highlight ? "bg-primary/20" : "bg-secondary"}`}>
                    <Icon size={20} className={highlight ? "text-primary" : "text-muted-foreground"} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground font-serif">{item.title}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.points.map((point: string) => (
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
