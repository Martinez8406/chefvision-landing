"use client"

import { Link2, ChefHat, Heart, Eye } from "lucide-react"

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

        {/* Main content: steps */}
        <div className="max-w-xl mx-auto mb-20">

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
