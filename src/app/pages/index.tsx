import * as React from 'react';
import Loadable from 'react-loadable';

export const LoadableHomePage = Loadable({
    loader: () => import('./HomePage'),
    loading() {
        return <div> loading...</div>;
    },
});
