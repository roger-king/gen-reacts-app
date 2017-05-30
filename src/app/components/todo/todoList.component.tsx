import * as React from 'react';
import {inject, observer} from 'mobx-react';
import * as _ from 'lodash';
import {TodoItem} from './todoItem.component';
import {TodosStore} from './../../services/stores';

@inject('todos')
@observer
export class TodoListComponent extends React.Component<any, any>{

    componentWillMount(){
        console.log(this.props.todos.todos.length);
    }

    componentWillReact(){
        console.log('Num of todos', this.props.todos.todos.length);
    }

    render(){
        const {todos} = this.props;
        if(todos.todos.length === 0 ) 
            return (
                <h1>0 to do.</h1>
            )
        else
            return(
                <div>
                    <ul>
                        {todos.map(todo => (
                            <TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
                        ))}
                    </ul>
                </div>
            )
    }
}