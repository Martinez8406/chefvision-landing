"use client"

import {
  Coffee,
  Hotel,
  TreePine,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { homeContent } from "@/lib/translations-home"

const cardIcons: LucideIcon[] = [UtensilsCrossed, Hotel, Coffee, TreePine]

export function ForWhomSection() {
  const { locale } = useLanguage()
  const who = homeContent[locale].who

  return (
    <section id="dla-kogo" className="scroll-mt-20 border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {who.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground text-balance sm:text-4xl">
            {who.headline}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{who.sub}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {who.cards.map((card: { title: string; desc: string }, index: number) => {
            const Icon = cardIcons[index] ?? UtensilsCrossed

            return (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md hover:shadow-black/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7fbd04] to-[#4d7c0f]">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
