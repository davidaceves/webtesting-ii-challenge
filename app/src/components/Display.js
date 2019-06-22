import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Display extends Component {

  state = {
      balls: 0,
      strikes: 0,
      outs: 0
  }

    //balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
    ballsHandler = () => {
      if(this.state.balls < 3 ){
          this.setState({
              ...this.state,
              balls: this.state.balls + 1,
              
          })
      } else {
        this.setState({
            balls: 0,
            strikes: 0
        })
    }
  }

     //balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
    strikesHandler = () => {
        if(this.state.strikes < 2 ){
            this.setState({
                ...this.state,
                strikes: this.state.strikes + 1,
                
            })
        } else {
            this.setState({
                balls: 0,
                strikes: 0,
                outs: this.state.outs < 2 ? this.state.outs + 1 : 0
                // stretch: Expand the solution... Include the number of outs and track them.
            })
        }
    }

    // a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
    foulsHandler = () => {
        if(this.state.strikes < 2 ){
            this.setState({
                ...this.state,
                strikes: this.state.strikes + 1,
            })
        }
    }

    //balls and strikes reset to 0 when a `hit` is recorded.
    hitHandler = () => {
        this.setState({
            balls: 0,
            strikes: 0
        });
    }


  render() {
    return (
      <div >
        {/* display the count of `balls` and `strikes` for the at-bat*/}
        <h2>Balls: {this.state.balls}</h2>
        <h2>Strikes: {this.state.strikes}</h2>
        {/* stretch: Expand the solution... Include the number of outs and track them. */}
        <h2>Outs: {this.state.outs}</h2>
        {/* changes recorded on this component should update the information shown by the `Display` component. */}
        <Dashboard ballsHandler={this.ballsHandler} strikesHandler={this.strikesHandler} foulsHandler={this.foulsHandler} hitHandler={this.hitHandler} strikeOutHandler={this.strikeOutHandler} outHandler={this.outHandler}/>
      </div>
    );
  }
}

export default Display;

// outHandler={this.outHandler}