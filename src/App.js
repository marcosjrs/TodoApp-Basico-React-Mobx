import React, { Component } from 'react';
import { observer } from 'mobx-react';
import toDoController from './ToDoController';

class App extends Component {
  render() {
    const listToDos = [];
    toDoController.toDos.forEach(function(element,index) {
      listToDos.push(<li key={index} className="list-group-item">{element}</li>);
    }, this);
    return (
      <div className="container">
        <div className="row title">
          <h1>Lista de "ToDo" con ReactJS y Mobx</h1>
        </div>
        <div className="row">
            <div className="input-group input-group-todo">
              <input type="text" className="form-control" placeholder="Añade tu tarea..."></input>
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
