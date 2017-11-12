import './home.container.css';
import * as React from 'react';
import { Counter } from './../../components';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './../../actions/counter/counter.action';

/**
 * HomeContainer
 */

class HomeContainer extends React.Component<any, any> {
    public render() {
        console.log(this.props);
        return (
            <div>
                <h1 className="home-text"> Home Container</h1>
                <Counter counter={this.props.counter} increment={this.props.incrementCounter} decrement={this.props.decrementCounter} />
            </div>
        );
    }

}

function mapStateToProps({counter}) {
    return {
        counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCounter: (by: number) => dispatch(incrementCounter(by)),
        decrementCounter: (by: number) => dispatch(decrementCounter(by))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (HomeContainer);
