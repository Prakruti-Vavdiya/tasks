// Imports. 
import React from 'react'; 
import CalculatorTitle from './CalculatorTitle.js'; 
import OutputScreen from './OutputScreen.js'; 
import Button from './Button.js'; 

class Calculator extends React.Component { 
	constructor() { 
		super(); 
		// set our default state 
		this.state = 
		{ 
			question: '', 
			answer: ''
		} 
		this.handleClick = this.handleClick.bind(this); 
		console.log(this.state);
	} 

	handleClick(event){ 

		// get the value from the target element (button) 
		const value = event.target.value; 
		console.log("value="+value);
		switch (value) { 
			case '=': { 

			// if it's an equal sign, use the eval module to evaluate the question ,convert the answer (in number) to String 
			if (this.state.question!=='') 
			{ 
				var ans=''; 
					try
					{ 
						ans = eval(this.state.question); 
					} 
					catch(err) 
					{ 
						this.setState({answer: "Math Error"}); 
					} 
					if (ans===undefined) 
						this.setState({answer: "Math Error"}); 
					else
						this.setState({ answer: ans , question: ''});
				console.log(this.state); 
				break; 
			} 
			console.log(this.state);
			break;
			} 

			case 'Clear': { 
			this.setState({ question: '', answer: '' }); 
			console.log(this.state);
			break; 
			} 

			case 'Delete': { 
			var str = this.state.question; 
				str = str.substr(0,str.length-1); 
				this.setState({question: str});
				console.log(this.state); 
				break; 
			} 

			default: { 

				// for every other command, update the answer in the state 
				this.setState({ question: this.state.question += value}) 
				console.log(this.state);
				break; 
			} 
		} 
	} 


	render() 
	{ 
		return ( 
			<div className="frame"> 
				<CalculatorTitle value="Calculator"/> 
				<div className="mainCalc"> 
					<OutputScreen question={this.state.question} answer={this.state.answer}/> 
					<div className="buttons">
						<div className="button-row"> 
							<Button label={'Clear'} handleClick = {this.handleClick} /> 
							<Button label={'Delete'} handleClick = {this.handleClick} /> 
							<Button label={'.'} handleClick = {this.handleClick} /> 
							<Button label={'/'} handleClick = {this.handleClick} /> 
						</div> 

						<div className="button-row"> 
							<Button label={'7'} handleClick = {this.handleClick} /> 
							<Button label={'8'} handleClick = {this.handleClick} /> 
							<Button label={'9'} handleClick = {this.handleClick} /> 
							<Button label={'*'} handleClick = {this.handleClick} /> 
						</div> 

						<div className="button-row"> 
							<Button label={'4'} handleClick = {this.handleClick} /> 
							<Button label={'5'} handleClick = {this.handleClick} /> 
							<Button label={'6'} handleClick = {this.handleClick} /> 
							<Button label={'-'} handleClick = {this.handleClick} /> 
						</div> 

						<div className="button-row"> 
							<Button label={'1'} handleClick = {this.handleClick} /> 
							<Button label={'2'} handleClick = {this.handleClick} /> 
							<Button label={'3'} handleClick = {this.handleClick} /> 
							<Button label={'+'} handleClick = {this.handleClick} /> 
						</div> 

						<div className="button-row"> 
							<Button label={'0'} handleClick = {this.handleClick} /> 
							<Button label={'='} handleClick = {this.handleClick} /> 
						</div>
					</div> 
				</div> 
			</div> 
		); 
	} 
} 
export default Calculator; 
