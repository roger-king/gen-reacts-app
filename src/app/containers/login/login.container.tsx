import * as React from 'react';
import {LoginComponent as Login} from './../../components';

export class LoginContainer extends React.Component <any, any> {
    render(){
        return(
            <div className="login-container">
                <Login />
            </div>
        );
    }
}