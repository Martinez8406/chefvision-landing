import type { Metadata } from "next"
import { HoteleNavbar } from "@/components/hotele/hotele-navbar"
import { HoteleLanding } from "@/components/hotele/hotele-landing"
import { HoteleLocaleBootstrap } from "@/components/hotele/hotele-locale-bootstrap"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "ChefVision dla hoteli | Informacje hotelu w telefonie gościa",
  description:
    "Room Service, restauracja, bar, spa i informacje o hotelu — wszystko w jednym miejscu. 14 dni Premium. Osobiste wdrożenie dla hoteli z Wrocławia i okolic.",
  openGraph: {
    title: "ChefVision dla hoteli | Informacje hotelu w telefonie gościa",
    description:
      "Twój gość nie powinien szukać informacji. Hotel Hub łączy usługi hotelu w telefonie gościa. 14 dni na sprawdzenie.",
    url: "https://www.chefvision.pl/hotele",
    type: "website",
  },
  alternates: {
    canonical: "https://www.chefvision.pl/hotele",
  },
}

export default function HotelePage() {
  return (
    <main className="min-h-screen bg-background">
      <HoteleLocaleBootstrap />
      <HoteleNavbar />
      <HoteleLanding />
      <Footer />
    </main>
  )
}
