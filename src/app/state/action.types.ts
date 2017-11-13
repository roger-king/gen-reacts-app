import {TypeKeys} from './type.keys';
import {IncrementAction, DecrementAction} from './counter/counter.action';

export type ActionTypes =
    | IncrementAction
    | DecrementAction
    | OtherAction;

interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}
