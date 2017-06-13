/**
 * @component {{pascalCase name}}
 * @stylesheet {{pascalCase name}}.scss
 * @test {{pascalCase name}}.component.spec
 * @store?
 * 
 */

import './{{pascalCase name}}.scss';
import * as React from 'react';
import {inject, observer} from 'mobx-react';

//@inject('')
//@observer
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
