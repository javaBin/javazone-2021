import React from "react";
import styles from './Workshop.module.scss'
import {useFetch} from "../../core/hooks/UseFetch";
import {ProgramData, SessionsData} from "../../core/models/Program.model";
import {Link} from "react-router-dom";

function Session(props: SessionsData){
    return (
        <Link className={styles.program} to={`/workshops/${props.id}`}>
            <div className={styles.session}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.speaker}>{props.speakers && props.speakers.map(speaker => speaker.name).join(", ")}</span>
                <span className={styles.subinfo}>{`${props.format}, ${props.length} min`}</span>
            </div>
        </Link>
    )
}

function Sessions(props: {data: [SessionsData]}){
    const sessions = props.data.filter(s => s.format === "workshop")
    const orderedSession = sessions.sort(
        (a,b) => {
            if (a.length < b.length) {
                return 1
            }
            return -1
        })

    return <> {
        orderedSession.map(s => <Session {...s}/>)
    } </>
}

export function Workshop() {
    const {data} = useFetch<ProgramData>("https://sleepingpill.javazone.no/public/allSessions/javazone_2021")

    return <div className={styles.container}>
        {!!data && <Sessions data={data.sessions}/>}
    </div>
}