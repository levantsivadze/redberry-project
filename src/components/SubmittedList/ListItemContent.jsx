import React from 'react'

import LeftColumn from './ContentColumns/LeftColumn'
import RightColumn from './ContentColumns/RightColumn'

function ListItemContent({ itemData }) {
	return (
		<div className='list-item-content-container'>
			<LeftColumn itemData={itemData} />
			<RightColumn itemData={itemData} />
		</div>
	)
}

export default ListItemContent
