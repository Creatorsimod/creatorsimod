import styles from "./page.module.css"

export const metadata = {
  title: "Kontakt",
  description:
    "Kontakt Creators imod mobning via email eller Discord. Vi svarer på henvendelser om samarbejde, kampagner og fællesskab.",
  alternates: {
    canonical: "/kontakt",
  },
}

export default function KontaktPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.contactSection}>
          <h1 className={styles.title}>Kontakt</h1>

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
