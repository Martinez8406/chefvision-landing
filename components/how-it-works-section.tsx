"use client"
import { QrCode, Sparkles, ShoppingCart, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: QrCode,
    number: "1",
    title: "Gość skanuje QR",
    desc: "Otwiera menu w swoim języku na telefonie.",
  },
  {
    icon: Sparkles,
    number: "2",
    title: "Otrzymuje rekomendacje",
    desc: "Asystent podpowiada dodatki, napoje, wina i zestawy.",
  },
  {
    icon: ShoppingCart,
    number: "3",
    title: "Składa większe zamówienie",
    desc: "Pokazuje kelnerowi co chce zamówić — w tym polecane dodatki i napoje.",
  },
  {
    icon: TrendingUp,
    number: "4",
    title: "Ty zwiększasz zyski",
    desc: "Większy rachunek, zadowolony gość, mniej pracy dla obsługi.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl">
            Jak to działa?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center gap-4">
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-border z-0" />
              )}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                <step.icon size={28} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{step.number}.</p>
                <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
