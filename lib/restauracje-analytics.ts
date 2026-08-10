export const APP_SIGNUP_URL = "https://app.chefvision.pl"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/** Lekki tracking kliknięć CTA na /restauracje (Facebook Pixel + Vercel Analytics page). */
export function trackRestauracjeCta(location: string) {
  if (typeof window === "undefined") return

  try {
    window.fbq?.("trackCustom", "RestauracjeCTAClick", {
      location,
      page: "/restauracje",
    })
  } catch {
    // ignore analytics errors
  }
}
