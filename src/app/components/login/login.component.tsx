import './login.component.css';
import * as React from 'react';
import { ILoginProps, ILoginState } from './login.interface';
import { connect } from 'react-redux';
import { Login as LoginService} from './../../services/actions';

/**
 * Login Component
 */

class LoginComponent extends React.PureComponent<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);

        this.state = {
            username: '',
            password: '',
            msg: ''
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
                <input ref="form" value={this.state.username} className="arcing-input" type="text" placeholder="username"
                    name="username" onChange={this.handleOnChange} />
                <input ref="form" value={this.state.password} className="arcing-input" type="password" placeholder="password"
                    name="password" onChange={this.handleOnChange} />
                <button className="arcing-btn" onClick={this.doLogin}> Login </button>
                <p>
                    {this.state.msg}
                </p>
            </div>
        );
    }

    private doLogin() {
        this.props.login(this.state.username, this.state.password);
        if (this.props.authentication.loggedIn) {
            this.setState({username: '', password: '', msg: 'successful!'});
        } else if (!this.props.authentication.loggedIn) {
            this.setState({username: '', password: '', msg: 'Invalid username or password.'});
        }
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
