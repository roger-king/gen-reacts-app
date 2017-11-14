import {TypeKeys} from './type.keys';

export type ActionTypes =
    | OtherAction;

interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}
