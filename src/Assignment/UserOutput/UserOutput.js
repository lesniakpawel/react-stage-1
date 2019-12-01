import React from 'react';
import './UserOutput.css'
import UserInput from '../UserInput/UserInput';

const userOutput = (props) => {
	return (
		<div className='user-output'>
			<p>
				{props.name}
			</p>

			<p>
				And this is just some text.
			</p>

			<UserInput
				userId={props.userId}
				value={props.name}
				onChangeHandler={props.nameChangeHandler}
			/>
		</div>
	)
};

export default userOutput;

