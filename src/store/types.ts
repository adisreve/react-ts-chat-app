export interface Message {
    user: string,
    message: string,
    position: string
    date: Date
}

export interface ChatState {
    messages: Message[]
}

export interface SocketState {
    connected: boolean,
    port: number
    isError?: boolean
}

export interface Settings {
    username: string,
    dark?: boolean,
    clockFormat: '24h' | '12h',
    onEnter: boolean,
    current: boolean,
    unread: number
}

// Declaring messages actions
export const SET_USER = "SET_USER";
export const GET_MESSAGES = "GET_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_MESSAGE_RESPONSE = "SEND_MESSAGE_RESPONSE";
export const MESSAGE_SENT = 'MESSAGE_SENT';

// User settings actions
export const SET_SETTINGS = 'SET_SETTINGS';
export const GET_SETTINGS = 'GET_SETTINGS';
export const RESET_SETTINGS = 'RESET_SETTINGS';

// Socket actions
export const CONNECTION_CHANGED = 'CONNECTION_CHANGED';
export const CONNECT_SOCKET = 'CONNECT_SOCKET';

interface GetMessages {
    type: typeof GET_MESSAGES
}

interface SendMessageAction {
    type: typeof SEND_MESSAGE;
    payload: Message;
}

interface SendMessageResponse {
    type: typeof SEND_MESSAGE_RESPONSE,
    payload: Message;
}

interface MessageSent {
    type: typeof MESSAGE_SENT
}

interface SetSettings {
    type: typeof SET_SETTINGS,
    payload: Settings
}

interface GetSettings {
    type: typeof GET_SETTINGS
}

interface ResetSettings {
    type: typeof RESET_SETTINGS
}

// Scoket Interfaces
interface ConnectionChanged {
    type: typeof CONNECTION_CHANGED
    connected: boolean,
    isError: boolean
}

interface ConnectSocket {
    type: typeof CONNECT_SOCKET
}

export type ChatActionTypes = GetMessages | SendMessageAction | SendMessageResponse | MessageSent;
export type SettingsActionTypes = GetSettings | SetSettings | ResetSettings;
export type SocketActionTypes = ConnectionChanged | ConnectSocket;