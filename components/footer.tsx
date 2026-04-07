import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="ChefVision logo"
                width={32}
                height={32}
                className="rounded-lg"
                style={{ width: '32px', height: '32px' }}
              />
              <span className="font-semibold text-foreground">
                Chef<span className="text-primary">Vision</span>
                <span className="text-muted-foreground">.pl</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Platforma AI dla nowoczesnej gastronomii. Profesjonalne zdjęcia i cyfrowe menu — bez fotografa.
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

          {/* Produkt */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Produkt</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Funkcje", href: "#funkcje" },
                { label: "Cennik", href: "#cennik" },
                { label: "Przykłady", href: "#przyklady" },
                { label: "Nowości", href: "#" },
                { label: "Status", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Konto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Konto</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Zaloguj się", href: "https://chefvision.pl/login" },
                { label: "Zarejestruj się", href: "https://chefvision.pl/register" },
                { label: "Zapomniałem hasła", href: "#" },
                { label: "Dashboard", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wsparcie */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Wsparcie</h4>
            <ul className="flex flex-col gap-2.5">
              {["Centrum pomocy", "Kontakt", "Polityka prywatności", "Regulamin", "RODO"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2025 ChefVision.pl — Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            Stworzone z serca dla polskiej gastronomii
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
