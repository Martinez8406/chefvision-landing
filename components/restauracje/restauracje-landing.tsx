"use client"

import { type ReactNode } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Check, CircleCheck, Play, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { APP_SIGNUP_URL, trackRestauracjeCta } from "@/lib/restauracje-analytics"

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 1, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
}

/**
 * Scroll reveal bez ryzyka niewidocznej treści:
 * - domyślnie opacity 1 (pełna czytelność),
 * - tylko delikatny translateY,
 * - once: true → po wejściu w viewport zostaje w pełni czytelne,
 * - prefers-reduced-motion → od razu stan końcowy.
 */
function FadeIn({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px" }}
      variants={stagger}
    >
      {children}
    </motion.div>
  )
}

const HERO_TRUST = ["14 języków", "Bez karty kredytowej", "14 dni Premium", "Darmowy plan"]

const PROBLEMS = [
  "Nie rozumiem menu.",
  "Nie wiem, co wybrać.",
  "Nie znam lokalnych dań.",
]

const STEPS = [
  {
    num: "01",
    title: "Zrozum",
    desc: "Menu dostępne w języku gościa.",
  },
  {
    num: "02",
    title: "Odkryj",
    desc: "Zdjęcia i informacje pomagają poznać danie.",
  },
  {
    num: "03",
    title: "Wybierz",
    desc: "Rekomendacje i pairingi pomagają zdecydować.",
  },
]

const RECOS = [
  {
    label: "Polecane",
    example: "Polecamy do tego dania",
  },
  {
    label: "Popularne",
    example: "Inni często zamawiają z",
  },
  {
    label: "W zestawie taniej",
    example: "Najpopularniejszy zestaw",
  },
]

const LANGUAGES = [
  "Polski",
  "English",
  "Deutsch",
  "Español",
  "Italiano",
  "Français",
  "中文",
  "日本語",
  "한국어",
  "العربية",
  "Українська",
  "Čeština",
  "Nederlands",
  "עברית",
]

const JOURNEY = [
  { label: "Niepewność", src: "/images/story/scene-1-confused-guest.png", alt: "Gość niepewny przy papierowym menu" },
  { label: "Zrozumienie", src: "/images/story/scene-2-qr-translation.png", alt: "Gość czyta menu w swoim języku" },
  { label: "Pewność wyboru", src: "/images/story/scene-3-recommendations.png", alt: "Gość korzysta z rekomendacji" },
  { label: "Lepsze doświadczenie", src: "/images/story/scene-4-happy-ending.png", alt: "Zadowolony gość przy stole" },
]

const BENEFITS = [
  {
    title: "Menu QR",
    desc: "Gość otwiera kartę na swoim telefonie — bez aplikacji i bez czekania na kelnera z menu.",
  },
  {
    title: "14 języków",
    desc: "Zagraniczny gość samodzielnie rozumie ofertę i zamawia pewniej.",
  },
  {
    title: "Zdjęcia dań",
    desc: "Gość widzi, co dostanie — mniej pytań, więcej świadomych wyborów.",
  },
  {
    title: "Rekomendacje i pairingi",
    desc: "Promujesz wybrane dania, napoje i zestawy w momencie decyzji.",
  },
  {
    title: "Promocje",
    desc: "Podnosisz widoczność pozycji, które chcesz sprzedawać częściej.",
  },
  {
    title: "Statystyki",
    desc: "Widzisz, co goście oglądają i co warto podkreślić w karcie.",
  },
]

function SignupButton({
  location,
  children,
  className,
  variant = "default",
  size = "lg",
}: {
  location: string
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
}) {
  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a
        href={APP_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackRestauracjeCta(location)}
      >
        {children}
      </a>
    </Button>
  )
}

