"use client"

import { motion } from "framer-motion"
import {
  ConciergeBell,
  Coffee,
  Flower2,
  Info,
  UtensilsCrossed,
  Wine,
} from "lucide-react"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { HOTEL_SHOTS, ProductShot } from "@/components/hotele/product-shot"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent } from "@/lib/translations-hotele"

const HUB_ICONS = [ConciergeBell, UtensilsCrossed, Wine, Flower2, Coffee, Info]

export function HotelHubSection() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).hub

  return (
    <section id="funkcje" className="scroll-mt-20 border-y border-border/60 bg-secondary/25 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.16em] text-primary"
          >
            {t.badge}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            {t.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.sub}
          </motion.p>
        </FadeIn>

        <FadeIn className="mt-12">
          <motion.div
            variants={stagger}
            className="grid items-start gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8"
          >
            <motion.div variants={fadeUp} className="mx-auto w-full max-w-[400px] lg:mx-0 lg:max-w-none">
              <ProductShot
                src={HOTEL_SHOTS.hub1}
                alt={t.alt1}
                sizes="(max-width: 1024px) 90vw, 460px"
                priority
              />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 gap-4 sm:gap-5 lg:pt-4">
              <motion.div variants={fadeUp}>
                <ProductShot
                  src={HOTEL_SHOTS.hub2}
                  alt={t.alt2}
                  sizes="(max-width: 768px) 45vw, 260px"
                />
              </motion.div>
              <motion.div variants={fadeUp} className="pt-8 sm:pt-14">
                <ProductShot
                  src={HOTEL_SHOTS.hub3}
                  alt={t.alt3}
                  sizes="(max-width: 768px) 45vw, 260px"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </FadeIn>

        <FadeIn className="mt-10">
          <motion.ul
            variants={stagger}
            className="mx-auto grid max-w-4xl grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6"
          >
            {t.services.map((label, index) => {
              const Icon = HUB_ICONS[index] ?? Info
              return (
                <motion.li
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-background/90 px-3 py-2.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={15} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-foreground">{label}</span>
                </motion.li>
              )
            })}
          </motion.ul>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {t.note}
          </motion.p>
        </FadeIn>
      </div>
    </section>
  )
}
