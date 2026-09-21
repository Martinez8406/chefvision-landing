import type { Locale } from "./translations"

export type HomeCopy = {
  nav: {
    how: string
    forWhom: string
    pricing: string
    faq: string
    comparison: string
    about: string
  }
  hero: {
    badge: string
    headline: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
    trust: string[]
  }
  bar: {
    headline: string
    sub: string
    items: string[]
  }
  how: {
    badge: string
    headline: string
    sub: string
    stepLabel: string
    steps: { title: string; desc: string }[]
    cta: string
  }
  guestClub: {
    badge: string
    headline: string
    sub: string
    steps: { title: string; desc: string }[]
    ctaPrimary: string
    ctaSecondary: string
  }
  who: {
    badge: string
    headline: string
    sub: string
    cards: { title: string; desc: string }[]
  }
  finalCta: {
    headline: string
    sub: string
    btn: string
  }
}

export const homeContent: Record<Locale, HomeCopy> = {
  pl: {
    nav: {
      how: "Jak to działa?",
      forWhom: "Dla kogo?",
      pricing: "Cennik",
      faq: "FAQ",
      comparison: "Porównanie",
      about: "O nas",
    },
    hero: {
      badge: "Cyfrowy asystent gościa dla restauracji i hoteli",
      headline: "Menu nie powinno tylko pokazywać dań.\nPowinno pomagać je sprzedawać.",
      sub: "ChefVision pomaga gościom zrozumieć ofertę, wybrać odpowiednie dania i wrócić do restauracji — bez instalowania aplikacji.",
      ctaPrimary: "Wypróbuj bezpłatnie przez 14 dni",
      ctaSecondary: "Zobacz, jak to działa",
      trust: ["14 języków", "Bez prowizji", "Bez instalowania aplikacji"],
    },
    bar: {
      headline: "Skanujesz. Wybierasz. Zamawiasz.",
      sub: "Twoi goście potrzebują tylko telefonu — bez aplikacji i bez logowania.",
      items: [
        "Kod QR na stoliku",
        "Menu w 14 językach",
        "Wideo z kuchni",
        "Wezwanie kelnera",
        "Rachunek jednym kliknięciem",
      ],
    },
    how: {
      badge: "Jak to działa?",
      headline: "Od kodu QR do zadowolonego gościa",
      sub: "Wdrożenie zajmuje kilka godzin: konfiguracja, treści i kody QR. Potem aktualizacje robisz sam z telefonu — a support jest dostępny.",
      stepLabel: "Krok",
      steps: [
        {
          title: "Tworzysz cyfrowe menu lub zlecasz to nam",
          desc: "Zakładasz darmowe konto, dodajesz dania, zdjęcia i ceny. Menu zmieniasz w każdej chwili z telefonu — bez drukowania nowych kart.",
        },
        {
          title: "Stawiasz kod QR na stoliku",
          desc: "Pobierasz gotowe materiały do druku z zakładki „Materiały” lub zlecasz wykonanie. Gość skanuje kod telefonem — bez instalowania aplikacji.",
        },
        {
          title: "Gość czyta menu w swoim języku",
          desc: "Karta tłumaczy się automatycznie na 14 języków. Zagraniczny gość rozumie każdą pozycję i zamawia pewniej.",
        },
        {
          title: "Historia dania sprzedaje za Ciebie",
          desc: "Przy każdym daniu dodajesz zdjęcie i wideo z kuchni. Rekomendacje szefa kuchni podnoszą średni rachunek.",
        },
        {
          title: "Gość załatwia wszystko z telefonu",
          desc: "Wzywa kelnera, domawia i prosi o rachunek jednym kliknięciem. W hotelu gość widzi dodatkowo room service, spa i informacje o obiekcie w jednym miejscu.",
        },
      ],
      cta: "Sprawdź cennik",
    },
    guestClub: {
      badge: "Nowość · Klub Gości Premium",
      headline: "Zamień jednorazowego gościa w klienta, który wraca.",
      sub: "Dostępny w planach Start i Premium. Gość dołącza do klubu, zostawia kontakt — Ty budujesz własną bazę i zapraszasz go ponownie.",
      steps: [
        {
          title: "Jasna propozycja",
          desc: "Na ulotce prosty przekaz: dołącz do Klubu Gości Premium, a otrzymasz dostęp do promocji oraz ofert premium.",
        },
        {
          title: "Gość zostawia e-mail",
          desc: "Potwierdza adres i dołącza do klubu — z pełną świadomością korzyści.",
        },
        {
          title: "Zaproś go ponownie",
          desc: "Użyj gotowych szablonów i wyślij promocję, nowe danie lub wydarzenie — tylko do członków klubu.",
        },
        {
          title: "Kelner realizuje kod",
          desc: "Obsługa sprawdza kod w ChefVision Verify.",
        },
      ],
      ctaPrimary: "Zobacz, jak działa Klub Gości",
      ctaSecondary: "Wypróbuj bezpłatnie",
    },
    who: {
      badge: "Dla kogo?",
      headline: "Dla kogo jest ChefVision?",
      sub: "Dla każdego miejsca, w którym gość spotyka menu.",
      cards: [
        {
          title: "Restauracje",
          desc: "Mniej pytań o skład i alergeny, szybsza obsługa i wyższy średni rachunek dzięki rekomendacjom.",
        },
        {
          title: "Hotele",
          desc: "Hotel Hub łączy menu restauracji, room service, spa i informacje o obiekcie w jednym kodzie QR.",
        },
        {
          title: "Bary i kawiarnie",
          desc: "Błyskawiczne aktualizacje oferty i sezonowych promocji — bez kosztów druku.",
        },
        {
          title: "Pensjonaty i agroturystyka",
          desc: "Wszystkie informacje dla gości w jednym miejscu — nawet bez całodobowej recepcji.",
        },
      ],
    },
    finalCta: {
      headline: "Zacznij bez karty. Za 0 zł.",
      sub: "14 dni pełnej wersji Premium bez karty kredytowej. Po okresie próbnym możesz zostać na darmowym planie.",
      btn: "Załóż darmowe konto",
    },
  },
  en: {
    nav: {
      how: "How it works?",
      forWhom: "Who is it for?",
      pricing: "Pricing",
      faq: "FAQ",
      comparison: "Comparison",
      about: "About us",
    },
    hero: {
      badge: "Digital guest assistant for restaurants and hotels",
      headline: "A menu shouldn't just show dishes.\nIt should help sell them.",
      sub: "ChefVision helps guests understand the offer, choose the right dishes and come back to the restaurant — without installing an app.",
      ctaPrimary: "Try free for 14 days",
      ctaSecondary: "See how it works",
      trust: ["14 languages", "No commission", "No app to install"],
    },
    bar: {
      headline: "Scan. Choose. Order.",
      sub: "Your guests only need a phone — no app, no login.",
      items: [
        "QR code on the table",
        "Menu in 14 languages",
        "Videos from the kitchen",
        "Waiter call",
        "Bill in one tap",
      ],
    },
    how: {
      badge: "How it works?",
      headline: "From QR code to a happy guest",
      sub: "Implementation takes a few hours: setup, content and QR codes. After that, day-to-day updates are simple — and support is available.",
      stepLabel: "Step",
      steps: [
        {
          title: "Create a digital menu or let us do it for you",
          desc: "Sign up for a free account and add dishes, photos and prices. Update the menu anytime from your phone — no reprinting.",
        },
        {
          title: "Put the QR code on the table",
          desc: "Download ready-to-print materials from the Materials tab, or order the service from us. Guests scan the code with their phone — no app needed.",
        },
        {
          title: "Guests read the menu in their language",
          desc: "The menu translates automatically into 14 languages. Foreign guests understand every item and order with confidence.",
        },
        {
          title: "The dish story sells for you",
          desc: "Add a photo and a kitchen video to each dish. Chef's recommendations increase the average bill.",
        },
        {
          title: "Guests handle everything from their phone",
          desc: "They call the waiter, order more and ask for the bill in one tap. In a hotel, the guest also sees room service, spa and hotel information in one place.",
        },
      ],
      cta: "See pricing",
    },
    guestClub: {
      badge: "New · Premium Guest Club",
      headline: "Turn a one-time guest into a customer who comes back.",
      sub: "Included in Start and Premium. The guest joins the club and leaves a contact — you build your own list and invite them again.",
      steps: [
        {
          title: "A clear offer from the first QR",
          desc: "The flyer says it outright: join the Premium Guest Club and get access to promotions and premium offers.",
        },
        {
          title: "The guest leaves an email",
          desc: "They confirm the address and join the club — fully aware of the benefits.",
        },
        {
          title: "Invite them back",
          desc: "Send a promotion for a quieter day, a new dish or an event — only to club members.",
        },
        {
          title: "The waiter redeems the code",
          desc: "Staff checks the code in ChefVision Verify — without access to the manager panel.",
        },
      ],
      ctaPrimary: "See how Guest Club works",
      ctaSecondary: "Try it free",
    },
    who: {
      badge: "Who is it for?",
      headline: "Who is ChefVision for?",
      sub: "For every place where a guest meets a menu.",
      cards: [
        {
          title: "Restaurants",
          desc: "Fewer questions about ingredients and allergens, faster service and a higher average bill thanks to recommendations.",
        },
        {
          title: "Hotels",
          desc: "Hotel Hub combines restaurant menus, room service, spa and hotel information in a single QR code.",
        },
        {
          title: "Bars and cafés",
          desc: "Instant updates to your offer and seasonal promotions — with zero printing costs.",
        },
        {
          title: "Guesthouses and agritourism",
          desc: "All guest information in one place — even without a 24-hour reception.",
        },
      ],
    },
    finalCta: {
      headline: "Start with no credit card. For free.",
      sub: "14 days of full Premium with no credit card. After the trial you can stay on the free plan.",
      btn: "Create a free account",
    },
  },
  de: {
    nav: {
      how: "Wie funktioniert es?",
      forWhom: "Für wen?",
      pricing: "Preise",
      faq: "FAQ",
      comparison: "Vergleich",
      about: "Über uns",
    },
    hero: {
      badge: "Digitaler Gästeassistent für Restaurants und Hotels",
      headline: "Eine Speisekarte sollte Gerichte nicht nur zeigen.\nSie sollte helfen, sie zu verkaufen.",
      sub: "ChefVision hilft Gästen, das Angebot zu verstehen, die richtigen Gerichte zu wählen und ins Restaurant zurückzukehren — ohne App.",
      ctaPrimary: "14 Tage kostenlos testen",
      ctaSecondary: "So funktioniert’s",
      trust: ["14 Sprachen", "Ohne Provision", "Ohne App-Installation"],
    },
    bar: {
      headline: "Scannen. Wählen. Bestellen.",
      sub: "Ihre Gäste brauchen nur ein Handy — ohne App und ohne Login.",
      items: [
        "QR-Code auf dem Tisch",
        "Menü in 14 Sprachen",
        "Videos aus der Küche",
        "Kellnerruf",
        "Rechnung mit einem Klick",
      ],
    },
    how: {
      badge: "Wie funktioniert es?",
      headline: "Vom QR-Code zum zufriedenen Gast",
      sub: "Die Einführung dauert einige Stunden: Konfiguration, Inhalte und QR-Codes. Danach sind Alltagsänderungen einfach — Support ist verfügbar.",
      stepLabel: "Schritt",
      steps: [
        {
          title: "Digitales Menü erstellen oder uns beauftragen",
          desc: "Kostenloses Konto anlegen, Gerichte, Fotos und Preise hinzufügen. Das Menü jederzeit vom Handy aus ändern — ohne Neudruck.",
        },
        {
          title: "QR-Code auf den Tisch stellen",
          desc: "Laden Sie fertige Druckvorlagen im Bereich „Materialien“ herunter oder beauftragen Sie uns. Der Gast scannt den Code mit dem Handy — ohne App.",
        },
        {
          title: "Der Gast liest das Menü in seiner Sprache",
          desc: "Die Karte wird automatisch in 14 Sprachen übersetzt. Ausländische Gäste verstehen jede Position und bestellen sicherer.",
        },
        {
          title: "Die Geschichte des Gerichts verkauft für Sie",
          desc: "Zu jedem Gericht fügen Sie ein Foto und ein Küchenvideo hinzu. Empfehlungen des Küchenchefs erhöhen den Durchschnittsbon.",
        },
        {
          title: "Der Gast erledigt alles vom Handy",
          desc: "Er ruft den Kellner, bestellt nach und bittet mit einem Klick um die Rechnung. Im Hotel sieht der Gast zusätzlich Room Service, Spa und Hotelinformationen an einem Ort.",
        },
      ],
      cta: "Preise ansehen",
    },
    guestClub: {
      badge: "Neu · Premium Guest Club",
      headline: "Machen Sie aus einem einmaligen Gast einen Stammgast.",
      sub: "Enthalten in Start und Premium. Der Gast tritt dem Club bei und hinterlässt Kontakt — Sie bauen Ihre eigene Liste auf und laden erneut ein.",
      steps: [
        {
          title: "Klares Angebot ab dem ersten QR",
          desc: "Auf dem Flyer steht klar: treten Sie dem Premium Guest Club bei und erhalten Sie Zugang zu Aktionen und Premium-Angeboten.",
        },
        {
          title: "Der Gast hinterlässt eine E-Mail",
          desc: "Er bestätigt die Adresse und tritt dem Club bei — mit klarem Nutzen.",
        },
        {
          title: "Laden Sie erneut ein",
          desc: "Senden Sie eine Aktion für einen schwächeren Tag, ein neues Gericht oder ein Event — nur an Clubmitglieder.",
        },
        {
          title: "Der Kellner löst den Code ein",
          desc: "Das Team prüft den Code in ChefVision Verify — ohne Zugriff auf das Manager-Panel.",
        },
      ],
      ctaPrimary: "So funktioniert der Guest Club",
      ctaSecondary: "Kostenlos testen",
    },
    who: {
      badge: "Für wen?",
      headline: "Für wen ist ChefVision?",
      sub: "Für jeden Ort, an dem ein Gast auf eine Speisekarte trifft.",
      cards: [
        {
          title: "Restaurants",
          desc: "Weniger Fragen zu Zutaten und Allergenen, schnellerer Service und ein höherer Durchschnittsbon dank Empfehlungen.",
        },
        {
          title: "Hotels",
          desc: "Hotel Hub vereint Restaurantmenüs, Room Service, Spa und Hotelinformationen in einem QR-Code.",
        },
        {
          title: "Bars und Cafés",
          desc: "Sofortige Aktualisierung von Angebot und Saisonaktionen — ohne Druckkosten.",
        },
        {
          title: "Pensionen und Agrotourismus",
          desc: "Alle Gästeinformationen an einem Ort — auch ohne 24-Stunden-Rezeption.",
        },
      ],
    },
    finalCta: {
      headline: "Starten Sie ohne Kreditkarte. Für 0 zł.",
      sub: "14 Tage volle Premium-Version ohne Kreditkarte. Nach der Testphase können Sie beim kostenlosen Plan bleiben.",
      btn: "Kostenloses Konto erstellen",
    },
  },
  es: {
    nav: {
      how: "¿Cómo funciona?",
      forWhom: "¿Para quién?",
      pricing: "Precios",
      faq: "FAQ",
      comparison: "Comparativa",
      about: "Sobre nosotros",
    },
    hero: {
      badge: "Asistente digital del huésped para restaurantes y hoteles",
      headline: "El menú no debería solo mostrar platos.\nDebería ayudar a venderlos.",
      sub: "ChefVision ayuda a los huéspedes a entender la oferta, elegir los platos adecuados y volver al restaurante — sin instalar una app.",
      ctaPrimary: "Pruébalo gratis 14 días",
      ctaSecondary: "Mira cómo funciona",
      trust: ["14 idiomas", "Sin comisión", "Sin instalar app"],
    },
    bar: {
      headline: "Escaneas. Eliges. Pides.",
      sub: "Tus clientes solo necesitan un móvil — sin app y sin registro.",
      items: [
        "Código QR en la mesa",
        "Carta en 14 idiomas",
        "Vídeos desde la cocina",
        "Llamada al camarero",
        "Cuenta con un clic",
      ],
    },
    how: {
      badge: "¿Cómo funciona?",
      headline: "Del código QR a un cliente satisfecho",
      sub: "La implantación lleva unas horas: configuración, contenidos y códigos QR. Después, las actualizaciones del día a día son sencillas — y hay soporte.",
      stepLabel: "Paso",
      steps: [
        {
          title: "Creas tu carta digital o nos lo encargas",
          desc: "Creas una cuenta gratuita y añades platos, fotos y precios. Cambias la carta en cualquier momento desde el móvil — sin reimprimir.",
        },
        {
          title: "Colocas el código QR en la mesa",
          desc: "Descargas materiales listos para imprimir desde la pestaña „Materiales” o nos encargas la realización. El cliente escanea el código con su móvil — sin instalar nada.",
        },
        {
          title: "El cliente lee la carta en su idioma",
          desc: "La carta se traduce automáticamente a 14 idiomas. El cliente extranjero entiende cada plato y pide con más confianza.",
        },
        {
          title: "La historia del plato vende por ti",
          desc: "En cada plato añades una foto y un vídeo de la cocina. Las recomendaciones del chef aumentan el ticket medio.",
        },
        {
          title: "El cliente lo gestiona todo desde el móvil",
          desc: "Llama al camarero, pide más y solicita la cuenta con un clic. En el hotel, el huésped ve además room service, spa e información del establecimiento en un solo lugar.",
        },
      ],
      cta: "Ver precios",
    },
    guestClub: {
      badge: "Nuevo · Club de Huéspedes Premium",
      headline: "Convierte a un cliente ocasional en alguien que vuelve.",
      sub: "Incluido en Start y Premium. El huésped se une al club y deja su contacto: tú construyes tu propia base y lo vuelves a invitar.",
      steps: [
        {
          title: "Oferta clara desde el primer QR",
          desc: "En el folleto se dice abiertamente: únete al Club de Huéspedes Premium y accede a promociones y ofertas premium.",
        },
        {
          title: "El huésped deja un email",
          desc: "Confirma la dirección y se une al club, con pleno conocimiento de los beneficios.",
        },
        {
          title: "Invítalo de nuevo",
          desc: "Envía una promoción para un día más flojo, un plato nuevo o un evento, solo a miembros del club.",
        },
        {
          title: "El camarero canjea el código",
          desc: "El equipo comprueba el código en ChefVision Verify, sin acceso al panel del manager.",
        },
      ],
      ctaPrimary: "Ver cómo funciona el club",
      ctaSecondary: "Pruébalo gratis",
    },
    who: {
      badge: "¿Para quién?",
      headline: "¿Para quién es ChefVision?",
      sub: "Para cualquier lugar donde un cliente se encuentra con una carta.",
      cards: [
        {
          title: "Restaurantes",
          desc: "Menos preguntas sobre ingredientes y alérgenos, servicio más rápido y un ticket medio más alto gracias a las recomendaciones.",
        },
        {
          title: "Hoteles",
          desc: "Hotel Hub reúne las cartas de los restaurantes, room service, spa e información del hotel en un solo código QR.",
        },
        {
          title: "Bares y cafeterías",
          desc: "Actualizaciones instantáneas de la oferta y promociones de temporada — sin costes de impresión.",
        },
        {
          title: "Pensiones y agroturismo",
          desc: "Toda la información para los huéspedes en un solo lugar — incluso sin recepción 24 horas.",
        },
      ],
    },
    finalCta: {
      headline: "Empieza sin tarjeta. Gratis.",
      sub: "14 días de la versión Premium completa sin tarjeta de crédito. Tras la prueba puedes quedarte en el plan gratuito.",
      btn: "Crea una cuenta gratuita",
    },
  },
  el: {
    nav: {
      how: "Πώς λειτουργεί;",
      forWhom: "Για ποιον είναι;",
      pricing: "Τιμές",
      faq: "Συχνές ερωτήσεις",
      comparison: "Σύγκριση",
      about: "Σχετικά με εμάς",
    },
    hero: {
      badge: "Ψηφιακός βοηθός επισκέπτη για εστιατόρια και ξενοδοχεία",
      headline: "Το μενού δεν πρέπει μόνο να δείχνει πιάτα.\nΠρέπει να βοηθά να τα πουλήσετε.",
      sub: "Το ChefVision βοηθά τους επισκέπτες να καταλάβουν την προσφορά, να επιλέξουν τα σωστά πιάτα και να επιστρέψουν στο εστιατόριο — χωρίς εγκατάσταση εφαρμογής.",
      ctaPrimary: "Δοκιμάστε δωρεάν για 14 ημέρες",
      ctaSecondary: "Δείτε πώς λειτουργεί",
      trust: ["14 γλώσσες", "Χωρίς προμήθεια", "Χωρίς εγκατάσταση εφαρμογής"],
    },
    bar: {
      headline: "Σκανάρεις. Επιλέγεις. Παραγγέλνεις.",
      sub: "Οι πελάτες σας χρειάζονται μόνο ένα κινητό — χωρίς εφαρμογή και χωρίς εγγραφή.",
      items: [
        "Κωδικός QR στο τραπέζι",
        "Μενού σε 14 γλώσσες",
        "Βίντεο από την κουζίνα",
        "Κλήση σερβιτόρου",
        "Λογαριασμός με ένα κλικ",
      ],
    },
    how: {
      badge: "Πώς λειτουργεί;",
      headline: "Από τον κωδικό QR στον ικανοποιημένο πελάτη",
      sub: "Η υλοποίηση διαρκεί μερικές ώρες: ρύθμιση, περιεχόμενο και κωδικοί QR. Μετά, οι καθημερινές ενημερώσεις είναι απλές — και υπάρχει υποστήριξη.",
      stepLabel: "Βήμα",
      steps: [
        {
          title: "Δημιουργείτε ψηφιακό μενού ή το αναθέτετε σε εμάς",
          desc: "Δημιουργείτε δωρεάν λογαριασμό και προσθέτετε πιάτα, φωτογραφίες και τιμές. Αλλάζετε το μενού ανά πάσα στιγμή από το κινητό — χωρίς επανεκτύπωση.",
        },
        {
          title: "Τοποθετείτε τον κωδικό QR στο τραπέζι",
          desc: "Κατεβάζετε έτοιμα υλικά για εκτύπωση από την καρτέλα «Υλικά» ή μας αναθέτετε την εκτέλεση. Ο πελάτης σκανάρει τον κωδικό με το κινητό — χωρίς εφαρμογή.",
        },
        {
          title: "Ο πελάτης διαβάζει το μενού στη γλώσσα του",
          desc: "Ο κατάλογος μεταφράζεται αυτόματα σε 14 γλώσσες. Ο ξένος πελάτης καταλαβαίνει κάθε πιάτο και παραγγέλνει με σιγουριά.",
        },
        {
          title: "Η ιστορία του πιάτου πουλάει για εσάς",
          desc: "Σε κάθε πιάτο προσθέτετε μια φωτογραφία και ένα βίντεο από την κουζίνα. Οι προτάσεις του σεφ αυξάνουν τον μέσο λογαριασμό.",
        },
        {
          title: "Ο πελάτης τα κάνει όλα από το κινητό",
          desc: "Καλεί τον σερβιτόρο, παραγγέλνει επιπλέον και ζητά τον λογαριασμό με ένα κλικ. Στο ξενοδοχείο ο επισκέπτης βλέπει επιπλέον room service, spa και πληροφορίες του καταλύματος σε ένα μέρος.",
        },
      ],
      cta: "Δείτε τις τιμές",
    },
    guestClub: {
      badge: "Νέο · Premium Guest Club",
      headline: "Μετατρέψτε έναν επισκέπτη μιας φοράς σε πελάτη που επιστρέφει.",
      sub: "Στα πακέτα Start και Premium. Ο επισκέπτης μπαίνει στο club και αφήνει επαφή — εσείς χτίζετε δική σας βάση και τον καλείτε ξανά.",
      steps: [
        {
          title: "Σαφής πρόταση από το πρώτο QR",
          desc: "Στο φυλλάδιο λέει ευθέως: μπείτε στο Premium Guest Club και αποκτήστε πρόσβαση σε προσφορές premium.",
        },
        {
          title: "Ο επισκέπτης αφήνει email",
          desc: "Επιβεβαιώνει τη διεύθυνση και μπαίνει στο club, γνωρίζοντας τα οφέλη.",
        },
        {
          title: "Καλέστε τον ξανά",
          desc: "Στείλτε προσφορά για πιο ήσυχη μέρα, νέο πιάτο ή εκδήλωση — μόνο στα μέλη του club.",
        },
        {
          title: "Ο σερβιτόρος εξαργυρώνει τον κωδικό",
          desc: "Το προσωπικό ελέγχει τον κωδικό στο ChefVision Verify — χωρίς πρόσβαση στο panel του manager.",
        },
      ],
      ctaPrimary: "Δείτε πώς λειτουργεί το club",
      ctaSecondary: "Δοκιμάστε δωρεάν",
    },
    who: {
      badge: "Για ποιον είναι;",
      headline: "Για ποιον είναι το ChefVision;",
      sub: "Για κάθε μέρος όπου ο πελάτης συναντά ένα μενού.",
      cards: [
        {
          title: "Εστιατόρια",
          desc: "Λιγότερες ερωτήσεις για συστατικά και αλλεργιογόνα, ταχύτερη εξυπηρέτηση και υψηλότερος μέσος λογαριασμός χάρη στις προτάσεις.",
        },
        {
          title: "Ξενοδοχεία",
          desc: "Το Hotel Hub συνδυάζει μενού εστιατορίων, room service, spa και πληροφορίες του ξενοδοχείου σε έναν κωδικό QR.",
        },
        {
          title: "Μπαρ και καφετέριες",
          desc: "Άμεσες ενημερώσεις προσφορών και εποχιακών προωθήσεων — χωρίς κόστη εκτύπωσης.",
        },
        {
          title: "Πανσιόν και αγροτουρισμός",
          desc: "Όλες οι πληροφορίες για τους επισκέπτες σε ένα μέρος — ακόμη και χωρίς 24ωρη ρεσεψιόν.",
        },
      ],
    },
    finalCta: {
      headline: "Ξεκινήστε χωρίς κάρτα. Δωρεάν.",
      sub: "14 ημέρες πλήρους έκδοσης Premium χωρίς πιστωτική κάρτα. Μετά τη δοκιμή μπορείτε να μείνετε στο δωρεάν πλάνο.",
      btn: "Δημιουργήστε δωρεάν λογαριασμό",
    },
  },
  it: {
    nav: {
      how: "Come funziona?",
      forWhom: "Per chi è?",
      pricing: "Prezzi",
      faq: "FAQ",
      comparison: "Confronto",
      about: "Chi siamo",
    },
    hero: {
      badge: "Assistente digitale dell'ospite per ristoranti e hotel",
      headline: "Il menu non dovrebbe solo mostrare i piatti.\nDovrebbe aiutare a venderli.",
      sub: "ChefVision aiuta gli ospiti a capire l'offerta, scegliere i piatti giusti e tornare al ristorante — senza installare un'app.",
      ctaPrimary: "Provalo gratis per 14 giorni",
      ctaSecondary: "Guarda come funziona",
      trust: ["14 lingue", "Senza commissioni", "Senza installare app"],
    },
    bar: {
      headline: "Scansioni. Scegli. Ordini.",
      sub: "Ai tuoi ospiti basta un telefono — senza app e senza registrazione.",
      items: [
        "Codice QR sul tavolo",
        "Menu in 14 lingue",
        "Video dalla cucina",
        "Chiamata al cameriere",
        "Conto con un clic",
      ],
    },
    how: {
      badge: "Come funziona?",
      headline: "Dal codice QR all'ospite soddisfatto",
      sub: "L'implementazione richiede alcune ore: configurazione, contenuti e codici QR. Poi gli aggiornamenti quotidiani sono semplici — e il supporto è disponibile.",
      stepLabel: "Passo",
      steps: [
        {
          title: "Crei il menu digitale o lo affidi a noi",
          desc: "Crei un account gratuito e aggiungi piatti, foto e prezzi. Modifichi il menu in qualsiasi momento dal telefono — senza ristampe.",
        },
        {
          title: "Metti il codice QR sul tavolo",
          desc: "Scarichi materiali pronti per la stampa dalla scheda „Materiali” oppure ci affidi l'esecuzione. L'ospite scansiona il codice con il telefono — senza installare nulla.",
        },
        {
          title: "L'ospite legge il menu nella sua lingua",
          desc: "Il menu si traduce automaticamente in 14 lingue. L'ospite straniero capisce ogni piatto e ordina con più sicurezza.",
        },
        {
          title: "La storia del piatto vende per te",
          desc: "A ogni piatto aggiungi una foto e un video dalla cucina. I consigli dello chef aumentano lo scontrino medio.",
        },
        {
          title: "L'ospite gestisce tutto dal telefono",
          desc: "Chiama il cameriere, ordina ancora e chiede il conto con un clic. In hotel l'ospite vede inoltre room service, spa e informazioni sulla struttura in un unico posto.",
        },
      ],
      cta: "Vedi i prezzi",
    },
    guestClub: {
      badge: "Novità · Premium Guest Club",
      headline: "Trasforma un ospite occasionale in un cliente che torna.",
      sub: "Incluso in Start e Premium. L'ospite entra nel club e lascia un contatto — tu costruisci la tua lista e lo inviti di nuovo.",
      steps: [
        {
          title: "Offerta chiara dal primo QR",
          desc: "Sul volantino c'è scritto: unisciti al Premium Guest Club e accedi a promozioni e offerte premium.",
        },
        {
          title: "L'ospite lascia l'email",
          desc: "Conferma l'indirizzo e entra nel club, consapevole dei vantaggi.",
        },
        {
          title: "Invitalo di nuovo",
          desc: "Invia una promozione per un giorno più debole, un nuovo piatto o un evento — solo ai membri del club.",
        },
        {
          title: "Il cameriere riscatta il codice",
          desc: "Lo staff verifica il codice in ChefVision Verify — senza accesso al pannello del manager.",
        },
      ],
      ctaPrimary: "Scopri come funziona il club",
      ctaSecondary: "Provalo gratis",
    },
    who: {
      badge: "Per chi è?",
      headline: "Per chi è ChefVision?",
      sub: "Per ogni luogo in cui un ospite incontra un menu.",
      cards: [
        {
          title: "Ristoranti",
          desc: "Meno domande su ingredienti e allergeni, servizio più rapido e scontrino medio più alto grazie ai consigli.",
        },
        {
          title: "Hotel",
          desc: "Hotel Hub riunisce i menu dei ristoranti, room service, spa e informazioni sulla struttura in un unico codice QR.",
        },
        {
          title: "Bar e caffetterie",
          desc: "Aggiornamenti istantanei dell'offerta e delle promozioni stagionali — senza costi di stampa.",
        },
        {
          title: "Pensioni e agriturismi",
          desc: "Tutte le informazioni per gli ospiti in un unico posto — anche senza reception 24 ore su 24.",
        },
      ],
    },
    finalCta: {
      headline: "Inizia senza carta. Gratis.",
      sub: "14 giorni di versione Premium completa senza carta di credito. Dopo la prova puoi restare sul piano gratuito.",
      btn: "Crea un account gratuito",
    },
  },
  tr: {
    nav: {
      how: "Nasıl çalışır?",
      forWhom: "Kimler için?",
      pricing: "Fiyatlar",
      faq: "SSS",
      comparison: "Karşılaştırma",
      about: "Hakkımızda",
    },
    hero: {
      badge: "Restoranlar ve oteller için dijital misafir asistanı",
      headline: "Menü yemekleri sadece göstermemeli.\nOnları satmaya yardım etmeli.",
      sub: "ChefVision misafirlerin teklifi anlamasına, doğru yemekleri seçmesine ve restorana geri dönmesine yardımcı olur — uygulama indirmeden.",
      ctaPrimary: "14 gün ücretsiz deneyin",
      ctaSecondary: "Nasıl çalıştığını görün",
      trust: ["14 dil", "Komisyonsuz", "Uygulama indirmeden"],
    },
    bar: {
      headline: "Tara. Seç. Sipariş ver.",
      sub: "Misafirlerinizin yalnızca bir telefona ihtiyacı var — uygulama yok, kayıt yok.",
      items: [
        "Masada QR kodu",
        "14 dilde menü",
        "Mutfaktan videolar",
        "Garson çağrısı",
        "Tek tıkla hesap",
      ],
    },
    how: {
      badge: "Nasıl çalışır?",
      headline: "QR kodundan memnun misafire",
      sub: "Kurulum birkaç saat sürer: yapılandırma, içerik ve QR kodları. Sonrasında günlük güncellemeler basittir — destek de vardır.",
      stepLabel: "Adım",
      steps: [
        {
          title: "Dijital menünüzü oluşturun veya bize bırakın",
          desc: "Ücretsiz hesap açın; yemekleri, fotoğrafları ve fiyatları ekleyin. Menüyü istediğiniz an telefonunuzdan değiştirin — yeniden baskı yok.",
        },
        {
          title: "QR kodunu masaya koyun",
          desc: "Baskıya hazır materyalleri „Materyaller” sekmesinden indirin veya üretimi bize bırakın. Misafir kodu telefonuyla tarar — uygulama gerekmez.",
        },
        {
          title: "Misafir menüyü kendi dilinde okur",
          desc: "Menü otomatik olarak 14 dile çevrilir. Yabancı misafir her ürünü anlar ve daha güvenle sipariş verir.",
        },
        {
          title: "Yemeğin hikâyesi sizin yerinize satar",
          desc: "Her yemeğe bir fotoğraf ve mutfak videosu ekleyin. Şefin önerileri ortalama hesabı yükseltir.",
        },
        {
          title: "Misafir her şeyi telefonundan halleder",
          desc: "Garsonu çağırır, ek sipariş verir ve tek tıkla hesabı ister. Otelde misafir ayrıca oda servisi, spa ve tesis bilgilerini tek bir yerde görür.",
        },
      ],
      cta: "Fiyatlara bakın",
    },
    guestClub: {
      badge: "Yeni · Premium Guest Club",
      headline: "Tek seferlik misafiri geri gelen müşteriye dönüştürün.",
      sub: "Start ve Premium planlarda. Misafir kulübe katılır ve iletişim bırakır — siz kendi listenizi oluşturur ve tekrar davet edersiniz.",
      steps: [
        {
          title: "İlk QR’dan net teklif",
          desc: "Broşürde açıkça yazar: Premium Guest Club’a katılın, kampanya ve premium tekliflere erişin.",
        },
        {
          title: "Misafir e-posta bırakır",
          desc: "Adresi onaylar ve kulübe katılır — faydaların farkında olarak.",
        },
        {
          title: "Tekrar davet edin",
          desc: "Sakin gün, yeni yemek veya etkinlik kampanyasını yalnızca kulüp üyelerine gönderin.",
        },
        {
          title: "Garson kodu kullanır",
          desc: "Ekip kodu ChefVision Verify’da kontrol eder — yönetici paneline erişmeden.",
        },
      ],
      ctaPrimary: "Guest Club nasıl çalışır",
      ctaSecondary: "Ücretsiz deneyin",
    },
    who: {
      badge: "Kimler için?",
      headline: "ChefVision kimler için?",
      sub: "Misafirin menüyle buluştuğu her yer için.",
      cards: [
        {
          title: "Restoranlar",
          desc: "İçerik ve alerjenlerle ilgili daha az soru, daha hızlı servis ve öneriler sayesinde daha yüksek ortalama hesap.",
        },
        {
          title: "Oteller",
          desc: "Hotel Hub; restoran menülerini, oda servisini, spa'yı ve otel bilgilerini tek bir QR kodunda birleştirir.",
        },
        {
          title: "Barlar ve kafeler",
          desc: "Menü ve sezonluk kampanyalarda anında güncelleme — baskı maliyeti olmadan.",
        },
        {
          title: "Pansiyonlar ve agroturizm",
          desc: "Misafirler için tüm bilgiler tek bir yerde — 24 saat resepsiyon olmasa bile.",
        },
      ],
    },
    finalCta: {
      headline: "Kart olmadan başlayın. Ücretsiz.",
      sub: "Kredi kartı olmadan 14 gün tam Premium sürüm. Deneme sonrasında ücretsiz planda kalabilirsiniz.",
      btn: "Ücretsiz hesap oluşturun",
    },
  },
  ru: {
    nav: {
      how: "Как это работает?",
      forWhom: "Для кого?",
      pricing: "Цены",
      faq: "FAQ",
      comparison: "Сравнение",
      about: "О нас",
    },
    hero: {
      badge: "Цифровой ассистент гостя для ресторанов и отелей",
      headline: "Меню не должно только показывать блюда.\nОно должно помогать их продавать.",
      sub: "ChefVision помогает гостям понять предложение, выбрать подходящие блюда и вернуться в ресторан — без установки приложения.",
      ctaPrimary: "Попробуйте бесплатно 14 дней",
      ctaSecondary: "Смотрите, как это работает",
      trust: ["14 языков", "Без комиссии", "Без установки приложения"],
    },
    bar: {
      headline: "Сканируешь. Выбираешь. Заказываешь.",
      sub: "Вашим гостям нужен только телефон — без приложения и без регистрации.",
      items: [
        "QR-код на столике",
        "Меню на 14 языках",
        "Видео из кухни",
        "Вызов официанта",
        "Счёт в один клик",
      ],
    },
    how: {
      badge: "Как это работает?",
      headline: "От QR-кода до довольного гостя",
      sub: "Внедрение занимает несколько часов: настройка, контент и QR-коды. Дальше повседневные обновления простые — поддержка доступна.",
      stepLabel: "Шаг",
      steps: [
        {
          title: "Создаёте цифровое меню или поручаете это нам",
          desc: "Регистрируете бесплатный аккаунт, добавляете блюда, фото и цены. Меняете меню в любой момент с телефона — без перепечатки.",
        },
        {
          title: "Ставите QR-код на столик",
          desc: "Скачиваете готовые материалы для печати во вкладке «Материалы» или поручаете выполнение нам. Гость сканирует код телефоном — без установки приложений.",
        },
        {
          title: "Гость читает меню на своём языке",
          desc: "Меню автоматически переводится на 14 языков. Иностранный гость понимает каждую позицию и заказывает увереннее.",
        },
        {
          title: "История блюда продаёт за вас",
          desc: "К каждому блюду добавляете фото и видео из кухни. Рекомендации шефа повышают средний чек.",
        },
        {
          title: "Гость решает всё с телефона",
          desc: "Вызывает официанта, дозаказывает и просит счёт в один клик. В отеле гость дополнительно видит рум-сервис, спа и информацию об объекте в одном месте.",
        },
      ],
      cta: "Посмотреть цены",
    },
    guestClub: {
      badge: "Новинка · Premium Guest Club",
      headline: "Превратите разового гостя в клиента, который возвращается.",
      sub: "В планах Start и Premium. Гость вступает в клуб и оставляет контакт — вы строите свою базу и приглашаете снова.",
      steps: [
        {
          title: "Понятное предложение с первого QR",
          desc: "На флаере прямо: вступите в Premium Guest Club и получите доступ к акциям и премиум-предложениям.",
        },
        {
          title: "Гость оставляет email",
          desc: "Подтверждает адрес и вступает в клуб, понимая выгоду.",
        },
        {
          title: "Пригласите снова",
          desc: "Отправьте акцию на слабый день, новое блюдо или событие — только членам клуба.",
        },
        {
          title: "Официант погашает код",
          desc: "Сотрудники проверяют код в ChefVision Verify — без доступа к панели менеджера.",
        },
      ],
      ctaPrimary: "Как работает Guest Club",
      ctaSecondary: "Попробовать бесплатно",
    },
    who: {
      badge: "Для кого?",
      headline: "Для кого ChefVision?",
      sub: "Для любого места, где гость встречается с меню.",
      cards: [
        {
          title: "Рестораны",
          desc: "Меньше вопросов о составе и аллергенах, быстрее обслуживание и выше средний чек благодаря рекомендациям.",
        },
        {
          title: "Отели",
          desc: "Hotel Hub объединяет меню ресторанов, рум-сервис, спа и информацию об отеле в одном QR-коде.",
        },
        {
          title: "Бары и кофейни",
          desc: "Мгновенные обновления меню и сезонных акций — без затрат на печать.",
        },
        {
          title: "Пансионаты и агротуризм",
          desc: "Вся информация для гостей в одном месте — даже без круглосуточной стойки регистрации.",
        },
      ],
    },
    finalCta: {
      headline: "Начните без карты. Бесплатно.",
      sub: "14 дней полной версии Premium без банковской карты. После пробного периода можно остаться на бесплатном плане.",
      btn: "Создать бесплатный аккаунт",
    },
  },
  hr: {
    nav: {
      how: "Kako funkcionira?",
      forWhom: "Za koga?",
      pricing: "Cjenik",
      faq: "FAQ",
      comparison: "Usporedba",
      about: "O nama",
    },
    hero: {
      badge: "Digitalni asistent gosta za restorane i hotele",
      headline: "Jelovnik ne bi trebao samo pokazivati jela.\nTrebao bi pomagati da se prodaju.",
      sub: "ChefVision pomaže gostima razumjeti ponudu, odabrati prava jela i vratiti se u restoran — bez instaliranja aplikacije.",
      ctaPrimary: "Isprobajte besplatno 14 dana",
      ctaSecondary: "Pogledajte kako funkcionira",
      trust: ["14 jezika", "Bez provizije", "Bez instaliranja aplikacije"],
    },
    bar: {
      headline: "Skeniraš. Biraš. Naručuješ.",
      sub: "Vašim gostima treba samo mobitel — bez aplikacije i bez prijave.",
      items: [
        "QR kod na stolu",
        "Meni na 14 jezika",
        "Video iz kuhinje",
        "Poziv konobaru",
        "Račun jednim klikom",
      ],
    },
    how: {
      badge: "Kako funkcionira?",
      headline: "Od QR koda do zadovoljnog gosta",
      sub: "Uvođenje traje nekoliko sati: konfiguracija, sadržaj i QR kodovi. Nakon toga su svakodnevna ažuriranja jednostavna — podrška je dostupna.",
      stepLabel: "Korak",
      steps: [
        {
          title: "Kreirate digitalni meni ili to prepustite nama",
          desc: "Otvorite besplatan račun te dodate jela, fotografije i cijene. Meni mijenjate u bilo kojem trenutku s mobitela — bez ponovnog tiskanja.",
        },
        {
          title: "Stavite QR kod na stol",
          desc: "Preuzmete gotove materijale za tisak u kartici „Materijali” ili nam prepustite izradu. Gost skenira kod mobitelom — bez instaliranja aplikacije.",
        },
        {
          title: "Gost čita meni na svom jeziku",
          desc: "Meni se automatski prevodi na 14 jezika. Strani gost razumije svaku stavku i naručuje sigurnije.",
        },
        {
          title: "Priča o jelu prodaje umjesto vas",
          desc: "Uz svako jelo dodajete fotografiju i video iz kuhinje. Preporuke chefa podižu prosječan račun.",
        },
        {
          title: "Gost sve rješava s mobitela",
          desc: "Poziva konobara, donaručuje i traži račun jednim klikom. U hotelu gost dodatno vidi room service, spa i informacije o objektu na jednom mjestu.",
        },
      ],
      cta: "Pogledajte cjenik",
    },
    guestClub: {
      badge: "Novo · Premium Guest Club",
      headline: "Pretvorite jednokratnog gosta u klijenta koji se vraća.",
      sub: "U planovima Start i Premium. Gost se pridruži klubu i ostavi kontakt — vi gradite vlastitu bazu i pozovete ga ponovno.",
      steps: [
        {
          title: "Jasna ponuda od prvog QR-a",
          desc: "Na letku piše izravno: pridruži se Premium Guest Clubu i dobij pristup promocijama i premium ponudama.",
        },
        {
          title: "Gost ostavlja e-mail",
          desc: "Potvrđuje adresu i pridružuje se klubu — uz svijest o koristima.",
        },
        {
          title: "Pozovite ga ponovno",
          desc: "Pošaljite promociju za slabiji dan, novo jelo ili događaj — samo članovima kluba.",
        },
        {
          title: "Konobar realizira kod",
          desc: "Osoblje provjerava kod u ChefVision Verify — bez pristupa panelu managera.",
        },
      ],
      ctaPrimary: "Pogledajte kako klub radi",
      ctaSecondary: "Isprobajte besplatno",
    },
    who: {
      badge: "Za koga?",
      headline: "Za koga je ChefVision?",
      sub: "Za svako mjesto gdje se gost susreće s menijem.",
      cards: [
        {
          title: "Restorani",
          desc: "Manje pitanja o sastojcima i alergenima, brža usluga i viši prosječan račun zahvaljujući preporukama.",
        },
        {
          title: "Hoteli",
          desc: "Hotel Hub objedinjuje menije restorana, room service, spa i informacije o objektu u jednom QR kodu.",
        },
        {
          title: "Barovi i kafići",
          desc: "Trenutne izmjene ponude i sezonskih akcija — bez troškova tiska.",
        },
        {
          title: "Pansioni i agroturizam",
          desc: "Sve informacije za goste na jednom mjestu — čak i bez recepcije 0-24.",
        },
      ],
    },
    finalCta: {
      headline: "Krenite bez kartice. Besplatno.",
      sub: "14 dana pune Premium verzije bez kreditne kartice. Nakon probnog razdoblja možete ostati na besplatnom planu.",
      btn: "Otvorite besplatan račun",
    },
  },
}
