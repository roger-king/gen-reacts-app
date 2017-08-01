import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import routes from './app.routes';

/**
 * ProtectedRoute
 * 
 * This is a wrapper component protected routes behind an auth.
 * In app.routes file, add the key auth: true and the component
 * looks for that boolean value.
 */

/* export class ProtectedRoute extends React.Component<any, any> {

    isAuthenticated() {
        return isAuthenticated();
    }

    render() {
        const { route, history } = this.props;

        return (
            <Route exact={route.exact} path={route.path} render={
                props => (
                    this.isAuthenticated() ? (
                        <route.component {...props } routes={route.routes} />
                    ) : (
                            <Redirect to={{
                                pathname: '/',
                                state: { from: props.location }
                            }} />
                        )
                )} />
        );
    }
} */

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
