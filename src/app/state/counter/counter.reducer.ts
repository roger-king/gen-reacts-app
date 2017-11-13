import { ActionTypes} from './../action.types';
import { TypeKeys } from './../type.keys';
import {Counter} from './counter';

const INITIAL_STATE: Counter = {
  value: 0
};

export default function (state: Counter = INITIAL_STATE, action: ActionTypes) {

    switch (action.type) {
        case TypeKeys.INC:
          return { value: state.value + action.by};
        case TypeKeys.DEC:
          return { value: state.value - action.by};
        default:
          return state;
      }
}
