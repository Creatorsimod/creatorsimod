import styles from "./legal.module.css"

export const metadata = {
  title: "GDPR og Personfølsomdata",
  description: "Information om GDPR og personfølsomdata hos Creators imod mobning",
  alternates: {
    canonical: "/gdpr",
  },
}

export default function GdprPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>GDPR & Personfølsomdata</h1>

          <section>
            <h2>1. Hvad er GDPR?</h2>
            <p>
              GDPR (General Data Protection Regulation) er den europæiske datbeskyttelsesforordning, der
              beskytter dine grundlæggende rettigheder med hensyn til behandling af personlige data.
            </p>
            <p>
              Creators imod mobning overholder GDPR og dansk databeskyttelseslovgivning fuldt.
            </p>
          </section>

          <section>
            <h2>2. Hvad er personfølsomdata?</h2>
            <p>Personfølsomdata er særlige kategorier af personlige data, som GDPR giver ekstra beskyttelse:</p>
            <ul>
              <li>Etniske eller raciale oplysninger</li>
              <li>Politiske meninger og medlemskaber</li>
              <li>Religiøse eller filosofiske overbevisninger</li>
              <li>Fagforeningsmedlemskap</li>
              <li>Genetiske data</li>
              <li>Biometriske data (til identifikation)</li>
              <li>Sundhedsoplyninger</li>
              <li>Data om seksuel orientering eller kønsidentitet</li>
            </ul>
          </section>

          <section>
            <h2>3. Hvordan håndterer vi personfølsomdata?</h2>
            <p>
              Vi indsamler og behandler normalt <strong>ikke</strong> personfølsomdata. Hvis dit
              tilfælde kræver dette (f.eks. gennem en kontaktformular), vil vi:
            </p>
            <ul>
              <li>Få eksplicit samtykke fra dig</li>
              <li>Informere dig klart ved indsamling</li>
              <li>Lagre det med ekstra sikkerhedsforanstaltninger</li>
              <li>Slettet det så snart det ikke længere er nødvendigt</li>
            </ul>
          </section>

          <section>
            <h2>4. Dataansvarlig og databehandler</h2>
            <p>
              <strong>Dataansvarlig:</strong> Creators imod mobning er ansvarlig for, hvordan dine data behandles.
            </p>
            <p>
              <strong>Databehandlere:</strong> Hvis vi anvender tredjepartsservicerer (f.eks. hosters),
              er de databehandlere og er bundet af databehandlerkontrakter.
            </p>
          </section>

          <section>
            <h2>5. Juridisk grundlag for behandling</h2>
            <p>Vi behandler dine personlige data baseret på:</p>
            <ul>
              <li>
                <strong>Dit samtykke:</strong> Du har givet eksplicit samtykke (f.eks. kontaktformular)
              </li>
              <li>
                <strong>Juridiske forpligtelser:</strong> For at overholde lov (f.eks. skat,
                retshåndhævelse)
              </li>
              <li>
                <strong>Berettigede interesser:</strong> Vi har interresse i at beskytte webstedet og
                brugere
              </li>
              <li>
                <strong>Kontrakt:</strong> Hvis du har indgået aftale med os
              </li>
            </ul>
          </section>

          <section>
            <h2>6. Dine rettigheder under GDPR</h2>

            <h3>Ret til indsigt (Art. 15)</h3>
            <p>
              Du kan anmode om, hvilke personlige data vi har om dig, samt hvordan vi behandler dem.
            </p>

            <h3>Ret til berigtigelse (Art. 16)</h3>
            <p>
              Hvis dine data er urigtige, kan du få os til at berigtige dem.
            </p>

            <h3>Ret til sletning (Art. 17)</h3>
            <p>
              Under visse betingelser kan du få dine data slettet ("retten til at blive glemt").
            </p>

            <h3>Ret til begrænsning (Art. 18)</h3>
            <p>
              Du kan få os til at begrænse behandlingen af dine data i visse situationer.
            </p>

            <h3>Ret til dataportabilitet (Art. 20)</h3>
            <p>
              Du kan få dine data i et struktureret, almindeligt anvendeligt format og transmitteret til
              andre dataansvarlige.
            </p>

            <h3>Ret til indsigelse (Art. 21)</h3>
            <p>
              Du kan gøre indsigelse mod, at vi behandler dine data til visse formål.
            </p>

            <h3>Ret til ikke at være underlagt automatiseret beslutningstagning (Art. 22)</h3>
            <p>
              Du kan nægte at blive underlagt afgørelser, der udelukkende baseres på automatiseret
              behandling.
            </p>
          </section>

          <section>
            <h2>7. Hvordan du udøver dine rettigheder</h2>
            <p>
              For at udøve dine GDPR-rettigheder, skal du sende en anmodning til:
              <br />
              <strong>Email:</strong> kontakt@creatorsimod.dk
            </p>
            <p>
              <strong>Hvad skal anmodningen indeholde:</strong>
            </p>
            <ul>
              <li>Dit navn og identifikation</li>
              <li>Specificering af, hvilken ret du ønsker at udøve</li>
              <li>Eventuel relevant dokumentation</li>
            </ul>
            <p>
              Vi skal svare inden <strong>30 dage</strong> (kan forlænges til 60 dage ved komplekse
              anmodninger).
            </p>
          </section>

          <section>
            <h2>8. Dataoverførsler til tredjelande</h2>
            <p>
              Vi overfører kun data til lande, der har en GDPR-aquivalent databeskyttelsesniveau, eller
              vi bruger Standard Kontraktuelle Klausuler (SCC).
            </p>
          </section>

          <section>
            <h2>9. DataSikkerhed</h2>
            <p>
              Vi implementerer tekniske og administrative foranstaltninger for at beskytte dine data:
            </p>
            <ul>
              <li>Kryptering af data i transit (HTTPS)</li>
              <li>Adgangskontrol og autentifikation</li>
              <li>Regelmæssige sikkerhedstests</li>
              <li>Begrænsning af adgang til personale</li>
              <li>Sikker sletning af data</li>
            </ul>
          </section>

          <section>
            <h2>10. Databrud</h2>
            <p>
              Hvis der opstår et databrud, der kan påvirke dine rettigheder, vil vi:
            </p>
            <ul>
              <li>Informere dig uden unødigt ophold</li>
              <li>Underrette Datatilsynet (hvis påkrævet)</li>
              <li>Tage foranstaltninger til at minimere skaden</li>
            </ul>
          </section>

          <section>
            <h2>11. Databehandlerkontrakter</h2>
            <p>
              Alle vores databehandlere (hosters, analytics-udbydere osv.) er bundet af
              databehandlerkontrakter, som sikrer GDPR-overholdelse.
            </p>
          </section>

          <section>
            <h2>12. Børns oplysninger</h2>
            <p>
              Vi behandler ikke bevidst data fra børn under 13 år. Hvis vi bliver opmærksomme på dette,
              sletter vi det straks. Hvis du er 13-18 år, skal du have forældrenes samtykke.
            </p>
          </section>

          <section>
            <h2>13. Klager til Datatilsynet</h2>
            <p>
              Hvis du mener, at vi overtræder GDPR, kan du klage til Datatilsynet:
            </p>
            <p>
              <strong>Datatilsynet</strong>
              <br />
              Borgergade 68
              <br />
              1300 København K
              <br />
              Tlf: 33 19 32 00
              <br />
              Email: dt@datatilsynet.dk
              <br />
              Hjemmeside: www.datatilsynet.dk
            </p>
          </section>

          <section>
            <h2>14. Kontakt</h2>
            <p>
              Hvis du har spørgsmål om vores GDPR-praksis, kontakt os på:
              <br />
              <strong>Email:</strong> kontakt@creatorsimod.dk
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
