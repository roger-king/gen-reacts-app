import {observable} from 'mobx';

interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export class TodoModel{
    id: number;
    @observable title: string;
    @observable completed: boolean;

    constructor(id, title, completed){
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    toggle(){
        this.completed = !this.completed;
    }

    destroy(){
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

    static fromJson(object: ITodo){
        return new TodoModel(object.id, object.title, object.completed);
    }
}