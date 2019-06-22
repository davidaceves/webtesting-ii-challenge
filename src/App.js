import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  }
  
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
      </div>
    );
  }
}

export default App;

