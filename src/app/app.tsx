import * as React from 'react';
import { Routes } from './app.router';
import './app.css';
/**
 * Import some development tools for the application.
 * Redux-DevTools
 */

let AppContainer = () => {
    return (
        <Routes />
    );
};

if (process.env.NODE_ENV !== 'production') {
    const ReduxDevTools = require('./services/redux.devtools').ReduxDevTools;
    AppContainer = () => {
        return (
            <div>
                <ReduxDevTools />
                <Routes />
            </div>
        );
    };
}

/**
 * Main application container.
 * This wraps around the entire application
 * You can set things like app-wide css grid here.
 * @preferred
 */
export class App extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppContainer/>
        );
    }
}
