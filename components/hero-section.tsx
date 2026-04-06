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
              ChefVision: Zmień swoje zdjęcie w kulinarne arcydzieło — bez fotografa, w kilka sekund
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Wgraj zdjęcie z telefonu i zamień je w profesjonalne zdjęcie do menu. Dodatkowo twórz automatyczne menu online z kodem QR.
            </p>

            <div className="pt-2 flex justify-center">
              <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button
                  size="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 gap-2 text-sm sm:text-base shadow-md shadow-primary/20 w-fit"
                >
                  Stwórz zdjęcie w kilka sekund
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>

            <p className="text-xs text-muted-foreground text-center w-full">
              10 zdjęć za darmo • Menu live w pakiecie
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
                Dołącz do pierwszych kucharzy, którzy testują{" "}
                <span className="font-bold text-foreground">ChefVision</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
