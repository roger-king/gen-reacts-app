import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './services/reducers';

// Import application stores
import DEFAULT_STATE from './services/states';

let enhancer: any = applyMiddleware(thunk);

let configureStore = () => {
    const store = createStore(appReducers, DEFAULT_STATE, enhancer);
    return store;
};

if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line
    const ReduxDevTools = require("./services/redux.devtools").ReduxDevTools;

    configureStore = () => {
        enhancer = compose(applyMiddleware(thunk), ReduxDevTools.instrument());

        const store = createStore(appReducers, DEFAULT_STATE, enhancer);
        return store;
    };
}

export default configureStore;
