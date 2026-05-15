"use client"

import Image from "next/image"
import { CircleCheck } from "lucide-react"

export function AppPreviewSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 items-center gap-14">
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

          {/* Right: zdjęcie telefonu */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <Image
                src="/images/telefon.png"
                alt="Menu gościa z rekomendacjami pairingów w aplikacji ChefVision"
                width={1024}
                height={1536}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
                <p className="text-xs font-medium text-muted-foreground">Wzrost rachunku</p>
                <p className="text-xl font-bold text-foreground">+25%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
