import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';


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
  	let persons = null;
  	let btnClass = '';

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

			btnClass = classes.Red;
		}

		const assignedClasses = [];

  	if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}
		if (this.state.persons <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React App!</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>

				<button
					className={btnClass}
					onClick={this.togglePersonsHandler}
				>
					Toggle Persons
				</button>
				{persons}
			</div>
    );
	//   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')) ;
  }
}

export default App;
