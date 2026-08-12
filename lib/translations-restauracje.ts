import type { Locale } from "./translations"

export type RestauracjeCopy = {
  nav: {
    how: string
    forWhom: string
    pricing: string
    faq: string
    cta: string
    logoAria: string
    menuToggle: string
  }
  hero: {
    badge: string
    headline: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
    trust: string[]
    imageAlt: string
  }
  problem: {
    headline: string
    text: string
    items: string[]
    imageAlt: string
  }
  solution: {
    headline: string
    sub: string
    steps: { num: string; title: string; desc: string }[]
  }
  recommendations: {
    headline: string
    sub: string
    items: { label: string; example: string }[]
    note: string
    imageAlt: string
  }
  languages: {
    headline: string
    text: string
    list: string[]
  }
  journey: {
    headline: string
    steps: { label: string; src: string; alt: string }[]
    mobileFlow: string
  }
  benefits: {
    headline: string
    sub: string
    items: { title: string; desc: string }[]
  }
  story: {
    badge: string
    headline: string
    p1: string
    p2: string
    imageAlt: string
  }
  finalCta: {
    badge: string
    headline: string
    sub: string
    button: string
    note: string
  }
}

const journeyImages = {
  scene1: "/images/story/scene-1-confused-guest.png",
  scene2: "/images/story/scene-2-qr-translation.png",
  scene3: "/images/story/scene-3-recommendations.png",
  scene4: "/images/story/scene-4-happy-ending.png",
} as const

const languageNames = [
  "Polski",
  "English",
  "Deutsch",
  "Español",
  "Italiano",
  "Français",
  "中文",
  "日本語",
  "한국어",
  "العربية",
  "Українська",
  "Čeština",
  "Nederlands",
  "עברית",
]

