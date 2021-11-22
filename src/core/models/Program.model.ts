export interface SpeakerData {
    bio: string
    name: string
    twitter?: string
}

export interface SessionsData{
    id: string
    title: string
    abstract: string
    format: string
    language: string
    startTime: string
    startSlot: string
    length: string
    room?: string
    speakers: [SpeakerData]
    intendedAudience: string
    video?: string
    registerLoc?: string
    favorite?: boolean
}

export interface ProgramData {
    sessions: [SessionsData]
}