import * as React from 'react';
import DevTools, {configureDevtool} from 'mobx-react-devtools';
import {UIRouter, UIView} from '@uirouter/react';
import {states, plugins} from './router.config';
import 'antd/dist/antd.css';
import './app.scss';

/**
 * Main application container.
 * This wraps around the entire application
 * You can set things like app-wide css grid here.
 * @preferred
 */
export class App extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    render() {
        return (
            <UIRouter plugins={plugins} states={states}>
                <div className="app-container">
                    <UIView/>
                </div>
            </UIRouter>
        );
    }
}
