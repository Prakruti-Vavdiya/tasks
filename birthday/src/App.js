import './App.css';
import React from 'react';
import Input from './Components/Input';
import Countdown from './Components/Countdown';

class App extends React.Component{
  state = {
    targetTime: null,
    timeDifference:0,
    days:0,
    minutes:0,
    hours:0,
    seconds:0,
    startCountdown:false
  }
  handleInputValues=()=>{
    this.setState({startCountdown:true});
    let seldate=document.getElementById('dateselector');
    let date=seldate.options[seldate.selectedIndex].value;
    let selmon=document.getElementById('monthselector');
    let month=selmon.options[selmon.selectedIndex].value;
    let current=new Date();
    let currentyear=current.getFullYear();
    if((current.getTime()-new Date(month+' '+date+' '+currentyear).getTime())>=0){
        currentyear++;
    }
    let target=new Date(month+' '+date+' '+currentyear).getTime();
    this.setState({targetTime:target});
    //console.log(this.state.targetTime);
  }
  showCountdown=()=>{
    let distance=0;
    if(this.state.startCountdown)
    {  
      distance=this.state.targetTime-(new Date().getTime());
    }
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.setState({timeDifference:distance, days:days, hours:hours, minutes:minutes, seconds:seconds});
    //console.log(this.state.targetTime);
    
  }
  render(){
    let refreshEverySecond=setInterval(this.showCountdown,1000);
    return (
      <div className="App">
        <h1>Birthday countdown..!!</h1>
        <Input handleInputValues={this.handleInputValues} />
        <Countdown  days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
      </div>
    );
  }
}

export default App;
