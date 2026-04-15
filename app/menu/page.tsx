import { Footer } from "@/components/footer"
import { MenuLiveSection } from "@/components/menu-live-section"
import { Navbar } from "@/components/navbar"

export default function MenuPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        <MenuLiveSection />
      </div>
      <Footer />
    </main>
  )
}
