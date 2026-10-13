import { readFileSync } from "fs"
import path from "path"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SeoLanding } from "@/components/seo/seo-landing"
import { parseSeoDocument } from "@/lib/seo-markdown"

const SITE_URL = "https://www.chefvision.pl"

export function loadSeoDocument(filename: string) {
  const filePath = path.join(process.cwd(), "content", "seo", filename)
  return parseSeoDocument(readFileSync(filePath, "utf8"))
}

export function seoMetadata(filename: string): Metadata {
  const doc = loadSeoDocument(filename)
  const url = `${SITE_URL}${doc.meta.slug}`

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: doc.meta.metaTitle },
    description: doc.meta.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: doc.meta.metaTitle,
      description: doc.meta.metaDescription,
      url,
      type: "website",
      locale: "pl_PL",
      siteName: "ChefVision",
    },
  }
}

export function SeoRoute({ filename }: { filename: string }) {
  const doc = loadSeoDocument(filename)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SeoLanding doc={doc} />
      <Footer />
    </main>
  )
}
