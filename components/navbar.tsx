"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="LinguaChef logo"
            width={36}
            height={36}
            className="rounded-lg"
            style={{ width: '36px', height: '36px' }}
            priority
            loading="eager"
          />
          <span className="font-semibold text-lg text-foreground tracking-tight">
            Lingua<span className="text-primary">Chef</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Funkcje", href: "#funkcje" },
            { label: "Testy beta", href: "#beta-testing" },
            { label: "Przykłady", href: "#przyklady" },
            { label: "O mnie", href: "#omnie" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-5" asChild>
            <a href="https://app.linguachef.com" target="_blank" rel="noopener noreferrer">
              Zacznij za darmo
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Funkcje", href: "#funkcje" },
            { label: "Testy beta", href: "#beta-testing" },
            { label: "Przykłady", href: "#przyklady" },
            { label: "O mnie", href: "#omnie" },
          ].map((item) => (
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
              href="https://app.linguachef.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Zacznij za darmo
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
