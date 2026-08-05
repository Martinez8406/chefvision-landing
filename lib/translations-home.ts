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
    sub1: string
    sub2: string
    ctaPrimary: string
    ctaSecondary: string
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
      badge: "QR Menu dla restauracji i hoteli",
      headline: "Cyfrowy asystent, który obsługuje Twoje menu.",
      sub1: "Tłumaczy kartę na 14 języków, poleca dania i przyjmuje wezwania kelnera — 24/7, za 3,23 zł dziennie.",
      sub2: "Ty masz pełną kontrolę z telefonu.",
      ctaPrimary: "Wypróbuj za darmo",
      ctaSecondary: "Zobacz jak to działa",
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
      sub: "Konfiguracja zajmuje kilka minut. Bez instalacji, bez integracji i bez umów.",
      stepLabel: "Krok",
      steps: [
        {
          title: "Tworzysz cyfrowe menu lub zlecasz to nam",
          desc: "Zakładasz darmowe konto, dodajesz dania, zdjęcia i ceny. Menu zmieniasz w każdej chwili z telefonu — bez drukowania nowych kart.",
        },
        {
          title: "Stawiasz kod QR na stoliku",
          desc: "Pobierasz gotowe materiały do druku: naklejki, stojaki i ulotki. Gość skanuje kod telefonem — bez instalowania aplikacji.",
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
      headline: "Zacznij w 5 minut. Za 0 zł.",
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
      badge: "QR Menu for restaurants and hotels",
      headline: "A digital assistant that runs your menu.",
      sub1: "It translates your menu into 14 languages, recommends dishes and takes waiter calls — 24/7, for 3.23 PLN a day.",
      sub2: "You stay in full control from your phone.",
      ctaPrimary: "Try for free",
      ctaSecondary: "See how it works",
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
      sub: "Setup takes a few minutes. No installation, no integrations, no contracts.",
      stepLabel: "Step",
      steps: [
        {
          title: "Create a digital menu or let us do it for you",
          desc: "Sign up for a free account and add dishes, photos and prices. Update the menu anytime from your phone — no reprinting.",
        },
        {
          title: "Put the QR code on the table",
          desc: "Download ready-to-print materials: stickers, stands and flyers. Guests scan the code with their phone — no app needed.",
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
      headline: "Start in 5 minutes. For free.",
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
      badge: "QR-Menü für Restaurants und Hotels",
      headline: "Ein digitaler Assistent, der Ihre Speisekarte betreut.",
      sub1: "Er übersetzt die Karte in 14 Sprachen, empfiehlt Gerichte und nimmt Kellnerrufe entgegen — 24/7, für 3,23 PLN pro Tag.",
      sub2: "Sie behalten die volle Kontrolle vom Handy aus.",
      ctaPrimary: "Kostenlos testen",
      ctaSecondary: "So funktioniert es",
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
      sub: "Die Einrichtung dauert wenige Minuten. Ohne Installation, ohne Integrationen, ohne Verträge.",
      stepLabel: "Schritt",
      steps: [
        {
          title: "Digitales Menü erstellen oder uns beauftragen",
          desc: "Kostenloses Konto anlegen, Gerichte, Fotos und Preise hinzufügen. Das Menü jederzeit vom Handy aus ändern — ohne Neudruck.",
        },
        {
          title: "QR-Code auf den Tisch stellen",
          desc: "Fertige Druckvorlagen herunterladen: Aufkleber, Aufsteller und Flyer. Der Gast scannt den Code mit dem Handy — ohne App.",
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
      headline: "Starten Sie in 5 Minuten. Für 0 zł.",
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
      badge: "Menú QR para restaurantes y hoteles",
      headline: "Un asistente digital que gestiona tu carta.",
      sub1: "Traduce la carta a 14 idiomas, recomienda platos y recibe llamadas al camarero — 24/7, por 3,23 PLN al día.",
      sub2: "Tú mantienes el control total desde el móvil.",
      ctaPrimary: "Pruébalo gratis",
      ctaSecondary: "Mira cómo funciona",
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
      sub: "La configuración lleva unos minutos. Sin instalación, sin integraciones y sin contratos.",
      stepLabel: "Paso",
      steps: [
        {
          title: "Creas tu carta digital o nos lo encargas",
          desc: "Creas una cuenta gratuita y añades platos, fotos y precios. Cambias la carta en cualquier momento desde el móvil — sin reimprimir.",
        },
        {
          title: "Colocas el código QR en la mesa",
          desc: "Descargas materiales listos para imprimir: pegatinas, soportes y folletos. El cliente escanea el código con su móvil — sin instalar nada.",
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
      headline: "Empieza en 5 minutos. Gratis.",
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
      badge: "QR μενού για εστιατόρια και ξενοδοχεία",
      headline: "Ένας ψηφιακός βοηθός που διαχειρίζεται το μενού σας.",
      sub1: "Μεταφράζει τον κατάλογο σε 14 γλώσσες, προτείνει πιάτα και δέχεται κλήσεις σερβιτόρου — 24/7, με 3,23 PLN την ημέρα.",
      sub2: "Εσείς έχετε τον πλήρη έλεγχο από το κινητό σας.",
      ctaPrimary: "Δοκιμάστε δωρεάν",
      ctaSecondary: "Δείτε πώς λειτουργεί",
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
      sub: "Η ρύθμιση διαρκεί λίγα λεπτά. Χωρίς εγκατάσταση, χωρίς ενσωματώσεις, χωρίς συμβόλαια.",
      stepLabel: "Βήμα",
      steps: [
        {
          title: "Δημιουργείτε ψηφιακό μενού ή το αναθέτετε σε εμάς",
          desc: "Δημιουργείτε δωρεάν λογαριασμό και προσθέτετε πιάτα, φωτογραφίες και τιμές. Αλλάζετε το μενού ανά πάσα στιγμή από το κινητό — χωρίς επανεκτύπωση.",
        },
        {
          title: "Τοποθετείτε τον κωδικό QR στο τραπέζι",
          desc: "Κατεβάζετε έτοιμα υλικά για εκτύπωση: αυτοκόλλητα, σταντ και φυλλάδια. Ο πελάτης σκανάρει τον κωδικό με το κινητό — χωρίς εφαρμογή.",
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
      headline: "Ξεκινήστε σε 5 λεπτά. Δωρεάν.",
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
      badge: "Menu QR per ristoranti e hotel",
      headline: "Un assistente digitale che gestisce il tuo menu.",
      sub1: "Traduce il menu in 14 lingue, consiglia i piatti e riceve le chiamate al cameriere — 24/7, per 3,23 PLN al giorno.",
      sub2: "Tu mantieni il pieno controllo dal telefono.",
      ctaPrimary: "Provalo gratis",
      ctaSecondary: "Guarda come funziona",
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
      sub: "La configurazione richiede pochi minuti. Senza installazione, senza integrazioni e senza contratti.",
      stepLabel: "Passo",
      steps: [
        {
          title: "Crei il menu digitale o lo affidi a noi",
          desc: "Crei un account gratuito e aggiungi piatti, foto e prezzi. Modifichi il menu in qualsiasi momento dal telefono — senza ristampe.",
        },
        {
          title: "Metti il codice QR sul tavolo",
          desc: "Scarichi materiali pronti per la stampa: adesivi, espositori e volantini. L'ospite scansiona il codice con il telefono — senza installare nulla.",
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
      headline: "Inizia in 5 minuti. Gratis.",
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
      badge: "Restoranlar ve oteller için QR Menü",
      headline: "Menünüzü yöneten dijital bir asistan.",
      sub1: "Menüyü 14 dile çevirir, yemek önerir ve garson çağrılarını alır — 7/24, günde 3,23 PLN karşılığında.",
      sub2: "Tam kontrol telefonunuzda.",
      ctaPrimary: "Ücretsiz deneyin",
      ctaSecondary: "Nasıl çalıştığını görün",
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
      sub: "Kurulum birkaç dakika sürer. Kurulum yok, entegrasyon yok, sözleşme yok.",
      stepLabel: "Adım",
      steps: [
        {
          title: "Dijital menünüzü oluşturun veya bize bırakın",
          desc: "Ücretsiz hesap açın; yemekleri, fotoğrafları ve fiyatları ekleyin. Menüyü istediğiniz an telefonunuzdan değiştirin — yeniden baskı yok.",
        },
        {
          title: "QR kodunu masaya koyun",
          desc: "Baskıya hazır materyalleri indirin: etiketler, standlar ve broşürler. Misafir kodu telefonuyla tarar — uygulama gerekmez.",
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
      headline: "5 dakikada başlayın. Ücretsiz.",
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
      badge: "QR-меню для ресторанов и отелей",
      headline: "Цифровой ассистент, который ведёт ваше меню.",
      sub1: "Переводит меню на 14 языков, рекомендует блюда и принимает вызовы официанта — 24/7, за 3,23 PLN в день.",
      sub2: "Полный контроль остаётся у вас — прямо с телефона.",
      ctaPrimary: "Попробовать бесплатно",
      ctaSecondary: "Посмотреть, как это работает",
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
      sub: "Настройка занимает несколько минут. Без установки, без интеграций, без договоров.",
      stepLabel: "Шаг",
      steps: [
        {
          title: "Создаёте цифровое меню или поручаете это нам",
          desc: "Регистрируете бесплатный аккаунт, добавляете блюда, фото и цены. Меняете меню в любой момент с телефона — без перепечатки.",
        },
        {
          title: "Ставите QR-код на столик",
          desc: "Скачиваете готовые материалы для печати: наклейки, подставки и листовки. Гость сканирует код телефоном — без установки приложений.",
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
      headline: "Начните за 5 минут. Бесплатно.",
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
      badge: "QR meni za restorane i hotele",
      headline: "Digitalni asistent koji vodi vaš meni.",
      sub1: "Prevodi meni na 14 jezika, preporučuje jela i prima pozive konobaru — 24/7, za 3,23 PLN dnevno.",
      sub2: "Vi zadržavate punu kontrolu s mobitela.",
      ctaPrimary: "Isprobajte besplatno",
      ctaSecondary: "Pogledajte kako funkcionira",
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
      sub: "Postavljanje traje nekoliko minuta. Bez instalacije, bez integracija i bez ugovora.",
      stepLabel: "Korak",
      steps: [
        {
          title: "Kreirate digitalni meni ili to prepustite nama",
          desc: "Otvorite besplatan račun te dodate jela, fotografije i cijene. Meni mijenjate u bilo kojem trenutku s mobitela — bez ponovnog tiskanja.",
        },
        {
          title: "Stavite QR kod na stol",
          desc: "Preuzmete gotove materijale za tisak: naljepnice, stalke i letke. Gost skenira kod mobitelom — bez instaliranja aplikacije.",
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
      headline: "Krenite za 5 minuta. Besplatno.",
      sub: "14 dana pune Premium verzije bez kreditne kartice. Nakon probnog razdoblja možete ostati na besplatnom planu.",
      btn: "Otvorite besplatan račun",
    },
  },
}
