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

    console.log('this.props', this.props);
  }

  render(){
    return(
      <div>
        <div className="Clock-days">{this.state.days} days</div>
        <div className="Clock-hours">{this.state.hours} hours</div>
        <div className="Clock-minutes">{this.state.minutes} minutes</div>
        <div className="Clock-seconds">{this.state.seconds} seconds</div>
    </div>
    );
  }
}

export default Clock;
