import { ActionTypes} from './../actionTypes';
import { TypeKeys } from './../typeKeys';
import { User } from './user';

export const INITIAL_STATE: User = {
    username: ''
};

const users: any = ['roger', 'george', 'joe'];

export default function (state: User = INITIAL_STATE, action: ActionTypes) {
    switch (action.type) {
        case TypeKeys.USER_GET:
            return {username: action.username};
        case TypeKeys.USER_SET:
            state.username = action.username;
            return { username: state.username };
        default:
          return state;
      }
}
