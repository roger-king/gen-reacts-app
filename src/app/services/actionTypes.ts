import {TypeKeys} from './typeKeys';
import { LoginAction } from 'services/user/user.action';

export type ActionTypes =
    | LoginAction
    | OtherAction;

interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}
