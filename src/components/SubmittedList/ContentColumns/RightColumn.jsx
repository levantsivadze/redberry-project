import React from 'react'
import activeBullet from '../../../utils/images/activeBullet.png'
import passiveBullet from '../../../utils/images/passiveBullet.png'

function RightColumn({ itemData }) {
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
	const { skills, will_organize_devtalk, devtalk_topic, something_special } =
		itemData


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
			<div className='insights-info-container'>
				<h3>Insights</h3>
				<div className='insight-sector'>
					<h4>Would you attend Devtalks and maybe also organize your own?</h4>
					<span>
						<img
							src={will_organize_devtalk ? activeBullet : passiveBullet}
							alt='bullet'
						/>
						{'  '} Yes
					</span>
					<span>
						<img
							src={!will_organize_devtalk ? activeBullet : passiveBullet}
							alt='bullet'
						/>
						{'  '}
						No
					</span>
				</div>
				{will_organize_devtalk && <div className='insight-sector'>
					<h4>What would you speak about at Devtalk?</h4>
					<div className='insight-topic-area'>
						<span>{devtalk_topic}</span>
					</div>
				</div>}
				<div className='insight-sector'>
					<h4>Tell us somthing special</h4>
					<div className='insight-topic-area'>
						<span>{something_special}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RightColumn
