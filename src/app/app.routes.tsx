import * as React from 'react';
import { Switch, Route } from 'react-router';
import { App } from './app';
import { Home, Profile } from './containers';

export default (
    <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
    </main>
);