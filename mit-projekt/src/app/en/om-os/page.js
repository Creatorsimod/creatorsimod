import Image from "next/image"
import styles from "../../omos/page.module.css"
import TeamMember from "../../components/TeamMember"

export const metadata = {
  title: "About us",
  description:
    "Learn about Creators against bullying, our mission, and how we work with campaigns, content, and community to reduce bullying.",
  alternates: {
    canonical: "/en/om-os",
  },
}

export default function OmOsPageEn() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.copy}>
            <h1>About Creators against bullying</h1>
            <p>
              Creators against bullying is an initiative where we bring creators together to raise
              awareness about bullying in schools, at workplaces, and online. We work with campaigns,
              content, and fundraising to support projects that make a real difference.
              <br />
              Together, we use our voices to create a safer future.
            </p>
          </div>

          <div className={styles.logoWrap}>
            <Image
              src="/mainLogo.png"
              alt="Creators against bullying logo"
              width={560}
              height={560}
              className={styles.logo}
              priority
            />
          </div>
        </section>

        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>The team behind it</h2>
          <p className={styles.sectionSubtitle}>We currently have the following 2 members</p>

          <div className={styles.teamGrid}>
            <TeamMember
              name="Annepane"
              role="Founder"
              image="/annepane.jpg"
              links={[
                { label: "Twitch", url: "https://www.twitch.tv/annepane" },
                { label: "Instagram", url: "https://www.instagram.com/annepanetv/" },
              ]}
              bio="Annepane is a Danish Twitch streamer and content creator focused on gaming, cosplay, and welcoming communities. She is known for her positive energy and safe streams where respect and good vibes are central values. Through Creators against bullying, she works to build a more inclusive online community where everyone feels welcome."
            />
            <TeamMember
              name="Mortenrwinther"
              role="Web Developer & Partner"
              image="/mortenrwinther.png"
              links={[
                { label: "Twitch", url: "https://www.twitch.tv/mortenrwinther" },
                { label: "YouTube", url: "https://www.youtube.com/@mortenrwinther" },
              ]}
              bio="Mortenrwinther is a Danish content creator and Twitch streamer focused on gaming, entertainment, and strong online communities. With a passion for bringing people together through positive energy and authentic content, he actively supports safer spaces online. As part of Creators against bullying, his goal is to promote respect, community, and anti-bullying awareness."
            />
          </div>
        </section>

        <section className={styles.visionMissionSection}>
          <div className={styles.visionMissionContainer}>
            <div className={styles.visionMissionCard}>
              <h2 className={styles.visionMissionTitle}>Vision</h2>
              <p className={styles.visionMissionText}>
                To make people aware that bullying is still a visible part of everyday behavior in
                schools, workplaces, and online spaces. It affects identity, confidence, and the way
                we treat each other both online and offline, and it impacts the next generation.
              </p>
            </div>

            <div className={styles.visionMissionCard}>
              <h2 className={styles.visionMissionTitle}>Mission</h2>
              <p className={styles.visionMissionText}>
                To reduce bullying as much as possible and guide people toward respectful behavior,
                both offline and online. We do this by providing a community and running campaigns,
                events, and fundraising initiatives.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
