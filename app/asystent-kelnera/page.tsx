import type { Metadata } from "next"
import { SeoRoute, seoMetadata } from "@/components/seo/seo-route"

export const metadata: Metadata = seoMetadata("asystent-kelnera.md")

export default function AsystentKelneraPage() {
  return <SeoRoute filename="asystent-kelnera.md" />
}
