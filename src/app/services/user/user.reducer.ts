import { ActionTypes} from './../actionTypes';
import { TypeKeys } from './../typeKeys';
import { User } from './user';

const INITIAL_STATE: User = {
    username: '',
    password: '',
    isLoggedIn: false
};

const users: any = ['roger', 'george', 'joe'];

export default function (state: User = INITIAL_STATE, action: ActionTypes) {
    switch (action.type) {
        case TypeKeys.LOGIN:
            if (users.includes(action.username)) {
                return {username: action.username, password: action.password, isLoggedIn: true};
            }
            return {username: '', password: '', isLoggedIn: false};
        default:
          return state;
      }
}
