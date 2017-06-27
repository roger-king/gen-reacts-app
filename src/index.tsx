import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {UIRouter, UIView} from '@uirouter/react';
import {createBrowserHistory} from 'history';
import {Provider} from 'mobx-react';
import {App} from './app/app';
import {states, plugins} from './app/router.config';
// Import Application Stores

const stores = {};

ReactDOM.render(
    <Provider {...stores}>
        <UIRouter plugins={plugins} states={states}>
           <App/>
        </UIRouter>
    </Provider>,
    document.getElementById('root')
);
