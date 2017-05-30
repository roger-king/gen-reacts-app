import { observable, useStrict, action, computed} from 'mobx';
import {TodoModel as Todo} from './todo.model';

useStrict(true);
export class TodosStore {
    @observable todos = [];

    @action
    create(title: string){
        const id: number = this.todos.length + 1;
        this.todos.push(new Todo(this, id, title, false));
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