const stats = [
  {
    value: "+25%",
    label: "Wyższa wartość zamówienia",
    sub: "Zdjęcia i rekomendacje w menu podnoszą średni rachunek bez dodatkowej pracy kelnera.",
  },
  {
    value: "1680 zł",
    label: "Odzyskane miesięcznie",
    sub: "Bariera językowa i powtarzalne pytania o składniki zabierają personelowi cenne godziny. W lokalu z 2 kelnerami tracisz codziennie co najmniej 2 godziny ich pracy na zadania, które ChefVision wykonuje automatycznie.",
  },
  {
    value: "1,50 zł",
    label: "Koszt pozyskania opinii",
    sub: "ChefStars daje recenzję dużo taniej niż standardowy lead z Google Ads.",
  },
  {
    value: "12",
    label: "Języków menu live",
    sub: "Gość od razu czyta kartę w swoim języku i zamawia pewniej.",
  },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-background to-secondary/40 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Wyniki wdrożenia
          </span>
          <h2 className="max-w-3xl text-3xl font-bold text-foreground text-balance font-serif sm:text-4xl">
            Dane, które widzi właściciel po starcie z ChefVision
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/35"
            >
              <span className="text-3xl font-bold text-primary font-serif sm:text-4xl">{stat.value}</span>
              <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
