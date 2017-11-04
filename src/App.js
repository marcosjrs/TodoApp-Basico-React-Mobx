import React, { Component } from 'react';
import { observer } from 'mobx-react';
import toDoController from './ToDoController';

class App extends Component {

  addToDo(evento){
    if(evento.which === 13){
      let toDo = evento.target.value;
      toDoController.addToDo(toDo);
      evento.target.value="";
    }
  }

  deleteToDo(index){
    toDoController.deleteToDo(index);
  }

  render() {
    const listToDos = [];

    toDoController.toDos.forEach(function(element,index) {

      listToDos.push(<li key={index} className="list-group-item"><span  onClick={ ()=> this.deleteToDo(index) } className="glyphicon glyphicon-remove"></span> {element}
      
      </li>);

    }, this);

    return (
      <div className="container">
        <div className="row title">
          <h1>Lista de tareas pendientes</h1>
        </div>
        <div className="row">
            <div className="input-group input-group-todo">
              <input onKeyPress={this.addToDo.bind(this)} type="text" className="form-control" placeholder="Añade tu tarea..." ></input>
            </div>        
            <ul className="list-group list-group-todo">
              {listToDos}
            </ul>
        </div>        
      </div>
    );
  }
}

export default observer(App);
