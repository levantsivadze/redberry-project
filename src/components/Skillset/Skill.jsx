import React from 'react'
import removeIcon from './images/Remove.svg'

function Skill({ title, years }) {
	return (
		<div className='skill-container'>
			<span>{title}</span>
			<span>Years of Experience: {years}</span>
			<img src={removeIcon} alt='remove-icon' />
		</div>
	)
}

export default Skill
