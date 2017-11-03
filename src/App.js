import React, { Component } from 'react';
import { observer } from 'mobx-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        App con ReactJS y Mobx
      </div>
    );
  }
}

export default observer(App);
