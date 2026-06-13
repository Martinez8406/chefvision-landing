"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { CHEFVISION_MENU_LANGUAGES } from "@/lib/chefvision-languages"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

function RecommendationBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
      {label}
    </span>
  )
}

export function HowItWorksSection() {
  const { t, locale } = useLanguage()
  const hiw = t.howItWorks
  const headerRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" })
  const touchStartX = useRef<number | null>(null)

  const [current, setCurrent] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)

  const [scene1, scene2, scene3] = hiw.scenes
  const badges = hiw.floatingBadges

  const slides = [
    {
      image: STORY_IMAGES[0],
      imageAlt: scene1.imageAlt,
      heading: scene1.heading,
      description: scene1.description,
      type: "scene" as const,
    },
    {
      image: STORY_IMAGES[1],
      imageAlt: scene2.imageAlt,
      heading: scene2.heading,
      description: scene2.description,
      type: "languages" as const,
    },
    {
      image: STORY_IMAGES[2],
      imageAlt: scene3.imageAlt,
      heading: scene3.heading,
      description: scene3.description,
      type: "badges" as const,
    },
    {
      image: STORY_IMAGES[3],
      imageAlt: hiw.finale.imageAlt,
      heading: hiw.finale.heading,
      description: hiw.finale.subheading,
      type: "finale" as const,
    },
  ]

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [slides.length])

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const updateWidth = () => {
      setSlideWidth(viewport.clientWidth)
    }

    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(viewport)
    window.addEventListener("resize", updateWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateWidth)
    }
  }, [])

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const touchEndX = event.changedTouches[0]?.clientX
    if (touchEndX === undefined) return

    const delta = touchStartX.current - touchEndX
    if (Math.abs(delta) > 50) {
      if (delta > 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }


  return (
    <section
      id="jak-dziala"
      className="relative scroll-mt-20 overflow-hidden bg-[#fafafa] pb-20 pt-24 sm:pb-24 sm:pt-28"
    >
      <motion.div
        ref={headerRef}
        className="mx-auto max-w-4xl px-6 pb-10 text-center sm:pb-12"
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

      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,32,0.15)]">
          <div
            ref={viewportRef}
            className="relative w-full overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: slideWidth > 0 ? slideWidth * slides.length : "100%",
                transform:
                  slideWidth > 0
                    ? `translate3d(-${current * slideWidth}px, 0, 0)`
                    : `translate3d(-${(current * 100) / slides.length}%, 0, 0)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.image}
                  className="shrink-0 grow-0"
                  style={{ width: slideWidth > 0 ? slideWidth : `${100 / slides.length}%` }}
                  aria-hidden={current !== index}
                >
                  <div className="grid lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
                    <div className="relative min-h-[220px] bg-muted/30 sm:min-h-[300px] lg:min-h-[420px]">
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={index === 0}
                      />
                      {slide.type === "finale" && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
                      )}

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between lg:hidden">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-9 w-9 rounded-full border-white/40 bg-white/90 shadow-md backdrop-blur-sm"
                          onClick={goPrev}
                          aria-label={locale === "pl" ? "Poprzedni slajd" : "Previous slide"}
                        >
                          <ChevronLeft size={18} />
                        </Button>
                        <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          {current + 1} / {slides.length}
                        </span>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-9 w-9 rounded-full border-white/40 bg-white/90 shadow-md backdrop-blur-sm"
                          onClick={goNext}
                          aria-label={locale === "pl" ? "Następny slajd" : "Next slide"}
                        >
                          <ChevronRight size={18} />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {locale === "pl" ? "Krok" : "Step"} {index + 1}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                          {slide.heading.split("\n").map((line, i) => (
                            <span key={line} className={cn(i > 0 && "block")}>
                              {line}
                            </span>
                          ))}
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                          {slide.description}
                        </p>
                      </div>

                      {slide.type === "languages" && (
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-muted-foreground">
                            {locale === "pl"
                              ? `${CHEFVISION_MENU_LANGUAGES.length} języków menu w ChefVision`
                              : `${CHEFVISION_MENU_LANGUAGES.length} menu languages in ChefVision`}
                          </p>
                          <div className="flex max-h-28 flex-wrap gap-1.5 overflow-y-auto sm:max-h-none sm:gap-2">
                            {CHEFVISION_MENU_LANGUAGES.map((lang) => (
                              <LanguageBadge key={lang.id} label={lang.badge} />
                            ))}
                          </div>
                        </div>
                      )}

                      {slide.type === "badges" && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {badges.map((label: string) => (
                            <RecommendationBadge key={label} label={label} />
                          ))}
                        </div>
                      )}

                      {slide.type === "finale" && (
                        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                          <Button size="lg" className="font-semibold shadow-md" asChild>
                            <a href="mailto:kontakt@chefvision.pl?subject=Demo%20ChefVision">
                              {hiw.finale.ctaDemo}
                            </a>
                          </Button>
                          <Button size="lg" variant="outline" className="font-semibold" asChild>
                            <a
                              href="https://app.chefvision.pl"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {hiw.finale.ctaTry}
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-border/70 bg-muted/20 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={goPrev}
                aria-label={locale === "pl" ? "Poprzedni slajd" : "Previous slide"}
              >
                <ChevronLeft size={18} />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={goNext}
                aria-label={locale === "pl" ? "Następny slajd" : "Next slide"}
              >
                <ChevronRight size={18} />
              </Button>
            </div>

            <div className="flex flex-1 items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`${locale === "pl" ? "Przejdź do slajdu" : "Go to slide"} ${index + 1}`}
                  aria-current={current === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    current === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/40"
                  )}
                />
              ))}
            </div>

            <span className="hidden text-sm font-medium text-muted-foreground sm:block">
              {current + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
