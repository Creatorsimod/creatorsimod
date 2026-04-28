import Image from "next/image"
import styles from "./page.module.css"

export const metadata = {
  title: "Om os",
  description:
    "Læs om Creators imod mobning, vores mission og hvordan vi arbejder med kampagner, content og fællesskab for at modvirke mobning.",
  alternates: {
    canonical: "/om-os",
  },
}

export default function OmOsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.copy}>
            <h1>Om Creators imod</h1>
            <p>
              Creators imod mobning er et initiativ, hvor vi samler creators for at skabe
              opmærksomhed omkring mobning i skoler, på arbejdspladser og online.
              Vi arbejder med kampagner, content og indsamlinger for at støtte projekter,
              der gør en forskel.
              <br />
              Sammen bruger vi vores stemmer til at skabe en tryggere fremtid.
            </p>
          </div>

          <div className={styles.logoWrap}>
            <Image
              src="/mainLogo.png"
              alt="Creators imod mobning logo"
              width={560}
              height={560}
              className={styles.logo}
              priority
            />
          </div>
        </section>
      </main>
    </div>
  )
}