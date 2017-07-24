import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { UIRouter, UIView } from '@uirouter/react';
import { App } from './app/app';
// Import Application Stores

const stores = {};

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root')
);
