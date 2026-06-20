"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CircleCheck,
  LayoutGrid,
  Play,
  Plus,
  Smile,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { WhyChefVisionSection } from "@/components/why-chefvision-section"

const highlightIcons: LucideIcon[] = [LayoutGrid, Users, Smile, TrendingUp]

export function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative overflow-hidden bg-background pt-24 lg:pt-32">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 pb-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-12">
        <div className="flex flex-col gap-7">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Plus size={14} strokeWidth={2.5} />
              {h.badge}
            </span>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] text-foreground text-balance sm:text-5xl lg:text-[3.25rem]">
              {h.headlineBefore}
              <span className="text-primary">{h.headlineHighlight}</span>
              {h.headlineAfter}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {h.sub}
            </p>
          </div>

          <div className="grid max-w-xl grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {h.highlights.map((item: string, index: number) => {
              const Icon = highlightIcons[index] ?? LayoutGrid

              return (
                <div key={item} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-xs leading-snug text-foreground sm:text-sm">{item}</span>
                </div>
              )
            })}
          </div>

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

      <WhyChefVisionSection />
    </section>
  )
}
