import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

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

	};

	togglePersonsHandler = () => {
		this.setState(prevState => ({
			showPersons: !prevState.showPersons
		}));
	};

  render() {
  	const style = {
  		backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
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
							changed={this.nameChangedHandler}
						/>
					)}
				</div>
			);
		}

    return (
      <div className="App">
				<h1>Hi, I'm a React App!</h1>
				<p>This is really working!</p>

				<button
					style={style}
					onClick={this.togglePersonsHandler}
				>
					Switch Name
				</button>
				{persons}
      </div>
    );
	//   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')) ;
  }
}

export default App;
