import { ActionTypes } from './../actionTypes';
import { TypeKeys } from './../typeKeys';
import { IAuthentication } from './authentication';

export const INITIAL_STATE: IAuthentication = {
    loggedIn: false,
};

export default function(
    state: IAuthentication = INITIAL_STATE,
    action: ActionTypes,
) {
    switch (action.type) {
        case TypeKeys.AUTH_ISLOGGEDIN:
            return { loggedIn: action.loggedIn };
        case TypeKeys.AUTH_LOGIN:
            state.loggedIn = action.loggedIn;
            return { loggedIn: state.loggedIn };
        default:
            return state;
    }
}