export function RestauracjeLanding() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background pt-24 lg:pt-28">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-20">
          <FadeIn className="flex flex-col gap-7">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
            >
              <UtensilsCrossed size={14} strokeWidth={2.5} />
              ChefVision dla restauracji
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="max-w-xl text-4xl font-bold leading-[1.08] text-foreground text-balance sm:text-5xl lg:text-[3.25rem]"
            >
              Pomóż gościom wybrać więcej. Sprzedaj więcej.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              ChefVision pomaga gościom zrozumieć menu, odkrywać dania i korzystać z rekomendacji — w 14 językach.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <SignupButton
                location="hero_primary"
                className="h-12 px-8 text-sm font-semibold shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15"
              >
                Wypróbuj za darmo przez 14 dni
                <ArrowRight size={16} />
              </SignupButton>
              <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold" asChild>
                <a href="#jak-to-dziala">
                  <Play size={16} />
                  Zobacz, jak działa
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-5 gap-y-2">
              {HERO_TRUST.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
                  <CircleCheck size={14} className="shrink-0 text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>
          </FadeIn>

          <FadeIn className="relative flex justify-center lg:justify-end">
            <motion.div variants={fadeUp} className="relative w-full max-w-xl overflow-hidden rounded-2xl lg:max-w-none">
              <Image
                src="/images/step-qr-stand-table.png"
                alt="Gość skanuje kod QR ChefVision przy stoliku w restauracji"
                width={760}
                height={640}
                className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-border/60 bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn className="text-center">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
            >
              Nie każdy gość wie, co zamówić.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Zwłaszcza gdy menu jest w obcym języku. Nieznane składniki, lokalne dania i brak pewności często kończą się
              wyborem najbezpieczniejszej opcji.
            </motion.p>
          </FadeIn>

          <FadeIn className="mt-10 grid gap-8 sm:grid-cols-[1fr_1.1fr] sm:items-center">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl">
              <Image
                src="/images/story/scene-1-confused-guest.png"
                alt="Gość zdezorientowany papierowym menu w obcym języku"
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.ul variants={stagger} className="flex flex-col gap-5">
              {PROBLEMS.map((p) => (
                <motion.li
                  key={p}
                  variants={fadeUp}
                  className="border-l-2 border-primary/40 pl-5 text-xl font-semibold text-foreground sm:text-2xl"
                >
                  {p}
                </motion.li>
              ))}
            </motion.ul>
          </FadeIn>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="jak-to-dziala" className="scroll-mt-20 bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
            >
              ChefVision pomaga gościowi podjąć decyzję.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base text-muted-foreground sm:text-lg">
              Od pierwszego spojrzenia na menu do pewnego wyboru.
            </motion.p>
          </FadeIn>

          <FadeIn className="mt-10 grid gap-8 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <motion.div key={step.num} variants={fadeUp} className="flex flex-col gap-3">
                <span className="text-sm font-semibold tracking-[0.2em] text-primary">{step.num}</span>
                <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
            >
              Nie tylko pokazuj menu. Pomóż sprzedać więcej.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              ChefVision pozwala restauracji wykorzystać moment, w którym gość właśnie wybiera danie.
            </motion.p>

            <motion.div variants={stagger} className="mt-8 flex flex-col gap-5">
              {RECOS.map((r) => (
                <motion.div key={r.label} variants={fadeUp} className="border-l-2 border-primary/50 pl-5">
                  <p className="text-lg font-semibold text-foreground">{r.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.example}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm font-medium text-foreground sm:text-base"
            >
              Restauracja sama decyduje, co rekomendować.
            </motion.p>
          </FadeIn>

          <FadeIn className="flex justify-center">
            <motion.div variants={fadeUp} className="w-full max-w-sm">
              <Image
                src="/images/mockup.png"
                alt="Rekomendacje i pairingi w cyfrowym menu ChefVision"
                width={420}
                height={820}
                className="mx-auto h-auto w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="border-y border-border/60 bg-secondary/20 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-foreground text-balance sm:text-4xl"
            >
              Twój gość nie musi mówić po polsku.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Menu ChefVision może być dostępne w 14 językach, dzięki czemu zagraniczny gość może samodzielnie zrozumieć
              ofertę.
            </motion.p>
            <motion.div
              variants={stagger}
              className="mt-8 flex flex-wrap justify-center gap-2.5"
            >
              {LANGUAGES.map((lang) => (
                <motion.span
                  key={lang}
                  variants={fadeUp}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground"
                >
                  {lang}
                </motion.span>
              ))}
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* JOURNEY / EXPERIENCE */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
            >
              Gość przychodzi po doświadczenie. Nie po instrukcję obsługi.
            </motion.h2>
          </FadeIn>

          <FadeIn className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {JOURNEY.map((step, i) => (
                <motion.div key={step.label} variants={fadeUp} className="relative flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={step.src}
                      alt={step.alt}
                      width={320}
                      height={240}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-wide text-foreground">{step.label}</p>
                  </div>
                  {i < JOURNEY.length - 1 ? (
                    <span
                      className="absolute -right-5 top-[22%] hidden text-xl text-primary/50 lg:block"
                      aria-hidden
                    >
                      →
                    </span>
                  ) : null}
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground lg:hidden">
              Niepewność → Zrozumienie → Pewność wyboru → Lepsze doświadczenie
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FOR RESTAURANTS */}
      <section id="dla-kogo" className="scroll-mt-20 bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
            >
              Stworzone z myślą o prawdziwej gastronomii.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base text-muted-foreground sm:text-lg">
              Nie lista technologii — rozwiązania problemów, które znasz z sali.
            </motion.p>
          </FadeIn>

          <FadeIn className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <motion.div key={b.title} variants={fadeUp} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Check size={18} className="shrink-0 text-primary" strokeWidth={2.5} />
                  <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                </div>
                <p className="pl-7 text-sm leading-relaxed text-muted-foreground sm:text-base">{b.desc}</p>
              </motion.div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* STORY / AUTHORITY */}
      <section className="bg-background py-16 lg:py-24">
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
              ChefVision powstał w gastronomii.
            </motion.h2>
            <motion.div variants={stagger} className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <motion.p variants={fadeUp}>
                Przez ponad 18 lat pracowałem w gastronomii hotelowej. Widziałem, jak często goście mają problem ze
                zrozumieniem menu — szczególnie gdy przyjeżdżają z zagranicy.
              </motion.p>
              <motion.p variants={fadeUp}>ChefVision powstał z potrzeby rozwiązania tego problemu.</motion.p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* PRICING SNAPSHOT */}
      <section id="cennik" className="scroll-mt-20 border-y border-border/60 bg-secondary/20 py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-primary"
            >
              Cennik
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Premium: 97 zł / miesiąc
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base text-muted-foreground sm:text-lg">
              14 dni Premium. Bez karty kredytowej.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6">
              <SignupButton
                location="pricing"
                className="h-12 px-8 text-sm font-semibold shadow-md shadow-black/10"
              >
                Wypróbuj za darmo przez 14 dni
                <ArrowRight size={16} />
              </SignupButton>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#5a8f0a] py-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
            Sprawdź, co ChefVision może zrobić dla Twojej restauracji.
          </h2>
          <p className="max-w-xl text-base text-white sm:text-lg">
            Zacznij bez ryzyka. Przetestuj ChefVision przez 14 dni.
          </p>
          <SignupButton
            location="final_cta"
            className="h-12 bg-white px-8 text-sm font-semibold text-[#3f6212] shadow-md hover:bg-white"
            variant="secondary"
          >
            Wypróbuj za darmo przez 14 dni
            <ArrowRight size={16} />
          </SignupButton>
          <p className="text-sm font-medium text-white">Bez karty kredytowej</p>
        </div>
      </section>
    </>
  )
}
