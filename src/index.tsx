import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {Provider} from 'mobx-react';

// Import Application Route
import routes from './app/routes';

const browserHistory = createBrowserHistory();

ReactDOM.render(
    <Provider>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById("root")
);