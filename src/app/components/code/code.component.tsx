import './code.component.css';
import * as React from 'react';

/**
 * Code Component
 */

interface ICode {
    codeline: string;
    description: string;
}

export const Code: React.SFC<any> = (props: ICode) => {
    return (
        <div className="codeline-container">
            <span className="description"> {props.description} </span>
            <div className="codeline">$ {props.codeline}</div>
        </div>
    );
};
