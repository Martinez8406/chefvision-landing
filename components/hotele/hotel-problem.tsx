"use client"

import { motion } from "framer-motion"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"

const GUEST_QUESTIONS = [
  "Gdzie jest restauracja?",
  "O której jest śniadanie?",
  "Jak zamówić Room Service?",
  "Czy hotel ma Spa?",
  "Jak wygląda menu baru?",
]

export function HotelProblem() {
  return (
    <section className="bg-background py-16 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            Gość ma pytanie. Recepcja ma kolejne zadanie.
          </motion.h2>
        </FadeIn>

        <FadeIn className="mt-14">
          <motion.ul variants={stagger} className="flex flex-col gap-6 sm:gap-7">
            {GUEST_QUESTIONS.map((q) => (
              <motion.li
                key={q}
                variants={fadeUp}
                className="border-l-2 border-primary/40 pl-6 text-2xl font-semibold leading-snug text-foreground text-balance sm:pl-8 sm:text-3xl lg:text-[2.1rem]"
              >
                {q}
              </motion.li>
            ))}
          </motion.ul>
        </FadeIn>

        <FadeIn className="mt-14 space-y-5 text-center">
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Dla gościa to proste pytania.
            <br />
            Dla pracowników hotelu — dziesiątki powtarzających się pytań każdego dnia.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-base font-medium leading-relaxed text-foreground sm:text-lg"
          >
            ChefVision pozwala przekazać te informacje gościowi, zanim będzie musiał o nie pytać.
          </motion.p>
        </FadeIn>
      </div>
    </section>
  )
}
