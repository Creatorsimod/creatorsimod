import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

export const metadata = {
  title: "Forside",
  description:
    "Creators imod mobning samler danske creators for at skabe opmærksomhed og handling mod mobning online, i skolen og på arbejdspladsen.",
  alternates: {
    canonical: "/",
  },
}

const creatorsProjects = [
  { id: 1, title: "Viggo Cimmaron", category: "Illustration" },
  { id: 2, title: "Memento Hotel", category: "Illustration" },
  { id: 3, title: "Burger Uni", category: "Illustration" },
  { id: 4, title: "Crowd Zero", category: "Branding" },
  { id: 5, title: "Sari Purdue", category: "Branding" },
  { id: 6, title: "Collab", category: "Branding" },
  { id: 7, title: "Wardrobe Wear", category: "Print" },
  { id: 8, title: "One Pride Group", category: "Print" },
  { id: 9, title: "Iris Company", category: "Print" },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroTop}>
          <h1 className={styles.heroTitle}>Creators imod mobning 💙</h1>
          <p className={styles.heroText}>
            Vi er et fællesskab af creators, der bruger vores<br />
            platforme til at bekæmpe mobning og skabe en<br />
            positiv forandring.
          </p>
          <Link href="/bliv-creator" className={styles.cta}>
            Bliv en del af projektet
          </Link>
        </section>

        {/* Creators Section */}
        <section className={styles.creatorsSection}>
          <h2 className={styles.sectionTitle}>Creators</h2>
          <p className={styles.sectionSubtitle}>Her kan du se hvilke creators der støtter projektet</p>

          <div className={styles.grid}>
            {creatorsProjects.map((project) => (
              <div key={project.id} className={styles.gridItem}>
                <div className={styles.imagePlaceholder} />
                <div className={styles.itemLabel}>
                  <span className={styles.itemTitle}>{project.title}</span>
                  <span className={styles.itemCategory}>{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
