"use client"

import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useCallback,
  ReactNode,
} from "react"
import { Locale, translations } from "./translations"

const STORAGE_KEY = "chefvision-locale"

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

function readStoredLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === "en" || saved === "pl" ? saved : "pl"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pl")
  const [mounted, setMounted] = useState(false)

  // useLayoutEffect — po mountcie DOM, przed malowaniem; unika ostrzeżenia React 19
  useLayoutEffect(() => {
    setLocaleState(readStoredLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
  }, [])

  const activeLocale = mounted ? locale : "pl"

  return (
    <LanguageContext.Provider
      value={{
        locale: activeLocale,
        t: translations[activeLocale],
        setLocale,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
