"use client"

import { motion } from "framer-motion"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { HOTEL_SHOTS, ProductShot } from "@/components/hotele/product-shot"

const RECOS = [
  {
    label: "Polecane",
    desc: "Sugestie dań, napojów i dodatków.",
  },
  {
    label: "Popularne",
    desc: "Produkty, które inni goście często wybierają.",
  },
  {
    label: "W zestawie taniej",
    desc: "Gotowe zestawy zwiększające wartość zamówienia.",
  },
]

export function HotelRecommendations() {
  return (
    <section className="border-y border-border/60 bg-secondary/20 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
        <FadeIn>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            Nie wystarczy pokazać gościowi menu.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-2xl font-semibold text-foreground/90 sm:text-3xl"
          >
            Trzeba jeszcze pomóc mu wybrać.
          </motion.p>

          <motion.div variants={stagger} className="mt-8 flex flex-col gap-6">
            {RECOS.map((r) => (
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
            ChefVision pomaga gościowi zdecydować — i daje hotelowi dodatkową możliwość sprzedaży.
          </motion.p>
        </FadeIn>

        <FadeIn className="flex justify-center lg:justify-end">
          <motion.div variants={fadeUp} className="w-full max-w-[360px] sm:max-w-[400px]">
            <ProductShot
              src={HOTEL_SHOTS.recommendations}
              alt="ChefVision — polecane danie z rekomendacją wina Pinot Noir"
              sizes="(max-width: 1024px) 90vw, 400px"
            />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
