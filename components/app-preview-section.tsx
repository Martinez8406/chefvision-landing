"use client"
import { CircleCheck, Plus } from "lucide-react"

export function AppPreviewSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border-2 border-primary bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Inteligentne rekomendacje
            </span>
            <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl text-balance">
              Sprzedawaj więcej dzięki inteligentnym sugestiom
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Dodawaj pairingi, zestawy i sugestie, które widzi gość w menu. Pokaż, co warto dobrać do dania i zwiększ jego satysfakcję — oraz wartość zamówienia.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Pairingi dań z winami, napojami i dodatkami",
                "Zestawy promocyjne (np. Burger + Cola + Frytki -15%)",
                "Informacje 'Inni goście wybrali to danie z...'",
                "Promuj wysokomarżowe produkty",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted">
                    <CircleCheck size={13} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: app mockup */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-sm rounded-3xl border border-border bg-card shadow-2xl shadow-black/10 overflow-hidden">
              {/* Header */}
              <div className="bg-muted/50 border-b border-border px-5 py-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground">Menu gościa</span>
              </div>

              {/* Dish card */}
              <div className="p-5">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-background border-2 border-primary px-3 py-1 text-xs font-semibold text-primary mb-4">
                  <CircleCheck size={12} />
                  Goście często wybierają
                </div>

                {/* Dish image placeholder */}
                <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center mb-4 overflow-hidden">
                  <div className="text-center">
                    <div className="text-4xl mb-1">🍝</div>
                    <p className="text-xs font-semibold text-amber-800">Spaghetti Carbonara</p>
                  </div>
                </div>

                {/* Dish info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-foreground">Spaghetti Carbonara</h3>
                    <span className="font-bold text-primary">42,00 zł</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Spaghetti z boczkiem, jajkiem, parmezanem i pieprzem.</p>
                </div>

                {/* Pairing recommendation */}
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold text-primary mb-3">Polecane do tego dania</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-white border border-border flex items-center justify-center text-lg">
                        🍷
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Wino białe wytrawne</p>
                        <p className="text-xs text-muted-foreground">Pinot Grigio</p>
                        <p className="text-xs font-bold text-primary mt-0.5">22,00 zł</p>
                      </div>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground hover:brightness-[0.93] transition-all">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* CTA button */}
                <button className="mt-4 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:brightness-[0.93] transition-all">
                  Dodaj do zamówienia
                </button>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
              <p className="text-xs font-medium text-muted-foreground">Wzrost rachunku</p>
              <p className="text-xl font-bold text-foreground">+25%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
