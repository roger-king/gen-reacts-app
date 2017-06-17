import * as React from 'react';
import {inject, observer} from 'mobx-react';
import { Button } from 'antd';

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
                <Button className="increase-btn" onClick={counter_store.increase.bind(counter_store)}>up</Button>
                <h2> {counter_store.count}</h2>
                <Button className="decrease-btn" onClick={counter_store.decrease.bind(counter_store)}>down</Button>
            </div>
        );
    }
}