export const restauracjeContent: Record<"pl" | "en" | "hr", RestauracjeCopy> = {
  pl: {
    nav: {
      how: "Jak to działa?",
      forWhom: "Dla kogo?",
      pricing: "Cennik",
      faq: "FAQ",
      cta: "Wypróbuj za darmo",
      logoAria: "ChefVision dla restauracji",
      menuToggle: "Otwórz menu",
    },
    hero: {
      badge: "ChefVision dla restauracji",
      headline: "Pomóż gościom wybrać więcej. Sprzedaj więcej.",
      sub: "ChefVision pomaga gościom zrozumieć menu, odkrywać dania i korzystać z rekomendacji — w 14 językach.",
      ctaPrimary: "Wypróbuj za darmo przez 14 dni",
      ctaSecondary: "Zobacz, jak działa",
      trust: ["14 języków", "Bez karty kredytowej", "14 dni Premium", "Darmowy plan"],
      imageAlt: "Gość skanuje kod QR ChefVision przy stoliku w restauracji",
    },
    problem: {
      headline: "Nie każdy gość wie, co zamówić.",
      text: "Zwłaszcza gdy menu jest w obcym języku. Nieznane składniki, lokalne dania i brak pewności często kończą się wyborem najbezpieczniejszej opcji.",
      items: ["Nie rozumiem menu.", "Nie wiem, co wybrać.", "Nie znam lokalnych dań."],
      imageAlt: "Gość zdezorientowany papierowym menu w obcym języku",
    },
    solution: {
      headline: "ChefVision pomaga gościowi podjąć decyzję.",
      sub: "Od pierwszego spojrzenia na menu do pewnego wyboru.",
      steps: [
        { num: "01", title: "Zrozum", desc: "Menu dostępne w języku gościa." },
        { num: "02", title: "Odkryj", desc: "Zdjęcia i informacje pomagają poznać danie." },
        { num: "03", title: "Wybierz", desc: "Rekomendacje i pairingi pomagają zdecydować." },
      ],
    },
    recommendations: {
      headline: "Nie tylko pokazuj menu. Pomóż sprzedać więcej.",
      sub: "ChefVision pozwala restauracji wykorzystać moment, w którym gość właśnie wybiera danie.",
      items: [
        { label: "Polecane", example: "Polecamy do tego dania" },
        { label: "Popularne", example: "Inni często zamawiają z" },
        { label: "W zestawie taniej", example: "Najpopularniejszy zestaw" },
      ],
      note: "Restauracja sama decyduje, co rekomendować.",
      imageAlt: "Rekomendacje i pairingi w cyfrowym menu ChefVision",
    },
    languages: {
      headline: "Twój gość nie musi mówić po polsku.",
      text: "Menu ChefVision może być dostępne w 14 językach, dzięki czemu zagraniczny gość może samodzielnie zrozumieć ofertę.",
      list: languageNames,
    },
    journey: {
      headline: "Gość przychodzi po doświadczenie. Nie po instrukcję obsługi.",
      steps: [
        {
          label: "Niepewność",
          src: journeyImages.scene1,
          alt: "Gość niepewny przy papierowym menu",
        },
        {
          label: "Zrozumienie",
          src: journeyImages.scene2,
          alt: "Gość czyta menu w swoim języku",
        },
        {
          label: "Pewność wyboru",
          src: journeyImages.scene3,
          alt: "Gość korzysta z rekomendacji",
        },
        {
          label: "Lepsze doświadczenie",
          src: journeyImages.scene4,
          alt: "Zadowolony gość przy stole",
        },
      ],
      mobileFlow: "Niepewność → Zrozumienie → Pewność wyboru → Lepsze doświadczenie",
    },
    benefits: {
      headline: "Stworzone z myślą o prawdziwej gastronomii.",
      sub: "Nie lista technologii — rozwiązania problemów, które znasz z sali.",
      items: [
        {
          title: "Menu QR",
          desc: "Gość otwiera kartę na swoim telefonie — bez aplikacji i bez czekania na kelnera z menu.",
        },
        {
          title: "14 języków",
          desc: "Zagraniczny gość samodzielnie rozumie ofertę i zamawia pewniej.",
        },
        {
          title: "Zdjęcia dań",
          desc: "Gość widzi, co dostanie — mniej pytań, więcej świadomych wyborów.",
        },
        {
          title: "Rekomendacje i pairingi",
          desc: "Promujesz wybrane dania, napoje i zestawy w momencie decyzji.",
        },
        {
          title: "Promocje",
          desc: "Podnosisz widoczność pozycji, które chcesz sprzedawać częściej.",
        },
        {
          title: "Statystyki",
          desc: "Widzisz, co goście oglądają i co warto podkreślić w karcie.",
        },
      ],
    },
    story: {
      badge: "Historia",
      headline: "ChefVision powstał w gastronomii.",
      p1: "Przez ponad 18 lat pracowałem w gastronomii hotelowej. Widziałem, jak często goście mają problem ze zrozumieniem menu — szczególnie gdy przyjeżdżają z zagranicy.",
      p2: "ChefVision powstał z potrzeby rozwiązania tego problemu.",
      imageAlt: "Marcin Koniuszko — założyciel ChefVision",
    },
    finalCta: {
      badge: "Zacznij bez ryzyka",
      headline: "Wypróbuj ChefVision przez 14 dni",
      sub: "Pełny dostęp do Premium. Bez karty kredytowej.",
      button: "Wypróbuj za darmo przez 14 dni",
      note: "Po okresie próbnym wybierasz plan Start lub Premium.",
    },
  },
  en: {
    nav: {
      how: "How it works",
      forWhom: "Who it’s for",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Try for free",
      logoAria: "ChefVision for restaurants",
      menuToggle: "Toggle menu",
    },
    hero: {
      badge: "ChefVision for restaurants",
      headline: "Help guests choose more. Sell more.",
      sub: "ChefVision helps guests understand the menu, discover dishes and use recommendations — in 14 languages.",
      ctaPrimary: "Try free for 14 days",
      ctaSecondary: "See how it works",
      trust: ["14 languages", "No credit card", "14 days Premium", "Free plan"],
      imageAlt: "Guest scanning a ChefVision QR code at a restaurant table",
    },
    problem: {
      headline: "Not every guest knows what to order.",
      text: "Especially when the menu is in a foreign language. Unfamiliar ingredients, local dishes and uncertainty often lead to the safest choice.",
      items: ["I don’t understand the menu.", "I don’t know what to choose.", "I don’t know the local dishes."],
      imageAlt: "Guest confused by a paper menu in a foreign language",
    },
    solution: {
      headline: "ChefVision helps the guest decide.",
      sub: "From the first look at the menu to a confident choice.",
      steps: [
        { num: "01", title: "Understand", desc: "The menu is available in the guest’s language." },
        { num: "02", title: "Discover", desc: "Photos and details help guests learn about each dish." },
        { num: "03", title: "Choose", desc: "Recommendations and pairings help them decide." },
      ],
    },
    recommendations: {
      headline: "Don’t just show the menu. Help sell more.",
      sub: "ChefVision lets the restaurant use the moment when a guest is choosing a dish.",
      items: [
        { label: "Recommended", example: "We recommend with this dish" },
        { label: "Popular", example: "Guests often order with" },
        { label: "Better as a set", example: "Most popular set" },
      ],
      note: "The restaurant decides what to recommend.",
      imageAlt: "Recommendations and pairings in the ChefVision digital menu",
    },
    languages: {
      headline: "Your guest doesn’t have to speak Polish.",
      text: "A ChefVision menu can be available in 14 languages, so international guests can understand the offer on their own.",
      list: languageNames,
    },
    journey: {
      headline: "Guests come for an experience. Not for an instruction manual.",
      steps: [
        {
          label: "Uncertainty",
          src: journeyImages.scene1,
          alt: "Guest unsure with a paper menu",
        },
        {
          label: "Understanding",
          src: journeyImages.scene2,
          alt: "Guest reading the menu in their language",
        },
        {
          label: "Confident choice",
          src: journeyImages.scene3,
          alt: "Guest using recommendations",
        },
        {
          label: "Better experience",
          src: journeyImages.scene4,
          alt: "Happy guest at the table",
        },
      ],
      mobileFlow: "Uncertainty → Understanding → Confident choice → Better experience",
    },
    benefits: {
      headline: "Built for real hospitality.",
      sub: "Not a list of technology — solutions to problems you know from the floor.",
      items: [
        {
          title: "QR menu",
          desc: "Guests open the menu on their phone — no app and no waiting for a waiter with a paper menu.",
        },
        {
          title: "14 languages",
          desc: "International guests understand the offer themselves and order with more confidence.",
        },
        {
          title: "Dish photos",
          desc: "Guests see what they get — fewer questions, more informed choices.",
        },
        {
          title: "Recommendations & pairings",
          desc: "Promote selected dishes, drinks and sets at the moment of decision.",
        },
        {
          title: "Promotions",
          desc: "Highlight the items you want to sell more often.",
        },
        {
          title: "Statistics",
          desc: "See what guests view and what is worth emphasizing on the menu.",
        },
      ],
    },
    story: {
      badge: "Story",
      headline: "ChefVision was born in hospitality.",
      p1: "For more than 18 years I worked in hotel gastronomy. I saw how often guests struggle to understand the menu — especially when they arrive from abroad.",
      p2: "ChefVision was created to solve that problem.",
      imageAlt: "Marcin Koniuszko — founder of ChefVision",
    },
    finalCta: {
      badge: "Start without risk",
      headline: "Try ChefVision for 14 days",
      sub: "Full Premium access. No credit card.",
      button: "Try free for 14 days",
      note: "After the trial you choose the Start or Premium plan.",
    },
  },
  hr: {
    nav: {
      how: "Kako funkcionira?",
      forWhom: "Za koga?",
      pricing: "Cjenik",
      faq: "FAQ",
      cta: "Isprobajte besplatno",
      logoAria: "ChefVision za restorane",
      menuToggle: "Otvori izbornik",
    },
    hero: {
      badge: "ChefVision za restorane",
      headline: "Pomozite gostima odabrati više. Prodajte više.",
      sub: "ChefVision pomaže gostima razumjeti meni, otkrivati jela i koristiti preporuke — na 14 jezika.",
      ctaPrimary: "Isprobajte besplatno 14 dana",
      ctaSecondary: "Pogledajte kako funkcionira",
      trust: ["14 jezika", "Bez kreditne kartice", "14 dana Premium", "Besplatni plan"],
      imageAlt: "Gost skenira ChefVision QR kod za stolom u restoranu",
    },
    problem: {
      headline: "Ne zna svaki gost što naručiti.",
      text: "Posebno kada je meni na stranom jeziku. Nepoznati sastojci, lokalna jela i nesigurnost često završe najsigurnijim izborom.",
      items: ["Ne razumijem meni.", "Ne znam što odabrati.", "Ne poznajem lokalna jela."],
      imageAlt: "Gost zbunjen papirnatim menijem na stranom jeziku",
    },
    solution: {
      headline: "ChefVision pomaže gostu donijeti odluku.",
      sub: "Od prvog pogleda na meni do sigurnog izbora.",
      steps: [
        { num: "01", title: "Razumij", desc: "Meni je dostupan na jeziku gosta." },
        { num: "02", title: "Otkrij", desc: "Fotografije i informacije pomažu upoznati jelo." },
        { num: "03", title: "Odaberi", desc: "Preporuke i uparivanja pomažu donijeti odluku." },
      ],
    },
    recommendations: {
      headline: "Ne samo pokažite meni. Pomozite prodati više.",
      sub: "ChefVision omogućuje restoranu da iskoristi trenutak u kojem gost upravo bira jelo.",
      items: [
        { label: "Preporučeno", example: "Preporučujemo uz ovo jelo" },
        { label: "Popularno", example: "Gosti često naručuju uz" },
        { label: "Povoljnije u setu", example: "Najpopularniji set" },
      ],
      note: "Restoran sam odlučuje što preporučiti.",
      imageAlt: "Preporuke i uparivanja u digitalnom meniju ChefVision",
    },
    languages: {
      headline: "Vaš gost ne mora govoriti poljski.",
      text: "ChefVision meni može biti dostupan na 14 jezika, tako da međunarodni gost sam može razumjeti ponudu.",
      list: languageNames,
    },
    journey: {
      headline: "Gost dolazi zbog iskustva. Ne zbog uputa za uporabu.",
      steps: [
        {
          label: "Nesigurnost",
          src: journeyImages.scene1,
          alt: "Gost nesiguran uz papirnati meni",
        },
        {
          label: "Razumijevanje",
          src: journeyImages.scene2,
          alt: "Gost čita meni na svom jeziku",
        },
        {
          label: "Siguran izbor",
          src: journeyImages.scene3,
          alt: "Gost koristi preporuke",
        },
        {
          label: "Bolje iskustvo",
          src: journeyImages.scene4,
          alt: "Zadovoljan gost za stolom",
        },
      ],
      mobileFlow: "Nesigurnost → Razumijevanje → Siguran izbor → Bolje iskustvo",
    },
    benefits: {
      headline: "Stvoreno s mišlju o pravoj gastronomiji.",
      sub: "Ne popis tehnologije — rješenja problema koje poznajete iz sale.",
      items: [
        {
          title: "QR meni",
          desc: "Gost otvara kartu na svom telefonu — bez aplikacije i bez čekanja konobara s menijem.",
        },
        {
          title: "14 jezika",
          desc: "Inozemni gost sam razumije ponudu i naručuje sigurnije.",
        },
        {
          title: "Fotografije jela",
          desc: "Gost vidi što će dobiti — manje pitanja, više svjesnih izbora.",
        },
        {
          title: "Preporuke i uparivanja",
          desc: "Promovirate odabrana jela, pića i setove u trenutku odluke.",
        },
        {
          title: "Promocije",
          desc: "Ističete artikle koje želite češće prodavati.",
        },
        {
          title: "Statistika",
          desc: "Vidite što gosti pregledavaju i što vrijedi naglasiti na karti.",
        },
      ],
    },
    story: {
      badge: "Priča",
      headline: "ChefVision je nastao u gastronomiji.",
      p1: "Više od 18 godina radio sam u hotelskoj gastronomiji. Vidio sam koliko često gosti imaju problem s razumijevanjem menija — osobito kada stižu iz inozemstva.",
      p2: "ChefVision je nastao iz potrebe da se taj problem riješi.",
      imageAlt: "Marcin Koniuszko — osnivač ChefVisiona",
    },
    finalCta: {
      badge: "Započnite bez rizika",
      headline: "Isprobajte ChefVision 14 dana",
      sub: "Puni Premium pristup. Bez kreditne kartice.",
      button: "Isprobajte besplatno 14 dana",
      note: "Nakon probnog razdoblja birate plan Start ili Premium.",
    },
  },
}

/** /restauracje: PL + EN + HR. Other locales fall back to English. */
export function getRestauracjeContent(locale: Locale): RestauracjeCopy {
  if (locale === "pl") return restauracjeContent.pl
  if (locale === "hr") return restauracjeContent.hr
  return restauracjeContent.en
}
