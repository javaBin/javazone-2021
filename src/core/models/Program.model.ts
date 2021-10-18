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
    startTime?: string
    length: string
    room?: string
    speakers: [SpeakerData]
    intendedAudience: string
    video?: string
}

export interface ProgramData {
    sessions: [SessionsData]
}