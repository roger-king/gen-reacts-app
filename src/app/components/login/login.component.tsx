import './login.component.css';
import * as React from 'react';
import ILoginProps from './login.interface';

/**
 * Login Component
 */

export const Login: React.SFC<ILoginProps> = (props) => {
    return(
        <div>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button onClick={() => {this.props.login(this.props.username, this.props.password); }}> login </button>
        </div>
    );
};
