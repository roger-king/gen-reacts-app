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
    const pw: string = 'password';

    return (dispatch: any) => {
        if (user === username && pw === password) {
            dispatch(UserSet(username));
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
