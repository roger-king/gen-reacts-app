import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import user from './user/user.reducer';
import counter from './counter/counter.reducer';

export default combineReducers({
    user,
    counter,
    form: formReducer,
    routing: routerReducer
});
