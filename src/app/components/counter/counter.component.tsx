import * as React from 'react';
import {inject, observer} from 'mobx-react';

@inject('counter_store')
@observer
export class CounterComponent extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        const {counter_store} = this.props;
        return(
            <div>
                <button onClick={counter_store.increase.bind(counter_store)}>up</button>
                <h2> {counter_store.count}</h2>
                <button onClick={counter_store.decrease.bind(counter_store)}>down</button>
            </div>
        );
    }
}
