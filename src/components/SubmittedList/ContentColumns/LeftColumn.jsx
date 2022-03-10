import React from 'react'
import activeBullet from '../../../utils/images/activeBullet.png'
import passiveBullet from '../../../utils/images/passiveBullet.png'
import calendarIcon from '../../../utils/images/calendar.svg'

function LeftColumn({ itemData }) {
	const {
		first_name,
		last_name,
		email,
		phone,
		work_preference,
		had_covid,
		had_covid_at,
		vaccinated,
		vaccinated_at
	} = itemData

	return (
		<div className='container-left-col'>
			<div className='personal-info-container'>
				<h3>Personal Information</h3>
				<div className='personal-info'>
					<div className='left-col'>
						<span>First Name</span>
						<span>Last Name</span>
						<span>Email</span>
						<span>Phone</span>
					</div>
					<div className='right-col'>
						<span>{first_name}</span>
						<span>{last_name}</span>
						<span>{email}</span>
						<span>{phone}</span>
					</div>
				</div>
			</div>
			<div className='covid-info-container'>
				<h3>Covid Situation</h3>
				<div className='covid-sector'>
					<h4>How would you prefer to work?</h4>
					<span>
						<img
							src={
								work_preference === 'from_office' ? activeBullet : passiveBullet
							}
							alt='bullet'
						/>
						From Sairme Office
					</span>
					<span>
						<img
							src={
								work_preference === 'from_home' ? activeBullet : passiveBullet
							}
							alt='bullet'
						/>{' '}
						From Home
					</span>
					<span>
						<img
							src={work_preference === 'hybrid' ? activeBullet : passiveBullet}
							alt='bullet'
						/>
						Hybrid
					</span>
				</div>
				<div className='covid-sector'>
					<h4>Did you have Covid 19? </h4>
					<span>
						<img src={had_covid ? activeBullet : passiveBullet} alt='bullet' />
						{'  '} Yes
					</span>
					<span>
						<img src={!had_covid ? activeBullet : passiveBullet} alt='bullet' />
						{'  '}
						No
					</span>

					{had_covid && (
						<div className='covid-sector'>
							<h4>When did you have Covid 19 ?</h4>
							<div className='covid-date'>
								<span>{had_covid_at}</span>
								<img src={calendarIcon} alt='calendar' />
							</div>
						</div>
					)}
				</div>
				<div className='covid-sector'>
					<h4> Have you been vaccinated? </h4>
					<span>
						<img src={vaccinated ? activeBullet : passiveBullet} alt='bullet' />
						{'  '} Yes
					</span>
					<span>
						<img
							src={!vaccinated ? activeBullet : passiveBullet}
							alt='bullet'
						/>
						{'  '}
						No
					</span>

					{vaccinated && (
						<div className='covid-sector'>
							<h4>When did you get covid vaccine ?</h4>
							<div className='covid-date'>
								<span>{vaccinated_at}</span>
								<img src={calendarIcon} alt='calendar' />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default LeftColumn
