import './home.container.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * HomeContainer
 */

export class HomeContainer extends React.Component<any, any> {
    constructor() {
        super();
        this.goTo = this.goTo.bind(this);
    }

    goTo() {
        console.log(this.props.history);
        location.replace('/profile');
    }

    render() {
        return (
            <div>
                <h1> Home Container</h1>
                <button><Link to="/profile"> Go Somewhere else.</Link></button>
            </div>
        );
    }
}
