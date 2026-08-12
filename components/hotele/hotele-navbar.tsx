"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"
import { SEGMENT_LOCALES } from "@/lib/translations"
import { getHoteleContent } from "@/lib/translations-hotele"
import { APP_SIGNUP_URL, trackHoteleCta } from "@/lib/hotele-analytics"

export function HoteleNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale } = useLanguage()
  const t = getHoteleContent(locale)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.features, href: "#funkcje" },
    { label: t.nav.how, href: "#jak-to-dziala" },
    { label: t.nav.forHotels, href: "#dla-hoteli" },
    { label: t.nav.about, href: "#o-nas" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/hotele" className="flex items-center gap-2.5" aria-label={t.nav.logoAria}>
          <span className="brand-logo-mark h-9 w-9 shrink-0 rounded-lg" aria-hidden />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Chef<span className="text-primary">Vision</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher locales={SEGMENT_LOCALES} />
          <Button
            size="sm"
            className="bg-primary px-5 font-medium text-primary-foreground hover:brightness-[0.93]"
            asChild
          >
            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackHoteleCta("navbar")}
            >
              {t.nav.cta}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher compact locales={SEGMENT_LOCALES} />
          <button
            type="button"
            className="p-1 text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t.nav.menuToggle}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="flex flex-col gap-4 border-b border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button size="sm" className="w-full bg-primary font-medium text-primary-foreground" asChild>
            <a
              href={APP_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackHoteleCta("navbar_mobile")
                setMenuOpen(false)
              }}
            >
              {t.nav.cta}
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  )
}
