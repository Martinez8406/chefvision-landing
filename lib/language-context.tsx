"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Locale, translations } from "./translations"

type LanguageContextType = {
  locale: Locale
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
  setLocale: (locale: Locale) => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "pl",
  t: translations.pl,
  setLocale: () => {},
  mounted: false,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pl")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("chefvision-locale") as Locale | null
    if (saved === "en" || saved === "pl") {
      setLocaleState(saved)
    }
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("chefvision-locale", newLocale)
  }

  // When not yet mounted (SSR / first paint), always return "pl" translations
  // to avoid hydration mismatch. After mount, return the saved locale.
  const activeLocale = mounted ? locale : "pl"

  return (
    <LanguageContext.Provider value={{
      locale: activeLocale,
      t: translations[activeLocale],
      setLocale,
      mounted,
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
