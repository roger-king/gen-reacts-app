import './home.container.css';
import * as React from 'react';
import {ButtonComponent as Button} from './../../components';

/**
 * HomeContainer
 */

export class HomeContainer extends React.Component<any, any> {
    render() {
        return(
            <div>
                <h1 className="home-text"> Home Container</h1>
                <Button/>
            </div>
        );
    }
}
