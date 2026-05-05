"use client"

import { Check } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const content = {
  pl: {
    headline: "Twoje dania zasługują na więcej niż tylko „dobre" zdjęcie. Zasługują na Chef Vision.",
    intro: "Wiesz, jak to jest. Godziny pracy, pasja, najlepsze składniki… a potem pstryk – i na zdjęciu wygląda to jak… no cóż, jak jedzenie. Ale czy oddaje magię Twojej kuchni? Często nie. I tu wkracza Chef Vision, który pomaga pokazać Twoje dania tak, jak na to zasługują.",
    beforeLabel: "Przed",
    afterLabel: "Po",
    craftHeadline: "Tworzymy. Ulepszamy. Zawsze z szacunkiem dla Twojego rzemiosła.",
    craftText: "W Chef Vision rozumiemy, że autentyczność i elastyczność to podstawa. Narzędzia w panelu pomagają, aby Twoje istniejące dania zabłysły pełnym blaskiem, zachowując ich prawdziwy charakter. To praktyczne wsparcie w codziennej pracy — oświetlenie, stylizacja i retusz w jednym miejscu, które działa na Twoich prawdziwych zdjęciach i oddaje ducha Twojej kuchni. Dodatkowo, dzięki sezonowym motywom oraz integracji z Google Maps, Twoje menu będzie zawsze aktualne i przyciągnie więcej klientów.",
    craftBold1: "istniejące dania zabłysły pełnym blaskiem",
    craftBold2: "oświetlenie, stylizacja i retusz w jednym miejscu",
    craftBold3: "sezonowym motywom",
    craftBold4: "integracji z Google Maps",
    featureTitle: "Ulepszanie istniejących zdjęć – z zachowaniem struktury dania",
    featureIntro: "To kluczowe! Kucharze i goście widzą, że to WCIĄŻ Twoje, prawdziwe dzieło. Bez przesady i bez udziwnień. W praktyce:",
    bullets: [
      { bold: "Światło:", text: "Odpowiednie oświetlenie wydobywa kolory i tekstury, sprawiając, że danie wygląda apetycznie." },
      { bold: "Kąt:", text: "Optymalna perspektywa, która prezentuje danie w najlepszy możliwy sposób." },
      { bold: "Tło:", text: "Eleganckie, spójne tło, które nie odwraca uwagi, a podkreśla danie." },
      { bold: "Motywy Sezonowe:", text: "Dopasuj tło i styl do okazji (np. świąteczne, halloweenowe), aby Twoje menu było zawsze świeże i angażujące." },
      { bold: "Integracja z Google Maps:", text: "Zwiększ widoczność i wiarygodność Twojej restauracji, prezentując profesjonalne zdjęcia, które zachęcają do pozostawienia pozytywnych opinii." },
    ],
    conclusionHeadline: "Efekt? Zdjęcia, które sprzedają. Dania, które smakują tak, jak wyglądają.",
    conclusionText: "Zapomnij o drogich sesjach zdjęciowych i tygodniach oczekiwania. Z Chef Vision masz profesjonalne zdjęcia w kilka minut, które w 100% oddają to, co serwujesz. Bo w końcu, liczy się smak… i to, jak go pokażesz!",
  },
  en: {
    headline: "Your dishes deserve more than just a \"good\" photo. They deserve Chef Vision.",
    intro: "You know how it is. Hours of work, passion, the finest ingredients… then snap — and in the photo it looks like… well, food. But does it capture the magic of your kitchen? Often not. That's where Chef Vision steps in, helping you show your dishes the way they deserve to be seen.",
    beforeLabel: "Before",
    afterLabel: "After",
    craftHeadline: "We create. We enhance. Always with respect for your craft.",
    craftText: "At Chef Vision we understand that authenticity and flexibility are fundamental. The tools in the panel help your existing dishes shine at their best, while preserving their true character. It's practical support for daily work — lighting, styling and retouching in one place, working on your real photos and capturing the spirit of your kitchen. Plus, with seasonal themes and Google Maps integration, your menu will always be fresh and attract more customers.",
    craftBold1: "existing dishes shine at their best",
    craftBold2: "lighting, styling and retouching in one place",
    craftBold3: "seasonal themes",
    craftBold4: "Google Maps integration",
    featureTitle: "Enhancing existing photos — preserving the dish structure",
    featureIntro: "This is key! Chefs and guests can see it is STILL your real, authentic work. No exaggeration, no gimmicks. In practice:",
    bullets: [
      { bold: "Lighting:", text: "The right lighting brings out colours and textures, making the dish look appetising." },
      { bold: "Angle:", text: "The optimal perspective that presents the dish in the best possible way." },
      { bold: "Background:", text: "An elegant, consistent background that doesn't distract but highlights the dish." },
      { bold: "Seasonal Themes:", text: "Match the background and style to the occasion (e.g. Christmas, Halloween) to keep your menu fresh and engaging." },
      { bold: "Google Maps Integration:", text: "Increase your restaurant's visibility and credibility by showcasing professional photos that encourage positive reviews." },
    ],
    conclusionHeadline: "The result? Photos that sell. Dishes that taste as good as they look.",
    conclusionText: "Forget expensive photo shoots and weeks of waiting. With Chef Vision you get professional photos in minutes that 100% reflect what you serve. Because in the end, it's all about the taste… and how you show it!",
  },
}

const beforePhotos = [
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hg-EX7fqH0WocPdWldk3IINj4XIXyHtyf.jpg", alt: "Burger in kitchen - photo before enhancement" },
  { img: "/images/kitchen-photo-2.jpeg", alt: "Dish in kitchen before enhancement" },
]

const afterPhotos = [
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/na%20stronke%20burger-YY6EYTVfsoTEuhJebjW3nLRA8fU0Jz.png", alt: "Burger after ChefVision enhancement" },
  { img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/na%20stronke%20stek-mlJLQ2hIBckrK1xdDMCUWgqsBEJaJq.png", alt: "Steak after ChefVision enhancement" },
]

export function ProblemSolutionSection() {
  const { locale } = useLanguage()
  const c = content[locale] || content.pl

  return (
    <section id="przyklady" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-6 text-balance font-serif">
            {c.headline}
          </h2>
        </div>

        {/* Sub-headline and Problem */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {c.intro}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Before Images */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">{c.beforeLabel}</h3>
            <div className="space-y-3">
              {beforePhotos.map((photo, i) => (
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
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
                {c.craftHeadline}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {c.craftText}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-primary" />
                  </span>
                  {c.featureTitle}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 ml-8">
                  {c.featureIntro}
                </p>
                <ul className="ml-8 space-y-2">
                  {c.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>{bullet.bold}</strong> {bullet.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* After Images Section */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-6 text-center">{c.afterLabel}</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {afterPhotos.map((photo, i) => (
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
            {c.conclusionHeadline}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {c.conclusionText}
          </p>
        </div>
      </div>
    </section>
  )
}
