import React from 'react'
import removeIcon from './images/Remove.svg'

function Skill({ skill, onRemove }) {
	return (
		<div className='skill-container'>
			<span>{skill.title}</span>
			<span>Years of Experience: {skill.experience}</span>
			<input
				type='image'
				alt='remove button'
				src={removeIcon}
				alt='remove icon'
				onClick={(e) => {
					e.preventDefault()
          onRemove(skill.id)
				}}
			/>
		</div>
	)
}

export default Skill
