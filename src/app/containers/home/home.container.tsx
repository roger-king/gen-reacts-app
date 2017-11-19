import './home.container.css';
import * as React from 'react';
import { connect } from 'react-redux';
import {Login, Titletron} from './../../components';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    public render() {
        return (
            <div className="home-container">
                <Titletron/>
                <div className="login-wrapper">
                    <Login/>
                </div>
            </div>
        );
    }

}

export default HomeContainer;
