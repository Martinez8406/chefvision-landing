"use client"

import { useLayoutEffect } from "react"
import { useLanguage, LOCALE_STORAGE_KEY } from "@/lib/language-context"
import { isLocale, SEGMENT_LOCALES, type Locale } from "@/lib/translations"

const ENGLISH_COUNTRIES = new Set([
  "GB",
  "US",
  "IE",
  "AU",
  "NZ",
  "CA",
])

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function primaryBrowserLang(): string {
  return (navigator.language || "").toLowerCase()
}

function browserPrefersCroatian(): boolean {
  const tags = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((tag) => tag.toLowerCase())

  return tags.some((tag) => tag === "hr" || tag.startsWith("hr-"))
}

function browserPrefersEnglish(): boolean {
  const primary = primaryBrowserLang()
  return primary === "en" || primary.startsWith("en-")
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

  if ((country && ENGLISH_COUNTRIES.has(country)) || browserPrefersEnglish()) {
    return "en"
  }

  return null
}

/**
 * Auto-język na /hotele:
 * 1) ?lang=hr|en|pl (link z reklamy)
 * 2) kraj HR / przeglądarka hr* → chorwacki
 * 3) kraje EN (GB, US, IE, AU, NZ, CA) / przeglądarka en* → angielski
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
