"use client"

import { HotelHero } from "@/components/hotele/hotel-hero"
import { HotelLocalOffer } from "@/components/hotele/hotel-local-offer"
import { HotelProblem } from "@/components/hotele/hotel-problem"
import { HotelHubSection } from "@/components/hotele/hotel-hub-section"
import { HotelLanguages } from "@/components/hotele/hotel-languages"
import { HotelRecommendations } from "@/components/hotele/hotel-recommendations"
import { HotelOperations } from "@/components/hotele/hotel-operations"
import { HotelStory } from "@/components/hotele/hotel-story"
import { HotelImplementation } from "@/components/hotele/hotel-implementation"
import { HotelServices } from "@/components/hotele/hotel-services"
import { HotelOffer } from "@/components/hotele/hotel-offer"
import { HotelFinalCTA } from "@/components/hotele/hotel-final-cta"

export function HoteleLanding() {
  return (
    <>
      <HotelHero />
      <HotelLocalOffer />
      <HotelProblem />
      <HotelHubSection />
      <HotelLanguages />
      <HotelRecommendations />
      <HotelOperations />
      <HotelStory />
      <HotelImplementation />
      <HotelServices />
      <HotelOffer />
      <HotelFinalCTA />
    </>
  )
}
