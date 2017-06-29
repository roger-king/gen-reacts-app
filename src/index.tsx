import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Provider} from 'mobx-react';
import {App} from './app/app';
import {states, plugins} from './app/router.config';
// Import Application Stores

const stores = {};

ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
