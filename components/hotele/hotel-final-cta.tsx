"use client"

import { ArrowRight } from "lucide-react"
import { DEMO_MAILTO_URL, APP_SIGNUP_URL, trackHoteleCta } from "@/lib/hotele-analytics"

export function HotelFinalCTA() {
  return (
    <section className="bg-[#5a8f0a] py-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 text-center sm:gap-6">
        <h2 className="text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
          Chcesz zobaczyć ChefVision w swoim hotelu?
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
          Jeśli Twój hotel znajduje się we Wrocławiu lub okolicy, przyjadę osobiście i pomogę Ci uruchomić
          ChefVision — bez dodatkowych kosztów wdrożenia.
        </p>
        <div className="max-w-xl space-y-2 text-sm leading-relaxed text-white/90 sm:text-base">
          <p>Nie musisz sam zastanawiać się, jak skonfigurować system.</p>
          <p>
            Pokażesz mi swój hotel.
            <br />
            Ja pokażę Ci, jak ChefVision może działać dla Twoich gości.
          </p>
        </div>

        <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={DEMO_MAILTO_URL}
            onClick={() => trackHoteleCta("final_demo")}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-8 text-sm font-semibold text-[#3f6212] shadow-md transition-colors hover:bg-white/95"
          >
            Umów bezpłatne wdrożenie
            <ArrowRight size={16} />
          </a>
          <a
            href={APP_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackHoteleCta("final_trial")}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/45 bg-transparent px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Zacznij 14-dniowy okres próbny
          </a>
        </div>
      </div>
    </section>
  )
}
