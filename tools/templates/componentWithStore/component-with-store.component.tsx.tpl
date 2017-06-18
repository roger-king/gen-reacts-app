/**
 * @component {{pascalCase name}}
 * @stylesheet {{pascalCase name}}.scss
 * @test {{pascalCase name}}.component.spec
 * 
 */

import './{{camelCase name}}.scss';
import * as React from 'react';
import {inject, observer} from 'mobx-react';

@inject('{{camelCase name}}_store')
export class {{pascalCase name}}Component extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
            </div>
        );
    }
}
