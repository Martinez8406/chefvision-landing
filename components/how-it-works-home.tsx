"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { homeContent } from "@/lib/translations-home"

const stepImages = [
  "/images/step-create-menu.png",
  "/images/step-qr-stand-table.png",
  "/images/step-menu-languages.png",
  "/images/step-dish-story.png",
  "/images/hero-hotel-mockup.png",
]

export function HowItWorksHome() {
  const { locale } = useLanguage()
  const how = homeContent[locale].how

  return (
    <section id="jak-to-dziala" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {how.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground text-balance sm:text-4xl">
            {how.headline}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{how.sub}</p>
        </div>

        <div className="mt-16 flex flex-col gap-16 lg:gap-20">
          {how.steps.map((step: { title: string; desc: string }, index: number) => (
            <div
              key={step.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  {how.stepLabel} {index + 1}
                </span>
                <h3 className="text-2xl font-semibold text-foreground sm:text-[1.7rem]">
                  {step.title}
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>

              <div className="relative flex justify-center">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/5">
                  <Image
                    src={stepImages[index] ?? stepImages[0]}
                    alt={step.title}
                    width={620}
                    height={440}
                    className="h-auto w-full max-w-lg object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button size="lg" variant="outline" className="h-11 px-7 text-sm font-semibold" asChild>
            <Link href="/cennik">
              {how.cta}
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
