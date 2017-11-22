import './home.container.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { Login, Titletron } from './../../components';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    public render() {
        return (
            <div id="home-page">
                <Titletron />

                <section className="page-content">
                    <div className="intro">
                        <b>React-Typescript-Kit</b> is my approach to tackling a react.js application.
                        The main goal of this project is to bring a structure to a very open platform
                        for developing a react.js application.
                        I try use many modern day (to date - 11/20/17) tools to help streamline development processes.
                    </div>
                    <div className="features">
                        <span className="title"> Features</span>

                        <div className="features-content-wrapper">
                            <div className="feature-row">
                                <div>
                                    redux
                                </div>
                                <div>
                                    plop
                                </div>
                            </div>
                            <div className="feature-row">
                            </div>
                            <div className="feature-row">
                            </div>
                        </div>
                    </div>
                    <Login />
                </section>
            </div>
        );
    }

}

export default HomeContainer;
