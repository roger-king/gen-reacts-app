import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } = require('react-router-redux');
import { App } from './app/app';
// Import Application Stores

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
    routing: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
