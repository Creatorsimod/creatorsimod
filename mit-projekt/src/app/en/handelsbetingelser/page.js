import styles from "../../handelsbetingelser/legal.module.css"

export const metadata = {
  title: "Terms and conditions",
  description: "Terms and conditions for using Creators imod mobning",
  alternates: {
    canonical: "/en/handelsbetingelser",
  },
}

export default function TermsPageEn() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>Terms and conditions</h1>

          <section>
            <h2>1. Introduction</h2>
            <p>
              These terms govern your use of creatorsimod.dk and related services from Creators imod
              mobning.
            </p>
          </section>

          <section>
            <h2>2. Use of the website</h2>
            <p>You agree to use the website lawfully and respectfully.</p>
            <ul>
              <li>No unauthorized access attempts</li>
              <li>No harmful code or malware</li>
              <li>No spam or abusive behavior</li>
            </ul>
          </section>

          <section>
            <h2>3. Intellectual property</h2>
            <p>
              Website content, including text, images, logos, design, and code, belongs to Creators imod
              mobning or our licensors unless otherwise stated.
            </p>
          </section>

          <section>
            <h2>4. Limitation of liability</h2>
            <p>
              The website is provided &quot;as is&quot; without warranties. To the extent allowed by law,
              we are not liable for indirect or consequential damages.
            </p>
          </section>

          <section>
            <h2>5. Changes to terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the website constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2>6. Contact</h2>
            <p>
              For legal questions, contact:
              <br />
              <strong>Email:</strong> kontakt@creatorsimod.dk
            </p>
          </section>
        </article>
      </main>
    </div>
  )
}
