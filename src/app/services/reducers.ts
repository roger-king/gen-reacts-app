import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
// import formReducer from 'redux-form';
import test from './test/test.reducer';

export default combineReducers({
    test,
    routing: routerReducer
});
