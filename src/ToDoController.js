import { extendObservable } from 'mobx';


class ToDoController {

  constructor() {
    extendObservable(this, {
     toDos:[]
    });
  }

  addToDo(toDo){
    this.toDos.push(toDo);
  }

  deleteToDo(posicion){
    this.toDos.splice(posicion,1)
  }
}

var toDoController = new ToDoController();

export default toDoController;