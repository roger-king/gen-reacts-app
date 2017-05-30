import { observable, useStrict, action, computed} from 'mobx';
import * as _ from 'lodash';
import {TodosService} from './todos.service';
import {TodoModel as Todo} from './todo.model';

useStrict(true);
export class TodosStore {
    @observable todos = [];

    constructor(){
        const parent = this;
        let service = new TodosService();
        let remoteTodos = service.getTodos();
        _.forEach(remoteTodos, function(value, key){
            parent.todos.push(new Todo(this, value.id, value.title, false));
        })

    }

    @action
    create(title: string){
        const id: number = this.todos.length + 1;
        this.todos.push(new Todo(this, id, title, false));
        console.log('New Todos', this.todos);
    }

    @action
    toggle(){

    }
    
    totalTodos(){
        return this.todos.length;
    }

    toJson() {
        return this.todos.map(todo => todo.toJson);
    }
}