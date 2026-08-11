"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { APP_SIGNUP_URL, trackHoteleCta } from "@/lib/hotele-analytics"

const navLinks = [
  { label: "Funkcje", href: "#funkcje" },
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Dla hoteli", href: "#dla-hoteli" },
  { label: "O nas", href: "#o-nas" },
]

export function HoteleNavbar() {
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/hotele" className="flex items-center gap-2.5" aria-label="ChefVision dla hoteli">
          <span className="brand-logo-mark h-9 w-9 shrink-0 rounded-lg" aria-hidden />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Chef<span className="text-primary">Vision</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
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
              Sprawdź ChefVision
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="p-1 text-foreground md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="flex flex-col gap-4 border-b border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.label}
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
              Sprawdź ChefVision
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  )
}
