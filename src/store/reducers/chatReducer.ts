import { GET_MESSAGES, ChatState, SEND_MESSAGE, SEND_MESSAGE_RESPONSE, Message } from "../types"

export const initialState: ChatState = {
    messages: [
        {
            user: 'J B',
            message: 'Welcome to the chat room. Feel free to open a new (incognito 🕵️) browser window to chat with yourself',
            position: 'right',
            date: new Date()
        },
        {
            user: 'James Bond',
            message: 'You can hover on my avatar to reveal my secret identity :gun:',
            position: 'right',
            date: new Date()
        }
    ]
}

export default function chatReducer(state = initialState, action: {username?: string, type: string, payload: Message}
    ): ChatState {
    switch (action.type) {
        case SEND_MESSAGE: 
            return {
                ...state
            }
        case GET_MESSAGES: 
            return {
                ...state
            }
        case SEND_MESSAGE_RESPONSE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        default: 
            return {
                ...state
            }
    }
}