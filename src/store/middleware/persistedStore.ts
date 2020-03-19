import { Message, Settings } from "../types";

interface State {
    chat?: Message[],
    settings: Settings
}

export const loadState = (): any => {
    try {
        const serializedState = localStorage.getItem('state');

        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: State) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
    }
}