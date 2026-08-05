"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { homeContent } from "@/lib/translations-home"

export function FinalCtaSection() {
  const { locale } = useLanguage()
  const cta = homeContent[locale].finalCta

  return (
    <section className="bg-gradient-to-r from-[#4d7c0f] to-[#7fbd04] py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-bold text-white text-balance sm:text-4xl">
          {cta.headline}
        </h2>
        <p className="max-w-xl text-sm text-white/85 sm:text-base">{cta.sub}</p>
        <Button
          size="lg"
          className="h-12 bg-white px-8 text-sm font-semibold text-[#3f6212] shadow-md hover:bg-white/90"
          asChild
        >
          <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
            {cta.btn}
            <ArrowRight size={16} />
          </a>
        </Button>
      </div>
    </section>
  )
}
