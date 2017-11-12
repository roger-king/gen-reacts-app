import {TypeKeys} from './../type.keys';

export interface IncrementAction {
    type: TypeKeys.INC
    by: number
}

export interface DecrementAction {
    type: TypeKeys.INC
    by: number
}
