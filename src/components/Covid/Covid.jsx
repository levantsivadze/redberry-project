import React, { useState, useEffect } from 'react'

import calendarIcon from './images/calendar.svg'

function Covid({ formData, setFormData }) {
	const [preferenceRadioBtn, setPreferenceRadioBtn] = useState('from_home')
	const [covidRadioBtn, setCovidRadioBtn] = useState(false)
	const [vaccinationRadioBtn, setVaccinationRadioBtn] = useState(false)
	const [covidDate, setCovidDate] = useState(new Date())
	const [vaccinationDate, setVaccinationDate] = useState()

	const preferences = ['from_sairme_office', 'from_home', 'hybrid']

	const onPreferenceChange = (e) => {
		setPreferenceRadioBtn(e.target.value)
	}

	const onCovidDateChange = (e) => {
		console.log(e.target.value)
		setCovidDate(e.target.value)
	}

	const onVaccinationDateChange = (e) => {
		setVaccinationDate(e.target.value)
	}

	// 'checked' radio button validators
	const isPreferenceSelected = (value) => preferenceRadioBtn === value
	const isContactRadioSelected = (value) => covidRadioBtn === value
	const isVaccinationRadioSelected = (value) => vaccinationRadioBtn === value

	return (
		<div className='covid-container'>
			<div className='covid-question-container'>
				<span>how would you prefer to work?</span>
				<label>
					<input
						className='input-radio'
						type='radio'
						name='preference'
						value={preferences[0]}
						checked={isPreferenceSelected(preferences[0])}
						onChange={onPreferenceChange}
					/>
					From Sairme Office
				</label>
				<label>
					<input
						className='input-radio'
						type='radio'
						name='preference'
						value={preferences[1]}
						checked={isPreferenceSelected(preferences[1])}
						onChange={onPreferenceChange}
					/>
					From Home
				</label>
				<label>
					<input
						className='input-radio'
						type='radio'
						name='preference'
						value={preferences[2]}
						checked={isPreferenceSelected(preferences[2])}
						onChange={onPreferenceChange}
					/>
					Hybrid
				</label>
			</div>
			<div className='covid-question-container'>
				<span>Did you contact covid 19? :(</span>
				<label>
					<input
						className='input-radio'
						type='radio'
						name='contact'
						value={true}
						checked={isContactRadioSelected(true)}
						onChange={() => setCovidRadioBtn(true)}
					/>
					Yes
				</label>
				<label>
					<input
						className='input-radio'
						type='radio'
						name='contact'
						value={false}
						checked={isContactRadioSelected(false)}
						onChange={() => setCovidRadioBtn(false)}
					/>
					No
				</label>
			</div>

			{covidRadioBtn && (
				<div className='covid-question-container'>
					<span>When?</span>
					<div className='covid-date-input-container'>
						<input
							className='covid-input-date'
							type='text'
							value={covidDate}
							onChange={onCovidDateChange}
							onFocus={(e) => (e.target.type = 'date')}
							onBlur={(e) => (e.target.type = 'text')}
							placeholder='Date'
						/>
						<img src={calendarIcon} alt='calendar icon' />
					</div>
				</div>
			)}

			<div className='covid-question-container'>
				<span>Have you been vaccinated?</span>
				<label>
					<input
						className='input-radio'
						type='radio'
						value={true}
						checked={isVaccinationRadioSelected(true)}
						onChange={() => setVaccinationRadioBtn(true)}
						name='vaccination'
					/>
					Yes
				</label>
				<label>
					<input
						className='input-radio'
						type='radio'
						value={false}
						checked={isVaccinationRadioSelected(false)}
						onChange={() => setVaccinationRadioBtn(false)}
						name='vaccination'
					/>
					No
				</label>
			</div>

			{vaccinationRadioBtn && (
				<div className='covid-question-container'>
					<span>When did you get your last covid vaccine?</span>
					<div className='covid-date-input-container'>
						<input
							className='covid-input-date'
							type='text'
							value={vaccinationDate}
							onChange={onVaccinationDateChange}
							onFocus={(e) => (e.target.type = 'date')}
							onBlur={(e) => (e.target.type = 'text')}
							placeholder='Date'
						/>
						<img src={calendarIcon} alt='calendar icon' />
					</div>
				</div>
			)}
		</div>
	)
}

export default Covid
