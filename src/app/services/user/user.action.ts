import { TypeKeys } from './../typeKeys';

/*
    Create your actions here.
    To follow type safety:
        - Create an interface your action.
        - returns an object of the interface.
*/

export interface IUserGetAction {
    type: TypeKeys.USER_GET;
    username: string;
}

export interface IUserSetAction {
    type: TypeKeys.USER_SET;
    username: string;
}

export const UserGet = (): IUserGetAction => {
    const username = 'Erlich Bachman';
    return {
        type: TypeKeys.USER_GET,
        username,
    };
};

export const UserSet = (username: string): IUserSetAction => {
    return {
        type: TypeKeys.USER_SET,
        username: username,
    };
};
