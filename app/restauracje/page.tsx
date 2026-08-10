import type { Metadata } from "next"
import { RestauracjeNavbar } from "@/components/restauracje/restauracje-navbar"
import { RestauracjeLanding } from "@/components/restauracje/restauracje-landing"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "ChefVision dla restauracji | Pomóż gościom wybrać więcej",
  description:
    "ChefVision pomaga gościom zrozumieć menu, odkrywać dania i korzystać z rekomendacji — w 14 językach. 14 dni Premium bez karty kredytowej.",
  openGraph: {
    title: "ChefVision dla restauracji | Pomóż gościom wybrać więcej",
    description:
      "Pomóż gościom wybrać więcej. Sprzedaj więcej. Cyfrowe menu z rekomendacjami i 14 językami — bez ryzyka, 14 dni Premium.",
    url: "https://www.chefvision.pl/restauracje",
    type: "website",
  },
  alternates: {
    canonical: "https://www.chefvision.pl/restauracje",
  },
}

export default function RestauracjePage() {
  return (
    <main className="min-h-screen bg-background">
      <RestauracjeNavbar />
      <RestauracjeLanding />
      <Footer />
    </main>
  )
}
