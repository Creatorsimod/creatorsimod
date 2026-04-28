import styles from "./legal.module.css"

export const metadata = {
  title: "Cookiepolitik",
  description: "Cookiepolitik og cookie-indstillinger hos Creators imod mobning",
  alternates: {
    canonical: "/cookiepolitik",
  },
}

export default function CookiepolitikPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>Cookiepolitik</h1>

          <section>
            <h2>1. Hvad er cookies?</h2>
            <p>
              Cookies er små tekstfiler, der lagres på din enhed (computer, tablet, smartphone), når
              du besøger vores websted. De bruges til at huske dine præferencer og forbedre din
              brugeroplevelse.
            </p>
          </section>

          <section>
            <h2>2. Typer af cookies vi bruger</h2>

            <h3>Nødvendige Cookies</h3>
            <p>
              Disse cookies er essentielle for at webstedet fungerer korrekt. De kan ikke slukkes uden
              at påvirke funktionaliteten.
            </p>
            <ul>
              <li>Session-cookies: Holder dig logget ind</li>
              <li>Sikkerhedscookies: Beskytter mod misbrug</li>
              <li>CSRF-tokens: Forebygger cross-site-anmodninger</li>
            </ul>

            <h3>Tredjepartscookies</h3>
            <p>
              Når du indlæser tredjepartsindhold som vores Discord-widget, kan Discord sætte egne
              cookies. Disse cookies styres af Discords egen cookie- og privatlivspolitik.
            </p>

            <h3>Tredjepartsservicers Cookies</h3>
            <p>
              Som f.eks. Discord-widget og andre embederede indhold kan indehavere sætte deres egne
              cookies.
            </p>
          </section>

          <section>
            <h2>3. Dine cookie-valg</h2>
            <p>
              Du kan styre cookies gennem dine browser-indstillinger. Det er muligt at afvise eller
              slette cookies, men dette kan påvirke webstedets funktionalitet.
            </p>
            <p>
              <strong>Vigtig information:</strong> Du kan når som helst trække dit samtykke til
              cookies tilbage ved at klikke på cookie-knappen nederst på siden eller ved at kontakte os
              på <strong>kontakt@creatorsimod.dk</strong>.
            </p>
          </section>

          <section>
            <h2>4. Samtykke til cookies</h2>
            <p>
              Når du først besøger vores websted, viser vi et cookie-banner, så du kan læse om vores
              brug af nødvendige cookies og tredjepartsindhold. Dit valg om at skjule banneret lagres i
              12 måneder.
            </p>
            <p>
              <strong>Du kan ændre dine indstillinger til enhver tid.</strong>
            </p>
          </section>

          <section>
            <h2>5. Tredjepartssamtykke</h2>
            <p>
              Vi bruger ikke Google Analytics eller anden sporing fra Google på siden. Eventuelle
              tredjepartscookies kommer primært fra Discord-widgetten eller andre indlejrede services.
              Vi anbefaler, at du også læser deres politikker.
            </p>
          </section>

          <section>
            <h2>6. Kontakt</h2>
            <p>
              Hvis du har spørgsmål om vores cookiepolitik, kan du kontakte os på:
              <br />
              <strong>Email:</strong> kontakt@creatorsimod.dk
            </p>
          </section>

          <section>
            <h2>7. Juridisk grundlag</h2>
            <p>
              Vi følger Databeskyttelsesforordningen (GDPR) og dansk elektronikommunikationsloven ved
              håndtering af cookies.
            </p>
            <p>
              <strong>Sidst opdateret:</strong> 28. april 2024
            </p>
          </section>
        </article>
      </main>
    </div>
  )
}
