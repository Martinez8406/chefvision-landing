import type { Metadata } from "next"
import { MaterialsSection } from "@/components/materials-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Materiały | ChefVision.pl",
  description:
    "Darmowe szablony Canva dla restauracji i hoteli — standy, plakaty i materiały promocyjne z kodem QR.",
}

export default function MaterialsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        <MaterialsSection />
      </div>
      <Footer />
    </main>
  )
}
