const stats = [
  { value: "10 Zdjęć", label: "Na start całkowicie za darmo" },
  { value: "8.5s", label: "Średni czas ulepszenia zdjęcia" },
  { value: "98%", label: "Zadowolonych klientów" },
  { value: "5 min", label: "Czas tworzenia menu od zera składającego się z 10 dań" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-3xl sm:text-4xl font-bold text-primary font-serif">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
