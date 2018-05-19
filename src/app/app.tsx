import * as React from 'react';
import { RouterContainer } from './app.router';

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <RouterContainer />;
    }
}
