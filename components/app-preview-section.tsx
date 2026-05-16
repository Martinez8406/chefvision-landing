"use client"

import Image from "next/image"
import { CircleCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AppPreviewSection() {
  const { t } = useLanguage()
  const ap = t.appPreview

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 items-center gap-14">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border-2 border-primary bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {ap.badge}
            </span>
            <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl text-balance">
              {ap.headline}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">{ap.text}</p>
            <ul className="flex flex-col gap-3">
              {ap.bullets.map((item: string) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                    <CircleCheck size={13} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center overflow-visible pl-10 sm:pl-14 lg:justify-end lg:pl-0">
            <div className="relative w-full max-w-xs sm:max-w-sm overflow-visible">
              <Image
                src="/images/hjkllll.png"
                alt={ap.imageAlt}
                width={876}
                height={1796}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />

              <div
                className="absolute z-10 top-[38%] -translate-y-1/2 max-w-[9.5rem] sm:max-w-[11rem] -left-1 sm:-left-6 lg:-left-14"
                role="note"
              >
                <div className="relative rounded-2xl border-2 border-primary bg-card px-3 py-2.5 shadow-lg">
                  <p className="text-xs sm:text-sm font-medium text-foreground leading-snug text-center">
                    {ap.bubbleText}
                  </p>
                  <span
                    className="pointer-events-none absolute -right-[7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-primary bg-card"
                    aria-hidden
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
                <p className="text-xs font-medium text-muted-foreground">{ap.floatLabel}</p>
                <p className="text-xl font-bold text-foreground">{ap.floatValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
