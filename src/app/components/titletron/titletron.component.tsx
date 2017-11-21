import './titletron.component.css';
import * as React from 'react';

/**
 * Titletron Component
 */

export const Titletron: React.SFC<any> = (props) => {
    return(
        <div className="titletron-container">
            <img className="react-logo" src="https://availity.github.io/react-block-ui/assets/logo.png"/>
            <span className="title"> Typescript Boilerplate</span>
        </div>
    );
};
