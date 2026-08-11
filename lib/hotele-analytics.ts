export const APP_SIGNUP_URL = "https://app.chefvision.pl"

export const DEMO_MAILTO_URL =
  "mailto:kontakt@chefvision.pl?subject=Bezp%C5%82atne%20wdro%C5%BCenie%20ChefVision%20%E2%80%94%20hotel%20Wroc%C5%82aw"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/** Lekki tracking kliknięć CTA na /hotele (Facebook Pixel). */
export function trackHoteleCta(location: string) {
  if (typeof window === "undefined") return

  try {
    window.fbq?.("trackCustom", "HoteleCTAClick", {
      location,
      page: "/hotele",
    })
  } catch {
    // ignore analytics errors
  }
}
