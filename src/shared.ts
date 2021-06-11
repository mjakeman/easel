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

export type Message = {
    type: MessageType,
    course: Course
}

export enum MessageType {
    OPEN
}