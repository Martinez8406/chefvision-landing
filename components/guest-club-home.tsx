"use client"

import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Mail,
  RotateCcw,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { homeContent } from "@/lib/translations-home"

const stepIcons: LucideIcon[] = [BadgeCheck, Mail, RotateCcw, CheckCircle2]

export function GuestClubHome() {
  const { locale } = useLanguage()
  const t = homeContent[locale].guestClub

  return (
    <section id="klub-gosci" className="scroll-mt-20 border-t border-border bg-card py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {t.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground text-balance sm:text-4xl">
            {t.headline}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{t.sub}</p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, index) => {
            const Icon = stepIcons[index] ?? BadgeCheck

            return (
              <li
                key={step.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7fbd04] to-[#4d7c0f]">
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {index + 1}
                </p>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            )
          })}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="h-11 px-7 text-sm font-semibold" asChild>
            <Link href="/restauracje#guest-club">
              {t.ctaPrimary}
              <ArrowRight size={16} />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-11 px-7 text-sm font-semibold" asChild>
            <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
              {t.ctaSecondary}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
