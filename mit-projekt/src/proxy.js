import { NextResponse } from "next/server"

const LANGUAGE_COOKIE = "site-lang"
const EN_PREFIX = "/en"

function isEnglishPath(pathname) {
  return pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`)
}

function getPreferredLanguage(request) {
  const cookieLang = request.cookies.get(LANGUAGE_COOKIE)?.value
  if (cookieLang === "da" || cookieLang === "en") {
    return cookieLang
  }

  const country = request.headers.get("x-vercel-ip-country")
  if (country) {
    return country.toUpperCase() === "DK" ? "da" : "en"
  }

  const acceptLanguage = request.headers.get("accept-language") || ""
  return /^da\b/i.test(acceptLanguage) ? "da" : "en"
}

function withLanguageCookie(response, lang) {
  response.cookies.set({
    name: LANGUAGE_COOKIE,
    value: lang,
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  })

  return response
}

export function proxy(request) {
  const { pathname } = request.nextUrl
  const preferredLanguage = getPreferredLanguage(request)
  const englishPath = isEnglishPath(pathname)

  if (preferredLanguage === "en" && !englishPath) {
    const url = request.nextUrl.clone()
    url.pathname = pathname === "/" ? EN_PREFIX : `${EN_PREFIX}${pathname}`
    return withLanguageCookie(NextResponse.redirect(url), "en")
  }

  if (preferredLanguage === "da" && englishPath) {
    const url = request.nextUrl.clone()
    const strippedPath = pathname.replace(/^\/en/, "")
    url.pathname = strippedPath || "/"
    return withLanguageCookie(NextResponse.redirect(url), "da")
  }

  return withLanguageCookie(NextResponse.next(), preferredLanguage)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
}
