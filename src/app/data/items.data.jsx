import Event from 'events';

class Todo extends Event{
    constructor(){
        super();
        this.todoList = [];
        this._id = this.todoList.length;
    }
    addTodo(todo){
        this.todoList.push(Object.assign(todo,{ id:this._id}));
        this._id++;
        this.emit('update');
    }
    deleteTodo(todo){
        delete this.todoList[todo];
        this.emit('update');
    }
}
export const todo = new Todo();