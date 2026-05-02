import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FeaturesSection } from "@/components/features-section"
import { MenuLiveSection } from "@/components/menu-live-section"
import { DishStorySection } from "@/components/dish-story-section"
import { CtaSection } from "@/components/cta-section"
import { AntiPlatformSection } from "@/components/anti-platform-section"
import { ProfitMathSection } from "@/components/profit-math-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSolutionSection />
      <ProfitMathSection />
      <AntiPlatformSection />
      <ComparisonSection />
      <FeaturesSection />
      <MenuLiveSection />
      <BeforeAfterSlider />
      <DishStorySection />
      <CtaSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
