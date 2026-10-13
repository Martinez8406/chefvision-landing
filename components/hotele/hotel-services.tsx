"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { APP_SIGNUP_URL, trackHoteleCta } from "@/lib/hotele-analytics"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent } from "@/lib/translations-hotele"

const SERVICE_URLS = {
  menu: APP_SIGNUP_URL,
  flyer: "https://app.chefvision.pl/#/cennik",
} as const

export function HotelServices() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).services

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            {t.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-xl font-semibold text-foreground sm:text-2xl"
          >
            {t.sub}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.decide}
            <br />
            {t.weHelp}
          </motion.p>
        </FadeIn>

        <FadeIn className="mt-12">
          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2 md:gap-8">
            {t.items.map((service) => (
              <motion.article
                key={service.id}
                variants={fadeUp}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/25 sm:p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {service.badge}
                </p>

                <div className="mt-4">
                  <p className="flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {service.price} {service.currency}
                    </span>
                    <span className="text-base font-medium text-foreground">{service.billingLabel}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.freeNote}
                  </p>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.desc}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-8 h-12 w-full rounded-2xl bg-[#3dcf8e] text-base font-bold text-[#102117] hover:bg-[#34c484]"
                  asChild
                >
                  <a
                    href={SERVICE_URLS[service.id as keyof typeof SERVICE_URLS] ?? APP_SIGNUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackHoteleCta(service.location)}
                  >
                    {service.cta}
                  </a>
                </Button>
              </motion.article>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
