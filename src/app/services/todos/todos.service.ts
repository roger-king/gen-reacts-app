const todos = [{
        "id": 1,
        "title": "Buy eggs.",
        "complete": false
    }, {
        "id": 2,
        "title": "Call mom.",
        "complete": false
    }, {
        "id": 3,
        "title": "Fill out timesheets.",
        "complete": false
    }];

export class TodosService {
    getTodos(){
        return todos;
    }
}