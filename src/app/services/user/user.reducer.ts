import { ActionTypes } from './../actionTypes';
import { TypeKeys } from './../typeKeys';
import { IUser } from './user';

export const INITIAL_STATE: IUser = {
    username: '',
};

export default function(state: IUser = INITIAL_STATE, action: ActionTypes) {
    switch (action.type) {
        case TypeKeys.USER_GET:
            return { username: action.username };
        case TypeKeys.USER_SET:
            state.username = action.username;
            return { username: state.username };
        default:
            return state;
    }
}
