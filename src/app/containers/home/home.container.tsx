import './home.container.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { Login, Titletron } from './../../components';
import { Icon } from './../../components/icon/icon.component';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    public render() {
        return (
            <div id="home-page">
                <Titletron />

                <section className="page-content content-font">
                    <div className="intro">
                        <b>React-Typescript-Kit</b> is my approach to tackling a react.js application.
                        The main goal of this project is to bring a structure to a very open platform
                        for developing a react.js application.
                        I try use many modern day (to date - 11/20/17) tools to help streamline development processes.
                    </div>
                    <div className="features">
                        <span className="title"> Features</span>

                        <div className="features-content-wrapper">
                            <div className="feature-column">
                                <div className="feature-item">
                                    <Icon img="redux.svg" height={40} width={40} /> <b>State management</b>
                                </div>
                                <div>
                                    <Icon img="jest.svg" height={40} width={40} /> <b>Unit Testing & Code Coverage</b>
                                </div>
                                <div>
                                    <Icon img="webpack.svg" height={40} width={40} /> <b>Build</b>
                                </div>
                            </div>
                            <div className="feature-column">
                                <div className="feature-item">
                                    <Icon img="react-router.svg" height={40} width={40} /> <b>Routing</b>
                                </div>
                                <div>
                                    <Icon img="postcss.svg" height={40} width={40} /> <b>Next Gen CSS</b>
                                </div>
                                <div>
                                    <Icon img="webpack.svg" height={40} width={40} /> <b>Automation</b>
                                </div>
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
