import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Zapisuje kraj z geo Vercel (lub Cloudflare) do cookie —
 * używane na /hotele do automatycznego ustawienia języka chorwackiego.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code") ||
    ""

  if (country && country !== "XX") {
    response.cookies.set("cv-country", country.toUpperCase(), {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    })
  }

  return response
}

export const config = {
  matcher: ["/hotele", "/hotele/:path*"],
}
