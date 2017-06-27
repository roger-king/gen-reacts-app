import * as React from 'react';
import DevTools, {configureDevtool} from 'mobx-react-devtools';
import {UIView} from 'ui-router-react';
import {states, plugins} from './router.config';
import 'antd/dist/antd.css';
import './app.scss';

export class App extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            redirected: false
        };
    }

    render() {
        return (
            <div className="app-container">
                <UIView/>
            </div>
        );
    }
}
