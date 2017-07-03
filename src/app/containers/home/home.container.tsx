import './home.container.scss';
import * as React from 'react';
import { ChatComponent } from './../../components';

/**
 * HomeContainer
 */

export class HomeContainer extends React.Component<any, any> {
    render() {
        return(
            <div>
                <ChatComponent/>
            </div>
        );
    }
}
