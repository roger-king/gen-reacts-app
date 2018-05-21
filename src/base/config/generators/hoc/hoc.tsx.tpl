import * as React from 'react';

interface IWith{{pascalCase name}}Props {

}

const with{{pascalCase name}} = <P extends IWith{{pascalCase name}}Props>(
    UnwrappedComponent: React.ComponentType<P>,
) => {
    class With{{pascalCase name}} extends React.Component<P> {
        render() {
            return (
                <UnwrappedComponent />
            )
        }
    }
};

export default with{{pascalCase name}};
