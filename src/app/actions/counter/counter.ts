import {
    fromJS,
    Record
} from 'immutable';


type CounterParams = {
    value?: number,
    status?: 'ok'
}


export class Counter extends Record({value: 0, status: 'ok'}){

    value: number;
    status: Status;

    constructor(params?: CounterParams) {
        params ? super(params) : super();
    }

    with(values: CounterParams) {
        return this.merge(values) as this;
    }
}