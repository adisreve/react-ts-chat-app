import { User } from './user'

export interface Chat {
    user: User,
    text: string,
    date: Date
}