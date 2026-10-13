"use client"

import {
  Coffee,
  ConciergeBell,
  Flower2,
  Info,
  UtensilsCrossed,
  Wine,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { homeContent } from "@/lib/translations-home"

const itemIcons: LucideIcon[] = [UtensilsCrossed, ConciergeBell, Flower2, Coffee, Info, Wine]

export function HotelHubHome() {
  const { locale } = useLanguage()
  const hub = homeContent[locale].hub

  return (
    <section id="hotel-hub" className="border-t border-border bg-card py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {hub.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground text-balance sm:text-4xl">
            {hub.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{hub.sub}</p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {hub.items.map((item, index) => {
            const Icon = itemIcons[index] ?? Info

            return (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3 py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={15} strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold leading-tight text-foreground">{item}</span>
              </li>
            )
          })}
        </ul>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          {hub.note}
        </p>
      </div>
    </section>
  )
}
