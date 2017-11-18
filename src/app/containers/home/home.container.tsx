import './home.container.css';
import * as React from 'react';
import { connect } from 'react-redux';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    public render() {
        console.log('Counter', this.props.counter);
        return (
            <div>
                <h2> React.js Typescript Redux Project seed</h2>
            </div>
        );
    }

}

function mapStateToProps({}) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (HomeContainer);
