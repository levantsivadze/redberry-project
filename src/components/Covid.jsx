import { useState } from 'react'
import Pagination from './Pagination'
import calendarIcon from '../utils/images/calendar.svg'

function Covid({ formData, setFormData, page, setPage, formTitles }) {
	const {
		work_preference,
		had_covid,
		had_covid_at,
		vaccinated,
		vaccinated_at
	} = formData

	const preferences = ['from_office', 'from_home', 'hybrid']

	const [errorMessage, setErrorMessage] = useState({
		covid: '',
		vaccine: ''
	})

	console.log(`Covid.. formData`, formData)

	const onPreferenceChange = (e) => {
		setFormData({ ...formData, work_preference: e.target.value })
	}
	const onCovidDateChange = (e) => {
		setErrorMessage('')
		setFormData({ ...formData, had_covid_at: e.target.value })
	}
	const onVaccineDateChange = (e) => {
		setErrorMessage('')
		setFormData({ ...formData, vaccinated_at: e.target.value })
	}

	// 'checked'  Handlers
	const isPreferenceSelected = (value) => work_preference === value
	const isCovidSelected = (value) => had_covid === value
	const isVaccineSelected = (value) => vaccinated === value

	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (had_covid && had_covid_at === '0001-01-01') {
			setErrorMessage({
				...errorMessage,
				covid: 'Date for covid contact is missing'
			})
		} else if (vaccinated && vaccinated_at === '0001-01-01') {
			setErrorMessage({
				...errorMessage,
				vaccine: 'Vaccination date is missing. Please specify the date'
			})
		} else {
			setErrorMessage('')
			setPage((currPage) => currPage + 1)
		}
	}

	return (
		<>
			<form className='covid-container'>
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
							checked={isCovidSelected(true)}
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
							checked={isCovidSelected(false)}
							onChange={() =>
								setFormData({
									...formData,
									had_covid: false,
									had_covid_at: 'NAN'
								})
							}
						/>
						No
					</label>
				</div>

				{had_covid && (
					<div className='covid-question-container'>
						<span>When?</span>
						<div className='covid-date-input-container'>
							<input
								className='covid-input-date'
								type='text'
								value={had_covid_at}
								onChange={onCovidDateChange}
								onFocus={(e) => (e.target.type = 'date')}
								onBlur={(e) => (e.target.type = 'text')}
								placeholder='Date'
								required={true}
							/>
							<img src={calendarIcon} alt='calendar icon' />
						</div>
						{errorMessage.covid && (
							<span className='error-text'>{errorMessage.covid}</span>
						)}
					</div>
				)}

				<div className='covid-question-container'>
					<span>Have you been vaccinated?</span>
					<label>
						<input
							className='input-radio'
							type='radio'
							value={true}
							checked={isVaccineSelected(true)}
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
							checked={isVaccineSelected(false)}
							onChange={() =>
								setFormData({
									...formData,
									vaccinated: false,
									vaccinated_at: 'NAN'
								})
							}
							name='vaccination'
						/>
						No
					</label>
				</div>

				{vaccinated && (
					<div className='covid-question-container'>
						<span>When did you get your last covid vaccine?</span>
						<div className='covid-date-input-container'>
							<input
								className='covid-input-date'
								type='text'
								value={vaccinated_at}
								onChange={onVaccineDateChange}
								onFocus={(e) => (e.target.type = 'date')}
								onBlur={(e) => (e.target.type = 'text')}
								placeholder='Date'
								required
							/>
							<img src={calendarIcon} alt='calendar icon' />
						</div>
						{errorMessage.vaccine && (
							<span className='error-text'>{errorMessage.vaccine}</span>
						)}
					</div>
				)}
			</form>
			<Pagination
				page={page}
				setPage={setPage}
				formTitles={formTitles}
				nextPageHandler={onSubmitHandler}
			/>
		</>
	)
}

export default Covid
