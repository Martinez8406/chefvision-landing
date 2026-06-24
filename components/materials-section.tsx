"use client"

import Image from "next/image"
import { Download, FileImage } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function MaterialsSection() {
  const { t } = useLanguage()
  const m = t.materials

  return (
    <section className="border-y border-border bg-gradient-to-b from-background to-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {m.badge}
          </span>
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-bold text-foreground text-balance font-serif sm:text-4xl lg:text-5xl">
            {m.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.sub}
          </p>
        </div>

        <p className="mx-auto mb-10 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-center text-sm leading-relaxed text-foreground sm:text-base">
          {m.info}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {m.items.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 via-violet-500/10 to-primary/5">
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                    className="bg-white object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-primary/60">
                    <FileImage size={40} strokeWidth={1.5} />
                    <span className="text-xs font-medium uppercase tracking-[0.12em]">{m.placeholderLabel}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-foreground font-serif">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <Button
                  asChild
                  className="mt-5 w-full bg-primary text-primary-foreground hover:brightness-[0.93]"
                >
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    <Download size={16} className="mr-2" />
                    {m.downloadBtn}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
