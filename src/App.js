import React, { Component } from 'react';

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
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">30 seconds</div>
        </div>
          <div>
            <input 
              placeholder="new date"
              // Check input value
              // onChange = {e => console.log('event', e.target.value)}
              onChange = { event => this.setState({newDeadlineb : event.target.value}) }
            />
            <button onClick={ () => this.changeDeadline() }>Submit</button>
          </div>
      </div>
      );
  }
}

export default App;