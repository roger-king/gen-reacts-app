import * as React from 'react';
import { Routes } from './app.router';
import './app.css';
/**
 * Import some development tools for the application.
 * Redux-DevTools
 */
import { DevTools } from './app.devtools';

let AppContainer = () => {
    return (
        <Routes />
    );
};

if (process.env.NODE_ENV !== 'production') {
    AppContainer = () => {
        return (
            <div>
                <DevTools />
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
