import styles from "./legal.module.css"

export const metadata = {
  title: "Handelsbetingelser",
  description: "Handelsbetingelser og vilkår for brug af Creators imod mobning",
  alternates: {
    canonical: "/handelsbetingelser",
  },
}

export default function HandelsbetingelserPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1>Handelsbetingelser</h1>

          <section>
            <h2>1. Introduktion</h2>
            <p>
              Disse handelsbetingelser regulerer din brug af webstedet <strong>creatorsimod.dk</strong>{" "}
              og tjenesterne fra Creators imod mobning ("vi", "os", "vores").
            </p>
            <p>
              Ved at få adgang til og bruge webstedet accepterer du fuldt ud disse vilkår og betingelser.
              Hvis du ikke er enig, skal du ikke bruge webstedet.
            </p>
          </section>

          <section>
            <h2>2. Brug af webstedet</h2>
            <p>Du accepterer at bruge webstedet:</p>
            <ul>
              <li>Kun til lovlige og gyldige formål</li>
              <li>Uden at skade webstedet eller dets brugere</li>
              <li>Uden at forsøge at få uautoriseret adgang</li>
              <li>Uden at sprede malware eller skadelig kode</li>
              <li>Uden at gøre spam eller uønsket kontakt</li>
            </ul>
          </section>

          <section>
            <h2>3. Intellektuel ejendomsret</h2>
            <p>
              Al indhold på webstedet, herunder tekst, billeder, logo, design og kode, ejes af
              Creators imod mobning eller vores licensgivere. Du må ikke gengive, distribuere eller
              transmittere indholdet uden skriftlig tilladelse.
            </p>
          </section>

          <section>
            <h2>4. Begrænset licens</h2>
            <p>
              Vi giver dig en begrænstet, ikke-eksklusiv licens til at få adgang til webstedet til
              personligt brug. Du må ikke:
            </p>
            <ul>
              <li>Ændre eller oversætte indholdet</li>
              <li>Sælge eller licencere indholdet</li>
              <li>Udtrække større del data eller genbruge det</li>
              <li>Koble til webstedet fra spammer-hjemmesider</li>
            </ul>
          </section>

          <section>
            <h2>5. Brugeroprettede indhold</h2>
            <p>
              Hvis du poster indhold (f.eks. kommentarer i Discord), giver du os non-exclusively ret
              til at bruge, ændre og distribuere indholdet.
            </p>
            <p>
              Du garanterer, at du ejer eller har rettighed til det indhold, du poster, og at det ikke
              krænker andres rettigheder.
            </p>
          </section>

          <section>
            <h2>6. Ansvarsfraskrivelse</h2>
            <p>
              Webstedet leveres "som det er" uden garanti eller repræsentation af nogen art, hvad angår
              nøjagtighed, fuldstændighed eller funktion.
            </p>
            <p>Vi er ikke ansvarlige for:</p>
            <ul>
              <li>Indhold fra tredjepart eller eksterne links</li>
              <li>Serviceafbrydelser eller tekniske fejl</li>
              <li>Datasikkerhedsbrud (medmindre det skyldes vores uagtsomhed)</li>
              <li>Indirektet eller påfølgende skade</li>
            </ul>
          </section>

          <section>
            <h2>7. Ansvarsbegrænsning</h2>
            <p>
              Under ingen omstændigheder er Creators imod mobning ansvarlig for skader, herunder
              tabt fortjeneste, datatab eller andre skader, selv hvis vi er gjort opmærksom på
              muligheden.
            </p>
            <p>
              Vores samlede ansvar overfor dig er begrænset til det beløb, du har betalt (hvis
              relevant), eller 100 DKK, alt efter hvad der er mindre.
            </p>
          </section>

          <section>
            <h2>8. Ændringer til webstedet</h2>
            <p>
              Vi forbeholder os ret til at ændre, suspendere eller standse webstedet uden varsel. Vi er
              ikke ansvarlige for tab eller ulemper, dette måtte forårsage.
            </p>
          </section>

          <section>
            <h2>9. Brugere og forbud</h2>
            <p>
              Vi forbeholder os ret til at suspendere eller lukke din adgang, hvis du overtræder disse
              vilkår eller gør skade på webstedet eller andre brugere.
            </p>
          </section>

          <section>
            <h2>10. Links til tredjeparter</h2>
            <p>
              Webstedet kan indeholde links til eksterne hjemmesider. Vi er ikke ansvarlige for indhold
              eller praksis på disse sider.
            </p>
          </section>

          <section>
            <h2>11. Lovgivning og jurisdiktion</h2>
            <p>
              Disse vilkår er underlagt dansk lovgivning og de danske domstole.
            </p>
          </section>

          <section>
            <h2>12. Kontakt</h2>
            <p>
              Hvis du har spørgsmål om disse handelsbetingelser, kontakt os på:
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
