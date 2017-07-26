import * as React from 'react';
import DevTools, { configureDevtool } from 'mobx-react-devtools';
import { UIRouter, UIView } from '@uirouter/react';
import { states, plugins, config } from './router.config';
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
            <UIRouter states={states} config={config} plugins={plugins}>
                <div className="app-container">
                    <UIView render={(Comp, props) => <Comp {...props} />} />
                </div>
            </UIRouter>
        );
    }
}
