"use client"

import { CircleCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function GuestInfoHubSection() {
  const { t } = useLanguage()
  const s = t.guestInfoHub

  return (
    <section id="informacje-hub" className="scroll-mt-16 border-b border-border bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {s.badge}
          </span>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-foreground text-balance font-serif sm:text-4xl lg:text-5xl">
            {s.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {s.description}
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {s.hubLabel}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground font-serif sm:text-3xl">
              {s.hubTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {s.hubDescription}
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {s.bullets.map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CircleCheck size={13} className="text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
