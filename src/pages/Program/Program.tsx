import React, {useState} from "react";
import styles from './Program.module.scss'
import {useFetch} from "../../core/hooks/UseFetch";
import {ProgramData, SessionsData} from "../../core/models/Program.model";
import {Link} from "react-router-dom";
import {capitalizeFirstLetter} from "../../core/utils/util";
import {ButtonGroup} from "../../components/Button/ButtonGroup";
import {CheckCircle, Circle} from "react-feather";
import {useLocalStorage} from "../../core/hooks/UseLocalStorage";

const dayFeature = false

function Session(props: { session: SessionsData, isFavorite: boolean, setFavorites: () => void }) {
    const lang = props.session.language === 'no' ? 'Norwegian' : 'English'
    const format = capitalizeFirstLetter(props.session.format)

    return (
        <div className={styles.program}>
            <Link className={styles.session} to={`/program/${props.session.id}`}>
                <span className={styles.title}>{props.session.title}</span>
                <span className={styles.speaker}>
                    {props.session.speakers && props.session.speakers.map(speaker => speaker.name).join(", ")}
                </span>
                <span className={styles.subinfo}>{`${format}, ${lang}, ${props.session.length} min`}</span>
            </Link>
            <button aria-label="Add to favorites"
                    className={styles.favButton}
                    onClick={() => props.setFavorites()}>
                {props.isFavorite ? <CheckCircle size={32}/> : <Circle size={32}/>}
            </button>
        </div>
    )
}

function Sessions(props: { sessions: SessionsData[], favorites: string[], setFavorites: (value: string[]) => void }) {
    const {sessions, favorites, setFavorites} = props;
    const orderedSession = sessions.sort(
        (a, b) => {
            if (a.length < b.length) {
                return 1
            }
            return -1
        })

    return <> {
        orderedSession.map(s => {
            const isFavorite = favorites.includes(s.id)
            const fun = () => isFavorite ? favorites.filter(id => id !== s.id) : [...favorites, s.id]
            return <Session key={s.id}
                            session={s}
                            isFavorite={props.favorites.includes(s.id)}
                            setFavorites={() => setFavorites(fun())}/>
        })
    }</>
}

function DayFilter(props: {}) {
    if (!dayFeature) {
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

function LanguageFilter(props: { setFilter: (name: string) => void }) {
    return <div>
        <div className={styles.filterHeader}>Language</div>
        <ButtonGroup defaultButton={0} activeButton={button => props.setFilter(button.value)}>
            <button>Both</button>
            <button value="no">Norwegian</button>
            <button value="en">English</button>
        </ButtonGroup>
    </div>
}

function FormatFilter(props: {
    sessions: SessionsData[] | undefined,
    setFilter: (name: string) => void
    favorites: string[]
}) {
    return <div>
        <div className={styles.filterHeader}>Format</div>
        <ButtonGroup defaultButton={0} activeButton={button => props.setFilter(button.value)}>
            <button>All ({props.sessions && props.sessions.length})</button>
            <button value="presentation">Presentations
                ({props.sessions && props.sessions.filter(s => s.format === "presentation").length})
            </button>
            <button value="lightning-talk">Lightning Talks
                ({props.sessions && props.sessions.filter(s => s.format === "lightning-talk").length})
            </button>
            <button value="favorites">My Favorites ({props.favorites.length})</button>
        </ButtonGroup>
    </div>
}

export function Program() {
    const {data} = useFetch<ProgramData | undefined>("https://sleepingpill.javazone.no/public/allSessions/javazone_2021")
    const [favorites, setFavorites] = useLocalStorage<string[]>('fav', [])

    const sessions = data && data.sessions.filter(s => s.format !== "workshop")

    const [languageFilter, setLanguageFilter] = useState<string | undefined>(undefined)
    const [formatFilter, setFormatFilter] = useState<string | undefined>(undefined)

    const filteredSession = sessions
        ?.filter(s => !!languageFilter ? s.language === languageFilter : true)

    const formatFilteredSession = filteredSession
        ?.filter(s => !!formatFilter && formatFilter !== 'favorites' ? s.format === formatFilter : true)
        ?.filter(s => formatFilter === 'favorites' ? favorites.includes(s.id) : true)

    const idMap = filteredSession?.map(s => s.id)
    const filteredFavorites = favorites.filter(f => idMap?.includes(f) ?? false)

    return <div>
        <div className={`${styles.container} ${styles.filterContainer}`}>
            <div className={styles.filterSubContainer}>
                <DayFilter/>
                <LanguageFilter setFilter={setLanguageFilter}/>
            </div>
            <FormatFilter setFilter={setFormatFilter} sessions={filteredSession} favorites={filteredFavorites}/>
        </div>
        <div className={styles.container}>
            {!!formatFilteredSession && <Sessions sessions={formatFilteredSession}
                                            favorites={favorites}
                                            setFavorites={setFavorites}/>}
        </div>
    </div>
}