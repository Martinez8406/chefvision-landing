"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const aboutImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0091-RVUddaoBC2IEHmgK5Mndc134DhCYjW.jpg", alt: "Marcin Koniuszko in the kitchen" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0093-buYdf0M4tNQvr4JUOhrI4chBVb5fDT.jpg", alt: "Marcin Koniuszko preparing fresh vegetables" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0013-h73OEgqYilP7yeDIRZRbETLGrIYcEZ.jpg", alt: "Marcin Koniuszko taking bread out of the oven" },
]

const content = {
  pl: {
    headline: "O nas",
    p1: "Cześć! Jesteśmy Marcin i Anna Koniuszko — połączyliśmy doświadczenie gastronomiczne, finansowe i technologiczne, aby stworzyć ChefVision — nowoczesne narzędzie wspierające restauracje i hotele w codziennej pracy.",
    p2: "Marcin od ponad 18 lat pracuje w gastronomii — od Wrocławia po szkockie Aberdeen. Pracując w renomowanych miejscach, takich jak AC Marriott czy Hilton, zdobywał doświadczenie jako Chef de Partie i Szef Kuchni, organizując bankiety na setki osób, tworząc menu i zarządzając zespołami z naciskiem na jakość, estetykę i optymalizację pracy. To właśnie wieloletnia praktyka w gastronomii pozwoliła mu zrozumieć realne problemy restauracji i potrzeby obsługi.",
    p3: "Ania od lat związana jest z branżą finansową i bankowością. Jej doświadczenie w organizacji, analizie i pracy z klientem pomaga budować ChefVision jako profesjonalny i uporządkowany projekt biznesowy. Wspiera rozwój aplikacji od strony operacyjnej, finansowej i organizacyjnej, dbając o to, aby rozwiązanie było nie tylko nowoczesne, ale również praktyczne i wiarygodne dla biznesu.",
    p4: "ChefVision powstał z połączenia kulinarnej praktyki i nowoczesnej technologii. Naszym celem jest tworzenie narzędzi, które pomagają restauracjom i hotelom:",
    goals: [
      "lepiej prezentować menu,",
      "zwiększać sprzedaż,",
      "oszczędzać czas obsługi,",
      "oraz poprawiać doświadczenie gości.",
    ],
    p5: "Wierzymy, że nawet w tak tradycyjnej branży jak gastronomia technologia może stać się realnym wsparciem codziennej pracy — prostym, eleganckim i skutecznym.",
    p6: "Zapraszamy do odkrywania ChefVision.",
  },
  en: {
    headline: "About us",
    p1: "Hi! We're Marcin and Anna Koniuszko — we combined culinary, financial and technological experience to create ChefVision, a modern tool supporting restaurants and hotels in their daily work.",
    p2: "Marcin has worked in gastronomy for over 18 years — from Wrocław to Aberdeen, Scotland. At renowned venues such as AC Marriott and Hilton, he gained experience as Chef de Partie and Head Chef, organising banquets for hundreds of guests, creating menus and leading teams with a focus on quality, aesthetics and workflow optimisation. Years of hands-on practice in hospitality helped him understand the real challenges restaurants face and what service teams need.",
    p3: "Anna has long been connected to finance and banking. Her experience in organisation, analysis and client work helps build ChefVision as a professional, well-structured business project. She supports the app's development on the operational, financial and organisational side, ensuring the solution is not only modern but also practical and credible for businesses.",
    p4: "ChefVision was born from combining culinary practice and modern technology. Our goal is to create tools that help restaurants and hotels:",
    goals: [
      "present menus more effectively,",
      "increase sales,",
      "save service time,",
      "and improve the guest experience.",
    ],
    p5: "We believe that even in as traditional an industry as hospitality, technology can become real everyday support — simple, elegant and effective.",
    p6: "We invite you to discover ChefVision.",
  },
}

export function AboutSection() {
  const { locale, mounted } = useLanguage()
  const c = content[mounted ? locale : "pl"]

  return (
    <section id="onas" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            {c.headline}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed">{c.p1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.p2}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.p3}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.p4}</p>
            <ul className="text-lg text-muted-foreground leading-relaxed list-disc list-inside space-y-1 pl-1">
              {c.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.p5}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.p6}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 order-1 lg:order-2">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
