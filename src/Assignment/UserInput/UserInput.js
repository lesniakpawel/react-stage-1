import React from 'react';
import './UserInput.css'

const userInput = (props) => {
	return (
		<div className='user-input'>
			<input
				type='text'
				value={props.value}
				onChange={props.onChangeHandler}
			/>
		</div>
	)
};

export default userInput;