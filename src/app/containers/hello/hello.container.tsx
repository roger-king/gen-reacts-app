import './hello.container.css';
import * as React from 'react';
import {Login} from './../../components';
import {connect} from 'react-redux';
import {Login as doLogin} from './../../services/user/user.action';

/**
 * HelloContainer
 */

export class HelloContainer extends React.Component<any, any> {
    public render() {
        console.log(this.props);
        return(
            <div>
                <h1> Hello Container</h1>
                <Login login={this.props.login}
                    isLoggedIn={this.props.user.isLoggedIn}/>
            </div>
        );
    }
}

function mapStateToProps({user}) {
    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username: string, password: string) => dispatch(doLogin(username, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (HelloContainer);
