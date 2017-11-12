import './counter.component.css';
import * as React from 'react';

import ICounterProps from './counter.interface';

/**
 * Counter Component
 */

export const Counter: React.SFC<ICounterProps> = (props) => {
    return(
        <div>
            <button onClick={() => this.props.increment()}> Add </button>
            <h1> {this.props.counter}</h1>
            <button onClick={() => this.props.decrement()}> Subtract </button>
        </div>
    );
};
