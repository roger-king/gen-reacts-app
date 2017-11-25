import {TypeKeys} from './../typeKeys';

/*
    Create your actions here.
    To follow type safety:
        - Create an interface your action.
        - returns an object of the interface.
*/

export interface UserGetAction {
    type: TypeKeys.USER_GET;
    username: string;
}

export interface UserSetAction {
    type: TypeKeys.USER_SET;
    username: string;
}

export const UserGet = (): UserGetAction => {
    let username = 'Erlich Bachman';
    return {
        type: TypeKeys.USER_GET,
        username
    };
};

export const UserSet = (username: string): UserSetAction => {
    return {
        type: TypeKeys.USER_SET,
        username: username
    };
};
