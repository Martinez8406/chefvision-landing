"use client"

import {
  BarChart3,
  Bell,
  Building2,
  Megaphone,
  User,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const cardIcons: LucideIcon[] = [User, Bell, Building2, Megaphone, BarChart3]

export function WhyChefVisionSection() {
  const { t } = useLanguage()
  const s = t.whyChefVision

  return (
    <div className="relative z-20 -mt-16 mx-auto w-full max-w-7xl px-6 pb-4 sm:-mt-20 lg:-mt-24">
      <div className="rounded-t-[2rem] border border-border/60 bg-card px-6 py-12 shadow-lg shadow-black/5 sm:px-10 sm:py-14 lg:rounded-t-[2.5rem]">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {s.badge}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl">
            {s.headline}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {s.cards.map((card: { title: string; description: string }, index: number) => {
            const Icon = cardIcons[index] ?? User

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon size={18} className="text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
