import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {Provider} from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

// Import Application Stores
import {
    TodosStore,
    CounterStore
} from './app/services/stores';
// Import Application Route
import routes from './app/routes';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores = {
    routing: routingStore,
    todo_store: new TodosStore(),
    counter_store: new CounterStore()
}
const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById("root")
);