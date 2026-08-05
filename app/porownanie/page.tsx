import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { AntiPlatformSection } from "@/components/anti-platform-section"
import { ComparisonSection } from "@/components/comparison-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Porównanie — ChefVision | QR Menu vs platformy dostaw",
  description:
    "Zobacz, czym ChefVision różni się od platform dostaw i tradycyjnych kart menu. Bez prowizji i bez pośredników.",
}

export default function ComparisonPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AntiPlatformSection />
        <ComparisonSection />
      </div>
      <Footer />
    </main>
  )
}
