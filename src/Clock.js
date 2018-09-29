import React, { Component } from 'react';
import './App.css';

class Clock extends Component{
  constructor(props){
    super(props);

    this.state = {
      days : 1,
      hours : 2,
      minutes: 3,
      seconds : 4
    }
  }

  render(){
    return(
      <div>
        <div className="Clock-days">{this.state.days}</div>
        <div className="Clock-hours">{this.state.hours}</div>
        <div className="Clock-minutes">{this.state.minutes}</div>
        <div className="Clock-seconds">{this.state.seconds}</div>
    </div>
    );
  }
}

export default Clock;
