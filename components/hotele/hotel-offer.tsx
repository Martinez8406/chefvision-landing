"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { SignupButton } from "@/components/hotele/hotele-cta"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent } from "@/lib/translations-hotele"

export function HotelOffer() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).offer

  return (
    <section className="border-y border-border/60 bg-secondary/25 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn className="text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            {t.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.sub}
          </motion.p>
        </FadeIn>

        <FadeIn className="mt-10">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-background px-6 py-8 shadow-sm sm:px-10 sm:py-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {t.trialBadge}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                  {t.trialTitle}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">{t.trialNote}</p>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.premiumLabel}
                  </p>
                  <p className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold tracking-tight text-foreground">97 zł</span>
                    <span className="text-sm text-muted-foreground">{t.perMonth}</span>
                  </p>
                </div>
              </div>

              <div className="flex-1 lg:max-w-sm">
                <p className="text-sm font-semibold text-foreground">{t.includesLabel}</p>
                <motion.ul variants={stagger} className="mt-4 flex flex-col gap-3">
                  {t.includes.map((item) => (
                    <motion.li key={item} variants={fadeUp} className="flex items-start gap-2.5">
                      <Check size={18} className="mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                      <span className="text-sm leading-relaxed text-foreground sm:text-base">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <SignupButton
                  location="offer_trial"
                  className="mt-8 h-12 w-full px-8 text-sm font-semibold shadow-md shadow-black/10 sm:w-auto"
                >
                  {t.cta}
                  <ArrowRight size={16} />
                </SignupButton>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
