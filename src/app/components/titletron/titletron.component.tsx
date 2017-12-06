import './titletron.component.css';
import * as React from 'react';
import { Icon } from './../';

/**
 * Titletron Component
 */

export const Titletron: React.SFC<any> = (props) => {
    return (
        <section className="titletron-container">
            <div className="titletron-wrapper">
                <Icon img="react-1.svg" height={100} width={100} />
                <span className="title titletron-title"> Typescript Gen</span>
            </div>
            <div className="icons-wrapper">
                <Icon img="webpack.svg" height={40} width={40} />
                <Icon img="redux.svg" height={40} width={40} />
                <Icon img="react-router.svg" height={40} width={40} />
                <Icon img="postcss.svg" height={40} width={40} />
                <Icon img="jest.svg" height={40} width={40}/>
                <Icon img="cssnext.svg" height={40} width={40}/>
            </div>
        </section>
    );
};
