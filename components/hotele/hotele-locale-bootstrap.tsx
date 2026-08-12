"use client"

import { useLayoutEffect } from "react"
import { useLanguage, LOCALE_STORAGE_KEY } from "@/lib/language-context"
import { isLocale, SEGMENT_LOCALES, type Locale } from "@/lib/translations"

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function browserPrefersCroatian(): boolean {
  const tags = [
    navigator.language,
    ...(navigator.languages ?? []),
  ]
    .filter(Boolean)
    .map((tag) => tag.toLowerCase())

  return tags.some((tag) => tag === "hr" || tag.startsWith("hr-"))
}

function resolveHoteleLocale(): Locale | null {
  const params = new URLSearchParams(window.location.search)
  const langParam = params.get("lang")?.toLowerCase()
  if (langParam && isLocale(langParam) && SEGMENT_LOCALES.includes(langParam)) {
    return langParam
  }

  // Szanuj ręczny wybór użytkownika (już zapisany w localStorage).
  if (localStorage.getItem(LOCALE_STORAGE_KEY)) {
    return null
  }

  const country = readCookie("cv-country")?.toUpperCase()
  if (country === "HR" || browserPrefersCroatian()) {
    return "hr"
  }

  return null
}

/**
 * Auto-język na /hotele:
 * 1) ?lang=hr|en|pl (np. link z reklamy)
 * 2) kraj HR (cookie z middleware / Vercel geo)
 * 3) język przeglądarki hr*
 *
 * Nie nadpisuje ręcznie wybranego języka z localStorage
 * (chyba że użyto ?lang=…).
 */
export function HoteleLocaleBootstrap() {
  const { setLocale, mounted } = useLanguage()

  useLayoutEffect(() => {
    if (!mounted) return

    const next = resolveHoteleLocale()
    if (next) {
      setLocale(next)
    }
  }, [mounted, setLocale])

  return null
}
