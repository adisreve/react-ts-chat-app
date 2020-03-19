// External imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// Local imports
import App from './App';
import { loadState, saveState } from './store/middleware/persistedStore';

// Redux
import rootReducer from './store/reducers';
import socketMiddleware from './store/middleware/socketMiddleware';

// Load persisted state from storage
const persistedState = loadState();
const middleware = [thunk, socketMiddleware]

export const store = createStore(
    rootReducer, 
    persistedState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

store.subscribe(() => {
    saveState({
        settings: store.getState().settings
    });
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
