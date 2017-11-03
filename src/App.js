import React, { Component } from 'react';
import { observer } from 'mobx-react'

class App extends Component {
  render() {
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
              <li className="list-group-item">Tarea uno</li>
              <li className="list-group-item">Tarea dos</li>
            </ul>
        </div>        
      </div>
    );
  }
}

export default observer(App);
