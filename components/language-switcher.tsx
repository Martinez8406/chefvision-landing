"use client"

import { useEffect, useRef, useState } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LOCALES, type Locale } from "@/lib/translations"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const current = LOCALES.find((item) => item.id === locale) ?? LOCALES[2]

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const selectLocale = (next: Locale) => {
    setLocale(next)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex items-center gap-1.5 rounded-full border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
          compact ? "px-2.5 py-1 text-xs font-semibold" : "px-3 py-1.5 text-xs font-semibold"
        )}
        aria-label="Switch language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe size={14} className="shrink-0 opacity-70" />
        <span className="text-foreground">
          {current.code} {current.label}
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-border bg-background py-1 shadow-lg"
        >
          {LOCALES.map((item) => {
            const selected = item.id === locale
            return (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => selectLocale(item.id)}
                className={cn(
                  "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",
                  selected
                    ? "bg-gradient-to-r from-[#7fbd04] to-[#4d7c0f] font-medium text-white"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <span
                  className={cn(
                    "w-6 shrink-0 text-xs font-semibold",
                    selected ? "text-white/80" : "text-muted-foreground"
                  )}
                >
                  {item.code}
                </span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
