import * as React from 'react';
import {Grid} from 'react-bootstrap';
//import {Auth} from "../../actions/auth/index";
import './app.scss';

export class App extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            redirected: false
        }
    }

    /*    componentDidMount(){
     let auth = new Auth();
     if(auth.isExpired() === false && this.state.redirected === false){
     //TODO: use react router for redirecting;
     this.state.redirected = true;
     window.location.href = '/login';
     }
     }*/

    render() {
        return (
            <div className="app-container">
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}