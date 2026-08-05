import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "FAQ — ChefVision | Najczęstsze pytania o QR Menu",
  description:
    "Odpowiedzi na najczęstsze pytania o darmowe QR Menu ChefVision: plany, języki, karta kredytowa i konfiguracja.",
}

export default function FaqPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        <FaqSection />
      </div>
      <Footer />
    </main>
  )
}
