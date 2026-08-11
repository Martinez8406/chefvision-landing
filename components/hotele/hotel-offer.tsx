"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { SignupButton } from "@/components/hotele/hotele-cta"

const PREMIUM_INCLUDES = [
  "Hotel Hub",
  "Rekomendacje i promocje",
  "Statystyki",
  "Funkcje hotelowe",
  "Pełne możliwości systemu",
]

export function HotelOffer() {
  return (
    <section className="border-y border-border/60 bg-secondary/25 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn className="text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            Sprawdź, czy ChefVision sprawdzi się w Twoim hotelu.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Uruchom system, dodaj informacje swojego hotelu i sprawdź go w rzeczywistych warunkach.
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
                  Okres próbny
                </p>
                <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                  14 dni pełnej wersji.
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  Bez długoterminowego zobowiązania.
                </p>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Premium
                  </p>
                  <p className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold tracking-tight text-foreground">97 zł</span>
                    <span className="text-sm text-muted-foreground">/ miesiąc</span>
                  </p>
                </div>
              </div>

              <div className="flex-1 lg:max-w-sm">
                <p className="text-sm font-semibold text-foreground">Premium obejmuje:</p>
                <motion.ul variants={stagger} className="mt-4 flex flex-col gap-3">
                  {PREMIUM_INCLUDES.map((item) => (
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
                  Sprawdź przez 14 dni
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
