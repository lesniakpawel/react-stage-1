import React, { Component } from 'react';
import Assignment from './Assignment/Assignment';
import './App.css';

class App extends Component {
	state = {};

  render() {
  	const style = {
  		backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

    return (
			<Assignment
				title='Assignment no. 2'
			>
				(this is going to be the assignment content)
			</Assignment>
    );
  }
}

export default App;
