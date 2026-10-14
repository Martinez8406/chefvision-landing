import type { Metadata } from "next"
import { SeoRoute, seoMetadata } from "@/components/seo/seo-route"

export const metadata: Metadata = seoMetadata("pozyskiwanie-gosci.md")

export default function PozyskiwanieGosciPage() {
  return <SeoRoute filename="pozyskiwanie-gosci.md" />
}
