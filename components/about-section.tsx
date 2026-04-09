import Image from "next/image"

export function AboutSection() {
  const aboutImages = [
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0091-RVUddaoBC2IEHmgK5Mndc134DhCYjW.jpg", alt: "Marcin Koniuszko - finalizacja eleganckich dań z cytryna" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0093-buYdf0M4tNQvr4JUOhrI4chBVb5fDT.jpg", alt: "Marcin Koniuszko - przygotowanie świeżych warzyw" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0013-h73OEgqYilP7yeDIRZRbETLGrIYcEZ.jpg", alt: "Marcin Koniuszko - wyjmowanie chleba z pieca" },
  ]

  return (
    <section id="omnie" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            O mnie
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {`Cześć! Nazywam się Marcin Koniuszko — od ponad 16 lat smak i precyzja są moim codziennym językiem, w kuchniach od Wrocławia po szkockie Aberdeen. Pracując w renomowanych miejscach, takich jak AC Marriott czy Platinum Palace, nauczyłem się, że perfekcja tkwi w szczegółach, a smak to nie tylko składniki, ale i emocje. Jako Chef de partie i Szef Kuchni organizowałem bankiety na setki osób, tworzyłem innowacyjne menu i zarządzałem zespołami z naciskiem na jakość i optymalizację.`}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {`Po latach spędzonych wśród garnków i patelni poczułem, że czas na nowy przepis — tym razem na innowację. Zafascynowany sztuczną inteligencją, postanowiłem połączyć kulinarną wiedzę z nowoczesną technologią. Tak narodził się Chef Vision — aplikacja dla restauratorów, która ułatwia tworzenie eleganckich menu, oszczędza czas i dodaje szczyptę magii AI do każdego dania.`}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {`Moje doświadczenie w kuchni, połączone z pasją do technologii, pozwala mi budować narzędzie, które naprawdę rozumie branżę gastronomiczną. Wierzę, że nawet w tak tradycyjnej dziedzinie innowacja może być przyprawą, która odmieni wszystko. Zapraszam do odkrywania Chef Vision — bo nawet najlepszy kucharz potrzebuje dobrego cyfrowego asystenta!`}
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 order-1 lg:order-2">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
