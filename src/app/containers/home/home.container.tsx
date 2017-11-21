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
            <section>
                <Titletron/>
                <Login/>
            </section>
        );
    }

}

export default HomeContainer;
