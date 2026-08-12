"use client"

import { motion } from "framer-motion"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { HOTEL_SHOTS, ProductShot } from "@/components/hotele/product-shot"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent } from "@/lib/translations-hotele"

const STEP_SHOTS = [HOTEL_SHOTS.hub1, HOTEL_SHOTS.hub2, HOTEL_SHOTS.hub3, HOTEL_SHOTS.hub1] as const

export function HotelImplementation() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).implementation

  return (
    <section id="jak-to-dziala" className="scroll-mt-20 border-y border-border/60 bg-secondary/20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            {t.headline}
          </motion.h2>
        </FadeIn>

        <FadeIn className="mt-12">
          <motion.ol variants={stagger} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {t.steps.map((step, i) => (
              <motion.li key={step.num} variants={fadeUp} className="relative flex flex-col gap-4">
                <div className="mx-auto w-full max-w-[140px] sm:max-w-[150px]">
                  <ProductShot
                    src={STEP_SHOTS[i]}
                    alt={step.alt}
                    sizes="150px"
                    className="rounded-xl shadow-[0_10px_28px_-18px_rgba(15,23,32,0.35)]"
                    imageClassName={
                      i === 3
                        ? "max-h-[180px] object-cover object-[center_70%]"
                        : "max-h-[180px] object-cover object-top"
                    }
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-sm font-semibold tracking-[0.18em] text-primary">
                    {step.num}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground text-balance">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
                {i < t.steps.length - 1 ? (
                  <span
                    className="absolute -right-5 top-[12%] hidden text-xl text-primary/35 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </motion.li>
            ))}
          </motion.ol>
        </FadeIn>
      </div>
    </section>
  )
}
