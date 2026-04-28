"use client"

import { Play, Instagram, Youtube, Link2, ChefHat, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    icon: ChefHat,
    title: "Nagrywasz w kuchni",
    description:
      "Krótkie wideo z przygotowania dania — wystarczy telefon. Bez sprzętu, bez studia. Autentyczność jest tu największą wartością.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Podpinasz link do dania",
    description:
      "W panelu ChefVision do każdej pozycji w menu dodajesz link do YouTube, TikToka lub Instagrama. Jeden klik — gotowe.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Gość skanuje QR i zagląda za kulisy",
    description:
      "Przeglądając menu, gość widzi ikonę wideo przy daniu. Klika i w sekundę ogląda, jak jego potrawa powstaje w Twojej kuchni.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Budujesz więź, której nie kupisz za pieniądze",
    description:
      "Gość, który widział Twoje ręce przy pracy, nie jest już anonimowym klientem. Jest kimś, kto zna Twoją historię.",
  },
]

const platforms = [
  { icon: Youtube, label: "YouTube", color: "text-red-500" },
  { icon: Instagram, label: "Instagram", color: "text-pink-500" },
  { icon: Play, label: "TikTok", color: "text-foreground" },
]

export function DishStorySection() {
  return (
    <section className="py-28 bg-background overflow-hidden" id="historia-dania">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary font-serif">
            Wstęp za kulisy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance max-w-3xl font-serif leading-tight">
            Podziel się historią swojego dania
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            Goście nie kupują tylko jedzenia — kupują emocje i autentyczność. ChefVision pozwala podpiąć do każdego dania w cyfrowym menu link do wideo z kuchni. Jeden skan kodu QR i gość widzi, jak jego potrawa powstaje.
          </p>
        </div>

        {/* Main content: steps + visual */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left: Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex gap-5 group">
                  {/* Number + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-3" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pb-8 flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-primary/60 uppercase tracking-widest">
                      Krok {step.number}
                    </span>
                    <h3 className="text-base font-semibold text-foreground font-serif">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Visual card mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">

              {/* Glow */}
              <div
                className="absolute -inset-8 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.78 0.15 75 / 0.10) 0%, transparent 70%)",
                }}
              />

              {/* Card: menu item with video link */}
              <div className="relative rounded-2xl border border-border bg-card shadow-xl overflow-hidden">

                {/* Dish image placeholder */}
                <div className="relative w-full aspect-video bg-secondary flex items-center justify-center overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />

                  {/* Dish name overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-white font-semibold text-lg font-serif">Risotto z truflami</p>
                    <p className="text-white/70 text-sm">Kuchnia włoska • 28 zł</p>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                      <Play size={22} className="text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Background pattern to simulate dish photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-amber-700/30 to-amber-950/50" />
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle at 30% 40%, oklch(0.7 0.15 60) 0%, transparent 50%), radial-gradient(circle at 70% 60%, oklch(0.5 0.1 40) 0%, transparent 50%)"
                    }}
                  />
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                        Historia dania
                      </span>
                      <p className="text-sm text-foreground font-medium">
                        Obejrzyj, jak powstaje Twoje danie
                      </p>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full border border-primary/20">
                      Live
                    </span>
                  </div>

                  {/* Platform icons */}
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-xs text-muted-foreground">Dostępne na:</span>
                    <div className="flex items-center gap-2">
                      {platforms.map((p) => {
                        const PIcon = p.icon
                        return (
                          <div
                            key={p.label}
                            className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center"
                            title={p.label}
                          >
                            <PIcon size={14} className={p.color} />
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs font-semibold border-primary/30 text-primary hover:bg-primary/5"
                    >
                      <Play size={12} className="mr-1.5 fill-primary text-primary" />
                      Zaglądam za kulisy
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-primary/30">
                Nowe
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Why it works — 3 columns */}
        <div className="border-t border-border pt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10">
            Dlaczego to buduje lojalność klientów
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                stat: "3×",
                label: "większe zaangażowanie",
                desc: "Wideo przy daniu sprawia, że goście spędzają 3 razy więcej czasu na przeglądaniu menu.",
              },
              {
                stat: "100%",
                label: "autentyczność",
                desc: "Żadna platforma dostawcza nie pokaże klientowi Twojej kuchni od środka. Tylko Ty możesz to zrobić.",
              },
              {
                stat: "0 zł",
                label: "dodatkowych kosztów",
                desc: "Wystarczy telefon i konto na YouTube, TikToku lub Instagramie. Link podpinasz w panelu w kilka sekund.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-2 hover:border-primary/30 transition-colors"
              >
                <span className="text-3xl font-bold text-primary font-serif">{item.stat}</span>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
