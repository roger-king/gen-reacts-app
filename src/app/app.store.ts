import { createStore, applyMiddleware } from 'redux';
import appReducers from './services/reducers';
import thunk from 'redux-thunk';

// Import application stores
import DEFAULT_STATE from './services/states';

export default function configureStore() {
    let store = createStore(appReducers, DEFAULT_STATE, applyMiddleware(thunk));
    return store;
}
