import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CircleCheck, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 lg:pt-32">
      <div className="absolute -left-44 top-16 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-7">
          <span className="w-fit rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Dla restauracji
          </span>

          <div className="space-y-4">
            <h1 className="max-w-xl text-4xl font-bold leading-[1.05] text-foreground text-balance font-serif sm:text-5xl lg:text-6xl">
              Sprzedawaj więcej z każdego stolika, bez dokładania pracy zespołowi.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ChefVision automatyzuje rekomendacje dań, tłumaczy menu na{" "}
              <strong className="text-foreground">12 języków</strong> i zamienia koszt napoju w stały dopływ opinii Google.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-7 text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
              asChild
            >
              <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer">
                Zobacz demo na żywo
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-7 text-sm font-semibold" asChild>
              <a href="#przyklady">
                <Play size={16} />
                Zobacz przykłady wdrożenia
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 pt-1 text-sm text-muted-foreground">
            {[
              "Wdrożenie w 1 dzień",
              "Stałe 99 zł/mies.",
              "Bez prowizji od zamówień",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <CircleCheck size={15} className="text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-border/70 bg-card p-4 shadow-2xl shadow-primary/10">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/ulotka.png"
                alt="ChefVision panel i karta menu restauracji"
                width={820}
                height={560}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute -left-3 top-6 rounded-xl border border-border bg-background/95 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-xs font-medium text-muted-foreground">Średnia wartość zamówienia</p>
            <p className="text-lg font-semibold text-foreground">+25%</p>
          </div>

          <div className="absolute -bottom-4 right-5 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 shadow-lg">
            <p className="text-xs font-medium text-primary/80">Koszt leada vs. ChefStars</p>
            <p className="text-lg font-semibold text-foreground">30 zł vs 1,50 zł</p>
          </div>
        </div>
      </div>
    </section>
  )
}
