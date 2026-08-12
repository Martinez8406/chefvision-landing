import type { Locale } from "./translations"

export type HoteleCopy = {
  nav: {
    features: string
    how: string
    forHotels: string
    about: string
    cta: string
    logoAria: string
    menuToggle: string
  }
  hero: {
    badge: string
    headline: string
    sub: string
    support: string
    ctaPrimary: string
    ctaSecondary: string
    trust: string
    imageAlt: string
  }
  local: {
    badge: string
    headline: string
    text: string
    cta: string
  }
  problem: {
    headline: string
    questions: string[]
    forGuest: string
    forStaff: string
    solution: string
  }
  hub: {
    badge: string
    headline: string
    sub: string
    services: string[]
    note: string
    alt1: string
    alt2: string
    alt3: string
  }
  languages: {
    headline: string
    p2: string
    p3: string
    imageAlt: string
    list: { code: string; name: string }[]
  }
  recommendations: {
    headline: string
    subline: string
    items: { label: string; desc: string }[]
    note: string
    imageAlt: string
  }
  operations: {
    headline: string
    p1a: string
    p1b: string
    p2: string
    p3: string
    state1: string
    state1Caption: string
    state1Alt: string
    state2: string
    state2Caption: string
    state2Alt: string
  }
  story: {
    badge: string
    headline: string
    p1: string
    p2: string
    problems: string[]
    closing: string
    imageAlt: string
  }
  implementation: {
    headline: string
    steps: { num: string; title: string; desc: string; alt: string }[]
  }
  services: {
    headline: string
    sub: string
    decide: string
    weHelp: string
    items: {
      id: string
      badge: string
      badgeTone: "dark" | "accent"
      price: string
      currency: string
      title: string
      desc: string
      features: string[]
      cta: string
      location: string
    }[]
  }
  offer: {
    headline: string
    sub: string
    trialBadge: string
    trialTitle: string
    trialNote: string
    premiumLabel: string
    perMonth: string
    includesLabel: string
    includes: string[]
    cta: string
  }
  finalCta: {
    headline: string
    text: string
    p1: string
    p2a: string
    p2b: string
    ctaDemo: string
    ctaTrial: string
  }
}

const languageList = [
  { code: "PL", name: "Polski" },
  { code: "EN", name: "English" },
  { code: "DE", name: "Deutsch" },
  { code: "ES", name: "Español" },
  { code: "IT", name: "Italiano" },
  { code: "FR", name: "Français" },
  { code: "ZH", name: "中文" },
  { code: "JA", name: "日本語" },
  { code: "KO", name: "한국어" },
  { code: "AR", name: "العربية" },
  { code: "UK", name: "Українська" },
  { code: "CS", name: "Čeština" },
  { code: "NL", name: "Nederlands" },
  { code: "HE", name: "עברית" },
]

