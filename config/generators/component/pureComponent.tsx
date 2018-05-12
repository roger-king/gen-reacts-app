import * as React from 'react';

/**
 * {{pascalCase name}} Pure Component
 */

interface I{{pascalCase name}}Props {
    name: string;
}

interface I{{pascalCase name}}State {}

export class {{pascalCase name}} extends React.PureComponent<I{{pascalCase name}}Props, I{{pascalCase name}}State> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render() {
        return <h1>{{pascalCase name}}</h1>;
    }
}
