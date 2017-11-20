import './titletron.component.css';
import * as React from 'react';

/**
 * Titletron Component
 */

export const Titletron: React.SFC<any> = (props) => {
    return(
        <div className="titletron-container">
        <img src="https://availity.github.io/react-block-ui/assets/logo.png"/>
            <span className="title"> React Typescript Boilerplate</span>
        </div>
    );
};
