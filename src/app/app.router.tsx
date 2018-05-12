import * as React from 'react';
import styled from './app.theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Loadable from 'react-loadable';

const NoMatch: React.SFC<{ className: string }> = props => <div className={props.className}>404 Page Not Found</div>;

const StyledNoMatch = styled(NoMatch)`
    margin: 0 auto;
    color: red;
`;

const LoadableHomePage = Loadable({
    loader: () => import('./pages/HomePage'),
    loading: () => <h1> loading... </h1>,
});

export const RouterContainer: React.SFC<{}> = props => (
    <Router>
        <Switch>
            <Route path="/" component={LoadableHomePage} />
            <Route component={StyledNoMatch} />
        </Switch>
    </Router>
);
