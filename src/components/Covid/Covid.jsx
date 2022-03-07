import React, { useState, useEffect } from 'react'

import calendarIcon from './images/calendar.svg'

function Covid({ formData, setFormData }) {
	

	const preferences = ['from_sairme_office', 'from_home', 'hybrid']

	console.log(`Covid.. formData`, formData)

	const onPreferenceChange = (e) => {
		setFormData({ ...formData, work_preference: e.target.value })
	}
	const onCovidDateChange = (e) => {
		setFormData({ ...formData, had_covid_at: e.target.value })
	}
	const onVaccinationDateChange = (e) => {
		setFormData({ ...formData, vaccinated_at: e.target.value })
	}
 // 'checked'  Handlers
  const isPreferenceSelected = (value) => formData.work_preference === value
	const isContactRadioSelected = (value) => formData.had_covid === value
	const isVaccinationRadioSelected = (value) => formData.vaccinated === value
  

	//if errorCode is 0, covid date is missing, if errorCode=1 vaccinationDate is missing
	// const datesValidation = () => {
	// 	let errorCode
	// 	if (covidRadioBtn && covidDate.trim() === '') {
	// 		errorCode = 0
	// 	} else if (vaccinationRadioBtn && vaccinationDate.trim() === '') {
	// 		errorCode = 1
	// 	}
	// 	return errorCode
	// }

	//save every change to formData
	// useEffect(() => {
	// 	console.log(`useEffect`)
	// 	console.log(datesValidation())
	// 	setFormData({
	// 		...formData,
	// 		work_preference: preferenceRadioBtn,
	// 		had_covid: covidRadioBtn,
	// 		had_covid_at: covidDate,
	// 		vaccinated: vaccinationRadioBtn,
	// 		vaccinated_at: vaccinationDate
	// 	})
	// }, [
	// 	covidRadioBtn,
	// 	covidDate,
	// 	vaccinationRadioBtn,
	// 	vaccinationDate,
	// 	preferenceRadioBtn
	// ])

	// 'checked' radio button validators
	
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
						onChange={() => setFormData({ ...formData, had_covid: true })}
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
						onChange={() => setFormData({ ...formData, had_covid: false })}
					/>
					No
				</label>
			</div>

			{formData.had_covid && (
				<div className='covid-question-container'>
					<span>When?</span>
					<div className='covid-date-input-container'>
						<input
							className='covid-input-date'
							type='text'
							value={formData.had_covid_at}
							onChange={onCovidDateChange}
							onFocus={(e) => (e.target.type = 'date')}
							onBlur={(e) => (e.target.type = 'text')}
							placeholder='Date'
							required={true}
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
						onChange={() => setFormData({ ...formData, vaccinated: true })}
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
						onChange={() => setFormData({ ...formData, vaccinated: false })}
						name='vaccination'
					/>
					No
				</label>
			</div>

			{formData.vaccinated && (
				<div className='covid-question-container'>
					<span>When did you get your last covid vaccine?</span>
					<div className='covid-date-input-container'>
						<input
							className='covid-input-date'
							type='text'
							value={formData.vaccinated_at}
							onChange={onVaccinationDateChange}
							onFocus={(e) => (e.target.type = 'date')}
							onBlur={(e) => (e.target.type = 'text')}
							placeholder='Date'
							required
						/>
						<img src={calendarIcon} alt='calendar icon' />
					</div>
				</div>
			)}
		</div>
	)
}

export default Covid
