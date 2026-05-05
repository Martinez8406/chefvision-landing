"use client"

import Image from "next/image"
import { Play, Instagram, Youtube, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const DISH_STORY_VIDEO_URL = "https://www.youtube.com/shorts/34WoLlp3ZsA"

const platforms = [
  { icon: Youtube, label: "YouTube", color: "text-red-500" },
  { icon: Instagram, label: "Instagram", color: "text-pink-500" },
  { icon: Play, label: "TikTok", color: "text-foreground" },
]

export function MenuLiveSection() {
  const { t } = useLanguage()
  const ml = t.menuLive

  return (
    <section className="py-28 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary font-serif">
              {ml.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight font-serif">
              {ml.headline}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              {ml.text}
            </p>

            <ul className="flex flex-col gap-3">
              {ml.bullets.map((item: string) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Star size={10} className="text-primary fill-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-2.5 rounded-xl"
                asChild
              >
                <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
                  {ml.cta}
                </a>
              </Button>
            </div>
          </div>

          {/* Right: iPhone mockup with real screenshot */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative">
              <div
                className="absolute -inset-8"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.78 0.15 75 / 0.12) 0%, transparent 70%)",
                }}
              />
              <div className="relative w-[280px] rounded-[3rem] bg-[#f0ebe4] border-[8px] border-[#e2dbd2] shadow-xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#f5f5f5] rounded-b-2xl z-20" />
                <div style={{ position: 'relative', width: '100%', aspectRatio: '9 / 19.5', overflow: 'hidden' }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sssd-JoWYxCAbOJp0hrdOaiZbECjCZ2X99z.png"
                    alt="ChefVision Menu Live"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Historia dania — pod mockupem telefonu */}
            <div className="relative z-10 mt-8 w-full max-w-sm">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-xl">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                        {ml.storyLabel}
                      </span>
                      <a
                        href={DISH_STORY_VIDEO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {ml.storyText}
                      </a>
                    </div>
                    <span className="text-xs shrink-0 bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full border border-primary/20">
                      {ml.liveBadge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-xs text-muted-foreground">{ml.availableOn}</span>
                    <div className="flex items-center gap-2">
                      {platforms.map((p) => {
                        const PIcon = p.icon
                        return (
                          <div
                            key={p.label}
                            className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center"
                            title={p.label}
                          >
                            <PIcon size={14} className={p.color} />
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs font-semibold border-primary/30 text-primary hover:bg-primary/5"
                    asChild
                  >
                    <a href={DISH_STORY_VIDEO_URL} target="_blank" rel="noopener noreferrer">
                      <Play size={12} className="mr-1.5 fill-primary text-primary" />
                      {ml.behindScenes}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
