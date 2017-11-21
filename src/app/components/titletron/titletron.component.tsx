import './titletron.component.css';
import * as React from 'react';
import {Icon} from './../';

/**
 * Titletron Component
 */

export const Titletron: React.SFC<any> = (props) => {
    return(
        <div className="titletron-container">
            <Icon img="react.svg"/>
            <span className="title"> Typescript Boilerplate</span>
        </div>
    );
};
