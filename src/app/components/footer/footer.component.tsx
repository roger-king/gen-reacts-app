import './footer.component.css';
import * as React from 'react';
import { Icon } from '..';

/**
 * Footer Component
 */

export const Footer: React.SFC<any> = (props) => {
    return (
        <div className="footer-container">
            <a href="https://github.com/roger-king/react-typescript-gen" target="blank">
                <Icon img="github.png" width={50} height={50} />
            </a>
        </div >
    );
};
