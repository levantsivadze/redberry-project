import { useState } from 'react'
import vectorImg from '../../utils/images/ListVector.svg'

function ListItem({ index, listItem }) {
	const [isActive, setIsActive] = useState(false)
	console.log(isActive)

	return (
		<li className='list-item'>
			<div className='list-item-btn' onClick={() => setIsActive(!isActive)}>
				<span>{index}</span>
				<img src={vectorImg} alt='Dropdown arrow' />
			</div>
		</li>
	)
}

export default ListItem
