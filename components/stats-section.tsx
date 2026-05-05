"use client"

import { useLanguage } from "@/lib/language-context"

export function StatsSection() {
  const { t } = useLanguage()
  const s = t.stats

  return (
    <section className="border-y border-border bg-gradient-to-b from-background to-secondary/40 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {s.badge}
          </span>
          <h2 className="max-w-3xl text-3xl font-bold text-foreground text-balance font-serif sm:text-4xl">
            {s.headline}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((stat: { value: string; label: string; sub: string }) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/35"
            >
              <span className="text-3xl font-bold text-primary font-serif sm:text-4xl">{stat.value}</span>
              <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
