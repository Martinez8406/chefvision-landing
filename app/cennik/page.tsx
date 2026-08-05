import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Cennik — ChefVision | QR Menu dla restauracji i hoteli",
  description:
    "Sprawdź cennik ChefVision. Darmowy plan QR Menu, plan Start i Premium — bez umów i bez karty kredytowej.",
}

export default function PricingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        <CtaSection />
      </div>
      <Footer />
    </main>
  )
}
