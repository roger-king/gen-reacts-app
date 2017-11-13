import { createStore, applyMiddleware } from 'redux';
import appReducers from './actions/reducers';
import thunk from 'redux-thunk';

// Configure Initial Application State

const DEFAULT_STATE = {
    counter: {
        value: 0
    }
};

export default function configureStore() {
    let store = createStore(appReducers, DEFAULT_STATE, applyMiddleware(thunk));
    return store;
}
