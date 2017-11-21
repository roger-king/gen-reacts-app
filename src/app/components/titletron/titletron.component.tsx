import './titletron.component.css';
import * as React from 'react';
import {Icon} from './../';

/**
 * Titletron Component
 */

export const Titletron: React.SFC<any> = (props) => {
    return(
        <div className="titletron-container">
            <Icon img="react.svg" height={50} width={50}/>
            <span className="title"> Typescript Boilerplate</span>
        </div>
    );
};
