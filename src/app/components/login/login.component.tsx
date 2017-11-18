import './login.component.css';
import * as React from 'react';
import { ILoginProps, ILoginState } from './login.interface';

/**
 * Login Component
 */

export class Login extends React.Component <ILoginProps, ILoginState> {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.doLogin = this.doLogin.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    public handleOnChange(event: any): void {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    public render() {
        return(
            <div>
                <input type="text" placeholder="username" name="username" onChange={this.handleOnChange}/>
                <input type="password" placeholder="password" name="password" onChange={this.handleOnChange}/>
                <button onClick={this.doLogin}> login </button>
                <h1> {String(this.props.isLoggedIn)} </h1>
            </div>
        );
    }
    
    private doLogin() {
        this.props.login(this.state.username, this.state.password);
    }
}
