import type { Metadata } from "next"
import { SeoRoute, seoMetadata } from "@/components/seo/seo-route"

export const metadata: Metadata = seoMetadata("qr-menu.md")

export default function QrMenuPage() {
  return <SeoRoute filename="qr-menu.md" />
}
