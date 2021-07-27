export type Recording = {
    title: string,
    dateTime: string,
    building: string
    section: string,
    url: string
}

export type Course = {
    name: string,
    courseUrl: string,
    lectures: Recording[]
}

export type OpenMessage = {
    type: MessageType,
    course: Course
}

export type InitMessage = {
    type: MessageType,
}

export enum MessageType {
    OPEN,
    INIT
}