export const hoteleContent: Record<"pl" | "en" | "hr", HoteleCopy> = {
  pl: {
    nav: {
      features: "Funkcje",
      how: "Jak to działa",
      forHotels: "Dla hoteli",
      about: "O nas",
      cta: "Sprawdź ChefVision",
      logoAria: "ChefVision dla hoteli",
      menuToggle: "Otwórz menu",
    },
    hero: {
      badge: "ChefVision dla hoteli",
      headline: "Twój gość nie powinien szukać informacji.",
      sub: "Room Service, restauracja, Bar, Spa, śniadania i najważniejsze informacje o hotelu — wszystko dostępne z telefonu gościa.",
      support:
        "ChefVision pomaga hotelom lepiej informować gości, ułatwiać obsługę i tworzyć więcej okazji do sprzedaży.",
      ctaPrimary: "Sprawdź ChefVision za darmo",
      ctaSecondary: "Zobacz, jak działa",
      trust: "14 dni na sprawdzenie ChefVision. Bez zobowiązań.",
      imageAlt: "Hotel Hub ChefVision na telefonie gościa obok kodu QR w pokoju hotelowym",
    },
    local: {
      badge: "Hotele z Wrocławia i okolic",
      headline: "Osobiście pomogę Ci wdrożyć ChefVision — bez dodatkowych kosztów.",
      text: "Pokażę Ci, jak przygotować system, skonfigurować Hotel Hub i uruchomić go dla Twoich gości.",
      cta: "Umów bezpłatne wdrożenie",
    },
    problem: {
      headline: "Gość ma pytanie. Recepcja ma kolejne zadanie.",
      questions: [
        "Gdzie jest restauracja?",
        "O której jest śniadanie?",
        "Jak zamówić Room Service?",
        "Czy hotel ma Spa?",
        "Jak wygląda menu baru?",
      ],
      forGuest: "Dla gościa to proste pytania.",
      forStaff: "Dla pracowników hotelu — dziesiątki powtarzających się pytań każdego dnia.",
      solution: "ChefVision pozwala przekazać te informacje gościowi, zanim będzie musiał o nie pytać.",
    },
    hub: {
      badge: "Hotel Hub",
      headline: "Jeden kod QR. Cały hotel w telefonie gościa.",
      sub: "Gość skanuje kod QR znajdujący się w pokoju i otrzymuje dostęp do hotelowego centrum informacji.",
      services: ["Room Service", "Restauracja", "Bar", "Spa", "Śniadania", "Informacje o hotelu"],
      note: "Hotel Hub to nie jeden ekran — to całe doświadczenie gościa: usługi, menu i informacje w jednym miejscu.",
      alt1: "Hotel Hub ChefVision — ekran Information i Room Service",
      alt2: "Hotel Hub — Bar, Spa i menu śniadaniowe",
      alt3: "Hotel Hub — Room Service, All Day Dining i zestawy",
    },
    languages: {
      headline: "Twój hotel może przyjmować gości z całego świata.",
      p2: "ChefVision pozwala prezentować menu i informacje w 14 językach, dzięki czemu zagraniczny gość może łatwiej zrozumieć ofertę hotelu.",
      p3: "Kiedy gość rozumie ofertę, łatwiej podejmuje decyzję.",
      imageAlt: "ChefVision — danie z tłumaczeniem i wyborem spośród 14 języków",
      list: languageList,
    },
    recommendations: {
      headline: "Nie wystarczy pokazać gościowi menu.",
      subline: "Trzeba jeszcze pomóc mu wybrać.",
      items: [
        { label: "Polecane", desc: "Sugestie dań, napojów i dodatków." },
        { label: "Popularne", desc: "Produkty, które inni goście często wybierają." },
        { label: "W zestawie taniej", desc: "Gotowe zestawy zwiększające wartość zamówienia." },
      ],
      note: "ChefVision pomaga gościowi zdecydować — i daje hotelowi dodatkową możliwość sprzedaży.",
      imageAlt: "ChefVision — polecane danie z rekomendacją wina Pinot Noir",
    },
    operations: {
      headline: "Mniej powtarzalnych pytań. Więcej czasu na prawdziwą obsługę.",
      p1a: "ChefVision nie zastępuje pracowników hotelu.",
      p1b: "Pomaga im.",
      p2: "Technologia zabiera część powtarzalnej pracy, żeby pracownicy mogli skupić się na gościu.",
      p3: "Gość może poprosić o pomoc lub rachunek bezpośrednio ze swojego telefonu.",
      state1: "Stan 1",
      state1Caption: "Potrzebujesz pomocy?\nWezwij obsługę",
      state1Alt: "ChefVision — Potrzebujesz pomocy? Wezwij obsługę",
      state2: "Stan 2",
      state2Caption: "Wezwij kelnera · Dodatkowe zamówienie · Prośba o rachunek",
      state2Alt: "ChefVision — wezwij kelnera, dodatkowe zamówienie, prośba o rachunek",
    },
    story: {
      badge: "Historia",
      headline: "ChefVision powstał z doświadczenia hotelowej gastronomii.",
      p1: "Pracuję w hotelarstwie od ponad 18 lat.",
      p2: "Przez lata widziałem te same problemy:",
      problems: [
        "Gość nie rozumie menu.",
        "Nie wie, gdzie znaleźć informację.",
        "Pyta o rzeczy, które powinny być łatwo dostępne.",
        "Obsługa traci czas na powtarzalne odpowiedzi.",
      ],
      closing:
        "ChefVision powstał po to, żeby te informacje były dostępne w jednym miejscu — bezpośrednio w telefonie gościa.",
      imageAlt: "Marcin Koniuszko — założyciel ChefVision",
    },
    implementation: {
      headline: "Zacznij bez skomplikowanego wdrożenia.",
      steps: [
        {
          num: "01",
          title: "Tworzymy przestrzeń Twojego hotelu",
          desc: "Logo, informacje, menu i usługi.",
          alt: "Przestrzeń hotelu w Hotel Hub ChefVision",
        },
        {
          num: "02",
          title: "Otrzymujesz kody QR",
          desc: "Umieszczasz je w pokojach i wybranych miejscach hotelu.",
          alt: "Usługi hotelu dostępne po zeskanowaniu kodu QR",
        },
        {
          num: "03",
          title: "Goście korzystają z telefonu",
          desc: "Bez instalowania aplikacji.",
          alt: "Gość korzysta z usług hotelu w telefonie",
        },
        {
          num: "04",
          title: "Ty aktualizujesz informacje",
          desc: "Zmiana menu lub informacji nie wymaga ponownego drukowania całego materiału.",
          alt: "Informacje hotelowe aktualizowane w Hotel Hub",
        },
      ],
    },
    services: {
      headline: "Nie chcesz przygotowywać wszystkiego sam?",
      sub: "Możemy przygotować to za Ciebie.",
      decide: "Ty decydujesz, jak ma wyglądać Twój hotel.",
      weHelp: "My możemy zająć się przygotowaniem materiałów.",
      items: [
        {
          id: "menu",
          badge: "Usługa zespołu",
          badgeTone: "dark",
          price: "299",
          currency: "jednorazowo",
          title: "Zleć wykonanie menu",
          desc: "Zakładasz konto jak zwykle — my zdalnie przygotujemy Twoją kartę cyfrową.",
          features: [
            "Zespół ChefVision buduje Twoje menu cyfrowe",
            "Zdjęcia, opisy, kategorie i ceny",
            "Gotowe publiczne menu z linkiem i QR",
            "Ty nadal masz własne konto i pełną kontrolę",
          ],
          cta: "Zlecam wykonanie",
          location: "service_menu",
        },
        {
          id: "flyer",
          badge: "Projekt graficzny",
          badgeTone: "accent",
          price: "149",
          currency: "jednorazowo",
          title: "Ulotka QR",
          desc: "Ulotka QR dopasowana do Twojego hotelu. Personalizowany projekt z kodem QR do Twojego menu, gotowy do druku, w stylu Twojej marki.",
          features: [
            "3 warianty projektu do wyboru",
            "3 drobne poprawki do wybranego wariantu (kolory, teksty, układ)",
            "Plik gotowy do druku (PDF, format A5)",
            "Realizacja w 3 dni robocze",
          ],
          cta: "Zlecam ulotkę",
          location: "service_flyer",
        },
      ],
    },
    offer: {
      headline: "Sprawdź, czy ChefVision sprawdzi się w Twoim hotelu.",
      sub: "Uruchom system, dodaj informacje swojego hotelu i sprawdź go w rzeczywistych warunkach.",
      trialBadge: "Okres próbny",
      trialTitle: "14 dni pełnej wersji.",
      trialNote: "Bez długoterminowego zobowiązania.",
      premiumLabel: "Premium",
      perMonth: "/ miesiąc",
      includesLabel: "Premium obejmuje:",
      includes: [
        "Hotel Hub",
        "Rekomendacje i promocje",
        "Statystyki",
        "Funkcje hotelowe",
        "Pełne możliwości systemu",
      ],
      cta: "Sprawdź przez 14 dni",
    },
    finalCta: {
      headline: "Chcesz zobaczyć ChefVision w swoim hotelu?",
      text: "Jeśli Twój hotel znajduje się we Wrocławiu lub okolicy, przyjadę osobiście i pomogę Ci uruchomić ChefVision — bez dodatkowych kosztów wdrożenia.",
      p1: "Nie musisz sam zastanawiać się, jak skonfigurować system.",
      p2a: "Pokażesz mi swój hotel.",
      p2b: "Ja pokażę Ci, jak ChefVision może działać dla Twoich gości.",
      ctaDemo: "Umów bezpłatne wdrożenie",
      ctaTrial: "Zacznij 14-dniowy okres próbny",
    },
  },
  en: {
    nav: {
      features: "Features",
      how: "How it works",
      forHotels: "For hotels",
      about: "About",
      cta: "Try ChefVision",
      logoAria: "ChefVision for hotels",
      menuToggle: "Toggle menu",
    },
    hero: {
      badge: "ChefVision for hotels",
      headline: "Your guest shouldn’t have to search for information.",
      sub: "Room Service, restaurant, Bar, Spa, breakfast and the most important hotel information — all available from the guest’s phone.",
      support:
        "ChefVision helps hotels inform guests better, simplify service and create more sales opportunities.",
      ctaPrimary: "Try ChefVision for free",
      ctaSecondary: "See how it works",
      trust: "14 days to try ChefVision. No commitment.",
      imageAlt: "ChefVision Hotel Hub on a guest phone next to a QR code in a hotel room",
    },
    local: {
      badge: "Hotels in Wrocław and nearby",
      headline: "I’ll personally help you implement ChefVision — at no extra cost.",
      text: "I’ll show you how to prepare the system, configure Hotel Hub and launch it for your guests.",
      cta: "Book a free setup",
    },
    problem: {
      headline: "The guest has a question. Reception has another task.",
      questions: [
        "Where is the restaurant?",
        "What time is breakfast?",
        "How do I order Room Service?",
        "Does the hotel have a Spa?",
        "What does the bar menu look like?",
      ],
      forGuest: "For the guest, these are simple questions.",
      forStaff: "For hotel staff — dozens of repeating questions every day.",
      solution: "ChefVision lets you give guests this information before they have to ask.",
    },
    hub: {
      badge: "Hotel Hub",
      headline: "One QR code. The whole hotel on the guest’s phone.",
      sub: "The guest scans the QR code in the room and gets access to the hotel information hub.",
      services: ["Room Service", "Restaurant", "Bar", "Spa", "Breakfast", "Hotel information"],
      note: "Hotel Hub is not one screen — it is the full guest experience: services, menus and information in one place.",
      alt1: "ChefVision Hotel Hub — Information and Room Service screen",
      alt2: "Hotel Hub — Bar, Spa and breakfast menu",
      alt3: "Hotel Hub — Room Service, All Day Dining and sets",
    },
    languages: {
      headline: "Your hotel can welcome guests from around the world.",
      p2: "ChefVision lets you present menus and information in 14 languages, so international guests can understand the hotel offer more easily.",
      p3: "When a guest understands the offer, they decide more easily.",
      imageAlt: "ChefVision — a dish with translation and a choice of 14 languages",
      list: languageList,
    },
    recommendations: {
      headline: "Showing the guest a menu is not enough.",
      subline: "You still need to help them choose.",
      items: [
        { label: "Recommended", desc: "Suggestions for dishes, drinks and extras." },
        { label: "Popular", desc: "Items other guests often choose." },
        { label: "Better as a set", desc: "Ready sets that increase order value." },
      ],
      note: "ChefVision helps the guest decide — and gives the hotel another sales opportunity.",
      imageAlt: "ChefVision — recommended dish with a Pinot Noir wine suggestion",
    },
    operations: {
      headline: "Fewer repetitive questions. More time for real service.",
      p1a: "ChefVision does not replace hotel staff.",
      p1b: "It helps them.",
      p2: "Technology takes over some of the repetitive work so staff can focus on the guest.",
      p3: "Guests can ask for help or the bill directly from their phone.",
      state1: "State 1",
      state1Caption: "Need help?\nCall staff",
      state1Alt: "ChefVision — Need help? Call staff",
      state2: "State 2",
      state2Caption: "Call waiter · Extra order · Request the bill",
      state2Alt: "ChefVision — call waiter, extra order, request the bill",
    },
    story: {
      badge: "Story",
      headline: "ChefVision was born from hotel gastronomy experience.",
      p1: "I have worked in hospitality for more than 18 years.",
      p2: "Over the years I saw the same problems:",
      problems: [
        "The guest doesn’t understand the menu.",
        "They don’t know where to find information.",
        "They ask about things that should be easy to access.",
        "Staff lose time on repetitive answers.",
      ],
      closing:
        "ChefVision was created so this information is available in one place — directly on the guest’s phone.",
      imageAlt: "Marcin Koniuszko — founder of ChefVision",
    },
    implementation: {
      headline: "Start without a complicated setup.",
      steps: [
        {
          num: "01",
          title: "We create your hotel space",
          desc: "Logo, information, menus and services.",
          alt: "Hotel space in ChefVision Hotel Hub",
        },
        {
          num: "02",
          title: "You receive QR codes",
          desc: "You place them in rooms and selected hotel areas.",
          alt: "Hotel services available after scanning a QR code",
        },
        {
          num: "03",
          title: "Guests use their phone",
          desc: "No app installation required.",
          alt: "Guest using hotel services on their phone",
        },
        {
          num: "04",
          title: "You update the information",
          desc: "Changing a menu or information does not require reprinting all materials.",
          alt: "Hotel information updated in Hotel Hub",
        },
      ],
    },
    services: {
      headline: "Don’t want to prepare everything yourself?",
      sub: "We can prepare it for you.",
      decide: "You decide how your hotel should look.",
      weHelp: "We can take care of preparing the materials.",
      items: [
        {
          id: "menu",
          badge: "Team service",
          badgeTone: "dark",
          price: "299",
          currency: "one-time",
          title: "Commission menu setup",
          desc: "You create an account as usual — we remotely prepare your digital menu.",
          features: [
            "The ChefVision team builds your digital menu",
            "Photos, descriptions, categories and prices",
            "Ready public menu with link and QR",
            "You still keep your own account and full control",
          ],
          cta: "Commission setup",
          location: "service_menu",
        },
        {
          id: "flyer",
          badge: "Graphic design",
          badgeTone: "accent",
          price: "149",
          currency: "one-time",
          title: "QR flyer",
          desc: "A QR flyer tailored to your hotel. A personalized design with a QR code to your menu, print-ready, in your brand style.",
          features: [
            "3 design variants to choose from",
            "3 minor revisions to the selected variant (colors, texts, layout)",
            "Print-ready file (PDF, A5 format)",
            "Delivery in 3 business days",
          ],
          cta: "Commission flyer",
          location: "service_flyer",
        },
      ],
    },
    offer: {
      headline: "See if ChefVision works for your hotel.",
      sub: "Launch the system, add your hotel information and test it in real conditions.",
      trialBadge: "Trial period",
      trialTitle: "14 days of the full version.",
      trialNote: "No long-term commitment.",
      premiumLabel: "Premium",
      perMonth: "/ month",
      includesLabel: "Premium includes:",
      includes: [
        "Hotel Hub",
        "Recommendations and promotions",
        "Statistics",
        "Hotel features",
        "Full system capabilities",
      ],
      cta: "Try for 14 days",
    },
    finalCta: {
      headline: "Want to see ChefVision in your hotel?",
      text: "If your hotel is in Wrocław or nearby, I’ll come in person and help you launch ChefVision — with no extra implementation cost.",
      p1: "You don’t have to figure out the setup alone.",
      p2a: "You’ll show me your hotel.",
      p2b: "I’ll show you how ChefVision can work for your guests.",
      ctaDemo: "Book a free setup",
      ctaTrial: "Start the 14-day trial",
    },
  },
  hr: {
    nav: {
      features: "Značajke",
      how: "Kako funkcionira",
      forHotels: "Za hotele",
      about: "O nama",
      cta: "Isprobajte ChefVision",
      logoAria: "ChefVision za hotele",
      menuToggle: "Otvori izbornik",
    },
    hero: {
      badge: "ChefVision za hotele",
      headline: "Vaš gost ne bi trebao tražiti informacije.",
      sub: "Room Service, restoran, Bar, Spa, doručak i najvažnije informacije o hotelu — sve dostupno s gostova telefona.",
      support:
        "ChefVision pomaže hotelima bolje informirati goste, olakšati uslugu i stvoriti više prilika za prodaju.",
      ctaPrimary: "Isprobajte ChefVision besplatno",
      ctaSecondary: "Pogledajte kako funkcionira",
      trust: "14 dana za isprobavanje ChefVisiona. Bez obveza.",
      imageAlt: "ChefVision Hotel Hub na telefonu gosta pored QR koda u hotelskoj sobi",
    },
    local: {
      badge: "Hoteli iz Wrocławia i okolice",
      headline: "Osobno ću vam pomoći uvesti ChefVision — bez dodatnih troškova.",
      text: "Pokazat ću vam kako pripremiti sustav, konfigurirati Hotel Hub i pokrenuti ga za vaše goste.",
      cta: "Dogovorite besplatnu implementaciju",
    },
    problem: {
      headline: "Gost ima pitanje. Recepcija ima još jedan zadatak.",
      questions: [
        "Gdje je restoran?",
        "U koje vrijeme je doručak?",
        "Kako naručiti Room Service?",
        "Ima li hotel Spa?",
        "Kako izgleda meni bara?",
      ],
      forGuest: "Za gosta su to jednostavna pitanja.",
      forStaff: "Za hotelsko osoblje — deseci ponavljajućih pitanja svaki dan.",
      solution: "ChefVision omogućuje da te informacije date gostu prije nego što mora pitati.",
    },
    hub: {
      badge: "Hotel Hub",
      headline: "Jedan QR kod. Cijeli hotel na telefonu gosta.",
      sub: "Gost skenira QR kod u sobi i dobiva pristup hotelskom informacijskom središtu.",
      services: ["Room Service", "Restoran", "Bar", "Spa", "Doručak", "Informacije o hotelu"],
      note: "Hotel Hub nije jedan zaslon — to je cijelo iskustvo gosta: usluge, meniji i informacije na jednom mjestu.",
      alt1: "ChefVision Hotel Hub — zaslon Information i Room Service",
      alt2: "Hotel Hub — Bar, Spa i meni doručka",
      alt3: "Hotel Hub — Room Service, All Day Dining i setovi",
    },
    languages: {
      headline: "Vaš hotel može primati goste iz cijelog svijeta.",
      p2: "ChefVision omogućuje prikaz menija i informacija na 14 jezika, tako da inozemni gost lakše razumije hotelsku ponudu.",
      p3: "Kada gost razumije ponudu, lakše donosi odluku.",
      imageAlt: "ChefVision — jelo s prijevodom i izborom među 14 jezika",
      list: languageList,
    },
    recommendations: {
      headline: "Nije dovoljno pokazati gostu meni.",
      subline: "Treba mu još pomoći da odabere.",
      items: [
        { label: "Preporučeno", desc: "Prijedlozi jela, pića i dodataka." },
        { label: "Popularno", desc: "Proizvodi koje drugi gosti često biraju." },
        { label: "Povoljnije u setu", desc: "Gotovi setovi koji povećavaju vrijednost narudžbe." },
      ],
      note: "ChefVision pomaže gostu odlučiti — i daje hotelu dodatnu mogućnost prodaje.",
      imageAlt: "ChefVision — preporučeno jelo s prijedlogom vina Pinot Noir",
    },
    operations: {
      headline: "Manje ponavljajućih pitanja. Više vremena za pravu uslugu.",
      p1a: "ChefVision ne zamjenjuje hotelsko osoblje.",
      p1b: "Pomaže im.",
      p2: "Tehnologija preuzima dio ponavljajućeg rada kako bi se osoblje moglo usredotočiti na gosta.",
      p3: "Gost može zatražiti pomoć ili račun izravno sa svog telefona.",
      state1: "Stanje 1",
      state1Caption: "Trebate pomoć?\nPozovite osoblje",
      state1Alt: "ChefVision — Trebate pomoć? Pozovite osoblje",
      state2: "Stanje 2",
      state2Caption: "Pozovi konobara · Dodatna narudžba · Zahtjev za račun",
      state2Alt: "ChefVision — pozovi konobara, dodatna narudžba, zahtjev za račun",
    },
    story: {
      badge: "Priča",
      headline: "ChefVision je nastao iz iskustva hotelske gastronomije.",
      p1: "Radim u hotelijerstvu više od 18 godina.",
      p2: "Kroz godine vidio sam iste probleme:",
      problems: [
        "Gost ne razumije meni.",
        "Ne zna gdje pronaći informaciju.",
        "Pita za stvari koje bi trebale biti lako dostupne.",
        "Osoblje gubi vrijeme na ponavljajuće odgovore.",
      ],
      closing:
        "ChefVision je nastao kako bi te informacije bile dostupne na jednom mjestu — izravno na telefonu gosta.",
      imageAlt: "Marcin Koniuszko — osnivač ChefVisiona",
    },
    implementation: {
      headline: "Započnite bez složene implementacije.",
      steps: [
        {
          num: "01",
          title: "Stvaramo prostor vašeg hotela",
          desc: "Logo, informacije, meniji i usluge.",
          alt: "Prostor hotela u ChefVision Hotel Hubu",
        },
        {
          num: "02",
          title: "Dobivate QR kodove",
          desc: "Stavljate ih u sobe i odabrana mjesta u hotelu.",
          alt: "Hotelske usluge dostupne nakon skeniranja QR koda",
        },
        {
          num: "03",
          title: "Gosti koriste telefon",
          desc: "Bez instaliranja aplikacije.",
          alt: "Gost koristi hotelske usluge na telefonu",
        },
        {
          num: "04",
          title: "Vi ažurirate informacije",
          desc: "Promjena menija ili informacija ne zahtijeva ponovno tiskanje cijelog materijala.",
          alt: "Hotelske informacije ažurirane u Hotel Hubu",
        },
      ],
    },
    services: {
      headline: "Ne želite sve pripremati sami?",
      sub: "Možemo to pripremiti za vas.",
      decide: "Vi odlučujete kako će izgledati vaš hotel.",
      weHelp: "Mi se možemo pobrinuti za pripremu materijala.",
      items: [
        {
          id: "menu",
          badge: "Usluga tima",
          badgeTone: "dark",
          price: "299",
          currency: "jednokratno",
          title: "Naručite izradu menija",
          desc: "Otvorite račun kao i obično — mi ćemo na daljinu pripremiti vašu digitalnu kartu.",
          features: [
            "Tim ChefVision gradi vaš digitalni meni",
            "Fotografije, opisi, kategorije i cijene",
            "Gotov javni meni s poveznicom i QR-om",
            "I dalje imate vlastiti račun i potpunu kontrolu",
          ],
          cta: "Naručujem izradu",
          location: "service_menu",
        },
        {
          id: "flyer",
          badge: "Grafički dizajn",
          badgeTone: "accent",
          price: "149",
          currency: "jednokratno",
          title: "QR letak",
          desc: "QR letak prilagođen vašem hotelu. Personalizirani dizajn s QR kodom do vašeg menija, spreman za tisak, u stilu vaše marke.",
          features: [
            "3 varijante dizajna za odabir",
            "3 manje ispravke odabrane varijante (boje, tekstovi, raspored)",
            "Datoteka spremna za tisak (PDF, format A5)",
            "Izrada u 3 radna dana",
          ],
          cta: "Naručujem letak",
          location: "service_flyer",
        },
      ],
    },
    offer: {
      headline: "Provjerite hoće li se ChefVision uklopiti u vaš hotel.",
      sub: "Pokrenite sustav, dodajte informacije svog hotela i testirajte ga u stvarnim uvjetima.",
      trialBadge: "Probno razdoblje",
      trialTitle: "14 dana pune verzije.",
      trialNote: "Bez dugoročne obveze.",
      premiumLabel: "Premium",
      perMonth: "/ mjesec",
      includesLabel: "Premium uključuje:",
      includes: [
        "Hotel Hub",
        "Preporuke i promocije",
        "Statistika",
        "Hotelske funkcije",
        "Pune mogućnosti sustava",
      ],
      cta: "Isprobajte 14 dana",
    },
    finalCta: {
      headline: "Želite vidjeti ChefVision u svom hotelu?",
      text: "Ako se vaš hotel nalazi u Wrocławu ili okolici, doći ću osobno i pomoći vam pokrenuti ChefVision — bez dodatnih troškova implementacije.",
      p1: "Ne morate sami smišljati kako konfigurirati sustav.",
      p2a: "Pokazat ćete mi svoj hotel.",
      p2b: "Ja ću vam pokazati kako ChefVision može raditi za vaše goste.",
      ctaDemo: "Dogovorite besplatnu implementaciju",
      ctaTrial: "Započnite 14-dnevno probno razdoblje",
    },
  },
}

export const HOTELE_DEMO_MAILTO = {
  pl: "mailto:kontakt@chefvision.pl?subject=Bezp%C5%82atne%20wdro%C5%BCenie%20ChefVision%20%E2%80%94%20hotel%20Wroc%C5%82aw",
  en: "mailto:kontakt@chefvision.pl?subject=Free%20ChefVision%20setup%20%E2%80%94%20hotel%20Wroc%C5%82aw",
  hr: "mailto:kontakt@chefvision.pl?subject=Besplatna%20implementacija%20ChefVision%20%E2%80%94%20hotel%20Wroc%C5%82aw",
} as const

/** /hotele: PL + EN + HR. Other locales fall back to English. */
export function getHoteleContent(locale: Locale): HoteleCopy {
  if (locale === "pl") return hoteleContent.pl
  if (locale === "hr") return hoteleContent.hr
  return hoteleContent.en
}

export function getHoteleDemoMailto(locale: Locale): string {
  if (locale === "pl") return HOTELE_DEMO_MAILTO.pl
  if (locale === "hr") return HOTELE_DEMO_MAILTO.hr
  return HOTELE_DEMO_MAILTO.en
}
