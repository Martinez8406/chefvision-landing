"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, fadeUp } from "@/components/hotele/hotele-motion"
import { SignupButton } from "@/components/hotele/hotele-cta"
import { useLanguage } from "@/lib/language-context"
import { getHoteleContent } from "@/lib/translations-hotele"

export function HotelHero() {
  const { locale } = useLanguage()
  const t = getHoteleContent(locale).hero

  return (
    <section className="relative overflow-hidden bg-background pt-24 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(127,189,4,0.08),_transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-14 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-24">
        <FadeIn className="flex flex-col gap-6">
          <motion.span
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
          >
            <Building2 size={14} strokeWidth={2.5} />
            {t.badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="max-w-xl text-4xl font-bold leading-[1.08] text-foreground text-balance sm:text-5xl lg:text-[3.35rem]"
          >
            {t.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.sub}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-sm leading-relaxed text-foreground/80 sm:text-base"
          >
            {t.support}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <SignupButton
              location="hero_primary"
              className="h-12 px-8 text-sm font-semibold shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15"
            >
              {t.ctaPrimary}
              <ArrowRight size={16} />
            </SignupButton>
            <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-semibold" asChild>
              <a href="#funkcje">
                <Play size={16} />
                {t.ctaSecondary}
              </a>
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground">
            {t.trust}
          </motion.p>
        </FadeIn>

        <FadeIn className="relative flex justify-center lg:justify-end">
          <motion.div variants={fadeUp} className="relative w-full max-w-xl overflow-hidden rounded-2xl lg:max-w-none">
            <Image
              src="/images/hero-hotel-mockup.png"
              alt={t.imageAlt}
              width={820}
              height={720}
              className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              priority
            />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
