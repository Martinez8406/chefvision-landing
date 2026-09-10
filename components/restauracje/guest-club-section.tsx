"use client"

import { type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Mail,
  RotateCcw,
} from "lucide-react"
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

const STEP_ICONS = [BadgeCheck, Mail, CheckCircle2, RotateCcw] as const

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

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[240px] rounded-[2rem] border border-border bg-background p-2.5 shadow-lg shadow-black/8 sm:w-[260px]">
      <div className="mx-auto mb-2.5 h-1 w-16 rounded-full bg-border" aria-hidden />
      <div className="overflow-hidden rounded-[1.4rem] bg-secondary/40">{children}</div>
    </div>
  )
}

export function GuestClubSection() {
  const { locale } = useLanguage()
  const t = getRestauracjeContent(locale).guestClub

  return (
    <section
      id="guest-club"
      className="scroll-mt-20 bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
          >
            {t.badge}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            {t.headline}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.sub}
          </motion.p>
        </FadeIn>

        {/* Flow */}
        <FadeIn className="mt-14 lg:mt-16">
          <ol
            id="guest-club-flow"
            className="grid scroll-mt-24 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {t.steps.map((step, index) => {
              const Icon = STEP_ICONS[index]
              const isLast = index === t.steps.length - 1

              return (
                <motion.li
                  key={step.title}
                  variants={fadeUp}
                  className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {step.desc}
                  </p>

                  {!isLast ? (
                    <>
                      <ArrowDown
                        className="mt-6 text-primary/40 sm:hidden"
                        size={18}
                        aria-hidden
                      />
                      <ArrowRight
                        className="pointer-events-none absolute -right-4 top-5 hidden text-primary/35 lg:block"
                        size={18}
                        aria-hidden
                      />
                    </>
                  ) : null}
                </motion.li>
              )
            })}
          </ol>
        </FadeIn>

        {/* Mockups */}
        <FadeIn className="mt-16 lg:mt-20">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-center sm:gap-0">
            <motion.div variants={fadeUp} className="relative z-10 sm:-mr-6 sm:translate-y-2">
              <PhoneFrame>
                <div className="flex min-h-[320px] flex-col px-5 py-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-xs font-bold uppercase tracking-wide text-primary">
                      VIP
                    </span>
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {t.guestMock.offerTitle}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {t.guestMock.offerSub}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto rounded-2xl border border-border/80 bg-background px-4 py-6 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {t.guestMock.codeLabel}
                    </p>
                    <p className="mt-3 font-serif text-4xl font-bold tracking-[0.08em] text-foreground sm:text-5xl">
                      {t.guestMock.code}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">{t.guestMock.hint}</p>
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>

            <motion.div variants={fadeUp} className="relative z-20 sm:-ml-2 sm:-translate-y-4">
              <PhoneFrame>
                <div className="flex min-h-[320px] flex-col px-5 py-6">
                  <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t.verifyMock.title}
                  </p>
                  <p className="mt-8 text-center font-serif text-4xl font-bold tracking-[0.08em] text-foreground sm:text-5xl">
                    {t.verifyMock.code}
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                    <p className="text-sm font-semibold text-primary">{t.verifyMock.status}</p>
                  </div>

                  <p className="mt-3 text-center text-sm text-muted-foreground">
                    {t.verifyMock.offer}
                  </p>

                  <div className="mt-auto">
                    <div className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
                      {t.verifyMock.action}
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </motion.div>
          </div>
        </FadeIn>

        {/* Business message */}
        <FadeIn className="mx-auto mt-16 max-w-2xl text-center lg:mt-20">
          <motion.p
            variants={fadeUp}
            className="whitespace-pre-line text-2xl font-semibold leading-snug text-foreground text-balance sm:text-3xl"
          >
            {t.businessHeadline}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {t.businessSub}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="h-12 px-8 text-sm font-semibold shadow-md shadow-black/10"
              asChild
            >
              <a
                href={APP_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackRestauracjeCta("guest_club")}
              >
                {t.ctaPrimary}
                <ArrowRight size={16} />
              </a>
            </Button>
            <a
              href="#guest-club-flow"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
