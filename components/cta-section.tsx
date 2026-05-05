"use client"

import { ArrowRight, Check, Gift, Star, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function CtaSection() {
  const { t } = useLanguage()
  const c = t.cta

  return (
    <section id="beta-testing" className="py-20 bg-secondary scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            {c.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            {c.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {c.sub}
          </p>
        </div>

        {/* Main card */}
        <div className="max-w-4xl mx-auto mt-10 rounded-2xl border border-primary/30 bg-background shadow-lg shadow-primary/10 overflow-hidden">

          {/* Free month banner */}
          <div className="bg-primary px-6 py-4 flex items-center justify-center gap-3">
            <Gift size={18} className="text-primary-foreground shrink-0" />
            <p className="text-sm font-semibold text-primary-foreground text-center">
              {c.freeBanner}
            </p>
          </div>

          <div className="p-6 sm:p-8">

            {/* What you get */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {c.includes}
              </p>
              <ul className="space-y-3">
                {c.items.map((item: string) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing after trial */}
            <div className="border-t border-border pt-8 mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                {c.pricingTitle}
              </p>

              <div className="grid sm:grid-cols-3 gap-4">

                {/* Phase 1: 3 months promo */}
                <div className="rounded-xl border border-primary/40 bg-primary/5 p-5 flex flex-col gap-2 relative">
                  <span className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {c.promo.badge}
                  </span>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-3xl font-bold text-primary font-serif">{c.promo.price}</span>
                    <span className="text-sm text-muted-foreground mb-1">{c.promo.currency}</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground">{c.promo.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.promo.desc}</p>
                  <ul className="flex flex-col gap-1.5 mt-2">
                    {c.promo.features.map((f: string) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Star size={9} className="text-primary fill-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phase 2: Regular price */}
                <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-2">
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-3xl font-bold text-foreground font-serif">{c.regular.price}</span>
                    <span className="text-sm text-muted-foreground mb-1">{c.regular.currency}</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground">{c.regular.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.regular.desc}</p>
                  <ul className="flex flex-col gap-1.5 mt-2">
                    {c.regular.features.map((f: string) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Star size={9} className="text-primary fill-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Token pack */}
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

            {/* CTA button */}
            <div className="text-center">
              <a href="tel:+48570230684" className="inline-flex">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 shadow-md shadow-primary/20"
                >
                  {c.ctaBtn}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                {c.trust}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
