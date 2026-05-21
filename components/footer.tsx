"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span
                className="brand-logo-mark h-8 w-8 shrink-0 rounded-lg"
                aria-hidden
              />
              <span className="font-semibold text-foreground">
                Chef<span className="text-primary">Vision</span>
                <span className="text-muted-foreground">.pl</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {f.tagline}
            </p>
            <div className="flex items-center gap-3 pt-1">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">{f.product}</h4>
            <ul className="flex flex-col gap-2.5">
              {f.productLinks.map((item: { label: string; href: string }) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">{f.support}</h4>
            <ul className="flex flex-col gap-2.5">
              {f.supportLinks.map((item: { label: string; href: string }) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {f.copy}
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            {f.madeWith}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-label="Flaga Polski">
              <rect width="16" height="6" fill="#fff"/>
              <rect y="6" width="16" height="6" fill="#DC143C"/>
            </svg>
          </p>
        </div>
      </div>
    </footer>
  )
}
