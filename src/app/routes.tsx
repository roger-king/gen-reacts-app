import * as React from 'react';
import {Route} from 'react-router';
import {App} from './app';
import {Home, Counter} from './containers';

export default (
    <App>
        <Route exact={true} path="/counter" component={Counter}/>
        <Route exact={true} path="/" component={Home}/>
    </App>
);
