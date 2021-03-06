import React, { useState } from 'react'
import { RegexConst } from '../constants'
import Pagination from './Pagination'
import { validateOnSubmit, validateOnTyping } from '../utils/helpers/validation'

function Personal({ page, setPage, formTitles, formData, setFormData }) {
	const [errorStatus, setErrorStatus] = useState({
		firstNameIsValid: true,
		lastNameIsValid: true,
		emailIsValid: true,
		phoneNumberIsValid: true
	})


	const firstNameHandler = (e) => {
		let input = e.target.value

		validateOnTyping(
			input.length < 3 && input.trim() !== '',
			`firstNameIsValid`,
			errorStatus,
			setErrorStatus
		)
		setFormData({ ...formData, first_name: e.target.value })
	}

	const lastNameHandler = (e) => {
		let input = e.target.value

		validateOnTyping(
			input.length < 3 && input.trim() !== '',
			'lastNameIsValid',
			errorStatus,
			setErrorStatus
		)
		setFormData({ ...formData, last_name: e.target.value })
	}

	const emailHandler = (e) => {
		let input = e.target.value

		const validate =
			!input.toLowerCase().match(RegexConst.VALIDATE_EMAIL) ||
			input.trim() === ''

		validateOnTyping(validate, 'emailIsValid', errorStatus, setErrorStatus)
		setFormData({ ...formData, email: e.target.value })
	}

	const phoneNumberHandler = (e) => {
		let input = e.target.value
		if (!input.match(RegexConst.VALIDATE_PHONE_NUMBER)) {
			setErrorStatus({ ...errorStatus, phoneNumberIsValid: false })
		} else {
			setErrorStatus({ ...errorStatus, phoneNumberIsValid: true })
		}
		setFormData({ ...formData, phone: e.target.value })
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (formData.phone.trim() === '') {
			setFormData({ ...formData, phone: 'NULL' })
		}
		validateOnSubmit(formData, errorStatus, setErrorStatus, setPage)
	}

	return (
		<>
			<div className='personal-container'>
				<input
					type='text'
					placeholder='First Name'
					value={formData.first_name}
					onChange={firstNameHandler}
				/>

				{!errorStatus.firstNameIsValid && (
					<label className='error-text'>
						* First name is required & should include 3 or more characters
					</label>
				)}
				<input
					type='text'
					placeholder='Last Name'
					value={formData.last_name}
					onChange={lastNameHandler}
				/>
				{!errorStatus.lastNameIsValid && (
					<label className='error-text'>
						* Last name should include 3 or more characters
					</label>
				)}
				<input
					type='text'
					placeholder='Email'
					value={formData.email}
					onChange={emailHandler}
				/>
				{!errorStatus.emailIsValid && (
					<label className='error-text'>* Please enter a valid email</label>
				)}
				<input
					type='text'
					placeholder='+995 5______'
					value={formData.phone === 'NULL' ? '' : formData.phone}
					onChange={phoneNumberHandler}
				/>
				{!errorStatus.phoneNumberIsValid && (
					<label className='error-text'>
						* Please enter a phone number with a format of +995 5********
					</label>
				)}
			</div>
			<Pagination
				page={page}
				setPage={setPage}
				formTitles={formTitles}
				nextPageHandler={onSubmitHandler}
			/>
		</>
	)
}

export default Personal
