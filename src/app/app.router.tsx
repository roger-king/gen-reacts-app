import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import routes from './containers';

export class PublicRoute extends React.Component<any, any> {


    render() {
        const { route } = this.props;
        return (
            <Route exact={route.exact} path={route.path} render={
                props => (
                    <route.component {...props} routes={route.routes} />
                )} />
        );
    }
}

export class Routes extends React.Component<any, any> {

    render() {
        return (
            <main>
                {routes.map((route: any, i) => (
                    <PublicRoute key={i} route={route} />
                ))}
            </main>
        );
    }
}
