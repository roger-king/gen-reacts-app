import {TypeKeys} from './../type.keys';

export interface IncrementAction {
    type: TypeKeys.INC
    by: number
}

export interface DecrementAction {
    type: TypeKeys.DEC
    by: number
}

export const incrementCounter = (by: number): IncrementAction => ({
    type: TypeKeys.INC,
    by
})
