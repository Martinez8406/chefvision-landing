import type { MetadataRoute } from "next"

type ProductRow = {
  slug: string
  updated_at: Date | null
}

const BASE_URL = "https://www.linguachef.com"

export const revalidate = 3600

async function fetchActiveProductRowsFromDatabase(): Promise<ProductRow[]> {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    return []
  }

  const { Client } = await import("pg")
  const client = new Client({
    connectionString: databaseUrl,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
  })

  try {
    await client.connect()

    const result = await client.query<ProductRow>(`
      SELECT slug, updated_at
      FROM products
      WHERE is_active = TRUE
        AND slug IS NOT NULL
        AND slug <> ''
    `)

    return result.rows
  } catch (error) {
    console.error("Sitemap: failed to read active products from database", error)
    return []
  } finally {
    await client.end().catch(() => undefined)
  }
}

function toAbsoluteUrl(pathname: string): string {
  return new URL(pathname, BASE_URL).toString()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: toAbsoluteUrl("/menu"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  const products = await fetchActiveProductRowsFromDatabase()

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: toAbsoluteUrl(`/products/${encodeURIComponent(product.slug)}`),
    lastModified: product.updated_at ?? now,
    changeFrequency: "daily",
    priority: 0.9,
  }))

  return [...staticRoutes, ...productRoutes]
}
