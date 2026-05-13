import styles from "../../kontakt/page.module.css"

export const metadata = {
  title: "Contact",
  description:
    "Contact Creators imod mobning by email or Discord. We respond to inquiries about collaborations, campaigns, and community.",
  alternates: {
    canonical: "/en/kontakt",
  },
}

export default function KontaktPageEn() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.contactSection}>
          <h1 className={styles.title}>Contact</h1>

          <div className={styles.contactList}>
            <a href="mailto:kontakt@creatorsimod.dk" className={styles.contactItem}>
              <div className={styles.iconBox}>
                <span className={styles.emailIcon}>✉</span>
              </div>
              <span className={styles.contactText}>kontakt@creatorsimod.dk</span>
            </a>

            <a
              href="https://discord.gg/gzE89Kxcm8"
              className={styles.contactItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.iconBox}>
                <span className={styles.discordIcon}>💬</span>
              </div>
              <span className={styles.contactText}>CreatorsImod</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
