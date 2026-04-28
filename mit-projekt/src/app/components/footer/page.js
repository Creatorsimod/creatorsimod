"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Image
            src="/mainLogo.png"
            alt="Creators imod mobning"
            width={160}
            height={80}
            className={styles.logo}
          />
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
