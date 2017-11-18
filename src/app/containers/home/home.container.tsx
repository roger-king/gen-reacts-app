import './home.container.css';
import * as React from 'react';
import { connect } from 'react-redux';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    public render() {
        return (
            <div className="home-container" >
                <span className="title"> React.js Typescript Redux Project seed</span>
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
