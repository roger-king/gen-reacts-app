import './titletron.component.css';
import * as React from 'react';

/**
 * Titletron Component
 */

export const Titletron: React.SFC<any> = (props) => {
    return(
        <div className="titletron-container">
            <span className="title"> React-Typescript-Boilerplate</span>
        </div>
    );
};
