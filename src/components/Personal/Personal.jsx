import React, { useState } from 'react'
import { RegexConst } from '../../constants'

function Personal({ formData, setFormData }) {
	const [errorStatus, setErrorStatus] = useState({
		firstNameError: false,
		lastNameError: false,
		emailError: false,
		phoneNumberError: false
	})

	const firstNameHandler = (e) => {
		let input = e.target.value

		if (input.length < 3 && formData.firstName.trim() === '') {
			setErrorStatus({ ...errorStatus, firstNameError: true })
		} else {
			setErrorStatus({ ...errorStatus, firstNameError: false })
		}
		setFormData({ ...formData, firstName: e.target.value })
	}

	const lastNameHandler = (e) => {
		let input = e.target.value

		if (input.length > 2 && input.trim() !== '') {
			setErrorStatus({ ...errorStatus, lastNameError: true })
		} else {
			setErrorStatus({ ...errorStatus, lastNameError: false })
		}
		setFormData({ ...formData, lastName: e.target.value })
	}

	const emailHandler = (e) => {
		let input = e.target.value
		console.log(input)
		console.log(input.match(RegexConst.VALIDATE_EMAIL))

		if (
			!input.toLowerCase().match(RegexConst.VALIDATE_EMAIL) ||
			input.trim() === ''
		) {
			setErrorStatus({ ...errorStatus, emailError: true })
		} else {
			setErrorStatus({ ...errorStatus, emailError: false })
		}
		setFormData({ ...formData, email: e.target.value })
	}

	const phoneNumberHandler = (e) => {
		let input = e.target.value
		if (!input.match(RegexConst.VALIDATE_PHONE_NUMBER)) {
			setErrorStatus({ ...errorStatus, phoneNumberError: true })
		} else {
			setErrorStatus({ ...errorStatus, phoneNumberError: false })
		}
		setFormData({ ...formData, phoneNumber: e.target.value })
	}

	return (
		<div className='personal-container'>
			<input
				type='text'
				placeholder='First Name'
				value={formData.firstName}
				onChange={firstNameHandler}
			/>

			{errorStatus.firstNameError && (
				<label className='error-text'>
					* First name is required & should include 3 or more characters
				</label>
			)}
			<input
				type='text'
				placeholder='Last Name'
				value={formData.lastName}
				onChange={lastNameHandler}
			/>
			{errorStatus.lastNameError && (
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
			{errorStatus.emailError && (
				<label className='error-text'>* Please enter a valid email</label>
			)}
			<input
				type='text'
				placeholder='+995 5______'
				value={formData.phoneNumber}
				onChange={phoneNumberHandler}
			/>
			{errorStatus.phoneNumberError && (
				<label className='error-text'>
					* Please enter a phone number with a format of +995 5********
				</label>
			)}
		</div>
	)
}

export default Personal
