import React from 'react'
import activeBullet from '../../utils/images/activeBullet.png'
import passiveBullet from '../../utils/images/passiveBullet.png'
import calendarIcon from '../../utils/images/calendar.svg'
import LeftColumn from './ContentColumns/LeftColumn'
import RightColumn from './ContentColumns/RightColumn'
function ListItemContent({ listItem }) {
	const {
		first_name,
		last_name,
		email,
		phone,
		skills,
		work_preference,
		had_covid,
		had_covid_at,
		vaccinated,
		vaccinated_at,
		will_organize_devtalk,
		devtalk_topic,
		something_special
	} = listItem
	return (
		<div className='list-item-content-container'>
			<LeftColumn listItem={listItem} />
			<RightColumn listItem={listItem} />
			{/* <div className='container-right-col'>
				<div className='skillset-info-container'></div>
				<div className='insights-info-container'></div>
			</div> */}
		</div>
	)
}

export default ListItemContent
