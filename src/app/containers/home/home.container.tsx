import './home.container.css';
import * as React from 'react';
import { connect } from 'react-redux';
import {Login} from './../../components';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    public render() {
        return (
            <div className="home-container" >
                <Login/>
            </div>
        );
    }

}

export default HomeContainer;
