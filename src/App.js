import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-title">Countdown to 25 of december</div> 
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">30 seconds</div>
        </div>
          <div>
            <input placeholder="new date"/>
            <button>Submit</button>
          </div>
      </div>
      );
  }
}

export default App;