import React, { useState, useEffect } from 'react'
import axios from 'axios'

function RightColumn({ listItem }) {
	const skillTitles = [
		'HTML',
		'CSS',
		'PHP',
		'Laravel',
		'React.JS',
		'Vue.JS',
		'Svelte',
		'Angular'
	]
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



	console.log(`skillTitles`, skillTitles)

	return (
		<div className='container-right-col'>
			<div className='skillset-info-container'>
				<h3>Skillset</h3>
				<div className='skillset-info'>
					{skills.map((skill) => (
						<div key={skill.id} className='skillset-item'>
							<span>{skillTitles[skill.id]}</span>
							<span>Years of Experience: {skill.experience}</span>
						</div>
					))}
				</div>
			</div>
			<div className='insights-info-container'></div>
		</div>
	)
}

export default RightColumn
