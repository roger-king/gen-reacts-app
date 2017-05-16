import * as React from 'react';
import {PropTypes} from 'react';
import {observer} from 'mobx-react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {LoginService} from './login.service';

@observer
export class LoginComponent extends React.Component<any, any> {
    constructor(props){
        super(props);

        this.state = { 
            email: '',
            password: ''
        }
        this.doLogin = this.doLogin.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }
    
    doLogin(){
        let Login = new LoginService()
        Login.login(this.state.email, this.state.password);
    }

    setEmail(event){
        this.setState({email: event.target.value});
    }

    setPassword(event){
        this.setState({password: event.target.value});
    }

    render() {
        const state = this.state;
        return (
            <div>
                <FormGroup>
                    <FormControl 
                        type="text" 
                        placeholder="Email" 
                        value={state.email}
                        onChange={this.setEmail}/>
                </FormGroup>
                <FormGroup>
                    <FormControl 
                        type="password" 
                        placeholder="Password" 
                        value={state.password}
                        onChange={this.setPassword}/>
                </FormGroup>

                <Button type="submit" onClick={this.doLogin}>
                    Submit
                </Button>
                <a href='/signup'>  create account</a>
            </div>
        );
    }
}