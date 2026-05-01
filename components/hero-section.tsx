import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground text-balance font-serif">
              Przestań tracić czas kelnerów i zacznij zarabiać na opiniach w Google.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              ChefVision to inteligentny asystent sprzedaży, który wyręcza Twój personel, tłumaczy menu na <strong className="text-foreground">12 języków</strong> i automatycznie zamienia koszt jednej kawy w 5 gwiazdek w internecie.
            </p>

            <div className="pt-2 flex justify-center">
              <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button
                  size="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/75 font-semibold px-6 gap-2 text-sm sm:text-base shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/35 w-fit"
                >
                  Sprawdź, jak ChefVision zarobi na siebie w 3 dni
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>

            <p className="text-xs text-muted-foreground text-center w-full">
              Bez prowizji • Stałe 99 zł/msc • Anuluj w dowolnym momencie
            </p>
          </div>

          {/* Right: Hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
                <Image
                  src="/images/chef-hero.png"
                  alt="Profesjonalnie przygotowany burger z frytkami - przykład zdjęcia ChefVision"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                  priority
                />
              </div>
              <p className="text-center text-sm mt-4 text-muted-foreground">
                Dołącz do pierwszych restauracji, które testują{" "}
                <span className="font-bold text-foreground">ChefVision</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
