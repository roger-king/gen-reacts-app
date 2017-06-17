import * as React from 'react';
import DevTools, {configureDevtool} from 'mobx-react-devtools';
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
                {this.props.children}
                <DevTools/>
            </div>
        );
    }
}
