import './counter.component.css';
import * as React from 'react';

import ICounterProps from './counter.interface';

/**
 * Counter Component
 */

export const Counter: React.SFC<ICounterProps> = (props) => {
    return(
        <div>
            <button onClick={() => props.increment(1)}> Add </button>
            <h1> {props.counter}</h1>
            <button onClick={() => props.decrement(1)}> Subtract </button>
        </div>
    );
};
