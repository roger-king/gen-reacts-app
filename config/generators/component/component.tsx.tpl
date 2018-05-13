import * as React from 'react';

/**
 * {{pascalCase name}} Component
 */

interface I{{pascalCase name}}Props {
    name: string;
}

interface I{{pascalCase name}}State {}

export class {{pascalCase name}} extends React.Component <I{{pascalCase name}}Props, I{{pascalCase name}}State> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render() {
        return <h1>{this.props.name}</h1>;
    }
}
