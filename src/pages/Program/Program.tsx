import React from "react";
import styles from './Program.module.scss'
import {useFetch} from "../../core/hooks/UseFetch";
import {ProgramData, SessionsData} from "../../core/models/Program.model";
import {Link} from "react-router-dom";
import {capitalizeFirstLetter} from "../../core/utils/util";
import {ButtonGroup} from "../../components/Button/ButtonGroup";

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

function DayFilter(){
    return <div className={styles.dayFilter}>
        <div className={styles.filterHeader}>Day</div>
        <ButtonGroup activeButton={() => {}}>
            <button>Wednesday</button>
            <button>Thursday</button>
        </ButtonGroup>
    </div>
}

function LanguageFilter(){
    return <div>
        <div className={styles.filterHeader}>Language</div>
        <ButtonGroup activeButton={() => {}}>
            <button>Norwegian</button>
            <button>English</button>
        </ButtonGroup>
    </div>
}

function FormatFilter(props: {sessions: SessionsData[] | undefined}){
    return <div>
        <div className={styles.filterHeader}>Format</div>
        <ButtonGroup activeButton={() => {}}>
            <button>All ({props.sessions && props.sessions.length})</button>
            <button>Presentations ({props.sessions && props.sessions.filter(s => s.format === "presentation").length})</button>
            <button>Lightning Talks ({props.sessions && props.sessions.filter(s => s.format === "lightning-talk").length})</button>
            <button>My Favorites</button>
        </ButtonGroup>
    </div>
}

export function Program() {
    const {data} = useFetch<ProgramData | undefined>("https://sleepingpill.javazone.no/public/allSessions/javazone_2021")
    const sessions = data && data.sessions.filter(s => s.format !== "workshop")

    return <div>
        <div className={`${styles.container} ${styles.filterContainer}`}>
            <div className={styles.filterSubContainer}>
                <DayFilter/>
                <LanguageFilter/>
            </div>
                <FormatFilter sessions={sessions}/>
        </div>
        <div className={styles.container}>
            {!!sessions && <Sessions sessions={sessions}/>}
        </div>
    </div>
}