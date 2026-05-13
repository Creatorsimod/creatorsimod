import styles from "../../privatlivspolitik/legal.module.css"

export const metadata = {
  title: "Privacy policy",
  description: "Privacy policy and data protection at Creators imod mobning",
  alternates: {
    canonical: "/en/privatlivspolitik",
  },
}

export default function PrivacyPageEn() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>Privacy policy</h1>

          <section>
            <h2>1. Introduction</h2>
            <p>
              Creators imod mobning is committed to protecting your personal data in accordance with
              GDPR and applicable Danish data protection law.
            </p>
          </section>

          <section>
            <h2>2. Data controller</h2>
            <p>
              <strong>Name:</strong> Creators imod mobning
              <br />
              <strong>Email:</strong> kontakt@creatorsimod.dk
              <br />
              <strong>Address:</strong> Denmark
            </p>
          </section>

          <section>
            <h2>3. Data we process</h2>
            <ul>
              <li>Contact information submitted by you</li>
              <li>Necessary cookie information</li>
              <li>Technical and security-related data</li>
              <li>Data from third-party embeds such as Discord</li>
            </ul>
          </section>

          <section>
            <h2>4. Purpose and legal basis</h2>
            <p>We process data to:</p>
            <ul>
              <li>Respond to inquiries and provide support</li>
              <li>Maintain and improve website functionality</li>
              <li>Comply with legal obligations</li>
              <li>Protect security and prevent misuse</li>
            </ul>
          </section>

          <section>
            <h2>5. Your rights</h2>
            <p>
              You have rights under GDPR, including access, rectification, deletion, restriction,
              portability, and objection.
            </p>
            <p>
              To exercise your rights, contact <strong>kontakt@creatorsimod.dk</strong>.
            </p>
          </section>

          <section>
            <h2>6. Complaints</h2>
            <p>
              If you believe data is processed unlawfully, you can submit a complaint to Datatilsynet.
            </p>
            <p>
              <strong>Last updated:</strong> April 28, 2024
            </p>
          </section>
        </article>
      </main>
    </div>
  )
}
