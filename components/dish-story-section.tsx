"use client"

import { Link2, ChefHat, Heart, Eye } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [ChefHat, Link2, Eye, Heart]

const content = {
  pl: {
    badge: "Wstęp za kulisy",
    headline: "Podziel się historią swojego dania",
    sub: "Goście nie kupują tylko jedzenia — kupują emocje i autentyczność. ChefVision pozwala podpiąć do każdego dania w cyfrowym menu link do wideo z kuchni. Jeden skan kodu QR i gość widzi, jak jego potrawa powstaje.",
    stepLabel: "Krok",
    steps: [
      { number: "01", title: "Nagrywasz w kuchni", description: "Krótkie wideo z przygotowania dania — wystarczy telefon. Bez sprzętu, bez studia. Autentyczność jest tu największą wartością." },
      { number: "02", title: "Podpinasz link do dania", description: "W panelu ChefVision do każdej pozycji w menu dodajesz link do YouTube, TikToka lub Instagrama. Jeden klik — gotowe." },
      { number: "03", title: "Gość skanuje QR i zagląda za kulisy", description: "Przeglądając menu, gość widzi ikonę wideo przy daniu. Klika i w sekundę ogląda, jak jego potrawa powstaje w Twojej kuchni." },
      { number: "04", title: "Budujesz więź, której nie kupisz za pieniądze", description: "Gość, który widział Twoje ręce przy pracy, nie jest już anonimowym klientem. Jest kimś, kto zna Twoją historię." },
    ],
    whyTitle: "Dlaczego to buduje lojalność klientów",
    stats: [
      { stat: "3×", label: "większe zaangażowanie", desc: "Wideo przy daniu sprawia, że goście spędzają 3 razy więcej czasu na przeglądaniu menu." },
      { stat: "100%", label: "autentyczność", desc: "Żadna platforma dostawcza nie pokaże klientowi Twojej kuchni od środka. Tylko Ty możesz to zrobić." },
      { stat: "0 zł", label: "dodatkowych kosztów", desc: "Wystarczy telefon i konto na YouTube, TikToku lub Instagramie. Link podpinasz w panelu w kilka sekund." },
    ],
  },
  en: {
    badge: "Behind the scenes",
    headline: "Share the story of your dish",
    sub: "Guests don't just buy food — they buy emotions and authenticity. ChefVision lets you attach a kitchen video link to every dish in your digital menu. One QR scan and the guest sees how their meal is made.",
    stepLabel: "Step",
    steps: [
      { number: "01", title: "You film in the kitchen", description: "A short video of dish preparation — just your phone. No equipment, no studio. Authenticity is the greatest value here." },
      { number: "02", title: "You attach the link to the dish", description: "In the ChefVision panel, you add a YouTube, TikTok or Instagram link to any menu item. One click — done." },
      { number: "03", title: "Guest scans QR and goes behind the scenes", description: "While browsing the menu, the guest sees a video icon next to the dish. They click and instantly watch how their meal is made in your kitchen." },
      { number: "04", title: "You build a bond that money can't buy", description: "A guest who has seen your hands at work is no longer an anonymous customer. They are someone who knows your story." },
    ],
    whyTitle: "Why this builds customer loyalty",
    stats: [
      { stat: "3×", label: "more engagement", desc: "Video next to a dish makes guests spend 3 times longer browsing the menu." },
      { stat: "100%", label: "authenticity", desc: "No delivery platform will show your customers inside your kitchen. Only you can do that." },
      { stat: "€0", label: "extra cost", desc: "All you need is a phone and a YouTube, TikTok or Instagram account. You attach the link in the panel in seconds." },
    ],
  },
}

export function DishStorySection() {
  const { locale, mounted } = useLanguage()
  const c = content[mounted ? locale : "pl"]

  return (
    <section id="przyklady" className="py-28 bg-background overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 flex flex-col items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary font-serif">{c.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance max-w-3xl font-serif leading-tight">{c.headline}</h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">{c.sub}</p>
        </div>

        <div className="max-w-xl mx-auto mb-20">
          <div className="flex flex-col gap-8">
            {c.steps.map((step, index) => {
              const Icon = icons[index]
              return (
                <div key={step.number} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    {index < c.steps.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
                  </div>
                  <div className="pb-8 flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{c.stepLabel} {step.number}</span>
                    <h3 className="text-base font-semibold text-foreground font-serif">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="border-t border-border pt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10">{c.whyTitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {c.stats.map((item) => (
              <div key={item.stat} className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-2 hover:border-primary transition-colors">
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
