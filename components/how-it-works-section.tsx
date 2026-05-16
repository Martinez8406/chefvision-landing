"use client"

import { QrCode, Sparkles, ShoppingCart, TrendingUp, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const stepIcons: LucideIcon[] = [QrCode, Sparkles, ShoppingCart, TrendingUp]

export function HowItWorksSection() {
  const { t } = useLanguage()
  const hiw = t.howItWorks

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl">
            {hiw.headline}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hiw.steps.map((step: { title: string; desc: string }, i: number) => {
            const Icon = stepIcons[i]
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center gap-4">
                {i < hiw.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-border z-0" />
                )}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted border border-border">
                  <Icon size={28} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    {i + 1}.
                  </p>
                  <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
