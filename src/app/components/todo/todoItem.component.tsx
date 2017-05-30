import * as React from 'react';
import {
    Checkbox
}from 'react-bootstrap';

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export class TodoItem extends React.Component<ITodo, any>{
    constructor(){
        super();
    }

    render(){
        const {title, completed} = this.props;
        return(
            <li>
               <Checkbox checked={completed}/> <h3>  {title} </h3>
            </li> 
        )
    }
}