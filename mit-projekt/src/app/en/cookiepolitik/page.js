import styles from "../../cookiepolitik/legal.module.css"

export const metadata = {
  title: "Cookie policy",
  description: "Cookie policy and cookie settings at Creators imod mobning",
  alternates: {
    canonical: "/en/cookiepolitik",
  },
}

export default function CookiePolicyPageEn() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>Cookie policy</h1>

          <section>
            <h2>1. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help
              remember preferences and improve your experience.
            </p>
          </section>

          <section>
            <h2>2. Types of cookies we use</h2>
            <h3>Necessary cookies</h3>
            <p>
              These cookies are required for the website to work properly and cannot be switched off
              without affecting core functionality.
            </p>
            <ul>
              <li>Session cookies</li>
              <li>Security cookies</li>
              <li>CSRF protection tokens</li>
            </ul>

            <h3>Third-party cookies</h3>
            <p>
              When you load embedded third-party content such as our Discord widget, those providers may
              set their own cookies according to their own privacy and cookie policies.
            </p>
          </section>

          <section>
            <h2>3. Your choices</h2>
            <p>
              You can manage cookies through your browser settings. You may block or remove cookies,
              but some site functions might no longer work as expected.
            </p>
            <p>
              You can withdraw consent at any time via the cookie button or by contacting us at
              <strong> kontakt@creatorsimod.dk</strong>.
            </p>
          </section>

          <section>
            <h2>4. Consent</h2>
            <p>
              On your first visit, we show a cookie banner with information about necessary cookies and
              third-party embeds. Your choice is stored for up to 12 months.
            </p>
          </section>

          <section>
            <h2>5. Contact</h2>
            <p>
              If you have questions about cookies, contact us at:
              <br />
              <strong>Email:</strong> kontakt@creatorsimod.dk
            </p>
          </section>

          <section>
            <h2>6. Legal basis</h2>
            <p>
              We process cookies in accordance with GDPR and applicable Danish electronic communications
              rules.
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
