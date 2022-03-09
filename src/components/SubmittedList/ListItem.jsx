import { useState } from 'react'
import vectorImg from '../../utils/images/ListVector.svg'
import ListItemContent from './ListItemContent'

function ListItem({ index, itemData }) {
	const [isActive, setIsActive] = useState(false)


	const listOpenHandler = (e) => {
		setIsActive(!isActive)
	}

	let imgClass = isActive ? 'imgOpen' : ''

	return (
		<li className='list-item'>
			<div className='list-item-btn' onClick={listOpenHandler}>
				<span>{index}</span>
				<img className={imgClass} src={vectorImg} alt='Dropdown arrow' />
			</div>
			{isActive && <ListItemContent itemData={itemData} />}
		</li>
	)
}

export default ListItem
