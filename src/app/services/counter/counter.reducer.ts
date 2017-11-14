import { ActionTypes} from './../actionTypes';
import { TypeKeys } from './../typeKeys';
import {Counter} from './counter';

const INITIAL_STATE: Counter = {
  value: 0
};

export default function (state: Counter = INITIAL_STATE, action: ActionTypes) {

    switch (action.type) {
        default:
          return state;
      }
}
