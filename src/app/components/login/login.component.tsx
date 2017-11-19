import './login.component.css';
import * as React from 'react';
import { ILoginProps, ILoginState } from './login.interface';
import { connect } from 'react-redux';
import { Login as LoginService} from './../../services/authentication/authentication.action';

/**
 * Login Component
 */

class LoginComponent extends React.Component<ILoginProps, ILoginState> {
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
        return (
            <div className="login-container">
                <input type="text" placeholder="username" name="username" onChange={this.handleOnChange} />
                <input type="password" placeholder="password" name="password" onChange={this.handleOnChange} />
                <button onClick={this.doLogin}> login </button>
                <h1> {String(this.props.authentication.loggedIn)} </h1>
            </div>
        );
    }

    private doLogin() {
        this.props.login(this.state.username, this.state.password);
    }
}

function mapStateToProps({ authentication }) {
    return {
        authentication
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username: string, password: string) => dispatch(LoginService(username, password))
    };
}

const WrappedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export const Login: React.SFC<any> = (props) => {
    return(
        <WrappedLogin/>
    );
};
