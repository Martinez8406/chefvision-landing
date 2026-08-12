"use client"

import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useCallback,
  ReactNode,
} from "react"
import { Locale, translations, isLocale } from "./translations"

export const LOCALE_STORAGE_KEY = "chefvision-locale"

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
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY)
  return isLocale(saved) ? saved : "pl"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pl")
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => {
    setLocaleState(readStoredLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
  }, [])

  useLayoutEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale
    }
  }, [locale, mounted])

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
