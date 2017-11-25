import './home.container.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { Login, Titletron } from './../../components';
import { Icon } from './../../components/icon/icon.component';
import { UserGet} from './../../services/actions';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.demo = this.demo.bind(this);
    }
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
                                        Put some extra confidence in your awesome code and supply some unit tests!
                                        Use Jest to simulate how your components should render in production.
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="wrench.svg" height={40} width={40} /> <b>Build</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Plugins, plugins, and more plugins. Leverage webpack to build and bundle your application.
                                    </div>
                                </div>
                            </div>
                            <div className="feature-column">
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="map.svg" height={40} width={40} /> <b>Routing</b>
                                    </div>
                                    <div className="feature-item-content">
                                        "Declarative routing for react" with react-router. Routing made easy.
                                        Create your container, assign to a path (e.g '/home'), and you're done! Build your containers
                                        with your reusable components.
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="clear-formatting.svg" height={40} width={40} /> <b>Next Gen CSS</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Everyone wants to use the latest and greatest. Next Gen CSS allows us to use many tools
                                        and functions that progress our UI to the next level.
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-item-header">
                                        <Icon img="cogs.svg" height={40} width={40} /> <b>Automation</b>
                                    </div>
                                    <div className="feature-item-content">
                                        Streamline your development with generation of your components and services.
                                        Most importantly have consistent code styling and formatting.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="demo">
                        <span className="title"> Demo</span>
                        <div className="demo-instructions">
                            Let's demostrate with an everyday example. I created this very simple login module where it will:
                            submit an action, determine if you are "authenticated", and set your user and loggedIn status.
                            The demo login credentials are username = <b>admin </b> and password = <b> password</b>.
                        </div>
                        <Login/>
                        {this.demo()}
                    </div>
                </section>
            </div>
        );
    }

    private demo() {
        if (this.props.authentication.loggedIn) {
            const user: any = this.props.getUser().username;
            return <span className=""> {user} </span>;
        }

        return <span> Not logged in </span>;
    }

}

function mapStateToProps({ authentication }) {
    return {
        authentication
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: () => dispatch(UserGet())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
