"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section + Social Links */}
        <div className={styles.logoSection}>
          <Image
            src="/mainLogo.png"
            alt="Creators imod mobning"
            width={160}
            height={80}
            className={styles.logo}
          />

          <nav className={styles.socialLinks} aria-label="Sociale medier">
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
          <h3 className={styles.discordTitle}>Tilslut os på Discord</h3>
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
            <h3 className={styles.legalTitle}>Juridisk</h3>
            <nav className={styles.legalLinks}>
              <Link href="/privatlivspolitik" className={styles.legalLink}>
                Privatlivspolitik
              </Link>
              <Link href="/cookiepolitik" className={styles.legalLink}>
                Cookiepolitik
              </Link>
              <Link href="/handelsbetingelser" className={styles.legalLink}>
                Handelsbetingelser
              </Link>
              <Link href="/gdpr" className={styles.legalLink}>
                GDPR & Personfølsomdata
              </Link>
            </nav>
          </div>

          <div className={styles.legalColumn}>
            <h3 className={styles.legalTitle}>Om os</h3>
            <nav className={styles.legalLinks}>
              <Link href="/" className={styles.legalLink}>
                Forside
              </Link>
              <Link href="/om-os" className={styles.legalLink}>
                Om Creators imod
              </Link>
              <Link href="/bliv-creator" className={styles.legalLink}>
                Bliv Creator
              </Link>
              <Link href="/kontakt" className={styles.legalLink}>
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Creators imod mobning. Alle rettigheder forbeholdt.
        </p>
        <p className={styles.compliance}>
          VI anvender cookies til at forbedre din oplevelse. Ved at fortsætte godkender du vores{" "}
          <Link href="/cookiepolitik" className={styles.complianceLink}>
            cookiepolitik
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
