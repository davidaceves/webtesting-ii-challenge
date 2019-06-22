import React, { Component } from 'react';

import Display from './components/Display.js';
import Dashboard from './components/Dashboards.js';

class App extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
  }

  addItemHandler = event => {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value++})
    
  }
  
  render() {
    return (
      <div className="App">
       <Dashboard addItemHandler={ this.addItemHandler }/>
       <Display ball={this.state.ball} strike={this.state.strike} />
      </div>
    );
  }
}

export default App;

