import './grid.container.css';
import * as React from 'react';

/**
 * GridContainer
 */

export class GridContainer extends React.Component<any, any> {
    public render() {
        return(
            <section className="grid-one">
                <div className="grid-item"> </div>
                <div className="grid-item"> </div>
                <div className="grid-item"> </div>
                <div className="grid-item"> </div>
                <div className="grid-item"> </div>
            </section>
        );
    }
}
