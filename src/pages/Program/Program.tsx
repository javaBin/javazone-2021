import React from "react";
import styles from './Program.module.scss'
import {useFetch} from "../../core/hooks/UseFetch";
import {ProgramData, SessionsData} from "../../core/models/Program.model";

function Session(props: SessionsData){
    return (
        <div className={styles.program}>
            <div className={styles.session}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.speaker}>{props.speakers && props.speakers.map(speaker => speaker.name).join(", ")}</span>
                <span className={styles.subinfo}>{`${props.format}, ${props.length} min`}</span>
            </div>
        </div>
    )
}

function Sessions(props: {data: [SessionsData]}){
    const sessions = props.data.filter(s => s.format != "workshop")
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

export function Program() {
    const {status, data} = useFetch<ProgramData>("https://sleepingpill.javazone.no/public/allSessions/javazone_2019")

    console.log(status, data)
    return <div className={styles.container}>
        {!!data && <Sessions data={data.sessions}/>}
    </div>
}