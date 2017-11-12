import {handleActions, Action} from 'redux-actions';
import { ActionTypes} from './../action.types';
import {CounterState, Counter} from './counter';

const INITIAL_STATE: CounterState = [<Counter>{
    value: 0
}]

export default handleActions<CounterState, Counter>({
    []
}, INITIAL_STATE);