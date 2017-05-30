import {observable} from 'mobx';

interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export class TodoModel{
    store
    id: number;
    @observable title: string;
    @observable completed: boolean;

    constructor(store, id, title, completed){
        this.store = store;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    toggle(){
        this.completed = !this.completed;
    }

    destroy(){
        this.store.todos.remove(this);
    }

    setTitle(title: string){
        this.title = title;
    }

    toJson () {
        return{
            id: this.id,
            title: this.title,
            complete: this.completed
        }
    }

    static fromJson(store, object: ITodo){
        return new TodoModel(store, object.id, object.title, object.completed);
    }
}