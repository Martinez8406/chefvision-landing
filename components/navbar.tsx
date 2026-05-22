"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Locale } from "@/lib/translations"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, locale, setLocale } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.features, href: "#menu-live" },
    { label: t.nav.beta, href: "#beta-testing" },
    { label: t.nav.examples, href: "#przyklady" },
    { label: t.nav.about, href: "#onas" },
  ]

  const toggleLocale = () => {
    const next: Locale = locale === "pl" ? "en" : "pl"
    setLocale(next)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="ChefVision — strona główna">
          <span
            className="brand-logo-mark h-9 w-9 shrink-0 rounded-lg"
            aria-hidden
          />
          <span className="font-semibold text-lg text-foreground tracking-tight">
            Chef<span className="text-primary">Vision</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Language switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 text-xs font-semibold border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label="Switch language"
          >
            <span className={locale === "pl" ? "text-foreground font-bold" : "text-muted-foreground"}>PL</span>
            <span className="text-muted-foreground/40 mx-0.5">/</span>
            <span className={locale === "en" ? "text-foreground font-bold" : "text-muted-foreground"}>EN</span>
          </button>

          <Button size="sm" className="bg-primary text-primary-foreground hover:brightness-[0.93] font-medium px-5" asChild>
            <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
              {t.nav.cta}
            </a>
          </Button>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 text-xs font-semibold border border-border rounded-full px-2.5 py-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Switch language"
          >
            <span className={locale === "pl" ? "text-foreground font-bold" : "text-muted-foreground"}>PL</span>
            <span className="text-muted-foreground/40 mx-0.5">/</span>
            <span className={locale === "en" ? "text-foreground font-bold" : "text-muted-foreground"}>EN</span>
          </button>
          <button
            className="text-foreground p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <hr className="border-border" />
          <Button size="sm" className="bg-primary text-primary-foreground w-full font-medium" asChild>
            <a
              href="https://app.chefvision.pl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.cta}
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
