"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Locale, translations } from "./translations"

type LanguageContextType = {
  locale: Locale
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "pl",
  t: translations.pl,
  setLocale: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pl")

  useEffect(() => {
    const saved = localStorage.getItem("chefvision-locale") as Locale | null
    if (saved === "en" || saved === "pl") {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("chefvision-locale", newLocale)
  }

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
