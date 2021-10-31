import React, {useState} from "react";
import styles from './Program.module.scss'
import {useFetch} from "../../core/hooks/UseFetch";
import {ProgramData, SessionsData} from "../../core/models/Program.model";
import {Link} from "react-router-dom";
import {capitalizeFirstLetter} from "../../core/utils/util";
import {ButtonGroup} from "../../components/Button/ButtonGroup";

const dayFeature = false

function Session(props: SessionsData) {
    const lang = props.language === 'no' ? 'Norwegian' : 'English'
    const format = capitalizeFirstLetter(props.format)

    return (
        <Link className={styles.program} to={`/program/${props.id}`}>
            <div className={styles.session}>
                <span className={styles.title}>{props.title}</span>
                <span
                    className={styles.speaker}>{props.speakers && props.speakers.map(speaker => speaker.name).join(", ")}</span>
                <span className={styles.subinfo}>{`${format}, ${lang}, ${props.length} min`}</span>
            </div>
        </Link>
    )
}

function Sessions(props: {sessions: SessionsData[]}){
    const orderedSession = props.sessions.sort(
        (a,b) => {
            if (a.length < b.length) {
                return 1
            }
            return -1
        })

    return <> {
        orderedSession.map(s => <Session {...s} key={s.id}/>)
    } </>
}

function DayFilter(props: {}){
    if (!dayFeature){
        return null
    }

    return <div className={styles.dayFilter}>
        <div className={styles.filterHeader}>Day</div>
        <ButtonGroup activeButton={() => {}}>
            <button>Wednesday</button>
            <button>Thursday</button>
        </ButtonGroup>
    </div>
}

function LanguageFilter(props: {setFilter: (name: string) => void}){
    return <div>
        <div className={styles.filterHeader}>Language</div>
        <ButtonGroup defaultButton={0} activeButton={button => props.setFilter(button.value)}>
            <button>Both</button>
            <button value="no">Norwegian</button>
            <button value="en">English</button>
        </ButtonGroup>
    </div>
}

function FormatFilter(props: {sessions: SessionsData[] | undefined, setFilter: (name: string) => void}){
    return <div>
        <div className={styles.filterHeader}>Format</div>
        <ButtonGroup defaultButton={0} activeButton={button => props.setFilter(button.value)}>
            <button>All ({props.sessions && props.sessions.length})</button>
            <button value="presentation">Presentations ({props.sessions && props.sessions.filter(s => s.format === "presentation").length})</button>
            <button value="lightning-talk">Lightning Talks ({props.sessions && props.sessions.filter(s => s.format === "lightning-talk").length})</button>
            {/*<button>My Favorites</button>*/}
        </ButtonGroup>
    </div>
}

export function Program() {
    const {data} = useFetch<ProgramData | undefined>("https://sleepingpill.javazone.no/public/allSessions/javazone_2021")
    const sessions = data && data.sessions.filter(s => s.format !== "workshop")

    const [languageFilter, setLanguageFilter] = useState<string | undefined>(undefined)
    const [formatFilter, setFormatFilter] = useState<string | undefined>(undefined)

    console.log("filter", languageFilter, formatFilter)

    const filteredSession = sessions
        ?.filter(s => !!languageFilter ? s.language === languageFilter: true)
        ?.filter(s => !!formatFilter ? s.format === formatFilter: true)

    return <div>
        <div className={`${styles.container} ${styles.filterContainer}`}>
            <div className={styles.filterSubContainer}>
                <DayFilter/>
                <LanguageFilter setFilter={setLanguageFilter}/>
            </div>
                <FormatFilter setFilter={setFormatFilter} sessions={sessions}/>
        </div>
        <div className={styles.container}>
            {!!filteredSession && <Sessions sessions={filteredSession}/>}
        </div>
    </div>
}