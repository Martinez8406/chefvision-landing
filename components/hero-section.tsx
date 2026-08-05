"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CircleCheck, Play, QrCode } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { homeContent } from "@/lib/translations-home"

export function HeroSection() {
  const { t, locale } = useLanguage()
  const h = homeContent[locale].hero

  return (
    <section className="relative overflow-hidden bg-background pt-24 lg:pt-32">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-24">
        <div className="flex flex-col gap-7">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <QrCode size={14} strokeWidth={2.5} />
              {h.badge}
            </span>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] text-foreground text-balance sm:text-5xl lg:text-[3.4rem]">
              {h.headline}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {h.sub1}{" "}
              <span className="font-medium text-foreground">{h.sub2}</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-8 text-sm font-semibold shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15"
              asChild
            >
              <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
                {h.ctaPrimary}
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold" asChild>
              <a href="#jak-to-dziala">
                <Play size={16} />
                {h.ctaSecondary}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {t.hero.ctaTrust.map((item: string) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
                <CircleCheck size={14} className="shrink-0 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/images/hero-hotel-mockup.png"
            alt="ChefVision — aplikacja hotelowa na telefonie i kod QR dla gości"
            width={760}
            height={640}
            className="w-full max-w-xl object-contain drop-shadow-xl lg:max-w-none"
            priority
          />
        </div>
      </div>
    </section>
  )
}
