import React, { Component } from 'react';
import './App.css';
import Uno from './components/Container/Uno';
import Dos from './components/Container/Dos';
class App extends Component { 

  render() {
    return (
      <div className="App">
        <Uno/>
        <Dos/>
      </div>
    );
  }
}


export default App;

