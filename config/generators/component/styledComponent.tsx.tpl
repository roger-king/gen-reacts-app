import * as React from 'react';
import styled from './../app.theme';

interface I{{pascalCase name}}Props {
    className?: string;
}

const {{pascalCase name}}: React.SFC<I{{pascalCaseName name}}Props> = props => {
    return (
        <div className={this.props.className}>
            Styled Component
        </div>
    );
}

export default styled({{pascalCase name}})``;
