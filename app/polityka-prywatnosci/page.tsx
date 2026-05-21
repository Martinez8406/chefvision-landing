import { readFileSync } from "fs"
import path from "path"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Polityka prywatności | ChefVision.pl",
  description: "Polityka prywatności serwisu ChefVision.pl",
}

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), "content", "polityka-prywatnosci.html")
  const html = readFileSync(filePath, "utf8")

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <article
            className="legal-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
