import {parseISO} from "date-fns";
import React from "react";
import {CheckCircle, Circle} from "react-feather";
import {Link} from "react-router-dom";
import {ButtonGroup} from "../../components/Button/ButtonGroup";
import {useFetch} from "../../core/hooks/UseFetch";
import {useLocalStorage} from "../../core/hooks/UseLocalStorage";
import {useSessionStorage} from "../../core/hooks/UseSessionStorage";
import {ProgramData, SessionsData} from "../../core/models/Program.model";
import {capitalizeFirstLetter, getDayAndTime, partition} from "../../core/utils/util";
import {Button} from "../../components/Button/Button";
import styles from './Program.module.scss';

function Session(props: { session: SessionsData, setFavorites: () => void }) {
    const {speakers, format, length, id, title, startTime, language, favorite, room} = props.session;
    const lang = language === 'no' ? 'Norwegian' : 'English'
    const capFormat = capitalizeFirstLetter(format)
    const date = startTime && parseISO(startTime)
    const dateAndTime = !!date ? getDayAndTime(date) + ',' : ''
    const roomFormat = !!room ? ', ' + room : ''

    return (
        <div className={styles.program}>
            <Link className={styles.session} to={`/program/${id}`}>
                <span className={styles.title}>{title}</span>
                <span className={styles.speaker}>
                    {speakers && speakers.map(speaker => speaker.name).join(", ")}
                </span>
                <span className={styles.subinfo}>{`${capFormat}, ${lang}, ${dateAndTime} ${length} min${roomFormat}`}</span>
            </Link>
            <button aria-label="Add to favorites"
                    className={styles.favButton}
                    onClick={() => props.setFavorites()}>
                {!!favorite ? <CheckCircle size={32}/> : <Circle size={32}/>}
            </button>
        </div>
    )
}

const times = [
    '09:30',
    '10:40',
    '11:50',
    '13:30',
    '14:40',
    '15:50',
]

// const days = ['2021-12-08', '2021-12-09']
const wednesday = '2021-12-08'
//const thursday = '2021-12-09'

function TimeSlots(props: { sessions: SessionsData[], favorites: string[], setFavorites: (value: string[]) => void }) {
    const {sessions, favorites, setFavorites} = props;
    return <> {
        times.map((start, index) => {
            const end: string | undefined = times[index + 1]
            const timeSessions = sessions.filter(session => {
                const time = session.startTime.substring(11)
                return time >= start && (end === undefined || time < end)
            })

            if (timeSessions.length === 0) return null;

            return <React.Fragment key={start}>
                <h3 className={styles.time}>{start}</h3>
                {
                    timeSessions.map(s => {
                        const fun = () => s.favorite ? favorites.filter(id => id !== s.id) : [...favorites, s.id]
                        return <Session key={s.id}
                                        session={s}
                                        setFavorites={() => setFavorites(fun())}/>
                    })
                }
            </React.Fragment>

        })
    }
    </>

}

function Sessions(props: { sessions: SessionsData[], favorites: string[], setFavorites: (value: string[]) => void }) {
    const {sessions, favorites, setFavorites} = props;
    const orderedSession = sessions.sort(
        (a, b) => {
            if (a.startSlot > b.startSlot) {
                return 1
            } else if (a.startSlot === b.startSlot){
                if (a.room && b.room && a.room > b.room){
                    return 1
                }
                else if (a.room && b.room && a.room === b.room){
                    if(a.startTime >= b.startTime) {
                        return 1
                    }
                }
            }
            return -1
        })

    const [wednesdaySessions, thursdaySessions] = partition(orderedSession, s => s.startTime.startsWith(wednesday))

    return <>
        {
            wednesdaySessions.length !== 0 && <>
                <h2 className={styles.day}>Wednesday</h2>
                <TimeSlots sessions={wednesdaySessions} favorites={favorites} setFavorites={setFavorites}/>
            </>
        }
        {
            thursdaySessions.length !== 0 && <>
                <h2 className={styles.day}>Thursday</h2>
                <TimeSlots sessions={thursdaySessions} favorites={favorites} setFavorites={setFavorites}/>
            </>
        }
    </>
}

function DayFilter(props: { filter?: string, setFilter: (name: string) => void }) {
    return <div className={styles.dayFilter}>
        <div className={styles.filterHeader}>Day</div>
        <ButtonGroup defaultValue={props.filter} activeButton={button => props.setFilter(button.value)}>
            <button>Both</button>
            <button value="2021-12-08">Wednesday</button>
            <button value="2021-12-09">Thursday</button>
        </ButtonGroup>
    </div>
}

function LanguageFilter(props: { filter?: string, setFilter: (name: string) => void }) {
    return <div>
        <div className={styles.filterHeader}>Language</div>
        <ButtonGroup defaultValue={props.filter}
                     activeButton={button => props.setFilter(button.value)}>
            <button>Both</button>
            <button value="no">Norwegian</button>
            <button value="en">English</button>
        </ButtonGroup>
    </div>
}

function FormatFilter(props: {
    sessions: SessionsData[] | undefined,
    filter?: string;
    setFilter: (name: string) => void
    favorites: string[]
}) {
    return <div>
        <div className={styles.filterHeader}>Format</div>
        <ButtonGroup defaultValue={props.filter}
                     activeButton={button => props.setFilter(button.value)}>
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
    sessions?.forEach(s => s.favorite = favorites.includes(s.id))

    const [languageFilter, setLanguageFilter] = useSessionStorage<string | undefined>('filter-language', undefined)
    const [dayfilter, setDayFilter] = useSessionStorage<string | undefined>('filter-day', undefined)
    const [formatFilter, setFormatFilter] = useSessionStorage<string | undefined>('filter-format', undefined)

    const filteredSession = sessions
        ?.filter(s => !!languageFilter ? s.language === languageFilter : true)
        ?.filter(s => !!dayfilter ? s.startTime.startsWith(dayfilter) : true)

    const formatFilteredSession = filteredSession
        ?.filter(s => !!formatFilter && formatFilter !== 'favorites' ? s.format === formatFilter : true)
        ?.filter(s => formatFilter === 'favorites' ? favorites.includes(s.id) : true)

    const idMap = filteredSession?.map(s => s.id)
    const filteredFavorites = favorites.filter(f => idMap?.includes(f) ?? false)

    return <div>
        <div className={`${styles.container} ${styles.filterContainer}`}>
            <div className={styles.filterSubContainer}>
                <DayFilter filter={dayfilter} setFilter={setDayFilter}/>
                <LanguageFilter filter={languageFilter} setFilter={setLanguageFilter}/>
            </div>
            <FormatFilter
                filter={formatFilter}
                setFilter={setFormatFilter}
                sessions={filteredSession}
                favorites={filteredFavorites}/>
            <Button className={styles.filterButton}
                    onClick={() => {
                        setLanguageFilter(undefined)
                        setDayFilter(undefined)
                        setFormatFilter(undefined)
                    }}>Clear filters</Button>
        </div>
        <div className={styles.container}>
            {!!formatFilteredSession && <Sessions sessions={formatFilteredSession}
                                                  favorites={favorites}
                                                  setFavorites={setFavorites}/>}
        </div>
    </div>
}