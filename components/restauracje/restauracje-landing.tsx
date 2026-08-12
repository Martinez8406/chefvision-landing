"use client"

import { type ReactNode } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Check, CircleCheck, Play, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getRestauracjeContent } from "@/lib/translations-restauracje"
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
  const { locale } = useLanguage()
  const t = getRestauracjeContent(locale)

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
              {t.hero.badge}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="max-w-xl text-4xl font-bold leading-[1.08] text-foreground text-balance sm:text-5xl lg:text-[3.25rem]"
            >
              {t.hero.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.hero.sub}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <SignupButton
                location="hero_primary"
                className="h-12 px-8 text-sm font-semibold shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </SignupButton>
              <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold" asChild>
                <a href="#jak-to-dziala">
                  <Play size={16} />
                  {t.hero.ctaSecondary}
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-5 gap-y-2">
              {t.hero.trust.map((item) => (
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
                alt={t.hero.imageAlt}
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
              {t.problem.headline}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.problem.text}
            </motion.p>
          </FadeIn>

          <FadeIn className="mt-10 grid gap-8 sm:grid-cols-[1fr_1.1fr] sm:items-center">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl">
              <Image
                src="/images/story/scene-1-confused-guest.png"
                alt={t.problem.imageAlt}
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.ul variants={stagger} className="flex flex-col gap-5">
              {t.problem.items.map((p) => (
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
              {t.solution.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base text-muted-foreground sm:text-lg">
              {t.solution.sub}
            </motion.p>
          </FadeIn>

          <FadeIn className="mt-10 grid gap-8 md:grid-cols-3 md:gap-8">
            {t.solution.steps.map((step) => (
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
              {t.recommendations.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.recommendations.sub}
            </motion.p>

            <motion.div variants={stagger} className="mt-8 flex flex-col gap-5">
              {t.recommendations.items.map((r) => (
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
              {t.recommendations.note}
            </motion.p>
          </FadeIn>

          <FadeIn className="flex justify-center">
            <motion.div variants={fadeUp} className="w-full max-w-sm">
              <Image
                src="/images/mockup.png"
                alt={t.recommendations.imageAlt}
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
              {t.languages.headline}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.languages.text}
            </motion.p>
            <motion.div
              variants={stagger}
              className="mt-8 flex flex-wrap justify-center gap-2.5"
            >
              {t.languages.list.map((lang) => (
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
              {t.journey.headline}
            </motion.h2>
          </FadeIn>

          <FadeIn className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.journey.steps.map((step, i) => (
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
                  {i < t.journey.steps.length - 1 ? (
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
              {t.journey.mobileFlow}
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
              {t.benefits.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base text-muted-foreground sm:text-lg">
              {t.benefits.sub}
            </motion.p>
          </FadeIn>

          <FadeIn className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.benefits.items.map((b) => (
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
                alt={t.story.imageAlt}
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
              {t.story.badge}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-2 text-3xl font-bold text-foreground text-balance sm:text-4xl"
            >
              {t.story.headline}
            </motion.h2>
            <motion.div variants={stagger} className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <motion.p variants={fadeUp}>{t.story.p1}</motion.p>
              <motion.p variants={fadeUp}>{t.story.p2}</motion.p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cennik" className="scroll-mt-20 bg-[#5a8f0a] py-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 text-center sm:gap-6">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            {t.finalCta.badge}
          </span>
          <h2 className="text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
            {t.finalCta.headline}
          </h2>
          <p className="max-w-xl text-base text-white sm:text-lg">
            {t.finalCta.sub}
          </p>
          <SignupButton
            location="final_cta"
            className="h-12 bg-white px-8 text-sm font-semibold text-[#3f6212] shadow-md hover:bg-white"
            variant="secondary"
          >
            {t.finalCta.button}
            <ArrowRight size={16} />
          </SignupButton>
          <p className="text-sm font-medium text-white">
            {t.finalCta.note}
          </p>
        </div>
      </section>
    </>
  )
}
