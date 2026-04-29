import { Check } from "lucide-react"
import Image from "next/image"

export function ProblemSolutionSection() {
  return (
    <section id="przyklady" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-6 text-balance font-serif">
            Twoje dania zasługują na więcej niż tylko „dobre" zdjęcie. Zasługują na Chef Vision.
          </h2>
        </div>

        {/* Sub-headline and Problem */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Wiesz, jak to jest. Godziny pracy, pasja, najlepsze składniki… a potem pstryk – i na zdjęciu wygląda to jak… no cóż, jak jedzenie. Ale czy oddaje magię Twojej kuchni? Często nie. I tu wkracza Chef Vision, z AI, która rozumie Twoje potrzeby.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Before Images */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">Przed</h3>
            <div className="space-y-3">
              {[
                { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hg-EX7fqH0WocPdWldk3IINj4XIXyHtyf.jpg", alt: "Burger w kuchni - zdjęcie przed obróbką" },
                { img: "/images/kitchen-photo-2.jpeg", alt: "Danie 2 z kuchni" },
              ].map((photo, i) => (
                <div key={i} style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', cursor: 'pointer' }} className="group">
                  <Image
                    src={photo.img}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            {/* Tworzymy. Ulepszamy. Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
                Tworzymy. Ulepszamy. Zawsze z szacunkiem dla Twojego rzemiosła.
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {`W Chef Vision rozumiemy, że autentyczność i elastyczność to podstawa. Nasze AI jest do Twojej dyspozycji, aby Twoje `}<strong>{`istniejące dania zabłysły pełnym blaskiem`}</strong>{`, zachowując ich prawdziwy charakter. To nie tylko narzędzie do tworzenia – to `}<strong>{`mistrz oświetlenia, stylista i retuszer w jednym`}</strong>{`, który pracuje na Twoich prawdziwych zdjęciach, tworząc wizualizacje, które idealnie oddają ducha Twojej kuchni. Dodatkowo, dzięki `}<strong>{`sezonowym motywom`}</strong>{` oraz `}<strong>{`integracji z Google Maps`}</strong>{`, Twoje menu będzie zawsze aktualne i przyciągnie więcej klientów.`}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {/* Enhancement Feature */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-primary" />
                  </span>
                  Ulepszanie istniejących zdjęć – z zachowaniem struktury dania
                </h4>
                <p className="text-sm text-muted-foreground mb-3 ml-8">
                  To kluczowe! Kucharze i goście widzą, że to WCIĄŻ Twoje, prawdziwe dzieło. Bez sztucznych dodatków, bez udziwnień. Nasze AI:
                </p>
                <ul className="ml-8 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Światło:</strong> Odpowiednie oświetlenie wydobywa kolory i tekstury, sprawiając, że danie wygląda apetycznie.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Kąt:</strong> Optymalna perspektywa, która prezentuje danie w najlepszy możliwy sposób.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Tło:</strong> Eleganckie, spójne tło, które nie odwraca uwagi, a podkreśla danie.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Motywy Sezonowe:</strong> Dopasuj tło i styl do okazji (np. świąteczne, halloweenowe), aby Twoje menu było zawsze świeże i angażujące.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Integracja z Google Maps:</strong> Zwiększ widoczność i wiarygodność Twojej restauracji, prezentując profesjonalne zdjęcia, które zachęcają do pozostawienia pozytywnych opinii.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* After Images Section */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-6 text-center">Po</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/na%20stronke%20burger-YY6EYTVfsoTEuhJebjW3nLRA8fU0Jz.png", alt: "Burger po obróbce LinguaChef" },
              { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/na%20stronke%20stek-mlJLQ2hIBckrK1xdDMCUWgqsBEJaJq.png", alt: "Stek po obróbce LinguaChef" },
            ].map((photo, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '2 / 3', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--primary)', backgroundImage: 'linear-gradient(to bottom right, rgba(247, 188, 51, 0.1), transparent)' }}>
                <Image
                  src={photo.img}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6 font-serif">
            Efekt? Zdjęcia, które sprzedają. Dania, które smakują tak, jak wyglądają.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Zapomnij o drogich sesjach zdjęciowych i tygodniach oczekiwania. Z Chef Vision masz profesjonalne zdjęcia w kilka minut, które w 100% oddają to, co serwujesz. Bo w końcu, liczy się smak… i to, jak go pokażesz!
          </p>
        </div>
      </div>
    </section>
  )
}
