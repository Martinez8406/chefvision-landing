"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type HelpVideo = {
  youtubeId: string
  youtubeUrl?: string
  title: string
  description: string
  category: string
}

function getYoutubeUrl(video: HelpVideo) {
  return video.youtubeUrl ?? `https://www.youtube.com/watch?v=${video.youtubeId}`
}

function isShort(video: HelpVideo) {
  return video.youtubeUrl?.includes("/shorts/") ?? false
}

export function HelpCenterSection() {
  const { t } = useLanguage()
  const hc = t.helpCenter
  const [activeVideo, setActiveVideo] = useState<HelpVideo | null>(null)

  const categories = [
    { id: "all", label: hc.categories.all },
    { id: "introduction", label: hc.categories.introduction },
    { id: "menu", label: hc.categories.menu },
    { id: "promotions", label: hc.categories.promotions },
    { id: "account", label: hc.categories.account },
  ]

  const filterVideos = (category: string) =>
    category === "all"
      ? hc.videos
      : hc.videos.filter((video) => video.category === category)

  return (
    <section className="py-20 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary font-serif">
            {hc.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-4 text-balance font-serif">
            {hc.headline}
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            {hc.sub}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 mx-auto flex flex-wrap h-auto gap-1">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterVideos(category.id).map((video) => (
                  <button
                    key={`${video.youtubeId}-${video.title}`}
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="text-left group"
                  >
                    <Card className="overflow-hidden py-0 gap-0 border-border hover:border-primary/50 transition-colors h-full">
                      <CardContent className="p-0">
                        <AspectRatio ratio={16 / 9}>
                          <div className="relative w-full h-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                              alt={video.title}
                              className="absolute inset-0 w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                              <span className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                <Play size={22} className="text-primary-foreground fill-primary-foreground ml-0.5" />
                              </span>
                            </div>
                          </div>
                        </AspectRatio>
                        <div className="p-5">
                          <h3 className="font-semibold text-foreground leading-snug mb-2">
                            {video.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {video.description}
                          </p>
                          <a
                            href={getYoutubeUrl(video)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            {hc.watchOnYoutube} →
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden gap-0">
          {activeVideo && (
            <>
              <DialogHeader className="px-6 pt-6 pb-4">
                <DialogTitle className="font-serif text-xl pr-8">
                  {activeVideo.title}
                </DialogTitle>
              </DialogHeader>
              <AspectRatio ratio={isShort(activeVideo) ? 9 / 16 : 16 / 9}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </AspectRatio>
              <div className="px-6 py-4 border-t border-border">
                <a
                  href={getYoutubeUrl(activeVideo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {hc.watchOnYoutube} →
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
