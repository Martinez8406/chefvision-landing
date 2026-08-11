"use client"

import { motion } from "framer-motion"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { HOTEL_SHOTS, ProductShot } from "@/components/hotele/product-shot"

const STEPS = [
  {
    num: "01",
    title: "Tworzymy przestrzeń Twojego hotelu",
    desc: "Logo, informacje, menu i usługi.",
    src: HOTEL_SHOTS.hub1,
    alt: "Przestrzeń hotelu w Hotel Hub ChefVision",
  },
  {
    num: "02",
    title: "Otrzymujesz kody QR",
    desc: "Umieszczasz je w pokojach i wybranych miejscach hotelu.",
    src: HOTEL_SHOTS.hub2,
    alt: "Usługi hotelu dostępne po zeskanowaniu kodu QR",
  },
  {
    num: "03",
    title: "Goście korzystają z telefonu",
    desc: "Bez instalowania aplikacji.",
    src: HOTEL_SHOTS.hub3,
    alt: "Gość korzysta z usług hotelu w telefonie",
  },
  {
    num: "04",
    title: "Ty aktualizujesz informacje",
    desc: "Zmiana menu lub informacji nie wymaga ponownego drukowania całego materiału.",
    src: HOTEL_SHOTS.hub1,
    alt: "Informacje hotelowe aktualizowane w Hotel Hub",
    imageClassName: "max-h-[180px] object-cover object-[center_70%]",
  },
]

export function HotelImplementation() {
  return (
    <section id="jak-to-dziala" className="scroll-mt-20 border-y border-border/60 bg-secondary/20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            Zacznij bez skomplikowanego wdrożenia.
          </motion.h2>
        </FadeIn>

        <FadeIn className="mt-12">
          <motion.ol variants={stagger} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.li key={step.num} variants={fadeUp} className="relative flex flex-col gap-4">
                <div className="mx-auto w-full max-w-[140px] sm:max-w-[150px]">
                  <ProductShot
                    src={step.src}
                    alt={step.alt}
                    sizes="150px"
                    className="rounded-xl shadow-[0_10px_28px_-18px_rgba(15,23,32,0.35)]"
                    imageClassName={
                      step.imageClassName ?? "max-h-[180px] object-cover object-top"
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
                {i < STEPS.length - 1 ? (
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
