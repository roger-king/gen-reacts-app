import * as React from 'react';
import styled from './app.theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadableHomePage } from './pages';

const NoMatch: React.SFC<{ className: string }> = props => <div className={props.className}>404 Page Not Found</div>;

const StyledNoMatch = styled(NoMatch)`
  margin: 0 auto;
  color: red;
`;

export const RouterContainer: React.SFC<{}> = props => (
  <Router>
    <Switch>
      <Route path="/" component={LoadableHomePage} />
      <Route component={StyledNoMatch} />
    </Switch>
  </Router>
);
