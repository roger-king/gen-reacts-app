import { observable, useStrict, action, computed} from 'mobx';
import { {{pascalCase name}}Service} from './{{camelCase name}}.service';
import { {{pascalCase name}}Model as {{pascalCase name}} } from './{{camelCase name}}.model';

/**
 * {{pascalCase name}}Store
 */

useStrict(true);
export class {{pascalCase name}}Store {
    @observable public {{camelCase name}}: Array<{{pascalCase name}}> = [];

    constructor() {

    }

    @action
    create(title: string) {
        this.{{camelCase name}}.push(new {{pascalCase name}}());
    }

    toJson() {
        // TODO: This is an example and can be renamed.
        //return this.{{camelCase name}}.map({{camelCase name}} => {{camelCase name}}.toJson);
    }
}
