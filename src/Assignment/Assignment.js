import React from 'react';
import './Assignment.css'

const assignment = (props) => {
	return (
		<div className='assignment'>
			<h2 className='assignment-header'>{props.title}</h2>
			<div className='assignment-content'>
				{props.children}
			</div>
		</div>
	)
};

export default assignment;