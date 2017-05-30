import * as React from 'react';
import { inject, observer } from 'mobx-react';
import * as _ from 'lodash';
import { TodoItem } from './todoItem.component';
import { TodosStore } from './../../services/stores';
import {
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';

@inject('todos')
@observer
export class TodoListComponent extends React.Component<any, any>{
    constructor() {
        super();

        this.create = this.create.bind(this);
        this.setNewTodo = this.setNewTodo.bind(this);
        this.state = {
            newTodo: ''
        }
    }

    componentWillMount() {
        console.log(this.props.todos.todos.length);
    }

    componentWillReact() {
        console.log('React', this.props.todos.todos);
    }

    // TODO: Generic Handle Change for all changes.
    setNewTodo(event) {
        this.setState({ newTodo: event.target.value });
    }

    create() {
        new TodosStore().create(this.state.newTodo);
        console.log('New Todos', new TodosStore().todos);
    }

    render() {
        const { todos } = this.props;
        if (todos.todos.length === 0)
            return (
                <h1>0 to do.</h1>
            )
        else
            return (
                <div>
                    <ul>
                        {todos.todos.map(todo => (
                            <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
                        ))}
                    </ul>
                    <FormGroup>
                        <FormControl
                            type="text"
                            value={this.state.newTodo}
                            placeholder="Create todo."
                            onChange={this.setNewTodo}
                        />
                    </FormGroup>
                    <button onClick={this.create}> create</button>
                </div>
            )
    }
}