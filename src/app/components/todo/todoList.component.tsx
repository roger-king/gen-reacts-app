import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {TodoItem} from './todoItem.component';

@inject('todos')
@observer
export class TodoListComponent extends React.Component<any, any>{
    render(){
        const {todos} = this.props;
        console.log('Todos', todos.todos.length);
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