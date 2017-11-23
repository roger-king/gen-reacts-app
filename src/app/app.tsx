import * as React from 'react';
import { Routes } from './app.router';
import './app.css';

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
            <Routes />
        );
    }
}
