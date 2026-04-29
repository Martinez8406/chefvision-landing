import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Language flags */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { flag: "🇵🇱", lang: "Polski" },
                { flag: "🇬🇧", lang: "English" },
                { flag: "🇩🇪", lang: "Deutsch" },
                { flag: "🇺🇦", lang: "Українська" },
              ].map(({ flag, lang }) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary"
                >
                  {flag} {lang}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground text-balance font-serif">
              Twoi goście z Niemiec i Ukrainy{" "}
              <span className="text-primary">nie wiedzą, co zamawiają?</span>{" "}
              Rozwiązujemy to w 24 godziny.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              LinguaChef to cyfrowe menu QR, które automatycznie tłumaczy każde danie na 3 języki.
              Turysta rozumie opis, widzi profesjonalne zdjęcie — i zamawia więcej.{" "}
              <strong className="text-foreground">Bez tłumacza. Bez drukarni. Bez prowizji.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="https://app.linguachef.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/85 font-semibold px-8 gap-2 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/35 w-full sm:w-auto"
                >
                  Wypróbuj za darmo
                  <ArrowRight size={16} />
                </Button>
              </a>
              <a href="#beta-testing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/10 font-semibold px-8 w-full sm:w-auto"
                >
                  Zobacz ofertę beta
                </Button>
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              Pierwsze 20 restauracji — 1 miesiąc za darmo • Pełna wersja Premium bez zobowiązań
            </p>
          </div>

          {/* Right: Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden border-4 border-foreground/10 shadow-2xl bg-white mx-auto">
                {/* Menu header */}
                <div className="bg-primary px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-xs font-medium uppercase tracking-wider">Restauracja Stary Browar</p>
                      <p className="text-white font-bold text-lg">Menu</p>
                    </div>
                    <div className="flex gap-1">
                      {["🇵🇱","🇬🇧","🇩🇪","🇺🇦"].map(f => (
                        <span key={f} className="text-lg">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Dish cards */}
                {[
                  { name: "Żurek staropolski", en: "Traditional Polish sour rye soup", price: "24 zł", emoji: "🍲" },
                  { name: "Schabowy z kapustą", en: "Breaded pork cutlet with sauerkraut", price: "42 zł", emoji: "🥩" },
                  { name: "Pierogi ruskie", en: "Dumplings with potato & cheese", price: "32 zł", emoji: "🥟" },
                ].map((dish) => (
                  <div key={dish.name} className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                      {dish.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-900 truncate">{dish.name}</p>
                      <p className="text-xs text-gray-400 truncate italic">{dish.en}</p>
                    </div>
                    <span className="text-sm font-bold text-primary flex-shrink-0">{dish.price}</span>
                  </div>
                ))}
                {/* Bottom bar */}
                <div className="bg-gray-50 px-4 py-2.5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Powered by</span>
                  <span className="text-xs font-bold text-primary">LinguaChef</span>
                </div>
              </div>
              <p className="text-center text-sm mt-5 text-muted-foreground">
                Tak widzi menu Twój zagraniczny gość —
                w jego języku, w jego telefonie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
