import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import Link from '../../components/Link/Link';
import {InlineLink} from '../../components/InlineLink/InlineLink';
import {CenterSection} from "../../components/CenterSection/CenterSection";
import {Figure} from "../../components/Figure/Figure";

export function VolunteersPage() {
    return (
        <>
            <VikingBanner header="Bli frivillig på JavaZone"
                        subHeader="Information in Norwegian for potential student volunteers"/>
            <Section color="pink" header={<h1>Hva er JavaZone?</h1>}>
                <p>
                    JavaZone er verdens største community-drevne Java-konferanse.
                </p>
                <p>
                    Hvert år strømmer over 3200 utviklere til Oslo for å delta på JavaZone. I tillegg kommer nærmere 160
                    foredragsholdere fra hele verden, pluss mennesker fra over 50 ulike partnere.
                </p>
            </Section>
            <Section color="pink" header={<h1>Hvem leter vi etter?</h1>}>
                <p>
                    Har du lyst til å bidra til at disse menneskene skal få en fantastisk opplevelse, og også få ta del
                    i dette selv?<br/>
                    Er du student høsten 2021?
                </p>
                <p>
                    Perfekt! Du er akkurat den vi leter etter! <br/>
                    Søk som frivillig og bli med å hjelpe oss å lage tidenes beste JavaZone!<br/><br/>
                </p>
                <p>
                    <Link color="pink" external url="https://docs.google.com/forms/d/e/1FAIpQLSeowS7CcjSR1zPXrpGnAlqaJ7mKhC_tolIuP-nnG0gQMGgphg/viewform">Meld deg som frivillig!</Link>
                    {/* <Link color="pink" external url="http://eepurl.com/dt67aj">Meld deg på e-postlisten!</Link> */}
                </p>
            </Section>
            <Figure name="freya"/>
            <CenterSection color="pink" header={<h1>Ofte Stilte Spørsmål (FAQ)</h1>}/>
            <Section color="pink" header={<h1>Hvem kan bli frivillig på JavaZone?</h1>}>
                <p>
                    Alle studenter som behersker norsk og engelsk
                    flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du
                    hjertelig velkommen til å søke!
                </p>
            </Section>
            <Section color="pink" header={<h1>Hva skal jeg gjøre som frivillig?</h1>}>
                <p>
                    Det vil være en del ulike oppgaver, og du kan
                    blant annet være salvakt, ha ansvar for info-stand eller utdeling av headsett. Nærmere
                    informasjon om oppgavene vil gis rett før JavaZone og under opplæringsmøtet i forkant av
                    konferansen. Vi vil prøve å dele ut vakter og arbeidoppgaver tilpasset dine ønsker og
                    interesser.
                </p>
            </Section>
            <Section color="pink" header={<h1>Hvor mange frivillige bidrar på JavaZone?</h1>}>
                <p>
                    Hvert år deltar over 50 frivillige på JavaZone.
                    Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette
                    hindre deg i å søke, prøv da vel!
                </p>
            </Section>

            <Section color="pink" header={<h1>Får jeg med meg noe faglig som frivillig?</h1>}>
                <p>
                    Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du
                    får ca. 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk.
                </p>
            </Section>
            <Section color="pink" header={<h1>Hva med reise hvis jeg ikke bor i Oslo?</h1>}>
                <p>
                    JavaZone dekker ikke reise eller overnatting for
                    frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi
                    reisestøtte. Spør derfor studentforeningen eller instituttet ditt om dette.
                </p>
            </Section>
            <Section color="pink" header={<h1>Får jeg bli med på AweZone?</h1>}>
                <p>
                    Selvsagt får du det! JavaZone er ikke det samme
                    uten! Her får du se de kuleste bandene og snakke med de beste folka i IT-bransjen! Ingen
                    jobbing på kvelden – bare fest og moro =)
                </p>
            </Section>
            <Section color="pink" header={<h1>Når må jeg møte opp som frivillig?</h1>}>
                <p>
                    Det er oppmøte i Oslo Spektrum kl. 19:00 tirsdag
                    7. desember for opplæring, noen oppgaver, mat og omvisning i lokalene. JavaZone er
                    ferdig kl. 18 på torsdag 9. desember. Da rigger vi ned i ca. 1 time, og deretter går vi videre for
                    mat og drikke. Vi spanderer :) Detaljer blir sendt ut til de som blir tatt opp som
                    frivillige.
                </p>
            </Section>
            <Section color="pink" header={<h1>Når må jeg søke?</h1>}>
                <p>
                    Vi åpner for søknader til å bli frivillig i oktober, og søknadsfristen er 14. november.
                </p>
            </Section>
            <Section color="pink" header={<h1>Hvordan kan jeg tipse andre?</h1>}>
                <p>
                    Lik og del gjerne en av våre poster i sosiale medier: 
                    <InlineLink color="pink" external url="https://www.facebook.com/javazoneconference/posts/10159489050841605">Facebook</InlineLink>, 
                    <InlineLink color="pink" external url="https://twitter.com/javazone/status/1452527596386848768">Twitter</InlineLink>, 
                    Instagram (kommer snart), 
                    LinkedIn (kommer snart).
                </p>
                <p>
                    Plakat: 
                        <InlineLink color="pink" external url='/jz21_frivillig_some.png'>liggende</InlineLink>, 
                        <InlineLink color="pink" external url='/jz21_frivillig_A4.pdf'>stående (til utskrift)</InlineLink>
                </p>
            </Section>            
            <Section color="pink" header={<h1>I don’t speak Norwegian… What about me?</h1>}>
                <p>
                    Being a volunteer at JavaZone requires you to be
                    fluent in both Norwegian and English. This is because you are one of the main
                    goto-people for 3200 guests.
                </p>
            </Section>
            <Section color="pink" header={<h1>Spørsmål?</h1>}>
                <p>Hvis du skulle ha noen spørsmål som ikke er
                    besvart her, ta gjerne kontakt de frivilligansvarlige på<InlineLink
                        color="pink"
                        external
                        url="mailto:student@java.no">student@java.no</InlineLink>!
                </p>
            </Section>
            <Section color="pink" header={<h1>Bli med da vel!</h1>}>
                <p>
                    <Link color="pink" external url="https://docs.google.com/forms/d/e/1FAIpQLSeowS7CcjSR1zPXrpGnAlqaJ7mKhC_tolIuP-nnG0gQMGgphg/viewform">Meld deg som frivillig!</Link>
                    {/* <Link color="pink" external url="http://eepurl.com/dt67aj">Meld deg på e-postlisten!</Link> */}
                </p>
            </Section>
        </>
    )
}
