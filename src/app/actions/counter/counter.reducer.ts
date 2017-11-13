import { ActionTypes} from './../action.types';
import { TypeKeys } from './../type.keys';
import {Counter} from './counter';

export default function (state: any = Counter, action: ActionTypes) {

    switch (action.type) {
        case TypeKeys.INC:
          let change = state + action.by;
          console.log('Changing state', change);
          return state + action.by;
        case TypeKeys.DEC:
          return state - action.by;
        default:
          return state;
      }
}
