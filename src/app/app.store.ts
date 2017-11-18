import { createStore, applyMiddleware } from 'redux';
import appReducers from './services/reducers';
import thunk from 'redux-thunk';

// Configure Initial Application State

const DEFAULT_STATE = {
    user: {
        username: '',
        password: '',
        isLoggedIn: false
    }
};

export default function configureStore() {
    let store = createStore(appReducers, DEFAULT_STATE, applyMiddleware(thunk));
    return store;
}
