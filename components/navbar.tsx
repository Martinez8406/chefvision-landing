"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
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
        <Link href="/" className="flex items-center gap-2.5" aria-label="ChefVision — strona główna">
          <span
            className="brand-logo-mark h-9 w-9 shrink-0 rounded-lg"
            aria-hidden
          />
          <span className="font-semibold text-lg text-foreground tracking-tight">
            Chef<span className="text-primary">Vision</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button size="sm" className="bg-primary text-primary-foreground hover:brightness-[0.93] font-medium px-5" asChild>
            <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
              {t.nav.cta}
            </a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher compact />
          <button
            className="text-foreground p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.label}
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
