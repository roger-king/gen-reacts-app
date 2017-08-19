import { observable, useStrict, action, computed} from 'mobx';
import { {{pascalCase name}}Service} from './{{camelCase name}}.service';
import { {{pascalCase name}}Model as {{pascalCase name}} } from './{{camelCase name}}.model';

/**
 * {{pascalCase name}}Store
 */

useStrict(true);
export class {{pascalCase name}}Store {
    @observable public {{camelCase name}}: Array<{{pascalCase name}}> = [];
}
