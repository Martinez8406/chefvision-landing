export type Locale = "pl" | "en"

export const translations = {
  pl: {
    nav: {
      features: "Funkcje",
      beta: "Testy beta",
      examples: "Przykłady",
      about: "O nas",
      materials: "Materiały",
      helpCenter: "Centrum pomocy",
      cta: "Zaloguj się",
    },
    hero: {
      freeQrBadge: "Darmowe QR Menu dla restauracji i hoteli",
      badge: "DLA HOTELI I RESTAURACJI",
      headlineBefore: "Lepsza komunikacja. Lepsze ",
      headlineHighlight: "doświadczenie",
      headlineAfter: " gościa.",
      freeQrSub:
        "Stwórz własne QR Menu za darmo. 14 dni pełnej wersji Premium bez karty kredytowej. Po okresie próbnym możesz pozostać na darmowym planie.",
      sub: "ChefVision pomaga hotelom i restauracjom poprawić komunikację z gośćmi, ograniczyć liczbę powtarzalnych pytań i zapewnić szybki dostęp do najważniejszych informacji.",
      cta1: "Wypróbuj za darmo",
      cta2: "Zobacz jak to działa",
      highlights: [
        "Wszystkie informacje w jednym miejscu",
        "Mniej pytań do recepcji",
        "Lepsze doświadczenie gościa",
        "Większa sprzedaż i zadowolenie",
      ],
      ctaTrust: [
        "Darmowy plan",
        "Bez karty kredytowej",
        "14 dni Premium",
        "14 języków",
      ],
    },
    whyChefVision: {
      badge: "DLACZEGO CHEFVISION?",
      headline: "Jedna platforma. Wiele korzyści.",
      cards: [
        {
          title: "Dla gości",
          description:
            "Szybki dostęp do menu, usług i informacji hotelowych po zeskanowaniu kodu QR.",
        },
        {
          title: "Dla personelu",
          description: "Mniej powtarzalnych pytań, więcej czasu na to, co naprawdę ważne.",
        },
        {
          title: "Dla hotelu i restauracji",
          description: "Lepsza komunikacja, większa sprzedaż usług i wyższe oceny gości.",
        },
        {
          title: "Promocje i aktualności",
          description: "Informuj gości o ofertach i wydarzeniach w kilka sekund.",
        },
        {
          title: "Dane i statystyki",
          description: "Zobacz, co interesuje gości i podejmuj lepsze decyzje.",
        },
      ],
    },
    guestInfoHub: {
      badge: "Doświadczenie gościa",
      headline: "Jedno miejsce dla wszystkich informacji",
      description:
        "Hotel Hub zbiera menu, room service, bar, spa i wszystkie informacje o hotelu w jednej aplikacji. Gość skanuje kod QR — i ma wszystko pod ręką.",
      hubLabel: "Hotel Hub",
      hubTitle: "Wszystko, czego gość potrzebuje",
      hubDescription:
        "Zamiast szukać informacji w recepcji, na ulotkach czy w wielu aplikacjach — gość otwiera jeden panel z usługami hotelu.",
      bullets: [
        "Menu restauracji i barów w wielu językach",
        "Room service i zamówienia bez dzwonienia do recepcji",
        "Informacje o hotelu, spa i atrakcjach w okolicy",
        "Godziny otwarcia i dostępność usług zawsze aktualne",
      ],
    },
    qrMenuSeo: {
      whatIs: {
        headline: "Czym jest QR Menu?",
        text: "QR Menu to cyfrowa karta menu dostępna po zeskanowaniu kodu QR telefonem. Dzięki ChefVision restauracje i hotele mogą aktualizować menu online bez drukowania nowych kart oraz udostępniać je gościom w wielu językach.",
      },
      whyUse: {
        headline: "Dlaczego warto korzystać z QR Menu?",
        bullets: [
          "Brak kosztów druku",
          "Natychmiastowe aktualizacje",
          "Menu dostępne na telefonie",
          "Wsparcie dla zagranicznych gości",
          "Większa sprzedaż dzięki rekomendacjom",
        ],
      },
    },
    faq: {
      badge: "Najczęstsze pytania",
      headline: "Pytania o darmowe QR Menu",
      items: [
        {
          question: "Czy QR Menu jest darmowe?",
          answer:
            "Tak. ChefVision oferuje darmowy plan pozwalający stworzyć i udostępnić własne QR Menu bez opłat.",
        },
        {
          question: "Czy potrzebuję karty kredytowej?",
          answer: "Nie. Możesz rozpocząć korzystanie bez podawania danych karty.",
        },
        {
          question: "Co dzieje się po 14 dniach?",
          answer:
            "Po zakończeniu okresu próbnego możesz przejść na wyższy plan lub pozostać przy darmowym.",
        },
        {
          question: "Czy darmowy plan ma limit czasu?",
          answer: "Nie. Darmowy plan działa bez ograniczenia czasowego.",
        },
      ],
    },
    stats: {
      badge: "Potencjał narzędzia",
      headline: "Co może zmienić ChefVision w hotelu/ restauracji ?",
      items: [
        { value: "+25%", label: "Szacowany wzrost rachunku", sub: "Na podstawie danych branżowych z restauracji stosujących upselling cyfrowy — pairingi i rekomendacje przy daniu zwiększają wartość zamówienia." },
        { value: "-30%", label: "Mniej pytań o składniki i tłumaczenia", sub: "Menu w 14 językach odpowiada zanim kelner zdąży podejść do stolika — gość sam czyta i rozumie kartę." },
        { value: "+40%", label: "Więcej napojów i dodatków", sub: "Gdy gość widzi sugestie „Polecane do tego dania” bezpośrednio przy daniu — chętniej dodaje je do zamówienia." },
      ],
    },
    appPreview: {
      badge: "Inteligentne rekomendacje",
      headline: "Sprzedawaj więcej dzięki inteligentnym sugestiom",
      text: "Dodawaj pairingi, zestawy i sugestie, które widzi gość w menu. Pokaż, co warto dobrać do dania i zwiększ jego satysfakcję — oraz wartość zamówienia.",
      bullets: [
        "Pairingi dań z winami, napojami i dodatkami",
        "Zestawy promocyjne (np. Burger + Cola + Frytki -15%)",
        "Informacje „Inni goście wybrali to danie z…”",
        "Promuj wysokomarżowe produkty",
      ],
      imageAlt: "Menu gościa z rekomendacjami pairingów w aplikacji ChefVision",
      bubbleText: "Tak wygląda menu w telefonie gości",
      floatLabel: "Wzrost rachunku",
      floatValue: "+25%",
    },
    howItWorks: {
      badge: "Prawdziwe doświadczenie w restauracji",
      headline: "Każdy gość zasługuje na zrozumienie menu",
      subheadline: "Od dezorientacji do pewności w kilka sekund.",
      scenes: [
        {
          heading: "Gość czuje się zagubiony",
          description:
            "Zagraniczni goście często mają trudność ze zrozumieniem lokalnych dań, składników i tradycyjnych kart menu.",
          imageAlt: "Zdezorientowany gość czyta polskie menu w restauracji",
        },
        {
          heading: "ChefVision wszystko wyjaśnia natychmiast",
          description:
            "Gość skanuje kod QR i od razu widzi menu w swoim języku — ze zdjęciami i opisami dań.",
          imageAlt: "Gość skanuje QR i widzi menu w swoim języku na telefonie",
        },
        {
          heading: "Inteligentne rekomendacje zwiększają zamówienia",
          description:
            "ChefVision pomaga gościom wybierać z pewnością dzięki rekomendacjom, pairingom i popularnym kombinacjom.",
          imageAlt: "Kelner i gość oglądają rekomendacje w aplikacji ChefVision",
        },
      ],
      floatingBadges: ["Popularne", "Polecane", "Najlepsze combo"],
      finale: {
        heading: "Lepsze doświadczenie gościa\nLepsze przychody restauracji",
        subheading: "ChefVision pomaga międzynarodowym gościom czuć się jak u siebie.",
        ctaDemo: "Umów demo",
        ctaTry: "Wypróbuj ChefVision",
        imageAlt: "Zadowolony gość z tradycyjnym daniem w restauracji",
      },
    },
    comparison: {
      headline: "Co zyskujesz od pierwszego dnia",
      sub: "Bez umów, bez sprzętu, bez informatyka. Uruchamiasz w 15 minut.",
      benefits: [
        "Cyfrowe menu w 14 językach — gość skanuje QR i widzi kartę w swoim języku",
        "Hotel Hub — wszystkie informacje o hotelu w jednej aplikacji",
        "Pairingi i rekomendacje — ustawiasz sam z telefonu, bez programisty",
        "Zestawy promocyjne — Burger + Cola + Frytki -15% jednym kliknięciem",
        "Zmiana cen i menu bez drukowania nowych kart",
        "Wideo z kuchni przy każdym daniu — gość kupuje oczami",
        "Stała cena 97 zł/msc — zero prowizji, zero ukrytych opłat",
        "Pełna kontrola z telefonu — zmieniasz wszystko z dowolnego miejsca",
        "Profesjonalne zdjęcia dań — efekt bez fotografa i sesji zdjęciowej",
      ],
    },
    antiPlatform: {
      headline: "ChefVision ≠ UberEats, Glovo czy Wolt",
      sub: "Nie jesteśmy platformą jak Pyszne.pl. Nie zabieramy Twojej marży. ChefVision to Twój pracownik, który kosztuje tylko 3,30 zł dziennie i nigdy nie idzie na chorobowe.",
      featureCol: "Funkcja",
      themCol: "Platformy Dostawcze",
      usCol: "ChefVision",
      rows: [
        { feature: "Prowizja od sprzedaży", them: "15-30%", us: "0%" },
        { feature: "Dodatkowy sprzęt (tablet)", them: "TAK (kolejny tablet na barze)", us: "NIE (działa na Twoim sprzęcie)" },
        { feature: "Kontrola nad klientami", them: "Klienci należą do platformy", us: "Klienci należą do Ciebie" },
        { feature: "Wsparcie dla Twojej marki", them: "Branding platformy na pierwszym planie", us: "Twoja marka na pierwszym planie" },
        { feature: "Ukryte opłaty", them: "Opłaty za rejestrację, usługę, itp.", us: "Przejrzyste ceny, bez niespodzianek" },
        { feature: "Skupienie na", them: "Logistyce i dostawach", us: "Jakości i wizerunku Twojego jedzenia" },
        { feature: "Języki menu", them: "Zazwyczaj podstawowe", us: "14 języków + wideo z kuchni" },
      ],
      keyHeadline: "Inwestujesz 97 zł, odzyskujesz ponad 2 500 zł miesięcznie",
      keyText: "Przy rachunku 200 zł platforma dostawcza zabiera Ci 40–60 zł prowizji. ChefVision kosztuje 97 zł miesięcznie — bez prowizji, bez tabletów, bez utraty klientów. Kelnerzy odzyskują czas, goście zamawiają śmielej, a Ty zbierasz opinie w Google za 1,50 zł.",
    },
    profitMath: {
      headline: "Matematyka, która się opłaca",
      sub: "ChefVision to nie gadżet. To narzędzie, które zwraca się po sprzedaży zaledwie dwóch butelek wina lub trzech deserów miesięcznie.",
      items: [
        {
          title: "Dlaczego PDF pod kodem QR nie działa?",
          points: [
            "Goście nienawidzą powiększać palcami nieczytelnych plików PDF",
            "Zwykły tekst nie sprzedaje tak, jak profesjonalne zdjęcia i wideo z kuchni",
            "PDF nie przetłumaczy się sam na chiński czy koreański",
            "PDF nie zaproponuje wina do steka ani nie poprosi o opinię w Google",
          ],
        },
        {
          title: "Matematyka zysku — twarde liczby",
          points: [
            "Kelner traci średnio 5–7 minut na stolik na tłumaczenie karty (Cornell University)",
            "Przy 3 kelnerach to ~84 zł oszczędności dziennie = 2 500 zł miesięcznie",
            "Koszt ChefVision: 97 zł/msc = 3,23 zł dziennie",
            "Zwrot z inwestycji już po 3–4 dniach",
          ],
        },
        {
          title: "Pełna kontrola managera — z telefonu",
          points: [
            "Ustaw rekomendowane wino do dania dnia w 30 sekund",
            "Zmień bonus za opinię (kawa, lemoniada, nalewka) bez informatyka",
            "Dodaj wideo z kuchni do dowolnego dania jednym kliknięciem",
            "Aktualizuj ceny bez drukowania nowych kart menu",
          ],
        },
      ],
    },
    menuLive: {
      badge: "Menu Live & QR — 14 języków",
      headline: "Twój cichy sprzedawca — w telefonie każdego gościa, w jego języku.",
      text: "Kelner ma dużo pracy i nie ma czasu polecać wina? ChefVision robi to za niego — w 14 językach, 24/7. Gość skanuje kod, widzi menu w swoim języku, ogląda wideo z kuchni i dostaje rekomendację do dania. Wszystko bez słowa od kelnera.",
      bullets: [
        "Menu w 14 językach — automatyczne tłumaczenie dla gości",
        "Wideo z kuchni przy każdym daniu — gość kupuje oczami",
        "Rekomendacje sprzedażowe — ustawiasz sam z telefonu w 30 sekund",
      ],
      cta: "Wypróbuj ChefVision",
      storyLabel: "Historia dania",
      storyText: "Obejrzyj, jak powstaje Twoje danie",
      liveBadge: "Live",
      availableOn: "Dostępne na:",
      behindScenes: "Zaglądam za kulisy",
    },
    cta: {
      badge: "Bez ryzyka",
      headline: "Wypróbuj ChefVision bez ryzyka",
      sub: "14 dni pełnej wersji. Bez karty kredytowej. Anuluj w każdej chwili.",
      freeBanner: "14 dni bezpłatnie — testujesz bez ryzyka, bez karty kredytowej",
      includes: "Co dostajesz w okresie testowym",
      items: [
        "Cyfrowe menu z kodem QR — aktywne 24/7, bez znaku wodnego",
        "50 tokenów na ulepszanie zdjęć dań (światło, tło, kolory)",
        "Menu w 14 językach — automatyczne tłumaczenie dla gości zagranicznych",
        "Rekomendacje sprzedażowe — ustawiasz sam wino, napoje, dodatki do upsellu",
        "Pomagam uruchomić ChefVision krok po kroku — od menu po rekomendacje sprzedażowe",
      ],
      pricingRibbon: "Zacznij za darmo — bez karty kredytowej",
      pricingIntro1:
        "Darmowy plan pozwala stworzyć własne QR Menu i udostępnić je gościom bez żadnych opłat.",
      pricingIntro2:
        "Plan Start i Premium odblokowują dodatkowe funkcje zwiększające sprzedaż, tłumaczenia AI i rekomendacje.",
      pricingTitle:
        "Po okresie testowym możesz przejść na plan Start, Premium lub pozostać przy darmowym menu podstawowym.",
      freePlan: {
        price: "0",
        currency: "zł / miesiąc",
        label: "Plan darmowy",
        desc: "Wciąż masz dostęp do swojego cyfrowego menu w wersji podstawowej.",
        highlights: [
          "Darmowe QR Menu",
          "Bez limitu czasu",
          "Bez karty kredytowej",
        ],
        features: [
          "Cyfrowe menu QR",
          "Podstawowe tłumaczenie (EN)",
          "Aktualizacja menu",
          "Hosting menu",
          "Znak wodny ChefVision",
        ],
      },
      startPlan: {
        badge: "Najlepszy na start",
        price: "30",
        currency: "zł / miesiąc",
        label: "Plan Start",
        desc: "Więcej możliwości sprzedażowych i profesjonalne menu bez znaku wodnego.",
        features: [
          "Pairingi i upselling",
          "10 tokenów AI miesięcznie",
          "Menu bez znaku wodnego",
          "Tłumaczenia menu na 14 języków",
          "Rekomendacje i promocje",
          "Statystyki",
        ],
      },
      regular: {
        badge: "Najczęściej wybierany",
        price: "97",
        currency: "zł / miesiąc",
        label: "Plan Premium",
        desc: "Pełny dostęp do wszystkich funkcji. Anuluj w dowolnym momencie — bez zobowiązań.",
        features: [
          "Pairingi i upselling",
          "Tłumaczenia menu",
          "Hotel Hub",
          "50 tokenów AI miesięcznie",
          "Menu bez znaku wodnego",
          "Rekomendacje i promocje",
          "Statystyki",
          "Pomoc we wdrożeniu",
        ],
      },
      tokenPack: {
        price: "30",
        currency: "zł",
        label: "Paczka +50 tokenów",
        desc: "Jednorazowy zakup. Tokeny nie przedawniają się — czekają na koncie aż do wykorzystania.",
        features: ["Bezterminowe", "Dostępne tylko w planie Premium", "Idealne na zmianę karty sezonowej"],
      },
      tokenNote: "💡 Tokeny abonamentowe resetują się 1. dnia każdego miesiąca i nie przechodzą na kolejny okres. Tokeny z paczki są bezterminowe.",
      ctaBtn: "Zatrudnij cyfrowego asystenta za 3,23 zł dziennie",
    },
    helpCenter: {
      badge: "Poradniki wideo",
      headline: "Centrum pomocy",
      sub: "Krótkie filmy pokazują krok po kroku, jak korzystać z panelu ChefVision — od pierwszego logowania po promocje i zarządzanie menu.",
      watchOnYoutube: "Obejrzyj na YouTube",
      categories: {
        all: "Wszystkie",
        introduction: "Wprowadzenie",
        menu: "Menu",
        promotions: "Promocje",
        account: "Konto",
      },
      videos: [
        {
          youtubeId: "crvc2gk71D4",
          title: "Jak dodać logo i zdjęcie główne do swojego menu",
          description: "Jak dodać logo restauracji i zdjęcie główne widoczne na początku menu gościa.",
          category: "menu",
        },
        {
          youtubeId: "PGdYRjBOvCI",
          youtubeUrl: "https://youtube.com/shorts/PGdYRjBOvCI?feature=share",
          title: "Jak dodać danie do menu",
          description: "Dodawanie nowej pozycji, ustawianie ceny, kategorii i widoczności w menu gościa.",
          category: "menu",
        },
        {
          youtubeId: "34WoLlp3ZsA",
          title: "Zdjęcia, opisy i wideo przy daniu",
          description: "Jak dodać zdjęcie, opis oraz podpiąć link do YouTube, TikToka lub Instagrama.",
          category: "menu",
        },
        {
          youtubeId: "34WoLlp3ZsA",
          title: "Tworzenie promocji i zestawów",
          description: "Konfiguracja zestawów promocyjnych i rekomendacji, które widzi gość przy zamówieniu.",
          category: "promotions",
        },
        {
          youtubeId: "34WoLlp3ZsA",
          title: "Pairingi i rekomendacje sprzedażowe",
          description: "Jak ustawić sugestie napojów, dodatków i kombinacji zwiększających wartość rachunku.",
          category: "promotions",
        },
        {
          youtubeId: "34WoLlp3ZsA",
          title: "Języki menu i ustawienia konta",
          description: "Zarządzanie tłumaczeniami menu oraz podstawowymi ustawieniami profilu restauracji.",
          category: "account",
        },
      ],
    },
    materials: {
      badge: "Materiały",
      headline: "Darmowe materiały dla restauracji i hoteli",
      sub: "Pobierz gotowe szablony Canva, wklej swój kod QR, dodaj nazwę lokalu i wydrukuj w kilka minut. Bez grafika i bez dodatkowych kosztów.",
      info: "Gotowe materiały do pobrania i edycji w Canva. Wystarczy podmienić kod QR, dodać logo lub nazwę lokalu i wydrukować.",
      downloadBtn: "Pobierz szablon",
      placeholderLabel: "Podgląd szablonu",
      items: [
        {
          id: "restaurant-stand-a6",
          name: "Stand restauracyjny A6",
          description: "Kompaktowy stojak na stolik — idealny do menu QR w małej restauracji lub kawiarni.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "restaurant-stand-a5",
          name: "Stand restauracyjny A5",
          description: "Większy format na ladę lub stolik — lepiej widoczny kod QR i nazwa lokalu.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "hotel-reception-stand",
          name: "Stand hotelowy – recepcja",
          description: "Szablon na recepcję z miejscem na QR, logo hotelu i najważniejsze informacje dla gości.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "hotel-room-stand",
          name: "Stand hotelowy – pokój",
          description: "Stojak do pokoju hotelowego — menu, room service i informacje o hotelu w jednym miejscu.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "hotel-lobby-poster",
          name: "Plakat do lobby hotelowego",
          description: "Format plakatowy do lobby — zachęca gości do skanowania i korzystania z Hotel Hub.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "chefstar-promo",
          name: "Szablon promocji ChefStar",
          description: "Gotowy szablon promocyjny do wydruku — szybko dostosujesz go do własnej oferty i kodu QR.",
          href: "#",
          thumbnail: "",
        },
      ],
    },
    footer: {
      tagline: "Cyfrowy asystent sprzedaży dla restauracji. Menu w 14 językach, opinie Google i zdjęcia dań — za 3,23 zł dziennie.",
      product: "Produkt",
      support: "Wsparcie",
      productLinks: [
        { label: "Funkcje", href: "#menu-live" },
        { label: "Testy beta", href: "#beta-testing" },
        { label: "Przykłady", href: "#przyklady" },
      ],
      supportLinks: [
        { label: "Centrum pomocy", href: "/centrum-pomocy" },
        { label: "kontakt@chefvision.pl", href: "mailto:kontakt@chefvision.pl" },
        { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
        { label: "Regulamin / Terms of Service", href: "/regulamin" },
      ],
      copy: "© 2026 ChefVision.pl — Wszelkie prawa zastrzeżone.",
      madeWith: "Stworzone z serca dla polskiej gastronomii",
    },
  },

  en: {
    nav: {
      features: "Features",
      beta: "Beta Testing",
      examples: "Examples",
      about: "About us",
      materials: "Materials",
      helpCenter: "Help Center",
      cta: "Log in",
    },
    hero: {
      freeQrBadge: "Free QR Menu for restaurants and hotels",
      badge: "FOR HOTELS AND RESTAURANTS",
      headlineBefore: "Better communication. Better ",
      headlineHighlight: "guest experience",
      headlineAfter: ".",
      freeQrSub:
        "Create your own QR Menu for free. 14 days of full Premium with no credit card. After the trial, you can stay on the free plan.",
      sub: "ChefVision helps hotels and restaurants improve guest communication, reduce repetitive questions, and provide quick access to the most important information.",
      cta1: "Try for free",
      cta2: "See how it works",
      highlights: [
        "All information in one place",
        "Fewer questions for reception",
        "Better guest experience",
        "Higher sales and satisfaction",
      ],
      ctaTrust: [
        "Free plan",
        "No credit card",
        "14 days Premium",
        "14 languages",
      ],
    },
    whyChefVision: {
      badge: "WHY CHEFVISION?",
      headline: "One platform. Many benefits.",
      cards: [
        {
          title: "For guests",
          description:
            "Quick access to menus, services and hotel information after scanning a QR code.",
        },
        {
          title: "For staff",
          description: "Fewer repetitive questions, more time for what really matters.",
        },
        {
          title: "For hotels and restaurants",
          description: "Better communication, higher service sales and better guest ratings.",
        },
        {
          title: "Promotions and news",
          description: "Inform guests about offers and events in seconds.",
        },
        {
          title: "Data and analytics",
          description: "See what interests guests and make better decisions.",
        },
      ],
    },
    guestInfoHub: {
      badge: "Guest experience",
      headline: "One place for all information",
      description:
        "Hotel Hub brings together menus, room service, the bar, spa and all hotel information in one app. Guests scan a QR code — and have everything at their fingertips.",
      hubLabel: "Hotel Hub",
      hubTitle: "Everything your guest needs",
      hubDescription:
        "Instead of searching at reception, on flyers or across multiple apps — guests open one panel with all hotel services.",
      bullets: [
        "Restaurant and bar menus in multiple languages",
        "Room service and orders without calling reception",
        "Hotel info, spa and local attractions in one place",
        "Opening hours and service availability always up to date",
      ],
    },
    qrMenuSeo: {
      whatIs: {
        headline: "What is a QR Menu?",
        text: "A QR Menu is a digital menu card accessible by scanning a QR code with a phone. With ChefVision, restaurants and hotels can update their online menu without printing new cards and share it with guests in multiple languages.",
      },
      whyUse: {
        headline: "Why use a QR Menu?",
        bullets: [
          "No printing costs",
          "Instant updates",
          "Menu available on phone",
          "Support for foreign guests",
          "Higher sales through recommendations",
        ],
      },
    },
    faq: {
      badge: "Common questions",
      headline: "Questions about the free QR Menu",
      items: [
        {
          question: "Is the QR Menu free?",
          answer:
            "Yes. ChefVision offers a free plan that lets you create and share your own QR Menu at no cost.",
        },
        {
          question: "Do I need a credit card?",
          answer: "No. You can get started without providing card details.",
        },
        {
          question: "What happens after 14 days?",
          answer:
            "After the trial period, you can switch to a higher plan or stay on the free plan.",
        },
        {
          question: "Does the free plan have a time limit?",
          answer: "No. The free plan works without any time restriction.",
        },
      ],
    },
    stats: {
      badge: "Tool potential",
      headline: "What ChefVision can change in your restaurant",
      items: [
        { value: "+25%", label: "Estimated order value increase", sub: "Based on industry data from restaurants using digital upselling — pairings and recommendations at the dish level increase order value." },
        { value: "-30%", label: "Fewer ingredient and translation questions", sub: "Menu in 14 languages answers before the waiter reaches the table — guests read and understand the menu on their own." },
        { value: "+40%", label: "More drinks and extras ordered", sub: "When guests see 'Recommended with this dish' suggestions directly next to the dish — they are more likely to add them to their order." },
      ],
    },
    appPreview: {
      badge: "Smart recommendations",
      headline: "Sell more with intelligent suggestions",
      text: "Add pairings, bundles and suggestions that guests see in the menu. Show what goes well with each dish and increase satisfaction — and order value.",
      bullets: [
        "Dish pairings with wines, drinks and extras",
        "Promotional bundles (e.g. Burger + Cola + Fries -15%)",
        "“Other guests chose this dish with…” insights",
        "Promote high-margin products",
      ],
      imageAlt: "Guest menu with pairing recommendations in the ChefVision app",
      bubbleText: "This is what the guest menu looks like on their phone",
      floatLabel: "Higher bill size",
      floatValue: "+25%",
    },
    howItWorks: {
      badge: "Real restaurant experience",
      headline: "Every guest deserves to understand the menu",
      subheadline: "From confusion to confidence in seconds.",
      scenes: [
        {
          heading: "The guest feels lost",
          description:
            "Foreign guests often struggle to understand local dishes, ingredients and traditional menus.",
          imageAlt: "Confused guest reading a Polish menu in a restaurant",
        },
        {
          heading: "ChefVision explains everything instantly",
          description:
            "The guest scans the QR code and instantly sees the menu in their own language with photos and dish explanations.",
          imageAlt: "Guest scans QR and views the menu in their language on a phone",
        },
        {
          heading: "Smart recommendations increase orders",
          description:
            "ChefVision helps guests choose confidently with recommendations, pairings and popular combinations.",
          imageAlt: "Waiter and guest viewing ChefVision recommendations on a phone",
        },
      ],
      floatingBadges: ["Popular", "Recommended", "Best combo"],
      finale: {
        heading: "Better guest experience\nBetter restaurant revenue",
        subheading: "ChefVision helps international guests feel at home.",
        ctaDemo: "Book demo",
        ctaTry: "Try ChefVision",
        imageAlt: "Happy guest enjoying a traditional dish in a restaurant",
      },
    },
    comparison: {
      headline: "What you get from day one",
      sub: "No contracts, no hardware, no IT. Up and running in 15 minutes.",
      benefits: [
        "Digital menu in 14 languages — guests scan QR and see the menu in their language",
        "Hotel Hub — all hotel information in one app",
        "Pairings and recommendations — set from your phone, no developer needed",
        "Promotional bundles — Burger + Cola + Fries -15% in one click",
        "Update prices and menu without printing new cards",
        "Kitchen video on every dish — guests buy with their eyes",
        "Fixed price €23/mo — zero commission, zero hidden fees",
        "Full control from your phone — change everything from anywhere",
        "Professional dish photos — results without a photographer or photo session",
      ],
    },
    antiPlatform: {
      headline: "ChefVision ≠ UberEats, Glovo or Wolt",
      sub: "We are not a delivery platform. We don't take your margin. ChefVision is your employee — costs only €0.77/day and never calls in sick.",
      featureCol: "Feature",
      themCol: "Delivery Platforms",
      usCol: "ChefVision",
      rows: [
        { feature: "Sales commission", them: "15–30%", us: "0%" },
        { feature: "Extra hardware (tablet)", them: "YES (another tablet on the bar)", us: "NO (works on your existing devices)" },
        { feature: "Customer ownership", them: "Customers belong to the platform", us: "Customers belong to you" },
        { feature: "Brand support", them: "Platform branding takes priority", us: "Your brand takes priority" },
        { feature: "Hidden fees", them: "Registration, service fees, etc.", us: "Transparent pricing, no surprises" },
        { feature: "Focus on", them: "Logistics and delivery", us: "Quality and image of your food" },
        { feature: "Menu languages", them: "Usually basic", us: "14 languages + kitchen video" },
      ],
      keyHeadline: "Invest €23, recover over €580/month",
      keyText: "On a €46 bill, a delivery platform takes €7–14 in commission. ChefVision charges €23/month — no commission, no tablets, no lost customers. Waiters reclaim time, guests order more confidently, and you collect Google reviews for €0.35.",
    },
    profitMath: {
      headline: "The math that pays off",
      sub: "ChefVision is not a gadget. It's a tool that pays for itself after selling just two bottles of wine or three desserts per month.",
      items: [
        {
          title: "Why a PDF under a QR code doesn't work?",
          points: [
            "Guests hate pinching to zoom unreadable PDF files",
            "Plain text doesn't sell like professional photos and kitchen video",
            "A PDF won't translate itself into Chinese or Korean",
            "A PDF won't suggest wine with a steak or ask for a Google review",
          ],
        },
        {
          title: "Profit math — hard numbers",
          points: [
            "Waiters spend an average of 5–7 minutes per table translating the menu (Cornell University)",
            "With 3 waiters that's ~€20 in savings per day = €580/month",
            "Cost of ChefVision: €23/mo = €0.77/day",
            "Return on investment in just 3–4 days",
          ],
        },
        {
          title: "Full manager control — from your phone",
          points: [
            "Set recommended wine for the dish of the day in 30 seconds",
            "Change the review bonus (coffee, lemonade) without IT help",
            "Add kitchen video to any dish with one click",
            "Update prices without printing new menus",
          ],
        },
      ],
    },
    menuLive: {
      badge: "Live Menu & QR — 14 languages",
      headline: "Your silent salesperson — in every guest's phone, in their language.",
      text: "Waiters too busy to recommend wine? ChefVision does it for them — in 14 languages, 24/7. Guests scan the code, see the menu in their language, watch kitchen video and get a dish recommendation. All without a word from the waiter.",
      bullets: [
        "Menu in 14 languages — automatic translation for guests",
        "Kitchen video on every dish — guests buy with their eyes",
        "Sales recommendations — set from your phone in 30 seconds",
      ],
      cta: "Try ChefVision",
      storyLabel: "Dish Story",
      storyText: "Watch how your dish is made",
      liveBadge: "Live",
      availableOn: "Available on:",
      behindScenes: "Take me behind the scenes",
    },
    cta: {
      badge: "Beta",
      headline: "Looking for 20 restaurants to test",
      sub: "First month completely free. Then exceptionally favorable terms for the first 20 venues.",
      freeBanner: "First month free — test without risk, no credit card required",
      includes: "What you get in the trial month",
      items: [
        "Digital menu with QR code — active 24/7, no watermark",
        "50 tokens for enhancing dish photos (lighting, background, colors)",
        "Menu in 14 languages — automatic translation for foreign guests",
        "Sales recommendations — set wine, drinks, extras for upsell yourself",
        "I help you launch ChefVision step by step — from menu setup to sales recommendations",
      ],
      pricingRibbon: "Start for free — no credit card required",
      pricingIntro1:
        "The free plan lets you create your own QR Menu and share it with guests at no cost.",
      pricingIntro2:
        "Start and Premium unlock additional sales features, AI translations and recommendations.",
      pricingTitle:
        "After the trial period, you can switch to Start, Premium or stay on the free basic menu.",
      freePlan: {
        price: "0",
        currency: "/ month",
        label: "Free plan",
        desc: "You still have access to your digital menu in the basic version.",
        highlights: [
          "Free QR Menu",
          "No time limit",
          "No credit card",
        ],
        features: [
          "Digital QR menu",
          "Basic translation (EN)",
          "Menu updates",
          "Menu hosting",
          "ChefVision watermark",
        ],
      },
      startPlan: {
        badge: "Best to start",
        price: "30",
        currency: "PLN / month",
        label: "Start plan",
        desc: "More sales tools and a professional menu without watermark.",
        features: [
          "Pairings and upselling",
          "10 AI tokens per month",
          "Menu without watermark",
          "Menu translations in 14 languages",
          "Recommendations and promotions",
          "Statistics",
        ],
      },
      regular: {
        badge: "Most popular",
        price: "97",
        currency: "PLN / month",
        label: "Premium plan",
        desc: "Full access to all features. Cancel anytime — no commitments.",
        features: [
          "Pairings and upselling",
          "Menu translations",
          "Hotel Hub",
          "50 AI tokens per month",
          "Menu without watermark",
          "Recommendations and promotions",
          "Statistics",
          "Onboarding support",
        ],
      },
      tokenPack: {
        price: "€7",
        currency: "",
        label: "+50 token pack",
        desc: "One-time purchase. Tokens never expire — they wait in your account until used.",
        features: ["Never expire", "Available on Premium plan only", "Perfect for seasonal menu updates"],
      },
      tokenNote: "💡 Subscription tokens reset on the 1st of each month and don't carry over. Pack tokens never expire.",
      ctaBtn: "Start saving your waiters' time",
    },
    helpCenter: {
      badge: "Video guides",
      headline: "Help Center",
      sub: "Short videos walk you through the ChefVision panel step by step — from your first login to promotions and menu management.",
      watchOnYoutube: "Watch on YouTube",
      categories: {
        all: "All",
        introduction: "Getting started",
        menu: "Menu",
        promotions: "Promotions",
        account: "Account",
      },
      videos: [
        {
          youtubeId: "crvc2gk71D4",
          title: "How to add a logo and hero image to your menu",
          description: "How to add your restaurant logo and hero image visible at the top of the guest menu.",
          category: "menu",
        },
        {
          youtubeId: "PGdYRjBOvCI",
          youtubeUrl: "https://youtube.com/shorts/PGdYRjBOvCI?feature=share",
          title: "How to add a dish to the menu",
          description: "Adding a new item, setting price, category and guest menu visibility.",
          category: "menu",
        },
        {
          youtubeId: "34WoLlp3ZsA",
          title: "Photos, descriptions and dish videos",
          description: "How to add a photo, description and link a YouTube, TikTok or Instagram video.",
          category: "menu",
        },
        {
          youtubeId: "34WoLlp3ZsA",
          title: "Creating promotions and bundles",
          description: "Setting up promotional bundles and recommendations guests see when ordering.",
          category: "promotions",
        },
        {
          youtubeId: "34WoLlp3ZsA",
          title: "Pairings and sales recommendations",
          description: "How to set up drink, add-on and combo suggestions that increase bill value.",
          category: "promotions",
        },
        {
          youtubeId: "34WoLlp3ZsA",
          title: "Menu languages and account settings",
          description: "Managing menu translations and basic restaurant profile settings.",
          category: "account",
        },
      ],
    },
    materials: {
      badge: "Materials",
      headline: "Free materials for restaurants and hotels",
      sub: "Download ready-made Canva templates, paste your QR code, add your venue name and print in minutes. No designer and no extra cost.",
      info: "Ready-to-download materials for editing in Canva. Just replace the QR code, add your logo or venue name and print.",
      downloadBtn: "Download template",
      placeholderLabel: "Template preview",
      items: [
        {
          id: "restaurant-stand-a6",
          name: "Restaurant stand A6",
          description: "Compact table tent — perfect for a QR menu in a small restaurant or café.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "restaurant-stand-a5",
          name: "Restaurant stand A5",
          description: "Larger format for the counter or table — QR code and venue name more visible.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "hotel-reception-stand",
          name: "Hotel stand – reception",
          description: "Reception template with space for QR, hotel logo and key guest information.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "hotel-room-stand",
          name: "Hotel stand – room",
          description: "In-room tent — menu, room service and hotel info in one place.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "hotel-lobby-poster",
          name: "Hotel lobby poster",
          description: "Poster format for the lobby — encourages guests to scan and use Hotel Hub.",
          href: "#",
          thumbnail: "",
        },
        {
          id: "chefstar-promo",
          name: "ChefStar promotion template",
          description: "Ready-made promotional template to print — quickly adapt to your offer and QR code.",
          href: "#",
          thumbnail: "",
        },
      ],
    },
    footer: {
      tagline: "Digital sales assistant for restaurants. Menu in 14 languages, Google reviews and dish photos — for €0.77/day.",
      product: "Product",
      support: "Support",
      productLinks: [
        { label: "Features", href: "#menu-live" },
        { label: "Beta Testing", href: "#beta-testing" },
        { label: "Examples", href: "#przyklady" },
      ],
      supportLinks: [
        { label: "Help Center", href: "/centrum-pomocy" },
        { label: "kontakt@chefvision.pl", href: "mailto:kontakt@chefvision.pl" },
        { label: "Privacy Policy", href: "/polityka-prywatnosci" },
        { label: "Regulamin / Terms of Service", href: "/regulamin" },
      ],
      copy: "© 2026 ChefVision.pl — All rights reserved.",
      madeWith: "Made with heart for the restaurant industry",
    },
  },
} as const
