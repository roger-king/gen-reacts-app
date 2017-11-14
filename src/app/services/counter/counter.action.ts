import {TypeKeys} from './../typeKeys';

export interface IncrementAction {
    type: TypeKeys.INCREMENT;
    by: number;
}

export interface DecrementAction {
    type: TypeKeys.DECREMENT;
    by: number;
}

export const incrementCounter = (by: number): IncrementAction => ({
    type: TypeKeys.INCREMENT,
    by
});

export const decrementCounter = (by: number): DecrementAction => ({
    type: TypeKeys.DECREMENT,
    by
});

export default [incrementCounter, decrementCounter];
