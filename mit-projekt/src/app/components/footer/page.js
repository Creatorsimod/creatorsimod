"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./footer.module.css"

export default function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/")
  const prefix = isEnglish ? "/en" : ""

  const toPath = (path) => {
    if (!prefix) return path
    if (path === "/") return prefix
    return `${prefix}${path}`
  }

  const t = isEnglish
    ? {
        socialLabel: "Social media",
        joinDiscord: "Join us on Discord",
        legal: "Legal",
        privacy: "Privacy policy",
        cookies: "Cookie policy",
        terms: "Terms and conditions",
        gdpr: "GDPR & Sensitive data",
        about: "About",
        home: "Home",
        aboutCreators: "About Creators against bullying",
        becomeCreator: "Become a Creator",
        contact: "Contact",
        copyright: "Creators against bullying. All rights reserved.",
        compliancePrefix: "We use cookies to improve your experience. By continuing, you accept our",
        complianceLink: "cookie policy",
      }
    : {
        socialLabel: "Sociale medier",
        joinDiscord: "Tilslut os pa Discord",
        legal: "Juridisk",
        privacy: "Privatlivspolitik",
        cookies: "Cookiepolitik",
        terms: "Handelsbetingelser",
        gdpr: "GDPR & Personfolsomdata",
        about: "Om os",
        home: "Forside",
        aboutCreators: "Om Creators imod mobning",
        becomeCreator: "Bliv Creator",
        contact: "Kontakt",
        copyright: "Creators imod mobning. Alle rettigheder forbeholdt.",
        compliancePrefix: "Vi anvender cookies til at forbedre din oplevelse. Ved at fortsaette godkender du vores",
        complianceLink: "cookiepolitik",
      }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section + Social Links */}
        <div className={styles.logoSection}>
          <Image
            src="/mainLogo.png"
            alt="Creators against bullying logo"
            width={160}
            height={80}
            className={styles.logo}
          />

          <nav className={styles.socialLinks} aria-label={t.socialLabel}>
            <a
              href="https://www.twitch.tv/creatorsimod"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Twitch - Creatorsimod"
            >
              {/* Twitch SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 3L4 15L8 15L8 19L12 19L18 13L18 3H4Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 6H15V10H17V6Z" fill="currentColor"/>
                <path d="M13 6H11V10H13V6Z" fill="currentColor"/>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/creatorsimod/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram - Creatorsimod"
            >
              {/* Instagram SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor"/>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@CreatorsImod"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="YouTube - Creatorsimod"
            >
              {/* YouTube SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="6" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M10 9.5L15 12L10 14.5V9.5Z" fill="currentColor"/>
              </svg>
            </a>
          </nav>
        </div>

        {/* Discord Widget Section */}
        <div className={styles.discordSection}>
          <h3 className={styles.discordTitle}>{t.joinDiscord}</h3>
          <div className={styles.discordWidget}>
            <iframe
              src="https://discord.com/widget?id=1490642776466133072&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className={styles.iframe}
            />
          </div>
        </div>

        {/* Legal Links Section */}
        <div className={styles.legalSection}>
          <div className={styles.legalColumn}>
            <h3 className={styles.legalTitle}>{t.legal}</h3>
            <nav className={styles.legalLinks}>
              <Link href={toPath("/privatlivspolitik")} className={styles.legalLink}>
                {t.privacy}
              </Link>
              <Link href={toPath("/cookiepolitik")} className={styles.legalLink}>
                {t.cookies}
              </Link>
              <Link href={toPath("/handelsbetingelser")} className={styles.legalLink}>
                {t.terms}
              </Link>
              <Link href={toPath("/gdpr")} className={styles.legalLink}>
                {t.gdpr}
              </Link>
            </nav>
          </div>

          <div className={styles.legalColumn}>
            <h3 className={styles.legalTitle}>{t.about}</h3>
            <nav className={styles.legalLinks}>
              <Link href={toPath("/")} className={styles.legalLink}>
                {t.home}
              </Link>
              <Link href={toPath("/om-os")} className={styles.legalLink}>
                {t.aboutCreators}
              </Link>
              <Link href={toPath("/bliv-creator")} className={styles.legalLink}>
                {t.becomeCreator}
              </Link>
              <Link href={toPath("/kontakt")} className={styles.legalLink}>
                {t.contact}
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {t.copyright}
        </p>
        <p className={styles.compliance}>
          {t.compliancePrefix}{" "}
          <Link href={toPath("/cookiepolitik")} className={styles.complianceLink}>
            {t.complianceLink}
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
