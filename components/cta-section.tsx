"use client"

import { ArrowRight, Check, Gift, Star, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export function CtaSection() {
  const { t } = useLanguage()
  const c = t.cta

  return (
    <section id="beta-testing" className="py-20 bg-secondary scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">

        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border-2 border-primary bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            {c.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            {c.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {c.sub}
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-10 rounded-2xl border border-border bg-background shadow-lg shadow-black/5 overflow-hidden">
          <div className="bg-primary px-6 py-4 flex items-center justify-center gap-3">
            <Gift size={18} className="text-primary-foreground shrink-0" />
            <p className="text-sm font-semibold text-primary-foreground text-center">
              {c.freeBanner}
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {c.includes}
              </p>
              <ul className="space-y-3">
                {c.items.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-8 mb-8">
              <div className="space-y-3 mb-6 max-w-3xl">
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  {c.pricingIntro1}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.pricingIntro2}
                </p>
              </div>

              <div className="mb-5 flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3">
                <span className="text-base" aria-hidden>🎉</span>
                <p className="text-sm font-semibold text-primary text-center">
                  {c.pricingRibbon}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch lg:items-center pt-2">
                <div className="relative rounded-xl border border-border bg-card p-5 flex flex-col gap-2">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold text-foreground font-serif">{c.freePlan.price}</span>
                    <span className="text-sm text-muted-foreground mb-1">{c.freePlan.currency}</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground">{c.freePlan.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.freePlan.desc}</p>
                  <ul className="flex flex-col gap-1.5 mt-2">
                    {c.freePlan.highlights.map((f: string) => (
                      <li key={f} className="flex items-start gap-2 text-xs font-medium text-foreground">
                        <Check size={14} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-1.5 mt-2 pt-2 border-t border-border">
                    {c.freePlan.features.map((f: string) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check size={14} className="text-primary/60 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative rounded-xl border border-border bg-card p-5 flex flex-col gap-2">
                  <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    {c.startPlan.badge}
                  </span>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-3xl font-bold text-foreground font-serif">{c.startPlan.price}</span>
                    <span className="text-sm text-muted-foreground mb-1">{c.startPlan.currency}</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground">{c.startPlan.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.startPlan.desc}</p>
                  <ul className="flex flex-col gap-1.5 mt-2">
                    {c.startPlan.features.map((f: string) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-foreground">
                        <Check size={14} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative flex flex-col gap-3 rounded-2xl border-2 border-primary bg-background p-6 sm:p-7 lg:p-8 lg:scale-[1.06] lg:z-10 shadow-[0_0_0_1px_hsl(var(--primary)),0_0_28px_-4px_hsl(var(--primary)/0.45),0_12px_40px_-12px_hsl(var(--primary)/0.35)] ring-2 ring-primary/25 lg:col-span-1">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-md whitespace-nowrap">
                    {c.regular.badge}
                  </Badge>
                  <div className="flex items-end gap-1 mt-3">
                    <span className="text-4xl lg:text-[2.75rem] font-bold text-primary font-serif leading-none">{c.regular.price}</span>
                    <span className="text-sm text-muted-foreground mb-1">{c.regular.currency}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{c.regular.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.regular.desc}</p>
                  <ul className="flex flex-col gap-2 mt-1">
                    {c.regular.features.map((f: string) => (
                      <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                        <Check size={15} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2 mt-2">
                    <Package size={18} className="text-primary" />
                    <span className="text-3xl font-bold text-foreground font-serif">{c.tokenPack.price}</span>
                    {c.tokenPack.currency && (
                      <span className="text-sm text-muted-foreground">{c.tokenPack.currency}</span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-foreground">{c.tokenPack.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.tokenPack.desc}</p>
                  <ul className="flex flex-col gap-1.5 mt-2">
                    {c.tokenPack.features.map((f: string) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Star size={9} className="text-primary fill-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                {c.tokenNote}
              </p>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:brightness-[0.93] font-semibold text-base px-8 shadow-md shadow-black/10"
                asChild
              >
                <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
                  {c.ctaBtn}
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
