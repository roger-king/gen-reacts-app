import './headline.component.css';
import * as React from 'react';

/**
 * Headline Component
 */
interface IHeadline {
    title: string;
}

export const Headline: React.SFC<any> = (props: IHeadline) => {
    return (
        <span className="headline">
            {props.title}
        </span>
    );
};
