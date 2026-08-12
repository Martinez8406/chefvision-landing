"use client"

import { motion } from "framer-motion"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { HOTEL_SHOTS, ProductShot } from "@/components/hotele/product-shot"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent } from "@/lib/translations-hotele"

export function HotelRecommendations() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).recommendations

  return (
    <section className="border-y border-border/60 bg-secondary/20 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
        <FadeIn>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            {t.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-2xl font-semibold text-foreground/90 sm:text-3xl"
          >
            {t.subline}
          </motion.p>

          <motion.div variants={stagger} className="mt-8 flex flex-col gap-6">
            {t.items.map((r) => (
              <motion.div key={r.label} variants={fadeUp} className="border-l-2 border-primary/50 pl-5">
                <p className="text-lg font-semibold text-foreground">{r.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-base font-medium leading-relaxed text-foreground sm:text-lg"
          >
            {t.note}
          </motion.p>
        </FadeIn>

        <FadeIn className="flex justify-center lg:justify-end">
          <motion.div variants={fadeUp} className="w-full max-w-[360px] sm:max-w-[400px]">
            <ProductShot
              src={HOTEL_SHOTS.recommendations}
              alt={t.imageAlt}
              sizes="(max-width: 1024px) 90vw, 400px"
            />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
