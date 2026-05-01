const stats = [
  { value: "+25%", label: "Wyższy rachunek", sub: "Goście kupują oczami — zdjęcia i wideo podnoszą średnią wartość zamówienia" },
  { value: "84 zł", label: "Oszczędności dziennie", sub: "Kelner odzyskuje ~1h dziennie, którą tracił na tłumaczenie karty obcokrajowcom" },
  { value: "1,50 zł", label: "Koszt jednej opinii Google", sub: "Tyle kosztuje Cię zdobycie recenzji — zamiast 30 zł w Google Ads" },
  { value: "12", label: "Języków w menu", sub: "80% turystów odczuwa stres przy zamawianiu w obcym języku — ChefVision to eliminuje" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center gap-1 text-center">
              <span className="text-3xl sm:text-4xl font-bold text-primary font-serif">{stat.value}</span>
              <span className="text-sm font-semibold text-foreground">{stat.label}</span>
              <span className="text-xs text-muted-foreground leading-relaxed">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
