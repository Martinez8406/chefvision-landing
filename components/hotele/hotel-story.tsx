"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"

export function HotelStory() {
  return (
    <section id="o-nas" className="scroll-mt-20 border-y border-border/60 bg-secondary/25 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <FadeIn>
          <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0091-RVUddaoBC2IEHmgK5Mndc134DhCYjW.jpg"
              alt="Marcin Koniuszko — założyciel ChefVision"
              width={520}
              height={640}
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </FadeIn>

        <FadeIn>
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.16em] text-primary"
          >
            Historia
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-2 text-3xl font-bold text-foreground text-balance sm:text-4xl"
          >
            ChefVision powstał z doświadczenia hotelowej gastronomii.
          </motion.h2>
          <motion.div
            variants={stagger}
            className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <motion.p variants={fadeUp}>Pracuję w hotelarstwie od ponad 18 lat.</motion.p>
            <motion.p variants={fadeUp}>Przez lata widziałem te same problemy:</motion.p>
            <motion.ul variants={stagger} className="space-y-2 pl-1">
              {[
                "Gość nie rozumie menu.",
                "Nie wie, gdzie znaleźć informację.",
                "Pyta o rzeczy, które powinny być łatwo dostępne.",
                "Obsługa traci czas na powtarzalne odpowiedzi.",
              ].map((item) => (
                <motion.li key={item} variants={fadeUp} className="border-l-2 border-primary/35 pl-4">
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} className="font-medium text-foreground">
              ChefVision powstał po to, żeby te informacje były dostępne w jednym miejscu — bezpośrednio w telefonie
              gościa.
            </motion.p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
