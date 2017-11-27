import './icon.component.css';
import * as React from 'react';
import { IIconProps } from './icon.interface';
/**
 * Icon Component
 */

export const Icon: React.SFC<IIconProps> = (props: IIconProps) => {
    const img_path = 'static/images/' + props.img;
    return(
        <img className="icon-container" height={props.height} width={props.width} src={img_path}/>
    );
};