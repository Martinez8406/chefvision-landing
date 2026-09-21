import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ScanBarSection } from "@/components/scan-bar-section"
import { HowItWorksHome } from "@/components/how-it-works-home"
import { GuestClubHome } from "@/components/guest-club-home"
import { ForWhomSection } from "@/components/for-whom-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ScanBarSection />
      <HowItWorksHome />
      <GuestClubHome />
      <ForWhomSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
