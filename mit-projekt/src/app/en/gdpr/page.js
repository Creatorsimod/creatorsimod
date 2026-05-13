import styles from "../../gdpr/legal.module.css"

export const metadata = {
  title: "GDPR and sensitive data",
  description: "Information about GDPR and sensitive data at Creators imod mobning",
  alternates: {
    canonical: "/en/gdpr",
  },
}

export default function GdprPageEn() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>GDPR & Sensitive data</h1>

          <section>
            <h2>1. What is GDPR?</h2>
            <p>
              GDPR is the European data protection regulation that protects your rights regarding personal
              data processing. Creators imod mobning complies with GDPR and applicable Danish law.
            </p>
          </section>

          <section>
            <h2>2. Sensitive personal data</h2>
            <p>
              Sensitive data includes special categories such as health data, biometric data, political
              opinions, religion, and similar protected information.
            </p>
          </section>

          <section>
            <h2>3. How we handle data</h2>
            <p>
              We generally do not collect sensitive personal data. If a special case requires it, we use
              explicit consent, limited retention, and additional security safeguards.
            </p>
          </section>

          <section>
            <h2>4. Your GDPR rights</h2>
            <ul>
              <li>Right of access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restriction</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
            </ul>
          </section>

          <section>
            <h2>5. Contact</h2>
            <p>
              To exercise your rights, contact us at:
              <br />
              <strong>Email:</strong> kontakt@creatorsimod.dk
            </p>
          </section>

          <section>
            <h2>6. Supervisory authority</h2>
            <p>
              You may file a complaint with the Danish Data Protection Agency (Datatilsynet) if you
              believe your rights have been violated.
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
