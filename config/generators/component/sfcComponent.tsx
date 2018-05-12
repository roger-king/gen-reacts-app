import * as React from 'react';

/**
 * {{pascalCase name}} Component
 */

interface I{{pascalCase name}}Props {
    name: string;
}

export const {{pascalCase name}}: React.SFC<I{{pascalCase name}}Props> = (props: I{{pascalCase name}}Props) => {
    return(
        <div>
            {this.props.name} Component
        </div>
    );
};
