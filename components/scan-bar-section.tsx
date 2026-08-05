"use client"

import {
  Bell,
  Clapperboard,
  Languages,
  QrCode,
  Receipt,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { homeContent } from "@/lib/translations-home"

const itemIcons: LucideIcon[] = [QrCode, Languages, Clapperboard, Bell, Receipt]

export function ScanBarSection() {
  const { locale } = useLanguage()
  const bar = homeContent[locale].bar

  return (
    <section className="bg-gradient-to-r from-[#4d7c0f] to-[#7fbd04] py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{bar.headline}</h2>
          <p className="text-sm text-white/85 sm:text-base">{bar.sub}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {bar.items.map((item: string, index: number) => {
            const Icon = itemIcons[index] ?? QrCode

            return (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm sm:text-sm"
              >
                <Icon size={15} className="shrink-0" />
                {item}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
