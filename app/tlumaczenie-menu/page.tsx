import type { Metadata } from "next"
import { SeoRoute, seoMetadata } from "@/components/seo/seo-route"

export const metadata: Metadata = seoMetadata("tlumaczenie-menu.md")

export default function TlumaczenieMenuPage() {
  return <SeoRoute filename="tlumaczenie-menu.md" />
}
