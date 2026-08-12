"use client"

import { ArrowRight } from "lucide-react"
import { APP_SIGNUP_URL, trackHoteleCta } from "@/lib/hotele-analytics"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent, getHoteleDemoMailto } from "@/lib/translations-hotele"

export function HotelFinalCTA() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).finalCta

  return (
    <section className="bg-[#5a8f0a] py-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 text-center sm:gap-6">
        <h2 className="text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
          {t.headline}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">{t.text}</p>
        <div className="max-w-xl space-y-2 text-sm leading-relaxed text-white/90 sm:text-base">
          <p>{t.p1}</p>
          <p>
            {t.p2a}
            <br />
            {t.p2b}
          </p>
        </div>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={getHoteleDemoMailto(locale)}
            onClick={() => trackHoteleCta("final_demo")}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-8 text-sm font-semibold text-[#3f6212] shadow-md transition-colors hover:bg-white/95"
          >
            {t.ctaDemo}
            <ArrowRight size={16} />
          </a>
          <a
            href={APP_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackHoteleCta("final_trial")}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/45 bg-transparent px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t.ctaTrial}
          </a>
        </div>
      </div>
    </section>
  )
}
