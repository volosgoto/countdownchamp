import React, { Component } from 'react';
import Clock from './Clock';
class App extends Component {
  // to add properties
  constructor(props) {
    super(props);
    

    // state always object
    this.state = {
        deadline : 'December 25, 2018',
        newDeadline : ''
    }
  }

  // Update state
  changeDeadline() {
    // this.setState({deadline: 'November 25, 2018'});
    // console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline})

  }
  
  
  render(){
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div> 
          <Clock deadline = {this.state.deadline}/>
          <div>
            <input 
              placeholder="new date"
              // Check input value
              // onChange = {e => console.log('event', e.target.value)}
              onChange = { event => this.setState({newDeadline : event.target.value}) }
            />
            <button onClick={ () => this.changeDeadline() }>Submit</button>
          </div>
      </div>
      );
  }
}

export default App;