import React, { useState, useEffect } from 'react'

import calendarIcon from './images/calendar.svg'

function Covid({ formData, setFormData }) {
	const [preferenceRadioBtn, setPreferenceRadioBtn] = useState(
		formData.work_preference
	)
	const [covidRadioBtn, setCovidRadioBtn] = useState(formData.had_covid)
	const [vaccinationRadioBtn, setVaccinationRadioBtn] = useState(
		formData.vaccinated
	)
	const [covidDate, setCovidDate] = useState(formData.had_covid_at)
	const [vaccinationDate, setVaccinationDate] = useState(formData.vaccinated_at)

	const preferences = ['from_sairme_office', 'from_home', 'hybrid']

	console.log(`Covid.. formData`, formData)

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

	//if errorCode is 0, covid date is missing, if errorCode=1 vaccinationDate is missing
	const datesValidation = () => {
		let errorCode
		if (covidRadioBtn && covidDate.trim() === '') {
			errorCode = 0
		} else if (vaccinationRadioBtn && vaccinationDate.trim() === '') {
			errorCode = 1
		}
		return errorCode
	}

  //save to form data every change
	useEffect(() => {
		console.log(`useEffect`)
		console.log(datesValidation())
		setFormData({
			...formData,
			work_preference: preferenceRadioBtn,
			had_covid: covidRadioBtn,
			had_covid_at: covidDate,
			vaccinated: vaccinationRadioBtn,
			vaccinated_at: vaccinationDate
		})
	}, [covidRadioBtn, covidDate, vaccinationRadioBtn, vaccinationDate, preferenceRadioBtn])

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
