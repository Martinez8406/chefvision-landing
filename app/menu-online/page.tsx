import type { Metadata } from "next"
import { SeoRoute, seoMetadata } from "@/components/seo/seo-route"

export const metadata: Metadata = seoMetadata("menu-online.md")

export default function MenuOnlinePage() {
  return <SeoRoute filename="menu-online.md" />
}
