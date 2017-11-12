import { ActionTypes} from './../action.types';
import { TypeKeys } from './../type.keys';
import {Counter} from './counter';

export default function (INITIAL_STATE = Counter, action: ActionTypes) {
    switch (action.type) {
        case TypeKeys.INC:
          return { counter: INITIAL_STATE.value + action.by };
        case TypeKeys.DEC:
          return { counter: INITIAL_STATE.value - action.by };
        default:
          return INITIAL_STATE;
      }
}
