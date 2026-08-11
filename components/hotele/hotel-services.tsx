"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, fadeUp, stagger } from "@/components/hotele/hotele-motion"
import { APP_SIGNUP_URL, trackHoteleCta } from "@/lib/hotele-analytics"

const MENU_SERVICE_URL = APP_SIGNUP_URL
const FLYER_SERVICE_URL = "https://app.chefvision.pl/#/cennik"

const SERVICES = [
  {
    id: "menu",
    badge: "Usługa zespołu",
    badgeTone: "dark" as const,
    price: "299",
    currency: "jednorazowo",
    title: "Zleć wykonanie menu",
    desc: "Zakładasz konto jak zwykle — my zdalnie przygotujemy Twoją kartę cyfrową.",
    features: [
      "Zespół ChefVision buduje Twoje menu cyfrowe",
      "Zdjęcia, opisy, kategorie i ceny",
      "Gotowe publiczne menu z linkiem i QR",
      "Ty nadal masz własne konto i pełną kontrolę",
    ],
    cta: "Zlecam wykonanie",
    href: MENU_SERVICE_URL,
    location: "service_menu",
  },
  {
    id: "flyer",
    badge: "Projekt graficzny",
    badgeTone: "accent" as const,
    price: "149",
    currency: "jednorazowo",
    title: "Ulotka QR",
    desc: "Ulotka QR dopasowana do Twojego hotelu. Personalizowany projekt z kodem QR do Twojego menu, gotowy do druku, w stylu Twojej marki.",
    features: [
      "3 warianty projektu do wyboru",
      "3 drobne poprawki do wybranego wariantu (kolory, teksty, układ)",
      "Plik gotowy do druku (PDF, format A5)",
      "Realizacja w 3 dni robocze",
    ],
    cta: "Zlecam ulotkę",
    href: FLYER_SERVICE_URL,
    location: "service_flyer",
  },
]

export function HotelServices() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            Nie chcesz przygotowywać wszystkiego sam?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-xl font-semibold text-foreground sm:text-2xl"
          >
            Możemy przygotować to za Ciebie.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Ty decydujesz, jak ma wyglądać Twój hotel.
            <br />
            My możemy zająć się przygotowaniem materiałów.
          </motion.p>
        </FadeIn>

        <FadeIn className="mt-12">
          <motion.div
            variants={stagger}
            className="grid gap-6 md:grid-cols-2 md:gap-8"
          >
            {SERVICES.map((service) => (
              <motion.article
                key={service.id}
                variants={fadeUp}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/25 sm:p-8"
              >
                <span
                  className={
                    service.badgeTone === "dark"
                      ? "inline-flex w-fit rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-background"
                      : "inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary"
                  }
                >
                  {service.badge}
                </span>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {service.price} zł
                  </span>
                  <span className="text-sm text-muted-foreground">{service.currency}</span>
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
                  className={
                    service.badgeTone === "dark"
                      ? "mt-8 h-11 w-full bg-foreground font-semibold text-background hover:bg-foreground/90"
                      : "mt-8 h-11 w-full font-semibold"
                  }
                  asChild
                >
                  <a
                    href={service.href}
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
