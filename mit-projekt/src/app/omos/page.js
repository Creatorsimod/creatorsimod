import Image from "next/image"
import styles from "./page.module.css"
import TeamMember from "../components/TeamMember"

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

        {/* Team Section (same as on frontpage) */}
        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Teamet bag</h2>
          <p className={styles.sectionSubtitle}>Vi har følgende 2 medlemmer indtil videre</p>

          <div className={styles.teamGrid}>
            <TeamMember
              name="Annepane"
              role="Founder"
              image="/annepane.jpg"
              links={[
                { label: "Twitch", url: "https://www.twitch.tv/annepane" },
                { label: "Instagram", url: "https://www.instagram.com/annepanetv/" },
              ]}
              bio="Annepane er en dansk Twitch-streamer og content creator med fokus på gaming, cosplay og hyggelige fællesskaber. Hun er kendt for sine flødebolle streams og positive energi, hvor tryghed, respekt og god stemning er i centrum. Gennem projektet 'Creators imod Mobning' arbejder hun for at skabe et mere inkluderende online community, hvor alle kan føle sig velkomne."
            />
            <TeamMember
              name="Mortenrwinther"
              role="Webudvikler & Partner"
              image="/mortenrwinther.png"
              links={[
                { label: "Twitch", url: "https://www.twitch.tv/mortenrwinther" },
                { label: "YouTube", url: "https://www.youtube.com/@mortenrwinther" },
              ]}
              bio="Mortenrwinther er en dansk content creator og Twitch-streamer med fokus på gaming, underholdning og et stærkt online fællesskab. Med en passion for at samle mennesker gennem positiv energi og autentisk content arbejder han aktivt for at skabe et trygt miljø på nettet. Som en del af 'Creators imod Mobning' er hans mål at sætte fokus på respekt, fællesskab og at bekæmpe mobning i online verdenen."
            />
          </div>
        </section>
      </main>
    </div>
  )
}