import { observable, useStrict, action, computed} from 'mobx';
import * as _ from 'lodash';
import {TodosService} from './todos.service';
import {TodoModel as Todo} from './todo.model';

useStrict(true);
export class TodosStore {
    @observable public todos: Array<Todo> = [];

    constructor() {
        const parent = this;
        let service = new TodosService();
        let remoteTodos = service.getTodos();
        _.forEach(remoteTodos, function(value, key){
            let todo: Todo = new Todo(value.id, value.title, false);
            parent.todos.push(todo);
        });

    }

    @action
    create(title: string) {
        const id: number = this.todos.length + 1;
        this.todos.push(new Todo(id, title, false));
    }

    totalTodos() {
        return this.todos.length;
    }

    toJson() {
        return this.todos.map(todo => todo.toJson);
    }
}
