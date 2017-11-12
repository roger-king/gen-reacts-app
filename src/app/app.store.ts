import { createStore, applyMiddleware } from 'redux';
import appReducers from './actions/reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
    let store = createStore(appReducers, {
        counter: 0
    },                      applyMiddleware(thunk));
    return store;
}
