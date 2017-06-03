import * as React from 'react';
import {Grid} from 'react-bootstrap';
import DevTools, {configureDevtool} from 'mobx-react-devtools';
// import {Auth} from "../../actions/auth/index";
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
                <Grid>
                    {this.props.children}
                </Grid>
                <DevTools/>
            </div>
        );
    }
}
