import './App.css';
import React from 'react';
import Input from './Components/Input';
import Countdown from './Components/Countdown';
import { connect } from 'react-redux';

class App extends React.Component{
  
  render(){
    setInterval(this.props.showCountdown,1000);
    return (
      <div className="App">
        <h1>Birthday countdown..!!</h1>
        <Input handleInputValues={this.props.handleInputValues} />
        <Countdown  days={this.props.days} hours={this.props.hours} minutes={this.props.minutes} seconds={this.props.seconds}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    targetTime: state.targetTime,
    timeDifference:state.timeDifference,
    days:state.days,
    minutes:state.minutes,
    hours:state.hours,
    seconds:state.seconds,
    startCountdown:state.startCountdown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputValues: () =>dispatch({type: 'HANDLE_INPUT_VALUES'}),
    showCountdown: () =>dispatch({type: 'SHOW_COUNTDOWN'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
