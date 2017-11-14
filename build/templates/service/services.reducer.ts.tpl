import { ActionTypes} from './../action.types';
import { TypeKeys } from './../type.keys';
import { {{pascalCase name}} } from './{{camelCase name}}';

const INITIAL_STATE: {{pascalCase name}} = {

};

export default function (state: {{pascalCase name}} = INITIAL_STATE, action: ActionTypes) {
    switch (action.type) {
        default:
          return state;
      }
}
