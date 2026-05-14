import { Geist, Geist_Mono } from "next/font/google"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creatorsimod.dk"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Creators against bullying",
  url: baseUrl,
  logo: `${baseUrl}/mainLogo.png`,
  email: "kontakt@creatorsimod.dk",
  sameAs: ["https://discord.gg/gzE89Kxcm8"],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Creators against bullying",
  url: baseUrl,
  inLanguage: "en-US",
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  metadataBase: new URL(baseUrl),
  authors: [{ name: "Morten R. Winther" }],
  title: {
    default: "Creators against bullying",
    template: "%s | Creators against bullying",
  },
  description:
    "Creators against bullying brings creators together to raise awareness and take action against bullying online, at school, and at work.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Creators against bullying",
    title: "Creators against bullying",
    description:
      "An English-speaking creator community working for a safer future without bullying.",
    images: [
      {
        url: "/mainLogo.png",
        width: 1200,
        height: 630,
        alt: "Creators against bullying logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creators against bullying",
    description:
      "An English-speaking creator community working for a safer future without bullying.",
    images: ["/mainLogo.png"],
  },
  icons: {
    icon: "/mainLogo.png",
  },
}

export default function EnLayout({ children }) {
  return children
}
