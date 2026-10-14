"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { BenefitsNavDesktop, BenefitsNavMobile } from "@/components/benefits-nav"
import { homeContent } from "@/lib/translations-home"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, locale } = useLanguage()
  const nav = homeContent[locale].nav

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: nav.how, href: "/#jak-to-dziala" },
    { label: nav.forWhom, href: "/#dla-kogo" },
    { label: nav.pricing, href: "/cennik" },
    { label: nav.faq, href: "/faq" },
    { label: nav.comparison, href: "/porownanie" },
    { label: t.nav.materials, href: "/materialy" },
    { label: nav.about, href: "/about" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="ChefVision — strona główna">
          <span
            className="brand-logo-mark h-9 w-9 shrink-0 rounded-lg"
            aria-hidden
          />
          <span className="font-semibold text-lg text-foreground tracking-tight">
            Chef<span className="text-primary">Vision</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-x-4 xl:gap-x-6 lg:flex" aria-label="Główne">
          <Link
            href={navLinks[0].href}
            className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {navLinks[0].label}
          </Link>
          <BenefitsNavDesktop label={nav.whatYouGet} />
          {navLinks.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button size="sm" className="bg-primary text-primary-foreground hover:brightness-[0.93] font-medium px-5" asChild>
            <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
              {t.nav.cta}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher compact />
          <button
            className="rounded-md p-1 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex max-h-[calc(100dvh-4rem)] flex-col gap-4 overflow-y-auto border-b border-border bg-background/95 px-6 py-4 backdrop-blur-md lg:hidden">
          <Link
            href={navLinks[0].href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            {navLinks[0].label}
          </Link>
          <BenefitsNavMobile label={nav.whatYouGet} onNavigate={() => setMenuOpen(false)} />
          {navLinks.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
