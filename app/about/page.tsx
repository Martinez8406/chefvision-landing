import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
