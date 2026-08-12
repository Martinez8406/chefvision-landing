"use client"

import { motion } from "framer-motion"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { HOTEL_SHOTS, ProductShot } from "@/components/hotele/product-shot"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent } from "@/lib/translations-hotele"

export function HotelOperations() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).operations
  const state1Lines = t.state1Caption.split("\n")

  return (
    <section id="dla-hoteli" className="scroll-mt-20 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <FadeIn>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
            >
              {t.headline}
            </motion.h2>
            <motion.div
              variants={stagger}
              className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              <motion.p variants={fadeUp} className="font-medium text-foreground">
                {t.p1a}
                <br />
                {t.p1b}
              </motion.p>
              <motion.p variants={fadeUp}>{t.p2}</motion.p>
              <motion.p variants={fadeUp}>{t.p3}</motion.p>
            </motion.div>
          </FadeIn>

          <FadeIn>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-start sm:gap-5"
            >
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {t.state1}
                </p>
                <ProductShot
                  src={HOTEL_SHOTS.callStaff}
                  alt={t.state1Alt}
                  sizes="(max-width: 640px) 90vw, 320px"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {state1Lines.map((line, i) => (
                    <span key={line}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {t.state2}
                </p>
                <ProductShot
                  src={HOTEL_SHOTS.callStaffExpanded}
                  alt={t.state2Alt}
                  sizes="(max-width: 640px) 90vw, 320px"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">{t.state2Caption}</p>
              </motion.div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
