"use client"

import { motion } from "framer-motion"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { HOTEL_SHOTS, ProductShot } from "@/components/hotele/product-shot"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent } from "@/lib/translations-hotele"

export function HotelLanguages() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).languages

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <FadeIn className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <motion.div variants={fadeUp} className="w-full max-w-[360px] sm:max-w-[400px]">
            <ProductShot
              src={HOTEL_SHOTS.languages}
              alt={t.imageAlt}
              sizes="(max-width: 1024px) 90vw, 400px"
            />
          </motion.div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            {t.headline}
          </motion.h2>
          <motion.div
            variants={stagger}
            className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <motion.p variants={fadeUp}>{t.p2}</motion.p>
            <motion.p variants={fadeUp} className="font-medium text-foreground">
              {t.p3}
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} className="mt-8 flex flex-wrap gap-2">
            {t.list.map((lang) => (
              <motion.span
                key={lang.code}
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-sm text-foreground"
              >
                <span className="text-xs font-semibold tracking-wide text-primary">{lang.code}</span>
                {lang.name}
              </motion.span>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
