import { ActionTypes} from './../action.types';
import { TypeKeys } from './../type.keys';
import {Counter} from './counter';

const INITIAL_STATE = new Counter();

export default function (s: State, action: ActionTypes) {
    switch (action.type) {
        case TypeKeys.INC:
          return { counter: s.counter + action.IncrementAction.by };
        case TypeKeys.DEC:
          return { counter: s.counter - action.by };
        default:
          return s;
      }
}
