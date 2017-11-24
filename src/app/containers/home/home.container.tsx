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
                                    <div className="feature-item-header">
                                        <Icon img="tree.svg" height={40} width={40} /> <b>State management</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Use Redux to take control of your application’s state and keep state mutations manageable.
                                        If you have it, the boilerplate works with the Chrome Redux DevTools extension to allow
                                        you to see, play back, and change your action history!
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="lab.svg" height={40} width={40} /> <b>Unit Testing & Code Coverage</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Use Redux to take control of your application’s state and keep state mutations manageable.
                                        If you have it, the boilerplate works with the Chrome Redux DevTools extension to allow
                                        you to see, play back, and change your action history!
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="wrench.svg" height={40} width={40} /> <b>Build</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Use Redux to take control of your application’s state and keep state mutations manageable.
                                        If you have it, the boilerplate works with the Chrome Redux DevTools extension to allow
                                        you to see, play back, and change your action history!
                                    </div>
                                </div>
                            </div>
                            <div className="feature-column">
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="map.svg" height={40} width={40} /> <b>Routing</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Use Redux to take control of your application’s state and keep state mutations manageable.
                                        If you have it, the boilerplate works with the Chrome Redux DevTools extension to allow
                                        you to see, play back, and change your action history!
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="clear-formatting.svg" height={40} width={40} /> <b>Next Gen CSS</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Use Redux to take control of your application’s state and keep state mutations manageable.
                                        If you have it, the boilerplate works with the Chrome Redux DevTools extension to allow
                                        you to see, play back, and change your action history!
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="cogs.svg" height={40} width={40} /> <b>Automation</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Use Redux to take control of your application’s state and keep state mutations manageable.
                                        If you have it, the boilerplate works with the Chrome Redux DevTools extension to allow
                                        you to see, play back, and change your action history!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default HomeContainer;
