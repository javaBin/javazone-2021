import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";
import {useFetch} from "../../core/hooks/UseFetch";
import {ProgramData} from "../../core/models/Program.model";
import {useParams} from "react-router";
import {Section} from "../../components/Section/Section";
import styles from './Session.module.scss'

const colors: ColorChoices[] = ['pink', 'blue', 'green']
export type ColorChoices = 'pink' | 'blue' | 'green';

export function SessionPage() {
    const {status, data} = useFetch<ProgramData>("https://sleepingpill.javazone.no/public/allSessions/javazone_2021")
    const {sessionId} = useParams()

    const session = data && data.sessions.find(s => s.id === sessionId)
    const color = colors[Math.floor(Math.random() * colors.length)];

    if (status !== 'fetched') {
        return null
    }

    if (!session) {
        return <VikingBanner header="404 session not found" subHeader="Where did it go (┛ಠ_ಠ)┛彡┻━┻"/>
    }

    const lang = session.language == 'no' ? 'Norwegian' : 'English'

    return (
        <>
            <VikingBanner header={session.title} subHeader={session.speakers.map(speaker => speaker.name).join(", ")}/>
            <CenterSection color={color} header={<h1>Abstract</h1>}>
                <p className={styles.preLine}>
                    {session.abstract}
                </p>
            </CenterSection>
            <>
                {
                    session.speakers.map(speaker => {
                        return <Section key={speaker.name} color={color} header={<h1>{speaker.name}</h1>}>
                            <p className={styles.preLine}>{speaker.bio}</p>
                        </Section>
                    })
                }
            </>
            <Section color={color} header={<h1>Intended audience</h1>}>
                <p className={styles.preLine}>
                    {session.intendedAudience}
                </p>
            </Section>
            <Section color={color} header={<h1>Language</h1>}>
                <p className={styles.preLine}>
                    {lang}
                </p>
            </Section>
        </>
    )
}