import {TypeKeys} from './../typeKeys';

/*
    Create your actions here.
    To follow type safety:
        - Create an interface your action.
        - returns an object of the interface.
*/

export interface LoginAction {
    type: TypeKeys.LOGIN;
    username: string;
    password: string;
}

export const Login = (username: string, password: string): any => {
    const users: any = ['Tom'];
};
