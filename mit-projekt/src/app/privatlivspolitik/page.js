import styles from "./legal.module.css"

export const metadata = {
  title: "Privatlivspolitik",
  description: "Privatlivspolitik og databeskyttelse hos Creators imod mobning",
  alternates: {
    canonical: "/privatlivspolitik",
  },
}

export default function PrivatlivspolitikPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>Privatlivspolitik</h1>

          <section>
            <h2>1. Introduktion</h2>
            <p>
              Creators imod mobning ("vi", "os" eller "vores") driver webstedet{" "}
              <strong>creatorsimod.dk</strong> (herefter "webstedet"). Vi er forpligtet til at beskytte
              dine personlige data i overensstemmelse med Databeskyttelsesforordningen (GDPR) og dansk
              databeskyttelseslovgivning.
            </p>
          </section>

          <section>
            <h2>2. Dataansvarlig</h2>
            <p>
              <strong>Navn:</strong> Creators imod mobning
              <br />
              <strong>Email:</strong> kontakt@creatorsimod.dk
              <br />
              <strong>Adresse:</strong> Danmark
            </p>
            <p>Vi er dataansvarlig for behandling af dine personlige data.</p>
          </section>

          <section>
            <h2>3. Hvilke data indsamler vi?</h2>
            <p>Vi indsamler følgende typer personlige data:</p>
            <ul>
              <li>
                <strong>Kontaktformular:</strong> Navn, email-adresse, telefonnummer og besked
              </li>
              <li>
                <strong>Cookies:</strong> Information om din browser, IP-adresse, besøgshistorie
              </li>
              <li>
                <strong>Analytics:</strong> Anonymiserede data om din interaktion med webstedet
              </li>
              <li>
                <strong>Discord:</strong> Hvis du tilslutter dig vores Discord-server, behandler vi
                dine Discord-data
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Formål med behandling</h2>
            <p>Vi behandler dine data til følgende formål:</p>
            <ul>
              <li>Besvare dine henvendelser og support-anmodninger</li>
              <li>Forbedre webstedets funktionalitet og brugeroplevelse</li>
              <li>Overholde juridiske forpligtelser</li>
              <li>Forebygge svindel og sikkerhedstrusler</li>
              <li>Statistik og analyse af webstedets brug</li>
            </ul>
          </section>

          <section>
            <h2>5. Juridisk grundlag</h2>
            <p>Behandlingen af dine personlige data er baseret på:</p>
            <ul>
              <li>Dit samtykke (f.eks. kontaktformular)</li>
              <li>Vores berettigede interesser (f.eks. sikkerhed og forbedring af tjeneste)</li>
              <li>Juridiske forpligtelser (f.eks. retshåndhævelse)</li>
            </ul>
          </section>

          <section>
            <h2>6. Deling af data</h2>
            <p>
              Vi deler ikke dine personlige data med tredjeparter uden dit samtykke, bortset fra:
            </p>
            <ul>
              <li>GDPR-certificerede databehandlere (hosting-providere, analyseværktøjer)</li>
              <li>Juridiske krav fra myndigheder</li>
              <li>Discord Inc. (når du bruger Discord-integrationerne)</li>
            </ul>
          </section>

          <section>
            <h2>7. Tidsperiode for lagring</h2>
            <p>Vi lagrer dine data så længe nødvendigt for at opfylde formålet:</p>
            <ul>
              <li>
                <strong>Kontaktformular:</strong> Maksimalt 1 år efter sidste kommunikation
              </li>
              <li>
                <strong>Cookies:</strong> Se vores <a href="/cookiepolitik">Cookiepolitik</a>
              </li>
              <li>
                <strong>Analytics:</strong> Anonymiseres efter 26 måneder
              </li>
            </ul>
          </section>

          <section>
            <h2>8. Dine rettigheder</h2>
            <p>Du har følgende rettigheder i henhold til GDPR:</p>
            <ul>
              <li>
                <strong>Ret til indsigt:</strong> Du kan anmode om indsigt i dine personlige data
              </li>
              <li>
                <strong>Ret til berigtigelse:</strong> Du kan få urigtige data rettet
              </li>
              <li>
                <strong>Ret til sletning:</strong> Du kan anmode om sletning ("retten til at blive
                glemt")
              </li>
              <li>
                <strong>Ret til begrænsning:</strong> Du kan begrænse behandlingen af dine data
              </li>
              <li>
                <strong>Ret til dataportabilitet:</strong> Du kan få dine data i struktureret format
              </li>
              <li>
                <strong>Ret til indsigelse:</strong> Du kan gøre indsigelse mod behandlingen
              </li>
            </ul>
            <p>
              For at udøve dine rettigheder, kontakt os på <strong>kontakt@creatorsimod.dk</strong>.
            </p>
          </section>

          <section>
            <h2>9. Sikkerhed</h2>
            <p>
              Vi implementerer passende tekniske og administrative foranstaltninger for at beskytte dine
              data mod uautoriseret adgang, ændring og sletning.
            </p>
          </section>

          <section>
            <h2>10. Klager</h2>
            <p>
              Hvis du mener, at vi behandler dine personlige data ulovligt, har du ret til at indgive
              klage til <strong>Datatilsynet</strong>.
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
            </p>
          </section>

          <section>
            <h2>11. Ændringer til denne politik</h2>
            <p>
              Vi forbeholder os ret til at opdatere denne privatlivspolitik. Vigtige ændringer meddeles
              via email eller på webstedet.
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
