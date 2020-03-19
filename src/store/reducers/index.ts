import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import settingsReducer from './settingsReducer';
import socketReducer from './socketReducer';

const rootReducer = combineReducers({
    chat: chatReducer,
    settings: settingsReducer,
    socketState: socketReducer 
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
