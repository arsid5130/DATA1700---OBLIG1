DATA1700 - OBLIG1: Bestilling av kinobilletter
Dette prosjektet er en JavaScript-applikasjon som lar brukere registrere kjøp av kinobilletter. Oppgaven krever implementering av funksjonalitet kun på klientens side ved hjelp av HTML ogJavaScript

Funksjonalitetskrav
Registrering av kinobilletter: Brukere skal kunne fylle ut et skjema med informasjon om film, antall billetter, fornavn, etternavn, telefonnummer og e-postadresse. Etter at skjemaet er sendt inn, skal billettinformasjonen lagres som et objekt i et array.

Visning av alle billetter: Alle registrerte billetter skal vises på skjermen.

Tilbakestilling av skjema: Etter at en bestilling er registrert, skal alle inputfelt tømmes slik at brukeren kan registrere en ny billett.

Sletting av alle billetter: Det skal være mulig å slette alle registrerte billetter.

Inputvalidering: Det skal implementeres inputvalidering for å sikre at alle inputfelt er fylt ut riktig. Dette inkluderer tilpasset validering for forskjellige typer felt, som telefonnummer og e-postadresse.

Struktur
Prosjektet skal inneholde følgende filer:

index.html: HTML-filen som inneholder skjemaet for billettbestilling og visning av billetter.
script.js: JavaScript-filen som inneholder logikken for billettregistrering, visning og sletting.

OPPDATERING ETTER OBLIG 2: 
Jeg har videre utviklet prosjektet fra oblig 1 og har flyttet lagringen av kinobilettene til server/tjener. Dette har jeg gjort ved hjelp av Spring Boot og Java.
I tillegg har jeg stylet klientsiden med bootstrap for å få et mer finere og brukervennelig side.

OPPDATERING ETTER OBLIG 3: 
I denne oppdateringen har jeg flyttet lagringen av billettinformasjon til en database. Når du nå registrerer en ny billett ved å besøke localhost:8080 i nettleseren din, blir billettinformasjonen lagret i en database som er tilgjengelig på localhost:8080/h2-console.
