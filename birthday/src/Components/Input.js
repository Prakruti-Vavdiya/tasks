import React from 'react';

const Input=(props)=>{
	const months=['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec'];
	const dates=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	return (
	    <div className="Input">
		  	<span>Date:
		      	<select id="dateselector">
		      			{
	            			dates.map(date => {
	                			return( 
		                   			<option>{date}</option>
		            			)
							})
		           		}
			    </select>
			    Month:
			    <select id="monthselector">
			   		{
		       			months.map(month => {
		           			return( 
		                   		<option>{month}</option>
		                		)
						})
		           	}
			    </select>
			    <button onClick={props.handleInputValues}>Submit</button>
		    </span>
	    </div>
	);
}

export default Input;
