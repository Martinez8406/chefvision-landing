"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { FadeIn, fadeUp } from "@/components/hotele/hotele-motion"
import { DemoButton } from "@/components/hotele/hotele-cta"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent, getHoteleDemoMailto } from "@/lib/translations-hotele"

export function HotelLocalOffer() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).local

  return (
    <section className="border-y border-border/60 bg-background py-10 lg:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-background to-secondary/40 px-6 py-8 sm:px-10 sm:py-10"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <MapPin size={14} strokeWidth={2.5} />
                  {t.badge}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-foreground text-balance sm:text-3xl">
                  {t.headline}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
              <DemoButton
                location="local_offer"
                href={getHoteleDemoMailto(locale)}
                className="h-12 shrink-0 px-7 text-sm font-semibold shadow-sm"
              >
                {t.cta}
              </DemoButton>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
