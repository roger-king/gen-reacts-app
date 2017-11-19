import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import authentication from './authentication/authentication.reducer';
import user from './user/user.reducer';

export default combineReducers({
    authentication,
    user,
    form: formReducer,
    routing: routerReducer
});
