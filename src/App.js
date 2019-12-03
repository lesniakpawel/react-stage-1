import React, { Component } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';
import './App.css';

const StyledButton = styled.button`
	background-color: ${props => props.alt ? 'red' : 'green'};
	color: white;
	font: inherit;
	border: 1px solid blue;
	padding: 8px;
	cursor: pointer;
	
	&:hover {
		background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
		color: black;
	}
`;

class App extends Component {
	state = {
		persons: [
			{
				id: 1,
				name: 'Max',
				age: '28'
			},
			{
				id: 2,
				name: 'Manu',
				age: '29'
			},
			{
				id: 3,
				name: 'Stephanie',
				age: '27'
			}
		],
		otherState: 'some other value',
		showPersons: false
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({
			persons: persons
		});
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(person => person.id === id );
		const person = {
			...this.state.persons[personIndex]
		};
		const persons = [...this.state.persons];

		person.name = event.target.value;
		persons[personIndex] = person;
		
		this.setState({
			persons: persons
		})
	};

	togglePersonsHandler = () => {
		this.setState(prevState => ({
			showPersons: !prevState.showPersons
		}));
	};

  render() {
  	const style = {
  		// backgroundColor: 'green',
			// color: 'white',
			// font: 'inherit',
			// border: '1px solid blue',
			// padding: '8px',
			// cursor: 'pointer',
			// ':hover': {
  		// 	backgroundColor: 'lightgreen',
  		// 	color: 'black'
			// }
		};

  	let persons = null;

  	if (this.state.showPersons) {
  		persons = (
  			<div>
					{this.state.persons.map((person, index) =>
						<Person
							click={() => this.deletePersonHandler(index)}
							key={person.id}
							name={person.name}
							age={person.age}
							changed={(event) => this.nameChangedHandler(event, person.id)}
						/>
					)}
				</div>
			);

  		style.backgroundColor = 'red';
  		style[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black'
			}
		}

		const classes = [];;

  	if (this.state.persons.length <= 2) {
  		classes.push('red');
		}
		if (this.state.persons <= 1) {
			classes.push('bold');
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App!</h1>
				<p className={classes.join(' ')}>This is really working!</p>

				<StyledButton
					alt={this.state.showPersons ? 1 : 0} //just a workaround used to get rid of the warning - initially this was set to 'this.state.showPersons' - PL
					onClick={this.togglePersonsHandler}
				>
					Toggle Persons
				</StyledButton>
				{persons}
			</div>
    );
	//   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')) ;
  }
}

export default App;
