import { Settings, SettingsActionTypes, GET_SETTINGS, SET_SETTINGS, RESET_SETTINGS } from "../types"

export const initialState: Settings = {
    username: 'Adis',
    clockFormat: '24h',
    onEnter: true,
    current: true,
    unread: 5
}

export default function settingsReducer(state = initialState, action: SettingsActionTypes
    ): Settings {
    switch (action.type) {
        case GET_SETTINGS: 
            return {
                ...state
            }
        case SET_SETTINGS: 
            return {
                ...action.payload
            }
        case RESET_SETTINGS:
            return initialState
        default: 
            return {
                ...state
            }
    }
}