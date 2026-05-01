import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MenuLiveSection() {
  return (
    <section className="py-28 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary font-serif">
              Menu Live & QR — 12 języków
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight font-serif">
              Twój cichy sprzedawca — w telefonie każdego gościa, w jego języku.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Kelner ma dużo pracy i nie ma czasu polecać wina? ChefVision robi to za niego — w 12 językach, 24/7. Gość skanuje kod, widzi menu w swoim języku, ogląda wideo z kuchni i dostaje rekomendację do dania. Wszystko bez słowa od kelnera.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Menu w 12 językach — automatyczne tłumaczenie dla gości",
                "Wideo z kuchni przy każdym daniu — gość kupuje oczami",
                "Inteligentne rekomendacje — ustawiasz sam z telefonu w 30 sekund",
                "System ChefStars: kawa za opinię w Google",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Star size={10} className="text-primary fill-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-2.5 rounded-xl"
                asChild
              >
                <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
                  Wypróbuj ChefVision
                </a>
              </Button>
            </div>
          </div>

          {/* Right: iPhone mockup with real screenshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-8"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.78 0.15 75 / 0.12) 0%, transparent 70%)",
                }}
              />

              {/* iPhone frame with screenshot */}
              <div className="relative w-[280px] rounded-[3rem] bg-[#f0ebe4] border-[8px] border-[#e2dbd2] shadow-xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#f5f5f5] rounded-b-2xl z-20" />

                {/* Screenshot */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '9 / 19.5', overflow: 'hidden' }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sssd-JoWYxCAbOJp0hrdOaiZbECjCZ2X99z.png"
                    alt="ChefVision Menu Live - Pizza Salsiccia e Pomodorini z ceną i przyciskami"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
