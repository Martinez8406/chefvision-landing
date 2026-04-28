import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const showPricingSection = false
  const pricingPlans = [
    {
      name: "FREE",
      price: "0",
      currency: "zł",
      period: "na zawsze",
      description: "Sprawdź moc AI na własnych daniach. Idealny start dla każdego lokalu.",
      features: [
        "10 profesjonalnie ulepszonych zdjęć AI (na istniejące zdjęcia)",
        "Menu Live (do 10 pozycji)",
        "Domena w subdomenie chefvision.pl/twoja-restauracja",
        'Znak wodny "Powered by ChefVision"',
        "Standardowy QR Code",
      ],
      buttonText: "Zacznij za darmo",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "PLUS",
      price: "49",
      currency: "zł",
      period: "jednorazowo",
      description: "Profesjonalne menu bez abonamentu. 30 Kredytów AI i pełny branding do wykorzystania wtedy, gdy tego potrzebujesz.",
      features: [
        "30 profesjonalnie ulepszonych zdjęć AI (na istniejące zdjęcia)",
        "Nielimitowane pozycje w menu",
        "Brak znaków wodnych",
        "Pełny Branding (Twoje logo, Twoje kolory)",
        "Profesjonalny QR Code",
      ],
      specialNote: "Płać raz, używaj aż do wyczerpania kredytów. Następnie powrót do FREE.",
      buttonText: "Wybieram PLUS",
      buttonVariant: "default" as const,
      popular: false,
    },
    {
      name: "PRO",
      price: "99",
      currency: "zł",
      period: "miesięcznie",
      description: "Twój cyfrowy menedżer menu. Nielimitowane możliwości, analityka i stałe wsparcie dla Twojego biznesu.",
      features: [
        "100 profesjonalnie ulepszonych zdjęć AI co miesiąc (na istniejące zdjęcia)",
        "Nielimitowane pozycje w menu",
        "Brak znaków wodnych",
        "Pełny Branding i Analityka",
        "Priorytetowe wsparcie techniczne",
        "Profesjonalny QR Code",
      ],
      buttonText: "Wybieram PRO",
      buttonVariant: "default" as const,
      popular: true,
    },
  ]

  if (showPricingSection) {
    return (
      <section id="cennik" className="py-20 bg-secondary scroll-mt-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
              Wybierz plan, który nakarmi Twój biznes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Od darmowego testu po pełną profesjonalizację. Ty decydujesz, jak serwujesz swoje menu.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "border-primary md:scale-105 shadow-lg shadow-primary/20 bg-background"
                    : "border-border hover:border-primary/50 bg-card"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Najczęściej wybierany
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-serif">{plan.name}</h3>

                  {/* Pricing */}
                  <div className="mb-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.currency}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">/ {plan.period}</p>

                  {/* Description */}
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {plan.description}
                  </p>

                  {/* Special Note */}
                  {plan.specialNote && (
                    <p className="text-xs text-primary font-medium bg-primary/10 rounded-lg p-3 mb-6">
                      {plan.specialNote}
                    </p>
                  )}

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={16} className="text-primary" />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a href="https://app.chefvision.pl" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button
                      size="lg"
                      variant={plan.buttonVariant}
                      className={`w-full font-semibold text-base ${
                        plan.buttonVariant === "default"
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                          : "border-primary text-primary hover:bg-primary/5"
                      }`}
                    >
                      {plan.buttonText}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* AI Credits Explanation */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground inline-block">
              💡 <strong>1 Kredyt AI</strong> = 1 profesjonalnie ulepszone zdjęcie
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="beta-testing" className="py-20 bg-secondary scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Beta
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4 text-balance font-serif">
            Szukam 10 restauracji do testów
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Daję dostęp za darmo w zamian za feedback i możliwość pokazania efektów.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-10 rounded-2xl border border-primary/30 bg-background shadow-lg shadow-primary/10 p-6 sm:p-8">
          <div className="flex justify-center mb-6">
            <p className="inline-flex rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
              Tylko dla pierwszych 10 restauracji
            </p>
          </div>

          <ul className="space-y-4 max-w-xl mx-auto">
            {[
              "30 profesjonalnie ulepszonych zdjęć AI za darmo: Zamiast drogich sesji zdjęciowych, otrzymasz 30 zdjęć Twoich dań, które zachwycą klientów i zwiększą apetyt.",
              "Dostęp do menu online (QR + telefon): Nowoczesne, interaktywne menu dostępne na każdym smartfonie, zintegrowane z Twoimi nowymi, apetycznymi zdjęciami.",
              "Pomoc we wdrożeniu i wsparcie eksperta: Jako kucharz z 16-letnim stażem, osobiście pomogę Ci w pełni wykorzystać potencjał ChefVision, aby Twoje menu sprzedawało się samo.",
              "Dostęp do motywów sezonowych: Przygotuj swoje menu na najbliższe okazje (np. Święta, Walentynki, Halloween) z gotowymi, profesjonalnymi tłami, które przyciągną uwagę klientów.",
              "Integracja z Google Maps: Zwiększ widoczność swojej restauracji i zachęć klientów do zostawiania pozytywnych opinii, prezentując im spójne i profesjonalne zdjęcia w Google Moja Firma.",
              "Oszczędność czasu i pieniędzy: Zapomnij o godzinach spędzonych na edycji zdjęć lub wysokich kosztach fotografa. ChefVision to profesjonalne efekty w kilka minut.",
              "Wzrost zaangażowania klientów: Apetyczne zdjęcia i nowoczesne menu online to klucz do zwiększenia rezerwacji i zamówień."
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-base text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <a
              href="tel:+48570230684"
              className="inline-flex"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-6 shadow-md shadow-primary/20"
              >
                Zgłoś restaurację do testów
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </a>

            <p className="text-sm text-muted-foreground mt-4">
              Pracuję bezpośrednio z właścicielami restauracji/managerami, żeby dopracować produkt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
