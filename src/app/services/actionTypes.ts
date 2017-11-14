import {TypeKeys} from './typeKeys';
import { IncrementAction, DecrementAction } from 'services/counter/counter.action';

export type ActionTypes =
    | IncrementAction
    | DecrementAction
    | OtherAction;

interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}
