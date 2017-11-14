import {TypeKeys} from './typeKeys';
import { IncrementAction, DecrementAction } from 'services/counter/counter.action';
import { LoginAction } from 'services/user/user.action';

export type ActionTypes =
    | LoginAction
    | IncrementAction
    | DecrementAction
    | OtherAction;

interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}
