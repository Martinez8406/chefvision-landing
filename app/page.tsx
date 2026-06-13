import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FreeQrMenuSection } from "@/components/free-qr-menu-section"
import { StatsSection } from "@/components/stats-section"
import { AppPreviewSection } from "@/components/app-preview-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ComparisonSection } from "@/components/comparison-section"
import { MenuLiveSection } from "@/components/menu-live-section"
import { DishStorySection } from "@/components/dish-story-section"
import { QrMenuSeoSection } from "@/components/qr-menu-seo-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { AntiPlatformSection } from "@/components/anti-platform-section"
import { ProfitMathSection } from "@/components/profit-math-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <FreeQrMenuSection />
      <StatsSection />
      <AppPreviewSection />
      <HowItWorksSection />
      <ProfitMathSection />
      <AntiPlatformSection />
      <ComparisonSection />
      <MenuLiveSection />
      <DishStorySection />
      <QrMenuSeoSection />
      <CtaSection />
      <FaqSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
