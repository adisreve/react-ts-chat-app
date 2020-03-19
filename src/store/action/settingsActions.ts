import { GET_SETTINGS, SET_SETTINGS, RESET_SETTINGS, Settings } from '../types'

// Setting user
export const setSettings = (settings: Settings) => ({
    type: SET_SETTINGS,
    payload: settings
})

// Define action to get user settings
export const getSettings = () => ({
    type: GET_SETTINGS
})

export const resetSettings = () => ({
    type: RESET_SETTINGS
})


  
