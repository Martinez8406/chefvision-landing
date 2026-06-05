import type { Metadata } from "next"
import { HelpCenterSection } from "@/components/help-center-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Centrum pomocy | ChefVision.pl",
  description:
    "Poradniki wideo ChefVision — nauka obsługi aplikacji, menu, promocji i ustawień krok po kroku.",
}

export default function HelpCenterPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HelpCenterSection />
      </div>
      <Footer />
    </main>
  )
}
