import React, { useState } from 'react'
import vectorImg from './images/Vector.svg'

function Dropdown({ options, selected, setSelected }) {
	const [isActive, setIsActive] = useState(false)
	return (
		<div className='dropdown'>
			<div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
				{selected.title}
				<img src={vectorImg} alt='Dropdown arrow' />
			</div>

			{isActive && (
				<div className='dropdown-content' >
					{options.map((option) => (
						<div
							key={option.id}
							className='dropdown-item'
							onClick={() => {
								setSelected({ id: option.id, title: option.title })
								setIsActive(false)
							}}>
							{option.title}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Dropdown
