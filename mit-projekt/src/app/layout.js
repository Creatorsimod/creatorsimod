import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar/page"
import Footer from "./components/footer/page"
import ScrollToTop from "./components/ScrollToTop"
import CookieBanner from "./components/CookieBanner"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creatorsimod.dk"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Creators imod mobning",
  url: baseUrl,
  logo: `${baseUrl}/mainLogo.png`,
  email: "kontakt@creatorsimod.dk",
  sameAs: ["https://discord.gg/gzE89Kxcm8"],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Creators imod mobning",
  url: baseUrl,
  inLanguage: "da-DK",
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  authors: [{ name: "Morten R. Winther" }],
  title: {
    default: "Creators imod mobning",
    template: "%s | Creators imod mobning",
  },
  description:
    "Creators imod mobning er et dansk initiativ, der samler creators for at skabe opmærksomhed og handling mod mobning.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: baseUrl,
    siteName: "Creators imod mobning",
    title: "Creators imod mobning",
    description:
      "Et dansk creator-fællesskab, der arbejder for en tryggere fremtid uden mobning.",
    images: [
      {
        url: "/mainLogo.png",
        width: 1200,
        height: 630,
        alt: "Creators imod mobning logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creators imod mobning",
    description:
      "Et dansk creator-fællesskab, der arbejder for en tryggere fremtid uden mobning.",
    images: ["/mainLogo.png"],
  },
  icons: {
    icon: "/mainLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScrollToTop />
        <NavBar />
        {children}
        <Footer />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
