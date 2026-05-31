"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { CHEFVISION_MENU_LANGUAGES } from "@/lib/chefvision-languages"
import { StoryFinale, StoryScene } from "@/components/StoryScene"

const STORY_IMAGES = [
  "/images/story/scene-1-confused-guest.png",
  "/images/story/scene-2-qr-translation.png",
  "/images/story/scene-3-recommendations.png",
  "/images/story/scene-4-happy-ending.png",
] as const

const ease = [0.22, 1, 0.36, 1] as const

function LanguageBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/80 bg-white/90 px-2.5 py-1 text-[11px] font-medium tracking-wide text-foreground shadow-sm backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
      {label}
    </span>
  )
}

function FloatingBadge({
  label,
  className,
  delay = 0,
}: {
  label: string
  className?: string
  delay?: number
}) {
  return (
    <motion.span
      className={`inline-flex items-center rounded-full border border-primary/20 bg-white/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md shadow-primary/10 backdrop-blur-sm ${className ?? ""}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
      {label}
    </motion.span>
  )
}

export function HowItWorksSection() {
  const { t, locale } = useLanguage()
  const hiw = t.howItWorks
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" })

  const [scene1, scene2, scene3] = hiw.scenes

  const badges = hiw.floatingBadges

  return (
    <section
      id="jak-dziala"
      className="relative scroll-mt-20 overflow-hidden bg-[#fafafa]"
    >

      <motion.div
        ref={headerRef}
        className="mx-auto max-w-4xl px-6 pb-8 pt-24 text-center sm:pt-28 lg:pt-32"
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.65, ease }}
      >
        <span className="mb-6 inline-flex rounded-full border border-border/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {hiw.badge}
        </span>
        <h2 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
          {hiw.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {hiw.subheadline}
        </p>
      </motion.div>

      <StoryScene
        imageSrc={STORY_IMAGES[0]}
        imageAlt={scene1.imageAlt}
        heading={scene1.heading}
        description={scene1.description}
        imagePosition="left"
      />

      <StoryScene
        imageSrc={STORY_IMAGES[1]}
        imageAlt={scene2.imageAlt}
        heading={scene2.heading}
        description={scene2.description}
        imagePosition="right"
      >
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            {locale === "pl"
              ? `${CHEFVISION_MENU_LANGUAGES.length} języków menu w ChefVision`
              : `${CHEFVISION_MENU_LANGUAGES.length} menu languages in ChefVision`}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {CHEFVISION_MENU_LANGUAGES.map((lang) => (
              <LanguageBadge key={lang.id} label={lang.badge} />
            ))}
          </div>
        </div>
      </StoryScene>

      <StoryScene
        imageSrc={STORY_IMAGES[2]}
        imageAlt={scene3.imageAlt}
        heading={scene3.heading}
        description={scene3.description}
        imagePosition="left"
      >
        <div className="relative flex min-h-[3rem] flex-wrap gap-3 pt-2">
          <FloatingBadge label={badges[0]} delay={0} />
          <FloatingBadge label={badges[1]} className="sm:ml-4" delay={0.6} />
          <FloatingBadge label={badges[2]} className="sm:ml-2" delay={1.2} />
        </div>
      </StoryScene>

      <StoryFinale
        imageSrc={STORY_IMAGES[3]}
        imageAlt={hiw.finale.imageAlt}
        heading={hiw.finale.heading}
        subheading={hiw.finale.subheading}
        ctaDemo={hiw.finale.ctaDemo}
        ctaTry={hiw.finale.ctaTry}
      />
    </section>
  )
}
