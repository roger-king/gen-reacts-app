import { TypeKeys } from './../typeKeys';
import { UserSet } from './../user/user.action';

/*
    Create your actions here.
    To follow type safety:
        - Create an interface your action.
        - returns an object of the interface.
*/

export interface LoginAction {
    type: TypeKeys.AUTH_LOGIN;
    loggedIn: boolean;
}

export interface IsLoggedInAction {
    type: TypeKeys.AUTH_ISLOGGEDIN;
    loggedIn: boolean;
}

export const Login = (username: string, password: string): any => {
    const user: string = 'admin';

    return (dispatch: any) => {
        if (user === username) {
            dispatch(UserSet(username));
            console.log('Authenication pass');
            dispatch({
                type: TypeKeys.AUTH_LOGIN,
                loggedIn: true
            });
        } else {
            dispatch({
                type: TypeKeys.AUTH_LOGIN,
                loggedIn: false
            });
        }
    };
};
