"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { aboutContentEl } from "@/lib/translations-el"
import { aboutContentIt } from "@/lib/translations-it"
import { aboutContentTr } from "@/lib/translations-tr"
import { aboutContentRu } from "@/lib/translations-ru"

const aboutImages = [
  {
    src: "/images/ChatGPT Image 21 cze 2026, 11_54_50.png",
    alt: "Anna Burdzy-Koniuszko — współtwórczyni ChefVision",
    imageClassName: "object-cover object-top",
  },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0091-RVUddaoBC2IEHmgK5Mndc134DhCYjW.jpg", alt: "Marcin Koniuszko in the kitchen" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0093-buYdf0M4tNQvr4JUOhrI4chBVb5fDT.jpg", alt: "Marcin Koniuszko preparing fresh vegetables" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260403-WA0013-h73OEgqYilP7yeDIRZRbETLGrIYcEZ.jpg", alt: "Marcin Koniuszko taking bread out of the oven" },
]

const content = {
  pl: {
    headline: "ChefVision powstał podczas pracy w hotelach, nie w korporacji.",
    paragraphs: [
      "Przez ponad 18 lat pracowałem w gastronomii hotelowej, obserwując problemy, których większość twórców oprogramowania nigdy nie widziała na własne oczy.",
      "Codziennie widziałem gości szukających informacji o śniadaniach, menu restauracji, usługach hotelowych czy atrakcjach w okolicy. Widziałem też pracowników odpowiadających na te same pytania dziesiątki razy każdego dnia.",
      "Informacje istniały.",
      "Problem polegał na tym, że były rozproszone.",
      "Dlatego powstał ChefVision.",
      "Nie jako kolejne QR Menu.",
      "Nie jako kolejna aplikacja.",
      "Ale jako narzędzie, które pomaga hotelom i restauracjom lepiej komunikować się z gośćmi, oszczędzać czas personelu i zapewniać lepsze doświadczenie podczas pobytu lub wizyty.",
      "Jesteśmy Marcin i Anna Koniuszko.",
      "Połączyliśmy doświadczenie gastronomiczne, hotelarskie, finansowe i technologiczne, aby stworzyć rozwiązanie odpowiadające na realne potrzeby branży hospitality.",
      "Marcin przez ponad 18 lat pracował w gastronomii, między innymi w hotelach Hilton i AC Marriott, gdzie odpowiadał za organizację pracy zespołów, tworzenie menu, obsługę gości oraz realizację wydarzeń i bankietów. To właśnie codzienna praca z gośćmi i personelem pozwoliła mu zrozumieć problemy, które dziś rozwiązuje ChefVision.",
      "Ania od lat związana jest z branżą finansową i bankowością. Jej doświadczenie w organizacji, analizie i pracy z klientem pomaga rozwijać ChefVision jako stabilny, uporządkowany i wiarygodny projekt biznesowy. Wspiera rozwój firmy od strony operacyjnej, finansowej i organizacyjnej, dbając o to, aby rozwiązanie było nie tylko nowoczesne, ale przede wszystkim praktyczne.",
      "Naszą misją jest tworzenie narzędzi, które pomagają hotelom i restauracjom:",
    ],
    goals: [
      "poprawiać komunikację z gośćmi,",
      "zapewniać szybki dostęp do najważniejszych informacji,",
      "zwiększać sprzedaż usług i produktów,",
      "oszczędzać czas personelu,",
      "podnosić jakość doświadczenia gości.",
    ],
    closing: [
      "Wierzymy, że technologia powinna rozwiązywać realne problemy codziennej pracy. Dlatego tworzymy rozwiązania, które są proste we wdrożeniu, intuicyjne w obsłudze i naprawdę przydatne dla branży hotelarskiej oraz gastronomicznej.",
      "Zapraszamy do odkrywania ChefVision.",
    ],
  },
  en: {
    headline: "ChefVision was built while working in hotels, not in a corporation.",
    paragraphs: [
      "For over 18 years I worked in hotel gastronomy, observing problems that most software creators have never seen with their own eyes.",
      "Every day I saw guests looking for information about breakfasts, restaurant menus, hotel services or local attractions. I also saw staff answering the same questions dozens of times each day.",
      "The information existed.",
      "The problem was that it was scattered.",
      "That's why ChefVision was created.",
      "Not as another QR menu.",
      "Not as another app.",
      "But as a tool that helps hotels and restaurants communicate better with guests, save staff time and deliver a better experience during a stay or visit.",
      "We are Marcin and Anna Koniuszko.",
      "We combined culinary, hospitality, financial and technological experience to create a solution that meets the real needs of the hospitality industry.",
      "Marcin worked in gastronomy for over 18 years, including at Hilton and AC Marriott hotels, where he was responsible for team organisation, menu creation, guest service and events and banquets. Daily work with guests and staff helped him understand the problems that ChefVision solves today.",
      "Anna has long been connected to finance and banking. Her experience in organisation, analysis and client work helps develop ChefVision as a stable, well-structured and credible business project. She supports the company's growth on the operational, financial and organisational side, ensuring the solution is not only modern but above all practical.",
      "Our mission is to create tools that help hotels and restaurants:",
    ],
    goals: [
      "improve communication with guests,",
      "provide quick access to the most important information,",
      "increase sales of services and products,",
      "save staff time,",
      "raise the quality of the guest experience.",
    ],
    closing: [
      "We believe technology should solve real everyday work problems. That's why we build solutions that are easy to implement, intuitive to use and genuinely useful for the hotel and restaurant industry.",
      "We invite you to discover ChefVision.",
    ],
  },
  de: {
    headline: "ChefVision entstand in der Hotelarbeit — nicht in einem Konzern.",
    paragraphs: [
      "Über 18 Jahre arbeitete ich in der Hotelgastronomie und beobachtete Probleme, die die meisten Softwareentwickler nie mit eigenen Augen gesehen haben.",
      "Jeden Tag sah ich Gäste, die nach Informationen zu Frühstück, Restaurantmenüs, Hotelservices oder lokalen Sehenswürdigkeiten suchten. Ich sah auch Mitarbeitende, die dieselben Fragen dutzende Male am Tag beantworteten.",
      "Die Informationen existierten.",
      "Das Problem war, dass sie verstreut waren.",
      "Deshalb wurde ChefVision gegründet.",
      "Nicht als weiteres QR-Menü.",
      "Nicht als weitere App.",
      "Sondern als Tool, das Hotels und Restaurants hilft, besser mit Gästen zu kommunizieren, Personalzeit zu sparen und ein besseres Erlebnis während des Aufenthalts oder Besuchs zu bieten.",
      "Wir sind Marcin und Anna Koniuszko.",
      "Wir haben kulinarische, hospitality-, finanzielle und technologische Erfahrung vereint, um eine Lösung zu schaffen, die den realen Bedürfnissen der Hospitality-Branche entspricht.",
      "Marcin arbeitete über 18 Jahre in der Gastronomie, unter anderem in Hilton- und AC-Marriott-Hotels, wo er für Teamorganisation, Menüerstellung, Gästeservice sowie Events und Bankette verantwortlich war. Die tägliche Arbeit mit Gästen und Personal half ihm, die Probleme zu verstehen, die ChefVision heute löst.",
      "Anna ist seit Langem mit Finanzwesen und Banking verbunden. Ihre Erfahrung in Organisation, Analyse und Kundenarbeit hilft, ChefVision als stabiles, gut strukturiertes und glaubwürdiges Geschäftsprojekt weiterzuentwickeln. Sie unterstützt das Unternehmenswachstum operativ, finanziell und organisatorisch und stellt sicher, dass die Lösung nicht nur modern, sondern vor allem praktisch ist.",
      "Unsere Mission ist es, Tools zu schaffen, die Hotels und Restaurants helfen:",
    ],
    goals: [
      "die Kommunikation mit Gästen zu verbessern,",
      "schnellen Zugang zu den wichtigsten Informationen zu bieten,",
      "den Umsatz von Services und Produkten zu steigern,",
      "Personalzeit zu sparen,",
      "die Qualität des Gästeerlebnisses zu erhöhen.",
    ],
    closing: [
      "Wir glauben, dass Technologie echte Probleme des Alltags bei der Arbeit lösen sollte. Deshalb entwickeln wir Lösungen, die einfach einzuführen, intuitiv zu bedienen und wirklich nützlich für die Hotel- und Gastronomiebranche sind.",
      "Wir laden Sie ein, ChefVision zu entdecken.",
    ],
  },
  es: {
    headline: "ChefVision nació trabajando en hoteles, no en una corporación.",
    paragraphs: [
      "Durante más de 18 años trabajé en gastronomía hotelera, observando problemas que la mayoría de creadores de software nunca han visto con sus propios ojos.",
      "Cada día veía huéspedes buscando información sobre desayunos, menús de restaurante, servicios del hotel o atracciones locales. También veía al personal respondiendo las mismas preguntas decenas de veces al día.",
      "La información existía.",
      "El problema era que estaba dispersa.",
      "Por eso se creó ChefVision.",
      "No como otro menú QR.",
      "No como otra app.",
      "Sino como una herramienta que ayuda a hoteles y restaurantes a comunicarse mejor con los huéspedes, ahorrar tiempo al personal y ofrecer una mejor experiencia durante la estancia o la visita.",
      "Somos Marcin y Anna Koniuszko.",
      "Combinamos experiencia culinaria, hotelera, financiera y tecnológica para crear una solución que responde a las necesidades reales del sector de la hostelería.",
      "Marcin trabajó en gastronomía durante más de 18 años, incluidos hoteles Hilton y AC Marriott, donde fue responsable de la organización del equipo, creación de menús, atención al huésped y eventos y banquetes. El trabajo diario con huéspedes y personal le permitió entender los problemas que ChefVision resuelve hoy.",
      "Anna lleva años vinculada al sector financiero y bancario. Su experiencia en organización, análisis y atención al cliente ayuda a desarrollar ChefVision como un proyecto empresarial estable, bien estructurado y creíble. Apoya el crecimiento de la empresa en lo operativo, financiero y organizativo, asegurando que la solución sea no solo moderna, sino sobre todo práctica.",
      "Nuestra misión es crear herramientas que ayuden a hoteles y restaurantes a:",
    ],
    goals: [
      "mejorar la comunicación con los huéspedes,",
      "ofrecer acceso rápido a la información más importante,",
      "aumentar la venta de servicios y productos,",
      "ahorrar tiempo al personal,",
      "elevar la calidad de la experiencia del huésped.",
    ],
    closing: [
      "Creemos que la tecnología debe resolver problemas reales del trabajo diario. Por eso creamos soluciones fáciles de implementar, intuitivas de usar y genuinamente útiles para la industria hotelera y restaurantera.",
      "Le invitamos a descubrir ChefVision.",
    ],
  },
  el: aboutContentEl,
  it: aboutContentIt,
  tr: aboutContentTr,
  ru: aboutContentRu,
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
            {c.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            <ul className="text-lg text-muted-foreground leading-relaxed list-disc list-inside space-y-1 pl-1">
              {c.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
            {c.closing.map((paragraph) => (
              <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 order-1 lg:order-2">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 ${image.containerClassName ?? "aspect-square"}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={image.imageClassName ?? "object-cover"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
