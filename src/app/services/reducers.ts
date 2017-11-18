import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import user from './user/user.reducer';

export default combineReducers({
    user,
    form: formReducer,
    routing: routerReducer
});
