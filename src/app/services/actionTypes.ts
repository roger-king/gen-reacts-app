import {TypeKeys} from './typeKeys';
import { UserGetAction, UserSetAction } from 'services/user/user.action';
import { LoginAction, IsLoggedInAction } from 'services/authentication/authentication.action';

export type ActionTypes =
    | UserGetAction
    | UserSetAction
    | LoginAction
    | IsLoggedInAction
    | OtherAction;

interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}
