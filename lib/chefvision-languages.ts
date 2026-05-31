/**
 * 14 języków menu w ChefVision — zgodnie z MenuLanguageSwitcher w aplikacji.
 * Kolejność jak w przełączniku języka gościa.
 */
export const CHEFVISION_MENU_LANGUAGES = [
  { id: "pl", badge: "Polski" },
  { id: "en", badge: "English (UK)" },
  { id: "he", badge: "עברית" },
  { id: "zh", badge: "中文 (简体)" },
  { id: "uk", badge: "Українська" },
  { id: "de", badge: "Deutsch" },
  { id: "es", badge: "Español" },
  { id: "it", badge: "Italiano" },
  { id: "ko", badge: "한국어" },
  { id: "ja", badge: "日本語" },
  { id: "fr", badge: "Français" },
  { id: "cs", badge: "Čeština" },
  { id: "nl", badge: "Nederlands" },
  { id: "ar", badge: "العربية" },
] as const

export type ChefVisionLanguageId = (typeof CHEFVISION_MENU_LANGUAGES)[number]["id"]
