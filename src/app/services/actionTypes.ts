import { TypeKeys } from './typeKeys';
import { IUserGetAction, IUserSetAction } from './user/user.action';
import {
    ILoginAction,
    IsLoggedInAction
} from './authentication/authentication.action';

export type ActionTypes =
    | IUserGetAction
    | IUserSetAction
    | ILoginAction
    | IsLoggedInAction
    | IOtherAction;

interface IOtherAction {
    type: TypeKeys.OTHER_ACTION;
}
