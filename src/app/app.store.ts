import { createStore, applyMiddleware, compose } from 'redux';
import appReducers from './services/reducers';
import thunk from 'redux-thunk';

// Import application stores
import DEFAULT_STATE from './services/states';

let enhancer: any = applyMiddleware(thunk);

let configureStore = () => {
    let store = createStore(appReducers, DEFAULT_STATE, enhancer);
    return store;
};

if (process.env.NODE_ENV !== 'production') {
    const ReduxDevTools = require('./services/redux.devtools').ReduxDevTools;

    configureStore = () => {
        enhancer = compose(
            applyMiddleware(thunk),
            ReduxDevTools.instrument()
        );

        let store = createStore(
            appReducers,
            DEFAULT_STATE,
            enhancer);
        return store;
    };
}

export default configureStore;
