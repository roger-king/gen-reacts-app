import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
// import formReducer from 'redux-form';
import counter from './counter/counter.reducer';

export default combineReducers({
    counter,
    routing: routerReducer
});
