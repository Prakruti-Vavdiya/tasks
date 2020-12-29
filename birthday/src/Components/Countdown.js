import React from 'react';

const Countdown=(props)=>{
	if(props.days===364 && props.minutes>0)
	{
		return(
			<div className="wish">
			<img src="https://i.pinimg.com/originals/91/dd/b8/91ddb8751920595dfde2515820730482.gif"/>
			</div>

		);
	}
	else{
		return (
	        <div className="Countdown">
			    <div className="card">
			    	{props.days}
			    	<p>DAYS</p>
			    </div>
			    <div className="card">
			    	{props.hours}
			    	<p>HOURS</p>
			    </div>
			    <div className="card">
			    	{props.minutes}
			    	<p> MINUTES</p>
			    </div>
			    <div className="card">
			    	{props.seconds}
			    	<p>SECONDS</p>
			    </div>
	        </div>
	    );
	}
}

export default Countdown;
