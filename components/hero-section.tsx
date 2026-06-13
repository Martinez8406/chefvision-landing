"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CircleCheck, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative overflow-hidden bg-background pt-24 lg:pt-32">
      <div className="absolute -left-44 top-16 h-80 w-80 rounded-full bg-muted blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-muted blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-7">
          <div className="space-y-4">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
              {h.freeQrBadge}
            </span>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.05] text-foreground text-balance font-serif sm:text-5xl lg:text-6xl">
              {h.headlineBefore}
              <span className="text-primary">{h.headlineHighlight}</span>
              {h.headlineAfter}
            </h1>
            <p className="max-w-xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
              {h.freeQrSub}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {h.sub}
            </p>
          </div>

          <ul className="flex max-w-xl flex-col gap-3">
            {h.trust.map((item: string) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                <CircleCheck size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-7 text-sm font-semibold shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15"
              asChild
            >
              <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
                {h.cta1}
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-7 text-sm font-semibold" asChild>
              <a href="#menu-live">
                <Play size={16} />
                {h.cta2}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {h.ctaTrust.map((item: string) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
                <CircleCheck size={14} className="shrink-0 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-3">
          <div className="relative rounded-2xl border border-border/70 bg-card p-2 shadow-xl shadow-black/10 sm:rounded-3xl sm:p-4">
            <div className="relative overflow-hidden rounded-xl border border-border sm:rounded-2xl">
              <Image
                src="/images/ChatGPT Image 15 maj 2026, 22_07_19.png"
                alt="ChefVision — menu gościa na telefonie i panel managera na tablecie"
                width={1424}
                height={1105}
                className="w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Mobile: statystyki pod zdjęciem — bez zasłaniania */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden">
            <div className="rounded-xl border border-border bg-card px-3 py-2.5 shadow-sm">
              <p className="text-[10px] font-medium leading-tight text-muted-foreground sm:text-xs">
                {h.floatLabel1}
              </p>
              <p className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">{h.floatVal1}</p>
            </div>
            <div className="rounded-xl border border-border bg-card px-3 py-2.5 shadow-sm">
              <p className="text-[10px] font-medium leading-tight text-muted-foreground sm:text-xs">
                {h.floatLabel2}
              </p>
              <p className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">{h.floatVal2}</p>
            </div>
          </div>

          {/* Desktop: karty na rogach zdjęcia */}
          <div className="absolute -left-3 top-6 hidden max-w-[11rem] rounded-xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur lg:block">
            <p className="text-xs font-medium text-muted-foreground">{h.floatLabel1}</p>
            <p className="text-lg font-semibold text-foreground">{h.floatVal1}</p>
          </div>

          <div className="absolute -bottom-4 right-5 hidden max-w-[12rem] rounded-xl border border-border bg-card px-4 py-3 shadow-lg lg:block">
            <p className="text-xs font-medium text-muted-foreground">{h.floatLabel2}</p>
            <p className="text-lg font-semibold text-foreground">{h.floatVal2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
